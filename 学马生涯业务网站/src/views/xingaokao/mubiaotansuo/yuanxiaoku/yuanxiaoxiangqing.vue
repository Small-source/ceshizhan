<template>
    <div class="yuanxiaoxiangqing">
        <div class="loading" v-if="isShowLoading">
            <Loading></Loading>
        </div>
        <!-- <div class="goBack" @click="$router.go(-1)">返回</div> -->
        <div class="top-university">
            <div class="mark"></div>
            <div class="xiangqingBox">
                <div class="inner">
                    <div class="left">
                        <div class="left-Top">
                            <div class="imgBox">
                                <img :src="cdata.logo" alt="">
                            </div>
                            <div class="daxue">
                                {{cdata.name}}
                                <!--<p>Peking University</p>-->
                            </div>
                        </div>
                        <div class="left-Bottom">
                            <div class="title">
                                <p class="tese">
                                    <span class="no0" v-show="cdata.tagShuangyiliuName">{{cdata.tagShuangyiliuName}}</span>
                                    <span class="no1" v-show="cdata.tag985Name">{{cdata.tag985Name}}</span>
                                    <span class="no2" v-show="cdata.tag211Name">{{cdata.tag211Name}}</span>
                                    <span class="no3" v-show="cdata.tagZhongdianxuekeName">{{cdata.tagZhongdianxuekeName}}</span>
                                    <span class="no4" v-show="cdata.tagTesezhuanyeName">{{cdata.tagTesezhuanyeName}}</span>
                                    <span class="no5" v-show="cdata.tagBaoyanzigeName">{{cdata.tagBaoyanzigeName}}</span>
                                </p>
                            </div>
                            <div class="web">
                                官网地址 : <a :href="cdata.website" target="_blank">{{cdata.website}}</a> <br>
                                <span v-if="cdata.address">办学地址 : {{cdata.address&&cdata.address[0]}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right-Top">
                            <img :src="shoucang" alt="" @click="shouCang">
                        </div>
                        <ul class="right-Bottom">
                            <li v-if="cdata.schoolNatureName">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_gongli.png" alt="">
                                <br>
                                <span>{{cdata.schoolNatureName}}</span>
                            </li>
                            <li v-if="cdata.affiliate">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon-jiaoyubu.png" alt="">
                                <br>
                                <span>{{cdata.affiliate}}</span>
                            </li>
                            <li v-if="cdata.type">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_zonghelei.png" alt="">
                                <br>
                                <span>{{cdata.type}}</span>
                            </li>
                            <li v-if="cdata.rank">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_zonghepaiming.png" alt="">
                                <br>
                                <span>{{cdata.rank}}</span>
                            </li>
                            <li v-if="cdata.schoolLevelName">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_benke.png" alt="">
                                <br>
                                <span>{{cdata.schoolLevelName}}</span>
                            </li>
                            <li v-if="cdata.masterNum">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_shuoshidian.png" alt="">
                                <br>
                                <span>{{cdata.masterNum}}</span>
                            </li>
                            <li v-if="cdata.doctorsNum">
                                <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_boshidian.png" alt="">
                                <br>
                                <span>{{cdata.doctorsNum}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        <div class="yuanxiaoNav">
            <ul class="yuanxiaoNavBox">
                <li  @click="isShow = 'yuanxiaojianshouye'" :class="isShow == 'yuanxiaojianshouye' ? 'active' : ''">院校首页</li>
                <li @click="isShow = 'zhaoshengjianzhang'" :class="isShow == 'zhaoshengjianzhang' ? 'active' : ''" v-show="JZ_list&&JZ_list.constructor === Object">招生简章</li>
                <!-- <li @click="isShow = 'College_scenery'" :class="isShow == 'College_scenery' ? 'active' : ''" v-show="JZ_data">院校风光</li> -->
            </ul>
        </div>
        <div class="content" v-if="isShow == 'yuanxiaojianshouye'">
            <div class="right">
                <!-- 院校简介 -->
                <div class="yuanxiaojianjie" >
                    <p class="title">院校简介</p>
                    <p class="xiangqing" v-html="cdata.introduction"></p>
                </div>
                <div id="showMoreYuan" @click="showMoreYuanxiao">
                    展开查看更多
                </div>
                <!-- 近三年录取分数线 -->
                <div class="luquxin">
                    <p class="title">
                        院校分数线
                    </p>
                    <div class="gundongtiao">
                        <table v-if="cdata.threeYearScore&&cdata.threeYearScore.length!=0">
                            <thead>
                            <tr>
                                <td>年份</td>
                                <td>文/理科</td>
                                <td>类型</td>
                                <td>最低分</td>
                                <td>省控线</td>
                                <td>线差</td>
                            </tr>
                            </thead>
                            <tr v-for="item in cdata.threeYearScore">
                                <td>{{item.year||"—"}}</td>
                                <td>{{item.artsAndScience||"—"}}</td>
                                <td>{{item.batch||"—"}}</td>
                                <td>{{item.averageScore||"—"}}</td>
                                <td>{{item.provinceScore||"—"}}</td>
                                <td>{{item.differenceScore||"—"}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="jingqing" v-if="cdata.threeYearScore&&cdata.threeYearScore.length==0">数据更新中</div>
                </div>
                <ul class="tezhong" >
                    <li @click="tezhong=true" :style="{background:tezhong?'#2D8FFC':'',color:tezhong?'#FFFFFF':''}" >
                        <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/te.png" alt="">
                        特色专业
                    </li>
                    <li @click="tezhong=false" :style="{background:!tezhong?'#2D8FFC':'',color:!tezhong?'#FFFFFF':''}">
                        <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/zhong.png" alt="">
                        重点学科
                    </li>
                </ul>
                <div class="jingqing" v-if="cdata.featureName&&cdata.featureName.length==0">数据更新中</div>
                <!-- 特色专业 -->
                <div class="tesezhuanye" v-if="tezhong" v-show="cdata.featureName&&cdata.featureName.length!=0">
                    <p class="xiangqing">
                        <span class="index_span" v-for="(item, index) in cdata.featureName" :key="index">
                            <router-link v-if="item.featureId" :to="'/zhuanyexiangqing?id='+item.featureId+'&type=1'" class="link" target="_blank">{{item.featureName}}</router-link>
                            <!-- <a v-if="item.featureId > 0" :href="'/zhuanyexiangqing?id='+item.featureId+'&type=1'" class="link">{{item.featureName}}</a> -->
                            <a class="unlink" v-if="item.featureId == 0">{{item.featureName}}</a>
                            <span v-if="item.descriptionJson.length > 0">(
                                <span v-for="(item_s, index_s) in item.descriptionJson" :key="index_s">
                                    <router-link v-if="item_s.id > 0 && index_s == 0" :to="'/zhuanyexiangqing?id='+item_s.id+'&type=1'" class="link" target="_blank">{{item_s.n}}</router-link>
                                    <!-- <a v-if="item_s.id > 0 && index_s == 0" :href="'/zhuanyexiangqing?id='+item_s.id+'&type=1'" class="link">{{item_s.n}}</a> -->
                                    <a class="unlink" v-if="item_s.id == 0 && index_s == 0">{{item_s.n}}</a>
                                    <router-link v-if="item_s.id > 0 && index_s > 0" :to="'/zhuanyexiangqing?id='+item_s.id+'&type=1'" class="link" target="_blank">、{{item_s.n}}</router-link>
                                    <!-- <a v-if="item_s.id > 0 && index_s > 0" :href="'/zhuanyexiangqing?id='+item_s.id+'&type=1'" class="link">、{{item_s.n}}</a> -->
                                    <a class="unlink" v-if="item_s.id == 0 && index_s > 0">、{{item_s.n}}</a>
                                </span>
                                )
                            </span>
                        </span>
                    </p>
                </div>
                <!--&lt;!&ndash; 重点学科 &ndash;&gt;-->
                <div class="zhongdianxueke" v-if="!tezhong" v-show="cdata.stressName&&cdata.stressName.length!=0">
                    <p class="xiangqing" id="showMores">
                        <span v-for="(item, index) in cdata.stressName" :key="index">
                            <router-link v-if="item.stressId" :to="'/zhuanyexiangqing?id='+item.stressId+'&type=1'" class="link">{{item.stressName}}</router-link>
                           <!--  <a v-if="item.stressId > 0" :href="'/zhuanyexiangqing?id='+item.stressId+'&type=1'" class="link">{{item.stressName}}</a> -->
                            <a class="unlink" v-if="item.stressId == 0">{{item.stressName}}</a>
                        </span>
                    </p>
                </div>
                <!-- 开设专业 -->
                <div class="yuanxiaozhuanye">
                    <p class="title">院系/专业</p>
                    <table>
                        <thead>
                        <tr>
                            <td>
                                学院
                             </td>
                            <td>所含专业</td>
                        </tr>
                        </thead>
                        <tr v-for="item in cdata.facultyMajor">
                            <td>{{item.college}}</td>
                            <td>
                                <span v-for="(major,index) in item.major">{{major}}</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="content JianZhangList" v-if="isShow == 'zhaoshengjianzhang'">
            <div class="main_box" v-for="(value, key, index) in JZ_list" :key="index">
                <h6 class="year">
                    <span>{{key}}</span>
                </h6>
                <div class="main" v-for="(itemd, keyd, idx) in value" :key="idx">
                    <div class="detail" v-for="(item, $idx) in itemd" :key="$idx">
                        <div class="mounth">{{item.month}}月</div>
                        <p class="title" @click="goJZ(item.id)">{{item.title}}</p>
                        <p class="type">{{item.type}}</p>
                        <p class="provance">{{item.province}}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="xiangqing" v-html="JZ_data"></div> -->
        </div>
        <div class="content" v-if="isShow == 'College_scenery'">
            <!-- 院校风光 -->
            <div class="College_scenery" v-if="isShow == 'College_scenery'">
                <div class="scener_box">
                    <ul class="lis" :style="{marginLeft : sceneryStyle + 'px'}">
                        <li><img src="/imgs/img/1.jpg" alt=""></li>
                        <li><img src="/imgs/img/2.jpg" alt=""></li>
                        <li><img src="/imgs/img/3.jpg" alt=""></li>
                        <li><img src="/imgs/img/4.jpg" alt=""></li>
                        <li><img src="/imgs/img/5.jpg" alt=""></li>
                    </ul>
                    <ul class="lis_btn">
                        <li class="btn_left" @click="changeScenery(1)" :class="sceneryIndex > 0 ? 'btn_left_active': 'btn_left'"></li>
                        <li class="btn_right" @click="changeScenery(-1)" :class="sceneryIndex < sceneryImg.length -1 ? 'btn_right_active': 'btn_right'"></li>
                    </ul>
                </div>    
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .yuanxiaoxiangqing {
        width: 100%;
        strong {
            span {
                 font-weight: bold !important;
            }
        }
        .inner {
            width: 1200px;
            margin: 0 auto;
            position: relative;
        }
        // 小导航，用于返回上一页
        .mianbaoxie {
            height: 40px;
            font-size: 12px;
            line-height: 40px;
            color: #fff;
            position: relative;
            margin-bottom: 12px;
            .no1 {
                padding-left: 5px;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no2 {
                padding-left: 10px;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no3 {
                padding-left: 10px;
                color: #2d90f8;
            }
            .goBack {
                position: absolute;
                box-sizing: border-box;
                width: 46px;
                height: 20px;
                line-height: 18px;
                /*background-color: #2d90f8;*/
                color: #fff;
                right: 0;
                top: 10px;
                border-radius: 2px;
                text-align: center;
                cursor: pointer;
                border:1px solid #fff;;
            }
        }
        .top-university {
            box-sizing: border-box;
            position: relative;
            height: 254px;
            overflow: hidden;
            background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/banner.png) no-repeat center center ;
            .xiangqingBox {
                position: relative;
                z-index: 2;
            }
            .imgBox {
                float: left;
                width: 92px;
                text-align: center;
                height: 92px;
                border-radius: 3px;
                display: flex;
                justify-content: center;  //弹性盒子对象在主轴上的对齐方式
                align-items: center;
                margin: 20px 20px 20px 0;
                img {
                    width: 92px;
                    height: 92px;
                    border-radius: 50%;
                }
            }
            .left{
                width: 50%;
                float: left;
                .left-Top{
                    overflow: hidden;
                }
                .daxue {
                    font-size: 26px;
                    color: #fff;
                    height: 36px;
                    line-height: 36px;
                    font-weight: 600;
                    float: left;
                    margin-top: 40px;
                    p{
                        font-size: 14px;
                    }
                }
                .left-Bottom{
                    .title {
                        overflow: hidden;
                        .tese {
                            float: left;
                            span{
                                border:1px solid #FEFFFF;
                                color: white;
                                border-radius:5px;
                            }
                            .no0 {
                                display: inline-block;
                                padding: 4px 8px;
                                margin-right: 15px;
                                font-size: 12px;
                                line-height: 12px;
                                height: 12px;
                            }
                            .no1 {
                                .no0;
                            }
                            .no2 {
                                .no0;
                            }
                            .no3 {
                                .no0;
                            }
                            .no4 {
                                .no0;
                            }
                            .no5 {
                                .no0;
                            }
                        }
                    }
                    .web{
                        font-size: 12px;
                        color: white;
                        margin-top: 20px;
                        a{
                            color: #44f1eb;
                        }
                    }
                }
            }
            .right {
                margin-top: 20px;
                .right-Top{
                    overflow: hidden;
                    img{
                        float: right;
                        margin:  20px 0;
                        position: relative;
                        top:20px;
                        cursor: pointer;
                    }
                }
                .right-Bottom{
                    margin-top: 40px;
                    float: right;
                    li{
                        text-align: center;
                        float: left;
                        margin-left: 30px;
                    }
                    span{
                        color: white;
                        font-size: 14px;
                        letter-spacing: 3px;
                        line-height:46px;
                    }
                }
            }
        }
        .content {
            width: 1200px;
            margin: 0 auto;
            min-height: 400px;
            margin-top: 18px;
            margin-bottom: 18px;
            position: relative;
            .right {
                padding: 25px 20px;
                padding-bottom: 100px;
                background-color: #fff;
                min-height: 400px;
                box-sizing: border-box;
                width:100%;
                // overflow: hidden;
                #showMoreYuan{
                    width: 144px;
                    height: 38px;
                    box-sizing: border-box;
                    border:1px solid #2D8FFC;
                    line-height: 38px;
                    text-align: center;
                    letter-spacing: 0.1em;
                    font-size: 15px;
                    color:#2B8FFE;
                    margin: 15px auto 50px;
                    cursor: pointer;
                }
                .yuanxiaojianjie {

                    .title {
                        color:#333;
                        font-family:"微软雅黑";
                        font-size: 18px;
                        height: 18px;
                        padding-left: 9px;
                        line-height: 18px;
                        border-left: 2px solid #2c8ffc;
                        font-weight: bolder;
                    }
                    .xiangqing {
                        padding-top: 20px;
                        text-indent: 2em;
                        font-size: 15px;
                        color: #666666;
                        line-height: 24px;
                        max-height:  96px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                }
                .luquxin {
                    position: relative;
                    .title {
                        height: 18px;
                        padding-left: 9px;
                        color:#333;
                        font-family:"微软雅黑";
                        font-size: 18px;
                        line-height: 18px;
                        border-left: 2px solid #2c8ffc;
                        font-weight: bolder;
                        margin-bottom: 20px;
                    }
                    .jingqing{
                        margin: 0 auto;
                        width: 100px;
                        color: #000;
                        background: #fff;
                        letter-spacing: 0.1em;
                        border-radius: 2px;
                        padding: 10px 15px;
                        border: 1px solid #E0E0E0;
                        opacity: 0.7;
                        div{
                            background:#FDAE2B;
                            font-size: 14px;
                            padding: 2px 10px;
                        }
                    }
                    .gundongtiao{
                        max-height:300px;
                        overflow-y: auto;
                    }
                    table{
                        width: 100%;
                        border:1px solid #DDDDDD;
                        border-collapse:collapse;
                    }
                    thead{
                        border-bottom:1px dashed #BEC2CD;
                    }
                    td{
                        text-align: center;
                        line-height: 40px;
                        font-size: 13px;
                        color:#333;
                        max-width: 40px;
                        word-break:break-all;
                        word-wrap:break-word;
                        height: 50px;
                    }
                    margin-bottom: 50px;
                }
                .tezhong{
                    height: 44px;
                    overflow: hidden;
                    img{
                        position: relative;
                        top:-3px;
                    }
                    li{
                        width: 162px;
                        height: 100%;
                        margin-right: 2px;
                        text-align: center;
                        line-height: 44px;
                        letter-spacing: 0.1em;
                        font-size: 15px;
                        color: #2C91FB;
                        float: left;
                        border: 1px solid #DDDDDD;
                        border-radius: 5px;
                        cursor:pointer;
                        box-sizing: border-box;
                        border-bottom: none;
                        position: relative;
                        top:3px;
                    }
                }
                .jingqing{
                    margin: 0 auto;
                    width: 100px;
                    color: #000;
                    background: #fff;
                    letter-spacing: 0.1em;
                    border-radius: 2px;
                    padding: 10px 15px;
                    border: 1px solid #E0E0E0;
                    opacity: 0.7;
                    div{
                        background:#FDAE2B;
                        font-size: 14px;
                        padding: 2px 10px;
                    }
                }
                .tesezhuanye {
                    .index_span{
                        text-indent: 0em;
                        padding: 3px 5px;
                        font-size: 13px;
                        border-radius: 3px;
                        margin-bottom: 15px;
                        float: left;
                        margin-right: 10px;
                        .link {
                            color: #2c8ffc;
                        }
                        .unlink {
                            color: #333;
                        }
                    }
                    .xiangqing{
                        overflow: hidden;
                        border:1px solid #DDDDDD;
                        padding: 20px;
                    }
                }
                .zhongdianxueke {
                    .title {
                        height: 18px;
                        padding-left: 9px;
                        color:#333;
                        font-family:"微软雅黑";
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: bolder;
                        margin-bottom: 20px;
                    }
                    span {
                        text-indent: 0em;
                        padding: 3px 5px;
                        font-size: 13px;
                        border-radius: 3px;
                        margin-bottom: 15px;
                        float: left;
                        margin-right: 10px;
                        text-align: center;
                        // color: #333;
                        .link {
                            color: #2c8ffc;
                        }
                        .unlink {
                            color: #333;
                        }
                    }
                    .xiangqing{
                        overflow: hidden;
                        border:1px solid #DDDDDD;
                        padding: 20px;
                    }
                }
                .yuanxiaozhuanye {
                    margin-top:50px ;
                    overflow: hidden;
                    table{
                        width: 100%;
                        border:1px solid #DDDDDD;
                        border-collapse:collapse;
                    }
                    thead tr td{
                        color:#9A9A9A;
                    }
                    tr{
                        border-bottom:1px dashed #BEC2CD;
                    }
                    td{
                        &:first-child{
                            width: 120px;
                        }
                        &:last-child{
                            padding: 10px;
                            padding-right: 0;
                            line-height: 28px;
                        }
                        height: 40px;
                        line-height: 40px;
                        font-size: 13px;
                        padding-left: 20px;
                        color:#333;
                        overflow: hidden;
                        span{
                            text-indent: 0em;
                            font-size: 13px;
                            border-radius: 3px;
                            margin-right: 50px;
                            display: inline-block;
                        }
                    }
                    .title {
                        height: 18px;
                        padding-left: 9px;
                        color:#333;
                        font-family:"微软雅黑";
                        font-size: 18px;
                        line-height: 18px;
                        border-left: 2px solid #2c8ffc;
                        font-weight: bolder;
                        margin-bottom: 20px;
                    }
                    margin-bottom: 50px;
                }
            }
        }
        .JianZhangList {
            background-color: #fff;
            padding: 40px 20px;
            .main_box {
                .year {
                    line-height: 40px;
                    span {
                        display: inline-block;
                        height: 40px;
                        width: 46px;
                        line-height: 40px;
                        padding-right: 50px;
                        font-size: 18px;
                        font-weight: 600;
                        color: #2c8ffc;
                        background: url('/imgs/xingaokao/mubiaotansuo/yuanxiaoku/jinazhang/icon_shijian.png') no-repeat right center;
                    }
                }
                .main {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 52px;
                    padding: 24px 0px;
                    .detail {
                        display: flex;
                        .mounth {
                            box-sizing: border-box;
                            width: 95px;
                            padding-right: 40px;
                            text-align: right;
                            background: url('/imgs/xingaokao/mubiaotansuo/yuanxiaoku/jinazhang/icon_yuandian.png') no-repeat 70px center;
                        }
                        .title {
                            padding-left: 24px;
                            width: 400px;
                            color: #2c8ffc;
                            cursor: pointer;
                        }
                        .type {
                            width: 200px;
                            padding-left: 30px;
                            background: url('/imgs/xingaokao/mubiaotansuo/yuanxiaoku/jinazhang/icon_jianzhangleixing.png') no-repeat 5px center;
                        }
                        .provance {
                            padding-left: 30px;
                            background: url('/imgs/xingaokao/mubiaotansuo/yuanxiaoku/jinazhang/icon_dingwei.png') no-repeat 5px center;
                        }
                    }
                }
            }
        }
        .College_scenery {
            .scener_box {
                width: 1140px;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                .lis {
                    width: 10000px;
                    transition: all 1s ease;
                  
                    height: 496px;
                    li {
                        width: 1140px;
                        height: 496px;
                        float: left;
                        img {
                            width: 100%;
                            height:100%;
                        }
                    }
                }
                .lis_btn {
                    li {
                        width: 35px;
                        height: 56px;
                        position: absolute;
                        left: 30px;
                        top: 50%;
                        z-index: 2;
                        margin-top: -28px;
                        border-radius: 3px;
                        cursor: pointer;
                        &:nth-child(2) {
                            left: 1075px;
                        }
                    }
                    .btn_left {
                        background: url(/imgs/img/btn/btn_left_w.png) no-repeat center center;
                        background-color: #c7e0ff;
                    }
                    .btn_right {
                        background: url(/imgs/img/btn/btn_right_w.png) no-repeat center center;
                        background-color: #c7e0ff;
                    }
                    .btn_left_active {
                        background: url(/imgs/img/btn/btn_left_lan.png) no-repeat center center;
                        background-color: #c7e0ff;
                    }
                    .btn_right_active {
                        background: url(/imgs/img/btn/brn_right_lan.png) no-repeat center center;
                        background-color: #c7e0ff;
                    }
                  
                }
            }
        }
        .loading {
            position: fixed;
            z-index: 10;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,.3);
        }

    }
</style>
<style lang="less" scoped>
    .yuanxiaoNav{
        width: 100%;
        height: 50px;
        background:#2D8FFC;
    }
    .yuanxiaoNavBox{
        width: 1200px;
        margin: 0 auto;
        li{
            width: 128px;
            height: 100%;
            color:#FFFFFD;
            float: left;
            font-size: 15px;
            text-align: center;
            line-height: 50px;
            cursor: pointer;   
        }
        .active {
            background:#0A66C9;
        }
    }
</style>
<script>
import Loading from '../../../.././components/Loading.vue'
export default {
    components: { Loading },
    data() {
        return {
            // 升学规划进来，改变面包屑路径
            fromShengxueguihua: 0,
            isShowLoading: true,
            msg: '',
            cdata: '',
            isShow: 'yuanxiaojianshouye',
            from:true,
            showMoreText:true,
            city:window.localStorage.cityNow,
            wenke:[],
            like:[],
            tezhong:true,
            // 招生简章
            JZ_data: null,
            JZ_list: null,
            sceneryImg: [1,2,3,4,5],
            sceneryIndex: 0,
            sceneryStyle: 0,
            shoucang:'/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_shoucang.png'
        }
    },
    computed: {
        tese() {
            var str = this.cdata.tag;
            var arr = []
            if(str) {
                arr = str.split(' ');
            }
            return arr;
        }
    },
    methods: {
        dataUpdate() {  
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this; 
            var id = this.$route.query.id                                     
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/universityDetail', {
                   id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data;
                        _this.isShowLoading = false;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        showMoreYuanxiao(){
            if(this.showMoreText){
                $('.yuanxiaojianjie .xiangqing').css({maxHeight:'500px',marginBottom:'5px'})
                $('#showMoreYuan').html('收起')
                this.showMoreText=false;
            }else{
                $('.yuanxiaojianjie .xiangqing').css({maxHeight:'',marginBottom:''})
                this.showMoreText=true;
                $('#showMoreYuan').html('展开查看更多')
            }
        },
        //添加/取消收藏功能
        shouCang(){

            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            var id = this.$route.query.id
            this.$ajax
            // get请求
                .post(this.G_uri + '/collect/storeUniversity', {
                    collectionId: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    if(res.data.code == 2000) {
                        if(res.data.data.id==true){
                            if(_this.shoucang=='/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_shoucang.png'){
                                _this.shoucang='/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_shoucangdianliang.png'
                            }else{
                                _this.shoucang='/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_shoucang.png'
                            }
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 招生简章
        getDataUpdateJianzhang() {  
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this; 
            var id = this.$route.query.id                                     
            this.$ajax
                // get请求
                .post(this.G_uri + '/progressionPlan/getUniversityOverviewDetail', {
                   id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.JZ_data = res.data.data.guide;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 获取招生简章列表
        getJianZhangList() {  
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this; 
            var id = this.$route.query.id                                     
            this.$ajax
                .post(this.G_uri + '/progressionPlan/getUniversityOverviewGroupByTimeList', {
                   universityId: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.JZ_list = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 院校风光
        changeScenery(idx) {
            if(idx < 0) {
                if(this.sceneryIndex < this.sceneryImg.length - 1) {
                    this.sceneryIndex ++;
                    this.sceneryStyle += idx * 1140; 
                }else {
                   return
                }
            }else if(idx > 0) {
                if(this.sceneryIndex < 1) {
                   return;
                }else {
                    this.sceneryIndex --;
                    this.sceneryStyle += idx * 1140; 
                }
            }
        },
        //获取是否收藏
        isShoucang(){
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            var id = this.$route.query.id
            this.$ajax
            // get请求
                .post(this.G_uri + '/collect/getCollectUniversityId', {
                    id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res.data.data)
                    if(res.data.code == 2000) {
                        if(res.data.data.indexOf(Number(id))!=-1){
                            _this.shoucang='/imgs/xingaokao/mubiaotansuo/yuanxiaoku/icon_shoucangdianliang.png'
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 去招生简章
        goJZ(id) {
            let {href} = this.$router.resolve({
                path: '/zhaoshengjianzhang',
                name: '招生简章',
                query: {
                    universityId: id,
                }
            })
            window.open(href, '_blank');
        }
    },
    created() {
        this.dataUpdate();
        this.getDataUpdateJianzhang();
        this.dataUpdate();
        if(this.$route.query.from){
            this.from = false;
        }
        if(this.$route.query.fromShengxueguihua) {
            this.fromShengxueguihua = this.$route.query.fromShengxueguihua;
        }
    },
    mounted(){
        this.isShoucang();
        this.getJianZhangList();
    }
}
</script>