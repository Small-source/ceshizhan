<template>

  <div class="pc-page">
    <div class="test_main test_main_2">
      <Nav></Nav>
      <div class="test_detail test_3">
        <div class="box">
          <em class="icon part_over"></em>
          <p class="tips" v-if="type!='test'">本次测试已完成</p>
          <div class="btngroup">
            <router-link class="btn btn_goon" v-if="type!='test'" to="/learningAbility">点击继续</router-link>
            <router-link v-if="type=='test'" to="/learningAbility/learningPotential/94?type=test" class="btn btn_jx">继续练习</router-link>
            <router-link v-if="type=='test'" to="/learningAbility/learningPotential/guide/94" class="btn btn_start">完成练习</router-link>
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
            return {
                type: this.$route.query.type
            }
        },
        mounted() {
            $('.test_menu .item').eq(8).addClass('item_2');
            if (this.type == 'test') {
                sessionStorage.setItem('zhuyi4', 1);
            }
        },
        updated() {

        },
        components: {Nav},
    }
</script>

<style>
  .evalu-nav {
    background: #333;
    opacity: 1;
  }
</style>
