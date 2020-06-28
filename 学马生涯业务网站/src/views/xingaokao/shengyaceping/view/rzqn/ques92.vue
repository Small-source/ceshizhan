<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing test_2">

        <div class="timebox fr" v-if="tip==0">
          剩余时间：
          <div class="time">
            {{timeTip}}
          </div>
        </div>

        <div class="ques-container box d-relative" style="overflow: visible">

          <div v-if="subject==2" class="d-relative ques-answer ques-math2-answer">
            <div class="ques-item" v-for="(question,index) in questionsB" v-if="index==curIndexB" :cid="question.id">
              <div class="q-title q-shu-title">{{question.detail}}</div>
              <div class="q-answer q-shu2-answer">图中？处应填数字<input class="partBAnswer" type="text" readonly></div>
            </div>
            <div class="math-keyword">
              <span @click="answerSelect(1)">1</span>
              <span @click="answerSelect(2)">2</span>
              <span @click="answerSelect(3)">3</span>
              <span @click="answerClickB($event)">确定</span>
              <span @click="answerSelect(4)">4</span>
              <span @click="answerSelect(5)">5</span>
              <span @click="answerSelect(6)">6</span>
              <span @click="answerDelete($event)">回退</span>
              <span @click="answerSelect(7)">7</span>
              <span @click="answerSelect(8)">8</span>
              <span @click="answerSelect(9)">9</span><br>
              <span @click="answerSelect('-')">-</span>
              <span @click="answerSelect(0)">0</span>
              <span @click="answerSelect('/')">/</span>
            </div>
            <!--<div class="bottom next test-confirm clearfix">-->
            <!--<a href="javascript:;" class="btn btn_start" v-if="tip==0" @click="answerClickB($event)">确定</a>-->
            <!--</div>-->
            <!--<img class="confirm" v-if="tip==0" src="../../assets/rzqn/confirm.png" @click="answerClickB($event)" alt="">-->
          </div>

          <div class="box" v-if="tip==1" @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>
        <div class="page">
          <em class="col_2">{{curIndexB+1}} </em>/{{totalB}}
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img v-if="subject==1" src="../../assets/rzqn/parta1.png">-->
  <!--<img v-if="subject==2" src="../../assets/rzqn/parta2.png">-->
  <!--<img v-if="subject==2" src="../../assets/rzqn/partb1.png">-->
  <!--<img v-if="subject==1" src="../../assets/rzqn/partb2.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper">-->
  <!--<div class="ques-container">-->

  <!--<div v-if="subject==1" class="ques-answer">-->
  <!--<div class="ques-item" v-for="(question,index) in questionsA" v-if="index==curIndexA" :cid="question.id">-->
  <!--<div class="q-title q-shu-title">{{question.detail}}</div>-->
  <!--<div class="q-answer q-shu1-answer">-->
  <!--<img src="../../assets/rzqn/281.png" answer=">" @click="answerClickA($event)" alt="">-->
  <!--<img src="../../assets/rzqn/291.png" answer="=" @click="answerClickA($event)" alt="">-->
  <!--<img src="../../assets/rzqn/301.png" answer="<" @click="answerClickA($event)" alt="">-->
  <!--</div>-->
  <!--</div>-->

  <!--</div>-->

  <!--<div v-if="subject==2" class="d-relative ques-answer ques-math2-answer">-->
  <!--<div class="ques-item" v-for="(question,index) in questionsB" v-if="index==curIndexB" :cid="question.id">-->
  <!--<div class="q-title q-shu-title">{{question.detail}}</div>-->
  <!--<div class="q-answer q-shu2-answer">图中？处应填数字<input class="partBAnswer" type="text"></div>-->
  <!--</div>-->
  <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
  <!--<img class="confirm" v-if="tip==0" src="../../assets/rzqn/confirm.png" @click="answerClickB($event)" alt="">-->
  <!--</div>-->
  <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
  <!--</div>-->
  <!--<div class="ques-progress">-->
  <!--<div class="seq-wrapper pull-right">题号:{{curIndexB+1}}/{{totalB}}</div>-->
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
        subject: 2,
        questionsA: [],
        questionsB: [],
        answersA: [],
        answersB: [],
        curIndexA: 0,
        curIndexB: 0,
        timeA: '',
        tempTime: '',
        timeB: '',
        startTimeA: '',
        startTimeB: '',
        endTimeA: '',
        endTimeB: '',
        totalA: '',
        totalB: '',
        leftTime: 90,
        timeTip: '1:30',
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTimeB = new Date().getTime();
      this.tempTime = new Date().getTime();
      // this.quesListA();
      this.quesListB();
      $('.test_menu .item').eq(8).addClass('item_2');
    },
    updated() {
//      $('input.partBAnswer').focus();
    },
    methods: {
      clickStart: function () {
        this.tempTime = new Date().getTime();
        this.tip = 0;
        this.clockStart();
      },
      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
      },

      // 开始记时
      clockStart: function () {
        var _this = this;
        this.t=setInterval(function () {
          if (_this.leftTime > 0) {
            _this.leftTime--;
            _this.secondToMin(_this.leftTime);
          } else if (_this.leftTime == 0) {
            _this.answerClickB('auto');
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

      /**
       * 获取试题列表
       */
      quesListB: function () {
        this.$ajax.post("/api/test/cognition/mathb/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              this.totalB = data.result.length;
              this.questionsB = data.result;
              setTimeout(function () {
                $('input.partBAnswer').focus();
              }, 1000)
            } else {
              this.layerMsg(data.msg);
            }
          }.bind(this),
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }.bind(this)
        );
      },

      /**
       * 选择数字
       */
      answerSelect: function (value) {
        var answer = $('.partBAnswer').val();
        answer = answer + value;
        $('.partBAnswer').val(answer);
      },

      /**
       * 键盘回退
       */
      answerDelete: function (e) {
        var answer = $('.partBAnswer').val();
        var subLength = answer.length - 1;
        answer = answer.substring(0, subLength);
        $('.partBAnswer').val(answer);
      },

      /**
       * 答题 Part B
       */
      answerClickB: function (e) {
        var answer = $('.partBAnswer').val();
        if (e != 'auto' && answer == '') {
          this.layerMsg('请填写答案!');
          return false;
        }
        var question_id;
        if (e != 'auto') {
          question_id = $(e.target).closest('.ques-math2-answer').find('.ques-item').attr('cid');
        } else {
          question_id = $('.ques-item').attr('cid');
        }

        var time = Number(new Date().getTime()) - Number(this.tempTime);
        console.log(answer);
        console.log(question_id);
        this.answersB.push({
          question_id: question_id,
          time: time,
          answer: answer
        })
        this.tempTime = new Date().getTime();
        if (this.curIndexB + 1 < this.totalB) {
          console.log('测试进行中')
          this.curIndexB++;
            clearInterval(this.t);
          this.leftTime = 90;
          this.timeTip = '1:30';
          this.clockStart();
          this.bar = Number(this.curIndexB) / Number(this.totalB) * 100;
        } else {
            clearInterval(this.t)
           this.t=null;
          this.endTimeB = new Date().getTime();//结束时间
          this.timeB = Number(this.endTimeB) - Number(this.startTimeB);
          this.submitB();
        }


      },

      /**
       * 提交 Part B
       */
      submitB: function () {
        this.$ajax.post("/api/result/cognition/mathb/compute", {
            time: this.timeB,
            answers: JSON.stringify(this.answersB),
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
//              this.layerMsg('测试成功!');
              this.saveNode(2, 10);
              this.$router.push('/shengyaceping/rzqn/success/92')
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

