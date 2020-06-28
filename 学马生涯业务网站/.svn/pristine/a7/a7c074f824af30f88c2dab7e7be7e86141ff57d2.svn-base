<template>
	<div class="huhangjihua">
		<div class="banner">
			<img src="/imgs/xmsy_huhangjihua/banner.png" alt="">
		</div>
		<div class="qunti">
			<div class="title">适用群体</div>
			<div class="inner">
				<ul class="main_box">
					<li><img src="/imgs/xmsy_huhangjihua/icon_01.png" alt=""><p>没有目标，感到迷茫的<br/>学生</p></li>
					<li><img src="/imgs/xmsy_huhangjihua/icon_02.png" alt=""><p>想要做进一步提升，进入<br/>理想高校的学生</p></li>
					<li><img src="/imgs/xmsy_huhangjihua/icon_03.png" alt=""><p>想要通过综合评价/强基<br/>计划进入名校</p></li>
				</ul>
			</div>
		</div>
		<div class="jianjie">
			<div class="title">护航计划简介</div>
			<div class="inner">
				<div class="detail_box">
					<img src="/imgs/xmsy_huhangjihua/icon_dunhao01.png" alt="" class="img01">
					<img src="/imgs/xmsy_huhangjihua/icon_dunhao01.png" alt="" class="img02">
					<p class="no1">新高考的改革，给我们高中阶段的学生带来了更加科学的培养方式，增加了学生更多的自主选择权，但是在改革的实施过程中又带来了一些现实问题，学生面临的升学问题，主要集中在：取消文理分科后，高一学生如何选择合适自己的选考科目？实现多元升学后，高中阶段如何规划自己的升学路径？招生录取制度从院校导向转变为专业导向的模式，如何决策自己的志愿方案？</p>
					<p class="no2">在此背景之下，基于生涯规划理念，通过学生发展方向定位（生涯测评、新高考选科）、升学通路设计（综评/强基计划）、提升训练（学业规划）以及结
