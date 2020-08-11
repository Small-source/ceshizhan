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
						报告查询 <em class="en">query report</em>
					</span>
            </div>
            <div class="report_main">

                <li class="w100" v-for="report in reportList">
                  <p class="pull-left" v-if="report.type==1">职业生涯测评
                    <!--<small>({{report.serial_no}})</small>-->
                  </p>
                  <p class="pull-left" v-if="report.type==2">选科测评
                    <!--<small>({{report.serial_no}})</small>-->
                  </p>

                  <router-link v-if="report.type==1" class="more" :to="'/user/report/detail?id='+report.id">查看详情</router-link>
                  <router-link v-if="report.type==2" class="more" :to="'/user/report/detail2?id='+report.id">查看详情</router-link>

                </li>

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
          <!--<li v-for="report in reportList">-->
            <!--<p class="pull-left" v-if="report.type==1">职业生涯测评-->
              <!--<small>({{report.serial_no}})</small>-->
            <!--</p>-->
            <!--<p class="pull-left" v-if="report.type==2">选科测评-->
              <!--<small>({{report.serial_no}})</small>-->
            <!--</p>-->
            <!--<p class="pull-right">-->
              <!--<router-link v-if="report.type==1" :to="'/user/report/detail?id='+report.id">查看</router-link>-->
              <!--<router-link v-if="report.type==2" :to="'/user/report/detail2?id='+report.id">查看</router-link>-->

              <!--&lt;!&ndash;<a href="javascript:;">查看</a>&ndash;&gt;-->
            <!--</p>-->
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
        reportList: '', // 报告列表
      }
    },
    components: {
      usercenter,
      headerEl,
      FooterEl
    },
    mounted() {
      console.log(sessionStorage.getItem('token'))
      this.getReportData();
    },
    methods: {
      // 获取报告列表
      getReportData: function () {
        var _this = this;
        $.ajax({
          type: 'POST',
          url: '/api/usercenter/report/list',
          headers: {'token': sessionStorage.getItem('token')},
          dataType: 'JSON',
          success: function (data) {
            _this.reportList = data.result;
          },
          error: function (data) {
            this.layerMsg('网络错误，请重新提交');
          }
        })
      }
    }
  }

</script>
