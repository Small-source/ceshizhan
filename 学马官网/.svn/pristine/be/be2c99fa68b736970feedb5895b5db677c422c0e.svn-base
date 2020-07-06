<template>
    <!-- 平台工作流程，功能，在线学习系统，走班排课页面 -->
    <div class="pingtaixitong">
        <div class="ptxt-header">
            <img src="/imgs/pingtai/pingtaixitong.jpg" alt="">
        </div>
        <!-- 平台工作流程 -->
        <div class="pt-workflow">
            <div class="inner">
                <h6>平台功能</h6>
                <div class="underline"></div>
                <ul class="pingtais">
                    <li>生涯发展规划平台</li>
                    <li>一体化学习平台</li>
                    <li>学校智慧管理平台</li>
                </ul>
                <div class="liucheng">
                    <div class="shengya">
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/shejiguifanbj3.png) no-repeat center 20px' }">生涯测评</p>
                        </div>
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/xuankejuece.png) no-repeat center 20px' }">选科决策</p>
                        </div>
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/beizhuyitianxie.png) no-repeat center 20px', backgroundPosition: 'center 20px' }">志愿填报</p>
                        </div>
                        <!-- 	<div><p :style="{ background: 'url(/imgs/pingtai/zhaosheng.png)  no-repeat center 20px' }">选科决策</p></div> -->
                    </div>
                    <div class="study">
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/xuexi-2.png) no-repeat center 20px' }">在线学习</p>
                        </div>
                    </div>
                    <div class="management">
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/kujialeqiyezhan_zhinengguangchang.png) no-repeat center 20px' }">智能排课</p>
                        </div>
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/guanli-2.png) no-repeat center 20px' }">走班管理</p>
                        </div>
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/pingjia-2.png) no-repeat center 20px' }">综合素质评价</p>
                        </div>
                        <div>
                            <p :style="{ background: 'url(/imgs/pingtai/zonghefenxi.png) no-repeat center 20px' }">走班考试分析</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 平台功能系统 -->
        <div class="pt-xitong">
            <!-- 01生涯评测系统 -->
            <div class="shengya">
                <div class="inner">
                    <p class="title">
                        <span>01</span> 生涯评测系统 </p>
                    <div class="syxiangqing">
                        <div class="box" v-for="(item, index) in shengya" :key="index">
                            <div class="tubiao" :style="item.tubiao"></div>
                            <p class="hd">{{item.biaoti}}</p>
                            <p class="ft">{{item.jieshi}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 02选课决策系统 -->
            <div class="xuanke">
                <div class="inner">
                    <p class="title">
                        <span>02</span> 选课决策系统 </p>
                    <div class="lis">
                        <div class="xkyuan">
                            <div>自我认知</div>
                        </div>
                        <div class="dottedline"></div>
                        <div class="smallyuan">&gt;</div>
                        <div class="dottedline"></div>
                        <div class="xkyuan">
                            <div>学职信息</div>
                        </div>
                        <div class="dottedline"></div>
                        <div class="smallyuan">&gt;</div>
                        <div class="dottedline"></div>
                        <div class="xkyuan">
                            <div>选科统计</div>
                        </div>
                    </div>
                    <div class="xuankeneirong">
                        <div v-for="(item, index) in xuanke" :key="index">
                            <h6>{{item.biaoti}}</h6>
                            <p>{{item.jieshi}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 03在线学习系统 -->
            <div class="onlineStudy">
                <div class="inner">
                    <p class="title">
                        <span>03</span> 在线学习系统 </p>
                    <div class="fatherbox">
                        <div class="add1">
                            <div class="add-x"></div>
                            <div class="add-y"></div>
                        </div>
                        <div class="add2">
                            <div class="add-x"></div>
                            <div class="add-y"></div>
                        </div>
                        <div class="childbox" v-for="(item, index) in onlineStudy" :key="index">
                            <div class="tubiao" :style="item.tubiao"></div>
                            <h6>{{item.biaoti}}</h6>
                            <p>{{item.jieshi}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 04综合素质评价系统 -->
            <div class="zonghe">
                <div class="inner">
                    <p class="title">
                        <span>04</span> 综合素质评价系统</p>
                    <div class="fatherbox">
                        <div class="childbox" v-for="(item, index) in zonghe" :key="index">
                            <div class="xuhao">{{item.num}}</div>
                            <div class="xiangqing">
                                <p class="top">{{item.biaoti}}</p>
                                <p class="foot">{{item.jieshi}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 05志愿填报系统 -->
            <div class="ziyuan">
                <div class="inner">
                    <p class="title">
                        <span>05</span> 志愿填报系统 </p>
                    <div class="fatherbox">
                        <div class="childbox">
                            <div class="tubiao" :style="{ background: 'url(/imgs/pingtai/shuju.png) no-repeat center 20px' }"></div>
                            <p>拥有考试院校同步数据</p>
                            <p>可查询近三年的院校数据、专业数据及录取数据</p>
                        </div>
                        <div class="childbox">
                            <div class="tubiao" :style="{ background: 'url(/imgs/pingtai/yuanxiao.png) no-repeat center 20px' }"></div>
                            <p>支持院校优先模式</p>
                            <p>支持专业优先模式</p>
                            <p>支持自主填报模式</p>
                            <p>支持一键填报模式</p>
                        </div>
                        <div class="childbox">
                            <div class="tubiao" :style="{ background: 'url(/imgs/pingtai/baokao.png) no-repeat center 20px' }"></div>
                            <p>模拟报考，根据真实成绩推测录取概率</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 06走班排课 -->
            <div class="paike">
                <div class="inner">
                    <p class="title">
                        <span>06</span> 走班排课系统 </p>
                    <div class="fatherbox">
                        <div class="childbox" v-for="(item, index) in paike" :key="index">
                            <h6>
                                <span>{{item.num}}</span> {{item.biaoti}} </h6>
                            <p>{{item.jieshi}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 07走班校园管理系统 -->
            <div class="zouban">
                <div class="inner">
                    <p class="title">
                        <span>07</span> 走班管理系统 </p>
                    <div class="fatherbox">
                        <div class="childbox" v-for="(item, index) in zouban" :key="index">
                            <img :src="item.url" alt="">
                            <p class="title">{{item.titles}}</p>
                            <p class="xiangqing">{{item.jieshi}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 08走班考试分析系统 -->
            <div class="kaoshifenxi">
                <div class="inner">
                    <p class="title">
                        <span>08</span> 走班考试分析系统 </p>
                    <div class="fatherbox">
                        <div class="childbox" v-for="(item, index) in kaoshifenxi" :key="index">
                            <img :src="item.url" alt="">
                            <div class="foot">
                                <div class="arrow"></div>
                                <p>{{item.xiangqing}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 角色功能 -->
            <div class="juese">
                <div class="inner">
                    <h6>角色功能</h6>
                    <div class="underline"></div>
                    <div class="fatherbox">
                        <div class="childbox" v-for="(item, index) in juese" :key="index">
                            <p class="shenfen">{{item.shenfen}}</p>
                            <div class="message">
                                <p class='biaoti'>
                                    <span>{{item.biaotiz}}</span>
                                    <span>{{item.biaotiy}}</span>
                                </p>
                                <p class="neirong">{{item.jieshi}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
.pingtaixitong {
    // height: 6000px;
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .ptxt-header {
        width: 100%;
        font-size: 0;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .pt-workflow {
        padding-top: 40px;
        h6 {
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            color: #146DFD;
            text-align: center;
        }
        .underline {
            width: 60px;
            height: 4px;
            background-color: #146DFD;
            margin: 0 auto;
        }
        .pingtais {
            margin-top: 40px;
            display: flex;
            li {
                flex: 1;
                font-size: 20px;
                text-align: center;
                color: #333333;
            }
        }
        // 平台工作流程
        .liucheng {
            overflow: hidden;
            // 生涯
            .shengya {
                float: left;
                width: 364px;
                height: 337px;
                div {
                    float: left;
                    width: 135px;
                    height: 135px;
                    margin-top: 34px;
                    margin-right: 90px;
                    box-sizing: border-box;
                    font-size: 18px;
                    line-height: 18px;
                    border-radius: 10px;
                    color: #ffffff;
                    background-color: #67C4F0;
                    text-align: center;
                    p {
                        padding: 92px 0 25px 0;
                    }
                    &:nth-child(even) {
                        margin-right: 0px;
                    }
                }
            }
            .study {
                float: left;
                padding: 120px 168px 82px 168px;
                div {
                    width: 135px;
                    height: 135px;
                    box-sizing: border-box;
                    font-size: 18px;
                    line-height: 18px;
                    border-radius: 10px;
                    color: #ffffff;
                    background-color: #67C4F0;
                    text-align: center;
                    p {
                        padding: 92px 0 25px 0;
                    }
                }
            }
            .management {
                .shengya;
            }
        }
    }
    .pt-xitong {
        padding-top: 80px;
        .ptgnxt {
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            color: #146DFD;
            text-align: center;
        }
        .underline {
            width: 60px;
            height: 4px;
            background-color: #146DFD;
            margin: 0 auto;
        }
        .title {
            height: 45px;
            line-height: 45px;
            font-size: 20px;
            color: #156def;
            margin-bottom: 40px;
            span {
                display: inline-block;
                width: 45px;
                height: 45px;
                border-radius: 5px;
                background-color: #5DB8F1;
                color: #ffffff;
                margin-right: 20px;
                text-align: center;
            }
        }
        // 01生涯评测系统
        .shengya {
            padding-top: 30px;
            padding-bottom: 60px;
            background: url(/imgs/pingtai/beijing.jpg) no-repeat;
            .title {
                color: #fff;
            }
            .syxiangqing {
                // height: 400px;
                overflow: hidden;
                .box {
                    float: left;
                    width: 305px;
                    margin-left: 3px;
                    height: 254px;
                    border-bottom: 2px solid #66C6F0;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    border-radius: 5px;
                    padding-top: 44px;
                    margin-right: 135px;
                    background-color: #fff;
                    &:last-child {
                        margin-right: 0px;
                    }
                    .tubiao {
                        width: 80px;
                        height: 80px;
                        margin: 0 auto;
                        margin-bottom: 36px;
                        border: 1px dashed #66c3ef;
                        border-radius: 50%;
                    }
                    .hd {
                        font-size: 18px;
                        color: #333333;
                        height: 18px;
                        line-height: 18px;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .ft {
                        padding: 0 37px 0 30px;
                        font-size: 16px;
                        color: #666666;
                    }
                }
            }
        }
        // 02选课决策系统
        .xuanke {
            padding: 60px 0px;
            // 选课决策系统上方的圆
            .lis {
                overflow: hidden;
                padding: 35px 30px 0 30px;
                .xkyuan {
                    float: left;
                    width: 154px;
                    height: 154px;
                    border-radius: 50%;
                    background-color: #66C6F0;
                    color: #FFFFFF;
                    text-align: center;
                    font-size: 22px;
                    line-height: 135px;
                    position: relative;
                    border: 8px solid #D8ECF7;
                    div {
                        position: absolute;
                        width: 135px;
                        height: 135px;
                        border-radius: 50%;
                        background-color: #66C6F0;
                        border: 1px dashed #ffffff;
                        left: 50%;
                        top: 50%;
                        margin-top: -68px;
                        margin-left: -68px;
                    }
                }
                .dottedline {
                    width: 135px;
                    margin-top: 80px;
                    height: 0;
                    border-bottom: 2px dashed #4d8cfd;
                    float: left;
                }
                .smallyuan {
                    float: left;
                    width: 45px;
                    height: 45px;
                    font-size: 22px;
                    margin-top: 57px;
                    border-radius: 50%;
                    color: #ffffff;
                    line-height: 45px;
                    text-align: center;
                    background-color: #66C6F0;
                }
            }
            // 下方内容介绍
            .xuankeneirong {
                overflow: hidden;
                div {
                    float: left;
                    width: 225px;
                    height: 107px;
                    margin-right: 255px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    h6 {
                        font-size: 18px;
                        color: #333333;
                        text-align: center;
                        height: 18px;
                        line-height: 18px;
                        padding: 26px 0 18px 0;
                    }
                    p {
                        font-size: 16px;
                        color: #666666;
                    }
                }
            }
        }
        // 03智能排课系统
        .paike {
            padding-top: 60px;
            padding-bottom: 60px;
            .fatherbox {
                width: 1200px;
                height: 243px;
                .childbox {
                    width: 240px;
                    height: 250px;
                    padding-right: 30px;
                    float: left;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    margin-right: 40px;
                    // border-radius: 5px;
                    // overflow: hidden;
                    &:hover {
                        h6 {
                            transition: all 1s;
                            width: 250px;
                            margin-top: -10px;
                        }
                    }
                    h6 {
                        padding-left: 30px;
                        height: 60px;
                        width: 210px;
                        line-height: 60px;
                        font-size: 20px;
                        color: #ffffff;
                        background-color: #62BEF1;
                        border-radius: 0 0 60px 0;
                        margin-top: -5px;
                        margin-left: -5px;
                        span {
                            margin-right: 15px;
                        }
                    }
                    p {
                        padding: 48px;
                        width: 168px;
                        font-size: 16px;
                        color: #666666;
                        line-height: 24px;
                    }
                    &:last-child {
                        margin-right: 0px;
                    }
                }
            }
        }
        // 04在线学习系统
        .onlineStudy {
            padding-top: 60px;
            padding-bottom: 60px;
            background-color: #F6F7FB;
            .fatherbox {
                height: 300px;
                position: relative;
                .add1 {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    left: 350px;
                    top: 50%;
                    margin-top: -25px;
                    .add-x {
                        width: 50px;
                        height: 6px;
                        position: absolute;
                        top: 50%;
                        margin-top: -3px;
                        background-color: #60b9f1;
                    }
                    .add-y {
                        .add-x;
                        transform: rotate(90deg);
                    }
                }
                .add2 {
                    .add1;
                    left: 800PX;
                }
                .childbox {
                    width: 242px;
                    height: 300px;
                    background-color: #ffffff;
                    float: left;
                    margin-right: 135px;
                    padding: 0 34px;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    &:last-child {
                        margin-right: 0px;
                    }
                    .tubiao {
                        height: 174px;
                    }
                    h6 {
                        font-size: 18px;
                        color: #333333;
                        text-align: center;
                        height: 18px;
                        line-height: 18px;
                        margin-bottom: 16px;
                    }
                    p {
                        font-size: 16px;
                        color: #666666;
                        line-height: 24px;
                    }
                }
            }
        }
        // 05走班校园管理系统
        .zouban {
            padding-top: 60px;
            padding-bottom: 60px;
            background-color: #F6F7FB;
            .fatherbox {
                // overflow: hidden;
                width: 1200px;
                height: 310px;
                .childbox {
                    width: 276px;
                    height: 310px;
                    border-radius: 5px;
                    margin-right: 32px;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    float: left;
                    &:last-child {
                        margin-right: 0;
                    }
                    img {
                        width: 276px;
                        height: 144px;
                        border-radius: 5px;
                    }
                    .title {
                        text-align: center;
                        line-height: 54px;
                        font-size: 18px;
                        color: #333333;
                        margin-bottom: 10px;
                    }
                    .xiangqing {
                        padding: 0px 40px 0px 40px;
                        font-size: 16px;
                        color: #666666;
                    }
                }
            }
        }
        // 04综合素质评价平台
        .zonghe {
            .title {
                color: #fff;
            }
            // background-color: #F6F7FB;
            padding: 60px 0px 60px 0;
            background: url(/imgs/pingtai/beijing.jpg);
            background-size: 100% 496px;
            .fatherbox {
                width: 1200px;
                height: 290px;
                .childbox {
                    width: 263px;
                    height: 290px;
                    float: left;
                    margin-right: 49px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    .xuhao {
                        width: 90px;
                        height: 45px;
                        color: #0A63FB;
                        border-top-left-radius: 45px;
                        border-top-right-radius: 45px;
                        border: 1px dashed #0A63FB;
                        border-bottom: 0px;
                        margin: 0 auto;
                        text-align: center;
                        line-height: 45px;
                        font-size: 16px;
                        background-color: #FFFFFF;
                    }
                    .xiangqing {
                        border: 1px dashed #0A63FB;
                        padding: 14px 20px 0px 20px;
                        width: 223px;
                        height: 231px;
                        background-color: #FFFFFF;
                        .top {
                            height: 70px;
                            line-height: 70px;
                            border-bottom: 1px dashed #0A63FB;
                            color: #333333;
                            font-size: 18px;
                            text-align: center;
                        }
                        .foot {
                            padding: 30px 20px 0px 10px;
                            font-size: 16px;
                            color: #666666;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
        // 07自主招生智能推荐系统
        .zizhao {
            padding: 20px 0 60px 0px;
            .fatherbox {
                margin-top: 40px;
                width: 1200px;
                height: 162px;
                .childbox {
                    width: 327px;
                    height: 162px;
                    float: left;
                    margin-right: 109px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    .left {
                        float: left;
                        width: 55px;
                        height: 82px;
                        padding: 40px 20px;
                        background-color: #5FBAEF;
                        border-radius: 5px;
                        color: #ffffff;
                        font-size: 18px;
                        line-height: 24px;
                    }
                    .right {
                        float: left;
                        margin-top: 8px;
                        width: 192px;
                        height: 64px;
                        box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                        padding: 38px 20px;
                        font-size: 16px;
                        color: #666666;
                        line-height: 24px;
                    }
                }
            }
        }
        // 08志愿填报系统
        .ziyuan {
            padding: 60px 0px;
            background-color: #F6F7FB;
            .fatherbox {
                margin-top: 40px;
                height: 300px;
                .childbox {
                    float: left;
                    padding: 0px 20px 0px 20px;
                    width: 242px;
                    height: 300px;
                    margin-right: 177px;
                    background-color: #ffffff;
                    border-radius: 5px;
                    .tubiao {
                        height: 118px;
                    }
                    &:last-child {
                        margin-right: 0px;
                    }
                    p {
                        margin-bottom: 16px;
                        font-size: 16px;
                        color: #333333;
                        line-height: 24px;
                        background: url(/imgs/pingtai/duihao.png) no-repeat 5px 0px;
                        background-size: 24px 24px;
                        padding-left: 50px;
                    }
                }
            }
        }
        // 09走班考试分析系统
        .kaoshifenxi {
            padding: 60px 0px;
            height: 386px;
            .fatherbox {
                height: 303px;
                .childbox {
                    float: left;
                    width: 285px;
                    height: 303px;
                    margin-right: 172px;
                    font-size: 0px;
                    line-height: 0px;
                    border-radius: 5px;
                    overflow: hidden;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    &:last-child {
                        margin-right: 0px;
                    }
                    img {
                        width: 285px;
                        height: 153px;
                    }
                    .foot {
                        background-color: #68C5F1;
                        padding: 0px 35px;
                        height: 150px;
                        .arrow {
                            width: 0px;
                            height: 0px;
                            margin: 0 auto;
                            border: 24px solid #68C5F1;
                            border-top-color: #ffffff
                        }
                        p {
                            font-size: 16px;
                            color: #ffffff;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
        // 角色功能
        .juese {
            background-color: #F6F7FB;
            height: 405px;
            padding: 35px 0px 60px 0px;
            .inner {
                height: 340px;
            }
            h6 {
                height: 60px;
                font-size: 24px;
                color: #146DFF;
                text-align: center;
            }
            .fatherbox {
                width: 1300px;
                height: 335px;
                .childbox {
                    margin-top: 35px;
                    float: left;
                    width: 240px;
                    box-shadow: 0 0 20px rgba(176, 224, 251, .5);
                    margin-right: 60px;
                    border-radius: 5px;
                    .shenfen {
                        height: 92px;
                        text-align: center;
                        font-size: 20px;
                        color: #333333;
                        line-height: 92px;
                    }
                    .message {
                        // width: 172px;
                        height: 177px;
                        padding: 28px 20px 0px 25px;
                        background-color: #ffffff;
                        .biaoti {
                            height: 18px;
                            line-height: 18px;
                            font-size: 18px;
                            color: #333333;
                            margin-bottom: 30px;
                            span {
                                margin-right: 20px;
                            }
                        }
                        .neirong {
                            font-size: 16px;
                            color: #666666;
                        }
                    }
                    &:hover {
                        transition: all 0.5s;
                        // margin-top: -1px;
                        width: 270px;
                        .shenfen {
                            transition: all 0.1s;
                            background-color: #66C2F1;
                            color: #ffffff;
                            height: 120px;
                            margin-top: -15px;
                            font-size: 24px;
                            line-height: 120px;
                            border-radius: 5px;
                        }
                        .message {
                            height: 185px;
                        }
                    }
                }
            }
        }
    }
}
</style>
<script type="text/javascript">
export default {
    metaInfo: {
        title: '生涯云平台—学马', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '新高考，生涯规划，生涯测评，选科系统'
            },
            {               
                name: 'description',
                content: '学马生涯发展管理云平台，引进“互联网+”教学模式，8大系统无缝衔接，利用平台的专业资源和便捷功能，接轨新高考政策形式。'           
            }  
        ]
    },
    data() {
        return {
            // 01生涯评测系统
            shengya: [{ biaoti: '认知潜能测评', jieshi: '深度分析潜能，精准推荐专业', tubiao: 'background:url(/imgs/pingtai/shejiguifan.png) no-repeat center center' }, { biaoti: '人格特征测试', jieshi: '探索个人职业性格类型，选择与个人性格更为吻合的职业和环境', tubiao: 'background:url(/imgs/pingtai/renxiang.png) no-repeat center center' }, { biaoti: '职业兴趣测评', jieshi: '探索职业兴趣，找到适合学生的规划及努力方向', tubiao: 'background:url(/imgs/pingtai/zhiyexingqu.png) no-repeat center center' }],
            // 02选课决策系统
            xuanke: [{ biaoti: '自我认知', jieshi: '对维度自我内容探索，提升自我认知' }, { biaoti: '学职信息', jieshi: '强大的数据体系支撑，囊括齐全的职业、专业、院校' }, { biaoti: '选科决策', jieshi: '查询、统计、分析校级及年级选科结果' }],
            // 06走班排课系统
            paike: [{ num: '01', biaoti: '在线选课', jieshi: '顺应高考n选3的政策形式，自动统计学生选科结果 ，呈现团体数据统计' }, { num: '02', biaoti: '资源评估', jieshi: '评估学校现有资源，提供合理的走班建议' }, { num: '03', biaoti: '智能排课', jieshi: '智能分配师资，满足学 生选课志愿，建立排课规则 ' }, { num: '04', biaoti: '在线调课', jieshi: '根据学校需求，一键匹 配学生调课方案 ' }],
            // 04在线学习
            onlineStudy: [{ biaoti: '教师发展培训', jieshi: '提供生涯教师培训课程，培养合格师资力量', tubiao: 'background:url(/imgs/pingtai/jiaoshifazhan.png) no-repeat center center' }, { biaoti: '学生自主学习', jieshi: '传授志愿填报院校、出国留学、自主招生等课程，提升学生的生涯规划能力', tubiao: 'background:url(/imgs/pingtai/xueshengzizhu.png) no-repeat center center' }, { biaoti: '家长成长学堂', jieshi: '解析高考政策、普及生涯规划，实现成长陪伴、生涯辅导的愿望', tubiao: 'background:url(/imgs/pingtai/jiazhangchengzhang.png) no-repeat center center' }],
            // 07走班校园管理系统
            zouban: [{ url: '/imgs/pingtai/richangguanli.png', jieshi: '对接智能考勤设备，如刷卡机、智能手环等， 提供多样化考勤方式 ', titles: '日常管理' }, { url: '/imgs/pingtai/changdiguanli.png', jieshi: '线上预约活动场地，系统公示，提升沟通效率 ', titles: '场地管理' }, { url: '/imgs/pingtai/xiaoneitongzhi.png', jieshi: '系统发布重要通知，精准抵达个人账号 ', titles: '校内通知' }, { url: '/imgs/pingtai/zuihouyige.png', jieshi: '关注微信公众号，即可实现线上管理，实时信息互联，便捷沟通 ', titles: '校内通知' }],
            // 06综合素质评价平台
            zonghe: [{ num: '01', biaoti: '建立评价指标体系', jieshi: '精确的两级指标结构管理，支持校本化评价体系' }, { num: '02', biaoti: '配置账户级别权限', jieshi: '可自定义管理员、年级主任、任课教师等多种角色，设置其管理权限' }, { num: '03', biaoti: '开展随堂师资互评', jieshi: '老师关注学生的学习过程和效果，学生可以评价老师，形成反馈闭环' }, { num: '04', biaoti: '过评结果三方查询', jieshi: '学生、家长可查看素质评价结果，校方监督教师的评价工作' }],
            // 07自主招生智能推荐系统
            zizhao: [{ biaoti: '强大的数据资源', jieshi: '汇集院校招生资讯，为学生报考提供广泛资源' }, { biaoti: '精准算法', jieshi: '根据学生成绩和院校信息智能推荐择校方案，极具参考价值' }, { biaoti: '即时的查询系统', jieshi: '查询各地中学和高校的真实录取数据，让学生知己知彼' }],
            // 08走班考试分析系统
            kaoshifenxi: [{ xiangqing: '一键导出不同学科、不同层次的学生成绩，为学生选科提供学业数据参考', url: '/imgs/pingtai/diyige.png' }, { xiangqing: '支持行政班和教学班的成绩分析，提供学科教研和命题质量的分析报告', url: '/imgs/pingtai/dierge.png' }, { xiangqing: '辅助学校进行走班考试管理，将模拟高考成绩库赋分推算学生成绩', url: '/imgs/pingtai/disange.png' }],
            // 角色功能
            juese: [{ shenfen: '学校', biaotiz: '智慧管理', biaotiy: '智能分析', jieshi: '切实提升教学效率，解决校方排课，学生选课的难题，发挥学生最优适应能力' }, { shenfen: '教师', biaotiz: '强化师资', biaotiy: '培优育英', jieshi: '利用平台的专业资源和便捷功能，提升自身教学水平，提高教学办公效率' }, { shenfen: '学生', biaotiz: '发现自我', biaotiy: '肯定自我', jieshi: '提早锁定专业，院校目标，发挥强势能力、巩固强项学科，树立生涯规划意识' }, { shenfen: '家长', biaotiz: '跟随时代', biaotiy: '陪伴教育', jieshi: '接轨新高考政策形势，转变思维方式，参与孩子的生涯规划，做强力的后盾支撑' }],
             // 系统简介
            activeJianjie: false,
            // 核心优势
            activeImg: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollTops)
    },
    methods: {
        scrollTops() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(this.scrollTop)
            if (this.scrollTop > 600) {
                this.activeJianjie = true
            }
            if (this.scrollTop > 1300) {
                this.activeImg = true
            }
        }
    }
}
</script>