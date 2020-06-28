<template>
	<div class="evaluation_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>学业归因测评报告</h3>
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
							<p>学习动机是指引发与维持学生的学习行为，并使之指向一定学业目标的一种动力倾向。根据不同的来源可以将学习动机分为内源性动机和外源性动机，内源性动机指由个体内在兴趣、好奇心或成就需要等内部原因引起的动机；外源性动机指由外在的奖惩或害怕考试不及格等活动之外的原因激起的动机。学习动机在教育心理学中是非常重要的一部分内容，不同心理学家从不同角度对学习动机进行了阐释，主要包括强化理论、归因理论、需要层次理论、成就动机理论、自我价值理论、自我效能感理论等。</p>
							<p>心理学研究发现学习动机和学习效率、学习成绩直接相关。中等程度学习动机的学生学习效率最高，学习动机过低过高都会影响学生的学习效率，学习动机过低，学习积极性不高，懒懒散散、没有目标；学习动机过高，过分看重成绩和是否超过别人，情绪波动起伏较大，都不利于学习效率的提高。</p>
							<p>学习动机测评包括四个维度，分别是学习动机太弱、学习动机太强、学习兴趣和学习目标。通过学习动机测评可以发现学生在学习动机上存在的具体问题，从而有针对性地提供个性化的辅导方案。</p>
						</div>
						<div class="foreword_footer">
							<div class="title">阅读须知：</div>
							<p>①本报告基于您的在线作答结果，通过系统分析您在各个维度的得分水平，从而确定您目前ZZ的类型，有针对性地为您提供建议。</p>
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
							<div class="title" style="margin-bottom: 30px;">通过对您的作答结果进行分析，您当前的得分如下图所示：</div>
							<div id="echarts" style="width: 820px;height:400px;margin-left: -50px;"></div>
							<p class="fenxi">经过分析，您的归因倾向为：<span v-for="(item, index) in reportData.report.studentData">{{item.category}} </span></p>
							<p class="fenxi_detail" v-for="(item, index) in reportData.report.studentData">
								<span>{{item.content}}</span>
							</p>
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
							对考试成败的归因方式直接影响中学生的学业自我效能感，进而影响学习动力和学习成绩。因此对于中学生来说，掌握正确的归因方式学会正确归因是非常重要的，以下是几点小建议：
						</p>
						<div class="tips_box" v-for="(item, index) in endData" :key="index">
							<h6 class="tips_title"><span>{{index + 1}}</span>.{{item.title}}</h6>
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
        	seriesData1: [],
        	seriesData2: [],
        	detail: {
        		'学习动机太弱': '您在学习动机太弱这个维度上没有困扰，对学习非常有兴趣，学习积极性非常高，完成作业非常积极。',
        		'学习动机太强': '您在学习动机太强这个维度上没有困扰，对目前的学习效果和考试成绩非常满意。',
        		'学习兴趣': '您对学习非常有兴趣，喜欢学习的过程，能在学习过程中感受到快乐，能享受到学习成功带来的乐趣。',
        		'学习目标': '您能独立制定合理的学习目标，按照目标制定学习计划，并能非常好地完成每天的学习任务以及目标。',
        	},

        	endData: [
        		{ title: '学会将考试成败归因于努力程度', detail: '韦纳归因三维度分别是控制点、稳定性以及可控性，我们应该尽可能将考试成败归因于内部、不稳定、可以控制的因素，即自身能控制的因素，也就是努力程度。将好成绩归因于足够努力，意识到是努力造成了好成绩，为了取得好成绩，以后会继续努力；将成绩不好归因于努力程度不够，自身可以控制努力程度，这次考得不好，相信以后加倍努力，自然就能取得好成绩。' },
        		{ title: '客观看待外部因素的存在', detail: '有的同学将考得不好归因于能力不足，导致对自己没有信心，不相信自己能取得好成绩，从而产生考试焦虑。其实题目过难或者运气不好等因素可能是客观存在的，因此，不要认为成绩不好都是由于自身因素。' },
        		{ title: '学会合理归因，避免自我服务偏差', detail: '有的同学倾向于将考试成功归因于自己的能力或努力，而将考试失败归因于情境、运气等外部因素，这是心理学中的自我服务偏差。这种归因方式可以降低我们的焦虑感，但也让我们错失了查缺补漏的机会，考试中检测出来的没有掌握的内容并没有得到及时的补充，导致以后的考试中还会出现类似的错误。' },
        	]
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
            		assessType: 8
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	_this.reportData = res.data.data;
                	_this.htmlTitle = res.data.data.name + '的学业归因测评报告';
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
	            color: ['#5B9BD5', '#ED7D31'],
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    legend: {
			        data: ['成功归因', '失败归因']
			    },
	            xAxis: {
	            	type: 'category',
	                data: this.xAxisData
	                // data: ['能力','努力','情境','运气']
	            },
	            yAxis: {
	            	// max: 5,
	            	splitNumber: 5,
	            	Interval: 1,
	            	type: 'value',

	            },
	            series: [
	            	{
		                name: '成功归因',
		                type: 'bar',
		                data: this.seriesData1,
		                label: {
		                	show: true,
		                	color: '#fff',
		                }
	            	},
	            	{
		                name: '失败归因',
		                type: 'bar',
		                data: this.seriesData2,
		                label: {
		                	show: true,
		                	color: '#fff',
		                }
	            	}
	            ],

	            barCategoryGap: '40%',
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
    		let seriesData1 = [];
    		let seriesData2 = [];

		    let arr = [];
    		let _this = this;
    		for (let key in reportScoreData){

    			let obj = {};
    			xAxisData.push(key);
    			seriesData1.push(reportScoreData[key]['list']['成功归因']['score']);
    			seriesData2.push(reportScoreData[key]['list']['失败归因']['score']);
			}
			this.xAxisData = xAxisData;
			this.seriesData1 = seriesData1;
			this.seriesData2 = seriesData2;
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
