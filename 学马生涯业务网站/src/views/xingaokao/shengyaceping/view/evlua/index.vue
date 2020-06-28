<template>

  <div class="pc-page">
    <div class="system_main system_main_1">
      <div class="titbox">
      </div>
      <div class="list">
        <li class="item item_scale item_zhiye">
          <a href="javascript:;" class="box" type="type1" @click="toTest($event)">
            <em class="icon"></em>
            <h5 class="title">职业生涯测评</h5>
            <div class="brief">
              通过从人格特性、一般认知潜能和职业兴趣三个方面来反映适合个体的职业类型，实现人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位。
            </div>
            <em class="btn btn1">开始测评</em>
          </a>
        </li>
        <li class="item item_scale item_xuanke">
          <a href="javascript:;" class="box" type="type2" @click="toTest($event)">
            <em class="icon"></em>
            <h5 class="title">选科测评</h5>
            <div class="brief">
              通过学习潜能、学习成绩和学科兴趣三个方面反映适合个体的学科，为中学生选课提供科学建议。
            </div>
            <em class="btn btn2">开始测评</em>
          </a>
        </li>
      </div>
    </div>
  </div>

  <!--<div class="evlua-start">-->

  <!--<router-link to="/" class="go-index">-->
  <!--<img src="../../assets/evlua/go-index.png" alt="">-->
  <!--</router-link>-->

  <!--<img class="evlua-bg" src="../../assets/evlua/start1-bg.png" alt="">-->
  <!--<div class="d-absolute evlua-enter">-->
  <!--<div class="enter1">-->
  <!--<img src="../../assets/evlua/enter1.png" alt="" type="type1" @click="toTest($event)">-->
  <!--</div>-->

  <!--<div class="enter2">-->
  <!--<img src="../../assets/evlua/enter2.png" alt="" type="type2" @click="toTest($event)">-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="d-absolute evlua-start-intro">-->
  <!--<img src="../../assets/evlua/start-intro-bg.png" alt="">-->
  <!--<div class="text-container">-->
  <!--<div class="e-title">-->
  <!--PAI生涯测评系统简介：-->
  <!--</div>-->
  <!--<div class="e-desc">-->
  <!--PAI生涯测评系统包括职业生涯测评和选科测评。<br>-->
  <!--职业生涯测评：通过从人格特性、一般认知潜能和职业兴趣三个方面来反映适合个体的职业类型，实现人格特性适合，有职业兴趣倾向，有潜力发展的精准职业定位。<br>-->
  <!--选科测评：通过学习潜能、学习成绩和学科兴趣三个方面反映适合个体的学科，为中学生选课提供科学建议。-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash; 序列号 &ndash;&gt;-->
  <!--<div class="layer-mask" v-if="isSerial==1"></div>-->
  <!--<div class="modal serial-modal" v-if="isSerial==1">-->
  <!--<div class="title">-->
  <!--<img class="logo" src="../../assets/logo.png" alt="">-->
  <!--<img class="close" src="../../assets/login/close.png" @click="closeSerial" alt="">-->
  <!--</div>-->
  <!--<div class="modal-body">-->
  <!--<input type="text" placeholder="请输入序列号" v-model="serial_no">-->
  <!--</div>-->
  <!--<div class="w100 submit">-->
  <!--<button type="button" @click="go">确定</button>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 序列号 &ndash;&gt;-->

  <!--</div>-->
</template>

<script>


  export default {
    data() {
      return {
        isSerial: 0,
        isProfileShow: 0,
        email: '',
        serial_no: '', // 序列号
        serial_type: '', // 序列号类型
      }
    },
    mounted() {
      // this.getUserInfo()
//      window.addEventListener("popstate",
//        function (e) {
//          //转向指定的URL
//          self.location = '/profile/add';
//        }, false);
    },
    components: {

    },
    methods: {
      closeModel: function () {
        this.isProfileShow = 0;
        this.serial_no = '';
      },

      /**
       * 填写序列号
       */
      toTest: function (e) {
        var testType = $(e.target).closest('.box').attr('type');
        sessionStorage.setItem('testType', testType);
        console.log(sessionStorage.getItem('testType'));
        this.$router.push('/evlua/serial');
        // this.isSerial = 1;
      },

      /**
       * 进入测试页面
       */
      go: function () {
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
