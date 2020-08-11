<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <rzqnNav></rzqnNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">Part A测试完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="testType=='type1'" to="/shengyaceping/evlua/classify/12">点击继续</router-link>
            <router-link class="btn btn_goon" v-if="testType=='type2'" to="/shengyaceping/evlua/classify/22">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<img src="../../assets/rzqn/parta1.png">-->
    <!--</div>-->

    <!--<div class="success-tip-wrapper">-->
      <!--<img src="../../assets/success-tip.png" alt="">-->
      <!--<div class="success-tip">-->
        <!--Part A测试完成!-->
      <!--</div>-->
      <!--<div class="success-router">-->
        <!--<router-link v-if="testType=='type1'" to="/evlua/classify/12">点击继续</router-link>-->
        <!--<router-link v-if="testType=='type2'" to="/evlua/classify/22">点击继续</router-link>-->
      <!--</div>-->
    <!--</div>-->

  <!--</div>-->
</template>


<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {
        testType: ''
      }
    },
    mounted() {
      $('.test_menu .item').eq(9).addClass('item_2');
      this.testType = sessionStorage.getItem('testType');
      console.log(this.testType);
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
