<template>

  <div class="pc-page zhuyiliceping">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="ques-wrapper test_detail test_detail_ing">
        <div v-if="tip==0" class="fl">从以下图中找出右侧所示图形，并在该图形上画“✔”
          <!--01 <img src="~@/assets/newceping/01.png" alt="" class="imgs">-->
          <!--02<img src="~@/assets/newceping/02.png" alt="" class="imgs">-->
          <!--03<img src="~@/assets/newceping/03.png" alt="" class="imgs">-->
          <!--04<img src="~@/assets/newceping/04.png" alt="" class="imgs">-->
          <!--05<img src="~@/assets/newceping/05.png" alt="" class="imgs">-->
          <!--06<img src="~@/assets/newceping/06.png" alt="" class="imgs">-->
          <!--07<img src="~@/assets/newceping/07.png" alt="" class="imgs">-->
          <!--08<img src="~@/assets/newceping/08.png" alt="" class="imgs">-->
          <!--09<img src="~@/assets/newceping/09.png" alt="" class="imgs">-->
          <!--10<img src="~@/assets/newceping/10.png" alt="" class="imgs">-->
          <!--11<img src="~@/assets/newceping/11.png" alt="" class="imgs">-->
          <!--12<img src="~@/assets/newceping/12.png" alt="" class="imgs">-->
          <img src="~@/assets/newceping/04.png" alt="" class="imgs">
          <img src="~@/assets/newceping/06.png" alt="" class="imgs">
        </div>
        <div class="timebox fr" v-if="tip==0">
          剩余时间：
          <div class="time">
            {{timeTip}}
          </div>
        </div>
        <div class="ques-container box d-relative">
            <div class="ques-answer">
              <div class="zhuti" :style="{width:kuan+'px'} ">
                <div  v-for = "number in imgNumbers" :class="test">
                  <img :src="imgs[number]" @click="clickQuestion($event,number)" />
                </div>
            <div>
            </div>
          </div>
          <div class="bottom next clearfix" style="position: absolute;bottom: 30px;width: 100%;">
            <a href="javascript:;" style="margin:0 auto;" class="btn btn_start" @click="submit">提交</a>
          </div>
          <div class="box" v-if="tip==1"  @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  import rzqnNav from '../../../../../components/rzqn.vue';
  import tip from '../../../../../components/tip.vue';
  import one from '@/assets/newceping/01.png';
  import two from '@/assets/newceping/02.png';
  import three from '@/assets/newceping/03.png';
  import four from '@/assets/newceping/04.png';
  import five from '@/assets/newceping/05.png';
  import six from '@/assets/newceping/06.png';
  import seven from '@/assets/newceping/07.png';
  import eight from '@/assets/newceping/08.png';
  import nine from '@/assets/newceping/09.png';
  import ten from '@/assets/newceping/10.png';
  import eleven from '@/assets/newceping/11.png';
  import twelve from '@/assets/newceping/12.png';
  export default {
    data() {
      return {
        tip: 1,
          // tip:0,
        questions: [
        ],
        tempTimeStart: '',
        tempTime: '',
        quesArr: [],
        quesEq: 0,
        efficiency: '', // 效率 反应时/正确率
        time: '',
        startTime: '',
        endTime: '',
        answer: 0,
        bar: 0,
        answers: [],
        info_time: '',
        info_correct_rate: '',
        info_efficiency: '',
        type: this.$route.query.type,
        errorTip: '',
        errorClick: 0,
        timeFn: '',
        rightTime1: '',
        rightTime2: '',
        leftTime: 0,
        arrLength: 30,
        timeTip: '',
        imgs:[null,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve],
        imgNumbers:[],
        imgNumbers1:[
            10,11,4,2,7,3,6,8,
            11,5,5,8,12,10,10,2,
            10,5,4,12,1,9,3,2
        ],
        imgNumbers2:[
            4,12,3,6,4,9,8,11,12,9,3,10,1,10,2,
            6,8,10,7,9,1,6,9,4,12,9,3,6,8,5,
            1,8,10,4,6,8,9,2,1,11,4,2,9,12,2,
            10,3,12,5,7,3,5,6,2,12,2,5,4,9,11,
            9,8,9,12,3,8,1,10,8,1,6,9,5,3,12,
            7,2,10,11,4,6,10,11,1,8,12,6,11,1,7,
            5,1,7,4,9,6,1,2,8,5,9,1,9,3,1,
            12,2,3,5,11,12,11,8,1,6,7,4,5,9,7,
            3,12,10,6,1,10,7,11,12,9,2,7,2,5,12,
            11,9,1,2,12,4,3,9,2,8,3,4,5,7,3,
            2,7,10,6,3,7,1,8,10,7,9,1,8,4,9,
            6,3,11,7,2,4,3,9,5,10,12,11,7,5,4,
            3,8,2,10,7,6,10,8,2,9,4,7,5,11,6,
            2,10,8,5,11,1,2,7,8,11,12,6,4,7,1,
            11,3,5,8,12,10,5,10,4,12,2,4,7,11,6,
            10,5,11,9,4,8,8,12,7,10,5,2,11,6,5,
            9,8,6,12,10,12,1,7,3,5,11,6,1,4,7,
            10,5,8,11,3,6,12,1,5,10,2,3,11,6,8,
            7,10,5,4,12,1,9,3,2,11,4,10,6,3,4,
            1,9,2,5,1,12,3,10,11,4,2,7,3,6,8
        ],
        zhengque:[4,6],
        test:"",
        kuan:"",
        right:0,
        wrong:0
      }
    },
    mounted() {
        $('.test_menu .item').eq(8).addClass('item_2');
    },
    updated() {

    },
    components: {rzqnNav, tip},
    methods: {
      clickStart: function () {
          if (this.type == 'test') {
              this.timeTip ="0:20";
              this.leftTime=20;
              this.imgNumbers = this.imgNumbers1;
              this.test = 'one';
              this.kuan = 600
          }else{
              this.tempTimeStart = new Date().getTime()
              this.timeTip = "3:00";
              this.leftTime=180;
              this.imgNumbers = this.imgNumbers2;
              this.test = 'two'
              this.kuan = 800
              $('.test_detail .box').css('height','auto')
              $('.test_detail').css('height','auto')
          }
          this.t=null;
          var _this = this;
          $('.info-arrow').hide();
          this.tip=0;
          this.t=setInterval(function () {
              if (_this.leftTime >0) {
                  _this.leftTime--;
                  _this.secondToMin(_this.leftTime);
              } else if (_this.leftTime == 0) {
                  _this.submit();
              }
          }, 1000)
      },
        /**
         * 秒转换为分钟格式
         */
        secondToMin: function (second) {
            var min, sec;
            if (second > 0) {
                sec = second % 60;
                min = parseInt(second / 60);
                if (sec < 10) {
                    sec = '0' + sec;
                }
                this.timeTip = min + ':' + sec + '';
            }
        },
        //答题
        clickQuestion:function(e,number){
            if(!$(e.target).parent().hasClass('duigou')){
                $(e.target).parent().addClass('duigou')
                if(this.zhengque.indexOf(number)>=0){
                    this.right++
                }else{
                    this.wrong++
                }
            }
        },
        /**
       * 提交
       */
      submit: function () {
          clearInterval(this.t)
          this.t = null;
          if(this.type=='test'){
              this.$router.push('/shengyaceping/rzqn/success/141?type=test')
              return
          }
          let _this=this;
        this.$ajax.post(this.G_uri+"/result/cognition/attentiona/compute", {
            time:new Date().getTime()-this.tempTimeStart,
            right:this.right,
            wrong:this.wrong
          },
          {
              timeout:3000,
              headers: {
                  "token": sessionStorage.getItem('token'),
              }
          },
          {
            emulateJSON: true
          }
        ).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              _this.saveNode(2, 142);
              _this.$router.push('/shengyaceping/rzqn/success/141')
            } else {
              _this.layerMsg(data.msg);
            }
          },
          function (res) {
              _this.layerMsg('网络错误,请重新提交');
          }
        )
      },
    }
  }
