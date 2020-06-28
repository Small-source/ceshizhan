<template>
    <div class="online_shopping">
        <div class="inner"> 
            <div class="header">
                <div class="header_left">
                    <img :src="header_src" alt="">
                </div>
                <div class="header_right">
                    <div class="card">
                        <div class="title">{{cardTitle}}</div>
                        <p class="price">
                            价格：<span>￥{{price}} 元</span>
                        </p>
                        <ul class="lis">
                            <li v-for="(item, index) in card"  :key="index" @click="goCheck(item.title,item.price,index,item.idx)" :class="item.active ? 'active' : ''">
                                <p>{{item.title}}</p>
                                <div class="checkd">√</div>
                            </li>
                        </ul>
                    </div>   
                    <div class="btn">
                        <div :class="isShowTips ? 'tipsActive' : 'tips'">该功能占未开通</div>
                        <div class="btn_buy" @click="changeTips">立即购买</div>
                        <!-- <div class="btn_jihuo" @click="$router.push('/hadCardGoActive')">已购卡，激活</div> -->
                    </div>
                </div>
            </div>
            <div class="useing">
                <p>1.使用对象： 本系统适用于高考普通文化类考生在普通批次报考使用，提前批、艺术体育类和自主招生等特殊类型考生请勿购买。</p>
                <p>2.使用时效： 考生自激活之日起至高三志愿填报结束（当年8月31号）</p>
                <p>3.使用权限： 考生可使用同步学习、生涯规划、自愿填报等全部服务内容。</p>
            </div>
            <div class="footer">
                <ul class="lis_title">
                    <li @click="footerChange(true)" :class="isChange ? 'active' : ''">服务详情</li>
                    <li @click="footerChange(false)" :class="isChange ? '' : 'active'">使用问题</li>
                </ul>
                <div class="footer_container">
                    <p v-if="isChange">学马教育集团总部位于北京，是一家专注于个性化生涯规划服务，为中学学校、学生提供整体解决方案的综合性教育公司，以“成为中国有影响力的生涯规划专家”为发展愿景，业务内容涵盖生涯规划测评、生涯规划师资培训、生涯教育发展管理云平台、生涯课程设计、生涯规划咨询、生涯教育顶层设计等，为中学生提供包括国内外升学路径、高考选科、大学择校、未来职业发展的决策支持，帮助中学生探寻科学的生涯发展之路。</p>
                    <p v-if="!isChange"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.online_shopping {
    padding-bottom: 50px;
    background-color: #fff;
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .header {
        padding: 30px 0px;
        height: 360px;
        .header_left {
            height: 360px;
            box-sizing: border-box;
            float: left;
            width: 720px;
            padding-left: 85px;
            padding-right: 120px;

        }
        .header_right {
            float: left;
            width: 480px;
            height: 360px;
            .card {
                height: 280px;
                padding-left: 30px;
                background-color: #fbf0ee;
                .title {
                    color: #333;
                    font-size: 22px;
                    line-height: 64px;
                    height: 64px;
                } 
                .price {
                    color: #dd3b2c;
                    line-height: 40px;
                    height: 40px;
                    font-size: 14px;
                    span {
                        font-size: 22px;
                        font-weight: 500;
                    }
                }
                .lis {
                    padding-top: 23px;
                    width: 430px;
                    overflow: hidden;
                    padding-left: 1px;
                    li {
                        margin-right: 30px;
                        margin-bottom: 20px;
                        border: 1px solid #3491f8;
                        width: 110px;
                        height: 50px;
                        float: left;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                        padding: 0px;
                        &:after {
                            content:'';
                            width: 0px;
                            height: 0px;
                            display: block;
                            border-style: solid;
                            border-width: 0px 34px 20px 34px;
                            border-color: transparent transparent #adcaf2 transparent;
                            position: absolute;
                            bottom: 0px;
                            right: -34px;
                        }
                        p {
                            padding-left: 15px;
                            line-height: 50px;
                            font-size: 12px;
                            // background: url(/imgs/onlineShopping/icon/icon_ka.png) 8px center no-repeat;
                            color: #3393f9;
                            // width: 110px;
                            height: 50px;
                        }
                        .checkd {
                            position: absolute;
                            width: 20px;
                            height: 12px;
                            line-height: 12px;
                            color: transparent;
                            bottom: 0px;
                            right: 0px;
                            text-align: center;
                            z-index: 2;
                        }
                    }
                    .active {
                        &:after {
                            border-color: transparent transparent #3393fa transparent;
                        }
                        .checkd {
                            color: #fff;
                        }
                    }
                }
            }   
            .btn {
                padding-top: 30px;
                height: 46px;
                position: relative;
                .tips {
                    position: absolute;
                    left: 20px;
                    top: -15px;
                    border: 1px solid #333;
                    border-radius: 3px;
                    line-height: 30px;
                    width: 150px;
                    opacity: 0;
                    transition: all .5s;
                }
                .tipsActive {
                    position: absolute;
                    left: 20px;
                    top: -15px;
                    border: 1px solid #333;
                    border-radius: 3px;
                    line-height: 30px;
                    width: 150px;
                    opacity: 1;
                    transition: all .5s;
                }
                .btn_buy {
                    float: left;
                    text-align: center;
                    line-height: 46px;
                    color: #fff;
                    background-color: #e0675c;
                    border-radius: 23px;
                    width: 190px;
                    margin-right: 48px;
                    font-size: 12px;
                    box-shadow: 0px 3px 3px #be3026;
                    cursor: pointer;
                    &:active {
                        box-shadow: none;
                    }
                }
                .btn_jihuo {
                    .btn_buy;
                    background-color: #3492f9;
                    margin-right: 0px;
                    box-shadow: 0px 3px 3px #125eb2;
                    &:active {
                        box-shadow: none;
                    }
                }
            }
        }
    }
    .useing {
        padding: 15px 20px;
        background-color: #f9f9f9;
        box-shadow: 0px 0px 3px #edebec inset; 
        margin-bottom: 30px;
        p {
            font-size: 14px;
            color: #666;
            line-height: 24px;
            
        }
    }
    .footer {
        border: 1px solid #dedede;
        .lis_title {
            font-size: 16px;
            color: #333;
            border-bottom: 1px solid #dedede;
            height: 45px;
            li {
                float: left;
                text-align: center;
                width: 140px;
                height: 44px;
                line-height: 44px;
                cursor: pointer;
                border-right: 1px solid #dedede;
            }
            .active {
                color: #3393f9;
                border-top: 4px solid #3393f9;
                height: 43px;
                line-height: 40px;
                margin-top: -1px;
                background-color: #f9f9f9;
            }
        }
        .footer_container {
            font-size: 14px;
            height: 210px;
            color: #666;
            p {
                padding: 30px 20px;
            }
        }
    }
}
</style>
<script>

