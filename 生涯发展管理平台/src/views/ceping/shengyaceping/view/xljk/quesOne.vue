<template>

  <div class="pc-page">
    <div class="test_main test_main_4">
      <xljkNav></xljkNav>
      <div class="d-relative test_detail test_4">
        <div class="radio_box ques-item" v-for="(question,index) in questions" v-if="index+1==curIndex"
             :paper="question.paper"
             :cid="question.id">
          <h4 class="title">{{question.detail}}</h4>
          <div class="formbox clearfix">
            <div class="q-answer-ani2">
              <div class="answer-item" v-for="answer in quesAnswers" :score="answer.score">
                <div class="group">
                  <div class="layui-unselect layui-form-radio" @click="answerClick($event)">
                    <i class="layui-anim layui-icon"></i>
                  </div>
                  {{answer.text}}
                </div>
              </div>
            </div>
            <div class="page">
              <em class="col_4">{{curIndex}} </em>/{{total}}
            </div>
          </div>
        </div>
        <tip></tip>
      </div>
    </div>
  </div>

</template>


<script>
  import xljkNav from '../../../../../components/xljk.vue';
  import tip from '../../../../../components/tip.vue';

  export default {
    data() {
      return {
        total: '',
        curIndex: '1',
        questions: '',
        score: '1',
        quesAnswers: [{
          score: 1,
          text: '没有'
        }, {
          score: 2,
          text: '很轻'
        }, {
          score: 3,
          text: '中等'
        }, {
          score: 4,
          text: '偏重'
        }, {
          score: 5,
          text: '严重'
        }],
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: ''
      }
    },
    mounted() {
      this.quesList();
      $('.test_menu .item').addClass('item_4');
    },
    updated() {
      console.log(this.bar);
    },
    components: {xljkNav, tip},
    methods: {
      /**
       * 获取试题列表
       */
      quesList: function () {
        this.$ajax.post("/api/test/mind/list", {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
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
            this.layerMsg('网络错误');
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
        // return false;
        var answer = $(e.target).closest('.answer-item').attr('score');
        var paper = $(e.target).closest('.ques-item').attr('paper');
        var question_id = $(e.target).closest('.ques-item').attr('cid');

        if (this.answers.length > 0) {
          if (question_id == this.answers[this.answers.length - 1].question_id) {
            console.log('重复点击了')
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
        console.log(this.answers);
        if (this.curIndex < this.total) {
          this.bar = Number(this.curIndex - 1) / Number(this.total) * 100;
          setTimeout(function () {
            _this.curIndex++;
          }, 300)
        } else {
          this.endTime = new Date().getTime();//结束时间
          this.time = Number(this.endTime) - Number(this.startTime);
          this.submit();
        }

      },

      /**
       * 提交
       */
      submit: function () {

        this.$ajax.post("/api/result/mind/compute", {
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
              this.markOver();
              if(localStorage.getItem("cardType")=="xuanke"){
                  this.$router.push('/zhinengxuanke/mubiaozhuanye')
              }else{
                  this.$router.push('/shengyaceping/xljk/success')
              }
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
