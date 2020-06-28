<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <xgtxNav></xgtxNav>
      <div class="d-relative test_detail test_2">

        <div class="radio_box ques-item" v-for="(question,index) in questions" v-if="index+1==curIndex"
             :paper="question.paper"
             :cid="question.id">

          <h4 class="title">{{question.detail}}</h4>
          <div class="formbox clearfix">
            <div class="q-answer-ani2" v-if="question.question_options">
              <div class="answer-item" v-for="opt in question.question_options"
                   :order="opt.opt_order">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  <span v-if="opt.opt_order==1">A </span>
                  <span v-if="opt.opt_order==2">B </span>{{opt.opt_txt}}
                </div>
              </div>
            </div>
            <div class="q-answer-ani2" v-if="!question.question_options">
              <div class="answer-item lie-item" :order="0">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  A 是
                </div>
              </div>
              <div class="answer-item lie-item" :order="1">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  B 否
                </div>
              </div>
            </div>
          </div>

          <div class="page">
            <em class="col_2">{{curIndex}} </em>/{{total}}
          </div>
        </div>
        <tip></tip>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<xgtxNav></xgtxNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/xgtx/part.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper">-->
  <!--<div class="ques-container">-->
  <!--<div class="ques-answer">-->
  <!--<div class="ques-item" v-for="(question,index) in questions" v-if="index+1==curIndex" :paper="question.paper"-->
  <!--:cid="question.id">-->
  <!--<div class="q-title">{{question.detail}}</div>-->
  <!--<div class="q-answer q-answer-ani2" v-if="question.question_options">-->
  <!--<ul>-->
  <!--<li class="answer-item" @click="answerClick($event)" v-for="opt in question.question_options"-->
  <!--:order="opt.opt_order">-->
  <!--<span v-if="opt.opt_order==1">A </span>-->
  <!--<span v-if="opt.opt_order==2">B </span>{{opt.opt_txt}}-->
  <!--</li>-->
  <!--</ul>-->
  <!--</div>-->
  <!--<div class="q-answer q-answer-ani2" v-if="!question.question_options">-->
  <!--<ul>-->
  <!--<li class="answer-item lie-item" @click="answerClick($event)" :order="0">-->
  <!--<span>A 是</span>-->
  <!--</li>-->
  <!--<li class="answer-item lie-item" @click="answerClick($event)" :order="1">-->
  <!--<span>B 否</span>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</div>-->
  <!--</div>-->
  <!--<tip></tip>-->
  <!--</div>-->
  <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
  <!--</div>-->
  <!--<div class="ques-progress">-->
  <!--<div class="seq-wrapper pull-right">题号:{{curIndex}}/{{total}}</div>-->
  <!--</div>-->
  <!--<div class="copyright">-->
  <!--©版权声明：本作品著作权以及版权属于育铭天下，并受法律保护。-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>


<script>

  import xgtxNav from '../../../../../components/xgtx.vue';
  import tip from '../../../../../components/tip.vue';

  export default {
    data() {
      return {
        total: '',
        curIndex: '1',
        questions: [],
        score: '1',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: ''
      }
    },
    components: {xgtxNav, tip},
    mounted() {
      this.quesList();
      $('.test_menu .item').eq(0).addClass('item_2');
    },
    updated() {
    },
    methods: {
      /**
       * 数组随机排序
       */
      randomSort: function (a, b) {
        return Math.random() > 0.5 ? -1 : 1;
      },
      /**
       * 获取试题列表
       */
      quesList: function () {
        this.$ajax.post("/api/test/mbti/list_mbti1", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.total = data.result.length;
              this.questions = data.result;
              this.quesLieList();
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
       * 获取测谎题
       */
      quesLieList: function () {
        var _this = this;
        this.$ajax.post("/api/test/polygraph/list", {paper: 1}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              this.total = this.total + data.result.length;
              // this.questions.push(data.result);
              $.each(data.result, function (index, val) {
                _this.questions.push(val);
              });
              this.questions.sort(this.randomSort)
              this.bar = Number(this.curIndex - 1) / Number(this.total) * 100;
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
      answerClick: function (e) {
        var _this = this;
        $(e.target).closest('.ques-item').find('.layui-unselect').removeClass('layui-form-radioed');
        $(e.target).closest('.ques-item').find('.layui-icon').removeClass('layui-anim-scaleSpring');
        $(e.target).closest('.ques-item').find('.layui-icon').text('');
        $(e.target).closest('.layui-unselect').addClass('layui-form-radioed');
        $(e.target).closest('.layui-unselect').find('.layui-icon').addClass('layui-anim-scaleSpring');
        $(e.target).closest('.layui-unselect').find('.layui-icon').text('');

        var answer = $(e.target).closest('.answer-item').attr('order');
        var paper = $(e.target).closest('.ques-item').attr('paper');
        var question_id = $(e.target).closest('.ques-item').attr('cid');


        if (this.answers.length > 0) {
          if (question_id == this.answers[this.answers.length - 1].question_id) {
            if(this.curIndex>=this.total){
                this.endTime = new Date().getTime();//结束时间
                this.time = Number(this.endTime) - Number(this.startTime);
                this.submit();
                return false
            }
            return false;
          }
        }

        if ($(e.target).closest('.answer-item').hasClass('lie-item')) {
          this.submitLie(question_id, answer);
        } else {
          this.answers.push({
            question_id: question_id,
            paper: paper,
            answer: answer
          })
        }

        // console.log(this.answers);

        if (this.curIndex == 1) {
          this.startTime = new Date().getTime();
        }
        if (this.curIndex < this.total) {
          console.log('测试进行中')
          this.bar = Number(this.curIndex - 1) / Number(this.total) * 100;
          setTimeout(function () {
            _this.curIndex++;
          }, 300)
        } else {
          console.log('结束测试')
          this.endTime = new Date().getTime();//结束时间
          this.time = Number(this.endTime) - Number(this.startTime);
          this.submit();
        }
      },

      /**
       * 提交
       */
      submit: function () {
        this.$ajax.post("/api/result/mbti/mbti1/compute", {
            time: this.time,
            answers: JSON.stringify(this.answers),
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
              this.saveNode(1, 2);
              this.$router.push('/shengyaceping/xgtx/success/1')
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
       * 提交 测谎题
       */
      submitLie: function (question_id, answer) {
        this.$ajax.post("/api/result/polygraph/compute", {
            question_id: question_id,
            answer: answer,
          }, {
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
