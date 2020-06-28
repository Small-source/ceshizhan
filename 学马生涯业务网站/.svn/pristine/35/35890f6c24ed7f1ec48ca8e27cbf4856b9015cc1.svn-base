<template>
    <div class="loginTanchuang" v-if
    ="data" >
        <!-- 白色弹窗 -->
        <div class="tanchuang" v-if="RegisterSuccess=='tanchuang'">
            <ul class="lis">
                <li @click="go('Denglu')" :class="isgoLogin == 'Denglu' ? 'active': ''">用户登陆</li>
                <li @click="go('Register')" :class="isgoLogin == 'Register' ? 'active': ''">立即注册</li>
            </ul>
            <div class="content">
                <!-- 显示登陆或注册组件 -->
                <compoemts :is="isgoLogin" v-on:go-login="isReset = true" v-on:Chenggongtanchuang="RegisterSuccess = 'Chenggongtanchuang'" v-on:go-phone="RegisterSuccess = 'BangdingPhone'"></compoemts>
            </div>
            <!-- 显示重置密码页面 -->
            <Reset :data="isReset" v-on:go-backdenglu="isReset = false" v-on:godenglu="isReset = false" v-on:Chenggongtanchuang="RegisterSuccess = 'Chongzhimimachenggong'"></Reset>
            <div class="close" @click="$emit('go-back'); isReset = false">
                ×
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
        <div class="BangdingPhone" v-if="RegisterSuccess=='BangdingPhone'">
            <BangdingPhone v-on:Chenggongtanchuang="RegisterSuccess = 'Chenggongtanchuang'"></BangdingPhone>
        </div>
        <!-- 绑定成功 -->
        <div class="Bangdingchenggong" v-if="RegisterSuccess=='Bangdingchenggong'">
            <Bangdingchenggong v-on:Chenggongtanchuang="RegisterSuccess = 'PerfectInformation'" ></Bangdingchenggong>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.loginTanchuang {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 10000000000000000;
        background-color: rgba(51, 51, 51,.45);
        .tanchuang {
            position: absolute;
            box-sizing:border-box;
            padding: 20px 50px;
            left: 50%;
            top: 120px;
            margin-left: -245px;
            width: 490px;
            background-color: #fff;
            .lis {
                width: 390px;
                overflow: hidden;
                line-height: 58px;
                text-align: center;
                display: flex;
                font-size: 18px;
                li {
                    flex: 1;
                    font-size: 18px;
                    line-height: 58px;
                    color: #333;
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                }
                .active {
                    color: #156def;
                    border-bottom: 2px solid #156def;
                }

            }
            .close {
                width: 30px;
                height: 30px;
                text-align: center;
                color: #666;
                font-size: 34px;
                line-height: 30px;
                position: absolute;
                border-radius: 50%;
                // border: 1px solid #dedede;
                right: 10px;
                top: 5px;
                background-color: #fff;
                z-index: 1;
                cursor: pointer;
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
            // background-color: #fff;
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
        .PerfectInformation {
            // position: absolute;
            // background-color: red;
            // left: 50%;
            // top: 50%;
            // margin-top: -200px;
            // margin-left: -350px;
            // width: 700px;
            // height: 500px;
            // // background-color: pink;
            // z-index: -1;
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
        }
        .Fuwuxiexi {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(51,51,51,.25);
            z-index: 10;
            // .neirongBox {
            //     box-sizing: border-box;
            //     width: 600px;
            //     height: 796px;
            //     position: absolute;
            //     padding: 20px 40px;
            //     left: 50%;
            //     margin-left: -340px;
            //     top: 100px;
            //     background-color: #fff;
            //     // z-index: 10000;、
            //     .biaoti {
            //         line-height: 58px;
            //         font-size: 18px;
            //         color: #2d8ffc;
            //         text-align: center;
            //         border-bottom: 1px solid #e7e4e4;
            //     }
            //     .title {

            //     }
            //     .xiangqing {
            //         font-size: 14px;
            //         color: #666666;
            //         line-height: 24px;
            //     }
            //     .closes {
            //         font-size: 20px;
            //         width: 40px;
            //         height: 40px;
            //         text-align: center;
            //         line-height: 40px;
            //         color: #fff;
            //         position: absolute;
            //         border-radius: 20px;
            //         right: -20px;
            //         top: -20px;
            //         background-color: #e8e4e5;
            //     }
            //     // 点击返回，并勾选协议
            //     .gobackCheckd {
            //         font-size: 20px;
            //         color: #156def;
            //         text-align: center; 
            //     }
            // }
        }
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
// / 绑定手机号成功
import Bangdingchenggong from './login/Bangdingchenggong.vue';
export default {
    components: { Denglu, Register, Reset, PerfectInformation, Chenggongtanchuang, Chongzhimimachenggong, BangdingPhone, Bangdingchenggong },
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

    }
}
</script>






