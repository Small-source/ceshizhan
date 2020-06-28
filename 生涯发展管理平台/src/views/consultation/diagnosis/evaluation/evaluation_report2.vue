<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>时间管理测评报告</h3>
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
							<div class="page_number">4</div>
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
							<p>古人说过，人生一世，草木一秋，不过几十寒暑，真的令人唏嘘不已，不禁感叹时间如此宝贵，人生如此短暂。对每个人来说，时间都是稀缺资源，因为时间不会重新再来，一寸光阴一寸金，寸金难买寸光阴。人的生命长度是非常有限的，除去睡觉、吃饭和娱乐的时间，学习和工作能真正利用的时间太少了。合理的时间管理是成长之路的一把利器，给人带来思路的改变和想法的转化，让你离成功更近一些。</p>
							<p>时间管理倾向是个体对自己有限的时间进行合理的计划、控制、分配和运用的管理过程，从而使时间的利用效率达到最大，是我们每个人使用时间方式的一种描述，而且所有的时间规划都指向某一特定的任务和目标，伴随着行为倾向，促使我们在一定时间内完成这些任务。我国学者对时间管理倾向概念的科学界定，最早由心理学者黄希庭和张志杰在2001年在国外理论模型基础之上提出，它被定义为“时间管理倾向是一种具有动力性的人格特征，是个体在运用时间方式上表现出来的心理和行为特征，具有多维度多层次的心理结构”。由此可见，时间管理倾向具有个体差异性和稳定性，它在不同个体上有不同的表现，在同一个个体上又具有稳定的表现。</p>
							<p>有研究发现时间管理倾向与消极情绪呈显著负相关，与积极情绪呈显著正相关，且能较好地预测中学生的学习效率。提高时间管理能力有助于提高学生的幸福指数，能较好地平衡个体压力和心理健康之间的关系。时间管理倾向测评分为三个维度，分别是时间价值观、时间监控观和时间效能感。通过时间管理倾向测评，可以发现中学生在时间管理上存在的问题，从而能够更有针对性地展开辅导。</p>
						</div>
						<div class="foreword_footer">
							<div class="title">阅读须知：</div>
							<p>①报告基于您的在线作答结果，通过系统分析您在各个维度的得分水平，有针对性地为您提供建议。</p>
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
						<p class="circle_title">通过对您的作答结果进行分析，您当前的得分如下图所示(每项满分为5分)：</p>
						<div class="circle_box" v-if="reportData">
							<!-- jquery绘制圆环插件 -->
							<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
							<div class="circle circle1" id="circle1">
								<div class="box">
									<p class="box_title">时间价值感</p>
									<p class="num">{{reportData.report.studentData.list['时间价值感'].avgScore}}分</p>
								</div>	
							</div>
							<div class="circle circle2" id="circle2">
								<div class="box">
									<p class="box_title">时间监控观</p>
									<p class="num">{{reportData.report.studentData.list['时间监控观'].avgScore}}分</p>
								</div>
							</div>
							<div class="circle circle3" id="circle3">
								<div class="box">
									<p class="box_title">时间效能感</p>
									<p class="num">{{reportData.report.studentData.list['时间效能感'].avgScore}}分</p>
								</div>
							</div>
						</div>
						<p class="completion" v-if="reportData">
							您的<strong>总平均</strong>分为{{reportData.report.studentData.avgScore}}分，这说明<span>{{reportData.report.studentData.content}}</span>
						</p>
						<p class="resule_header">三个维度的解释如下：</p>
						<div class="echarts_box">
							<p class="title"><span>01</span>时间价值感</p>
							<p class="detail">时间价值感指的是认知层面，是个体对时间功能和价值的稳定态度和观念，包括对个体人生和社会发展意义的稳定态度和信念，通常充满情感。对个体运用时间的方式具有导向作用，是个体时间管理的基础，又可以分为个人取向和社会取向两个小维度。</p>
							<div id="echarts1" style="width: 700px;height:400px;"></div>
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
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">
						第三部分 温馨提示
					</h5>
					<div class="content warmtips" id="catalog_3">
						<p class="warmtips_header">
							对于大多数人来说，智力都是相似的。但是有的人能很好地应用时间管理的方法和技巧，从而提高学习效率，学到更多知识，取得更好的成绩。良好的时间管理对提高学习效率是非常重要的，因此我们要学会有意识地使用时间管理的技巧。以下是一些时间管理的方法：
						</p>
						<div class="tips_box">
							<h6 class="tips_title">1.立即去做</h6>
							<p>有的时候，在做试卷或完成其他学习任务的时候，会担心“我如果做不好怎么办”、“我如果考砸了怎么办”，碰到这种情况，不要过多思考，马上去做。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">2.给每一项任务设定截止时间</h6>
							<p>有人戏称：“Deadline是第一生产力”，这种说法是有一定道理的。有的时候总是把事情往后拖是因为总觉得还有时间去完成，如果能够明确一个截止时间的话，能够帮助我们自己打破这种幻象，产生一定的焦虑感，督促自己快速行动。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								3.学会对任务进行优先级排列，做好学业规划
							</h6>
							<p>美国管理学家科维提出了时间管理“四象限”法，把任务按照重要和紧急两个维度划分为四个“象限”，分别是重要且紧急的任务、重要不紧急的任务、不重要不紧急的任务和紧急但不重要的任务。按照优先级顺序，先处理重要且紧急的任务，再处理重要但不紧急的任务，接着处理紧急但不重要的任务，把不紧急也不重要的任务放到最后。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								4.学会制定计划，合理安排时间
							</h6>
							<p>作为学生，每天要完成很多学习任务，因此制定学习计划是非常重要的。我们应该每天早上安排好一天的学习计划，并对每个任务的完成时间进行合理的规划，两个任务之间要留有机动时间，以防有计划外的任务和安排。</p>
						</div>
						<div class="tips_box">
							<h6 class="tips_title">
								5.早睡早起，规律作息
							</h6>
							<p>充沛的精力是高效完成学习任务的前提，因此为了保证一天的学习任务能够在保证质量的前提下顺利完成，要养成规律作息、早睡早起的好习惯。</p>
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
			background: url(/imgs/careerManagement/diagnosis/reportCover2.png);
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
				color: #199517;
				font-size: 30px;
				text-align: center;
				span {
					color: #199517;
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
							color: #199517;
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
						color: #199517;
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
            		assessType: 2
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的时间管理测评报告';
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
        	let studentData = this.reportData.report.studentData.list;
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
    watch: {
    	reportData() {
    		let reportScoreData = this.reportData.report.studentData.list;
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
    	}
    },
    created() {
    	this.getReport();
    },
    mounted() {
    }
}
</script>
