<template>
    <!-- 研学营 -->
    <div class="researchCamp">
        <div class="banner">
        </div>
        <!-- 课程流程 -->
        <div class="course_flow">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">课程流程</li>
                    <li class="foot"></li>
                </ul>
                <div class="main_content">
                   <img src="/imgs/researchCamp/bg_flow.png" alt=""> 
                </div>
            </div>

        </div>
        <!-- 课程内容 -->
        <div class="course_content">
             <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">课程内容</li>
                    <li class="foot"></li>
                </ul>
                <ul class="mian_content">
                    <li v-for="(item, index) in course_content" :key="index" class="list">
                        <div class="img_box">
                             <img :src="item.imgUrl" alt="">
                        </div>
                        <p class="title">
                            {{item.title}}
                        </p>
                        <ul>
                            <li v-for="(detail, index) in item.detail" :key="index">{{detail}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 课程优势 -->
        <div class="course_advantage">
             <div class="inner">
                <ul>
                    <li v-for="(item, index) in course_advantage" :key="index" class="main_box">
                        {{item.detail}}
                    </li>
                    <li class="crossing"></li>
                    <li class="vertical"></li>
                    <li class="vertical no2"></li>
                    <li class="vertical no3"></li>
                </ul>
            </div>
        </div>
        <!-- 研学收获 -->
        <div class="research_harvest">
             <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">研学收获</li>
                    <li class="foot"></li>
                </ul>
                <ul class="main_content">
                    <li v-for="(item, index) in research_harvest">
                        <div class="img_box"><img :src="item.imgUrl" alt=""></div>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
    .researchCamp {
        letter-spacing: 1px;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .banner {
            background: url(/imgs/researchCamp/banner.png) no-repeat center center;
            height: 450px;
        }
        .title_box {
            padding-top: 55px;
            padding-bottom: 40px;
            height: 50px;
            line-height: 50px;
            font-size: 36px;
            display: flex;
            justify-content: space-between;
            color: #333;
            .top {
                flex: 1;
                background: url('/imgs/attractInvestment/icon_header.png') no-repeat right center;
            }
            .foot {
                flex: 1;
                background: url('/imgs/attractInvestment/icon_header_foot.png') no-repeat left center;
            }
            .title {
                padding: 0px 30px;
                letter-spacing: 6px;
            }
        }
        .course_flow {
            height: 410px;
            background-color: #fff;

        }
        .course_content {
            height: 694px;
            background-color: #f5f7f6;
            .mian_content {
                
                height: 492px;
                display: flex;
                justify-content: space-between;
                .list {
                    box-sizing: border-box;
                    width: 360px;
                    height: 492px;
                    background-color: #fff;
                    text-align: center;
                    .img_box {
                        height: 238px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .title {
                        line-height: 30px;
                        height: 30px;
                        font-size: 26px;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    ul {
                        li {
                            height: 34px;
                            line-height: 34px;
                            font-size: 16px;
                        }
                    }

                }
            }
        }
        .course_advantage {
            height: 530px;
            padding-top: 150px;
            background: url(/imgs/researchCamp/bg_kecheng.png) no-repeat center center;
            ul {
                height: 468px;
                background-color: #c8cdd0;
                position: relative;
                .main_box {
                    box-sizing: border-box;
                    width: 300px;
                    height: 234px;
                    // margin-right: 1px;
                    float: left;
                    padding: 72px 60px;
                    text-align: center;
                    font-size: 18px;
                    color: #333;
                    // margin-bottom: 1px;
                    &:hover {
                        background-color: #3c8ce2;
                        color: #fff;
                    }
                }
                .crossing {
                    width: 1180px;
                    height: 1px;
                    position: absolute;
                    top: 234px;
                    left: 10px;
                    background-color: #fff;
                }
                .vertical {
                    width: 1px;
                    height: 448px;
                    position: absolute;
                    top: 10px;
                    left: 300px;
                    background-color: #fff;
                }
                .no2 {
                    left: 600px;
                }
                .no3 {
                    left: 900px;
                }
            }
        }
        .research_harvest {
            height: 450px;
            background-color: #fff;
            .main_content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 250px;
                li {
                    box-sizing: border-box;
                    width: 258px;
                    height: 248px;
                    border: 1px solid #b5b5b5;
                    padding: 7px;
                    .img_box {
                        height: 174px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #edf2f7;
                    }
                    p {
                        padding-top: 14px;
                        font-size: 14px;
                        color: #333;
                        line-height: 22px;
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
            // page: 'Jianjie'
            course_content: [
                { title: '人文社科类', imgUrl: '/imgs/researchCamp/icon_renwenshekelei.png', detail: ['典型社会问题调查研究', '共享经济案例分析', '文创产品设计分析', '现代广告语的文学性应用', '高考作文语言研究' ] },
                { title: '理论科学类', imgUrl: '/imgs/researchCamp/icon_lilunkexuelei.png', detail: ['数学建模的学习与实践', '气候变化中归因分析的探究与实践', '心理学实验探索'] },
                { title: '工程科学类', imgUrl: '/imgs/researchCamp/icon_gongchengkexuelei.png', detail: ['人工智能的实现探究', '面向过程的程序设计', '面向对象的程序设计', '人因工程学的社会实践与应用'] },
            ],
            course_advantage: [
                { detail: '一级学会专家及相关专业硕博带队提高学生研学能力' },
                { detail: '专家教授亲临现场交流学科疑惑打破学生认知边界 ' },
                { detail: '体验国家重点实验室科研项目流程提升基础科研素养 ' },
                { detail: '模拟硕博级答辩标准感受学术氛围及其严谨性  ' },
                { detail: '课题研究报告参加创新大赛增强学生竞争力 ' },
                { detail: '有效盖章的综合评定助力自主选拔初审 ' },
                { detail: '探索学科领域前沿课题掌握未来发展趋势 ' },
                { detail: '探索自我兴趣提前规划未来职业生涯' }
            ],
            research_harvest: [
                { title: '专业的研究性学习报告及答辩PPT报告', imgUrl: '/imgs/researchCamp/icon_1.png' },
                { title: '国家一级学会或中标院重点实验室 有效盖章的综合评定', imgUrl: '/imgs/researchCamp/icon_2.png' },
                { title: '国家一级学会或中标院重点实验室 有效盖章的实践证明', imgUrl: '/imgs/researchCamp/icon_3.png' },
                { title: '表现优异的小组学生可获得有效盖 章的获奖证书', imgUrl: '/imgs/researchCamp/icon_4.png' }
            ]
        }
    },
    methods: {},
    mounted() {
        var boxs = document.getElementsByName('box');
    }
}
</script>