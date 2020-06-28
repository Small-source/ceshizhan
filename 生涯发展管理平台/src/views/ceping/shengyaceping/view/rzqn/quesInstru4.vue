<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/4" class="button">Part A</router-link>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">表象能力</h4>
            <h6 class="en_tit">Presentational</h6>
          </div>
          <div class="desc">
            <p>
              表象就是当事物不在眼前时，人们头脑中出现的关于事物的形象。例如在头脑中想象出某个人的长相。
            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_r4.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/rzqn/index-bg.jpg" alt="">-->
    <!--<img class="block-img rzqn-block-img" src="../../assets/rzqn/i12.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<router-link to="/rzqn/guide/4">-->
        <!--<img src="../../assets/rzqn/partA-1.png" alt="">-->
      <!--</router-link>-->
    <!--</div>-->

    <!--<div class="xgtz-intro rzqn-intro">-->
      <!--<img src="../../assets/rzqn/intro-bg.png" alt="">-->
      <!--<div class="i-desc">-->
        <!--<p>-->
          <!--表象就是当事物不在眼前时，人们头脑中出现的关于事物的形象。例如在头脑中想象出某个人的长相。-->
        <!--</p>-->
      <!--</div>-->
      <!--<div class="i-tip rzqn-tip">-->
        <!--提示：点击“Part A”进入测试！-->
      <!--</div>-->
    <!--</div>-->


  <!--</div>-->
</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {}
    },
    mounted() {
      $('.test_menu .item').eq(3).addClass('item_2');
    },
    updated() {

    },
    components: {rzqnNav},
  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
