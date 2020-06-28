<template>
    <div class="forgetPassword">
        <div class="tanchuang" v-if="!success">
            <div class="tanchuang_left">
                <img src="/imgs/user/icon_.left.png" alt="">
            </div>
            <div class="tanchuang_right">
                <div class="reset">
                    <div class="title">
                        <p>重置登录密码</p>
                        <p class="underline"></p>
                    </div>
                    <div class="inputs">
                        <p class="neirong"><input type="text" v-model="Username" placeholder="请输入手机号码" class="Username"></p>
                        <p class="warning"></p>
                    </div>
                    <div class="inputs">
                        <p class="neirong"><input type="text" v-model="KeyCode" placeholder="请输入短信验证码" class="KeyCode">
                            <span  class="getKeyCode" @click="getKeyCode" v-show="isShowKeyCode">发送验证码</span><span class="time" v-show="!isShowKeyCode">{{time}} s</span>
                        </p>
                        <p class="warning"></p>
                    </div>
                    <div class="inputs">
                        <p class="neirong"><input type="password" v-model="Password" placeholder="请设置6至20位登录密码" ref= "Password0" class="Password"></p>
                        <p class="warning"></p>
                    </div>
                    <div class="inputs">
                        <p class="neirong"><input type="password" value="" v-model="Password1" placeholder="请再次输入登录密码" class="Password1"></p>
                        <p class="warning4">{{warning4}}</p>
                    </div>
                    <div :class="isclick ? 'button' : 'unclick'" @click="Submission">确定</div>
                    <div class="gobackdenglu" @click="$router.push('/login')">返回用户登录</div>
                </div>
            </div>
        </div>
        <div class="chongzhimimachenggong" v-if="success">
            <div class="tubiao"><img src="/imgs/user/chenggong.png" alt=""></div>
            <h5 class="success">密码重置成功</h5>
            <p class="baoguan">请妥善保管您的账户信息</p>
            <button @click="$router.push('/login')">立即登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forgetPassword",
        data() {
            return {
                Username: '',
                KeyCode: '',
                Password: '',
                Password1: '',
                warning4: '',
                isclick: false,
                time: 60,
                isShowKeyCode: true,
                success:false
            }
        },
        watch:{
            Username() {
                this.panduan();
            },
            KeyCode() {
                this.panduan();
            },
            Password() {
                this.panduan();
            },
            Password1() {
                this.panduan();
            },
            // 勾选同意
            isChecked() {
                this.panduan();
            }
        },
        methods: {
            Submission() {
                var OEMdomain = this.$OEMdomain;
                var phone = this.Username;
                var code = this.KeyCode;
                var passwordOne = this.Password;
                var passwordTwo = this.Password1;
                var _this = this;
                var num1 = this.Username;
                var reg = /^1[123456789]\d{9}$/;
                var num2 = this.KeyCode;
                var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
                var num3 = this.Password;
                var num4 = this.Password1;
                // var num5 = this.isChecked;
                if(!num1) {
                    // console.log(99999999)
                    this.warning4 = '手机号码不能为空';
                    return;
                }
                if(!reg.test(num1)) {
                    this.warning4 = '账号或密码不正确';
                    return;
                }
                if(!num2) {
                    this.warning4 = '验证码不能为空';
                    return;
                }
                if(!num3) {
                    this.warning4 = '密码不能为空';
                    return;
                }
                if(!reg3.test(num3)) {
                    // 请设置6至20位登录密码
                    this.warning4 = '密码不能少于6位字符，不能超过20位字符';
                    return;
                }
                if(num3 != num4) {
                    this.warning4 = '两次输入的密码不一致';
                    return;
                }
                if(!this.isclick) {
                    return;
                }
                this.$ajax.post(this.G_uri + this.ports.user.forgotPassword, {
                    phone: phone,
                    code: code,
                    passwordOne: passwordOne,
                    passwordTwo: passwordTwo,
                    webSite: OEMdomain
                })
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            window.sessionStorage.setItem('ymtxUserMessage', true);
                            window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                            _this.success=true
                        }else {
                            _this.warning4 = res.data.msg;
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            // 点击显示密码
            isshowpassword() {
                if(this.$refs.Password0.type === "password") {
                    this.$refs.Password0.type = "text"
                }else {
                    this.$refs.Password0.type = "password"
                }
            },
            panduan() {
                var num1 = this.Username;
                var num2 = this.KeyCode;
                var num3 = this.Password;
                var num4 = this.Password1;
                if(num1 && num2 && num3 && num4) {
                    this.isclick = true;
                }else {
                    this.isclick = false;
                }
            },
            timers() {
                var _this = this;
                var timer = setInterval(function() {
                    _this.time --;
                    if(_this.time == 0) {
                        clearInterval(timer)
                        _this.isShowKeyCode = true;
                        _this.time = 60;
                    }
                }, 1000)
            },
            getKeyCode() {
                var OEMdomain = this.$OEMdomain;
                var phone = this.Username;
                var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
                var _this = this;
                if(!reg.test(phone)) {
                    this.warning4 = '请输入正确的手机号';
                    return;
                }else {
                    this.warning4 = ""
                }
                this.isShowKeyCode = false;
                this.timers();
                this.$ajax.post(this.G_uri + this.ports.user.forgetPasswordPhone,{
                    phone: phone,
                    webSite: OEMdomain
                })
                    .then(function(res) {
                        if(res.data.code == 2000) {

                        }else {
                            _this.warning4 = res.data.msg;
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    });
            }
        },
    }
</script>

<style scoped lang="less">
    .forgetPassword{
        .tanchuang {
            position: absolute;
            box-sizing: border-box;
            left: 50%;
            margin-left: -390px;
            margin-top: -235px;
            top: 50%;
            width: 780px;
            height: 470px;
            border-radius: 5px;
            background-color: #fff;
            .tanchuang_left {
                width: 380px;
                height: 470px;
                float: left;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .tanchuang_right {
                float: left;
                width: 400px;
                height: 470px;
                position: relative;
            }
            .lis {
                width: 276px;
                padding: 0px 62px;
                padding-top: 26px;
                line-height: 36px;
                text-align: center;
                display: flex;
                font-size: 16px;
                li {
                    flex: 1;
                    font-size: 16px;
                    line-height: 36px;
                    cursor: pointer;
                    color: #333;
                    .underline {
                        width: 26px;
                        height: 3px;
                        background-color: #fff;
                        margin: 0 auto;
                    }
                    p{
                        letter-spacing: 1px;
                    }
                }
                .active {
                    color: #2c8ffc;
                    .underline {
                        background-color: #2c8ffc;
                    }
                }
            }
            .close {
                width: 50px;
                height: 50px;
                z-index: -1;
                color: #fff;
                position: absolute;
                right: -50px;
                top: 0px;
                background-color: #333;
            }
        }
        .reset {
            width: 400px;
            height: 470px;
            position: absolute;
            left: 0;
            top: 0;
            box-sizing: border-box;
            padding: 0px 62px;
            padding-top: 26px;
            background-color: #fff;
            .title {
                height: 36px;
                line-height: 36px;
                font-size: 16px;
                // font-weight: 600;
                color: #2c8ffc;
                text-align: center;
                margin-bottom: 37px;
                .underline {
                    width: 26px;
                    height: 3px;
                    background-color: #2c8ffc;
                    margin: 0 auto;
                }
            }
            .inputs {
                position: relative;
                width: 100%;
                input {
                    box-sizing: border-box;
                    border: none;
                    width: 275px;
                    height: 40px;
                    border-radius: 20px;
                    padding-left: 50px;
                    font-size: 13px;
                }
                .neirong {
                    height: 40px;
                }
                .Username {
                    background: url(/imgs/login/touxiang.png) no-repeat 10px center;
                    background-color: #f7f4fb;
                }
                // .KeyCode {
                //     background: url(/imgs/login/xinxi.png) no-repeat 10px center;

                // }
                .Password {
                    background: url(/imgs/login/mima.png) no-repeat 10px center;
                    background-color: #f7f4fb;
                }
                .Password1 {
                    background: url(/imgs/login/mima.png) no-repeat 10px center;
                    background-color: #f7f4fb;
                }
                .warning {
                    height: 26px;
                    width: 100%;
                    color: #FF0058;
                    line-height: 20px;
                    font-size: 12px;

                }
                .warning4 {
                    height: 30px;
                    width: 100%;
                    color: #FF0058;
                    line-height: 30px;
                    font-size: 12px;
                    text-align: center;
                }
                // 显示密码
                .isshowpassword {
                    position: absolute;
                    display: block;
                    background-color: red;
                    width: 50px;
                    height: 50px;
                    right: 0px;
                    top: 0px;
                }
                // 短信验证码输入框
                .KeyCode {
                    background: url(/imgs/login/xinxi.png) no-repeat 10px center;
                    float: left;
                    width: 180px;
                    background-color: #f7f4fb;
                }
                .getKeyCode {
                    width: 85px;
                    height: 40px;
                    float: right;
                    background-color: #2d8ffc;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 13px;
                }
                .time {
                    width: 85px;
                    height: 40px;
                    float: right;
                    background-color: #dedede;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 20px;
                }
            }
            .button {
                width: 100%;
                height: 40px;
                border-radius: 20px;
                background-color: #2d8ffc;
                color: #fff;
                text-align: center;
                line-height: 40px;
                font-size: 16px;
                cursor: pointer;
            }
            .unclick {
                .button;
                background-color: #7eb9fb;
                color: #fff;
                cursor: no-drop;
            }
            .gobackdenglu {
                // padding-top: 20px;
                text-align: center;
                color: #2d8ffc;
                font-size: 14px;
                line-height: 40px;
                cursor: pointer;
            }
        }
        .chongzhimimachenggong {
        text-align: center;
        position: absolute;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        width: 490px;
        height: 350px;
            margin-top: -175px;
        padding: 50px 50px 20px 50px;
        background-color: #fff;
        margin-left: -245px;
        .tubiao {
            width: 78px;
            height: 78px;
            margin: 0 auto;
            overflow: hidden;
            img {
                width: 78px;
                height: 78px;
                border-radius: 50%;
            }
        }
        .success {
            font-size: 18px;
            color: #333;
            line-height: 60px;
        }
        .title {
            font-size: 14px;
            color: #666;
        }
        button {
            border: none;
            border-radius: 5px;
            background-color: #2d8ffc;
            height: 40px;
            width: 100%;
            color: #fff;
            margin-top: 40px;
            font-size: 16px;
            cursor: pointer;
        }
    }
    }
</style>
