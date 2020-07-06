<template>
    <!-- 新高考改革一体化解决方案 -->
    <div class="xingaokao">
        <!-- 顶部了解详情 -->
        <div class="xgk-header">
            <img src="/imgs/xingaokao/xingaokaobanner.jpg" alt="">
        </div>
        <!-- 四大服务方案   助力学校轻松转型 -->
        <div class="xgk-sidafuwu">
            <div class="inner">
                <h6> 四大服务方案 助力学校轻松转型 </h6>
                <div class="underline"></div>
                <!-- <p class="jieshao">专业化生涯规划解决方案应势而生,为学校开启新高考教学方式新思路</p> -->
                <ul>
                    <li>
                        <div></div>
                        <p class="title">生涯教师培养</p>
                        <p class="xiangqing">以培养多层次、多类型的优质生涯教育师资团队为目标，助力学校在新一轮教育综合改革中全面开展生涯教育，提高学生学业发展规划的实战技能</p>
                    </li>
                    <li>
                        <div></div>
                        <p class="title">生涯课程建设</p>
                        <p class="xiangqing">根据学校教育现状需求，协同研发生涯教育的独立校本教材，助力学校实现特色生涯课程体系，轻松开课</p>
                    </li>
                    <li>
                        <div></div>
                        <p class="title">生涯平台搭建</p>
                        <p class="xiangqing">引进“互联网+”教学模式，6大软件系统，涵盖生涯教育全流程，让教学管理更便捷</p>
                    </li>
                    <li>
                        <div></div>
                        <p class="title">落地示范服务</p>
                        <p class="xiangqing">资深生涯规划师驻校辅导，亲自讲解生涯教育课程，为学校教师做现场示范和指导</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 生涯教师培训 -->
        <div class="peixun">
        	<div class="inner">
        		<h5 class="dabiaoti">生涯教师培训</h5>
        		<div class="underline"></div>
        		<div class="content">
        			<div class="neirongBox" v-for="(item, index) in peixun" :key="index">
        				<div :class="'title' + index">
        					{{item.titles}}
        					
        				</div>
        				<div :class="'xiangqing' + index">
        					<div class="arrow"></div>
        					<p>{{item.xiangqing}}</p>
        				</div>
        			</div>
        			<a href="#/shengyazhidao">了解详情</a>
        		</div>
        	</div>
        </div>
        <!-- 生涯课程建设 -->
       <div class="jianshe">
       	<div class="inner">
       		<h5 class="dabiaoti">生涯课程建设</h5>
       		<div class="underline"></div>
       		<div class="content">
       			<a href="#/shengyakecheng">了解详情</a>
       			<div class="neirongBox" v-for="(item, index) in jianshe" :key="index">
       				<div class="tubiao" :style="item.url"></div>
       				<div class="title" v-html="item.titles"></div>
       				<div class="xiaotubiao"></div>
       			</div>
       		</div>
       	</div>
       </div>
       <!-- 生涯平台搭建 -->
       <div class="dajian">
       		<div class="inner">
       			<h5 class="dabiaoti">生涯平台搭建</h5>
       			<div class="underline"></div>
       			<div class="content">
       				<div class="neirongBox" v-for="(item, index) in dajian" :key="index">
       					<p class="xiangqing">{{item.xiangqing}}</p>
       					<div class="title">{{item.titles}}</div>
       				</div>
       				<div class="middle">
       					引进“互联网+”教学模式，6大软件系统，涵盖生涯教育全流程，让教学管理更便捷
       				</div>
       			</div>
       		</div>
       </div>
        <!-- 落地示范服务 -->
        <div class="xgk-shifanfuwu">
            <div class="inner">
                <p class="biaoti">落地示范服务</p>
                <div class="underline"></div>
                <p class="yanfa"> 资深生涯规划师驻校辅导，亲自讲解生涯教育课程，为学校教师做现场示范和指导 </p>
                <div class="shifanfuwu">
                    <div class="fuwu">
                        <div class="tubiao"></div>
                        <p class="titles">资深规划示范教学</p>
                        <p class="xiangqings"></p>
                    </div>
                    <div class="jiaocai fuwu">
                        <div class="tubiao"></div>
                        <p class="titles">联合编写生涯校本教材</p>
                        <p class="xiangqings"></p>
                    </div>
                    <div class="fuwu">
                        <div class="tubiao"></div>
                        <p class="titles">助力建设生涯教育特色校</p>
                        <p class="xiangqings"></p>
                    </div>
                    <div class="fuwu">
                        <div class="tubiao"></div>
                        <p class="titles">软件硬件使用培训</p>
                        <p class="xiangqings"></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 服务流程 -->
        <div class="liucheng">
        	<div class="inner">
        		<h5 class="dabiaoti">服务流程</h5>
        		<div class="underline"></div>
        		<div class="content">
        			<div class="neirongBox" v-for="(item, index) in liucheng">
        				<div class="tubiaoBox">
        					<img :src="item.url" alt="">
        				</div>
        				<p class="title">{{item.titles}}</p>
        				<div class="arrow"></div>
        			</div>
        		</div>
        	</div>
        </div>
    </div>
