<template>
    <div class="jihuoka">
        <div class="tanchuang1">
            <div class="title">绑定校园卡</div>
            <p class="neirong">
                <input type="text" v-model="card" placeholder="请输入校园卡账号" class="Username" >
            </p>
            <p class="neirong2">
                <input type="password" v-model="cardPw" placeholder="请输入校园卡密码" class="Password1">
            </p>
            <p style="line-height: 40px">暂无卡密？请联系老师开通！</p>
            <p class="warning">{{warning}}</p>
            <button @click="bindCard">确定</button>
            <div class="close" @click="$router.push('/login')">
                X
            </div>
        </div>
        <!--<div class="tanchuang2" v-show="isJihuo">-->
            <!--<div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>-->
            <!--<div class="title">根据专业选科目卡激活成功</div>-->
            <!--<p class="tishiyu">可使用选科决策功能</p>-->
            <!--<button class="goback" @click="goBack">确定</button>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "campusCard",
        data(){
            return{
                card:'',
                cardPw:"",
                warning:''
            }
        },
        methods:{
            //校园卡绑定
            bindCard(){
                let regUser= /(^1[123456789]\d{9}$)|(^\d{8}$)/;
                let regPw=/[a-zA-z0-9!@#$%^&*.?]{6,20}/;
                let _this=this;
                this.warning=''
                if(!this.card){
                    this.warning='卡号不能为空'
                    return;
                }
                if(!this.cardPw){
                    this.warning='卡密不能为空'
                    return;
                }
                this.$ajax.post(this.G_uri + this.ports.user.bindCampusCard, {
                    phone:this.$route.params.userName,
                    password:this.$route.params.password,
                    card: this.card,
                    cardPassword: this.cardPw,
                    webSite:this.$OEMdomain
                }).then(res=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
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
            },
        },

        mounted(){

        }
    }
</script>

<style type="text/css" lang='less' scoped>
    .jihuoka{
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 100;
        text-align: center;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .tanchuang1 {
            position: absolute;
            box-sizing: border-box;
            padding: 20px 50px;
            // background-color: #fff;
            left: 50%;
            top: 50%;
            margin-left: -245px;
            margin-top: -200px;
            width: 490px;
            height: 400px;
            background-color: #fff;
            .Username {
                background: url(/imgs/login/touxiang.png) no-repeat 10px center;
            }
            .Password1 {
                background: url(/imgs/login/mima.png) no-repeat 10px center;
            }
            .title {
                font-size: 18px;
                color: #2c8ffc;
                line-height: 58px;
                border-bottom: 2px solid #2c8ffc;
                margin-bottom: 30px;
            }
            .neirong {
                height: 50px;
                margin-bottom: 30px;
                input {
                    width: 338px;
                    padding-left: 50px;
                    height: 50px;
                    border-radius: 3px;
                    border: 1px solid #cfcfcf;
                }
            }
            .neirong2 {
                height: 50px;
                // margin-bottom: 30px;
                input {
                    width: 338px;
                    padding-left: 50px;
                    height: 50px;
                    border-radius: 3px;
                    border: 1px solid #cfcfcf;
                }
            }
            .warning {
                height: 35px;
                line-height: 35px;
                font-size: 14px;
                color: red;
            }
            button {
                width: 100%;
                height: 50px;
                font-size: 14px;
                color: #fff;
                background-color: #2c8ffc;
                border-radius: 5px;
                border: none;
                cursor: pointer;
            }
            .close {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                z-index: 2;
                // width: 100%;
                // height: 100%;
                color: #fff;
                position: absolute;
                line-height: 36px;
                text-align: center;
                right: -18px;
                top: -18px;
                background-color: #e7e4e4;
                cursor: pointer;
            }
        }
        .tanchuang2 {
            position: absolute;
            box-sizing: border-box;
            padding: 50px 50px 24px 50px;
            // background-color: #fff;
            left: 50%;
            top: 100px;
            margin-left: -245px;
            width: 490px;
            height: 350px;
            background-color: #fff;
            text-align: center;
            .tubiao {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin: 0 auto;
                overflow: hidden;
            }
            .title {
                padding-top: 20px;
                line-height: 38px;
                color: #333;
                font-size: 18px;
            }
            .tishiyu {
                line-height: 34px;
                height: 34px;
                font-size: 14px;
                color: #666;
                margin-bottom: 40px;
            }
            .goback {
                width: 100%;
                height: 50px;
                font-size: 14px;
                color: #fff;
                background-color: #2c8ffc;
                border-radius: 5px;
                border: none;
            }
        }

    }
</style>
