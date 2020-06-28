<template>
    <!-- 生涯适应力测评 -->
    <div class="test_mains">
    	<div class="header">
    		<h5>生涯适应力测评</h5>
    		<p class="remind"><span>*</span>指导语：在生涯发展中，不同的个体具有不同的优势，我们每个人都有优势和劣势。请按顺序作答，认真回答每一个问题。所有的答案没有对错之分，请根据自身实际想法选择符合自己情况的选项！</p>
    		<!-- <StepBar :step="step_idx"></StepBar> -->
    	</div>
        <div class="content">
            <!-- <h6>请完成以下关于您的<template>{{header[step_idx - 1]}}</template>的题目</h6> -->
        	<Question  :question_data="question_data" :answered="answered"></Question>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.test_mains {
    margin-left: 20px;
	.header {
		position: relative;
		z-index: 2;
		height: 238px;
		background: url(/imgs/wayToStudy/analysis_test/test_banner.png) no-repeat center -30px;
		h5 {
            padding-top: 30px;
			line-height: 70px;
		    color: #338cef;
		    font-size: 22px;
		    font-weight: 600;
            text-align: center;
		    // padding-left: 50px;
		    // background: url(/imgs/wayToStudy/main/icon_title.png) no-repeat 20px center;
		}
		.remind {
			padding-left: 50px;
			span {
				color: red;
				line-height: 22px;
				font-size: 13px;
			}
		}
	}
	.content {
		position: relative;
		min-height: 500px;
		background-color: #fff;
		padding: 20px 45px;
		margin-top: -20px;
        h6 {
            line-height: 70px;
            font-size: 17px;
            text-align: center;
            font-weight: 600;
        }
	}
}
</style>
<script>
// import StepBar from './stepBar.vue';
import Question from './test_question.vue';
export default {
    components: { Question },

    data() {
        return {

            // header: ['生涯关注', '生涯控制','生涯好奇','生涯自信'],
        	// question_all_data: null,
            question_data: null,
            answered: null,
        }
    },
    computed: {

    },
    methods: {
    	// 获取测试题
        getTopicAndOptionsList() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                .post(this.G_uri + '/assessment/getTopicAndOptionsList', {
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.question_data = res.data.data;
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        changeQuestion(num) {

        },
        // 提交测试结果
        goStoreResult() {
            let token = window.sessionStorage.getItem('ymtxToken');
            let _this = this;
            let answer = this.answered;
            let assessType = this.$route.query.question;
            this.$ajax.post(this.G_uri + '/assessment/storeResult', {
                answer: answer
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.data.id == true) {
                        // _this.$router.push('/selfAssessment/main');
                        let {href} = _this.$router.resolve({
                            path: '/selfAssessment/adaptability/testreport'
                        })
                        window.open(href, '_blank');
                        _this.$router.push('/selfAssessment/main');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
    },
    watch: {
        question_data() {
            let answered = [];
            this.question_data.forEach(function(item){
                let obj = {};
                obj.question_num = item.serialNumber;
                obj.answer = '';
                answered.push(obj);
            });
            this.answered = answered;
            console.log(this.answered)
        }
    },
    created() {
    	this.getTopicAndOptionsList();
    },
    mounted() {
    }
}
</script>
