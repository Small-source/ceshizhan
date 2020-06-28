<template>
    <div class="schoolWork">
        <div class="schoolWorkBox">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                学业信息
            </div>
            <ul class="list">
                <li @click="$router.push('/schoolWork/seniorOne')">
                    <img src="imgs/schoolWork/icon_gaoyi.png" alt="">
                </li>
                <li @click="$router.push('/schoolWork/seniorTwo')">
                    <img src="imgs/schoolWork/icon_gaoer.png" alt="">
                </li>
                <li @click="$router.push('/schoolWork/seniorThree')">
                    <img src="imgs/schoolWork/icon_gaosan.png" alt="">
                </li>
            </ul>
        </div>
        <div class="schoolWorkBox">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                学业水平考试
            </div>
            <ul class="list">
                <li @click="$router.push('/schoolWork/test')">
                    <img src="imgs/schoolWork/icon_xueyeshuipingkaoshi.png" alt="">
                </li>
            </ul>
        </div>
        <div class="schoolWorkBox">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                获奖信息
            </div>
            <ul class="list">
                <li @click="$router.push('/schoolWork/reward')">
                    <img src="imgs/schoolWork/icon_huojiangxinxi.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
    .schoolWork{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        border-radius: 5px;
        width: 100%;
        padding-left: 20px;
        .schoolWorkBox{
            width: 970px;
            background: #fff;
            padding: 0 18px;
            img{
                margin-right: 10px;
            }
            .title{
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                padding-top: 24px;
                letter-spacing: 2px;
                margin-bottom: 24px;
            }
            p{
                line-height: 62px;
                color:#333333;
            }
            .list{
                display: flex;
                justify-content: space-between;
                height: 154px;
                width: 100%;
                li{
                    img{
                        display: block;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
