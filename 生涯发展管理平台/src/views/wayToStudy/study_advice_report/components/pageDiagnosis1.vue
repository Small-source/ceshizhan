<template>
	<div class="page_shadow page_index">
		<div class="page pdf-page">
			<h5 class="header">
				<span>Part4</span>学习状态自我诊断
			</h5>
			<h6 class="small_title">成就目标定向测评结果</h6>
			<div class="content result" id="catalog_3">
				<p class="resule_header">成就目标定向测评的各维度及特点如下：</p>
				<div class="resule_table">
					<ul>
						<li>
							<p class="lis_title"><span>01</span>维度: 掌握—趋近目标</p>
							<p class="lis_deatil">特点：关注的是任务掌握、学习和理解；根据自己的进步和提高，以及对任务的理解深度评价自身的表现。</p>
						</li>
						<li>
							<p class="lis_title"><span>02</span>维度: 掌握—回避目标</p>
							<p class="lis_deatil">特点：关注如何避免不理解和没有完成任务；判断成功的标准是在自我比较基础上准确无误地完成任务。</p>
						</li>
						<li>
							<p class="lis_title"><span>03</span>维度: 成绩—趋近目标</p>
							<p class="lis_deatil">特点：关注如何超越他人，表现得自己最聪明、最棒；根据常模标准评价自身，如在班上考得最好。</p>
						</li>
						<li>
							<p class="lis_title"><span>04</span>维度: 成绩—回避目标</p>
							<p class="lis_deatil">特点：关心如何不让自己显得低能，显得比别人笨；根据常模标准来评价自身的表现，如不是班里最差的。</p>
						</li>
					</ul>
				</div>
				<div class="echarts_box">
					<div class="title">通过对您的作答结果进行分析，您四个维度的得分如下图所示：</div>
					<div id="echarts01" style="width: 740px;height:400px;margin-left: -20px;"></div>
					<p class="fenxi">经过分析，您的成就目标定向类型为：<span>{{reportData.studentData.category}}。</span></p>
					<p class="fenxi_detail">
						<span>{{reportData.studentData.content}}</span>
					</p>
				</div>
			</div>
			<div class="big_page_number"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageDiagnosis1',
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
    	addCircle(){
			let reportScoreData = this.reportData.reportScoreData;
    		let xAxisData = [];
    		let seriesData = [];
    		let textStyle = {
		        fontSize: 16,
		        color: '#000'
		    }
    		for (var key in reportScoreData){
    			let obj = {};
    			obj.textStyle = textStyle;
    			obj.value = key;
    			xAxisData.push(obj);
    			seriesData.push(reportScoreData[key].average);
			}
			this.xAxisData = xAxisData;
			this.seriesData = seriesData;
			this.$nextTick(() => {
				this.createEcharts();
			})

    	},
    	createEcharts() {
        	// 基于准备好的dom，初始化echarts实例
	        var myChart = this.$echarts.init(document.getElementById('echarts01'));
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
	                itemStyle: {
			            normal: {
			　　　　　　　　//这里是重点
			                color: function(params) {
			                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
			                    var colorList = ['#71B15B','#2E75B6', '#3E9B7C', '#ECAC5C'];
			                    return colorList[params.dataIndex]
			                }
			            }
			        },
	                label: {
	                	show: true,
	                	color: '#fff',
	                }
	            }],

	            barCategoryGap: '60%',
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
						span {
							display: inline-block;
							width: 26px;
							height: 26px;
							margin-right: 8px;
							line-height: 26px;
							text-align: center;
							border-radius: 50%;
							font-size: 14px;
							color: #fff;
							background-color: #168275;
						}
					}
					.lis_deatil {
						padding-left: 32px;
					}
				}
			}
		}
		.echarts_box {
			.title {
				margin-bottom: 20px;
				font-weight: 600;
			}
			.fenxi {
				margin-bottom: 10px;
				span {
					color: #168375;
					font-weight: 600;
				}
			}
		}
	}
</style>