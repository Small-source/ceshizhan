<template>
    <div class="mark">
        <div class="BangdingPhone">
            <div class="top-title">绑定手机号</div>
            <div class="inputs">
                <p class="neirong"><input type="text" v-model="Username" placeholder="请输入手机号码" class="Username" autocomplete="on"></p>
                <!-- <p class="warning">{{warning1}}</p> -->
                <p class="warning"></p>
            </div>
            <div class="inputs">
                <p class="neirong"><input type="text" v-model="KeyCode" placeholder="请输入短信验证码" class="KeyCode"><span @click="getKeyCode" class="getKeyCode" v-show="isShowKeyCode">发送验证码</span><span class="time" v-show="!isShowKeyCode">{{time}} s</span></p>
                <!-- <p class="warning">{{warning2}}</p> -->
                <p class="warning"></p>
            </div>
            <div class="inputs">
                <p class="neirong"><input type="password" v-model="Password" placeholder="请设置6至20位登录密码" ref= "Password0" class="Password"></p>
                <!-- <span class="isshowpassword" @click="isshowpassword"></span> -->
                <!-- <p class="warning">{{warning3}}</p> -->
                <p class="warning"></p>
            </div>
            <div class="inputs">
                <p class="neirong"><input type="password" value="" v-model="Password1" placeholder="请再次输入登录密码" class="Password1"></p>
                <!-- <p class="warning4">{{warning4}}</p> -->
                <p class="warning4">{{warning4}}</p>
            </div>
            <!-- 服务协议 -->
           <!--  <div class="xieyi">
                <label><input type="checkbox"v-model="isChecked">勾选同意</label>
                <span class="fuwuxieyi" @click="isshowxieyi = true">《用户服务协议》</span>
                <div class="ServicesAgreement" v-show="isshowxieyi">
                    <div class="neirongBox">
                        <p class="biaoti">服务协议</p>
                        <p class="title">总则</p>
                        <p class="xiangqing"></p>
                        <p>此处显示内容</p>
                        <div class="closes" @click="isshowxieyi = false">X</div>
                        <div class="gobackCheckd" @click="gobackCheckd">我以阅读并同意用户服务协议内容</div>
                    </div>
                </div>
            </div> -->
            <div :class="isclick ? 'button' : 'unclick'" @click="Submission">点击绑定</div>
        </div>
    </div>    
