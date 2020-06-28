<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>人际关系测评报告</h3>
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
						第一部分 前言
					</h5>
					<div class="content" id="catalog_2">
						<div class="foreword_detail">
							<p>20世纪最伟大的心灵导师和成功学大师戴尔·卡耐基说：在一个人成功的因素中，专业知识只占15%，其余的85%则取决于人际关系。人是一种社会性动物，具有群居的倾向。在我们的学习和生活中，不管我们是否愿意，都在有意无意地和周围人发生关系、进行交往。没有人可以完全独立、不和任何人打交道，只活在自己的世界里的人生显然是不现实的。良好的人际关系是事业发展与人生幸福的基石。</p>
							<p>人际关系需要属于社交需要，马斯洛需要层次理论认为生理需要、安全需要、社交需要、尊重需要属于缺失性需要，只有在缺失性需要得到基本满足的前提下，个体才会去追求成长性需要，也就是自我实现的需要。学习需要是自我实现的需要，因此只有在人际关系需要得到基本满足的前提下，个体才会去追求学习需要。因此，对于中学生来说，人际关系是非常重要的。中学生人际关系的好坏会影响学习和生活的各个方面，影响中学生对自我的认知，进而影响学习成绩和心理健康。人际关系综合诊断量表包括交谈、交际与交友、待人接物和与异性交往4个维度。通过人际关系综合诊断量表，发现中学生人际关系中存在的具体问题，从而有针对性地解决中学生的人际关系困扰。</p>
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
						<div class="resule_table">
							<p class="completion">通过对您的作答结果进行分析，您的<span>总得分为{{reportData.report.studentData.totalScore}}分</span>，这说明：<span>{{reportData.report.studentData.content}}</span></p>
							<ul>
								<li v-for="(value, keey, index) in reportData.report.studentData.list" :key="index">
									<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.category}}</span><span>得分：<span class="defen">{{value.score}}</span></span></p>
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
						第三部分 温馨提示
					</h5>
					<div class="content warmtips" id="catalog_3">
						<p class="warmtips_header">
							对中学生来说，人际关系质量的好坏会影响学习和生活的各个方面。因此具有良好的人际关系对中学生是非常重要的，以下是建立良好人际关系的一些小技巧：
						</p>
						<div class="tips_box">
							<h6 class="tips_title">1.学会觉察自己的情绪</h6>
							<p>《人性的弱点》作者卡耐基曾经说过：“一个人的姓名是他个人最熟悉、最甜美、最妙不可言的声音”。在交际中，得到别人好感最简单的方法就是牢记他人的名字。在一个新的场合快速拉近两个朋友之间距离的最好方法，就是记住新朋友的名字。对于刚开始交往而又不太熟悉的朋友，愉快地叫出他的名字，他会倍感亲切。 能够叫出别人的名字，别人对你的关注度就会越高，相反如果你不能叫出别人的名字或者是叫错了，那么你就有可能失去与对方建立连接的机会。</p>
							<p>因此在人际交往的过程中，要有意识地记住别人的名字，在和别人打招呼的时候，可以叫一下对方的名字，有助于拉近彼此之间的关系。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">2.如果对方名字有三个字把姓去掉，直接叫名字。</h6>
							<p>如果一个人的名字是三个字，可以不用叫全名，把姓去掉直接称呼他的名字即可，这样给对方的感觉更加亲切和温暖。比如说“陈小白”，你可以直接叫小白，这样的称呼对方会感觉更加有温度和亲切，像一家人的感觉。当然你在这样叫的同时，一定要注意你的语调和语气，要叫得自然顺畅，大方得体，才不会显得刻意为之和娇柔造作，这样才会更真实，才能得到别人的接受和认可。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								3.保持积极心态与良好的状态
							</h6>
							<p>身体语言和有声语言一样，也有积极肯定与消极否定之分。如果你是积极而且充满自信，人们和你在一起也会感到轻松自信；如果你是消极的，他们也有同样的反应。因此，走路，讲话的方式是很重要的。要有意培养自己良好姿态的意识。当你传达积极的身体信号时，人们就会不由自主地对你做出更好的反应。</p>
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
			background: url(/imgs/careerManagement/diagnosis/reportCover6.jpg);
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
				color: #4F7CBD;
				font-size: 30px;
				text-align: center;
				span {
					color: #4F7CBD;
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
							color: #4F7CBD;
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
						color: #4F7CBD;
						line-height: 30px;
						margin-bottom: 5px;
					}
					p {
						line-height: 30px;
						font-size: 16px;
						color: #333;

					}
				}
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
            		assessType: 6
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的人际关系综合诊断测评报告';
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
    },
    watch: {
    	reportData() {
    		let reportScoreData = this.reportData.report.reportScoreData;
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
			this.$nextTick(() => {
				this.createEcharts();
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
