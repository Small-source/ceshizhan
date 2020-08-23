<!-- part1学习潜力 -->
<template>
	<!-- 信息加工能力... 等 -->
	<div class="main_box">
		<P class="main_title"><span class="block"></span>{{normObj.name}}</P>
		<div class="main_norm_box">
			<div class="rule_box">
				<img src="~@/assets/report_imgs/norm_rule.png" alt="">
			</div>
			<div class="norm_box">
				<div class="norm_block" :style="{left: normObj.lnorm/200*670 + 'px', width: (normObj.rnorm-normObj.lnorm)/200*670 + 'px' }" :title="normObj.lnorm + '~' +normObj.rnorm"></div>
				<div class="norm_score score_1" v-if="normObj.score/200 < 0.1" :style="{left: normObj.score/200*670-30 + 'px'}">{{normObj.score}}</div>
				<div class="norm_score score_2" v-else-if="normObj.score/200 < 0.25" :style="{left: normObj.score/200*670-30 + 'px'}">{{normObj.score}}</div>
				<div class="norm_score score_3" v-else-if="normObj.score/200 < 0.75" :style="{left: normObj.score/200*670-30 + 'px'}">{{normObj.score}}</div>
				<div class="norm_score score_4" v-else-if="normObj.score/200 < 0.9" :style="{left: normObj.score/200*670-30 + 'px'}">{{normObj.score}}</div>
				<div class="norm_score score_5" v-else="0.9<= normObj.score/200" :style="{left: normObj.score/200*670-30 + 'px'}">{{normObj.score}}</div>
			</div>
		</div>
		<p class="main_detail">你在{{normObj.name}}的潜能水平值为<span class="c_orange">{{normObj.score | toFixed(2)}}</span>，你超过<span class="c_red">{{normObj.percent * 100 | toFixed(2)}}%</span>的同龄人。</p>
		<p class="main_remark"><span class="remark">备注</span>本测评潜能水平值范围0~200，工作记忆能力平均潜能水平值<span class="c_green">{{normObj.lnorm}}~{{normObj.rnorm}}</span>。</p>
		<P class="main_directions">{{comment}}</P>
	</div>
</template>
<script>
export default {
	name: 'page_part1_main',
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
