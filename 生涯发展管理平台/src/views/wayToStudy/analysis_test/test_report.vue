<template>
	<div class="test_report">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
		<div class="pdf" id="pdfDom" style="background-color:#E8E8E8;" v-if="reportData">
			<div class="page_shadow">
				<div class="page_cover pdf-page">
					<div class="header">
						<h3>升学途径分析报告</h3>
						<p class="detail">[ 个人报告 ]</p>
					</div>
					<div class="main">
						<p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{user.name}}</p>
						<p>报告编号：{{user.report}}</p>
						<p>报告时间：{{user.date}}</p>
					</div>
					<div class="bottom">
						<!-- <p>学马教育集团旗下品牌</p>
						<p>测评网址</p> -->
						<p>系统开发技术、测评方法及报告设计已申请知识产权保护</p>
						<p>本报告仅供相关个人阅读参考，未经许可不得传阅，严禁用作他途</p>
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
							<div class="big_title"><span>1</span>前言</div>
							<div class="line"></div>
							<div class="page_number">1</div>
						</div>
						<div class="big_title_box" @click="scrollToView('page2')">
							<p class="big_title"><span>2</span>升学途径分析结果概述</p>
							<div class="line"></div>
							<div class="page_number">2</div>
						</div>
						<div class="big_title_box" @click="scrollToView('page3')">
							<p class="big_title"><span>3</span>推荐的升学途径</p>
							<div class="line"></div>
							<div class="page_number">3</div>
						</div>

						<div v-if="index < 18" class="small_title_box" v-for="(item, index) in reportData.recommend" :key="item.id" @click="scrollToView('page' + (3 + index))">
							<div class="small_title">3.{{index + 1}}{{item.title}}</div>
							<div class="page_number"></div>
						</div>
						
						<div v-if="recommendNum < 18" class="big_title_box"  @click="scrollToView('page' + 3 + recommendNum)">
							<p class="big_title"><span>4</span>不推荐的升学途径</p>
							<div class="line"></div>
							<div class="page_number">4</div>
						</div>
						<div v-if="recommendNum < 18 && (recommendNum+index) < 18 " class="small_title_box" v-for="(item, index) in reportData.unRecommend" :key="item.id" @click="scrollToView('page' + (3 + index + recommendNum))">
							<div class="small_title">4.{{index + 1}}{{item.title}}</div>
							<div class="page_number"></div>
						</div>
						
						<div v-if="(recommendNum+unRecommendNum) < 18" class="big_title_box"  @click="scrollToView('page' + 3 + conformNum)">
							<p class="big_title"><span>5</span>不符合的升学途径</p>
							<div class="line"></div>
							<div class="page_number">5</div>
						</div>
						<div v-if="(recommendNum+unRecommendNum) < 18 && (recommendNum+unRecommendNum+index) < 18 " class="small_title_box" v-for="(item, index) in reportData.incompatible" :key="item.id" @click="scrollToView('page' + (3 + index + conformNum))">
							<div class="small_title">5.{{index + 1}}{{item.title}}</div>
							<div class="page_number"></div>
						</div>
					</div>	
				</div>
			</div>
			<div class="page_shadow">
				<div class="page pdf-page">
					<h5 class="header">	
					</h5>
					<div class="content" id="catalog_2">
						
						<div v-if="index >= 18" class="small_title_box" v-for="(item, index) in reportData.recommend" :key="item.id" @click="scrollToView('page' + (3 + index))">
							<div class="small_title">3.{{index + 1}}{{item.title}}</div>
							<div class="page_number"></div>
						</div>

						<div v-if="recommendNum >= 18" class="big_title_box"  @click="scrollToView('page' + 3 + recommendNum)">
							<p class="big_title"><span>4</span>不推荐的升学途径</p>
							<div class="line"></div>
							<div class="page_number">4</div>
						</div>
						<div v-if="(recommendNum+index) >= 18" class="small_title_box" v-for="(item, index) in reportData.unRecommend" :key="item.id" @click="scrollToView('page' + (3 + index + recommendNum))">
							<div class="small_title">4.{{index + 1}}{{item.title}}</div>
							<div class="page_number"></div>
						</div>
						<div v-if="(recommendNum+unRecommendNum) >= 18" class="big_title_box" @click="scrollToView('page' + (3 + conformNum))">
							<p class="big_title"><span>5</span>不符合的升学途径</p>
							<div class="line"></div>
							<div class="page_number">5</div>
						</div>
						<div v-if="(recommendNum+unRecommendNum+index) >= 18 " class="small_title_box" v-for="(item, index) in reportData.incompatible" :key="item.id" @click="scrollToView('page' + (3 + index + conformNum))">
							<div class="small_title">5.{{index}}{{item.title}}</div>
							<div class="page_number"></div>
						</div>
						<div class="big_title_box" @click="scrollToView('page' + (3 + totalNum))">
							<p class="big_title"><span>6</span>温馨提示</p>
							<div class="line"></div>
							<div class="page_number">5</div>
						</div>	
					</div>
				</div>
			</div>
			<div class="page_shadow" id="page1">
				<div class="page pdf-page">
					<h5 class="header">
						1前言	
					</h5>
					<div class="content">	
						<div class="main">
							<p>近年来,随着高考升学机会的不断扩大,高校专业的不断增加，能否考上大学已经不是家长和考生唯一需要关注的问题，很多家长和学生也逐渐认识到升学并不局限于裸分统招一种方式，他们更加关注的是进入理想大学的多种升学途径。</p>
							<p>大学本身是培养多元化人才的地方，尽快确定适合学生的升学途径，不但可以让学生依照其自身的特质发挥特长，同时可以避免社会总体人力资源的浪费。</p>
							<p>升学途径分析是一套旨在帮助学生从20余种升学途径中进行适合度分析的工具。它是根据学生性别、生源所在地、年龄、家庭情况、身体条件等实际情况，并参考学生兴趣、能力等维度得出的测评结果，为学生选择适合的升学途径提供专业的参考。同时我们也充分考虑学生的报考动机、专业意向等主观因素，帮助学生综合评估多项升学途径并在最短时间内了解适合自己当前条件的相关升学途径，生成个性化评估报告。</p>
						</div>
						<div class="must_know">
							<div class="title">注意事项</div>
							<p>本报告目的是给帮助广大考生和家长提供了一种科学的方法，一份可靠的依据，从而让考生能更深入地了解自己的具体情况，而并非限制考生的选择。报告结果没有“好”与“坏”之分。 希望本测评能够让每个高中学子明确自己未来的发展方向，在报告的帮助下为自己制定全面的升学规划。做一个有准备的人，赢在起跑线！</p>
						</div>
					</div>
					<div class="big_page_number">1</div>
				</div>
			</div>
			<div class="page_shadow" id="page2">
				<div class="page pdf-page">
					<h5 class="header">
						<p>2升学途径分析结果概述</p>
					</h5>
					<p class="header_detail">通过对您的基本信息、个人条件、个人能力以及个人意愿的综合分析，您当前的升学途径分布结果如下所示：</p>
					<div class="content">	
						<div class="echats_box">
							<!-- jquery绘制圆环插件 -->
							<!-- 文档地址 http://bolli.tech/docs.php?p=circleChart#settings-startangle -->
							<div class="circle1" id="circle1">
								<div class="box">
									<p class="box_title">符合的升学途径</p>
									<p class="num"><span>{{conformNum}}</span>/<span>{{totalNum}}</span></p>
								</div>	
							</div>
							<div class="circle2" id="circle2">
								<div class="box">
									<p class="box_title">推荐的升学途径</p>
									<p class="num"><span>{{recommendNum}}</span>/<span>{{conformNum}}</span></p>
								</div>
							</div>
						</div>
						<p class="page2_detail">在 24 种升学途径中，您当前已符合 {{conformNum}} 种升学途径的报考条件，其中 {{recommendNum}} 种为推荐的升学途径。</p>
						<table border class="table_gaisu" align="center">
							<tr>
								<td rowspan="2">分类</td>
								<td colspan="2">符合的升学途径</td>
								<td rowspan="2">不符合的升学途径</td>
							</tr>
							<tr>
								<td>推荐的升学途径</td>
								<td>不推荐的升学途径</td>
							</tr>
							<tr>
								<td>数量</td>
								<td>{{recommendNum}}</td>
								<td>{{unRecommendNum}}</td>
								<td>{{totalNum - conformNum}}</td>
							</tr>
							<tr>
								<td>占比</td>
								<td>{{(recommendNum/totalNum * 100).toFixed(2) + '%'}}</td>
								<td>{{(unRecommendNum/totalNum * 100).toFixed(2) + '%'}}</td>
								<td>{{((totalNum - conformNum)/24 * 100).toFixed(2) + '%'}}</td>
							</tr>
						</table>
						<div class="explain">
							<div class="title">解释说明</div>
							<p>推荐的升学途径，即当前已满足所有硬性条件的升学途径。</p>
							<p>不推荐的升学途径，即当前已满足所有硬性条件但部分软性条件未满足的升学途径。</p>
							<p>不符合的升学途径，即不具备部分或全部硬性条件的升学途径。</p>
						</div>
					</div>
					<div class="big_page_number">2</div>
				</div>
			</div>
			<div class="page_shadow" v-for="(item, index) in reportData.recommend" :key="item.id" :id="'page' + (index + 3)">
				<div class="page pdf-page">
					<h5 class="header">
						3推荐的升学途径
					</h5>
					<div class="content">	
						<div class="title_box">
							<h6><span>3.{{index + 1}}{{item.title}}</span><span class="go_detail" @click="goDetail(item.link)" v-show="index != 0">查看详情</span></h6>
							<p>{{item.introduction}}</p>
						</div>
						<div class="condition">
							<div class="title">报考条件</div>
							<p v-for="(childItem, $index) in item.condition" :key="$index">{{childItem}}</p>
						</div>
						<div class="condition">
							<div class="title">推荐原因</div>
							<p>{{item.recommendReason}}<span v-for="(childItem, $index) in item.conditionOption" :key="$index">{{childItem}}</span></p>
						</div>
						<div class="must_know">
							<div class="title">备考须知</div>
							<p v-for="(childItem, $index) in item.notice" :key="$index">{{childItem}}</p>
						</div>
					</div>
					<div class="big_page_number">{{index + 3}}</div>
				</div>
			</div>
			<div class="page_shadow" v-for="(item, index) in reportData.unRecommend" :key="item.id" :id="'page' + (index + 3 + reportData.recommend.length)">
				<div class="page pdf-page">
					<h5 class="header">
						4不推荐的升学途径
					</h5>
					<div class="content">	
						<div class="title_box">
							<h6><span>4.{{index + 1}}{{item.title}}</span><span class="go_detail" @click="goDetail(item.link)">查看详情</span></h6>
							<p>{{item.introduction}}</p>
						</div>
						<div class="condition">
							<div class="title">报考条件</div>
							<p v-for="(childItem, $index) in item.condition" :key="$index">{{childItem}}</p>
						</div>
						<div class="condition">
							<div class="title">不推荐原因</div>
							<p>{{item.noRecommendReason}}<span v-for="(childItem, $index) in item.conditionOption" :key="$index">{{childItem}}</span></p>
						</div>
						<div class="must_know">
							<div class="title">备考须知</div>
							<p v-for="(childItem, $index) in item.notice" :key="$index">{{childItem}}</p>
						</div>
					</div>
					<div class="big_page_number">{{index + 3 + recommendNum}}</div>
				</div>
			</div>
			<div class="page_shadow" v-for="(item, index) in reportData.incompatible" :key="item.id" :id="'page' + (index + 3 + conformNum)">
				<div class="page pdf-page">
					<h5 class="header">
						5不符合的升学途径
					</h5>
					<div class="content">	
						<div class="title_box">
							<h6><span>5.{{index + 1}}{{item.title}}</span><span class="go_detail" @click="goDetail(item.link)">查看详情</span></h6>
							<p>{{item.introduction}}</p>
						</div>
						<div class="condition">
							<div class="title">报考条件</div>
							<p v-for="(childItem, $index) in item.condition" :key="$index">{{childItem}}</p>
						</div>
						<div class="condition">
							<div class="title">不符合原因</div>
							<p>{{item.incompatibleReason}}<span v-for="(childItem, $index) in item.conditionOption" :key="$index">{{childItem}}</span></p>
						</div>
						<div class="must_know">
							<div class="title">备考须知</div>
							<p v-for="(childItem, $index) in item.notice" :key="$index">{{childItem}}</p>
						</div>
					</div>
					<div class="big_page_number">{{index + 3 + conformNum}}</div>
				</div>
			</div>
			<div class="page_shadow" :id="'page' + (3 + totalNum)">
				<div class="page pdf-page">
					<h5 class="header">
						6温馨提示
					</h5>
					<div class="content">
						<div class="reminder">
							<p>一方面由于每年各种升学途径的报考条件会有一定调整，另一方面，你本身的条件也可能会发生变化（身体条件、个人能力、个人意愿等）。为了保证给您提供最符合您当下状况的升学途径分析建议，您可以在适当的时候选择重新进行测试。</p>
							<p>同时，您还可以咨询本系统的升学途径分析师，根据您的升学途径分析报告以及实际条件，为您个性化的指导升学途径选择策略。</p>
							<p>希望本系统的升学途径分析报告能为您的选择提供有价值的参考。</p>
						</div>
					</div>
					<div class="big_page_number">{{ 3 + totalNum}}</div>
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
.test_report {
	width: 100%;
	padding-top: 20px;
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
			background: url(/imgs/wayToStudy/analysis_test/report/cover.png);
			background-size: 900px 1300px;
			.header {
				margin-bottom: 136px;
				h3 {
					line-height: 70px;
					font-size: 56px;
					text-align: center;
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
				width: 420px;
				margin: 0 auto;
				padding: 36px 0px;
				padding-left: 200px;
				p {
					line-height: 60px;
					font-size: 20px;
					font-weight: 600;
					color: #000;
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
			background: url(/imgs/wayToStudy/analysis_test/report/bg.png) no-repeat;
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
						padding-left: 30px;
						padding-right: 20px;
						background: url(/imgs/wayToStudy/analysis_test/report/icon_biaoti.png) 0px center no-repeat;
						span {
							height: 50px;
							font-size: 24px;
							line-height: 50px;
							font-weight: 600;
							text-align: center;
							width: 30px;
							position: absolute;
							left: 0px;
							top: -6px;
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
				.echats_box {
					height: 260px;
					display: flex;
					justify-content: space-between;
					.circle1 {
						width: 240px;
						height: 240px;
						position: relative;
						.box {
							position: absolute;
							text-align: center;
							width: 240px;
							top: 60px;
							color: #006ec6;
							font-size: 20px;
							line-height: 30px;
							.box_title {
								margin-bottom: 20px;
							}
							.num {
								font-size: 30px;
								font-weight: 600;
								line-height: 30px;
								span {
									&:nth-child(2) {
										color: #333;
									}
								}
							}
						}
					}
					.circle2 {
						.circle1;
						.box {
							color: ;
						}
					}
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
				.condition {
					margin-bottom: 30px;
					.title {
						font-size: 22px;
						line-height: 36px;
						color: #0070C0;
						margin-bottom: 10px;
					}
					p {
						line-height: 24px;
						font-size: 16px;
						color: #333;
					}
				}
				// 备考须知
				.must_know {
					padding: 20px;
					background-color: #DEEBF7;
					border-radius: 5px;
					.title {
						font-size: 22px;
						line-height: 50px;
						color: #0070C0;
						margin-bottom: 10px;
					}
					p {
						line-height: 24px;
						font-size: 14px;
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
import DownloadProgress from '../../../components/DownloadProgress.vue';
// 引用jquery写的圆环插件
import circleChart from '../../../../public/statics/js/circleChart.min.js'
export default {
	components: { DownloadProgress },
    props: [],
    data() {
        return {
        	isDownloading: false, //是否正在下载
            totalPages: 1, //总页数
            currentPage: 0,//当前页
        	htmlTitle: '',
        	currentTime: '',
        	reportData: null,
        	// 报告封面
        	user: null,
        	// 升学途径总数
        	totalNum: 0,
        	// 推荐的升学途径数量
        	recommendNum: 0,
        	// 不推荐的升学途径数量
        	unRecommendNum: 0,
        	// 推荐升学途径数量 + 不推荐升学途径数量
        	conformNum: 0,
        }
    },
    methods: {
    	// 获取测试结果  
        getReport() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax.post(this.G_uri + '/furtherWay/getReport', {
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                	let data = res.data.data;
                	_this.reportData = data;
                	_this.user = data.user;
                	_this.totalNum = data.totalNum;
                	_this.recommendNum = data.recommendNum;//3
                	_this.unRecommendNum = data.unRecommendNum;//4
                	_this.conformNum = data.conformNum;//5
                	_this.htmlTitle = data.user.name + '的升学途径分析报告';
                	_this.$nextTick(() => {
                		_this.setCircle();
                	})
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        setCircle() {
        	// 总
        	let totalNum = this.totalNum;
        	// 符合
        	let conformNum = this.conformNum;
        	let recommendNum = this.recommendNum;
	       	$("#circle1").circleChart({
	            size: 240,
	            value: conformNum/totalNum * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#9fd3f9",
				backgroundColor: "#006ec6",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value) + "%");
	            }
	        });
	       	$("#circle2").circleChart({
	            size: 240,
	            value: recommendNum/conformNum * 100,
	            counterclockwise: true,
	            startAngle: -75,
				color: "#fcc395",
				backgroundColor: "#e4802c",
	            text: false,
	            onDraw: function(el, circle) {
	                circle.text(Math.round(circle.value/100*24) + "/24");
	            }
	        });
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
    },
    watch: {
    },
    created() {
    	this.getReport();
    },
    mounted() {
    	// console.log($('#circle2'))s
    }
}
</script>
