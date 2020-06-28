<template>
    <!-- 平衡单1 -->
    <div class="pinghengdan1">
        <StepBar step="3"></StepBar>
        <!-- 上一步下一步 -->
       <!--  <div class="set_target_major">
            <div class="inner">
                <div class="btn_next" @click="$router.push('/zhinengxuanke/pinghengdan2')">下一步</div>
                <div class="btn_next go_pre" @click="$router.push('/zhinengxuanke/xuekeyaoqiu')">上一步</div>  
            </div>   
        </div> -->
        <div class="inner">
            <div class="step">
                <div>
                    <p class="step_detail"><span class="tishiyu">提示：  </span>请你系统分析每一个因素，判断各因素对你进行选科的影响程度，填写完毕后点击“下一步”。</p>
                    <p class="step_detail">（1颗星表示没有影响、2颗星表示较为不重要、3颗星表示一般、4颗星表示重要、5颗星表示非常重要）&nbsp;&nbsp;</p>
                </div>
            </div>
            <ul class="content">
                <li v-for="(item, index) in quanzhong" :key="index" :class="checked[index].idx1 == 1 ? 'active': ''">
                    <p>
                        <span>{{item.numbers}}</span>
                        {{item.titles}}
                    </p>
                    <div class="star"  @click="addNum(index)">
                        <div v-for="(items, idx) in nums"  @click="item.influenceFactorWeight = idx">
                            <img :src="items.num > item.influenceFactorWeight ? src1:src2" alt="">
                        </div>
                    </div>
                    <div class="result">{{resultData[item.influenceFactorWeight]}}</div>
                </li>
            </ul>
        </div> 
        <!-- 底部按钮 -->
        <div class="ft_btns">
            <div class="ft_btn go_pre" @click="$router.push('/zhinengxuanke/xuekeyaoqiu')">上一步</div>
            <div @click="$router.push('/zhinengxuanke/pinghengdan2')" class="ft_btn go_next)">下一步</div>
        </div>      
    </div>
