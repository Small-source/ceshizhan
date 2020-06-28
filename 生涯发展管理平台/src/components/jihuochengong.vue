<template>
    <div class="jihuochengong">
        <div class="mark">
            <div class="tanchuang2">
                <div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>
                <div class="title">{{message}}</div>
                <p class="tishiyu">可使用该功能</p>
                <div class="goback" @click="$router.push(src)">确定</div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.jihuochengong{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // background: url(/imgs/xingaokao/shengyaceping/shengyaceping01.png) no-repeat;
    background-size: 100% 100%;
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
    .tanchuang2 {
        box-sizing: border-box;
        padding: 50px 50px 20px 50px;
        position: absolute;
        left: 50%;
        top: 180px;
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
            cursor: pointer; 
            background-color: #2c8ffc;
        }

    }   
}
</style>
<script>
export default {
    props: [ 'message', 'src' ],
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
                // alert('当前服务器繁忙，请刷新')
            }); 
        },
        // 购买成功返回进行生涯测评
        goBack() {
            // 点击按钮关闭激活卡页面
            // this.$emit('closeJihuoka')
            // 从新跳转到生涯测评页面r
            this.$route.push("/shengyaceping");
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