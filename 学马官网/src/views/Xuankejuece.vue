<template>
	<!-- 新高考改革一体化解决方案-->
	<div class="xuankejuece">
		<!-- 顶部了解详情 -->
		<div class="xkjc-header">
			<img src="/imgs/xuankejuece/xuankejuece.jpg" alt="">
		</div>
		<!-- 新高考政策下的众生迷茫像 -->
		<div class="xkjc-mimangphoto">
			<div class="inner">
				<h5 class="dabiaoti">新高考政策下高中生选科困境</h5>
				<div class="underline"></div>
				<div class="fatherbox">
					<div class="left">
						<p>自我认知不清晰</p>
						<p>提升成绩没有底</p>
					</div>
					<div class="middle">
						<div class="imgBox">
							<img src="/imgs/xuankejuece/mimangxiang.png" alt="">
						</div>
					</div>
					<div class="right">
						<p>大学专业较模糊</p>
						<p>职业定位迷茫</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 系统简介上 -->
		<div class="xkjc-jianjietop">
			<div class="inner">
				<h5 class="dabiaoti">学校</h5>
				<div class="underline"></div>
				<div class="fatherbox">
					<div class="childbox" v-for="(item, index) in xitongjianjietop" :style="item.tubiao">
						<div class="mask">
								<div class="tubiao" ><img :src="item.imgUrl" alt=""></div>
								<p>{{item.neirong}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 学马教育选科分析系统破解选科新难题 -->
		<div class="xkjc-xinnanti">
			<div class="inner">
				<h5 class="dabiaoti">学马教育选科分析系统破解选科新难题</h5>
				<div class="underline"></div>
				<!-- 骨架 -->
				<div class="middleyuan">
				</div>
				<div class="verticalLine"></div> 
				<div class="biankuang">
					<div class="kuang"></div>
					<div class="kuang"></div>
					<div class="kuang"></div>
					<div class="kuang"></div>
				</div>
				<div class="smallyuan">
					<div class="yuan"></div>
					<div class="yuan"></div>
					<div class="yuan"></div>
					<div class="yuan"></div>
					<div class="yuan"></div>
				</div>
				<div class="fatherbox">
					<div class="childbox" v-for="(item, index) in xinnanti" :key="index" :style="item.tubiao">
						<p class="titles">{{item.titles}}</p>
						<p class="neirong">{{item.neirong}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 系统简介下 -->
		<!-- <div class="xkjc-xitongjianjie">
			<div class="inner">
				<h5 class="dabiaoti">系统简介</h5>
				<div class="underline"></div>
				<div class="fatherbox">
					<div class="childbox" v-for="(item, index) in xitongjianjie" :key="index" :style="item.tubiao">
						<p class="titles">{{item.titles}}</p>
						<p class="neirong">{{item.neirong}}</p>
						<div class="biankuang"></div>
					</div>
				</div>
			</div>
		</div> -->
		
		<!-- 系统功能 -->
		<!-- 01多套权威量表。。。锁定职业范围 -->
		<div class="xkjc-quanweiliangbiao">
			<div class="inner">
				<h5 class="dabiaoti">系统功能</h5>
				<div class="underline"></div>
				<p class="biaoti">
					<span>01</span>
					多套权威量表，探索学生潜能特长，锁定职业范围
				</p>
				<div class="fatherbox">
					<div class="childbox" v-for="(item, index) in quanweiliangbiao" :key="index">
						<div class="tubiao" :style="item.tubiao"></div>
						<p class="titles">{{item.titles}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 02精准全面的信息资源库 -->
		<div class="xkjc-message">
			<div class="inner">
				<p class="biaoti">
					<span>02</span>
					精准全面的信息资源库，涵盖各大院校、专业、职业介绍，明晰生涯未来
				</p>
				<div class="fatherbox">
					<div class="left">
						<img src="/imgs/xuankejuece/jingzhunleft.jpg" alt="">
					</div>
					<div class="right">
						<p class="top">系统以全国院校信息、专业信息、录取分数线、招生计划及符合当下时代特征的职业信息为数据支撑 ，强大的数据体系帮助学生充分了解外部信息，做出准确规划，让生涯规划更加坚定且长远。</p>
						
					</div>
				</div>
			</div>
		</div>
		<!-- 03多维度考量。。为学生推荐合理的选科建议 -->
		<div class="xkjc-xuankeSuggest">
			<div class="inner">
				<p class="biaoti">
					<span>03</span>
					多维度考量，多路径推算，为学生推荐合理的选科建议
				</p>
				<div class="duoweidu">
					<div class="left">
						<p>学科成绩</p>
						<p>人格特征</p>
						<p>职业兴趣</p>
						<p>院校选科要求</p>
						<p>学科潜能</p>
						<p>每科兴趣</p>
					</div>

					<div class="rightArrow">
						<div class="arrow"></div>
					</div>
					<div class="middle">
						<ul>
							<li>目标职业</li>
							<li>目标院校</li>
							<li>目标专业</li>
							<li>目标学科</li>
						</ul>
					</div>
					<div class="rightArrow">
						<div class="arrow"></div>
					</div>
					<div class="right">
						选科决策
					</div>
				</div>
			</div>
		</div>
		<!-- 04团队数据统计，便于校方宏观掌握选科倾向 -->
		<!-- <div class="xkjc-qingxiang">
			<div class="inner">
				<p class="biaoti">
					<span>04</span>
					团队数据统计，便于校方宏观掌握选科倾向
				</p>
				<div class="fatherbox">
					<p class="childbox " v-for="(item, index) in qingxiang">
						<span :class=" scrollTops() ? 'active' + index : '' ">{{item.titles}}</span>
						{{item.neirong}}
					</p>
				</div>
			</div>
		</div> -->
		<div class="xgk-footer">
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
	.xuankejuece {
		width: 100%;
		.xkjc-header {
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
		.biaoti {
			height: 44px;
			color: #ffffff;
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
			}
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
		// 新高考政策下的众生迷茫像
		.xkjc-mimangphoto {
			padding: 60px 0px;
			h6 {
				color: #156dfe;
			}
			.fatherbox {
				padding-top: 30px;
				height: 343px;
				background: url(/imgs/xuankejuece/beijing.png) no-repeat center center;
				.left, .right {
					float: left;
					width: 345px;
					p {
						height: 88px;
						line-height: 88px;
						font-size: 18px;
						color: #156dfe;
						text-align: center;
						margin-bottom: 153px;
						box-shadow:0 0 20px rgba(176,224,251,.5);
						&:last-child {
							margin-bottom: 0px;
						}
					}
				}
				.middle {
					width: 510px;
					height: 343px;
					float: left;
					position: relative;
					.imgBox {
						position: absolute;
						width: 235px;
						height: 235px;
						border-radius: 50%;
						overflow: hidden;
						left: 146px;
						top: 40px;
						img {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
				}
			}
		}
		// 系统简介上
		.xkjc-jianjietop {
			padding: 60px 0px;
			background-color: #f6f7fb;
			.dabiaoti {
				color: #156dfe;
			}
			.fatherbox {
				height: 300px;
				margin-top: 40px;
				.childbox {
					float: left;
					width: 283px;
					height: 270px;
					padding-top: 30px;
					margin-right: 175px;
					&:last-child {
						margin-right: 0px;
					}
					.tubiao {
						width: 120px;
						height: 120px;
						border-radius: 50%;
						margin: 0 auto;
						overflow: hidden;
						border: 2px solid #98dbf8;
						img {
							width: 100%;
							height: 100%;
						}
					}
					p {
						padding: 30px 45px;
						font-size: 18px;
					}
					&:hover {
						position: relative;
						.mask {
							width: 283px;
							height: 270px;
							padding-top: 30px;
							position: absolute;
							border-radius: 5px;
							left: 0px;
							top: 0px;
							background-color: rgba(55,160,227,.5);
							p {
								color: #ffffff;
							}

						}
					}
				}
			}
		}
		// 学马教育选科分析系统破解选科新难题
		.xkjc-xinnanti {
			padding: 60px 0px;
			background: url(/imgs/xuankejuece/xinnanti.png) no-repeat center 135px;
			.dabiaoti {
				color: #156dfe;
			}
			.middleyuan {
				width: 30px;
				height: 30px;
				margin: 0 auto;
				border-radius: 50%;
				margin-top: 110px;
				background-color: #7fccf4;
			}
			.verticalLine {
				width: 1px;
				height: 25px;
				background-color: #62b9f1;
				margin: 0 auto;
			}
			.biankuang {
				width: 1000px;
				height: 40px;
				margin: 0 auto;
				display: flex;
				.kuang {
					flex: 1;
					border: 2px solid #62b9f1;
					border-right: none;
					border-bottom: none;
					&:last-child {
						border-right: 2px solid #62b9f1;
					} 
				}
			}

			.smallyuan {
				width: 1020px;
				height: 20px;
				margin: 0 auto;
				.yuan {
					float: left;
					margin-right: 230px;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background-color: #62b9f1;
					&:last-child {
						margin-right: 0px;
					}
				}
			}
			.fatherbox {
				margin-top: 20px;
				height: 214px;
				.childbox {
					float: left;
					width: 198px;
					height: 100px;
					border: 1px solid #62b9f1;
					border-radius: 5px;
					margin-right: 50px;
					padding-top: 112px;
					&:last-child {
						margin-right: 0px;
					}
					p {
						text-align: center;
						line-height: 38px;
					}
					.titles {
						font-size: 18px;
						color: #333333;
					}
					.neirong {
						font-size: 16px;
						color: #7f7f7f;
					}
				}
			}

		}
 		// 系统简介下
		// .xkjc-xitongjianjie {
		// 	padding-top: 60px;
		// 	width: 100%;
		// 	padding-bottom: 60px;
		// 	h6 {
		// 		text-align: center;
		// 		font-size: 24px;
		// 		color: #156dfe;
		// 		line-height: 24px;
		// 		height: 24px;
		// 		margin-bottom: 20px;
		// 	}
		// 	.underline {
		// 		width: 60px;
		// 		height: 4px;
		// 		margin: 0 auto;
		// 		background-color: #156dfe;
		// 		margin-bottom: 40px;
		// 	}
		// 	.fatherbox {
		// 		width: 1200px;
		// 		height: 240px;
		// 		.childbox {
		// 			float: left;
		// 			width: 233px;
		// 			height: 163px;
		// 			box-shadow:0 0 20px rgba(176,224,251,.5);
		// 			padding-top: 77px;
		// 			margin-right: 250px;
		// 			position: relative;
		// 			&:last-child {
		// 				margin-right: 0px;
		// 			}
		// 			.titles {
		// 				text-align: center;
		// 				height: 50px;
		// 				line-height: 50px;
		// 				font-size: 16px;
		// 				color: #323232;
		// 			}
		// 			.neirong {
		// 				padding: 0 32px;
		// 				line-height: 22px;
		// 				font-size: 14px;
		// 				color: #666666;
		// 			}
		// 			.biankuang {
		// 				position: absolute;
		// 				width: 233px;
		// 				height: 56px;
		// 				left: -5px;
		// 				bottom: -10px;
		// 				border-width: 0px 5px 10px 5px;
		// 				border-style: solid;
		// 				border-color: #99DAF8;
		// 				border-top-color: transparent;
		// 			}
		// 		}
		// 	}
		// }	
		// 01多套权威量表。。。锁定职业范围
		.xkjc-quanweiliangbiao {
			padding-top: 60px;
			padding-bottom: 42px;
			height: 392px;
			background-image: url(/imgs/xuankejuece/lansebeijing.jpg);
			background-size: 100% 497px;
			h6 {
				text-align: center;
				font-size: 24px;
				color: #156dfe;
				line-height: 24px;
				height: 24px;
				margin-bottom: 20px;
				color: #ffffff;
			}
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				width: 60px;
				height: 4px;
				margin: 0 auto;
				background-color: #ffffff;
				margin-bottom: 40px;
			}
			.biaoti {
				height: 44px;
				color: #ffffff;
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
				}
			}
			.fatherbox {
				padding-top: 66px;
				height: 193px;
				.childbox {
					float: left;
					width: 130px;
					// padding-top: 130px;
					height: 193px;
					margin-right: 137px;
					&:last-child {
						margin-right: 0px;
					}
					.tubiao {
						width: 120px;
						height: 120px;
						border-radius: 50%;
						border: 5px solid #fff;
					}
					.titles {
						height: 63px;
						line-height: 63px;
						font-size: 20px;
						color: #ffffff;
						text-align: center;
					}
				}
			}

		}
		// 02精准全面的信息资源库
		.xkjc-message {
			padding: 60px 0px;
			overflow: hidden;
			.biaoti {
				color: #146DFB;
				span {
					color: #ffffff;
				}
			}
			.fatherbox {
				margin-top: 37px;
				padding: 25px 20px;
				height: 450px;
				background: url(/imgs/xuankejuece/jingzhun.png) no-repeat;
				background-size: 1200px 500px;
				box-shadow:0 0 20px rgba(176,224,251,.5);
				border-radius: 5px;
				.left {
					float: left;
					width: 595px;
					height: 450px;
					img {
						width: 100%;
						height: 100%;
						border-radius: 5px;
					}
				}
				.right {
					float: left;
					padding: 66px 26px 66px 66px;
					width: 473px;
					line-height: 24px;
					font-size: 18px;
					.top {
						padding-top: 150;
						color: #666666;
						font-size: 18px;
						line-height: 30px;
						width: 440px
					}
					
				}
			}


		}
		// 03多维度考量。。为学生推荐合理的选科建议
		.xkjc-xuankeSuggest {
			padding: 60px 0px;
			background-color: #F6F7FB;
			.biaoti {
				color: #146DFB;
				span {
					color: #ffffff;
				}
			}
			.duoweidu {
				overflow: hidden;
				margin-top: 40px;
				height: 500px;
				position: relative;
				li, .right{
					width: 183px;
					height: 70px;
					line-height: 70px;
					text-align: center;
					font-size: 18px;
					background-color: #FFFFFF;
					border-radius: 35px;
					box-shadow:0px 3px 3px rgba(103,196,240,.3);
				}
				li {
					margin-bottom: 26px;
					&:last-child {
						margin-bottom: 0px;
					}
				}
				.left {
					float: left;
					width: 600px;
					height: 500px;
					background: url(/imgs/xuankejuece/duoweidubj.png) no-repeat center center;
					position: relative;
					p {
						font-size: 20px;
						line-height: 66px; 
						color: #333333;
						&:nth-child(1) {
							position: absolute;
							left: 256px;
							top: 0px;
						}
						&:nth-child(2) {
							position: absolute;
							left: 500px;
							top: 150px;
						}
						&:nth-child(3) {
							position: absolute;
							left: 500px;
							top: 311px;
						}
						&:nth-child(4) {
							position: absolute;
							left: 236px;
							bottom: 0px;
						}
						&:nth-child(5) {
							position: absolute;
							left:20px ;
							top: 311px;
						}
						&:nth-child(6) {
							position: absolute;
							left: 20px;
							top: 150px;
						}
					}
				}
				.rightArrow {
					float: left;
					margin-top: 262px;
					width: 46px;
					height: 20px;
					background-color: #FFFFFF;
					margin-left: 5px;
					margin-right: 65px;
					position: relative;
					box-shadow:0px 0px 20px rgba(103,196,240,.3);
					.arrow {
						position: absolute;
						left: 40px;
						top: -12px;
						width: 0px;
						height: 0px;
						border-width: 23px 0px 23px 40px;
						border-style: solid;
						border-color: transparent transparent transparent #ffffff;
					}
				}
				.middle {
					float: left;
					width: 183px;
					margin-top: 96px;
					margin-right: 10px;
				}
				.right {
					position: absolute;
					float: left;
					width: 182px;
					right: 0px;
					top: 236px;
					
				}

			}


		}
		// 04团队数据统计，便于校方宏观掌握选科倾向
		.xkjc-qingxiang {
			padding: 60px 0px 30px 0px;
			height: 564px;
			background-image: url(/imgs/xuankejuece/xitonggongnengbgc.jpg);
			background-size: 100% 656px;
			.biaoti {
				color: #ffffff;
				span {
					color: #ffffff;
				}
			}
			.fatherbox {
				padding-top: 53px;
				.childbox {
					height: 110px;
					line-height:110px;
					background-color: #ffffff;
					color: #676767;
					font-size: 16px;
					padding-left: 210px;
					margin-bottom: 63px;
					border-radius: 5px;
					position: relative;
					span {
						width: 144px;
						height: 132px;
						float: left;
						line-height: 132px;
						color: #ffffff;
						text-align: center;
						background-color: #8BD5F8;
						border-radius: 5px;
						// margin-left: 28px;
						// margin-top: -11px;
						// margin-right: 50px;
						position: absolute;
						left: 700px;
						top: -11px;
						// opacity: 0;
					}
					.active0 {
						left: 28px;
						transition: all 2s;
						opacity: 1;
					}
					.active1 {
						left: 28px;
						transition: all 3s;
						opacity: 1;
					}
					.active2 {
						left: 28px;
						transition: all 4s;
						opacity: 1;

					}

				}
				

			}
		}
	}
</style>
<script type="text/javascript">
export default {
	metaInfo: {
        title: '选科决策|生涯云平台-SAAS系统', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '新高考，选科，排课'
            },
            {               
                name: 'description',
                content: '学马选科决策系统综合考量学生的强项科目、学科潜能、职业兴趣、专业兴趣、目标院校等主观因素，结合高校录取要求、院校强项学科等客观条件，利用精准算法，推算出适合每个学生的选科组合方案，帮助每位学生做出最优的选科决策。'           
            }  
        ]
    },
	data() {
		return {
			// 系统简介上
			xitongjianjietop:[
				{ tubiao: 'background:url(/imgs/xuankejuece/number.png) no-repeat', neirong: '学生众多，如何提高效率指导选科？', imgUrl: '/imgs/xuankejuece/top01.png' },
				{ tubiao: 'background:url(/imgs/xuankejuece/number.png) no-repeat', neirong: '如何发挥每个学生的优势学科，考出最佳成绩？', imgUrl: '/imgs/xuankejuece/top02.png' },
				{ tubiao: 'background:url(/imgs/xuankejuece/number.png) no-repeat', neirong: '如何提升学校整体升学率？', imgUrl: '/imgs/xuankejuece/top03.png' }
			],
			// 学马教育选科分析系统破解选科新难题
			xinnanti: [
				{ tubiao: 'background:url(/imgs/xuankejuece/xueshimao.png) no-repeat center 25px', titles: '选科天赋测评', neirong: '挖掘能力倾向' },
				{ tubiao: 'background:url(/imgs/xuankejuece/iconset0336.png) no-repeat center 25px', titles: '院校信息系统', neirong: '充分了解院校特点' },
				{ tubiao: 'background:url(/imgs/xuankejuece/zhiyetansuo.png) no-repeat center 25px', titles: '职业探索系统', neirong: '提早明晰生涯未来' },
				{ tubiao: 'background:url(/imgs/xuankejuece/iconset0177.png) no-repeat center 25px', titles: '选科决策系统', neirong: '多维考量，科学推算' },
				{ tubiao: 'background:url(/imgs/xuankejuece/shujutongji.png) no-repeat center 25px', titles: '选科统计系统', neirong: '宏观掌控选科倾向' }
			],
			// 系统简介下
			xitongjianjie: [
				{ tubiao: 'background:url(/imgs/xuankejuece/xuankeceping.png) no-repeat center 25px', titles: '系统综合考量', neirong: '系统综合考量学生的强项科目、学科潜能、职业兴趣、专业兴趣、目标院校等主观因素' },
				{ tubiao: 'background:url(/imgs/xuankejuece/xuanze.png) no-repeat center 25px', titles: '结合客观条件', neirong: '结合高校录取要求、院校强项学科等客观条件，利用精准算法' },
				{ tubiao: 'background:url(/imgs/xuankejuece/pailie.png) no-repeat center 25px', titles: '精准算法推算', neirong: '推算出适合每个学生的选科组合方案，帮助每位学生做出最优的选课决策' },
			],

			// 01多套权威量表。。。锁定职业范围
			quanweiliangbiao: [
				{ tubiao: 'background:url(/imgs/xuankejuece/chengji.png) no-repeat center center', titles: '学科成绩' },
				{ tubiao: 'background:url(/imgs/xuankejuece/ganxingquzhiwei.png) no-repeat center center', titles: '学科兴趣' },
				{ tubiao: 'background:url(/imgs/xuankejuece/diannao.png) no-repeat center center', titles: '学科潜能' },
				{ tubiao: 'background:url(/imgs/xuankejuece/people.png) no-repeat center center', titles: '人格特征' },
				{ tubiao: 'background:url(/imgs/xuankejuece/bangongxiang.png) no-repeat center center', titles: '职业兴趣' }
			],
			// 04团队数据统计，便于校方宏观掌握选科倾向
			qingxiang: [
				{ titles: '学生', neirong: '可通过系统查询、统计校级及年级选科结果，实现数据可视化' },
				{ titles: '学校', neirong: '宏观了解学生的选科倾向，及时调整教学策略' },
				{ titles: '教师', neirong: '宏观了解学生的选科倾向，及时调整教学策略' }
			],
			scrollTop: 0
		}
	},
	methods: {
		scrollTops() {
    		// this.scroll = document.documentElement.scrollTop;
    		this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    		// console.log(this.scroll)
    		if(this.scrollTop > 4300) {
    			return true;
    		}
   		}
	},
	created() {

	},
	mounted() {
		window.addEventListener('scroll', this.scrollTops)
	}
}
</script>