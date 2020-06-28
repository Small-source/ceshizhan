<template>
	<div class="page_shadow page_index">
		<div class="page pdf-page" v-if="selfData">
			<div class="header">
				<span>Part1</span>基本信息
			</div>
			<h6 class="small_title">学生情况</h6>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					学生
				</div>
				<ul class="student_main main">
					<li>姓名：{{selfData.n}}</li>
					<li>学校：{{selfData.sn}}</li>
					<li>高考年份：{{selfData.by}} </li>
					<li>手机号码：{{selfData.p}}</li>
					<li>邮箱：{{selfData.e}}</li>
					<li class="hobby">爱好：{{selfData.h}}</li>
				</ul>
			</div>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					家长
				</div>
				<ul class="parents_main main">
					<li>
						<p>父亲</p>
						<p>姓名：{{selfData.fn}}</p>
						<p>手机号码：{{selfData.fp}}</p>
					</li>
					<li>
						<p>母亲</p>
						<p>姓名：{{selfData.mn}}</p>
						<p>手机号码：{{selfData.mp}}</p>
					</li>
				</ul>
			</div>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					高中成绩
				</div>
				<ul class="main grade_main">
					<li v-for="(item,index) in score.data" :key="index">
						<p>考试名称：{{item.name}}</p>
						<p>考试时间：{{item.date}}</p>
						<p>总成绩：{{item.score}}</p>
						<p>年级排名：{{item.rank}}</p>
					</li>
				</ul>
			</div>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					获得奖项
				</div>
				<ul class="main award_main">
					<li v-for="(item, index) in award.data">
						<p>具体奖项：{{item.name}}</p>
						<p>
							<template v-if="item.type==1">大赛：{{item.activity}}</template>
							<template></template>
						</p>
						<p>奖项等级：{{item.degree}}</p>
					</li>
				</ul>
			</div>
			<div class="main_box">
				<div class="main_title">
					<span></span>
					目标大学和专业
				</div>
				<div class="major_box">
					<div class="left">目标大学：</div>
					<div class="right">
						<ul>
							<li v-for="(item,index) in uData" :key="index">{{item.name}}</li>
						</ul>
					</div>
				</div>
				<div class="major_box">
					<div class="left">目标专业：</div>
					<div class="right">
						<ul>
							<li v-for="(item,index) in sData" :key="index">{{item.name}}</li>
						</ul>
					</div>
				</div>
				<div class="major_box">
					<div class="left">生涯测评推荐专业：</div>
					<div class="right">
						<ul>
							<li v-for="(item,index) in career" :key="index">{{item.name}}</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="big_page_number"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'reportmessage',
	components: { },
    props: ['selfData','score','award','uData','sData','career'],
    data() {
        return {
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