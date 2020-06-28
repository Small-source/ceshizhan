<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<pageCover :name="name" :reportNum="reportNum" :updatedAt="updatedAt"></pageCover>
			<pageList></pageList>
			<pageMessage :selfData="selfData" :score="score" :award="award" :uData="uData" :sData="sData" :career="career"></pageMessage>
			<pageShengxuetujing :fwData="fw"></pageShengxuetujing>
			<pageShengxuejianyi></pageShengxuejianyi>
			<pageDiagnosis1 v-if="diagnosisData1" :diagnosisData="diagnosisData1"></pageDiagnosis1>
			<pageDiagnosis2 v-if="diagnosisData2" :diagnosisData="diagnosisData2"></pageDiagnosis2>
			<pageDiagnosis3 v-if="diagnosisData3" :diagnosisData="diagnosisData3"></pageDiagnosis3>
			<pageDiagnosis4 v-if="diagnosisData4" :diagnosisData="diagnosisData4"></pageDiagnosis4>
			<pageDiagnosis5 v-if="diagnosisData5" :diagnosisData="diagnosisData5"></pageDiagnosis5>
			<pageDiagnosis6 v-if="diagnosisData6" :diagnosisData="diagnosisData6"></pageDiagnosis6>
			<pageDiagnosis7 v-if="diagnosisData7" :diagnosisData="diagnosisData7"></pageDiagnosis7>
			<pageDiagnosis8 v-if="diagnosisData8" :diagnosisData="diagnosisData8"></pageDiagnosis8>
			<pageTishengjianyi></pageTishengjianyi>
			<pageFujian1></pageFujian1>
			<pageFujian2 :usData="usData"></pageFujian2>
		</div>
        <div class="get_pdf">
            <div class="inner">
                <div class="btn_pdf" v-on:click="getPdf(htmlTitle);isDownloading = true;">下载报告</div>
            </div>
        </div>
	</div>
