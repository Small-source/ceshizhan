<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing">
        <div class="ques-container box d-relative" style="overflow: visible">
          <div v-if="subject==1" class="ques-answer">
            <div class="ques-item" v-for="(question,index) in questionsA" v-if="index==curIndexA" :cid="question.id">
              <div class="q-title q-shu-title">{{question.detail}}</div>
              <div class="q-answer q-shu1-answer">
                <img src="../../../../../assets/rzqn/281.png" answer=">" @click="answerClickA($event)" alt="">
                <img src="../../../../../assets/rzqn/291.png" answer="=" @click="answerClickA($event)" alt="">
                <img src="../../../../../assets/rzqn/301.png" answer="<" @click="answerClickA($event)" alt="">
              </div>
            </div>
            <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
          </div>

          <div v-if="subject==2" class="d-relative ques-answer" @click="answerClickB($event)">
            <div class="ques-item" v-for="(question,index) in questionsB" v-if="index==curIndexB" :cid="question.id">
              <div class="q-title q-shu-title">{{question.detail}}</div>
              <div class="q-answer q-shu2-answer">图中？处应填数字<input class="partBAnswer" type="text"></div>
            </div>
          </div>
          <tip></tip>
        </div>
        <div class="page">
          <em class="col_2">{{curIndexA+1}} </em>/{{totalA}}
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
          <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
        <!--</div>-->

        <!--<div v-if="subject==2" class="d-relative ques-answer" @click="answerClickB($event)">-->
          <!--<div class="ques-item" v-for="(question,index) in questionsB" v-if="index==curIndexB" :cid="question.id">-->
            <!--<div class="q-title q-shu-title">{{question.detail}}</div>-->
            <!--<div class="q-answer q-shu2-answer">图中？处应填数字<input class="partBAnswer" type="text"></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
      <!--</div>-->
      <!--<div class="ques-progress">-->
        <!--<div class="seq-wrapper pull-right">题号:{{curIndexA+1}}/{{totalA}}</div>-->
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

  export default {
    data() {
      return {
        tip: 1,
        bar: '',
        subject: 1,
        questionsA: [],
        questionsB: [],
        answersA: [],
        answersB: [],
        curIndexA: 0,
        curIndexB: 0,
        timeA: '',
        timeB: '',
        startTimeA: '',
        tempTime: '',
        startTimeB: '',
        endTimeA: '',
        endTimeB: '',
        totalA: '',
        totalB: ''
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTimeA = new Date().getTime();
      this.tempTime = new Date().getTime();
      this.quesListA();
      // this.quesListB();
      $('.test_menu .item').eq(8).addClass('item_2');
    },
    updated() {
    },
    methods: {
      clickStart: function () {
        this.tempTime = new Date().getTime();
        this.tip = 0
      },
      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
      },

      /**
       * 获取试题列表
       */
      quesListA: function () {
        var _this = this, total;
        this.$ajax.post("/api/test/cognition/matha/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              this.totalA = data.result.length;
              this.questionsA = data.result;
            } else {
              this.layerMsg(data.msg);
            }
          }.bind(this),
          function (res) {
            this.layerMsg('网络错误');
          }.bind(this)
        );
      },

      quesListB: function () {
        this.$ajax.post("/api/test/cognition/mathb/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              this.totalB = data.result.length;
              this.questionsB = data.result;
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
       * 答题 Part A
       */
      answerClickA: function (e) {

        var answer = $(e.target).attr('answer');
        var question_id = $(e.target).closest('.ques-item').attr('cid');
        var time = Number(new Date().getTime()) - Number(this.tempTime);
        this.answersA.push({
          question_id: question_id,
          time: time,
          answer: answer
        });

        this.tempTime = new Date().getTime();

        if (this.curIndexA + 1 < this.totalA) {
          console.log('测试进行中')
          this.curIndexA++;
          this.bar = Number(this.curIndexA) / Number(this.totalA) * 100;
        } else {
          console.log('结束测试');
          this.endTimeA = new Date().getTime();//结束时间
          this.timeA = Number(this.endTimeA) - Number(this.startTimeA);
          this.submitA();
        }

      },

      /**
       * 提交 Part A
       */
      submitA: function () {
        this.$ajax.post("/api/result/cognition/matha/compute", {
            time: this.timeA,
            answers: JSON.stringify(this.answersA),
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
              // this.subject = 2;
              // this.startTimeB = new Date().getTime();
              this.saveNode(2, 92);
              this.$router.push({path: '/shengyaceping/rzqn/success/91'})
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
       * 答题 Part B
       */
      answerClickB: function (e) {
        var answer = $('.partBAnswer').val();
        if ($(e.target).closest('.q-shu2-answer').length == 0) {
          if (answer != '') {
            var question_id = $(e.target).closest('.ques-item').attr('cid');
            var time = Number(new Date().getTime()) - Number(this.startTimeB);
            this.answersB.push({
              question_id: question_id,
              time: time,
              answer: answer
            })
            if (this.curIndexB + 1 < this.totalB) {
              console.log('测试进行中')
              this.curIndexB++;
            } else {
              console.log('结束测试');
              this.endTimeB = new Date().getTime();//结束时间
              this.timeB = Number(this.endTimeB) - Number(this.startTimeB);
              this.submitB();
            }
          } else {
            this.layerMsg('请填写答案!');
          }
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
              this.$router.push('/shengyaceping/rzqn/success/9')
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

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
