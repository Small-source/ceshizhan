<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
         <a href="javascript:;"  class="button on">Part A</a>
          <a href="javascript:;" class="button no">Part B</a>
          <a href="javascript:;" class="button no">Part C</a>
          <a href="javascript:;" class="button no">Part D</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
                注意力分配能力测评——图形辨识测评
                这是一个简单的测评，主要测量您从很多相似的图形中找到某些特定图形的能力。本测评的图形是由两个大小不同、都有缺口的圆环组成的。由于圆环的缺口方向不同，就组成很多很近似但又不相同的图形。
                本测评要完成的任务是从很多相似的图形中找出其中指定的两种图形来，找到后请在该图形上画“✔”
            </p>
            <p>
                请注意：
                1、直接点击找到的两个图形；
                2、两个图形要同时找寻，不能全部找完一个后再找第二个；
                3、大圆环与小圆环的缺口方向都要与找到的图形完全一致，才算正确；
                4、请从测评图的第一行开始由左至右依次找寻，查完一行再查下一行，直至全部查完或时间到再停止；
                5、如果有点击错误的地方，继续往下找。
            </p>
            <p>
               在正式做之前，先进行练习，然后点击开始，进行正式测评
            </p>
          </div>
          <div class="btngroup test_btngroup">
              <router-link to="/shengyaceping/rzqn/141?type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/141" class="btn btn_start">开始<span
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
