<template>
    <div id="app">
        <div class="topNav" v-if="!tuance">
            <div style="height: 82px;background: #fff">
                <div style="width: 1200px;margin: 0 auto;height: 100%">
                    <div class="innerLeft">
                        <img :src="cdata.logo" alt="" style="position: relative;top:16px;max-height: 50px;">
                    </div>
                    <div class="logoRight" style="float: right">
                        <a @click="Jump('/tuance')" style="letter-spacing: 1px;top:19px !important;display: block;position: relative;">
                            <img src="/imgs/nav/icon_tuance.png" alt="">
                            <span style="position: absolute;left: 70px;top: 10px;font-weight: bolder;width: 70px">团测入口</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="innerBox">
                <div class="inner" style="position: relative">
                    <ul class="lis-nav">
                        <li>
                            <a @click="Jump('/home')">首页</a>
                        </li>
                        <li>
                            <a @click="changeNav('actives2')">生涯测评</a>
                        </li>
                        <li>
                            <a  id="kaoxuanke" @click="Jump('/xuankejuece')"> 新高考选科
                                <img src="/imgs/nav/icon_xiala.png" alt="">
                            </a>
                        </li>
                        <!-- shengya.handsdata.net -->
                        <li v-show="!(/shengya.handsdata.net/.test($OEMdomain))">
                            <a data-v-3cafebd5="" href="http://xuemaedu.net/accounts/login?fromUrl=/tzy/choosebatch" target="_blank" class="">志愿填报</a>
                        </li>
                        <li  v-show="!(/shengya.handsdata.net/.test($OEMdomain))">
                            <a @click="Jump('/shengxueguihua')" id="shengxue">升学规划
                                <img src="/imgs/nav/icon_xiala.png" alt="">
                            </a>
                        </li>
                        <!-- <li v-if="/www.xuematech.com|cd.xuematech.com|hn.xuematech.com/.test($OEMdomain)"> -->
                        <li v-if="!(/shengya.handsdata.net/.test($OEMdomain))">
                            <!-- <a href="http://www.xuematech.com/career/" target="_blank">生涯发展管理平台</a> -->
                            <a :href="'http://' + $OEMdomain + '/career/'" target="_blank">生涯发展管理平台</a>
                        </li>
                         <li v-if="/www.xuematech.com/.test($OEMdomain)">
                            <a  @click="Jump('/aboutus')">关于我们</a>
                        </li>
                    </ul>
                    <!-- <Topnav :activeNav="activeNav" class="leftNav"></Topnav> -->
                    <div class="login">
                        <ul class="nologin" v-show="!islogin && $route.path != '/login'">
                            <li @click="goLogin('Denglu')" :class="active1 == 'Denglu' ? 'active': 'noactive'">个人登录</li>
                            <li @click="goLogin('Register')"  :class="active1 == 'Register' ? 'active': 'noactive'">个人注册</li>
                        </ul>
                        <div class="usernames" v-if="islogin">
                            <div class="named">
                                <img src="/imgs/nav/icon_touxiang.png" alt=""
                                     style="float: left;transform:translate(-10px ,-6px)">
                                {{named}}
                                <span class="no2">
                                    <div class="namedimg"></div>
                                 </span>
                                <ul class="links">
                                    <li class="link-on"><a @click="goGerenzhongxin">个人中心</a></li>
                                    <div class="arrow"></div>
                                </ul>
                            </div>
                            <span style="position: relative;left:-43px;top:9px; font-weight: normal">
                                |
                            </span>
                            <div class="sign_out" @click="Logout">退出</div>
                        </div>
                    </div>
                    <div class="topNavBottom" :id="(/shengya.handsdata.net/.test($OEMdomain))&&'widthHan'">
                        <ul class="navs">
                            <li :id="(/shengya.handsdata.net/.test($OEMdomain))&&'liHan'">
                                <a tag="p"  @click="Jump('/shengxueguihua/zizhuzhaosheng')">强基计划
                                </a>
                                <div class="content">
                                    <div class="contents">
                                        <a href="#/zizhaoyuanxiao" target="_blank">强基院校库</a>

                                    </div>
                                    <!-- <div class="contents">
                                        <a href="#/zizhaoluquku" target="_blank">自招录取库</a>
                                    </div> -->
                                    <div class="contents">
                                        <a href="#/highSchoolCompetition" target="_blank">高中竞赛库</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/zizhaozongpingfushi" target="_blank">强基综评复试</a>
                                    </div>
                                </div>
                            </li>
                            <li :id="(/shengya.handsdata.net/.test($OEMdomain))&&'liHan'">
                                <a tag="p" @click="Jump('/shengxueguihua/zonghepingjia')">综合评价
                                </a>
                                <div class="content">
                                    <div class="contents">
                                        <a href="#/zongpingyuanxiao" target="_blank">综评院校库</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/zphighSchoolCompetition" target="_blank">高中竞赛库</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/zizhaozongpingfushi" target="_blank">强基综评复试</a>
                                    </div>
                                </div>
                            </li>
                            <li v-if="!(/shengya.handsdata.net/.test($OEMdomain))">
                                <a tag="p" @click="Jump('/shengxueguihua/gangaoshengxue')">港澳升学
                                </a>
                                <div class="content">
                                    <div class="contents">
                                        <a  @click="Jump('/shengxueguihua/gangaoshengxue')">港澳升学</a>
                                    </div>
                                </div>
                            </li>
                            <li v-if="!(/shengya.handsdata.net/.test($OEMdomain))">
                                <a tag="p" @click="Jump('/shengxueguihua/haiwailiuxue')">海外留学
                                </a>
                                <div class="content">
                                    <div class="contents">
                                        <a  @click="Jump('/shengxueguihua/haiwailiuxue')">海外留学</a>
                                    </div>
                                </div>
                            </li>
                            <li v-if="!(/shengya.handsdata.net/.test($OEMdomain))">
                                <a tag="p" @click="goPeigeng()">沛耕数学
                                </a>
                                <div class="content">
                                    <div class="contents">
                                        <a  @click="goPeigeng()">沛耕数学</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="topNavBottom2" style="left:173px;width:340px;">
                        <ul class="navs" style="height: 210px">
                            <li style="width: 50%;height: 186px">
                                <a tag="p" style="cursor:text">智能选科</a>
                                <div class="content">
                                    <div class="contents">
                                        <a  @click="Jump('/xuankejuece?360')">360°选科</a>
                                    </div>
                                    <div class="contents">
                                        <a  @click="Jump('/xuankejuece?zhuanye')">根据专业选科目</a>
                                    </div>
                                </div>
                            </li>
                            <li style="border-right:none;width:50%">
                                <a tag="p" style="cursor:text">信息查询</a>
                                <div class="content">
                                    <div class="contents">
                                        <a href="#/xuekezhixuan/university" target="_blank">选科要求查询</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/xuekepinggu/xuekesubject" target="_blank">学科评估</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/mubiaotansuo/yuanxiaoku" target="_blank">院校库</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/mubiaotansuo/zhuanyeku" target="_blank">专业库</a>
                                    </div>
                                    <div class="contents">
                                        <a href="#/mubiaotansuo/zhiyeku" target="_blank">职业库</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tuanceNavBox" v-if="tuance">
            <div class="tuanceNav">
                <img :src="cdata.logo" alt="" style="position: relative;top:21px;height:44px" @click="thome">
                <div class="innerRight">
                    <span>{{school}}</span>
                    <span>{{nianji}}  {{classN}}班</span>
                    <span>{{name}}</span>
                    <a @click="personal">个人中心</a>
                </div>
                <div class="tuanceTanchuang" v-if="Tanchuang">
                    <img src="/imgs/tuance/tanchuang.png" alt="">
                    <div class="queding" @click="tiaozhuan"></div>
                    <div class="quxiao" @click="quxiaoTanchuang"></div>
                    <div class="guanbi" @click="quxiaoTanchuang"></div>
                    <div class="tuanceContent">
                        <p>您确定要退出测评吗?</p>
                        退出后将不会保留当前测评记录
                    </div>
                </div>
            </div>
        </div>
        <!-- <Jingqingqidai v-show="isshowJingqingqidai" v-on:go-Close="isshowJingqingqidai = false"></Jingqingqidai> -->
        <Login :data="isshow" v-on:go-back="isshow = false,active1 = ''"></Login>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" ></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :webLink="webLink" v-on:go-register="isshow = 'Register', activ1='Register'"  v-on:go-login="isshow = 'Denglu', activ1='Denglu'" :named="named"></router-view>
        <!-- <div class="footer">
            <div class="inner">
                <div class="contact">
                    <a to="">关于我们</a>
                    <a to="">联系我们</a>
                    <a to="">法律声明</a>
                </div>
                <p>Copyright©2019 北京育铭天下科技有限公司 <span>京ICP备13008717号</span></p>
                <div class="time">营业时间: 8:00--20:00</div>
            </div>
        </div> -->
        <div class="footer"  v-show="$route.path !== '/zhinengxuanke/ceping' && $route.path !== '/videoplay' && $route.path !== '/perfectInformation'&& $route.path !== '/perfectInformation/'">
            <div class="inner">
                <div class="contact" v-html="cdata.contact">
                </div>
                <!-- <div class="left">
                    <div class="address"><span>地址</span></div>
                    <p class="xiangqing">{{}}</p>
                    <div class="email"><span>邮箱</span></div>
                    <p class="xiangqing">{{}}</p>
                </div>
                <div class="right">
                    <div class="contacts"><span>联系人</span></div>
                    <p class="people">{{}}</p>
                </div> -->
            </div>
        </div>
        <BindCard v-on:go-back="isShowBindCard = false" v-show="isShowBindCard" :url="peiGengUrl" :title="'课程学习'" cardAPI="/volunteer/bindCourseLearnCard"></BindCard>
    </div>
