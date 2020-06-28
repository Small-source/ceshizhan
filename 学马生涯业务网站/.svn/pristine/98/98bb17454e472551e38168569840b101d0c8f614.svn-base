<template>
  <div class="pc-page" @mousedown="answerClick2($event)" @dblclick="answerDblClick">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="ques-wrapper test_detail test_detail_ing">
        <div class="ques-container box d-relative">
          <div class="errorTip" v-if="errorClick==1">{{errorTip}}</div>
          <div v-if="subject==2" class="d-relative ques-answer ques-work-answer">
            <div class="work-ques">
              <span v-for="(num,index) in memoryNum" class="memoryBit" v-if="index==curIndex">{{num}}</span>
            </div>
            <div class="work-m-tip">
              提示：请判断此数字是否与前第三个数字相同。
            </div>
          </div>
          <div class="box" v-if="tip==1" @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;"  class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>
        <div class="page">
          <em class="col_2">{{curIndex+1}} </em>/{{arrLength}}
        </div>
      </div>
    </div>
  </div>
  <!--<div class="d-relative xgtz-index xgtx-ques" @mousedown="answerClick2($event)" @dblclick="answerDblClick">-->
    <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<img v-if="subject==1" src="../../assets/rzqn/parta1.png">-->
      <!--<img v-if="subject==2" src="../../assets/rzqn/parta2.png">-->
      <!--<img v-if="subject==2" src="../../assets/rzqn/partb1.png">-->
      <!--<img v-if="subject==1" src="../../assets/rzqn/partb2.png">-->
    <!--</div>-->

    <!--<div class="ques-wrapper">-->
      <!--<div class="ques-container d-relative">-->

        <!--<div class="errorTip" v-if="errorClick==1">{{errorTip}}</div>-->
        <!--<div v-if="subject==2" class="d-relative ques-answer ques-work-answer">-->
          <!--<div class="work-ques">-->
            <!--<span v-for="(num,index) in memoryNum" class="memoryBit" v-if="index==curIndex">{{num}}</span>-->
          <!--</div>-->
          <!--<div class="work-m-tip">-->
            <!--提示：请判断此数字是否与前第三个数字相同。-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标,开始测试</div>-->
        <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
      <!--</div>-->
      <!--<div class="ques-progress">-->
        <!--<div class="seq-wrapper pull-right"></div>-->
      <!--</div>-->
      <!--<div class="copyright">-->
        <!--©版权声明：本作品著作权以及版权属于育铭天下，并受法律保护。-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';
  import tip from '../../../../../components/tip.vue';

  export default{
    data(){
      return {
        tip: 1,
        subject: 2,
        questions: '',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        expandNumber: [],
        tempNumber: [],
        expandLength: 3,
        memoryNumInit: [],
        memoryNumInitStr: '',
        memoryNumAnswer: [],
        memoryNum: [],
        curIndex: 0,
        work_bit: '',
        work_correct: 0,
        work_correct_rate: '',
        tempLength: '',
        type: this.$route.query.type,
        errorTip: '',
        errorClick: 0,
        timeFn: '',
        arrLength: 28,
      }
    },
    components: {rzqnNav, tip},
    mounted(){
      this.startTime = new Date().getTime();
      var _this = this;
      $('.test_menu .item').eq(1).addClass('item_2');
      if (this.type == 'test') {
        this.arrLength = 9;
      }
    },
    updated(){
    },
    methods: {
      clickStart: function () {
        var _this = this;
        this.tip = 0;
        setTimeout(function () {
          _this.quesPartB();
          setInterval(function () {
            if (_this.curIndex < 3) {
              _this.curIndex++;
            } else {
              for (var i = 0; i < 100; i++) {
                clearInterval(i);
              }
            }
          }, 2000)
        }, 500)

      },

      /**
       * 数字记忆测试
       */
      quesPartB: function () {
//        var _this = this;
//
//        // 前三个数字
//        for (var i = 0; i < 300; i++) {
//          if (this.memoryNumInit.length < 3) {
//            var strInit1 = this.memoryNumInit.join('');
//            var str = (Math.random() * 9).toFixed(0);
//            if (strInit1.indexOf(str) == -1) {
//              this.memoryNumInit.push(str);
//            }
//          }
//        }
//
//        // 正确数组占比20%
//        for (var i = 0; i < 2; i++) {
//          $.each(this.memoryNumInit, function (index, val) {
//            if (_this.memoryNumAnswer.length < 5) {
//              _this.memoryNumAnswer.push(val);
//            }
//          })
//        }
//
//        // 错误数字占比80%
//        var strInit = this.memoryNumInit.join('');
//        for (var i = 0; i < 500; i++) {
//          if (this.memoryNumAnswer.length < 25) {
//            var str = (Math.random() * 9).toFixed(0);
//            if (strInit.indexOf(str) == -1) {
//              this.memoryNumAnswer.push(str);
//            }
//          }
//        }
//        this.memoryNumAnswer.sort(this.randomSort);
//        var strAnswer = this.memoryNumAnswer.join('');
//        this.memoryNum = (strInit + strAnswer).split('');
//
//        this.memoryNumInitStr = this.memoryNumInit.join('');
//        console.log(this.memoryNum)        this.quesInit();

        this.$ajax.post("/api/test/work/gen_nums", {
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
              this.memoryNum = data.result;
            }
          }.bind(this),
          function (res) {
            this.layerMsg('网络错误');
          }.bind(this)
        );
      },

      /**
       * 数组随机排序
       */
      randomSort: function (a, b) {
        return Math.random() > 0.5 ? -1 : 1;
      },

      /**
       * 答题
       */
      answerClick2: function (e) {
        var str = $('.memoryBit').text(), timer, _this = this;
        document.oncontextmenu = function () {
          return false;
        }
        var btnNum = e.button;
        if (_this.tip == 0) {
          clearTimeout(_this.timeFn);
          _this.timeFn = setTimeout(function () {
            console.log('这是单击事件')
            console.log(_this.curIndex);
            if (_this.errorClick == 0 && _this.tip == 0) {

              if (_this.curIndex > 2) {

                var arrowIndex = $('.memoryBit').css('z-index'); // 箭头层级，当前是否在显示
                if (_this.tip == 0 && arrowIndex < 0) {
                  _this.errorClick = 1;
                  _this.errorTip = '抢时，双击鼠标左键继续';
                  $('.memoryBit').hide();
                  return false;
                }

                // 左键相同
                if (btnNum == 0) {
                  console.log("您点击了鼠标左键！")
                  _this.answers.push(1);
                  if (_this.memoryNum[_this.curIndex] == _this.memoryNum[_this.curIndex - 3]) {
                  } else {
                    _this.errorClick = 1;
                    _this.errorTip = '回答错误，双击鼠标左键继续';
                    $('.memoryBit').hide();
                  }
                }
                else if (btnNum == 2) {
                  // 右键不相同
                  console.log("您点击了鼠标右键！");
                  _this.answers.push(0);
                  if (_this.memoryNum[_this.curIndex] != _this.memoryNum[_this.curIndex - 3]) {
                  } else {
                    _this.errorClick = 1;
                    _this.errorTip = '回答错误，双击鼠标左键继续';
                    $('.memoryBit').hide();
                  }
                }

                if (_this.curIndex < _this.arrLength) {
                  _this.curIndex++;
                  _this.bar = Number(_this.curIndex -2) / (_this.arrLength-2) * 100;
                }
                console.log(_this.answers);
                if (_this.curIndex == _this.arrLength) {
                  console.log(_this.work_correct);
                  _this.work_correct_rate = _this.work_correct / _this.arrLength - 2;
                  _this.time = Number(new Date().getTime()) - Number(_this.startTime);
                  if (_this.type == 'test') {
                    _this.$router.push('/shengyaceping/rzqn/success/22?type=test')
                  } else {
                    _this.submit();
                  }
                }
              } else {
                _this.layerMsg('本测试是从第4次开始判断',1000);
              }


            }
          }, 250)
        }
      },

      /**
       * 双击，继续答题
       */
      answerDblClick: function (e) {
        var _this = this;
        clearTimeout(this.timeFn);
        console.log('双击事件');

        if (_this.errorClick == 0) {
          if (_this.curIndex > 2) {
            var arrowIndex = $('.memoryBit').css('z-index'); // 箭头层级，当前是否在显示
            _this.errorClick = 1;
            _this.errorTip = '抢时，双击鼠标左键继续';
            $('.memoryBit').hide();
            return false;
          } else {
            _this.layerMsg('本测试是从第4次开始判断',1000);
          }
        }

        this.errorClick = 0;
        $('.memoryBit').show();
      },

      /**
       * 提交
       */
      submit: function () {
        console.log(this.answers);
        console.log(this.memoryNum);
        this.$ajax.post("/api/result/cognition/workb/add", {
            time: this.time,
            answers: JSON.stringify(this.answers),
            nums: JSON.stringify(this.memoryNum)
          }, {
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
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.saveNode(2, 3);
              this.$router.push('/shengyaceping/rzqn/success/22')
            } else {
              this.layerMsg(data.msg);
            }
          }.bind(this),
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }.bind(this)
        );
      },


    }

  }
</script>

<style scoped>

</style>

<style>
  #layer {
    top: 130px;
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
</style>
