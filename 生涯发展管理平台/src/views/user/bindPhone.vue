<template>
    <div class="bindPhone">
        <div class="top-title">绑定手机号</div>
        <div class="inputs">
            <p class="neirong"><input type="text" v-model="phone" placeholder="请输入手机号码" class="Username" autocomplete="on"></p>
            <p class="warning"></p>
        </div>
        <div class="inputs">
            <p class="neirong"><input type="text" v-model="KeyCode" placeholder="请输入短信验证码" class="KeyCode">
                <span  class="getKeyCode" v-show="isShowKeyCode" @click="getKeyCode">发送验证码</span
                ><span class="time" v-show="!isShowKeyCode">{{time}} s</span></p>
        </div>
        <div class="inputs">
            <p class="warning" style="color:orange">如果手机号已注册，设置密码请忽略!</p>
            <p class="neirong"><input type="password" v-model="password" placeholder="请设置6至20位登录密码" class="Password"></p>
            <p class="warning">{{warning}}</p>
        </div>
        <div  class='button'  @click="bindPhone">点击绑定</div>
    </div>
</template>

<script>
    export default {
        name: "bindPhone",
        data(){
            return{
                warning:'',
                phone:'',
                KeyCode:'',
                password:'',
                time:60,
                isShowKeyCode:true
            }
        },
        methods:{
           // 手机发送验证码
            getKeyCode(){
                let _this=this
                this.warning4 = ""
                let  reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
                if(!reg.test(this.phone)) {
                    this.warning = '请输入正确的手机号';
                    return;
                }
                this.$ajax.post(this.G_uri + this.ports.user.sendPhoneCode,{
                    phone: this.phone,
                    webSite: this.$OEMdomain
                })
                    .then(function(res) {
                        // console.log(res)
                        if(res.data.code == 2000) {
                            _this.isShowKeyCode = false;
                            _this.timers();
                        }else {
                            _this.warning4 = res.data.msg;
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    });
            },
            //验证码时间
            timers() {
                var _this = this;
                var timer = setInterval(function() {
                    _this.time --;
                    if(_this.time == 0) {
                        // console.log(111111)
                        clearInterval(timer)
                        _this.isShowKeyCode = true;
                        _this.time = 60;
                    }
                }, 1000)
            },
            //手机号绑定
            bindPhone(){
                let _this=this
                _this.warning=''
                this.$ajax.post(this.G_uri + this.ports.user.bindPhone, {
                    phone: this.phone,
                    password: this.password,
                    card: this.$route.params.card,
                    cardPassword:this.$route.params.cardPw,
                    code:this.KeyCode,
                    webSite: this.$OEMdomain
                })
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            let data=res.data.data;
                            if(data.token){
                                window.sessionStorage.setItem('ymtxToken', data.token);
                            }
                            if(data.isImproveInformation==2){
                                _this.$router.push('/perfectInformation')
                                return;
                            }
                            _this.$router.push('/careerArchives')
                        }else {
                            _this.warning = res.data.msg;
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
<style type="text/css" lang='less' scoped>
    .bindPhone {
        width: 490px;
        height: 420px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        margin-left: -245px;
        margin-top: -210px;
        top: 50%;
        box-sizing: border-box;
        padding: 20px 50px;
        background-color: #fff;
        .top-title {
            height: 58px;
            line-height: 58px;
            font-size: 18px;
            color: #156def;
            text-align: center;
        }
        .Username {
            background: url(/imgs/user/touxiang.png) no-repeat 10px center;
        }
        .KeyCode {
            background: url(/imgs/user/xinxi.png) no-repeat 10px center;
            width: 240px;
            float: left;

        }
        .Password {
            background: url(/imgs/user/mima.png) no-repeat 10px center;

        }
        .Password1 {
            background: url(/imgs/user/mima.png) no-repeat 10px center;

        }
        .inputs {
            position: relative;
            width: 100%;
            input {
                box-sizing: border-box;
                border: 1px solid #e8e4e5;
                width: 390px;
                height: 50px;
                border-radius: 5px;
                padding-left: 55px;
            }
            .neirong {
                height: 50px;
            }
            .warning {
                height: 25px;
                font-size: 12px;
                width: 100%;
                color: #FF0058;
                line-height: 25px;
            }
            // 显示密码
            .isshowpassword {
                position: absolute;
                display: block;
                background-color: red;
                width: 40px;
                height: 50px;
                right: 0px;
                top: 0px;
            }
            // 短信验证码输入框
            .KeyCode {
                width: 240px;
            }
            .getKeyCode {
                width: 135px;
                height: 50px;
                float: right;
                background-color: #2d8ffc;
                color: #fff;
                text-align: center;
                line-height: 50px;
                border-radius: 5px;
                cursor: pointer;
            }
            .time {
                width: 135px;
                height: 50px;
                float: right;
                background-color: #dedede;
                color: #fff;
                text-align: center;
                line-height: 50px;
                border-radius: 5px;
            }
        }
        // 可以点击的状态
        .button {
            width: 100%;
            height: 50px;
            border-radius: 5px;
            background-color: #2d8ffc;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
        }
        // 不能点击的状态
        .unclick {
            .button;
            background-color: #666;
            color: #fff;
            cursor: no-drop;
        }
        // 用户服务协议
        .xieyi {
            z-index: 100;
            height: 20px;
            line-height: 20px;
            margin-bottom: 20px;
            input {
                margin-right: 15px;
                width: 20px;
                height: 20px;
                border: 1px solid #000;
                float: left;
            }
            .fuwuxieyi {
                color: #333;
            }
            .ServicesAgreement {
                position: fixed;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(51,51,51,.25);
                z-index: 10;
                .neirongBox {
                    box-sizing: border-box;
                    width: 600px;
                    height: 796px;
                    position: absolute;
                    padding: 20px 40px;
                    left: 50%;
                    margin-left: -340px;
                    top: 100px;
                    background-color: #fff;
                    .biaoti {
                        line-height: 58px;
                        font-size: 18px;
                        color: #2d8ffc;
                        text-align: center;
                        border-bottom: 1px solid #e7e4e4;
                    }
                    .xiangqing {
                        font-size: 14px;
                        color: #666666;
                        line-height: 24px;
                    }
                    .closes {
                        font-size: 20px;
                        width: 40px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        color: #fff;
                        position: absolute;
                        border-radius: 20px;
                        right: -20px;
                        top: -20px;
                        background-color: #e8e4e5;
                    }
                    // 点击返回，并勾选协议
                    .gobackCheckd {
                        font-size: 20px;
                        color: #156def;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
