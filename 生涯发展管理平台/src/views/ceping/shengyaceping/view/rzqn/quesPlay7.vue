<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_step clearfix">
        <a href="javascript:;" class="button on">Part A</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <div class="modal modal-reg modal-ce modal-play">
            <div class="modal-title">
              <h2>
                <img src="../../../../../assets/logo.png" alt="">&nbsp;-&nbsp;动手操作能力演示
              </h2>
              <router-link to="/shengyaceping/rzqn/guide/7">
                <img class="close" src="../../../../../assets/login/close.png">
              </router-link>
            </div>
            <div class="modal-body">
              <div id="video">
                <video-player class="vjs-custom-skin"
                              ref="videoPlayer"
                              :options="playerOptions"
                              :playsinline="true"
                              @ended="onPlayerEnded($event)">
                </video-player>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 视频 modal start -->

    <!-- 视频 modal end -->
  </div>


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
//      sessionStorage.kongDiyTest = true;
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

      onPlayerEnded:function(player){
        sessionStorage.kongDiyTest = true;
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
