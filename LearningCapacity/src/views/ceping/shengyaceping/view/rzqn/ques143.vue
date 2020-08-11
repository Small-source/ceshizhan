<template>

  <div class="pc-page zhuyilicepingC">
    <div class="test_main test_main_2">
          <rzqnNav></rzqnNav>
          <div class="ques-wrapper test_detail test_detail_ing">
            <div v-if="tip==0">
              <div  v-if="test=='one'" class="fl">
                请用眼睛从左侧开始追踪一条曲线，并将该线起始时的序号，输入在右侧曲线结束的方格内。如下图：<br>
                【注意】请先找到A图各线，然后再找B图各线。
              </div>
              <div  v-if="test=='two'" class="fl">
                请用眼睛从左侧开始追踪一条曲线，并将该线起始时的序号，输入在右侧曲线结束的方格内。如下图：
              </div>
            </div>
          <div class="timebox fr" v-if="tip==0">
            剩余时间：
            <div class="time">
              {{timeTip}}
            </div>
          </div>
        <div class="ques-container box d-relative">
            <div class="ques-answer">
                <div class="zhuti zhuti1" v-if="test=='two'">
                    <ul class="one">
                      <li v-for="(item,index) in arrA" :key="index">
                        <input type="number"   v-model="arrA[index]">
                      </li>
                    </ul>
                    <ul class="two">
                      <li v-for="(item,index) in arrB" :key="index">
                        <input type="number"  v-model="arrB[index]">
                      </li>
                    </ul>
                </div>
                <div class="zhuti zhuti2" v-if="test=='one'">
                  <ul class="one ones">
                      <li><input type="number"></li>
                      <li><input type="number"></li>
                      <li><input type="number"></li>
                  </ul>
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
  export default {
    data() {
      return {
        tip: 1,
        // tip: 0,
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
        imgNumbers:[],
        test:"one",
        kuan:964,
        arrA: ["","","","","","","","","",""],
        arrB: ["","","","","","","","","","","","","","","","","","","","","","","","",""],
        arrAs:['10','5','3','7','2','6','1','4','9','8'],
        arrBs:['7','9','17','2','3','8','10','4','1','23','6','25','24','11','5','19','21','20','13','16','15','12','14','22','18'],
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
              this.test = 'one';
              this.kuan = 550
          }else{
              this.tempTimeStart = new Date().getTime()
              this.timeTip = "3:00";
              this.leftTime=180;
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
        /**
       * 提交
       */
      submit: function () {
          clearInterval(this.t)
          this.right = 0;
          this.wrong = 0;
          this.t = null;
          if(this.type=='test'){
              this.$router.push('/shengyaceping/rzqn/success/143?type=test')
              return
          }
          console.log(this.arrA,this.arrB)
            for(var i=0;i<this.arrAs.length;i++){
                if(this.arrA[i]){
                    if(this.arrA[i]==this.arrAs[i]){
                        this.right++
                    }else{
                        this.wrong++
                    }
                }
            }
            for(var j=0;j<this.arrBs.length;j++){
                if(this.arrB[j]){
                    if(this.arrB[j]==this.arrBs[j]){
                        this.right++
                    }else{
                        this.wrong++
                    }
                }
            }
            console.log(this.arrA,this.arrB)
            console.log(this.right,this.wrong)
            // return;
        let _this=this;
        this.$ajax.post(this.G_uri+"/result/cognition/attentionc/compute", {
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
                    _this.saveNode(2, 144);
                    _this.$router.push('/shengyaceping/rzqn/success/143')
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
  .zhuyilicepingC{
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
      line-height: 30px;
      position: absolute;
      top: 40px;
      z-index: 10000000;
      left:40px;
      background:#fff;
      padding-top: 11px;
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
      margin: 100px auto;
      width: 964px;
      display: flex;
      position: relative;
      .one{
        height: 410px;
        width: 48px;
        position: absolute;
        right:36px;
        top:90px;
        li{
          width: 100%;
          height: 39px;
          margin-bottom: 2px;
        }
        input{
          display: block;
          width: 100%;
          height: 100%;
          background: none;
          text-align: center;
          font-size: 20px;
        }
      }
      .two{
        width: 48px;
        position: absolute;
        right:36px;
        top:653px;
        li{
          width: 100%;
          height: 39px;
          margin-bottom: 2px;
        }
        input{
          display: block;
          width: 100%;
          height: 100%;
          background: none;
          text-align: center;
          font-size: 20px;
        }
      }
      img{
        cursor: pointer;
        position: relative;
        cursor: pointer;
      }
      .ones{
          top:24px;
          width: 46px;
          height: 260px;
          li{
              height: 88px;
          }
      }
    }
    .zhuti1{
      background: url("~@/assets/newceping/zhuyili3AB.png") center center no-repeat;
      height: 1710px;
    }
    .zhuti2{
      background: url("~@/assets/newceping/zhuyili3A.png") center center no-repeat;
      height: 303px;
      margin: 120px auto;
    }
      input[type=number]{
          outline: none;
          border:none;
      }
  }

</style>
