<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/10" class="button">Part A</router-link>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">组织管理能力</h4>
            <h6 class="en_tit">Organizational management</h6>
          </div>
          <div class="desc">
            <p>
              组织管理能力是指为了有效地实现目标，灵活地运用各种方法，把各种力量合理地组织和有效地协调起来的能力。包括协调关系的能力和善于用人的能力等等。

            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_r10.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/rzqn/index-bg.jpg" alt="">-->
    <!--<img class="block-img rzqn-block-img" src="../../assets/rzqn/i6.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<router-link to="/rzqn/guide/10">-->
        <!--<img src="../../assets/rzqn/partA-1.png" alt="">-->
      <!--</router-link>-->
    <!--</div>-->

    <!--<div class="xgtz-intro rzqn-intro">-->
      <!--<img src="../../assets/rzqn/intro-bg.png" alt="">-->
      <!--<div class="i-desc">-->
        <!--<p>-->
          <!--组织管理能力是指为了有效地实现目标，灵活地运用各种方法，把各种力量合理地组织和有效地协调起来的能力。包括协调关系的能力和善于用人的能力等等。-->
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
