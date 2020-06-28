<template>
    <div id="tuance">
        <div class="mainTuance">
            <div class="tuanTitle">
                新高考智能选科分析
                <router-link to="/home">返回首页</router-link>
            </div>
            <div class="tuanBottom">
                <img src="/imgs/logo/bg_zuo.png" alt="">
                <div>
                    <div class="tit">请使用学校发放的账号进行登录</div>
                    <div class="input">
                        <img src="/imgs/login/icon_user.png" alt="">
                        <input type="text" placeholder="请输入卡号" v-model="card">
                    </div>
                    <div class="input">
                        <img src="/imgs/login/icon_password.png" alt="" >
                        <input type="text" placeholder="请输入密码" v-model="password">
                        <div class="waring">{{waring}}</div>
                    </div>
                    <div class="denglu" @click="submit">
                        登录
                    </div>
                    <div class="zhuangtai">
                        <input type="checkbox" v-model="ischecked">
                        <span>记住登录状态</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tuance",
        data(){
          return {
              ischecked:true,
              waring:'',
              card:'',
              password:''
          }
        },
        mounted(){
            let width=$(window).width();
            let height=$(window).height();
            $('#tuance').css({width:width,height:height})
            window.onresize=function () {
                let width=$(window).width();
                let height=$(window).height();
                $('#tuance').css({width:width,height:height})
            }
        },
        methods:{
            submit(){
                this.waring=''
                if(!this.card){
                    this.waring='卡号不能为空';
                    return false
                }
                if(!this.password){
                    this.waring='密码不能为空';
                    return false
                }
                if(!/^9\d{7}$/.test(this.card)){
                    this.waring='卡号输入格式不正确'
                    return false
                }
                if(!this.ischecked) {
                    // console.log(11111111111111111)
                    localStorage.removeItem("ymtxUser");
                }
                var OEMdomain = this.$OEMdomain;
                var obj = { "Username":this.card,"Password": this.password };
                this.$ajax.post(this.G_uri + '/login/teamReportLogin', {
                    userName: this.card,
                    password: this.password,
                    webSite: OEMdomain
                }).then(res=>{
                    if( res.data.code == 2000 ){
                        var isImproveInformation=res.data.data.isImproveInformation;
                        window.sessionStorage.setItem('ymtxUserMessage', true);
                        if(this.ischecked){
                            window.localStorage.setItem("ymtxUser",JSON.stringify(obj));
                        }
                        window.sessionStorage.setItem("ymtxCard",JSON.stringify(obj));
                        window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                        window.sessionStorage.setItem('name', res.data.data.userInfo.name);
                        window.sessionStorage.setItem('tuance', 3);
                        if(isImproveInformation == '1') {
                            this.$router.push('/thome');
                        }else if(isImproveInformation == '2') {
                            this.$router.push('/perfectInformation');
                        }
                    }else{
                        this.waring='账号或密码不正确'
                    }
                })
            },
            // 已进入页面，立即读取存在本地的用户名和密码
            goReaduser() {
                // console.log(localStorage.getItem("ymtxUser"))
                if(localStorage.getItem("ymtxUser")) {
                    var obj = JSON.parse(localStorage.getItem("ymtxUser"));
                    this.card = obj.Username;
                    this.password = obj.Password;
                } else {
                    return;
                }

            }
        },
        created(){
            this.goReaduser();
        }
    }
</script>

<style scoped >
    #tuance{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999999999;
        background-image: url("/imgs/logo/bg.png");
        background-size: 100% 100%;
    }
    .mainTuance{
        width: 1056px;
        height: 556px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -528px;
        margin-top:-278px ;
    }
    .tuanTitle{
        font-size: 28px;
        color: #323433;
        font-weight: 600;
        letter-spacing: 0.1em;
        margin-bottom: 28px;
    }
    .tuanTitle a{
        float: right;
        display: block;
        width: 136px;
        height: 46px;
        line-height: 46px;
        border-radius: 23px;
        text-align: center;
        color:#2B90FC;
        font-size: 16px;
        background: #fff;
        position: relative;
        top:-8px;
    }
    .tuanBottom{
        height: 493px;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .tuanBottom>img{
        width: 50%;
        height: 100%;
        float:left;
    }
    .tuanBottom>div{
        width: 50%;
        float: left;
        height: 100%;
        background: #fff;
    }
    .tit{
        margin: 102px 0 63px;
        text-align: center;
        font-size: 20px;
        color:#333;
        font-weight: 600;
        letter-spacing: 0.1em;
    }
    .input{
        width: 275px;
        height: 42px;
        margin: 0 auto 20px;
        position: relative;
    }
    .input>img{
        position: absolute;
        left:15px;
        top:10px;
        width: 20px;
        height: 22px;
    }
    .input>input{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 21px;
        background: #F7F4FB;
        text-indent: 50px;
        font-size: 12px;
    }
    .denglu{
        width: 275px;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        background: #2D8FFC;
        text-align: center;
        line-height: 40px;
        letter-spacing: 0.1em;
        color: white;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
    }
    .zhuangtai{
        width: 275px;
        font-size: 13px;
        margin: 15px auto 0;
    }
    .zhuangtai>input{
        width: 16px;
        height: 16px;
    }
    .zhuangtai>span{
        position: relative;
        top:-3px;
        left:5px;
    }
    .waring{
        width: 100%;
        position: absolute;
        height: 28px;
        top:40px;
        text-align: center;
        color: red;
        font-size: 12px;
    }
</style>