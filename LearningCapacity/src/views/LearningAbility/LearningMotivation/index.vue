<template>

  <div class="pc-page">
    <div class="test_main test_main_3">
      <Nav></Nav>
      <div class="test_test clearfix">
        <div class="test_test_l">
          <div class="titbox center">
            <h4 class="cn_tit">学习态度</h4>
            <h6 class="en_tit">learning atitude</h6>
          </div>
          <div class="desc">
            <p>学习动力指的是引发并维持学习活动的内部心理倾向。学习动力主要表现在学习态度上，学习态度由认知、情感、行为意向三部分组成，这三部分是协调统一的关系。</p>
          </div>
          <div class="btngroup test_btngroup">
            <router-link to="/learningAbility/LearningMotivation/guide/1" class="btn btn_start_4">开始测评</router-link>
          </div>
        </div>
        <div class="test_test_r">
          <img src="@/assets/test_10.png" alt="" class="img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from '../../../components/learningMotivation.vue';
  export default {
    data() {
      return {
        testType: ''
      }
    },
    mounted() {
      this.testType = sessionStorage.getItem('testType');
    },
    components: {Nav}
  }
</script>

<style>

</style>
