<template>
    <div class="Login" @click="$emit('go-Close')">
        <div class="inner">
            <!-- 白色弹窗 -->
            <div class="tanchuang">
                <div class="imgBox"></div>
                <div class="title">尚未开通，敬请期待!</div>              
                <div class="close" @click="$emit('go-Close')">X</div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.Login {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba(51,51,51,.25);
        z-index: 1000;
        .inner {
            width: 1200px;
            margin: 0 auto;
            position: relative;
        }
        .tanchuang {
            position: absolute;
            // background-color: #fff;
            box-sizing: border-box;
            padding: 20px 50px;
            width: 490px;
            height: 385px;
            top: 110px;
            left: 50%;
            margin-left: -245px;
            background-color: #fff;
            .imgBox {
                height: 200px;
                background: url(/imgs/jingqingqidai/jingqingqidai.png) no-repeat center center;
            }
            .title {
                font-size: 26px;
                // font-weight: bold;
                color: #333;
                text-align: center;
                line-height: 60px;
            }
            .lis {
                width: 390px;
                overflow: hidden;
                line-height: 56px;
                text-align: center;
                display: flex;
                font-size: 16px;
                li {
                    flex: 1;
                    font-size: 16px;
                    line-height: 56px;
                }
                .active {
                    color: #156def;
                    border-bottom: 2px solid #156def;
                }
            }
            .close {
                width: 36px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                color: #333;
                position: absolute;
                border-radius: 18px;
                right: -18px;
                top: -18px;
                background-color: #e7e4e4;
                z-index: 1000;
            }
        }
}  
</style>
<script>
export default {
    // components: { Denglu, Register, Reset, PerfectInformation, Chenggongtanchuang,Chongzhimimachenggong, Fuwuxieyi, BangdingPhone, Bangdingchenggong },
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
    watch: {
    },

    created() {
        // console.log(this.$store.state.islogin)
        // this.stop();

    },
    beforeDestroy() {
        // this.move();
    }
}
</script>






