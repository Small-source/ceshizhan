<template>
    <!-- 诊断测评入口-->
    <div class="evaluation_entry">
        <div class="banner">
            <img src="/imgs/careerManagement/counseling/sweet_bg.png" alt="" >
        </div>
        <div class="content">
            <div class="main">
                <p v-for="(item, index) in entry['1'].main" :key="index">{{item}}</p>
            </div>
            <div class="notice">
                <h6>测试前须知</h6>
                <p>操作方法:</p>
                <ol>
                    <li>按 1 ~ 25 的顺序依次点击，记录反应时间，数完 25 个数字所用时间越短，注意力水平越高。</li>
                </ol>
                <p>注意事项:</p>
                <ol>
                    <li v-for="(item, index) in entry['1'].notice" :key="index">{{item}}</li>
                </ol>
            </div>
            <div class="btn_start">
                <div class="btn" @click="$router.push('/careerManagement/sweetDetail')">开始测评</div>
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
                            '舒尔特方格是全世界范围内最简单，最有效也是最科学的注意力训练方法。寻找目标数字时，注意力是需要极度集中的，把这短暂的高强度的集中精力过程反复练习，大脑的集中注意力功能就会不断的加固、提高。舒尔特方格表可以通过动态练习来锻炼视神经末梢，当被测者努力地在无排列规律的一堆数字中寻找目标数字时，精力是需要集中的。把这短暂的高强度的集中精力过程反复进行，大脑的注意功能就会得到不断地强化、巩固，再强化、再巩固，注意水平越来越高，注意的能力就形成了。它不仅可以训练学生注意力的集中性、稳定性，还可以有效地提升注意的范围、转移、分配能力，更可以训练学生的视觉广度，增强视觉感应能力，加快视觉定向搜索运动的速度。'
                        ],
                        notice: [
                            '1.眼睛距表30～35厘米，视点自然放在表的中心。',
                            '2.在所有数字全部清晰入目的前提下，按顺序找全所有数字，注意不要顾此失彼，因找一个数字而对其他数字视而不见。',
                            '3.每看完一个表，眼睛稍做休息，或闭目，或做眼保健操，不要太疲劳;',
                            '4.练习初期不考虑记忆因素;',
                            '5.每天看5-8个表即可。'
                        ]
                    }
                }
            }
        },
        methods: {
            time(){

            }
        },
        created() {

        }
    }
</script>
<style type="text/css" lang='less' scoped>
    .evaluation_entry {
        height: 800px;
        padding-left: 20px;
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
            margin-top: 40px;
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
                padding-bottom: 20px;
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
                        text-indent: 20px;
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
