<template>
	<div>
		<div class="page_shadow page_index" v-for="(item, index) in fwData" :key="item.id">
			<div class="page pdf-page">
				<div class="header" v-if="index == 0">
					<span>Part2</span>推荐升学途径
				</div>
				<h6 class="small_title">{{item.title}}</h6>
				<div class="content">	
					<p class="title_detail">{{item.introduction}}</p>
					<div class="condition">
						<div class="title">报考条件</div>
						<p v-for="(childItem, $index) in item.condition" :key="$index">{{childItem}}</p>
					</div>
					<div class="condition">
						<div class="title">推荐原因</div>
						<p>{{item.recommendReason}}<span v-for="(childItem, $index) in item.conditionOption" :key="$index">{{childItem}}</span></p>
					</div>
					<div class="must_know">
						<div class="title">备考须知</div>
						<p v-for="(childItem, $index) in item.notice" :key="$index">{{childItem}}</p>
					</div>
				</div>
				<div class="big_page_number"></div>
			</div>
		</div>
	</div>	
</template>
<script>
export default {
	name: 'pageTishengjianyi',
	components: { },
    props: ['fwData'],
    data() {
        return {
        }
    },
    watch: {
    },
    created() {
    },
    mounted() {

    },
    methods: {
    	goDetail(url) {
            let {href} = this.$router.resolve({
                path: url
            })
            window.open(href, '_blank');
        },
    },
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.header {
		margin-bottom: 20px;
	}

</style>