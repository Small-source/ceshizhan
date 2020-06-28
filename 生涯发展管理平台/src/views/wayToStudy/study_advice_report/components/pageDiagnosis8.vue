<template>
	<div class="page_shadow page_index">
		<div class="page pdf-page">
			<div class="header">
				<span>Part4</span>学习状态自我诊断
			</div>
			<h6 class="small_title">学业归因测评结果</h6>
			<div class="content result" id="catalog_3">
				<div class="echarts_box" v-if="reportData">
					<div class="title" style="margin-bottom: 30px;">通过对您的作答结果进行分析，您当前的得分如下图所示：</div>
					<div id="echarts8" style="width: 820px;height:400px;margin-left: -50px;"></div>
					<p class="fenxi">经过分析，您的归因倾向为：<span v-for="(item, index) in reportData.studentData">{{item.category}} </span></p>
					<p class="fenxi_detail" v-for="(item, index) in reportData.studentData">
						<span>{{item.content}}</span>
					</p>
				</div>
			</div>
			<div class="big_page_number"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageDiagnosis8',
	components: { },
    props: ['diagnosisData'],
    data() {
        return {
			reportData: this.diagnosisData,
			// echarts图表
        	xAxisData: [],
        	seriesData1: [],
        	seriesData2: [],
        }
    },
    watch: {
    	diagnosisData: {
　　　　　　 immediate:true,
		    handler:function(){
		     	this.addCircle();
		    }
    	}
    },
    created() {
    },
    mounted() {

    },
    methods: {
    	addCircle() {
    		console.log( this.reportData)
    		let reportScoreData = this.reportData.reportScoreData;
    		let xAxisData = [];
    		let seriesData1 = [];
    		let seriesData2 = [];

		    let arr = [];
    		let _this = this;
    		for (let key in reportScoreData){

    			let obj = {};
    			xAxisData.push(key);
    			seriesData1.push(reportScoreData[key]['list']['成功归因']['score']);
    			seriesData2.push(reportScoreData[key]['list']['失败归因']['score']);
			}
			this.xAxisData = xAxisData;
			this.seriesData1 = seriesData1;
			this.seriesData2 = seriesData2;
			this.$nextTick(() => {
				this.createEcharts();
			})
    	},
        createEcharts() {
        	// 基于准备好的dom，初始化echarts实例
	        var myChart = this.$echarts.init(document.getElementById('echarts8'));
	        // 指定图表的配置项和数据
	        var option = {
	            // title: {
	            //     text: '维度得分'
	            // },
	            color: ['#5B9BD5', '#ED7D31'],
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    legend: {
			        data: ['成功归因', '失败归因']
			    },
	            xAxis: {
	            	type: 'category',
	                data: this.xAxisData
	                // data: ['能力','努力','情境','运气']
	            },
	            yAxis: {
	            	// max: 5,
	            	splitNumber: 5,
	            	Interval: 1,
	            	type: 'value',

	            },
	            series: [
	            	{
		                name: '成功归因',
		                type: 'bar',
		                data: this.seriesData1,
		                label: {
		                	show: true,
		                	color: '#fff',
		                }
	            	},
	            	{
		                name: '失败归因',
		                type: 'bar',
		                data: this.seriesData2,
		                label: {
		                	show: true,
		                	color: '#fff',
		                }
	            	}
	            ],

	            barCategoryGap: '40%',
	            // color: '#2c8ffc'
	        };

	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
        }	       
    },
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.small_title {
		// padding-top: 20px;
		margin-bottom: 30px;
	}
	.content {
		.resule_header {
			font-size: 16px;
			line-height: 44px;
		}
		.resule_table {
			margin-bottom: 40px;
			ul {
				li {
					margin-bottom: 20px;
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
							color: #C55A11;
						}
					}
					.lis_detail {
						padding-left: 32px;
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
		}
		.echarts_box {	
			.title {
				font-weight: 600;
			}

			.fenxi {
				margin-bottom: 10px;
				span {
					color: #C55A11;
					font-weight: 600;
				}
			}
		}
	}
</style>