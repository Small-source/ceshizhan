<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips" v-if="type!='test'">Part A测试完成!</p>
          <p class="tips" v-if="type=='test'">Part A练习完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="type!='test'" to="/shengyaceping/rzqn/instru/2">点击继续</router-link>
            <router-link v-if="type=='test'" to="/shengyaceping/rzqn/1?type=test" class="btn btn_jx">继续练习</router-link>
            <router-link v-if="type=='test'" to="/shengyaceping/rzqn/guide/1" class="btn btn_start">完成练习</router-link>
          </div>
        </div>
      </div>
      <div class="test_foot test_copy">
        ©版权声明：本作品著作权以及版权属于育铭天下，并受法律保护。
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
        <!--<router-link v-if="type!='test'" to="/rzqn/instru/2">点击继续</router-link>-->
        <!--<router-link v-if="type=='test'" to="/rzqn/guide/1" style="margin-right:140px">点击返回</router-link>-->
        <!--<router-link v-if="type=='test'" to="/rzqn/1?type=test">继续练习</router-link>-->
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
      $('.test_menu .item').eq(0).addClass('item_2');
      console.log(this.$route.query.type);
      if (this.type == 'test') {
        sessionStorage.setItem('infoTest', 1);
      }
    },
    updated() {

    },
    components: {rzqnNav},
  }
</script>

