<template>
    <!-- vip护航 -->
    <div class="VipEscort">
        <div class="banner">
        </div>
        <!-- 护航计划简介-->
        <div class="escort">
            <div class="inner">
                <div class="escort_introduction">
                    <p class="title">护航计划简介</p>
                    <p class="xiangqing">
                        学马教育 VIP 护航计划是在新高考背景下，为广大中学生提供个性化的整体生涯解决方案。基于生涯规划理念，帮助学生以生涯测评全面认知自我，定位职业和专业，同时了解高校和专业情况，认知外部世界，进而指导学生完成高中选科、高考志愿填报等重大决策，并提供升学规划服务，实现学生的个人成长与生涯发展。学马以科学便捷的工具平台、专业的服务、个性化的课程、权威的师资服务于广大中学生，为学生的升学提供全面的保驾护航，助力每一位学子圆梦理想大学
                    </p>
                </div>
                <div class="quanfangwei">
                    <p class="top_title">
                        5V1全方位保驾护航
                    </p>
                    <ul class="main_conetnt">
                        <li v-for="(item, index) in escort" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail" v-html="item.detail"></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 产品介绍 -->
        <div class="product_introduction">
            <div class="inner">
                 <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">产品介绍</li>
                    <li class="foot"></li>
                </ul>
                <div class="conetnt">
                    <ul>
                        <li v-for="(item, index) in product_introduction" :key="index">
                            <p class="title">{{item.title}}</p>
                            <div class="detail_box">
                                <p class="detail_title">
                                    <span class="num">
                                        1
                                    </span>
                                    <span>
                                        简介：
                                    </span>
                                </p>
                                <p class="detail">
                                    {{item.detail1}}
                                </p>
                            </div>
                            <div class="detail_box">
                                <p class="detail_title">
                                    <span class="num">
                                        2
                                    </span>
                                    <span>
                                        包含内容：
                                    </span>
                                </p>
                                <p class="detail">
                                    {{item.detail2}}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 我们的优势 -->
        <div class="our_advantages">
            <div class="inner">
                 <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">我们的优势</li>
                    <li class="foot"></li>
                </ul>
                <ul class="content">
                    <li v-for="(item, index) in our_advantages" :key="index" v-html="item.title" :style="'background: url(' + item.imgUrl + ')' " >
                    </li>
                </ul>
            </div>
        </div>
        <!-- vip护航计划一览 -->
        <div class="escorts_view">
            <div class="inner">
                 <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">VIP护航计划一览</li>
                    <li class="foot"></li>
                </ul>
                <div class="content">
                    <ul class="content_title_box">
                        <li v-for="(item, index) in escorts_view" :key="index" @click="checkView(item.data,$event)">{{item.title}}</li>
                    </ul>
                    <div class="main_content">
                        <div class="main_title">
                            <div class="buzhou">流程步骤</div>
                            <div class="xize">服务细则</div>
                            <div class="taocan">A套餐</div>
                            <div class="taocan">B套餐</div>
                        </div>
                        <div class="neirongBox" v-for="(item, index) in checkViewData" :key="index">
                            <div class="buzhou">{{item.buzhou}}</div>
                            <div class="xize"><p>{{item.xize}}</p></div>
                            <div class="taocan">
                                <div class="check" v-show="item.taocan1 == 'true'"></div>
                            </div>
                            <div class="taocan">
                                <div class="check" v-show="item.taocan2 == 'true'"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