</template>
<style lang="less">
    .el-radio-group .el-radio {
        .el-radio__input {
            display: none;
        }
    }
    .el-radio-group .is-checked{
        .el-radio__label {
            color: #fff!important;
        }
    }
</style>
<style lang="less" scoped>
.citys{
    position: absolute;
    width: 370px;
    height: 350px;
    background: #fff;
    border: 1px solid #ccc;
    z-index: 999 !important;
    padding: 20px 10px;
    top:41px;
    left:0;
    span{
        margin: 0 20px ;
        cursor: pointer;
        width: 44px;
        line-height: 36px !important;
        display: inline-block;
        text-align: center;
        &:hover{
            color: #2D8FFC;
        }
    }
}
* {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei","Arial","黑体","宋体",sans-serif !important;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #666;
    list-style: none;
    text-decoration: none;
    padding-top: 125px;
    background: #F5F5F5;
}
.logoBox{
    width: 100%;
    background: #000;
}
.logo>img:nth-of-type(1){
    height: 44px;
    margin-right: 30px;
    margin-top: 3px;
    cursor: pointer;
    // width: 164px;
    position: relative;
    top:2px
}
.logo>img:nth-of-type(2){
    margin-right: 5px;
    margin-top: 5px;
}
.logoRight{
    a{
        display: block;
        width: 100%;
        position: relative;
    }
    a:hover{
        color:#fff;
    }
    position: relative;
}
.logo{
    position: relative;
    box-sizing: border-box;
    width: 1200px;
    height: 35px;
    margin: 0 auto;
    span{
        font-size: 12px;
        position: relative;
        color:#ffffff;
        letter-spacing: 0.1em;
        i{
            font-size: 12px;
            cursor: pointer;
        }
    }
    padding-top: 5px;
    .logoRight{
        float: right;
        a{
            color:#157DE0;
            font-size: 12px;
            position: relative;
            left: 6px;
            top:0px !important;
        }
        img:nth-of-type(1){
            position: relative;
            left: 0;
            top: 0;
        }
        img:nth-of-type(2){
            position: relative;
            left: -19px;
            top: -13px;
            animation: a 1.5s infinite linear;
            transform-origin: 100% 100% ;
            transform:rotate(20deg);
        }
        @keyframes a{
            0%{
                transform: rotate(20deg);
            }
            50%{
                 transform:rotate(0);
            }
            100%{
                transform: rotate(20deg);
            }
        }
    }
}
.inner {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 44px;
}
.innerLeft {
    float: left;
    min-width: 170px;
}
.innerLeft>span{
        font-size: 12px;
        color: #000;
        font-weight: bolder;
        position: relative;
        top:34px;
        left:10px;
        margin-right:80px;
    i{
        cursor: pointer;
    }
}
.innerBox{
    width: 100%;
    background: #2D8FFC;
    height: 44px;
}
.topNav{
    width: 100%;
    height: 125px;
    // position: fixed;
    position: absolute;
    z-index: 999999999;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 0 6px #dedede;
    .activesXuanke{
        border-bottom: 4px solid #137ADF
    }
    .lis-nav {
        width:870px;
        height:44px;
        float: left;
        box-sizing: border-box;
        li{
            float: left;
            height: 44px;
            color: #333;
            font-size: 16px;
            line-height: 44px;
            /*font-weight: 700;*/
            text-align: center;
            position: relative;
            letter-spacing:2px;
            a {
                display: block;
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 16px;
                padding: 0 15px;
                font-weight: bolder;
                line-height: 44px;
                font-family:" Microsoft YaHei","Helvetica Neue","Arial";
                box-sizing: border-box;
                border-bottom: 4px solid transparent;
                position: relative;
                text-indent: 2px;
                &:hover{
                    background: #026FE6;
                }
                img{
                    position: relative;
                    left:-5px;
                }
                .xuankeList{
                    position: absolute;
                    z-index: 1;
                    left:-10px;
                    width: 160px;
                    height: 120px;
                    background: #fff;
                    li{
                        width: 100%;
                        padding: 0;
                        height: 30px;
                        text-align: left;
                        padding-left: 20px;
                    }
                    a{
                        display: block;
                        width: 100%;
                    }
                }
            }
            .link {
                position: absolute;
                left: 50%;
                margin-left: -44px;
                display: none;
                top: 70px;
                .arrow {
                    position: absolute;
                    left: 50%;
                    margin-left: -5px;
                    top: -13px;
                    width: 0px;
                    height: 0px;
                    border-style: solid;
                    border-width: 0px 5px 13px 5px;
                    border-color: transparent transparent #f6f6f6 transparent;
                }
                .link-li {
                    width: 88px;
                    height: 40px;
                    background-color: #f6f6f6;
                    border-bottom: 1px solid #e7e4e4;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #333;
                        font-size: 14px;
                        line-height: 40px;
                        z-index: 100;
                        text-align: center;
                        &:hover {
                          color: #2c8fff;
                        }
                    }
                }
            }
            .actives{
                border-bottom: 4px solid #3492F9;
            }
        }
        .logoRight{
            float: right;
            a{
                color:#157DE0;
                font-size: 14px;
                position: relative;
                left: 6px;
                top:0px !important;
            }
            img:nth-of-type(1){
                position: relative;
                left: 0;
                top: -2px;
            }
            img:nth-of-type(2){
                position: relative;
                left: -19px;
                top: -13px;
                animation: a 1.5s infinite linear;
                transform-origin: 100% 100% ;
                transform:rotate(20deg);
            }
            @keyframes a{
                0%{
                    transform: rotate(20deg);
                }
                50%{
                    transform:rotate(0);
                }
                100%{
                    transform: rotate(20deg);
                }
            }
        }
    }
    .login {
        position: relative;
        z-index: 999;
        float: right;
        .nologin {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-right: 15px;
            font-size:16px ;
            padding-top: 7px;
        }
        .noactive {
            width: 84px;
            height: 28px;
            line-height: 28px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            border:1px solid #fff;
            color: #fff;
            border-radius: 5px;
        }
        .noactive:hover{
            background:#026FE6;
        }
        .active {
            .noactive;
        }
        .usernames {
            color:#fff;
            height: 44px;
            position: relative;
            font-size: 16px;
            font-weight: bolder;
            .named {
                padding: 13px 0 13px 13px;
                float: left;
                padding-right: 35px;
                position: relative;
                height: 18px;
                line-height:18px;
                font-weight: normal;
                font-size: 16px;
                cursor: pointer;
               .no2 {
                    position: absolute;
                    width: 35px;
                    height: 18px;
                    top: 13px;
                    right: 0px;
                    text-align: center;
                    line-height: 18px;
                    color: #fff;
                    background: url(/imgs/login/icon_xiala.png) no-repeat center center;
                    font-weight: bolder;
                    .namedimg{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        background: url("/imgs/nav/icon_xiala.png") no-repeat center center;
                        position: relative;
                        top:2px;
                    }
                }
                &:hover {
                    .links {
                        display: block;
                    }
                    /*background: #026FE6;*/
                    /*.namedimg{*/
                        /*background: url("/imgs/nav/icon_quxiaoxiala.png");*/
                    /*}*/
                }
                .links {
                    position: absolute;
                    left: 50%;
                    margin-left: -38px;
                    display: none;
                    top: 46px;
                    .arrow {
                        position: absolute;
                        left: 50%;
                        margin-left: -5px;
                        top: -13px;
                        width: 0px;
                        height: 0px;
                        border-style: solid;
                        border-width: 0px 5px 13px 5px;
                        border-color: transparent transparent #f6f6f6 transparent;
                    }
                    .link-on {
                        width: 88px;
                        height: 40px;
                        background-color: #f6f6f6;
                        border-bottom: 1px solid #e7e4e4;
                        text-align: center;
                        a {
                            display: block;
                            width: 100%;
                            height: 100%;
                            color: #333;
                            font-size: 14px;
                            line-height: 40px;
                            z-index: 100;
                            text-align: center;
                            &:hover {
                                color: #2c8fff;
                            }
                        }
                    }
                }
            }
            .sign_out {
                line-height: 44px;
                float: left;
                height: 18px;
                padding-left: 15px;
                cursor: pointer;
                font-weight: normal;
            }
        }
    }
}
.topNavBottom,.topNavBottom2{
    display: none;
    width: 600px;
    position: absolute;
    left:416px;
    box-sizing: border-box;
    top:44px;
    z-index: 99999;
    box-shadow: 0 0 6px #dedede;
    .navs{
        width: 100%;
        padding-top: 20px;
        height: 175px;
        justify-content: space-between;
        overflow: hidden;
        background: #fff;
        li{
            float: left;
            box-sizing: border-box;
            height: 156px;
            width: 20%;
            padding-left: 25px;
            &:nth-of-type(1){
                border-right:1px solid #E5E5E5;
            }
            &:nth-of-type(2){
                border-right:1px solid #E5E5E5;
            }
            &:nth-of-type(3){
                border-right:1px solid #E5E5E5;
            }
            &:nth-of-type(4){
                border-right:1px solid #E5E5E5;
                .contents{
                    width: 100% !important;
                }
            }
            &>a{
                display: block;
                font-size: 15px;
                color:#2c8ffc;
                font-weight: bolder;
                margin-bottom: 20px;
                cursor: pointer;
            }
            .content{
                width: 100%;
                overflow: hidden;
                .contents{
                    width: 100%;
                    float: left;
                    height:30px;
                    a{
                        color:#666666;
                        font-size:14px;
                        &:hover{
                            color:#3592FA;
                        }
                    }
                }
            }
        }
    }
}
.topNavBottom {
    left: 180px;
    .navs {
        height: 150px;
        li {
            height:130px;
        }
    }
}
.footer {
    padding-top: 25px;
    padding-bottom: 50px;
    font-size: 14px;
    color: #fff;
    background-color: #090a0b;
    .contact>a{
        display: inline-block;
        width: 72px;
        height: 28px;
        border-radius: 14px;
        background: #323232;
        color: #fff;
        text-align: center;
        margin-right: 25px;
        font-size: 12px;
        line-height: 28px;
        &:hover{
            background: #3592F9;
        }
    }
    .time{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 13px;
        letter-spacing:3px;
    }
    p{
        font-size: 12px;
        margin-top: 40px;
        color: #cacaca;
        span{
            margin-left: 16px;
        }
    }
}
.copyright {
    line-height: 44px;
    color: #7d7d7d;
    font-size: 12px;
    background-color: #212223;
}
.tuanceNavBox{
    position: absolute;
    z-index: 99999999;
    left: 0;
    top: 0;
    height: 80px;
    width: 100%;
    background:#fff;
    box-shadow: 0 2px 9px #f1f0f0;
}
.tuanceNav{
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    .innerRight{
        width: auto;
        height: 100%;
        line-height:80px;
        float: right;
        overflow: hidden;
        span{
            font-size: 16px;
            color:#333333;
            margin-right: 18px;
            font-weight: bolder;
        }
        a{
            display: block;
            float: right;
            background: #2D90F8;
            padding: 0 5px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-weight: bolder;
            margin: 25px 10px 0 0;
            &:hover{
                color:#fff;
            }
        }
    }
    .tuanceTanchuang{
        position: fixed;
        left:50%;
        top:50%;
        margin-left: -153px;
        margin-top: -125px;
        overflow: hidden;
        .queding{
            width: 80px;
            height: 32px;
            position: absolute;
            left:50px;
            top:190px;
            cursor: pointer;
        }
        .quxiao{
            width: 80px;
            height: 32px;
            position: absolute;
            left:176px;
            top:190px;
            cursor: pointer
        }
        .guanbi{
        width: 15px;
        height: 15px;
        position: absolute;
        right:15px;
        top:56px;
        cursor: pointer
      }
      .tuanceContent{
          position: absolute;
          width:100%;
          top:90px;
          left:0;
          text-align: center;
          font-size: 16px;
          font-weight: bolder;
          color: #000000;
          letter-spacing: 0.1em;
          p{
              font-size: 18px;
              color: #000000;
              font-weight: bolder;
              line-height:54px;
          }
      }
    }
}
    #widthHan{
        left: 305px;
        width: 340px;
    }
    #liHan{
        width: 50%;
    }
