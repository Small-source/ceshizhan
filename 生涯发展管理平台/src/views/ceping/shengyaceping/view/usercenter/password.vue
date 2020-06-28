<template>

  <div class="pc-page">
    <headerEl></headerEl>
    <div class="main main_bg">
      <div class="auto">
        <div class="crumb_goback">
          <router-link to="/" class="button">返回首页</router-link>
        </div>
        <div class="clearfix">
          <usercenter></usercenter>
          <div class="admin_r fr">
            <div class="admin_topbox clearfix">
					<span class="tit fl">
						修改密码 <em class="en">change password</em>
					</span>
            </div>
            <div class="pwd_main">
              <div class="pwd_form">
                <form class="layui-form" action="">
                  <div class="row clearfix">
                    <span class="tit"><em class="bs">*</em>原始密码</span>
                    <div class="info clearfix">
                      <input type="text" class="ipt ipt_txt" v-model="passwd" placeholder="请输入原密码"/>
                    </div>
                  </div>
                  <div class="row clearfix">
                    <span class="tit"><em class="bs">*</em>新密码</span>
                    <div class="info clearfix">
                      <input type="text" class="ipt ipt_txt" v-model="new_passwd" placeholder="请输入新密码"
                             @keyup="pwdValidate"/>
                      <div class="tips">
                        <!--密码区分大小写，6-15个字符。-->
                      </div>
                    </div>
                  </div>
                  <div class="row clearfix">
                    <span class="tit">安全等级</span>
                    <div class="info clearfix" v-if="pwdLength==0">
                      <em class="level_col"></em>
                      <em class="level_col"></em>
                      <em class="level_col"></em>
                    </div>
                    <div class="info clearfix" v-if="pwdLength==1">
                      <em class="level_col level_col1"></em>
                      <em class="level_col"></em>
                      <em class="level_col"></em>
                    </div>
                    <div class="info clearfix" v-if="pwdLength==2">
                      <em class="level_col level_col2"></em>
                      <em class="level_col level_col2"></em>
                      <em class="level_col"></em>
                    </div>
                    <div class="info clearfix" v-if="pwdLength==3">
                      <em class="level_col level_col3"></em>
                      <em class="level_col level_col3"></em>
                      <em class="level_col level_col3"></em>
                    </div>
                  </div>
                  <div class="row clearfix">
                    <span class="tit"><em class="bs">*</em>确认密码</span>
                    <div class="info clearfix">
                      <input type="password" v-model="repeat_passwd" class="ipt ipt_txt"/>
                    </div>
                  </div>
                  <div class="btngroup clearfix">
                    <input type="reset" value="取消" class="ipt ipt_reset" @click="reset"/>
                    <input type="button" value="确认" class="ipt ipt_submit" @click="submit"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footerEl></footerEl>
      </div>
    </div>
  </div>

  <!--<div class="ccc">-->
  <!--<usercenter></usercenter>-->
  <!--<div class="user-wrapper user-profile password-reset">-->
  <!--&lt;!&ndash; 原始密码 &ndash;&gt;-->
  <!--<div class="in">-->
  <!--<div class="in-label">原始密码:</div>-->
  <!--<div class="in-text">-->
  <!--<input type="password" class="text" v-model="passwd" placeholder="">-->
  <!--</div>-->
  <!--<div class="p-tip">-->
  <!--<img src="../../assets/user/xing.png">请输入原密码。-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 原始密码 &ndash;&gt;-->

  <!--&lt;!&ndash; 新密码 &ndash;&gt;-->
  <!--<div class="in">-->
  <!--<div class="in-label">新密码:</div>-->
  <!--<div class="in-text">-->
  <!--<input type="password" class="text" v-model="new_passwd" placeholder="" @keyup="pwdValidate">-->
  <!--</div>-->
  <!--<div class="p-tip">-->
  <!--<img src="../../assets/user/xing.png">密码区分大小写，6-15个字符。-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 新密码 &ndash;&gt;-->

  <!--&lt;!&ndash; 安全级别 &ndash;&gt;-->
  <!--<div class="in">-->
  <!--<div class="in-label">安全级别:</div>-->
  <!--<div class="security-level">-->
  <!--<p v-for="i in pwdLength" class="active"></p>-->
  <!--<p v-for="i in 3-pwdLength"></p>-->
  <!--</div>-->
  <!--<div class="sec-tip">{{pwdText}}</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 安全级别 &ndash;&gt;-->

  <!--&lt;!&ndash; 确认密码 &ndash;&gt;-->
  <!--<div class="in">-->
  <!--<div class="in-label">确认密码:</div>-->
  <!--<div class="in-text">-->
  <!--<input type="password" class="text" v-model="repeat_passwd" placeholder="">-->
  <!--</div>-->
  <!--<div class="p-tip">-->
  <!--<img src="../../assets/user/xing.png">请再次输入新密码。-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 确认密码 &ndash;&gt;-->

  <!--<div class="password-tip">-->
  <!--注：<img src="../../assets/user/xing.png">号为必填项。-->
  <!--</div>-->

  <!--<div class="submit">-->
  <!--<img src="../../assets/user/cancel.png" @click="reset">-->
  <!--<img src="../../assets/user/confirm.png" @click="submit">-->
  <!--</div>-->

  <!--</div>-->
  <!--</div>-->

</template>

<script>
  import usercenter from '../../components/usercenter.vue';
  import HeaderEl from '../../components/HeaderEl.vue';
  import FooterEl from '../../components/FooterEl';

  export default {
    data() {
      return {
        passwd: '',	// string	是	原密码		123456
        new_passwd: '',	// string	是	新密码		123456
        repeat_passwd: '', //	string
        pwdLength: 0,
        pwdText: '',
      }
    },
    components: {
      usercenter,
      HeaderEl,
      FooterEl
    },
    methods: {

      reset: function () {
        this.passwd = '';
        this.new_passwd = '';
        this.repeat_passwd = '';
        this.pwdLength = 0;
      },

      pwdValidate: function () {
        var len = this.new_passwd.length;
        if (len == 0) {
          this.pwdLength == 0;
        } else if (len < 6) {
          this.pwdLength = 1;
          this.pwdText = '危险'
        }
        else if (len < 9) {
          this.pwdLength = 2
          this.pwdText = '正常'
        } else if (len > 8) {
          this.pwdLength = 3
          this.pwdText = '安全'
        }
      },

      submit: function () {

        if (this.new_passwd != this.repeat_passwd) {
          this.layerMsg('新密码和确认密码不同，请重新输入！');
          return false;
        }

        this.$ajax.post("/api/usercenter/resetPasswd", {
            passwd: this.passwd,	// string	是	原密码		123456
            new_passwd: this.new_passwd,	// string	是	新密码		123456
            repeat_passwd: this.repeat_passwd, //	string
          }, {
            headers: {
              "token": sessionStorage.getItem('token'),
            }
          },
          {
            emulateJSON: true
          }
        ).then(
          function (res) {
            // 请求成功的结果
            console.log(res.data);
            var data = res.data;
            if (data.code == 0) {
              this.layerMsg('密码修改成功！');
              sessionStorage.removeItem('token');
              this.$router.push('/')
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
