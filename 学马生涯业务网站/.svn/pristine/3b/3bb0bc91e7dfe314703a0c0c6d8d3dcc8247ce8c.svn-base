<template>
  <div>

    <headerEl></headerEl>

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
          <li class="cur cur_3">
            <em class="num">03</em>
            <p class="font">重置密码</p>
          </li>
        </div>
        <div class="formbox">
          <li class="clearfix">
            <span class="tit">新密码</span>
            <div class="info">
              <input type="password" v-model="new_passwd" class="ipt_txt" placeholder="请输入新密码"/>
            </div>
          </li>
          <li class="clearfix">
            <span class="tit">确认新密码</span>
            <div class="info">
              <input type="password" v-model="repeat_passwd" class="ipt_txt" placeholder="请确认密码"/>
            </div>
          </li>
          <input type="button" class="ipt_button" @click="next" value="确认"/>
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
        repeat_passwd: '',
        new_passwd: '',
      }
    },
    mounted(){
    },
    components: {
      HeaderEl
    },
    methods: {


      next: function () {

        if (!this.new_passwd) {
          this.layerMsg('请输入密码');
          return false;
        }

        if (!this.repeat_passwd) {
          this.layerMsg('请确认密码');
          return false;
        }

        if (this.new_passwd != this.repeat_passwd) {
          this.layerMsg('两次密码输入不一致，请重新输入!');
          return false;
        }

        var _this = this;

        this.$ajax.post("/api/common/user/forgetPasswd", {
          email: this.email,
          new_passwd: this.new_passwd,
          repeat_passwd: this.repeat_passwd
        }, {emulateJSON: true}).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.layerMsg('密码重置成功!')
              setTimeout(function () {
                _this.$router.push('/');
              }, 2000)
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
