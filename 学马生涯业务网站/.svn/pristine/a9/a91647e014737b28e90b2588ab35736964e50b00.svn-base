<template>
  <div class="test_menu clearfix">
    <a href="javascript:;" class="item" >
      <em class="num">01</em>
      <h6 class="tit">兴趣倾向问卷</h6>
      <p class="font">Interest tendency</p>
    </a>
    <a href="javascript:;" class="item"  v-if="tuance">
      <em class="num">02</em>
      <h6 class="tit">学习态度问卷</h6>
      <p class="font">learning attitude</p>
    </a>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        testType: '',
          tuance:true
      }
    },
    created (){
      this.testType = sessionStorage.getItem('testType');
    },
    mounted(){
        if(window.sessionStorage.tuance=='3'){
           this.tuance=false;
        }
    },
  }
</script>


