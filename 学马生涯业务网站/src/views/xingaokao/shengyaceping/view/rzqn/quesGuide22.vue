<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <a href="javascript:;" class="button no">Part A</a>
        <a href="javascript:;" class="button on">Part B</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              指导语：在本次测试中会呈现多个数字，其中每次呈现一个数字，从第四个数字开始判断当前呈现的数字和该数字前面的第三个数字是否相同。当你看见数字后，请你做出判断：
            </p>
            <p>
              如果相同：请单击鼠标左键。如果不同：请单击鼠标右键。
            </p>
            <p>
              <img src="../../../../../assets/rzqn/guide22.png" width="100%" style="margin-top:20px;display: block" alt="">
            </p>
            <p>要求：快速且准确。 </p>
            <p>在正式做之前，先进行练习，然后点击开始，进行正式测试。</p>
          </div>
          <div class="btngroup test_btngroup" style="bottom:35px;">
            <router-link to="/shengyaceping/rzqn/22?type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/22" class="btn btn_start">开始<span
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
      <!--<img src="../../assets/rzqn/parta2.png">-->
      <!--<img src="../../assets/rzqn/partb1.png">-->
    <!--</div>-->

    <!--<div class="guide-wrapper">-->
      <!--<earnest></earnest>-->
      <!--<img class="guide-bg" src="../../assets/rzqn/guide-bg.png" alt="">-->
      <!--<div class="guide-wrapper-text">-->

        <!--<p>-->
          <!--指导语：在本次测试中会呈现多个数字，其中每次呈现一个数字，从第四个数字开始判断当前呈现的数字和该数字前面的第三个数字是否相同。当你看见数字后，请你做出判断：-->
        <!--</p>-->
        <!--<p>-->
          <!--如果相同：请单击鼠标左键。如果不同：请单击鼠标右键。-->
        <!--</p>-->
        <!--<p>-->
          <!--<img src="../../assets/rzqn/guide22.png" width="100%" style="margin-top:20px;display: block" alt="">-->
        <!--</p>-->

      <!--</div>-->
      <!--<div class="guide-wrapper-tip">-->
        <!--&lt;!&ndash;<p>注意：每个数字最多呈现2秒，如果在2秒内不按键，则出现下一个数字。如果按键，数字则立即消失，切换到下一个数字。 </p>&ndash;&gt;-->
        <!--<p>要求：快速且准确。 </p>-->
        <!--<p>在正式做之前，先进行练习，然后点击开始，进行正式测试。</p>-->
      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;<router-link class="start-ce" to="/rzqn/22"><img src="../../assets/begin2.png"></router-link>&ndash;&gt;-->
    <!--<a class="start-ce" @click="go($event)" url="/rzqn/22"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->
    <!--<router-link class="start-ce start-ce-test" to="/rzqn/22?type=test"><img src="../../assets/rzqn/btn-test.png">-->
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
      $('.test_menu .item').eq(1).addClass('item_2');
      var _this = this;
      if (sessionStorage.getItem('mathTest2')) {
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
        if (!sessionStorage.getItem('mathTest2')) {
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
