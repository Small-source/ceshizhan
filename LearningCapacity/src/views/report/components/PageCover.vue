<template>
	<div>
		<div class="page_cover  page_shadow">
			<div class="header">
				<div class="line"></div>
				<h3>学习力测评报告</h3>
			</div>
			<div class="main">
				<p>高一</p>
				<p>1班</p>                
				<p>王辉</p>
			</div>
		</div>
		<div class="page_meaasge  page_shadow">
			<div class="table_box">
				<table class="table">
					<tr class="t_title"><td colspan="2">测评者基本信息</td></tr>
					<tr>
						<td>姓名</td><td></td>
					</tr>
					<tr>
						<td>学号</td><td></td>
					</tr>
					<tr>
						<td>学校</td><td></td>
					</tr>
					<tr>
						<td>年级</td><td></td>
					</tr>
					<tr>
						<td>班级</td><td></td>
					</tr>
				</table>
				<table class="table">
					<tr class="t_title"><td colspan="2">测评完成情况</td></tr>
					<tr>
						<td>测评日期</td><td></td>
					</tr>
					<tr>
						<td>报告编号</td><td></td>
					</tr>
					<tr>
						<td>报告日期</td><td></td>
					</tr>
					<tr>
						<td>信度指数</td><td></td>
					</tr>
				</table>
				<table class="gailan">
					<tr class="t_title">测评完成情况</tr>
					<tr>
						<p>总体而言，你的学习力水平值为：<span>170.63</span>，
						超过了<span>80.22</span>的同龄人</p>
					</tr>
					<tr>
						<p>你的学习潜力水平值为：<span>80.22</span>，超过了<span>70%</span>的同龄人</p>
					</tr>
					<tr>
						<p>你的学习动力水平值为：<span>50.22</span>，超过了<span>70%</span>的同龄人</p>
					</tr>
					<tr>
						<p>你的学习效力水平值为：<span>54.22</span>，超过了<span>70%</span>的同龄人</p>
					</tr>
				</table>
				<table class="gailan">
					<tr class="t_title">专家建议</tr>
					<tr>
						<p>相对而言，你的学习潜力/学习动力/学习效力有待进一步提高（逻辑算法：比学习力出众百分比低的项为有待进一步提高的项）</p>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {  },
    props: ['name', 'reportNum', 'updatedAt'],
    data() {
        return {
        }
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
	.page_cover {
		background: url(/imgs/report_imgs/page_cover.jpg);
		background-size: 900px 1300px;
		padding-top: 545px !important;
		.header {
			margin-bottom: 400px;
			.line {
				width: 85px;
				height: 8px;
				border-radius: 4px;
				background-color: #fff;
			}
			h3 {
				line-height: 150px;
				font-size: 56px;
				color: #fff;
			}
		}
		.main {
			padding-right: 40px;
			display: flex;
			justify-content: flex-end;
			p {
				font-size: 24px;
				padding: 0 25px;
			}
		}

	}
	.page_meaasge {
		.table_box {
			.table {
				text-align: center;
				margin-bottom: 50px;
				.t_title {
					width: 100%;
					background-color: #41CBAA;
					border: 1px solid #C8CED7;
					color: #fff;
					td {
						line-height: 45px;
						font-size: 20px;
					}
				}
				tr {
					td {
						width: 50%;
						line-height: 42px;
						border: 1px solid #C8CED7;
						font-size: 16px;
					}
				}
			}
			.gailan {
				margin-bottom: 50px;
				tr {
					line-height: 80px;
					border: 1px solid #C8CED7;
					padding-left: 20px;
					p {
						padding-left: 20px;
						display: flex;
						line-height: 32px;
						height: 80px;
						align-items: center;
						span {
							font-size: 18px;
							font-weight: bold;
							color: #F87608;
							&:last-child {
								color: #41CBAA;
							}
						}
					}
				}
				.t_title {
					width: 100%;
					background-color: #41CBAA;
					border: 1px solid #C8CED7;
					color: #fff;
					line-height: 45px;
					font-size: 20px;
					text-align: center;
				}

			}
		}
		.detail {
			font-size: 18px;
			text-align: center;
			span {
				font-size: 22px;
				font-weight: bold;
				color: #DF6800;
			}
		}
	}
</style>
