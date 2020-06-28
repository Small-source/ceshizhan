<template>
	<div class="page_shadow">
		<div class="page_cover pdf-page">
			<div class="header">
				<h3>成长档案</h3>
			</div>
			<div class="main">
				<p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{name}}</p>
				<p>报告编号：{{reportNum}}</p>                
				<p>报告时间：{{updatedAt}}</p>
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
		height: 1230px;
		padding-top: 70px;
		background: url(/imgs/growthFile/reportCover.png);
		background-size: 900px 1300px;
		.header {
			padding-top: 300px;
			margin-bottom: 20px;
			h3 {
				line-height: 70px;
				font-size: 56px;
				padding-left: 220px;
				color: #fff;
				margin-bottom: 10px;
			}
			.detail {
				line-height: 30px;
				text-align: center;
				font-size: 24px;
				color: #fff;
			}
		}
		.main {
			height: 246px;
			width: 440px;
			margin: 0 auto;
			p {
				line-height: 60px;
				font-size: 20px;
				font-weight: 600;
				color: #000;
				color: #fff;
			}
		}
		.bottom {
			padding-top: 50px;
			color: #fff;
			p {
				line-height: 30px;
				text-align: center;
				font-size: 16px;
				color: #fff;
			}
		}
	}
</style>
