<template>
    <div class="xuankejuece">
        <div class="inner">
            <ul class="innerNav">
                <li><router-link to="/elective/xuekezhixuan/university">按大学查询</router-link></li>
                <li><router-link to="/elective/xuekezhixuan/subject">按学科查询</router-link></li>
            </ul>
            <div class="innerContent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuankejuece {
    // padding-bottom: 30px;
    position: relative;
    overflow: hidden;
    padding-left: 20px;
    .inner {
        width:970px;
        min-height: 800px;
        padding-top: 30px;
        background: #fff;
    }
    // 院校展示
    .yuxiaoBox {
        position: absolute;
        right: -200px;
        top: 0px;
        width: 200px;
        height: 300px;
        background-color: #fff;
        border: 1px solid #dedede;
        border-radius: 3px;
        color: #333;
        font-size: 14px;
        overflow: auto;
        .titlesss {
            text-align: center;
            color: #333;
            font-size: 16px;
            line-height: 40px;
            border-bottom: 1px solid #dedede;
        }
        p {
            font-size: 14px;
            border: 1px dashed #dedede;
            padding-left: 20px;
        }
    }
    .subject_direct {
        padding: 0px 20px;
        background-color: #fff;
        .mian_title {
            line-height: 54px;
            font-size: 15px;
            color: #333;
            font-weight: 500;
        }

        .small_title {
            font-size: 14px;
            height: 38px;
            padding: 0px 20px;
            line-height: 38px;
            border: 1px solid #e5e5e5;
            .shezhi {
               margin-right: 10px;
               color: #333;
            }
            .tixing {
                font-size: 12px;
                color: #d83838;
                line-height: 38px;
            }
        }
        .chaxun {
            padding: 11px 20px;
            min-height: 26px;
            border: 1px solid #e5e5e5;
            border-top: 0px solid #e5e5e5;
            background-color: #f9f9f9;
            margin-bottom: 9px;
            .title {
                float: left;
                margin-right: 10px;
            }
            .chaxun2 {
                .top {
                    height: 28px;
                    margin-bottom: 20px;
                }
                .bottom {
                    height: 28px;
                }
            }
        }
        .seleted_title {
            line-height: 45px;
            font-size: 15px;
            color: #333;
        }
        .seleted {
            margin-bottom: 20px;
        }
    }
}
</style>
<script>
import Loading from '../.././components/Loading.vue'
export default {
    components: { Loading },
    props: {
        className: {
          type: String,
          default: 'yourClassName'
        },
        id: {
          type: String,
          default: 'yourID'
        },
        width: {
          // type: String,
          default: '1160px'
        },
        height: {
          // type: String,
          default: '500px'
        }
    },
    data() {
        return {
            provance: window.localStorage.getItem('cityNow'),
            chart: null,
        }
    },
    mounted() {
        // this.$router.push('/xuekezhixuan/university')
        $('.innerNav>li').eq(0).find('a').css({background:'#2D8FFC',color:'#F7F5F6'});
        /university/.test(window.location.hash)&&this.activeNav(0);
        /subject/.test(window.location.hash)&&this.activeNav(1);
    },
    watch:{
        $route:{
            handler: function(val, oldVal){
                /university/.test(window.location.hash)&&this.activeNav(0);
                /subject/.test(window.location.hash)&&this.activeNav(1);
            }
        }
    },
    beforeDestroy() {
    },
    methods: {
        //导航激活状态
        activeNav(num){
            $('.innerNav>li>a').css({background:'',color:''})
            $('.innerNav>li').eq(num).find('a').css({background:'#2D8FFC',color:'#F7F5F6'})
        }
    },
    created() {

    }
}
</script>
<style lang="less">
    .innerNav{
        width: 480px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto 30px;
    }
    .innerNav>li{
        width: 220px;
        height: 40px;
        border-radius: 3px;
    }
    .innerNav>li>a{
        display: block;
        width: 100%;
        height: 100%;
        background: #E3E6EB;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        letter-spacing: 0.1em;
        color:#6D767F;
        font-family: "Microsoft Yahei", Adobe Heiti Std, Arial, sans-serif;
    }
</style>
