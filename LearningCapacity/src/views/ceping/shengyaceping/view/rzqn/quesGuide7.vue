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
              本测试中，你的任务是想象左侧五角星的对称位置，并在右图中沿着想象轨迹移动绘制五角星。你需要将鼠标移动至图形右侧的起点，即图中红点，使鼠标与红点接触，在右图中沿着左图中虚线箭头的对称方向移动鼠标，最终绘制成对称五角星图形。
            </p>
            <p><img src="../../../../../assets/rzqn/guide7.png" alt="" class="guide-7-img"></p>
            <p>注意：在绘制过程中如果偏离标准对称图形会出现“碰壁次数”的错误提示，碰壁次数越少，绘制时间越短则成绩越好。</p>
            <p>在正式做之前，先认真观看演示，进行练习，然后点击开始，进行正式测试。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/shengyaceping/rzqn/play/7" class="btn btn_jx">演示</router-link>
            <router-link to="/shengyaceping/rzqn/7?&type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/7" class="btn btn_start">开始<span
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
  <!--本测试中，你的任务是想象左侧五角星的对称位置，并在右图中沿着想象轨迹移动绘制五角星。你需要将鼠标移动至图形右侧的起点，即图中红点，使鼠标与红点接触，在右图中沿着左图中虚线箭头的对称方向移动鼠标，最终绘制成对称五角星图形。-->
  <!--</p>-->
  <!--<p><img src="../../assets/rzqn/guide7.png" alt="" class="guide-7-img"></p>-->
  <!--</div>-->
  <!--<div class="guide-wrapper-tip">-->
  <!--<p>注意：在绘制过程中如果偏离标准对称图形会出现“碰壁次数”的错误提示，碰壁次数越少，绘制时间越短则成绩越好。</p>-->
  <!--<p>在正式做之前，先认真观看演示，进行练习，然后点击开始，进行正式测试。</p>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash;<router-link class="start-ce" to="/rzqn/7"><img src="../../assets/begin2.png"></router-link>&ndash;&gt;-->
  <!--<a class="start-ce" @click="go($event)" url="/rzqn/7"><img src="../../assets/begin2.png"><span v-if="seconds">({{seconds}}s)</span></a>-->

  <!--<router-link class="start-ce start-ce-test" to="/rzqn/7?type=test"><img src="../../assets/rzqn/btn-test.png">-->
  <!--</router-link>-->

  <!--<a class="start-ce start-ce-play" href="javascript:;" @click="openModal"><img src="../../assets/rzqn/btn-play.png">-->
  <!--</a>-->

  <!--<div class="layer-mask" v-if="modal==1"></div>-->
  <!--&lt;!&ndash; 视频 modal start &ndash;&gt;-->
  <!--<div class="modal modal-reg modal-ce" v-if="modal==1">-->
  <!--<div class="modal-title">-->
  <!--<h2>-->
  <!--<img src="../../assets/logo.png" alt="">&nbsp;-&nbsp;动手操作能力演示-->
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
            src: "/ceping/video2.mp4"
          }],
//          poster: "/static/images/author.jpg",
        },
      }
    },
    mounted() {
      $('.test_menu .item').eq(6).addClass('item_2');
      var _this = this;
      if (sessionStorage.kongDiyTest || sessionStorage.getItem('diyTest')) {
        _this.seconds = 0;
      }
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
        console.log(sessionStorage.getItem('diyTest'));
        if (!sessionStorage.getItem('diyTest')) {
          this.layerMsg('至少练习一次!');
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

  .guide-7-img {
    width: 400px;
    margin: 10px auto;
    display: block;
  }

  @media screen and (max-width: 1600px) {
    .guide-7-img {
      width: 300px;
      margin: 0 auto;
    }
  }
</style>
