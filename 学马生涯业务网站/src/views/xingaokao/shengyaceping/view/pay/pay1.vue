<template>
  <div class="pc-page">
    <headerEl></headerEl>
    <div class="num_main">
      <div class="num_box">
        <div class="reg_titbox">
          <h4 class="cn_tit">购买序列号</h4>
          <h6 class="en_tit">Purchase serial number</h6>
        </div>
        <div class="menu">
          <div class="link link_job" payType="1" @click="selectSerialType($event)">
            <em class="icon fl"></em>
            <h6 class="title">职业生涯测评</h6>
            <p class="font">Career Evaluation</p>
            <div class="price">¥ 1980</div>
          </div>
          <div class="link link_subject" payType="2" @click="selectSerialType($event)">
            <em class="icon fl"></em>
            <h6 class="title">选科测评</h6>
            <p class="font">Selected Subject Evaluation</p>
            <div class="price">¥ 298</div>
          </div>
        </div>
        <a href="#" class="buy" @click="confirm">确认购买</a>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderEl from '../../components/HeaderEl';

  export default {
    data() {
      return {
        serialType: ''
      }
    },
    mounted() {
    },
    components: {
      HeaderEl
    },
    methods: {
      /**
       * 选择序列号
       */
      selectSerialType: function (e) {
        var el = $(e.target).closest('.link');
        if (el.hasClass('cur')) {
          el.removeClass('cur');
        } else {
          el.addClass('cur');
        }
      },

      /**
       * 确认购买
       */
      confirm: function () {
        var typeLen = $('.link.cur').length;
        if (typeLen == 0) {
          this.layerMsg('至少选择一种序列号类型');
          return false;
        }
        if (typeLen == 1) {
          this.serialType = $('.link.cur').attr('payType');
        }
        if (typeLen == 2) {
          this.serialType = 3;
        }

        this.$router.push('/pay/2?serialType=' + this.serialType)
      },


    }
  }
</script>
