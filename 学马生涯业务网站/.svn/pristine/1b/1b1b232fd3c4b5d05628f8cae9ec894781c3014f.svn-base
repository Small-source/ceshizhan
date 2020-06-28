<template>
    <!-- 登录 -->
    <div class="denglu">
        <div class="inputs">
            <div class="neirong"><input type="text"  v-model="Username" placeholder="请输入手机号码或8位卡号" class="Username" autocomplete="on"></div>
            <!-- <p class="warning">{{warning1}}</p> -->
            <p class="warning"></p>
        </div>
        <div class="inputs">
            <p class="neirong"><input type="password" v-model="Password" placeholder="请输入登录密码" class="Password1"></p>
            <p class="warning2">{{warning2}}</p>
        </div>
        <!-- 登录 -->
        <!-- <div :class="isclicked ? 'button' : 'unclick'" @click="goLogin"> -->
        <div class="button" @click="goLogin">
            登录
        </div>
        <!-- 记住状态，忘记密码 -->
        <p class="jizhuzhuangtai">
            <input type="checkbox" class="remember" id="remember" v-model="ischecked">
            <label for="remember">记住登录状态</label>
            <span class="reset" @click="$emit('go-login')">忘记密码</span>
        </p>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.denglu {
    padding-top: 30px;
    .inputs {
        // height: 40px;
        // padding: 20px 0px;
        width: 100%;
        .Username {
            box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 50px;
            width: 100%;
            height: 50px;
            background: url(/imgs/login/touxiang.png) no-repeat 10px center;
        }
        .Password1 {
            box-sizing: border-box;
            padding-left: 50px;
            width: 100%;
            height: 50px;
            background: url(/imgs/login/mima.png) no-repeat 10px center;
        }
        input {
            border: none;
            border-radius: 5px;
            border: 1px solid #e8e4e5;
        }
        .neirong {
            height: 50px;
        }
        .warning {
            height: 25px;
            line-height: 25px;
            width: 100%;
            color: red;
            font-size: 12px;
        }
        .warning2 {
            height: 35px;
            line-height: 35px;
            width: 100%;
            color: red;
            font-size: 12px;
        }
    }
    
    .jizhuzhuangtai {
        height: 20px;
        line-height: 20px;
        .remember {
            width: 20px;
            height: 20px;
            line-height: 20px;
            float: left;
            font-size: 12px;
            margin-right: 15px;
        }
        label {
            float: left;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
        }
        .reset {
            float: right;
            color: #156def;
            cursor: pointer;
        }

    }
    .button {
            width: 100%;
            height: 50px;
            border-radius: 5px;
            background-color: #2d8ffc;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
            margin-bottom: 20px;
            cursor: pointer;
    }
    .unclick {
        .button;
        background-color: #666;
        color: #fff;
        cursor: no-drop; 
    }
}
</style>
<script>
export default {
// props: [ 'message' ],
    data() {
      return { 
        Username: '',
        Password: '',
        // 错误提示词
        warning1: '',
        warning2: '',
        isclicked: false,
        // 是否勾选记住密码，记住为true
        ischecked: true,
      }
    },
    watch: {
        // 监听数据用户名和登录密码数据变化
        Username() {
            this.warning1 = '';
            this.isclick();
        },
        Password() {
            this.warning2 = '';
            this.isclick();
        }
    },
    methods: {
        // 登录事件
        goLogin() {
            var OEMdomain = this.$OEMdomain;
              
         
            var Username = this.Username;
            var Password = this.Password;
            var reg3 = /[a-zA-z0-9!@#$%^&*.?]{6,20}/
            var _this = this;
            var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
            var obj = { "Username": Username,"Password": Password };
            if(!this.Username) {
                this.warning2 = '账号不能为空';
                return;
            }else {
                this.warning2 = ''
            }
            if(!this.Password) {
                this.warning2 = '密码不能为空';
                return;
            }else {
                this.warning2 = ''
            }
            if(!reg.test(Username)) {
                this.warning2 = '请输入正确的手机号或8位会员卡号'
                return;
            }else {
                this.warning2 = ""
            }
            if(!reg3.test(Password)) {
                // 请设置6至20位登录密码
                this.warning2 = '密码不能少于6位字符，不能超过20位字符';
                return;
            }
            // 如果没有选取记住密码，清空本地记住的用户名和密码
            if(!this.ischecked) {
                // console.log(11111111111111111)
                localStorage.removeItem("ymtxUser");
            }

            // 登录成功，将用户的信息存储在sessionStorage中,关闭浏览器后自动清空
            // sessionStorage.setItem('ymtxUserMessage', true);
            // 登录后跳转到首页
            // window.location.href='/home'
            // this.$route.history.go(-1)
            // this.$router.back(-1)
            this.$ajax.post(this.G_uri + '/login/login', {
                userName: Username,
                password: Password,
                webSite: OEMdomain 
            })
                .then(function(res) {
                    // console.log(res)
                    var userNameLength = _this.Username.length;
                    var is_band_phone = res.data.data.is_band_phone;
                    // console.log(_this.Username.length)
                    if(res.data.code == 2000 && userNameLength == 11) {
                        var ymtxUserMessageSuccess = res.data.data.isImproveInformation;
                        // _this.$emit('go-phone')
                        // console.log(_this, userNameLength);
                        // console.log(res.data.data.token)
                        if(_this.ischecked) {
                            window.localStorage.setItem("ymtxUser",JSON.stringify(obj));
                        }
                        window.sessionStorage.setItem('ymtxUserMessage', true);
                        window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                        // 获取用户信息是否完善
                        window.sessionStorage.setItem('ymtxUserMessageSuccess', ymtxUserMessageSuccess);
                        // 存储用户名
                        window.sessionStorage.setItem('name', res.data.data.userInfo.name);
                        console.log(10)
                        window.location.href='/';
                        // _this.$router.back(-1);
                    }  else if( res.data.code == 2000 && userNameLength == 8 ){

                        // 绑定手机号
                        window.sessionStorage.setItem('ymtxUserMessage', true);
                        window.sessionStorage.setItem("ymtxCard",JSON.stringify(obj));

                        if(is_band_phone == 1) {
                            _this.$emit('go-phone');
                        }else if(is_band_phone == 2) {
                            _this.$router.push('/perfectInformation');
                        }
                    } else {
                        _this.warning2 = res.data.msg;
                    }

                })
                .catch(function(err) {
                    // console.log(err)
                    alert('请检查您的网络')
                });
        },
        // 验证按钮能否变为可点击的状态 isclick=true
        isclick() {
            var Username = this.Username;
            var Password = this.Password; 
            if(Username && Password) {
                this.isclicked = true;
            }else {
                this.isclicked = false;
            }
        },
        // 已进入页面，立即读取存在本地的用户名和密码
        goReaduser() {
            // console.log(localStorage.getItem("ymtxUser"))
            if(localStorage.getItem("ymtxUser")) {
                var obj = JSON.parse(localStorage.getItem("ymtxUser"));
                this.Username = obj.Username;
                this.Password = obj.Password;
            } else {
                return;
            }
        }
    },
    created() {

        this.goReaduser();
    },
    mounted(){
        var _this = this;
        document.onkeydown = function(e) {
          let key = window.event.keyCode;
          if (key == 13) {
            _this.goLogin();
          }
        }
    } 
}
</script>