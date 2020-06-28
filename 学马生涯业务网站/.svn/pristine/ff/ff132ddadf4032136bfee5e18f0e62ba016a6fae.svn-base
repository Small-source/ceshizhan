<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <xqqxNav></xqqxNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">{{text}}</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" :to="url">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import xqqxNav from '../../../../../components/xqqx.vue';
  export default {
    data() {
      return {
          url:'/shengyaceping/xqqx/guide/2',
          text:'测试完成!'
      }
    },
    mounted() {
      $('.test_menu .item').eq(0).addClass('item_3');
        if(window.sessionStorage.tuance=='3'){
            if(window.sessionStorage.testType360=='2'){
                this.url= '/zhinengxuanke/mubiaozhuanye'
            }else{
                this.url='/home'
            }
            this.text='生涯测评完成!'
        }
    },
    updated() {

    },
    components: {xqqxNav},
  }
</script>


