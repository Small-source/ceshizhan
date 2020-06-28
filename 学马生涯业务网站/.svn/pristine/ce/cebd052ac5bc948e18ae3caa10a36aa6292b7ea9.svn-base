<template>
    <div class="shengyacepingEntry">
        <div class="banner">
        </div>
		<div class="solve_problem">
<!-- 			<ul class="nav_box">
				<li v-for="(item,index) in nav" :key="index">
					<a :href="item.url">
						<img :src="item.imgUrl" alt="">
						<p>{{item.title}}</p>
					</a>
				</li>		
			</ul> -->

			<div class="go_peigeng">
				<!-- <a class="btn" :href="'http://' + $OEMdomain + '/career/#/selfAssessment/main'" target="_blank">进入生涯测评</a> -->
				<a class="btn" href="/career/#/selfAssessment/main" target="_blank">进入生涯测评</a>
			</div>
			<div class="inner">
                <div class="title">解决问题</div>
                <ul class="main_box">
                    <li>不知道那些方面可以全面的认识自己</li>
                    <li>对市面上泛滥的测评半信半疑</li>
                    <li>问卷式测评无法得出客观结果</li>
                    <li>结论无法作为选科选专业的依据</li>
                </ul>
			</div>
		</div>
		<div class="product_advantages">
			<div class="title">产品优势</div>
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in product_advantages" :key="index">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
       	<div class="features">
			<div class="title">功能介绍</div>
			<div class="inner">
				<ul class="main_box">
					<li v-for="(item, index) in features" :key="index">
						<img :src="item.imgUrl" alt="">
						<p class="main_title">{{item.title}}</p>
						<p class="main_detail">{{item.detail}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="model">
			<div class="title">多维的测评模型</div>
			<div class="content">
				<div class="inner">
					<p class="content_title">实现有人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位。</p>
					<ul>
						<li>
							<p class="main_title">科学的测量方法</p>
							<p class="main_detail">经典的心理学实验<br/>本土化的经典问题<br/>标准化的测试流程</p>
						</li>
						<li>
							<p class="main_title">权威的职业分类</p>
							<p class="main_detail">有效保证职业类型的<br/>本土化特征和时代特征</p>
						</li>
						<li>
							<p class="main_title">专业的报告解读</p>
							<p class="main_detail">解读测评报告<br/>多维度分析个体潜能特征<br/>帮助学生认知自我</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="zhuanli">
			<div class="inner">
				<p class="content_title">实现有人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位。</p>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name: "shengyacepingEntry",
    data() {
        return { 
        	// nav: [
         //    	{ title: '志愿填报', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
         //    	{ title: '生涯课程', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
         //    	{ title: '升学课程', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
         //    	{ title: '大学介绍', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' },
         //    	{ title: '专业解读', imgUrl: '/imgs/ketang/shengxueketang/icon-mingshi.png', url: '' }
         //    ],
            product_advantages: [
                { title: '权威测评', detail: '清华大学和中科院心理所专家指导，依据现代心理学测量学理论，吸收国内外最新研究成果，通过大量心理学实践研究' },
                { title: '多维度测评', detail: '多维度综合的测评体系，工具测评，测评结果客观' },
                { title: '提供有力支持', detail: '依据学生测评结果，系统分析后推荐专业，为选科报考提供有力支持' }
            ],
            features: [
            	{ title: '自我认知', detail: '通过测评系统进行生涯规划的内部探索，使学生客观、全面、立体的认知自我，增进自我人格觉察、探索自我兴趣偏好、发现自身潜能优势。',imgUrl: '/imgs/xmsy_huhangjihua/icon_01.png' },
            	{ title: '职业专业定位', detail: '学业与职业测评系统结合人格特性、兴趣倾向和潜能优势三个方面来定位适合学生的职业类型，并根据得到的职业类型推荐匹配的专业。',imgUrl: '/imgs/xmsy_huhangjihua/icon_02.png' },
            	{ title: '学习特征评估', detail: '学业与职业测评系统结合人格特性、兴趣倾向和潜能优势三个方面来定位适合学生的职业类型，并根据得到的职业类型推荐匹配的专业。',imgUrl: '/imgs/xmsy_huhangjihua/icon_03.png' }
            ]
        }
    },
    methods: {
    },
    created() {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	.shengyacepingEntry {
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
			height: 480px;
			background: url(/imgs/shengyacepingEntry/banner.png) no-repeat center center;
		}
		.solve_problem {
            background-color: #FFFFFF;
            padding-bottom: 40px;
            position: relative;
            padding-top: 80px;
            color: #333;
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
				top: -50px;
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
					color: #fff;
					display: block;
					&:active {
						box-shadow: none;
					}
				}
			}
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
            .main_box {
                height: 344px;
                background: url(/imgs/shengyacepingEntry/bg_01.png) no-repeat center center;
                position: relative;
                li {
	                line-height: 60px;
	                font-size: 18px;
	                position: absolute;
	                &:nth-child(1) {
	                    left: 30px;
	                    top: 30px;
	                }
	                &:nth-child(2) {
	                    left: 895px;
	                    top: 30px;
	                }
	                &:nth-child(3) {
	                    left: 35px;
	                    top: 160px;
	                }
	                &:nth-child(4) {
	                    left: 935px;
	                    top: 160px;
	                }
                }
            }
        }
		.product_advantages {
            height: 608px;
            background: url(/imgs/shengyacepingEntry/icon_chanpin.png) no-repeat center center;
            .title {
            	color: #fff;
            }
            .main_box {
                width: 590px;
                float: right;
                color: #fff;
                padding-top: 40px;
                li {
                    margin-bottom: 40px;
                    height: 90px;
                }
                .main_title {
                    line-height: 50px;
                    font-size: 20px;
                }
                .main_detail {
                    font-size: 14px;
                }
            }
        }
        .features {
			background-color: #F4F6F8;
			padding-bottom: 50px;
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
					}
				}
			}
		}
		.model {
			padding-bottom: 50px;
			background-color: #fff;
			color: #333;
			.content {
				height: 575px;
				background: url(/imgs/shengyacepingEntry/icon_duoweideceliang.png) no-repeat center center;
				.content_title {
					line-height: 150px;
					padding-left: 50px;
					color: #fff;
				}
				ul {
					display: flex;
					justify-content: space-between;
					li {
						width: 365px;
						height: 410px;
						box-sizing: border-box;
						padding-top: 250px;
						text-align: center;
						.main_title {
							font-size: 20px;
							font-weight: 600;
							line-height: 60px;
						}
						.main_detail {
							font-size: 14px;
						}
					}
				}
			}
		}	
		.zhuanli {
			height: 750px;
			background: url(/imgs/shengyacepingEntry/icon_zhuanli.png) no-repeat center center;
			.content_title {
				line-height: 150px;
				padding-left: 50px;
				color: #333;
			}
		}
	}
</style>