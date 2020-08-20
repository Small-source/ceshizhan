<template>
  <div class="pc-page">
    <div class="test_main test_main_3">
      <Nav></Nav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">测试完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="type!='test'" to="/learningAbility">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from '../../../components/learningEffectiveness.vue';
  export default {
    data() {
      return {
        testType: ''
      }
    },
    mounted() {
      $('.test_menu .item').eq(2).addClass('item_2');
      this.testType = sessionStorage.getItem('testType');
    },
    updated() {

    },
    components: {Nav},
  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
