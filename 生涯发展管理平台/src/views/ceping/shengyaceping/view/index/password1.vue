<template>
  <div class="pc-page">

    <HeaderEl></HeaderEl>

    <div class="psd_main">
      <div class="psd_form">
        <div class="reg_titbox">
          <h4 class="cn_tit">找回密码</h4>
          <h6 class="en_tit">retrieve password </h6>
        </div>
        <div class="psd_step clearfix">
          <li class="cur">
            <em class="num">01</em>
            <p class="font">确认账号</p>
          </li>
          <li>
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
            <span class="tit">邮箱账号</span>
            <div class="info">
              <input type="text" v-model="email" class="ipt_txt" placeholder="请输入您的邮箱账号"/>
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
        email: '',
      }
    },
    components: {
      HeaderEl
    },
    methods: {
      next: function () {
        if (!this.isEmail(this.email)) {
          this.layerMsg('请输入正确的邮箱!');
          return false;
        }
        this.$router.push('/password/find/2?email=' + this.email);
      }
    }
  }
</script>
