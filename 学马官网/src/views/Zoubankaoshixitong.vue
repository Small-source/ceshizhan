<template>
	<!-- 走班考试系统页面 -->
	<div class="zoubankaoshixitong">
		<!-- 头部通栏大banner -->
	 	<div class="banner">
	 		<img src="/imgs/zoubankaoshixitong/zoubankaoshixitongbanner.jpg" alt="">
	 	</div>
		<!-- 系统简介 -->
		<div class="xitongjianjie">
			<div class="inner">
				<h5 class="dabiaoti">系统简介</h5>
				<div class="underline"></div>
				<div class="content">
					<img src="/imgs/zoubankaoshixitong/xitongjianjie01.png" alt="">
					<p>基于选科走班教学模式 的考试成绩统计系统，系统涵盖多维度、多层次的成绩分析功能，可以帮助学校快速分析整体成绩水平，并兼顾个体，记录学生个体的成绩走势，是可视化教学管理的典型辅助工具</p>
				</div>
			</div>
		</div>
		<!-- 覆盖角色 -->
		<div class="fugaijuese">
			<div class="inner">
				<h5 class="dabiaoti">覆盖角色</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="lis">
						<img src="/imgs/zoubankaoshixitong/jiaoyuzhuguanbumenlingdao.jpg" alt="">
						<p class="juese">教育主管部门领导</p>
						<p class="xiangqing">教育主管部门报告<br/>命题质量分析报告<br/>校级分析报告</p>	
					</div>
					<div class="lis">
						<img src="/imgs/zoubankaoshixitong/xiaozhang.jpg" alt="">
						<p class="juese">校长</p>
						<p class="xiangqing">命题质量分析报告<br/>校级分析报告<br/>学科分析报告</p>	
					</div>
					<div class="lis">
						<img src="/imgs/zoubankaoshixitong/jiaowuzhuren.jpg" alt="">
						<p class="juese">教务主任</p>
						<p class="xiangqing">教学班成绩分析报告<br/>学科成绩分析报告<br/>学生个体分析报告</p>	
					</div>
					<div class="lis">
						<img src="/imgs/zoubankaoshixitong/xuekejiaoshi.jpg" alt="">
						<p class="juese">学科教师</p>
						<p class="xiangqing">命题质量分析报告<br/>学科分析报告<br/>学生报告</p>	
					</div>
					<div class="lis">
						<img src="/imgs/zoubankaoshixitong/xueshengjiazhang.jpg" alt="">
						<p class="juese">学生/家长</p>
						<p class="xiangqing">错题分析<br/>知识点与能力结构分析 </p>	
					</div>
				</div>
			</div>
		</div>
		<!-- 系统功能 -->
		<!-- 01智能数据分析，助力教学研究-->
		<div class="xitonggongneng">
			<div class="inner">
				<h5 class="dabiaoti">系统功能</h5>
				<div class="underline"></div>
				<div class="content">
					<h6 class="xiaobiaoti">
						<span>01</span>
						智能数据分析，助力教学研究
					</h6>
					<p class="jieshi">
						同时支持行政班和教学班的成绩分析，自动生成学科教研和命题质量的分析报告，帮助教师分析阶段性教学成果
					</p>
					<div class="images" @mouseenter="enter()" @mouseleave="leave()">
						<img :src="item.url" alt=""  v-for="(item, index) in xitonggongneng" :key="index" :style="xitonggongnengStyles[index]">
					</div>
				</div>
			</div>
		</div>
		<!-- 02化繁为简，一键导出各项成绩 -->
		<div class="shujufenxi">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>02</span>
					化繁为简，一键导出各项成绩
				</h6>
				<p class="jieshi">
					系统可一键导出不同学科，不同层次学科成绩，为校长、教导主任、学科教师的教学决策提供参考依据
				</p>
				<div class="content">
				</div>
			</div>
		</div>
		<!-- 03告别题海，因材施教，高效提分 -->
		<div class="teamMessage">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>03</span>
					告别题海，因材施教，高效提分
				</h6>
				<p class="jieshi">
					根据各学科成绩，智能匹配知识弱项，教师可推送给学生，实现个性化练习和辅导
				</p>
				<img src="/imgs/zoubankaoshixitong/03gaobietihai.jpg" alt="">
			</div>
		</div>
		<!-- 04全方位数据分析，挖掘分数背后的信息 -->
		<div class="forecast">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>04</span>
					全方位数据分析，挖掘分数背后的信息
				</h6>
				<p class="jieshi">
					系统可生成各维度的成绩统计和排名信息，自动生成丰富的分析图表，展现专家级分析报告
				</p>
				<div class="content">
					<div class="relativebox">
						<div class="absolutebox">
							<div class="underline"></div>
							<h6>系统模拟成绩</h6>
							<p>系统将学生的模拟成绩赋 分计算，估算高考成绩水平</p>
						</div>
					</div>
					<div class="relativebox">
						<div class="absolutebox">
							<div class="underline"></div>
							<h6>赋分计算</h6>
							<p>系统将学生的模拟成绩赋 分计算，估算高考成绩水平</p>
						</div>
					</div>
					<div class="relativebox">
						<div class="absolutebox">
							<div class="underline"></div>
							<h6>估算高考成绩水平</h6>
							<p>系统将学生的模拟成绩赋 分计算，估算高考成绩水平</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 05好记忆，不如多练习 -->
		<div class="duolianxi">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>05</span>
					好记忆，不如多练习
				</h6>
				<p class="jieshi">
					系统可将考试或练习错题生成个人错题本，学生可多加练习，巩固知识点
				</p>
				<div class="images" @mouseenter="enter()" @mouseleave="leave()">
					<img :src="item.url" alt="" v-for="(item, index) in duolianxi" :key="index" ref="item.idx" :style="duolianxiStyles[index]">
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	* {
		list-style:none;
		text-decoration: none;
	}
	.zoubankaoshixitong {
		.banner {
			width: 100%;
			font-size: 0px;
			img {
				width: 100%;
			}
		}
		.inner {
			width: 1200px;
			margin: 0 auto;
		}
		.dabiaoti {
			text-align: center;
			font-size: 24px;
			color: #156dfe;
			line-height: 24px;
			height: 24px;
			margin-bottom: 20px;
		}
		.underline {
			width: 60px;
			height: 4px;
			margin: 0 auto;
			background-color: #156dfe;
			margin-bottom: 40px;
		}
		.xiaobiaoti {
			height: 45px;
			line-height: 45px;
			font-size: 20px;
			span {
				width: 45px;
				height: 45px;
				// display: block;
				float: left;
				border-radius: 5px;
				background-color: #5db7f0;
				margin-right: 25px;
				text-align: center;
			}
		}
		.jieshi {
			padding-left: 70px;
			height: 36px;
			line-height: 36px;
			font-size: 18px;
			margin-bottom: 30px;
		}
		// 系统简介
		.xitongjianjie {
			padding-top: 60px;
			padding-bottom: 60px;
			.dabiaoti {
				color: #156def;
			}
			.content {
				padding: 40px 0px 35px 60px;
				height: 435px;
				background: url(/imgs/zoubankaoshixitong/xitongjianjie.png) no-repeat;
				background-size: 1200px 500px;
				img {
					width: 660px;
					height: 435px;
					border-radius: 10px;
					float: left;
				}
				p {
					padding: 165px 72.5px 0px 72.5px;
					width: 335px;
					font-size: 18px;
					line-height: 30px;
					color: #666666;
					float: left;
				}
			}
		}
		// 覆盖角色
		.fugaijuese {
			padding-top: 60px;
			padding-bottom: 60px;
			background-color: #f6f7fb;
			.dabiaoti {
				color: #156def;
			}
			.content {
				margin-top: 80px;
				height: 250px;
				.lis {
					padding-top: 65px;
					position: relative;
					height: 185px;
					float: left;
					width: 222px;
					margin-right: 22px;
					background-color: #ffffff;
					border-radius: 5px;
					&:last-child {
						margin-right: 0px;
					}
					img {
						width: 130px;
						height: 130px;
						border-radius: 50%;
						position: absolute;
						left: 50%;
						top: -65px;
						margin-left: -65px;
					}
					.juese {
						height: 78px;
						line-height: 78px;
						text-align: center;
						font-size: 18px;
						color: #333333;
					}
					.xiangqing {
						text-align: center;
						font-size: 16px;
						color: #666666;
						text-align: center;
					}
				}
			}
		}
		// 系统功能
		// 01智能数据分析，助力教学研究
		.xitonggongneng {
			padding-top: 60px;
			background-image: url(/imgs/zoubankaoshixitong/beijing1.jpg);
			background-size: 100% 822px;
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				background-color: #ffffff;
			}
			.content {
				color: #ffffff;
				.jieshi {
					padding-left: 70px;
					height: 36px;
					line-height: 36px;
					font-size: 16px;
					margin-bottom: 30px;
				}
				.images {
					width: 1200px;
					height: 562px;
					position: relative;

					img {
						position: absolute;
						border-radius: 15px;
						transition: all 1s;
					}
				}
			}
		}
		// 02化繁为简，一键导出各项成绩
		.shujufenxi {
			padding-top: 108px;
			padding-bottom: 60px;
			color: #156dfe; 
			.xiaobiaoti {
				span {
					color: #ffffff;
				}
			}
			.content {
				padding-top: 50px;
				overflow: hidden;
				height: 310px;
				background: url(/imgs/zoubankaoshixitong/huafanweijian.png) no-repeat center center;
			}
		}
		// 03告别题海，因材施教，高效提分 
		.teamMessage {
			padding-top: 60px;
			padding-bottom: 60px;
			background-image: url(/imgs/zoubankaoshixitong/beijing2.jpg);
			height: 622px;
			background-position: center center;
			background-size: 100% 742px;
			.xiaobiaoti {
				color: #fff;
				span {
					color: #fff;
				}
			}
			.jieshi {
				color: #fff;
			}
			img {
				margin-top: 20px;
				width: 1200px;
				height: 510px;
				border-radius: 10px;
			}
		}
		// 04全方位数据分析，挖掘分数背后的信息
		.forecast {
			padding-top: 60px;
			padding-bottom: 60px;
			color: #156dfe; 
			.xiaobiaoti {
				span {
					color: #ffffff;
				}
			}
			.content {
				padding: 50px 20px;
				height: 318px;
				.relativebox {
					float: left;
					width: 316px;
					height: 318px;
					background: url(/imgs/zoubankaoshixitong/xitongmonichengji.png) no-repeat center center;
					background-size: 316px 318px;
					border-radius: 5px;
					margin-right: 106px;
					background-size: 316px 318px;
					position: relative;
					overflow: hidden;
					&:nth-child(2) {
						background-image: url(/imgs/zoubankaoshixitong/fufenjisuan.png);
					}
					&:last-child {
						background-image: url(/imgs/zoubankaoshixitong/gusuangaokaochengjishuiping.png);
						margin-right: 0px;
					}
					.absolutebox {
						width: 188px;
						height: 120px;
						position: absolute;
						// border: 1px solid #000;
						padding: 20px 40px;
						background-color: #ffffff;
						border-radius: 10px;
						left: 24px;
						bottom: -94px;
						cursor: pointer;
						&:hover {
							bottom: -5px;
							transition: all 1s;
							.underline {
								background-color: #156dfe;
							}
							h6 {
								color: #156dfe;
							}
						}
						.underline {
							width: 40px;
							height: 4px;
							margin: 0 auto;
							background-color: #666666;
						}
						h6 {
							font-size: 18px;
							height: 46px;
							line-height: 46px;
							text-align: center;
							color: #666666;
						}
					}
				}
			}
		}
		// 05好记忆，不如多练习
		.duolianxi {
			padding-top: 60px;
			background: url(/imgs/zoubankaoshixitong/beijing2.jpg) no-repeat;
			background-size: 100% 752px;
			.xiaobiaoti {
				color: #ffffff;
				span {
					color: #ffffff;
				}
			}
			.jieshi {
				margin-bottom: 40px;
				color: #fff;
			}
			.images {
				width: 1200px;
				height: 570px;
				position: relative;
				img {
					border-radius: 15px;
					transition: all 1s;
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
			// 01智能数据分析，助力教学研究
			xitonggongneng: [
				{ url: '/imgs/zoubankaoshixitong/xitonggongneng01.png', idx: '0' },
				{ url: '/imgs/zoubankaoshixitong/xitonggongneng02.png',  idx: '1' },
				{ url: '/imgs/zoubankaoshixitong/xitonggongneng03.png',  idx: '2' }
			],
			// 05好记忆，不如多练习
			duolianxi: [
			 { url: '/imgs/zoubankaoshixitong/duolianxi01.jpg', idx: '0' },
			 { url: '/imgs/zoubankaoshixitong/duolianxi02.jpg', idx: '1' },
			 { url: '/imgs/zoubankaoshixitong/duolianxi03.jpg', idx: '2' }
			],
			// 轮播图样式
			xitonggongnengStyles: [
				{width: '852px', height: '510px', left: '0px', top: '50px', zIndex: 0, position: 'absolute'},
		        {width: '852px', height: '560px', left: '175px', top: '0px', zIndex: 1000, position: 'absolute'},
		        {width: '852px', height: '510px', left: '384px', top: '50px', zIndex: 0, position: 'absolute'}
			],
			duolianxiStyles: [
				{width: '850px', height: '515px', left: '0px', top: '55px', zIndex: 0, position: 'absolute'},
		        {width: '850px', height: '570px', left: '175px', top: '0px', zIndex: 1000, position: 'absolute'},
		        {width: '850px', height: '515px', left: '350px', top: '55px', zIndex: 0, position: 'absolute'}
			],


		}
	},
	methods: {
		play() {
          this.timer = setInterval(this.autoplay,2000);
        },
        autoplay() {
          var pop1 = this.xitonggongnengStyles.shift();
          var pop2 = this.duolianxiStyles.shift();
          this.xitonggongnengStyles.push(pop1);
          this.duolianxiStyles.push(pop2);
        },
        enter() {
          clearInterval(this.timer);
        },
        leave() {
          clearInterval(this.timer);        
          this.play();
        }
	},
	mounted() {
		
	},
	created() {
		this.play();
	}
}
</script>
