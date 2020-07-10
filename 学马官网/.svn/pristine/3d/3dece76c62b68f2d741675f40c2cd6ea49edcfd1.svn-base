<template>
	<div class="SpainStudy">
		<div class="banner">
			<img src="/imgs/spainstudy/spainstudy.jpg" alt="">
		</div>
		<!-- 平民的留学费用，匹敌国内重点本科学历，百余种的专业选择，光明的就业前景 -->
		<div class="feiyong">
			<div class="inner">
				<h5 class="dabiaoti">平民的留学费用，匹敌国内重点本科学历，百余种的专业选择，光明的就业前景</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in feiyong" :key="index" v-html="item.xiangqing"></div>
				</div>
			</div>
		</div>
		<!-- 合作院校 -->
		<div class="hezuoyuanxiao">
			<div class="inner">
				<h5 class="dabiaoti">合作院校</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in hezuoyuanxiao" :key="index">
						<div class="moveBox">
							<div class="top">
								<img :src="item.url" alt="">
								<div class="mark"></div>
								<div class="university">{{item.titles}}</div>
							</div>
							<div class="bottom">
								<div class="left">
									<img src="/imgs/lunbotu/1.jpg" alt="">
								</div>
								<div class="right">
									<p class="title">{{item.titles}}</p>
									<p class="xiangqing">{{item.xiangqing}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 专业服务 -->
		<div class="zhuanyefuwu">
			<div class="inner">
				<h5 class="dabiaoti">专业服务</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in zhuanyefuwu" :key="index">
						<p class="xiangiqng">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 我们的青春，记录着真实的留学故事 -->
<!-- 		<div class="liuxuegushi">
			<div class="inner">
				<h5 class="dabiaoti">我们的青春，记录着真实的留学故事</h5>
				<div class="underline"></div>
				<p class="jianjie">
					留学西班牙不仅令你度过丰富充实的海外生活，获得全球认可的欧盟高等学位，更助你在职场出类拔萃，收获无限未来！
				</p>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in liuxuegushi" :key="index">
						<img :src="item.url" alt="">
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div> -->
		<!-- 留学顾问 -->
		<div class="famousTeacher">
			<div class="inner">
				<h5 class="dabiaoti">留学顾问</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox"  v-for="(item, index) in famousTeacher" :key="index">
						<img :src="item.url" alt="">
						<p class="name">{{item.names}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	.SpainStudy {
		font-size: 16px;
		color: #666666;
		.inner {
			width: 1200px;
			margin: 0 auto;
		}
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
		// 平民的留学费用，匹敌国内重点本科学历，百余种的专业选择，光明的就业前景
		.feiyong {
			padding: 60px 0px;
			.content {
				height: 760px;
				position: relative;
				background: url(/imgs/spainstudy/sidayoushi.png) no-repeat 121px 155px;
				.neirongbox {
					width: 230px;
					// height: 125px;
					padding: 18px 25px;
					color: #666666;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					position: absolute;
					&:nth-child(1) {
						left: 5px;
						top: 110px;
					}
					&:nth-child(2) {
						left: 345px;
						top: 0px;
					}
					&:nth-child(3) {
						right: 210px;
						top: 0px;
					}
					&:nth-child(4) {
						right: 0px;
						top: 270px;
					}
				}
			}
		}
		// 合作院校
		.hezuoyuanxiao {
			padding-top: 60px;
			background-color: #f6f7fb;
			.content {
				height: 820px;
				.neirongbox {
					width: 557px;
					// height: 223px;
					height: 243px;
					// padding-top: 20px;
					border-radius: 5px;
					float: left;
					margin-right: 86px;
					margin-bottom: 30px;
					background-color: #ffffff;
					overflow: hidden;
					&:nth-child(even) {
						margin-right: 0px;
					}
					&:hover .moveBox{
						top: -244px;
						transition: all 1s;
					}
					.moveBox {
						position: relative;
						width: 557px;
						height: 486px;
						left: 0px;
						top: 0px;
						.top {
							width: 557px;
							height: 243px;
							position: relative;
							img {
								width: 100%;
								height: 100%;
							}
							.mark {
								position: absolute;
								left: 0px;
								top: 0px;
								width: 557px;
								height: 243px;
								background-color: rgba(51,51,51,.2);
								// z-index: 4;
							}
							.university {
								width: 557px;
								height: 50px;
								line-height: 50px;
								position: absolute;
								left: 0px;
								top: 50%;
								margin-top: -25px;
								color: #fff;
								text-align: center;
								z-index: 2;
								font-size: 30px;
							}
						}
						.bottom {
							width: 557px;
							height: 223px;
							padding-top: 20px;
							.left {
								float: left;
								width: 113px;
								height: 243px;
								background: url(/imgs/spainstudy/jiangzhang.png) no-repeat center 0px;
								overflow: hidden;
								img {
									width: 56px;
									height: 56px;
									border-radius: 50%;
									display: block;
									margin: 0 auto;
									margin-top: 11px;
								}
							}
							.right {
								float: left;
								width: 420px;
								.title {
									line-height: 40px;
									font-size: 18px;
									color: #333333;
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
		// 专业服务
		.zhuanyefuwu {
			padding-top: 60px;
			background: url(/imgs/spainstudy/beijing1.jpg) no-repeat center center;
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				background-color: #ffffff;
			}
			.content {
				color: #ffffff;
				margin-top: 20px;
				height: 128px;
				.neirongbox {
					padding-left: 94px;
					width: 230px;
					height: 128px;
					float: left;
					margin-right: 114px;
					background: url(/imgs/spainstudy/peixunjidi.png) no-repeat;
					&:last-child {
						margin-right: 0px;
						background: url(/imgs/spainstudy/anquan.png) no-repeat;
					}
					&:nth-child(2) {
						background: url(/imgs/spainstudy/peixun.png) no-repeat;
					}
					p {
						width: 230px;
						font-size: 16px;
						padding-top: 10px;
					}
				}
			}
		}
		// 我们的青春，记录着真实的留学故事
		.liuxuegushi {
			padding-top: 60px;
			.jianjie {
				text-align: center;
			}
			.content {
				padding-top: 90px;
				padding-bottom: 60px;
				// height: 400px;
				overflow: hidden;
				.neirongbox {
					padding-top: 80px;
					float: left;
					width: 327px;
					height: 340px;
					box-shadow:0 0 20px rgba(176,224,251,.5);
					position: relative;
					margin-right: 109px;
					&:last-child {
						margin-right: 0px;
					}
					.xiangqing {
						padding: 0px 16px;
					}
					img {
						width: 130px;
						height: 130px;
						border-radius: 50%;
						position: absolute;
						left: 50%;
						top: -65px;
						margin-left: -65px;
					}
				}
			}
		}
		// 名师
		.famousTeacher {
			padding: 60px 0px;
			background-color: #f6f7fb;
			.content {
				height: 400px;
				.neirongbox {
					float: left;
					width: 295px;
					height: 375px;
					padding: 14px;
					background-color: #ffffff;
					margin-right: 115px;
					&:last-child {
						margin-right: 0px;
					}
					img {
						width: 295px;
						height: 185px;
						border-radius: 5px;
					}
					.name {
						line-height: 44px;
						color: #156def;
						font-size: 18px;
					}
					.xiangqing {
						font-size: 16px;
						color: #666666;
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
        title: '出国留学-学马', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '西班牙留学，出国留学，升学规划'
            },
            {               
                name: 'description',
                content: '中国（教育部）留学服务中心 / 北京外国语大学出国留学培训基地，独家携手北外，提供境外服务，保证安全留学'           
            }  
        ]
    },
	data() {
		return {
			// 平民的留学费用，匹敌国内重点本科学历，百余种的专业选择，光明的就业前景
			feiyong: [
				{ xiangqing: '西班牙共有55所公立大学，其中7所大学的世界排名在200以内，15所学校在500名以内。西班牙的学历自动获得欧盟认可，国际认可度高，中西两国互认学历、学位和文凭' },
				{ xiangqing: '西班牙留学四年总开支不到英 美留学一年支出<br />本科仅需人民币0.5-4万元/学年 硕士仅需0.6-4万元/学年' },
				{ xiangqing: '大环境好，中西贸易投资六年 增加600%，就业方向广泛， 从事贸易进出口，互联网电子 商务，教育培训，机械设备， 新闻传媒，旅游休闲等行业' },
				{ xiangqing: '西班牙大学学风严谨，科研突 出在工科、生物学、医学、法 学、金融、科技、商科方面卓 越，为西班牙的科研创新作出 了巨大贡献。 ' },
			],
			// 合作院校
			hezuoyuanxiao: [
				{ titles: '巴塞罗那大学', xiangqing: '巴塞罗那大学是西班牙最顶尖的大学之一，经历了500多年的发展，已发展演变成一说学科全面、集教育与科研与一身，多项科技成果领先世界的著名公立大学。各学科实力较均衡，基本都排名世界100位左右，类似于复旦大学水平。巴塞罗那大学有很多专业单科世界排名位列前茅，如心理学、考古学、哲学、教育、医学、艺术、社会学、英语语言文学、传媒学、经济学等。', url: '/imgs/spainstudy/daxue01.jpg' },
				{ titles: '马德里自治大学', xiangqing: '马德里自治大学是马德里六所公立的大学之一，建校于1968年，该校的综合排名是所有西班牙大学第三。最新的QS世界大学排名中，马德里自治大学名列第159位。在西班牙50多个最普遍的专业中，马德里自治大学的生物学、护理学、医学、物理学、自然科学和法学专业位于顶尖位置', url: '/imgs/spainstudy/daxue02.jpg' },
				{ titles: '马拉加大学', xiangqing: '西班牙马拉加大学是西班牙著名国立综合性大学，高等学府。马拉加大学现有21大学院，79个系，100多个专业，有博士、研究生和本科课程。大学源源不断的提供着最新的科技观念，其毕业生也极其符合这些领域的要求，尤其在旅游信息通信技术方面比较拔尖，所以它的旅游专业成为西班牙最好的专业之一。', url: '/imgs/spainstudy/daxue03.jpg' },
				{ titles: '瓦伦西亚理工大学', xiangqing: '瓦伦西亚理工大学是西班牙著名公立大学，在2018年QS世界大学排名中位列第373名，上榜了世界优秀技术类大学，在技术类专业领域有很高的地位。顶尖专业如建筑土木工程、工业技术工程、自动化与工业信息学、农业工程技术、植物分子与细胞生物科技、电信学、食品工程与科学等等。', url: '/imgs/spainstudy/daxue04.jpg' },
				{ titles: '巴塞罗那自治大学', xiangqing: '巴塞罗那自治大学是西班牙著名的公立研究型大学，拥有欧洲顶尖的师资、教学器材及实验室。在QS世界大学排名中，学校综合排名位列第195名，共15个学科领域排名跻身世界前100位，分别为兽医学、经济学、社会学、人类学、艺术与设计、现代语言学、农业科学、解剖学、环境科学、地理、物理、传播学教育学、考古学、社会政策和体育研究。', url: '/imgs/spainstudy/daxue05.jpg' },
				{ titles: '庞培发布拉大学', xiangqing: '庞培发布拉大学是西班牙教育部认可的公立大学，在2018-2019QS世界大学排名中排名第296名。2018年统计显示，经济学专业排名位列于全球大学第20位，在欧美广受赞誉，另外，在实验科学、健康卫生和生命科学、社会沟通学、人类学等学科非常受欢迎，在学术研究方面，通讯和生物医学取得突出成就。', url: '/imgs/spainstudy/daxue06.jpg' }
			],
			// 专业服务
			zhuanyefuwu: [
				{ xiangqing: '中国(教育部)留学服务中心/北 京外国语大学出国留学培训基地' },
				{ xiangqing: '独家携手北外，提供境外服务 ，保证安全留学 ' },
				{ xiangqing: '在北京、上海、长沙、成都等地设立分支机构，线下服务更周到 ' }
			],
			// 我们的青春，记录着真实的留学故事
			liuxuegushi: [
				{ url: '/imgs/spainstudy/rw01.jpg', xiangqing: '在世界顶级名校巴塞罗那大学读书，真的收获颇丰，这里既注重个人的个性化发展，又注重团队的协作和配合，课业 压力比较重，课上专注，课下熬夜也是考试前正常的状态，生活上比较轻松，因为西班牙挺发达，这里文化非常多元，非常的国际化，我的视野、眼界和体验也因此得到了极大的提高，回想起来仍然觉得很庆幸，因为当时我在国内的高考也过了一本线，觉得上一个一本也可以，不想挑战自己，感谢我的父母帮我做出了正确的选择 --张同学' },
				{ url: '/imgs/spainstudy/rw02.jpg', xiangqing: '女儿在瓦伦西亚理工大学就读两年了，成绩优异，更重要的是变得自信、乐观 。女儿很善良、性子偏慢没什么特长，高中成绩也就中等，女儿一直没有得到老师的重视、很少开心的笑。王鸢老师建议我送孩子到瓦伦西亚理工，这里全面的学科设置、和丰富的课下活动让孩子学到很多东西。现在孩子每年成绩全部通过、西班牙语好、担任了社团的副主席！现在我才明白，当年孩子高考失利，不是因为孩子不好、而是因为她身处的教育不适合她 --李同学' },
				{ url: '/imgs/spainstudy/rw03.jpg', xiangqing: '几年前我来到西班牙读高三的时候，连旅游景点都很少有中国人，在父母的鼓 励下我做了一回“吃螃蟹的人”。我个人非常厌恶应试，所以到高三的时候出国了，在西班牙参加了高考。这段时间遇到了很多困难，最大的障碍来自于语言：知识点会，题目看不懂，花费了巨大的精力来提高语言。即使这样，我觉得仍旧比国内高三的同学稍微轻松一些。加上西班牙还有加分考试，压力还是可以承受的，况且我们中国留学生都很勤奋 --李同学' }
			],
			// 名师
			famousTeacher: [
				{ url: '/imgs/spainstudy/ms01.jpg', names: '王鸢', xiangqing: '北京外国语大学出国留学基地湖南区主 任、北京外国语大学继教院优质生源输 送基地湖南区主任、巴塞罗那大学直录spanishplus项目全国总监，对于海外文化，海外教育制度深谙于心，能为学生提供最专业的咨询和指导' },
				{ url: '/imgs/spainstudy/ms02.jpg', names: '王熠', xiangqing: '西班牙格拉纳达大学英席翻译硕士，曾 任西班牙格拉纳达大学孔子学院教师三 年，现任北京外国语大学继续教育学院留学部主任，北京外国语大学继续教育学院驻西班牙工作站主任' },
				{ url: '/imgs/spainstudy/ms03.jpg', names: '贺晓军', xiangqing: '首席国内外升学规划专家，人力资源专家，从事自主招生和海外升学指导服务 3年，有10年以上的人力资源经历，熟悉国内外各大高校政策，擅长职业就业规划，志愿填报与专业指导' }
			]



		}
	},
	mounted() {

	}
}
</script>
