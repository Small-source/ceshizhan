<template>
    <!-- 升学规划 -->
    <div class="zizhuxuanba">
        <div class="inner">
            <ul class="lis">
                <li @click="getIn('Zizhaoxuexiaoku')" :class="selection=='Zizhaoxuexiaoku'? 'active' : ''">自招学校库</li>
                <li @click="getIn('Gaozhongjingsai')" :class="selection=='Gaozhongjingsai'? 'active' : ''">高中竞赛库</li>
                <li @click="getIn('Zizhaoluquku')" :class="selection=='Zizhaoluquku'? 'active' : ''">自招录取库</li>
                <li @click="getIn('Onlineclass')" :class="selection=='Onlineclass'? 'active' : ''">自招综评复试</li>
            </ul>
            
        </div>
        <div class="content">
            <compoent :is="selection"></compoent>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.zizhuxuanba {
    padding-top: 20px;
    background-color: #f5f7f6;
    min-height: 700px;
    .inner {
        width: 1200px;
        margin: 0 auto;
        // box-sizing: border-box;
        // padding: 0px 29px;
        // background-color: #fff;
    }
    .lis {
        width:100% ;
        height: 44px;
        // border-bottom: 1px solid #cfcfcf;
        // background-color: #fff;
        // text-align: center;
        li {
            width: 120px;
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            float: left;
            color: #333;
            cursor: pointer;
            border-right: 1px solid #d7d9d8;
            border-top: 1px solid #d7d9d8;
            border-bottom: 1px solid #d7d9d8;
            text-align: center;
            &:first-child {
                border-left: 1px solid #d7d9d8;
            }
            // margin-right: 45px;
        }
        .active {
            color: #3491fb;
            background-color: #e1eef7;
            border-bottom: 2px solid #3491fb;
            height: 41px;
            position: relative;
            &:after {
                content: "";
                width: 0px;
                height: 0px;
                border-style: solid;
                border-width: 0px 7px 5px 7px;
                border-color: transparent transparent #3491fb transparent;
                position: absolute;
                left: 50%;
                margin-left: -7px;
                bottom: 0px;
            }
            
        }
    }
}
</style>

<script>
// 升学规划（自招学校库）
import Zizhaoxuexiaoku from './zizhaoxuexiaoku/zizhaoxuexiaoku.vue';
// 升学规划（高中竞赛库）
import Gaozhongjingsai from './gaozhongjingsaiku/gaozhongjingsaiku.vue';
// 升学规划（自招录取库）
import Zizhaoluquku from './zizhaoluquku/zizhaoluquku.vue';
// 升学规划（在线课堂自招综评复试）
import Onlineclass from './onlineClass/onlineClassroom.vue';
export default {
    components: { Zizhaoxuexiaoku, Gaozhongjingsai, Zizhaoluquku, Onlineclass },
    // props: [ 'message' ],
    data() {
        return {
            selection: 'Zizhaoxuexiaoku'
        }
    },
    methods: {
        getIn(component) {
            this.selection = component;
        }
    },
    mounted(){
      if(/luquku/.test(window.location.hash)){
        this.selection='Zizhaoluquku';
      }
    },
    created() {
        // console.log(this.$route)
        if(this.$route.query.from == 'onlineClassroom') {
            this.selection = 'Onlineclass';
        }
        if(this.$route.query.from == 'competition') {
            this.selection = 'Gaozhongjingsai';
        }
    }
}
</script>
