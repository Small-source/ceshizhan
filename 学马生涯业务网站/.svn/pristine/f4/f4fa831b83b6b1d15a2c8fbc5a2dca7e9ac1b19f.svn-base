<template>
    <!-- 登录 -->
    <div class="denglu">
        <div class="inputs">
            <div class="neirong1">
                <input type="text" v-model="Username" placeholder="请输入手机号码或8位卡号" class="Username" autocomplete="on">
                <!-- <div class="icon"></div> -->
            </div>
            <!-- <p class="warning">{{warning1}}</p> -->
            <!-- <p class="warning"></p> -->
        </div>
        <div class="inputs">
            <div class="neirong2">
                <input type="password" v-model="Password" placeholder="请输入登录密码" class="Password1">
                <div class="icon"></div>
            </div>
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
            <span class="reset" @click="$emit('go-login')">忘记密码?</span>
        </p>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.denglu {
    padding: 0px 62px;
    padding-top: 37px;
    width: 276px;
    .inputs {
        width: 276px;
        .neirong1 {
            height: 40px;
            margin-bottom: 26px;
            .Username {
                box-sizing: border-box;
                padding-left: 40px;
                width: 100%;
                height: 40px;
                font-size: 13px;
                background: url(/imgs/login/icon_user.png) no-repeat 10px center;
                background-color: #f7f4fb;
                line-height: 40px;
                // position: relative;
            }
            // position: relative;
            // .icon {
            //     position: absolute;
            //     width: 40px;
            //     height: 40px;
            //     left: 0px;
            //     top: 0px;
            //     background: url(/imgs/login/icon_user.png) no-repeat 10px center;
            // }
        }
        .neirong2 {
            // .neirong1;
            // .icon {
            //     background: url(/imgs/login/icon_password.png) no-repeat 10px center;
            // }
            .Password1 {
                box-sizing: border-box;
                padding-left: 40px;
                width: 100%;
                height: 40px;
                background: url(/imgs/login/icon_password.png) no-repeat 10px center;
                background-color: #f7f4fb;
                line-height: 40px;
                font-size: 13px;
            }
        }

        // .Username {
        //     box-sizing: border-box;
        //     padding-left: 40px;
        //     width: 100%;
        //     height: 40px;
        //     position: relative;
        // }
       
        

        input {
            border: none;
            border-radius: 20px;
            background-color: #f7f4fb;
        }
     
        .warning {
            height: 25px;
            line-height: 25px;
            width: 100%;
            color: red;
            font-size: 12px;
        }
        .warning2 {
            height: 30px;
            line-height: 30px;
            width: 100%;
            color: red;
            font-size: 12px;
            text-align: center;
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
            color: #2c8ffc;
            cursor: pointer;
            font-size: 14px;
        }

    }
    .button {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        background-color: #2c8ffc;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        margin-bottom: 20px;
        cursor: pointer;
        letter-spacing: 2px;
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
            // this.$emit('go-phone');
            // return;






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
                    window.localStorage.setItem("ymtxUser",JSON.stringify(obj));
                    window.sessionStorage.setItem('ymtxUserMessage', true);
                    // 获取用户信息是否完善
                    window.sessionStorage.setItem('ymtxUserMessageSuccess', ymtxUserMessageSuccess);
                    window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                    // 存储用户名
                    window.sessionStorage.setItem('name', res.data.data.userInfo.name);
                    // window.location.href='/home';
                    // window.history.go(-1);
                    // console.log()
                    // window.location.reload();
                    let path=sessionStorage.page;
                    if(!path){
                        _this.$router.push('/home')
                    }else{
                        _this.$router.push(path)
                    }
                } else if( res.data.code == 2000 && userNameLength == 8 ){
                  
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
                // else if( res.data.code == 2000 && userNameLength == 8 ){
                //     // 绑定手机号
                //     window.sessionStorage.setItem("ymtxCard",JSON.stringify(obj));
                //     window.sessionStorage.setItem('ymtxUserMessage', true);
                //     _this.$emit('go-phone')
                // }
               
            })
            .catch(function(err) {
                console.log(err)
                // alert('请检查您的网络')
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
    }
}
</script>