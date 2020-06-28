<template>
    <div class="jihuoka">
        <div class="mark">
            <div class="tanchuang1" v-show="!isJihuo">
                <div class="title">激活生涯测评卡</div>
                <p class="neirong">
                    <input type="text" v-model="KaNumber" placeholder="请输入生涯测评卡账号" class="Username" >
                </p>
                <!-- <p class="warning">{{warning1}}</p> -->
                <p class="neirong2">
                    <input type="password" v-model="Kapassword" placeholder="请输入生涯测评卡密码" class="Password1" >
                </p>
                <p class="warning">{{warning4}}</p>
                <div @click="goJihuo" class="button">确定</div>
                <div class="close" @click="$router.push('/')">X</div>
            </div>
            <div class="tanchuang2" v-show="isJihuo">
                <div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>
                <div class="title">生涯测评卡激活成功</div>
                <p class="tishiyu">可使用生涯测评功能</p>
                <div class="goback" @click="goBack">确定</div>
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
    .mark {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
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
        padding: 20px 50px;
        position: absolute;
        left: 50%;
        top: 135px;
        margin-left: -245px;
        width: 490px;
        height: 350px;
        background-color: #fff;
        // 关闭返回首页
        .close {
            width: 36px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            color: #fff;
            position: absolute;
            border-radius: 18px;
            right: -18px;
            top: -18px;
            background-color: #e7e4e4;
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
            line-height: 58px;
            color: #2c8ffc;
            border-bottom: 2px solid #2c8ffc;
            margin-bottom: 30px;
        }
        .neirong {
            height: 50px;
            input {
                width: 390px;
                height: 50px;
                padding-left: 50px;
                border: none;
                border-radius: 3px;
                border: 1px solid #e8e4e5;
            }
            margin-bottom: 25px;
        }
        .neirong2 {
            .neirong;
            margin-bottom: 0px;
        }
        .warning {
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            color: red;
        }
        .button {
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 5px;
            color: #fff;
            background-color: #2c8ffc;
            cursor: pointer;
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
        goTest() {

        },
        // 购买生涯卡
        goJihuo() {
            // this.isJihuo = true;
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var card = this.KaNumber;
            var password = this.Kapassword;
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/bindChooseSubjectCard',{
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
                    // 激活生涯卡成功显示成功弹窗
                    _this.isJihuo = true;
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else {
                    _this.warning4 = res.data.msg;
                }
            })
            .catch(function(error) {
                console.log(error)
                // alert('当前服务器繁忙，请刷新')
            });
        },
        // 购买成功返回进行生涯测评
        goBack() {
            // 点击按钮关闭激活卡页面
            // this.$emit('closeJihuoka')
            // 从新跳转到生涯测评页面r
            window.sessionStorage.setItem('testType360', '1');
        },
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
