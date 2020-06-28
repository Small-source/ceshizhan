<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>成就目标定向测评报告</h3>
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
					<!-- <div class="header">
						<h5 class="page_header">
							目录
						</h5>
					</div> -->
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
							<p>成就目标是关于个体追求成就任务的理由，对目标认知的表征，它反映了个体对成就任务的一种内在认知取向，是一个关于目标、胜任、成功、能力和努力的标准的有组织的结构系统。成就目标定向是个体关于成就活动的目的、成功的意义和成功标准的整合的信念系统，具有行为（学习策略、任务选择和学业）、认知（对于情境的认知、成败归因）和情感（焦虑）的特征。成就目标中的目标指的是隐藏在主体成就行为背后的，在任务选择时所表现出来的一种普遍的目的倾向。</p>
							<p>成就目标定向是认知因素被引入成就动机的研究后所产生的概念，它的提出，从概念上揭示出成就动机的另一重要特性即成就动机的认知特点。成就动机是由成就目标激发出的动力因素，具有一定的目标指向性，是个体对于自己认为很重要、有价值的事情而去努力的动力因素。因此，成就目标定向必然包含了个体的认知判断和价值判断，对于目标价值的判断体现出个体成就目标定向的类型。</p>
							<p>Dweck最先提出掌握目标和成绩目标的概念，但他认为掌握目标定向和成绩目标定向不是两个维度，而是同一维度上的两个相对变量。随着研究的不断深入，出现了成就目标定向的二因素理论，并把两种目标定向分别命名为任务卷入（掌握目标定向或学习目标定向）和自我卷入（能力目标定向和成绩目标定向），前者认为学习的目的是为了掌握知识，学习过程中遭遇失败并不能说明自身能力不足。后者认为学习的目的是为了取得好成绩，失败就说明自身能力欠缺。二因素理论认掌握目标定向的作用是积极的，成绩目标定向的作用是消极的。但在实际研究中发现成绩目标定向也可能产生积极的结果，因此又将成绩目标定向分为成绩—接近目标定向和成绩—回避目标定向，与掌握目标定向一起形成了成就目标定向的三因素。</p>
							<p>随着研究的进一步深入，Elliot等人进一步将掌握目标、成绩目标与接近成功动机和回避成功动机两两搭配，形成了四因素成就动机理论模型，分别是掌握—接近目标、掌握—回避目标、成绩—接近目标、成绩—回避目标。</p>
							<p>成就目标定向是产生成就动机的认知因素，对中学生来说，成就目标定向通过影响学习动机，进而影响学生的学习成绩。培养良好的定向方式，对于提高学生学习投入的水平和未来的发展都是十分有意义的。成就目标定向测评可以了解学生的目标定向类型，在此基础上，对不好的目标定向类型加以正确引导，让学生逐步建立良好的定向方式。</p>
						</div>
						<div class="foreword_table">
							<table>
								<tr>
									<td>掌握—趋近目标</td>
									<td>掌握—回避目标</td>
								</tr>
								<tr>
									<td>成绩—趋近目标</td>
									<td>成绩—回避目标</td>
								</tr>
							</table>
						</div>
						<div class="foreword_footer">
							<div class="title">阅读须知：</div>
							<p>①本报告基于您的在线作答结果，通过系统分析您在各个维度的得分水平，从而确定您目前成就目标定向的类型，有针对性地为您提供建议。</p>
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
						<div class="echarts_box" v-if="reportData">
							<div class="title">通过对您的作答结果进行分析，您四个维度的得分如下图所示：</div>
							<div id="echarts" style="width: 740px;height:400px;margin-left: -20px;"></div>
							<p class="fenxi">经过分析，您的成就目标定向类型为：<span>{{reportData.report.studentData.category}}。</span></p>
							<p class="fenxi_detail">
								<span>{{reportData.report.studentData.content}}</span>
							</p>
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
							学习最重要的是掌握知识和提高能力，如果把成绩看得太重或者总想着要比别人考得好，在成绩不好或者考试不如别人时会感受到很大的心理落差，伴随而来的是很多情绪问题。因此，树立正确的目标定向类型是非常重要的，下面给出几个小建议：
						</p>
						<div class="tips_box">
							<h6 class="tips_title">1.培养每天睡觉前回忆所学内容的习惯</h6>
							<p>睡前回忆所学知识是一个非常好的习惯，一是有助于促进记忆，心理学研究发现睡眠具有记忆功能；二是通过回忆，可以发现自己今天所学的知识哪些方面掌握得较好，哪些方面掌握得不好，从而进行有针对性地复习；三也是最重要的一点是可以养成用是否掌握知识点检验学习情况的好习惯，慢慢培养掌握型的学习目标。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">2.培养通过考试成绩分析对各个知识点的掌握情况的习惯</h6>
							<p>中学有很多考试，月考、期中考试以及期末考试等。看到试卷，不仅要关注成绩，更要关注哪道题错了，这道题考的知识点是什么，是不是这道题考的知识点没有很好地掌握，以从而更有针对性地进行复习。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								3.不要因为某一次的成绩不好而苛责自己
							</h6>
							<p>有的时候可能因为情绪或者突发事件导致考试发挥失常，不要因为成绩不好苛责自己，一次两次考得不好并不能说明任何问题。碰到这种情况要多想想这次考试考的知识点自己是不是掌握了，如果知识点都掌握了，考试考的不好是因为情绪等其他原因的话，要学会原谅自己，最重要的是掌握知识和能力，而不是某一次的考试成绩。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								4.确定目标后学会拆分目标
							</h6>
							<p>当我们确定一个目标时，往往会因为目标太大，看不到希望导致自己没有办法坚持下去。所以当我们设定目标时应该把目标拆解成可以执行的、可以达到的、有时间限制的小目标。比如说想要考中南大学的计算机专业，为了达成这个目标，可以把目标分解为高一、高二、高三的阶段目标，再对各个阶段的目标进行细分，最后分解到每个月、每周、每天的目标，一步步地完成最后的目标。</p>
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
			background: url(/imgs/careerManagement/diagnosis/reportCover.png);
			background-size: 900px 1300px;
			.header {
				padding-top: 320px;
				margin-bottom: 50px;
				h3 {
					line-height: 70px;
					font-size: 56px;
					padding-left: 220px;
					// text-align: center;
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
				// padding-top: 480px;
				// padding-left: 40px;
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
						color: #168375;
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
            		assessType: 1
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的成就目标定向测评报告';
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
