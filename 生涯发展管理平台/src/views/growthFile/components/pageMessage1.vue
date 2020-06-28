<template>
	<div class="page_content page_message" style="height: 1200px;">
		<h5 class="header">
			<span>Part1</span>基本信息
		</h5>
		<h6 class="small_title">学生信息</h6>
		<div class="content" v-if="studentInfo">
			<p class="left">学生信息</p>
			<div class="right">
				<ul class="student_main">
					<li>姓名：{{data1.n}}</li>
					<li>性别：{{data1.s}}</li>
					<li>民族：{{data2.n}} </li>
					<li>生日：{{data2.b}}</li>
				</ul>
				<ul class="student_main">
					<li>学校：{{data1.sn}}</li>
					<li>所在班级：{{data1.sc}}</li>
					<li>担任职务：{{data2.p}} </li>
					<li>政治面貌：{{data2.ps}}</li>
					<li>学生类型：{{data2.t}}</li>
					<li>外语语种：{{data2.f}}</li>
					<li>高考年份：{{data1.b}}</li>
					<li>是否应届：{{data2.g==1? '是':'否'}}</li>
					<li>选科情况：{{data2.c}}</li>
				</ul>
				<ul class="student_main">
					<li>手机号码：{{data1.u}}</li>
					<li>QQ：{{data2.q}}</li>
				</ul>
				<ul class="student_main">
					<li>左眼视力：{{data2.le}}</li>
					<li>右眼视力：{{data2.re}}</li>
					<li>身高/cm：{{data2.h}}</li>
					<li>体重：{{data2.w}}</li>
					<li>肺活量/ml:{{data2.vc}}</li>
				</ul>
				<ul class="lis_main">
					<li>兴趣爱好：<p>{{data2.ho}}</p></li>
					<li>向往职业：<p>{{data2.o}}</p></li>
					<li>意向专家：<p>{{data2.s}}</p></li>
				</ul>
			</div>
		</div>
		<div class="content parent_content"  v-if="studentInfo">
			<p class="left">家长信息</p>
			<div class="right">
				<div class="parents_box">
					<p class="title">父亲</p>
					<ul>
						<li>姓名：{{data2.fn}}</li>
						<li>手机号：{{data2.fp}}</li>
					</ul>
				</div>
				<div class="parents_box">
					<p class="title">母亲</p>
					<ul>
						<li>姓名：{{data2.mn}}</li>
						<li>手机号：{{data2.mp}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'growthMessage1',
	components: { },
    props: ['studentInfo'],
    data() {
        return {

        }
    },
    computed: {
    	data1() {
    		if(this.studentInfo) {
    			return this.studentInfo.s;
    		}
    		
    	},
    	data2() {
    		if(this.studentInfo) {
    			return this.studentInfo.i;
    		}
    	}
    },
    methods: {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_message {
		.content {
			margin-bottom: 50px;
			display: flex;
			.left {
				width: 60px;
				font-size: 20px;
				color: #fff;
				-webkit-writing-mode: vertical-rl;
                writing-mode: vertical-rl;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #7AC34F;
                font-weight: bold;
                // line-height: 1.5em;
                letter-spacing: 10px;
			}
			.right {
				padding: 30px 40px;
				padding-right: 20px;
				flex: 1;
				border: 1px solid #D9D9D9;
				border-left: none;
				ul {
					border-bottom: 1px dashed #dedede;
					&:last-child {
						border: none;
					}
					li {
						font-size: 16px;
						margin-bottom: 20px;
					}
				}
				.student_main {
					display: flex;
					flex-wrap: wrap;
					margin-bottom: 40px;
					li {
						width: 33%;
					}
				}
				.lis_main {
					li {
						line-height: 1.5em;
						display: flex;
						p {
							flex: 1;
						}
					}
				}
			}
		}
		.parent_content {
			.left {
				background-color: #A3C066;
			}
			.parents_box {
				margin-bottom: 40px;
				.title {
					margin-bottom: 20px;
				}
				ul {
					display: flex;
					li {
						width: 33%;
						margin-bottom: 0px;
					}
				}
				&:last-child {
					margin-bottom: 0px;
				}
			}
		}
	}
</style>