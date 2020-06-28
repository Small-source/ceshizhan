<template>
	<div>
		<div class="page_content pageZongjie" style="height: 1200px">
			<h5 class="header">
				<span>Part6</span>总结
			</h5>
			<h6 class="small_title">升学规划展示</h6>
			<div class="goal_box" v-if="target">
				<p>您一共制定了{{target.volCount}}个“大学+专业”志愿填报目标。</p>
				<p>通过决策工具层层筛选，确定了{{target.occupationCount}}个职业目标，{{target.universityCount}}个大学目标，{{target.subjectCount}}个专业目标。</p>
				<p>为了激励自己更好的学习，在《目标大学梯度表中》共添加了{{target.shavingCount}}个大学。</p>
				<p>共探索了{{target.questSubjectCount}}个专业、{{target.questUniversityCount}}个大学，收藏了{{target.collectSubject}}个专业、{{target.collectUniversity}}个大学。</p>
			<!-- {{target.collectOccupation}}个职业。 -->
			</div>
			<div class="echarts_box">
				<div class="echart" id="echartZongjie1" style="width: 800px;height: 350px;">
				</div>
			</div>
			<div class="echarts_box">
				<div class="title_box">
					<p class="block"></p>
					<p>院校+专业目标分析</p>
				</div>
				<div class="echart" id="echartZongjie2" style="width: 800px;height: 350px;">
					
				</div>
			</div>
		</div>
		<div class="page_content pageZongjie" style="height: 1200px">
			<h6 class="small_title">学业规划展示</h6>
			<div class="echarts_box">
				<div class="title_box">
					<p class="block"></p>
					<p>排名变化趋势</p>
				</div>
				<div class="echart" id="echartZongjie3" style="width: 800px;height: 400px;"></div>
			</div>
			<div class="echarts_box">
				<div class="title_box">
					<p class="block"></p>
					<p>周计划完成率</p>
				</div>
				<div class="echart" id="echartZongjie4" style="width: 800px;height: 400px;"></div>
			</div>
		</div>
		<div class="page_content pageZongjie" style="height: 1200px">
			<div class="echarts_box">
				<div class="title_box">
					<p class="block"></p>
					<p>复盘结果 - 任务完成满意度</p>
				</div>
				<div class="echart" id="echartZongjie5" style="width: 800px;height: 400px;"></div>
			</div>
			<div class="echarts_box">
				<div class="title_box">
					<p class="block"></p>
					<p>复盘结果 - 学习状态指数</p>
				</div>
				<div class="echart" id="echartZongjie6" style="width: 800px;height: 400px;"></div>
			</div>
		</div>
	</div>	
</template>
<script>
export default {
	name: 'pageZongjie',
	components: { },
    props: ['target','summary'],
    data() {
        return {
        }
    },
    computed: {
    	// summary() {
    	// 	if(this.summary) {
    	// 		return this.summary.summary;
    	// 	}
    	// }
    },
    watch: {
    },
    methods: {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.pageZongjie {
		padding-bottom: 40px;
		table {
			tr {
				line-height: 44px;
				th {
					border: 2px solid #fff;
					width: 20%;
					text-align: center;
					color: #fff;
					background-color: #83CFCF;
				}
				td {
					border: 1px solid #fff;
					text-align: center;
					color: #333;
					background-color: #F9F9FA;
					font-size: 14px;
				}
			}
		}
		.goal_box {
			padding: 25px;
			background-color: #F2F2F2;
			border-radius: 10px;
			margin-bottom: 30px;
			p {
				line-height: 28px;
			}
		}
		.echarts_box {
			padding-bottom: 60px;
			.title_box {
				display: flex;
				align-items: center;
				margin-bottom: 20px;
				font-size: 20px;
				font-weight: 600;
				color: #7AC34F;
				p {
					margin-right: 20px;
				}
			}
		}
	}
</style>
