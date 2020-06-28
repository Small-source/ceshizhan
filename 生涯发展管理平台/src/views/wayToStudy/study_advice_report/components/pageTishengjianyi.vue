<template>
	<div class="page_shadow page_index">
		<div class="page pdf-page">
			<div class="header">
				<span>Part5</span>学业提升建议
			</div>
			<div class="jianyi_content">
				<p>【由咨询师填写】a.成绩方面    b.学习状态方面    c.计划方面    d.学习方法掌握方面</p>
			</div>
			<div class="big_page_number"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageTishengjianyi',
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
		margin-bottom: 20px;
	}
	.jianyi_content {
		height: 100%;
		border: 1px solid #dedede;
		height: 1100px;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 20px;
	}
</style>