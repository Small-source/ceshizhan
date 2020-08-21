<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
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
</template>


<script>
  import Nav from '../../../components/learningEffectiveness.vue';
  import tip from '../../../components/tip.vue';

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
    components: {Nav, tip},
    mounted() {
      this.quesList();
      $('.test_menu .item').eq(1).addClass('item_2');
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
        this.$ajax.post(this.G_uri+"/test/mbti/list_mbti2", {emulateJSON: true},{
            headers: {
                "token": sessionStorage.getItem('token'),
            }}).then(
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
            this.layerMsg('网络错误');
          }.bind(this)
        );
      },

      /**
       * 获取测谎题
       */
      quesLieList: function () {
        var _this = this;
        this.$ajax.post(this.G_uri+"/test/polygraph/list", {paper: 2}, {emulateJSON: true, headers: {
                "token": sessionStorage.getItem('token'),
            }},
           ).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.total = this.total + data.result.length;
              // this.questions.push(data.result);
              $.each(data.result, function (index, val) {
                _this.questions.push(val);
              });
              this.questions.sort(this.randomSort)
              this.bar = Number(this.curIndex - 1) / Number(this.total) * 100;
              //console.log(this.total);
              //console.log(this.questions);
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
        if (this.curIndex == 1) {
          this.startTime = new Date().getTime();
        }
        if (this.curIndex < this.total) {
          console.log('测试进行中')
          this.bar = Number(this.curIndex - 1) / Number(this.total) * 100;
          setTimeout(function () {
            _this.curIndex++;
          }, 300)
          // console.log(this.curIndex);
          // console.log(this.total);
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

        this.$ajax.post(this.G_uri+"/result/mbti/mbti2/compute", {
            time: this.time,
            answers: JSON.stringify(this.answers),
            test_id:window.sessionStorage.getItem('testId')
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
                this.saveNode(3,3)
              this.$router.push('/learningAbility/LearningEffectiveness/success/2')
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
        this.$ajax.post(this.G_uri+"/result/polygraph/compute", {
            question_id: question_id,
            answer: answer,
            test_id:window.sessionStorage.getItem('testId')
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

