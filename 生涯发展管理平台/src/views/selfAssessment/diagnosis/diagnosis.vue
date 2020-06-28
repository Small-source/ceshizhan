<template>
    <div class="selDiagnosis" v-cloak>
        <Diagnosis></Diagnosis>
    </div>
</template>
<script>
    // 最顶部提示卡片
    import  Diagnosis from '../../consultation/diagnosis/diagnosis.vue'
    export default {
        components:{Diagnosis},
        name: 'selDiagnosis',
        data() {
            return {
            }
        },
        methods: {
        },
        watch: {
           
        },
        created() {
           
        }
    }
</script>
<style type="text/css" lang='less' scoped>
    .selDiagnosis {
        padding-left: 20px;
    }
</style>

