<template>
    <!-- 升学途径分析 -->
    <div class="test_mains">
    	<div class="header">
    		<h5>升学途径分析</h5>
    		<p class="remind"><span>*</span>为了给您出具合理的升学建议，请您根据您的实际情况认真作答！</p>
    		<StepBar :step="step_idx"></StepBar>
    	</div>
        <div class="content">
            <h6>请完成以下关于您的<template>{{header[step_idx - 1]}}</template>的题目</h6>
        	<Question  :question_data="question_data" :answered="answered" :step_idx="step_idx"></Question>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.test_mains {
	.header {
		position: relative;
		z-index: 2;
		height: 268px;
		background: url(/imgs/wayToStudy/analysis_test/test_banner.png) no-repeat center center;
		h5 {
			line-height: 60px;
		    color: #338cef;
		    font-size: 16px;
		    font-weight: 600;
		    padding-left: 50px;
		    background: url(/imgs/wayToStudy/main/icon_title.png) no-repeat 20px center;
		}
		.remind {
			padding-left: 50px;
			span {
				color: red;
				line-height: 20px;
				font-size: 13px;
			}
		}
	}
	.content {
		position: relative;
		z-index: 1;
		min-height: 500px;
		background-color: #fff;
		padding: 0px 45px;
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
import StepBar from './stepBar.vue';
import Question from './test_question.vue';
export default {
    components: { StepBar, Question },
    props: [ 'step' ],
    data() {
        return {
        	step_idx: 1,
            header: ['基本信息', '身体条件','家庭条件','个人能力','个人意愿'],
        	question_all_data: null,
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
                .post(this.G_uri + '/furtherWay/getTopicAndOptionsList', {
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	console.log(res)
                    _this.question_all_data = res.data.data;
                	_this.question_data = res.data.data['基本信息'];
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        changeQuestion(num) {
            this.step_idx += num;
            var step = this.step_idx;
            var named = this.header[step - 1];
            this.question_data = this.question_all_data[named];
        },
        // 提交测试结果  
        goStoreResult() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            let answered = this.answered;
            // console.log(answered);
            let answer = [];
            Object.keys(answered).forEach(function(key){
                answer.push(answered[key]);
            });
            this.$ajax.post(this.G_uri + '/furtherWay/storeResult', {
                answer: answer
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.data.id == true) {
                        let {href} = _this.$router.resolve({
                            path: '/wayToStudy/testreport'
                        })
                        window.open(href, '_blank');
                        _this.$router.push('/wayToStudy/main');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },               
    },
    watch: {
        question_all_data() { 
            let question_object = {}
            let question_all_data = this.question_all_data;
            Object.keys(question_all_data).forEach(function(key){
                question_all_data[key].forEach((item) => {
                    let obj = {};
                    obj.questionNum = item.id;
                    obj.showAnswer = '';
                    obj.judgeAnswer = '';
                    // obj.isFinish = false;
                    question_object[item.id] = obj;
                })
            });
            this.answered = question_object;
        }
    },
    created() {
    	this.getTopicAndOptionsList();
    },
    mounted() {
    }
}
</script>