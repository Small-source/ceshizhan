<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <router-link to="/shengyaceping/rzqn/guide/21" class="button">Part A</router-link>
        <a href="javascript:;" class="button no">Part B</a>
      </div>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">工作记忆能力</h4>
            <h6 class="en_tit">Working memory</h6>
          </div>
          <div class="desc">
            <p>工作记忆是一种对信息进行暂时加工和贮存的能力有限的记忆系统。通常情况下，任何学习任务都会消耗工作记忆资源。工作记忆能力强，则有足够的资源对学习任务进行加工，因而会取得良好的学习效果。
            </p>
          </div>
          <div class="notice">
            提示：点击“Part A”进入测试！
          </div>
        </div>
        <div class="test_test_r">
          <img src="../../../../../assets/test_r21.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {}
    },
    mounted() {
      $('.test_menu .item').eq(1).addClass('item_2');
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
