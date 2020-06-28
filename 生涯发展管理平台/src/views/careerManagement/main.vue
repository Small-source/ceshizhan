<template>
    <div class="careerManagement">
        <div class="careerManagementBox">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    目标设定
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
                    目标分解
                </div>
            </div>
            <ul class="electiveBox" style="height: 130px">
                <li v-for="(item,index) in fenjie">
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
                    行动计划
                </div>
            </div>
            <ul class="electiveBox" style="height: 130px">
                <li v-for="(item,index) in jihua">
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
                    学业规划报告
                </div>
            </div>
            <ul class="electiveBox" style="height: 130px">
                <li v-for="(item,index) in baogao">
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
                    学业规划
                </div>
            </div>
            <ul class="electiveBox" >
                <li v-for="(item,index) in guihua">
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
                ceping:[
                    {
                        src:"/imgs/careerManagement/icon_zhiyedingwei.png",
                        title:"职业定位",
                        button:"查看",
                        link:"/careerManagement/careerAnchor"
                    },
                    {
                        src:"/imgs/careerManagement/icon_yuanxiaodingwei.png",
                        title:"院校定位",
                        button:"查看",
                        link:"/careerManagement/university"
                    },
                    {
                        src:"/imgs/careerManagement/icon_zhuanyedingwei.png",
                        title:"专业定位",
                        button:"查看",
                        link:"/careerManagement/major"
                    },
                    {
                        src:"/imgs/careerManagement/icon_wodemubiao.png",
                        title:"我的目标",
                        button:"查看",
                        link:"/careerManagement/goal"
                    },
                ],
                fenjie:[
                    {
                        src:"/imgs/careerManagement/icon-mubiaofenjie.png",
                        title:"目标分解",
                        button:"查看",
                        link:"/careerManagement/decompose"
                    },
                ],
                jihua:[
                    {
                        src:"/imgs/careerManagement/icon_xingdongjihua.png",
                        title:"行动计划",
                        button:"查看",
                        link:"/careerManagement/plan"
                    }
                ],
                baogao:[
                    {
                        src:"/imgs/careerManagement/icon_shengyaguihuabaogao.png",
                        title:"学业规划报告",
                        button:"查看",
                        link:"/careerManagement/academicPlanningReport"
                    }
                ],
                guihua:[
                    {
                        src:"/imgs/careerManagement/icon_zhenduan.png",
                        title:"诊断",
                        button:"查看",
                        link:"/careerManagement/diagnosis"
                    },
                    {
                        src:"/imgs/careerManagement/icon_guihua.png",
                        title:"规划",
                        button:"查看",
                        link:"/careerManagement/planning"
                    },
                    {
                        src:"/imgs/careerManagement/icon_fudao.png",
                        title:"辅导",
                        button:"查看",
                        link:"/careerManagement/counseling"
                    },
                    {
                        src:"/imgs/careerManagement/icon_xueyeguihuabaogao.png",
                        title:"成长档案",
                        button:"查看",
                        link:"/careerManagement/growthArchiveEntry"
                    },
                ],
                careerMajor:[],
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
