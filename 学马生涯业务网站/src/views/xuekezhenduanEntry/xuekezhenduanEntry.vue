<template>
    <div class="xuekezhenduanEntry">
        <div class="banner">
        </div>
		<div class="solve_problem">
			<div class="go_peigeng">
                <a class="btn" href="http://ym.xuematech.com" target="_blank">进入学科诊断</a>
            </div>
			<div class="inner">
                <div class="title">解决问题</div>
                <ul class="main_box">
                    <li  v-for="(item, index) in solve_problem" :key="index">
                    	<img :src="item.imgUrl" alt="">
                    	<p v-html="item.title"></p>
                    </li>
                </ul>
			</div>
		</div>
       	<div class="product_advantages">
			<div class="title">产品优势</div>
			<div class="inner">
				<ul class="main_box">
					<li v-for="(item, index) in product_advantages" :key="index"  :style="item.imgUrl">
						<div class="num">
							<img :src="item.numUrl" alt="">
						</div>
						<p class="main_title">{{item.title}}</p>
						<p class="main_detail" v-html="item.detail"></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="gongnengjieshao">
			<div class="title">功能介绍</div>
			<div class="inner">
				<div class="main_btn">测评阶段</div>
				<div class="mid">
					<img src="/imgs/xuekezhenduanEntry/icon_cepingjieduan.png" alt="">
				</div>
				<ul class="lis_box1">
					<li v-for="(item, index) in jieshao_ceping" :key="index">
						<img :src="item.imgUrl" alt="">
						<p>{{item.title}}</p>
					</li>
				</ul>
			</div>
			<div class="inner">
				<div class="main_btn">提分阶段</div>
				<div class="mid">
					<img src="/imgs/xuekezhenduanEntry/icon_zhenduanjieduan.png" alt="">
				</div>
				<ul class="lis_box2">
					<li v-for="(item, index) in jieshao_tifen" :key="index">
						<img :src="item.imgUrl" alt="">
						<p>{{item.title}}</p>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>
<script>

