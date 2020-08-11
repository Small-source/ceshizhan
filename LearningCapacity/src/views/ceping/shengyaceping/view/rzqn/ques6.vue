<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing test_2">
        <div class="ques-container box d-relative" style="overflow: visible">
          <div class="ques-answer ques-biao-answer ques-math2-answer">
            <!--<div class="ques-item" v-for="(question,index) in questions" v-if="index==curIndex" :paper="question.paper"-->
            <!--:cid="question.id">-->
            <div :class="index==curIndex ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"
                 v-for="(question,index) in questions" :paper="question.paper" :cid="question.id">
              <div class="q-title biao-title">
                <!--根据大图形中的符号或图案的规律，选择适当的图案填入大图形的空缺中。-->
              </div>
              <div class="q-title q-biao-title q-luo-title">
                <img :src="question.img" alt="">
                <!--<p>（样图）</p>-->
              </div>
              <div class="q-answer q-biao-answer q-luo-answer">
                <ul>
                  <li class="answer-item yin-answer-item" @click="answerSelect($event)" v-for="opt in question.question_options"
                      :answer="opt.opt_order">
                    <div class="group">
                      <div class="layui-unselect layui-form-radio" @click="answerSelect($event)">
                        <i class="layui-anim layui-icon"></i>
                      </div>
                      {{opt.opt_order}}
                    </div>
                    <img :src="opt.opt_img" alt="">
                  </li>
                </ul>
              </div>
              <div class="bottom next clearfix" style="position: absolute;bottom: 20px;width: 100%;">
                <a href="javascript:;" style="margin:0 auto;" class="btn btn_start" v-if="tip==0" @click="answerClick($event)">确定</a>
              </div>
            </div>
            <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->

            <!--<img class="confirm" v-if="tip==0" src="../../assets/rzqn/confirm.png" @click="answerClick($event)" alt="">-->
          </div>

          <div class="box" v-if="tip==1" @click="clickStart" >
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>

        <div class="page">
          <em class="col_2">{{curIndex+1}} </em>/{{total}}
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" style="min-height: 1000px" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/rzqn/parta1.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper">-->
  <!--<div class="ques-container">-->
  <!--<div class="ques-answer ques-biao-answer ques-math2-answer">-->
  <!--&lt;!&ndash;<div class="ques-item" v-for="(question,index) in questions" v-if="index==curIndex" :paper="question.paper"&ndash;&gt;-->
  <!--&lt;!&ndash;:cid="question.id">&ndash;&gt;-->
  <!--<div :class="index==curIndex ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"-->
  <!--v-for="(question,index) in questions" :paper="question.paper" :cid="question.id">-->
  <!--<div class="q-title biao-title">-->
  <!--&lt;!&ndash;根据大图形中的符号或图案的规律，选择适当的图案填入大图形的空缺中。&ndash;&gt;-->
  <!--</div>-->
  <!--<div class="q-title q-biao-title q-luo-title">-->
  <!--<img :src="question.img" alt="">-->
  <!--&lt;!&ndash;<p>（样图）</p>&ndash;&gt;-->
  <!--</div>-->
  <!--<div class="q-answer q-biao-answer q-luo-answer">-->
  <!--<ul>-->
  <!--<li class="answer-item" @click="answerSelect($event)" v-for="opt in question.question_options"-->
  <!--:answer="opt.opt_order">-->
  <!--<label>{{opt.opt_order}}</label>-->
  <!--<img :src="opt.opt_img" alt="">-->
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
        tip: 1,
        total: '',
        curIndex: 0,
        questions: '',
        score: '1',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: ''
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTime = new Date().getTime();
      this.quesList();
      $('.test_menu .item').eq(5).addClass('item_2');
    },
    updated() {
    },
    methods: {
      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
      },

      clickStart: function () {
        this.tip = 0
      },

      /**
       * 获取试题列表
       */
      quesList: function () {
        this.$ajax.post("/api/test/cognition/logic/list", {emulateJSON: true}).then(
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
        $(e.target).closest('.ques-item').find('.layui-unselect').removeClass('layui-form-radioed');
        $(e.target).closest('.ques-item').find('.layui-icon').removeClass('layui-anim-scaleSpring');
        $(e.target).closest('.ques-item').find('.layui-icon').text('');
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
        // var answer = $(e.target).closest('.answer-item').attr('answer');
        //var question_id = $(e.target).closest('.ques-item').attr('cid');
        this.answers.push({
          question_id: question_id,
          answer: answer
        })
        if (this.curIndex + 1 < this.total) {
          console.log('测试进行中')
          this.curIndex++;
          $('.answer-item').removeClass('active');
          this.bar = Number(this.curIndex) / Number(this.total) * 100;
        } else {
          this.bar = Number(this.curIndex + 1) / Number(this.total) * 100;
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

        this.$ajax.post("/api/result/cognition/logic/compute", {
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
              this.saveNode(2, 141);
              this.$router.push('/shengyaceping/rzqn/success/6')
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

  .biao-title {
    font-size: 20px !important;
  }
</style>
