<template>
	<div>
		<div class="page_content pageConsultation"  style="height: 1200px">
			<h5 class="header">
				<span>Part5</span>状态咨询
			</h5>
			<h6 class="small_title">复盘结果-学习状态趋势</h6>
			<div id="echartConsultation1" style="width: 800px;height: 300px;margin-bottom: 20px">	
			</div>
			<h6 class="small_title">状态咨询记录统计</h6>
			<table v-if="consultRecord">
				<tr>
					<th>学业规划</th>
					<th>日期</th>
					<th>主题</th>
					<th>主题</th>
					<th>主题</th>
				</tr>
				<tr  v-for="(item,index) in consultRecord" :key="index" v-if="index <18">
					<td>{{item.n}}</td>
					<td>{{item.d}}</td>
					<td>{{item.t.split(',')[0]}}</td>
					<td>{{item.t.split(',')[1]}}</td>
					<td>{{item.t.split(',')[2]}}</td>
				</tr>
			</table>
		</div>
		<div class="page_content pageConsultation" v-for="(item,index) in consultRecord" :key="index" v-if="consultRecord">
			<h6 class="small_title" v-if="index == 0">状态咨询记录详情</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p class="title">第{{item.n}}次学业规划</p>
					<p class="date">日期：{{item.d}}</p>
					<p><span>主题训练：</span>{{item.t}}</p>
				</div>
				<div class="detail_box">
					<p class="title">学习过程中的感悟和体会：</p>
					<p class="detail" v-if="item.p">
						{{item.p}}
					</p>
					<div class="tips" v-else>
						~~暂无内容~~
					</div>
				</div>
				<div class="detail_box">
					<p class="title">学生反馈：</p>
					<p class="detail" v-if="item.f">
						{{item.f}}
					</p>
					<div class="tips" v-else>
						~~暂无内容~~
					</div>
				</div>
				<div class="detail_box">
					<p class="title">教师评语：</p>
					<p class="detail" v-if="item.c">
						{{item.c}}
					</p>
					<div class="tips" v-else>
						~~暂无内容~~
					</div>
				</div>
				<div class="img_box">
					<img :src="item.img1" alt="" v-if="item.img1">
					<img :src="item.img2" alt="" v-if="item.img2">
					<img :src="item.img3" alt="" v-if="item.img3">
				</div>
			</div>	
		</div>
	</div>	
</template>
<script>
export default {
	name: 'pageConsultation',
	components: { },
    props: ['status'],
    data() {
        return {
        }
    },
    computed: {
    	consultRecord() {
    		if(this.status) {
    			return this.status.consultRecord;
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
	.pageConsultation {
		padding-bottom: 40px;
		h5.header {
			margin-bottom: 29px;
		}
		h6.small_title {
			margin-bottom: 10px;
		}
		table {
			tr {
				line-height: 40px;
				th {
					border: 2px solid #fff;
					width: 20%;
					text-align: center;
					color: #fff;
					background-color: #80BF61;
					line-height: 40px
				}
				td {
					border: 1px solid #fff;
					text-align: center;
					color: #333;
					background-color: #F9F9FA;
					font-size: 14px;
					line-height: 36px;
				}
			}
		}

		.main_box {
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
				// .block {
				// 	width: 26px;
				// 	height: 15px;
				// 	margin-right: 10px;
				// }

			}
			.detail_box {
				padding-left: 36px;
				margin-bottom: 30px;
				.title {
					font-size: 18px;
					font-weight: bold;
					margin-bottom:10px;
				}
				.detail {
					line-height: 1.5em;
				}
			}
			.img_box {
				display: flex;
				padding-left: 36px;
				img{
					display: block;
					width: 240px;
					height: 150px;
					margin-right: 20px;
					&:last-child {
						margin-right: 0px;
					}
				}
			}
		}
	}
</style>
