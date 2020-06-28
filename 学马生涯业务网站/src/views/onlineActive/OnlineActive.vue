<template>
    <div class="online_active">
        <div class="online_active_banner">
            <div class="title">在线激活通道</div>
            <div class="active_nav">
                <ul class="nav_lis">
                    <li class="no1">
                        <p>输入</p>
                        <p>VIP卡号、密码</p>
                    </li>
                    <li>绑定手机号</li>
                    <li>获取验证码</li>
                    <li>立即激活</li>
                    <li class="no5">
                        <p>完善信息</p>
                        <p>开启会员之旅</p>
                    </li>
                </ul>
                <div class="arrow_box">
                    <div class="arrow"></div>
                </div>
            </div>

        </div>
        <div class="online_active_content">
            <div class="active_card">
                <ActiveChannel></ActiveChannel>
            </div>
        </div>
        <div class="online_active_footer">
            <div class="inner">
                <p class="no1">有问题联系学马生涯全国统一客服热线</p>
                <p class="no2">4008-925-909</p>
            </div>
            
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.online_active {
    // padding-bottom: 50px;
    background-color: #fff;
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .online_active_banner {
        background: url(/imgs/onlineActive/bg.png) no-repeat center center;
        background-position: center center;
        height: 238px;
        .title {
            line-height: 80px;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            color: #fff;
            margin-bottom: 10px;
        }
        .active_nav {
            width: 820px;
            height: 52px;
            margin: 0 auto;
            position: relative;
            .nav_lis {
                width: 820px;
                height: 52px;
                position: relative;
                z-index: 2;
                p{
                    color: #333;
                }
                li {
                    float: left;
                    width: 103px;
                    height: 52px;
                    background-color: #fff;
                    font-size: 14px;
                    color: #333;
                    text-align: center;
                    line-height: 52px;
                    margin-right: 75px;
                    border-radius: 2px;
                    font-weight: 600;
                }
                .no1 {
                    box-sizing: border-box;
                    padding: 8px 0px;
                    p {
                        line-height: 18px;
                    }
                }
                .no5 {
                    .no1;
                    margin-right: 0px;

                }
            }
            .arrow_box {
                position: absolute;
                left: 50%;
                margin-left: -307px;
                top: 50%;
                margin-top: -7px;
                width: 610px;
                height: 14px;
                background-color: #fff;
                z-index: 1;
                .arrow {
                    width: 28px;
                    height: 14px;
                    background: url(/imgs/onlineActive/icon_green.png) no-repeat;
                    position: absolute;
                    left: 0;
                    top: 0;
                    animation: arrowGoing 3s linear infinite;
                }
                @keyframes arrowGoing {
                    0% {
                        left: 0;
                    }
                    100% {
                        left: 610px;
                    }
                }
                
            }
        }
    }
    .online_active_content {
        padding-top: 1px;
        height: 570px;
        .active_card {
            width: 594px;
            height: 584px;
            box-shadow: 0px 0px 10px #e2e2e2;
            margin: 0 auto;
            margin-top: -50px;
        }
    }
    .online_active_footer {
        height: 100px;
        background: url(/imgs/onlineActive/bg_link.png) no-repeat;
        color: #fff;
        padding-top: 30px;
        .no1 {
            font-size: 18px;
            height: 18px;
            margin-bottom: 24px;
        }
        .no2 {
            padding-left: 300px;
            font-size: 22px;
            font-weight: 600;
        }
    }
}
</style>
<script>
// 激活通道
import ActiveChannel from './components/ActiveChannel.vue';
export default {
    components: { ActiveChannel },
    data() {
        return {
            // card: [
              
            // ]

        }
    },
    methods: {

    },
    created() {
    }
}
</script>