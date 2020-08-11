<template>
  <div class="pc-page zhuyilicepingB">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="ques-wrapper test_detail test_detail_ing">
        <div v-if="tip==0">
          <div  class="fl">
            从画有不同数目圆圈的小方格内找出4个圆圈小方格，找到后请在该方格上画“✔”
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
              <table class="one">
                <tr v-for="(item,index) in arrAs" :key="index">
                   <td v-for="(ite,i) in item" :key="i" :style="{backgroundImage:'url(/statics/imgs/zhuyili/partB/'+ite+'_'+suijishu()+'.png)'}" @click="clickQuestion($event,ite)"></td>
                </tr>
              </table>
            </div>
            <div class="zhuti zhuti2" v-if="test=='one'">
              <table class="one">
                <tr v-for="(item,index) in arrBs" :key="index">
                  <td v-for="(ite,i) in item" :key="i" :style="{backgroundImage:'url(/statics/imgs/zhuyili/partB/'+ite+'_'+suijishu()+'.png)'}" @click="clickQuestion($event,ite)"></td>
                </tr>
              </table>
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
                // tip: 1,
                tip:0,
                questions:[],
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
                arrAs:[
                    [3,5,5,4,3,3,3,3,5,5,3,4,5,4,5,5,4,5,5,5,4,5,5,4,5,4],
                    [3,4,5,5,5,4,5,5,3,3,3,5,4,5,4,3,3,4,5,3,5,3,5,4,4,5],
                    [3,5,4,5,4,5,4,3,4,5,5,3,3,4,3,4,5,3,4,4,5,4,5,3,3,3],
                    [4,4,3,3,3,5,5,4,3,4,3,4,5,3,5,3,4,5,3,5,4,4,5,4,6,4],
                    [5,5,3,4,5,5,3,4,5,5,3,3,3,4,4,5,4,3,3,4,3,5,3,4,3,5],

                    [5,4,4,4,4,5,5,3,3,3,4,5,4,5,4,3,3,4,5,3,5,3,4,3,4,5],
                    [4,5,4,3,3,3,4,5,5,4,5,4,5,3,3,4,5,4,3,5,4,5,5,5,5,4],
                    [3,4,5,5,5,4,4,3,3,3,3,3,3,3,5,5,4,5,3,4,3,4,3,3,3,4],
                    [5,5,5,3,3,5,4,5,3,3,5,4,4,5,3,3,5,3,5,3,5,3,5,4,4,3],
                    [4,3,4,5,5,3,3,5,5,4,3,5,5,3,5,4,4,3,4,5,3,4,3,5,5,3],

                    [4,3,4,4,4,4,5,4,3,3,4,3,4,5,4,3,3,5,4,3,4,5,4,3,4,4],
                    [3,5,5,3,3,3,4,4,4,5,5,5,3,4,3,5,4,3,4,5,4,3,5,4,4,4],
                    [4,4,5,3,3,3,5,5,5,5,3,4,5,5,5,4,3,5,5,4,3,5,4,4,3,5],
                    [3,5,4,5,5,5,3,4,4,3,4,5,3,5,3,3,5,4,3,3,4,3,5,5,5,3],
                    [5,4,3,4,4,3,5,3,5,4,3,3,4,5,4,5,3,5,3,4,3,5,3,4,3,5],

                    [5,3,5,5,5,5,4,3,5,3,5,4,5,3,5,4,5,3,5,5,5,4,5,3,4,4],
                    [3,5,4,4,4,4,3,5,4,5,3,3,3,4,3,5,3,4,5,3,4,3,4,4,5,3],
                    [4,4,3,3,3,5,4,3,5,3,4,5,4,5,5,5,5,3,3,5,3,5,3,4,3,5],
                    [4,3,3,4,4,3,3,4,3,3,4,3,5,4,3,3,5,5,5,4,5,5,5,3,5,3],
                    [3,3,5,4,4,5,5,4,5,3,5,4,3,3,4,4,4,4,3,3,4,3,4,5,4,3],

                    [3,3,3,3,3,5,4,5,3,4,5,5,4,5,5,3,4,3,5,5,4,5,3,4,3,4],
                    [3,4,4,5,5,4,3,3,4,3,4,3,3,3,4,5,5,5,4,3,4,3,3,3,5,4],
                    [4,5,5,3,3,5,5,4,3,5,3,4,5,3,3,4,3,4,4,4,5,5,5,5,4,3],
                    [4,5,4,5,5,3,3,5,5,4,5,3,4,3,5,3,5,3,4,3,3,4,3,4,3,4],
                    [3,3,4,3,3,4,3,4,4,5,4,5,5,5,4,4,4,5,3,5,4,3,5,3,4,5]
                ],
                arrBs:[
                    [3,4,3,4,3,4,3,3,4,3,4,5,4,5,5],
                    [4,3,4,3,3,5,5,4,3,5,3,3,4,3,3]
                ],
                right:0,
                wrong:0
            }
        },
        mounted() {
            $('.test_menu .item').eq(8).addClass('item_2');
            this.clickStart();
            this.suijishu();
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
                }else{
                    this.tempTimeStart = new Date().getTime()
                    this.timeTip = "3:00";
                    this.leftTime=180;
                    this.test = 'two'
                    $('.test_detail .box').css('height','auto')
                    $('.test_detail').css('height','auto')
                }
                this.t=null;
                var _this = this;
                return;
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
            clickQuestion:function(e,ite){
                if(!$(e.target).hasClass('duigou')){
                    $(e.target).addClass('duigou')
                    if(ite == 4){
                        this.right++;
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
                    this.$router.push('/shengyaceping/rzqn/success/142?type=test')
                    return
                }
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
                            return;
                            _this.saveNode(2, 143);
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
            suijishu:function () {
                var number = Math.ceil(Math.random()*25)
                 number=number<10?"0"+number:""+number;
                return number;
            }

        }
    }
</script>
<style lang='less'>
  .zhuyilicepingB{
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
      width: 44px;
      height: 29px;
      margin-left: -22px;
      margin-top: -14px;
      background: url("~@/assets/newceping/duigou2.png") center center no-repeat;
    }
    .zhuti{
      margin: 100px auto;
      width: 1200px;
      position: relative;
      .one{
        /*display: block;*/
        width: 100%;
        border-collapse: collapse;
        border:1px solid #333;
        td{
          width: 3.8%;
          height: 90px;
          cursor: pointer;
          border:1px solid #333;
          background-size:100% auto;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url("../../../../../../public/statics/imgs/zhuyili/partB/3_01.png");
          position: relative;
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
    .zhuti1,.zhuti2{
      width: 1000px;
      margin: 100px auto;
      tr{
        width: 100%;
      }
    }
    .zhuti2{
      td{
        height: 160px !important;
      }
    }
    input[type=number]{
      outline: none;
      border:none;
    }
  }

</style>
