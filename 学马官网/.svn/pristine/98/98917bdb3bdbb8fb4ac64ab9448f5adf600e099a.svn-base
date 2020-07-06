<template>
	<div class="zhiyuantianbaozhidao">
		<!-- 顶部通栏大banner -->
		<div class="banner">
			<img src="/imgs/zhiyuantianbaozhidao/zhiyuantianbaozhidaobanner.jpg" alt="">
		</div>
		<!-- 自愿报考困境 -->
		<div class="baokaokunjing">
			<div class="inner">
				<h5 class="dabiaoti">志愿报考困境</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox">
						<div class="xian"></div>
						<div class="xian"></div>
						<div class="xian"></div>
						<div class="yuan no1">院校专业<br/>信息量大</div>
						<div class="yuan no2">报考规则<br/>复杂</div>
						<div class="yuan no3">政策瞬息<br/>万变</div>
						<div class="yuan no4">... ...</div>
						<div class="yuan no5">考虑维度<br/>多</div>
						<div class="yuan no6">时间紧</div>
						<div class="middle">考生家长<br/>无从下手</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 学马志愿填报专业为您提供一站式服务 -->
		<div class="yizhanshifuwu">
			<div class="inner">
				<h5 class="dabiaoti">学马志愿填报为您提供一站式服务</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in yizhanshifuwu" :style="item.tubiao">
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 服务流程 -->
		<div class="fuwuliucheng">
			<div class="inner">
				<h5 class="dabiaoti">服务流程</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in fuwuliucheng" :key="index">
						<div class="left">
							<p class="num">{{item.num}}</p>
							<p class="title">{{item.titles}}</p>
						</div>
						<div class="right">
							<p class="xiangqing">{{item.xiangqing}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 选择学马选择安心 -->
		<div class="xuanxuema">
			<div class="inner">
				<h5 class="dabiaoti">选择学马  选择安心</h5>
				<div class="underline"></div>
				<div class="content">
					<div class="neirongbox" v-for="(item, index) in xuanxuema" :key="index">
						<div class="tubiao" :style="item.tubiao"></div>
						<p class="title">{{item.titles}}</p>
						<p class="xiangqing">{{item.xiangqing}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
	.zhiyuantianbaozhidao {
		font-size: 16px;
		color: #666666;
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
		// 自愿报考困境
		.baokaokunjing {
			padding: 60px 0px;
			.content {
				background: url(/imgs/zhiyuantianbaozhidao/beijing.png) no-repeat center center;
				width: 1200px;
				height: 530px;
				.neirongbox {
					height: 530px;
					width: 632px;
					margin: 0 auto;
					position: relative;
					color: #ffffff;
					font-size: 18px;
					text-align: center;
					.yuan {
						width: 112px;
						height: 82px;
						border-radius: 50%;
						background: -webkit-linear-gradient(#85ccf9, #56b1eb);
						background: -o-linear-gradient(#85ccf9, #56b1eb);
						background: linear-gradient(#85ccf9, #56b1eb);
						position: absolute;
						padding-top: 30px;
					}
					.no1 {
						left: 260px;
						top: 0px;
					}
					.no2 {
						left: 492px;
						top: 80px;
					}
					.no3 {
						left: 492px;
						top: 325px;
					}
					.no4 {
						left: 260px;
						bottom: 0px;
						line-height: 50px;
					}
					.no5 {
						left: 30px;
						top: 325px;
					}
					.no6 {
						left: 30px;
						top: 80px;
						line-height: 50px;
					}
					.middle {
						width: 200px;
						height: 112px;
						padding-top: 52px;
						border-radius: 50%;
						box-shadow:0px 0px 10px #56b1eb;
						background: -webkit-linear-gradient(#85ccf9, #56b1eb);
						background: -o-linear-gradient(#85ccf9, #56b1eb);
						background: linear-gradient(#85ccf9, #56b1eb);
						position: absolute;
						left: 50%;
						top: 50%;
						margin-left: -100px;
						margin-top: -81px;
					}
					.xian {
						width: 500px;
						height: 1px;
						background-color: #60b6ee;
						position: absolute;
						left: 50%;
						top: 50%;
						margin-left: -250px;
						&:first-child {
							transform: rotate(30deg);
						}
						&:nth-child(2) {
							transform: rotate(90deg);
						}
						&:nth-child(3) {
							transform: rotate(-30deg);	
						}
					}
				}
			}
		}
		// 学马志愿填报专业为您提供一站式服务
		.yizhanshifuwu {
			padding-top: 60px;
			padding-bottom: 70px;
			background: url(/imgs/jiaofuziyuan/beijingjiaofu02.jpg);
			background-size: 100% 100%;
			color: #ffffff;
			.dabiaoti {
				color: #ffffff;
			}
			.underline {
				background-color: #ffffff;
			}
			.content {
				height: 254px;
				.neirongbox {
					width: 118px;
					height: 142px;
					padding: 108px 29px 0px 29px;
					float: left;
					margin-right: 24px;
					border-radius: 5px;
					border: 2px solid #ffffff;
					&:last-child {
						margin-right: 0px;
					}
					.title {
						text-align: center;
						line-height: 40px;
						font-size: 18px;
					}
					.xiangqing {
						line-height: 24px;
					}
				}
			}
		}
		// 服务流程
		.fuwuliucheng {
			padding-top: 60px;
			padding-bottom: 35px;
			.content {
				height: 700px;
				.neirongbox {
					float: left;
					width: 504px;
					height: 150px;
					margin-bottom: 25px;
					margin-right: 192px;
					// overflow: hidden;
					&:nth-child(even) {
						margin-right: 0px;
					}
					.left {
						float: left;
						width: 100px;
						height: 150px;
						border-radius: 5px;
						color: #ffffff;
						background: -webkit-linear-gradient(#85ccf9, #56b1eb);
						background: -o-linear-gradient(#85ccf9, #56b1eb);
						background: linear-gradient(#85ccf9, #56b1eb);
						.num {
							text-align: center;
							margin-top: 10px;
							font-size: 20px;
							font-weight: bold;
							line-height: 36px;
					
						}
						.title {
							line-height: 24px;
							font-size: 18px;
							padding: 0px 23px;
						}
					}
					.right {
						float: left;
						width: 404px;
						height: 140px;
						margin-top: 5px;
						box-shadow:0 0 20px rgba(176,224,251,.5);
						border-radius: 5px;
						p {
							padding: 40px 46px 0px 46px;
						}
					}
				}
			}
		}
		// 选择学马选择安心
		.xuanxuema {
			padding: 60px 0px;
			background-color: #f6f7fb;
			.content {
				height: 216px;
				.neirongbox {
					float: left;
					width: 204px;
					height: 216px;
					margin-right: 128px;
					background-color: #ffffff;
					border-radius: 5px;
					&:last-child {
						margin-right: 0px;
					}
					.tubiao {
						height: 100px;
						// background: url(/imgs/tubiao/zhinengpaixu.png) no-repeat center 15px;
					}
					.title {
						font-size: 18px;
						text-align: center;
						color: #333333;
						line-height: 18px;
					}
					.xiangqing {
						padding: 15px 22px 0px 22px;
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
			// 学马志愿填报专业为您提供一站式服务
			yizhanshifuwu: [
				{ titles: '专业测评', xiangqing: '学业潜能和兴趣人格测评', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/flow-determine.png) no-repeat center 25px' },
				{ titles: '政策解读', xiangqing: '当年目标院校和专业讲解', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/zhengce-2.png) no-repeat center 25px' },
				{ titles: '志愿方案', xiangqing: '依据分数和个性化要求设计最佳方案 ，成功概率达99.2%', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/querenfangan.png) no-repeat center 25px' },
				{ titles: '方案讲解', xiangqing: '结合大数据，1对1解读设计方案', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/mingcijieshi.png) no-repeat center 25px' },
				{ titles: '方案优化', xiangqing: '与学生和家长沟通 规划方案，根据个性化需求，进行方案优化', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/you.png) no-repeat center 25px' },
				{ titles: '有问必答', xiangqing: '针对考生存在的问题提供专业性的解答', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/huida.png) no-repeat center 25px' }
			],
			// 服务流程
			fuwuliucheng: [
				{ num: '01', titles: '学业与职业测评', xiangqing: '通过权威测评，了解考生的个体潜能优势 及当前不足，初步定向考生适合的专业方向和职业领域。' },
				{ num: '02', titles: '3+3选科测评', xiangqing: '通过专业测评，定位考生的最佳学科组合 ' },
				{ num: '03', titles: '锁定专业与院 校范围', xiangqing: '通过测评报告的专业解读和志愿意向的收 集，大致锁定考生的专业和院校范围。' },
				{ num: '04', titles: '学业辅导', xiangqing: '通过考生的学习动力、学习态度、学习习 惯、学习方法、考试焦虑等问题进行学业辅导。' },
				{ num: '05', titles: '模拟填报方案(高考前)', xiangqing: '根据模拟考试成绩，利用大数据技术出具 适合考生的填报方案，方便考生了解自己的院校档次，激发后阶段冲刺动力。' },
				{ num: '06', titles: '估分填报方案(高考后)', xiangqing: '根据考生估分成绩，智能计算适合考生的 填报方案，初步锁定志愿方案。' },
				{ num: '07', titles: '知分填报方案(出分后)', xiangqing: '根据学生真实成绩和位次排名，利用大数 据原理，出具适合考生的填报方案。' },
				{ num: '08', titles: '方案确定及跟踪录取', xiangqing: '根据家长和考生的特殊需求，对方案进行 微调，确定志愿方案。' }
			],
			// 选择学马选择安心
			xuanxuema: [
				{ titles: '权威测评', xiangqing: '由清华大学教授、博士 生团队研发完成，并取 得国家发明专利', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/1.png) no-repeat center 25px' },
				{ titles: '顶级名师', xiangqing: '平均4年以上资深志愿 填报师 ', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/2.png) no-repeat center 25px' },
				{ titles: '精准数据', xiangqing: '教育考试院校官方数据 来源 ', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/3.png) no-repeat center 25px' },
				{ titles: '全程服务', xiangqing: '从高一选科到志愿录取 ，全程跟进服务 ', tubiao: 'background:url(/imgs/zhiyuantianbaozhidao/4.png) no-repeat center 25px' }
			]
		}
	},
	mounted() {
		window.scroll(0, 0); 
	}
}
</script>