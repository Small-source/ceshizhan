<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="d-relative test_detail test_2">
        <div class="radio_box ques-item" style="margin-bottom: 60px" v-for="(question,index) in questions"
             v-if="index==curIndex"
             :cid="question.id">
          <h4 class="title">{{question.detail}}</h4>
          <div class="formbox clearfix">
            <div class="q-answer-ani2">
              <div class="answer-item" v-for="opt in question.question_options"
                   :answer="opt.opt_order" @click="answerSelect($event)">
                <div class="group cursor">
                  <div class="layui-unselect layui-form-radio" >
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  {{opt.opt_txt}}
                </div>
              </div>

            </div>
            <div class="page">
              <em class="col_2">{{curIndex+1}} </em>/{{total}}
            </div>
          </div>
        </div>
        <div class="bottom next test-confirm clearfix">
          <a href="javascript:;" class="btn btn_start" v-if="tip==0" @click="answerClick($event)">确定</a>
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

  <!--<div class="q-title">-->
  <!--{{question.detail}}-->
  <!--</div>-->
  <!--<div class="q-answer">-->
  <!--<ul>-->
  <!--<li class="answer-item" @click="answerSelect($event)" v-for="opt in question.question_options"-->
  <!--:answer="opt.opt_order">-->
  <!--<span>{{opt.opt_txt}}</span>-->
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
        total: '',
        curIndex: 0,
        questions: '',
        score: '1',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        tip: 1
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTime = new Date().getTime();
      this.quesList();
      $('.test_menu .item').eq(6).addClass('item_2');
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
        this.$ajax.post("/api/test/cognition/lang/list", {emulateJSON: true}).then(
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
            this.layerMsg('网络错误');
          }.bind(this)
        );
      },

      answerSelect: function (e) {
        $(e.target).closest('.q-answer-ani2').find('.layui-unselect').removeClass('layui-form-radioed');
        $(e.target).closest('.q-answer-ani2').find('.layui-icon').removeClass('layui-anim-scaleSpring');
        $(e.target).closest('.q-answer-ani2').find('.layui-icon').text('');
        $('.answer-item').removeClass('active');
        $(e.target).closest('.answer-item').find('.layui-unselect').addClass('layui-form-radioed');
        $(e.target).closest('.answer-item').find('.layui-icon').addClass('layui-anim-scaleSpring');
        $(e.target).closest('.answer-item').find('.layui-icon').text('');
        $(e.target).closest('.answer-item').addClass('active');
      },

      /**
       * 答题
       */
      answerClick: function (e) {
        var _this = this;
        if ($('.answer-item.active').length == 0) {
          this.layerMsg('请选择答案！');
          return false;
        }

        var answer = $('.answer-item.active').attr('answer');
        var question_id = $('.answer-item.active').closest('.ques-item').attr('cid');
        console.log(answer);
        console.log(question_id);
        if (answer == 1) {
          answer = 'A';
        } else if (answer == 2) {
          answer = 'B'
        } else if (answer == 3) {
          answer = 'C'
        } else if (answer == 4) {
          answer = 'D'
        }
        this.answers.push({
          question_id: question_id,
          answer: answer
        })
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

        this.$ajax.post("/api/result/cognition/lang/compute", {
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
              this.saveNode(2, 91);
              this.$router.push('/shengyaceping/rzqn/success/8')
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
