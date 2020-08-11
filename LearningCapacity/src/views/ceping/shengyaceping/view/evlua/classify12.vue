<template>
  <div class="pc-page">
    <div class="system_main">
      <div class="titbox">
        <p class="font"><span v-html="text"></span> <br>请单击人格特性测评进行测试。</p>
      </div>
      <div class="list">
        <li class="item item_rz item_rz_over">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">认知潜能测评</h5>
          </a>
        </li>
        <li class="item item_scale item_rg cur">
          <router-link to="/shengyaceping/xgtx" class="box">
            <em class="icon"></em>
            <h5 class="title">人格特性测评</h5>
          </router-link>
        </li>
        <li class="item item_td" >
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">学习态度测评</h5>
          </a>
        </li>
        <li class="item item_xq">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">学习策略测评</h5>
          </a>
        </li>
        <li class="item item_xl" v-if="tuance">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">心理健康测评</h5>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testType: 'type1',
          text:'测评分为五大部分，包括：<span style="color:#FFA949">认知潜能测评、人格特性测评、学习态度测评、学习策略测评、心理健康测评。</span>',
          tuance:true
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
        var url = $(e.target).closest('a').attr('url');
        this.$router.push(url);
      }
    },
      created(){
          if(window.sessionStorage.tuance=='3'){
              this.text="职业生涯测评分为三大部分：包括认知潜能测评、人格特性测评和学习态度测评。"
              this.tuance=false;
          }
      }
  }
</script>

<style>

</style>
