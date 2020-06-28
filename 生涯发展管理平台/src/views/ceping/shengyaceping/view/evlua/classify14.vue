<template>
  <div class="pc-page">
    <div class="system_main">
      <div class="titbox">
        <p class="font">{{text}}请单击心理健康测评进行测试。
        </p>
      </div>
      <div class="list">
        <li class="item item_rz item_rz_over">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">认知潜能测评</h5>
          </a>
        </li>
        <li class="item item_rg item_rg_over">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">人格特性测评</h5>
          </a>
        </li>
        <li class="item item_xq item_xq_over">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">兴趣倾向测评</h5>
          </a>
        </li>
        <li class="item item_scale item_xl cur">
          <router-link to="/shengyaceping/xljk" class="box">
            <em class="icon"></em>
            <h5 class="title">心理健康测评</h5>
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
        testType: 'type1',
        text:'测评分为四大部分，包括：认知潜能测评、人格特性测评、兴趣倾向测评和心理健康测评。'
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
    },
      created(){
          if(window.sessionStorage.tuance=='3'){
              this.text="职业生涯测评分为三大部分：包括认知潜能测评、人格特性测评和兴趣倾向测评。"
          }
      }
  }
</script>

<style>

</style>
