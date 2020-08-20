<template>

  <div class="pc-page">
    <div class="test_main test_main_4">
      <Nav></Nav>
      <div class="test_detail test_2">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">本次测试已完成</p>
          <div class="btngroup">
            <router-link  to="/learningAbility" class="btn btn_goon">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import Nav from '../../../components/mentalHealth.vue';
  export default{
    data(){
      return {
        quitType: '',
        testType360: ''
      }
    },
    mounted(){
      $('.test_menu .item').addClass('item_4');
    },
    updated(){

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
