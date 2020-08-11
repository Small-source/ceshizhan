<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
         <a href="javascript:;"  class="button no">Part A</a>
          <a href="javascript:;" class="button no">Part B</a>
          <a href="javascript:;" class="button on">Part C</a>
          <a href="javascript:;" class="button no">Part D</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
                注意稳定性——视觉追踪测评
                本测评是一个视力追踪测评。要求您用眼睛从左侧开始追踪一条曲线，并将该线起始时的序号，标记在右侧曲线结束的方格内。如下图: <br>
                <img src="~@/assets/newceping/zhuyili3.png" alt="" class="imgs" style="display: block;margin:0 auto">
            </p>
            <p>
                请注意：
                1、必须用眼睛追踪，不用手指或笔尖辅助追踪，否则会影响测评结果；
                2、图中的曲线一般都比较圆滑；
                3、每条曲线可能有上有下，但无中途停断的现象，都是起于左侧而结束于右侧；
                4、请先找到A图各线，然后再找B图各线。
            </p>
            <p>
                在正式做之前，先进行练习，然后点击开始，进行正式测评。
            </p>
          </div>
          <div class="btngroup test_btngroup">
              <router-link to="/shengyaceping/rzqn/143?type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/143" class="btn btn_start">开始<span
              v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      if (!sessionStorage.getItem('zhuyi3')) {
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
