<!-- part2学习动力 -->
<template>
	<!-- 认知，情感，行为倾向，学习动力... 等 -->
	<div class="main_box">
		<P class="main_title"><span class="block"></span>{{normObj.name}}</P>
		<div class="main_norm_box">
			<div class="rule_box rule_box_part2">
				<img src="~@/assets/report_imgs/norm_rule5.png" alt="">
			</div>
			<div class="norm_box">
				<div class="norm_block norm_block_part2" :style="{left: normObj.lnorm/5*670 + 'px', width: (normObj.rnorm-normObj.lnorm)/5*670 + 'px' }" :title="normObj.lnorm + '~' +normObj.rnorm"></div>
				<div class="norm_score score_part2_2" :style="{left: normObj.score/5*670-30 + 'px'}">{{normObj.score | toFixed(2)}}</div>
			</div>
		</div>
		<p class="main_detail">你在{{normObj.name}}的水平值为<span class="c_orange">{{normObj.score | toFixed(2)}}</span>，在同龄人当中
			<span class="c_orange" v-if="normObj.score <= 1">很差</span>
			<span class="c_orange" v-else-if="normObj.score <= 2">较差</span>
			<span class="c_orange" v-else-if="normObj.score <= 3">中等</span>
			<span class="c_orange" v-else-if="normObj.score <= 4">较好</span>
			<span class="c_orange" v-else-if="normObj.score <= 5">很好</span>。
		</p>
		<p class="main_remark"><span class="remark">备注</span>本测评水平值范围0~5，{{normObj.name}}平均水平值为<span class="c_green">{{normObj.lnorm}}~{{normObj.rnorm}}</span>。</p>
		<P class="main_directions">{{comment}}</P>
	</div>
</template>
<script>
export default {
	name: 'page_part2_main',
	components: {  },
    props: {
    	normObj: {
	      type: Object,//norm数组的其中一项
	      // required: true
	    },
	    comment: {
	   		type: String,//comment的类型解读
	      	// required: true
	    }
    },
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

    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
</style>
