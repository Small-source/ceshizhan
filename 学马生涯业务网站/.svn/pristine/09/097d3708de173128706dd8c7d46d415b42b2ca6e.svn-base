<template>
    <div class="home">
        <div class="banner">
            <div class="container">
                <swiper class='swiImgs' :options="swiperOption" v-if="banner.length!=0">
                    <swiper-slide v-for="(item, index) in banner" data-index="index" :key="index" class="item">
                        <!-- target="_blank" -->
                        <a :href="item.link">
                            <div class="swiImg" :style='{backgroundImage: `url(${item.imgUrl})`}'>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination"></div>
            </div>
            <!-- 右侧小浮窗 -->
            <!--<div class="banner_inner">-->
                <!--<div :class="named ? 'hadlogin_floting_box': 'floting_box'">-->
                    <!--<div class="head_box">-->
                    <!--</div>-->
                    <!--<p class="username">-->
                        <!--<span v-if="!named">Hi，请登录</span>-->
                        <!--<span v-else="named">{{named}}</span>-->
                    <!--</p>-->
                    <!--<div v-show="!named">-->
                        <!--<div class="btn_onlinebuy" @click="$emit('go-login')">请登录</div>-->
                        <!--<div class="btn_goactive" @click="$router.push('/onlineActive')">在线激活</div>-->
                    <!--</div>-->
                    <!--<div v-show="named">-->
                        <!--&lt;!&ndash;<div class="btn_onlinebuy" @click="$router.push('/onlineShopping')">在线购买</div>&ndash;&gt;-->
                        <!--<div class="btn_goactive" @click="$router.push('/hadCardGoActive')">已购卡，立即激活</div>-->
                    <!--</div>-->
                    <!--<div class="go_register" v-show="!named">还没有账号，<span @click="$emit('go-register')">立即注册</span></div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <div class="content_topBox">
            <div class="content_top">
                <ul class="list">
                    <li>
                        <div class="card_title">
                            <p>生涯测评</p >
                            <!--  <div class="arrow"></div> -->
                        </div>
                        <p class="detail">
                            清华大学与中科院心理所研究成果，结合心理学和人因学，采取物理心理测评技术针对认知潜能、人格特征、兴趣、学习风格、心理健康进行综合测量，精准定位专业范围，帮助考生发现天赋，科学完成自我认知。
                        </p >
                        <div class="btn_link" id="btn_link1">
                            <a  @click="changeCeping" tag="span">开始测评</a>
                        </div>
                    </li>
                    <li>
                        <div class="card_title">
                            <p>360°选科</p >
                            <!-- <div class="arrow"></div> -->
                        </div>
                        <p class="detail">
                            在学业潜能测评的基础上，科学定位专业范围，并结合高校专业选考科目要求及决策平衡单，推选出所有选科组合分析报告，提供全面科学的选科依据。
                        </p >
                        <div class="btn_link" id="btn_link2">
                            <a  @click="changeXuan" tag="span">开始测评</a>
                        </div>
                    </li>
                    <li>
                        <div class="card_title">
                            <p>学科诊断</p >
                            <!-- <div class="arrow"></div> -->
                        </div>
                        <p class="detail">
                            精准测评，快速提分。精确发现学生学习短板，科学规划个性化学习策略，打破传统题海战术，帮助学生稳步提升成绩。
                        </p >
                        <div class="btn_link" id="btn_link3">
                            <a href="http://ym.xuematech.com" target="_blank">开始测评</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 内容导航 -->
        <div class="content_nav">
            <ul class="list">
                <li v-for="(item, index) in content_nav" :key="index" >
                    <router-link :to="item.url" target="_blank" v-if="(/shengya.handsdata.net/.test($OEMdomain)) ? index < 4 : index < 8">
                        <div class="img_box">
                            <img :src="item.imgSrc" alt="">
                        </div>
                        <p class="title">{{item.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--自定义资讯-->
        <div class="content_information" v-if="zixunflag">
            <div class="informationList">
                <div class="yuanxiao">
                    <div class="title">
                        <div class="line"></div>
                        {{zixunname}}
                        <router-link class="mores" style="font-size: 16px;float:right;color:#3592F9;" to="/informationList" v-if="dailishangzixun.length>12" target="_blank">更多</router-link>
                    </div>
                    <ul class="ulList">
                        <li v-for="(item,index) in dailishangzixun" v-if="index<12">
                            <img :src="item.pic" alt="" class="img">
                            <div class="right">
                                <p @click="getJump(item.id)">{{item.title}}</p>
                                <div>
                                    <!--<img src="imgs/home/zixun/icon_clock.png" alt="">-->
                                    <!--<span>{{item.date}}</span>-->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content" v-if="!(/shengya.handsdata.net/.test($OEMdomain))">
            <div class="inner">
                <!-- 自招综评复试 -->
                 <!-- v-if="$OEMdomain.indexOf('dianhuajiaoyu') < 0" -->
                <div class="zizhao_interview">
                    <!-- 左侧主要内容介绍 -->
                    <div class="left_container">
                        <div class="top_title">
                            <div class="line"></div>
                            <div class="title">强基综评复试</div>
                        </div>
                        <!-- 介绍 -->
                        <div class="main_introduce">
                            <div class="introduce_left">
                                <img src="imgs/home/zizhao_interview/bg_zizhaozongpingfushi01.png" alt="">
                            </div>
                            <div class="introduce_right">
                                <div class="box" v-for="(item, index) in zizhao_Interview2" :key="index" @click="goPlay(item)">
                                    <img :src="item.pic" alt="">
                                    <p class="detail">{{item.title}}</p>
                                    <p class="detail">
                                        <span>免费</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 友情链接 -->
                <div class="friendlink">
                </div>
            </div>
        </div>
        <div class="content_information">
            <div class="informationList">
                <div class="gaokao">
                    <div class="title">
                        <div class="line"></div>
                        新高考资讯
                    </div>
                    <ul class="ulTop">
                        <li v-for="item in xingaokao1">
                            <img :src="item.pic" alt="" class="img" @click="getJump(item.id)">
                            <div class="right">
                                <p @click="getJump(item.id)">{{item.title}}</p>
                                <div class="content">{{item.content.replace(/\s/g,"").replace(/<[^>]*>/g,"").replace('，',",").slice(0,70)}}...</div>
                            </div>
                        </li>
                    </ul>
                    <ul class="ulBottom">
                        <li v-for="item in xingaokao2">
                            <span @click="getJump(item.id)">{{item.title}}</span>
                            <!--<div style="float: right">-->
                                <!--<img src="imgs/home/zizhao_interview/liulan.png" alt="" style="position: relative;top:-2px;margin-right: 3px">-->
                                <!--<span style="color:#B0B2BB">{{item.clickNum}}</span>-->
                            <!--</div>-->
                            <!--<span>{{item.date}}</span>-->
                        </li>
                    </ul>
                </div>
            </div>
            <div class="informationList">
                <div class="yuanxiao">
                    <div class="title">
                        <div class="line"></div>
                        院校资讯
                    </div>
                    <ul class="ulList">
                        <li v-for="item in yuanxiao1">
                            <img :src="item.pic" alt="" class="img">
                            <div class="right">
                                <p @click="getJump(item.id)">{{item.title}}</p>
                                <div>
                                    <!--<img src="imgs/home/zixun/icon_clock.png" alt="">-->
                                    <!--<span>{{item.date}}</span>-->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="informationList">
                <div class="zhuanye">
                    <div class="title">
                        <div class="line"></div>
                        专业资讯
                    </div>
                    <ul class="ulTop">
                        <li v-for="item in zhuanye1">
                            <img :src="item.pic" alt="" class="img" @click="getJump(item.id)">
                            <div class="right">
                                <p @click="getJump(item.id)">{{item.title}}</p>
                                <div class="content">{{item.content.replace(/\s/g,"").replace(/<[^>]*>/g,"").replace('，',",").slice(0,70)}}...</div>
                            </div>
                        </li>
                    </ul>
                    <ul class="ulBottom">
                        <li v-for="item in zhuanye2">
                            <span @click="getJump(item.id)">{{item.title}}</span>
                            <!--<div style="float: right">-->
                                <!--<img src="imgs/home/zizhao_interview/liulan.png" alt="" style="position: relative;top:-2px;margin-right: 3px">-->
                                <!--<span style="color:#B0B2BB">{{item.clickNum}}</span>-->
                            <!--</div>-->
                        </li>
                    </ul>
                </div>
            </div>
            <div class="informationList">
                <div class="shengya">
                    <div class="title">
                        <div class="line"></div>
                        生涯知识
                    </div>
                    <ul class="ulList">
                        <li v-for="item in shengya1">
                            <img :src="item.pic" alt="" class="img">
                            <div class="right">
                                <p @click="getJump(item.id)">{{item.title}}</p>
                                <div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 名师指导 -->
        <div class="famous_teacherBigBox">
            <div class="famous_teacherBox">
                <div class="top_title" >
                    <div class="line"></div>
                    名师团队
                </div>
                <div class="famous_teacher">
                    <ul class="lis" :style="{marginLeft:teacherStyle}">
                        <li v-for="(item, index) in  famous_teacher" :key="index">
                            <img :src="item.pic" alt="">
                            <div class="foot_box">
                                <p class="name">{{item.name}}</p>
                                <p class="university">{{item.qualification}}</p>
                                <div class="details">{{item.introduction}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="teacherLeft" @click="changeIndexs('pre')" :class="changeIndex!=0&&'teachListActive'"></div>
                <div class="teacherRight" @click="changeIndexs('next')" :class="changeIndex!=teacherNumber-1&&teacherNumber>0&&'teachListActive'"></div>
            </div>
        </div>
        <div class="friendLinkBox">
            <div class="friendLink">
                <div class="top_title" >
                    <div class="line"></div>
                    友情链接
                </div>
                <a :href="item.link" target="_blank" v-for="item in webLink">{{item.name}}</a>
            </div>
        </div>
        <div class="tishi">
            <div class="box" style="color: red;font-weight: bolder">
                <!-- <marquee behavior="marquee" direction="" style="display:block;width: 1100px;position: absolute;left:50px;letter-spacing: 2px; white-space:nowrap;">
                        <div style="display: inline;margin-right:560px" v-for="item in 100">请使用windows7及以上系统、谷歌最新浏览器、有线鼠标进行测试</div>
                </marquee> -->
                <marquee behavior="marquee" direction="" style="display:block;width: 1100px;position: absolute;left:50px;letter-spacing: 2px; white-space:nowrap;">
                    <div style="position: relative;right:780px;display: inline">请使用windows7及以上系统、谷歌最新浏览器、有线鼠标进行测试</div>
                    <div style="display: inline;position: relative;right:220px;margin-right:560px" v-for="item in 5">请使用windows7及以上系统、谷歌最新浏览器、有线鼠标进行测试</div>
                </marquee>
                <span @click="close($event)"></span>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .friendLinkBox{
        height: 180px;
    }
    .friendLink{
        width: 1200px;
        padding: 0 20px;
        box-sizing: border-box;
        height: 130px;
        margin: 0 auto;
        border-radius: 5px;
        /*padding: 20px 0px;*/
        box-sizing: border-box;
        background: #fff;
        p{
            font-size: 27px;
            height: 90px;
            line-height: 90px;
            color: #333;
            font-weight: 600;
            letter-spacing: 0.1em;
        };
        a{
            display: block;
            font-size: 14px;
            color:#000000;
            line-height: 30px;
            height: 30px;
            margin-right: 50px;
            &:hover{
                color:#3592FA;
            }
            float: left;
        }
    }
    .home {
        margin-top: 0px;
        position: relative;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .banner_inner {
            width: 1200px;
            position: absolute;
            left: 50%;
            top: 0px;
            margin-left: -600px;
            height: 480px;
        }
        .banner {
            width: 100%;
            height:480px;
            position: relative;
            .floting_box {
                width: 250px;
                height: 298px;
                background-color: #fff;
                padding-top: 30px;
                position: absolute;
                right: 0px;
                top: 68px;
                border-radius: 2px;
                box-shadow: 0px 0px 10px rgba(227, 229, 228, .61);
                text-align: center;
                z-index: 8;
                .head_box {
                    height: 80px;
                    background: url(/imgs/home/Login_logo.png) no-repeat center center;
                }
                .username {
                    line-height: 48px;
                    text-align: center;
                    margin-bottom: 8px;
                    font-size: 18px;
                    color:#333;
                }
                .btn_onlinebuy {
                    width: 200px;
                    height: 40px;
                    border-radius: 2px;
                    background-color: #3492f9;
                    text-align: center;
                    margin: 0 auto;
                    line-height: 40px;
                    font-size: 14px;
                    color: #fff;
                    cursor: pointer;
                    margin-bottom: 20px;
                    &:active {
                        background-color: #1d80ec;
                    }
                }
                .btn_goactive {
                    .btn_onlinebuy;
                    margin-bottom: 16px;
                }
                .go_register {
                    font-size: 12px;
                    span {
                        color: #3591f6;
                        cursor: pointer;
                    }
                }
            }
            .hadlogin_floting_box {
                .floting_box;
                .head_box {
                    margin-top: 30px;
                }
                .username {
                    padding-top: 20px;
                    padding-bottom: 10px;
                }
            }
        }
        .content_topBox{
            width: 100%;
            .content_top {
                width: 1200px;
                margin: 20px auto;
                .list {
                    height: 372px;
                    display: flex;
                    justify-content: space-between;
                    li {
                        box-sizing: border-box;
                        width: 386px;
                        height: 372px;
                        padding-top: 137px;
                        position: relative;
                        z-index: 1;
                        background: url(/imgs/home/content_top/icon_01.png) no-repeat;
                        &:nth-child(2){
                            background: url(/imgs/home/content_top/icon_02.png) no-repeat;
                            .btn_link {
                                .circle {
                                    background-color: #fff;
                                    color: #099cb6;
                                }
                                a{
                                    color:#2c8ffc;
                                }

                            }
                        }
                        &:nth-child(3){
                            background: url(/imgs/home/content_top/icon_03.png) no-repeat;
                            margin-right: 0px;
                            .btn_link {
                                .circle {
                                    background-color: #fff;
                                    color: #099cb6;
                                }
                                a{
                                    color:#F1876B;
                                }

                            }
                        }
                        .card_title {
                            height: 34px;
                            color: #fff;
                            font-size: 18px;
                            line-height: 34px;
                            letter-spacing:3px;
                            font-weight: 600;
                            text-align: center;
                        }
                        .detail {
                            padding: 5px 30px;
                            line-height: 20px;
                            font-size: 14px;
                            color: #ffffff;
                            letter-spacing:1px;
                            opacity: 1;
                            transition-delay: 2s;
                            transition: all 1s;
                        }
                        .undetail {
                            padding-top: 10px;
                            line-height: 20px;
                            font-size: 14px;
                            color: #ffffff;
                            letter-spacing:1px;
                            padding-right: 20px;
                            opacity: 0;
                        }
                        .btn_link {
                            cursor: pointer;
                            text-align: center;
                            position: absolute;
                            width: 104px;
                            height: 32px;
                            bottom: 22px;
                            left: 50%;
                            margin-left: -52px;
                            bottom: 20px;
                            border-radius: 16px;
                            line-height: 31px;
                            background-color: #ffffff;
                            font-size: 12px;
                            color:#5CD8BC !important;
                            .circle {
                                float: left;
                                width: 18px;
                                height: 18px;
                                border-radius: 50%;
                                text-align: center;
                                line-height: 16px;
                                margin-top: 7px;
                                margin-left: 8px;
                                margin-right: 10px;
                                color: #267ce5;
                                background-color: #fff;
                            }
                            span {
                                line-height: 32px;
                                color: #5CD8BC !important;
                                cursor: pointer;
                                letter-spacing:2px;
                            }
                            a{
                                color:#39C49B;
                                font-size: 14px;
                                letter-spacing: 0.1em;
                                &:hover{
                                    color: #fff;
                                }
                            }
                            &:hover{
                                a{
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        .content_nav {
            background: #F6F7F9;
            margin-bottom: 20px;
            .list {
                height: 164px;
                box-sizing: border-box;
                padding-top:15px;
                background: #fff;
                width: 1200px;
                margin: 0 auto;
                display: flex;
                li {
                    flex: 1;
                    padding-top: 15px;
                    padding-bottom: 3px;
                    &:nth-child(4) {
                        // .img_box {
                        //     width: 78px;
                        //     height: 68px;
                        //     margin: 0 auto;
                        //     position: relative;
                        // }
                    }
                    &:nth-child(5) {
                        // .img_box {
                        //     width: 78px;
                        //     height: 68px;
                        //     margin: 0 auto;
                        //     position: relative;
                        // }
                    }
                    .img_box {
                        width: 70px;
                        height: 70px;
                        margin: 0 auto;
                        position: relative;
                        transition: .1s;
                        top:0;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    &:hover{
                        .title{
                            color:#3592F9;
                        }
                        .img_box {
                            animation: tubiao 1s ease;
                        }
                    }
                    .title {
                        width: 100%;
                        line-height: 55px;
                        font-size: 15px;
                        color: #323230;
                        font-weight: bolder;
                        text-align: center;
                        cursor: pointer;
                        letter-spacing:1px;
                        &:hover {
                            color: #3592F9
                        }
                    }
                    @keyframes tubiao {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-15px);

                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }
                }
            }
        }
        .content {
            // 自招面试
            .zizhao_interview {
                // background-color: #fff;
                overflow: hidden;
                margin-bottom: 20px;
                .left_container {
                    float: left;
                    width: 1200px;
                    padding: 0 20px;
                    box-sizing: border-box;
                    background-color: #fff;
                    box-shadow: 0px 0px 10px #e7e6e6;
                    .top_title {
                        height: 80px;
                        line-height: 80px;
                        position: relative;
                        .line{
                            position: absolute;
                            left:-20px;
                            top:30px;
                            width: 4px;
                            height: 23px;
                            background: #117DE0;
                        }
                        .title {
                            float: left;
                            font-size: 20px;
                            font-weight: 600;
                            color: #333;
                            letter-spacing: 0.1em;
                        }
                    }
                    .main_introduce {
                        .introduce_left {
                            width: 240px;
                            height: 400px;
                            position: relative;
                            cursor: pointer;
                            float: left;
                            .detail {
                                position: absolute;
                                width: 393px;
                                height: 46px;
                                line-height: 46px;
                                font-size: 16px;
                                color: #fff;
                                bottom: 0;
                                left: 0;
                                z-index: 1;
                                padding-left: 15px;
                                background-color: rgba(51,51,51,.7);
                            }
                            img {
                                width: 100%;
                                height: 368px;
                            }
                        }
                        .introduce_right {
                            width: 900px;
                            height: 400px;
                            float: left;
                            margin-left: 20px;
                            .box {
                                float: left;
                                width: 210px;
                                height: 176px;
                                margin-right: 20px;
                                margin-bottom: 14px;
                                position: relative;
                                cursor: pointer;
                                box-sizing: border-box;
                                border:1px solid transparent;
                                &:hover{
                                    .detail{
                                        color:#3492F9;
                                    }
                                }
                                &:nth-child(4) {
                                    margin-right: 0px;
                                }
                                &:last-child {
                                    margin-right: 0px;
                                }
                                &:hover {
                                    .mark {
                                        display: block;
                                    }
                                }
                                img {
                                    width: 100%;
                                    height: 120px;
                                }
                                .detail {
                                    width: 100%;
                                    height: 42px;
                                    line-height: 42px;
                                    font-size: 14px;
                                    color: #323232;
                                    z-index: 0;
                                    /*font-weight: bolder;*/
                                    span{
                                        font-size: 12px;
                                        color:#FF4242;
                                        img{
                                            width: 20px;
                                            height: 20px;
                                            position: relative;
                                            top:-2px;
                                        }
                                        &:nth-child(2){
                                            float: right;
                                            color: #B2B2BC;
                                            font-weight: normal;
                                            margin-right: 10px;
                                            width: 50px;
                                        }
                                    }
                                    &:nth-child(3){
                                        line-height: 0px;
                                    }
                                }
                            }

                        }
                    }
                }
                .right_recommend {
                    float: left;
                    margin-left: 14px;
                    padding: 0px 26px;
                    padding-bottom: 30px;
                    width: 246px;
                    background-color: #fff;
                    box-shadow: 0px 0px 10px #e7e6e6;
                    height: 418px;
                    overflow: hidden;
                    .top_title {
                        padding-left: 30px;
                        height: 58px;
                        line-height: 58px;
                        border-bottom: 1px solid #d9d9d9;
                        background: url(/imgs/home/zizhao_interview/icon_xiaoshou.png) no-repeat 0px center;
                    }
                    .sidebar_box {
                        padding: 8px;
                        height: 43px;
                        border-bottom: 1px dashed #d9d9d9;
                        img {
                            float: left;
                            border-radius: 2px;
                            width: 49px;
                            height: 43px;
                        }
                        .neirong_right {
                            float: left;
                            padding-left: 15px;
                            width: 165px;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            .box_top {
                                font-size: 14px;
                                color: #333;
                                line-height: 26px;
                                width: 165px;
                                white-space:nowrap;
                                overflow:hidden;
                                text-overflow:ellipsis;
                            }
                            .box_ft {
                                font-size: 12px;
                                color: #666;
                                line-height: 12px;
                                width: 165px;
                                white-space:nowrap;
                                overflow:hidden;
                                text-overflow:ellipsis;
                            }
                        }
                    }
                }
            }
            .jiaofu_interview {
                .zizhao_interview;
            }
            // 生涯规划、
            // .career_planning {
            //     .zizhao_interview;
            //     margin-bottom: 0px;
            // }
            .friendlink {

            }
        }
        /*名师指导*/
        .top_title {
            .line{
                position: absolute;
                left:-20px;
                top:30px;
                width: 4px;
                height: 23px;
                background: #117DE0;
            }
            height: 80px;
            line-height: 80px;
            position: relative;
            font-size: 20px;
            font-weight: 600;
            color: #333;
            letter-spacing: 0.1em;
        }
        .famous_teacher {
            margin: 0 auto;
            margin-bottom: 20px;
            // height: 380px;
            width: 1158px;
            overflow-x: hidden;
            .lis {
                height: 386px;
                width: 24400px;
                transition: 1s;
                padding-left: 3px;
                li {
                    box-sizing: border-box;
                    float: left;
                    width: 274px;
                    height: 386px;
                    padding-top: 55px;
                    margin-right: 20px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 2px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    img {
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        border: 4px solid #fff;
                        position: absolute;
                        left: 50%;
                        margin-left: -60px;
                        top:0;
                        transition: all .8s;
                        z-index: 1;
                    }
                    &:hover{
                        img{
                            width: 100px;
                            height: 100px;
                            margin-left: -50px;
                        }
                        .foot_box{
                            padding-top: 55px;
                        }
                        .details{
                            height: 188px;
                        }
                    }
                    .details {
                        width: 274px;
                        height: 148px;
                        font-size: 13px;
                        color: #666;
                        overflow: hidden;
                        padding: 0 30px;
                        box-sizing: border-box;
                        text-align: left;
                        transition: all .8s;
                    }
                    .foot_box {
                        transition: all .8s;
                        box-shadow: 0px 0px 10px #e7e6e6;
                        background: #fff;
                        text-align: center;
                        width: 274px;
                        height: 325px;
                        left: 0;
                        padding-top: 80px;
                        padding-bottom: 10px;
                        box-sizing: border-box;
                        border-radius: 2px;
                        .name {
                            font-size: 16px;
                            color: #333;
                            line-height: 30px;
                            font-weight: 600;
                        }
                        .university {
                            font-size: 15px;
                            color: #333;
                            line-height: 30px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .tishi {
            position: absolute;
            width: 100%;
            height: 50px;
            // padding-left: 40px;
            line-height: 50px;
            font-size: 16px;
            left: 0;
            top: 0px;
            z-index: 100;
            color: #333333;
            font-weight: 500;
            background-color: rgba(255,255,255,.5);
            .box {
                width: 1200px;
                margin: 0 auto;
                background: url(/imgs/home/icon_deng3.png) no-repeat left center;
                position: relative;
                height: 50px;
            }
            span {
                float: right;
                width: 42px;
                height: 50px;
                background: url(/imgs/home/icon_close3.png) no-repeat center center;
                cursor: pointer;
            }
            transition: .5s;
        }
    }
</style>
<style type="text/css" lang='less' scoped>
    /*轮播*/
    .home {
        .banner {
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                line-height: 300px;
                margin: 0;
            }
            .el-carousel__item {
                background: url(/imgs/home/banner.jpg) no-repeat center center;
            }

        }
    }
    .container{
        width: 100% !important;
        height: 480px;
        position:relative;
        .swiImgs{
            width: 100%;
            height: 100%;
        }
        .swiImg{
            width: 100%;
            height: 480px;
            background-position: center center;
            background-size:auto 100%;
        }
        .swiper-pagination-bullet{
            // width: 30px;
            height: 8px;
            background: #fff;
            border-radius: 4px;
            margin: 5px;
        }
    }
    .content_information{
        .informationList{
            margin-bottom: 20px;
        }
        .gaokao,.yuanxiao,.zhuanye,.shengya{
            width: 1200px;
            height: 420px;
            margin: 0 auto;
            overflow: hidden;
            padding: 0 20px;
            box-sizing: border-box;
            background: #fff;
            .ulTop{
                height: 132px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                li{
                    overflow: hidden;
                    width: 560px;
                    .img{
                        float: left;
                        width: 234px;
                        height: 132px;
                        cursor: pointer;
                    }
                    .right{
                        float: right;
                        width: 313px;
                        p{
                            font-size: 15px;
                            color:#000;
                            cursor: pointer;
                            &:hover{
                                color:#3492F9;
                            }
                        }
                        .content{
                            height: 100px;
                            font-size:12px !important;
                            padding: 0 !important;
                            overflow: hidden;
                            text-indent: 20px;
                        }
                    }
                }
            }
            .ulBottom{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    overflow: hidden;
                    width: 560px;
                    font-size: 13px;
                    color:#000;
                    line-height: 35px;
                    span{
                        font-size: 13px;
                        color:#000;
                        &:nth-child(2){
                            color:#676767;
                        }
                        cursor: pointer;
                        &:hover{
                            color:#3492F9;
                        }
                    }
                    div{
                        min-width: 80px;
                    }
                }
            }
            .ulList{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-content: space-between;
                height: 300px;
                li{
                    width: 368px;
                    height: 60px;
                    .img{
                        float: left;
                        width: 90px;
                        height: 60px;
                    }
                    .right{
                        float: right;
                        width: 265px;
                        p{
                            font-size: 14px;
                            color:#000;
                            &:hover{
                                color:#3492F9;
                            }
                            cursor: pointer;
                        }
                        div{
                            span{
                                font-size: 12px;
                                color:#676767;
                                margin-left:10px;
                            }
                        }
                    }
                }
            }
        }
        .title{
            .line{
                position: absolute;
                left:-20px;
                top:30px;
                width: 4px;
                height: 23px;
                background: #117DE0;
            }
            height: 80px;
            line-height: 80px;
            position: relative;
            font-size: 20px;
            font-weight: 600;
            color: #333;
            letter-spacing: 0.1em;
        }
    }
</style>
<style scoped>
    .teachList{
        margin: 15px auto;
        width: 100px;
        height: 16px;
        border-radius: 13px;
        background:#E5E5E5;
        display: flex;
        justify-content: space-around;
        line-height: 26px;
        overflow: hidden;
    }
    .teachList>li{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
        margin-top: 3px;
        /* cursor: pointer; */
    }
    .teachListActive{
        background:url(/imgs/home/famous_teacher/z2.png) no-repeat center center !important;
        cursor: pointer;
    }
    .teacherLeft{
        width:25px;
        height: 25px;
        border-radius: 50%;
        background:url(/imgs/home/famous_teacher/z1.png) no-repeat center center;
        position: absolute;
        top:60%;
        left: 10px;
        text-align: center;
        font-size: 20px;
        color: white;
    }
    .teacherRight{
        width:25px;
        height: 25px;
        border-radius: 50%;
        transform: rotate(180deg);
        background:url(/imgs/home/famous_teacher/z1.png) no-repeat center center;
        position: absolute;
        top:60%;
        right: 10px;
        text-align: center;
        font-size: 20px;
        color: white;
    }
    .famous_teacherBox{
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .famous_teacherBigBox{
        background: #F6F7F9;
        padding-bottom: 50px;
    }
</style>
<style scoped>
    #btn_link1 {
        box-shadow: 0px 5px 5px #04A898;
    }
    #btn_link2 {
        box-shadow: 0px 5px 5px #1682f5;
    }
    #btn_link3 {
        box-shadow: 0px 5px 5px #fe8a68;
    }
    #btn_link1:hover{
        box-shadow: none;
        background: #04A898;
    }
    #btn_link2:hover{
        box-shadow: none;
        background: #1682f5;
    }
    #btn_link3:hover{
        box-shadow: none;
        background: #fe8a68;
    }
</style>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
export default {
    props: [ 'named' ],
    data() {
      return {
        isShowTishi: true,
        isCardActive: true,
        // 内容中心小导航
        username: 'Hi,请登录',
        famous_teacher: [],
        content_nav: [
            { imgSrc: '/imgs/home/content_navs/icon_yuanxiaoku.png', title: '院校库', url: '/mubiaotansuo/yuanxiaoku' },
            { imgSrc: '/imgs/home/content_navs/icon_zhuanyeku.png', title: '专业库', url: '/mubiaotansuo/zhuanyeku' },
            { imgSrc: '/imgs/home/content_navs/icon_zhiyeku.png', title: '职业库', url: '/mubiaotansuo/zhiyeku' },
            { imgSrc: '/imgs/home/content_navs/icon_xuekeyaoqiuchaxun.png', title: '选科要求查询', url: '/xuekezhixuan/subject' },
            { imgSrc: '/imgs/home/content_navs/icon_gaozhongjingsaiku.png', title: '高中竞赛库', url: "/highSchoolCompetition"},
            { imgSrc: '/imgs/home/content_navs/icon_xueke.png', title: '学科评估', url: "/xuekepinggu/xuekesubject"},
            // { imgSrc: '/imgs/home/content_navs/icon_zizhaoluquku.png', title: '自招录取库', url: "/zizhaoluquku"},
            { imgSrc: '/imgs/home/content_navs/icon_zizhaoyuanxiaoku.png', title: '强基院校库', url: '/zizhaoyuanxiao' },
            { imgSrc: '/imgs/home/content_navs/icon_zizhaozongpingfushi.png', title: '强基综评复试', url: '/zizhaozongpingfushi' }
        ],
        // 轮播数据
          banner: [ 
                // { imgUrl: "http://a.xuematech.com/data/agent/20190925/1569401138214.jpg" },
                // { imgUrl: "http://a.xuematech.com/data/agent/20190925/1569401148993.jpg" },
                // { imgUrl: "http://a.xuematech.com/data/agent/20190925/1582616460298.jpg" },
                // { imgUrl: "http://a.xuematech.com/data/agent/20190925/1569401403559.jpg" },
          ],
          imgIndex: 1,
          swiperOption:{
                loop:true,
                notNextTick:true,
                initialSlide:0,
               autoplay:{
                    delay:2000,
                    stopOnLastSlide:false,
                   disableOnInteraction:false
               },
               pagination:{
                    el:".swiper-pagination",
                    type: "bullets",
                    clickable:true
               },
              effect : 'fade',
              fadeEffect: {
                  crossFade: true,
              }
          },
          // 友情链接
          webLink: [],
          zizhaoInterview: [{title: ''}],
          jiaofuInterview: [{title: ''}],
          json:[
              {
                  introduction: "国家认证生涯规划师，高考改革研究专家，中国教育培训联盟理事。10年志愿工作经验，精通专业与职业的对应关系研究。在帮助考生准确定位、定量分析院校录取数据等方有很深的造诣。",
                  name: "刘德华",
                  pic: "http://39.98.37.134:8005/agent/20190508/1557282708702.png",
                   qualification: "中国科学院大学硕士研究生"
              },
              {
                  introduction: "国家认证生涯规划师，高考改革研究专家，中国教育培训联盟理事。10年志愿工作经验，精通专业与职业的对应关系研究。在帮助考生准确定位、定量分析院校录取数据等方有很深的造诣。",
                  name: "刘德华",
                  pic: "http://39.98.37.134:8005/agent/20190508/1557282708702.png",
                  qualification: "中国科学院大学硕士研究生"
              }
          ],
          teacherCircle:[],
          teacherStyle:0,
          changeIndex:0,
          teacherNumber:0,
          xingaokao:[],
          yuanxiao:[],
          zhuanye:[],
          shengya:[],
          xingaokaolist:[],
          yuanxiaolist:[],
          zhuanyelist:[],
          shengyalist:[],
          weidenglu:true,
          dailishangzixun:[],
          zixunflag:'',
          zixunname:''
      }
    },
    computed: {
        // 计算属性的 getter
        zizhao_Interview1: function() {
            // `this` 指向 vm 实例
            return this.zizhaoInterview.slice(0,1);
        },
        zizhao_Interview2: function() {
            // `this` 指向 vm 实例
            return this.zizhaoInterview.slice(0,8);
        },
        zizhao_Interview3: function() {
            return this.zizhaoInterview.slice(5);
        },


         // 计算属性的 getter
        jiaofu_interview1: function() {
            // `this` 指向 vm 实例
            return this.jiaofuInterview.slice(0,1);
        },
        jiaofu_interview2: function() {
            // `this` 指向 vm 实例
            return this.jiaofuInterview.slice(1,5);
        },
        jiaofu_interview3: function() {
            return this.jiaofuInterview.slice(5);
        },

        // 资讯
        xingaokao1: function () {
            return this.xingaokao.slice(0,2)
        },
        xingaokao2: function () {
            return this.xingaokaolist.slice(2,12)
        },
        yuanxiao1: function () {
            return this.yuanxiao.slice(0,12)
        },
        yuanxiao2: function () {
            return this.yuanxiao.slice(4,8)
        },
        yuanxiao3: function () {
            return this.yuanxiaolist.slice(0,10)
        },
        zhuanye1: function () {
            return this.zhuanye.slice(0,2)
        },
        zhuanye2: function () {
            return this.zhuanyelist.slice(2,12)
        },
        shengya1: function () {
            return this.shengya.slice(0,12)
        },
        shengya2: function () {
            return this.shengya.slice(4,8)
        },
        shengya3: function () {
            return this.shengyalist.slice(0,10)
        }
        //
    },
    components:{swiper,swiperSlide},
    methods: {
        getLogo() {
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            this.$ajax.post(this.G_uri + '/agent/detail', {
                webSite: OEMdomain
            })
                .then(function(res) {
                    let resData = res.data.data;
                    if(res.data.code == 2000) {
                        _this.famous_teacher = resData.expertTeam;
                        _this.webLink = resData.webLink;
                        _this.banner = resData.webAdvertising;
                        _this.teacherNumber=_this.famous_teacher.length-3;
                        for(var i=0;i<_this.teacherNumber;i++){
                            if(i==0){
                                _this.teacherCircle[i]=true
                            }else{
                                _this.teacherCircle[i]=false;
                            }
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                    if(resData.webBaseInfo.article_status==1){
                        _this.zixunflag=true
                        _this.zixunname=resData.webBaseInfo.article_name;
                    }else{
                        _this.zixunflag=false;
                    }
                })
                .catch(function(error) {

                });
        },
        // 获取自招视频
        getSelfInterviewList() {
            var _this = this;
            this.$ajax.post(this.G_uri + '/agent/getSelfInterviewList', {
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.zizhaoInterview = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 获取生涯教辅视频
        getCareerPlanVideoList() {
            var _this = this;
            this.$ajax.post(this.G_uri + '/agent/getCareerPlanVideoList', {
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.jiaofuInterview = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
// id, title, introduction,ppt
        goPlay(item) {
            this.$router.push({
                path: '/videoplay',
                query: {
                    id: item.id,
                    title: item.title,
                    introduction: item.introduction,
                    ppt: item.ppt,
                    from:'zongpingfushi'
                },
                params: {
                    id: item.id,
                    title: item.title,
                    introduction: item.introduction,
                    ppt: item.ppt
                },
            })
        },
        goPlay1(item) {
            this.$router.push({
                path: '/videoplay',
                query: {
                    id: item.id,
                    title: item.title,
                    introduction: item.introduction,
                    ppt: item.ppt,
                    from: 'homejiaofu'
                }
            })
        },
        // 切换教师轮播
        changeTeacher(index){
            for(var i=0;i<this.teacherCircle.length;i++){
                this.teacherCircle[i]=false
            }
            this.$set(this.teacherCircle,index,true)
            this.teacherStyle=-index*294+"px";
            this.changeIndex=index;
        },
        //切换教师左右点击
        changeIndexs(item){
            if(item=='pre'){
                if(this.teacherNumber<=1){
                    return false
                }
               this.changeIndex=this.changeIndex==0?0:this.changeIndex-1;
               this.changeTeacher(this.changeIndex)
            }
            if(item=='next'){
                if(this.teacherNumber<=1){
                    return false
                }
                this.changeIndex=this.changeIndex==this.teacherNumber-1?this.teacherNumber-1:this.changeIndex+1;
                this.changeTeacher(this.changeIndex)
            }
        },
        changeCeping(){
            window.sessionStorage.setItem('testType360', '1');
            this.$router.push("/zhongzhuan");
        },
        changeXuan(){
            window.sessionStorage.setItem('testType360', '2');
            this.$router.push("/xuankejuece");
        },
        close(e){
           e.target.parentNode.parentNode.style.opacity=0;
        },
        //根据类型获取分类大类
        getCategoryList(){
            var OEMdomain = this.$OEMdomain;
            var _this=this;
            this.$ajax.post(this.G_uri + '/article/getCategoryList', {
                webSite: OEMdomain,
                type:2
            }).then(function (res) {
                $(res.data.data).each(function (i,item) {
                        _this.getIndexList(item.id,item.name)
                        _this.getClickNumIndexList(item.id,item.name)
                })
            })
        },
        //首页资讯
        getIndexList(id,title){
            var OEMdomain = this.$OEMdomain;
            var _this=this;
            this.$ajax.post(this.G_uri + '/article/getIndexList', {
                cateId:id,
            }).then(function (res) {
                if(title=='新高考资讯'){
                    _this.xingaokao=res.data.data;
                }
                if(title=='院校资讯'){
                    _this.yuanxiao=res.data.data;
                }
                if(title=='专业资讯'){
                    _this.zhuanye=res.data.data;
                }
                if(title=='生涯资讯'){
                    _this.shengya=res.data.data;
                }
            })
        },
        //资讯右边
        getClickNumIndexList(id,title){
            var OEMdomain = this.$OEMdomain;
            var _this=this;
            this.$ajax.post(this.G_uri + '/article/getClickNumIndexList', {
                cateId:id,
            }).then(function (res) {
                if(title=='新高考资讯'){
                    _this.xingaokaolist=res.data.data;
                }
                if(title=='院校资讯'){
                    _this.yuanxiaolist=res.data.data;
                }
                if(title=='专业资讯'){
                    _this.zhuanyelist=res.data.data;
                }
                if(title=='生涯资讯'){
                    _this.shengyalist=res.data.data;
                }
            })
        },
        //资讯跳转
        getJump(id){
            this.$ajax.post(this.G_uri+'/article/storeClickNum',{
                id:id
            }).then(function (res) {
            })
            this.$router.push({
                path:'/informationDetails',
                query:{
                    id:id
                }
            })
        },
        //后去代理商资讯
        getZixun(){
            let _this=this
            this.$ajax.post(this.G_uri+'/article/getSelfArticleList',{
                webSite: this.$OEMdomain
            }).then(function (res) {
                _this.dailishangzixun=res.data.data;
            })
        }
    },
    created() {
        this.getLogo();
        this.getSelfInterviewList();
        this.getCareerPlanVideoList();
        this.getZixun();
    },
    mounted(){
        this.getCategoryList();
        //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
        $(".swiper-pagination-bullet").hover(function() {
            $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
        })
        if(window.sessionStorage.ymtxUserMessage){
            this.weidenglu=false;
        }
    }
}
</script>
<style>
    .home .banner .container .swiper-pagination .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        margin-right: 6px !important;
    }
</style>

