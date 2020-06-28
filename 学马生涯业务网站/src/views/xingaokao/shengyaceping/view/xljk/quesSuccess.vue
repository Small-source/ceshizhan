<template>

  <div class="pc-page">
    <div class="test_main test_main_4">
      <xljkNav></xljkNav>
      <div class="test_detail test_2">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">生涯测评完成！</p>
          <div class="btngroup">
            <!--<a href="#" class="btn btn_goon">点击继续</a>-->

            <!--<router-link v-if="testType360!=2" class="btn btn_goon" to="/shengyaceping">点击退出</router-link>-->

            <router-link v-if="testType360==2" class="btn btn_goon" to="/zhinengxuanke/mubiaozhuanye">点击继续</router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import xljkNav from '../../../../../components/xljk.vue';
  export default{
    data(){
      return {
        quitType: '',
        testType360: ''
      }
    },
    mounted(){
      $('.test_menu .item').addClass('item_4');
      this.quitType = sessionStorage.getItem('quitType');
      this.testType360 = sessionStorage.getItem('testType360');
    },
    updated(){

    },
    components: {xljkNav},
  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