</template>
<style type="text/css" lang='less' scoped>
.mark {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000000000;
    background: rgba(51,51,51,.45);
}
.BangdingPhone {
    width: 490px;
    height: 530px;
    position: absolute;
    left: 50%;
    margin-left: -245px;
    top: 140px;
    box-sizing: border-box;
    // padding-top: 20px;
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
        background: url(/imgs/login/touxiang.png) no-repeat 10px center;
    }
    .KeyCode {
        background: url(/imgs/login/xinxi.png) no-repeat 10px center;
        width: 240px;
        float: left;

    }
    .Password {
        background: url(/imgs/login/mima.png) no-repeat 10px center;

    }
    .Password1 {
        background: url(/imgs/login/mima.png) no-repeat 10px center;

    }
    .inputs {
        position: relative;
        width: 100%;
        input {
            box-sizing: border-box;
            border: none;
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
            line-height: 12px;
        }
        .warning4 {
            height: 35px;
            font-size: 12px;
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
            cursor: pointer;
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
            // display: inline-block;
            margin-right: 15px;
            width: 20px;
            height: 20px;
            border: none;
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
                // z-index: 10000;、
                .biaoti {
                    line-height: 58px;
                    font-size: 18px;
                    color: #2d8ffc;
                    text-align: center;
                    border-bottom: 1px solid #e7e4e4;
                }
                .title {

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
                    cursor: pointer;
                }
                // 点击返回，并勾选协议
                .gobackCheckd {
                    font-size: 16px;
                    color: #156def;
                    text-align: center; 
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
<script>
export default {
// props: [ 'message' ],
    data() {
      return { 
        Username: '',
        KeyCode: '',
        Password: '',
        Password1: '',
        // 卡号
        card: '',
        // 对应卡号密码
        Password0: '',
        // 错误提示词,给了两个空格作为检查,此时虽然无内容
        // warning1: '  ',
        // warning2: '  ',
        // warning3: '  ',
        warning4: '',
        isclick: false,
        isshowxieyi: false,
        // 用户服务协议
        isChecked: true,
        time: 60,
        isShowKeyCode: true,
      }
    },
    watch: {
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
        // checked1() {
        //     var num1 = this.Username;
        //     var reg = /^1[34578]\d{9}$/;
        //     if(!num1) {
        //         console.log(99999999)
        //         this.warning4 = '手机号码不能为空'
        //         return;
        //     }
        //     if(!reg.test(num1)) {
        //         this.warning4 = '账号或密码不正确'
        //     }else {
        //         this.warning4 = ""
        //     }
            
        // },
        // checked2() {
        //     var num2 = this.KeyCode;
        //     if(!num2) {
        //         this.warning4 = '验证码不能为空'
        //     }else {
        //         this.warning4 = ""
        //     }
        // },
        // checked3() {
        //     var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
        //     var num3 = this.Password;
        //     if(!num3) {
        //         this.warning4 = '密码不能为空';
        //         return;
        //     }
        //     if(!reg3.test(num3)) {
        //         // 请设置6至20位登录密码
        //         this.warning4 = '密码不能少于6位字符,密码不能超过20位字符';
        //         return;
        //     }else {
        //         this.warning4 = ""
        //     }
        // },
        // checked4() {
        //     var num3 = this.Password;
        //     var num4 = this.Password1;
        //     if(num3 != num4) {
        //         this.warning4 = '两次输入的密码不一致';
        //         return;   
        //     }else {
        //         this.warning4 = ""
        //     }
        // },
        // checked5() {
        //     var num5 = this.isChecked;
        //     if(!num5) {
        //         this.warning4 = '请勾选用户服务协议';
        //         return;   
        //     }else {
        //         this.warning4 = ""
        //     }
        // },
        
        Submission() {
            // this.$emit('Chenggongtanchuang');
            // return;




            var OEMdomain = this.$OEMdomain;
            var phone = this.Username;
            var code = this.KeyCode;
            var loginPassword = this.Password;
            // 8位会员卡号
            var card = this.card;
            // 对应会员卡密
            var password = this.Password0;
            var _this = this;
            // var obj = { "Username": phone,"Password": passwordOne };

            var num1 = this.Username;
            var reg = /^1[123456789]\d{9}$/;
            var num2 = this.KeyCode;
            var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
            var num3 = this.Password;
            var num4 = this.Password1;
            var num5 = this.isChecked;
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
            if(!num5) {
                this.warning4 = '请勾选用户服务协议';
                return;   
            }

            // this.checked1();
            // this.checked2();
            // this.checked3();
            // this.checked4();
            // this.checked5();
            // console.log('hahahaha');
            this.$ajax.post(this.G_uri + '/login/bindPhone', {
                phone: phone,
                loginPassword: loginPassword,
                code: code,
                card: card,
                password: password,
                webSite: OEMdomain 
            })
            .then(function(res) {
                // this.$emit('isPerfectInformation');
                // console.log(res)
                if(res.data.code == 2000) {
                    window.sessionStorage.setItem('ymtxUserMessage', true);
                    window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                    _this.$emit('Chenggongtanchuang');
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
            var num1 = this.Username;
            var num2 = this.KeyCode;
            var num3 = this.Password;
            var num4 = this.Password1;
            var num5 = this.isChecked;
            if(num1 && num2 && num3 && num4 && num5) {
                this.isclick = true;
            }else {
                this.isclick = false;
            }
        },
        // 执行这个方法，判断所有提醒是否已经选择
        // panduan() {
        //     var a1 = this.warning1;
        //     var a2 = this.warning2;
        //     var a3 = this.warning3;
        //     var a4 = this.warning4;
        //     var a5 = this.isChecked;
        //     // 当a1-a4都为''时，说明用户都进行了输入，用户输入合法，按钮可以点击提交
        //     if((!(a1||a2||a3||a4)) && a5) {
        //         this.isclick = true;
        //     }else {
        //         this.isclick = false;
        //     }
        // },
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
            var phone = this.Username;
            var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            if(!reg.test(phone)) {
                this.warning4 = '请输入正确的手机号';
                return;
            }else {
                this.warning4 = ""
            }
            
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
                    // console.log(res.data.msg)
                    // alert(res.data.msg)
                    _this.warning4 = res.data.msg;
                }
            })
            .catch(function(error) {
                console.log(error);
                // alert(error);
            });
        },
        goReaduser() {
            // console.log(localStorage.getItem("ymtxUser"))
            if(window.sessionStorage.getItem("ymtxCard")) {
                var obj = JSON.parse(sessionStorage.getItem("ymtxCard"));
                this.card = obj.Username;
                this.Password0 = obj.Password;
            } else {
                return;
            }
           
        }
    },
    created() {
        this.goReaduser();
    }
}
</script>