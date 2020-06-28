<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <xgtxNav></xgtxNav>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">人格特性测试</h4>
            <h6 class="en_tit">Personality trait test</h6>
          </div>
          <div class="desc">
            <p>人格是个体在一定的遗传素质基础上、在适应环境的过程中所形成的独特行为或内在的行为倾向性。通过人格测试可以让你了解到自己与他人相区别的独特而稳定的思维方式和行为风格。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link class="btn btn_start" :to="url">开始测评</router-link>
          </div>
        </div>
        <div class="test_test_r">
          <img :src="src" alt="" class="img"/>
        </div>
      </div>
      <div class="test_foot test_copy">
        Personality is the individual’s unique behavior or inherent behavioral tendencies formed on the basis<br>
        of certain genetic qualities in the process of adapting to the environment.
      </div>
    </div>
  </div>
  <!--<div class="d-relative xgtz-index">-->
    <!--<img class="block-img" src="../../assets/xgtx/index-bg.png" alt="">-->
    <!--<xgtxNav></xgtxNav>-->
    <!--<div class="xgtz-intro">-->
      <!--<img src="../../assets/xgtx/intro-bg.png" alt="">-->
      <!--<div class="i-title"></div>-->
      <!--<div class="i-desc">-->
        <!--人格是个体在一定的遗传素质基础上、在适应环境的过程中所形成的独特行为或内在的行为倾向性。通过人格测试可以让你了解到自己与他人相区别的独特而稳定的思维方式和行为风格。-->
      <!--</div>-->
      <!--<div class="i-tip">-->
        <!--&lt;!&ndash;提示：点击“人格特性第一步”进入测试！&ndash;&gt;-->
        <!--<router-link class="" to="/xgtx/guide/1"><img src="../../assets/btn/rgtx.png"></router-link>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;<router-link class="start-ce" to="/xgtx/guide/1"><img src="../../assets/begin.png"></router-link>&ndash;&gt;-->
  <!--</div>-->
</template>

<script>
  import xgtxNav from '../../../../../components/xgtx.vue';
  export default{
    data(){
      return {
          url:'/shengyaceping/xgtx/guide/1',
          src:'imgs/tuance/test_08.png'
      }
    },
    components: {xgtxNav},
      mounted(){
          if(window.sessionStorage.tuance=='3'){
              this.url= '/shengyaceping/xgtx/guide/2'
              this.src= 'imgs/tuance/test_082.png'
              $('.test_test_r img').css({width:'75%',display:'block',margin:'0 auto'})
          }
      }
  }
</script>

<style scoped>
  .test_test_r{
    transition: .1s;
  }
</style>
