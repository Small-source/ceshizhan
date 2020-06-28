<template>
    <div class="chongzhimimachenggong">
        <div class="tubiao"><img src="/imgs/tongyongtanchuang/chenggong.png" alt=""></div>
        <h5 class="success">密码重置成功</h5>
        <p class="baoguan">请妥善保管您的账户信息</p>
            <!-- this.$emit('Chenggongtanchuang'); -->
        <button @click="$emit('Chenggongtanchuang')">立即登陆</button>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.chongzhimimachenggong {
    text-align: center;
    position: absolute;
    box-sizing: border-box;
    // padding-top: 50px;
    left: 50%;
    top: 110px;
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
