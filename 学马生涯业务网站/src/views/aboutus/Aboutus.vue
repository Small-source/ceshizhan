<template>
    <!-- 关于我们 -->
    <!-- 学马自己 -->
    <div class="about_us">
        <div v-if="/www.xuematech.com/.test($OEMdomain)">
            <Xuema></Xuema>
        </div>
        <!-- 代理商 -->
        <div v-else>
            <Dailishang></Dailishang>
        </div>
    </div>
</template>
<style type="text/css" lang="less" scoped>
</style>
<script>
    import Xuema from './Xuema.vue'
    import Dailishang from './Dailishang.vue'   
    export default {
        components:{ Xuema, Dailishang  },
        data() {
            return {
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>