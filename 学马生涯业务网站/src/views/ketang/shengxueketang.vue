<template>
	<div class="shengxueketang">
		<div class="banner">
			<img src="/imgs/ketang/shengxueketang/banner.png" alt="">
		</div>
		<div class="result">
			<div class="go_peigeng">
				<ul>
					<li v-for="(item,index) in nav" :key="index">
						<a href='/career/#/videoCourse/main' target="_blank">
							<img :src="item.imgUrl" alt="">
							<p>{{item.title}}</p>
						</a>
					</li>
				</ul>    
			</div>
		</div>
		<div class="kecheng">
			<div class="inner">
				<div class="top_detail">升学讲堂覆盖新高考政策讲解、多元升学途径讲解、专业解读、生涯课程等，帮助学生培养生涯意识，学会规划自己的发展方向。了解大学和专业，为高中选科以及志愿填报做好准备。同时了解多元升学途径，把握适合自己的升学机会。</div>
				<div class="main_box">
					<div class="header">
						<img src="/imgs/ketang/shengxueketang/icon_01.png" alt="">
						<p class="detail">多元升学途径讲解，包含报名条件、时间节点、注意事项等</p>
					</div>
					<div class="main">
						<p v-for="(item,index) in shengxue" :key="index">{{item}}</p>
					</div>
				</div>
				<div class="video_box">
					<video controls src="http://video.xuematech.com/customerTrans/f916eb861861badc8e2ef48e60789ed7/59aba838-16e9758e6f5-0007-0e88-a79-43367.mp4">
                    </video>
				</div>
			</div>
		</div>
		<div class="zhuanye">
			<div class="inner">
				<div class="main_box">
					<div class="header">
						<img src="/imgs/ketang/shengxueketang/icon_02.png" alt="">
						<p class="detail">包含12个学科门类常见热门专业分析、易混淆专业讲解等</p>
					</div>
					<div class="main">
						<p v-for="(item,index) in shengxue" :key="index">{{item}}</p>
					</div>
				</div>
				<div class="video_box">
					<video controls src="http://video.xuematech.com/customerTrans/f916eb861861badc8e2ef48e60789ed7/dbac648-17162d84520-0007-0e88-a79-43367.mp4" poster="http://cdn.xuematech.com//video_img/20191125/1574675744992.jpg">
                    </video>
				</div>
			</div>
		</div>
		<div class="daxue">
			<div class="inner">
				<div class="main_box">
					<div class="header">
						<img src="/imgs/ketang/shengxueketang/icon_03.png" alt="">
						<p class="detail">覆盖全国一百多所985、211院校宣传片</p>
					</div>
				</div>
				<div class="video_box">
					<video controls src="http://video.xuematech.com/9116610669824687a906659673fcbb80/8aace44c759af923633942bf1d4cc05b-S00000001-200000-od.mp4" poster="/imgs/ketang/shengxueketang/poster3.png">
                    </video>
				</div>
			</div>
		</div>
		<div class="zhiyuantianbao">
			<div class="inner">
				<div class="main_box">
					<div class="header">
						<img src="/imgs/ketang/shengxueketang/icon_04.png" alt="">
						<p class="detail">24节课教你学会科学进行志愿填报的技巧</p>
					</div>
					<div class="main">
						<p v-for="(item,index) in zhiyuantianbao" :key="index">{{item}}</p>
					</div>
				</div>
				<div class="video_box">
					<video controls src="http://video.xuematech.com/customerTrans/f916eb861861badc8e2ef48e60789ed7/119afad8-16bdeddaf0d-0007-0e88-a79-43367.mp4" poster="">
                    </video>
				</div>
			</div>
		</div>
		<div class="shengyakecheng">
			<div class="inner">
				<div class="main_box">
					<div class="header">
						<img src="/imgs/ketang/shengxueketang/icon_05.png" alt="">
						<p class="detail">专业生涯理论讲解，培养学生生涯发展意识，帮助学生做好生涯规划</p>
					</div>
					<div class="main">
						<p v-for="(item,index) in shengyakecheng" :key="index">{{item}}</p>
					</div>
				</div>
				<div class="video_box">
					<video controls src="http://video.xuematech.com/customerTrans/f916eb861861badc8e2ef48e60789ed7/80863f7-16e9cea95e0-0007-0e88-a79-43367.mp4" poster="http://cdn.xuematech.com//video_img/20191124/1574591359415.jpg">
                    </video>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BindCard from '../../components/BindCard.vue'
    export default {
        name: "shengxueketang",
        components: { BindCard },
        data(){
          return {
          	// 沛耕的链接
            peiGengUrl: '',
            isShowBindCard: false,
            nav: [
            	{ title: '志愿填报', imgUrl: '/imgs/ketang/shengxueketang/nav_01.png', url: '' },
            	{ title: '生涯课程', imgUrl: '/imgs/ketang/shengxueketang/nav_02.png', url: '' },
            	{ title: '升学课程', imgUrl: '/imgs/ketang/shengxueketang/nav_03.png', url: '' },
            	{ title: '大学介绍', imgUrl: '/imgs/ketang/shengxueketang/nav_04.png', url: '' },
            	{ title: '专业解读', imgUrl: '/imgs/ketang/shengxueketang/nav_05.png', url: '' }
            ],
            shengxue: ['综合评价','专项计划','公费师范生','……'],
            jiedu: ['专业概况','发展历史','学习课程','就业方向','推荐院校'],
            zhiyuantianbao: ['志愿填报的现状','志愿填报的正确思路','如何了解并选择专业','如何了解并选择大学','……'],
            shengyakecheng: ['怎样适应高中生活','如何全面认识自我','怎样去认识职业','升学目标如何制定','……']
          }
        },
        methods:{
        
        },
        created(){
        },
        mounted(){
        },
    }