export default {
    data() {
        return {
            card: [
                { title: '生涯测评卡', price: '1980', active: true, idx: '1' },
                { title: '360°选科卡', price: '2960', active: false, idx: '2' },
                { title: '根据专业选科目卡', price: '980', active: false, idx: '3' },
                { title: '教辅资源卡', price: '2800', active: false, idx: '4' },
                { title: '自招综评复试卡', price: '2800', active: false, idx: '5' }
            ],
            price: '1980',
            cardTitle: '生涯测评卡',
            isChange: true,
            isShowTips: false,
            header_src: '/imgs/onlineShopping/icon/icon_shengyaka.png'

        }
    },
    methods: {
        goCheck(title, price, index0,idx) {
            this.price = price;
            this.cardTitle = title;
            switch(idx) {
                case '1':
                    console.log(111111111)
                    this.header_src = '/imgs/onlineShopping/icon/icon_shengyaka.png';
                
                    break;
                case '2':
                    this.header_src = '/imgs/onlineShopping/icon/icon_360xuankeka.png';
                    break;
                case '3':
                    this.header_src = '/imgs/onlineShopping/icon/icon_xuankeka.png';
                    break;
                case '4':
                    this.header_src = '/imgs/onlineShopping/icon/icon_shengyajiaofuziyuanka.png';
                    break;
                case '5':
                    this.header_src = '/imgs/onlineShopping/icon/icon_zizhaoshipinka.png';
                    break;
                default:

            }

            this.card.forEach((item,index)=> {
                item.active = false;
                if(index0 == index) {
                    item.active = true;
                }
            })
        },
        footerChange(boolean) {
            this.isChange = boolean;
        },
        changeTips() {
            this.isShowTips = true;
            var _this = this;
            setTimeout(function () {
               _this.isShowTips = false;
            }, 1000);
        }
    },
    created() {
    }
}
</script>