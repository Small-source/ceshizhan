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
              本测验需要你通过操作键盘上的“D”和“K”当作方向键，操作一端像蛇型的红色线条，从迷宫的中心走到外沿的终点，在走的过程中，你要尽量做到不碰壁，不走入死路。
              <br>要求：快速且准确。
              <br>在正式做之前，先进行练习，然后点击开始，进行正式测试。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <!--<router-link to="/rzqn/play/7" class="btn btn_jx">演示</router-link>-->
            <router-link to="/shengyaceping/rzqn/72?&type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/shengyaceping/rzqn/72" class="btn btn_start">开始<span
                    v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import rzqnNav from '../../../../../components/rzqn.vue';
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
                },
            }
        },
        mounted() {
            $('.test_menu .item').eq(6).addClass('item_2');
            var _this = this;
            if (sessionStorage.kongDiyTest || sessionStorage.getItem('diyTest2')) {
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
        components: {rzqnNav},
        methods: {
            closeModal: function () {
                this.modal = 0;
            },
            openModal: function () {
                this.modal = 1;
            },
            go: function (e) {
                console.log(sessionStorage.getItem('diyTest'));
                if (!sessionStorage.getItem('diyTest2')) {
                    this.layerMsg('至少练习一次!');
                    return false;
                }
                var url = $(e.target).closest('a').attr('url');
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
