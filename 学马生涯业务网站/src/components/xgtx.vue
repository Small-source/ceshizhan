<template>
  <div class="test_menu clearfix">
    <a href="#" class="item" v-if="tuance">
      <em class="num">01</em>
      <h6 class="tit">人格特性第一步</h6>
      <p class="font">First step</p>
    </a>
    <a href="#" class="item">
      <em class="num">{{num}}</em>
      <h6 class="tit">{{tit}}</h6>
      <p class="font">{{ele}}</p>
    </a>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                tuance:true,
                num:'02',
                tit:'人格特性第二步',
                ele:'The second step'
            }
        },

        updated(){

        },
        methods: {},
        created(){
            if(window.sessionStorage.tuance=='3'){
                this.tuance=false;
                this.num='01';
                this.tit='人格特性';
                this.ele='First step'
            }
        },
        mounted(){
            if(!this.tuance){
                $('.test_menu .item').css({width:'8.3%'})
            }
        }
    }
</script>