</template>
<style type="text/css" lang='less' scoped>
.evaluation_report {
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #E8E8E8;
	* {
		font-size: 16px;
		color: #333;
	}
	.get_pdf {
		height: 0px;
		width: 100%;
		position: fixed;
		top: 30%;
		.inner {
			width: 900px;
			margin: 0 auto;
			position: relative;
			.btn_pdf {
				position: absolute;
				padding: 5px 10px;
				right: -40px;
				width: 20px;
				text-align: center;
				background-color: #2c8ffc;
				color: #fff;
				cursor: pointer;
				border-radius: 5px;
			}
		}
	}
	.pdf {
		width: 900px;
		margin: 0 auto;
		background-color: #fff;
		.page_shadow{
			-webkit-box-shadow: 0px 0px 10px #666;
			-ms-box-shadow: 0px 0px 10px #666;
			-moz-box-shadow: 0px 0px 10px #666;
			height: 1300px;
			width: 900px;
			margin-bottom: 20px;
		}
		.page_cover {
			height: 1230px;
			padding-top: 70px;
			background: url(/imgs/careerManagement/diagnosis/reportCover.png);
			background-size: 900px 1300px;
			.header {
				padding-top: 320px;
				margin-bottom: 50px;
				h3 {
					line-height: 70px;
					font-size: 56px;
					padding-left: 220px;
					color: #fff;
					margin-bottom: 30px;
				}
				.detail {
					line-height: 30px;
					text-align: center;
					font-size: 24px;
					color: #fff;
				}
			}
			.main {
				height: 246px;
				width: 440px;
				margin: 0 auto;
				p {
					line-height: 60px;
					font-size: 20px;
					font-weight: 600;
					color: #000;
					color: #fff;
				}
			}
			.bottom {
				padding-top: 50px;
				color: #fff;
				p {
					line-height: 30px;
					text-align: center;
					font-size: 16px;
					color: #fff;
				}
			}
		}
		.page {
			height: 1180px;
			padding-top: 120px;
			background: url(/imgs/selfAssessment/report_bg.png) no-repeat;
			background-size: 900px 1300px;
			background-color: #fff;
			position: relative;
			// 大标题
			.header {
				line-height: 50px;
				color: #168375;
				font-size: 30px;
				text-align: center;
				span {
					color: #168375;
    				font-size: 30px;
				}
			}
			.header_detail {
				text-align: center;
				line-height: 60px;
			}

			.big_page_number {
				position: absolute;
				bottom: 0px;
				left: 0px;
				width: 100%;
				line-height: 40px;
				font-size: 20px;
				font-weight: 600;
				color: #666;
				text-align: center;
			}
			.content {
				padding: 30px 100px;
				.big_title_box {
					display: flex;
					line-height: 50px;
					.big_title {
						position: relative;
						padding-left: 70px;
						padding-right: 20px;
						span {
							height: 50px;
							font-size: 24px;
							line-height: 50px;
							text-align: center;
							width: 30px;
							position: absolute;
							left: 0px;
							top:  0px;
							color: #168375;
						}	
						font-size: 20px;
						color: #000;
					}
					.line {
						flex: 1;
						border-top: 1px dashed #000;
						margin: auto 0;
					}
					.page_number {
						padding-left: 10px;
						font-size: 18px;
					}
				}
			}
		}
	}
}
</style>
<script>
import DownloadProgress from '../../../components/DownloadProgress.vue';
import pageCover from './components/pageCover.vue';//封面
import pageList from './components/pageList.vue';//目录
import pageMessage from './components/pageMessage.vue';//1基本信息
import pageShengxuetujing from './components/pageShengxuetujing.vue';//2推荐升学途径
import pageShengxuejianyi from './components/pageShengxuejianyi.vue';//3升学建议
import pageDiagnosis1 from './components/pageDiagnosis1.vue';//4学习状态自我诊断
import pageDiagnosis2 from './components/pageDiagnosis2.vue';//4学习状态自我诊断
import pageDiagnosis3 from './components/pageDiagnosis3.vue';//4学习状态自我诊断
import pageDiagnosis4 from './components/pageDiagnosis4.vue';//4学习状态自我诊断
import pageDiagnosis5 from './components/pageDiagnosis5.vue';//4学习状态自我诊断
import pageDiagnosis6 from './components/pageDiagnosis6.vue';//4学习状态自我诊断
import pageDiagnosis7 from './components/pageDiagnosis7.vue';//4学习状态自我诊断
import pageDiagnosis8 from './components/pageDiagnosis8.vue';//4学习状态自我诊断
import pageTishengjianyi from './components/pageTishengjianyi.vue';//5学业提升建议
import pageFujian1 from './components/pageFujian1.vue';//附件1升学日历
import pageFujian2 from './components/pageFujian2.vue';//附件2目标大学梯度表
export default {
	components: { 
		DownloadProgress,
		pageCover, pageList, pageMessage, pageShengxuetujing, pageShengxuejianyi, 
		pageDiagnosis1, 
		pageDiagnosis2, 
		pageDiagnosis3, 
		pageDiagnosis4, 
		pageDiagnosis5, 
		pageDiagnosis6, 
		pageDiagnosis7, 
		pageDiagnosis8, 
		pageTishengjianyi, pageFujian1, pageFujian2 },
    props: [],
    data() {
        return {
        	totalPages: '',
        	currentPage: '',
        	isDownloading: false,
        	name: '',
        	htmlTitle: '',
        	reportNum: '',
        	updatedAt: '',
        	plan: null,
        	diagnosisData1: null,
        	diagnosisData2: null,
        	diagnosisData3: null,
        	diagnosisData4: null,
        	diagnosisData5: null,
        	diagnosisData6: null,
        	diagnosisData7: null,
        	diagnosisData8: null
        }
    },
    computed: {
    	selfData() {
    		if(this.plan) {
    			return this.plan.self;
    		}
    	},
    	score() {
    		if(this.plan) {
    			return this.plan.score;
    		}
    	},
    	// 获得奖项
    	award() {
    		if(this.plan) {
    			return this.plan.award;
    		}
    	},
    	// 目标大学梯度表
    	us() {
    		if(this.plan) {
    			return this.plan.use;
    		}
    	},
    	// 基本信息 目标院校
    	uData() {
    		if(this.plan) {
    			return this.plan.goal.uData;
    		}
    	},
    	// 基本信息 目标专业
    	sData() {
    		if(this.plan) {
    			return this.plan.goal.sData;
    		}
    	},
    	// 基本信息 生涯测评推荐目标专业
    	career() {
    		if(this.plan) {
    			return this.plan.career.subject;
    		}
    	},
    	// 目标大学梯度表
    	usData() {
    		if(this.plan) {
    			return this.plan.us.data;
    		}
    	},
    	// 推荐升学途径
    	fw() {
    		if(this.plan) {
    			return this.plan.fw.report.recommend;
    		}
    	},

    },
    watch: {
    	plan() {
    		let diagnosisData = this.plan.as.report;
    		diagnosisData.forEach((item) =>{
    			if(item.assessType == 1) {
    				this.diagnosisData1 = item.report;
    			}else if(item.assessType == 2) {
					this.diagnosisData2 = item.report;
    			}else if(item.assessType == 3) {
					this.diagnosisData3 = item.report;
    			}else if(item.assessType == 4) {
					this.diagnosisData4 = item.report;
    			}else if(item.assessType == 5) {
					this.diagnosisData5 = item.report;
    			}else if(item.assessType == 6) {
					this.diagnosisData6 = item.report;
    			}else if(item.assessType == 7) {
					this.diagnosisData7 = item.report;
    			}else if(item.assessType == 8) {
					this.diagnosisData8 = item.report;
    			}
    		})
    	}
    },
    created() {
    	this.getProducedPlanReport();
    },
    mounted() {

    },
    methods: {
        // 升学建议方案 - 获取升学建议方案报告
        getProducedPlanReport(){
            this.$ajax.post(this.G_uri + '/furtherWay/getProducedPlanReport',{
            },{
                headers:{
                    token: window.sessionStorage.getItem('ymtxToken')
                }
            })
            .then((res)=>{
                let data = res.data.data;
                if(res.data.code == 2000) {
                    this.name = data.name;
                    this.htmlTitle = data.name + '的升学建议方案'
                    this.reportNum = data.num;
                    this.updatedAt = data.createdAt;
                    this.plan = data.plan;
                }
                this.$nextTick(()=>{
                	this.setPageNumber();
                })
            })
            .catch((error) => {
                console.log(error);
            }) 
        },
        setPageNumber() {
        	let number = 0;
        	$('.page_index').each(function() {
        		number++;
        		$(this).find('.big_page_number').html(number);
        	})
        }
    }
}
</script>
