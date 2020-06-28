<template>
	<div class="page_content page_mulu">
		<h5 class="header">
			<span>目录</span>
		</h5>
		<div class="content" id="catalog_1">
			<template v-for="(item, index) in tData">
				<div class="big_title_box">
					<div class="big_title"><span>Part{{index + 1}}</span>{{item.title}}</div>
<!-- 					<div class="line"></div>
					<div class="page_number"></div> -->
				</div>
				<div class="small_title_box" v-for="(child,idx) in item.sTitle" v-if="item.sTitle.length">
					<div class="small_titled">{{child}}</div>
					<div class="line"></div>
					<div class="page_number"></div>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
export default {
	components: {  },
    props: [],
    data() {
        return {
        	tData: [
        		{title: '基本信息', sTitle: ['学生信息','学业信息','学业水平考试','获奖信息']},
        		{title: '个人特质', sTitle: ['人格特性','认知潜能','兴趣倾向','学习特征','心理健康评估结果']},
        		{title: '我的目标', sTitle: ['我的目标','定位结果','目标大学梯度表','大学与专业探索表','生涯测评推荐职业与专业','职业类型与评估指标分析']},
        		{title: '行动计划', sTitle: ['成绩与行动计划展示','行动计划历史记录']},
        		{title: '状态咨询', sTitle: ['复盘结果-学习状态趋势','状态咨询记录统计','状态咨询记录详情']},
        		{title: '总结', sTitle: ['升学规划展示','学业规划展示']}
        	]
        }
    },
    methods: {

    },
    watch: {

    },
    created() {
    	
    },
    mounted() {

    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_mulu {
		height: 1200px;
		h5.header {
			margin-bottom: 10px;
			margin-top: -20px;
			line-height: 50px;
		}
	}
</style>