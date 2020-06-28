<template>
  <div class="pc-page">
    <headerEl></headerEl>
    <div class="num_main">
      <div class="num_box">
        <div class="reg_titbox">
          <h4 class="cn_tit">购买序列号</h4>
          <h6 class="en_tit">Purchase serial number</h6>
        </div>
        <div class="step_4">
          <em class="icon"></em>
          <p class="font">支付成功</p>
          <p class="fz">您的序列号为</p>
          <p class="code">{{serial_no}}</p>
          <a href="javascript:;" @click="goBack" class="back">返回</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderEl from '../../components/HeaderEl';

  export default {
    data() {
      return {
        serial_no: this.$route.query.serial_no
      }
    },
    mounted() {
    },
    components: {
      HeaderEl
    },
    methods: {
      goBack: function () {
        if (sessionStorage.payUrl) {
          this.$router.push(sessionStorage.payUrl)
        } else {
          this.$router.push('/');
        }
      },
    }
  }
</script>
