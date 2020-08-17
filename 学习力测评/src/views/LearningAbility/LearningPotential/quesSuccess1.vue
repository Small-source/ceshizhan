<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips" v-if="type!='test'">Part A测试完成!</p>
          <p class="tips" v-if="type=='test'">Part A练习完成!</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="type!='test'" to="/learningAbility/learningPotential/instru/2">点击继续</router-link>
            <router-link v-if="type=='test'" to="/learningAbility/learningPotential/1?type=test" class="btn btn_jx">继续练习</router-link>
            <router-link v-if="type=='test'" to="/learningAbility/learningPotential/guide/1" class="btn btn_start">完成练习</router-link>
          </div>
        </div>
      </div>
      <div class="test_foot test_copy">
        ©版权声明：本作品著作权以及版权属于育铭天下，并受法律保护。
      </div>
    </div>
  </div>
</template>


<script>
    import Nav from '../../../components/learningPotential.vue';
    export default {
    data() {
      return {
        type: this.$route.query.type
      }
    },
    components: {  Nav },
    mounted() {
      $('.test_menu .item').eq(0).addClass('item_2');
      if (this.type == 'test') {
        sessionStorage.setItem('infoTest', 1);
      }
    },
    updated() {

    },
    components: { Nav },
  }
</script>

