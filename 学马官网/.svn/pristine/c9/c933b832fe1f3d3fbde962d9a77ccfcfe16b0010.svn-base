<template>
    <div>
        <!-- 企业简介 -->
        <div class="jianjie">
            <div class="inner">
                <div class="qiye">
                    <h5 class="dabiaoti">企业简介</h5>
                    <div class="underline"></div>
                    <p class="details"> 北京育铭天下科技有限公司旗下品牌学马教育，是一家专注于个性化生涯规划服务，为中学学校、学生提供整体解决方案的综合性教育科技公司，以“做中国有影响力的生涯规划专家”为发展愿景，其主要业务涵盖生涯规划测评、生涯规划师资培训、生涯教育发展管理云平台、生涯课程设计、生涯规划咨询、生涯教育顶层设计等，为中学生提供包括国内外升学路径、高考选科、大学择校、未来职业发展的决策支持，帮助中学生探寻科学的生涯发展之路。<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 北京育铭天下科技有限公司旗下控股7个直营分公司，经过6年的发展拥有近300人的服务团队，目前业务范围覆盖全国近20个省份，建立了广泛的国内外高校和渠道资源，目前已辅导上万名中学生顺利进入国内外理想大学。 </p>
                </div>
                <div class="qiye">
                    <h5 class="dabiaoti">使命&愿景</h5>
                    <div class="underline"></div>
                    <div class="yuanjing">
                        <p>
                            <span>使命：</span> 致力于个性化生涯规划服务，为中学学校、学生提供整体的生涯规划解决方案 </p>
                        <p>
                            <span>愿景：</span> 做中国有影响力的生涯规划专家 </p>
                    </div>
                </div>
                <div class="qiye">
                    <h5 class="dabiaoti">价值主张</h5>
                    <div class="underline"></div>
                    <div class="jiazhi">
                        <div class="news">
                            <div class="new"></div>
                            <div class="new">
                                <p><span>新</span>的学习</p>
                                <p>享全国优质教育资源，个性化辅导，挖掘个体的最大潜能价值</p>
                            </div>
                        </div>
                        <div class="news"></div>
                        <div class="news">
                            <div class="new">
                                <p><span>新</span>的学校</p>
                                <p>从顶层设计开启学校转型，从基于经验的模糊判断到基于数据的精准决策</p>
                            </div>
                            <div class="new">
                                <p><span>新</span>的教学</p>
                                <p>转型成为课程设计者和学习指导者，聚焦学生的学业发展和生涯计划</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 发展历程 -->
        <div class="licheng">
            <div class="inner">
                <div class="qiye">
                    <h5 class="dabiaoti">发展历程</h5>
                    <div class="underline"></div>
                    <div class="content">
                        <div class="between">
                            <ul>
                                <li>
                                    <span>2018</span>
                                    <div class="arrowBox">
                                        <div class="arrow"></div>
                                    </div>
                                </li>
                                <li>
                                    <span>2017</span>
                                    <div class="arrowBox">
                                        <div class="arrow"></div>
                                    </div>
                                </li>
                                <li>
                                    <span>2016</span>
                                    <div class="arrowBox">
                                        <div class="arrow"></div>
                                    </div>
                                </li>
                                <li>
                                    <span>2015</span>
                                    <div class="arrowBox">
                                        <div class="arrow"></div>
                                    </div>
                                </li>
                                <li>
                                    <span>2014</span>
                                </li>
                            </ul>
                        </div>
                        <div :class="'neirongbox' + index" v-for="(item, index) in licheng" :key="index">
                            <p v-html="item.xiangqing"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 核心团队成员介绍 -->
        <div class="team">
            <div class="inner">
                <div class="qiye">
                    <h5 class="dabiaoti">核心团队人员介绍</h5>
                    <div class="underline"></div>
                    <div class="neirong">
                        <div class="profile" v-for="(item, index) in team" :key="index">
                            <div class="photo"><img :src="item.imgUrl" alt=""></div>
                            <div class="rightProfile">
                                <header>
                                    <span>{{item.names}}</span>
                                    <span>{{item.job}}</span>
                                </header>
                                <p v-html="item.jieshao">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
