<template>
  <div class="carousel" @mouseenter="enter" @mouseleave="leave">
    <transition-group tag="ul" name="image" class="lis">
      <li v-for="(item) in message" :key="item.idx" v-show="item.idx == mark">
        <img :src="item.url" alt="">
      </li>
    </transition-group>
   <!--  <div class="btns">
      <a href="#" class="left" id="leftBtn">&lt;</a>
      <a href="#" class="right" id="rightBtn">&gt;</a>
    </div> -->
  </div>
</template>
<style type="text/css" lang='less' scoped>
* {
  list-style: none;
}
.carousel {
  width: 100%;
  height: 713px;
  ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    li {
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
   .image-leave-active {    
    transform: translateX(-100%);    
    transition: all 1.5s ease;  
  }  
  .image-enter {   
    transform: translateX(100%); 
  }  
  .image-leave { 
   transform: translateX(0);  
  }
}
</style>
<script>
  export default {
  	props: [ 'message' ],
    data() {
      return {
        mark: 0
      }
    },
    methods: {
        play() {
          this.timer = setInterval(this.autoplay,2500);
        },
        autoplay() {
          this.mark ++;
          // console.log(this.message.length);
          if(this.mark === this.message.length) {
            this.mark = 0;
          }
        },
        enter() {
          // console.log(111)
          clearInterval(this.timer);
        },
        leave() {
          // console.log('从新开启定时器');
          clearInterval(this.timer);
          this.play();
          
        }


    },
    created() {
      this.play();
      // console.log(this.props.data)
    }
  }
</script>