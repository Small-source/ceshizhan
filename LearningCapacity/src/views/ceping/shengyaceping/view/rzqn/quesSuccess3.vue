<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <rzqnNav></rzqnNav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips">{{tip}}</p>
          <div class="btngroup">
            <a v-if="type!='test'" href="javascript:;" class="btn btn_goon" @click="go">点击继续</a>
            <!--<router-link v-if="type=='test'" to="/rzqn/1?type=test" class="btn btn_jx">继续练习</router-link>-->
            <!--<router-link v-if="type=='test'" to="/rzqn/guide/1" class="btn btn_start">完成练习</router-link>-->
            <router-link v-if="type=='test'" class="btn btn_jx" to="/shengyaceping/rzqn/3?type=test">继续练习</router-link>
            <router-link v-if="type=='test'" class="btn btn_start" to="/shengyaceping/rzqn/guide/3"
                         style="margin-right:140px">完成练习
            </router-link>
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

  <!--<div class="success-tip-wrapper">-->
  <!--<img src="../../assets/success-tip.png" alt="">-->
  <!--<div class="success-tip">-->
  <!--{{tip}}测试完成!-->
  <!--</div>-->
  <!--<div class="success-router">-->
  <!--<a v-if="type!='test'" href="javascript:;" @click="go">点击继续</a>-->
  <!--<router-link v-if="type=='test'&&kongTest<2" to="/rzqn/3?type=test">继续练习</router-link>-->
  <!--<router-link v-if="type=='test'&&kongTest>1" to="/rzqn/guide/3" style="margin-right:140px">点击返回</router-link>-->
  <!--<router-link v-if="type=='test'&&kongTest>1" to="/rzqn/3?type=test">继续练习</router-link>-->
  <!--</div>-->
  <!--</div>-->

  <!--</div>-->
</template>

<script>
  import rzqnNav from '../../../../../components/rzqn.vue';

  export default {
    data() {
      return {
        seq: this.$route.query.seq,
        type: this.$route.query.type,
        tip: '',
        kongTest: sessionStorage.getItem('kongTest'),
      }
    },
    mounted() {
      $('.test_menu .item').eq(2).addClass('item_2');
      if (!this.kongTest) {
        sessionStorage.setItem('kongTest', 1);
        this.kongTest = 1;
      } else {
        sessionStorage.setItem('kongTest', Number(this.kongTest) + 1);
        this.kongTest = sessionStorage.getItem('kongTest');
      }

      if (this.type == 'test') {
          this.tip = '练习完成！';
      } else if (this.seq == 6) {
        this.tip = 'Part A测试完成!'
      } else {
        this.tip = '第' + this.seq + '次测试完成!';
      }
    },
    updated() {

    },
    components: {rzqnNav},
    methods: {
      go: function () {
        if (this.seq == 6) {
          this.$router.push('/shengyaceping/rzqn/instru/4')
        } else {
          this.seq = Number(this.seq) + 1;
          this.$router.push('/shengyaceping/rzqn/3?seq=' + this.seq);
        }
      },

      goTest: function () {
        if (this.seq == 4) {
          this.$router.push('/shengyaceping/rzqn/guide/3')
        } else {
          this.seq = Number(this.seq) + 1;
          this.$router.push('/shengyaceping/rzqn/3?seq=' + this.seq + '&type=test');
        }
      },
    }
  }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
