<template>
    <div class="pdf">
        <ul class="head">
        </ul>
    </div>
</template>

<script>
    export default {
        name: "pdf"
    }
</script>

<style scoped lang="less">
    .pdf{
        *{
            letter-spacing: 1.5px;
        }
        padding-left: 20px;
        .parts {
            background: #fff;
            padding: 0 16px;
            padding-bottom: 10px;
            position: relative;
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
                }
                span {
                    float: right;
                    display: block;
                    width: 62px;
                    height: 26px;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 26px;
                    background: #3A90F3;
                    position: relative;
                    top: -20px;
                    color: #fff;
                    cursor: pointer;
                }
            }
            & > p {
                line-height: 60px;
                color: #333;
                font-size: 16px;
                font-weight: bolder;
            }
            .add {
                width: 62px;
                height: 26px;
                border-radius: 3px;
                text-align: center;
                line-height: 26px;
                background: #3A90F3;
                color: #fff;
                cursor: pointer;
                margin-left: 40px;
                margin-bottom: 18px;
                position: absolute;
                right: 24px;
                top: 26px;
            }
            .list{
                overflow: hidden;
                border-bottom:1px solid #E3E4E4;
                padding-bottom: 30px;
                margin-top: 12px;
            }
            .list>li{
                float: left;
            }
            .listAdd{
                width: 60px;
                height: 38px;
                border-radius: 5px;
                background: #3C91F4;
                color:#fff;
                text-align: center;
                line-height: 38px;
                cursor: pointer;
            }
        }
        .noneContent{
            margin:0 auto;
            padding:0;
            width: 126px;
            height:120px;
            background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
        }
        .icon {
            display: inline-block;
            width: 34px;
            height: 20px;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
            float: right;
            top: 16px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("/imgs/schoolWork/icon_bianjihui.png");
            &:hover {
                background-image: url("/imgs/schoolWork/icon_bianjibai.png");
                background-color:  #3087E6;
            }
        }
        .icon2 {
            background-image: url("/imgs/schoolWork/icon_lajitonghui.png");
            &:hover {
                background-image: url("/imgs/schoolWork/icon_lajitongbai.png");
                background-color: #FB4945;
            }
        }
    }
</style>
