<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="d-relative test_detail test_2">
        <div class="radio_box ques-item" style="margin-bottom: 60px" v-for="(question,index) in questions" v-if="index==curIndex" :cid="question.id">
          <h4 class="title">{{question.detail}}</h4>
          <div class="formbox clearfix">
            <div class="q-answer-ani2">
              <div class="answer-item" answer="1">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  A 是
                </div>
              </div>

              <div class="answer-item" answer="0">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  B 否
                </div>
              </div>

            </div>
            <div class="page">
              <em class="col_2">{{curIndex+1}} </em>/{{total}}
            </div>
          </div>
        </div>
        <!--<img class="confirm" v-if="tip==0" src="../../assets/rzqn/confirm.png" @click="answerClick($event)" alt="">-->
        <div class="box" v-if="tip==1" @click="clickStart">
          <em class="icon part_start"></em>
          <div class="btngroup">
            <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<img src="../../assets/rzqn/parta1.png">-->
    <!--</div>-->
    <!--<div class="ques-wrapper">-->
      <!--<div class="ques-container">-->
        <!--<div class="ques-answer ques-math2-answer">-->
          <!--<div class="ques-item" v-for="(question,index) in questions" v-if="index==curIndex" :cid="question.id">-->
            <!--<div class="q-title">{{question.detail}}</div>-->
            <!--<div class="q-answer">-->
              <!--<ul>-->
                <!--<li class="answer-item" @click="answerSelect($event)" answer="1">-->
                  <!--A 是-->
                <!--</li>-->
                <!--<li class="answer-item" @click="answerSelect($event)" answer="0">-->
                  <!--B 否-->
                <!--</li>-->

              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
          <!--<img class="confirm" v-if="tip==0" src="../../assets/rzqn/confirm.png" @click="answerClick($event)" alt="">-->

        <!--</div>-->
        <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
      <!--</div>-->
      <!--<div class="ques-progress">-->
        <!--<div class="seq-wrapper pull-right">题号:{{curIndex+1}}/{{total}}</div>-->
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
        total: '',
        curIndex: 0,
        questions: '',
        score: '1',
        answers: [],
        bar: 0,
        time: '',
        startTime: '',
        endTime: '',
        tip: 1,
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.quesList();
      $('.test_menu .item').eq(10).addClass('item_2');
    },
    updated() {
    },
    methods: {
      clickStart: function () {
        this.tip = 0
      },
      /**
       * 获取试题列表
       */
      quesList: function () {
        this.$ajax.post("/api/test/cognition/interpersonal/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.total = data.result.length;
              this.questions = data.result;
            } else {
              this.layerMsg(data.msg);
            }
          }.bind(this),
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }.bind(this)
        );
      },

//      answerSelect: function (e) {
//        $(e.target).closest('.ques-item').find('.layui-unselect').removeClass('layui-form-radioed');
//        $(e.target).closest('.ques-item').find('.layui-icon').removeClass('layui-anim-scaleSpring');
//        $(e.target).closest('.ques-item').find('.layui-icon').text('');
//        $('.answer-item').removeClass('active');
//        $(e.target).closest('.layui-unselect').addClass('layui-form-radioed');
//        $(e.target).closest('.layui-unselect').find('.layui-icon').addClass('layui-anim-scaleSpring');
//        $(e.target).closest('.layui-unselect').find('.layui-icon').text('');
//        $(e.target).closest('.answer-item').addClass('active');
//      },

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

        var answer = $(e.target).closest('.answer-item').attr('answer');
        var question_id = $(e.target).closest('.ques-item').attr('cid');

        if (this.answers.length > 0) {
          if (question_id == this.answers[this.answers.length - 1].question_id) {
            console.log('重复点击了')
            return false;
          }
        }

        // console.log(answer);
        // console.log(question_id);
        this.answers.push({
          question_id: question_id,
          answer: answer
        })
        if (this.curIndex == 0) {
          this.startTime = new Date().getTime();
        }
        if (this.curIndex + 1 < this.total) {
          console.log('测试进行中')
          this.bar = Number(this.curIndex) / Number(this.total) * 100;
          setTimeout(function () {
            _this.curIndex++;
          }, 300)
        } else {
          console.log('结束测试')
          this.bar = Number(this.curIndex + 1) / Number(this.total) * 100;
          this.endTime = new Date().getTime();//结束时间
          this.time = Number(this.endTime) - Number(this.startTime);
          this.submit();
        }
      },

      /**
       * 提交
       */
      submit: function () {

        this.$ajax.post("/api/result/cognition/interpersonal/compute", {
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
//              this.layerMsg('测试成功!')
              this.saveNode(2, 121);
              this.$router.push('/shengyaceping/rzqn/success/11')
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
  .red {
    color: red
  }
</style>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
  img.confirm {
    display: block;
    margin: 0 auto;
  }
</style>
