<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
      <div class="test_detail test_2">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              1、请根据自己的实际情况，选出适合的答案，注意每个问题只能选一个答案。
            </p>
            <p>
              2、以下各题答案无好坏对错之分。
            </p>
            <p>
              3、其中有“非常不符合”、“不符合”、“基本符合”、“符合”、“非常符合”5项可供选择。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <a class="btn btn_start" @click="go($event)" url="/learningAbility/LearningEffectiveness/1">开始<span v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Nav from '../../../components/learningEffectiveness.vue';
  export default {
    data() {
      return {
        seconds: 10
      }
    },
    mounted(){
      $('.test_menu .item').eq(0).addClass('item_2');
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
    components: {Nav},
    methods: {
      go: function (e) {
        var url = $(e.target).closest('a').attr('url');
        if (this.seconds == 0) {
          this.$router.push(url);
        } else {
          this.layerMsg('请仔细阅读指导语！');
        }
      },

    },
  }
</script>
<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
