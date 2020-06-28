<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>Part4</span>学习状态自我诊断
				</div>
				<h6 class="small_title">学习习惯测评结果</h6>
				<div class="content result" id="catalog_3">
					<p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示(每项满分为5分)：</p>
					<div class="circle_box" v-if="reportData">
						<!-- jquery绘制圆环插件 -->
						<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
						<div class="circle circle1" id="circle41">
							<div class="box">
								<p class="box_title">课前准备</p>
								<p class="num">{{reportData.studentData['课前准备'].avgScore}}分</p>
							</div>	
						</div>
						<div class="circle circle2" id="circle42">
							<div class="box">
								<p class="box_title">课上听课</p>
								<p class="num">{{reportData.studentData['课上听课'].avgScore}}分</p>
							</div>
						</div>
						<div class="circle circle3" id="circle43">
							<div class="box">
								<p class="box_title">课后学习</p>
								<p class="num">{{reportData.studentData['课后学习'].avgScore}}分</p>
							</div>
						</div>
					</div>
					<p class="resule_header">三个维度的得分及解释如下：</p>
					<div class="resule_table" v-if="reportData">
						<ul>
							<li v-for="(value, keey, index) in reportData.studentData" :key="index">
								<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.name}}</span><span>得分：<span class="defen">{{value.avgScore}}</span></span></p>
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
// 引用jquery写的圆环插件
import circleChart from '../../../../../public/statics/js/circleChart.min.js'
export default {
	name: 'pageDiagnosis4',
	components: { },
    props: ['diagnosisData'],
    data() {
        return {
			reportData: this.diagnosisData,
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
			this.$nextTick(() => {
				this.setCircle();
			})
		},
    	setCircle() {
        	// 总
        	// let totalNum = this.totalNum;
        	// 符合
        	let studentData = this.reportData.studentData;
        	let avgScore1 = studentData['课前准备'].avgScore;
        	let avgScore2 = studentData['课上听课'].avgScore;
        	let avgScore3 = studentData['课后学习'].avgScore;
        	// let recommendNum = this.recommendNum;
	       	$("#circle41").circleChart({
	            size: 200,
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
	       	$("#circle42").circleChart({
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
	        $("#circle43").circleChart({
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
    }
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
							color: #6A55DB;
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
		.circle_title {
			line-height: 30px;
			font-weight: 600;
			margin-bottom: 20px;
		}
		.circle_box {
			margin-bottom: 20px;
			display: flex;
			justify-content: space-between;
			width: 800px;
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
					color: #6A55DB;
					font-weight: 600;
				}
			}
		}
	}
</style>