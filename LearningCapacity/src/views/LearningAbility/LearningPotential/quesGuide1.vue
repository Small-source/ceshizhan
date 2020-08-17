<template>
  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
      <div class="test_step clearfix">
        <a href="javascript:;" class="button on">Part A</a>
      </div>
      <div class="test_detail test_1">
        <div class="radio_box">
          <h4 class="title">请仔细阅读指导语</h4>
          <div class="txt_desc">
            <p>
              本测验是要测试你看见“←”或“→”后按键有多快。请你拿起鼠标置于胸前，将你左手拇指放在鼠标按键的左边，你的右手拇指放在鼠标按键的右边。当你看见箭头出现时，请你做出判断：
            </p>
            <p>
              如果箭头朝左：请用左手拇指按左键。
            </p>
            <p>
              如果箭头朝右：请用右手拇指按右键。
            </p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/learningAbility/learningPotential/1?type=test" class="btn btn_jx">练习</router-link>
            <a href="javascript:;" @click="go($event)" url="/learningAbility/learningPotential/1" class="btn btn_start">开始<span
                    v-if="seconds">({{seconds}}s)</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import Nav from '../../../components/learningPotential.vue';
    export default {
        data() {
            return {seconds: 10}
        },
        mounted() {
            $('.test_menu .item').eq(0).addClass('item_2');
            var _this = this;
            if (sessionStorage.getItem('infoTest')) {
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
        components: {Nav},
        methods: {
            go: function (e) {
                if (!sessionStorage.getItem('infoTest')) {
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
</style>
