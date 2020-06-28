<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <xgtxNav></xgtxNav>
      <div class="test_detail test_2">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              1、答案没有正误之分，请根据你是怎样做的或最倾向于如何决定进行选择。
            </p>
            <p>
              2、测试的目的是反映最真实的自己。请最大程度放松下来，选择更接近你平时的感受或行为的选项。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <a class="btn btn_start" @click="go($event)" url="/shengyaceping/xgtx/2">开始<span v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
    <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
    <!--<xgtxNav></xgtxNav>-->
    <!--&lt;!&ndash;<div class="evalu-part">&ndash;&gt;-->
    <!--&lt;!&ndash;<img src="../../assets/xgtx/part.png">&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

    <!--<div class="guide-wrapper">-->
      <!--<earnest></earnest>-->
      <!--<img class="guide-bg" src="../../assets/xgtx/guide-bg.png" alt="">-->
      <!--<div class="guide-wrapper-text">-->
        <!--<p>-->
          <!--1、答案没有正误之分，请根据你是怎样做的或最倾向于如何决定进行选择。-->
        <!--</p>-->
        <!--<p>-->
          <!--2、测试的目的是反映最真实的自己。请最大程度放松下来，选择更接近你平时的感受或行为的选项。-->
        <!--</p>-->
      <!--</div>-->
    <!--</div>-->

    <!--<a class="start-ce" @click="go($event)" url="/xgtx/2"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->

  <!--</div>-->
</template>
<script>
  import xgtxNav from '../../../../../components/xgtx.vue';
  export default {
    data() {
      return {
        seconds: 10
      }
    },
    mounted() {
      $('.test_menu .item').eq(1).addClass('item_2');
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
    components: {xgtxNav},
    methods: {
      go: function (e) {
        var url = $(e.target).closest('a').attr('url');
        if (this.seconds == 0) {
          this.$router.push(url);
        } else {
          this.layerMsg('请仔细阅读指导语！');
        }
      }
    },
  }
</script>
<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
