<template>

  <div class="pc-page" @mousedown="answerClick($event)" @dblclick="answerDblClick">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>

      <div class="ques-wrapper test_detail test_detail_ing">
        <div class="ques-container box d-relative">
          <div class="errorTip" v-if="errorClick==1">{{errorTip}}</div>
          <div class="d-relative ques-answer ques-work-answer">
            <div class="think-ques" v-for="(ques,index) in questions" v-if="index==curIndex">{{ques}}</div>
          </div>
          <div class="box" v-if="tip==1" @click="clickStart">
            <em class="icon part_start"></em>
            <div class="btngroup">
              <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
            </div>
          </div>
        </div>
        <div class="page">
          <em class="col_2">{{( curIndex+1)/2 | ceil}} </em>/{{(arrLength+1)/2}}
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques" @mousedown="answerClick($event)" @dblclick="answerDblClick">-->
  <!--<img class="block-img" src="../../assets/xgtx/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/rzqn/parta1.png">-->
  <!--</div>-->
  <!--<div class="ques-wrapper">-->
  <!--<div class="d-relative ques-container">-->
  <!--<div class="errorTip" v-if="errorClick==1">{{errorTip}}</div>-->
  <!--<div class="d-relative ques-answer ques-work-answer">-->
  <!--<div class="think-ques" v-for="(ques,index) in questions" v-if="index==curIndex">{{ques}}</div>-->
  <!--</div>-->
  <!--<div class="ques-answer-tip" v-if="tip==1" @click="clickStart">点击鼠标,开始测试</div>-->

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
                questions: [],
                answers: [],
                bar: '',
                time: '',
                times: [],
                tempTimeStart: '',
                tempTime: '',
                startTime: '',
                endTime: '',
                curIndex: 0,
                think_switch_cost: 50,// 	number	是	转换效率(数字)		43
                think_switch_time: 60,// 	number	是	转换任务平均反应时（ms）		56666
                think_repeat_time: 70,// 	number	是	重复任务平均反应时(ms)		66666
                think_switch_rate: 80,// 	number	是	转换正确率(数字)		4.4
                think_repeat_rate: 90,// 	number	是	重复正确率(数字),
                type: this.$route.query.type,
                errorTip: '',
                errorClick: 0,
                timeFn: '',
                arrLength: 119,
                fontLock: false, // 双击判断
                barAdd: false, // 是否
            }
        },
        components: {rzqnNav},
        created() {
            // this.quesInit();
        },
        mounted() {
            console.log(this.curIndex)
            // this.quesInit();
            this.quesData();
            this.startTime = new Date().getTime();
            $('.test_menu .item').eq(4).addClass('item_2');
            if (this.type == 'test') {
                this.arrLength = 19;
            }
        },
        updated() {
        },
        methods: {
            clickStart: function () {
                console.log('这是单击事件');
                var _this = this;
                _this.tip = 0;
                $('.think-ques').hide();
                setTimeout(function () {
                    $('.think-ques').show();
                    setTimeout(function () {
                        _this.tempTimeStart = new Date().getTime();
                        _this.curIndex++
                    }, 1500)
                }, 500)

            },
            tabSwitch: function (e) {
                this.subject = $(e.target).attr('cid');
            },
            /**
             * 生成测试数组
             */
            quesInit: function () {
                var arr1 = []; // 文字
                var arr2 = []; // 数字

                var randomNum = Math.random();
                var arr = [];
                if (arr1.length < 100) {
                    for (var i = 0; i < 5; i++) {
                        if (randomNum > 0.5) {
                            if (i < 4) {
                                arr[i] = '奇偶';
                            } else {
                                arr[i] = '大小'
                            }
                        }
                        else {
                            if (i < 4) {
                                arr[i] = '大小';
                            } else {
                                arr[i] = '奇偶'
                            }
                        }
                    }
                }

                // 文字
                for (var n = 0; n < 20; n++) {
                    arr.sort(this.randomSort);
                    $.each(arr, function (index, val) {
                        arr1.push(val);
                    })
                }

                // 数字
                for (var n = 0; n < 100; n++) {
                    var str = (Math.random() * 9).toFixed(0);
                    if (str == 0) {
                        str = "1";
                    }
                    if (str == 5) {
                        str = '6';
                    }
                    arr2.push(str);
                }

                // 测试数组
                for (var i = 0; i < 200; i++) {
                    if (i % 2 == 0) {
                        var n = i / 2;
                        if (i == 0) {
                            this.questions[0] = arr1[0];
                        }
                        else {
                            this.questions[i] = arr1[n]
                        }
                    } else {
                        var m = (i - 1) / 2;
                        this.questions[i] = arr2[m];
                    }
                }

                // console.log(arr1);
                // console.log(arr2);
                // console.log(this.questions);
            },

            quesData: function () {
                this.$ajax.post("/api/test/logic/gen_data", {
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

            /**
             * 数组随机排序
             */
            randomSort: function (a, b) {
                return Math.random() > 0.5 ? -1 : 1;
            },

            /**
             * 答题
             */
            answerClick: function (e) {
                var timer, _this = this;
                document.oncontextmenu = function () {
                    return false;
                }
                clearTimeout(_this.timeFn);
                if (_this.tip == 0) {
                    _this.timeFn = setTimeout(function () {
                        // console.log('这是单击事件')
                        if (_this.errorClick == 0 && _this.tip == 0) {

                            var arrowIndex = $('.think-ques').css('z-index'); // 箭头层级，当前是否在显示
                            var arrowText = $('.think-ques').text(); // 当前文字
                            if (arrowIndex < 0 || arrowText == '大小' || arrowText == '奇偶') {
                                _this.errorClick = 1;
                                _this.errorTip = '抢时，双击鼠标左键继续';
                                $('.think-ques').hide();
                                _this.fontLock = true;
                                return false;
                            }

                            if (Number(new Date().getTime()) - Number(_this.tempTimeStart) > 1000) {
                                _this.tempTime = Number(new Date().getTime()) - Number(_this.tempTimeStart) - 1000;
                            } else {
                                _this.tempTime = Number(new Date().getTime()) - Number(_this.tempTimeStart);
                            }

                            console.log('反应时：' + _this.tempTime);
                            _this.times.push(_this.tempTime)

                            var btnNum = e.button;
                            console.log(_this.curIndex);
                            if (_this.curIndex % 2 != 0) {
                                // 左键 奇数、大于5
                                if (btnNum == 0) {
                                    _this.answers.push(0);
                                    // console.log(_this.questions[_this.curIndex - 1]);
                                    // console.log(_this.questions[_this.curIndex]);
                                    if (_this.questions[_this.curIndex - 1] == '大小' && _this.questions[_this.curIndex] < 5) {
                                        _this.errorClick = 1;
                                        _this.errorTip = '回答错误，双击鼠标左键继续';
                                        $('.think-ques').hide();
                                        return false;
                                    }
                                    if (_this.questions[_this.curIndex - 1] == '奇偶' && _this.questions[_this.curIndex] % 2 == 0) {
                                        _this.errorClick = 1;
                                        _this.errorTip = '回答错误，双击鼠标左键继续';
                                        $('.think-ques').hide();
                                        return false;
                                    }
                                }
                                else if (btnNum == 2) {
                                    // 右键 偶数 小于5
                                    // console.log("您点击了鼠标右键！");
                                    _this.answers.push(1);
                                    if (_this.questions[_this.curIndex - 1] == '大小' && _this.questions[_this.curIndex] > 5) {
                                        _this.errorClick = 1;
                                        _this.errorTip = '回答错误，双击鼠标左键继续';
                                        $('.think-ques').hide();
                                        return false;
                                    }
                                    if (_this.questions[_this.curIndex - 1] == '奇偶' && _this.questions[_this.curIndex] % 2 != 0) {
                                        _this.errorClick = 1;
                                        _this.errorTip = '回答错误，双击鼠标左键继续';
                                        $('.think-ques').hide();
                                        return false;

                                    }
                                }
                            } else {
//                setTimeout(function () {
//                  _this.curIndex++
//                }, 2000)
                            }

                            if (_this.curIndex < _this.arrLength) {
                                _this.curIndex++;
                                // console.log((_this.curIndex + 1) / 2);
                                if (_this.curIndex % 2 == 0) {
                                    _this.bar = ((_this.curIndex + 1) / 2) / ((_this.arrLength + 1) / 2) * 100;
                                    setTimeout(function () {
                                        _this.tempTimeStart = new Date().getTime();
                                        _this.curIndex++
                                    }, 1500)
                                } else {
                                    // console.log(_this.bar);
                                }

                            }

                            if (_this.curIndex == _this.arrLength) {
                                clearInterval(timer);
                                for (var i = 1; i < 1000; i++) {
                                    clearInterval(i);
                                }
                                if (_this.type == 'test') {
                                    _this.$router.push('/shengyaceping/rzqn/success/5?type=test')
                                } else {
                                    _this.submit();
                                }
                            }
                        }
                    }, 10)
                }
            },

            /**
             * 双击，继续答题
             */
            answerDblClick: function (e) {
                var _this = this;
                _this.tip = 0;
//        console.log(_this.curIndex);

                clearTimeout(this.timeFn);
                // console.log('双击事件');

                if (_this.curIndex == 0) {
                    return false;
                }

                if (_this.errorClick == 0) {
                    _this.errorClick = 1;
                    _this.errorTip = '抢时，双击鼠标左键继续';
                    $('.think-ques').hide();
                    return false;
                }

                this.errorClick = 0;
                $('.think-ques').show();
                if (_this.curIndex < _this.arrLength && _this.curIndex >= 0) {
                    if (_this.curIndex % 2 != 0 && _this.fontLock) {
                        console.log(_this.curIndex);
                        _this.curIndex--;
                        setTimeout(function () {
                            _this.tempTimeStart = new Date().getTime();
                            _this.curIndex++
                        }, 1500)
                        _this.fontLock = false;
                        console.log('type1')
                    } else {
                        console.log('type2')
                        _this.curIndex++;
                        _this.bar = ((_this.curIndex + 1) / 2) / ((_this.arrLength + 1) / 2) * 100;
                        if (_this.curIndex % 2 == 0) {
                            setTimeout(function () {
                                _this.tempTimeStart = new Date().getTime();
                                _this.curIndex++;
                            }, 1500)
                        }
                    }

                }

                if (_this.curIndex == _this.arrLength) {
                    if (_this.type == 'test') {
                        _this.$router.push('/shengyaceping/rzqn/success/5?type=test')
                    } else {
                        _this.submit();
                    }
                }
            },

            /**
             * 提交
             */
            submit: function () {
                var _this = this;
                _this.time = Number(new Date().getTime()) - Number(_this.startTime);
                this.$ajax.post("/api/result/cognition/think/add", {
                        time: this.time,
                        questions: JSON.stringify(this.questions),
                        answers: JSON.stringify(this.answers),
                        times: JSON.stringify(this.times)
                    },
                    {
                        timeout:3000,
                        headers: {

                            "token": sessionStorage.getItem('token'),
                        }
                    }
                    ,
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
                            this.saveNode(2, 6);
                            this.$router.push('/shengyaceping/rzqn/success/5')
                        } else {
                            this.layerMsg(data.msg);
                        }
                    }.bind(this),
                    function (res) {
                        this.layerMsg('网络错误，请重新提交');
                    }.bind(this)
                );
            }
            ,
        }

    }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }

  .ques-answer-tip {
    position: absolute;
    top: 0px;
    left: 0px;
    background: #f9f9f9;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff3333;
    font-size: 40px;
    width: 100%;
    height: 100%;
    border: 10px solid #fff;
    box-sizing: border-box;
  }

  .errorTip {
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    top: 50%;
    margin-top: -12.5px;
    left: 0;
    font-size: 25px;
  }
</style>
