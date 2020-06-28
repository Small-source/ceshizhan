<template>
	<div class="peigengshuxue">
		<div class="banner">
			<img src="/imgs/ketang/peigengshuxue/banner01.png" alt="" v-if="/www.xuematech.com/.test($OEMdomain)">
			<img src="/imgs/ketang/peigengshuxue/banner02.png" alt="" v-else>
		</div>
		<div class="result">
			<div class="go_peigeng">
				<div class="btn" @click="goPeigeng()">进入沛耕数学</div>
			</div>
			<div class="inner">
				<div class="title">解决学生的问题</div>
				<div class="main_box">
					<div class="main" v-for="(item,index) in result" :key="index">
						<img :src="item.imgUrl" alt="">
						<p class="detail" v-html="item.detail"></p>
					</div>
				</div>
			</div>
		</div>
		<div class="jianjie">
			<div class="inner">
				<div class="title">课程简介</div>
				<p class="main">
					沛耕数学是由“全国十佳教师”、多届全国高考命题、审题专家周沛耕老师， 带领高考专家团队精心打造的系统化、体系化的高考备考课程。沛耕高考冲刺提分课程，依据对不同水平的学生和对高考命题规律的系统研 究，周沛耕老师提炼高考命题核心考点，总结归纳解题技巧和方法，为学生精准
	研读、领会和把握高考试题的考察意图、命题思路以及解题思路、方法、技巧等 提供了更权威的指导。每一讲都以命题人的角度深度解读，每一题都无限贴近高 考真题提供指导，体现了权威的命题思路、命题方法以及高考方向。
				</p>
			</div>	
		</div>
		<div class="hexin">
			<div class="inner">
				<div class="title">核心优势</div>
				<div class="main">
					<p class="no1">多届全国高考命题、审题专家周沛耕老师在线授课</p>
					<p class="no2">课程紧跟当下新高考命题趋势，贴合高考要求</p>
					<p class="no3">总结解题规律和考试技巧，帮助学生实现高效提分</p>
					<p class="no4">高考真题深入解析，掌握出题规律，实现科学备考</p>
				</div>
			</div>
		</div>
		<div class="kecengtixi">
			<div class="inner">
				<div class="title">课程体系</div>
				<div class="main_box">
					<div class="main" v-for="(item,index) in kecengtixi" :key="index">
						<div class="imgBox" v-if="index % 2 == 0">
							<img :src="item.imgUrl" alt="">
						</div>
						<div class="mains" v-else>
							<div class="main_title">{{item.title}}</div>
							<div class="detail">{{item.detail}}</div>
							<ul>
								<li v-for="(child,idx) in item.main" :key="idx">{{child}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="team">
			<div class="inner">
				<div class="title">专家团队</div>
				<div class="main_box">
					<div class="main" v-for="(item,index) in team" :key="index" :style="'background: url(' + item.imgUrl +')'">
						<p class="main_title">{{item.title}}</p>
						<p class="detail">{{item.detail}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="shikan">
			<div class="inner">
				<div class="title">试看课程</div>
				<div class="main_box">
					<div class="main">
						<div class="header">高中数学总复习专题记（对学生）——函数</div>
						<video  controls  src="http://video.xuematech.com/customerTrans/f916eb861861badc8e2ef48e60789ed7/37847cdd-171203288ea-0007-0e88-a79-43367.mp4">
                        </video>
					</div>
					<div class="main">
						<div class="header">2019年全国一卷重点题目选讲——第四题</div>
						<video  controls  src="http://video.xuematech.com/customerTrans/f916eb861861badc8e2ef48e60789ed7/51224f20-171203288d6-0007-0e88-a79-43367.mp4">
                        </video>
					</div>
				</div>
			</div>
		</div>
		<BindCard v-on:go-back="isShowBindCard = false" v-show="isShowBindCard" :url="peiGengUrl" :title="'课程学习'" cardAPI="/volunteer/bindCourseLearnCard"></BindCard>
	</div>
</template>

<script>
	import BindCard from '../../components/BindCard.vue'
    export default {
        name: "peigengshuxue",
        components: { BindCard },
        data(){
          return {
          	// 沛耕的链接
            peiGengUrl: '',
            isShowBindCard: false,
          	result: [
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon-mingshi.png', detail: '名师精讲<br/>化繁为简' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_tilian.png', detail: '提炼考点<br/>易错点' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_shendujiedu.png', detail: '深度解读<br/>命题初衷' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_zhuzhongjieti.png', detail: '注重解题<br/>思维训练' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_zongjieguina.png', detail: '总结归纳<br/>解题技巧' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_kuaisutisheng.png', detail: '快速提升<br/>解题速度' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_kaochafanwei.png', detail: '圈定考察范围<br/>及方向' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_yuanchuang.png', detail: '独家原创题<br/>精准预测' }
          	],
          	kecengtixi: [
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_kaodianjingjiang.png', title: '', detail: '' },
          		{ imgUrl: '', title: '专项拔高课', detail: '提升数学思维和解题能力,帮助同学突破高考后两道压轴题，在高考数学上更上 一层楼。', main: ['专题训练 难点狙击','化繁为简 各个击破','注重解题技巧和方法','打破思维定式 拓展解题思维'] },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_zhentiyanjiuyuyuce.png', title: '', detail: '' },
          		{ imgUrl: '', title: '考点精讲课', detail: '考点精讲课程将帮助学生将高中数学的基础知识融会贯通，并逐步掌握高考前 3 道大题以及选做题的解题思路和常用方法。', main: ['涵盖高考全部高频考点','划定核心考点及易错点','总结解题规律及套路方法','暴露问题 查漏补缺'] },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_zhuanxiangbagaoke.png', title: '', detail: '' },
          		{ imgUrl: '', title: '真题研究与预测', detail: '明确高考方向，真题模拟预测，本课程精选了 24 道近几年高考真题进行分析， 通过题目探究高考命题的趋势。', main: ['近3 年高考真题解析课程','深度解读命题初衷','高考趋势解读及方向把握','原创题预测 实战演练'] },
          	],
          	team: [
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_zhoupeigeng.png', title: '周沛耕', detail: '北大附中数学特级教师周沛耕，全国十佳教师，享受国务院特殊津贴的有突 出贡献的专家之一。曾是国家奥林匹克数学竞赛总教练，国家奥林匹克集训队教练、北京队 主教练、国家教委全国理科实验班授课教师，是多届国际奥林匹克数学竞赛金奖获得者的老师。' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_yangqingming.png', title: '杨青明', detail: '中国数学学会会员、原清华附中高级教师，出版编辑《形独》一书。' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_dongshujia.png', title: '董数甲', detail: '毕业于山东师范大学，曾获得国家奥林匹克山东省一等奖。10 年以上高考试题研究经验，所带学生多名考入清华、北大、人大、北邮等。' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_baichong.png', title: '白冲', detail: '10 年以上高考试题研究经验，善于抓住问题所考查的本质内容。注重解决问 题的通法和技巧，培养学生一题多解和多题一解的能力，提高学生解决问题的能力。擅长对试题进行归纳、总结与整理。' },
          		{ imgUrl: '/imgs/ketang/peigengshuxue/icon_duanpengfei.png', title: '段鹏飞', detail: '从事数学教学多年，功底扎实，逻辑思维严密，重点突出。热爱教育，丰富 的教学经验让课堂更加精准有效，快速提分重塑学生对数学的兴趣，让学生在学习中感受快乐。' },
          	]
          }
        },
        methods:{
        	goPeigeng() {
	            var _this = this;
	            var token = window.sessionStorage.getItem('ymtxToken');
	            this.$ajax.post(this.G_uri + '/volunteer/requestThirdPartyPc', {}, {
	                    headers:{
	                        token: token
	                    }
	            })
	            .then(function(res) {
	                if(res.data.code == 2000) {
	                    let url =res.data.data;
	                    let obj = {};
	                    let str = url.slice(url.indexOf('?') + 1);
	                    str.split('&').forEach((item,index) => {
	                        let arr = item.split('=');
	                        if(arr.length > 1) {
	                            obj[arr[0]] = arr[1];
	                        }
	                    })
	                    // 沛耕数学 isBindCard 1是未绑卡2是已经绑卡
	                    if(obj.isBindCard == 1) {
	                        _this.peiGengUrl = url;
	                        _this.isShowBindCard = true;
	                    }else if(obj.isBindCard == 2) {
	                        window.open(url, "_blank"); 
	                    }
	                    // window.open(url, "_blank"); 

	                    // var a = $("<a target='_blank' href=" + url + "></a>").get(0);
	                    // var e = document.createEvent('MouseEvents');
	                    // e.initEvent('click', true, true);
	                    // a.dispatchEvent(e);
	                }else if(res.data.code == 1016) {
	                    _this.$router.push('/login');
	                }
	            })
	            .catch(function(error) {
	                console.log(error);
	            });
	        },
        },
        created(){
        },
        mounted(){
        },
    }
