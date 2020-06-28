<template>
    <div class="viptanchuang" v-show="data">
            <div class="tanchuang">
                <div class="tubiao"></div>
                <div class="buyVip">开通VIP才能查看</div>
                <div class="button" @click="$emit('go-back')">×</div>
            </div>  
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .viptanchuang {
        position: fixed;
        left: 0;
        top: 110px;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background-color: rgba(51,51,51,.25);
        .tanchuang {
            position: absolute;
            left: 50%;
            top: 110px;
            margin-left: -245px;
            width: 490px;
            height: 350px;
            background-color: #fff;
            .tubiao {
                height: 240px;
                background: url(/imgs/tongyongtanchuang/tankuang.png) no-repeat center 60px;
            }
            .buyVip {
                font-size: 18px;
                color: #333;
                text-align: center;
                line-height: 50px;
            }
            .button {
                width: 36px;
                height: 36px;
                text-align: center;
                line-height: 34px;
                color: #fff;
                position: absolute;
                border-radius: 18px;
                right: -18px;
                top: -18px;
                background-color: #e7e4e4;
                z-index: 1;
                font-size: 26px;
                cursor: pointer;
            }
        }
    }  
</style>
<script>
export default {
    props: [ 'data' ],
    data() {
        return { 
            // data: this.data,
            // isshow: false
        }
    },
    methods: {
       // goback() {

       //      this.isshow = false;
       //      console.log(this.isshow)
       // } 
        // stop(){//滑动限制
        //   var mo=function(e){e.preventDefault();};
        //   document.body.style.overflow='hidden';
        //   document.addEventListener("touchmove",mo,false);//禁止页面滑动
        // },
        // move(){//取消滑动限制
        //   var mo=function(e){e.preventDefault();};
        //   document.body.style.overflow='';//出现滚动条
        //   document.removeEventListener("touchmove",mo,false);
        // }
    },
    watch: { 
        // data() {
        //     if(this.data) {
        //         this.stop();
        //     }else {
        //         this.move();
        //     }
        // }
    },
    mounted() {

        // this.isshow = this.data
        // console.log(this.isshow)
    },
    created() {
        // this.isshow = this.data
        // this.stop()
        console.log(this.isshow)
    }
}
</script>