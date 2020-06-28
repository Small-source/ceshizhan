<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>Part4</span>学习状态自我诊断
				</div>
				<h6 class="small_title">时间管理测评结果</h6>
				<div class="content result" id="catalog_3">
					<p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示(每项满分为5分)：</p>
					<div class="circle_box" v-if="reportData">
						<!-- jquery绘制圆环插件 -->
						<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
						<div class="circle circle1" id="circle1">
							<div class="box">
								<p class="box_title">时间价值感</p>
								<p class="num">{{reportData.studentData.list['时间价值感'].avgScore}}分</p>
							</div>	
						</div>
						<div class="circle circle2" id="circle2">
							<div class="box">
								<p class="box_title">时间监控观</p>
								<p class="num">{{reportData.studentData.list['时间监控观'].avgScore}}分</p>
							</div>
						</div>
						<div class="circle circle3" id="circle3">
							<div class="box">
								<p class="box_title">时间效能感</p>
								<p class="num">{{reportData.studentData.list['时间效能感'].avgScore}}分</p>
							</div>
						</div>
					</div>
					<p class="completion" v-if="reportData">
						您的<strong>总平均</strong>分为{{reportData.studentData.avgScore}}分，这说明<span>{{reportData.studentData.content}}</span>
					</p>
					<p class="resule_header">三个维度的解释如下：</p>
					<div class="echarts_box">
						<p class="title"><span>01</span>时间价值感</p>
						<p class="detail">时间价值感指的是认知层面，是个体对时间功能和价值的稳定态度和观念，包括对个体人生和社会发展意义的稳定态度和信念，通常充满情感。对个体运用时间的方式具有导向作用，是个体时间管理的基础，又可以分为个人取向和社会取向两个小维度。</p>
						<div id="echarts1" style="width: 700px;height:400px;"></div>
					</div>
				</div>
				<div class="big_page_number"></div>
			</div>
		</div>
		<div class="page_shadow">
			<div class="page pdf-page">
				<h6 class="small_title">时间管理测评结果</h6>
				<div class="content result" id="catalog_3">
					<div class="echarts_box">
						<p class="title"><span>02</span>时间监控观</p>
						<p class="detail">时间监控观是行为层面，指的是个体利用和运筹时间的观念和能力，通过一系列的外显活动体现，可以分为设置目标、计划性、优先级、反馈性、时间分配五个小维度。</p>
						<div id="echarts2" style="width: 700px;height:400px;"></div>
					</div>
					<div class="echarts_box">
						<p class="title"><span>03</span>时间效能感</p>
						<p class="detail">时间效能感是个体对自己利用和运筹时间的信念和预期，反映个体对时间管理的信心和对自己时间管理行为能力的估计，是制约时间监控的一个重要因素。可以分为管理行为效能和管理效能两个分维度。</p>
						<div id="echarts3" style="width: 700px;height:400px;"></div>
					</div>
				</div>
				<div class="big_page_number"></div>
			</div>
		</div>
	</div>
