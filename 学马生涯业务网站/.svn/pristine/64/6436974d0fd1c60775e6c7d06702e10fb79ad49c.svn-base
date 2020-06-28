<template>

  <div class="pc-page">
    <div class="test_main test_main_4">
      <xljkNav></xljkNav>
      <div class="test_detail test_2">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              1、以下表格中列出了有些人可能有的症状或问题，请仔细阅读每一条，然后根据该句话与您自己的实际情况相符合的程度（最近一个星期或现在），选择一个适当的数字。
            </p>
            <p>
              2、每一个项目均采用5级评分制，1分是没有；2分是很轻；3分是中度；4分是偏重；5分是严重。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <a href="#" @click="go($event)" url="/shengyaceping/xljk/1" class="btn btn_start">开始<span v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import xljkNav from '../../../../../components/xljk.vue';

  export default {
    data() {
      return {
        seconds: 10
      }
    },
    mounted() {
      $('.test_menu .item').addClass('item_4');
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
    components: {xljkNav},
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

