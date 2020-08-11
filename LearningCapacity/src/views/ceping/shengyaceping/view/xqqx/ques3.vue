<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <xqqxNav></xqqxNav>
      <div class="d-relative test_detail test_3">
        <div class="radio_box ques-item" v-for="(question,index) in questions" v-if="index+1==curIndex" :paper="question.paper"
             :cid="question.id">
          <h4 class="title">{{question.detail}}</h4>
          <div class="formbox clearfix">
            <div class="q-answer-ani2">

              <div class="answer-item" score="1">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  完全不符合
                </div>
              </div>

              <div class="answer-item" score="2">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  不太符合
                </div>
              </div>

              <div class="answer-item" score="3">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  一般
                </div>
              </div>

              <div class="answer-item" score="4">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  比较符合
                </div>
              </div>

              <div class="answer-item" score="5">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  完全符合
                </div>
              </div>

            </div>
            <div class="page">
              <em class="col_3">{{curIndex}} </em>/{{total}}
            </div>
          </div>
        </div>
        <tip></tip>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xqqx/ques-bg.png" alt="">-->
    <!--<xqqxNav></xqqxNav>-->
    <!--<div class="evalu-part">-->
      <!--<img src="../../assets/xqqx/part.png">-->
    <!--</div>-->
    <!--&lt;!&ndash;<div class="subject-classes">&ndash;&gt;-->
    <!--&lt;!&ndash;<ul>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==1}" cid="1">语文</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==2}" cid="2">数学</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==3}" cid="3">英语</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==4}" cid="4">物理</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==5}" cid="5">化学</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==6}" cid="6">生物</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==7}" cid="7">历史</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==8}" cid="8">政治</li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li :class="{active:subject==9}" cid="9">地理</li>&ndash;&gt;-->
    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--<div class="ques-wrapper">-->
      <!--<div class="ques-container">-->

        <!--<div class="ques-answer">-->
          <!--<div class="ques-item" v-for="(question,index) in questions" v-if="index+1==curIndex" :paper="question.paper"-->
               <!--:cid="question.id">-->
            <!--<div class="q-title">{{question.detail}}</div>-->
            <!--<div class="q-answer q-answer-ani2">-->
              <!--<ul>-->
                <!--<li @click="answerClick($event)" class="answer-item" score="1">-->
                  <!--<label>完全不符合</label>-->
                <!--</li>-->
                <!--<li @click="answerClick($event)" class="answer-item" score="2">-->
                  <!--<label>不太符合</label>-->
                <!--</li>-->
                <!--<li @click="answerClick($event)" class="answer-item" score="3">-->
                  <!--<label>一般</label>-->
                <!--</li>-->
                <!--<li @click="answerClick($event)" class="answer-item" score="4">-->
                  <!--<label>比较符合</label>-->
                <!--</li>-->
                <!--<li @click="answerClick($event)" class="answer-item" score="5">-->
                  <!--<label>完全符合</label>-->
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
  import xqqxNav from '../../../../../components/xqqx.vue';
  import tip from '../../../../../components/tip.vue';

  export default {
    data() {
      return {
        subject: 1,
        total: '',
        curIndex: '1',
        questions: '',
        questions1: [],
        questions2: [],
        questions3: [],
        questions4: [],
        questions5: [],
        questions6: [],
        questions7: [],
        questions8: [],
        questions9: [],
        score: '1',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: ''
      }
    },
    components: {xqqxNav, tip},
    mounted() {
      this.quesList();
      $('.test_menu .item').eq(0).addClass('item_3');
    },
    updated() {
    },
    methods: {
      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
      },
      /**
       * 获取试题列表
       */
      quesList: function () {
        this.$ajax.post("/api/test/hobby/interest/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              this.total = data.result.length;
              this.questions = data.result;
//              this.questions.sort(function (a, b) {
//                return a.paper - b.paper;
//              })
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
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
        setTimeout(function () {
          _this.subject = $('.ques-item').attr('paper');
          console.log(_this.subject);
        }, 100)
        $(e.target).closest('.answer-item').addClass('active');
        var answer = $(e.target).closest('.answer-item').attr('score');
        var paper = $(e.target).closest('.ques-item').attr('paper');
        var question_id = $(e.target).closest('.ques-item').attr('cid');

        if (this.answers.length > 0) {
          if (question_id == this.answers[this.answers.length - 1].question_id) {
            console.log('重复点击了')
            return false;
          }
        }

        this.answers.push({
          question_id: question_id,
          paper: paper,
          answer: answer
        })
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
          console.log('结束测试');
          this.bar = 100;
          this.endTime = new Date().getTime();//结束时间
          this.time = Number(this.endTime) - Number(this.startTime);
          this.submit();
        }

      },

      /**
       * 提交
       */
      submit: function () {

        this.$ajax.post("/api/result/hobby/interest/compute", {
            time: this.time,
            answers: JSON.stringify(this.answers),
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
//              this.layerMsg('测试成功!')
              this.saveNode(3, 4);
              this.$router.push('/shengyaceping/xqqx/success/3')
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );
      },
    }

  }
</script>

