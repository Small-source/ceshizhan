<template>
    <div class="shengxueguihua">
        <!-- 顶部通栏大banner -->
        <div class="banner">
            <!-- <img src="/imgs/Shengxueguihua/shengxueguihuabanner.jpg" alt=""> -->
        </div>
        <!-- 升学难点 -->
        <div class="upschool_difficulty">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">升学难点</li>
                    <li class="foot"></li>
                </ul>
                <div class="content">
                    <div class="mian_content">
                        <ul>
                            <li v-for="(item, index) in upschool_difficulty" :key="index">
                               <div class="main_title_box">
                                   <div class="box" v-html="item.title"></div>
                               </div> 
                               <div class="neirong_box">
                                    <p v-for="(detail, index) in item.details" :key="index">{{detail}}</p>
                               </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 解决方案 -->
        <div class="solution">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">解决方案</li>
                    <li class="foot"></li>
                </ul>
                <ul class="content">
                    <li>
                        <div class="num_box">
                            <p class="num">1</p>
                            <p class="num_title">学业与职业<br/>测评</p>
                        </div>
                        <p class="title">
                            简介: 利用心理测量技术对认知潜能、人格特征、兴趣倾向、学习特征、心理健康进行综 合测评， 精准定位专业范围，帮助发现天赋，科学完成自我认知
                        </p>
                        <div class="btn_more">了解详情</div>
                        <p class="detail">
                            优势: 多维的测评模型、科学的测量方法、权威的职业分类、专业的报告解读 
                        </p>
                    </li>
                    <li>
                        <div class="num_box">
                            <p class="num">2</p>
                            <p class="num_title">升学通路<br/>规划</p>
                        </div>
                        <p class="title">
                            简介: 基于科学测评的基础之上，对学生进行定位，综合学生成绩、兴趣、家庭等因素， 对高中升 学路径进行匹配及规划。
                        </p>
                        <p class="detail">
                            功能模块:  
                            <span class="active">自主招生</span> 
                            <span class="active">综合评价</span> 
                            <span class="active">港澳升学</span> 
                            <span class="active">海外留学</span> 
                        </p>
                    </li>
                    <li>
                        <div class="num_box">
                            <p class="num">3</p>
                            <p class="num_title">背景提升</p>
                        </div>
                        <p class="title">
                            简介: 全面提升自我，增强升学竞争力。 
                        </p>
                        <p class="detail">
                            功能模块:  
                            <span>自荐信指导</span> 
                            <span>社会实践</span> 
                            <span class="active">研究性学习报告</span> 
                            <span>大赛指导</span> 
                            <span class="active">尖子生拔高特训营</span> 
                        </p>
                    </li>
                    <li>
                        <div class="num_box">
                            <p class="num">4</p>
                            <p class="num_title">初审报考</p>
                        </div>
                        <p class="title">
                            简介: 帮助学生在自主招生、综合评价、港澳升学方面选择适合学生的高校并辅助进行网上报考。
                        </p>
                        <p class="detail">
                            内容:  
                            <span>择校方案</span> 
                            <span>网上报考</span> 
                        </p>
                    </li>
                    <li>
                        <div class="num_box">
                            <p class="num">5</p>
                            <p class="num_title">复试辅导</p>
                        </div>
                        <p class="title">
                            简介: 根据学生通过初审学校的情况，选择性挑选学生自身需要的笔面试课程，提前做 好针对性笔 面试准备。线上线下相结合，提供一对一模拟面试指导，增加复试通过率
                        </p>
                        <p class="detail">
                            内容:  
                            <span>线上通识课</span> 
                            <span>线下个性化一对一模拟训练</span> 
                        </p>
                        <p class="detail">
                            优势: 通识化与个性化相结合、讲授与演练相结合、笔试文理课程模块化、经验学霸面对面  
                        </p>
                    </li>
                    <li>
                        <div class="num_box">
                            <p class="num">6</p>
                            <p class="num_title">志愿填报</p>
                        </div>
                        <p class="title">
                            简介: 以生涯规划理念为指导，由专家一对一帮助学生制定最佳高考志愿填报方案，保证录取结果， 不退档、不滑档，避免高分低就。
                        </p>
                        <p class="detail">
                           优势: 先进的指导理念、完备的服务流程、雄厚的师资力量、科学的测评系统、多元的辅助课程  
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 产品流程 -->
        <div class="product_flow">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">产品流程</li>
                    <li class="foot"></li>
                </ul>
                <div class="content">
                    
                    <div class="main_box" v-for="(item, index) in product_flow">
                        <div v-if="index % 2 == 0">
                            <div class="time_month">{{item.time}}</div>
                            <div class="line"></div>
                            <p class="detail">{{item.detail}}</p>
                        </div>  
                        <div v-else>
                            <p class="detail">{{item.detail}}</p>
                            <div class="line"></div>
                            <div class="time_month time">{{item.time}}</div>
                        </div>  
                    </div>
                    <div class="underline">
                    </div>
                    <div class="qufen">
                        <p class="title">高一或高二</p>
                        <p class="line"></p>  
                        <div class="arrow"></div>  
                    </div>
                     <div class="qufen2">
                        <p class="title">高三</p>
                        <p class="line"></p>  
                        <div class="arrow"></div>  
                    </div>
                </div>
            </div>
        </div>
        <!-- 学马优势 -->
        <div class="xuema_advantage">
            <div class="inner">
                <ul class="title_box">
                    <li class="top"></li>
                    <li class="title">学马优势</li>
                    <li class="foot"></li>
                </ul>
                <ul class="content">
                    <li v-for="(item, index) in xuema_advantage" :key="index">
                        <div class="img_box"><img :src="item.imgUrl" alt=""></div>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
