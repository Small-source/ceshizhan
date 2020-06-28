<template>
    <!-- 激活通道 -->
    <div class="active_channel">
        <div class="title">激活VIP</div>
        <form class="register">
            <div class="inputs">
                <div class="neirong"><span>激活卡号：</span><input type="number" v-model.trim="activationCardNumber" placeholder="请输入您所购买的VIP卡的卡号" class="Username"></div>
            </div>
             <div class="inputs">
                <div class="neirong"><span>激活密码：</span><input type="password" v-model="activationPassword" placeholder="请输入您所购买的VIP卡的激活密码" class="Username0" ></div>
                <!-- <p class="warning"></p> -->
            </div>
            <div class="inputs">
                <div class="neirong"><span>手机号码：</span><input type="number" v-model.trim="username" placeholder="请输入您正在使用的手机号码" class="Username"></div>
                <p class="warning">该手机号将会作为你的登录账号，一旦填写不可更改，请谨慎选择</p>
            </div>
            <div class="inputs">
                <div class="neirong"><span>验 证 码：</span><input type="text" v-model="keyCode" placeholder="验证码" class="KeyCode"><span @click="getKeyCode" class="getKeyCode" v-show="isShowKeyCode">发送验证码</span><span class="time" v-show="!isShowKeyCode">{{time}} s</span></div>
                <!-- <p class="warning"></p> -->
            </div>
            <div class="inputs">
                <div class="neirong"><span>设置密码：</span><input type="password" v-model="password" placeholder="请设置6至20位登录密码" class="Password"></div>
                <!-- <p class="warning"></p> -->
            </div>
            <div class="inputs">
                <div class="neirong"><span>确认密码：</span><input type="password" value="" v-model="password1" placeholder="请再次输入登录密码" class="Password1"></div>
                <p class="warning4">{{warning4}}</p>
            </div>
            <div :class="isclick ? 'button' : 'unclick'" @click="Submission" id="jihuo">立即激活</div>
        </form>
        <jihuochengong v-show="isShowSucces" :src="src" :message="message"></jihuochengong>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    #jihuo{
        letter-spacing: 2px;
        position: relative;
        top:-30px;
    }
