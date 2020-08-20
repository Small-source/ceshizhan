<template>
    <div class="pc-page zhuyiliceping4">
        <div class="test_main test_main_2">
            <Nav></Nav>
            <div class="ques-wrapper test_detail test_detail_ing" v-if="tip==1">
                <div class="ques-container box d-relative">
                    <div class="ques-answer">
                    </div>
                    <div class="box"  @click="clickStart">
                        <em class="icon part_start"></em>
                        <div class="btngroup">
                            <a href="javascript:;" class="btn btn_start">点击鼠标开始测试</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ques-wrapper test_detail test_detail_ing" v-else>
                <div  class="fl">
                    交替进行一加一减运算，并将结果写在两个数中间
                </div>
                <div class="timebox fr">
                    剩余时间：
                    <div class="time">
                        {{timeTip}}
                    </div>
                </div>
                <div class="ques-container box d-relative" v-if="type=='test'">
                    <div class="ques-answer">
                        <div class="zhuti zhuti_test">
                            <div class="content_box_test">
                                <!-- <img src="~@/assets/newceping/rzqntest94.png" alt=""> -->
                                <div class="input_box" v-for="(item, index) in testAnswerData" :key="index">
                                    <input type="number" v-model="item.answer"  @keydown="changeInputTest($event)" @click="nowTestIndex = index" class="inputs_test">
                                </div>
                            </div>
                        </div>
                        <div class="bottom next clearfix" style="position: absolute;bottom: 30px;width: 100%;z-index: 5">
                            <a href="javascript:;" style="margin:0 auto;" class="btn btn_start" @click="submit">提交</a>
                        </div>
                    </div>
                </div>

                <div class="ques-container box d-relative" style="height: 1340px" v-else>
                    <div class="ques-answer">
                        <div class="zhuti">
                            <div class="content_box">
                                <div class="input_box" v-for="(item, index) in answerData" :key="index">
                                    <input type="number" v-model="item.answer"  @keydown="changeInput($event)" class="inputs" @click="nowIndex = index">
                                </div>
                            </div>
                        </div>
                        <div class="bottom next clearfix" style="position: absolute;bottom: 30px;width: 100%;z-index: 5">
                            <a href="javascript:;" style="margin:0 auto;" class="btn btn_start" @click="submit">提交</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import Nav from '../../../components/learningPotential.vue';
    import tip from '../../../components/tip.vue';
    export default {
        data() {
            return {
                isSubmiting: false,
                tip: 1,
                timeInterval: null,//接收时间循环
                type: this.$route.query.type,
                leftTime: 0,
                timeTip: '',
                test:"",
                testAnswerData: [
                    { answer: '',right_answer: '10' },
                    { answer: '',right_answer: '3' },
                    { answer: '',right_answer: '12' },
                    { answer: '',right_answer: '7' },
                    { answer: '',right_answer: '7' },
                    { answer: '',right_answer: '4' },
                    { answer: '',right_answer: '9' },
                    { answer: '',right_answer: '1' },
                    { answer: '',right_answer: '13' },
                ],
                questionNum: [
                    4,5,3,7,2,4,1,6,5,4,3,9,8,5,2,4,3,7,6,8,1,9,3,
                    5,9,7,9,5,4,2,8,3,7,4,6,5,9,1,8,2,6,5,4,3,9,7,
                    5,4,3,8,5,7,3,6,2,8,5,4,3,9,6,4,2,9,3,5,2,7,5,
                    5,4,3,8,1,8,6,9,1,5,1,5,3,7,6,8,7,9,2,3,2,9,8,
                    6,9,2,4,2,5,3,9,7,8,2,6,3,4,1,7,5,3,2,9,8,7,4,
                    3,5,1,8,7,6,3,4,2,9,8,6,5,9,7,4,2,6,5,9,1,7,4,
                    4,9,2,6,3,8,2,5,3,7,4,5,3,8,2,9,3,5,4,7,6,9,4,
                    8,3,1,6,4,8,2,9,4,8,5,7,4,6,3,9,1,8,3,6,2,9,1,
                    4,8,2,7,2,9,6,4,3,9,8,5,2,8,5,4,3,7,2,8,7,5,3,
                    2,7,2,6,3,9,4,7,6,9,5,8,3,2,1,3,1,7,6,5,4,9,1,
                    7,5,3,8,2,8,6,9,8,5,3,7,3,2,1,4,1,6,4,9,8,5,3,
                    3,7,5,8,1,9,6,8,3,9,4,2,1,6,4,9,8,5,3,7,5,3,1
                ],
                answerData: [
                    // { answer: '',right_answer: '' },
                ], //一行22个值，共12行
                nowTestIndex: 0,
                nowIndex: 0

            }
        },
        created() {
            this.createAnswer();
        },
        watch: {
            nowTestIndex() {
                let idx = this.nowTestIndex;
                $('.inputs_test')[idx].focus();
            },
            nowIndex() {
                let idx = this.nowIndex;
                $('.inputs')[idx].focus();
            }
        },
        mounted() {
            $('.test_menu .item').eq(8).addClass('item_2');
        },
        updated() {

        },
        components: {Nav, tip},
        methods: {
            changeInputTest(e) {
                let keyCode = e.keyCode; //38↑，40↓，37←，39→
                let nowTestIndex = this.nowTestIndex;
                let Indexlength = this.answerData.length-1
                if(keyCode ==37 ) {
                    if(nowTestIndex > 0) {
                        this.nowTestIndex = nowTestIndex - 1
                    }
                    e.preventDefault();
                }else if(keyCode == 39) {
                    if(nowTestIndex < 8) {
                        this.nowTestIndex = nowTestIndex + 1;
                    }
                    e.preventDefault();
                }
                // console.log(this.nowTestIndex)
            },
            changeInput(e) {
                let keyCode = e.keyCode; //38↑，40↓，37←，39→
                let nowIndex = this.nowIndex;
                let Indexlength = this.answerData.length-1
                if(keyCode == 38){
                    if(nowIndex > 22) {
                        this.nowIndex = nowIndex - 22;
                    }
                    e.preventDefault();
                }else if(keyCode == 40) {
                    if(nowIndex < Indexlength-22) {
                        this.nowIndex = nowIndex + 22;
                    }
                    e.preventDefault();
                }else if(keyCode ==37 ) {
                    if(nowIndex > 0) {
                        this.nowIndex = nowIndex - 1
                    }
                    e.preventDefault();
                }else if(keyCode == 39) {
                    if(nowIndex < Indexlength - 1) {
                        this.nowIndex = nowIndex + 1;
                    }
                    e.preventDefault();
                }
            },
            createAnswer() {
                let arr = [];
                let questionNum = this.questionNum;
                let blean = true;
                questionNum.forEach((item,index)=>{
                    let obj = {};
                    if(index % 23 == 22) {
                        blean = !blean;
                    }else {
                        obj.answer = '';
                        obj.time = '';
                        if(blean) {
                            if(index % 2 == 0) {
                                obj.right_answer =  item + questionNum[index + 1]
                            }else {
                                obj.right_answer =  item - questionNum[index + 1]
                            }
                        }else {
                            if(index % 2 == 0) {
                                obj.right_answer =  item - questionNum[index + 1]
                            }else {
                                obj.right_answer =  item + questionNum[index + 1]
                            }
                        }
                        arr.push(obj)
                    }
                })
                // console.log(arr)
                this.answerData = [...arr];
            },
            clickStart: function () {
                var _this = this;
                if (this.type == 'test') {
                    this.timeTip ="0:20";
                    this.leftTime = 20;
                }else{
                    this.timeTip = "3:00";
                    this.leftTime = 180;
                    $('.test_detail .box').css('height','auto')
                    $('.test_detail').css('height','auto')
                }
                this.tip = 0;
                this.startTempTime = new Date().getTime();
                this.timeInterval = setInterval(function () {
                    // console.log(666666)
                    if (_this.leftTime > 0) {
                        _this.leftTime--;
                        _this.secondToMin(_this.leftTime);
                    }else {
                        _this.submit();
                    }
                }, 1000)
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
            //答题
            clickQuestion:function(e){
                if(!$(e.target).parent().hasClass('duigou')){
                    $(e.target).parent().addClass('duigou')
                }
            },
            /**
             * 提交
             */
            submit: function () {
                // console.log(this.answerData)
                if(this.isSubmiting) {
                    return;
                }
                this.isSubmiting = true;
                let _this=this;
                let startTempTime = this.startTempTime;
                let time = new Date().getTime() - startTempTime;
                let token = window.sessionStorage.getItem('ymtxToken');
                // console.log(nowTempTime - startTempTime)
                clearInterval(this.timeInterval);
                this.startTempTime = null;
                if(this.type=='test'){
                    this.$router.push('/learningAbility/learningPotential/success/94?type=test');
                    this.isSubmiting = false;
                    return
                }
                this.$ajax.post("/api/result/cognition/attentiond/compute", {
                        time: time,
                        answers: JSON.stringify(this.answerData),
                        test_id:window.sessionStorage.getItem('testId')
                    },
                    {
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
                        _this.isSubmiting = false;
                        var data = res.data;
                        console.log(data.code)
                        if (data.code == 0) {
                            _this.markOver();
                            _this.$router.push('/learningAbility/learningPotential/success/94')
                        } else {
                            _this.layerMsg(data.msg);
                        }
                    },
                    function (res) {
                        _this.isSubmiting = false;
                        _this.layerMsg('网络错误,请重新提交');
                    }
                ).catch(()=>{
                    this.isSubmiting = false;
                })
            },
        }
    }
</script>
<style lang='less'>
    .zhuyiliceping4{
        // .test_detail {
        //   height: 610px;
        // }
        .test_detail .box {
            height: 580px;
        }
        .layer {
            top: 120px;
        }
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
        .fl{
            font-size: 16px;
            color: #666666;
            line-height: 50px;
            position: absolute;
            top: 40px;
            z-index: 10000000;
            left:40px;
            background:#fff;
        }
        .duigou:after{
            position: absolute;
            left: 50%;
            top: 50%;
            display: block;
            content: ' ';
            width: 58px;
            height: 58px;
            margin-left: -29px;
            margin-top: -29px;
            background: url("~@/assets/newceping/duigou.png") center center no-repeat;
        }
        .zhuti{
            margin: 150px auto;
            width: 900px;
        }
        .content_box {
            width: 900px;
            height: 1040px;
            padding: 20px 44px 0 40px;
            background: url("~@/assets/newceping/rzqn94.png") no-repeat center center;
            background-size: 100% 100%;
            display: flex;
            flex-wrap: wrap;
            .input_box {
                width: 37px;
                height: 45px;
                margin-bottom: 41.5px;
                padding-top: 16px;
                input {
                    width: 24px;
                    height: 24px;
                    margin: 0 auto;
                    text-align: center;
                    border: 1px solid #dedede;
                    border-radius: 3px;
                    &:focus{
                        border: 1px solid #333;
                    }
                }
            }
        }
        .zhuti_test {
            padding: 40px 44px 0 40px;
        }
        .content_box_test {
            width: 816px;
            height: 124px;
            padding: 24px;
            background: url("~@/assets/newceping/rzqntest94.png") no-repeat center center;
            background-size: 100% 100%;
            display: flex;
            flex-wrap: wrap;
            .input_box {
                width: 85px;
                height: 85px;
                margin-bottom: 41.5px;
                padding-top: 30px;
                input {
                    width: 35px;
                    height: 35px;
                    margin: 0 auto;
                    text-align: center;
                    border: 1px solid #dedede;
                    border-radius: 3px;
                    &:focus{
                        border: 1px solid #333;
                    }
                }
            }
        }
    }

</style>
