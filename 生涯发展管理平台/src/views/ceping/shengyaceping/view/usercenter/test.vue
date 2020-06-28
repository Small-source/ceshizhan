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
						未完成测试 <em class="en">UNFINISHED</em>
					</span>
            </div>
            <div class="report_main">
              <ul>
                <li class="w100" v-for="test in tests" v-if="test.is_over==0" :cid="test.id"
                    :serial_type="test.serial_type" :type="test.type">
                  <p class="pull-left" v-if="test.type==1">职业生涯测评</p>
                  <p class="pull-left" v-if="test.type==2">选科测评</p>
                  <p v-if="test.is_over==0" class="d-relative more pull-right" @click="go($event)">
                    继续测试
                  </p>
                  <p v-if="test.is_over==1" class="d-relative more pull-right">
                    已完成
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footerEl></footerEl>
      </div>
    </div>
  </div>
</template>

<script>
  import usercenter from '../../components/usercenter.vue';
  import headerEl from '../../components/headerEl.vue';
  import FooterEl from '../../components/FooterEl';

  export default {
    data() {
      return {
        tests: ''
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
        this.$ajax.post("/api/usercenter/test/list", {},
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
              this.tests = data.result;
            } else {
              this.layerMsg(data.msg)
            }
          },
          function (res) {
            this.layerMsg('网络错误，请重新提交');
          }
        );

      },

      /**
       * 继续测试
       */
      go: function (e) {
        var test_id = $(e.target).closest('li').attr('cid');
        var type = $(e.target).closest('li').attr('type');
        var serial_type = $(e.target).closest('li').attr('serial_type');
        if (serial_type == 1) {
          sessionStorage.setItem('testType', 'type1');
        } else if (serial_type == 2) {
          sessionStorage.setItem('testType', 'type2');
        } else if (serial_type == 3 && type == 1) {
          sessionStorage.setItem('testType', 'type1');
          sessionStorage.setItem('quitType', 'type1');
        } else if (serial_type == 3 && type == 2) {
          sessionStorage.setItem('testType', 'type3');
        }
        this.$ajax.post("/api/usercenter/test/goon", {
            test_id: test_id
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
            console.log(data);
            if (data.code == 0) {

              // 序列号类型1
              if (data.result.serial_type == 1) {
                if (data.result.module == 0) {
                  this.$router.push('/evlua/classify')
                } else if (data.result.module == 1) {
                  this.$router.push('/xgtx/guide/' + data.result.node);
                } else if (data.result.module == 2) {
                  if (data.result.node == 1) {
                    this.$router.push('/evlua/classify/13');
                  } else {
                    this.$router.push('/rzqn/guide/' + data.result.node);
                  }
                } else if (data.result.module == 3) {
                  if (data.result.node == 1) {
                    this.$router.push('/evlua/classify/12');
                  } else {
                    this.$router.push('/xqqx/guide/' + data.result.node);
                  }
                } else if (data.result.module == 4) {
                  this.$router.push('/evlua/classify/14');
                }
              } else if (data.result.serial_type == 2) { // 序列号类型2
                if (data.result.module == 0) {
                  this.$router.push('/evlua/classify')
                } else if (data.result.module == 2) {
                  this.$router.push('/rzqn/guide/' + data.result.node);
                } else if (data.result.module == 3) {
                  if (data.result.node == 1) {
                    this.$router.push('/evlua/classify/22');
                  } else {
                    this.$router.push('/xqqx/guide/' + data.result.node);
                  }
                }
              } else if (data.result.serial_type == 3 && data.result.type == 1) {
                if (data.result.module == 0) {
                  this.$router.push('/evlua/classify')
                } else if (data.result.module == 1) {
                  this.$router.push('/xgtx/guide/' + data.result.node);
                } else if (data.result.module == 2) {
                  if (data.result.node == 1) {
                    this.$router.push('/evlua/classify/13');
                  } else {
                    this.$router.push('/rzqn/guide/' + data.result.node);
                  }
                } else if (data.result.module == 3) {
                  if (data.result.node == 1) {
                    this.$router.push('/evlua/classify/12');
                  } else {
                    this.$router.push('/xqqx/guide/' + data.result.node);
                  }
                } else if (data.result.module == 4) {
                  this.$router.push('/evlua/classify/14');
                }
              } else if (data.result.serial_type == 3 && data.result.type == 2) {
                if (data.result.module == 0) {
                  this.$router.push('/evlua/classify')
                } else if (data.result.module == 3) {
                  this.$router.push('/xqqx/guide/' + data.result.node);
                }
              }


            } else {
              console.log(data.msg);
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
