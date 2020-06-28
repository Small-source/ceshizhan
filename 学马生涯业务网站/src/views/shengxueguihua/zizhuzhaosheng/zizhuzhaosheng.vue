<template>
    <div class="zizhuzhaosheng">
        <div class="banner">
            <img src="/imgs/shengxueguihua/zizhuzhaosheng/banner.png" alt="">
        </div>
        <div class="why_join">
            <div class="toolBox">
                <div class="inner">
                    <ul class="tool">
                        <li @click="changeRouter('/zizhaoyuanxiao')">
                            <img src="/imgs/shengxueguihua/common/icon_link01.png" alt="">
                            <div class="title">强基院校库</div>
                        </li>
                        <li @click="$router.push('/highSchoolCompetition')">
                            <img src="/imgs/shengxueguihua/common/icon_link02.png" alt="">
                            <div class="title">高中竞赛库</div>
                        </li>
                        <!-- <li @click="$router.push('/zizhaoluquku')">
                            <img src="/imgs/shengxueguihua/common/icon_link03.png" alt="">
                            <div class="title">自招录取库</div>
                        </li> -->
                        <li  @click="$router.push('/zizhaozongpingfushi')">
                            <img src="/imgs/shengxueguihua/common/icon_link04.png" alt="">
                            <div class="title">强基综评复试</div>
                        </li>
                    </ul>
                    <p>2020年1月，教育部出台了《关于在部分高校开展基础学科招生改革试点工作的意见》</p>
                    <p>（也称“强基计划”）,遴选部分高校开展试点。2020年起，不再组织开展高校自主招生工作。</p>
                </div>
            </div>
            <div class="inner">
                <!-- 自主招生“生涯工具” -->
                <h5 class="main_title">
                    自主招生取消，双一流A类高校开展强基计划
                </h5>
                <div class="content">
                    <div class="content_box" v-for="(item,index) in why_join" :key="index">
                        <p class="title">
                            {{item.title}}
                        </p>
                        <p class="detail">
                            {{item.detail}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="whyGood">
            <div class="inner">
                <h5 class="main_title">强基计划好在哪里？</h5>
                <ul>
                    <li v-for="(item,index) in whyGood" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <div class="main_detail">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 强基计划和自主招生的区别 -->
        <div class="difference">
            <div class="inner">
                <h5 class="main_title">强基计划和自主招生的区别</h5>
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in difference" :key="index">
                            <div class="title">{{item.title}}</div>
                            <div class="detail">{{item.detail}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 关于学生通过“强基计划”进入理想大学的建议 -->
        <div class="advice">
            <div class="inner">
                <h5 class="main_title">关于学生通过“强基计划”进入理想大学的建议</h5>
                <ul>
                    <li v-for="(item, index) in advice" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <div class="box">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ourService">
            <div class="inner">
                <h5 class="main_title">我们的服务</h5>
                <ul>
                    <li v-for="(item, index) in ourService" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <div class="box">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 学马企业使命 -->
        <div class="mission">
            <div class="inner">
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in mission" :key="index">
                            <p class="title">{{item.title}}</p>
                            <p class="detail">{{item.detail}}</p>
                        </li>
                    </ul>
                </div>                
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.zizhuzhaosheng {
    .banner {
        img {
            width: 100%;
        }
    }
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    // 主要内容标题
    h5.main_title {
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        height: 116px;
        line-height: 116px;
        color: #333;
    }
    .why_join {
        .toolBox {
            background-color: #fff;
            padding-bottom: 45px;
            p {
                text-align: center;
                color: #333;
                font-size: 17px;
                line-height: 1.5em;
                font-weight: 600;
            }

        }
        .tool {
            box-sizing: border-box;
            background-color: #fff;
            position: relative;
            height: 160px;
            display: flex;
            border-radius: 3px;
            box-shadow: 0px 0px 15px #edeeee;
            padding: 30px 40px 0px 40px;
            justify-content: space-around;
            margin-bottom: 40px;
            margin-top: -50px;
            li {
                cursor: pointer;
                text-align: center;
                &:hover {
                    img {
                        animation: moveUp 1s ease;
                    }
                    .title {
                        color: #3492f9;
                    }
                }
                .title {
                    line-height: 50px;
                    text-align: center;
                    color: #333;
                    font-size: 15px;
                    font-weight: 600;
                    &:hover {
                        color: #3492f9;
                    }
                }
            }
            @keyframes moveUp {
                0% {
                    transform: translate(0px, 0px);
                }
                50% {
                    transform: translate(0px, -15px);
                }
                100% {
                    transform: translate(0px, 0px);
                }
            }
        }
        .content {
            height: 460px;
            background: url(/imgs/shengxueguihua/common/icon_yuan01.png) no-repeat center 100px;
            position: relative;
            .content_box {
                width: 245px;
                position: absolute;
                &:nth-child(1) {
                    left: 486PX;
                    top: 8PX;
                }
                &:nth-child(2) {
                    left: 150PX;
                    top: 270PX;
                }
                &:nth-child(3) {
                    left: 800px;
                    top: 270PX;
                }
                .title {
                    font-size: 16px;
                    line-height: 30px;
                    color: #333;
                    font-weight: 600;
                }
                .detail {
                    font-size: 14px;
                    color: #333;
                    line-height: 1.5em;
                }

            }
        }
    }
    .whyGood {
        background-color: #fff;
        ul {
            overflow: hidden;
            li {
                margin-bottom: 70px;
                display: flex;
                img {
                    margin-right: 45px;
                }
                .main_detail {
                    padding: 20px 0;
                    .title {
                            font-size: 20px;
                            font-weight: 600;
                            margin-bottom: 20px;
                            color: #333;
                    }
                    .detail {
                        color: #666;
                        font-size: 14px;
                        line-height: 1.5em;
                    }
                }

            }
        }
    }
    .difference {
        background-color: #f5f7f9;
        height: 930px;
        .content {
            padding-top: 50px;
            ul {
                height: 800px;
                li {
                    box-sizing: border-box;
                    width: 575px;
                    height: 180px;
                    background-color: #fff;
                    padding: 0px 30px;
                    padding-top: 70px;
                    float: left;
                    margin-right: 50px;
                    margin-bottom: 77px;
                    position: relative;
                    &:nth-child(even) {
                        margin-right: 0px;
                        .title {
                            right: 30px;
                            top: -40px;
                        }
                    }
                    &:nth-child(odd) {
                        margin-right: 50px;
                        .title {
                            left: 30px;
                            top: -40px;
                        }
                    }
                    .title {
                        width: 200px;
                        height: 80px;
                        color: #fff;
                        line-height: 80px;
                        text-align: center;
                        position: absolute;
                        font-size: 21px;
                        font-weight: 600;
                    }
                    .detail {
                        font-size: 14px;
                        line-height: 22px;
                        color: #666;
                    }
                    &:nth-child(1) .title {
                        background-color: #22c880;
                        box-shadow: 7px 7px 0px rgba(34,200,128,.3);
                    }
                    &:nth-child(2) .title {
                        background-color: #ffa200;
                        box-shadow: -7px 7px 0px rgba(255,162,0,.3);
                    }
                    &:nth-child(3) .title {
                        background-color: #02d2cb;
                        box-shadow: 7px 7px 0px rgba(2,210,203,.3);
                    }
                    &:nth-child(4) .title {
                        background-color: #109dff;
                        box-shadow: -7px 7px 0px rgba(16,157,255,.3);
                    }
                    &:nth-child(5) .title {
                        background-color: #fe5c89;
                        box-shadow: 7px 7px 0px rgba(254,92,137,.3);
                    }
                    &:nth-child(6) .title {
                        background-color: #6790f7;
                        box-shadow: -7px 7px 0px rgba(103,144,247,.3);
                    }
                }
            }
        }
    }
    .advice {
        background-color: #fff;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 573px;
                box-shadow: 0px 0px 5px #dedede;
                margin-bottom: 45px;
                .box {
                    padding: 20px 30px;
                    color: #333;
                    .title {
                        font-size: 17px;
                        margin-bottom: 12px;
                        font-weight: 600;
                    }
                    .detail {
                        font-size: 14px;
                        line-height: 1.5em;
                    }
                }
            }
        }
    }
    .ourService {
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                padding: 20px;
                width: 330px;
                text-align: center;
                img {
                    text-align: center;
                }
                .title {
                    font-size: 17px;
                    font-weight: 600;
                    line-height: 50px;
                    color: #333;
                }
                .detail {
                    font-size: 14px;
                    line-height: 1.5em;
                    text-align: center;
                }
            }
        }
    }
    .mission {
        height: 910px;
        background: url(/imgs/shengxueguihua/zizhuzhaosheng/bg_youshi.png) no-repeat center 0px;
        background-color: #f5f7f9;
        .inner {
            height: 910px;
            position: relative;
        }
        .content {
            padding: 0px 72px;
            height: 218px;
            width: 1058px;
            position: absolute;
            left: 0px;
            bottom: 58px;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    box-sizing: border-box;
                    width: 340px;
                    padding: 0px 60px;
                    .title {
                        line-height: 48px;
                        text-align: center;
                        font-size: 20px;
                        font-weight: 600;
                        color: #333;
                    }
                    .detail {
                        line-height: 28px;
                        color: #333;
                        font-size: 16px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
<script>
// // 院校库（新高考-目标探索）
// import Yuanxiaoku from './yuanxiaoku/yuanxiaoku.vue';
// // 专业库（新高考-目标探索）
// import Zhuanyeku from './zhuanyeku/zhuanyeku.vue';
// // 职业库（新高考-目标探索）
// import Zhiyeku from './zhiyeku/zhiyeku.vue';
export default {
    // components: { Yuanxiaoku, Zhuanyeku, Zhiyeku },
    // props: [ 'message' ],
     data() {
        return { 
            why_join: [
                { title: '', detail: '强基计划主要选拔培养有志于服务国家重大战略需求且综合素质优秀或基础学科拔尖的学生' },
                { title: '', detail: '强基计划重点在数学、物理、化学、生物及历史、哲学、古文字学等相关专业招生' },
                { title: '', detail: '强基计划与自主招生有很大不同，无论是招生院校还是报名要求等等都有很大区别' }
            ],
            whyGood: [
                { imgUrl:'/imgs/shengxueguihua/common/icon_guojiazhongdianpeiyang.png', title: '国家重点培养', detail: '“强基计划”为国家重大战略领域输送后备人才，聚焦高端芯片与软件、智能科技、新材料、先进制造和国家安全等关键领域以及国家人才紧缺的人文社会科学领域。' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_gexing.png', title: '个性化高端培养', detail: '高校对录取学生制定单独人才培养方案和激励机制，配备一流的师资、提供一流的学习条件，创造一流的学术环境与氛围，实行导师制、小班化等培养模式。' },
                { imgUrl:'/imgs/shengxueguihua/common/icon_yanjiuxing.png', title: '研究型人才的绝佳平台', detail: '对学业优秀的学生，高校可在免试推荐研究生、直博、公派留学、奖学金等方面予以优先安排。探索建立本—硕—博衔接的培养模式，本科阶段培养要夯实基础学科能力素养，硕博阶段既可在本学科深造，也可探索学科交叉培养。推进科教协同育人，鼓励国家实验室、国家重点实验室、前沿科学中心、集成攻关大平台和协同创新中心等吸纳这些学生参与项目研究，探索建立结合重大科研任务进行人才培养的机制。' }
            ],
            // 强基计划和自主招生的区别
            difference: [
                { title: '选拔定位不同', detail: '原自主招生主要选拔具有学科特长和创新潜质的学生，而“强基计划”主要选拔“有志于服务国家重大战略需求且综合素质优秀或基础学科拔尖的学生”。' },
                { title: '报名要求不同', detail: '原自主招生高校确定入围考核资格的依据主要是考生的申请材料，其中含金量最高的就是五大学科竞赛奖项，2019年绝大多数高校都要求学生具有五大学科省一及以上的奖项，使得报名门槛大幅提升。而强基计划入围的依据是学生的高考成绩（不含高考加分），还包括极少数在相关学科领域具有突出才能和表现考生。' },
                { title: '招生院校不同', detail: '原自主招生试点高校数量共计90所（涵盖绝大多数985、211高校），“强基计划”试点高校为36所“双一流”A类院校（均为985高校）。' },
                { title: '招生专业不同', detail: '自主招生未限定高校招生专业范围；强基计划突出基础学科的支撑引领作用，重点在数学、物理、化学、生物及历史、哲学、古文字学等相关专业安排招生。' },
                { title: '录取依据不同', detail: '自主招生采取降分录取的方式，最低可降至一本线；强基计划将考生高考成绩（不低于85%）、高校综合考核结果和综合素质评价等折算成综合成绩，从高到低顺序录取，体现对学生更加全面的考查。' },
                { title: '培养模式不同', detail: '相关高校对自主招生录取的学生在培养方式上未作特殊安排；强基计划录取学生将实行小班化、导师制，并探索本—硕—博衔接的培养模式，畅通学生成长发展通道，实现招生培养良性互动。' }
            ],
            advice: [
                { imgUrl: '/imgs/shengxueguihua/common/icon_01.png',title: '1.提升综合素养', detail: '在新高考“分类考试、综合评价、多元录取”的考试招生模式下，学生个人的综合素养越来越重要。强基计划把高考成绩作为进入到学校考核环节的依据，无疑给了更多高考成绩优异的学生一个机会，但是高校考核环节是一个重要的筛选环节，学生在校考环节可能会拉开很大差距。校考的内容和方式非常灵活，课外知识的广度和创新性思维，远比只会考高分重要。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_02.png',title: '2.不断强化学科优势，增加破格录取几率', detail: '强基计划对在相关学科领域具有突出才能和表现的考生，可破格录取，最低分数线不低于当地本科一批录取分数线。毫无疑问，对于突出才能的学生，高校还是会破格录取，比如五大学科竞赛表现非常优秀的学生还是会获得高校的青睐。但是参与这些竞赛的“成本”是非常高的，不要盲目地学习竞赛，冷静思考，自己适不适合。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_03.png',title: '3.加强笔试面试训练', detail: '高校考核环节对学生来讲非常重要。高校通过笔试、面试等方式，考查学生分析问题、解决问题的能力和创新思维，作为录取结果的重要依据。建议学生要提前做好规划和准备。' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_04.png',title: '4.不可忽视体育锻炼', detail: ' “身体是革命的本钱”，学生在学习的同时要加强体育锻炼。强基计划对入围考生组织高校考核（含笔试、面试）和体育测试，其中体育测试结果作为录取的重要参考。所以希望广大考生一定要多参与体育运动，增强自己的体质。' },
            ],
            ourService: [
                { imgUrl: '/imgs/shengxueguihua/common/icon_mubiaodingwei.png', title: '目标定位', detail: '通过专业测评定位目标职业和专业，学生明晰未来发展的方向' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_beijingtisheng.png', title: '背景提升', detail: '通过社会实践、研学营、大赛指导、自荐信指导等背景提升使学生获取参加综合评价的实' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_zexiaofanfan.png', title: '择校方案', detail: '根据学生的成绩、材料和奖项，结合学生专业定位并参考高校简章，为学生提供择校方案' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_chushenbaokao.png', title: '初审报考', detail: '协助每个学生按照报考要求搜集、检查各项准备材料，指导家长进行各项准备，完成网上报考，并对初审结果进行跟踪' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_fushifudao.png', title: '复试辅导', detail: '根据学生通过初审学校的情况，选择性挑选学生自身需要的笔面试课程，提前做好针对性笔面试准备。线上线下相结合，提供一对一模拟面试指导，增加复试通过率' },
                { imgUrl: '/imgs/shengxueguihua/common/icon_xialingying.png', title: '高校夏令营辅导', detail: '通过全方位服务，帮助学员参加高校夏令营活动，提升校考复试竞争力' }
            ],
            // 我们的优势
            our_advantages: [
                { title: '雄厚的师资力量', detail: '授课老师全部来自985顶尖名校，并拥有自主招生考试经历，高效指导学生校考', imgUrl: '/imgs/shengxueguihua/zizhuzhaosheng/icon_shizi.png' },
                { title: '强大的教研团队', detail: '潜心研究各类招生校考，实战经验丰富，根据学生和高校的情况科学定制解决方案', imgUrl: '/imgs/shengxueguihua/zizhuzhaosheng/icon_jiaoyan.png' },
                { title: '完善的教学服务', detail: '每位学生匹配专业老师，全程匹配跟踪服务，将高质量服务贯彻每一个环节', imgUrl: '/imgs/shengxueguihua/zizhuzhaosheng/icon_fuwu.png' }
            ],
            mission: [
                { title: '雄厚的师资力量', detail: '授课老师全部来自985顶尖名校，并拥有自主招生考试经历，高效指导学生校考' },
                { title: '强大的教研团队', detail: '潜心研究各类招生校考，实战经验丰富，根据学生和高校的情况科学定制解决方案' },
                { title: '完善的教学服务', detail: '每位学生匹配专业老师，全程匹配跟踪服务，将高质量服务贯彻每一个环节' }
            ]
        }
    },
    methods: {
        changeRouter(url) {
            window.scrollTo(0,0);
            this.$router.push(url);
        }
    },
    created() {
    }
}
</script>