<template>
  <div class="carousel" @mouseenter="enter" @mouseleave="leave">
    <transition-group tag="ul" name="image" class="lis">
      <li v-for="(item) in imgs" :key="item.idx" v-show="item.idx == mark">
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
  // width: 560px;
  margin: 0 auto;
  ul {
    width: 560px;
    height: 300px;
    overflow: hidden;
    position: relative;
    li {
        position: absolute;
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
    data() {
      return {
        mark: 0,
        imgs: [
          { url: '/imgs/lunbotu/0.jpg', idx:'0' },
          { url: '/imgs/lunbotu/1.jpg', idx: '1' },
          { url: '/imgs/lunbotu/2.jpg', idx: '2' },
          { url: '/imgs/lunbotu/3.jpg', idx: '3' }
        ]
      }
    },
    methods: {
        play() {
          this.timer = setInterval(this.autoplay,2000);
        },
        autoplay() {
          this.mark ++;
          console.log(this.mark);
          if(this.mark === 4) {
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
    }
  }
</script>