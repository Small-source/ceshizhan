<template>
    <div class="gerenzhongxin"> 
        <div class="fanhui inner" v-if="tuance">
            <router-link to="/thome" class="back">
                <img src="/imgs/tuance/return.png" alt="">
                返回新高考选科
            </router-link>
        </div>
        <div class="inner">
            <div class="left">
                <p class="left_user">Hi！ <span>{{user}}</span></p>
                <ul class="lis">
                    <li @click="change('MyMessage')" :class="component == 'MyMessage' ? 'active1' : 'no1'"><p>我的资料</p></li>
                    <li @click="change('MyReport')" :class="component == 'MyReport' ? 'active2' : 'no2'"><p>我的报告</p></li>
                    <li @click="change('Mycourses')" :class="component == 'Mycourses' ? 'active3' : 'no3'" v-if="!tuance"><p>我的课程</p></li>
                    <li @click="change('MyCollection')" :class="component == 'MyCollection' ? 'active4' : 'no4'" v-if="!tuance"><p>我的收藏</p></li>
                    <li @click="Logout" v-if="tuance" :class="component == 'Logout' ? 'active5' : 'no5'"><p>退出</p></li>
                </ul>
            </div>
            <div class="right">
                <keep-alive>
                    <compoemts :is="component"></compoemts>
                </keep-alive>  
            </div>
        </div>    
    </div>
</template>
<style type="text/css" lang='less' scoped>
.gerenzhongxin {
    background-color: #f5f5f5;
    min-height: 680px;
    padding-top: 20px;
    .inner {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .left {
        box-sizing: border-box;
        padding-top: 64px;
        width: 240px;
        min-height: 628px;
        float: left;
        background: url(/imgs/gerenzhongxin/bg_geren.png) center center;  
        position: relative;
        z-index: 1;
        .left_user {
            line-height: 34px;
            font-size: 22px;
            color: #fff;
            text-align: center;
        }
        .lis {
            padding-top: 34px;
            font-size: 15px;
            color: #fff;
            li {
                height: 46px;
                line-height: 46px;
                cursor: pointer;
                width: 100px;
                margin: 0 auto;
                border-radius: 23px;
                padding-left: 70px;
                margin-bottom: 10px;
            }
            .no1 {
                background: url(/imgs/gerenzhongxin/icon/icon_ziliaobaise.png) no-repeat 35px center;
            }
            .no2 {
                background: url(/imgs/gerenzhongxin/icon/icon_wodeziliaobaise.png) no-repeat 35px center; 
            }
            .no3 {
                background: url(/imgs/gerenzhongxin/icon/icon_wodekechengbaise.png) no-repeat 35px center;
            }
            .no4 {
                background: url(/imgs/gerenzhongxin/icon/icon_shoucang.png) no-repeat 35px center;
            }
            .no5 {
                background: url(/imgs/gerenzhongxin/icon/icon_logout.png) no-repeat 33px center;
            }
            .active1 {
                color: #3893f9;
                background: url(/imgs/gerenzhongxin/icon/icon_wodeziliao.png) no-repeat 35px center;
                background-color: #fff;
                
            }
            .active2 {
                color: #3893f9; 
                background: url(/imgs/gerenzhongxin/icon/icon_wodebaogao.png) no-repeat 35px center; 
                background-color: #fff;
                
            }
            .active3 {
                color: #3893f9;
                background: url(/imgs/gerenzhongxin/icon/icon_wodekecheng.png) no-repeat 35px center;
                background-color: #fff;
            }
            .active4 {
                color: #3893f9;
                background: url(/imgs/gerenzhongxin/icon/icon_lanshoucang.png) no-repeat 35px center;
                background-color: #fff;
            }
        }
    }
    .right {
        width: 960px;
        float: left;
        position: relative;
    }
    .fanhui{
        height: 40px;
        line-height: 10px;
        a{
            color: #2D90F8;
            font-weight: bolder;
            font-size: 16px;
            float: right;
        }
    }
}
</style>
<script>
// 我的资料
import MyMessage from './component/MyMessage.vue';
// 我的报告
import MyReport from './component/MyReport.vue';
// 我的课程
import Mycourses from './component/Mycourses.vue';
// 我的收藏
import MyCollection from './component/MyCollection.vue';



// 安全设置
import Anquanshezhi from './component/Anquanshezhi.vue';
// 退出账户
import Tuichuzhanghu from './component/Tuichuzhanghu.vue';
export default {
    components: { MyMessage, MyReport, Mycourses, Anquanshezhi, Tuichuzhanghu, MyCollection },
    // props: [ 'message' ],
    // 
    data() {
        return { 
            component: 'MyMessage',
            tuance:false,
            user: window.sessionStorage.getItem('name')
        }
    },
    methods: {
        change(index) {
            this.component = index;
        },
        // 退出登录
        Logout() {
            // this.islogin = false;
            window.sessionStorage.clear();
            window.location.href="/"
        },
    },
    created() {
        // console.log(document.referrer);
        if(this.$route.query.component) {
            this.component = this.$route.query.component;
        }
    },
    mounted(){
        if(window.sessionStorage.tuance=='3'){
            this.tuance=true;
        }
    }
}
</script>
