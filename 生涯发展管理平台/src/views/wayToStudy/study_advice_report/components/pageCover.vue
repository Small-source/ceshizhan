<template>
	<div class="page_shadow">
		<div class="page_cover pdf-page">
			<div class="header">
				<h3>升学建议方案</h3>
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
