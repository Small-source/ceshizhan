<template>
	<div class="zizhuzhaosheng">
		<!-- 顶部通栏大banner -->
	    <div class="banner">
	   		<img src="/imgs/xuankejuece/xuankejuece.jpg" alt="">
	    </div>
	    <!-- 高考招录规则正在改变 -->
	    <div class="gaozhaoguize">
	   		<div class="inner">
	   			<h5 class="dabiaoti">高考招录规则正在改变</h5>
	   			<div class="underline"></div>
	   			<div class="content">
	   				<div class="neirongbox" v-for="(item, index) in gaozhaoguize" :key="index" :style="item.tubiao">
	   					<p class="xiangqing">{{item.xiangqing}}</p>
	   				</div>
	   			</div>
	   		</div>
	    </div>
	    <!-- 3步搞定自主招生 -->
	    <div class="three">
	    	<div class="inner">
	    		<h5 class="dabiaoti">3步搞定自主招生</h5>
	    		<div class="underline"></div>
	    		<div class="content">
	    			<div class="neirongbox" v-for="(item, index) in three" :key="index">
	    				<div class="zongjie">{{item.zongjie}}</div>
	    				<p class="title">{{item.titles}}</p>
	    				<p class="xiangqing">{{item.xiangqing}}</p>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- 系统特色 -->
	    <div class="xitongtese">
	    	<div class="inner">
	    		<h5 class="dabiaoti">系统特色</h5>
	    		<div class="underline"></div>
	    		<div class="content">
	    			<div class="left"></div>
	    			<div class="right">
	    				<div class="neirongbox" v-for="(item, index) in xitongtese" :key="index">
	    					<div class="numLeft">
	    						<div class="num">{{item.num}}</div>
	    					</div>
	    					<div class="neirongRight">
	    						<p class="title">{{item.titles}}</p>
	    						<p class="xiangqing">{{item.xiangqing}}</p>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	.zizhuzhaosheng {
		font-size: 16px;
		color: #666666;
		line-height: 24px;
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
		.gaozhaoguize {
			padding: 60px 0px;
			.content {
				// width: 225px;
				height: 180px;
				.neirongbox {
					width: 225px;
					height: 70px;
					float: left;
					margin-right: 262px;
					padding-top: 110px;
					&:last-child {
						margin-right: 0px;
					}
					.xiangqing {
						padding-top: 10px;
					}
				}
			}
		}
		//3步搞定自主招生
		.three {
			padding: 60px;
			background: url(/imgs/jiaofuziyuan/beijingjiaofu02.jpg) no-repeat; 
			background-size: 100% 498px;
			color: #ffffff;
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				background-color: #ffffff;
			}
			.content {
				padding-top: 40px;
				padding-left: 42px;
				height: 255px;
				.neirongbox {
					width: 201px;
					height: 231px;
					padding: 10px 24px;
					border-radius: 5px;
					background-color: rgba(119, 194, 246, .5);
					float: left;
					margin-right: 199px;
					position: relative;
					border: 2px dashed #fff;
					.title {
						line-height: 70px;
						text-align: center;
						font-size: 20px;
					}
					.zongjie {
						position: absolute;
						width: 80px;
						height: 80px;
						border-radius: 50%;
						border: 2px dashed #fff;
						line-height: 80px;
						text-align: center;
						background-color: rgb(119, 194, 246);
						left: -40px;
						top: -40px; 

					}
					&:last-child {
						margin-right: 0px;
					}
				}
			}
		}
		// 系统特色
		.xitongtese {
			padding: 60px 0px;
			.content {
				height: 500px;
				.left {
					width: 505px;
					height: 500px;
					float: left;
					margin-right: 105px;
					background: url(/imgs/zizhuzhaosheng/xitongtese.png) no-repeat;
				}
				.right {
					width: 590px;
					height: 500px;
					float: left;
					.neirongbox {
						height: 120px;
						margin-top: 25px;
						.numLeft {
							width: 65px;
							height: 120px;
							float: left;
							margin-right: 30px;
							.num {
								width: 65px;
								height: 65px;
								line-height: 65px;
								text-align: center;
								font-size: 20px;
								color: #ffffff;
								border-radius: 50%;
								background: -webkit-linear-gradient(#4fade8, #8accf5);
								background: -o-linear-gradient(#4fade8, #8accf5);
								background: linear-gradient(#4fade8, #8accf5);
							}
						}
						.neirongRight {
							// width: 497px;
							padding-top: 10px;
							.title {
								line-height: 50px;
								color: #156def;
								font-size: 18px;
							}
							.xiangqing {
								font-size: 16px;
							}
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
			// 高考招录规则正在改变
			gaozhaoguize: [
				{ xiangqing: '自主招生通过率低，如何才能增加自己的成功率？', tubiao:'background:url(/imgs/zizhuzhaosheng/zhizhuzhaosheng.png) no-repeat center 0px; background-size: 110px 100px' },
				{ xiangqing: '各院校自招评判标准五花八门，如何选择适合自己的院校？', tubiao:'background:url(/imgs/zizhuzhaosheng/geyuanxiao.png) no-repeat center 0px; background-size: 110px 100px' },
				{ xiangqing: '自招报考流程复杂，所需材料众多，如何才能从容应对？', tubiao:'background:url(/imgs/zizhuzhaosheng/zizhaobaokao.png) no-repeat center 0px; background-size: 110px 100px' }
			],
			// 3步搞定自主招生
			three: [
				{ zongjie: '测评', titles: '专业定位', xiangqing: '通过考生性格、兴趣、能力 、职业规划、学科优劣五大 维度测评，精准定位适合专业方向，并依据专业方向推 荐参加相关竞赛和社会实践' },
				{ zongjie: '分析', titles: '院校智能分析', xiangqing: '依据考生的奖项、证书、社会实践、科技创新等相关资 料和目标专业方向，智能推荐可获得初审资格的院校，并生成申请建议报告，还有更多优秀自荐信和推荐信下载' },
				{ zongjie: '培训', titles: '面试技巧与培训', xiangqing: '专家老师在线解读90所自主招生院校面试规划，传授面 试方法和技巧，下载优秀面试案例，大大提高面试通过率' }
			],
			// 系统特色
			xitongtese: [
				{ num: '01', titles: '历年真实录取数据', xiangqing: '系统收录近3年各自主招生院校的录取风格、录取人数等真实数 据，为考生提供可靠的参考依据，锁定适合自身的院校，提升初审成功概率' },
				{ num: '02', titles: '大数据工程，精准算法，推送合适的报考方案', xiangqing: '系统结合个人获奖情况、学校录取风格等信息，通过精准计算，为学生推送合适的院校报考方案，顺利获得初审资格' },
				{ num: '03', titles: '配合在线课程和线下辅导，全面提升素质水平和录取概率', xiangqing: '系统结合个人获奖情况、学校录取风格等信息，通过精准计算，为学生推送合适的院校报考方案，顺利获得初审资格' }
			]
		}
	},
	mounted() {
	}
}
</script>
