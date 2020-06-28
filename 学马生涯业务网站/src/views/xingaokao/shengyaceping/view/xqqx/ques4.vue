<template>

  <div class="pc-page">
    <div class="score_main">
      <div class="auto">
        <div class="score_box">
          <div class="reg_titbox">
            <h4 class="cn_tit">学科成绩</h4>
            <h6 class="en_tit">Academic results</h6>
          </div>
          <div class="score_form clearfix">
            <ul>
              <li class="lang clearfix">
                <span class="tit">语文：</span>
                <div class="info clearfix">
                  <div class="group" score="135" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="120" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="105" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="math clearfix">
                <span class="tit">数学：</span>
                <div class="info clearfix">
                  <div class="group" score="135" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="120" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="105" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="english clearfix">
                <span class="tit">英语：</span>
                <div class="info clearfix">
                  <div class="group" score="135" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="120" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="105" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="physics clearfix">
                <span class="tit">物理：</span>
                <div class="info clearfix">
                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="80" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="70" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="60" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="chemistry clearfix">
                <span class="tit">化学：</span>
                <div class="info clearfix">
                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="80" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="70" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="60" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="biology clearfix">
                <span class="tit">生物：</span>
                <div class="info clearfix">
                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="80" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="70" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="60" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="history clearfix">
                <span class="tit">历史：</span>
                <div class="info clearfix">
                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="80" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="70" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="60" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="politics clearfix">
                <span class="tit">政治：</span>
                <div class="info clearfix">
                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="80" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="70" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="60" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <li class="geography clearfix">
                <span class="tit">地理：</span>
                <div class="info clearfix">
                  <div class="group" score="90" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    优
                  </div>

                  <div class="group" score="80" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    良
                  </div>

                  <div class="group" score="70" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    中
                  </div>

                  <div class="group" score="60" @click="radioSwitch($event)">
                    <div class="layui-unselect layui-form-radio">
                      <i class="layui-anim layui-icon"></i>
                    </div>
                    差
                  </div>

                </div>
              </li>

              <div style="clear:both"></div>
              <button class="ipt_button" @click="submit">立即提交</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xqqx/ques-bg.png" alt="">-->
  <!--<xqqxNav></xqqxNav>-->
  <!--<div class="subject-classes exam-classes">-->
  <!--<ul>-->
  <!--<li :class="{active:subject==1}" cid="1">第一次考试</li>-->
  <!--<li :class="{active:subject==2}" cid="2">第二次考试</li>-->
  <!--<li :class="{active:subject==3}" cid="3">第三次考试</li>-->
  <!--</ul>-->
  <!--</div>-->

  <!--&lt;!&ndash; 第一次考试 &ndash;&gt;-->
  <!--<div class="exam-wrapper" v-if="subject==1">-->
  <!--<div class="exam-list">-->
  <!--<div class="in">-->
  <!--<label>语文：</label><input type="number" min="0" max="150" v-model="lang">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>数学：</label><input type="number" min="0" max="150" v-model="math">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>英语：</label><input type="number" min="0" max="150" v-model="english">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>物理：</label><input type="number" min="0" max="150" v-model="physics">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>化学：</label><input type="number" min="0" max="150" v-model="chemistry">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>生物：</label><input type="number" min="0" max="150" v-model="biology">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>历史：</label><input type="number" min="0" max="150" v-model="history">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>政治：</label><input type="number" min="0" max="150" v-model="politics">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>地理：</label><input type="number" min="0" max="150" v-model="geography">分-->
  <!--</div>-->
  <!--<div class="submit" @click="submit(1)">-->
  <!--<img src="../../assets/xqqx/submit.png">-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 第一次考试 &ndash;&gt;-->

  <!--&lt;!&ndash; 第二次考试 &ndash;&gt;-->
  <!--<div class="exam-wrapper" v-if="subject==2">-->
  <!--<div class="exam-list">-->
  <!--<div class="in">-->
  <!--<label>语文：</label><input type="number" min="0" max="150" v-model="lang">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>数学：</label><input type="number" min="0" max="150" v-model="math">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>英语：</label><input type="number" min="0" max="150" v-model="english">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>物理：</label><input type="number" min="0" max="150" v-model="physics">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>化学：</label><input type="number" min="0" max="150" v-model="chemistry">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>生物：</label><input type="number" min="0" max="150" v-model="biology">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>历史：</label><input type="number" min="0" max="150" v-model="history">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>政治：</label><input type="number" min="0" max="150" v-model="politics">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>地理：</label><input type="number" min="0" max="150" v-model="geography">分-->
  <!--</div>-->
  <!--<div class="submit" @click="submit(2)">-->
  <!--<img src="../../assets/xqqx/submit.png">-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 第二次考试 &ndash;&gt;-->

  <!--&lt;!&ndash; 第三次考试 &ndash;&gt;-->
  <!--<div class="exam-wrapper" v-if="subject==3">-->
  <!--<div class="exam-list">-->
  <!--<div class="in">-->
  <!--<label>语文：</label><input type="number" min="0" max="150" v-model="lang">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>数学：</label><input type="number" min="0" max="150" v-model="math">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>英语：</label><input type="number" min="0" max="150" v-model="english">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>物理：</label><input type="number" min="0" max="150" v-model="physics">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>化学：</label><input type="number" min="0" max="150" v-model="chemistry">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>生物：</label><input type="number" min="0" max="150" v-model="biology">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>历史：</label><input type="number" min="0" max="150" v-model="history">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>政治：</label><input type="number" min="0" max="150" v-model="politics">分-->
  <!--</div>-->
  <!--<div class="in">-->
  <!--<label>地理：</label><input type="number" min="0" max="150" v-model="geography">分-->
  <!--</div>-->
  <!--<div class="submit" @click="submit(3)">-->
  <!--<img src="../../assets/xqqx/submit.png">-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 第三次考试 &ndash;&gt;-->

  <!--</div>-->
