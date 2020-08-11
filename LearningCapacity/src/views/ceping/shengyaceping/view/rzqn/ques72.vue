<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="ques-wrapper test_detail test_detail_ing">
          <div class="maze" >
            <header>

              <p >
                碰壁次数:<span id="pengzhuang">0</span>
              </p>
              <p>
                进入死胡同次数:<span id="sihutong">0</span>
              </p>
              <p style="opacity: 0">
                时间:<span id="Mazetime" >0</span>
              </p>
              <p style="opacity: 0">
                按键D次数:<span id="D">0</span>
              </p>
              <p style="opacity: 0">>
                按键K次数:<span id="K">0</span>
              </p>
            </header>
            <div class="canvasBj">
              <canvas width="447" height="447" id="canvas"></canvas>
            </div>

          </div>
        </div>
            <!--<tip></tip>-->

        <div class="page">
          <!--<em class="col_2">{{curIndex+1}} </em>/{{total}}-->

        </div>
      </div>
    </div>
</template>
<script>
  import rzqnNav from '../../../../../components/rzqn.vue';
  import tip from '../../../../../components/tip.vue';
  export default {
    data() {
      return {
        tip: 1,
        subject: 1,
        questions: '',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        numberWall: 5, // 碰壁次数
        diyTop: 12,
        diyLeft: 42,
        moveFlag: true,
        canvas: '',
        canvasCtx: '',
        type: this.$route.query.type,
          show:false
      }
    },
    components: {rzqnNav, tip},
    mounted() {
        console.log(100)
        $('.test_menu .item').eq(6).addClass('item_2');
        let _this=this
     if(this.type=='test'){
         new Maze({
             type:'simple',
             el:'#canvas',
             time:'#Mazetime',
             wallCollsion:'#pengzhuang',
             deadEnd:'#sihutong',
             D:'#D',
             K:'#K',
             vue:_this
         })
     }else{
         console.log(this.type)
         new Maze({
             type:'complex',
             el:'#canvas',
             time:'#Mazetime',
             wallCollsion:'#pengzhuang',
             deadEnd:'#sihutong',
             D:'#D',
             K:'#K',
             vue:_this
         })
         // new Maze({
         //     type:'complex',
         //     el:'#canvas',
         //     time:'#Mazetime',
         //     wallCollsion:'#pengzhuang',
         //     deadEnd:'#sihutong',
         //     D:'#D',
         //     K:'#K',
         //     vue:_this
         // })
     }

    },
    updated() {
      // this.AsCallJsHit
    },
    methods: {

      clickStart: function () {
        this.tip = 0
      },

      /**
       * 提交
       */
    },
      created(){

      }

  }

</script>
<style>
  #myCanvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .line1 {
    width: 200px;
    height: 20px;
    background: #000;
    top: 0;
    left: 0;
  }

  .diy2 {
    width: 10px !important;
    height: 10px !important;
    z-index: 0 !important;
  }

  #div1 {
    width: 10px;
    height: 10px;
    background-color: red;
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
  }

  #parent {
    width: 250px;
    height: 250px;
    position: relative;
    /*margin: 0 auto;*/
    background-color: transparent;
  }

  .parent {
    width: 100px;
    height: 20px;
    position: relative;
    /*margin: 0 auto;*/
    background-color: #000;
    /*transform: rotate(85deg);z*/
  }

  .p1 {
    transform: rotate(70deg);
    left: -10px
  }

  .p2 {
    left: -31px;
    top: 55px;
    transform: rotate(-40deg);
  }

  .p3 {
    top: 72px;
    transform: rotate(13deg);
    left: -15px;
  }

  .p4 {
    top: 103px;
    left: 37px;
    transform: rotate(75deg);
  }

  .p5 {
    top: 88px;
    left: 77px;
    transform: rotate(-50deg);
  }

  .p6 {
    left: 150px;
    top: 40px;
    transform: rotate(10deg);
  }

</style>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }

  #leftStar {
    width: 330px;
    height: auto;
    transform: rotate(-6deg);
  }

  #flashContent {
    position: absolute;
    top: 0px;
    right: -100px;
  }

  .xgtx-ques .ques-wrapper-diy {
    width: 1000px !important;
    margin-left: -500px !important;
    left: 50% !important;
  }

  .work-diy-tip {
    left: 50% !important;
    margin-left: -55px !important;
    top: 5px !important;
  }
</style>
<style lang="less" scoped>
    .canvasBj{
      position: absolute;
      padding: 20px;
      background: #fff;
      overflow: hidden;
      top:50%;
      left:50%;
      margin-left:-234px;
      margin-top: -234px;
    }
    #canvas{
      display: block;
      background: #fff;

    }
    span{
      font-size:20px;
      color:red;
    }
    .test_detail_ing{
        padding: 20px;
        box-sizing: border-box;
    }
    header>p{
        color:red;
        font-size:20px;
        line-height: 40px;
        text-indent:20px;
    }
    header>p:first-child{
      margin-top:40px ;
    }
  .maze{
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    padding-top: 40px;
    box-sizing: border-box;
  }
</style>
