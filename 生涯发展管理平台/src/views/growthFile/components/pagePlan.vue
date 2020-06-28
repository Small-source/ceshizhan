<template>
	<div>
		<div class="page_content page_plan" style="height: 1200px" >
			<h5 class="header">
				<span>Part4</span>行动计划
			</h5>
			<div class="goal_box" v-if="action">
				<p>在您参与的学业规划期间，共制定过{{action.monthSum}}个月计划、{{action.weekSum}}个周计划、{{action.daySum}}个日计划。</p>
				<p>周计划平均完成率是{{action.weekAverageRate}}，日计划平均完成率是{{action.dayAverageRate}}</p>
				<p>制定周计划最多的一周是第{{action.actionPlan}}次学业规划的第{{action.weekPlan}}周，共制定了{{action.totalWeekCount}}个周计划，完成率是{{action.weekRate}}</p>
			</div>
			<h6 class="small_title">成绩与行动计划展示</h6>
			<div class="main_box">
				<div class="title_box"><p class="block"></p>排名变化趋势</div>
				<div id="echartsplan1" style="width: 800px;height: 400px;"></div>
			</div>
			<div class="main_box">
				<div class="title_box"><p class="block"></p>周计划完成率</div>
				<div id="echartsplan2" style="width: 800px;height: 400px;"></div>
			</div>
		</div>
		<div class="page_content page_plan">
			<ul class="main_lis" v-if="action">
				<li v-for="(item, index) in action.academicPlanId" :key="index">
					<p>第{{item.num}}次学业规划</p>
					<p>{{item.date}}</p>
				</li>
			</ul>
		</div>
		<div class="page_content page_plan" v-if="history" v-for="(item,index) in history" :key="index">
			<h6 class="small_title" v-if="index == 0">行动计划历史记录</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p class="title">第{{item.n}}次学业规划 月计划</p>
					<p class="date">日期：{{item.d}}</p>
				</div>
				<div class="detail_box">
					<p>目标数量：{{item.mtn}}</p>
					<p>共计：{{item.weekNum}}周</p>
					<p>覆盖学业规划：{{item.weekAcademicPlan}}次</p>
				</div>
				<ul class="detail_midbox">
					<li>
						<p>周计划：共{{item.weekTargetNum}}个</p>
						<p>已完成{{item.weekTargetDone}}个/剩余{{item.weekTargetUndone}}个</p>
						<p>计划完成率{{item.weekTargetRate}}</p>
					</li>
					<li>
						<p>日计划：共{{item.dayTargetNum}}个</p>
						<p>已完成{{item.dayTargetDoneNum}}个/剩余{{item.dayTargetUndoneNum}}个</p>
						<p>平均完成率{{item.dayTargetRate}}</p>
					</li>
				</ul>
				<ul class="main_lis">
					<li v-for="(child) in item.week">
						<p>第{{child.week}}周</p>
						<p>周计划{{child.weekTargetNum}}个</p>
						<p>重要事项{{child.weekTargetImportNum}}个</p>
						<p>完成{{child.weekTargetDone}}个</p>
						<p>完成率{{child.rate}}个</p>
					</li>
				</ul>
			</div>
		</div>
	</div>	
</template>
<script>
export default {
	name: 'page_plan',
	components: { },
    props: ['action'],
    data() {
        return {
        }
    },
    computed: {
    	history() {
    		if(this.action) {
    			return this.action.history;
    		}
    	}
    },
    watch: {
    },
    methods: {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_plan {
		padding-bottom: 40px;
		.goal_box {
			padding: 25px;
			background-color: #F2F2F2;
			border-radius: 10px;
			margin-bottom: 30px;
			p {
				line-height: 28px;
			}
		}
		.main_box {
			margin-bottom: 20px;
			.title_box {
				display: flex;
				align-items: center;
				margin-bottom: 20px;
				font-size: 20px;
				font-weight: 600;
				color: #7AC34F;

				.title {
					margin-right: 25px;
				}
				.date {
					font-size: 16px;
				}
			}
			.detail_box {
				display: flex;
				font-size: 18px;
				padding-left: 50px;
				margin-bottom: 20px;
				p {
					margin-right: 20px;
				}
			}
			.detail_midbox {
				display: flex;
				margin-bottom: 20px;
				li {
					box-sizing: border-box;
					line-height: 40px;
					padding: 0 20px;
					width: 50%;
					font-size: 14px;
					background-color: #DDEAD8;
					color: #7AC34F;
					display: flex;
					justify-content: space-between;

					&:first-child {
						border-right: 2px solid #fff;
					}
				}
			}
		}
		.main_lis {
			display: flex;
			flex-wrap: wrap;
			// padding-bottom: 20px;
			li {
				box-sizing: border-box;
				width: 50%;
				min-height: 40px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0px 20px;
				font-size: 14px;
				background: rgba(154, 202, 109, 0.4);
				p {
					line-height: 1.5em;
				}
				&:nth-child(4n+1) {
					background-color: #F2F2F2;
				}
				&:nth-child(4n+2) {
					background-color: #F2F2F2;
				}
				&:nth-child(even) {
					border-left: 2px solid #fff;
				}
			}
			
		}
	}
</style>