export default {
    name: "xuekezhenduanEntry",
    components:{},
    data() {
        return { 
        	solve_problem: [
            	{ title: '题做了很多<br/>效果却不大', imgUrl: '/imgs/xuekezhenduanEntry/solve_01.png' },
            	{ title: '做过的题<br/>一错再错', imgUrl: '/imgs/xuekezhenduanEntry/solve_02.png' },
            	{ title: '学习非常努力<br/>成绩却总不见提高', imgUrl: '/imgs/xuekezhenduanEntry/solve_03.png' }
            ],
        	nav: [
            	{ title: '志愿填报', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '生涯课程', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '升学课程', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '大学介绍', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '专业解读', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' }
            ],
            product_advantages: [
            	{ title: '五大分析', detail: '试卷分析、成绩分析、<br/>排名分析、知识点分析、能力分析',imgUrl: 'background: url(/imgs/xuekezhenduanEntry/icon_wudafenxi.png) no-repeat',numUrl: '/imgs/xuekezhenduanEntry/icon_01.png' },
            	{ title: '提分策略', detail: '大数据高校分析<br/>推荐有效提分知识点',imgUrl: 'background: url(/imgs/xuekezhenduanEntry/icon_tifencelue.png) no-repeat', numUrl: '/imgs/xuekezhenduanEntry/icon_02.png' },
            	{ title: '个性化题集', detail: '精准推荐<br/>不同梯度专属提分题集',imgUrl: 'background: url(/imgs/xuekezhenduanEntry/icon_gexinghuatiji.png) no-repeat',numUrl: '/imgs/xuekezhenduanEntry/icon_03.png' }
            ],
            jieshao_ceping: [
            	{ title: '试卷分析', imgUrl: '/imgs/xuekezhenduanEntry/icon_shijuanfenxi.png' },
            	{ title: '成绩分析', imgUrl: '/imgs/xuekezhenduanEntry/icon_chengjifenxi.png' },
            	{ title: '排名分析', imgUrl: '/imgs/xuekezhenduanEntry/icon_paimingfenxi.png' },
            	{ title: '知识点分析', imgUrl: '/imgs/xuekezhenduanEntry/icon_zhishidianfenxi.png' },
            	{ title: '能力分析', imgUrl: '/imgs/xuekezhenduanEntry/icon_nenglifenxi.png' },
            	{ title: '过程性测评', imgUrl: '/imgs/xuekezhenduanEntry/icon_guochengxingceping.png' }
            ],
            jieshao_tifen: [
            	{ title: '提分策略', imgUrl: '/imgs/xuekezhenduanEntry/icon_tifencelue01.png' },
            	{ title: '知识点认知图谱', imgUrl: '/imgs/xuekezhenduanEntry/icon_zhishidianrenzhitupu.png' },
            	{ title: '错题本', imgUrl: '/imgs/xuekezhenduanEntry/icon_cuotiben.png' },
            	{ title: '个性化试题推荐', imgUrl: '/imgs/xuekezhenduanEntry/icon_gexinghuashitituijian.png' }
            ],
            isShowjihuoka: false
        }
    },
    methods: {

    },
    created() {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	.xuekezhenduanEntry {
		.inner {
			width: 1200px;
			margin: 0 auto;
			// overflow: hidden;
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
			height: 480px;
			background: url(/imgs/xuekezhenduanEntry/banner.png) no-repeat center center;
		}
		.solve_problem {
            background-color: #FFFFFF;
            padding-bottom: 40px;
            position: relative;
            padding-top: 80px;
            color: #333;
            .nav_box {
                width: 1200px;
                height: 140px;
                background-color: #fff;
                border-radius: 5px;
                box-sizing: border-box;
                box-shadow: 0px 0px 10px #dedede;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                left: 50%;
                top: -60px;
                margin-left: -600px;
                padding: 0 60px;
            }
            .go_peigeng {
                width: 1200px;
                height: 130px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px #dedede;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                left: 50%;
                top: -60px;
                margin-left: -600px;
                .btn {
                    width: 400px;
                    height: 54px;
                    border-radius: 35px;
                    background-color: #377CEE;
                    text-align: center;
                    line-height: 54px;
                    cursor: pointer;
                    box-shadow: 0px 5px 5px #0F4FB5;
                    font-size: 18px;
                    &:hover {
                        color: #fff;
                    }
                    &:active {
                        box-shadow: none;
                    }
                }
            }
            .main_box {
                height: 344px;
                display: flex;
                justify-content: space-between;
                li {
                	img {
                		display: block;
                		width: 364px;
                		height: 235px;
                	}
					p {
						height: 80px;
						display: flex;
						align-items: center;
						justify-content: center;
						box-shadow: 0px 5px 20px rgba(222,222,222,.5);
						text-align:center;
					}
                }
            }
        }
        .product_advantages {
			background-color: #F4F6F8;
			padding-bottom: 50px;
			.main_box {
				display: flex;
				justify-content: space-between;
				color: #333;
				li {
					position: relative;
					width: 366px;
					height: 490px;
					box-sizing: border-box;
					padding-top: 300px;
					.num {
						text-align: center;
						height: 65px;
						overflow: hidden;
					}
					.main_title {
						text-align: center;
						font-size: 20px;
						font-weight: 600;
						color: #333;
						line-height: 50px;
					}
					.main_detail {
						padding: 0 60px;
						font-size: 14px;
						text-align: center;
						color: #333;
						line-height: 20px;
					}
				}
			}
		}
		.gongnengjieshao {
			background-color: #fff;
			.inner {
				.main_btn {
					width: 186px;
					height: 42px;
					line-height: 42px;
					border-radius: 21px;
					color: #fff;
					text-align: center;
					font-size: 20px;
					background-color: #327ff2;
					margin: 0 auto;
					margin-bottom: 25px;
				}
				.mid {
					text-align: center;
				}
				ul.lis_box1 {
					width: 1170px;
					justify-content: space-around;
					border-bottom: 1px solid #dfdfdf;
					margin-bottom: 60px;
				}
				ul.lis_box2 {
					width: 840px;
					justify-content: space-around;
				}
				ul {
					display: flex;
					margin: 0 auto;
					padding-bottom: 50px;
					li {
						text-align: center;
						cursor: pointer;
						p {
							line-height: 40px;
							font-size: 16px;
							color: #333;
						}
					}
				}
			}
		}

	}
</style>