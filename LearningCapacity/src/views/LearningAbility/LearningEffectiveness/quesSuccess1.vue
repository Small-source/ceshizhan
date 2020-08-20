<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
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
</template>
<script>
  import Nav from '../../../components/learningEffectiveness.vue';
  export default {
    data() {
      return {
          txt:'测试完成!',
          url:"/learningAbility/LearningEffectiveness/guide/2"
      }
    },
    mounted() {
      $('.test_menu .item').eq(0).addClass('item_2');
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
