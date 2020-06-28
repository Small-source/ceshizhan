<template>
    <!-- 诊断测评入口-->
    <div class="evaluation_entry">
        <div class="banner">
            <img src="/imgs/wayToStudy/analysis_test/banner.png" alt="" v-if="$route.query.question!=7">
            <img src="/imgs/careerManagement/decompose/bg_zhuyili.png" alt="" v-if="$route.query.question==7">
        </div>
        <div class="content">
            <div class="main">
                <p v-for="(item, index) in entry[$route.query.question].main" :key="index">{{item}}</p>
            </div>
            <div class="notice">
                <h6>测试前须知</h6>
                <ol>
                   <li v-for="(item, index) in entry[$route.query.question].notice" :key="index">{{item}}</li>
                </ol>
            </div>
            <div class="btn_start">
                <div class="btn" @click="$router.push($route.query.question!=7?'/consultation/diagnosis/evaluation_question?question=' + $route.query.question:'/consultation/diagnosis/evaluation_question7')">开始测评</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
    name: 'evaluation_entry',
    data() {
        return {
            entry: {
                // $route.query.question
                // 1:成就目标定向测评
                "1": {
                    main: [
                        '在当今社会，现在的中学生普遍存在过于看中成绩，往往通过和其他学生对比获得学业满足感和个人成就感，事实上这样的学业目标不利于中学生自我效能感的建立，也不利于学生的个人成长。',
                        '成就目标定向测评包括掌握—接近目标、掌握—回避目标、成绩—接近目标和成绩—回避目标四个维度，从各维度的测试结果可以判断学生所属目标定向的类型。',
                        '学业规划模块推出成就目标定向测验，旨在让学生在了解自己的目标定向的基础上，调整不合理的目标信念，从而更好地促进学习规划。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解你目前成就目标定向的真实情况，没有对错之分，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.每个项目都是五级评分，选出最接近自己真实情况的分数。'
                    ]
                },
                // 2:时间管理测评
                "2": {
                    main: [
                        '时间管理是指通过事先规划和运用一定的技巧、方法与工具实现对时间的灵活以及有效运用，从而实现个人或组织的既定目标。时间管理的意义在于计划时间、确定目标、做好自我管理，减少浪费时间的因素，使时间经济效益发挥到最大。',
                        '对于中学生来说，面临中考或者高考，时间紧迫，要学习的知识和内容是非常多的，只有做好时间管理，使得单位时间内的学习效率发挥到最大，从而提高学习成绩。',
                        '时间管理测评由西南大学心理学部的黄希庭教授编制，包括时间价值感、时间监控观、时间效能感三个维度。该测评可以评估学生的时间管理倾向，发现学生时间管理倾向中的优势及劣势点，从而有针对性地做方案辅导。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解目前你目前时间管理的真实情况，答案不分对错，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.每个项目都是五级评分，选出最接近自己真实情况的分数。',
                    ]
                },
                // 3：学习动机测评
                "3": {
                    main: [
                        '学习动机是激发和维持学生的学习行为并使之指向学业目标的一种动力倾向。心理学研究发现中等强度的学习动机学生的学习效率最高。学习动机过低，学生学习积极性不高，不专注，注意力不集中，经常分心，懒懒散散，学习效率不高。学习动机过强的学生表现主要是过于勤奋、好胜心强、害怕失败、情绪波动、心理脆弱，情绪波动起伏较大，影响学习效率。',
                        '学习动机测评包括四个维度，分别是学习动机太弱、学习动机太强、学习兴趣和学习目标。该测评可以评估学生动机的具体情况，根据测评结果有针对性地为学生定制个性化的学习方案。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解目前你目前学习动机的真实情况，答案不分对错，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.对每个项目做“是”或者“否”的判断。'
                    ]
                },
                // 4：学习习惯测评
                "4": {
                    main: [
                        '学习习惯是学生在学习过程中经过反复练习形成并发展，成为一种个体需要的比较稳定的学习行为方式。良好的学习习惯可以激发学生学习的积极性和主动性，培养自主学习的能力，形成学习策略，提高学习效率，提高学习成绩，从而塑造健康人格，终身受益。',
                        '学习习惯测测评包括三个维度，分别是课前准备、课上听课和课后复习。通过学习习惯测评，可以发现学生在学习习惯上存在的问题，从而能够更有针对性地展开辅导。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解目前你目前学习习惯的真实情况，答案不分对错，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.每个项目都是五级评分，选出最接近自己真实情况的分数。'
                    ]
                },
                // 5：情绪管理测评
                "5": {
                    main: [
                        '情绪管理是在了解自己情绪特征的基础上，有意识地培养健康积极的情绪体验，建立科学的情绪宣泄和调控机制，自觉地克服和消除负面情绪的影响，保持积极的人生态度。只有做好情绪管理，调节好自己的情绪，保持积极向上的生活态度，才能把自己的精力更好地投入到学习中，从而提高学习效率。',
                        '情绪管理测评由斯科特等人根据Mayer和Salovey（1990）的理论编制而成，该量表的国内版本由华南师范大学的王才康翻译而来，信效度较高。分为4个维度，分别是情绪的感知能力、情绪的表达能力、理解和推理自身情绪的能力、理解和推理他人情绪的能力。',
                        '情绪管理测评可以了解学生目前的情绪管理状况，从而有针对性地为学生定制个性化的情绪管理方案。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解目前你目前情绪管理的真实情况，答案不分对错，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.每个项目都是五级评分，选出最接近自己真实情况的分数。'
                    ]
                },
                // 6： 人际关系综合诊断测评
                "6": {
                    main: [
                        '人际交往是人与人之间通过一定方式进行接触，从而在心理和行为发生相互影响的过程。在交往的基础上形成的人与人之间的心理关系称为人际关系。人际关系的好坏往往会影响中学生的学习、生活等各个方面，会影响中学生对自我的正确认知，进而影响中学生的心理健康。',
                        '人际关系综合诊断测评由郑日昌教授编制，分为交谈、交际与交友、待人接物、与异性交往四个维度。通过人际关系综合诊断测评，可以发现学生在人际关系中存在的具体问题，从而有针对性地解决问题。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解目前你目前人际关系的真实情况，答案不分对错，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.对每个选项做“是”或者“否”判断。'
                    ]
                },
                //7.注意力测评
                "7": {
                    main: [
                        '注意力是心理活动对一定对象的指向和集中，是智力结构中的一个重要组成部分。长期注意力不集中、好动不安、上课不专心、爱做小动作，会造成感觉综合失调，导致在成长的过程中，更容易惹是生非，甚至成为打架、逃学、早恋等问题学生。',
                        '注意力不集中的学生，任务完成不好，考试成绩差，得到的都是家长和老师的责骂，久而久之，孩子的自尊心就会受到伤害，很多学生一自卑就更加完成不好任务，往往还没做事，就会出现悲观、失望、胆小、怯懦等现象',
                        "该注意力测评由华南师范大学教科院编制，通过该测评可以测量中小学学生的注意力能力。"
                    ],
                    notice: [
                        '下面每行中都有一些两两相邻、其和等于10的成对数字，用圆圈选中每对相加等于10的数字，您只有五分钟的作答时间，不要超时哦！',
                    ]
                },
                //8.学业归因测评
                "8": {
                    main: [
                        '研究及实践表明归因方式会影响个体对自我的感知，进而影响自信心和努力程度，因此有必要了解自身的归因情况，并对不合理的地方进行调整。'
                    ],
                    notice: [
                        '1.测试是为了更好地了解目前你目前归因的真实情况，答案不分对错，所以不要有任何隐瞒，按照真实情况填写。',
                        '2.每个项目都是五级评分，选择最符合自己情况的答案。'
                    ]
                }

            }
        }
    },
    methods: {
        change(url) {
            this.$router.push(url);
            window.scrollTo(0, 0);
        }
    },
    created() {

    }
}
</script>
<style type="text/css" lang='less' scoped>
.evaluation_entry {
    height: 800px;
    // padding-left: 20px;
    .banner {
        position: relative;
        z-index: 2;
    }
    .content {
        height: 624px;
        box-sizing: border-box;
        padding: 40px 20px 40px 20px;
        background-color: #fff;
        position: relative;
        border-radius: 5px;
        color: #333;
        top: -20px;
        z-index: 1;
        .main {
            p {
                font-size: 14px;
                text-indent: 2em;
                line-height: 24px;
                margin-bottom: 20px;
            }
        }
        .notice {
            padding-left: 30px;
            height: 186px;
            border: 2px dashed #aecefe;
            h6 {
                padding-left: 38px;
                line-height: 50px;
                margin-bottom: 5px;
                font-size: 17px;
                font-weight: 600;
                color: #3c91f4;
                background: url(/imgs/wayToStudy/analysis_test/icon_tishi.png) no-repeat 0px center;
            }
            ol {
                li {
                    font-size: 12px;
                    line-height: 24px;
                }
            }
        }
    }
    .btn_start {
        padding-top: 30px;
        .btn {
            width: 100px;
            height: 36px;
            cursor: pointer;
            line-height: 36px;
            color: #fff;
            border: none;
            border-radius: 3px;
            margin: 0 auto;
            background-color: #3c91f4;
            &:active {
                background-color: #136ed8;
            }
        }
    }
}
</style>
