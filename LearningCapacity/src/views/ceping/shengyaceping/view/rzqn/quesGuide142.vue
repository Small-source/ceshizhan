<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
         <a href="javascript:;"  class="button no">Part A</a>
          <a href="javascript:;" class="button on">Part B</a>
          <a href="javascript:;" class="button no">Part C</a>
          <a href="javascript:;" class="button no">Part D</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
                请仔细阅读指导语
                注意力广度测评——选4圈测评
                本测评要求从画有不同树木圆圈的小方格内找出4个圆圈小方格，找到后请在该方格上画“✔”
            </p>
            <p>
                请注意：
                1、要小方格内有4个小圆圈。不管圆圈的排列方式如何，都属于要找到的小方格；
                2、从测评的第一行开始自左至右一次寻找，查完一行再查下一行，直至全部查完；
                3、如果有点击错误的地方，继续往下找。
            </p>
            <p>
                在正式做之前，先进行练习，然后点击开始，进行正式测评。
            </p>
          </div>
          <div class="btngroup test_btngroup">
              <router-link to="/shengyaceping/rzqn/142?type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/142" class="btn btn_start">开始<span
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
      if (!sessionStorage.getItem('zhuyi1')) {
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
