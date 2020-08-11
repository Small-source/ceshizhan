<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="ques-wrapper test_detail test_detail_ing test_2">
        <div class="ques-container box d-relative">
          <div class="ques-answer ques-biao-answer">
            <div :class="index==curIndex ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"
                 v-for="(question,index) in questions" :paper="question.paper"
                 :cid="question.id">
              <div class="q-title">根据所给的简单图形，在复杂图形中找到的与其大小、比例和指向相同的图形：</div>
              <div class="q-title q-biao-title">
                <img :src="question.img" alt="">
                <p>（样图）</p>
              </div>
              <div class="q-answer q-biao-answer q-diy-answer">
                <ul>
                  <li class="answer-item yin-answer-item"
                      v-for="(opt,index) in question.question_options"
                      :answer="opt.opt_order" @click="answerSelect($event)">
                    <img :src="opt.opt_img" alt="">
                    <div class="group">
                      <div class="layui-unselect layui-form-radio">
                        <i class="layui-anim layui-icon"></i>
                      </div>
                      {{index+1}}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
          </div>
          <div class="bottom next test-confirm clearfix">
            <a href="javascript:;" class="btn btn_start" v-if="tip==0" @click="answerClick($event)">确定</a>
          </div>
          <div class="box" v-if="tip==1" @click="clickStart">
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
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/rzqn/parta1.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper">-->
  <!--<div class="ques-container">-->
  <!--<div class="ques-answer ques-biao-answer">-->
  <!--<div :class="index==curIndex ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"-->
  <!--v-for="(question,index) in questions" :paper="question.paper"-->
  <!--:cid="question.id">-->
  <!--<div class="q-title">根据所给的简单图形，在复杂图形中找到的与其大小、比例和指向相同的图形：</div>-->
  <!--<div class="q-title q-biao-title">-->
  <!--<img :src="question.img" alt="">-->
  <!--<p>（样图）</p>-->
  <!--</div>-->
  <!--<div class="q-answer q-biao-answer q-diy-answer">-->
  <!--<ul>-->
  <!--<li class="answer-item" @click="answerClick($event)" v-for="(opt,index) in question.question_options"-->
  <!--:answer="opt.opt_order">-->
  <!--<img :src="opt.opt_img" alt="">-->
  <!--<label class="block-label">{{index+1}}</label>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
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
        total: 0,
        curIndex: 0,
        questions: '',
        score: '1',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        tempTime: ''
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTime = new Date().getTime();
      this.quesList();
      $('.test_menu .item').eq(9).addClass('item_2');
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
      quesList: function () {
        this.$ajax.post("/api/test/cognition/graph/list", {emulateJSON: true}).then(
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

        var time;
//        if (this.curIndex == 0) {
//          time = Number(new Date().getTime()) - Number(this.startTime);
//        } else {
        time = Number(new Date().getTime()) - Number(this.tempTime);
//        }
        this.answers.push({
          question_id: question_id,
          answer: answer,
          time: time
        })
        this.tempTime = new Date().getTime();
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

        this.$ajax.post("/api/result/cognition/graph/compute", {
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
              this.saveNode(1, 1);
              this.$router.push('/shengyaceping/rzqn/success/13')
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
