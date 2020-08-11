<template>
    <div class="Loading">
        <div class="tanchuang">
            <div class="tubiao"></div>
            <div class="buyVip">加载中 ···</div>
        </div>  
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .Loading {
        width: 100%;
        height: 100%;
        position: relative;
        .tanchuang {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -245px;
            margin-top: -60px;
            width: 490px;
            height: 120px;
            .tubiao {
                height: 80px;
                width: 80px;
                margin: 0 auto;
                background-image: url(/imgs/loading/loading2.png);
                background-repeat:  no-repeat ;
                background-position: center center;
                background-size: 100% 100%;
                animation: rotate 1.5s linear infinite;
            }
            @keyframes rotate{
                from{
                    transform: rotate(0deg)
                }
                to{
                    transform: rotate(360deg)
                }
            }
            .buyVip {
                font-size: 18px;
                color: #666;
                text-align: center;
                line-height: 40px;

            }
        }
    }  
</style>
<script>
export default {
    props: [ ],
    data() {
        return { 
        }
    },
    methods: {
      
    },
    watch: { 
       
    },
    mounted() {

       
    },
    created() {
       
    }
}
</script>