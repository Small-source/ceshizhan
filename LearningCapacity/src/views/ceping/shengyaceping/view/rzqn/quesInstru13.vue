<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/13" class="button">Part A</router-link>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">隐藏图形测试</h4>
            <h6 class="en_tit">Hidden graphics</h6>
          </div>
          <div class="desc">
            <p>
              本测验是测量你在复杂图形中发现某种简单图形的能力。根据这个测验判断你在进行信息加工时的方式属于场独立型或场依存性。
            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/10.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/rzqn/index-bg.jpg" alt="">-->
    <!--<img class="block-img rzqn-block-img" src="../../assets/rzqn/i4.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<router-link to="/rzqn/guide/13">-->
        <!--<img src="../../assets/rzqn/partA-1.png" alt="">-->
      <!--</router-link>-->
    <!--</div>-->

    <!--<div class="xgtz-intro rzqn-intro">-->
      <!--<img src="../../assets/rzqn/intro-bg.png" alt="">-->
      <!--<div class="i-desc">-->
        <!--<p>-->
          <!--本测验是测量你在复杂图形中发现某种简单图形的能力。根据这个测验判断你在进行信息加工时的方式属于场独立型或场依存性。-->
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
      $('.test_menu .item').eq(9).addClass('item_2');
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
