<template>
    <!-- 升学途径分析 -->
    <div class="evaluation_mains">
    	<!-- <div class="header"> -->
    	<!-- 	<h5>升学途径分析</h5>
    		<p class="remind"><span>*</span>为了给您出具合理的升学建议，请您根据您的实际情况认真作答！</p> -->
    		<!-- <StepBar :step="step_idx"></StepBar> -->
    	<!-- </div> -->
        <div class="content">
            <!-- <h6>请完成以下关于您的<template>{{header[step_idx - 1]}}</template>的题目</h6> -->
            <h6>请完成以下关于您的<template>{{question[$route.query.question]}}</template></h6>
        	<Question  :question_data="question_data" :answered="answered" :step_idx="step_idx"></Question>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.evaluation_mains {
    // padding-left: 20px;
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
import Question from './evaluation_question.vue';
export default {
    name: 'evaluation_mains',
    components: { StepBar, Question },
    props: [ 'step' ],
    data() {
        return {
        	step_idx: 1,
            header: ['基本信息', '身体条件','家庭条件','个人能力','个人意愿'],
            question: {
                "1": '成就目标定向测评',
                "2": '时间管理测评',
                "3": '学习动机测评',
                "4": '学习习惯测评',
                "5": '情绪管理测评',
                "6": '人际关系综合诊断测评'
            },
            question_data: null,
            answered: null,
        }
    },
    computed: {

    },
    methods: {
    	// 获取测试题 this.$route.query.question
        // 1:成就目标定向测评  2:时间管理测评  3:学习动机测评
        // 4:学习习惯测评  5:情绪管理测评  6:人际关系综合诊断测评
        getTopicAndOptionsList() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                .post(this.G_uri + '/assessQuestion/getTopicAndOptionsList', {
                    assessType: this.$route.query.question
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.question_data = res.data.data;
                    console.log(_this.question_data,66666)
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        changeQuestion(num) {
            this.step_idx += num;
            var step = this.step_idx;
            var named = this.header[step - 1];
        },
        // 提交测试结果
        goStoreResult() {
            let token = window.sessionStorage.getItem('ymtxToken');
            let _this = this;
            let answer = this.answered;
            let assessType = this.$route.query.question;
            this.$ajax.post(this.G_uri + '/assessQuestion/storeResult', {
                assessType: assessType,
                answer: answer
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        let url = '/consultation/diagnosis/evaluationReport' + assessType;
                        let {href} = _this.$router.resolve({
                            path: url
                        })
                        window.open(href, '_blank');
                        _this.$router.push('/consultation/main');
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
                obj.questionNum = item.id;
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
