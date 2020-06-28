<template>
  <div class="test_menu clearfix">
    <a href="javascript:;" class="item">
      <em class="num">01</em>
      <h6 class="tit">信息加工能力</h6>
      <p class="font">Information Processing</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">02</em>
      <h6 class="tit">工作记忆能力</h6>
      <p class="font">Working Memory</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">03</em>
      <h6 class="tit">空间能力</h6>
      <p class="font">Spatial</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">04</em>
      <h6 class="tit">表象能力</h6>
      <p class="font">Presentational</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">05</em>
      <h6 class="tit">思维转换能力</h6>
      <p class="font">Thinking Translating</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">06</em>
      <h6 class="tit">逻辑推理能力</h6>
      <p class="font">Logical Reasoning</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">07</em>
      <h6 class="tit">动手操作能力</h6>
      <p class="font">Operation</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">08</em>
      <h6 class="tit">语言能力</h6>
      <p class="font">Linguisitic</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">09</em>
      <h6 class="tit">数学能力</h6>
      <p class="font">Mathematics</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">10</em>
      <h6 class="tit">组织管理能力</h6>
      <p class="font">Organizational
        Management</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">11</em>
      <h6 class="tit">人际交往能力</h6>
      <p class="font">Interpersonal Interaction</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">12</em>
      <h6 class="tit">美术能力</h6>
      <p class="font">Arts Capacity</p>
    </a>
    <a href="javascript:;" class="item" v-if="tuance">
      <em class="num">13</em>
      <h6 class="tit">隐藏图形测试</h6>
      <p class="font">Hidden Graphics</p>
    </a>
  </div>

  <!--<div>-->
    <!--<div class="evalu-nav">-->
      <!--<ul>-->
        <!--<li>-->
          <!--<p>信息加工能力-->
            <!--<span>Information</span>-->
            <!--<span>processing</span>-->
          <!--</p>-->
        <!--</li>-->

        <!--<li>-->
          <!--<p>-->
            <!--工作记忆能力-->
            <!--<span>Working</span>-->
            <!--<span>memory</span>-->
          <!--</p>-->
        <!--</li>-->

        <!--<li>-->
          <!--<p>-->
            <!--空间能力-->
            <!--<span class="center">Spatial</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--表象能力-->
            <!--<span class="center">Presentational</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--思维转换能力-->
            <!--<span>Thinking</span>-->
            <!--<span>translating</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--逻辑推理能力-->
            <!--<span>Logical</span>-->
            <!--<span>reasoning</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--动手操作能力-->
            <!--<span class="center">Operation</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--语言能力-->
            <!--<span class="center">Linguisitic</span>-->
          <!--</p>-->
        <!--</li>-->

        <!--<li>-->
          <!--<p>-->
            <!--数学能力-->
            <!--<span class="center">Mathematics</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--组织管理能力-->
            <!--<span>Organizational</span>-->
            <!--<span>management</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--人际交往能力-->
            <!--<span>Interpersonal</span>-->
            <!--<span>interaction</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--美术能力-->
            <!--<span>Arts</span>-->
            <!--<span>capacity</span>-->
          <!--</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<p>-->
            <!--隐藏图形测试-->
            <!--<span>Hidden</span>-->
            <!--<span>graphics</span>-->
          <!--</p>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
  export default{
    data(){
      return {
          tuance:true
      }
    },

    updated(){

    },
    methods: {},
    created(){
      if(window.sessionStorage.tuance=='3'){
          this.tuance=false;
      }
    },
    mounted(){
      if(!this.tuance){
          $('.test_menu .item').css({width:'8.3%'})
      }
    }
  }
</script>
<style>
</style>


