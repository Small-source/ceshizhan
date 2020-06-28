<template>
    <div class="shengxuetujingEntry">
        <div class="banner">
        </div>
		<div class="solve_problem">
			<div class="go_peigeng">
                <a class="btn" href="/career/#/wayToStudy/main" target="_blank">进入升学途径</a>
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
       	<div class="xitongzhicheng">
			<div class="title">系统支撑做好升学路径规划</div>
			<div class="inner">
				<ul class="main_box">
					<li v-for="(item, index) in xitongzhicheng" :key="index">
						<img :src="item.imgUrl" alt="">
						<p class="main_title">{{item.title}}</p>
						<p class="main_detail" v-html="item.detail"></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="features">
			<div class="title">功能介绍</div>
            <div class="inner">
            	<div class="img_box">
            		<img src="/imgs/shengxuetujingEntry/icon_gongnengjieshao.png" alt="">
            	</div>
                <ul class="main_box">
                    <li v-for="(item, index) in features" :key="index">
						<img :src="item.imgUrl" alt="">
                        <p class="main_detail">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fuwuanli">
        	<div class="title">服务案例</div>
        	<div class="inner">
        		<div class="content">
        			<img src="/imgs/shengxuetujingEntry/icon_anli.png" alt="">
        		</div>
        	</div>
        	<div class="footer">
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
            	{ title: '没有渠道<br/>全面了解现有的升学途径', imgUrl: '/imgs/shengxuetujingEntry/rs01.png' },
            	{ title: '无法分析<br/>出适合自己的最优升学途径', imgUrl: '/imgs/shengxuetujingEntry/rs02.png' },
            	{ title: '选择好了<br/>升学途径，没有方案指导如何准备 ', imgUrl: '/imgs/shengxuetujingEntry/rs03.png' }
            ],
        	nav: [
            	{ title: '志愿填报', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '生涯课程', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '升学课程', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '大学介绍', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
            	{ title: '专业解读', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' }
            ],
            xitongzhicheng: [
            	{ title: '', detail: '权威数据库<br/>系统分析升学路径',imgUrl: '/imgs/shengxuetujingEntry/icon_01.png' },
            	{ title: '', detail: '升学路径大百科<br/>每项路径最详细解读',imgUrl: '/imgs/shengxuetujingEntry/icon_02.png' },
            	{ title: '', detail: '生成推荐升学路径方案<br/> ',imgUrl: '/imgs/shengxuetujingEntry/icon_03.png' }
            ],
            features: [
                { title: '升学途径分析', imgUrl: '/imgs/shengxuetujingEntry/icon_shengxuetujingfenxi.png' },
                { title: '升学途径分析报告', imgUrl: '/imgs/shengxuetujingEntry/icon_baogao.png' },
                { title: '升学途径月历',imgUrl: '/imgs/shengxuetujingEntry/icon_shengxuetujingyueli.png' },
                { title: '推荐升学途径方案',imgUrl: '/imgs/shengxuetujingEntry/icon_tuijianshengxuetujing.png' },
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
	.shengxuetujingEntry {
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
			background: url(/imgs/shengxuetujingEntry/banner.png) no-repeat center center;
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
                width: 910px;
                height: 140px;
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
                margin-left: -455px;
                .btn {
                    width: 400px;
                    height: 70px;
                    border-radius: 35px;
                    background-color: #377CEE;
                    text-align: center;
                    line-height: 70px;
                    cursor: pointer;
                    box-shadow: 0px 5px 5px #0F4FB5;
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
						box-shadow: 0px 5px 5px #dedede;
                        text-align: center;
					}
                }
            }
        }
        .xitongzhicheng {
			background-color: #F4F6F8;
			padding-bottom: 60px;
			.main_box {
				display: flex;
				justify-content: space-between;
				color: #333;
				li {
					position: relative;
					width: 366px;
					.main_title {
						text-align: center;
						font-size: 20px;
						font-weight: 600;
						margin-bottom: 10px;
						margin-top: -65px;
					}
					.main_detail {
						padding: 0 60px;
						font-size: 14px;
						text-align: center;
					}
				}
			}
		}
		.features {
            height: 632px;
            background: url(/imgs/shengxuetujingEntry/bg_gongnengjieshao.png) no-repeat center center;
            .title {
            	color: #fff;
            }
            .inner {
            	display: flex;
            }
            .img_box {
            	padding-right: 100px;
            	border-right: 1px solid #fff;
            }
            .main_box {
                color: #fff;
                padding-left: 90px;
                li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 50px;
                    &:last-child {
                    	margin-bottom: 0px;
                    } 
                    img {
                    	margin-right: 25px;
                    }
                }
                .main_title {
                    line-height: 66px;
                    font-size: 20px;
                }

            }
        }
		.fuwuanli {
			.inner {
				position: relative;
				z-index: 2;
				height: 380px;
				overflow: visible;
			}
			.content {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 10;
			}
			.footer {
				position: relative;
				z-index: 1;
				height: 229px;
				background: url(/imgs/shengxuetujingEntry/bg_fuwuanli.png) no-repeat center center;
			}
		}

	}
</style>