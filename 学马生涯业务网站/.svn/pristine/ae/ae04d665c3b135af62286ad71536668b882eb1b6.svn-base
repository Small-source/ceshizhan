<template>
    <!-- 关于我们页面 -->
    <div class="Aboutus">
        <div class="banner">
        </div>
        <div class="slogan">
            <div class="inner">
               {{cData.slogan}} 
            </div>
        </div>
        <div class="value_proposition">
            <h5 class="title">价值主张</h5>
            <div class="inner">
                <ul class="main_box">
                    <li v-for="(item, index) in value_proposition" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p class="main_title">{{item.title}}</p>
                        <p class="main_detail">{{item.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="call_us" v-if="cData">
            <h5 class="title">联系我们</h5>
            <div class="inner">
                <div class="content">
                    <div class="left_box">
                        <p class="tel">服务热线：{{cData.service_tel}}</p>
                        <p class="address">公司地址：{{cData.address_info}}</p>
                        <p class="route">交通路线：{{cData.traffic}}</p>
                    </div>
                    <div class="right_box">
                        <div class="box">
                            <img :src="cData.teacher_qr_code" alt="">
                            <!-- <img :src="cData.logo" alt=""> -->
                            <p class="title">在线咨询</p>
                            <p>(扫码查看更多)</p>
                        </div>
                        <div class="box">
                            <img :src="cData.account_qr_code" alt="">
                            <!-- <img :src="cData.logo" alt=""> -->
                            <p class="title">微信公众号</p>
                            <p>(扫码查看更多)</p>
                        </div>
                        <div class="box">
                            <img :src="cData.applet_code" alt="">
                            <!-- <img :src="cData.logo" alt=""> -->
                            <p class="title">小程序</p>
                            <p>(扫码查看更多)</p>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <img :src="cData.map_url" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
.Aboutus {
    letter-spacing: 1.5px;
    .banner {
        width: 100%;
        height: 480px;
        background: url(/imgs/aboutus/bannerDailishang.png) no-repeat center center;
    }
    h5.title {
        height: 130px;
        line-height: 130px;
        text-align: center;
        font-size: 28px;
        font-weight: 600;
        color: #333;
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .slogan {
        height: 143px;
        background: url(/imgs/aboutus/dailishang/bg.png) no-repeat center center;
        text-align: center;
        line-height: 143px;
        font-size: 26px;
        font-weight: bold;
        color: #333;
    }
    .value_proposition {
        background-color: #F4F6F8;
        padding-bottom: 50px;
        .main_box {
            display: flex;
            justify-content: space-between;
            color: #333;
            li {
                position: relative;
                width: 366px;
                .main_title {
                    text-align: center;
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    margin-top: -65px;
                }
                .main_detail {
                    padding: 0 60px;
                    font-size: 14px;
                }
            }
        }
    }
    .call_us { 
        background-color: #fff;
        .content {
            display: flex;
            color: #333;
            .left_box {
                width: 700px;
                p {
                    font-size: 16px;
                    line-height: 25px;
                    padding-left: 30px;
                    margin-bottom: 35px;
                }
                .tel {
                    background: url(/imgs/aboutus/dailishang/icon_fuwurexian.png) no-repeat 0px 3px;
                }
                .address {
                    background: url(/imgs/aboutus/dailishang/icon_gongsidizhi.png) no-repeat 0px 3px;
                }
                .route {
                    background: url(/imgs/aboutus/dailishang/icon_jiaotongluxian.png) no-repeat 0px 3px;
                }
            }
            .map {
                img {
                    width: 1200px;
                    height: 320px;
                }
            }
            .right_box {
                width: 500px;
                display: flex;
                justify-content: space-between;
                .box {
                    text-align: center;
                    img {
                        display: block;
                        width: 90px;
                        height: 90px;
                    }
                    p {
                        font-size: 12px;
                    }
                    .title {
                        font-size: 14px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
}
</style>
<script>
export default {
    data() {
        return {
            cData: null,
            value_proposition: [
                { title: '广阔人生', detail: '通过深入教研院校、专业、政策文件等，帮助学生全方面了解未来、洞悉社会变化',imgUrl: '/imgs/xmsy_huhangjihua/icon_01.png' },
                { title: '科学决策', detail: '强大系统工具，支撑生涯测评、选科和志愿填报，帮助学生进行合理决策',imgUrl: '/imgs/xmsy_huhangjihua/icon_02.png' },
                { title: '点燃火炬', detail: '明确目标、规划合理升学途径、制定可行方案、提升学习状态，帮助学生不断进步',imgUrl: '/imgs/xmsy_huhangjihua/icon_03.png' }
            ]
        }
    },
    created() {
        this.getDetail();
    },
    mounted() {
    },
    methods: {
        // 获取个人信息
        getDetail(){
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            this.$ajax.post(this.G_uri + '/agent/detail', {
                webSite: OEMdomain
            })
                // 监听数据返回
                .then((res)=> {
                    if(res.data.code == 2000) {
                        let data = res.data.data.webBaseInfo;
                        this.cData = data;
                        console.log(this.cData)

                    }
                })
                .catch(function(error) {
                    console.log(error)
                    // alert('服务器繁忙')
                })
        },
    },
}
</script>