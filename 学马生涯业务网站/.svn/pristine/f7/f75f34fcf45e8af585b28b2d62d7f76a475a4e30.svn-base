<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">Part C测试完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" :to="url">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {
          url:'/shengyaceping/rzqn/instru/13'
      }
    },
    mounted() {
      $('.test_menu .item').eq(11).addClass('item_2');
    },
    updated() {

    },
    components: {rzqnNav},
    created(){
        if(window.sessionStorage.tuance=='3'){
            this.url='/shengyaceping/evlua/classify/12'
        }
    }
  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