.active_channel {
    .title {
        font-size: 16px;
        color: #333;
        text-align: center;
        font-weight: 600;
        line-height: 60px;
        background-color: #fff;
    }
    .register {
        padding: 0px 55px;
        .inputs {
            // height: 70px;
            margin-bottom: 26px;
            overflow: hidden;
            .neirong {
                height: 46px;
                span {
                    float: left;
                    width: 86px;
                    height: 44px;
                    line-height: 44px;
                    text-align: right;
                    color: #333;
                    font-size: 15px;
                }
                input {
                    float: left;
                    border: none;
                    border: 1px solid #e8e4e5;
                    width: 380px;
                    height: 44px;
                    border-radius: 2px;
                    padding-left: 14px;
                    font-size: 14px;
                    box-sizing: border-box;
                    padding-bottom: 1px;
                }
                .KeyCode {
                    width: 235px;
                    margin-right: 10px;
                }
                .getKeyCode {
                    width: 135px;
                    height: 46px;
                    float: left;
                    background-color: #2d8ffc;
                    color: #fff;
                    text-align: center;
                    line-height: 46px;
                    border-radius: 5px;
                    cursor: pointer;
                    letter-spacing: 2px;
                    font-size: 15px;
                }
                .time {
                    width: 135px;
                    height: 46px;
                    float: left;
                    background-color: #dedede;
                    color: red;
                    text-align: center;
                    line-height: 46px;
                    border-radius: 5px;
                }

            }
            // .Username {
            //     background: url(/imgs/login/touxiang.png) no-repeat 10px center;
            // }
            // .Password {
            //     background: url(/imgs/login/mima.png) no-repeat 10px center;

            // }
            // .Password1 {
            //     background: url(/imgs/login/mima.png) no-repeat 10px center;

            // }
            .warning {
                height: 24px;
                font-size: 12px;
                color: red;
                line-height: 24px;
                margin-left: 86px; 
                padding-left: 14px; 
                background-color: #f9f9f9;
                width: 380px;
                box-sizing: border-box;
            }
            .warning4 {
                padding-left: 86px;
                height: 35px;
                font-size: 14px;
                width: 100%;
                color: #FF0058;
                line-height: 35px;
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
                width: 360px;
                height: 46px;
                border-radius: 5px;
                background-color: #2d8ffc;
                text-align: center;
                line-height: 46px;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
                margin: 0 auto;
                &:active {
                    background-color: #0472ed;
                }
        }
        // 不能点击的状态
        .unclick {
            .button;
            background-color: #7eb9fb;
            color: #fff;
            cursor: no-drop;
        }
    }   
}
</style>
<script>
    // 引入激活生涯卡组件
    import jihuochengong from '../../../components/jihuochengong.vue';
    export default {
        components: { jihuochengong },
        data() {
            return {
                isShowSucces: false,
                // 激活卡号
                activationCardNumber: '',
                // 激活密码
                activationPassword: '',
                // 手机号
                username: '',
                // 验证码
                keyCode: '',
                // 密码
                password: '',
                password1: '',
                warning4: '',
                isclick: false,
                isshowxieyi: false,
                isChecked: true,
                time: 60,
                isShowKeyCode: true,
                message: '激活成功',
                src: '/perfectInformation'
            }
        },
        watch: {
            activationCardNumber() {
                this.panduan();
            },
            activationPassword() {
                this.panduan();
            },
            username() {
                this.panduan();
            },
            keyCode() {
                this.panduan();
            },
            password() {
                this.panduan();
            },
            password1() {
                this.panduan();
            }
            // // 勾选同意
            // isChecked() {
            //     this.panduan();
            // }
        },
        methods: {
            Submission() {
                // this.isShowSucces = true;
                // return;


                var OEMdomain = this.$OEMdomain;
                // 激活卡号
                var activationCardNumber = this.activationCardNumber;
                // 激活密码
                var activationPassword = this.activationPassword;
                // 手机号
                var phone = this.username;
                // 验证码
                var _this = this;
                // var phone = this.Username;
                var reg = /^1[34578]\d{9}$/;
                var code = this.keyCode;
                var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
                var loginPassword = this.password;
                var confirmPassword = this.password1;

                // var num5 = this.isChecked;
                if(!activationCardNumber || !activationPassword) {
                    this.warning4 = '激活卡号或激活密码不能为空';
                    return;
                }
                if(!phone) {
                    this.warning4 = '手机号码不能为空';
                    return;
                }
                if(!reg.test(phone)) {
                    this.warning4 = '手机号格式不正确';
                    return;
                }
                if(!code) {
                    this.warning4 = '验证码不能为空';
                    return;
                }
                if(!loginPassword) {
                    this.warning4 = '密码不能为空';
                    return;
                }
                if(!reg3.test(loginPassword)) {
                    // 请设置6至20位登录密码
                    this.warning4 = '密码不能少于6位字符，不能超过20位字符';
                    return;
                }
                if(loginPassword != confirmPassword) {
                    this.warning4 = '两次输入的密码不一致';
                    return;
                }
                // if(!num5) {
                //     this.warning4 = '请勾选用户服务协议';
                //     return;
                // }

                this.$ajax.post(this.G_uri + '/login/loginAndBindPhone', {
                    card: activationCardNumber,
                    password: activationPassword,
                    phone: phone,
                    code: code,
                    loginPassword: loginPassword,
                    confirmPassword: confirmPassword,
                    webSite: OEMdomain
                })
                    .then(function(res) {
                        console.log(res)
                        if(res.data.code == 2000) {
                            window.sessionStorage.setItem('ymtxUserMessage', true);
                            window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                            _this.src = '/perfectInformation';
                            _this.isShowSucces = true;
                        }else {
                            // alert(res.data.msg)
                            _this.warning4 = res.data.msg;
                        }
                        // this.$emit('Chenggongtanchuang');

                        // this.$router.back(-1);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            // 点击显示密码
            isshowpassword() {
                // console.log(this.$refs.Password0.type)
                if(this.$refs.Password0.type === "password") {
                    this.$refs.Password0.type = "text"
                }else {
                    this.$refs.Password0.type = "password"
                }
            },
            panduan() {
                var num1 = this.activationCardNumber;
                var num2 = this.activationPassword;
                var num3 = this.username;
                var num4 = this.keyCode;
                var num5 = this.password;
                var num6 = this.password1;
                if(num1 && num2 && num3 && num4 && num5 && num6) {
                    this.isclick = true;
                }else {
                    this.isclick = false;
                }
            },
            gobackCheckd() {
                this.isshowxieyi = false;
                this.isChecked = true;
            },
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
            // 获取短信验证码
            getKeyCode() {

                var phone = this.username;
                var reg = /(^1[34578]\d{9}$)|(^\d{8}$)/;
                var _this = this;
                var OEMdomain = this.$OEMdomain;
                if(!reg.test(phone)) {
                    this.warning4 = '请输入正确的手机号';
                    return;
                }else {
                    this.warning4 = ""
                }
                // this.isShowKeyCode = false;
                // this.timers();
                this.$ajax.post(this.G_uri + '/register/getPhoneNumberByCode',{
                    phone: phone,
                    webSite: OEMdomain
                })
                    .then(function(res) {
                        // console.log(res)
                        if(res.data.code == 2000) {
                            _this.isShowKeyCode = false;
                            _this.timers();
                        }else {
                            _this.warning4 = res.data.msg;
                            // alert(res.data.msg)
                        }
                    })
                    .catch(function(error) {
                        // alert(error)
                        console.log(error)
                    });
            }
        },
        created() {
        }
    }
</script>