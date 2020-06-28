<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>学习动机测评报告</h3>
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
						第一部分 前言
					</h5>
					<div class="content" id="catalog_2">
						<div class="foreword_detail">
							<p>学习动机是指引发与维持学生的学习行为，并使之指向一定学业目标的一种动力倾向。根据不同的来源可以将学习动机分为内源性动机和外源性动机，内源性动机指由个体内在兴趣、好奇心或成就需要等内部原因引起的动机；外源性动机指由外在的奖惩或害怕考试不及格等活动之外的原因激起的动机。学习动机在教育心理学中是非常重要的一部分内容，不同心理学家从不同角度对学习动机进行了阐释，主要包括强化理论、归因理论、需要层次理论、成就动机理论、自我价值理论、自我效能感理论等。</p>
							<p>心理学研究发现学习动机和学习效率、学习成绩直接相关。中等程度学习动机的学生学习效率最高，学习动机过低过高都会影响学生的学习效率，学习动机过低，学习积极性不高，懒懒散散、没有目标；学习动机过高，过分看重成绩和是否超过别人，情绪波动起伏较大，都不利于学习效率的提高。</p>
							<p>学习动机测评包括四个维度，分别是学习动机太弱、学习动机太强、学习兴趣和学习目标。通过学习动机测评可以发现学生在学习动机上存在的具体问题，从而有针对性地提供个性化的辅导方案。</p>
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
						<div class="echarts_box" v-if="reportData">
							<div class="title">通过对您的作答结果进行分析，您当前的得分如下图所示：</div>
							<div id="echarts" style="width: 820px;height:400px;margin-left: -50px;"></div>
						</div>
						<p class="resule_header" style="font-weight: 600;">您在各个维度上的得分和解释如下：</p>
						<div class="resule_table" v-if="reportData">
							<ul>
								<li v-for="(value, keey, index) in reportData.report.studentData.list" :key="index">
									<p class="lis_title"><span class="color_box"></span><span class="weidu">维度：{{value.category}}</span><span>得分：<span class="defen">{{value.score}}</span></span></p>
									<p class="lis_detail">解释</p>
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
							学习动机与学习效率直接相关，中等程度的学习动机学生的学习效率是最高的，学习动机过低或过高都会影响学习效率，因此矫正学生不合理的学习动机帮助学生建立对学习动机的合理信念是非常重要的。以下是一些建议：
						</p>
						<div class="tips_box" v-for="(item, index) in endData" :key="index" v-if="index < 6">
							<h6 class="tips_title"><span>{{index + 1}}</span>、{{item.title}}</h6>
							<p>{{item.detail}}</p>
						</div>
						<p style="font-size: 20px;font-weight: 600;" v-if="endData.length == 0">您在学习动机的四个维度学习动机太弱、学习动机太强、学习兴趣和学习目标上没有任何困扰，这说明您目前的学习动机非常好，没有任何问题，请继续保持。	</p>
					</div>
				</div>
			</div>
			<div class="page_shadow" v-if="endData.length > 6">
				<div class="page pdf-page">
					<h5 class="header">
					</h5>
					<div class="content warmtips" id="catalog_4">
						<div class="tips_box" v-for="(item, index) in endData" :key="index" v-if="index > 5">
							<h6 class="tips_title"><span>{{index + 1}}</span>、{{item.title}}</h6>
							<p>{{item.detail}}</p>
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
			background: url(/imgs/careerManagement/diagnosis/reportCover3.png);
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
				color: #C55A11;
				font-size: 30px;
				text-align: center;
				span {
					color: #C55A11;
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
							color: #C55A11;
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
						color: #C55A11;
						line-height: 30px;
						margin-bottom: 5px;
						span {
							color: #C55A11;
							font-size: 20px;
						}
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
        	detail: {
        		'学习动机太弱': '您在学习动机太弱这个维度上没有困扰，对学习非常有兴趣，学习积极性非常高，完成作业非常积极。',
        		'学习动机太强': '您在学习动机太强这个维度上没有困扰，对目前的学习效果和考试成绩非常满意。',
        		'学习兴趣': '您对学习非常有兴趣，喜欢学习的过程，能在学习过程中感受到快乐，能享受到学习成功带来的乐趣。',
        		'学习目标': '您能独立制定合理的学习目标，按照目标制定学习计划，并能非常好地完成每天的学习任务以及目标。',
        	},
        	tips: {
        		'学习动机太弱': [
        			{ 
        				title: '学会主动思考学习的意义和价值',
        				detail: '学习的意义重大，学习是人类进步的阶梯，学习是永不磨灭的主题。通过学习能掌握许多知识，学习是人类区别于动物的主要标志，也是人类作为高等动物的主要象征，没有学习人类就会停滞不前，就会没有进步和发展。学习对于任何人来说都是非常重要的，学会思考学习的意义和价值。'
        			},
        			{ 
        				title: '规律作息，保证睡眠时间',
        				detail: '只有保证充足的睡眠，我们才能进行正常的学习和工作。睡眠时间过短或者作息不规律，会严重影响白天的学习效率。因此要想在白天学习时有较好的状态，要注意保证充足的睡眠和规律的作息。'
        			},
        			{ 
        				title: '参加课外活动，增强体育锻炼',
        				detail: '经常会碰到这样的情况，有的时候想要学习，但是发现自己精力不济，没有精神，不能集中注意力，这可能是因为平时锻炼太少，导致身体处于亚健康状态。体育锻炼不仅能增强体魄，还能让人精力更加充沛。可以在学习之余做一些体育锻炼，打篮球、爬山、跑步等等。'
        			}
        		],
        		'学习动机太强': [
        			{ 
        				title: '学会制定合理的目标，以掌握知识为主',
        				detail: '学习最重要的目的是掌握知识和提高能力，而不仅仅是取得好的成绩或者超过别人。好成绩不是目的，掌握知识才是目的，因此在制定目标的时候，应该制定掌握型目标，比如说“我要学会这个知识点”、“我要把这些单词背会”，而不是说“我要考XXX分”、“我要超过XXX”。'
        			},
        			{ 
        				title: '学会识别自己的不合理信念，并与其进行辩论',
        				detail: '有的时候经常会有一些这样的想法，特别是一次考试没考好时，比如“我考的这么差，我肯定考不上大学了”、“我的人生没有希望了”，这是一些不合理的信念和想法。在有这样的想法时，要提醒自己这些想法是不合理的，并与这些不合理的信念进行辩论，一次考试没考好并不能说明什么，有可能是最近学习不努力导致知识点掌握得不好，或者考试时状态不好，接下来及时努力学习或者及时调整状态就可以。高考是一个长期积累的过程，只有持续不断的学习，才能取得好成绩，一次两次的考试失误并不能说明问题。'
        			},
        			{ 
        				title: '合理宣泄自己的负面情绪',
        				detail: '如果学习动机过强，在遭遇考试失败时，情绪波动会比较大。在这个时候，要学会合理地宣泄自己的负面情绪，做一些自己喜欢的事情，比如说看电影、写日记等，也可以进行一些体育锻炼，女生可以做瑜伽或者跑步等，男生可以打篮球或者踢足球等。'
        			}
        		],
        		'学习兴趣': [
        			{  
        				title: '学会通过强化的方法进行自我激励',
        				detail: '在自己顺利完成一天的工作计划或者考试成绩有所进步时，可以奖励自己去看一场电影或者吃一顿美食，将自己喜欢的活动作为奖励激励自己的学习，有助于提高对学习的兴趣。'
        			},
        			{  
        				title: '培养对学习的内在兴趣',
        				detail: '有意识地提醒自己，要在学习过程中感受快乐，解决难题获得知识本身是一件非常有满足感的事情，感受解决难题过程中的乐趣并在其中找寻成就感。'
        			},
        			{  
        				title: '多和同学交流',
        				detail: '碰到不会的问题，自己思考仍然没有思路，可以和同学多多交流，一方面解决了自己的问题和困惑，另一方面也可以使得同学之间的关系更好。同学碰到不会的问题问自己，自己正好会的话，要耐心地给同学讲解，讲解的过程能够使得自己对这个知识点的理解更深。'
        			}
        		],
        		'学习目标': [
        			{ 
        				title: '根据个人实际情况制定目标和行动计划',
        				detail: '制定目标和行动计划一定要结合个人的实际情况，在保证充足的睡眠时间和适当的娱乐活动的前提下制定合理的目标和行动计划。目标不要太多，行动计划注意不要安排得太满，要留有一定的机动时间。'
        			},
        			{ 
        				title: '严格按照行动计划进行学习活动',
        				detail: '安排好行动计划，最重要的是执行过程。在制定合理的目标和行动计划的基础上，严格按照行动计划执行，有助于提高自己的时间效能感。'
        			},
        		]
        	},
        	endData: []
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
            		assessType: 3
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的学习动机测评报告';
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
	            // title: {
	            //     text: '维度得分'
	            // },
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
		    let arr = [];
    		let _this = this;
    		for (var key in reportScoreData){
    			let obj = {};
    			obj.textStyle = textStyle;
    			obj.value = key;
    			xAxisData.push(obj);
    			seriesData.push(reportScoreData[key].score);
    			if(reportScoreData[key].score >= 1) {
    				this.tips[key].forEach((item) => {
    					arr.push(item);
    				})
    			}
			}
			this.xAxisData = xAxisData;
			this.seriesData = seriesData;
			this.endData = arr;
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