</template>


<script>


  export default {
    data() {
      return {
        subject: 1,
        lang: '',
        math: '',
        english: '',
        physics: '',
        chemistry: '',
        biology: '',
        history: '',
        politics: '',
        geography: '',
      }
    },
    components: {},
    mounted() {

    },
    methods: {
      tabSwitch: function (e) {
        this.subject = $(e.target).attr('cid');
      },

      /**
       * radio 切换
       */
      radioSwitch: function (e) {
        $(e.target).closest('li').find('.layui-unselect').removeClass('layui-form-radioed');
        $(e.target).closest('li').find('.layui-icon').removeClass('layui-anim-scaleSpring');
        $(e.target).closest('li').find('.group').removeClass('active');
        $(e.target).closest('li').find('.layui-icon').text('');
        $(e.target).closest('.group').addClass('active');
        $(e.target).closest('.group').find('.layui-unselect').addClass('layui-form-radioed');
        $(e.target).closest('.group').find('.layui-unselect').find('.layui-icon').addClass('layui-anim-scaleSpring');
        $(e.target).closest('.group').find('.layui-unselect').find('.layui-icon').text('');
      },

      /**
       * 提交
       */
      submit: function () {

        this.lang = $('li.lang .group.active').attr('score');
        this.math = $('li.math .group.active').attr('score');
        this.english = $('li.english .group.active').attr('score');

        this.physics = $('li.physics .group.active').attr('score');
        this.chemistry = $('li.chemistry .group.active').attr('score');
        this.biology = $('li.biology .group.active').attr('score');

        this.history = $('li.history .group.active').attr('score');
        this.politics = $('li.politics .group.active').attr('score');
        this.geography = $('li.geography .group.active').attr('score');


        if (!this.lang) {
          this.layerMsg('请填写语文成绩');
          return false;
        }
        if (!this.math) {
          this.layerMsg('请填写数学成绩');
          return false;
        }
        if (!this.english) {
          this.layerMsg('请填写英语成绩');
          return false;
        }
        if (!this.physics) {
          this.layerMsg('请填写物理成绩');
          return false;
        }
        if (!this.chemistry) {
          this.layerMsg('请填写化学成绩');
          return false;
        }
        if (!this.biology) {
          this.layerMsg('请填写生物成绩');
          return false;
        }
        if (!this.history) {
          this.layerMsg('请填写历史成绩');
          return false;
        }
        if (!this.politics) {
          this.layerMsg('请填写政治成绩');
          return false;
        }
        if (!this.geography) {
          this.layerMsg('请填写地理成绩');
          return false;
        }


        this.$ajax.post("/api/result/hobby/academic/add", {
            lang: this.lang,
            math: this.math,
            english: this.english,
            physics: this.physics,
            chemistry: this.chemistry,
            biology: this.biology,
            history: this.history,
            politics: this.politics,
            geography: this.geography,
            type: 1
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
              this.markOver();
              this.$router.push('/shengyaceping/xqqx/success/4');
            } else {
              this.layerMsg(data.msg);
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