果选择（志愿填报）四大步骤，为学生提供个性化的升学指导整体解决方案。</p>
				</div>
				<img src="/imgs/xmsy_huhangjihua/bg_siweidaotu.png" alt="">
			</div>
		</div>
		<div class="grade1 grade">
			<div class="title">高一</div>
			<div class="title_detail">—— 探索方向，认知自我，确立目标 ——</div>
			<div class="inner">
				<ul class="main_box">
					<li v-for="(item, index) in grade1" :key="index">
						<p class="small_title">{{item.title}}</p>
						<p class="small_detail">{{item.detail}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="grade2 grade">
			<div class="title">高二</div>
			<div class="title_detail">—— 探索方向，认知自我，确立目标 ——</div>
			<div class="inner">
				<ul class="main_box">
					<li v-for="(item, index) in grade2" :key="index">
						<p class="small_title">{{item.title}}</p>
						<p class="small_detail" v-html="item.detail"></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="grade3 grade">
			<div class="title">高三</div>
			<div class="title_detail">—— 探索方向，认知自我，确立目标 ——</div>
			<div class="inner">
				<ul class="main_box">
					<li v-for="(item, index) in grade3" :key="index">
						<p class="small_title">{{item.title}}</p>
						<p class="small_detail">{{item.detail}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="our_advantage">
			<div class="title">我们的优势</div>
			<div class="content">
				<div class="inner">
					<ul>
						<li v-for="(item, index) in ourAdvantage" :key="index" @mouseenter="activeClass = index" @mouseleave="activeClass='6'" :class="activeClass==index ? 'active' : ''">
							<img :src="activeClass == index ? item.imgUrl2: item.imgUrl" alt="">
							<p class="small_title">{{item.title}}</p>
							<div class="line"></div>
							<p class="small_detail">{{item.detail}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="fuwuneirong">
			<div class="title">服务内容</div>
			<div class="content">
				<div class="inner">
					<ul class="lis">
						<li v-for="(item,index) in fuwuTitle" @click="fuwuIdx = index" :class="fuwuIdx == index ? 'active' : ''" :key="index">{{item}}</li>
					</ul>
					<div class="table_box">
						<table>
							<thead>
							    <tr>
							        <th colspan="2">服务模块</th>
							        <th>服务内容</th>
							        <th>课时</th>
							        <th>辅导时间</th>
							        <th>大护航套餐</th>
							        <th>小护航套餐</th>
							    </tr>
							</thead>
							<tbody v-show="fuwuIdx == 0">
							    <tr>
									<td rowspan="5">目标规划</td>
									<td rowspan="2">生涯测评</td>
									<td>学业潜能测评+解读</td>
									<td rowspan="2">1</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
									<td>专业定位测评+解读</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
									<td>新高考选科</td>
									<td>选科测评+解读</td>
									<td>1</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							    <tr>
									<td>升学通路设计方案</td>
									<td>升学途径评估与规划方案</td>
									<td>1</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							     <tr>
									<td>外部探索</td>
									<td>专业+院校+升学政策</td>
									<td>100+</td>
									<td>线上</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							</tbody>
							<tbody v-show="fuwuIdx == 1">
							    <tr>
									<td rowspan="9">升学备考</td>
									<td rowspan="4">背景提升</td>
									<td>研究性学习报告（2个）</td>
									<td>20</td>
									<td>寒暑假</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
									<td>社会实践</td>
									<td>4</td>
									<td>寒暑假或周末</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
									<td>大赛推荐</td>
									<td>/</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
									
							    </tr>
							    <tr>
									<td>综合素质评价档案指导</td>
									<td>/</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							     <tr>
									<td rowspan="3">资格申请</td>
									<td>择校方案指导</td>
									<td>1</td>
									<td>3-5月</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
									<td>自荐信指导</td>
									<td>1</td>
									<td>3-5月</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
							    	<td>资料汇总与网上报考</td>
									<td>/</td>
									<td>3-5月</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							    <tr>
							    	<td rowspan="2">复试指导</td>
							    	<td>面试指导</td>
									<td>6</td>
									<td>高考后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							     <tr>
							    	<td>笔试指导</td>
									<td>/</td>
									<td>高考后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							</tbody>
							<tbody v-show="fuwuIdx == 2">
							    <tr>
									<td rowspan="8">升学备考</td>
									<td rowspan="2">学业评估</td>
									<td>学科诊断</td>
									<td>每学期一次</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							     <tr>
							    	<td>学习状态评估</td>
									<td>/</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							    <tr>
									<td rowspan="5">学业管理</td>
									<td>目标管理与时间规划</td>
									<td rowspan="5">20次</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							    <tr>
									<td>制定行动计划</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>

							    <tr>
									<td>结果复盘</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							    <tr>
									<td>情绪管理与考试焦虑辅导</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							    <tr>
									<td>自信心提升</td>
									<td>报名后</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							    <tr>
									<td>学业拔尖</td>
									<td>拔尖训练</td>
									<td>6天</td>
									<td>寒暑假</td>
									<td class="bg_blue">√</td>
									<td></td>
							    </tr>
							</tbody>
							<tbody v-show="fuwuIdx == 3">
							    <tr>
									<td>结果选择</td>
									<td>志愿填报</td>
									<td>志愿填报一对一指导</td>
									<td>2</td>
									<td>高考后</td>
									<td class="bg_blue">√</td>
									<td class="bg_blue">√</td>
							    </tr>
							</tbody>
						</table>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        name: "huhangjihua",
        components: {  },
        data(){
          return {
          	activeClass: '6',
          	grade1: [
          		{ title: '角色转化', detail: '初高中有序衔接，帮助学生适应高中的新生活 ' },
          		{ title: '方向定位', detail: '生涯探索，挖掘潜能优势，定位专业及职业方向，完成选科' },
          		{ title: '全面规划', detail: '制定学生升学初步方案并制定科学的行动计划' },
          		{ title: '能力提升', detail: '针对性参与研究性学习、学科能力提升项目，有效提升综合竞争力' },
          		{ title: '全程陪伴', detail: '有效解决学习和成长过程中遇到的问题，实现健康成长' }
          	],
          	grade2: [
          		{ title: '打造亮点', detail: '选择与自身匹配的研究性学习、学科能力提升等项目' },
          		{ title: '目标调整', detail: '根据学生的实际变化情况，修正目标，确定意向大学和专业的范围' },
          		{ title: '路径选择', detail: '综合考量，确定与学生相匹配的升学路径及实施方案，包括<br/>强基计划、综合评价等' },
          		{ title: '把握机遇', detail: '申请参与适合学生的高校学科营，增加走进名校的几率' },
          		{ title: '有效辅导', detail: '有效解决学生高二关键期的学习问题，实现学业良好发展' }
          	],
          	grade3: [
          		{ title: '考前强化', detail: '把握高考考试规律，真题强化训练，冲刺高考' },
          		{ title: '力争捷径', detail: '合理制定综合评价、强基计划等特殊类招生申请方案' },
          		{ title: '贴心指导', detail: '帮助学生完成综评、强基申请报考，报考材料准备、网上填报等' },
          		{ title: '从容应战', detail: '帮助学生调整高考前的心态，争取超水平发挥' },
          		{ title: '圆梦高校', detail: '量身制定科学的志愿填报方案' },
          		{ title: '大学规划', detail: '量身制定科学的志愿填报方案' }
          	],
          	ourAdvantage: [
          		{ title: '科学的培养理念',detail: '适应新高考改革对人才培养的要求，全面提升学生的综合素养，增强学生的升学实力。',imgUrl: '/imgs/xmsy_huhangjihua/icon_xianshang.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_xianshanglan.png' },
          		{ title: '个性化的解决方案',detail: '基于学生个人基本情况定制专属升学规划方案，并根据学生的实际变化情况做及时调整。',imgUrl: '/imgs/xmsy_huhangjihua/icon_jiejuefangan.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_jiejuefanganlan.png' },
          		{ title: '雄厚的师资力量',detail: '研发老师毕业于985名校，经验丰富；一线授课老师拥有多年的升学规划经验，辅导众多学生进入理想高校。',imgUrl: '/imgs/xmsy_huhangjihua/icon_shizi.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_shizilan.png' },
          		{ title: '服务过程全程跟踪',detail: '提供一对一的专业规划师和教务管理老师，顺利达到升学的目标，并时追踪学生的学业情况。',imgUrl: '/imgs/xmsy_huhangjihua/icon_genzong.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_genzonglan.png' },
          		{ title: '强大的系统平台支撑',detail: '生涯发展管理平台系统为学生升学规划提供技术支撑，个性化特征、学习状态全过程记录。',imgUrl: '/imgs/xmsy_huhangjihua/icon_pingtai.png', imgUrl2: '/imgs/xmsy_huhangjihua/icon_pingtailan.png' }
          	],
          	fuwuTitle: ['目标规划','升学备考','学业提升','结果选择'],
          	fuwuIdx: 0,
          	
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
	.huhangjihua {
		.table_box {
			padding: 40px 30px;
			background-color: #fff;
		}
		table {
			.bg_blue {
				color: #347CDD;
				font-weight: bold;
			}
			tr {
				
				th {
					line-height: 50px;
					font-size: 16px;
					color: #fff;
					border: 1px solid #fff;
					background-color: #3184F5;
					text-align: center;
					&:nth-child(1) {
						width: 290px;
					}
					&:nth-child(2) {
						width: 350px;
					}
				}
				td {
					line-height: 40px;
					border: 1px solid #fff;
					background-color: #E3F2FF;
					color: #333;
					font-size: 14px;
					text-align: center;
				}
			}
		}
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
		.title_detail {
			text-align: center;
			margin-top: -30px;
		}
		.banner {
			img {
				width: 100%;
			}
		}
		.qunti {
			background-color: #F4F6F8;
			padding-bottom: 50px;
			.main_box {
				display: flex;
				justify-content: space-between;
				li {
					position: relative;
					width: 366px;
					p {
						position: absolute;
						bottom: 20px;
						left: 0;
						text-align: center;
						width: 100%;
					}
				}
			}
		}
		.jianjie {
			background-color: #fff;
			padding-bottom: 50px;
			font-size: 18px;
			line-height: 36px;
			.detail_box {
				padding: 60px 0;
				position: relative;
				p {
					margin-bottom: 20px;
					position: relative;
				}	
				.img01 {
					position: absolute;
					left: 0;
					top: -20px;
				}
				.img02 {
					position: absolute;
					right: 0;
					bottom: 50px;
					transform: rotate(180deg);
				}
			}
		}
		.grade {
			color: #333;
			li {
				position: absolute;
				.small_title {
					font-size: 18px;
					font-weight: 600;
					line-height: 30px;
				}
				.small_detail {
					font-size: 14px;
					line-height: 22px;
				}
			}
		}
		.grade1 {
			.main_box {
				height: 671px;
				background: url(/imgs/xmsy_huhangjihua/01.png) no-repeat left center;
				position: relative;
				li:nth-child(1) {
					left: 630px;
					top: 100px;
				}
				li:nth-child(2) {
					left: 680px;
					top: 195px;
				}
				li:nth-child(3) {
					left: 710px;
					top: 298px;
				}
				li:nth-child(4) {
					left: 695px;
					top: 406px;
				}
				li:nth-child(5) {
					left: 640px;
					top: 514px;
				}

			}
		}
		.grade2 {
			background-color: #fff;
			.main_box {
				height: 671px;
				background: url(/imgs/xmsy_huhangjihua/02.png) no-repeat right center;
				position: relative;
				li:nth-child(1) {
					left: 200px;
					top: 98px;
				}
				li:nth-child(2) {
					left: 70px;
					top: 195px;
				}
				li:nth-child(3) {
					left: 70px;
					top: 298px;
				}
				li:nth-child(4) {
					left: 130px;
					top: 406px;
				}
				li:nth-child(5) {
					left: 170px;
					top: 514px;
				}
			}
		}
		.grade3 {
			.main_box {
				height: 671px;
				background: url(/imgs/xmsy_huhangjihua/03.png) no-repeat left center;
				position: relative;
				li:nth-child(1) {
					left: 615px;
					top: 70px;
				}
				li:nth-child(2) {
					left: 685px;
					top: 165px;
				}
				li:nth-child(3) {
					left: 720px;
					top: 268px;
				}
				li:nth-child(4) {
					left: 715px;
					top: 380px;
				}
				li:nth-child(5) {
					left: 680px;
					top: 490px;
				}
				li:nth-child(6) {
					left: 610px;
					top: 570px;
				}
			}
		}
		.our_advantage {
			padding-bottom: 100px;
			background-color: #fff;
			.title {
				margin-bottom: 30px;
			}
			.content {
				background: url(/imgs/xmsy_huhangjihua/bg_youshi.png) no-repeat center center;
				height: 326px;
				ul {
					display: flex;
					justify-content: space-between;
					height: 366px;
					position: relative;
					top: -20px;
					li {
						box-sizing: border-box;
						width: 240px;
						height: 366px;
						padding-top: 70px;
						color: #fff;
						text-align: center;
						.small_title {
							line-height: 60px;
							text-align: center;
							font-size: 20px;
						}
						.line {
							width: 95px;
							border: 1px solid #fff;
							margin: 0 auto;
						}
						.small_detail {
							padding: 0 40px;
							padding-top: 25px;
							font-size: 14px;
							text-align: left;
						}
					}
					.active {
						position: relative;
						z-index: 2;
						box-shadow: 0px 0px 35px rgba(167,169,180,.2);
						background-color: #fff;
						color: #333;
						.line {
							border: 1px solid #377BED;
						}
					}

				}
			}
		}
		.fuwuneirong {
			padding-bottom: 100px;

			.lis {
				width: 686px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				margin-bottom: 35px;
				li {
					line-height: 42px;
					border: 1px solid #347CF0;
					color: #347CF0;
					font-size: 18px;
					text-align: center;
					border-radius: 21px;
					width: 138px;
					cursor: pointer;
				}
				.active {
					background-color: #347CF0;
					color: #fff;

				}
			}
		}
	}
</style>