// 简介
.inner {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
}
.jianjie {
    background-color: #fff;
    // font-size: 12px;
    .qiye {
        margin-top: 40px;
    }
    .dabiaoti {
        padding: 20px 0;
        text-align: center;
        font-size: 26px;
        color: #156dfe;
    }
    .underline {
        width: 50px;
        height: 5px;
        background-color: #156dfe;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .details {
        text-indent: 2em;
        font-size: 20px;
        // line-height: 1.5em;
        line-height: 34px;
        color: #666666;
        font-weight: normal;
    }
    .yuanjing {
        font-size: 20px;
        color: #666666;
        overflow: hidden;
        line-height: 35px;
        p {
            float: left;
            margin-right: 25px;
            // width: 48%;
            span {
                font-size: 20px;
                color: #333;
                font-weight: bold;
            }
            &:last-child {
                margin-right: 0px;
            }
        }
    }
    .jiazhi {
        padding: 20px 0px 60px 0px;
        overflow: hidden;
        .news {
            float: left;
            width: 400px;
            height: 384px;
            &:nth-child(2) {
                background: url(/imgs/aboutus/jiazhi.png) no-repeat;
                background-position: center center;
            }
            .new {
                width: 400px;
                height: 192px;
                p {
                    font-size: 20px;
                    color: #666666;
                    margin-top: 10px;
                    padding: 0 10px;
                    line-height: 30px;
                    span {
                        font-size: 26px;
                        color: #333333;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
// 发展历程
.licheng {
    width: 100%;
    // height: 1148px;
    background-image: url(/imgs/aboutus/lichengbgc.png);
    padding-top: 60px;
    .inner {
        padding-top: 0px;
    }
    .dabiaoti {
        text-align: center;
        font-size: 26px;
        color: #156dfe;
        margin-bottom: 20px;
    }
    .underline {
        width: 50px;
        height: 5px;
        background-color: #156dfe;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .content {
        position: relative;
        .between {
            width: 90px;
            padding: 40px 36px;
            margin: 0 auto;
            ul {
                li {
                    width: 90px;
                    height: 90px;
                    line-height: 90px;
                    border-radius: 45px;
                    text-align: center;
                    font-size: 20px;
                    color: #ffffff;
                    margin-bottom: 104px;
                    background-image: url(/imgs/aboutus/shijian.png);
                    position: relative;
                    .arrowBox {
                        position: absolute;
                        bottom: -80px;
                        left: 35px;
                        width: 20px;
                        height: 35px;
                        background-color: #99d7f5;
                        .arrow {
                            width: 0px;
                            height: 0px;
                            border-width: 0px 15px 30px 15px;
                            border-style: solid;
                            border-color: transparent transparent #99d7f5 transparent;
                            position: absolute;
                            left: -5px;
                            top: -30px;
                            // margin-top: 45px;
                        }
                    }
                    .kuang {
                        // background-color: green;
                        width: 100px;
                        height: 100px;
                        position: absolute;
                        right: -100px;
                        top: -50%;
                        margin-top: -100px;
                        .arrow {
                            width: 0px;
                            height: 0px;
                            border-width: 40px;
                            border-style: solid;
                            border-color: transparent #ffffff transparent transparent;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            margin-top: 45px;
                        }
                        .titles {
                            margin-left: 80px;
                            background-color: #ffffff;
                            width: 300px;
                            height: 200px;
                            padding: 40px 20px;
                        }
                    }
                }
            }
        }
        .neirongbox0 {
            padding: 30px;
            width: 455px;
            // height: 85px;
            box-shadow: 0 0 20px rgba(176, 224, 251, .5);
            background-color: #ffffff;
            color: #666666;
            border-radius: 5px;
            position: absolute;
            right: 0px;
            top: 5px;
            font-size: 18px;
            line-height: 27px;
            &:after {
                position: absolute;
                display: inline-block;
                top: 50%;
                left: -10px;
                margin-top: -10px;
                width: 0px;
                height: 0px;
                content: '';
                border-style: solid;
                border-width: 10px;
                border-color: #ffffff #ffffff transparent transparent;
                transform: rotate(-135deg);
            }
        }
        .neirongbox1 {
            .neirongbox0;
            right: 686px;
            top: 166px;
            &:after {
                transform: rotate(45deg);
                left: 503px;
            }
        }
        .neirongbox2 {
            .neirongbox0;
            top: 400px;
        }
        .neirongbox3 {
            .neirongbox0;
            right: 686px;
            top: 590px;
            &:after {
                transform: rotate(45deg);
                left: 503px;
            }
        }
        .neirongbox4 {
            .neirongbox0;
            top: 805px;
        }
    }
}
// 核心团队成员介绍
.team {
    .inner {
        padding: 0px;
    }
    .qiye {
        margin-top: 40px;
    }
    .dabiaoti {
        padding: 20px 0;
        text-align: center;
        font-size: 26px;
        color: #156dfe;
    }
    .underline {
        width: 50px;
        height: 5px;
        background-color: #156dfe;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .neirong {
        background-color: #fff;
        overflow: hidden;
        padding-bottom: 50px;
        padding-top: 30px;
        // height: 750px;
        .profile {
            // width: 570px;
            height: 266px;
            margin-bottom: 50px;
            margin-right: 13px;
            margin-left: 3px;
            margin-top: 3px;
            float: left;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(176, 224, 251, .5);
            &:hover {
                // background-color: #56b1ea;
                transform: translateY(-10px);
                transition: all 1s;
                border-radius: 5px;
                box-shadow: 0px 10px 20px #56b1ea;
            }
            // &:nth-child(even) {
            // 	margin-right: 0px;
            // }
            // 人物头像
            .photo {
                width: 130px;
                height: 130px;
                border-radius: 50%;
                float: left;
                margin-top: 35px;
                margin-left: 10px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            // 右侧人物简介
            .rightProfile {
                width: 230px;
                float: left;
                padding: 0 0px 0 14px;
                header {
                    padding-top: 40px;
                    font-size: 18px;
                    color: #333333;
                    span {
                        margin-right: 5px;
                    }
                }
                p {
                    margin-top: 10px;
                    font-size: 16px;
                    color: #666666;
                }
            }
        }
    }
}
</style>
<script>
export default {
    // components: { Swiper },
    data() {
        return {
            licheng: [{ xiangqing: '3月 · 学马商学院成立<br/>4月 · 产品中心落地北京清华科技园 <br/>5月 · 新高考事业部成立 <br/>7月 · 开启教育大数据战略，建设基于大数据的精准升学规划指导' }, { xiangqing: '3月 · 学马生涯规划研究院成立 <br/>4月 · 与清华大学、中科院心理研究所共同开发学马生涯规划智能专家系统，获发明专利 <br/>5月 · 学马官网上线 <br/>6月 · 受邀湖南教育电视台“高考改革40年”嘉宾 <br/>7月 · 学马第一万个产品用户诞生 10月 · 投资职业教育“美丽星途” 为升学规划增加一条通路' }, { xiangqing: '3月 · 与北京外国语大学战略合作 <br/>5月 · 收购留学“言通“品牌，为用户提供级优留学服务 <br/>10月 · 华东运营中心落地济南 <br/>12月 · 被新浪教育评为2016年年度十大教育品牌' }, { xiangqing: '6月 · 全面升级中学生生涯规划一站式私人订制管家 “学马”品牌 <br/>9月 · 华中地区运营中心落地长沙 <br/>10月 · 总部迁往上海 <br/>11月 · 西南运营中心落地成都' }, { xiangqing: '3月 · 研发高校自主选拔通关战略 <br/>7月 · 第1000个产品用户诞生' }],
            team: [{ imgUrl: '/imgs/aboutus/yusongqian.jpg', names: '余松谦', job: '董事长', jieshao: ' · 学马创始人<br/> · 中南大学硕士研究生<br/> · 清华大学校外研究生导师' }, { imgUrl: '/imgs/aboutus/wuxin.jpg', names: '邬歆', job: '产品副总裁', jieshao: ' · 学马联合创始人 <br/> · 清华大学硕士研究生 <br/> · 中国人类工效学会秘书 <br/> · 曾参与两项国家自然科学基金和多项国家科技部课题研究。并发表2篇国际顶级期刊(SCI)，2篇国家核心期刊，3项国家发明专利。' }, { imgUrl: '/imgs/aboutus/hexiaojun.jpg', names: '贺晓军', job: '运营副总裁', jieshao: ' · 学马联合创始人 <br/> · 中国科学院大学硕士研究生<br/> · 国际生涯规划师<br/> · 曾服务于知名世界500强企业，任高级管理职务 ' }
            ]
        }
    },
    mounted() {}
}
</script>