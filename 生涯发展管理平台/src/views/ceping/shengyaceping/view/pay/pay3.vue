<template>
  <div class="pc-page">
    <headerEl></headerEl>
    <div class="num_main">
      <div class="num_box">
        <div class="reg_titbox">
          <h4 class="cn_tit">购买序列号</h4>
          <h6 class="en_tit">Purchase serial number</h6>
        </div>
        <div class="menu step_3">
          <div class="vxbox">
            <img :src="qrcode" alt="" class="img"/>
          </div>
          <p class="tip">请使用<em class="c_main">微信</em>扫一扫二维码完成支付</p>
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
        serialType: this.$route.query.serialType,
        qrcode: ''
      }
    },
    mounted() {
      this.getSerialNo();
    },
    components: {
      HeaderEl
    },
    methods: {
      /**
       * 购买序列号
       */
      getSerialNo: function () {
        var _this = this;
        $.ajax({
          type: 'POST',
          url: '/api/usercenter/order_set',
          headers: {'token': sessionStorage.getItem('token')},
          dataType: 'JSON',
          data: {
            type: _this.serialType
          },
          success: function (data) {
            console.log(data);
            if (data.code == 0) {
              _this.qrcode = 'http://' + window.location.host + '/api/common/' + data.result.id + '/qrcode';
              _this.isPaySuccess(data.result.id);
            } else {
              //
            }
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      },

      /**
       * 判断是否支付成功
       */
      isPaySuccess: function (order_id) {
        var _this = this;

        _this.payTimer = setInterval(function () {
          console.log('pay')
          $.ajax({
            type: 'POST',
            url: '/api/common/order/detail',
            headers: {'token': sessionStorage.getItem('token')},
            dataType: 'JSON',
            data: {
              order_id: order_id
            },
            success: function (data) {
              console.log(data);
              if (data.code == 0) {
                // 支付成功
                if (data.result.wx_status == 2 && data.result.status == 2) {
                  clearInterval(_this.payTimer);
                  _this.$router.push('/pay/4?serial_no=' + data.result.serial.serial_no)
                }
              } else {
                //
              }
            },
            error: function (data) {
              this.layerMsg('网络错误，请重新提交');
            }
          })
        }, 1000);


      },


    }
  }
</script>
