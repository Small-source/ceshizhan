<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips" v-if="type!='test'">Part B测试完成!</p>
          <p class="tips" v-if="type=='test'">Part B练习完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="type!='test'" to="/shengyaceping/rzqn/instru/3?seq=1">点击继续</router-link>
            <router-link v-if="type=='test'" to="/shengyaceping/rzqn/22?type=test" class="btn btn_jx">继续练习</router-link>
            <router-link v-if="type=='test'" to="/shengyaceping/rzqn/guide/22" class="btn btn_start">完成练习</router-link>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<img src="../../assets/rzqn/parta2.png">-->
      <!--<img src="../../assets/rzqn/partb1.png">-->
    <!--</div>-->

    <!--<div class="success-tip-wrapper">-->
      <!--<img src="../../assets/success-tip.png" alt="">-->
      <!--<div class="success-tip">-->
        <!--Part B测试完成!-->
      <!--</div>-->
      <!--<div class="success-router">-->
        <!--<router-link v-if="type!='test'" to="/rzqn/instru/3?seq=1">点击继续</router-link>-->
        <!--<router-link v-if="type=='test'" to="/rzqn/guide/22" style="margin-right:140px">点击返回</router-link>-->
        <!--<router-link v-if="type=='test'" to="/rzqn/22?type=test">继续练习</router-link>-->
      <!--</div>-->
    <!--</div>-->

  <!--</div>-->
</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {
        type: this.$route.query.type
      }
    },
    mounted() {
      $('.test_menu .item').eq(1).addClass('item_2');
      if (this.type == 'test') {
        sessionStorage.setItem('mathTest2', 1);
      }
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
