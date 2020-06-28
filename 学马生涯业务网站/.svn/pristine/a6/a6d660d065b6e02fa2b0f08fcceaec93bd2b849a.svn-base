<template>
    <div class="Login">
        <div class="inner">
            <!-- 白色弹窗 -->
            <div class="tanchuang" v-if="RegisterSuccess=='tanchuang'">
                <div class="tanchuang_left">
                    <img src="/imgs/login/icon_.left.png" alt="">
                </div>
                <div class="tanchuang_right">
                    <div class="tanchuang_box">
                        <ul class="lis">
                            <li @click="go('Denglu')" :class="isgoLogin == 'Denglu' ? 'active': ''">
                                <p class="text_box">用户登陆</p>
                                <p class="underline"></p>
                            </li>
                            <li @click="go('Register')" :class="isgoLogin == 'Register' ? 'active': ''">
                                
                                <p class="text_box">立即注册</p>
                                <p class="underline"></p>
                            </li>
                        </ul>
                        <div class="content">
                            <!-- 显示登陆或注册组件 -->
                            <compoemts :is="isgoLogin" v-on:go-login="isReset = true" v-on:Chenggongtanchuang="RegisterSuccess = 'Chenggongtanchuang'" v-on:showxieyi="RegisterSuccess='Fuwuxieyi'" v-on:go-phone="RegisterSuccess = 'BangdingPhone'"></compoemts>
                        </div>
                    </div>   
                    <!-- 显示重置密码页面 -->
                    <Reset :data="isReset" v-on:go-backdenglu="isReset = false" v-on:godenglu="isReset = false" v-on:Chenggongtanchuang="RegisterSuccess = 'Chongzhimimachenggong'"></Reset>
                    <!-- <div class="close" @click="$emit('go-back')">
                        点我关闭弹窗
                    </div> -->
                </div>
            </div>
            <div class="Chenggongtanchuang" v-if="RegisterSuccess=='Chenggongtanchuang'">
               <Chenggongtanchuang v-on:Chenggongtanchuang="RegisterSuccess = 'PerfectInformation'"></Chenggongtanchuang> 
            </div>
            <div class="PerfectInformation" v-if="RegisterSuccess=='PerfectInformation'">
               <PerfectInformation></PerfectInformation> 
            </div>
            <div class="Chongzhimimachenggong" v-if="RegisterSuccess=='Chongzhimimachenggong'">
                <Chongzhimimachenggong v-on:Chenggongtanchuang="RegisterSuccess = 'tanchuang'" ></Chongzhimimachenggong>
            </div>
            <div class="Fuwuxieyi" v-if="RegisterSuccess=='Fuwuxieyi'">
                <!-- 返回注册 -->
                <Fuwuxieyi v-on:fanhuizuce="RegisterSuccess='tanchuang'"></Fuwuxieyi>
            </div>
            <div class="BangdingPhone" v-if="RegisterSuccess=='BangdingPhone'">
                <BangdingPhone v-on:Chenggongtanchuang="RegisterSuccess = 'Chenggongtanchuang'"></BangdingPhone>
            </div>
            <!-- 绑定成功 -->
            <div class="Bangdingchenggong" v-if="RegisterSuccess=='Bangdingchenggong'">
                <Bangdingchenggong v-on:Chenggongtanchuang="RegisterSuccess = 'PerfectInformation'" ></Bangdingchenggong>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.Login {
        position: relative;
        width: 100%;
        height: 677px;
        background: url("/imgs/login/bg.png") no-repeat center center;
        background-size:100% 100%;
        .inner {
            width: 1200px;
            position: relative;
            margin:0 auto;
            height: 700px;
        }
        .tanchuang {
            position: absolute;
            box-sizing: border-box;
            left: 50%;
            margin-left: -390px; 
            top: 85px;
            width: 780px;
            height: 470px;
            border-radius: 5px;
            background-color: #fff;
            .tanchuang_left {
                width: 380px;
                height: 470px;
                float: left;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .tanchuang_right {
                float: left;
                width: 400px;
                height: 470px;
                position: relative;
            }
            .lis {
                width: 276px;
                padding: 0px 62px;
                padding-top: 26px;
                line-height: 36px;
                text-align: center;
                display: flex;
                font-size: 16px;
                li {
                    flex: 1;
                    font-size: 16px;
                    line-height: 36px;
                    cursor: pointer;
                    color: #333;
                    .underline {
                        width: 26px;
                        height: 3px;
                        background-color: #fff;
                        margin: 0 auto;
                    }
                    p{
                        letter-spacing: 1px;
                    }
                }
                .active {
                    color: #2c8ffc;
                    .underline {
                       
                        background-color: #2c8ffc;
                    }
                }
            }
            .close {
                width: 50px;
                height: 50px;
                z-index: -1;
                // width: 100%;
                // height: 100%;
                color: #fff;
                position: absolute;
                right: -50px;
                top: 0px;
                background-color: #333;
            }
        }
        .Chenggongtanchuang {
            // position: absolute;
            // background-color: red;
            // left: 50%;
            // top: 50%;
            // margin-top: -200px;
            // margin-left: -200px;
            // width: 400px;
            // height: 500px;
            // background-color: pink;
            .lis {
                width: 350px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                display: flex;
                font-size: 20px;
                li {
                    flex: 1;
                }
                .active {
                    color: #156def;
                    border-bottom: 1px solid #156def;
                }

            }
        }
        // .PerfectInformation {
            // position: absolute;
            // background-color: red;
            // left: 50%;
            // top: 50%;
            // margin-top: -200px;
            // margin-left: -350px;
            // width: 700px;
            // height: 500px;
            // background-color: pink;
            // // z-index: -1;
            // .lis {
            //     width: 350px;
            //     height: 40px;
            //     line-height: 40px;
            //     text-align: center;
            //     display: flex;
            //     font-size: 20px;
            //     li {
            //         flex: 1;
            //     }
            //     .active {
            //         color: #156def;
            //         border-bottom: 1px solid #156def;
            //     }

            // }
        // }
    }  
</style>
<script>
// 登陆组件
import Denglu from './login/Denglu.vue';
// 绑定手机号
import BangdingPhone from './login/BangdingPhone.vue';
// 注册组件
import Register from './login/Register.vue';
// 重置登录密码
import Reset from './login/Reset.vue';
// 重置密码成功显示成功弹窗
import Chongzhimimachenggong from './login/Chongzhimimachenggong.vue';
// 注册成功，显示成功弹窗
import PerfectInformation from './login/PerfectInformation.vue';
// 点击下一步，跳转到完善信息
import Chenggongtanchuang from './login/Chenggongtanchuang.vue';
// 绑定手机号成功
import Bangdingchenggong from './login/Bangdingchenggong.vue';
// 服务协议
import Fuwuxieyi from './login/Fuwuxieyi.vue';
export default {
    components: { Denglu, Register, Reset, PerfectInformation, Chenggongtanchuang,Chongzhimimachenggong, Fuwuxieyi, BangdingPhone, Bangdingchenggong },
    props: [ 'data' ],
    data() {
        return { 
            isgoLogin: 'Denglu',
            // 是否显示重置页面
            isReset: false,
            // 注册成功，显示小弹窗
            RegisterSuccess: 'tanchuang',
        }
    },
    methods: {
        go(index) {
            this.isgoLogin = index
        },

        stop(){//滑动限制
          var mo=function(e){e.preventDefault()};
          document.body.style.overflow='hidden';
          document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        move(){//取消滑动限制
          var mo=function(e){e.preventDefault();};
          document.body.style.overflow='';//出现滚动条
          document.removeEventListener("touchmove",mo,false);
        }
    },
    watch: {
        data() {
            let m = this.data;
            this.isgoLogin = m;
            if(this.data) {
                this.stop();
            }else {
                this.move();
            }
        }
    },
    created() {
        // console.log(this.$store.state.islogin)

    }
}
</script>






