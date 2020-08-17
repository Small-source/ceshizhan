<template>
    <div class="pc-page">
        <div class="test_main test_main_2">
            <Nav></Nav>
            <div class="test_step clearfix">
                <a href="javascript:;"  class="button no">Part A</a>
                <a href="javascript:;" class="button no">Part B</a>
                <a href="javascript:;" class="button no">Part C</a>
                <a href="javascript:;" class="button on">Part D</a>
            </div>
            <div class="test_detail test_1">
                <div class="radio_box">
                    <h4 class="title">请仔细阅读指导语</h4>
                    <div class="txt_desc">
                        <p>
                            注意转移能力测评——加减法测评
                        </p>
                        <p>
                            说明：本测评主要测量您的加减运算能力。请按照下面的示范，交替进行一加一减运算，并将结果写在两个数中间。如下图：
                        </p>
                        <p style="background-color: #fff">
                            <img src="~@/assets/newceping/rzqn_guide94.png"  style="display: block; width: 80%;margin:10px auto;" alt="">
                        </p>
                        <p>请注意：1、每行从左至右按先加后减的顺序依次进行。</p>
                        <p>
                            在正式做之前，先进行练习，然后点击开始，进行正式测评
                        </p>
                    </div>
                    <div class="btngroup test_btngroup">
                        <router-link to="/learningAbility/learningPotential/94?type=test" class="btn btn_jx">练习</router-link>
                        <a href="javascript:;" @click="go($event)" url="/learningAbility/learningPotential/94" class="btn btn_start">开始<span
                                v-if="seconds">({{seconds}}s)</span></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
    <!--<Nav></Nav>-->
    <!--<div class="evalu-part">-->
    <!--<img src="../../assets/rzqn/parta1.png">-->
    <!--</div>-->

    <!--<div class="guide-wrapper">-->
    <!--<earnest></earnest>-->
    <!--<img class="guide-bg" src="../../assets/rzqn/guide-bg.png" alt="">-->
    <!--<div class="guide-wrapper-text">-->
    <!--<p>-->
    <!--指导语：本测验任务是观察题目，选择A B C D中你认为正确的选项完成作答。每次显示一道题目，点击任何一个选项都会切换到下一题。-->
    <!--</p>-->
    <!--</div>-->
    <!--<div class="guide-wrapper-tip">-->
    <!--<p>要求：快速且准确。<br>-->
    <!--注意：本测试共9题，请尽快作答。-->
    <!--</p>-->
    <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;<router-link class="start-ce" to="/rzqn/13"><img src="../../assets/begin2.png"></router-link>&ndash;&gt;-->
    <!--<a class="start-ce" @click="go($event)" url="/rzqn/13"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->

    <!--</div>-->
</template>


<script>
    import Nav from '../../../components/learningPotential.vue';

    export default {
        data() {
            return {
                seconds: 10
            }
        },
        mounted() {
            $('.test_menu .item').eq(8).addClass('item_2');
            var _this = this;
            if (sessionStorage.getItem('zhuyi4')) {
                _this.seconds = 0;
            }
            this.t=setInterval(function () {
                if (_this.seconds > 0) {
                    _this.seconds--;
                } else {
                    clearInterval(_this.t)
                }
            }, 1000)
        },
        updated() {

        },
        components: {Nav},
        methods: {
            go: function (e) {
                var url = $(e.target).closest('a').attr('url');
                if (!sessionStorage.getItem('zhuyi4')) {
                    this.layerMsg('至少练习一次!');
                    return false;
                }
                if (this.seconds == 0) {
                    this.$router.push(url);
                } else {
                    this.layerMsg('请仔细阅读指导语！');
                }
            }
        }
    }
</script>

<style>
    .evalu-nav {
        background: #333;
        opacity: 1;
    }
</style>
