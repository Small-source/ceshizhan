<template>
	<!-- 生涯课程页面 -->
	<div class="shengyakecheng">
		<div class="banner">
			<img src="/imgs/Shengyakecheng/Shengyakechengbanner.jpg" alt="">
		</div>
		<!-- 整体要突出核心点 -->
		<div class="tuchuhexin">
			<div class="inner">
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in tuchuhexin" :key="index" >
						<div class="tubiao" :style="item.tubiao"></div>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 课程简介 -->
		<div class="kechengjianjie">
			<div class="inner">
				<!-- 创新的课程模式 -->
				<h6 class="xiaobiaoti">
					<span>01</span>
					创新的课程模式
				</h6>
				<p class="jieshi">
					八大课型  分阶段、多模式、循序渐进的引导学生走上生涯规划之路
				</p>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in kechengjianjie" :key="index">
						<div class="moveBox">
							<div class="top">
								<p class="num">{{item.num}}</p>
								<p class="titles">{{item.titles}}</p>
								<div class="mark"></div>
							</div>
							<p class="xiangqing">{{item.xiangqing}}</p>
						</div>	
					</div>
				</div>
			</div>	
		</div>
		<!-- 02多样的课程形式 -->
		<div class="duoyang">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>02</span>
					多样的课程形式
				</h6>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in duoyang" :key="index">
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
					<div class="middlebox">
						多元授课模式，告别单一讲授， 带动全员互动，提升课堂参与度 ，拓展学生生涯视野
					</div>
				</div>
			</div>
		</div>
		<!-- 03体系化的课程设计 -->
		<div class="tixihua">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>03</span>
					体系化的课程设计
				</h6>
				<p class="jieshi">高度重视在目标引领下的自我分析与自主提升，通过阶梯式的课程更好地完成高中阶段的蜕变</p>
				<div class="content" @mouseenter="clear()" @mouseleave="leave()">
					<ul>
						<li class="neirongbox" v-for="(item, index) in tixihua" :style="styles[index]" :key="index">
							<div class="imgbox">
								<img :src="item.url" alt="">
							</div>
							<div class="nianji">{{item.nianji}}</div>
							<div class="title">{{item.titles}}</div>
							<div class="xiangqing">{{item.xiangqing}}</div>
						</li>
					</ul>
					<div class="btns">
						<div class="leftBtn" @click="left()"></div>
						<div class="rightBth" @click="right()"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 04丰富的课程资源 -->
		<div class="kechengziyuan">
			<div class="inner">
				<h6 class="xiaobiaoti">
					<span>04</span>
					丰富的课程资源
				</h6>
				<div class="content">
					<img src="/imgs/shengyakecheng/fengfudekechengziyuan.jpg" alt="">
					<p class="right">
						以课程为载体，包含8大单元20个主题的课程资源，同时包含教案、课件、教具等不同形式 课程资料包，主题全面，形式多样，帮助教师轻松开课
					</p>
				</div>
			</div>
		</div>
		<!-- 课程特色 -->
		<div class="courseItem">
			<div class="inner">
				<h5 class="dabiaoti">课程特色</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in courseItem" :key="index">
						<div class="yuan">
		    				<img :src="item.tubiao" alt="">
		    			</div>
		    			<p>{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 课程开发模式 -->
		<div class="kaifamoshi">
			<div class="inner">
				<h5 class="dabiaoti">课程开发模式</h5>
				<div class="underline"></div>
				<p class="jieshi">依据学校不同发展需求，提供多样的教材研发模式，满足学校和教师轻松无压力开展生涯教育课程为目的</p>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in kaifamoshi" :key="index">
						<img :src="item.url" alt="">
						<p class="title">{{item.num}}</p>
						<p class="xiangqing">
							{{item.xiangqing}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	.shengyakecheng {
		color: #666666;
		font-size: 16px;
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
			margin-bottom: 35px;
		}
		.xiaobiaoti {
			height: 45px;
			line-height: 45px;
			font-size: 20px;
			color: #156def;
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
		.jieshi {
			height: 40px;
			line-height: 40px;
			font-size: 18px;
			color: #666666;
			padding-left: 67px;
		}
		.banner {
			width: 100%;
			img {
				width: 100%;
			}
		}
		// 整体要突出核心点
		.tuchuhexin {
			padding: 80px 0px;
			// height: 335px;
			.content {
				height: 245px;
				.neirongbox {
					float: left;
					width: 274px;
					height: 245px;
					border-radius: 5px;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					margin-right: 189px;
					&:last-child {
						margin-right: 0px;
					}
					.tubiao {
						width: 274px;
						height: 110px;
					}
					.xiangqing {
						padding: 15px 40px;
						font-size: 18px;
						// color: #666666;
						line-height: 27px;
					}
				}
			}
		}
		// 课程简介
		.kechengjianjie {
			padding-top: 60px;
			padding-bottom: 40px;
			background-color: #f6f7fb;
			.content {
				padding-top: 20px;
				height: 320px;
				.neirongbox {
					width: 262px;
					height: 140px;
					position: relative;
					border-radius: 5px;
					float: left;
					margin-right: 50px;
					margin-bottom: 40px;
					overflow: hidden;
					&:hover .moveBox{
						left: 0px;
						top: -140px;
						transition: all 1s;
					}
					&:last-child {
						margin-right: 0px;
					}
					&:nth-child(4) {
						margin-right: 0px;
					}
					.moveBox {
						width: 262px;
						height: 280px;
						position: absolute;
						left: 0px;
						top: 0px;
					}
					.top {
						// padding-top: 20px;
						height: 140px;
						text-align: center;
						color: #ffffff;
						background: url(/imgs/lunbotu/3.jpg) no-repeat;
						position: relative;
						// color: #666666;
						.num {
							font-size: 36px;
							line-height: 45px;
							position: absolute;
							text-align: center;
							z-index: 2;
							width: 262px;
							height: 45px;
							top: 25px;
						}
						.titles {
							line-height: 26px;
							font-size: 16px;
							padding: 0px 15px;
							position: absolute;
							width: 232px;
							height: 26px;
							top: 75px;
							z-index: 2;
						}
						.mark {
							width: 262px;
							height: 140px;
							background-color: rgba(51,51,51,.2);
							position: absolute;
							left: 0px;
							top: 0px;
						}
					}
					.xiangqing {
						padding: 15px 20px;
						line-height: 24px;
						height: 120px;
						background-color: #ffffff;
						color: #666666;

					}
				}
			}
		}
		// 02多样的课程形式
		.duoyang {
			padding: 60px 0px;
			background-color: pink;
			background: url(/imgs/shengyakecheng/beijing3.jpg);
			.xiaobiaoti {
				color: #ffffff;
			}
			.content {
				height: 428px;
				margin-top: 60px;
				position: relative;
				background: url(/imgs/shengyakecheng/xitonggongneng.png) no-repeat center center;
				.neirongbox {
					width: 320px;
					height: 145px;
					padding: 0px 23px;
					background-color: #ffffff;
					border-radius: 5px;
					position: absolute;
					&:after {
						position: absolute;
				      	display: inline-block;
				      	top: 50%;
				      	right: -10px;
				      	margin-top: -10px;
				    	width: 0px;
				     	height: 0px;
				  	    content: '';
				     	border-style: solid;
				   	   	border-width: 10px;
				     	border-color: #ffffff #ffffff transparent transparent;
				     	transform: rotate(45deg);
					}
					.title {
						font-size: 18px;
						line-height: 42px;
						color: #333333;
					}
					.xiangqing {
						
					}
					&:first-child {
						left: 0;
						top: 0;
					}
					&:nth-child(2) {
						right: 0;
						top: 0;
						&:after {
							right: 355px;
							transform: rotate(-135deg);
						}
					}
					&:nth-child(3) {
						left: 0;
						bottom: 0;
					}
					&:nth-child(4) {
						right: 0;
						bottom: 0;
						&:after {
							right: 355px;
							transform: rotate(-135deg);
						}
					}
				}
				.middlebox {
					position: absolute;
					left: 50%;
					margin-top: -40px;
					margin-left: -132px;
					top: 50%;
					width: 265px;
					height: 80px;
					font-size: 18px;
				}
			}
		}
		// 03体系化的课程设计
		.tixihua {
			padding: 60px 0px;
			height: 518px;
			.content {
				width: 1200px;
				height: 380px;
				margin-top: 50px;
				position: relative;
				ul {
					width: 870px;
					height: 340px;
					margin: 0 auto;
					position: relative;
					.neirongbox {
						position: absolute;
						background-color: #ffffff;
						-ms-transition: all 1s;
						-webkit-transition: all 1s;
						border-radius: 5px;
						overflow: hidden;
						box-shadow:0 0 20px rgba(176,224,251,.5);
						.imgbox {
							padding: 30px 105px 0px 105px;
							img {
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
						.nianji {
							margin-top: 10px;
							line-height: 38px;
							font-size: 24px;
							text-align: center;

						}
						.title {
							line-height: 35px;
							text-align: center;
							font-size: 18px;
						}
						.xiangqing {
							padding: 0px 25px;
						}
					}
				}
				.btns {
					position: absolute;
					width: 1200px;
					height: 56px;
					left: 0;
					top: 50%;
					margin-top: -23px;
					.leftBtn {
						width: 20px;
						height: 56px;
						background-color: #d4edfd;
						position: absolute;
						left: 28px;
						top: 0px;
						&:hover {
							background-color: #156def;
							&:before {
								border-color: transparent #156def transparent transparent;
							}
						}
						&:before {
							content: '';
							display: inline-block;
							position: absolute;
							width: 0px;
							height: 0px;
							left: -28px;
							top: 0px;
							border-style: solid;
							border-width: 28px 28px 28px 0px;
							border-color: transparent #d4edfd transparent transparent;
						}
						&:after {
							content: '';
							display: inline-block;
							position: absolute;
							width: 0px;
							height: 0px;
							right: 0px;
							top: 0px;
							border-style: solid;
							border-width: 28px 28px 28px 0px;
							border-color: transparent #fff transparent transparent;
						}
					}
					.rightBth {
						.leftBtn;
						left: 1150px;
						&:hover {
							background-color: #156def;
							&:before {
								border-color: transparent  transparent transparent #156def;
							}
						}
						&:before {
							top: 0px;
							left: 20px;
							border-width: 28px 0px 28px 28px;
							border-color: transparent  transparent transparent #d4edfd; 
						}
						&:after {
							right: -8px;
							border-width: 28px 0px 28px 28px;
							border-color: transparent  transparent transparent #fff;
						}
					}
				}
			}

		}
		// 04丰富的课程资源
		.kechengziyuan {
			padding-top: 40px;
			padding-bottom: 60px;
			background-color: #f6f7fb;
			.content {
				margin-top: 40px;
				padding: 40px 65px 35px 65px;
				height: 434px;
				overflow: hidden;
				background: url(/imgs/shengyakecheng/fengfuziyuan.png) no-repeat center center;
				img {
					width: 660px;
					height: 434px;
					float: left;
					border-radius: 10px;
				}
				.right {
					float: left;
					width: 345px;
					height: 80px;
					margin-left: 65px;
					font-size: 18px;
					line-height: 30px;
					margin-top: 170px;
				}
			}
		} 
		// 课程特色
		.courseItem {
			padding: 60px 0px;
			height: 368px;
			.content {
				padding-top: 50px;
				height: 274px;
				.neirongbox {
					width: 186px;
					height: 152px;
					padding: 72px 32px 0px 32px;
					font-size: 18px;
					line-height: 30px;
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
						// overflow: hidden;
						img {
							width: 90px;
							height: 90px;
							border-radius: 50%;
						}
						// .arrow {
						// 	width: 0px;
						// 	height: 0px;
						// 	border-style: solid;
						// 	border-width: 49px 23px 0px 23px;
						// 	border-color: #5cb4eb transparent transparent transparent;
						// 	position: absolute;
						// 	left: 22px;
						// 	top: 24px;
						// 	.smallarrow {
						// 		width: 0px;
						// 		height: 0px;
						// 		border-style: solid;
						// 		border-width: 16px 23px 0px 23px;
						// 		border-color: #ffffff transparent transparent transparent;
						// 		position: absolute;
						// 		left: -23px;
						// 		top: -49px;
						// 	}
						// }
					}
				}
			}
		}
		.kaifamoshi {
			padding: 60px 0px;
			height: 400px;
			background-color: #f6f7fb;
			.jieshi {
				line-height: 24px;
				text-align: center;
			}
			.content {
				padding-top: 20px;
				.neirongbox {
					padding: 20px;
					width: 223px;
					height: 250px;
					float: left;
					border-radius: 5px;
					background-color: #ffffff;
					margin-right: 205px;
					&:last-child {
						margin-right: 0px;
					}
					img {
						width: 223px;
						height: 150px;
						border-radius: 5px;
					}
					.title {
						color: #156def;
						text-align: center;
						font-size: 20px;
						line-height: 40px;
					}
					.xiangqing {
						line-height: 27px;
					}
					&:first-child {
						.xiangqing {
							text-align: center;
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
			// 整体要突出核心点
			tuchuhexin: [
				{ xiangqing: '贴合新课改教学要求，以学 生为受益主体，注重学生的自我探索与发展', tubiao:'background:url(/imgs/tubiao/zhinengpaixu.png) no-repeat center center' },
				{ xiangqing: '结合西方先进教育理念与中国教育环境，倡导体验式教学方法', tubiao:'background:url(/imgs/tubiao/zoubanzhi.png) no-repeat center center' },
				{ xiangqing: '遵循中国青少年心理发展特点，注重学生在不同阶段的发展任务', tubiao:'background:url(/imgs/tubiao/xuanketiaozheng.png) no-repeat center center' }
			],
			// 课程简介
			kechengjianjie: [
				{ num: '01', titles: '破冰课-唤醒生涯意识', xiangqing: '使学生认识到高中段的学习与 专业、职业选择的紧密联系； 正视自己的优点和缺点、能力和兴趣。' },
				{ num: '02', titles: '测试课-做独一无二的自己', xiangqing: '客观了解职业兴趣、职业性格 、各种智能、价值观等自身特质；根据测试结果初步选择大学、专业及职业；引导学生主动地探索自我，规划人生' },
				{ num: '03', titles: '励志课-激发学生内在发展动力', xiangqing: '开展杰出校友和励志人物的讲 座、读书、沙龙等活动；激发和培养学生内在的发展动力， 学会自我管理与控制' },
				{ num: '04', titles: '访谈课-实践调研，分享感悟， 坚定信心', xiangqing: '对多位长辈做职业访谈，感悟 不同的择业历程、社会经验及人生情感；树立学生的人生与 职业理想，坚定信心，找到合 适的路径和方法' },
				{ num: '05', titles: '规划课-设定目标，制定计划， 奋力践行', xiangqing: '引导学生自我思考，确定发展 目标，找出优势及不足；制定实施办法，定期填写报表，以 达到“了解自我-确定目标-制 定规划-奋力践行”的目的' },
				{ num: '06', titles: '主题班会课-亮出目标，督促鼓励', xiangqing: '通过学生、教师和家长的监督，践行规划，见证成长。' },
				{ num: '07', titles: '行业体验课-职业体验，感受笃行', xiangqing: '以学习小组的形式，组织学生进行职业体验，提前感知生涯道路。' },
				{ num: '08', titles: '高考志愿实战课-有效践行，明晰方向', xiangqing: '为学生高考择校提供详细、实用、有针对性的院校、专职信息；进行志愿填报模拟演练，助力学生进入理想中的院校与专业。' }
			],
			// 02多样的课程形式
			duoyang: [
				{ titles: '班级授课', xiangqing: '以班级为单位，有目的、有计划地实施相 关活动，让学生主动参与活动，互相讨论 、分享、体验，实现学生自我生涯教育和生涯发展的目标' },
				{ titles: '专题讲座', xiangqing: '采取讲授、视频播放等方法，帮助学生了解生涯信息、习得规划方法' },
				{ titles: '主题班会', xiangqing: '开展生涯规划主题班会，让学生交流体会，提升认知，激发动力' },
				{ titles: '社会实践', xiangqing: '实地调查访谈，研究档案、探究典型案例等 ，通过实际案例，总结不同生涯的成长道路 、能力储备等要素' }
			],
			// 课程特色
			courseItem: [
				{ xiangqing: '采用主题系列的方式来统筹教材内容，知识性与趣味性相结合。', tubiao: '/imgs/shengyakecheng/1.png' },
				{ xiangqing: '以主题交叉、螺旋上升的方式来组织教学内容 ，由浅入深，逐步落实。', tubiao: '/imgs/shengyakecheng/2.png' },
				{ xiangqing: '配套齐全的教具与丰富的思考练习，理论与实 践相结合，便于教师操作。', tubiao: '/imgs/shengyakecheng/3.png' },
				{ xiangqing: '以贴近学生心理发展特征作为心理健康教育的重点，贴合真实的各职业的生涯特征。', tubiao: '/imgs/shengyakecheng/4.png' }
			],
			// 课程开发模式
			kaifamoshi: [
				{ url:'/imgs/shengyakecheng/01yinjinxuemayangebn.png', num: '01', xiangqing: '引入学马样本课程' },
				{ url:'/imgs/shengyakecheng/02.png', num: '02', xiangqing: '提供生涯培训与教辅资源 ，指导本校教师，自主编写教材' },
				{ url:'/imgs/shengyakecheng/03.png', num: '03', xiangqing: '提供生涯培训与教辅资源 ，带领本校教师，联合编写教材' }
			],
			// 03体系化的课程设计
			tixihua: [
				
				{ nianji: '高二', titles: '科学规划', xiangqing: '以“生涯探索和生涯规划”为主，包含情绪管理、人际关系、学习能力、学习习惯、自主教育、生涯规划与抉择辅导及意志品质培养等', url: '/imgs/shengyakecheng/gaoer.png' },
				{ nianji: '高一', titles: '自我发现', xiangqing: '以生涯觉察为主，包含自我认识、学习辅导和选课辅导等', url: '/imgs/shengyakecheng/gaoyi.png' },
				{ nianji: '高三', titles: '实战演练', xiangqing: '以“生涯决策”为主，包含升学辅导、考前辅导、志愿填报辅导和选择职业初步目标辅导等', url: '/imgs/shengyakecheng/gaosan.png' },
			],
			// 轮播图样式
			styles: [
		        {width: '330px', height: '340px', left: '0px', top: '20px', zIndex: 0, position: 'absolute', color: '#333333'},
		        {width: '355px', height: '380px', left: '250px', top: '0px', zIndex: 1000, background: '#73c0f0', position: 'absolute', color: '#fff'},
		        {width: '330px', height: '340px', left: '540px', top: '20px', zIndex: 0, position: 'absolute', color: '#333333'}
        	],
        	lock: true,
        	timer: null
		}
	},
	mounted() {		
	},
	methods: {
		play() {
          	this.timer = setInterval(this.right,1500);
        },
        // 清除定时器
        clear() {
        	clearInterval(this.timer);
        },
        // 鼠标离开开启定时器
        leave() {
          clearInterval(this.timer);        
          this.play();
        },
        right() {
        	var me = this;
        	if(this.lock === false) {
        		return;	
        	}
        	this.lock = false;
        	this.styles.push(this.styles.shift());
        	setTimeout(function() {
        		me.lock = true;
        	}, 1000);		
        },
        left() {
        	var me = this;	
          	if(this.lock === false) {
        		return;	
        	}
        	this.lock = false;
        	this.styles.unshift(this.styles.pop());
        	setTimeout(function() {
        		me.lock = true;
        	}, 1000);
        }
	},
	created () {
		this.play();
	}
}
</script>
