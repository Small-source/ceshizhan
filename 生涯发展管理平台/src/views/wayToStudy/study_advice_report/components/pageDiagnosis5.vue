<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>Part4</span>学习状态自我诊断
				</div>
				<h6 class="small_title">情绪管理测评结果</h6>
				<div class="content result" id="catalog_3">
					<p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示：</p>
					<div class="circle_box" v-if="reportData">
						<!-- jquery绘制圆环插件 -->
						<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
						<div class="circle" :class="'circle' + (index + 1)" :id="'circle' + (index + 51)" v-for="(item, key, index) in reportData.studentData.list">
							<div class="box">
								<p class="box_title">{{item.name}}</p>
								<p class="num">{{item.score}}分</p>
							</div>	
						</div>
					</div>
					<p class="completion" v-if="reportData">
						您的<strong>总得分</strong>为<span>{{reportData.studentData.totalScore}}</span>分，这说明<span>{{reportData.studentData.content}}</span>
					</p>
					<p class="resule_header">情绪管理各维度解释如下：</p>
					<div class="resule_table">
						<ul>
							<li>
								<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：情绪的感知能力</span></p>
								<p class="lis_detail">解释：</p>
								<p class="detail">根据个人经验觉察自己和他人情绪状态及情绪变化的能力。</p>
							</li>
							<li>
								<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：情绪的表达能力</span></p>
								<p class="lis_detail">解释：</p>
								<p class="detail">能准确表达自身情绪，并能根据别人的情绪反应进行适当的表达和反馈。</p>
							</li>
							<li>
								<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：理解和推理自身情绪的能力</span></p>
								<p class="lis_detail">解释：</p>
								<p class="detail">能明白自身情绪发生的原因和导致的结果，能理解自身不同情绪之间的关系。</p>
							</li>
							<li>
								<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：情绪的感知能力</span></p>
								<p class="lis_detail">解释：</p>
								<p class="detail">根据个人经验觉察自己和他人情绪状态及情绪变化的能力。</p>
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
	name: 'pageDiagnosis5',
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
			this.$nextTick(() => {
				this.setCircle();
			})
    	},
    	setCircle() {
    		// console.log(this.reportData.studentData.list)
        	let studentData = this.reportData.studentData.list;
        	let obj = {};
        	let idx = 0;
        	for(let i in studentData) {
        		idx ++;
        		obj['avgScore' + idx] = studentData[i].score;
        		obj['scoreNum' + idx] = studentData[i].scoreNum;
        	}
	       	$("#circle51").circleChart({
	            size: 180,
	            value: obj.avgScore1/(obj.scoreNum1 * 5 )* 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#2E75B6",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value) + "%");
	            }
	        });
	       	$("#circle52").circleChart({
	            size: 180,
	            value: obj.avgScore2/(obj.scoreNum2 * 5) * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#17787E",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value/100*25) + "/25");
	            }
	        });
	        $("#circle53").circleChart({
	            size: 180,
	            value: obj.avgScore3/(obj.scoreNum3 * 5) * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#A3C066",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value/100*25) + "/25");
	            }
	        });
	        $("#circle54").circleChart({
	            size: 180,
	            value: obj.avgScore4/(obj.scoreNum4 * 5) * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#F4B183",
				backgroundColor: "#EEEEEE",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value/100*25) + "/25");
	            }
	        });
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
		.resule_header {
			font-size: 16px;
			font-weight: 600;
			line-height: 44px;
			margin-bottom: 10px;
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
							color: #DFA606;
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
				color: #DFA656;
				font-weight: 600;
				font-size: 18px;
			}
			span {
				color: #DFA656;
			}
		}
		.circle_title {
			line-height: 30px;
			font-weight: 600;
			margin-bottom: 30px;
		}
		.circle_box {
			width: 800px;
			margin-bottom: 30px;
			display: flex;
			justify-content: space-between;
			.circle {
				position: relative;
				.box {
					position: absolute;
					width: 150px;
					top: 50%;
					left: 50%;
					margin-left: -75px;
					margin-top: -30px;
					.box_title {
						letter-spacing: 1px;
						line-height: 24px;
						font-weight: 600;
						text-align: center;
					}
					.num {
						line-height: 30px;
						font-size: 18px;
						font-weight: 600;
						text-align: center;
					}
				
				}
			}
			.circle1 {
				.box_title {
					
				}
				.num {
					color: #2E75B6;
				}
			}
			.circle2 {
				.box_title {
					
				}
				.num {
					color: #17787E;
				}
			}
			.circle3 {
				.box_title {
					
				}
				.num {
					color: #A3C066;
				}
			}
			.circle4 {
				.box_title {
					
				}
				.num {
					color: #F4B183;
				}
			}
			.title {
				font-weight: 600;
			}

			.fenxi {
				margin-bottom: 10px;
				span {
					color: #DFA606;
					font-weight: 600;
				}
			}
		}
	}
</style>