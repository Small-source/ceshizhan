<template>
  <div class="test_menu clearfix">
    <a href="#" class="item">
      <em class="num">01</em>
      <h6 class="tit">学习策略问卷</h6>
      <p class="font">learning strategy</p>
    </a>
    <a href="#" class="item">
      <em class="num">02</em>
      <h6 class="tit">学习风格问卷</h6>
      <p class="font">learning style</p>
    </a>
    <a href="#" class="item">
      <em class="num">03</em>
      <h6 class="tit">隐藏图形测试</h6>
      <p class="font">hidden graphics</p>
    </a>
  </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },

        updated(){

        },
        methods: {},
        created(){
        },
        mounted(){
            $('.test_menu .item').css({width:'8.3%'})
        }
    }
</script>


