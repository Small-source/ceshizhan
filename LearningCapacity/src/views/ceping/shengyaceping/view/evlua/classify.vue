<template>
  <div class="pc-page">
    <div class="system_main">
      <div class="titbox">
        <p class="font" v-if="testType=='type1'"><span v-html="text"></span> <br>请单击认知潜能测评进行测试。</p>
      </div>
      <div class="list">
        <li class="item item_scale item_rz cur" v-if="testType=='type1'||testType=='type2'">
          <router-link to="/shengyaceping/rzqn" class="box">
            <em class="icon"></em>
            <h5 class="title">认知潜能测评</h5>
          </router-link>
        </li>
        <li class="item item_rg">
          <a href="javascript:" class="box">
            <em class="icon"></em>
            <h5 class="title">人格特性测评</h5>
          </a>
        </li>
        <li class="item item_td" >
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">学习态度测评</h5>
          </a>
        </li>
        <li class="item item_xq"  v-if="tuance">
          <a href="javascript:;" class="box">
            <em class="icon"></em>
            <h5 class="title">学习策略测评</h5>
          </a>
        </li>
        <li class="item item_xl"  v-if="tuance">
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
      props: [ 'message' ],
      data() {
          return {
              isShowjihuoka: false,
              src: "",
              serial_no: '',
              // 记录状态
              zhuangtai: '',
              testType: 'type1',
              text:'测评分为五大部分，包括：<span style="color:#FFA949">认知潜能测评、人格特性测评、学习态度测评、学习策略测评、心理健康测评。</span>',
              tuance:true
          }
      },
      methods: {
      },
      created() {
          if(window.sessionStorage.tuance=='3'){
             this.text="职业生涯测评分为三大部分：包括认知潜能测评、人格特性测评和学习态度测评。";
             this.tuance=false;
          }
      }
  }
</script>

<style scoped>

</style>