</style>
<script type="text/javascript">
    // import Topnav from './components/Topnav.vue'
    import Login from './components/Login.vue'
    import BindCard from './components/BindCard.vue'
    // import Jingqingqidai from './components/Jingqingqidai.vue'
export default {
    // metaInfo: {
    //     title: '志愿填报', // set a title
    //     meta: [{                 // set meta
    //         name: 'keyWords',
    //         content: ''
    //     }]
    // //   // link: [{                 // set link
    // //   //   rel: 'icon',
    // //   //   href: 'https://assets-cdn.github.com/'
    // //   // }]
    // //   // <link rel="icon" type="image/x-icon" href="http://img3.youzy.cn/content/media/thumbs/p00161846.png" id="linkIcon" />
    // },
    metaInfo () {
        return {
            title: this.Pctitle,
            meta: [{                 // set meta
                name: 'keyWords',
                content: this.cdata.keywords,
            }],
            link: [{                 // set link
                rel: 'icon',
                href: this.cdata.mark
            }]
        }
    },
    // components: { Login, Jingqingqidai },
    components: { Login, BindCard },
    data() {
        return {
            // 沛耕的链接
            peiGengUrl: '',
            isShowBindCard: false,
            // 用于判断当前所在页面
            activeNav: 'home',
            islogin: false,
            isshow: false,
            active1: '',
            // 用户姓名
            named: window.sessionStorage.getItem('name'),
            // 敬请期待
            // isshowJingqingqidai: false,
            // 请求回来的数据,logo,copyright等
            cdata: [],
            // 友情链接
            webLink: [],
            // 网页抬头标题
            Pctitle: '',
            actives1:true,
            actives2:false,
            actives3:false,
            actives4:false,
            actives5:false,
            actives6:false,
            actives7:false,
            actives8:false,
            cityData:["安徽","北京","重庆","福建","广东","广西","甘肃","河北","河南","海南"
            ,"湖北","湖南","黑龙江","吉林","江苏","江西","辽宁","内蒙古","宁夏","青海","上海"
                ,"四川","山东","山西","陕西","天津","新疆","云南","浙江"
            ],
            cityNow:window.localStorage.cityNow?window.localStorage.cityNow:"北京",
            cityShow:false,
            cityFlag:true,
            tuance:false,
            school:'',
            grade:'',
            classN:'',
            name:'',
            newPage:'',
            Tanchuang:false,
            nianji:'',
            year:'',
            nianjis:['高三','高二','高一','初三','初二','初一']
        }
    },
    methods: {
        goPeigeng() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/volunteer/requestThirdPartyPc', {}, {
                    headers:{
                        token: token
                    }
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    let url =res.data.data;
                    let obj = {};
                    let str = url.slice(url.indexOf('?') + 1);
                    str.split('&').forEach((item,index) => {
                        let arr = item.split('=');
                        if(arr.length > 1) {
                            obj[arr[0]] = arr[1];
                        }
                    })
                    // 沛耕数学 isBindCard 1是未绑卡2是已经绑卡
                    if(obj.isBindCard == 1) {
                        _this.peiGengUrl = url;
                        _this.isShowBindCard = true;
                    }else if(obj.isBindCard == 2) {
                        window.open(url, "_blank");
                    }
                    // window.open(url, "_blank");

                    // var a = $("<a target='_blank' href=" + url + "></a>").get(0);
                    // var e = document.createEvent('MouseEvents');
                    // e.initEvent('click', true, true);
                    // a.dispatchEvent(e);
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        //切换城市
        changCity(city){
          this.cityNow=city;
          window.localStorage.cityNow=city;
          this.cityShow=false;
        },
        // 退出登录
        Logout() {
            var isThreeLogin = window.sessionStorage.getItem('isThreeLogin');
            // 判断是否是第三方（瀚沙）
            if(isThreeLogin&&isThreeLogin == 1) {
                this.openLoginOut();
                return;
            }
            this.cityFlag=true;
            window.sessionStorage.cityFlag=true;
            this.islogin = false;
            this.named = '';
            window.sessionStorage.clear();
            this.$router.push('/home');
        },
        openLoginOut() {
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            var isThreeLogin = window.sessionStorage.getItem('isThreeLogin');
            var threeLogin = window.sessionStorage.getItem('threeLogin');
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/login/openLoginOut', {},{
                headers:{
                    token: token
                }
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    window.sessionStorage.clear();
                    window.location.href = threeLogin;
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        goGerenzhongxin() {
            this.$router.push('/gerenzhongxin')
        },
        change(index) {
            this.idx = index;
        },
        select(index) {
            this.selection = index;
            this.isshow = false;
            this.isshowXGK = false;
        },
        goLogin(index) {
            let isThreeLogin = window.sessionStorage.getItem('isThreeLogin');
            let threeLogin = window.sessionStorage.getItem('threeLogin');
            let threeRegister = window.sessionStorage.getItem('threeRegister');
            if(isThreeLogin&&isThreeLogin == 1) {
                if(index == "Denglu") {
                    window.location.href = threeLogin;
                }else if(index == "Register") {
                    window.location.href = threeRegister;
                }
                return;
            }
            this.isshow = index;
            this.active1 = index;
        },
        // 读取本地消息判断是否登录
        getUserMessage() {
            if(sessionStorage.getItem('ymtxUserMessage')) {
                this.named =  window.sessionStorage.getItem('name');
                this.named =  window.sessionStorage.getItem('name');
                this.islogin = true;
            }else {
                this.islogin = false;
            }
        },
        // 获取logo,版权信息等
        getLogo() {
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            this.$ajax.post(this.G_uri + '/agent/detail', {
                webSite: OEMdomain
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    let data = res.data.data;
                    let isThreeLogin = data.isThreeLogin;
                    let openThreeLogin = data.openThreeLogin;
                    _this.cdata = data.webBaseInfo;
                    _this.webLink = data.webLink;
                    _this.Pctitle = data.webBaseInfo.title;
                    // 1是用第三方登陆的值 ，2是用咱自己登陆
                    if(isThreeLogin == 1) {
                        if(openThreeLogin.constructor == Object) {
                            let threeLogin = openThreeLogin.loginUrl;
                            let threeRegister = openThreeLogin.registerUrl;
                            window.sessionStorage.setItem('isThreeLogin', isThreeLogin);
                            window.sessionStorage.setItem('threeLogin', threeLogin);
                            window.sessionStorage.setItem('threeRegister', threeRegister);
                            // 如果第三方未登陆，调取接口，已登录不调取接口
                            if(!window.sessionStorage.getItem('isThreeLoginHad')){
                                _this.openSignInWithThree();
                            }
                        }
                    }
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        getQueryVariable(variable) {
           var query = window.location.search.substring(1);
           console.log(query,1049);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == variable){return pair[1];}
           }
           return('');
        },
        // 第三方登录
        openSignInWithThree() {
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            var platformCode = this.getQueryVariable('platformCode');
            var ticket = this.getQueryVariable('ticket');
            if(platformCode&&ticket) {
                this.$ajax.post(this.G_uri + '/login/openSignInWithThree', {
                    platformCode: platformCode,
                    ticket: ticket,
                    webSite: OEMdomain
                })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        window.sessionStorage.setItem('ymtxUserMessage', true);
                        // 走到这里，说明第三方是已经登录的，存储已经登陆信息
                        window.sessionStorage.setItem('isThreeLoginHad', true);
                        window.sessionStorage.setItem('ymtxToken', res.data.data.token);
                        // 存储用户名
                        window.sessionStorage.setItem('name', res.data.data.userInfo.name);
                        let path=sessionStorage.page;
                        _this.islogin = true;
                        _this.named = res.data.data.userInfo.name;
                        if(!path){
                            _this.$router.push('/home');
                        }else{
                            _this.$router.push(path);
                        }
                    }else {
                        _this.$router.push('/home');
                        // var threeLogin = window.sessionStorage.getItem('threeLogin');
                        // window.location.href = threeLogin;
                    }
                })
                .catch(function(err) {
                    console.log(err)
                });
            }else {
                this.$router.push('/home');
            }
        },
        // 获取个人信息
        getUserInfo(){
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        let data=res.data.data;
                        if(data.baccll_year=='成年人'){
                            this.nianji='成年人'
                        }else{
                            let number=Number(data.baccll_year)
                            this.nianji=this.nianjis[number-Number(this.year)]||'成年人'
                        }
                        this.cityNow=res.data.data.province;
                        this.cityFlag=false;
                        window.sessionStorage.cityFlag=false;
                        window.localStorage.cityNow=res.data.data.province;
                        this.school=res.data.data.school_name;
                        this.grade=res.data.data.baccll_year;
                        this.classN=res.data.data.school_class;
                        this.name=res.data.data.name;
                        // console.log(res.data.data.cards.indexOf('5'))
                       if(res.data.data.cards.indexOf('5')>=0){
                           window.sessionStorage.setItem('tuanceCards', 5);
                       }
                    }
                }.bind(this))
                .catch(function(error) {
                    // alert('服务器繁忙')
                })
        },
        changeNav(item){
            this.actives1=false;
            this.actives2=false;
            this.actives3=false;
            this.actives4=false;
            this.actives5=false;
            this.actives6=false;
            this.actives7=false;
            this.actives8=false;
            this[item]=true;
            if(item == 'actives2'){
                window.sessionStorage.setItem('testType360', '1');
                this.$router.push("/zhongzhuan")
            }
        },
        //团测跳转新高考首页
        thome(){
            if(/thome/.test(window.location.hash)||/gerenzhongxin/.test(window.location.hash)||/xuankeReport/.test(window.location.hash)||/threeResult/.test(window.location.hash)){
                this.$router.push('/thome')
            }else{
                if(window.sessionStorage.wancheng){
                    this.$router.push('/thome')
                }else{
                    // this.newPage='/thome'
                    // this.Tanchuang=true
                }
            }
        },
        personal(){
            if(/thome/.test(window.location.hash)||/gerenzhongxin/.test(window.location.hash)||/xuankeReport/.test(window.location.hash)||/threeResult/.test(window.location.hash)){
                this.$router.push('/gerenzhongxin')
            }else{
                if(window.sessionStorage.wancheng){
                    this.$router.push('/gerenzhongxin')
                }else{
                    // this.newPage='/gerenzhongxin'
                    // this.Tanchuang=true
                }
            }
        },
        tiaozhuan(){
            this.Tanchuang=false
            this.$router.push(this.newPage)
        },
        quxiaoTanchuang(){
            this.Tanchuang=false
        },
        //获取最低高考年份
        getYear(){
            var date=new Date();
            var year=date.getFullYear();
            var mounth=date.getMonth()+1;
            var day=date.getDate();
            if(mounth>=7){
                year+=1
            }
            if(mounth==6&&day>=7){
                year+=1
            }
            this.year=year;
        },
        //生涯测评切换提示
        tishi(path){
            this.$confirm('本测评中途退出会自动保存进度，当您再次测评时会继续当前位置。确认退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$router.push(path)
            }).catch(() => {
            })
        },
        //跳转
        Jump(path){
            if(this.$route.path=='/shengyaceping'){
                this.$router.push(path)
                return false
            }
            if(/shengyaceping/.test(this.$route.path)){
                this.tishi(path)
            }else{
                this.$router.push(path)
            }
        }
    },
    watch: {
        $route: {
            handler: function(val, oldVal){
                if(window.sessionStorage.tuance=='3'){
                    this.tuance=true;
                    $('#app').css({paddingTop:'80px'})
                    $('.set_target_major').css({top:'80px'})
                    if(oldVal.path=="/tuance"||oldVal.path=="/perfectInformation"){
                        this.getUserInfo();
                    }
                }else{
                    this.tuance=false;
                    $('#app').css({paddingTop:''})
                    $('.set_target_major').css({top:''})
                }
                if(oldVal.path=="/zhongzhuan"){
                    this.actives1=false;
                    this.actives2=true;
                    this.actives3=false;
                    this.actives4=false;
                    this.actives5=false;
                    this.actives6=false;
                    this.actives7=false;
                    this.actives8=false;
                }
                $('#layer').hide();
                var path = val.path.slice(1);
                this.getUserMessage();
                switch (path) {
                    case "home":
                    case "home/":
                        this.activeNav = 'home'
                        window.scrollTo(0, 0)
                        break;
                    case "login":
                    case "login/":
                        this.activeNav = 'login'
                        window.scrollTo(0, 0)
                        break;
                        // default:
                        // 新高考
                        // 生涯测评
                    case "shengyaceping":
                    case "shengyaceping/":

                        this.activeNav = "shengyaceping";
                        window.scrollTo(0, 0)
                        break;
                        // 目标探索
                    case "mubiaotansuo/yuanxiaoku":
                    case "mubiaotansuo/yuanxiaoku/":
                    case "mubiaotansuo/zhuanyeku":
                    case "mubiaotansuo/zhuanyeku/":
                    case "mubiaotansuo/zhiyeku":
                    case "mubiaotansuo/zhiyeku/":
                        this.activeNav = "mubiaotansuo/yuanxiaoku";
                        window.scrollTo(0, 0)
                        break;
                    case "xuankejuece":
                    case "xuankejuece/":
                    case "xuekezhixuan":
                    case "xuekezhixuan/":
                    case "zhuanyekemuyaoqiu/gmubiaozhuanye":
                    case "zhuanyekemuyaoqiu/gmubiaozhuanye/":
                    case "zhuanyekemuyaoqiu/gxuekeyaoqiu":
                    case "zhuanyekemuyaoqiu/gxuekeyaoqiu/":
                    case "zhuanyekemuyaoqiu/gxuankeyuanxiao":
                    case "zhuanyekemuyaoqiu/gxuankeyuanxiao/":
                    case "zhinengxuanke/ceping":
                    case "zhinengxuanke/ceping/":
                    case "zhinengxuanke/mubiaozhuanye":
                    case "zhinengxuanke/mubiaozhuanye/":
                    case "zhinengxuanke/pinghengdan1":
                    case "zhinengxuanke/pinghengdan1/":
                    case "zhinengxuanke/pinghengdan2":
                    case "zhinengxuanke/pinghengdan2/":
                    case "zhinengxuanke/xuankezhiyuan":
                    case "zhinengxuanke/xuankezhiyuan/":
                        // this.isshow = false;
                        this.activeNav = "xuankejuece";
                        window.scrollTo(0, 0)
                        break;
                        // 自主选拔
                    case "shengxueguihua":
                    case "shengxueguihua/":

                        this.activeNav = "shengxueguihua";
                        window.scrollTo(0, 0)
                        break;
                        // 自愿填报
                    case "zhiyuantianbao":
                    case "zhiyuantianbao/":
                        this.isshowXGK = false;
                        // this.activeNav = "zhiyuantianbao";
                        window.scrollTo(0, 0)
                        break;
                        // 在线课堂
                    case "zizhaobishi":
                    case "zizhaobishi/":
                    case "zizhaomianshi":
                    case "zizhaomianshi/":
                    case "onlineClassroom":
                    case "onlineClassroom/":
                        this.activeNav = "zaixianketang";
                        window.scrollTo(0, 0)
                        break;
                    case "gerenzhongxin":
                    case "gerenzhongxin/":
                        this.activeNav = "";
                        window.scrollTo(0, 0)
                        break;
                    default:
                }
            }
        }
    },
    mounted() {
        if(!window.sessionStorage.isWebKit){
            var isWebKit =  navigator.userAgent.indexOf('WebKit') > -1  // 是否是WebKit 内核
            if(!isWebKit){
                alert('使用谷歌浏览器，体验更佳!');
            }
            window.sessionStorage.isWebKit=true;
        }
        if(window.sessionStorage.tuance=='3'){
            this.tuance=true;
            $('#app').css({paddingTop:'80px'})
            $('.set_target_major').css({top:'80px'})
        }else{
            this.tuance=false;
            $('#app').css({paddingTop:''})
            $('.set_target_major').css({top:''})
        }
        if(window.sessionStorage.testType360=='1'){
            /shengyaceping/.test(window.location.hash)&&this.changeNav('actives2');
        }else{
            /shengyaceping/.test(window.location.hash)&&this.changeNav('actives3');
        };
        this.getUserInfo();
        var timerFlag=true;
        window.onmouseout=function(){
            $('.topNavBottom ,.topNavBottom2').hide()
            $('#shengxue,#kaoxuanke').css("background","")
        }
        window.onmousemove=function(){
            if(timerFlag){
                $('.topNavBottom ,.topNavBottom2').hide()
                $('#shengxue,#kaoxuanke').css("background","")
            }
        }
        $('#shengxue')[0].onmousemove=function(e){
            timerFlag=false;
            e.stopPropagation()
            $('.topNavBottom').show();
            $(this).css("background","#026FE6")
        }
        $('#shengxue')[0].onmouseleave=function(e){
            e.stopPropagation();
            setTimeout(function () {
                timerFlag=true
            },200)

        }
        $('#kaoxuanke')[0].onmousemove=function(e){
            timerFlag=false;
            e.stopPropagation()
            $('.topNavBottom2').show();
            $(this).css("background","#026FE6")
        }
        $('#kaoxuanke')[0].onmouseleave=function(e){
            e.stopPropagation();
            setTimeout(function () {
                timerFlag=true
            },200)

        }
        $('.topNavBottom')[0].onmousemove=function(e){
            e.stopPropagation()
            timerFlag=true
            $('.topNavBottom').show()
            $('#shengxue').css("background","#026FE6")
        }
        $('.topNavBottom2')[0].onmousemove=function(e){
            e.stopPropagation()
            timerFlag=true
            $('.topNavBottom2').show()
            $('#kaoxuanke').css("background","#026FE6")
        }
    },
    created() {
        this.getYear();
        this.getLogo();
        this.getUserMessage();
        let path1 = this.$route.path.slice(1);
        switch (path1) {
            case "home":
            case "home/":
                this.activeNav = 'home'
                window.scrollTo(0, 0)
                break;
            case "login":
            case "login/":
                this.activeNav = 'login'
                window.scrollTo(0, 0)
                break;
                // default:
                // 新高考
                // 生涯测评
            case "shengyaceping":
            case "shengyaceping/":
                this.isshow = false;
                this.activeNav = "shengyaceping";
                window.scrollTo(0, 0)
                break;
                // 目标探索
            case "mubiaotansuo/yuanxiaoku":
            case "mubiaotansuo/yuanxiaoku/":
            case "mubiaotansuo/zhuanyeku":
            case "mubiaotansuo/zhuanyeku/":
            case "mubiaotansuo/zhiyeku":
            case "mubiaotansuo/zhiyeku/":
                this.activeNav = "mubiaotansuo/yuanxiaoku";
                window.scrollTo(0, 0)
                break;
            case "xuankejuece":
            case "xuankejuece/":
            case "xuekezhixuan":
            case "xuekezhixuan/":
            case "zhuanyekemuyaoqiu":
            case "zhuanyekemuyaoqiu/":
            case "zhinengxuanke/ceping":
            case "zhinengxuanke/ceping/":
            case "zhinengxuanke/mubiaozhuanye":
            case "zhinengxuanke/mubiaozhuanye/":
            case "zhinengxuanke/pinghengdan1":
            case "zhinengxuanke/pinghengdan1/":
            case "zhinengxuanke/pinghengdan2":
            case "zhinengxuanke/pinghengdan2/":
            case "zhinengxuanke/xuankezhiyuan":
            case "zhinengxuanke/xuankezhiyuan/":
                this.activeNav = "xuankejuece";
                window.scrollTo(0, 0)
                break;
                // 自主选拔
            case "shengxueguihua":
            case "shengxueguihua/":
                this.activeNav = "shengxueguihua";
                window.scrollTo(0, 0)
                break;
                // 自愿填报
            case "zhiyuantianbao":
            case "zhiyuantianbao/":
                this.isshowXGK = false;
                this.activeNav = "zhiyuantianbao";
                window.scrollTo(0, 0)
                break;
                // 在线课堂
            case "zizhaobishi":
            case "zizhaobishi/":
            case "zizhaomianshi":
            case "zizhaomianshi/":
            case "onlineClassroom":
            case "onlineClassroom/":
                this.activeNav = "zaixianketang";
                window.scrollTo(0, 0)
                break;
                // 个人中心
            case "gerenzhongxin":
            case "gerenzhongxin/":
                this.activeNav = "";
                window.scrollTo(0, 0)
                break;
            case "perfectInformation":
            case "perfectInformation/":
                this.activeNav = "";
                window.scrollTo(0, 0)
                break;
            default:
        }
    }
}
</script>
