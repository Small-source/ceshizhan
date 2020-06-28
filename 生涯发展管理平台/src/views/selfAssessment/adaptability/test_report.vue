<template>
	<div class="test_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;" v-if="user">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="main">
						<p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{user.name}}</p>
						<p>报告编号：{{user.report}}</p>
						<p>报告时间：{{user.date}}</p>
					</div>
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<div class="header">
						<h5 class="page_header">
							目录
						</h5>
					</div>
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

			<div class="page_shadow" id="page1">
				<div class="page pdf-page">
					<h5 class="header">
						<span>Part1</span>前言	
					</h5>
					<div class="content">	
						<div class="main detail">
							<p >生涯适应力的概念来源于美国心理学家Super提出的生涯发展理论。Super在其生涯发展理论中提出了“职业成熟度”的概念，在随后的生涯发展研究中，“职业成熟度”逐渐被“生涯成熟度”所代替。后来，Super及其理论后继者Savickas等人认为使用“生涯成熟度”来解释个体的生涯发展是可行的，但它不能很好地解释入职人员的生涯问题，因此，他们提出了“生涯适应力”这一概念。</p>
							<p>生涯适应力强调生涯发展过程中人与环境的相互作用，体现着个体在生涯发展过程中主动去适应新的、不断变迁的生活环境的能力。在千变万化的现代化生活中，个体必须主动调节并应对各种事件，以寻求自己与所处环境之间的和谐与平衡，这是一种能力的体现，所以生涯适应力比生涯成熟度更能贴切解释当今时代的生涯发展特点。</p>
							<p>生涯适应力是个体应对当前或预期中的重大生涯问题的心理资源，是个体获得长远职业生涯成功的核心能力，是个体顺利发展职业生涯的关键能力。Savickas经过不断修正与改进提出了一个比较完整的生涯适应力四维理论建构模型，它包括生涯关注、生涯好奇、生涯控制和生涯自信四个维度。<strong>生涯关注对应着“我有未来吗”，生涯好奇对应着“未来我想要做什么”，生涯控制对应着“谁拥有我的未来”，生涯自信对应着“我能做到吗”</strong>，四个重要的职业生涯发展问题。</p>
							<p>当前在新高考背景下，学生面临着选科、选考、专业选择等多项变革，许多中学都在开展学生生涯发展教育，有条件的学校也陆续引入较为系统的生涯规划课程体系。中学生处在人生发展、人格发展的关键阶段，把握他们生涯适应力发展的影响因素，并有针对性地进行培养，对于他们今后顺利进入大学专业学习和适应工作岗位，意义重大。</p>
						</div>

					</div>
					<div class="big_page_number">1</div>
				</div>
			</div>

			<div class="page_shadow" id="page2">
				<div class="page pdf-page">
					<h5 class="header">
						<span>Part2</span>测评结果
					</h5>
					<div class="content">	
						<div class="main result" style="border-bottom: 1px dashed #666;">
							<p>报告结果是基于您的在线作答，通过系统分析得出您在各个生涯适应维度的得分。得分越高，表明您在该维度上适应的越好。据此可确定您在生涯适应力各方面的状态，为您的生涯发展提供参考性建议。测评结果的准确性和可靠性主要依赖于您是否对自己有明确客观的认识，以及在测评过程中是否认真和诚实等。</p>
							<p> 生涯适应力愈高，代表对生涯的规划与执行能力愈强，能够做出更好的生涯选择，进而获得更成功的生涯发展。反之，生涯适应力愈低，则表示对生涯的规划与执行能力愈欠缺，愈有可能做出不正确的生涯选择，进而缓滞个人职业生涯的发展。</p>
							<p>从生涯发展的角度来看，随着对自我理解和外部环境的理解，生涯适应力随着年龄的变化而更充分。 </p>
						</div>
						<div class="report_box main">
							<p>生涯适应力由生涯关注、生涯好奇、生涯控制和生涯自信四个维度组成，生涯关注（指个体对他自己未来生涯的关注程度）、生涯好奇（指个体的好奇态度）、生涯控制（指个体相信他们对于建构自己的生涯是可以自我决定和负起责任的）和生涯自信（指个体对自己生涯问题解决能力的信心及其自我效能信念）。</p>
							<p class="report_detail">通过对您的作答结果进行分析，您四个维度的得分如下：</p>
							<table class="report_table">
								<tr>
									<th>子维度</th>
									<th>生涯关注</th>
									<th>生涯好奇</th>
									<th>生涯控制</th>
									<th>生涯自信</th>
								</tr>
								<tr>
									<td>得分</td>
									<td>{{report.f}}</td>
									<td>{{report.cur}}</td>
									<td>{{report.col}}</td>
									<td>{{report.con}}</td>								
								</tr>
								<tr>
									<td>程度</td>
									<td>{{chengdu.f}}</td>
									<td>{{chengdu.cur}}</td>
									<td>{{chengdu.col}}</td>
									<td>{{chengdu.con}}</td>	
								</tr>
							</table>
							<div class="echarts_box">
								<div id="echarts" style="width: 700px;height:400px;"></div>
							</div>
						</div>
					</div>
					<div class="big_page_number">2</div>
				</div>
			</div>
			<div class="page_shadow" id="page3">
				<div class="page pdf-page">
					<h5 class="header">
						<span>Part3</span>温馨提示
					</h5>
					<div class="content">
						<div class="reminder">
							<p>生涯适应力并不是一成不变的，它可能随着您的心理成长而改变，也可能受到周围环境的影响。</p>
							<p>生涯关注主要解决关于生涯探索的计划性。在教学过程中鼓励学生学习自主性，协助学生制定符合自身的计划。生涯好奇则主要结合生涯信息呈现。新高考背景下的中学生的生涯信息主要集中体现在高考政策、选科、大学专业设置、职业定向等方面。生涯控制则是强调生涯决策和承担生涯决策的责任。在教学过程中应给学生创造多项选择的机会，使学生在学习过程中学会抉择并承担相应的责任。生涯自信则是强调个体有信心能解决生涯发展过程中遇到问题的情感及能力。</p>
							<p>对学生自身而言，提高生涯适应力，首先要建立良好的自我认知，良好的自我认知包括正确的自我评价、积极的自尊心及自信心、精确的性格分析等内容。其次要培养理性的思维方式，理性的思维方式是中学生生涯适应力的必要组成部分，只有具备理性的职业生涯规划和生活规划，才能够为自己的人生设计“基于客观现实，符合科学要求”的发展蓝图。再次需要培养学生的自我效能感，自我效能感是进行生涯适应力培养不可或缺的内容，如果说理性思维是进行灵活的自我调整和转变的工具，那么自我效能感则是确保既定目标得以实现的力量。较高的自我效能感可以为生涯适应力提供强有力的信心。</p>
						</div>
					</div>
					<div class="big_page_number">3</div>
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
<script>
import DownloadProgress from '../../../components/DownloadProgress.vue';
// // 引用jquery写的圆环插件
// import circleChart from '../../../../public/statics/js/circleChart.min.js'
export default {
	components: { DownloadProgress },
    props: [],
    data() {
        return {
        	isDownloading: false, //是否正在下载
            totalPages: 1, //总页数
            currentPage: 0,//当前页
        	htmlTitle: '',
        	// 报告封面
        	user: null,
        	report: null,
        	chengdu: {},
        	// echarts图表
        	xAxisData: ['生涯关注','生涯好奇','生涯控制','生涯自信'],
        	seriesData: [],

        }
    },
    methods: {
    	// 获取测试结果报告  
        getReport() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax.post(this.G_uri + '/assessment/getReport', {
            	id: _this.$route.query.id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	let data = res.data.data;
                	_this.user = data.user;
                	_this.report = data.report;
                	_this.htmlTitle = data.user.name + '的生涯适应力测评报告';
                	
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
	            // color: ['#2c8ffc','#F4E001','#F0805A','#26C0C0' ]
	        };

	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
        }
    },
    watch: {
    	report() {
    		// 较差：[1,2]， 一般：（2,3]，较好：（3,4] ，非常好：（4,5]
    		let reportObj = this.report;
    		let chengdu = {};
    		let data = [];
    		for(let key in reportObj) {
    			if(reportObj[key] > 4) {
    				chengdu[key] = '非常好';
    			}else if(reportObj[key] > 3) {
    				chengdu[key] = '较好';
    			}else if(reportObj[key] > 2) {
    				chengdu[key] = '一般';
    			}else {
    				chengdu[key] = '较差';
    			}
    		}
    		data[0] = reportObj.f;
    		data[1] = reportObj.cur;
    		data[2] = reportObj.col;
    		data[3] = reportObj.con;
    		this.seriesData = data;
    		this.chengdu = chengdu;
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
<style type="text/css" lang='less' scoped>
.test_report {
	width: 100%;
	padding: 20px 0px;
	background-color: #E8E8E8;
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
		line-height: 0px;
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
			background: url(/imgs/selfAssessment/pageCover.png);
			background-size: 900px 1300px;
			.main {
				height: 246px;
				width: 420px;
				margin: 0 auto;
				padding-top: 480px;
				padding-left: 40px;
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
				}
			}
		}
		.page {
			height: 1160px;
			padding-top: 140px;
			background: url(/imgs/selfAssessment/report_bg.png) no-repeat;
			background-size: 900px 1300px;
			background-color: #fff;
			position: relative;
			// 大标题
			.header {
				line-height: 50px;
				color: #0070C0;
				font-size: 30px;
				text-align: center;
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
							color: #2E75B6;
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
				.small_title_box {
					line-height: 40px;
					padding-left: 40px;
					font-size: 16px;
					color: #666;
					display: flex;
					.small_title {
						flex: 1;
					}
					.page_number {
							
					}
				}
				.report_table {
					margin-bottom: 30px;
					tr {
						text-align: center;
						th {
							background-color: #2E75B6;
							border: 1px solid #fff;
							line-height: 44px;
							color: #fff;
							text-align: center;
						}
						td {
							line-height: 44px;
							background-color: #F2F2F2;
							border: 1px solid #fff;
							color: #2E75B6;
							&:first-child {
								color: #fff;
								background-color: #9DC3E6;
							}
						}
					}
				}

				.echats_box {
					height: 260px;
					display: flex;
					justify-content: space-between;
				}
				.page2_detail {
					line-height: 40px;
					font-size: 20px;
					font-weight: 600;
					margin-bottom: 20px;
					.tuijian {
						color: #056dba;
					}
					.fuhe {
						color: #ff1360;
					}
				}
				.main {
					margin-bottom: 30px;
					p {
						line-height: 24px;
						font-size: 16px;
						color: #333;
						text-indent: 2em;
						margin-bottom: 5px;
					}
				}
				.table_gaisu {
					margin-bottom: 30px;
					tr {
						height: 50px; 
						td {
							text-align: center;
						}
					}
				}
				.explain {
					padding: 20px;
					border-radius: 5px;
					background-color: #DEEBF7;
					.title {
						padding-left: 20px;
						font-size: 22px;
						line-height: 36px;
						color: #0070C0;
						margin-bottom: 10px;
						border-left: 3px solid #0070C0;
					}
					p {
						line-height: 24px;
						font-size: 16px;
						color: #333;
					}
				}
				.detail {
					p {
						margin-bottom: 20px;
						line-height: 30px;
						strong {
							font-weight: 600;
							font-size: 16px;
						}
					}
				}
				// 小标题
				.title_box {
					margin-bottom: 30px;
					h6 {
						padding-left: 30px;
						font-size: 22px;
						line-height: 36px;
						color: #0070C0;
						margin-bottom: 10px;
						background: url(/imgs/wayToStudy/analysis_test/report/icon_biaoti2.png) 0px center no-repeat;
						.go_detail {
							margin-left: 30px;
							font-size: 16px;
							cursor: pointer;
							&:hover {
								color: #2c8ffc;
								border-bottom: 1px solid #2c8ffc;
							}
						}
					}
					p {
						line-height: 24px;
						font-size: 16px;
						color: #333;
					}
				}
				// 温馨提示
				.reminder {
					p {
						line-height: 30px;
						text-indent: 2em;
						font-size: 16px;
						color: #333;
						margin-bottom: 20px;
					}
				}
				.report_detail {
					text-indent: -2em !important;
					font-weight: 600;
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

