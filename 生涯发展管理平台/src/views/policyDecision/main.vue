<template>
    <div class="careerManagement">
        <div class="careerManagementBox">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    汇总目标
                </div>
            </div>
            <ul class="electiveBox" style="height: 130px">
                <li v-for="(item,index) in huizong">
                    <div class="left">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="button" @click="jump(item.link)">
                            {{item.button}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="careerManagementBox">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                   筛选目标
                </div>
            </div>
            <ul class="electiveBox">
                <li v-for="(item,index) in ceping">
                    <div class="left">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="button" @click="jump(item.link)">
                            {{item.button}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="careerManagementBox">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    确定目标
                </div>
            </div>
            <ul class="electiveBox" style="height: 130px">
                <li v-for="(item,index) in queding">
                    <div class="left">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="button" @click="jump(item.link)">
                            {{item.button}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="careerManagementBox">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    志愿填报
                </div>
            </div>
            <ul class="electiveBox" style="height: 130px">
                <li v-for="(item,index) in zhiyuan">
                    <div class="left">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="button" @click="jump(item.link)">
                            {{item.button}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                huizong:[
                    {
                        src:"/imgs/careerManagement/icon_zhiyedingwei.png",
                        title:"大学探索表",
                        button:"查看",
                        link:"/policyDecision/universityExploration"
                    },
                    {
                        src:"/imgs/careerManagement/icon_yuanxiaodingwei.png",
                        title:"专业探索表",
                        button:"查看",
                        link:"/policyDecision/professionalExploration"
                    }
                ],
                ceping:[
                    {
                        src:"/imgs/careerManagement/icon_zhiyedingwei.png",
                        title:"大学定位工具",
                        button:"查看",
                        link:"/policyDecision/university"
                    },
                    {
                        src:"/imgs/careerManagement/icon_yuanxiaodingwei.png",
                        title:"专业定位工具",
                        button:"查看",
                        link:"/policyDecision/major"
                    },
                    {
                        src:"/imgs/careerManagement/icon_zhuanyedingwei.png",
                        title:"职业定位工具",
                        button:"查看",
                        link:"/policyDecision/careerAnchor"
                    }
                ],
                queding:[
                    {
                        src:"/imgs/careerManagement/icon_zhiyedingwei.png",
                        title:"目标大学梯度表",
                        button:"查看",
                        link:"/policyDecision/universityTable"
                    },
                    {
                        src:"/imgs/careerManagement/icon_wodemubiao.png",
                        title:"我的目标",
                        button:"查看",
                        link:"/policyDecision/goals"
                    }
                ],
                zhiyuan:[
                    {
                        src:"/imgs/careerManagement/icon_zhiyedingwei.png",
                        title:"志愿填报",
                        button:"查看",
                        link:"/policyDecision/zhiyuan"
                    }
                ]
            }
        },
        methods:{
            //跳转页面
            jump(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped lang="less">
    .careerManagement{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        width: 100%;
        padding-left: 20px;
        .careerManagementBox {
            width: 970px;
            background: #fff;
            padding: 0 16px;
            border-radius: 5px;
            margin-bottom: 25px;
            .top {
                img {
                    margin-right: 10px;
                }
                .title {
                    font-size: 17px;
                    color: #348DF1;
                    font-weight: bolder;
                    padding-top: 24px;
                    letter-spacing: 2px;
                    margin-bottom: 24px;
                }
                p {
                    line-height: 62px;
                    color: #333333;
                }
            }
            .electiveBox{
                padding-bottom: 25px;
                background: #fff;
                width: 100%;
                height: 255px;
                display: flex;
                justify-content: space-between;
                align-content: space-between;
                flex-wrap: wrap;
                li{
                    position: relative;
                    width: 455px;
                    height: 106px;
                    border-radius: 5px;
                    border:1px solid #EBEBEB;
                    .left{
                        width: 120px;
                        float: left;
                        img{
                            position: relative;
                            left:30px;
                            top:16px;
                        }
                    }
                    .right{
                        width: 330px;
                        float: right;
                        padding-right: 25px;
                        .title{
                            line-height: 105px;
                            font-weight: bolder;
                            font-size: 18px;
                            color:#333333;
                        }
                        .button{
                            background: #3D90F6;
                            border-radius: 5px;
                            text-align: center;
                            letter-spacing: 3px;
                            line-height: 30px;
                            color:#fff;
                            font-size: 14px;
                            width: 76px;
                            position: absolute;
                            right: 28px;
                            bottom: 36px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
