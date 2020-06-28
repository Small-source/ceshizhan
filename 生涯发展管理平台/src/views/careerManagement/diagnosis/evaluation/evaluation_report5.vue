<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>情绪管理测评报告</h3>
						<p class="detail">[ 个人报告 ]</p>
					</div>
					<div class="main" v-if="reportData">
						<p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{reportData.name}}</p>
						<p>报告编号：{{reportData.reportNum}}</p>
						<p>报告时间：{{reportData.updatedAt}}</p>
					</div>
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">
						目录
					</h5>
					<div class="content" id="catalog_1">
						<div class="big_title_box" @click="scrollToView('page1')">
							<div class="big_title"><span>Part1</span>前言</div>
							<div class="line"></div>
							<div class="page_number">1</div>
						</div>
						<div class="big_title_box" @click="scrollToView('page2')">
							<p class="big_title"><span>Part2</span>测评结果</p>
							<div class="line"></div>
							<div class="page_number">2</div>
						</div>
						<div class="big_title_box" @click="scrollToView('page3')">
							<p class="big_title"><span>Part3</span>温馨提示</p>
							<div class="line"></div>
							<div class="page_number">3</div>
						</div>
					</div>
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">
						第一部分 前言
					</h5>
					<div class="content" id="catalog_2">
						<div class="foreword_detail">
							<p>情绪是个体对外部世界的一种主观体验，对个体的身心健康发挥着重要的作用。有人说“成功等于百分之八十的情商加百分之二十的智商。”这说明情商也就是情绪管理是非常重要的。情绪管理是在了解自己情绪特征的基础上，有意识地培养健康积极的情绪体验，建立科学的情绪宣泄和调控机制，自觉地克服和消除负面情绪的影响，保持积极的人生态度。情绪是个体对外部世界的一种主观体验，对个体的身心健康发挥着重要的作用。有人说“成功等于百分之八十的情商加百分之二十的智商。”这说明情商也就是情绪管理是非常重要的。情绪管理是在了解自己情绪特征的基础上，有意识地培养健康积极的情绪体验，建立科学的情绪宣泄和调控机制，自觉地克服和消除负面情绪的影响，保持积极的人生态度。</p>
							<p>中学生处于青春期，是从幼稚到成熟过渡的关键期，呈现出成人感与幼稚性、独立感与依赖性多方面的矛盾。一方面，中学生中学生独立意识和自主意识增强，渴望得到信任、尊重与认同，想摆脱父母、老师等对其思想、行为上的限制与约束；另一方面，社会经验和生活能力不足，思维意识简单、片面，情绪具有冲动性、多变性而认知、调节和控制能力较弱。而情绪是心理的核心动力系统，它对其他心理活动具有组织、调控作用。情绪管理能力与心理健康水平相关，将影响中学生性格塑造。因此对于中学生来说做好情绪管理是非常重要的。</p>
							<p>正面情绪能带来积极愉快的体验，有利于激发中学生的学习兴趣和积极性，挖掘学习潜能，促进学习成绩提高；负面情绪则会挫伤学习热情，有损学习效能，体现在心理素质差、考前焦虑、自暴自弃等方面。中学生学习任务重，同辈群体竞争大，易表现出抑郁、厌学等消极情绪。这些情绪将会损害学生的自尊心和自信心，影响他们正常学习生活，。因此，中学生需要增强自我认同感和自我积极暗示，提高情绪管理能力、受挫承受力和抗压能力，调节学业情绪。以健康平和的心态激发学习积极性，促进学习效能提高。</p>
							<p>情绪管理测评包括情绪的感知能力、情绪的表达能力、理解和推理自身情绪的能力、理解和推理他人情绪的能力四个维度。通过情绪管理测评，可以发现中学生在情绪管理上存在的问题，从而能够更有针对性地展开辅导。</p>
						</div>
						<div class="foreword_footer">
							<div class="title">阅读须知：</div>
							<p>①本报告基于您的在线作答结果，通过系统分析您在各个维度的得分水平，有针对性地为您提供建议。</p>
							<p>②测评结果的准确性和可靠性主要依赖于您是否对自己有明确客观的认识，以及在测评过程中是否认真和坦白等。</p>
						</div>
					</div>
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">
						第二部分 测评结果
					</h5>
					<div class="content result" id="catalog_3">
						<p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示：</p>
						<div class="circle_box" v-if="reportData">
							<!-- jquery绘制圆环插件 -->
							<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
							<div class="circle" :class="'circle' + (index + 1)" :id="'circle' + (index + 1)" v-for="(item, key, index) in reportData.report.studentData.list">
								<div class="box">
									<p class="box_title">{{item.name}}</p>
									<p class="num">{{item.score}}分</p>
								</div>	
							</div>
						</div>
						<p class="completion" v-if="reportData">
							您的<strong>总得分</strong>为<span>{{reportData.report.studentData.totalScore}}</span>分，这说明<span>{{reportData.report.studentData.content}}</span>
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
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">
						第三部分 温馨提示
					</h5>
					<div class="content warmtips" id="catalog_3">
						<p class="warmtips_header">
							中学生做好情绪管理，有助于学习效率的提升。以下是一些情绪管理的小建议：
						</p>
						<div class="tips_box">
							<h6 class="tips_title">1.学会觉察自己的情绪</h6>
							<p>觉察情绪是管理情绪的第一步，首先要觉察自己的情绪是什么样的，比如说愤怒、悲伤、快乐等。要学会觉察自己的负性情绪，并提醒自己这个时候是不理智的，这个时候做决定是有问题的。我们经常会碰到这样的情况，在脾气冲动时做了决定，事后又非常后悔。因此，以后出现负面情绪时，要有意识地提醒自己现在是不理智的，应该先冷静下来再做决定。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">2.通过与不合理信念辩论调节自己的情绪 </h6>
							<p>在觉察到自己的负性情绪的基础上，要学会调节自己的负性情绪。情绪ABC理论认为个体出现负性情绪不是由于事件本身，而是由于对事件的不合理信念。因此在自己出现负性情绪时，可以通过与不合理信念辩论的方式调节自己的情绪。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								3.建立合理的宣泄渠道 
							</h6>
							<p><span>01</span>深呼吸：走出房间面对自然深吸一口气，让新鲜空气充满胸腔，然后缓缓呼出，感觉所有的烦恼随着这口呼气，缓缓地离开你的身体。按照这个节奏进行5~10次。</p>
							<p><span>02</span>运动：散步、跑步、骑自行车、打篮球等，运动可以帮你更好地唤醒身体，让全身处于兴奋状态，同时切换思维，培养自己的专注力，运动后的疲劳可以让身体更好地休息。</p>
							<p><span>03</span>做其他让自己放松的事：听歌唱歌、看书看电影、睡觉晒太阳，让身心完全放松，帮自己积攒能量。放松时就专注于放松，全身心沉浸，不去担心学习或者其他事。（当然，需要在其他学习活动安排好、不影响的情况下）</p>
							<p><span>04</span>营造舒适环境：让房间保持舒适温度，按自己的喜好布置桌面房间，穿喜欢的衣服等。一个舒适的环境可以帮助自己在学习过程中更加清新，从而更好投入其中不受干扰。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								4.利用自己的黄金时间完成重点难点任务 
							</h6>
							<p>每个人每天的精力状况不同，有的人可能早上精力比较好，有的人中午精力较好，有的人晚上效率高。因此我们要根据自己的精力状况安排不同的学习内容，将重点难点内容安排在每天精力最好的时间段进行学习。</p>
						</div>
					</div>
				</div>
			</div>
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
			background: url(/imgs/careerManagement/diagnosis/reportCover5.png);
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
				color: #DFA606;
				font-size: 30px;
				text-align: center;
				span {
					color: #DFA606;
    				font-size: 30px;
				}
			}
			.header_detail {
				text-align: center;
				line-height: 60px;
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
							color: #DFA606;
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
				.foreword_detail {
					p {
						line-height: 24px;
						text-indent: 2em;
						font-size: 16px;
						color: #333;
						margin-bottom: 10px;
					}
				}
				.foreword_table {
					padding-top: 20px;
					margin-bottom: 30px;
					table {
						width: 600px;
						margin: 0 auto;
						tr {
							td {
								line-height: 50px;
								font-size: 18px;
								text-align: center;
								border: 2px solid #fff;
								color: #168275;
								background-color: #CCE4E1;
							}
						}
					}
				}
				.foreword_footer {
					.title {
						font-size: 18px;
						font-weight: 600;
						line-height: 40px;
					}
					p {
						line-height: 24px;
						font-size: 16px;
						margin-bottom: 5px;
					}
				}
				.warmtips_header {
					font-size: 16px;
					line-height: 24px;
					margin-bottom: 20px;
				}
				.tips_box {
					margin-bottom: 30px;
					.tips_title {
						font-size: 18px;
						color: #DFA606;
						line-height: 30px;
						margin-bottom: 5px;
					}
					p {
						line-height: 30px;
						font-size: 16px;
						color: #333;
						padding-left: 35px;
						position: relative;
						span {
							width: 22px;
							height: 22px;
							text-align: center;
							line-height: 24px;
							border-radius: 50%;
							background-color: #DFA606;
							color: #fff;
							font-size: 14px;
							position: absolute;
							left: 0;
							top: 4px;
						}
					}
				}
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
					margin-left: -50px;
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
		}
	}
}
</style>
<script>
import DownloadProgress from '../../../../components/DownloadProgress.vue';
// 引用jquery写的圆环插件
import circleChart from '../../../../../public/statics/js/circleChart.min.js'
export default {
	components: { DownloadProgress },
    props: [],
    data() {
        return {
        	isDownloading: false, //是否正在下载
            totalPages: 1, //总页数
            currentPage: 0,//当前页
        	htmlTitle: '',
        	reportData: null,
        	// echarts图表
        	xAxisData: [],
        	seriesData: [],
        }
    },
    methods: {
    	// 获取测试结果
        getReport() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            var id = this.$route.query.id;
            this.$ajax.post(this.G_uri + '/assessQuestion/getReport', {
            		id: id,
            		assessType: 5
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的情绪管理测评报告';
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        goDetail(url) {
            let {href} = this.$router.resolve({
                path: url
            })
            window.open(href, '_blank');
        },
        scrollToView(id) {
            document.getElementById(id).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            })
        },
        setCircle() {
        	let studentData = this.reportData.report.studentData.list;
        	let obj = {};
        	let idx = 0;
        	for(let i in studentData) {
        		idx ++;
        		obj['avgScore' + idx] = studentData[i].score;
        		obj['scoreNum' + idx] = studentData[i].scoreNum;
        	}
	       	$("#circle1").circleChart({
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
	       	$("#circle2").circleChart({
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
	        $("#circle3").circleChart({
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
	        $("#circle4").circleChart({
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
    },
    watch: {
    	reportData() {
			this.$nextTick(() => {
				this.setCircle();
			})
    	}
    },
    created() {
    	this.getReport();
    },
    mounted() {
    }
}
</script>
