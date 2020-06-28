<template>
    <!-- 关于我们页面 -->
    <div class="Aboutus">
        <div class="banner">
        </div>
        <div class="gaishu">
        </div>
        <!-- 使命，愿景 -->
        <div class="mission">
            <div class="inner">
                <h5 class="title">使命&愿景</h5>
                <div class="content">
                    <div class="content_box"></div>
                </div>
            </div>
        </div>
        <!-- 价值主张 -->
        <div class="value_proposition">
            <div class="inner">
                <h5 class="title">
                    价值主张
                </h5>
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in value_proposition" :key="index">
                            <div class="img_box">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <p class="title">
                                <span>新</span>{{item.title}}
                            </p>
                            <p class="detail">{{item.detail}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 发展历程 -->
        <div class="licheng">
            <div class="inner">
            </div>
        </div>
        <!-- 核心团队人员介绍 -->
        <div class="team">
            <div class="inner">
                <h5 class="title">核心团队人员介绍</h5>
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in team" :key="index">
                            <div class="img_box">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <p class="names">{{item.names}}</p>
                            <p class="job">{{item.job}}</p>
                            <p class="detail" v-html="item.jieshao"></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 联系我们 -->
        <div class="callus">
            <div class="inner">
                <h5 class="title">联系我们</h5>
                <div class="map"></div>
                <div class="headquarters">
                    <h5 class="headquarters_title">北京研发中心</h5>
                    <p class="detail">
                        <span>北京市海淀区清华科技园科技大厦B座清华三创空间</span>
                        <span>客服热线：4008-925-909</span>
                    </p>
                </div>
                <div class="branch_Office">
                    <h5 class="branch_Office_title">运营中心</h5>
                    <ul>
                        <li> 
                            <p class="title">华中运营中心</p>
                            <p class="detail">地址 : 湖南省长沙市开福区万达广场写字楼A座24楼</p>
                        </li>
                        <li> 
                            <p class="title">西南运营中心</p>
                            <p class="detail">地址 : 四川省成都市高新区府城大道399号天府新谷8栋12楼</p>
                        </li>
                        <!-- <li> 
                            <p class="title">河南分公司</p>
                            <p class="detail">地址 : 河南省郑州市花园路国贸360大厦A座14楼</p>
                        </li> -->
                    </ul>
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
        height: 450px;
        background: url(/imgs/aboutus/banner.png) no-repeat center center;
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
        h5.title {
            height: 130px;
            line-height: 130px;
            text-align: center;
            font-size: 28px;
            font-weight: 600;
            color: #333;
        }
    }
    .gaishu {
        width: 100%;
        height: 120px;
        background: url(/imgs/aboutus/bg_shuju.png) no-repeat center center;
    }
    .mission {
        height: 800px;
        background-color: #fafafa;
        .content {
            height: 680px;
            background: url(/imgs/aboutus/bg_xuema.png) no-repeat right center;
            .content_box {
                width: 744px;
                height: 680px;
                background: url(/imgs/aboutus/bg_shimingyuanjing.png) no-repeat center center;
            }
            
        }
    }
    // 价值主张
    .value_proposition {
        background-color: #fff;
        .content {
            padding: 0px 80px;
            ul {
                height: 460px;
                display: flex;
                justify-content: space-between;
                li {
                    width: 240px;
                    .img_box {
                        height: 190px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .title {
                        height: 60px;
                        line-height: 60px;
                        border-bottom: 1px solid #dcdcdc;
                        text-align: center;
                        font-size: 17px;
                        color: #666;
                        span {
                            font-size: 26px;
                            font-weight: 600;
                            color: #333;
                            margin-right: 5px;
                        }
                    }
                    .detail {
                        padding-top: 20px;
                        line-height: 30px;
                        font-size: 14px;
                        color: #333;
                    }
                }
            }

        }
    }
    .licheng {
        height: 950px;
        background: url(/imgs/aboutus/bg_fazhanlicheng.png) no-repeat center center;
    }
    // 核心团队人员介绍
    .team {
        background-color: #fafafa;
        .content {
            padding-bottom: 60px;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    width: 360px;
                    // height: 400px;
                    background-color: #fff;
                    border: 1px solid #e2e2e2;
                    .img_box {
                        height: 170px;
                        display: flex;
                        justify-content: center;
                        align-items:center;
                    }
                    .names {
                        text-align: center;
                        line-height: 20px;
                        font-size: 18px;
                        color: #333;
                        margin-bottom: 10px;
                        font-weight: 600;
                    }
                    .job {
                        .names;
                        font-size: 16px;
                    }
                    .detail {
                        padding: 14px 50px;
                        text-align: center;
                    }
                }
            }
        }
    }
    .callus {
        background-color: #fff;
        .map {
            height: 260px;
            background: url(/imgs/aboutus/icon_ditu.png) no-repeat center center;
        }
        .headquarters {
            height: 136px;
            border-bottom: 1px solid #e2e2e2;
            .headquarters_title {
                padding-top: 20px;
                line-height: 60px;
                font-size: 22px;
                font-weight: 600;
                text-align: center;
                color: #333;
            }
            .detail {
                font-size: 15px;
                color: #666;
                span {
                    margin-right: 90px;
                }
            }
        }
        .branch_Office {
            .branch_Office_title {
                line-height: 100px;
                font-size: 22px;
                font-weight: 600;
                text-align: center;
                color: #333;
            }
            ul {
                // overflow: hidden;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                li {
                    float: left;
                    height: 122px;
                    width: 470px;
                    .title {
                        font-size: 19px;
                        line-height: 28px;
                        color: #333;
                        font-weight: 600;
                        margin-bottom: 18px;
                    }
                    .detail {
                        font-size: 16px;
                        line-height: 20px;
                        color: #666;
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
            value_proposition: [
                { title: '的学校', detail: '从顶层设计开启学校转型，从基于经验的模糊判断到基于数据的精准决策', imgUrl:'/imgs/aboutus/icon_xuexiao.png' },
                { title: '的教学', detail: '转型成为课程设计者和学习指导者，聚焦学生的学业发展和生涯计划', imgUrl:'/imgs/aboutus/icon_jiaoxue.png' },
                { title: '的学习', detail: '享全国优质教育资源，个性化辅导，挖掘个体的最大潜能价值', imgUrl:'/imgs/aboutus/icon_zhuzhang.png' }
            ],
            // 核心团队人员介绍
            team: [
                { imgUrl: '/imgs/aboutus/icon_yu.png', names: '余松谦', job: '董事长', jieshao: '学马创始人<br/>中南大学硕士研究生<br/>清华大学校外研究生导师' },
                { imgUrl: '/imgs/aboutus/icon_wu.png', names: '邬歆', job: '产品副总裁', jieshao: '学马联合创始人 <br/>清华大学硕士研究生 <br/>中国人类工效学会秘书 <br/>曾参与两项国家自然科学基金和多项国家科技部课题研究。并发表2篇国际顶级期刊(SCI)，2篇国家核心期刊，3项国家发明专利' },
                { imgUrl: '/imgs/aboutus/icon_he.png', names: '贺晓军', job: '运营副总裁', jieshao: '学马联合创始人 <br/>中国科学院大学硕士研究生<br/>国际生涯规划师<br/>曾服务于知名世界500强企业，任高级管理职务 ' }
            ],
            // 发展历程
            licheng: [
                { detail: '3月 · 学马商学院成立<br/>4月·产品中心落地北京清华科技园 <br/>5月 · 新高考事业部成立 <br/>7月·开启教育大数据战略，建设基于大数据的精准升学规划指导' }, 
                { detail: '3月 · 学马生涯规划研究院成立 <br/>4月 · 与清华大学、中科院心理研究所共同开发ai生涯 规划智能专家系统，获发明专利 <br/>5月 · 学马官网上线 <br/>6月 · 受邀湖南教育电视台“高考改革40年”嘉宾 <br/>7月 · 学马第一万个产品用户诞生 10月 · 投资职业教育“美丽星途” 为升学规划增加一条通路' }, 
                { detail: '3月 · 与北京外国语大学战略合作 <br/>5月 · 收购留学“言通“品牌，为用户提供级优留学服务 <br/>10月 · 华东运营中心落地济南 <br/>12月 · 被新浪教育评为2016年年度十大教育品牌' }, 
                { detail: '6月 · 全面升级中学生生涯规划一站式私人订制管家 “学马”品牌 <br/>9月 · 华中地区运营中心落地长沙 <br/>10月 · 总部迁往上海 <br/>11月 · 西南运营中心落地成都' }, 
                { detail: '3月 · 研发高校自主选拔通关战略 <br/>7月 · 第1000个产品用户诞生' }
            ],
        }
    },
    methods: {},
    mounted() {
    }
}
</script>