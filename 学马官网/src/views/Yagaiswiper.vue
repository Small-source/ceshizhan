<template>
  <div class="carousel" @mouseenter="enter" @mouseleave="leave">
    <ul>
      <li v-for="(item, index) in imgs" :key="item.idx" :class="'no' + index" :style="sty[index]">
        <img :src="item.url" alt="">
      </li>
    </ul>
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
  width: 866px;
  margin: 0 auto;
  ul {
    width: 866px;
    height: 370px;
    overflow: hidden;
    position: relative;
    .no0, .no1, .no2 {
        border: 2px solid #000;
        position: absolute;
        transition: all 1s;
    }
    .no3 {
        border: 2px solid #000;
        position: absolute;
    }
    img {
      width: 100%;
      height: 100%;
    }
    // .li0 {
      // width: 360px;
      // height: 316px;
      // left: 0px;
      // top: 30px;
      // z-index: 1;
    // }
    // .li1 {
    //   width: 400px;
    //   height: 376px;
    //   left: 255px;
    //   top: 0px;
    //   z-index: 2;
    // }
    // .li2 {
    //   width: 360px;
    //   height: 316px;
    //   left: 506px;
    //   top: 30px;
    //   z-index: 1;
    // }
  }
}
</style>
<script>
  export default {
    data() {
      return {
        mark: 0,
        imgs: [
          // { idx: '2' },
          // { idx: '2' },

          // { idx: '2' },
          // { idx: '2' }


          { url: '/imgs/lunbotu/1.jpg', idx:'3' },
          { url: '/imgs/lunbotu/0.jpg', idx:'0' },
          { url: '/imgs/lunbotu/1.jpg', idx:'1' },
          { url: '/imgs/lunbotu/2.jpg', idx:'2' },
        ],
        sty: [
          {width: '360px', height: '300px', left: '-360px', top: '40px', zIndex: '0'},
          {width: '360px', height: '316px', left: '0px', top: '30px', zIndex: '1'},
          {width: '400px', height: '376px', left: '255px', top: '0px', zIndex: '2', backgroundColor: 'red'},
          {width: '360px', height: '316px', left: '506px', top: '30px', zIndex: '0'},
        ]
      }
    },
    methods: {
        play() {
          this.timer = setInterval(this.autoplay,2000);
        },
        autoplay() {
          
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