<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips" v-if="type!='test'">Part D测试完成!</p>
          <p class="tips" v-if="type=='test'">Part D练习完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="type!='test'" to="/shengyaceping/rzqn/instru/13">点击继续</router-link>
            <router-link v-if="type=='test'" to="/shengyaceping/rzqn/144?type=test" class="btn btn_jx">继续练习</router-link>
            <router-link v-if="type=='test'" to="/shengyaceping/rzqn/guide/144" class="btn btn_start">完成练习</router-link>
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
        type: this.$route.query.type
      }
    },
    mounted() {
      $('.test_menu .item').eq(8).addClass('item_2');
      if (this.type == 'test') {
        sessionStorage.setItem('zhuyi4', 1);
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
