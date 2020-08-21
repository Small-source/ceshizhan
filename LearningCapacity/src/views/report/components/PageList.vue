<template>
		<div class="page_mulu page_shadow">
			<h5 class="header">
				<span>目录</span>
			</h5>
			<div class="content">
				<div class="content_box" v-for="(item, index) in tData">
					<div class="big_title_box">
						<div class="big_title"><span>Part{{index + 1}}</span>{{item.title}}</div>
						<div class="line"></div>
						<div class="page_number">{{item.num}}</div>
					</div>
					<template v-for="(child,idx) in item.sTitle">
						<div class="small_title_box">
							<div class="small_titled">{{child.s_title}}</div>
							<div class="line"></div>
							<div class="page_number">{{child.num}}</div>
						</div>
						<div class="g_small_title_box" v-for="(g_child,idx) in child.gTitle">
							<div class="small_titled">{{g_child.g_title}}</div>
							<div class="line"></div>
							<div class="page_number">{{g_child.num}}</div>
						</div>
					</template>
				</div>
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
        		{ title: '学习潜力', num: '01', sTitle: [{s_title: '1.1 学习潜力评估结果',num: '01', gTitle: []}, {s_title: '1.2 学习潜力分析',num: '02', gTitle: []}] },
        		{ title: '学习动力', num: '07', sTitle: [{s_title: '2.1 学习动力评估结果',num: '07', gTitle: []}, {s_title: '2.2 学习动力分析',num: '07', gTitle: []}] },
        		{ title: '学习效力', num: '10', sTitle: [
        			{s_title: '3.1 学习策略',num: '10', gTitle: [{g_title: '3.1.1 学习策略评估结果',num: '10'},{g_title: '3.1.2 学习策略分析',num: '11'}]}, 
        			{s_title: '3.2 学习风格',num: '17', gTitle: [{g_title: '3.2.1 学习风格评估结果',num: '17'},{g_title: '3.2.2 学习风格分析',num: '18'}]}
        		] },
        		{ title: '心理健康', num: '19', sTitle: [{s_title: '4.1 心理健康评估结果',num: '19', gTitle: []}, {s_title: '4.2 心理健康分析',num: '20', gTitle: []}] }
        		
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
		.content {

			.content_box {
				margin-bottom: 30px;
			}
		}
		.big_title_box {
			display: flex;
			line-height: 50px;
			color: #333;
			font-weight: bold;
			.big_title {
				position: relative;
				padding-left: 70px;
				padding-right: 20px;
				font-size: 20px;
				span {
					height: 50px;
					font-size: 24px;
					line-height: 50px;
					text-align: center;
					width: 30px;
					position: absolute;
					left: 0px;
					top:  0px;
				}	
			}
			.line {
				flex: 1;
				border-top: 2px dotted #333;
				margin: auto 0;
			}
			.page_number {
				padding-left: 10px;
				font-size: 18px;
			}
		}
		.small_title_box {
			.big_title_box;
			font-weight: normal;
			color: #8A8A8A;
			line-height: 40px;
			.small_titled {
				padding-left: 30px;
				padding-right: 20px;
			}
			.line {
				border-top: 2px dotted #8A8A8A;
			}
			.page_number {
				font-size: 16px;
			}
		}
		.g_small_title_box {
			.big_title_box;
			font-weight: normal;
			color: #8A8A8A;
			line-height: 40px;
			.small_titled {
				padding-left: 60px;
				padding-right: 20px;
				font-size: 14px;
			}
			.page_number {
				font-size: 14px;
			}
		}
	}
</style>