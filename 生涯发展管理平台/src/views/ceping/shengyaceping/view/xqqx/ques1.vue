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
              <div class="answer-item" answer="0">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  A 是
                </div>
              </div>
              <div class="answer-item" answer="1">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  B 否
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

</template>


<script>
  import xqqxNav from '../../../../../components/xqqx.vue';
  import tip from '../../../../../components/tip.vue';

  export default {
    data() {
      return {
        total: '',
        curIndex: '1',
        questions: '',
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
      $('.test_menu .item').eq(0).addClass('item_3');
      this.quesList();
    },
    updated() {
    },
    methods: {
      /**
       * 获取试题列表
       */
      quesList: function () {
        this.$ajax.post("/api/test/hobby/holland/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            var data = res.data;
            if (data.code == 0) {
              this.total = data.result.length;
              this.questions = data.result;
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
        var answer = $(e.target).closest('.answer-item').attr('answer');
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

        this.$ajax.post("/api/result/hobby/holland/compute", {
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
              this.saveNode(3, 2);
              if(window.sessionStorage.tuance=='3'){
                  this.markOver();
              }
              this.$router.push('/shengyaceping/xqqx/success/1');
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

