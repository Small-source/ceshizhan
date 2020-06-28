<template>

  <div class="pc-page">
    <headerEl></headerEl>
    <div class="num_main">
      <div class="num_box num_input_box">
        <div class="reg_titbox">
          <h4 class="cn_tit">输入序列号</h4>
          <h6 class="en_tit">Enter the serial number </h6>
        </div>
        <div class="num_input">
          <input type="text" class="ipt_txt" v-model="serial_no" placeholder="请输入序列号"/>
        </div>
        <a href="#" class="buy" @click="go">确定</a>
      </div>

    </div>
  </div>
</template>

<script>
  import HeaderEl from '../../components/HeaderEl';

  export default {
    data() {
      return {
        serial_no: '', // 序列号
        serial_type: '', // 序列号类型
      }
    },
    mounted() {
      // this.getUserInfo()
    },
    components: {
      HeaderEl
    },
    methods: {
      closeModel: function () {
        this.isProfileShow = 0;
        this.serial_no = '';
      },

      /**
       * 进入测试页面
       */
      go: function () {
        this.$router.push('/evlua/classify')
        if (!this.serial_no) {
          this.layerMsg('请输入序列号!');
          return false;
        }

        if (sessionStorage.getItem('testType') == 'type1') {
          this.serial_type = 1;
        } else {
          this.serial_type = 2;
        }

        this.$ajax.post("/api/test/create", {
            type: this.serial_type,
            serial_no: this.serial_no,
            cognition_order: '[1,2,3,4,5,6,7,8,9,10,11,12,13]'
          },
          {
            headers: {
              "token": sessionStorage.getItem('token'),
            }
          },
          {
            emulateJSON: true
          }
        ).then(
          function (res) {
            var data = res.data;
            if (data.code == 0) {
              if (data.result.serial_type == 1) {
                sessionStorage.setItem('testType', 'type1');
              } else if (data.result.serial_type == 2) {
                sessionStorage.setItem('testType', 'type2');
              } else if (data.result.serial_type == 3 && sessionStorage.getItem('testType') == 'type1') {
                sessionStorage.setItem('testType', 'type1');
                sessionStorage.setItem('quitType', 'type1');
              } else if (data.result.serial_type == 3 && sessionStorage.getItem('testType') == 'type2') {
                sessionStorage.setItem('testType', 'type3');
              }
              console.log(data);
              console.log(sessionStorage.getItem('testType'));
              this.$router.push('/evlua/classify');
            } else {
              this.layerMsg(data.msg)
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );

      },

    }
  }
</script>

<style>
  .go-index {
    position: absolute;
    top: 20px;
    right: 30px;
  }
</style>
