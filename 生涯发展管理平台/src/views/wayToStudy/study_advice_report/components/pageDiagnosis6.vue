<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>Part4</span>学习状态自我诊断
				</div>
				<h6 class="small_title">人际关系综合诊断测评结果</h6>
				<div class="content result" id="catalog_3">
					<p class="resule_header">人际关系量表各维度解释如下：</p>
					<div class="explanation">
						<ul>
							<li>
								<p class="title">交谈</p>
								<p class="detail">准确表达自己感受和想法以及正确倾听的能力</p>
							</li>
							<li>
								<p class="title">交际与交友</p>
								<p class="detail">在社交场合从容应对以及与陌生人相处的能力</p>
							</li>
							<li>
								<p class="title">待人接物</p>
								<p class="detail">与朋友相处的技巧和机智</p>
							</li>
							<li>
								<p class="title">与异性交往</p>
								<p class="detail">与异性交往的过程中的感受是否愉悦</p>
							</li>
						</ul>
					</div>
					<div class="resule_table" v-if="reportData">
						<p class="completion">通过对您的作答结果进行分析，您的<span>总得分为{{reportData.studentData.totalScore}}分</span>，这说明：<span>{{reportData.studentData.content}}</span></p>
						<ul>
							<li v-for="(value, keey, index) in reportData.studentData.list" :key="index">
								<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.category}}</span><span>得分：<span class="defen">{{value.score}}</span></span></p>
								<p class="lis_detail">解释：</p>
								<p class="detail">{{value.content}}</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="big_page_number"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageDiagnosis6',
	components: { },
    props: ['diagnosisData'],
    data() {
        return {
			reportData: this.diagnosisData
        }
    },
    watch: {
    	diagnosisData: {
　　　　　　 immediate:true,
		    handler:function(){
		     	// this.addCircle();
		    }
    	}
    },
    created() {
    },
    mounted() {
    },
   	methods: {
    	addCircle() {
    		let reportScoreData = this.reportData.reportScoreData;
    		let xAxisData = [];
    		let seriesData = [];
    		let textStyle = {
		        fontSize: 16,
		        color: '#000'
		    }
    		// let _this = this;
    		for (var key in reportScoreData){
    			let obj = {};
    			obj.textStyle = textStyle;
    			obj.value = key;
    			xAxisData.push(obj);
    			seriesData.push(reportScoreData[key].average);
			}
			console.log(xAxisData,7777)
			this.xAxisData = xAxisData;
			this.seriesData = seriesData;
			// this.$nextTick(() => {
			// 	this.createEcharts();
			// })
    	},
        createEcharts() {
        	// 基于准备好的dom，初始化echarts实例
	        var myChart = this.$echarts.init(document.getElementById('echarts'));
	        // 指定图表的配置项和数据
	        var option = {
	            title: {
	                text: '维度得分'
	            },
	            tooltip: {},
	            legend: {
	                data:[]
	            },
	            xAxis: {
	            	type: 'category',
	                data: this.xAxisData
	            },
	            yAxis: {
	            	max: 5,
	            	splitNumber: 5,
	            	Interval: 1,
	            	type: 'value',

	            },
	            series: [{
	                name: '维度分析',
	                type: 'bar',
	                data: this.seriesData,
	                label: {
	                	show: true,
	                	color: '#fff',
	                }
	            }],

	            barCategoryGap: '40%',
	            color: '#2c8ffc'
	        };

	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
        }
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.small_title {
		margin-bottom: 20px;
	}
	.content {
		.explanation {
			margin-bottom: 30px;
			ul {
				li {
					display: flex;
					margin-bottom: 20px;
					line-height: 50px;
					border: 1px solid #eee;
					.title {
						color: #fff;
						width: 130px;
						padding-left:30px;
					}
					.detail {
						padding-left:30px;
					}
					&:nth-child(1) {
						.title {
							background-color: #2E75B6;
						}
					}
					&:nth-child(2) {
						.title {
							background-color: #4C92C0;
						}
					}
					&:nth-child(3) {
						.title {
							background-color: #A3C066;
						}
					}
					&:nth-child(4) {
						.title {
							background-color: #F4B183;
						}
					}
				}
			}
		}
		.resule_header {
			font-size: 16px;
			line-height: 44px;
			font-weight: 600;
			margin-bottom: 10px;
		}
		.resule_table {
			margin-bottom: 40px;
			.completion {
				letter-spacing: 1px;
				line-height: 30px;
				font-weight: 600;
				margin-bottom: 20px;
				span {
					color: #4F7CBD;
				}
			}
			ul {
				li {
					margin-bottom: 30px;
					.lis_title {
						line-height: 26px;
						margin-bottom: 5px;
						font-weight: 600;
						display: flex;
						align-items: center;
						.color_box {
							display: inline-block;
							width: 25px;
							height: 16px;
							margin-right: 5px;
							line-height: 26px;
							background-color: #71B15B;
						}
						.weidu {
							margin-right: 30px;
						}
						.defen {
							color: #4F7CBD;

						}
					}
					.lis_detail {
						padding-left: 32px;
						margin-bottom: 5px;
						font-weight: 600;
					}
					.detail {
						padding-left: 32px;
					}	
					&:nth-child(1) {
						.color_box {
							background-color: #71B15B;
						}
					}
					&:nth-child(2) {
						.color_box {
							background-color: #2E75B6;
						}
					}
					&:nth-child(3) {
						.color_box {
							background-color: #3E9B7C;
						}
					}
					&:nth-child(4) {
						.color_box {
							background-color: #ECAC5C;
						}
					}
				}
			}
			// table {
			// 	tr {
			// 		th {
			// 			line-height: 40px;
			// 			background-color: #2c8ffc;
			// 			color: #fff;
			// 			text-align: center;
			// 			border: 1px solid #efefef;
			// 			&:first-child {
			// 				width: 40%;
			// 			}
			// 		}
			// 		td {
			// 			padding: 10px;
			// 			font-size: 16px;
			// 			line-height: 24px;
			// 			border: 1px solid #efefef;
			// 			&:first-child {
			// 				font-weight: 600;
			// 				text-align: center;
			// 			}
			// 		}
			// 	}
			// }
		}
		.echarts_box {
			.title {
				font-weight: 600;
			}
			.fenxi {
				margin-bottom: 10px;
				span {
					color: #4F7CBD;
					font-weight: 600;
				}
			}
		}
	}
</style>