<template>
	<div class="shengyazhidao">
		<!-- 顶部通栏大banner -->
	    <div class="banner">
	    	<img src="/imgs/shengyazhidao/shengyazhidaobanner.jpg" alt="">
	    </div>
	    <!-- 教育模式发生颠覆性变化 我该如何适应？ -->
	    <div class="bianhua">
	    	<div class="inner">
	    		<h5 class="dabiaoti">
		    		教育模式发生颠覆性变化 我该如何适应？
		    	</h5>
		    	<div class="underline"></div>
		    	<div class="content">
		    		<div class="neirongbox" v-for="(item, index) in bianhua" :key="index">
		    			<div class="yuan">
		    				<div class="arrow">
		    					<div class="smallarrow"></div>
		    				</div>
		    			</div>
		    			<p>{{item.xiangqing}}</p>
		    		</div>
		    	</div>
	    	</div>
	    </div>
	    <!-- 如何突破桎梏，建立专业体系？ -->
	    <div class="tupo">
	    	<div class="inner">
		    	<!-- <h5 class="dabiaoti">如何突破桎梏，建立专业体系？</h5>
		    	<div class="underline"></div> -->
		    	<div class="content">
		    		<!-- <div class="left">
		    			<div class="arrow"></div>
	    				<p class="one">认证班</p>
	    				<p>高级班</p>
	    				<p>中级班</p>
	    				<p>初级班</p>
	    				<p>生涯大课堂</p>
		    		</div>
		    		<div class="right">
		    			<div class="neirongbox" v-for="(item, index) in tupo" :key="index">
		    				<div :class="'underline' + index"></div>
		    				<div class="yuan">
			    				<div class="big">
			    					<div class="small"></div>
			    				</div>
			    			</div>
			    			<div class="neirong">
			    				<p class="title">{{item.titles}}</p>
			    				<p class="xiangqingtop">{{item.xiangqingtop}}</p>
			    				<p class="xiangqingft">{{item.xiangqingft}}</p>
			    			</div>
		    			</div>	
		    		</div> -->
		    	</div>
		    </div>	
	    </div>
	    <!-- 培训特色 -->
	    <div class="tese">
	    	<div class="inner">
		    	<h5 class="dabiaoti">
		    		培训特色
		    	</h5>
		    	<div class="underline"></div>
		    	<p class="jieshi">
		    		以培养多层次、多类型的优质生涯教育师资团队为培训目标，助力生涯教师在新一轮教育综合改革中致胜生涯教育，提高生涯指导教学的实战技能
		    	</p>
		    	<div class="content">
		    		<div class="wai"  v-for="(item, index) in tese" :key="index">
		    			<div class="nei">
		    				<p v-html="item.xiangqing"></p>
		    			</div>
		    		</div>
		    	</div>
			</div>
	    </div>
	    <!-- 课程收益 -->
	    <div class="shouyi">
	    	<div class="inner">
	    		<h5 class="dabiaoti">
	    			课程收益
	    		</h5>
	    		<div class="underline"></div>
	    		<div class="content">
	    			<div class="neirongbox" v-for="(item, index) in shouyi">
	    				<div class="num">{{item.num}}</div>
	    				<p class="xiangqing">{{item.xiangqing}}</p>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- 课程略影 -->
	    <!-- <div class="luoying">
	    	<div class="inner">
	    		<h5 class="dabiaoti">
	    			课程略影
	    		</h5>
	    		<div class="underline"></div>
				<div class="content">
					<div class="topbox">
						<div class="photobox topphoto">
							<div class="top">
							</div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
						<div class="photobox topphoto">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
						<div class="photobox topphoto">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
						<div class="photobox topphoto">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
						</div>
					</div>
					<div class="photoboxft1">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
					</div>
					<div class="photoboxft2">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
					</div>
					<div class="photoboxft3">
							<div class="top"></div>
							<div class="foot"></div>
							<img src="/imgs/lunbotu/2.jpg" alt="">
					</div>
				</div>
	    	</div>
	    </div> -->
	    <!-- 师资力量 -->
	    <!-- <div class="power">
	    	<div class="inner">
	    		<h5 class="dabiaoti">
	    			师资力量
	    		</h5>
	    		<div class="underline"></div>
	    		<div class="content">
	    			<div class="neirongbox" v-for="(item, index) in teacher" :key="index">
	    				<div class="left">
	    					<img :src="item.imgs" alt="">
	    				</div>
	    				<div class="right">
	    					<p class="title">{{item.titles}}</p>
	    					<p class="xiangqing">{{item.xiangqing}}</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div> -->
	</div>
