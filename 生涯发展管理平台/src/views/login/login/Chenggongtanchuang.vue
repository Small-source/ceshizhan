<template>
    <div class="mark">
        <div class="Chenggongtanchuang">
            <div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>
            <div class="success">恭喜您注册成功</div>
            <p class="baoguan">请妥善保管您的账户信息</p>
                <!-- this.$emit('Chenggongtanchuang'); -->
            <button @click="$emit('Chenggongtanchuang')">下一步</button>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.mark {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000000000;
    background: rgba(51,51,51,.45);
}
.Chenggongtanchuang {
    text-align: center;
    position: absolute;
    box-sizing: border-box;
    // padding-top: 50px;
    left: 50%;
    top: 140px;
    width: 490px;
    height: 350px;
    padding: 50px 50px 20px 50px;
    background-color: #fff;
    margin-left: -245px;
    .tubiao {
        width: 78px;
        height: 78px;
        margin: 0 auto;
        overflow: hidden;
        img {
            width: 78px;
            height: 78px;
            border-radius: 50%;
        }
    }
    .success {
        font-size: 18px;
        color: #333;
        line-height: 60px;
    }
    .title {
        font-size: 14px;
        color: #666;
    }
    button {
        border: none;
        border-radius: 5px;
        background-color: #2d8ffc;
        height: 40px;
        width: 100%;
        color: #fff;
        margin-top: 40px;
        font-size: 16px;
        cursor: pointer;
    }
}
</style>
<script>
export default {
    // props: [ 'message' ],
    data() {
        return { 
        }
    },
    methods: {
    },
    created() {
    }
}
</script>
