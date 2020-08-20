<template>
  <div class="pc-page">
    <div class="test_main test_main_3">
      <Nav></Nav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips" v-if="type!='test'">本次测试已完成</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" to="/learningAbility">点击继续</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Nav from '../../../components/learningMotivation.vue';
  export default {
    data() {
      return {}
    },
    mounted() {
      $('.test_menu .item').eq(0).addClass('item_3');
    },
    updated() {

    },
    components: {Nav},
  }
</script>

