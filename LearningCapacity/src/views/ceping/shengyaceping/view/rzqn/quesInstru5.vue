<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/5" class="button">Part A</router-link>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">思维转换能力</h4>
            <h6 class="en_tit">Thinking translating</h6>
          </div>
          <div class="desc">
            <p>
              思维转换能力是指语言信息和图像信息之间的转换/传递/协调的能力。通常思维转换能力很好，逻辑思维能力强。能够同时完成两项以上熟练的工作。例如：语言信息与图像信息之间的转换与协调。
            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/05.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/rzqn/index-bg.jpg" alt="">-->
  <!--<img class="block-img rzqn-block-img" src="../../assets/rzqn/i11.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<router-link to="/rzqn/guide/5">-->
  <!--<img src="../../assets/rzqn/partA-1.png" alt="">-->
  <!--</router-link>-->
  <!--</div>-->

  <!--<div class="xgtz-intro rzqn-intro">-->
  <!--<img src="../../assets/rzqn/intro-bg.png" alt="">-->
  <!--<div class="i-desc">-->
  <!--<p>-->
  <!--思维转换能力是指语言信息和图像信息之间的转换/传递/协调的能力。通常思维转换能力很好，逻辑思维能力强。能够同时完成两项以上熟练的工作。例如：语言信息与图像信息之间的转换与协调。-->
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
      $('.test_menu .item').eq(4).addClass('item_2');
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
