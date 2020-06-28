<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/121" class="button">Part A</router-link>
        <a href="javascript:;" class="button no">Part B</a>
        <a href="javascript:;" class="button no">Part C</a>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">美术能力</h4>
            <h6 class="en_tit">Arts capacity</h6>
          </div>
          <div class="desc">
            <p>
              能够运用色彩、线条等表达出自己所想所思；对美有一定的鉴赏、辨析能力。美术能力强的个体适合从事设计类工作，甚至成为艺术家。
            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_r12.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/rzqn/index-bg.jpg" alt="">-->
    <!--<img class="block-img rzqn-block-img" src="../../assets/rzqn/i4.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<router-link to="/rzqn/guide/121">-->
        <!--<img src="../../assets/rzqn/partA-1.png" alt="">-->
      <!--</router-link>-->
      <!--<img src="../../assets/rzqn/partB-1.png" alt="">-->
      <!--<img src="../../assets/rzqn/partC-1.png" alt="">-->
    <!--</div>-->

    <!--<div class="xgtz-intro rzqn-intro">-->
      <!--<img src="../../assets/rzqn/intro-bg.png" alt="">-->
      <!--<div class="i-desc">-->
        <!--<p>-->
          <!--能够运用色彩、线条等表达出自己所想所思；对美有一定的鉴赏、辨析能力。美术能力强的个体适合从事设计类工作，甚至成为艺术家。-->
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
      $('.test_menu .item').eq(11).addClass('item_2');
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