// vip护航
    .VipEscort {
        letter-spacing: 1px;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .banner {
            background: url(/imgs/vipEscort/banner.png) no-repeat center center;
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
        .escort {
            height: 1007px;
            background: url(/imgs/vipEscort/bg_5v1.png) no-repeat center center;
            .escort_introduction {
                padding: 0px 26px;
                background-color: #fff;
                position: relative;
                top: -40px;
                height: 220px;
                .title {
                    line-height: 100px;
                    font-size: 30px;
                    color: #333;
                    text-align: center;
                }
                .xiangqing {
                    line-height: 24px;
                    font-size: 14px;
                    color: #333;
                    letter-spacing: 1px;
                }
            }
            .quanfangwei {
                padding-top: 15px;
                .top_title {
                    height: 50px;
                    line-height: 50px;
                    margin: 0 auto;
                    width: 256px;
                    border-top: 1px solid #286cdc;
                    border-bottom: 1px solid #286cdc;
                    text-align:center;
                    font-size: 22px;
                    color: #286cdc;
                }
                .main_conetnt {
                    height: 708px;
                    position: relative;
                    background: url(/imgs/vipEscort/icon_5v1.png) no-repeat center center;
                    li {
                        width: 158px;
                        height: 96px;
                        position: absolute;
                        .title {
                            font-size: 18px;
                            color: #2c8ffc;
                            line-height: 36px;
                        }
                        .detail {
                            font-size: 14px;
                            line-height: 24px;
                            color: #333;
                        }
                        &:nth-child(1) {
                            left: 150px;
                            top: 90px;
                        }
                        &:nth-child(2) {
                            left: 880px;
                            top: 90px;
                        } 
                        &:nth-child(3) {
                            left: 140px;
                            top: 430px;
                        } 
                        &:nth-child(4) {
                            left: 880px;
                            top: 430px;
                        }
                        &:nth-child(5) {
                            left: 520px;
                            top: 580px; 
                        }
                    }
                }
            }
        }
        .product_introduction {
            height: 572px;
            background-color: #fafafa;
            .conetnt {
                padding-top: 30px;
                height: 324px;
                ul {
                    display: flex;
                    justify-content: space-between;
                    li {
                        box-sizing: border-box;
                        width: 348px;
                        height: 324px;
                        background-color: #fff;
                        position: relative;
                        padding: 0px 22px;
                        padding-top: 66px;
                        .title {
                            width: 274px;
                            height: 60px;
                            line-height: 60px;
                            font-size: 24px;
                            color: #fff;
                            text-align: center;
                            position: absolute;
                            left: 36px;
                            top: -30px;
                            border-radius: 3px;
                            background: linear-gradient(left, #2898da, #286bdc)
                        }
                        .detail_box {
                            height: 110px;
                            .detail_title {
                                height: 32px;
                                line-height: 32px;
                                font-size: 18px;
                                color: #333;
                                .num {
                                    display: inline-block;
                                    width: 28px;
                                    height: 32px;
                                    text-align: center;
                                    color: #fff;
                                    margin-right: 20px;
                                    background: url(/imgs/vipEscort/icon_liubianxing.png) no-repeat center center;
                                }
                            }
                           .detail {
                                padding-left: 52px;
                                line-height: 24px;
                                font-size: 14px;
                            }

                        }
                    }
                }

            }
        }
        .our_advantages {
            height: 740px;
            background: url(/imgs/vipEscort/bg_youshi.png) no-repeat center center;
            .title_box {
                color: #fff;
            }
            .top {
                background: url(/imgs/vipEscort/icon_left.png) no-repeat right center;
            }
            .foot {
                background: url(/imgs/vipEscort/icon_right.png) no-repeat left center;
            }
            .content {
                position: relative;
                li {
                    box-sizing: border-box;
                    width: 240px;
                    height: 272px;
                    padding-top: 146px;
                    line-height: 24px;
                    text-align: center;
                    font-size: 14px;
                    color: #333;
                    position: absolute;
                    &:nth-child(1) {
                        left: 0;
                        top: 0;
                    }
                    &:nth-child(2) {
                        left: 483px;
                        top: 0px;
                    }
                    &:nth-child(3) {
                        left: 960px;
                        top: 0px;
                    }
                    &:nth-child(4) {
                        left: 240px;
                        top: 249px;
                    }
                    &:nth-child(5) {
                        left: 720px;
                        top: 249px;
                    }
                }
            }
        }
        .escorts_view {
            height: 1105px;
            background-color: #fafafa;
            .content_title_box {
                width: 1058px;
                height: 72px;
                position: relative;
                margin: 0 auto;
                li {
                    height: 50px;
                    line-height: 50px;
                    float: left;
                    width: 262px;
                    margin-right: 1px;
                    position: absolute;
                    bottom: 0px;
                    color: #fff;
                    text-align: center;
                    border-radius: 5px 5px 0px 0px;
                    cursor: pointer;
                    transition: all .3s;
                    font-size: 18px;
                    &:nth-child(1) {
                        left: 0px;
                        background: linear-gradient(to right, #2998da, #286bdc); /* 标准语法 */
                    }
                    &:nth-child(2) {
                        bottom: 0px;
                        left: 263px;
                        background: linear-gradient(to right, #fbb160 , #e76711); /* 标准语法 */

                        
                    }
                    &:nth-child(3) {
                        bottom: 0px;
                        left: 526px;
                        background: linear-gradient(to right, #47ea35 , #38a71f); /* 标准语法 */

                        
                    }
                    &:nth-child(4) {
                        bottom: 0px;
                        left: 789px;
                        background: linear-gradient(to right, #bc93fc , #a06aff); /* 标准语法 */
                    }
                }
                .checked {
                    height: 74px;
                    line-height: 74px;
                    transition: all .3s;
                }
            }
            .main_content {
                padding: 0px 25px;
                padding-top: 40px;
                background-color: #fff;
                min-height: 780px;
                .main_title {
                    background-color: #2a75db;
                    height: 66px;
                    line-height: 66px;
                    text-align: center;
                    color: #fff;
                    font-size: 18px;
                    .buzhou {
                        width: 248px;
                        float: left;
                        border-right: 3px solid #fff;
                        border-bottom: 3px solid #fff;
                    }
                    .xize {
                        .buzhou;
                        width: 600px;
                      
                    }
                    .taocan {
                        .buzhou;
                        width: 145px;
                    }
                }
                .neirongBox {
                    height: 83px;
                    color: #333;
                    &:nth-child(odd) {
                        background-color: #fbfbfb;
                    }
                    &:nth-child(even) {
                        background-color: #e3f2ff;
                    }
                    .buzhou {
                        font-size: 16px;
                        width: 248px;
                        line-height: 80px;
                        height: 80px;
                        float: left;
                        border-right: 3px solid #fff;
                        border-bottom: 3px solid #fff;
                        text-align: center;
                    }
                    .xize {
                        .buzhou;
                        font-size: 14px;
                        height: 80px;
                        text-align: left;
                        line-height: 24px;
                        width: 600px;
                        display: flex;
                        align-items: center;
                        p {
                            padding: 0px 10px;
                        }
                       
                    }
                    .taocan {
                        .buzhou;
                        font-size: 14px;
                        width: 145px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .check {
                            width: 50px;
                            height: 40px;
                            background: url(/imgs/vipEscort/icon_check.png) no-repeat center center;
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
            escort: [
                { title: '1-生涯规划咨询师', detail:'提供学生生涯发展解决方案，引领学生发展' },
                { title: '2-升学规划专家', detail:'为广大学生升学保驾护航，进行全面规划' },
                { title: '3-学业规划咨询师', detail:'解决升学面临的诸多问题 ，帮助学生健康成长' },
                { title: '4-志愿填报规划师', detail:'定制个性化高考志愿填报方案，助力学生升学' },
                { title: '5-学管师', detail:'高中三年全程一对一跟踪服务，专业答疑解惑' },
            ],
            product_introduction: [
                { title: '目标定位', detail1: '帮助学生找到适合自己的专业和职业方向，引领学生发展', detail2: '目标探索、学业与职业测评、360° 选科决策系统' },
                { title: '行动方案', detail1: '个性化定制学生升学规划方案，全程一对一服务，解决升学难题', detail2: '升学通路设计与背景提升、生涯辅导' },
                { title: '高考志愿填报', detail1: '帮助学生科学合理填报高考志愿，突破高中升学最后一道难关', detail2: '先进的指导理念、完备的服务流程 、雄厚的师资力量、科学的测评系统、多元的辅助课程' }
            ],
            our_advantages: [
                { title: '量身定制解决方案<br/>配备优质资源', imgUrl: '/imgs/vipEscort/icon_liangshenzhizuo.png' },
                { title: '一线资深专家指导<br/>拥有丰富经验', imgUrl: '/imgs/vipEscort/icon_yixianzhuanjia.png' },
                { title: '自主研发专业课程<br/>适配学生发展', imgUrl: '/imgs/vipEscort/icon_zizuyanfa.png' },
                { title: '专业平台有力支撑<br/>辅助进行决策', imgUrl: '/imgs/vipEscort/icon_zhuanyepingtai.png' },
                { title: '拥有专业院校数据<br/>提供查询服务', imgUrl: '/imgs/vipEscort/icon_yuanxiaoshuju.png' },
            ],
            escorts_view: [
                {title: '目标定位', data: [
                    { buzhou: '目标探索', xize: '学生可通过院校库、专业库、职业库进行目标探索，了解大学、专业以及职业等相关信息', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '学业测评', xize: '学习风格评估，对学习计划、学习动力、学习态度、学习习惯、心理素质进行综合评估，并提供专家解读与辅导', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '专业职业定位', xize: '通过心理测量技术对认知潜能、人格特征、兴趣倾向进行综合评估，科学定位学生的专业和职业方向', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '360°选科决策', xize: '根据专业测评定位目标专业，专业定位科目的基本原则，基于院校、专业数据库的准确信息，利用决策平衡单的方法辅助决策，为学生提供专业的选科指导方案', taocan1: 'true', taocan2: 'true' },
                ]},
                { title: '升学通路设计与背景提升', data: [
                    { buzhou: '升学通路规划', xize: '在学生目标定位的基础之上，规划适合学生的升学通路，包括自主招生、综合评价、港澳升学、海外留学', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '自荐信指导', xize: '综合学生的特长、学习、兴趣等相关信息，提供自荐信撰写指导', taocan1: 'true', taocan2: 'false' },
                    { buzhou: '社会实践', xize: '根据学生专业选择定向对接社会实践基地，并安排社会实践活动，指导撰写社会实践报告', taocan1: 'true', taocan2: 'false' },
                    { buzhou: '研究性学习报告', xize: '专家指导学生进行不同学科领域课题研究，学生收获专业的研究性学习报告和权威学会盖章认定，增强自己的升学实力', taocan1: 'true', taocan2: 'false' },
                    { buzhou: '大赛指导', xize: '依据学生的学科特长以及兴趣爱好，推荐适合学生的大赛，并提供针对性的辅导', taocan1: 'true', taocan2: 'false' },
                    { buzhou: '择校方案', xize: '根据学生的成绩、材料和奖项，结合学生专业定位并参考高校简章，为学生提供择校方案。（限：自主招生、综合评价与港澳升学报考）', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '网上报考', xize: '按照择校方案搜集、检查各项准备材料，指导家长进行报考准备，并完成网报工作。（限：自主招生、综合评价与港澳升学报考）', taocan1: 'true', taocan2: 'false' },
                    { buzhou: '复试指导', xize: '根据学生通过初审学校的情况，选择性挑选学生自身需要的笔面试课程，提前做好针对性笔面试准备。线上线下相结合，提供一对一模拟面试指导，增加复试通过率', taocan1: 'true', taocan2: 'false' },
                ] },
                { title: '生涯辅导', data: [
                    { buzhou: '学习动力', xize: '引导学生积极执行目标方案，培养自我激励习惯，提升内部学习动力，建立并维持学生的自信心', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '学习态度', xize: '从认知、情感与行动综合评鉴其学习态度的端正与否，帮助学生建立积极主动的学习态度', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '学习能力', xize: '有效解决上课走神、好动多动、情绪冲动、作业拖拉等问题。培养学生的自主管理能力，提高学习效率，减少对外界干预的依赖', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '学习习惯', xize: '将有效的学习决窍、经验、科学的学习模式，以一套系统的方式分阶段的不断重复、持之以恒，形成一套好习惯的学习行为模式', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '情绪管理', xize: '帮助学生认识并调节自己的情绪，例如焦虑、愤怒、恐惧、悲伤等，提升学生的情绪觉察和管理能力', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '目标管理', xize: '基于目标定位，制定并落实个性化目标方案，有效提升学生自我管理能力', taocan1: 'true', taocan2: 'true' },
                    { buzhou: '时间管理', xize: '培养学生使用时间管理的方法，制定行动方案日程表，落实学习计划，达成学习目标', taocan1: 'true', taocan2: 'true' }
                ] },
                { title: '高考志愿填报', data: [
                    { buzhou: '一对一志愿填报', xize: '以生涯规划理念为指导，由专家一对一帮助学生制定最佳高考志愿填报方案，保证录取结果，不退档、不滑档，避免高分低就', taocan1: 'true', taocan2: 'true' }
                ] }
            ],
            checkViewData: [
                { buzhou: '目标探索', xize: '学生可通过院校库、专业库、职业库进行目标探索，了解大学、专业以及职业等相关信息', taocan1: 'true', taocan2: 'true' },
                { buzhou: '学业测评', xize: '学习风格评估，对学习计划、学习动力、学习态度、学习习惯、心理素质进行综合评估，并提供专家解读与辅导', taocan1: 'true', taocan2: 'true' },
                { buzhou: '专业职业定位', xize: '通过心理测量技术对认知潜能、人格特征、兴趣倾向进行综合评估，科学定位学生的专业和职业方向', taocan1: 'true', taocan2: 'true' },
                { buzhou: '360°选科决策', xize: '根据专业测评定位目标专业，专业定位科目的基本原则，基于院校、专业数据库的准确信息，利用决策平衡单的方法辅助决策，为学生提供专业的选科指导方案', taocan1: 'true', taocan2: 'true' },
            ]
        }
    },
    methods: {
        checkView(data,e) {
            let nodes = e.target.parentNode.childNodes;
            this.checkViewData = data;
            nodes.forEach( function(element, index) {
                element.className = '';
            });
            e.target.className = 'checked';
        }
    },
    mounted() {
        // console.log( document.getElementsByClassName('content_title_box'))
        document.getElementsByClassName('content_title_box')[0].children[0].className = 'checked';
    }
}
</script>