<template>
    <div class="selfAssessment">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "selfAssessment"
    }
</script>
<style lang="less">
    .selfAssessment {
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        .reward{
            border-radius: 5px;
            width: 100%;
            padding-left: 20px;
            .rewardBox{
                width: 970px;
                background: #fff;
                padding: 0 18px 20px;
                img{
                    position: relative;
                    top:-3px;
                }
                .title{
                    font-size: 17px;
                    color: #348DF1;
                    font-weight: bolder;
                    padding-top: 24px;
                    letter-spacing: 2px;
                    margin-bottom: 20px;
                    text-indent: 0;
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
                .add{
                    overflow: hidden;
                    span{
                        float: right;
                        display: block;
                        width: 62px;
                        height: 26px;
                        border-radius: 3px;
                        text-align: center;
                        line-height: 26px;
                        background:#3A90F3;
                        color:#fff;
                        cursor: pointer;
                    }
                    margin-bottom: 16px;
                }
                .icon{
                    button,span{
                        padding: 0 !important;
                        cursor: pointer;
                        display: inline-block;
                        width: 34px;
                        height: 20px;
                        border:1px solid #EDEDED;
                        border-radius: 5px;
                        margin-right: 10px;
                        position: relative;
                        top:6px;
                        background-repeat: no-repeat;
                        background-position: center center;
                        &:first-child{
                            background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
                        }
                        &:last-child{
                            background-image:url("/imgs/schoolWork/icon_bianjihui.png") ;
                        }
                        &:hover{
                            &:first-child{
                                background-image:url("/imgs/schoolWork/icon_lajitongbai.png") ;
                                background-color:#FB4945 ;
                            }
                            &:last-child{
                                background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                                background-color: #3087E6;
                            }
                        }
                    }
                }
            }
            .myRewards{
                width: 930px;
                background: #fff;
                margin-top: 20px;
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
                table{
                    width: 100%;
                    thead{
                        tr{
                            background: #F3F4F8;
                            border-radius: 3px;
                        }
                        td{
                            font-size: 15px;
                            color:#656565;
                            line-height: 44px;
                            font-weight: bolder;
                            text-align: center;
                        }
                    }
                    tbody{
                        tr{
                            border-bottom: 1px dashed #E9E9E9;
                            td{
                                text-align: center;
                                line-height: 38px;
                                font-size: 12px;
                                max-width: 450px;
                            }
                            .show{
                                color:#469AFA !important;
                                cursor: pointer;
                            }
                        }
                        .showClose{
                            td{
                                color:#CACACA;
                            }
                        }
                    }
                }
                .pages{
                    margin: 40px auto;
                    text-align: center;
                }
                .noNotice {
                    text-align: center;
                    padding-top: 30px;
                    font-size: 16px;
                    color:#9e9e9e;
                }
            }
            .addRewards{
                background: #fff;
                width: 970px;
                height: 650px;
                position:absolute;
                left: 50%;
                top:50%;
                z-index: 20;
                margin-left: -485px;
                margin-top: -325px;
                .addTitle{
                    text-align: center;
                    height: 60px;
                    line-height: 60px;
                    color:#fff;
                    font-size:24px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    background: url('/imgs/schoolWork/bg_huojiang.png');
                }
                .addContent{
                    padding: 20px 50px 20px 0;
                    p{
                        line-height: 40px;
                        color:#333333;
                        font-size: 15px;
                        font-weight: bolder;
                        position: relative;
                        margin-top: 10px;
                        span{
                            font-size: 12px;
                            color:#666;
                            font-weight: normal;
                        }
                        i{
                            display: block;
                            position: absolute;
                            left: -12px;
                            top: 3px;
                            color:#F40000;
                        }
                    }
                    input{
                        width: 100%;
                        height: 38px;
                        border:1px solid #DEDEDE;
                        border-radius: 3px;
                        text-indent: 10px;
                    }
                    textarea{
                        width: 100%;
                        padding:10px;
                        height: 112px;
                    }
                }
                .operation{
                    width: 315px;
                    height: 42px;
                    margin: 18px auto;
                    display: flex;
                    justify-content: space-between;
                    li{
                        width: 112px;
                        height: 100%;
                        cursor: pointer;
                        line-height: 42px;
                        text-align: center;
                        background: #3C91F5;
                        font-size: 18px;
                        color: white;
                        border-radius: 5px;
                    }
                }
                .waring{
                    color: red;
                    position: absolute;
                    text-align: center;
                    width: 100%;
                    top:75px;
                }
            }
            .close{
                width: 17px;
                height: 17px;
                position: absolute;
                top:21px;
                right: 22px;
                cursor: pointer;
            }
            .showRewards{
                position: relative;
                width: 748px;
                height: 586px;
                padding: 190px 40px 40px;
                margin-left: -374px;
                margin-top:-293px ;
                background: url('/imgs/schoolWork/bg_huojiangxiangqing.png');
                .title{
                    text-align: center;
                    display: flex;
                    width: 100%;
                    background: #F3F4F8;
                    border-radius: 3px;
                    li{
                        width: 25%;
                        line-height: 50px;
                        color: #666;
                    }
                }
                .showContent{
                    width: 100%;
                    margin: 16px 0 30px;
                    display: flex;
                    justify-content: space-between;
                    li{
                        text-align: center;
                        width: 25%;
                        min-height: 35px;
                        border-right:1px dashed #DEDEDE;
                        color:#333333;
                        font-weight: bolder;
                        &:last-child{
                            border-right: none;
                        }
                    }
                }
                .head{
                    color:#333333;
                    font-size: 15px;
                    font-weight: bolder;
                }
                p{
                    width: 100%;
                    min-height: 190px;
                    margin-top: 10px;
                    color:#AFAFAF;
                    overflow-y: auto;
                    white-space:normal;
                    word-break:break-all;
                    word-wrap:break-word;
                }
                .close{
                    top:128px;
                    right: 24px;
                }
            }
        }
    }
</style>
