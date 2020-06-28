<template>
    <div class="reset" v-show="data">
        <div class="title">
            <p>重置登录密码</p>
            <p class="underline"></p>
        </div>
        <div class="inputs">
            <p class="neirong"><input type="text" v-model="Username" placeholder="请输入手机号码" class="Username"></p>
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
            <p class="warning4">{{warning4}}</p>
        </div>
        <div :class="isclick ? 'button' : 'unclick'" @click="Submission">确定</div>
        <div class="gobackdenglu" @click="$emit('go-backdenglu')">返回用户登录</div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
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
        // height: 60px;
        // padding: 20px 0px
        position: relative;
        width: 100%;
        input {
            box-sizing: border-box;
            border: none;
            // border: 1px solid #e8e4e5;
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
</style>
<script>
export default {
props: [ 'data' ],
    data() {
      return { 
        Username: '',
        KeyCode: '',
        Password: '',
        Password1: '',
        // 错误提示词,给了两个空格作为检查,此时虽然无内容
        // warning1: '  ',
        // warning2: '  ',
        // warning3: '  ',
        warning4: '',
        isclick: false,
        // isChecked: false,
        time: 60,
        isShowKeyCode: true,
      }
    },
    watch: {
        // Username() {
        //     var num1 = this.Username;
        //     var reg = /(^1[34578]\d{9}$)|(^\d{8}$)/;
        //     if(reg.test(num1)) {
        //         this.warning1 = ''
        //     }
        //     this.panduan();
        // },
        // KeyCode() {
        //     var num2 = this.KeyCode;
        //     if(num2) {
        //         this.warning2 = ''
        //     }
        // },
        // Password() {
        //     var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
        //     var num3 = this.Password;
        //     if(reg3.test(num3)) {
        //         this.warning3 = ""
        //     }
        //     this.panduan();
        // },
        // Password1() {
        //     var num3 = this.Password;
        //     var num4 = this.Password1;
        //     if(num3 != num4) {
        //         this.warning4 = '  '   
        //     }else {
        //         this.warning4 = ''
        //     }
        //     this.panduan();
        // }
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
        //     console.log(111)
        //     var num1 = this.Username;
        //     // var num2 = this.KeyCode;
        //     // var num3 = this.Password;
        //     // var num4 = this.Password1;
        //     // ^1[34578]\d{9}$
        //     console.log(num1)
        //     var reg = /(^1[34578]\d{9}$)|(^\d{8}$)/;
        //     if(!reg.test(num1)) {
        //         this.warning1 = '请输入正确的手机号或8位卡号'
        //     }else {
        //         console.log(2222)
        //         this.warning1 = ""
        //     }
        // },
        // checked2() {
        //     var num2 = this.KeyCode;
        //     if(!num2) {
        //         this.warning2 = '验证码不能为空'
        //     }else {
        //         this.warning2 = ""
        //     }

        // },
        // checked3() {
        //     var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
        //     var num3 = this.Password;
        //     if(!reg3.test(num3)) {
        //         // 请设置6至20位登录密码
        //         this.warning3 = '请设置6至20位登录密码'
        //     }else {
        //         this.warning3 = ""
        //     }
        // },
        // checked4() {
        //     var num3 = this.Password;
        //     var num4 = this.Password1;
        //     if(num3 != num4) {
        //         this.warning4 = '两次输入的密码不一致，请重新输入！'   
        //     }else {
        //         this.warning4 = ""
        //     }
        // },
        // 提交信息
        Submission() {
            
            // this.$emit('Chenggongtanchuang');
            // this.$emit('godenglu');
            // return;
            
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
            // if(!num5) {
            //     this.warning4 = '请勾选用户服务协议';
            //     return;   
            // }


            if(!this.isclick) {
                return;
            }
            this.$ajax.post(this.G_uri + '/login/forgotPassword', {
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
                    _this.$emit('Chenggongtanchuang');
                    _this.$emit('godenglu');
                }else {
                    // alert(res.data.msg)
                    _this.warning4 = res.data.msg;
                }
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
        // 执行这个方法，判断所有提醒是否已经选择
        // panduan() {
        //     var a1 = this.warning1;
        //     var a2 = this.warning2;
        //     var a3 = this.warning3;
        //     var a4 = this.warning4;
        //     // 当a1-a4都为''时，说明用户都进行了输入，用户输入合法，按钮可以点击提交
        //     if(!(a1||a2||a3||a4)) {
        //         this.isclick = true;
        //     }else {
        //         this.isclick = false;
        //     }
        // }
        panduan() {
            var num1 = this.Username;
            var num2 = this.KeyCode;
            var num3 = this.Password;
            var num4 = this.Password1;
            // var num5 = this.isChecked;
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
                    // console.log(111111)
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
            this.$ajax.post(this.G_uri + '/login/forgetPasswordByPhone',{ 
                phone: phone,
                webSite: OEMdomain 
            })
            .then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                   
                }else {
                    // console.log(res.data.msg)
                    // alert(res.data.msg)
                    _this.warning4 = res.data.msg;
                }
            })
            .catch(function(error) {
                console.log(error)
            });
        }

    },
    created() {
    }
}
</script>