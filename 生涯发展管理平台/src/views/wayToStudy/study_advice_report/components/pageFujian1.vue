<template>
	<div class="page_shadow page_index">
		<div class="page pdf-page">
			<div class="header">
				<span>附件1</span>升学日历
			</div>
			<!-- <h6 class="small_title">学生情况</h6> -->
			<div class="main_box">
				<div class="main_title">
					<span></span>
					高一
				</div>
				<ul class="lis_card">
					<li class="card" v-for="(item,index) in data1" :key="index">
						<p class="title">{{item.title}}</p>
						<ul>
							<li v-for="child in item.detailData">
								{{child}}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					高二
				</div>
				<ul class="lis_card">
					<li v-for="(item,index) in data2" :key="index" class="card">
						<p class="title">{{item.title}}</p>
						<ul>
							<li v-for="child in item.detailData">
								{{child}}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					高三
				</div>
				<ul class="lis_card">
					<li v-for="(item,index) in data3" :key="index" class="card">
						<p class="title">{{item.title}}</p>
						<ul>
							<li v-for="child in item.detailData">
								{{child}}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="big_page_number"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'fujian1',
	components: { },
    props: [],
    data() {
        return {
        	data1:[
        		{ title: '9月 10月 11月 12月', detailData: ['自我认知测评与解读'] },
        		{ title: '1月', detailData: ['学业分析','自我认知测评与解读','专业了解与定位','背景提升建议','学年评估升学规划定位报告'] },
        		{ title: '2月', detailData: ['专业了解与定位','课外科创活动参与','背景提升建议'] },
        		{ title: '3月 4月', detailData: ['专业了解与定位','背景提升建议'] },
        		{ title: '5月', detailData: ['院校、升学路径定位','选科/分科决策','背景提升建议'] },
        		{ title: '6月', detailData: ['学业分析','选科/分科决策','背景提升建议','学年评估升学规划定位报告'] },
        		{ title: '7月 8月', detailData: ['选科/分科决策','课外科创活动参与','背景提升建议'] }
        	],
        	data2:[
        		{ title: '9月', detailData: ['选科/分科决策','背景提升建议'] },
        		{ title: '10月', detailData: ['背景提升建议'] },
        		{ title: '11月 12月', detailData: ['背景提升建议','综评初审'] },
        		{ title: '1月', detailData: ['学业分析','背景提升建议','综评初审','学年评估升学规划定位报告'] },
        		{ title: '2月', detailData: ['课外科创活动参与','背景提升建议','综评初审'] },
        		{ title: '3月 4月 5月', detailData: ['背景提升建议','综评初审'] },
        		{ title: '6月', detailData: ['学业分析','背景提升建议','综评初审','学年评估升学规划定位报告'] },
        		{ title: '7月 8月', detailData: ['课外科创活动参与','背景提升建议','综评初审'] }
        	],
        	data3:[
        		{ title: '9月 10月 11月 12月', detailData: ['背景提升建议','综评初审'] },
        		{ title: '1月', detailData: ['学业分析','背景提升建议','综评初审','学年评估升学规划定位报告'] },
        		{ title: '2月', detailData: ['课外科创活动参与','综评初审'] },
        		{ title: '3月 4月', detailData: ['综评初审'] },
        		{ title: '5月 6月', detailData: ['综评面试'] }
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
</style>