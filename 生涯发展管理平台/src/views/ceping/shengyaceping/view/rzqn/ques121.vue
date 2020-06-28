<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing test_2">
        <div class="ques-container box d-relative">
          <div v-if="subject==1" class="ques-answer ques-biao-answer">
            <div :class="index==curIndexA ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"
                 v-for="(question,index) in questionsA" :cid="question.id">
              <div class="q-title q-biao-title" style="margin-top: 100px;">
                <img :src="question.img" alt="">
                <p>（样图）</p>
              </div>
              <div class="q-answer q-biao-answer q-diy-answer q-art-answer">

                <div class="art1-answer">
                  <div class="answer-item yin-answer-item" @click="answerSelect($event)" v-for="(opt,index) in question.question_options"
                     :answer="opt.opt_order">
                    <div class="group">
                      <div class="layui-unselect layui-form-radio">
                        <i class="layui-anim layui-icon"></i>
                      </div>
                      <span v-if="index==0">A：</span>
                      <span v-if="index==1">B：</span>
                      <span v-if="index==2">C：</span>
                      <span v-if="index==3">D：</span>
                      {{opt.opt_txt}}</div>
                    </div>

                </div>
              </div>
            </div>
            <div class="box" v-if="tip==1" @click="clickStart">
              <em class="icon part_start"></em>
              <div class="btngroup">
                <a href="javascript:;" @click="clickStart" class="btn btn_start">点击鼠标开始测试</a>
              </div>
            </div>
          </div>

          <div class="bottom next test-confirm clearfix">
            <a href="javascript:;" class="btn btn_start" v-if="tip==0" @click="answerClickA($event)">确定</a>
          </div>

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
      <!--<img v-if="subject!==1" src="../../assets/rzqn/parta2.png">-->
      <!--<img v-if="subject==2" src="../../assets/rzqn/partb1.png">-->
      <!--<img v-if="subject!==2" src="../../assets/rzqn/partb2.png">-->
      <!--<img v-if="subject==3" src="../../assets/rzqn/partc1.png">-->
      <!--<img v-if="subject!==3" src="../../assets/rzqn/partc2.png">-->
    <!--</div>-->
    <!--<div class="ques-wrapper">-->
      <!--<div class="ques-container">-->

        <!--<div v-if="subject==1" class="ques-answer ques-biao-answer">-->
          <!--<div :class="index==curIndexA ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"-->
               <!--v-for="(question,index) in questionsA" :cid="question.id">-->
            <!--<div class="q-title q-biao-title">-->
              <!--<img :src="question.img" alt="">-->
              <!--<p>（样图）</p>-->
            <!--</div>-->
            <!--<div class="q-answer q-biao-answer q-diy-answer q-art-answer">-->

              <!--<div class="art1-answer">-->
                <!--<p class="answer-item" @click="answerClickA($event)" v-for="(opt,index) in question.question_options"-->
                   <!--:answer="opt.opt_order">-->
                  <!--<span v-if="index==0">A：</span>-->
                  <!--<span v-if="index==1">B：</span>-->
                  <!--<span v-if="index==2">C：</span>-->
                  <!--<span v-if="index==3">D：</span>-->
                  <!--{{opt.opt_txt}}</p>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<tip></tip>-->
        <!--</div>-->

        <!--<div v-if="subject==2" class="d-relative ques-answer">-->
          <!--<div class="ques-item" v-for="(question,index) in questionsB" v-if="index==curIndexB" :cid="question.id">-->
            <!--<div class="q-title q-min-title">本小题没有时间限制</div>-->
            <!--<div class="q-art2-answer">-->
              <!--<ul>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
              <!--</ul>-->
              <!--<div class="right-answer" v-bind:style="{background: 'rgb('+question.detail+')'}"></div>-->
            <!--</div>-->
            <!--<div class="art2-opt">-->
              <!--<div class="art-opt" v-bind:style="{background: 'rgb('+question.question_options[0].opt_txt+')'}"-->
                   <!--:answer="question.question_options[0].opt_order" @click="answerClickB($event)"></div>-->
              <!--<div class="art-opt" v-bind:style="{background: 'rgb('+question.question_options[1].opt_txt+')'}"-->
                   <!--:answer="question.question_options[1].opt_order" @click="answerClickB($event)"></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div v-if="subject==3" class="ques-answer ques-biao-answer">-->
          <!--<div class="ques-item" v-for="(question,index) in questionsC" v-if="index==curIndexC" :cid="question.id">-->
            <!--<div class="q-title q-biao-title">-->
              <!--<img :src="question.img" alt="">-->
              <!--<p>（样图）</p>-->
            <!--</div>-->
            <!--<div class="q-answer q-biao-answer q-diy-answer">-->
              <!--<ul>-->
                <!--<li class="answer-item" @click="answerClickC($event)" v-for="(opt,index) in question.question_options"-->
                    <!--v-if="opt.opt_img" :answer="opt.opt_order">-->
                  <!--<img :src="opt.opt_img" alt="">-->
                  <!--<label v-if="index==0">A</label>-->
                  <!--<label v-if="index==1">B</label>-->
                  <!--<label v-if="index==2">C</label>-->
                  <!--<label v-if="index==3">D</label>-->
                  <!--<label v-if="index==4">E</label>-->
                  <!--<label v-if="index==5">F</label>-->
                  <!--<label v-if="index==6">G</label>-->
                  <!--<label v-if="index==7">H</label>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
      <!--</div>-->

      <!--<div class="ques-progress" v-if="subject==1">-->
        <!--<div class="seq-wrapper pull-right">题号:{{curIndexA+1}}/{{totalA}}</div>-->
        <!--<div class="pull-right" style="margin-right:20px">本小题没有时间限制</div>-->
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
        subject: 1,
        totalA: '',
        totalB: '',
        totalC: '',
        curIndexA: 0,
        curIndexB: 0,
        curIndexC: 0,
        questionsA: '',
        questionsB: '',
        questionsC: '',
        score: '1',
        answersA: [],
        answersB: [],
        answersC: [],
        bar: '',
        timeA: '',
        timeB: '',
        timeC: '',
        startTimeA: '',
        startTimeB: '',
        startTimeC: '',
        endTimeA: '',
        endTimeB: '',
        endTimeC: '',
        rightColor: '#006633',
        colorA: '#006600',
        colorB: '#006633',
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTimeA = new Date().getTime();
      this.quesListA();
      this.quesListB();
      this.quesListC();
      $('.test_menu .item').eq(11).addClass('item_2');
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

      answerSelect: function (e) {
        $(e.target).closest('.q-answer').find('.layui-unselect').removeClass('layui-form-radioed');
        $(e.target).closest('.q-answer').find('.layui-icon').removeClass('layui-anim-scaleSpring');
        $(e.target).closest('.q-answer').find('.layui-icon').text('');
        $('.answer-item').removeClass('active');
        $(e.target).closest('.answer-item').find('.layui-unselect').addClass('layui-form-radioed');
        $(e.target).closest('.answer-item').find('.layui-icon').addClass('layui-anim-scaleSpring');
        $(e.target).closest('.answer-item').find('.layui-icon').text('');
        $(e.target).closest('.answer-item').addClass('active');
      },

      /**
       * 获取试题列表
       */
      quesListA: function () {
        this.$ajax.post("/api/test/cognition/arta/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
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

      /**
       * 答题 Part A
       */
      answerClickA: function (e) {

        var _this = this;
        if ($('.answer-item.active').length == 0) {
          this.layerMsg('请选择答案！');
          return false;
        }

        var answer = $('.answer-item.active').attr('answer');
        var question_id = $('.answer-item.active').closest('.ques-item').attr('cid');

        if (answer == 1) {
          answer = 'A';
        } else if (answer == 2) {
          answer = 'B'
        } else if (answer == 3) {
          answer = 'C'
        } else if (answer == 4) {
          answer = 'D'
        }
//        var question_id = $(e.target).closest('.ques-item').attr('cid');
        this.answersA.push({
          question_id: question_id,
          answer: answer
        })
        if (this.curIndexA + 1 < this.totalA) {
          console.log('测试进行中')
          this.curIndexA++;
          $('.answer-item').removeClass('active');
          this.bar = Number(this.curIndexA) / Number(this.totalA) * 100;
        } else {
          console.log('结束测试')
          this.endTimeA = new Date().getTime();//结束时间
          this.timeA = Number(this.endTimeA) - Number(this.startTimeA);
          this.submitA();
        }

      },

      /**
       * 提交
       */
      submitA: function () {

        this.$ajax.post("/api/result/cognition/arta/compute", {
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
              this.startTimeB = new Date().getTime();
              this.saveNode(2, 122);
              this.$router.push('/shengyaceping/rzqn/success/121')
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
       * 获取试题列表 PartB
       */
      quesListB: function () {
        this.$ajax.post("/api/test/cognition/artb/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
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
       * 答题
       */
      answerClickB: function (e) {
        var answer = $(e.target).attr('answer');
        var question_id = $(e.target).closest('.ques-item').attr('cid');
        var question_id = $(e.target).closest('.ques-item').attr('cid');
        if (answer == 1) {
          answer = 'A';
        } else if (answer == 2) {
          answer = 'B';
        }
        this.answersB.push({
          question_id: question_id,
          answer: answer
        })
        if (this.curIndexB + 1 < this.totalB) {
          console.log('测试进行中')
          this.curIndexB++;
        } else {
          console.log('结束测试')
          this.endTimeB = new Date().getTime();//结束时间
          this.timeB = Number(this.endTimeB) - Number(this.startTimeB);
          this.submitB();
        }
      },

      /**
       * 提交
       */
      submitB: function () {

        this.$ajax.post("/api/result/cognition/arta/compute", {
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
              this.subject = 3;
              this.startTimeC = new Date().getTime();
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
       * 获取试题列表 PartC
       */
      quesListC: function () {
        this.$ajax.post("/api/test/cognition/artc/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.totalC = data.result.length;
              this.questionsC = data.result;
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
       * 答题 Part C
       */
      answerClickC: function (e) {
        var answer = $(e.target).closest('.answer-item').attr('answer');
        var question_id = $(e.target).closest('.ques-item').attr('cid');
        if (answer == 1) {
          answer = 'A';
        } else if (answer == 2) {
          answer = 'B'
        } else if (answer == 3) {
          answer = 'C'
        } else if (answer == 4) {
          answer = 'D'
        } else if (answer == 5) {
          answer = 'E';
        } else if (answer == 6) {
          answer = 'F'
        } else if (answer == 7) {
          answer = 'G'
        } else if (answer == 8) {
          answer = 'H'
        }
        this.answersC.push({
          question_id: question_id,
          answer: answer
        })
        if (this.curIndexC + 1 < this.totalC) {
          console.log('测试进行中')
          this.curIndexC++;
        } else {
          console.log('结束测试')
          this.endTimeC = new Date().getTime();//结束时间
          this.timeC = Number(this.endTimeC) - Number(this.startTimeC);
          this.submitC();
        }

      },

      /**
       * 提交 Part C
       */
      submitC: function () {

        this.$ajax.post("/api/result/cognition/artc/compute", {
            time: this.timeC,
            answers: JSON.stringify(this.answersC),
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
              this.$router.push('/shengyaceping/rzqn/success/12')
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
