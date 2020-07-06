<template>
	<!-- 自招综评 -->
	<div class="zizhaozongping">
		<!-- 通栏大banner -->
		<div class="banner">
			<img src="/imgs/zizhaozongping/zizhaozongping.jpg" alt="">
		</div>
		<!-- 高考招录规则正在改变 -->
		<div class="gaozhao">
			<div class="inner">
				<h5 class="dabiaoti">高考招录规则正在改变</h5>
				<div class="underline"></div>
				<div class="content">
					<p class="title">随着新高考改革的逐步推进，自主选拔体系这种多元化的评价录取模式逐渐成为诸多名校的主要招生途径</p>
					<!-- <div class="xiangqing" v-for="(item, index) in gaozhao">{{item.xiangqing}}</div>
					<div class="middleyuan">
						<div class="neiyuan">
							<div class="neirong">自主招生试点</div>
							<div class="neirong">高校专项计划招生</div>
							<div class="neirong">多元录取</div>
							<div class="neirong">中和评价招生</div>
						</div>
						<div class="xian1"></div>
						<div class="xian2"></div>
					</div> -->
				</div>
			</div>
		</div>
		<!-- 自主招生带来的新机遇 -->
		<div class="peixuntese">
			<div class="inner">
				<h5 class="dabiaoti">自主招生带来的新机遇</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in peixuntese" :key="index">
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 成功属于有准备的人 -->
		<div class="success">
			<div class="inner">
				<h5 class="dabiaoti">成功属于有准备的人</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in success" :key="index">
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
						<div class="yuan"></div>
					</div>
					<div class="fangbox1">
						<p>高一</p>
						<p>高二</p>
						<div class="arrow"></div>
						<div class="yuan"></div>
						<div class="xian"></div>
					</div>
					<div class="fangbox2">
						<p>高三</p>
						<div class="arrow"></div>
						<div class="yuan"></div>
						<div class="xian"></div>
					</div>
					<div class="middlekuang">
					</div>
				</div>
			</div>
		</div>
		<!-- 学马自主招生指导四阶段 -->
		<div class="zizhaozhidao">
			<div class="inner">
				<h5 class="dabiaoti">学马自主招生指导四阶段</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in zizhaozhidao" :key="index">
						<img :src="item.url" alt="">
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
						<!-- <router-link tag="a" :to="item.url" @click="window.scrollTo(0,0)" v-show="index % 2 == 1">
							了解更多
						</router-link> -->
					</div>
				</div>
			</div>
		</div>
		<!-- 服务流程 -->
		<div class="fuwuliucheng">
			<div class="inner">
				<h5 class="dabiaoti">服务流程</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="contentTop">
						<div class="neirongbox" v-for="(item, index) in fuwuliuchengTop" :key="index">
							<p class="xiangqing">{{item.xiangqing}}</p>
							<div class="arrow"></div>
						</div>
					</div>
					<div class="contentMiddle">
						<div class="yuan" v-for="(item, index) in yuan">
							<p v-html="item.neirong">
							</p>
						</div>
						<div class="dashed">
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
							<div class="gt">
								&gt;
							</div>
						</div>
					</div>
					<div class="contentFoot">
						<div class="neirongbox" v-for="(item, index) in fuwuliuchengFoot" :key="index">
							<p class="xiangqing">{{item.xiangqing}}</p>
							<div class="arrow"></div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	.zizhaozongping {
		font-size: 16px;
		color: #666666;
		.inner {
			width: 1200px;
			margin: 0 auto;
		}
		// 顶部通栏大banner
		.banner {
			width: 100%;
			font-size: 0px;
			img {
				width: 100%;
			}
		}
		// 大标题h5
		.dabiaoti {
			text-align: center;
			font-size: 24px;
			color: #156dfe;
			line-height: 24px;
			height: 24px;
			margin-bottom: 20px;
		}
		// 下方的横线
		.underline {
			width: 60px;
			height: 4px;
			margin: 0 auto;
			background-color: #156dfe;
			margin-bottom: 35px;
		}
		// 高考招录规则正在改变
		.gaozhao {
			padding: 60px 0px;
			.content {
				height: 480px;
				position: relative;
				background: url(/imgs/zizhaozongping/gaokaozhaolu.jpg) no-repeat center center;
				background-size: 800px 384px;
				.title {
					line-height: 20px;
					font-size: 20px;
					text-align: center;
				}
				// .xiangqing {
				// 	width: 275px;
				// 	height: 55px;
				// 	padding: 13px 20px;
				// 	box-shadow:0 0 20px rgba(176,224,251,.5);
				// 	position: absolute;
				// 	&:after {
				// 		position: absolute;
				//       	display: inline-block;
				//       	top: 27px;
				//       	right: -10px;
				//       	margin-left: -10px;
				//     	width: 0px;
				//      	height: 0px;
				//   	    content: '';
				//      	border-style: solid;
				//    	   	border-width: 10px;
				//      	border-color: #ffffff #ffffff transparent transparent;
				//      	transform: rotate(45deg);
				// 		box-shadow:2px -2px 2px #d8edfa;
				// 	}
				// 	&:nth-child(1) {
				// 		left: 0px;
				// 		top: 0px;
				// 	}
				// 	&:nth-child(2) {
				// 		right: 0px;
				// 		top: 0px;
				// 		&:after {
				// 			right: 305px;
				//      		transform: rotate(-135deg);
				// 		}	
				// 	}
				// 	&:nth-child(3) {
				// 		left: 0px;
				// 		bottom: 0px;
				// 	}
				// 	&:nth-child(4) {
				// 		right: 0px;
				// 		bottom: 0px;
				// 		&:after {
				// 			right: 305px;
				//      		transform: rotate(-135deg);
				// 		}	
				// 	}
				// }
				// .middleyuan {
				// 	width: 338px;
				// 	height: 338px;
				// 	padding: 6px;
				// 	margin: 0 auto;
				// 	box-shadow:0 0 20px rgba(176,224,251,.5);
				// 	border-radius: 50%;
				// 	position: relative;
				// 	.neiyuan {
				// 	    background: -webkit-linear-gradient(#85caf4, #50aee8, #8ecff6, #4babe7);
				// 	    background: -o-linear-gradient(#85caf4, #50aee8, #8ecff6, #4babe7);
				// 	    background: linear-gradient(#85caf4, #50aee8, #8ecff6, #4babe7);
				// 	    width: 338px;
				// 	    height: 338px;
				// 	    color: #ffffff;
				// 	    border-radius: 50%;
				// 	    .neirong {
				// 	    	width: 89px;
				// 	    	height: 100px;
				// 	    	padding: 69px 12px 0px 52px;
				// 	    	float: left;
				// 	    	font-size: 18px;
				// 	    	line-height: 24px;
				// 	    	&:nth-child(1) {
				// 				padding: 69px 16px 0px 64px;;
				// 	    	}
				// 	    	&:nth-child(2) {
				// 				padding: 69px 54px 0px 26px;;
				// 	    	}
				// 	    	&:nth-child(3) {
				// 				padding: 59px 16px 10px 64px;;
				// 	    	}
				// 	    	&:nth-child(4) {
				// 				padding: 46px 54px 23px 26px;;
				// 	    	}
				// 	    }
				// 	}
				// 	.xian1 {
				// 		width: 350px;
				// 		height: 7px;
				// 		position: absolute;
				// 		background-color: #ffffff;
				// 		left: 0px;
				// 		top: 50%;
				// 		margin-top: -3.5px;
				// 	}
				// 	.xian2 {
				// 		.xian1;
				// 		transform: rotate(90deg);
				// 	}
				// }
				
			}
		}
		// 培训特色
		.peixuntese {
			padding: 60px 0px;
			background: url(/imgs/jiaofuziyuan/beijingjiaofu02.jpg);
			background-size: 100% 100%;
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				background-color: #ffffff;
			}
			.content {
				padding-top: 64px;
				height: 216px;
				.neirongbox {
					float: left;
					width: 206px;
					height: 212px;
					border: 2px solid #ffffff;
					border-radius: 5px;
					margin-right: 37px;
					position: relative;
					color: #ffffff;

					&:last-child {
						margin-right: 0px;
					}
					.title {
						position: absolute;
						width: 164px;
						height: 48px;
						border-radius: 5px;
						background-color: #ffffff;
						color: #156def;
						font-size: 18px;
						line-height: 48px;
						text-align: center;
						left: 24px;
						top: -24px;
					}
					.xiangqing {
						line-height: 24px;
						width: 152px;
						margin: 0 auto;
						margin-top: 50px;
					}
				}
			}
		}
		// 成功属于有准备的人
		.success {
			padding: 60px 0px;
			.content {
				margin-top: 90px;
				height: 315px;
				position: relative;
				.neirongbox {
					width: 140px;
					height: 97px;
					border-radius: 5px;
					float: left;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					position: absolute;
					// 底部发光小三角
					&:after {
						position: absolute;
				      	display: inline-block;
				      	top: -10px;
				      	left: 50%;
				      	margin-left: -10px;
				    	width: 0px;
				     	height: 0px;
				  	    content: '';
				     	border-style: solid;
				   	   	border-width: 10px;
				     	border-color: #ffffff #ffffff transparent transparent;
				     	transform: rotate(-45deg);
						box-shadow:2px -2px 2px #d8edfa;
					}
					.title {
						padding-left: 20px;
						height: 30px;
						line-height: 30px;
						background: -webkit-linear-gradient(#5ab4eb, #81c8f3);
						background: -o-linear-gradient(#5ab4eb, #81c8f3);
						background: linear-gradient(#5ab4eb, #81c8f3);
						border-radius: 3px 3px 0px 0px;
					}
					.xiangqing {
						padding-top: 5px;
						padding-left: 20px;
						line-height: 24px;
						width: 100px;
					}
					&:nth-child(1) {
						top: 0px;
						left: 90px;
						&:after {
				      		top: 87px;
				     		transform: rotate(135deg);	
						}
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							bottom: -71px;
							z-index: 2;
						}

					}
					&:nth-child(2) {
						top: 0px;
						left: 497px;
						&:after {
				      		top: 87px;
				     		transform: rotate(135deg);	
						}
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							bottom: -71px;
							z-index: 2;
						}
					}
					&:nth-child(3) {
						top: 0px;
						left: 680px;
						&:after {
				      		top: 87px;
				     		transform: rotate(135deg);	
						}
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							bottom: -71px;
							z-index: 2;
						}
					}
					&:nth-child(4) {
						top: 0px;
						right: 185px;
						&:after {
				      		top: 87px;
				     		transform: rotate(135deg);	
						}
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							bottom: -71px;
							z-index: 2;
						}
					}
					&:nth-child(5) {
						top: 0px;
						right: 0px;
						&:after {
				      		top: 87px;
				     		transform: rotate(135deg);	
						}	
						.xiangqing {
							line-height: 20px;
						}
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							bottom: -71px;
							z-index: 2;
						}
					}
					&:nth-child(6) {
						left: 0px;
						bottom: 0px;
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							top: -66px;
							z-index: 2;
						}
					}
					&:nth-child(7) {
						left: 200px;
						bottom: 0px;
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							top: -66px;
							z-index: 2;
						}
					}
					&:nth-child(8) {
						left: 405px;
						bottom: 0px;
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							top: -66px;
							z-index: 2;
						}
					}
					&:nth-child(9) {
						right: 470px;
						bottom: 0px;
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							top: -66px;
							z-index: 2;
						}
					}
					&:nth-child(10) {
						right: 280px;
						bottom: 0px;
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							top: -66px;
							z-index: 2;
						}
					}
					&:nth-child(11) {
						right: 93px;
						bottom: 0px;
						.yuan {
							width: 11px;
							height: 11px;
							background-color: #56b2ea;
							border-radius: 50%;
							border: 2px solid #9bddf8;
							position: absolute;
							left: 50%;
							margin-left: -7.5px;
							top: -66px;
							z-index: 2;
						}
					}
				}
				.fangbox1 {
					width: 66px;
					height: 56px;
					border-radius: 5px;
					background: -webkit-linear-gradient(#85caf3, #57b1eb);
					background: -o-linear-gradient(#85caf3, #57b1eb);
					background: linear-gradient(#85caf3, #57b1eb);
					color: #ffffff;
					font-size: 18px;
					position: absolute;
					text-align: center;
					left: -10px;
					p {
						line-height: 28px;
					}
					.arrow {
						border-style: solid;
						border-width: 14px 8px 0px 8px;
						border-color: #56b2ea transparent transparent transparent;
						bottom: -14px;
						left: 50%;
						margin-left: -8px;
						position: absolute;
					}
					.yuan {
						width: 11px;
						height: 11px;
						background-color: #56b2ea;
						border-radius: 50%;
						border: 2px solid #9bddf8;
						position: absolute;
						left: 50%;
						margin-left: -7.5px;
						bottom: -111px;
						z-index: 2;
					}
					.xian {
						width: 2px;
						height: 85px;
						position: absolute;
						left: 50%;
						margin-left: -1px;
						bottom: -98px;
						background-color: #56b2ea;
					}
				}
				.fangbox2 {
					.fangbox1;
					left: 330px;
					p {
						line-height: 56px;
					}
				}
				.middlekuang {
					position: relative;
					left: 0;
					top: 50%;
					margin-top: -3px;
					width: 1200px;
					height: 6px;
					background-color: #f2f2f2;
				}

			}
		}
		// 学马自主招生指导四阶段
		.zizhaozhidao { 
			padding: 60px 0px;
			background-color: #f6f7fb;
			.content {
				height: 395px;
				.neirongbox {
					float: left;
					height: 345px;
					width: 235px;
					padding: 15px;
					background-color: #ffffff;
					margin-right: 46px;
					position: relative;
					&:last-child {
						margin-right: 0px;
					}
					img {
						width: 235px;
						height: 130px;
						border-radius: 5px;
					}
					.title {
						height: 50px;
						line-height: 50px;
						font-size: 20px;
						color: #156def;
						text-align: center;
					}
					.xiangqing {
						line-height: 24px;
					}
					a {	
						position: absolute;
						left: 50%;
						bottom: 20px;
						margin-left: -55px;
						display: block;
						color: #ffffff;
						background-color: #248fe2;
						line-height: 34px;
						height: 34px;
						width: 110px;
						font-size: 14px;
						border-radius: 17px;
						text-align: center;
					}
				}
				
			}
		}
		// 服务流程
		.fuwuliucheng {
			padding: 60px 0px;
			.content {
				height: 470px;
				.contentTop {
					height: 135px;
					.neirongbox {
						width: 250px;
						height: 135px;
						float: left;
						border-radius: 5px;
						margin-right: 66px;
						box-shadow:0 0 20px rgba(176,224,251,.5);
						line-height: 24px;
						position: relative;
						&:after {
							position: absolute;
					      	display: inline-block;
					      	top: 125px;
					      	left: 115px;
					    	width: 0px;
					     	height: 0px;
					  	    content: '';
					     	border-style: solid;
					   	   	border-width: 10px;
					     	border-color: #ffffff #ffffff transparent transparent;
					     	transform: rotate(135deg);
							box-shadow:2px -2px 2px #d8edfa;
					    	// box-shadow: 2px -2px 2px #ccc;

						}
						&:last-child {
							margin-right: 0px;
						}
						p {
							padding-top: 20px;
							width: 205px;
							margin: 0 auto;
						}
					}
				}
				.contentMiddle {
					height: 85px;
					padding-top: 56.5px;
					padding-bottom: 56.5px;
					overflow: hidden;
					position: relative;
					.yuan {
						width: 85px;
						height: 85px;
						border-radius: 50%;
						background-color: #72c0f0;
						float: left;
						margin-left: 76px;
						p {
							padding-top: 20px;
							line-height: 24px;
							color: #ffffff;
							font-size: 18px;
							text-align: center;
						}
					}
					.dashed {
						position: absolute;
						width: 1200px;
						height: 0px;
						top: 50%;
						border-bottom: 1px dashed #56b2ea;
						z-index: -1;
						.gt {
							width: 20px;
							height: 20px;
							line-height: 20px;
							vertical-align: middle;
							text-align: center;
							border-radius: 50%;
							background-color: rgba(90, 180, 234, .6);
							color: #ffffff;
							font-size: 18px;
							position: absolute;
							top: -10px;
							&:nth-child(1) {
								left: 0px;
								
							}
							&:nth-child(2) {
								left: 190px;
							}
							&:nth-child(3) {
								left: 350px;
							}
							&:nth-child(4) {
								left: 510px;
							}
							&:nth-child(5) {
								left: 665px;
							}
							&:nth-child(6) {
								right: 350px;
							}
							&:nth-child(7) {
								right: 196px;
							}
							&:nth-child(8) {
								right: 0px;
							}
							
						}
					}

				}
				.contentFoot {
					width: 900px;
					height: 135px;
					margin: 0 auto;
					.neirongbox {
						width: 250px;
						height: 135px;
						float: left;
						border-radius: 5px;
						margin-right: 70px;
						box-shadow:0 0 20px rgba(176,224,251,.5);
						line-height: 24px;
						position: relative;
						&:after {
							position: absolute;
					      	display: inline-block;
					      	top: -10px;
					      	left: 115px;
					    	width: 0px;
					     	height: 0px;
					  	    content: '';
					     	border-style: solid;
					   	   	border-width: 10px;
					     	border-color: #ffffff #ffffff transparent transparent;
					     	transform: rotate(-45deg);
							box-shadow:2px -2px 2px #d8edfa;
						}
						&:last-child {
							margin-right: 0px;
						}
						p {
							padding-top: 10px;
							width: 205px;
							margin: 0 auto;
						}
					}
				}
			}
		}
	}
