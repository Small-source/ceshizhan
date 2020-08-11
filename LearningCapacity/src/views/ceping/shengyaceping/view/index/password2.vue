<template>
  <div>
    <HeaderEl></HeaderEl>

    <div class="psd_main">
      <div class="psd_form">
        <div class="reg_titbox">
          <h4 class="cn_tit">找回密码</h4>
          <h6 class="en_tit">retrieve password </h6>
        </div>
        <div class="psd_step clearfix">
          <li class="cur cur_1">
            <em class="num">01</em>
            <p class="font">确认账号</p>
          </li>
          <li class="cur cur_2">
            <em class="num">02</em>
            <p class="font">安全验证</p>
          </li>
          <li>
            <em class="num">03</em>
            <p class="font">重置密码</p>
          </li>
        </div>
        <div class="formbox">
          <li class="clearfix">
            <span class="tit">验证码</span>
            <div class="info clearfix">
              <input type="text" class="ipt_txt fl" v-model="code" placeholder="请输入验证码"/>
              <a href="javascript:;" class="getcode fl" v-if="codeTip==1" @click="getCode">获取验证码</a>
              <a href="javascript:;" class="getcode fl" v-if="codeTip==0" @click="getCode">{{seconds}}s后重新获取</a>
            </div>
          </li>
          <input type="button" class="ipt_button" @click="next" value="下一步"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderEl from '../../components/HeaderEl';
  export default{
    data(){
      return {
        email: this.$route.query.email,
        seconds: 60,
        code: "",
        codeTip: 1,
      }
    },
    mounted(){
    },
    components: {
      HeaderEl
    },
    methods: {

      /**
       * 发送验证码
       * @returns {boolean}
       */
      getCode: function () {

        this.$ajax.post("/api/util/sendEmailCode", {email: this.email}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.layerMsg('验证码发送成功，请注意查收!');
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );

        var _this = this;
        this.codeTip = 0;
        setInterval(function () {
          if (_this.seconds > 0) {
            _this.seconds--
          } else {
            for (var i = 0; i < 100; i++) {
              clearInterval(i);
            }
            _this.codeTip = 1;
            _this.seconds = 60;
          }
        }, 1000)
      },

      next: function () {
        if (!this.code) {
          this.layerMsg('请输入验证码!');
          return false;
        }

        this.$ajax.post("/api/common/user/validCode", {email: this.email, code: this.code}, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.$router.push('/password/find/3?email=' + this.email);
            } else {
              this.layerMsg(data.msg);
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );

      }
    }
  }
</script>
