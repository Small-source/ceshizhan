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
        created() {
            var tokens = '6f3d512441f0c145679ddc97730a7d2f2ba5e29fd466d5eb5b599d04f089d854'
            window.sessionStorage.setItem("token",tokens)
        }
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