</style>
<script>
// import Swiper from '../components/Swiper.vue'
export default {
	// components: { Swiper },
	metaInfo: {
        title: '自招综评-学马', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '自主招生，综合评价，背景提升'
            },
            {               
                name: 'description',
                content: '解析多元升学路径，解读高校自主招生、综合评价招考政策，帮助学生和家长充分了解相关政策，合理利用资源和机遇'           
            }  
        ]
    },
	data() {
		return {
			// 高考招录规则正在改变
			gaozhao: [
				{ xiangqing: '主要选拔具有“学科特长”和“创新 潜质”的优秀学生' },
				{ xiangqing: '主要招收偏远、贫困、民族等地区县 以下高中勤奋好学、成绩优良的农村 学生' },
				{ xiangqing: '主要招收偏远、贫困、民族等地区县 以下高中勤奋好学、成绩优良的农村 学生' },
				{ xiangqing: '随新高考兴起的新模式，主要招收各 方面综合成绩好的学生' }
			],
			// 培训特色
			peixuntese: [
				{ titles: '名校青睐', xiangqing: '清华北大等作为世界 知名大学，在人才选 拔上，约超过80%的 学生不是裸考进入的 ，而是通过自主选拔 体系的方式进入' },
				{ titles: '新高考路径', xiangqing: '对于综合成绩比较薄弱，但具有某些学科特长和创新潜质的学生，自主招生无疑是 进入名校的绝佳机会' },
				{ titles: '录取概率大', xiangqing: '借助自主招生的降分 录取优惠政策，可缩 短冲刺名校的距离。' },
				{ titles: '高考双保险', xiangqing: '有自主招生做保底， 可为高考发挥失常的情况，增加一个双保险 ' },
				{ titles: '提升综合素质', xiangqing: '通过自主招生备考以及与名校专家的直接沟通交流，对考生未来的生涯规划和发展 都是一个极大的帮助' }
			],
			// 成功属于有准备的人
			success: [
				{ titles: '学术研究', xiangqing: '4-6个月出版' },
				{ titles: '3月', xiangqing: '考生提交申请材料' },
				{ titles: '四月底前', xiangqing: '公示初审通过名单' },
				{ titles: '6月10-22日', xiangqing: '试点高校组织考核' },
				{ titles: '高考出分后', xiangqing: '考生填报志愿高校录取/公示录取名单' },
				{ titles: '寒假+暑假', xiangqing: '社会实践' },
				{ titles: '创新潜能塑造', xiangqing: '至少一年' },
				{ titles: '3月初', xiangqing: '高校发布招生 简章' },
				{ titles: '4月', xiangqing: '高校审核学生 材料' },
				{ titles: '6月7-8日', xiangqing: '学生参加全国 统一高考' },
				{ titles: '高考出分前', xiangqing: '高校确定并公 示资格名单' }
			],
			// 学马自主招生指导四阶段
			zizhaozhidao: [
				{ titles: '高考政策解析', xiangqing: '解析多元升学路径，解读高校自主招生、综合评价招考政策， 帮助学生和家长充分了解相关 政策，合理利用资源和机遇', url: '/imgs/zizhaozongping/zhengcejiedu.jpg' },
				{ titles: '背景提升指导', xiangqing: '通过心智素养训练、社会实践等能力训练，以及对学科竞赛 、科技创新大赛、论文专利等 领域的指导，帮助学生快速获取报考实力', url: '/imgs/zizhaozongping/beijingtisheng.jpg' },
				{ titles: '复试指导', xiangqing: '针对目标院校的考核内容和风 格，对学生进行笔、面试的提 升指导，帮助学生顺利获得名 校绿卡 ', url: '/imgs/zizhaozongping/fushizhidao.jpg' },
				{ titles: '志愿填报指导', xiangqing: '结合学生学业情况和院校录取 规律，进行1对1报考指导，制 定针对性报考方案，充分发挥 各项优势，合理利用每一份成绩，助力学生进入最理想的大学和专业',url: '/imgs/zizhaozongping/zhiyuantianbao.jpg' }
			],
			// 服务流程
			fuwuliuchengTop: [
				{ xiangqing: '通过国家发明专利测评技术 对学生的兴趣、人格、潜能 以及3+3选科进行测评，进 行科学学业规划和专业定位' },
				{ xiangqing: '结合学生的成绩、奖项、专 业定位、高校招生等综合因 素，借助人工智能技术指导 学员进行院校选择。 ' },
				{ xiangqing: '根据学生的初审结果，从自 招真题库中挑选符合自身情 况的笔试课程，提前做好应 试准备。 ' },
				{ xiangqing: '利用大数据及位次修订算法， 对录取概率进行分析评估， 便于学生选择最优填报方案。  ' }
			],
			fuwuliuchengFoot: [
				{ xiangqing: '通过社会实践、研究性学习 营、学术论文指导、大赛指 导、自荐信指导等背景提升 辅导使学生快速获取自主报 考的实力。 ' },
				{ xiangqing: '协助每个学生按照报考要求 搜集、检查各项准备材料， 指导家长进行各项准备，完 成网上报考，并对初审结果 进行跟踪。' },
				{ xiangqing: '通过小班辅导，开展1对1、 多对1、无领导小组等形式 的模拟面试，提升学生临场 发挥水平，增加面试通过率。' }
			],
			yuan: [
				{ neirong: '专业<br/>提升' },
				{ neirong: '背景<br/>提升' },
				{ neirong: '院校<br/>选择' },
				{ neirong: '初审<br/>申报' },
				{ neirong: '笔试<br/>辅导' },
				{ neirong: '面试<br/>辅导' },
				{ neirong: '志愿填<br/>报诊断' }
			]

		}
	},
	mounted() {
		this.$nextTick(function(){
    		let recruitScrollY = this.$store.state.recruitScrollY //返回页面取出来
    		// console.log(recruitScrollY);
    		window.scroll(0, recruitScrollY)
 		 }) 
	},
	beforeRouteLeave(to, from, next) {    
		let position = window.scrollY  //记录离开页面的位置  
		// console.log(position)  
		if (position == null) position = 0   
		this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来   
		next() 
	}
}
</script>
