<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <xljkNav></xljkNav>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">心理健康测试</h4>
            <h6 class="en_tit">Mental health test</h6>
          </div>
          <div class="desc">
            <p>心理健康的基本含义是指心理的各个方面及活动过程处于一种良好或正常的状态。既能过平平淡淡的日子，也能经受各种事件的发生。心理健康突出在社交、生产、生活上能与其他人保持较好的沟通或配合。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/shengyaceping/xljk/guide" class="btn btn_start_4">开始测评</router-link>
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_12.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import xljkNav from '../../../../../components/xljk.vue';

  export default {
    data() {
      return {}
    },
    components: {xljkNav}
  }
</script>

<style>

</style>
