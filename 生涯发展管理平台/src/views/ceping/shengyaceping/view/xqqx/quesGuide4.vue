<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <div class="test_menu clearfix">
        <a href="javascript:;" class="item item_3">
          <em class="num">01</em>
          <h6 class="tit">学科成绩分析</h6>
          <p class="font">ACADEMIC RESULTS</p>
        </a>
      </div>
      <div class="test_detail test_3">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              请对自己的各科成绩进行对比评估，如实填写成绩等级。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/xqqx/4" class="btn btn_start">开始<span
              v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import xqqxNav from '../../../../../components/xqqx.vue';

  export default {
    data() {
      return {seconds: 10}
    },
    mounted() {
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
    components: {xqqxNav},

    methods: {
      go: function (e) {
        var url = $(e.target).closest('a').attr('url');
        if (this.seconds == 0) {
          this.$router.push(url);
        } else {
          this.layerMsg('请仔细阅读指导语！');
        }
      }
    }
  }
</script>
