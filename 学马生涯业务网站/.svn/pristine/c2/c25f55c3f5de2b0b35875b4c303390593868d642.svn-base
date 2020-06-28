<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <a href="javascript:;" class="button on">Part A</a>
        <a href="javascript:;" class="button no">Part B</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              指导语：本测验中，每一题将会出现两个数学算式，请你口算并比较两个算式计算结果的大小，选择对应选项。每次显示一道题，点击任何一个选项都会切换到下一题。
            </p>
            <p>要求：快速且准确。</p>

          </div>
          <div class="btngroup test_btngroup">
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/91" class="btn btn_start">开始<span
              v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
    <!--<rzqnNav></rzqnNav>-->
    <!--<div class="evalu-part">-->
      <!--<img src="../../assets/rzqn/parta1.png">-->
      <!--<img src="../../assets/rzqn/partb2.png">-->
    <!--</div>-->

    <!--<div class="guide-wrapper">-->
      <!--<earnest></earnest>-->
      <!--<img class="guide-bg" src="../../assets/rzqn/guide-bg.png" alt="">-->
      <!--<div class="guide-wrapper-text">-->
        <!--<p>-->
          <!--指导语：本测验中，每一题将会出现两个数学算式，请你口算并比较两个算式计算结果的大小，选择对应选项。每次显示一道题，点击任何一个选项都会切换到下一题。-->
        <!--</p>-->
      <!--</div>-->
      <!--<div class="guide-wrapper-tip">-->
        <!--<p>要求：快速且准确。</p>-->
      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;<router-link class="start-ce" to="/rzqn/91"><img src="../../assets/begin2.png"></router-link>&ndash;&gt;-->
    <!--<a class="start-ce" @click="go($event)" url="/rzqn/91"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->

  <!--</div>-->
</template>


<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {
        seconds: 10
      }
    },
    mounted() {
      $('.test_menu .item').eq(8).addClass('item_2');
      var _this = this;
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
    components: {rzqnNav},

    methods: {
      go: function (e) {
        var url = $(e.target).closest('a').attr('url');
//        console.log(url);
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
