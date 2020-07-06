<template>
	<!-- 教辅资源 -->
	<div class="jiaofuziyuan">
		<!-- 顶部通栏大banner -->
	    <div class="banner">
	   		<img src="/imgs/jiaofuziyuan/jiaofuziyuanbanner.jpg" alt="">
	    </div>
	    <!-- 系统功能 -->
	    <!-- 01可视化的生涯资讯 -->
	    <div class="xitonggongneng">
	   		<div class="inner">
	   			<h5 class="dabiaoti">
	   				系统功能
	   			</h5>
	   			<div class="underline"></div>
	   			<h6 class="xiaobiaoti">
	   				<span>01</span>
	   				可视化的生涯资讯
	   			</h6>
	   			<p class="jieshi">通过职业说、专业说、职业人物访谈等生动有趣的展现方式，帮助学生主动探索并提升对外界的认知</p>
	   			<div class="content">
	   				<div class="neirongbox">
	   					
	   					<div class="imgBox">
	   						<img src="/imgs/jiaofuziyuan/1.png" alt="">
	   					</div>
	   					<p>
	   						<span>01</span>
	   						职业说
	   					</p>
	   				</div>
	   				<div class="neirongbox">
	   					<div class="imgBox">
	   						<img src="/imgs/jiaofuziyuan/2.png" alt="">
	   						
	   					</div>
	   					<p>
	   						<span>02</span>
	   						专业说
	   					</p>
	   				</div>
	   				<div class="neirongbox">
	   					<div class="imgBox">
	   						<img src="/imgs/jiaofuziyuan/3.png" alt="">
	   					</div>
	   					<p>
	   						<span>03</span>
	   						职业人物访谈
	   					</p>
	   				</div>
	   			</div>
	   		</div>
	    </div>
		<!-- 02顶尖的教辅视频 -->
		<div class="topVideo">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>02</span>
					顶尖的教辅视频
				</h6>
				<p class="jieshi">特邀国内外生涯专家与一线教师开展专家讲座，并精选课堂实录，供生涯教师观看、学习与借鉴，提升专业能力</p>
				<ul class="lis">
					<li>精选课堂实录</li>
					<li>学习与借鉴</li>
					<li>提升专业能力</li>
				</ul>
				<!-- <img src="/imgs/xuankejuece/xuankejuece.jpg" alt="" :class="activeImg ? 'active' : ''"> -->
			</div>	
		</div>
		<!-- 03体系化的生涯教材 -->
		<div class="tixihua">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>03</span>
					体系化的生涯教材
				</h6>
				<p class="jieshi">精编生涯专家智库团队研发的体系化教材，便于系统性学习，提升教师的生涯学科专业素养</p>
				<div class="content">
					<!-- <div class="left">
						<p class="neirongbox">
							精编生涯专家智库团队研发 体系化教材	
						</p>
						<p class="neirongbox">
							便于系统学习
						</p>
						<p class="neirongbox">
							提升教师的生涯学科专业素养	
						</p>
					</div> -->
					<div class="right">
						<img src="/imgs/jiaofuziyuan/xuankejuece.jpg" alt="" :class="activeRight ? 'active' : ''">
					</div>
				</div>
			</div>
		</div>
		<!-- 04主题齐全、素材丰富 -->
		<div class="theme">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>04</span>
					主题齐全、素材丰富
				</h6>
				<p class="jieshi">涵盖高中生涯教育五大方面的所有主题，并配套课件、教案等多种教学素材，保证教学资源的供应</p>
				<div class="content">
					<ul :class="activeTheme ? 'activelis' : ''">
						<li v-for="(item, index) in theme" :key="index" >
							<div class="images">
								<img :src="item.url" alt="">
							</div>
        					<p class="title">{{item.titles}}</p>
     					 </li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 05灵活的应用资源 -->
		<div class="ziyuan">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>05</span>
					灵活的应用资源
				</h6>
				<p class="jieshi">
					教学资源以活动方案和活动主题为单位储存，均可作为课程设计元件独立引用，满足教师的多元教学需求
				</p>
				<div class="content">
					<div :class="activeImg ? 'activeziyuan' : ''"></div>
					<!-- <div class="neirongbox">
						<img src="/imgs/jiaofuziyuan/11.png" alt="">
					</div>
					<div class="neirongbox">
						<div class="top"></div>
						<p>教学资源以活动方案和<br>活动单元为单元储存</p>
						<div class="ft"></div>
					</div>
					<div class="neirongbox">
						<img src="/imgs/jiaofuziyuan/12.png" alt="">
					</div>
					<div class="neirongbox">
						<div class="top"></div>
						<p>可以作为设计单元独立<br>引用</p>
						<div class="ft"></div>
					</div>
					<div class="neirongbox">
						<img src="/imgs/jiaofuziyuan/13.png" alt="">
					</div>
					<div class="neirongbox">
						<div class="top"></div>
						<p>满足教师的多元教学<br>需求</p>
						<div class="ft"></div>
					</div> -->
				</div>
			</div>
		</div>
		<!-- 系统特色 -->
		<div class="xitongtese">
			<div class="inner">
				<h5 class="dabiaoti">系统特色</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in xitongtese" :key="index" :style="{ background: 'url(/imgs/tubiao/' + item.url + ')', backgroundPosition: 'center 0px', backgroundRepeat: 'no-repeat' }">
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	.jiaofuziyuan {
		color: #666666;
		font-size: 16px;
		.inner {
			width: 1200px;
			margin: 0 auto;
		}
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
		.jieshi {
			padding-left: 70px;
			height: 36px;
			line-height: 36px;
			font-size: 18px;
			margin-bottom: 30px;
		}
		.xiaobiaoti {
			height: 45px;
			line-height: 45px;
			font-size: 20px;
			color: #333333;
			span {
				width: 45px;
				height: 45px;
				// display: block;
				float: left;
				border-radius: 5px;
				background-color: #5db7f0;
				margin-right: 25px;
				text-align: center;
				color: #ffffff;
			}
		}
		// 系统功能
	    // 01可视化的生涯资讯
		.xitonggongneng {
			padding: 60px 0px;
			height: 460px;
			.content {
				height: 270px;
				.neirongbox {
					float: left;
					margin-right: 204px;
					padding: 20px;
					width: 224px;
					height: 233px;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					&:last-child {
						margin-right: 0px;
					}
					&:hover {
						img {
							transform: rotate(360deg);
							transition: all 1s
						}
					}
					.imgBox {
						height: 183px;
						width: 224px;
						border-radius: 5px;
						border: 1px solid #dedede;
						text-align: center;
						line-height: 183px;
						img {
							vertical-align: middle;
						}
					}
					p {	
						text-align: center;
						font-size: 18px;
						line-height: 50px;
						span {
							color: #156def;
							margin-right: 10px;
						}
					}
				}
			}
		}
		// 02顶尖的教辅视频
		.topVideo {
			color: #ffffff;
			padding-top: 40px;
			padding-bottom: 60px;
			// height: 550px;
			// margin-bottom: 75px;
			background: url(/imgs/jiaofuziyuan/jiaofuziyuanbeijing.png) no-repeat;
			background-size: 100% 100%;
			font-size: 0px;
			position: relative;
			.xiaobiaoti {
				color: #ffffff;
			}
			.lis {
				padding-top: 80px;
				padding-bottom: 60px;
				overflow: hidden;
				// height: 75px;
				// line-height: 75px;
				li {
					float: left;
					padding-left: 90px;
					width: 152px;
					height: 75px;
					margin-right: 237px;
					line-height: 75px;
					font-size: 18px;
					background: url(/imgs/jiaofuziyuan/jingxuanshipin.png) no-repeat 0px center;
					&:last-child {
						margin-right: 0px;
						background: url(/imgs/jiaofuziyuan/xuexijiejian.png) no-repeat 0px center;
					}
					&:nth-child(2) {
						background: url(/imgs/jiaofuziyuan/tishengzhuanyenengli.png) no-repeat 0px center;
					}
				}
			}
			img {
				
				// width: 1200px;
				// height: 430px;
				// position: absolute;
				width: 100px;
				height: 100px;
				margin: 0 auto;
				// left: 50
				margin-top: 100px;
				margin-left: 550px;
				opacity: 0
			}
			.active {
				width: 1200px;
				height: 430px;
				margin-top: 30px;
				margin-left: 0px;
				opacity: 1;
				transition: all 2s;
			}
		}
		// 03体系化的生涯教材
		.tixihua {
			padding-top: 40px;
			padding-bottom: 60px;
			height: 630px;
			.content {
				height: 520px;
				// .left {
				// 	float: left;
				// 	width: 310px;
				// 	height: 520px;
				// 	.neirongbox {
				// 		height: 76px;
				// 		padding-left: 80px;
				// 		padding-top: 24px;
				// 		margin-top: 45px;
				// 		background: url(/imgs/jiaofuziyuan/tixihua01.png) no-repeat;
				// 		&:nth-child(2) {
				// 			background: url(/imgs/jiaofuziyuan/tixihua02.png) no-repeat;	
				// 		}
				// 		&:nth-child(3) {
				// 			background: url(/imgs/jiaofuziyuan/tixihua03.png) no-repeat;
				// 		}
				// 	}
				// }
				.right {
					width: 770px;
					height: 520px;
					// float: right;
					margin: 0 auto;
					overflow: hidden;
					position: relative;
					img {
						width: 770px;
						height: 520px;
						display: block;
						position: absolute;
						left: 770px;
						top: 0px;

					}
					.active {
						left: 0px;
						top: 0px;
						transition: all 1.5s;
					}
				}
			}
		}
		// 04主题齐全、素材丰富
		.theme {
			padding-top: 40px;
			padding-bottom: 60px;
			// height: 547px;
			background-color: #f6f7fb;
			.content {
				width: 1200px;
				height: 230px;
				.activelis {
					width: 1200px;
					height: 230px;
					position: relative;
					overflow: hidden;
					transition: all 1s;
					opacity: 1;
				}
				ul {
					width: 200px;
					margin: 0 auto;
					height: 230px;
					position: relative;
					overflow: hidden;
					opacity: 0;
					li {
						width: 220px;
						height: 230px;
						margin-right: 25px;
						float: left;
						background-color: #fff;
						&:hover {
							background-color: #88cff9;
							border-radius: 5px;
							.title {
								color: #fff;
							}
						}
						&:last-child {
							margin-right: 0px;
						}
						.images {
							width: 126px;
							height: 126px;
							padding: 20px 52px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.title {
							line-height: 64px;
							text-align: center;
							color: #333333;
							font-size: 22px;
						}
					}
				}
			}
		}
		// 05灵活的应用资源
		.ziyuan {
			padding-top: 40px;
			padding-bottom: 40px;
			// height: 720px;
			.content {
				
				div {
					padding-top: 20px;
					height: 440px;
					background: url(/imgs/jiaofuziyuan/yuanjian.png) no-repeat 200px 0px;
					opacity: 0;
					width: 100px;
					margin: 0 auto;
				}
				.activeziyuan {
					opacity: 1;
					transition: all 1s;
					width: 1200px;
				}
				// .neirongbox {
				// 	width: 400px;
				// 	height: 275px;
				// 	float: left;
				// 	.top {
				// 		height: 138px;
				// 	}
				// 	.ft {
				// 		background: url(/imgs/tubiao/downcircle.png) no-repeat center center;
				// 	}
				// 	p {
				// 		height: 52px;
				// 		text-align: center;
				// 		font-size: 18px;
				// 	}
				// 	.ft {
				// 		height: 95px;

				// 	}
				// 	img {
				// 		width: 400px;
				// 		height: 275px;
				// 	}
				// 	&:nth-child(2) {
				// 		.top {
				// 			background: url(/imgs/tubiao/jiaocai.png) no-repeat center center;
				// 		}
				// 	}
				// 	&:nth-child(4) {
				// 		.top {
				// 			background: url(/imgs/tubiao/sheji.png) no-repeat center center;
				// 		}
				// 	}
				// 	&:nth-child(6) {
				// 		.top {
				// 			background: url(/imgs/tubiao/jiaoju.png) no-repeat center center;
				// 		}
				// 	}
				// }
			}
		}
		// 系统特色
		.xitongtese {
			padding-top: 60px;
			height: 390px;
			background: url(/imgs/jiaofuziyuan/beijingjiaofu02.jpg) no-repeat;
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				background-color: #ffffff;
			}
			.content {
				height: 280px;
				margin-top: 20px;
				.neirongbox {
					float: left;
					padding-top: 95px;
					width: 192px;
					margin-right: 312px;
					color: #ffffff;
					&:last-child {
						margin-right: 0px;
					}
					.title {
						font-size: 18px;
						text-align: center;
						margin-bottom: 10px;
					}
					.xiangqing {
						line-height: 22px;
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
			// 系统特色
			xitongtese: [
				{ url: 'shengyaziyuan.png', titles: '生涯资源共建共享', xiangqing: '支持个体教师资源的上传、下载与分享，构建课程生态系统，共享共建专业优质资源' },
				{ url: 'ziyuanxitong.png', titles: '资源系统个性管理', xiangqing: '教师可利用共享区已有的资源备课，同时可自己收集和制作资源进行替换，实现个性化资源库管理' },
				{ url: 'xiaobenjiaocai.png', titles: '校本教材在线编辑', xiangqing: '教师可直接引用系统优质资源，在线完成教学设计、教学大纲、教学课件、校本教材的设计与撰写，享受高效轻松的备课模式' }
			],
			// 04主题齐全、素材丰富
			theme: [
				{ titles: '生涯适应', xiangqing: '以“生涯探索和生涯规划”为主，包 含情绪管理、人际关系、学习能力、 学习习惯、自主教育、生涯规划与抉 择辅导及意志品质培养等', url: '/imgs/jiaofuziyuan/shengyashiying.png' },
				{ titles: '自我探索', xiangqing: '以“生涯探索和生涯规划”为主，包 含情绪管理、人际关系、学习能力、 学习习惯、自主教育、生涯规划与抉 择辅导及意志品质培养等', url: '/imgs/jiaofuziyuan/02ziwotansuo.png' },
				{ titles: '外部探索', xiangqing: '以“生涯探索和生涯规划”为主，包 含情绪管理、人际关系、学习能力、 学习习惯、自主教育、生涯规划与抉 择辅导及意志品质培养等', url: '/imgs/jiaofuziyuan/03waibutansuo.png' },
				{ titles: '生涯决策', xiangqing: '以“生涯探索和生涯规划”为主，包 含情绪管理、人际关系、学习能力、 学习习惯、自主教育、生涯规划与抉 择辅导及意志品质培养等', url: '/imgs/jiaofuziyuan/04shengyajuece.png' },
				{ titles: '素养提升', xiangqing: '以“生涯探索和生涯规划”为主，包 含情绪管理、人际关系、学习能力、 学习习惯、自主教育、生涯规划与抉 择辅导及意志品质培养等', url: '/imgs/jiaofuziyuan/05suyangtisheng.png' },
			],
        	scrollTop: 0,
        	// 02顶尖的教辅视频控制图片的过渡效果
        	activeImg: false,
        	// 03体系化的生涯教材 控制图片从右侧移入
        	activeRight: false,
        	activeTheme: false

		}
	},
	
	methods: {
		play() {
          this.timer = setInterval(this.autoplay,2000);
        },
        autoplay() {
          var pop = this.styles.shift();
          this.styles.push(pop);
        },
        enter() {
          clearInterval(this.timer);
        },
        leave() {
          // console.log('从新开启定时器');
          clearInterval(this.timer);        
          this.play();
        },

        // 屏幕卷动事件
        scrollTops() {
    		// this.scroll = document.documentElement.scrollTop;
    		this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    		console.log(this.scrollTop)
        	// 02顶尖的教辅视频控制图片的过渡效果
    		if(this.scrollTop > 2325) {
    			this.activeImg = true;
    		} 
        	// 03体系化的生涯教材 控制图片从右侧移入
    		if(this.scrollTop > 1200) {
    			this.activeRight = true;
    		}
    		if(this.scrollTop > 1880) {
    			this.activeTheme = true;
    		} 
   		}
	},
	created () {
		// this.play();
	},
	mounted() {
		window.addEventListener('scroll', this.scrollTops);
	}

}
</script>
