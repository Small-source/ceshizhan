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
      <h6 class="tit">语言能力</h6>
      <p class="font">Linguisitic</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">08</em>
      <h6 class="tit">数学能力</h6>
      <p class="font">Mathematics</p>
    </a>
    <a href="javascript:;" class="item">
      <em class="num">09</em>
      <h6 class="tit">注意力</h6>
      <p class="font">Attention</p>
    </a>
  </div>
</template>

<script>
  export default{
    data(){
      return {
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