</template>
<script>
// 引用jquery写的圆环插件
import circleChart from '../../../../../public/statics/js/circleChart.min.js'
export default {
	name: 'pageDiagnosis2',
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
    		console.log(this.reportData)
    		let reportScoreData = this.reportData.studentData.list;
    		let textStyle = {
		        fontSize: 16,
		        color: '#000'
		    }
		    let idx = 0;
		    let el = 'echarts';
    		for (var key in reportScoreData){
    			idx ++;
    			let el = 'echarts' + idx;
    			let xAxisData = [];
    			let seriesData = [];
    			for (var item in reportScoreData[key].list){ 
    				let obj = {};
    				obj.value = item;
    				obj.textStyle = textStyle;
    				xAxisData.push(obj);
    				seriesData.push(reportScoreData[key].list[item].avgScore);
    			}
    			this.$nextTick(() => {
	    			this.createEcharts(el,xAxisData, seriesData);
				})	
			}
			this.$nextTick(() => {
				this.setCircle();
			})
    	},
    	createEcharts(el, xAxisData, seriesData) {
        	var el = el;
        	var xAxisData = xAxisData;
        	var seriesData = seriesData;
        	// 基于准备好的dom，初始化echarts实例
	        var myChart = this.$echarts.init(document.getElementById(el));
	        // 指定图表的配置项和数据
	        var option = {
	            title: {
	                // text: '维度得分'
	            },
	            tooltip: {},
	            legend: {
	                data:[]
	            },
	            xAxis: {
	            	type: 'category',
	                data: xAxisData
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
	                data: seriesData,
	                itemStyle: {
			            normal: {
			　　　　　　　　//这里是重点
			                color: function(params) {
			                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
			                    var colorList = ['#71B15B','#2E75B6', '#2E75B6', '#3E9B7C', '#ECAC5C'];
			                    return colorList[params.dataIndex]
			                }
			            }
			        },
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
        },
        setCircle() {
        	let studentData = this.reportData.studentData.list;
        	let avgScore1 = studentData['时间价值感'].avgScore;
        	let avgScore2 = studentData['时间监控观'].avgScore;
        	let avgScore3 = studentData['时间效能感'].avgScore;
	       	$("#circle1").circleChart({
	            size: 200,
	            // widthRatio: 0.3,
	            value: avgScore1/5 * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#1A8779",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value) + "%");
	            }
	        });
	       	$("#circle2").circleChart({
	            size: 200,
	            value: avgScore2/5 * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#F19149",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value/100*25) + "/25");
	            }
	        });
	        $("#circle3").circleChart({
	            size: 200,
	            value: avgScore3/5 * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#056C9E",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value/100*25) + "/25");
	            }
	        });
        },
    },
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.small_title {
		margin-bottom: 20px;
	}
	.content {
		.resule_header {
			font-size: 16px;
			font-weight: 600;
			line-height: 44px;
		}
		.resule_table {
			margin-bottom: 40px;
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
							color: #199517;
						}
					}
					.lis_detail {
						margin-bottom: 5px;
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
		.completion {
			letter-spacing: 1px;
			line-height: 30px;
			font-weight: 600;
			margin-bottom: 40px;
			strong {
				color: #199517;
				font-weight: 600;
				font-size: 18px;
			}
			span {
				color: #199517;
			}
		}
		.circle_title {
			line-height: 30px;
			font-weight: 600;
			margin-bottom: 20px;
		}
		.circle_box {
			margin-bottom: 20px;
			display: flex;
			justify-content: space-between;
			.circle {
				position: relative;
				.box {
					position: absolute;
					width: 200px;
					text-align: center;
					top: 50%;
					margin-top: -30px;
					.box_title {
						letter-spacing: 1px;
						line-height: 30px;
						font-weight: 600;
					}
					.num {
						line-height: 30px;
						font-size: 18px;
						font-weight: 600;
					}
				
				}
			}
			.circle1 {
				.box_title {
					
				}
				.num {
					color: #1A8779;
				}
			}
			.circle2 {
				.box_title {
					
				}
				.num {
					color: #F19149;
				}
			}
			.circle3 {
				.box_title {
					
				}
				.num {
					color: #056C9E;
				}
			}
			.title {
				font-weight: 600;
			}

			.fenxi {
				margin-bottom: 10px;
				span {
					color: #199517;
					font-weight: 600;
				}
			}
		}
		.echarts_box {
			.title {
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				span {
					width: 24px;
					height: 24px;
					color: #fff;
					font-size: 14px;
					margin-right: 5px;
					line-height: 24px;
					text-align: center;
					border-radius: 50%;
					background-color: #199517;
				}
			}
			.detail {
				padding-left: 30px;
				margin-bottom: 30px;
			}
		}
	}

</style>