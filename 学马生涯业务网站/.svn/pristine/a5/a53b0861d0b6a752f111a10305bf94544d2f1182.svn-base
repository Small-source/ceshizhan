<template>
  <div class="pc-page">
    <div class="system_main">
      <div class="titbox">
        <p class="font">测评分为三大部分，包括：一般认知潜能测评，学科兴趣测评和学科成绩分析。请单击学习成绩分析进行测评。</p>
      </div>
      <div class="list">
        <li class="item item_rz item_rz_over">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">认知潜能测评</h5>
          </a>
        </li>
        <li class="item  item_xq item_xq_over">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">兴趣倾向测评</h5>
          </a>
        </li>
        <li class="item item_scale item_cj cur">
          <router-link to="/shengyaceping/xqqx/guide/4" class="box">
            <em class="icon"></em>
            <h5 class="title">学习成绩分析</h5>
          </router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        testType: ''
      }
    },
    mounted() {
      this.testType = sessionStorage.getItem('testType');
      console.log(this.testType);
    },
    components: {
    },
    methods: {
      go: function (e) {
        console.log(2222);
        var url = $(e.target).closest('a').attr('url');
        console.log(url)
        this.$router.push(url);
      }
    }
  }
</script>

<style>

</style>
