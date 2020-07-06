<template>
	<!-- 这是联系我们 -->
	<div class="callus">
		<div class="inner">
			<!-- 总公司 -->
			<div class="zgs">
				<img src="/imgs/aboutus/lianxiwomen.jpg" alt="">
				<div class="shanghai">
					<header>
						<span></span>
						北京研发中心
					</header>
					<p>
						<span>客服热线：</span>
						<span>4008-925-909</span>
					</p>
					<p>
						<span>地址 ： 北京市海淀区清华科技园科技大厦B座清华三创空间</span>
						<span></span>
					</p>

				</div>
			</div>
			<!-- 运营中心 -->
			<div class="fgs">
				<h5>运营中心</h5>
				<div class="underline"></div>
				<div class="office" v-for="(item, index) in office" :key="index">
					<h6><span></span>{{item.xiaoqu}}</h6>
					<!-- <img :src="item.imgs" alt=""> -->
					<!-- <p>
						<span>客服热线</span>
						<span>{{item.phone}}</span>
					</p> -->
					<p>
						<span>地址 : </span>
						<span>{{item.dizhi}}</span>
					</p>
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
	
	.callus {
		// height: 5000px;
		overflow: hidden;
		.inner {
			width: 1200px;
			margin: 0 auto;
		}
		.zgs {
			margin-top: 120px;
			overflow: hidden;
			img {
				width: 510px;
				height: 270px;
				float: left;
			}
			.shanghai {
				float: left;
				margin-left: 106px;
				padding-top: 50px;
				header {
					padding: 20px 0;
					height: 24px;
					line-height: 24px;
					font-size: 24px;
					color: #2566C4;
					span {
						float: left;
						margin-left: 8px;
						width: 5px;
						height: 24px;
						margin-right: 14px;
						background-color: #2566C4;
					}
					
				}
				p {
					background: url(/imgs/aboutus/photo.png) no-repeat 0px center;
					background-size: 23px 23px;
					padding: 16px 0 16px 30px;
					height: 20px;
					font-size: 20px;
					color: #8E8E90;
					line-height: 20px;
					&:last-child {
						background-image: url(/imgs/aboutus/dizhi.png);
					}

				}
			}

		}
		.fgs {
			margin-top: 60px;
			h5 {
				margin: 0 auto;
				width: 100px;
				text-align: center;
				font-size: 24px;
				color: #2566C4;
				margin-bottom: 16px;
			}
			.underline {
				width: 50px;
				height: 4px;
				margin: 0 auto;
				background-color: #2566C4;
				margin-bottom: 44px;
			}
			// 分公司
			.office {
				float: left;
				width: 500px;
				padding: 20px;
				margin-right: 100px;
				margin-bottom: 20px;
				border: 1px solid #2566C4;
				&:nth-child(even) {
					margin-right: 0px;
				}
				h6 {
					// margin-right: 10px;
					// border-left: 5px solid #2566C4;
					// padding-left: 14px;
					font-size: 24px;
					color: #2566C4;
					margin-top:20px;
					margin-bottom: 30px;
					span {
						height: 32px;
						width: 5px;
						float: left;
						background-color: #156def;
						margin-right: 14px;
						margin-left: 10px;
					}

				}
				img {
					width: 510px;
					margin-bottom: 14px;
				}
				p {
					background: url(/imgs/aboutus/photo.png) no-repeat 0px center;
					background-size: 23px 23px;
					padding: 16px 0 16px 30px;
					// line-height: 24px;
					font-size: 20px;
					height: 20px;
					color: #8E8E90;
					line-height: 27px;
					&:last-child {
						background-image: url(/imgs/aboutus/dizhi.png);
					}
				}
			}

		}
	}
</style>
<script>
export default {
	// components: { Swiper },
	data() {
		return {
			office: [
				// { 'xiaoqu': '北京分公司', 'phone': '4008-925-909', 'dizhi': '北京市海淀区北清路68号院24号楼D座3层509','imgs': '/imgs/aboutus/4.jpg' },
				{ 'xiaoqu': '华中运营中心', 'phone': '4008-925-909', 'dizhi': '湖南省长沙市开福区万达广场写字楼A座24楼','imgs': '/imgs/aboutus/4.jpg' },
				{ 'xiaoqu': '西南运营中心', 'phone': '4008-925-909', 'dizhi': '四川省成都市高新区府城大道399号天府新谷8栋12楼','imgs': '/imgs/aboutus/4.jpg' }
			]
		}
	},
	mounted() {

	}
}
</script>