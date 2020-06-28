<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <xqqxNav></xqqxNav>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">学科兴趣</h4>
            <!--<h4 class="cn_tit">兴趣倾向</h4>-->
            <h6 class="en_tit">Interest test</h6>
            <!--<h6 class="en_tit">Interest tendency</h6>-->
          </div>
          <div class="desc">
            <!--<p>兴趣是个人对其环境中的人、事、物所产生的喜爱程度，是个人力求认识、掌握某事物，并经常参与该种活动的心理倾向。当个人对某事物有兴趣时，会对它产生特别的注意力。兴趣是人们活动的重要动力之一，是活动成功的重要条件。</p>-->
            <p>兴趣是一个人行动的内在动力之一，在科目选择上，对各个科目的兴趣程度是很重要的参考因素。本部分通过问卷形式对你的学科态度进行详细了解，从而形成直观的学科兴趣对比图，提供精准的学科选择方案。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/shengyaceping/xqqx/guide/3" class="btn btn_start_4">开始测评</router-link>
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_10.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index">-->
  <!--<img class="block-img" src="../../assets/xqqx/index-bg.png" alt="">-->
  <!--<xqqxNav></xqqxNav>-->
  <!--<div class="xgtz-intro">-->
  <!--<img src="../../assets/xqqx/intro-bg.png" alt="">-->
  <!--<div class="i-title"></div>-->
  <!--<div class="i-desc">-->
  <!--兴趣是个人对其环境中的人、事、物所产生的喜爱程度，是个人力求认识、掌握某事物，并经常参与该种活动的心理倾向。当个人对某事物有兴趣时，会对它产生特别的注意力。兴趣是人们活动的重要动力之一，是活动成功的重要条件。-->
  <!--</div>-->
  <!--<div class="i-tip xqqx-tip">-->
  <!--&lt;!&ndash;提示：点击“开始测试”进入测试！&ndash;&gt;-->
  <!--<router-link v-if="testType=='type1'" class="" to="/xqqx/guide/1"><img src="../../assets/btn/chengji.png"></router-link>-->
  <!--<router-link v-if="testType=='type2'||testType=='type3'" class="" to="/xqqx/guide/3"><img src="../../assets/btn/chengji.png"></router-link>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash;<router-link v-if="testType=='type1'" class="start-ce" to="/xqqx/guide/1"><img src="../../assets/begin.png"></router-link>&ndash;&gt;-->
  <!--&lt;!&ndash;<router-link v-if="testType!='type1'" class="start-ce" to="/xqqx/guide/3"><img src="../../assets/begin.png"></router-link>&ndash;&gt;-->
  <!--</div>-->
</template>

<script>
  import xqqxNav from '../../../../../components/xqqx.vue';

  export default {
    data() {
      return {
        testType: ''
      }
    },
    mounted() {
      this.testType = sessionStorage.getItem('testType');
    },
    components: {xqqxNav}
  }
</script>

<style>

</style>
