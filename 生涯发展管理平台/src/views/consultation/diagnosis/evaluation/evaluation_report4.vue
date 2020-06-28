<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>学习习惯测评报告</h3>
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
						<span>目录</span>
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
						<span>Part1</span>前言
					</h5>
					<div class="content" id="catalog_2">
						<div class="foreword_detail">
							<p>良好的行为习惯是一个人成功的基础，亚里士多德说过，人类的美德分为两类：一是理智的，二是道德的。理智的美德由教学产生和发展，道德的美德由行为习惯而来。习惯养成的重要性，人们有很多真知灼见，“积千累万，不如养成个好习惯”，“习惯影响性格，性格决定命运”。 </p>
							<p>习惯是一种自动化动作，是一种持久、自然的心理行为趋向。学习习惯是在学习过程中经过反复练习形成并发展，成为一种个体需要的自动化学习行为方式。中学生处于身心发展逐渐成熟的时期，此时培养学生良好的学习习惯，对其心智发展具有重要的促进作用。良好学习习惯的养成与当下学习成绩息息相关；有利于激发学生学习的积极性和主动性，形成学习策略，提高学习效率；有利于培养自主学习能力；培养学生的创新精神和创造能力，对学生今后的学习和工作产生深远持久的影响，使学生终身受益。学习习惯量表包括课前准备、课上听课和课后复习三个维度。通过学习习惯测评，可以了解学生在学习习惯上存在的一些具体问题，从而更有针对性地给出一些具体的建议。</p>
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
						<span>Part2</span>测评结果
					</h5>
					<div class="content result" id="catalog_3">
						<p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示(每项满分为5分)：</p>
						<div class="circle_box" v-if="reportData">
							
							<!-- jquery绘制圆环插件 -->
							<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
							<div class="circle circle1" id="circle1">
								<div class="box">
									<p class="box_title">课前准备</p>
									<p class="num">{{reportData.report.studentData['课前准备'].avgScore}}分</p>
								</div>	
							</div>
							<div class="circle circle2" id="circle2">
								<div class="box">
									<p class="box_title">课上听课</p>
									<p class="num">{{reportData.report.studentData['课上听课'].avgScore}}分</p>
								</div>
							</div>
							<div class="circle circle3" id="circle3">
								<div class="box">
									<p class="box_title">课后学习</p>
									<p class="num">{{reportData.report.studentData['课后学习'].avgScore}}分</p>
								</div>
							</div>
						</div>
						<p class="resule_header">三个维度的得分及解释如下：</p>
						<div class="resule_table" v-if="reportData">
							<ul>
								<li v-for="(value, keey, index) in reportData.report.studentData" :key="index">
									<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.name}}</span><span>得分：<span class="defen">{{value.avgScore}}</span></span></p>
									<p class="lis_detail">解释：</p>
									<p class="detail">{{value.content}}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">
						<span>Part3</span>温馨提示
					</h5>
					<div class="content warmtips" id="catalog_3">
						<p class="warmtips_header">
							习惯伴随着人的一生，影响人的生活方式和个人成长的道路。习惯对人极为重要，从某种意义上说，“习惯是人生最大的指导”。良好的学习习惯对学习效率的提升有事半功倍的效果，因此养成良好的学习习惯是非常重要的，以下是几个良好的学习习惯，可以参考使用：
						</p>
						<div class="tips_box">
							<h6 class="tips_title">1.课前预习 </h6>
							<p>凡事预则立，不预则废，学习也是如此，预习是学习中不可或缺的环节。学会预习可以说是学会求知、学会学习的核心。知识的海洋是浩瀚无边的，课堂上学到的知识却是极为有限的。自学是获取知识的主要途径，而预习可以帮助我们提高自学能力，习惯课前预习的学生，总能在学习中处于主动地位并能在学习中获得快乐感和成就感。预习能帮助我们提前了解学习内容，有的放矢，提高课堂学习效率，同时也锻炼了我们的自学能力。文理科的预习方式有所不同，文科类一般先大致阅读全文，分段，掌握框架，标记不懂之处，先尝试自己思考，完成文章思考题，标记自己无法解决的地方等待老师课上解答。理科类先大致掌握课程内容、相关公式，标记不懂的地方，先尝试自己思考，之后做课后练习，将自己无法解决的地方标记出来，等待老师课上解答。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">2. 培养上课认真听讲的习惯</h6>
							<p>古语说得好：一心不能两用。做任何事情都是如此，集中注意力、专心致志就会事半倍。学习更是如此，课堂是我们获取知识、提高能力的重要场所。但有一部分学生往往“身在曹营心在汉”，表面上他们是坐在教室里专心听讲，实则思绪早已“飞到了九霄云外”。对于这种情况，要暗示自己上课认真听讲或者为自己写座右铭，放在课桌上最醒目的位置提醒自己。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								3.课后复习 
							</h6>
							<p>艾宾浩斯曲线告诉我们在学习中的遗忘是有规律的，遗忘的进程很快，并且先快后慢。学得的知识一天后，如不抓紧复习，就只剩下原来的25%。随着时间的推移，遗忘的速度减慢，遗忘的数量也就减少，所以我们要学会及时复习整理归纳。复习可以有多种方法：一是一日一复习，入睡前回顾当天学习内容，有疑惑的次日再寻求帮助；二是一周一总结，每个周末把本周内老师讲过的知识点梳理归纳在一个小本子上；三是绘知识树，每学期以整本教材为内容绘一棵树，每一个单元相当于一个树枝，每一个知识点对应一片树叶，把每个知识点都归纳在一棵树上，增加我们对知识整体性的把握。总之，要养成复习的习惯，就必须有具体的计划、合理的时间安排，还需要持之以恒、善始善终。</p>
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
			background: url(/imgs/careerManagement/diagnosis/reportCover4.png);
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
				color: #6A55DB;
				font-size: 30px;
				text-align: center;
				span {
					color: #6A55DB;
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
							// font-weight: 600;
							text-align: center;
							width: 30px;
							position: absolute;
							left: 0px;
							top:  0px;
							color: #6A55DB;
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
						color: #6A55DB;
						line-height: 30px;
						margin-bottom: 5px;
					}
					p {
						line-height: 30px;
						font-size: 16px;
						color: #333;

					}
				}
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
							color: #6A55DB;
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
            		assessType: 4
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的学习习惯测评报告';
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
        	// 总
        	// let totalNum = this.totalNum;
        	// 符合
        	let studentData = this.reportData.report.studentData;
        	let avgScore1 = studentData['课前准备'].avgScore;
        	let avgScore2 = studentData['课上听课'].avgScore;
        	let avgScore3 = studentData['课后学习'].avgScore;
        	// let recommendNum = this.recommendNum;
	       	$("#circle1").circleChart({
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
    watch: {
    	reportData() {
			this.$nextTick(() => {
				// this.createEcharts();
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
