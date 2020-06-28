<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>Part3</span>升学建议
				</div>
				<div class="jianyi_box">
					<h6 class="small_title">建议升学途径方案一：</h6>
					<div class="jianyi_content">
						<p>【由咨询师填写】 a.报名条件    b.报名流程(时间节点)    c.报名准备    d.综评特点(若学校有综合评价招生)</p>
					</div>
				</div>
				<div class="jianyi_box">
					<h6 class="small_title">建议升学途径方案二：</h6>
					<div class="jianyi_content">
						<p>【由咨询师填写】 a.报名条件    b.报名流程(时间节点)    c.报名准备    d.综评特点(若学校有综合评价招生)</p>
					</div>
				</div>
				<div class="big_page_number"></div>
			</div>
		</div>
		<div class="page_shadow">
			<div class="page pdf-page">
				<div class="header">
					<!-- <span>Part3</span>升学建议 -->
				</div>
				<div class="jianyi_box">
					<h6 class="small_title">建议升学途径方案三：</h6>
					<div class="jianyi_content">
						<p>【由咨询师填写】 a.报名条件    b.报名流程(时间节点)    c.报名准备    d.综评特点(若学校有综合评价招生)</p>
					</div>
				</div>
				<div class="big_page_number"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageShengxuejianyi',
	components: { },
    props: [],
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
	.header {
		// margin-bottom: 20px;
	}
	.jianyi_content {
		height: 100%;
		border: 1px solid #dedede;
		height: 470px;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 20px;
	}
	.jianyi_box {
		margin-bottom: 40px;
	}
	.small_title {
		margin-bottom: 20px;
	}
</style>