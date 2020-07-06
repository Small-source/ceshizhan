<template>
	<!-- 生涯测评和规划页面 -->
	<div class="shengyaceping">
	 	<div class="header">
	 		<img src="/imgs/shengyaceping/shengyacepingbanner.jpg" alt="">
	 	</div>
	 	<!-- 为什么要进行生涯测评和规划 -->
		<div class="why">
			<div class="inner">
				<h6 class="dabiaoti">为什么要进行生涯测评和规划</h6>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongBox" v-for="(item, index) in why" :key="index">
						{{item.xiangqing}}
					</div>
					<div class="middle"></div>
				</div>
			</div>
		</div>
		<!-- 01测量维度 -->
		<div class="weidu">
			<div class="inner">
				<div :class="activeWeidu ? 'active1' : 'content'">
					<div class="left">
						<div class="title">测量维度</div>
						<div class="xiangqing">系统通过测试个人的人格（Personality）、潜能（Ability）、兴趣（Interest）
							包括人格40个维度、12项基本潜能、19种职业兴趣，实现有人格特性适合，
							有职业兴趣倾向，有潜力发展的精准职业定位，并对适合该职业、专业领域
							的原因进行科学解释
						</div>
					</div>
					<div class="right">
					</div>
				</div>
			</div>
		</div>
		<!-- 02权威科学的测评方法 -->
		<div class="kexueceping">
			<div class="inner">
				<div :class="activeCeping ? 'active2' : 'content'">
					<div class="left">
					</div>
					<div class="right">
						<div class="title">权威科学的测评方法</div>
						<div class="xiangqing">
							本系统的理论依据和测评方法，由清华大学硕博团队研发完成，
							并获得国家发明专利认证
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 03专业详实的报告解读 -->
		<div class="baogaojiedu">
			<div class="inner">
				<div :class="activeJieguo ? 'active3' : 'content'">
					<div class="left">
						<div class="title">专业详实的报告解读</div>
						<div class="xiangqqing">
							利用心理学研究成果，解读测评报告，多维度分析个体潜能特征，帮助学生认知自我
						</div>
					</div>
					<div class="right"></div>
				</div>
			</div>
		</div>
		<!-- 04符合时代特征的职业信息库 -->
		<div class="xinxiku">
			<div class="inner">
				<div :class="activeZonghe ? 'active4' : 'content'">
					<div class="left">
						
					</div>
					<div class="right">
						<div class="title">符合时代特征的职业信息库</div>
						<div class="xiangqing">系统职业数据库源于2015年《中华人民共和国职业分类大典》，包含1481个职业种类</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 荣誉资质 -->
		<div class="rongyu">
			<div class="inner">
				<h5 class="dabiaoti">荣誉资质</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="left"><div class="text">发明申请专利</div><img src="/imgs/shengyaceping/zizhi01.jpg" alt=""></div>
					<div class="right"><div class="text">计算机软件著<br/> 作权登记证书</div><img src="/imgs/shengyaceping/zizhi02.jpg" alt=""></div>
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
	.shengyaceping {
		.inner {
			width: 1200px;
			margin: 0 auto;
		}
		.header {
			font-size: 0px;
			width: 100%;
			img {
				width: 100%;
			}
		}
		.dabiaoti {
			text-align: center;
			font-size: 24px;
			color: #156dfe;
			line-height: 24px;
			height: 24px;
			margin-bottom: 20px;
			// color: #ffffff;
		}
		.underline {
			width: 60px;
			height: 4px;
			margin: 0 auto;
			background-color: #156dfe;
			margin-bottom: 40px;
		}
		.biaoti {
			height: 44px;
			color: #156dfe;
			font-size: 20px;
			line-height: 44px;
			span {
				width: 44px;
				height: 44px;
				display: inline-block;
				border-radius: 5px;
				background-color: #66C6F0;
				margin-right: 24px;
				text-align: center;
				color: #ffffff;
			}
		}
		// 为什么要进行生涯测评和规划
		.why {
			padding-top: 60px;
			padding-bottom: 40px;
			.content {
				position: relative;
				height: 450px;
				.neirongBox {
					box-sizing: border-box;
					width: 250px;
					height: 110px;
					font-size: 16px;
					line-height: 24px;
					color: #666;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					position: absolute;
					padding: 31px 30px;
					border-radius: 5px;
					left: 0px;
					top: 92px;
					&:nth-child(2) {
						left: 950px;
						top: 92px;
					}
					&:nth-child(3) {
						left: 0px;
						top: 275px;
					}
					&:nth-child(4) {
						left: 950px;
						top: 275px;
						padding: 19px 30px;
					}

				}
				.middle {
					height: 450px;
					width: 450px;
					margin: 0 auto;
					background: url(/imgs/shengyaceping/whyceping.png);
				}
			}
		}
		@keyframes fangda {
            0% {
               transform: scale(.5);
            }
            50% {
               transform: scale(1.2);
                
            }
            100% {
               transform: scale(1);
            }
        }
		
		.weidu {
			height: 562px;
			background-color: #f6f7fb;
			.content {
				height: 562px;
				.left {
					box-sizing: border-box;
					padding-top: 174px;
					width: 580px;
					height: 562px;
					float: left;
					.title {
						line-height: 70px;
						color: #156def;
						font-size: 20px;
					}
					.xiangqing {
						width: 560px;
						font-size: 16px;
						line-height: 24px;
						color: #666;
					}

				}
				.right {
					width: 620px;
					height: 562px;
					float: left;
					background: url(/imgs/shengyaceping/celiangweidu.png) no-repeat center center;
				}
			}
			.active1 {
				.content;
				animation: fangda 1s ease;
			}
		}
		// 02权威科学的测评方法
		.kexueceping {
			height: 562px;
			background-color: #fff;
			.content {
				height: 562px;
				.right {
					box-sizing: border-box;
					padding-top: 174px;
					width: 580px;
					height: 562px;
					float: left;
					.title {
						line-height: 70px;
						color: #156def;
						font-size: 20px;
					}
					.xiangqing {
						width: 560px;
						font-size: 16px;
						line-height: 24px;
						color: #666;
					}

				}
				.left {
					width: 620px;
					height: 562px;
					float: left;
					background: url(/imgs/shengyaceping/quanweikexuedecepingfangfa.png) no-repeat center center;
				}
			}
			.active2 {
				.content;
				animation: fangda 1s ease;
			}
		}
		// 03专业详实的报告解读
		.baogaojiedu {
			height: 562px;
			background-color: #f6f7fb;
			.content {
				height: 562px;
				.left {
					box-sizing: border-box;
					padding-top: 174px;
					width: 580px;
					height: 562px;
					float: left;
					.title {
						line-height: 70px;
						color: #156def;
						font-size: 20px;
					}
					.xiangqing {
						width: 560px;
						font-size: 16px;
						line-height: 24px;
						color: #666;
					}

				}
				.right {
					width: 620px;
					height: 562px;
					float: left;
					background: url(/imgs/shengyaceping/celiangweidu.png) no-repeat center center;
				}
			}
			.active3 {
				.content;
				animation: fangda 1s ease;
			}
		}
		// 04符合时代特征的职业信息库
		.xinxiku {
			height: 562px;
			background-color: #fff;
			.content {
				height: 562px;
				.right {
					box-sizing: border-box;
					padding-top: 174px;
					width: 580px;
					height: 562px;
					float: left;
					.title {
						line-height: 70px;
						color: #156def;
						font-size: 20px;
					}
					.xiangqing {
						width: 560px;
						font-size: 16px;
						line-height: 24px;
						color: #666;
					}

				}
				.left {
					width: 620px;
					height: 562px;
					float: left;
					background: url(/imgs/shengyaceping/quanweikexuedecepingfangfa.png) no-repeat center center;
				}
			}
			.active4 {
				.content;
				animation: fangda 1s ease;
			}
		}
		// 荣誉资质
		.rongyu {
			padding: 60px;
			background: url(/imgs/shengyaceping/beijing.jpg) no-repeat center center;
			background-size: 100% 660px;
			.dabiaoti {
				color: #fff;
			}
			.underline {
				background-color: #fff;
				margin-bottom: 60px;
			}
			.content {
				height: 294px;
				.left {
					width: 489px;
					height: 246px;
					float: left;
					padding-right: 45px;
					padding-top: 24px;
					padding-bottom: 24px;
					background-color: #aee2fa;
					border-radius: 5px;
					border: 1px solid #fff;
					.text {
						height: 246px;
						width: 299px;
						text-align: center;
						line-height: 246px;
						color: #156def;
						font-size: 18px;
						float: left;
					}
					img {
						width: 190px;
						height: 246px;
						border-radius: 2px;
						float: right;
						&:hover {
							transform: scale(1.2);
							transition: all 1s;
						}
					}
				}
				.right {
					width: 489px;
					height: 266px;
					float: right;
					padding-right: 45px;
					padding-top: 14px;
					padding-bottom: 14px;
					background-color: #aee2fa;
					border-radius: 5px;
					border: 1px solid #fff;
					.text {
						font-size: 18px;
						line-height: 27px;
						text-align: center;
						padding: 106px 0px;
						color: #156def;
						float: left;
						width: 294px;
					}
					img {
						width: 195px;
						height: 266px;
						border-radius: 2px;
						float: right;
						&:hover {
							transform: scale(1.2);
							transition: all 1s;
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
        title: '生涯测评|生涯云平台-SAAS系统', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '新高考，生涯测评，学业测评，职业测评'
            },
            {               
                name: 'description',
                content: '学马生涯测评系统是基于心理测量的方法，在中科院心理所和清华大学相关研究成果的基础上，利用人工智能技术、大数据技术而研发的职业定位和学科选择的测评系统。'           
            }  
        ]
    },
	data() {
		return {
			// 为什么要进行生涯测评和规划
			why: [
				{ xiangqing: '超过40%的中学生找不到 学习的意义' },
				{ xiangqing: '超过30%的孩子讨厌学习 ,没有动力' },
				{ xiangqing: '超过60%的大学毕业生脱 离专业求职' },
				{ xiangqing: '每个孩子都是独一无二的 ,不能用一把钥匙开启所有 的门' },
			],
			activeWeidu: false,
			activeCeping: false,
			activeJieguo: false,
			activeZonghe: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollTops);
	},
	methods: {
		 // 屏幕卷动事件
        scrollTops() {
    		// this.scroll = document.documentElement.scrollTop;
    		this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    		// console.log(this.scrollTop)
    		if(this.scrollTop > 776) {
    			this.activeWeidu = true;
    		} 
        	// 
    		if(this.scrollTop > 1200) {
    			this.activeCeping = true;
    		}
    		if(this.scrollTop > 1670) {
    			this.activeJieguo = true;
    		}
    		if(this.scrollTop > 2330) {
    			// console.log(222222)
    			this.activeZonghe = true;
    		}  
   		}
   	}
}
</script>
