<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <a href="javascript:;" class="button on">Part A</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              本测验要求你对数字进行奇偶分类或者大小分类。每次数字出现之前，先出现一个提示信息，“奇偶”代表接下来要对数字进行奇偶分类，“大小”代表接下来要判断该数字是大于5还是小于5。提示信息呈现1秒，之后呈现数字，按键后数字消失。之后黑屏1秒，呈现下一提示信息。共进行60次判断。
            </p>
            <p>奇偶判断，奇数按鼠标左键，偶数按鼠标右键。</p>
            <p>大小判断，大于5按鼠标左键，小于5按鼠标右键。</p>
            <p>要求：快速且准确。 </p>
            <p>在正式做之前，先进行练习，然后点击开始，进行正式测试。 </p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/shengyaceping/rzqn/5?&type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/5" class="btn btn_start">开始<span
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
          <!--本测验要求你对数字进行奇偶分类或者大小分类。每次数字出现之前，先出现一个提示信息，“奇偶”代表接下来要对数字进行奇偶分类，“大小”代表接下来要判断该数字是大于5还是小于5。提示信息呈现1秒，之后呈现数字，按键后数字消失。之后黑屏1秒，呈现下一提示信息。共进行100次判断。-->
        <!--</p>-->
        <!--<p>奇偶判断，奇数按鼠标左键，偶数按鼠标右键。</p>-->
        <!--<p>大小判断，大于5按鼠标左键，小于5按鼠标右键。</p>-->
      <!--</div>-->
      <!--<div class="guide-wrapper-tip">-->
        <!--&lt;!&ndash;<p>注意：数字出现2秒钟，你还没有按键，则数字消失。&ndash;&gt;-->
        <!--&lt;!&ndash;</p>&ndash;&gt;-->
        <!--<p>要求：快速且准确。 </p>-->
        <!--<p>在正式做之前，先进行练习，然后点击开始，进行正式测试。 </p>-->
      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;<router-link class="start-ce" to="/rzqn/5"><img src="../../assets/begin2.png"></router-link>&ndash;&gt;-->
    <!--<a class="start-ce" @click="go($event)" url="/rzqn/5"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->

    <!--<router-link class="start-ce start-ce-test" to="/rzqn/5?type=test"><img src="../../assets/rzqn/btn-test.png">-->
    <!--</router-link>-->

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
      $('.test_menu .item').eq(4).addClass('item_2');
      var _this = this;
      if (sessionStorage.getItem('siTest')) {
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
    components: {rzqnNav},

    methods: {
      go: function (e) {
        if (!sessionStorage.getItem('siTest')) {
          this.layerMsg('至少练习一次!');
          return false;
        }
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
