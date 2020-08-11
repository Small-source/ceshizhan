<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <div class="test_menu clearfix">
        <a href="javascript:;" class="item item_3">
          <em class="num">01</em>
          <h6 class="tit">学科成绩分析</h6>
          <p class="font">ACADEMIC RESULTS</p>
        </a>
      </div>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">选科测评完成!</p>
          <div class="btngroup">
            <!--<router-link class="btn btn_goon" to="/shengyaceping">点击退出</router-link>-->
            <router-link class="btn btn_goon" to="/shengyaceping/evlua/classify/14">点击继续</router-link>
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

    },
    updated() {

    },
    components: {xqqxNav},
  }
</script>