</script>

<style scoped  type="text/css" lang='less'>
	.shengxueketang {
		.inner {
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;
		}
		.title {
			height: 130px;
			line-height: 130px;
			font-size: 32px;
			font-weight: bold;
			color: #333;
			text-align: center;
		}
		.banner {
			img {
				width: 100%;
			}
		}
		.result {
			background-color: #FFFFFF;
			padding-bottom: 60px;
			position: relative;
			.go_peigeng {
				width: 1200px;
				height: 130px;
				background-color: #fff;
				border-radius: 5px;
				box-shadow: 0px 0px 10px #dedede;
				color: #333;
				position: absolute;
				left: 50%;
				top: -50px;
				margin-left: -600px;
				font-size: 16px;
				ul {
					display: flex;
					align-items: center;
					justify-content: space-around;
					padding: 10px 0px;
					li {
						a {
							display: block;
							width: 100%;
							height: 100%;
							color: #333;
							&:hover {
								color: #3492f9;
							}
							p {
								line-height: 40px;
								text-align: center;
							}
						}
					}
				}
			}
		}
		.main_box {
			padding-top: 50px;
			.header {
				margin-bottom: 35px;
				img {
					margin-bottom: 10px;
				}
				.detail {
					font-size: 18px;
					color: #333;
				}
			}
			.main p{
				padding-left: 30px;
				line-height: 18px;
				font-size: 16px;
				margin-bottom: 16px;
				color: #2d86e8;
				background: url(/imgs/ketang/shengxueketang/icon-duihao.png) no-repeat 0px center;
			}
		}
		.video_box {
			width: 656px;
			height: 450px;
			box-sizing: border-box;
			padding: 58px 110px 122px 118px;
			background: url(/imgs/ketang/shengxueketang/icon_right.png) no-repeat;
			video {
				width: 100%;
				height: 100%;
				object-fit: fill;
			}
		}
		.kecheng {
			background-color: #fff;
			padding: 80px 0;
			.top_detail {
				color: #333;
				font-size: 16px;
				padding-top: 36px;
				background: url(/imgs/ketang/shengxueketang/icon_bg.png) no-repeat;
				margin-bottom: 40px;
			}
			.main_box {
				float: left;
			}
			.video_box {
				float: right;
			}
		}
		.zhuanye {
			background-color: #F5F7F9;
			padding: 80px 0;
			.main_box {
				float: right;
			}
			.video_box {
				float: left;
			}
		}
		.daxue {
			background-color: #fff;
			padding: 80px 0;
			.main_box {
				float: left;
			}
			.video_box {
				float: right;
			}	
		}
		.zhiyuantianbao {
			background-color: #F5F7F9;
			padding: 80px 0;
			.main_box {
				float: right;
			}
			.video_box {
				float: left;
			}
		}
		.shengyakecheng {
			background-color: #fff;
			padding: 80px 0;
			.main_box {
				float: left;
			}
			.video_box {
				float: right;
			}
		}
	}
</style>