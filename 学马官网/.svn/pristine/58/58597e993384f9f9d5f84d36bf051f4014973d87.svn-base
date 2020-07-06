<template>
	<div class="zhonghesuzhi">
		<!-- 顶部通栏大banner -->
		<div class="banner">
			<img src="/imgs/zonghesuzhi/zonghesuzhibanner.jpg" alt="">
		</div>
		<!-- 系统简介 -->
		<div class="xitongjianjie">
			<div class="inner">
				<h5 class="dabiaoti">系统简介</h5>
				<div class="underline"></div>
				<!-- 评价指标灵活多样 -->
				<div :class="activeJianjie ? 'active' : 'pingjia'">
					<div class="left">
						<h6 class="xiaobiaoti">
							<span>01</span>
							评价指标灵活多样
						</h6>
						<p class="xiangqing">
							精确的两级指标结构管理,在满足国家新课改要求的基础上，支持校本化评价体系的建设
						</p>
					</div>
					<div class="right">
						
					</div>
				</div>
			</div>
		</div>
		<!-- 02评价体系全面客观 -->
		<div class="pingjiatixi">
			<div class="inner">
				<div :class="activeTixihua ? 'active2' : 'content'">
					<div class="left">
						<!-- <svg xmlns="/imgs/zonghesuzhi/quanmianpingjia.svg"></svg> -->
						<img src="/imgs/zonghesuzhi/quanmianpingjia.svg" alt="">
					</div>
					<div class="right">
						<h6 class="xiaobiaoti">
							<span>02</span>
							评价体系全面客观
						</h6>
						<p class="xiangqing">
							同时支持学生客观自评、教师评价、学生互评和师生互评，形成完整的反馈闭环，保证评价结果的全面性、客观 性，重视教师综合执教能
						</p>
					</div>
				</div>	
			</div>
		</div>
		<!-- 03评价结果三方查询。 -->
		<div class="pingjiajieguo">
			<div class="inner">
				<div :class="activeJieguo ? 'active3' : 'content'">
					<div class="left">
						<h6 class="xiaobiaoti">
							<span>03</span>
							评价结果三方查询
						</h6>
						<p class="xiangqing">
							教师、家长、学生都可以查看学生的素质评价结果，增进家、校、生的互相了解，共同致力于提升学生的综合素质 
						</p>
					</div>
					<div class="right"></div>
				</div>
			</div>
		</div>
		<!-- 04综合素质档案自动生成 -->
		<div class="dangan">
			<div class="inner">
				<div :class="activeZonghe ? 'active4' : 'content'">
					<div class="left"></div>
					<div class="right">
						<h6 class="xiaobiaoti">
							<span>04</span>
							综合素质档案自动生成
						</h6>
						<p class="xiangqing">
							系统支持教师对学生日常表现的记录、上传、管理、查阅和评价，并对学生成长过程在线动态分析，自动生成综合素质档案，引导学生健康发展
						</p>
					</div>
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
	.zhonghesuzhi {
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
		.xiangqing {
			margin-top: 35px;
			width: 495px;
			font-size: 18px;
			color: #666666;
			line-height: 35px;
		}

		// 系统简介 
		.xitongjianjie {
			padding-top: 60px;
			padding-bottom: 60px;
			height: 500px;
			// .pingjia {
			// 	padding-top: 150px;
			// 	background: url(/imgs/zonghesuzhi/jichu.svg) no-repeat;
			// 	background-size: 780px 380px;
			// }
			.pingjia {
				transform: scale(.5);
				height: 495px;
			}
			.active {
				transform: scale(1);
				transition: all 1s;
			}
			.left {
				
				float: left;
				padding-top: 150px;
				.xiangqing {
					margin-top: 35px;
					width: 495px;
				}
			}
			.right {
				// transform: scale(.5);
				float: left;
				width: 500px;
				height: 495px;
				background: url(/imgs/zonghesuzhi/jichu.svg) no-repeat;
				background-size: 500px 495px;
			}
			
		}
		// 02评价体系全面客观
		.pingjiatixi {
			padding-top: 100px;
			padding-bottom: 100px;
			height: 438px;
			background-color: #f6f7fb;
			.content {
				transform: scale(.5);
				height: 438px;
			}
			.active2 {
				transform: scale(1);
				transition: all 1s;
			}
			.left {
				float: left;
				// background: url(/imgs/zonghesuzhi/quanmianpingjia.svg) no-repeat;
				// background-size: 550px 438px;
				width: 550px;
				height: 438px;
				margin-right: 160px;
				img {
					width: 550px;
					height: 438px;
				}
			}
			.right {
				float: left;
				margin-top: 160px;
				width: 490px;
				font-size: 18px;
			}
		}
		// 03评价结果三方查询。
		.pingjiajieguo {
			padding-top: 90px;
			padding-bottom: 60px;
			height: 450px;
			.content {
				transform: scale(.5);
				height: 438px;
			}
			.active3 {
				transform: scale(1);
				transition: all 1s;
			}
			.left {
				float: left;
				width: 490px;
				margin-top: 150px;
				margin-right: 185px;
			}
			.right {
				float: left;
				width: 525px;
				height: 450px;
				background: url(/imgs/zonghesuzhi/pingjiajieguo.svg) no-repeat;

			}
		}
		// 04综合素质档案自动生成
		.dangan {
			padding-top: 70px;
			height: 560px;
			background-color: #f6f7fb;
			.content {
				transform: scale(.5);
				height: 438px;
			}
			.active4 {
				transform: scale(1);
				transition: all 1s;
			}
			.left {
				float: left;
				width: 610px;
				height: 560px;
				background: url(/imgs/zonghesuzhi/zonghesuzhifoot.svg);
			}
			.right { 
				float: left;
				margin-right: 100px;
				padding-top: 186px;
				width: 490px;
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
			activeJianjie: false,
			activeTixihua: false,
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
        	//
    		if(this.scrollTop > 111) {
    			// console.log(1111)
    			this.activeJianjie = true;
    			// console.log(this.activeJianjie)
    		} 
        	// 
    		if(this.scrollTop > 777) {
    			// console.log(222222)
    			this.activeTixihua = true;
    		}
    		if(this.scrollTop > 1444) {
    			// console.log(222222)

    			this.activeJieguo = true;
    		}
    		if(this.scrollTop > 2000) {
    			console.log(222222)

    			this.activeZonghe = true;
    		}  
   		}
	}
}
</script>
