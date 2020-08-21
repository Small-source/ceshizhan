<template>
    <div id="learningability">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        components: { },
        props: [  ],
        data() {
            return {
                isShowjihuoka: false,
                src: "",
                serial_no: '',
                // 记录状态
                zhuangtai: '',
                chushi:false
            }
        },
        computed:{
        },
        methods: {
        },
        mounted() {
        },

    }
</script>
<style lang="less">
    #learningability *{
        box-sizing: border-box;
    }
    #learningability>img{
        display: block;
        margin: 0 auto;
    }
</style>
