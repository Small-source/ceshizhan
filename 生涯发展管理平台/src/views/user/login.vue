<template>
    <div class="login">
        <div class="denglu">
            <input type="text" v-model="userName" placeholder="请输入手机号码或8位卡号">
            <input  type="password" v-model="password" placeholder="请输入登录密码">
            <div class="warning">{{warning}}</div>
            <div class="button" @click="login">
                登录
            </div>
            <router-link to="/forgetPassword">忘记密码?</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                userName:'',
                password:'',
                webSite:'',
                warning:''
            }
        },
        methods:{
            //登录
            login(){
                let regUser= /(^1[123456789]\d{9}$)|(^\d{8}$)/;
                let regPw=/[a-zA-z0-9!@#$%^&*.?]{6,20}/;
                let _this=this;
                this.warning=''
                if(!this.userName){
                    this.warning='账号不能为空'
                    return;
                }
                if(!this.password){
                    this.warning='密码不能为空'
                    return;
                }
                if(!regUser.test(this.userName)){
                    this.warning='请输入正确的手机号或8位会员卡号'
                    return;
                }
                if(!regPw.test(this.password)){
                    this.warning='密码不能少于6位字符，不能超过20位字符'
                    return;
                }
                this.$ajax.post(this.G_uri + this.ports.user.login, {
                    userName: this.userName,
                    password: this.password,
                    webSite:this.$OEMdomain
                }).then(res=>{
                    if(res.data.code==2000){
                            let data=res.data.data;
                            if(data.is_band_card==1){
                                _this.$router.push({
                                    name:'绑定校园卡',
                                    params:{
                                        userName:_this.userName,
                                        password:_this.password
                                    }
                                })
                                return;
                            }
                            if(data.is_band_phone==1){
                                _this.$router.push({
                                    name:'绑定手机号',
                                    params:{
                                        card:_this.userName,
                                        cardPw:_this.password
                                    }
                                })

                                return;
                            }
                            if(data.token){
                                window.sessionStorage.setItem('ymtxToken', data.token);
                            }
                            if(data.isImproveInformation==2){
                                _this.$router.push('/perfectInformation')
                                return;
                            }
                           _this.$router.push('/careerArchives')
                    }else{
                        _this.warning=res.data.msg;
                    }
                })
            }
        },
        mounted(){

        },
       beforeCreate(){

        }
    }
</script>

<style scoped lang="less">
    *{
        box-sizing: border-box;
        letter-spacing: 2px;
    }
    .login{
        width: 480px;
        height: 390px;
        padding: 100px 50px 0 70px;
        background:url("/imgs/user/bg_zhanghaodenglu2.png");
        position: absolute;
        left: 50%;
        top:50%;
        margin-top: -190px;
        margin-left: -240px;
        input{
            width: 100%;
            height: 60px;
            // padding-top: 14px;
            font-size: 16px;
            text-indent: 30px;
            background: none;
        }
        .button{
            background: #3D91F4;
            text-align: center;
            width: 100%;
            height: 46px;
            line-height: 46px;
            letter-spacing: 3px;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        a{
            color:#3286E8;
            display: block;
            text-align: center;
            width: 80px;
            margin: 10px auto;
        }
        .warning{
            text-align: center;
            color:red;
            line-height: 54px;
            height: 54px;
        }
    }
</style>
