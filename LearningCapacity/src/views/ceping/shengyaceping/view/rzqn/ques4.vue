<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing">

        <div class="timebox fr" v-if="type!='test' && tip==0">
          剩余时间：
          <div class="time">
            {{timeTip}}
          </div>
        </div>

        <div class="ques-container box d-relative" style="overflow: visible">

          <div class="ques-answer ques-biao-answer">
            <div :class="index==curIndex ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"
                 v-for="(question,index) in questions" :cid="question.id">
              <div class="q-title biao-title">
                <!--样图中的第一幅图形给出了物体，后四幅图中有两个展示的是同一物体。请从这四个图中找到与第一幅图展示物体相同的两个图形，并选择这两个选项。-->
              </div>
              <div class="q-title q-biao-title">
                <img :src="question.img" alt="">
                <!--<img src="../../assets/biao/0.png" alt="">-->
                <p>（样图）</p>
              </div>
              <div class="q-answer q-biao-answer">
                <ul class="d-relative">
                  <li class="answer-item" v-for="(opt,index) in question.question_options"
                      :answer="opt.opt_order" @click="checkClick($event)">
                    <img :src="opt.opt_img" alt="">
                    <p>
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
                    <label v-if="index==0" class="l-answer">A</label>
                    <label v-if="index==1" class="l-answer">B</label>
                    <label v-if="index==2" class="l-answer">C</label>
                    <label v-if="index==3" class="l-answer">D</label>
                    </p>
                  </li>
                </ul>
              </div>

              <div class="bottom next clearfix">
                <a href="javascript:;" class="btn btn_start" v-if="tip==0" @click="answerClick($event)">确定</a>
              </div>

            </div>
            <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
          </div>

          <div class="box click-tip" v-if="tip==1" @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>

        <div class="page" v-if="tip==0">
          <em class="col_2">{{curIndex+1}} </em>/{{total}}
        </div>
        <!--<div class="page page2"><em class="col_2">剩余时间：{{timeTip}} </em></div>-->
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
  <!--<div class="ques-answer ques-biao-answer">-->
  <!--<div :class="index==curIndex ? 'ques-item ques-item-hide active': 'ques-item ques-item-hide'"-->
  <!--v-for="(question,index) in questions" :cid="question.id">-->
  <!--<div class="q-title biao-title">-->
  <!--&lt;!&ndash;样图中的第一幅图形给出了物体，后四幅图中有两个展示的是同一物体。请从这四个图中找到与第一幅图展示物体相同的两个图形，并选择这两个选项。&ndash;&gt;-->
  <!--</div>-->
  <!--<div class="q-title q-biao-title">-->
  <!--<img :src="question.img" alt="">-->
  <!--&lt;!&ndash;<img src="../../assets/biao/0.png" alt="">&ndash;&gt;-->
  <!--<p>（样图）</p>-->
  <!--</div>-->
  <!--<div class="q-answer q-biao-answer">-->
  <!--<ul class="d-relative">-->
  <!--<li class="answer-item" v-for="(opt,index) in question.question_options"-->
  <!--:answer="opt.opt_order">-->
  <!--<img :src="opt.opt_img" alt="">-->
  <!--<p>-->
  <!--<input type="checkbox" v-if="index==0" id="c0" name="biao" value="A">-->
  <!--<input type="checkbox" v-if="index==1" id="c1" name="biao" value="B">-->
  <!--<input type="checkbox" v-if="index==2" id="c2" name="biao" value="C">-->
  <!--<input type="checkbox" v-if="index==3" id="c3" name="biao" value="D">-->
  <!--<label v-if="index==0" for="c0">A</label>-->
  <!--<label v-if="index==1" for="c1">B</label>-->
  <!--<label v-if="index==2" for="c2">C</label>-->
  <!--<label v-if="index==3" for="c3">D</label>-->
  <!--</p>-->
  <!--</li>-->
  <!--<img class="next" v-if="tip==0" src="../../assets/next.jpg" @click="answerClick($event)" alt="">-->
  <!--</ul>-->
  <!--</div>-->

  <!--</div>-->
  <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标，开始测试</div>-->
  <!--</div>-->

  <!--<div class="ques-bar" v-bind:style="{width:bar+'%'}"></div>-->
  <!--</div>-->
  <!--<div class="ques-progress" v-if="tip==0 && type!='test'">-->
  <!--<div class="seq-wrapper pull-right">题号:{{curIndex+1}}/{{total}}</div>-->
  <!--<div class="pull-right" style="margin-right:20px">剩余时间：{{timeTip}}</div>-->
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
                clearB:true,
                total: '',
                curIndex: 0,
                questions: '',
                score: '1',
                answers: [],
                bar: '',
                time: '',
                startTime: '',
                endTime: '',
                tip: 1,
                type: this.$route.query.type,
                leftTime: 480,
                timeTip: '8:00',
                tempTime: '',
            }
        },
        components: {rzqnNav, tip},
        mounted() {
            var _this = this;
            this.startTime = new Date().getTime();
            var form;
            layui.use(['form', 'layedit', 'laydate'], function () {
                form = layui.form;
                form.render();
                console.log('是否渲染');
            });
            if (this.type == 'test') {
                this.total = 1;
                this.questions = [{
                    created_at: 1511479762661,
                    id: "04ad31ba08f54fe681ecd875cc4d2274",
                    img: "./ceping/biao/0.png",
                    name: "表象试题19",
                    question_options: [
                        {
                            id: "12ea52d4b81d4136a0d0b0cd6619e3e0",
                            opt_img: "./ceping/biao/0-A.png",
                            opt_order: 1,
                        },
                        {
                            id: "12ea52d4b81d4136a0d0b0cd6619e3e0",
                            opt_img: "./ceping/biao/0-B.png",
                            opt_order: 1,
                        },
                        {
                            id: "12ea52d4b81d4136a0d0b0cd6619e3e0",
                            opt_img: "./ceping/biao/0-C.png",
                            opt_order: 1,
                        },
                        {
                            id: "12ea52d4b81d4136a0d0b0cd6619e3e0",
                            opt_img: "./ceping/biao/0-D.png",
                            opt_order: 1,
                        }
                    ]
                }]
            } else {
                this.quesList();
            }
            $('.test_menu .item').eq(3).addClass('item_2');
        },
        updated() {
        },
        methods: {

            /**
             * checkbox 选择
             */
            checkClick: function (e) {
                var liEle = $(e.target).closest('li');
                if (liEle.hasClass('active')) {
                    liEle.removeClass('active');
                    liEle.find('.layui-unselect').removeClass('layui-form-checked');
                } else {
                    liEle.addClass('active');
                    liEle.find('.layui-unselect').addClass('layui-form-checked');
                }
            },

            tabSwitch: function (e) {
                this.subject = $(e.target).attr('cid');
            },

            clickStart: function () {
                var _this = this;
                this.tip = 0;
                this.tempTime = new Date().getTime();
                if (_this.type != 'test') {
                    setInterval(function () {
                        if (_this.leftTime > 0) {
                            _this.leftTime--;
                            _this.secondToMin(_this.leftTime);
                        }
                    }, 1000)
                    setTimeout(function () {
                         if(_this.clearB){
                             _this.submit();
                         }

                    }, 480 * 1000);
                }
            },

            /**
             * 秒转换为分钟格式
             */
            secondToMin: function (second) {
                var min, sec;
                if (second > 0) {
                    sec = second % 60;
                    min = parseInt(second / 60);
                    if (sec < 10) {
                        sec = '0' + sec;
                    }
                    this.timeTip = min + ':' + sec + '';
                }
            },

            /**
             * 获取试题列表
             */
            quesList: function () {
                this.$ajax.post("/api/test/cognition/present/list", {emulateJSON: true}).then(
                    function (res) {
                        // 请求成功的结果
                        console.log(res.data);
                        var data = res.data;
                        if (data.code == 0) {
                            this.total = data.result.length;
                            this.questions = data.result;
                            console.log(this.questions);
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

                var length = $(e.target).closest('.ques-item').find('.answer-item.active').length;
                if (length != 2) {
                    this.layerMsg('请选择2个答案！');
                    return false;
                }

                var arrTemp = [];
                var answer = $(e.target).closest('ul').find('input[name="biao"]:checked').val();
                var checkboxs = $(e.target).closest('.ques-item').find('.answer-item.active');
                $(checkboxs).each(function () {
                    arrTemp.push($(this).find('.l-answer').text())
                })
                if (answer == 1) {
                    answer = 'A';
                } else if (answer == 2) {
                    answer = 'B'
                } else if (answer == 3) {
                    answer = 'C'
                } else if (answer == 4) {
                    answer = 'D'
                }
                var question_id = $(e.target).closest('.ques-item').attr('cid');
                var time = Number(new Date().getTime()) - Number(this.tempTime);
                this.answers.push({
                    question_id: question_id,
                    answer: arrTemp,
                    time: time
                })
                console.log(this.answers);
                this.tempTime = new Date().getTime();
                if (this.curIndex + 1 < this.total) {
                    console.log('测试进行中')
                    this.curIndex++;
                    this.bar = Number(this.curIndex) / Number(this.total) * 100;
                    setTimeout(function () {
                        $('.answer-item').removeClass('active');
                    }, 100)
                } else {
                    console.log('结束测试')
                    this.bar = Number(this.curIndex + 1) / Number(this.total) * 100;
                    if (this.type == 'test') {
                        this.clearB=false;
                        this.$router.push('/shengyaceping/rzqn/success/4?type=test')
                    } else {
                        this.submit();
                    }
                }

            },

            /**
             * 提交
             */
            submit: function () {
                console.log(this.answers);
                this.endTime = new Date().getTime();//结束时间
                this.time = Number(this.endTime) - Number(this.startTime);
                this.$ajax.post("/api/result/cognition/present/compute", {
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
                            this.saveNode(2, 5);
                            this.clearB=false;
                            this.$router.push('/shengyaceping/rzqn/success/4')
                        } else {
                            this.layerMsg(data.msg);
                        }

                    }.bind(this),
                    function (res) {
                        this.layerMsg('网络错误,请重新提交');
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

  img.next {
    position: absolute;
    bottom: 20px;
    right: -270px;
  }

  .bottom.next {
    position: absolute;
    bottom: 40px;
    left: 0;
    z-index: 1000;
    width: 100%;
  }

  .bottom.next .btn {
    display: block;
    width: 140px;
    margin: 0 auto;
  }

  .layui-unselect {
    margin-top: -3px;
  }
</style>