</template>
<style type="text/css" lang="less" scoped>
.shengyazhidao {
	.inner {
		width: 1200px;
		margin: 0 auto;
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
		margin-bottom: 40px;
	}
	// 顶部通栏大banner
	.banner {
		width: 100%;
		font-size: 0px;
		img {
			width: 100%;
		}
	}
	// 教育模式发生颠覆性变化 我该如何适应？
	.bianhua {
		padding-top: 60px;
		padding-bottom: 60px;
		.content {
			padding-top: 50px;
			height: 274px;
			.neirongbox {
				width: 186px;
				height: 152px;
				padding: 72px 32px 0px 32px;
				font-size: 18px;
				line-height: 24px;
				color: #666666;
				box-shadow:0 0 20px rgba(176,224,251,.5);
				float: left;
				margin-right: 66px;
				position: relative;
				&:last-child {
					margin-right: 0px;
				}
				.yuan {
					width: 90px;
					height: 90px;
					border-radius: 50%;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					position: absolute;
					top: -45px;
					left: 80px;
					background-color: #ffffff;
					.arrow {
						width: 0px;
						height: 0px;
						border-style: solid;
						border-width: 49px 23px 0px 23px;
						border-color: #5cb4eb transparent transparent transparent;
						position: absolute;
						left: 22px;
						top: 24px;
						.smallarrow {
							width: 0px;
							height: 0px;
							border-style: solid;
							border-width: 16px 23px 0px 23px;
							border-color: #ffffff transparent transparent transparent;
							position: absolute;
							left: -23px;
							top: -49px;
						}
					}
				}
			}
		}
	}
	// 如何突破桎梏，建立专业体系？
	.tupo {
		padding-top: 60px;
		padding-bottom: 20px;
		height: 580px;
		background-color: #f6f7fb;
		.content {
			height: 490px;
			background: url(/imgs/shengyazhidao/shengyazhidaojiaoshi.jpg) center center;
			// .left {
			// 	float: left;
			// 	width: 490px;
			// 	height: 490px;
			// 	position: relative;
			// 	margin-right: 140px;
			// 	background: url(/imgs/shengyazhidao/sanjiao.png);
			// 	z-index: 2;
			// 	background-size: 490px 490px;
			// 	p {
			// 		line-height: 98px;
			// 		height: 98px;
			// 		text-align: center;
			// 		font-size: 20px;
			// 		color: #ffffff;
					
			// 	}
			// 	.one {
			// 		line-height: 160px;
			// 		font-size: 20px;
			// 		// margin-left: 13px;
			// 	}
			// }
			// .right {
			// 	width: 570px;
			// 	height: 490px;
			// 	float: left;
			// 	.neirongbox {
			// 		width: 570px;
			// 		height: 98px;
			// 		position: relative;
			// 		.yuan {
			// 			float: left;
			// 			width: 25px;
			// 			height: 98px;
			// 			margin-right: 20px;
			// 			.big {
			// 				margin-top: 36.5px;
			// 				border-radius: 50%;
			// 				width: 17px;
			// 				height: 17px;
			// 				padding: 4px;
			// 				background-color: #b1d8f3;
			// 				.small {
			// 					width: 17px;
			// 					height: 17px;
			// 					background-color: #6dbcef;
			// 					border-radius: 50%;
			// 				}
			// 			}
			// 		}
			// 		.neirong {
			// 			width: 525px;
			// 			height: 98px;
			// 			.title {
			// 				font-size: 18px;
			// 				height: 50px;
			// 				line-height: 60px;
			// 				color: #157def;
			// 			}
			// 			.xiangqingtop {
			// 				font-size: 16px;
			// 				height: 24px;
			// 				line-height: 24px;
			// 				color: #666666;
			// 			}
			// 			.xiangqingft {
			// 				.xiangqingtop;
			// 			}
			// 		}
			// 		.underline0 {
			// 			position: absolute;
			// 			left: -360px;
			// 			top: 49px;
			// 			width: 360px;
			// 			height: 1px;
			// 			background-color: #00b7ee;
			// 		}
			// 		.underline1 {
			// 			.underline0;
			// 			width: 310px;
			// 			left: -310px;
			// 		}
			// 		.underline2 {
			// 			.underline0;
			// 			width: 264px;
			// 			left: -264px;
			// 		}
			// 		.underline3 {
			// 			.underline0;
			// 			width: 214px;
			// 			left: -214px;
			// 		}
			// 		.underline4 {
			// 			.underline0;
			// 			width: 165px;
			// 			left: -165px;
			// 		}
			// 	}
			// }
		}
	}
	// 培训特色
	.tese {
		padding-top: 60px;
		padding-bottom: 60px;
		// height: 320px;
		background: url(/imgs/shengyazhidao/beijing.jpg) no-repeat;
		background-size: 100% 100%;
		color: #ffffff;
		.dabiaoti {
			color: #ffffff;
		}
		.underline {
			background-color: #ffffff;
		}
		.jieshi {
			text-align: center;
			font-size: 18px;
		}
		.content {
			width: 1200px;
			height: 200px;
			padding-top: 80px;
			padding-bottom: 20px;
			.wai {
				float: left;
				width: 110px;
				height: 110px;
				border: 1px solid #fff;
				padding: 15px;
				margin-right: 210px;
				transform: rotate(45deg);
				color: #ffffff;
				font-size: 18px;
				&:last-child {
					margin-right: 0px;
				}
				.nei {
					width: 110px;
					height: 110px;
					background-color: #93d2fa;
					p {
						transform: rotate(-45deg);
						position: relative;
						text-align: center;
						left: 4px;
						top: 31px;
					}
				}
			}
		}
	}
	// 课程收益
	.shouyi {
		padding: 60px 0px;
		height: 340px;
		.content {
			height: 245px;
			.neirongbox {
				float: left;
				width: 190px;
				height: 180px;
				padding: 30px 40px 0px 40px;
				margin-right: 40px;
				box-shadow:0 0 20px rgba(176,224,251,.5);
				// background:url(/imgs/tubiao/ziyuanpinggu.png) no-repeat center 40px;
				&:last-child {
					margin-right: 0px;
				}
				.num {
					width: 50px;
					height: 50px;
					text-align: center;
					margin: 0 auto;
					font-size: 20px;
					color: #156def;
					line-height: 50px;
					border: 1px solid #156def;
					border-radius: 50%;
				}
				.xiangqing {
					color: #666666;
					margin-top: 20px;
					font-size: 18px;
					line-height: 30px;
				}
			}
		}
	}
	// 课程略影
	.luoying {
		padding: 60px 0px;
		height: 630px;
		background-color: #f6f7fb;
		.content {
			padding-top: 30px;
			height: 510px;
			position: relative;
			.topphoto {
				float: left;
				margin-right: 80px;
				&:last-child {
					margin-right: 0px;
				}
			}
			.photobox {
				width: 240px;
				height: 280px;
				position: relative;
				overflow: hidden;
				// 上三角
				.top {
					position: absolute;
					width: 0px;
					height: 0px;
					left: 0px;
					top: 0px;
					border-width: 0px 120px 65px 120px;
					border-style: solid; 
					border-color: #f6f7fb #f6f7fb transparent #f6f7fb;
				}
				// 下三角
				.foot {
					position: absolute;
					width: 0px;
					height: 0px;
					left: 0px;
					bottom: 0px;
					border-width: 65px 120px 0px 120px;
					border-style: solid; 
					border-color: transparent #f6f7fb #f6f7fb #f6f7fb;
				}
				img {
					width: 240px;
					height: 280px;
				}
			}
			.photoboxft1 {
				.photobox;
				position: absolute;
				left: 160px;
				top: 288px;
			}
			.photoboxft2 {
				.photobox;
				position: absolute;
				left: 480px;
				top: 288px;
			}
			.photoboxft3 {
				.photobox;
				position: absolute;
				left: 802px;
				top: 288px; 
			}
		}
	}
	// 师资力量
	.power {
		padding-top: 60px;
		padding-bottom: 60px;
		.content {
			height: 520px;
			.neirongbox {
				float: left;
				width: 300px;
				height: 140px;
				padding: 20px 30px 0px 30px;
				margin-right: 60px;
				margin-bottom: 26px;
				box-shadow:0 0 20px rgba(176,224,251,.5);
				&:nth-child(3), &:nth-child(6), &:nth-child(9) {
					margin-right: 0px;
				}
				.left {
					width: 54px;
					height: 140px;
					float: left;
					img {
						width: 54px;
						height: 54px;
						border-radius: 50%;
					}
				}
				.right {
					margin-left: 15px;
					width: 231px;
					float: left;
					.title {
						height: 50px;
						line-height: 50px;
						font-size: 18px;
						color: #333333;
					}
					.xiangqing {
						color: #666666;
						font-size: 16px;
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
	data() {
		return {
			// 教育模式发生颠覆性变化
			bianhua: [
				{ xiangqing: '怎样指导学生及家长科 学选科、为高考志愿填 报提供依据？' },
				{ xiangqing: '如何一对一帮助学生明 确未来方向、找到学习 兴趣？ ' },
				{ xiangqing: '如何帮助学生发展天赋 潜力、培养核心竞争力 ？' },
				{ xiangqing: '独木难成林，缺少调研 小组，如何反思和提升 ？' }
			],
			// 如何突破桎梏，建立专业体系？
			tupo: [
				{ titles: '认证班', xiangqingtop: '名师指导，传授前沿的生涯规划方法，颁发《xxx》证书', xiangqingft: '培训对象：生涯成长导师，心理骨干教师' },
				{ titles: '高级班', xiangqingtop: '授之以鱼，讲授生涯课程的设计思路，让教师能够独立编写校本教材', xiangqingft: '培训对象：生涯成长导师，心理骨干教师' },
				{ titles: '中级班', xiangqingtop: '学以致用，将生涯规划理论用于教学活动中', xiangqingft: '培训对象：班主任、学科老师、生涯或心理老师' },
				{ titles: '初级班', xiangqingtop: '培养职业素质，明晰生涯教育的教学基础', xiangqingft: '培训对象：班主任、学科老师、生涯或心理老师' },
				{ titles: '生涯大讲堂', xiangqingtop: '传达时代信息，理解新高考政策', xiangqingft: '培训对象：全体教职工、家长、学生' }
			],
			// 培训特色
			tese: [
				{ xiangqing: '贴近新课改<br/>的教育模式' },
				{ xiangqing: '进阶体系<br/>学习' },
				{ xiangqing: '线上线下<br/>融合' },
				{ xiangqing: '获取认证<br/>证书' }
			],
			// 课程收益
			shouyi: [
				{ num: '01', xiangqing: '把握高考政策脉搏，紧跟 教学模式改革', tubiao: '' },
				{ num: '02', xiangqing: '掌握生涯规划原理，成为 生涯规划行家', tubiao: '' },
				{ num: '03', xiangqing: '精通课程教案和校本教 材设计，成为生涯教学 名师 ', tubiao: '' },
				{ num: '04', xiangqing: '上千教师教辅资源，打造 交流园地，促进共同成长 ', tubiao: '' }
			],
			// 师资力量
			teacher: [
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' },
				{ imgs: '/imgs/lunbotu/0.jpg', titles: '张老师', xiangqing: '技术研发与教育研发双引擎研 发团队，拥有多项国家发明专 利产品' }
			]
		}
	},
	mounted() {

	}
}
</script>
