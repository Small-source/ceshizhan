<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <xgtxNav></xgtxNav>
      <div class="test_detail test_2">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">第一步测试完成！</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" to="/shengyaceping/xgtx/guide/2">点击继续</router-link>
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
        <!--<router-link to="/xgtx/guide/2">点击继续</router-link>-->
      <!--</div>-->
    <!--</div>-->

  <!--</div>-->
</template>

<script>
  import xgtxNav from '../../../../../components/xgtx.vue';
  export default{
    data(){
      return {}
    },
    mounted(){
      $('.test_menu .item').eq(0).addClass('item_2');
    },
    updated(){

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