</template>
<style type="text/css" lang='less' scoped>
.pinghengdan1 {
    background: #fff;
    letter-spacing: 1.5px;
    *{
        box-sizing: border-box;
        color: #323232;
    }
    padding-bottom: 70px;
    .inner {
        width: 1200px;
        margin: 0 auto;
        // background-color: #fff;
        position: relative;
        z-index: 1;
        // 目标专业
        //提示
        .step {
            border-radius: 4px;
            margin-top: -100px;
            height: 150px;
            background-color: #fff;
            display: flex;
            align-items: center;
            box-shadow: 0px 0px 15px #edeeee;
            position: relative;
            z-index: 1;
            .tishiyu {
                color: #fd0926;
            }
            .step_detail {
                font-size: 16px;
                line-height: 32px;
                color: #333;
                font-weight: 600;
                width: 1200px;
                text-align: center;
            }
            .step_detail2 {
                color: #2c8ffc;
                width: 1200px;
                text-align: center;
            }
        }

    }
    // 设置目标专业
    .set_target_major {
        width: 100%;
        padding-top: 20px;
        background: #fff;
        z-index: 10;
        .inner {
            position: relative;
        }
        .btn_next {
            width: 60px;
            height: 58px;
            text-align: center;
            line-height: 58px;
            font-size: 13px;
            color: #fff;
            cursor: pointer;
            position: absolute;
            position: absolute;
            top: 88px;
            right: -60px;
            background-color: #2d8ffc;
            // box-shadow: 0px 4px 6px rgba(18, 103, 196, .54);
            &:active {
                box-shadow: none;
            }
        }
        .go_pre {
            top: 25px;
            right: -60px;
        }
        .go_next {
            top: 25px;
            right: -60px;
        }
    }
    .content{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        .active {
            border: 1px solid #3492f9;
        }
    }
    .content>li{
        width: 386px;
        height: 100px;
        background: #fff;
        margin-top: 20px;
        padding: 15px 0;
        position: relative;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        p{
            font-size: 15px;
            span{
                font-size: 18px;
                color:#3492f9;
                font-weight: bold;
                margin: 0 10px 0 15px;
                // font-style: italic;
            }
        }
       .star{
           width: 205px;
           display: flex;
           justify-content: space-between;
           margin: 18px 0 0 48px;
            div{
                width: 23px;
                height: 23px;
                cursor: pointer;
            }
       }
        .result{
            position: absolute;
            left: 280px;
            bottom:18px;
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
    // 底部上一步下一步按钮
    .ft_btns {
        padding: 30px 0px;
        height: 40px;
        position: relative;
        width: 1200px;
        margin: 0 auto;
        .ft_btn {
            width: 143px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 0px;
            background-color: #2d8ffc;
            // background: url(/imgs/xingaokao/xuankejuece/common/icon_next.png);
            box-shadow: 0px 4px 6px #2a76cc;
            border-radius: 4px;
            &:active {
                box-shadow: none;
            }
        }
        .go_pre {
            right: 180px;
        }
        .go_next {
            .ft_btn;
        }
    }
}
</style>
<script>
import StepBar from '../common/stepBar.vue';
export default {
    components: { StepBar },
    props: [ 'quanzhong', 'checked', 'step' ],
    data() {
        return {
            mubiaozhuanye_1: JSON.parse(window.sessionStorage.getItem('mubiaozhuanye_1')),
            mubiaozhuanye_2: JSON.parse(window.sessionStorage.getItem('mubiaozhuanye_2')),
            nums: [ 
                { num: '0', idx: 0 },
                { num: '1', idx: 1 },
                { num: '2', idx: 2 },
                { num: '3', idx: 3 },
                { num: '4', idx: 4 },
            ],
            // 当前选科进行状态
            state: 1,
            page: '',
            src1:'/imgs/xingaokao/xuankejuece/zhinengxuanke/pinghengdan/icon_stars2.png',
            src2:'/imgs/xingaokao/xuankejuece/zhinengxuanke/pinghengdan/icon_stars1.gif',
            resultData:["'没有影响'","'较为不重要'","'一般'","'重要'","'非常重要'"],
            numArr: [],
            numed: 0,
            // idx: [],
            // contents:[
            //     {number:"01",text:"学科兴趣对你有影响吗？",lightNumber:0},
            //     {number:"02",text:"这门学科与我的认知能力相匹配？",lightNumber:0},
            //     {number:"03",text:"我在这门学科上的成绩好",lightNumber:0},
            //     {number:"04",text:"我有信心学好这门学科",lightNumber:0},
            //     {number:"05",text:"我喜欢这门学科的老师",lightNumber:0},
            //     {number:"06",text:"学校在这门学科上的师资、资源有竞争力",lightNumber:0},
            //     {number:"07",text:"家人建议我选这门学科",lightNumber:0},
            //     {number:"08",text:"老师建议我选这门学科",lightNumber:0},
            //     {number:"09",text:"朋友建议我选这门学科",lightNumber:0},
            //     {number:"10",text:"大部分同学都选了这门学科",lightNumber:0},
            //     {number:"11",text:"我可以报考更多的专业",lightNumber:0},
            //     {number:"12",text:"我可以报考感兴趣的专业",lightNumber:0},
            //     {number:"13",text:"我可以报考我有潜力学好的专业",lightNumber:0},
            //     {number:"14",text:"我有利于我将来从事的职业",lightNumber:0},
            //     {number:"15",text:"符合我的生涯价值观",lightNumber:0},
            // ]
        }
    },
    methods: {
        light(index,number,index0){
            this.$set(this.contents[index],'lightNumber',number);
            this.quanzhong[index0].influenceFactorWeight = number;
        },
        addNum(idx) {
            this.checked[idx].idx1 = 1;
            let numBlearn = this.numArr.some((item, index) => {
                return item == idx;
            })
            if(!numBlearn) {
               this.numed ++;
               this.numArr.push(idx);
            }   
        }
    },
    created() {
        window.scrollTo(0, 0);
    },
    mounted() {
        if(window.sessionStorage.tuance=='3'){
            $('.set_target_major').css({top:'80px'})
        }else{
            $('.set_target_major').css({top:''})
        }
    }

}
</script>