</script>

<style scoped  type="text/css" lang='less'>
	.peigengshuxue {
		.inner {
			width: 1200px;
			margin: 0 auto;
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
			padding-bottom: 40px;
			position: relative;
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
					&:active {
						box-shadow: none;
					}
				}
			}
			.main_box {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.main {
					padding-top: 20px;
					padding-bottom: 20px;
					width: 260px;
					text-align: center;
					img {
						margin-bottom: 20px;
					}
					.detail {
						font-size: 18px;
						line-height: 30px;
					}
				}
			}
		}
		.jianjie {
			color: #fff;
			height: 600px;
			background: url(/imgs/ketang/peigengshuxue/bg_kechengjianjie.png) no-repeat center center;
			.title {
				color: #fff;
			}
			.main {
				width: 646px;
				padding: 100px 20px 0px 20px;
				font-size: 16px;
				line-height: 1.5em;
			}
		}
		.hexin {
			height: 710px;
			background-color: #fff;
			.main {
				height: 502px;
				background: url(/imgs/ketang/peigengshuxue/icon_hexinyoushi.png) no-repeat;
				position: relative;
				p {
					position: absolute;
					font-size: 20px;
					line-height: 50px;
					color: #333;
				}
				.no1 {
					left: 620px;
					top: 50px;
				}
				.no2 {
					left: 700px;
					top: 170px;
				}
				.no3 {
					left: 700px;
					top: 288px;
				}
				.no4 {
					left: 620px;
					top: 410px;
				}
			}
		}
		.kecengtixi {
			background-color: #F4F6F8;
			padding-bottom: 60px;
			color: #333;
			.main_box {
				display: flex;
				flex-wrap: wrap;
				.main {
					width: 33.333%;
					.mains {
						padding: 20px;
						.main_title {
							line-height: 54px;
							font-size: 22px;
							font-weight: 600;
						}
						.detail {
							font-size: 14px;
							line-height: 1.5em;
							margin-bottom: 20px;
						}
						ul {
							display: flex;
							width: 100%;
							flex-wrap: wrap;
							li {
								margin-bottom: 20px;
								width: 50%;
								font-size: 13px;
								position: relative;
								padding-left: 10px;
								line-height: 1em;
								box-sizing: border-box;
								&::before {
									content: '';
									width: 6px;
									height: 6px;
									background-color: #4478EA;
									position: absolute;
									top: 50%;
									left: 0;
									margin-top: -3px;
									z-index: 1;
								}
							}
						}
					}
				}
			}
		}
		.team {
			background-color: #FFFFFF;
			height: 565px;
			.main_box {
				display: flex;
				justify-content: space-between;
				.main {
					width: 222px;
					height: 366px;
					box-sizing: border-box;
					padding: 0 20px;
					padding-top: 120px;
					color: #FFFFFF;
					.main_title {
						font-size: 18px;
						font-weight: 600;
						text-align: center;
						margin-bottom: 5px;
					}
					.detail {
						font-size: 14px;
						line-height: 1.5em;
					}
				}
			}
		}
		.shikan {
			height: 592px;
			background: url(/imgs/ketang/peigengshuxue/icon_shikankecheng.png) no-repeat center center;
			.title {
				color: #fff;
			}
			.main_box {
				display: flex;
				justify-content: space-between;
				.header {
					width: 400px;
					height: 72px;
					line-height: 72px;
					text-align: center;
					color: #fff;
					font-size: 20px;
					position: absolute;
					top: -10px;
					left: 50%;
					// z-index: 2;
					margin-left: -200px;
					background: url(/imgs/ketang/peigengshuxue/icon_kecheng.png) no-repeat center center;
				}
				.main {
					position: relative;
					width: 560px;
					height: 380px;
					box-sizing: border-box;
					padding: 84px 25px 25px 25px;
					background-color: #fff;
					video {
						width: 100%;
						height: 100%;	
					}
				}
			}
		}
	}
</style>