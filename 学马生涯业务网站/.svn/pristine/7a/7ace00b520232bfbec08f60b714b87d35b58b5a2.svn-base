<template>

  <div class="pc-page" @mousedown="answerClick($event)" @dblclick="answerDblClick">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing">
        <div class="ques-container box d-relative">
          <div class="errorTip" v-if="errorClick==1">{{errorTip}}</div>
          <div class="ques-answer ques-info-answer">
            <div class="info-arrow" v-for="(q,index) in questions" :class="{current:q.show}" v-if="errorClick==0">
              <img v-if="q.direction=='left'" src="../../../../../assets/rzqn/left-arrow.png" alt="">
              <img v-if="q.direction=='right'" src="../../../../../assets/rzqn/right-arrow.png" alt="">
              <!--<img v-if="q.direction=='left'" src="../../assets/result_02_left.png" alt="">-->
              <!--<img v-if="q.direction=='right'" src="../../assets/result_02.png" alt="">-->
            </div>
          </div>
          <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标,开始测试</div>-->
          <div class="box" v-if="tip==1" @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>
        <div class="page">
          <em class="col_2">{{quesEq+1}} </em>/{{arrLength}}
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques" @mousedown="answerClick($event)" @dblclick="answerDblClick">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/rzqn/parta1.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper">-->
  <!--<div class="ques-container d-relative">-->
  <!--<div class="errorTip" v-if="errorClick==1">{{errorTip}}</div>-->
  <!--<div class="ques-answer ques-info-answer">-->
  <!--<div class="info-arrow" v-for="(q,index) in questions" :class="{current:q.show}" v-if="errorClick==0">-->
  <!--<img v-if="q.direction=='left'" src="../../assets/rzqn/left-arrow.png" alt="">-->
  <!--<img v-if="q.direction=='right'" src="../../assets/rzqn/right-arrow.png" alt="">-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标,开始测试</div>-->
  <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
  <!--</div>-->
  <!--<div class="ques-progress">-->
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

  export default {
    data() {
      return {
        tip: 1,
        questions: [
          {
            show: false,
            direction: 'left'
          },
          {
            show: false,
            direction: 'left'
          },
          {
            show: false,
            direction: 'left'
          },
          {
            show: false,
            direction: 'right'
          },
          {
            show: false,
            direction: 'right'
          },
          {
            show: false,
            direction: 'right'
          }
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
        arrLength: 30,
      }
    },
    mounted() {
      this.startTime = new Date().getTime();
      this.quesShow();
      $('.test_menu .item').eq(0).addClass('item_2');
      if (this.type == 'test') {
        this.arrLength = 5;
      }
    },
    updated() {

    },
    components: {rzqnNav, tip},
    methods: {
      clickStart: function () {
        var _this = this;
        if (this.errorClick == 0) {
          $('.info-arrow').hide();
          setTimeout(function () {
            _this.tempTimeStart = new Date().getTime();
            $('.info-arrow').show();
            _this.tip = 0;
          }, 500)
        }
      },
      /**
       * 试题显示
       */
      quesShow: function () {
        var _this = this;
        for (var i = 0; i < 5; i++) {
          var arr = [0, 1, 2, 3, 4, 5];
          arr.sort(this.randomSort);
          $(arr).each(function (i, val) {
            _this.quesArr.push(val);
          })
        }
//        console.log(this.quesArr)
//        console.log(this.quesArr[this.quesEq]);
        this.questions[this.quesArr[this.quesEq]].show = true;
        console.log(this.questions);
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
      answerClick: function (e) {
        document.oncontextmenu = function () {
          return false;
        }
        // 取消上次延时未执行的方法
        var _this = this;
        var timer, obj = {};
        clearTimeout(this.timeFn);
        if (_this.tip == 0) {
          this.timeFn = setTimeout(function () {
            // 没有暂停
            // console.log('这是单击事件')
            if (_this.errorClick == 0 && _this.tip == 0) {
              $('.info-arrow').show();
              var arrowIndex = $('.info-arrow.current').css('z-index'); // 箭头层级，当前是否在显示
              if (_this.tip == 0 && arrowIndex < 0) {
                _this.errorClick = 1;
                _this.errorTip = '抢时，双击鼠标左键继续';
                $('.info-arrow').hide();
                return false;
              }
              if (Number(new Date().getTime()) - Number(_this.tempTimeStart) > 1000) {
                _this.tempTime = Number(new Date().getTime()) - Number(_this.tempTimeStart) - 1000;
              } else {
                _this.tempTime = Number(new Date().getTime()) - Number(_this.tempTimeStart);
              }
              obj.time = _this.tempTime;
              console.log('反应时：' + _this.tempTime);

              if (_this.quesEq < _this.arrLength) {
                _this.bar = Number(_this.quesEq + 1) / _this.arrLength * 100;
                // console.log(_this.bar);
                /*右键菜单不显示*/

                var btnNum = e.button;
                if (btnNum == 0) {
                  // console.log("您点击了鼠标左键！");
                  obj.answer = 0;
                  if (_this.questions[_this.quesArr[_this.quesEq]].direction == 'left') {
                    _this.answer++;
                    obj.right_answer = 1;
                  } else {
                    obj.right_answer = 4;
                    _this.errorClick = 1;
                    _this.errorTip = '回答错误，双击鼠标左键继续';
                    $('.info-arrow').hide();
                    // return false;
                  }
                }
                else if (btnNum == 2) {
                  // console.log("您点击了鼠标右键！");

                  obj.answer = 1;
                  if (_this.questions[_this.quesArr[_this.quesEq]].direction == 'right') {
                    _this.answer++;
                    obj.right_answer = 4;
                  } else {
                    obj.right_answer = 1;
                    _this.errorClick = 1;
                    _this.errorTip = '回答错误，双击鼠标左键继续';
                    $('.info-arrow').hide();
                    // return false;
                  }
                }
                _this.answers.push(obj);

                if (_this.quesEq == _this.arrLength - 1) {
                  _this.endTime = new Date().getTime();//结束时间
                  _this.time = Number(_this.endTime) - Number(_this.startTime);
                  _this.info_time = Number(_this.endTime) - Number(_this.startTime);
                  _this.info_correct_rate = _this.answer / _this.arrLength;
                  _this.info_efficiency = _this.info_time / _this.info_correct_rate;
                  if (_this.type == 'test') {
                    // console.log('test');
                    _this.$router.push('/shengyaceping/rzqn/success/1?type=test')
                  } else {
                    // console.log('test2');
                    _this.submit();
                  }
                }

                if (_this.quesEq < _this.arrLength - 1) {
                  _this.tempTimeStart = new Date().getTime();
                  _this.quesEq++;
                }

                $(_this.questions).each(function (i, val) {
                  val.show = false;
                });

                _this.questions[_this.quesArr[_this.quesEq]].show = true;
              } else {
                if (_this.type == 'test') {
                  // console.log('test');
                  _this.$router.push('/shengyaceping/rzqn/success/1?type=test')
                } else {
                  // console.log('test2');
                  _this.submit();
                }
              }
            }
          }, 250);
        }
      },

      /**
       * 双击，继续答题
       */
      answerDblClick: function (e) {
        var _this = this;
        clearTimeout(this.timeFn);
        // console.log('双击事件');

        var arrowIndex = $('.info-arrow.current').css('z-index'); // 箭头层级，当前是否在显示
        if (_this.errorClick == 0) {
          _this.errorClick = 1;
          _this.errorTip = '抢时，双击鼠标左键继续';
          $('.info-arrow').hide();
          return false;
        }

        this.errorClick = 0;
        _this.tempTimeStart = new Date().getTime();
        $('.info-arrow').show();
        // this.quesEq++;
      },

      /**
       * 提交
       */
      submit: function () {
          let _this=this;
        this.$ajax.post("/api/result/cognition/info/add", {
            time: this.time,
            answers: JSON.stringify(this.answers),
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
            // console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              _this.saveNode(2, 21);
              _this.$router.push('/shengyaceping/rzqn/success/1')
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

<style>
  .layer {
    top: 120px;
  }
</style>

<style>
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
