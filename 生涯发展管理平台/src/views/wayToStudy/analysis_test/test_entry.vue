<template>
    <!-- 升学途径 升学途径分析测试入口-->
    <div class="analysis_test_entry">
        <div class="banner">
            <img src="/imgs/wayToStudy/analysis_test/banner.png" alt="">
        </div>
        <div class="content">
            <div class="main">
                <p>我国高考发展到现在已经变得越来越复杂，由原来的独木桥变成了多元化的升学途径，可实际上很多家长甚至老师都对目前的这些途径不甚了解，只知道鼓励学生拼命地考高分，用裸分去过独木桥。一份北京大学与清华大学近年在浙江的录取榜单在网上广为流传。其中，最触目惊心的数字是，2018年通过高考裸分考上北大清华的浙江学生仅18人，占总录取人数的5%左右。而在2016年，裸分考上北大清华的学生占总录取人数的11%左右，2017年降低至7.7%左右，可以看出，靠高考裸分上名校已经越来越难了。而相对的，其他升学途径的招生人数在逐年增加，各种招生选拔模式在未来会不断扩容。</p>
                <p>熟悉高考政策的人都知道，除了普通文理科高考，艺术高考、自主招生、综合评价录取、军事院校和公安类招生、航海类招生也是比较常见的升学途径，而除此之外还有免费师范生、免费医学生、三大专项计划、高水平艺术团、高水平运动队、民族班、预科班等众多途径供考生选择。可以这样说，只要对国家的各项招生政策足够了解，同时根据考生的个人特点提前进行高考定位和规划，即使是文化成绩一般的考生也有进入名牌大学的机会。那么，如何根据考生的特点来进行升学途径规划？</p>
                <p>生涯规划系统升学途径分析系统通过全方位分析你的各方面条件，为你在升学途径中提供科学可靠的指导！</p>
            </div>
            <div class="notice">
                <h6>测试前须知</h6>
                <ol>
                    <li>1、请务必诚实、独立地回答问题，只有如此，才能得到有效的结果。</li>
                    <li>2、每一题目请以第一印象作答，不必仔细推敲，答案没有好坏、对错之分，根据自己的实际情况做答。</li>
                    <li>3、本报告给广大考生和家长提供了一种科学的方法，一份可靠的依据，从而让考生和家长能了解和接触更多的可能，而并非限制学生的选择。</li>
                    <li>4、所有测评结果的得分仅代表学生本人各种指标之间的相对水平，而不代表考生的这些指标在人群总体中的绝对水平。</li>
                    <li>5、只要你是认真、真实地填写了测试问卷，那么通常情况下你都能得到确实和你相匹配的结果。希望你能从中或多或少地获得一些有益的信息。</li>
                </ol>
            </div>
            <div class="btn_start">
                <div class="btn" @click="$router.push('/wayToStudy/testmain')">开始测评</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // components: { Yuanxiaoku },
    // props: [ 'message' ],
    name: 'analysis_test_entry',
    data() {
        return {
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
.analysis_test_entry {
    height: 800px;
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