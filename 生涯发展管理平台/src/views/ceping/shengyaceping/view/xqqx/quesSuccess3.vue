<template>
  <div class="pc-page">
    <div class="test_main test_main_3">
      <xqqxNav></xqqxNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">测试完成！</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" to="/shengyaceping/evlua/classify/23">点击继续</router-link>
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
      return {}
    },
    mounted() {
      $('.test_menu .item').eq(0).addClass('item_3');
    },
    updated() {

    },
    components: {xqqxNav},
  }
</script>

