<template>
    <div class="jihuoka">
        <div class="mark">
            <div class="tanchuang1" v-show="!isJihuo">
                <p class="title">激活竞赛指导卡</p>

                <p class="neirong">
                    <input type="text" v-model="KaNumber" placeholder="请输入竞赛指导卡账号" class="Username"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入竞赛指导卡账号'"  >
                </p>
                <!-- <p class="warning">{{warning1}}</p> -->
                <p class="neirong2">
                    <input type="password" v-model="Kapassword" placeholder="请输入竞赛指导卡密码" class="Password1"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入竞赛指导卡密码'" >
                </p>
                <p class="warning">{{warning4}}</p>
                <div @click="goJihuo" class="button">确定</div>
                <div class="close" @click="$router.go(-1)">×</div>
            </div>
            <div class="tanchuang2" v-show="isJihuo">
                <div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>
                <div class="title">竞赛指导卡激活成功</div>
                <p class="tishiyu">可观看竞赛视频</p>
                <div class="goback" @click="$emit('go-close')">返回</div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.jihuoka{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    letter-spacing: 1px;
    .mark {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 100;
        background-color: rgba(51,51,51,.5);
        text-align: center;
    }   
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .tanchuang1 {
        box-sizing: border-box;
        // padding: 0px 40px;
        position: absolute;
        left: 50%;
        top: 160px;
        margin-left: -220px;
        width: 440px;
        height: 360px;
        background-color: #fff;
        // 关闭返回首页
        .close {
            width: 36px;
            height: 36px;
            text-align: center;
            line-height: 33px;
            color: #333;
            position: absolute;
            border-radius: 18px;
            font-size: 26px;
            right: 2px;
            top: 0px;
            // background-color: #e7e4e4;
            z-index: 1;
            cursor: pointer;
        }
        .Username {
            background: url(/imgs/login/touxiang.png) no-repeat 10px center;
        }
        .Password1 {
            background: url(/imgs/login/mima.png) no-repeat 10px center;
        }
        .title {
            text-align: center;
            font-size: 18px;
            line-height: 54px;
            color: #333;
            background-color: #f2f2f2;
            // border-bottom: 2px solid #2c8ffc;
            margin-bottom: 40px;
        }
        input::placeholder {
            color: #c5c5c5;
            font-size: 14px;
            line-height: 42px;
            letter-spacing: 1px;
        }
        .neirong {
            padding: 0px 40px;
            height: 44px;
            input {
                width: 302px;
                height: 42px;
                padding-left: 56px;
                line-height: 42px;
                border: none;
                border-radius: 2px;
                border: 1px solid #e8e4e5;
            }
            margin-bottom: 30px;
        }
        .neirong2 {
            .neirong;
            margin-bottom: 20px;
        }
        .warning {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: red;
        }
        .button {
            width: 360px;
            margin: 0 auto;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 5px;
            color: #fff;   
            background-color: #2c8ffc;
            cursor: pointer;
            letter-spacing: 2px;
            &:active {
                background-color: #156def;
            }
        }

    }
    .tanchuang2 {
        box-sizing: border-box;
        padding: 50px 50px 20px 50px;
        position: absolute;
        left: 50%;
        top: 120px;
        margin-left: -245px;
        width: 490px;
        height: 350px;
        background-color: #fff;
        .tubiao {
            width: 78px;
            height: 78px;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 50%;
        }
        .title {
            line-height: 58px;
            font-size: 18px;
            color: #333;
            text-align: center;
        }
        .tishiyu {
            // line-height: 58px;
            font-size: 14px;
            color: #666;
            text-align: center;
            margin-bottom: 50px;
        }
        .goback {
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 5px;
            color: #fff;   
            background-color: #2c8ffc;
            cursor: pointer;
        }
    }
   
}
</style>
<script>
export default {
    props: [ 'message' ],
    data() {
        return {
            // 选科卡账号 
            KaNumber: '',
            // 选科卡密码
            Kapassword: '',
            warning4: '',
            isJihuo: false,
        }
    },
    methods: {
        // 购买教辅资源视频卡
        goJihuo() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var card = this.KaNumber;
            var password = this.Kapassword;
            var _this = this;
            if(!card && !password) {
                this.warning4 = '卡号或密码不能为空';
                return;
            }
            this.$ajax.post(this.G_uri + '/competitionVideo/bindViewCard',{
                card: card,
                password: password
            },{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                    // 激活教辅资源卡成功显示成功弹窗
                    // _this.$emit('go-oppenUniversity');
                    _this.isJihuo = true;
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                }else {
                    _this.warning4 = res.data.msg;
                }
           
            })
            .catch(function(error) {
                // alert('当前服务器繁忙，请刷新')
                console.log(error);
            }); 
        }



        // stop(){//滑动限制
        //   var mo=function(e){e.preventDefault()};
        //   document.body.style.overflow='hidden';
        //   document.addEventListener("touchmove",mo,false);//禁止页面滑动
        // },
        // move(){//取消滑动限制
        //   var mo=function(e){e.preventDefault();};
        //   document.body.style.overflow='';//出现滚动条
        //   document.removeEventListener("touchmove",mo,false);
        // }
    },
    mounted() {
        
    },
    created() {
       // this.stop();
    }
}
</script>