</template>
<style lang="less" scoped> 
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
	.xingaokao {
		width: 100%;
		// height: 5000px;
		.xgk-header {
			width: 100%;
			img {
				width: 100%;
				// height: 713px;
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
		// 背景介绍
		.xgk-sidafuwu {
			padding: 60px 0px;
			background-color: #f8f8f8;
			h6 {
				text-align: center;
				font-size: 24px;
				color: #156dfe;
				line-height: 64px;
				height: 64px;
				margin-top: 40px;
			}
			.underline {
				width: 60px;
				height: 4px;
				margin: 0 auto;
				background-color: #156dfe;
				margin-bottom: 18px;
			}
			.jieshao {
				text-align: center;
				font-size: 20px;
				color: #666666;
				height: 18px;
				line-height: 18px;
			}
			ul {
				// padding: 40px 0 30px 0;
				// overflow: hidden;
				height: 310px;
				li {
					width: 270px;
					height: 310px;
					padding: 0 30px;
					padding-top: 30px;
					box-sizing: border-box;
					float: left;
					margin-right: 40px !important;
					background-color: #fff;
					&:hover {
						border-radius: 5px;
						background: linear-gradient(#51aff1, #2190d9);
						color: #fff;
						div {
							border: 2px solid #fff;

						}
						.title {
							color: #fff;
						}
						.xiangqing {
							color: #fff;
						}
					}
					div {
						width: 100px;
						height: 100px;
						background: url(/imgs/xingaokao/bj01.png) no-repeat center center;
						margin: 0 auto;
						border: 2px solid #156def;
						border-radius: 50%;
					}
					.title {
						font-size: 18px;
						text-align: center;
						line-height: 50px;
						color: #333;
					}
					.xiangqing {
						font-size: 16px;
						color: #666666;
						line-height: 24px;
						// height: 180px;

					}
					// p {
					// 	font-size: 18px;
					// 	width: 100%;
						
					// 	line-height: 27px;
					// 	height: 72px;
					// }
					&:first-child {
						&:hover {
							div {
								background: url(/imgs/xingaokao/bj1.png) no-repeat center center;
							}
						}
					}
					&:nth-child(2) {
						div {
							background: url(/imgs/xingaokao/bj02.png) no-repeat center center;
						}
						&:hover {
							div {
								background: url(/imgs/xingaokao/bj2.png) no-repeat center center;
							}
						}
						
					}
					&:nth-child(3) {
						div {
							background-image: url(/imgs/xingaokao/bj03.png);
						}
						&:hover {
							div {
								background: url(/imgs/xingaokao/bj3.png) no-repeat center center;
							}
						}
						
					}
					&:nth-child(4) {
						margin-right: 0px !important;
						div {
							background-image: url(/imgs/xingaokao/bj04.png);
						}
						&:hover {
							div {
								background: url(/imgs/xingaokao/bj4.png) no-repeat center center;
							}
						}
					}
				}
			}
		}
		// 生涯教师培训
		.peixun {
			padding: 60px 0px;
			padding-bottom: 100px;
			.content {
				height: 380px;
				border-bottom: 1px solid #666;
				position: relative;
				a {
					display: block;
					width: 105px;
					height: 38px;
					text-align: center;
					line-height: 38px;
					color: #156def;
					position: absolute;
					left: 50%;
					margin-left: -53px;
					bottom: -70px;
					border: 1px solid #2c8ffc;
					font-size: 16px;
					border-radius: 3px;
				}
				.neirongBox {
					position: relative;
					width: 227px;
					height: 380px;
					float: left;
					margin-left: 126px;
					.title0 {
						position: absolute;
						top: 66px;
						left: 50%;
						margin-left: -80px;
						width: 160px;
						height: 54px;
						line-height: 54px;
						text-align: center;
						color: #333;
						box-shadow:0px 0px 20px rgba(103,196,240,.3);
						z-index: 2;
						background-color: #fff;

				    }
				    .title1 {
						.title0;
						top: 32px;
				    }
				    .title2 {
						.title0;
						top: 5px;
				    }

				    .xiangqing0 {
				    	position: absolute;
				    	bottom: 0px;
				    	width: 177px;
				    	height: 210px;
				    	padding: 0px 25px; 
				    	font-size: 16px;
				    	line-height: 24px;
				    	border-radius: 5px;
				    	color: #fff;
				    	background: linear-gradient(#4dadee, #2390d9);
				    	.arrow {
							width: 20px;
							height: 20px;
							background-color: #fff;
							position: absolute;
							top: -60px;
							left: 50%;
							margin-left: -10px;
							transform: rotate(45deg);
							z-index: 1;
							box-shadow:0px 0px 20px rgba(103,196,240,.3);

						}
				    	p {
							padding-top: 50px;
				    	}
				    }
				    .xiangqing1 {
						.xiangqing0;
						height: 245px;
				    }
				    .xiangqing2 {
						.xiangqing0;
						height: 272px;
				    }
				}
			}
		}
		// 生涯课程建设
		.jianshe {
			padding: 60px 0px;
			padding-bottom: 80px;
			background: url(/imgs/xingaokao/beijing.jpg) no-repeat;
			background-size: 100% 100%;
			.dabiaoti {
				color: #fff;
			}
			.underline {
				background-color: #fff;
			}
			.content {
				height: 350px;
				color: #333;
				font-size: 18px;
				line-height: 27px;
				text-align: center;	
				position: relative;
				a {
					display: block;
					width: 105px;
					height: 38px;
					text-align: center;
					line-height: 38px;
					color: #fff;
					position: absolute;
					left: 50%;
					margin-left: -53px;
					bottom: -70px;
					border: 1px solid #fff;
					font-size: 16px;
					border-radius: 3px;
				}
				.neirongBox {
					width: 332px;
					height: 320px;
					padding-top: 30px;
					border-radius: 5px;
					float: left;
					margin-right: 102px;
					background-color: #fff;
					overflow: hidden;
					&:hover {
						transform: translateY(-10px);
						box-shadow: 0 10px 10px #156def;
						transition: all 1s;
					}
					&:last-child {
						margin-right: 0px;
					}
					.tubiao {
						width: 138px;
						height: 138px;
						margin: 0 auto;
						border-radius: 50%;
						border: 4px solid #156def;
					}
					.title {
						padding-top: 30px;
					}
					.xiaotubiao {
						height: 40px;
						margin-top: 30px;
						background: url(/imgs/xingaokao/xialahui.png) no-repeat center center;
					}
				}
			}
		}
		// 生涯平台搭建
		.dajian {
			padding: 60px 0px;
			.content {
				height: 320px;
				position: relative;
				background: url(/imgs/xingaokao/shengyapingtaidajian.png) no-repeat center center;
				.middle {
					width: 240px;
					position: absolute;
					left: 50%;
					margin-left: -120px;
					font-size: 18px;
					line-height: 27px;
					color: #000;
					top: 90px;
					// height: 115px;
				}
				.neirongBox {
					width: 304px;
					height: 92px;
					line-height: 92px;
					left: 80px;
					top: 0px;
					position: absolute;
					&:hover {
						animation: tubiao 1s ease;
					}
					&:nth-child(2) {
						left: 833px;
						top: 0px;
					}
					&:nth-child(3) {
						left: 20px;
						top: 192px;
					}
					&:nth-child(4) {
						left: 890px;
						top: 192px;
					}
					&:nth-child(even) {
						.xiangqing {
							float: right;
						}
						.title {
							float: right;
						}
					}
					.xiangqing {
						width: 210px;
						height: 92px;
						text-align: center;
						float: left;
						color: #333;
					}
					.title {
						float: left;
						width: 91px;
						height: 91px;
						color: #fff;
						font-size: 20px;
						border-radius: 50%;
						text-align: center;
						background: linear-gradient(#2693da, #4daded);
					}

				}
			}
		}

		// 落地示范服务
		.xgk-shifanfuwu {
			background-color: #f6f7fb;	
			padding: 60px 0px;
			.biaoti {
				text-align: center;
				font-size: 24px;
				color: #156dfe;
				line-height: 64px;
				height: 64px;
				margin-top: 40px;
			}
			.underline {
				width: 60px;
				height: 4px;
				margin: 0 auto;
				background-color: #156dfe;
				margin-bottom: 18px;
			}
			.yanfa {
				text-align: center;
				font-size: 20px;
				color: #666666;
				height: 60px;
				line-height: 60px;
			}
			.shifanfuwu {
				padding-top: 40px;
				height: 290px;
				.fuwu {
					width: 250px;
					height: 290px;
					float: left;
					margin-right: 66px;
					border-radius: 15px;
					overflow: hidden;
					&:hover {
						width: 200px;
						height: 220px;
						padding: 35px 25px;
					    background: -webkit-linear-gradient(#D6F1FC, #ffffff, #ffffff);
					    background: -o-linear-gradient(#D6F1FC, #ffffff, #ffffff);
					    background: linear-gradient(#D6F1FC, #ffffff, #ffffff);
						box-shadow: 0 0 10px #D6F1FC;
						.tubiao {
							width: 56px;
							height: 56px;
							margin: 0 auto;
						}
						.xiangqings {
							text-align: left;
							line-height: 22px;
							margin-top: 0px;
							color: #666666;
							font-size: 16px;
							display: block;
							line-height: 24px;
						}
						.titles {
							margin-top: 20px;
							font-size: 18px;
							color: #333333;
							height: 30px;
							line-height: 30px;
							
						}
					}
					&:last-child {
						margin-right: 0px;
						.tubiao {
							background: url(/imgs/xingaokao/maozhi.png);
						}
					}
					&:nth-child(3) {
						.tubiao {
							background: url(/imgs/xingaokao/shezhi.png);
						}
					}
					&:nth-child(2) {
						.tubiao {
							background: url(/imgs/xingaokao/jiao.png);
						}
					}
					.tubiao {
						width: 56px;
						height: 56px;
						margin: 0 auto;
						margin-top: 80px;
						background: url(/imgs/xingaokao/erji.png);
					}
					.titles {
						margin-top: 30px;
						text-align: center;
						font-size: 18px;
						color: #666666;
					}
					.xiangqings {
						display: none;
					}
				}
			}
		}
		// 服务流程
		.liucheng {
			padding: 60px 0px;
			padding-bottom: 40px;
			.content {
				height: 190px;
				// overflow: hidden;
				.neirongBox {
					width: 118px;
					height: 190px;
					float: left;
					margin-right: 152px;
					position: relative;
					&:last-child {
						margin-right: 0px;
						.arrow {
							display: none;
						}
					}
					.tubiaoBox {
						width: 106px;
						height: 106px;
						border: 6px solid #bedff4;
						border-radius: 50%;
						text-align: center;
						background-color: #2693da;
						position: relative;
						// display: flex;
						// vertical-align: middle;
						img {
							position: absolute;
							top: 50%;
							left: 50%;
							margin-top: -30px;
							margin-left: -30px;
							vertical-align:middle;
						}
						&:hover {
							animation: tubiao 1s ease;
						}
					}
					.title {
						text-align: center;
						line-height: 72px;
						color: #333;
						font-size: 18px;
						@keyframes tubiao {
				            0% {
				               transform: translateY(0px);
				            }
				            50% {
				               transform: translateY(-50px);
				                
				            }
				            100% {
				               transform: translateY(0px);
				            }
        				}
					}
					.arrow {
						position: absolute;
						right: -152px;
						top: 0px;
						width: 152px;
						height: 106px;
						background: url(/imgs/xingaokao/arrow.png) no-repeat center center;
					}
				}
			}
		}
		// 典型用户
	}
</style>
<script type="text/javascript">
export default {
	metaInfo: {
        title: '新高考解决方案-学马', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '新高考，校园整体解决方案，教师培养，生涯课程，生涯平台'
            },
            {               
                name: 'description',
                content: '新高考改革一体化解决方案，为学校开启新高考教学方式新思路'           
            }  
        ]
    },
    data() {
        return {
            // 生涯发展管理平台
            xiangqing: [
            	{ titles: '生涯评测系统', neirong: '独立研发量表，国家发明专利独立研发量表', bgpng: '/imgs/xingaokao/guanlipt01.png', bgpng1: '/imgs/xingaokao/guanlipt1.png' }, 
            	{ titles: '选科决策系统', neirong: '提前介入生涯规划，提供 科学的决策依据', bgpng: '/imgs/xingaokao/guanlipt02.png', bgpng1: '/imgs/xingaokao/guanlipt2.png' }, 
            	{ titles: '智能排课系统', neirong: '系统走班排课，从容计划 教学进度', bgpng: '/imgs/xingaokao/guanlipt03.png', bgpng1: '/imgs/xingaokao/guanlipt3.png' }, { titles: '在线学习系统', neirong: '利用远程教学模式，合理 布置教学任务', bgpng: '/imgs/xingaokao/guanlipt04.png', bgpng1: '/imgs/xingaokao/guanlipt4.png' }, { titles: '走班校园管理系统', neirong: '提升教办公效率，师生信 息互联', bgpng: '/imgs/xingaokao/guanlipt05.png', bgpng1: '/imgs/xingaokao/guanlipt5.png' }, 
            	{ titles: '综合素质评价平台', neirong: '师生互评反馈，促进教学 相长', bgpng: '/imgs/xingaokao/guanlipt06.png', bgpng1: '/imgs/xingaokao/guanlipt6.png' }
            ],
            peixun: [
            	{ titles: '生涯讲座', xiangqing: '政策解读，帮助学生、家长、教师理解并认同高中生涯教育的价值、目标和内容，唤醒生涯规划意识' },
            	{ titles: '初级班', xiangqing: '系统全面的掌握生涯教育理论知识，学会运用主题班会及学科渗透等方式开展生涯主题活动的教学技能' },
            	{ titles: '认证培训班', xiangqing: '进行国际生涯发展协会的课程培训，经考核可获得“国际生涯规划师（NCDA CDP）”证书' }
            ],
            jianshe: [
            	{ titles: '专业的体系教材<br/>塑造生涯教学质量', url: 'background:url(/imgs/xingaokao/zhuanyedetixijiaocai.png) no-repeat center center' },
            	{ titles: '丰富的教材资源<br/>打造多元教育形式', url: 'background:url(/imgs/xingaokao/fengfudejiaocai.png) no-repeat center center' },
            	{ titles: ' 支持教材联合研发<br/>帮助形成校本特色', url: 'background:url(/imgs/xingaokao/hezuo.png) no-repeat center center' }
            ],
            // 生涯平台搭建
            dajian: [
            	{ titles: '学生', xiangqing: '自主学习  科学规划' },
            	{ titles: '家长', xiangqing: '辅助参与  助力规划' },
            	{ titles: '教师', xiangqing: '智能教学  轻松引导' },
            	{ titles: '学校', xiangqing: '智能管理  科学统筹' }	
            ],
            // 服务流程
            liucheng: [
            	{ titles: '需求沟通', url: '/imgs/xingaokao/xuqiugoutong.png' },
            	{ titles: '方案设计', url: '/imgs/xingaokao/fangansheji.png' },
            	{ titles: '签署协议', url: '/imgs/xingaokao/qianshuxieyi.png' },
            	{ titles: '方案实施', url: '/imgs/xingaokao/fanganshishi.png' },
            	{ titles: '示范指导', url: '/imgs/xingaokao/shifanzhidao.png' },
            ]
            	
            
        }
    },
    methods: {},
    created() {}
}
</script>