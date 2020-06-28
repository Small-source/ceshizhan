<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <a href="javascript:;" class="button on">Part A</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              本测验中将会出现两个运动点和一个目标点，通过鼠标点击上方的方向键分别控制两个运动点。每点击一次，运动点就依据当前运动方向偏10度，再继续运动。你需要在20s内使两个运动点离目标点更近、更准。
            </p>
            <p>注意：每个试验持续时间为20s，即在20s后运动方点将停止运动保持终点状态。</p>
            <p>在正式测试之前，需认真观看演示视频，然后练习测试不少于1次，练习结束后开始正式测试，正式测试共进行6次。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/shengyaceping/rzqn/play/3" class="btn btn_jx">演示</router-link>
            <router-link to="/shengyaceping/rzqn/3?&type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/3?seq=1" class="btn btn_start">开始<span
              v-if="seconds">({{seconds}}s)</span></a>

          </div>
        </div>
      </div>
    </div>

  </div>

  <!--<div class="d-relative xgtz-index xgtx-ques">-->
  <!--<img class="block-img" src="../../assets/xljk/ques-bg.png" alt="">-->
  <!--<rzqnNav></rzqnNav>-->
  <!--<div class="evalu-part">-->
  <!--<img src="../../assets/rzqn/parta1.png">-->
  <!--</div>-->

  <!--<div class="guide-wrapper">-->
  <!--<earnest></earnest>-->
  <!--<img class="guide-bg" src="../../assets/rzqn/guide-bg.png" alt="">-->
  <!--<div class="guide-wrapper-text">-->
  <!--<p>-->
  <!--本测验中将会出现两个运动点和一个目标点，通过鼠标点击上方的方向键分别控制两个运动点。每点击一次，运动点就依据当前运动方向偏10度，再继续运动。你需要在20s内使两个运动点离目标点更近、更准。-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="guide-wrapper-tip">-->
  <!--<p>注意：每个试验持续时间为20s，即在20s后运动方点将停止运动保持终点状态。</p>-->
  <!--<p>在正式测试之前，需认真观看演示视频，然后练习测试不少于2次，练习结束后开始正式测试，正式测试共进行9次。</p>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash;<router-link class="start-ce" to="/rzqn/3?seq=1"><img src="../../assets/begin2.png"></router-link>&ndash;&gt;-->
  <!--<a class="start-ce" @click="go($event)" url="/rzqn/3?seq=1"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->

  <!--<router-link class="start-ce start-ce-test" to="/rzqn/3?&type=test"><img src="../../assets/rzqn/btn-test.png">-->
  <!--</router-link>-->
  <!--<a class="start-ce start-ce-play" href="javascript:;" @click="openModal"><img src="../../assets/rzqn/btn-play.png">-->
  <!--</a>-->

  <!--<div class="layer-mask" v-if="modal==1"></div>-->
  <!--&lt;!&ndash; 视频 modal start &ndash;&gt;-->
  <!--<div class="modal modal-reg modal-ce" v-if="modal==1">-->
  <!--<div class="modal-title">-->
  <!--<h2>-->
  <!--<img src="../../assets/logo.png" alt="">&nbsp;-&nbsp;空间能力演示-->
  <!--</h2>-->
  <!--<img class="close" @click="closeModal" src="../../assets/login/close.png">-->
  <!--</div>-->
  <!--<div class="modal-body">-->
  <!--<div id="video">-->
  <!--<video-player class="vjs-custom-skin"-->
  <!--ref="videoPlayer"-->
  <!--:options="playerOptions"-->
  <!--:playsinline="true">-->
  <!--</video-player>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash; 视频 modal end &ndash;&gt;-->

  <!--</div>-->
</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  require('video.js/dist/video-js.css');
  require('vue-video-player/src/custom-theme.css')
  export default {
    data() {
      return {
        seconds: 10,
        modal: 0,
        playerOptions: {
          muted: true,
          language: 'zh-CN',
          sources: [{
            type: "video/mp4",
            src: "/static/video1.mp4"
          }],
//          poster: "/static/images/author.jpg",
        },
      }
    },
    mounted() {
      $('.test_menu .item').eq(2).addClass('item_2');
      if (sessionStorage.kongPlayTest || sessionStorage.getItem('kongTest') > 1) {
        this.seconds = 0;
      }
      var _this = this;
        this.t=setInterval(function () {
            if (_this.seconds > 0) {
                _this.seconds--;
            } else {
                clearInterval(_this.t)
            }
        }, 1000)
    },
    updated() {

    },
    components: {rzqnNav},
    methods: {

      /**
       * close modal
       */
      closeModal: function () {
        this.modal = 0;
      },

      /**
       * reg modal
       */
      openModal: function () {
        this.modal = 1;
      },

      go: function (e) {
        console.log(sessionStorage.getItem('kongTest'))
        if (!sessionStorage.getItem('kongTest') || sessionStorage.getItem('kongTest') < 2) {
          this.layerMsg('至少练习1次!');
          return false;
        }
        var url = $(e.target).closest('a').attr('url');
//        console.log(url);
        if (this.seconds == 0) {
          this.$router.push(url);
        } else {
          this.layerMsg('请仔细阅读指导语！');
        }
      }
    }

  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }

  #video {
    width: 800px;
    height: 400px;
    margin: 0 auto;
  }
</style>
