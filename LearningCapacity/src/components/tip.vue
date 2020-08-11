<template>
  <div class="box" v-if="tip==1" @click="tipHide">
    <em class="icon part_start"></em>
    <div class="btngroup">
      <a href="javascript:;"  class="btn btn_start">点击鼠标开始测试</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {tip: 1}
    },
    mounted() {
    },
    methods: {
      tipHide: function () {
        this.tip = 0
      }
    }
  }
</script>
