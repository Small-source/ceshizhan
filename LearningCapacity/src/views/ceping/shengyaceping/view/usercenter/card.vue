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
						已购买序列号 <em class="en">SERIAL NUMBER</em>
					</span>
            </div>
            <div class="report_main">
              <ul>
                <li class="w100" v-for="serial in serials">
                  <p class="pull-left" v-if="serial.type==1">《职业生涯测评》序列号</p>
                  <p class="pull-left" v-if="serial.type==2">《选科测评测评》序列号</p>
                  <p class="pull-left" v-if="serial.type==3">《职业生涯&选科测评》序列号</p>
                  <p class="pull-left" v-if="serial.power==0">(无效)</p>
                  <p class="pull-left" v-if="serial.power==1">(有效)</p>
                  <p class="pull-left" v-if="serial.power==2">(已使用)</p>
                  <p class="pull-left" v-if="serial.power==3">(使用中)</p>
                  <p class="pull-right code_num">{{serial.serial_no}}</p>
                </li>
                <!--<li>-->
                  <!--职业生涯测评-->
                  <!--<span class="code_num">IZiZASmM8gmM8FM3DFMCVIww</span>-->
                <!--</li>-->
              </ul>
            </div>
          </div>
        </div>
        <footerEl></footerEl>
      </div>
    </div>
  </div>
  <!--<div>-->
    <!--<usercenter></usercenter>-->
    <!--<div class="user-wrapper user-report">-->
      <!--<div class="report-top">-->
        <!--&lt;!&ndash;<div class="pull-right report-search">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="rs-label">评测时间：</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="text" value="2017-10-20">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="rs-search">评测查询</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--</div>-->
      <!--<div class="report-wrapper">-->
        <!--<ul class="report-list">-->
          <!--<li v-for="serial in serials">-->
            <!--<p class="pull-left" v-if="serial.type==1">《职业生涯测评》序列号</p>-->
            <!--<p class="pull-left" v-if="serial.type==2">《选科测评测评》序列号</p>-->
            <!--<p class="pull-left" v-if="serial.type==3">《职业生涯&选科测评》序列号</p>-->
            <!--<p class="pull-left" v-if="serial.power==0">(无效)</p>-->
            <!--<p class="pull-left" v-if="serial.power==1">(有效)</p>-->
            <!--<p class="pull-left" v-if="serial.power==2">(已使用)</p>-->
            <!--<p class="pull-left" v-if="serial.power==3">(使用中)</p>-->
            <!--<p class="pull-right">{{serial.serial_no}}</p>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
  import usercenter from '../../components/usercenter.vue';
  import headerEl from '../../components/headerEl.vue';
  import FooterEl from '../../components/FooterEl';

  export default {
    data() {
      return {
        serials: ''
      }
    },
    components: {
      usercenter,
      headerEl,
      FooterEl
    },
    mounted() {
      this.getData();
    },
    methods: {
      /**
       * 进入测试页面
       */
      getData: function () {
        this.$ajax.post("/api/usercenter/serial/list", {},
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
            console.log(data);
            if (data.code == 0) {
              this.serials = data.result;
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
