<template>
    <div class="cepingwancheng">
    </div>
</template>
<style type="text/css" lang='less' scoped>
.cepingwancheng {
    width: 100%;
    background: url("/imgs/ceping/cepingwancheng.jpg") center center no-repeat;
}
</style>
<script>
export default {
    props: [ 'message' ],
    data() {
        return {
            // 选科卡账号
        }
    },
    methods: {
        goTest() {
        },
    },
    mounted() {
            let width=$(window).width();
            let height=$(window).height();
            $('.cepingwancheng').css({width:width,height:height})
    },
    created() {
    }
}
</script>
