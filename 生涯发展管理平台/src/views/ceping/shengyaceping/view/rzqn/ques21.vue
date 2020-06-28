<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing">
        <div class="ques-container box d-relative">
          <div v-if="subject==1" class="ques-answer ques-work-answer ques-work1-answer">
            <div class="work-ques">
              <div class="work-ques-wrapper">
                <div class="work-ques-item" v-for="num in expandNumber">
                  {{num}}
                </div>
              </div>

              <div class="line-wrapper">
                <div class="line" v-for="(i,index) in tempNumber"></div>
              </div>

            </div>
            <div class="work-keyword">
              <span @click="enter($event)">1</span>
              <span @click="enter($event)">2</span>
              <span @click="enter($event)">3</span>
              <span @click="enter($event)">4</span>
              <span @click="enter($event)">5</span>
              <span @click="enter($event)">6</span>
              <span @click="enter($event)">7</span>
              <span @click="enter($event)">8</span>
              <span @click="enter($event)">9</span>
              <span class="k-btn confirm" @click="answerClick">确定</span>
              <span @click="enter($event)">0</span>
              <span class="k-btn delete" @click="keyRollback">回退</span>

            </div>
            <!--<div class="ques-answer-tip" v-if="tip==1" @click="quesPartA">点击鼠标5，开始测试</div>-->
          </div>

          <div v-if="subject==2" class="d-relative ques-answer ques-work-answer" @mousedown="answerClick2($event)">
            <div class="work-ques">
              <span v-for="(num,index) in memoryNum" class="memoryBit" v-if="index==curIndex">{{num}}</span>
            </div>
            <div class="work-m-tip">
              <!--提示：请判断此数字是否与前第三个数字相同。-->
            </div>
          </div>

          <div class="box" v-if="tip==1" @click="quesPartA">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>
        <div class="page">
          <!--<em class="col_2">{{quesEq+1}} </em>/{{arrLength}}-->
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img v-if="subject==1" src="../../assets/rzqn/parta1.png">-->
  <!--<img v-if="subject==2" src="../../assets/rzqn/parta2.png">-->
  <!--<img v-if="subject==2" src="../../assets/rzqn/partb1.png">-->
  <!--<img v-if="subject==1" src="../../assets/rzqn/partb2.png">-->
  <!--</div>-->

  <!--<div class="ques-wrapper">-->
  <!--<div class="ques-container">-->

  <!--<div v-if="subject==1" class="ques-answer ques-work-answer">-->
  <!--<div class="work-ques">-->
  <!--<div class="work-ques-wrapper">-->
  <!--<div class="work-ques-item" v-for="num in expandNumber">-->
  <!--{{num}}-->
  <!--</div>-->
  <!--</div>-->

  <!--<div class="line-wrapper">-->
  <!--<div class="line" v-for="(i,index) in tempNumber"></div>-->
  <!--</div>-->

  <!--</div>-->
  <!--<div class="work-keyword">-->
  <!--<span @click="enter($event)">1</span>-->
  <!--<span @click="enter($event)">2</span>-->
  <!--<span @click="enter($event)">3</span>-->
  <!--<span @click="enter($event)">4</span>-->
  <!--<span @click="enter($event)">5</span>-->
  <!--<span @click="enter($event)">6</span>-->
  <!--<span @click="enter($event)">7</span>-->
  <!--<span @click="enter($event)">8</span>-->
  <!--<span class="btn confirm" @click="answerClick">确定</span>-->
  <!--<span @click="enter($event)">9</span>-->
  <!--<span @click="enter($event)">0</span>-->
  <!--<span class="btn delete" @click="keyRollback">回退</span>-->

  <!--</div>-->
  <!--<div class="ques-answer-tip" v-if="tip==1" @click="quesPartA">点击鼠标，开始测试</div>-->
  <!--</div>-->

  <!--<div v-if="subject==2" class="d-relative ques-answer ques-work-answer" @mousedown="answerClick2($event)">-->
  <!--<div class="work-ques">-->
  <!--<span v-for="(num,index) in memoryNum" class="memoryBit" v-if="index==curIndex">{{num}}</span>-->
  <!--</div>-->
  <!--<div class="work-m-tip">-->
  <!--&lt;!&ndash;提示：请判断此数字是否与前第三个数字相同。&ndash;&gt;-->
  <!--</div>-->
  <!--</div>-->

  <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
  <!--</div>-->
  <!--<div class="ques-progress">-->
  <!--<div class="seq-wrapper pull-right"></div>-->
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
        questions: '',
        answers: [],
        bar: '',
        time: '',
        startTime: '',
        endTime: '',
        expandNumber: [],
        tempNumber: [],
        expandLength: 3,
        memoryNumInit: [],
        memoryNumInitStr: '',
        memoryNumAnswer: [],
        memoryNum: [],
        curIndex: 0,
        work_bit: '',
        work_correct: 0,
        work_correct_rate: '',
        tempLength: '',
        click: 0,
        isClick: true,
        type: this.$route.query.type,
        answerCount: 0,
        hideTimer: 1000
      }
    },
    components: {rzqnNav, tip},
    mounted() {
      this.startTime = new Date().getTime();
      // this.quesPartB();
      $('.test_menu .item').eq(1).addClass('item_2');
    },
    updated() {
    },
    methods: {
      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
        if (this.subject == 2) {
          // this.quesPartB();
        }
      },

      /**
       * 数字广度测验 Part A
       */
      quesPartA: function () {
        this.tip = 0;
        var _this = this;
        this.tempNumber = [];
        this.expandNumber = [];
        this.isClick = false;
        setTimeout(function () {
          console.log(_this.expandLength)
          if (_this.expandLength > 7) {
            _this.hideTimer = 1000 + (_this.expandLength - 7) * 300;
          }
          console.log(_this.hideTimer)
          for (var i = 0; i < _this.expandLength; i++) {
            var str = (Math.random() * 9).toFixed(0);
            if (str != 10) {
              _this.expandNumber.push(str);
            }
          }
          _this.tempNumber = _this.expandNumber;
          setTimeout(function () {
            _this.expandNumber = [];
            _this.isClick = true;
          }, _this.hideTimer);
        }, 1000)


        this.click = 1
      },

      /**
       * 输入数值
       */
      enter: function (e) {

        if (!this.isClick) {
          return false;
        }

        var str = $(e.target).text();

        if (this.expandNumber.length < this.expandLength) {
          this.expandNumber.push(str);
        } else {
          this.layerMsg('请点击"确定"或"回退"按钮，确定答题');
        }
      },

      /**
       * 回退
       */
      keyRollback: function (e) {
        if (!this.isClick) {
          return false;
        }
        this.expandNumber.pop();
      },

      /**
       * 答题
       */
      answerClick: function (e) {

        if (!this.isClick) {
          return false;
        }

        if (this.expandNumber == '') {
          this.layerMsg('请输入答案！');
          return false;
        } else {
          this.answerCount++;
          if (this.type == 'test' && this.answerCount == 3) {
            this.$router.push('/shengyaceping/rzqn/success/21?type=test')
          }
        }
        var obj = {};
        obj.right_answer = this.tempNumber.join('');
        obj.answer = this.expandNumber.join('');
        this.answers.push(obj);
        // 答题正确
        if (this.expandNumber.join('') == this.tempNumber.join('')) {
          console.log("答题正确");
          if (this.expandLength < 12) {
            this.expandLength++;
            //console.log(this.expandLength);
            this.quesPartA();
          } else if (this.expandLength == 12) {
            this.time = Number(new Date().getTime()) - Number(this.startTime);
            if (this.type == 'test') {
              this.$router.push('/shengyaceping/rzqn/success/21?type=test')
            } else {
              this.submit();
            }
          }
        } else {
          console.log("答题错误")
          // 答题错误
          if (this.expandLength > 0) {
            //console.log(this.tempLength);
            //console.log(this.expandLength);

            // 一位数字
            if (this.expandLength == 1) {
              this.time = Number(new Date().getTime()) - Number(this.startTime);
              if (this.type == 'test') {
                this.$router.push('/shengyaceping/rzqn/success/21?type=test')
              } else {
                this.submit();
              }
            }

            if (this.tempLength !== this.expandLength) {
              this.tempLength = this.expandLength;
              this.expandLength--;
              this.quesPartA();
            } else {
              this.subject = 2;
              this.work_bit = this.tempLength - 1;
              this.time = Number(new Date().getTime()) - Number(this.startTime);
              if (this.type == 'test') {
                this.$router.push('/shengyaceping/rzqn/success/21?type=test')
              } else {
                this.submit();
              }
            }
          }
        }
      },

      /**
       * 数组随机排序
       */
      randomSort: function (a, b) {
        return Math.random() > 0.5 ? -1 : 1;
      },

      /**
       * 提交
       */
      submit: function () {
          let _this=this;
        this.$ajax.post("/api/result/cognition/worka/add", {
            time: this.time,
            answers: JSON.stringify(this.answers)
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
            var data = res.data;
            if (data.code == 0) {
              _this.saveNode(2, 22);
              _this.$router.push('/shengyaceping/rzqn/success/21')
            } else {
              _this.layerMsg(data.msg);
            }
          },
          function (res) {
              _this.layerMsg('网路错误，请重新提交');
          }
        );
      },
    }

  }
</script>

<style>
  #layer {
    top: 120px;
  }
</style>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