.shengxueguihua {
    color: #666666;
    font-size: 16px;
    letter-spacing: 1px;
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .title_box {
        padding-top: 50px;
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
    .banner {
        width: 100%;
        height: 450px;
        font-size: 0px;
        background: url('/imgs/shengxueguihua/bg_banner.jpg') no-repeat center center;
    }
    .upschool_difficulty {
        height: 612px;
        background: url(/imgs/shengxueguihua/bg_shengxuenandian.png) no-repeat center center;
        .content {
            box-sizing: border-box;
            height: 408px;
            padding: 10px 60px;
            background: url(/imgs/shengxueguihua/icon_shengxuenandian.png) no-repeat center top;
            .mian_content {
                background-color: #fff;
                height: 408px;
                box-sizing: border-box;
                padding: 35px 30px;
                padding-top: 110px;
                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li {
                        width: 226px;
                        height: 246px;
                        border: 2px solid #69b7e9;
                        border-radius: 8px;
                        position: relative;
                        .main_title_box {
                            box-sizing: border-box;
                            width: 190px;
                            height: 128px;
                            line-height: 36px;
                            position: absolute;
                            text-align: center; 
                            color: #3c7cea;
                            font-size: 20px;
                            font-weight: 600;
                            left: 50%;
                            margin-left: -95px;
                            top: -86px;
                            padding-top: 32px;
                            background:url(/imgs/shengxueguihua/icon_blue.png) no-repeat center center;
                            background-color: #fff;
                            p {
                                height: 36px;

                            }
                        }
                        .neirong_box {
                            padding: 0px 20px;
                            padding-top: 64px;
                            p {
                                padding-left: 30px;
                                line-height: 20px;
                                background: url(/imgs/shengxueguihua/duihao.png) no-repeat 0px 4px;
                                line-height: 20px;
                                font-size: 14px;
                                margin-bottom: 15px;


                            }
                        }
                    }
                }
            }
        }
    }
    .solution {
        height: 1314px;
        background-color: #fff;
        .content {
            li {
                box-sizing: border-box;
                width: 958px;
                height: 156px;
                background-color: #f2f5fb;
                padding: 14px 200px 14px 140px;
                position: relative;
                margin-left: 143px;
                margin-bottom: 35px;
                .num_box {
                    position: absolute;
                    width: 196px;
                    height: 120px;
                    left: -116px;
                    top: 18px;
                    box-shadow: 0px 0px 20px rgba(218, 218, 218, .6);
                    border-right: 6px solid #4281c5;
                    text-align: center;
                    background-color: #fff;
                    .num {
                        float: left;
                        font-size: 90px;
                        color: #4281c5;
                        position: absolute;
                        line-height: 120px;
                        width: 70px;
                        left: -35px;
                        font-weight: 600;
                    }
                    .num_title {
                        padding: 30px 0px;
                        line-height: 60px;
                        font-size: 22px;
                        color: #333;
                    }
                }
                .title {
                    line-height: 24px;
                    position: relative;
                    font-size: 14px;
                    color: #333;
                    margin-bottom: 10px;
                    &:before {
                        content: '';
                        position: absolute;
                        left: -24px;
                        top: 6px;
                        width: 0; 
                        height: 0;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent transparent #333;
                    }
                }

                .btn_more {
                    width: 70px;
                    height: 24px;
                    border: 1px solid #3b85f1;
                    padding-left: 40px;
                    font-size: 13px;
                    line-height: 24px;
                    color: #3b85f1;
                    margin-bottom: 20px;
                    background: url('/imgs/shengxueguihua/right_arrow.png') no-repeat 10px center;
                }
                .detail {
                    font-size: 14px;
                    line-height: 24px;
                    color: #3b85f1;
                    position: relative;
                    margin-top: 18px;
                    &:before {
                        content: '';
                        position: absolute;
                        left: -24px;
                        top: 6px;
                        width: 0; 
                        height: 0;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent transparent #3b85f1;
                    }
                    span {
                        display: inline-block;
                        margin-right: 22px;
                        height: 22px;
                        border: 1px solid #333;
                        padding: 0px 10px;
                        color: #666;
                    }
                    .active {
                        border: 1px solid #3b85f1;
                        color: #3b85f1;
                    }
                }
            }
            li:first-child {
                .num_box {
                     .num_title {
                        padding: 30px 0px;
                        line-height: 30px;
                        font-size: 22px;
                        color: #333;
                    }
                }
            }
            li:nth-child(2) {
                .num_box {
                    .num_title {
                        padding: 30px 0px;
                        line-height: 30px;
                        font-size: 22px;
                        color: #333;
                    }
                }
            }
            li:nth-child(3) {
                .detail {
                    width: 800px;
                }
            }
            li:nth-child(2n) {
                margin-left: 104px;
                .num_box {
                    left: 880px;
                    border: none;
                    border-left: 6px solid #4281c5;
                    .num {
                        left: 160px;
                    }
                }
            } 
        }
    }
    .product_flow {
        height: 452px;
        background: url(/imgs/shengxueguihua/bg_chaninliucheng.png) no-repeat center center;
        .title_box {
            .title {
                color: #fff;
            }
            .top {
                background: url('/imgs/shengxueguihua/icon_header_write.png') no-repeat right center;
            }
            .foot {
                background: url('/imgs/shengxueguihua/icon_header_write_right.png') no-repeat left center;
            }
        }
        .content {
            height: 224px;
            margin-top: 20px;
            position: relative;
            color: #fff;
            .underline {
                height: 1px;
                position: relative;
                top: 50%;
                background-color: #c4cbd5;
            }
            .main_box {
                width: 134px;
                height: 130px;
                position: absolute;
                z-index: 2;
                .time_month {
                    // padding: 0px 24px;
                    height: 30px;
                    border: 1px solid #fff;
                    border-radius: 16px;
                    line-height: 30px;
                    font-size: 16px;
                    text-align: center;
                    margin: 0 auto;
                    position: relative;
                    background-color: transparent;
                    &:after {
                        content: '';
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        border-radius: 4px;
                        background-color: #fff;
                        left: 50%;
                        margin-left: -4px;
                        bottom: -4px;
                    }
                }
                .time {
                    &:after {
                        content: '';
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        border-radius: 4px;
                        background-color: #fff;
                        left: 50%;
                        margin-left: -4px;
                        top: -4px;
                    }
                }
                .line {
                    height: 40px;
                    width: 1px;
                    background-color: #fff;
                    margin: 0 auto;
                }
                .detail {
                    padding: 3px 0px;
                    line-height: 24px;
                    font-size: 14px;
                    border: 1px solid #fff;
                    border-radius: 1px;
                    text-align: center;

                }
                &:nth-child(1) {
                    left: 66px;
                    top: 96px; 
                    .time_month {
                        width: 150px;
                        background-color: #3d64a4;
                        &:after { 
                            margin-left: -13px;
                        } 
                    }

                }
                &:nth-child(2) {
                   left: 230px;
                   top: 0px; 
                   .time_month {
                        width: 80px;
                        background-color: #5470ac;
                    }
                    // .detail {
                    //     height: 50px;
                    //     line-height: 50px;
                    // }
                }
                &:nth-child(3) {
                    left: 390px;
                    top: 96px; 
                    .time_month {
                        width: 80px;
                        background-color: #364e86;
                    }
                }
                &:nth-child(4) {
                    left: 566px;
                    top: 0px; 
                    .time_month {
                        width: 116px;
                        background-color: #475791;
                    }
                    // .detail {
                    //     height: 50px;
                    //     line-height: 50px;
                    // }

                }
                &:nth-child(5) {
                    left: 884px;
                    top: 96px;
                    .time_month {
                        width: 116px;
                        background-color: #4f5393;
                    }

                }
                 &:nth-child(6) {
                    left: 1075px;
                    top: 0px; 
                    .time_month {
                        width: 116px;
                        background-color: #45437d;
                    }
                }
            }
            .qufen {
                width: 96px;
                height: 92px;
                position: absolute;
                top: 20px;
                .title {
                    line-height: 32px;
                    text-align: center;
                    color: #2c8ffc;
                    font-size: 18px;
                    background-color: #fff;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        right: -32px;
                        top: 0px;
                        width: 0; 
                        height: 0;
                        border-width: 16px;
                        border-style: solid;
                        border-color: transparent transparent transparent #fff;
                    }
                }
                .line {
                    width: 3px;
                    height: 60px;
                    background-color: #fff;
                }
                .arrow {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: #fff;
                    position: absolute;
                    left: -6px;
                    bottom: -8px;
                }
            }
            .qufen2 {
                .qufen;
                left: 780px;
            }
        }
    }
    .xuema_advantage {
        height: 522px;
        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 250px;
            padding-top: 30px;
            li {
                box-sizing: border-box;
                width: 372px;
                height: 296px;
                border: 1px solid #b5b5b5;
                padding: 7px;
                .img_box {
                    height: 218px;
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
// import Swiper from '../components/Swiper.vue'
export default {
    // components: { Swiper },
    metaInfo: {
        title: '学马升学规划-一站式私人定制管家', // set a title
        meta: [
            {                 // set meta
                name: 'keyWords',
                content: '升学规划，自主招生，学业测评，升学评估，复试指导，志愿填报'
            },
            {               
                name: 'description',
                content: '1对1个性化跟踪服务   高中三年保驾护航'           
            }  
        ]
    },
    data() {
        return {
            upschool_difficulty: [
                { title: '<p>高中三年</p><p>不知如何规划</p>', details: ['找不到自己的目标和方向', '不知道自己适合什么样的升学通路'] },
                { title: '<p>除了高考不知道</p><p>其他升学途径</p>', details: ['不知道通过自主招生能降分升名校', '不知道综合评价也是升 学路径'] },
                { title: '<p>找不到增强升学竞争</p><p>力的有效方法</p>', details: ['升学竞争压力大, 不知所措', '学习面临诸多问题, 如何做提升', '不知道通过怎样努力,才能考上理想大学'] },
                { title: '<p>高考志愿填报</p><p>成为一大难题</p>', details: ['新高考改革, 志愿填报需要早做决策', '学生和家长不知如何合理填报志愿', '志愿填不好,影响孩子的一生'] }
            ],
            xuema_advantage: [
                { title: '权威的系统工具: 自主研发专业系统，荣获国家发明专利', imgUrl: '/imgs/shengxueguihua/pc_1.png' },
                { title: '个性化辅导服务: 一对一全方位服务，定制个性化培养方案', imgUrl: '/imgs/shengxueguihua/pc_2.png' },
                { title: '成熟的课程体系: 多年课程研发经验，具有完备的课程体系', imgUrl: '/imgs/shengxueguihua/pc_3.png' }
            ],
            product_flow: [
                { time: '上学期9月-12月', detail: '学业与职业测评' },
                { time: '1月', detail: '升学通路规划 、背景提升建议' },
                { time: '2月', detail: '大赛指导' },
                { time: '6月', detail: '学术研学营、尖子生拔高特训营' },
                { time: '2月-3月', detail: '自主选拔招生报考' },
                { time: '5月-6月', detail: '笔面试课程、高考志愿填报' },
            ]   
        }
    },
    mounted() {
    },
    methods: {
       
    }
}
</script>