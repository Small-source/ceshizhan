<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/3" class="button">Part A</router-link>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">空间能力</h4>
            <h6 class="en_tit">Spatial</h6>
          </div>
          <div class="desc">
            <p>
              空间能力是指大脑通过观察、触摸以及实践经验得到的一种能思考物体形状、位置的能力。例如我们在听一段语音导航时，大脑中便能呈现相应的图示或路线。
            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_r3.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/rzqn/index-bg.jpg" alt="">-->
    <!--<img class="block-img rzqn-block-img" src="../../assets/rzqn/i13.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<router-link to="/rzqn/guide/3">-->
        <!--<img src="../../assets/rzqn/partA-1.png" alt="">-->
      <!--</router-link>-->
    <!--</div>-->

    <!--<div class="xgtz-intro rzqn-intro">-->
      <!--<img src="../../assets/rzqn/intro-bg.png" alt="">-->
      <!--<div class="i-desc">-->
        <!--<p>-->
          <!--空间能力是指大脑通过观察、触摸以及实践经验得到的一种能思考物体形状、位置的能力。例如我们在听一段语音导航时，大脑中便能呈现相应的图示或路线。-->
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
      $('.test_menu .item').eq(2).addClass('item_2');
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
