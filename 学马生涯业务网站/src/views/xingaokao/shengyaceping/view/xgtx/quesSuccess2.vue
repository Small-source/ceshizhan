<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <xgtxNav></xgtxNav>
      <div class="test_detail test_2">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">{{txt}}</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" :to="url">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
  <!--<xgtxNav></xgtxNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/xgtx/part.png">-->
  <!--</div>-->
  <!--<div class="success-tip-wrapper">-->
  <!--<img src="../../assets/success-tip.png" alt="">-->
  <!--<div class="success-tip">-->
  <!--Part A测试完成!-->
  <!--</div>-->
  <!--<div class="success-router">-->
  <!--<router-link to="/evlua/classify/13">点击继续</router-link>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>
<script>
  import xgtxNav from '../../../../../components/xgtx.vue';
  export default {
    data() {
      return {
          txt:'第二步测试完成!',
          url:"/shengyaceping/evlua/classify/13"
      }
    },
    mounted() {
      $('.test_menu .item').eq(1).addClass('item_2');
        if(window.sessionStorage.tuance=='3'){
            this.txt= '人格特性测试完成';
            this.url='/shengyaceping/xqqx';
        }
    },
    updated() {

    },
    components: {xgtxNav},
  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
