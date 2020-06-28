<template>
  <div class="pc-page">
    <headerEl></headerEl>
    <div class="num_main">
      <div class="num_box">
        <div class="reg_titbox">
          <h4 class="cn_tit">购买序列号</h4>
          <h6 class="en_tit">Purchase serial number</h6>
        </div>
        <div class="menu step_2">
          <li class="clearfix">
            <span class="tit">您选择购买：</span>
            <div class="info">
              <p class="fz" v-if="serialType==1">职业生涯测评</p>
              <p class="fz" v-if="serialType==2">选科测评</p>
              <p class="fz" v-if="serialType==3">职业生涯测评&选科测评</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="tit">选择支付方式：</span>
            <div class="info">
              <p class="vx">
                <img src="../../assets/num_04.png" alt=""/>微信支付
              </p>
            </div>
          </li>
        </div>
        <router-link :to="'/pay/3?serialType='+serialType" class="buy">确认购买</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderEl from '../../components/HeaderEl';

  export default {
    data() {
      return {
        serialType: this.$route.query.serialType
      }
    },
    mounted() {
    },
    components: {
      HeaderEl
    },
    methods: {



    }
  }
</script>