</script>
<style lang='less'>
  .zhuyiliceping{
    .layer {
      top: 120px;
    }
    .evalu-nav {
      background: #333;
      opacity: 1;
    }
    .ques-answer-tip {
      position: absolute;
      top: 0px;
      left: 0px;
      background: #f9f9f9;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ff3333;
      font-size: 40px;
      width: 100%;
      height: 100%;
      border: 10px solid #fff;
      box-sizing: border-box;
    }
    .errorTip {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      top: 50%;
      margin-top: -12.5px;
      left: 0;
      font-size: 25px;
    }
    .fl{
      font-size: 16px;
      color: #666666;
      line-height: 50px;
      position: absolute;
      top: 40px;
      z-index: 10000000;
      left:40px;
      background:#fff;
    }
    .imgs{
      width: 25px;
      height: 25px;
      margin-right:5px;
    }
    .duigou:after{
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      content: ' ';
      width: 58px;
      height: 58px;
      margin-left: -29px;
      margin-top: -29px;
      background: url("~@/assets/newceping/duigou.png") center center no-repeat;
    }
    .zhuti{
      margin: 150px auto;
      width: 550px;
      display: flex;
      justify-contsent: space-between;
      flex-wrap: wrap;
      .one{
        width: 12.5%;
        text-align: center;
        position: relative;
        margin-bottom: 20px;
        text-align: center;
      }
      .two{
        width: 6.66%;
        text-align: center;
        position: relative;
        margin-bottom: 20px;
        text-align: center;
        img{
          width: 45px;
        }
      }
      img{
        cursor: pointer;
        position: relative;
        cursor: pointer;
      }
    }
  }

</style>
