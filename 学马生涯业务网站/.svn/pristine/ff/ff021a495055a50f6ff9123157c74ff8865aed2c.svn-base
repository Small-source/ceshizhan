<template>
    <!-- 目标专业 -->
    <div class="mubiaozhuanye">
        <StepBar step="1"></StepBar>

        <div class="inner inner_content" v-show="!isShowMajorDetail">
            <!-- 设置目标专业 -->
            <div class="set_target_major">
                <div class="inner">
                    <div :class="['target_major_box', isSlide ? 'slide': 'unSlide']">
                        <div class="target_major target_major_top" >
                            <p class="title_box">
                                <span class="btn_box"  @click="isSlide = !isSlide">
                                    <img src="/imgs/xingaokao/xuankejuece/common/slide.png" alt="">
                                    <template v-if="isSlide">收起</template>
                                    <template v-else>弹出</template>
                                </span>
                                <span class="title">添加目标专业</span>
                                <span class="tuijian">(5~20个)</span>:
                            </p>
                            <div class="major_box">
                                <p class="major" v-for="(item, index) in mubiaozhuanye_1" :key="index">
                                    <span @click="goJobBank(item.subjectId)">{{item.subjectName}}</span>
                                    <span class="btn_remove" @click="removeMajor(item.subjectId)"></span>
                                </p>
                            </div>
                            <div class="add_major_tips" v-show="isShowAddMajorTips"><img src="/imgs/xingaokao/xuankejuece/common/icon_tianjia1.png" alt=""></div>
                            <p class="had_addmajor_length">
                                已选<span>{{mubiaozhuanye_1.length}}</span>个
                            </p>
                        </div>     
                    </div>    
                    <!-- <div class="btn_next go_next" @click="goNext" v-show="!isShowMajorDetail">
                        下一步
                    </div> -->
                </div>   
            </div>
            <!-- 错误弹窗提醒  -->
            <div class="errors" v-show="isShowError">
                <div class="inner">
                    <!-- 白色弹窗 -->
                    <div class="tanchuang">
                        <div class="title">{{waring}}</div>              
                        <div class="close" @click="isShowError=false"></div>
                        <div class="queding"  @click="isShowError=false"></div>
                    </div>
                </div>
            </div>
            <div class="tipsMark" v-if="isShowTips">
                <p>专业对比最多添加4个哦！</p>
                <p>请删除后继续添加</p>
            </div>
            <div class="step">
                <p class="step_detail"><span class="tishiyu">提示：</span>通过生涯测评，系统推荐<span>{{recommendedSpecialty.length}}</span>个适合专业，请你在以下推荐专业中添加5-20个专业为目标专业，添加完成后点击“下一步”。</p>
            </div>
            <div class="content">
                <!-- 通过测评推荐的专业 -->
                <div class="recommend_major">
                    <div class="recommend_content">
                        <div  class="neirongBox" v-for="(items, index) in recommendedSpecialty" :key="index">
                            <div class="add_major boxs"  v-if="!mubiaozhuanye_1.some(
                                    function(value, index, arr) {        
                                        return value.subjectId == items.id
                                    })">
                                <div class="checkBox" @click="addMajor(items.id, items.name)">
                                    <div class="check"></div>
                                </div>
                                <div class="name" @click="goJobBank(items.id)">{{items.name}}</div>
                                <div class="lei"><span>{{items.firstName}}</span>/<span>{{items.secondName}}</span></div>
                            </div>
                            <div class="remove_major boxs" v-if="mubiaozhuanye_1.some(
                                    function(value, index, arr) {      
                                        return value.subjectId == items.id
                                    })">
                                <!-- <div class="checkBox" @click="removeMajor(items.id)">
                                    <div class="check"></div>
                                </div> -->
                                <div class="name" @click="goJobBank(items.id)">{{items.name}}</div>
                                <div class="lei"><span>{{items.firstName}}</span>/<span>{{items.secondName}}</span></div>
                            </div>
                        </div>
                    </div>  
                </div> 
            </div>
        </div>
        <!-- 底部按钮 -->
        <div class="ft_btns" v-show="!isShowMajorDetail">
            <div class="ft_btn go_next" @click="goNext" >
                下一步
            </div>
        </div>
        <div class="zhuanye_xiangqing" v-show="isShowMajorDetail">
            <zhuanyexiangqing :majorId="majorId" ref="zhuanyexiangqing" v-on:go-back="isShowMajorDetail=false"></zhuanyexiangqing>
        </div>
        <div class="fixed_btn">
            <div class="inner_btn">
                <ul class='fixedBox'>
                    <li class="ft_btn go_next" @click="goNext" v-show="!isShowMajorDetail"><p>下一步</p></li>
                    <li class="go_top">
                        <div class="top_text" @click="goTop"><p><span>返回<br/>顶部</span></p></div>
                        <div class="img_box">
                            <img src="/imgs/xingaokao/xuankejuece/common/icon_gotop.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.mubiaozhuanye {
    padding-bottom: 70px;
    letter-spacing: 1.5px;
    background: #fff;
    min-height: 500px;
    .inner {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
        position: relative;
    }
    // 步骤标题 1.第一步：设置目标专业
    .step {
        height: 88px;
        background-color: #dcebff;
        padding:0px 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        .tishiyu {
            color: #fd0926;
        }
        .step_detail {
            float: left;
            font-size: 14px;
            color: #333;
            line-height: 20px;
            height: 16px;
            text-align: center;
            font-weight: 600;

        }
    }
    // 设置目标专业
    // 设置目标专业
    .set_target_major {
        position: absolute;
        left: 0;
        top:-100px;
        width: 100%;
        min-height: 70px;
        z-index: 10;
        .inner {
            position: relative;
        }
        .btn_next {
            width: 40px;
            height: 92px;
            text-align: center;
            font-size: 13px;
            color: #fff;
            cursor: pointer;
            position: absolute;
            top: 120px;
            right: -40px;
            background-color: #2d8ffc;
            border-radius: 3px;
            box-sizing: border-box;
            padding: 0px 10px;
            display: flex;
            align-items: center;
            &:active {
                box-shadow: none;
            }
        }
        .go_pre {
            top: 25px;
            right: -40px;
        }
        .go_next {
            top: 25px;
            right: -40px;
        }
        .target_major_box {
            background: #fff;
            box-shadow: 0 0 12px #dedede;
            margin-bottom: 20px;
            border-radius: 4px;
            .target_major {
                position: relative;
                .add_major_tips {
                    position: absolute;
                    left: 50%;
                    margin-left: -35px;
                    top: 65px;
                }
                .had_addmajor_length {
                    width: 120px;
                    height: 70px;
                    line-height: 70px;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    text-align: center;
                    span {
                        color: #2c8ffc;
                    }
                }
                .title_box {
                    text-align: center;
                    font-size: 16px;
                    color: #333;
                    height: 70px;
                    line-height: 70px;
                    position: relative;
                    .btn_box {
                        position: absolute;
                        border: 1px solid #dedede;
                        border-radius: 3px;
                        left: 30px;
                        top: 15px;
                        width: 70px;
                        height: 30px;
                        font-size: 14px;
                        line-height: 30px;
                        cursor: pointer;
                        img {
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            margin-right: 5px;
                        }
                    }
                    .tuijian {
                        color: #484cb0;
                        font-size: 14px;
                        font-weight: 600;
                    }
                    .title {
                        font-weight: 600;
                        color: #333;
                    }
                }
                .major_box {
                    overflow: hidden;
                    width: 1200px;
                    min-height: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 20px;
                    // justify-content: space-between;
                    .major {
                        box-sizing: border-box;
                        float: left;
                        width: 220px;
                        height: 38px;
                        line-height: 36px;
                        padding: 0px 10px;
                        border: 1px solid #2c8ffc;
                        color: #2c8ffc;
                        position: relative;
                        font-size: 13px;
                        margin-right: 15px;
                        margin-bottom: 18px;
                        span {
                            cursor: pointer;
                        }
                        .btn_remove {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            margin-top: -10px;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 16px;
                            text-align: center;
                            cursor: pointer;
                            background: url(/imgs/xingaokao/xuankejuece/common/icon_remove.png) no-repeat center center;
                        }
                    }
                }
            }
        }
    }
    .set_target_major_fixed {
        .set_target_major;
        margin-top: 0px;
        position: fixed;
        left: 0;
        top: 0px;
    }
    .inner_content {
        padding-top: 40px;
    }
    .slide {
        .btn_box {
            img {
                transform: rotate(180deg);
            }
        }
        overflow: hidden;
        max-height: 294px;
        transition: all .5s;
    }
    .unSlide {
        .btn_box {
            img {
                transition: all .5s;
            }
        }
        overflow: hidden;
        max-height: 70px; 
        transition: .5s;
    }
    .tishi {
        margin-bottom: 20px;
        padding: 0px 20px;
        height: 44px;
        line-height: 44px;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        font-size: 14px;
        color: #333333;
        border-radius: 2px;
        .tixing {
            color: red;
        }
        p {
            float: left;
            margin-right: 80px;
        }
        .no2 {
            line-height: 44px;
            span {
                float: left;
                height: 44px;

            }
        }
    }
    .zhuanyeduibi {
        padding: 16px;
        background-color: #fff;
        position: relative;
        .zhuanyeshuju {
            margin-top: 20px;
            margin-bottom: 20px;
            height: 30px;
            padding: 10px 0px;
            background-color: #f9f9f9;
            margin-bottom: 20px;
            span {
                display: inline-block;
                padding-left: 20px;
                font-size: 16px;
                color: #333333;
                float: left;
                height: 30px;
                line-height: 30px;

            }
            .shezhi {
                border-left: 4px solid #2d8ffc;
                font-weight: 500;
            }
        }
        .list {
            height: 766px;
            width: 1160px;
            overflow: hidden;
            .lis {
                width: 10000px;
            }
            .top-title {
                width:232px;
                text-align: center;
                color: #333;
                font-size: 14px;
                float: left;
                .no1 {
                    background-color: #2c8ffc;
                    color: #fff;
                    height: 46px;
                    line-height: 46px;
                    border-bottom: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                    span {
                        display: inline-block;
                        text-align: center;
                        width: 90px;
                        height: 26px;
                        font-size: 12px;
                        border: 1px solid #fff;
                        border-radius: 2px;
                        margin-top: 10px;
                        line-height: 26px;
                        cursor: pointer;
                    }
                }
                .no2 {
                    background-color: #93c4fb;
                    height: 46px;
                    line-height: 46px;
                    border-bottom: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                }
                .no3 {
                    background-color: #93c4fb;
                    height: 46px;
                    line-height: 46px;
                    border-bottom: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                }
                .no4 {
                    background-color: #93c4fb;
                    height: 144px;
                    line-height: 144px;
                    border-bottom: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                    overflow: hidden;
                    // white-space: pre;
                }
                .no5 {
                    background-color: #93c4fb;
                    height: 100px;
                    line-height: 100px;
                    border-bottom: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                    font-size: 14px;
                }
            }
            .neirongBox {
                float: left;
                .top-title;
                .no2, .no3, .no4, .no5 {
                    background-color: #fff;
                }
                .no4 {
                    font-size: 12px;
                    line-height: 21px;
                    text-align: left;
                    // text-overflow: ellipsis;
                    
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 7;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .no5 {
                    font-size: 12px;
                    line-height: 21px;
                    text-align: left;
                    span {
                        margin-right: 5px;
                    }
                }
            }
        }
        .goback {
            position: absolute;
            right: 0px;
            top: 45px;
            width: 60px;
            height: 32px;
            text-align: center;
            font-size: 16px;
            line-height: 32px;
            border-radius: 3px;
            color: #fff;
            background-color: #2c8ffc;
            cursor: pointer;
        }
    }
    // 错误弹窗
    .errors {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba(51,51,51,.25);
        z-index: 10000000000000;
        .inner {
            width: 1200px;
            margin: 0 auto;
            position: relative;
            padding-top: 0px;
        }
        .tanchuang {
            position: absolute;
            box-sizing: border-box;
            padding: 20px 50px;
            width: 306px;
            height: 251px;
            top: 200px;
            left: 50%;
            margin-left: -152px;
            background: url(/imgs/xingaokao/xuankejuece/360xuanke/bg_tanchuang.png) no-repeat center center;
            // z-index: 100000000000000000000000000000;
            .title {
                font-size: 18px;
                color: #333;
                text-align: center;
                padding-top: 100px;
                line-height: 30px;
                font-weight: 500;
            }
            .lis {
                width: 306px;
                overflow: hidden;
                line-height: 56px;
                text-align: center;
                display: flex;
                font-size: 16px;
                li {
                    flex: 1;
                    font-size: 16px;
                    line-height: 56px;
                }
                .active {
                    color: #156def;
                    border-bottom: 2px solid #156def;
                }
            }
            .close {
                width: 36px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                color: #333;
                position: absolute;
                border-radius: 18px;
                right: 2px;
                top: 46px;
                z-index: 1000;
                cursor: pointer;
            }
            .queding {
                .close;
                width: 80px;
                height: 34px;
                right: 112px;
                top: 188px;
                // background-color: red;
            }
        }
    }
     // 专业对比超过四条弹窗
    .tipsMark {
        position: fixed;
        padding: 0px 40px;
        padding-top: 50px;
        padding-bottom: 30px;
        // z-index: 1000;
        width: 220px;
        height: 80px;
        left: 50%;
        top: 50%;
        // right: 50%;
        margin-left: -130px;
        margin-top: -70px;
        background-color: rgba(51,51,51,.5);
        background: url(/imgs/xingaokao/xuankejuece/tips.png);
        font-size: 18px;
        color: #333 ;
        p {
            text-align: center;
            line-height: 40px;
        }
    }
    .content {
        // 通过测评推荐的专业
        .recommend_major {
            width: 1200px;
            overflow: hidden;
            padding: 20px 0px;
            background-color: #fff;
            margin-bottom: 20px;
            padding-bottom: 0px;
            .recommend_content {
                width: 1242px;
                overflow: hidden;
                .neirongBox {
                    .boxs {
                        padding: 16px 20px 16px 10px;
                        width: 340px;
                        height: 20px;
                        font-size: 14px;
                        color: #666;
                        float: left;
                        margin-right: 42px;
                        margin-bottom: 20px;  
                        border-radius: 4px;
                        height: 20px;
                        .checkBox {
                            float: left;
                            width: 20px;
                            height: 20px;
                            margin-right: 10px;
                            position: relative;
                            cursor: pointer;
                            .check {
                                position: absolute;
                                width: 20px;
                                height: 20px;
                                text-align: center;
                                line-height: 20px;
                                top: 0;
                                left: 0px;
                            }
                        }
                        .name {
                            float: left;
                            height: 20px;
                            line-height: 20px;
                            cursor: pointer;
                        }
                        .lei {
                            float: right;
                            padding: 0px 5px;
                            height: 20px;
                            line-height: 20px;
                            // background-color: #f5f7f6;
                            font-size: 12px;
                        }
                    }
                    .add_major {
                        border: 1px solid #d9d9d9;
                        .name {
                            color: #333;
                            &:hover {
                                color: #3492f9;
                            }
                        }
                        .checkBox {
                            background: url(/imgs/xingaokao/xuankejuece/common/icon_tianjia.png) no-repeat center center;
                            .check {
      
                            }
                        }
                        
                    }
                    .remove_major {
                        border: 1px solid #3492f9;
                        .name {
                            color: #3492f9;
                        }
                        .checkBox {
                             background: url(/imgs/xingaokao/xuankejuece/common/icon_remove.png) no-repeat center center;
                        }
                    }
                    @-webkit-keyframes duihao {
                        0% {
                            width: 0px;
                        }
                        100% {
                            width: 20px;
                        }
                    }
                    .no1 {
                        height: 16px;
                        line-height: 16px;
                        padding-bottom: 20px;
                        cursor: pointer;
                        &:hover {
                            color: #2d8ffc;
                        }
                        // margin-bottom: 20px;
                    }
                    .no2 {
                        height: 24px;
                        span {
                            float: left;
                            width: 60px;
                            height: 24px;
                            margin-right: 30px;
                            cursor: pointer;
                            font-size: 14px;
                            border: 1px solid #2d8ffc;
                            padding: 0px 6px;
                            border-radius: 2px;
                        }
                        .tianjiaDuibi {
                            color: #2d8ffc;
                        }
                        .removeDuibi {
                            color: #fff;
                            background-color: #2d8ffc;
                        }
                        .tianjiazhuanye {
                         
                            margin-right: 0px;
                            color: #2d8ffc;
                        }
                        .removeMajor {
                         
                            margin-right: 0px;
                            
                            color: #fff;
                            background-color: #2d8ffc;
                        }
                    }
                }
                .active {
                    border: 1px solid #3492f9;
                }
            }
        }
        // 专业内容介绍，分类列表
        .content_major {
            overflow: hidden;
            // 左侧展示13个专业大类
            .left_majors_largeClass {
                margin-right: 20px;
                padding: 0px 12px;
                width: 246px;
                background-color: #fff;
                float: left;
                .title {
                    font-size: 16px;
                    color: #3492f9;
                    border-bottom: 2px solid #3492f9;
                    text-align: center;
                    line-height: 50px;
                    font-weight: 500;

                }
                // 专业大类
                .majors_largeClass {
                    padding-top: 20px;

                }
            }
            .right_majors {
                padding: 20px;
                width: 870px;
                background-color: #fff;
                float: left;
                min-height: 656px;
                .largeClass_name {
                    line-height: 40px;
                    height: 40px;
                    background-color: #f5f7f6;
                    padding-left: 20px;
                    padding-right: 20px;
                    font-size: 18px;
                    .no1 {
                        margin-right: 20px;
                    }
                    p {
                        float: right;
                        font-size: 18px;
                        color: #333;
                        margin-left: 12px;
                    }
                }

                .zhuanyelei {
                    height: 44px;
                    font-size: 16px;
                    line-height: 44px;
                    color: #333;
                    border-bottom: 1px solid #d9d9d9;
                    .lei {
                        margin-right:15px;
                    }

                }
                .zhuanyeleiBox {
                    overflow: hidden;
                    padding-top: 18px;
                    .neirongBox {
                        height: 20px;
                        font-size: 14px;
                        color: #666;
                        float: left;
                        margin-right: 20px;
                        margin-bottom: 20px;  
                        .boxs {
                            cursor: pointer;
                            .checkBox {
                                float: left;
                                width: 20px;
                                height: 20px;
                                margin-right: 10px;
                                position: relative;
                                .check {
                                    position: absolute;
                                    width: 20px;
                                    height: 20px;
                                    text-align: center;
                                    line-height: 20px;
                                    top: 0;
                                    left: 4px;
                                }
                            }
                            .name {
                                float: left;
                                color: #3492f9;
                                height: 20px;
                                line-height: 20px;
                            }
                        }

                        .add_major {
                            .name {
                                color: #666;
                            }
                            .checkBox {
                                background: url(/imgs/xingaokao/xuankejuece/zhinengxuanke/btn/btn_icon_unselect.png) no-repeat;
                                .check{
                                    
                                }
                            }
                        }
                        .remove_major {
                            .name {
                                color: #333;
                            }
                            .checkBox {
                                background: url(/imgs/xingaokao/xuankejuece/zhinengxuanke/btn/btn_icon_select.png) no-repeat;
                                .check{
                                    background: url(/imgs/xingaokao/xuankejuece/zhinengxuanke/btn/btn_icon_right.png);
                                    animation: duihao ease 1s 1 normal ;
                                }
                            }
                        }
                        @-webkit-keyframes duihao {
                            0% {
                                width: 0px;
                            }
                            100% {
                                width: 20px;
                            }
                        }
                        .no1 {
                            height: 16px;
                            line-height: 16px;
                            padding-bottom: 20px;
                            cursor: pointer;
                            &:hover {
                                color: #2d8ffc;
                            }
                            // margin-bottom: 20px;
                        }
                        .no2 {
                            height: 24px;
                            span {
                                float: left;
                                width: 60px;
                                height: 24px;
                                margin-right: 30px;
                                cursor: pointer;
                                font-size: 14px;
                                border: 1px solid #2d8ffc;
                                padding: 0px 6px;
                                border-radius: 2px;


                                
                            }
                            .tianjiaDuibi {
                                // background: url(/imgs/xingaokao/xuankejuece/dianjihou.png) no-repeat center center;
                                // background-size: 24px 24px;
                                color: #2d8ffc;

                            }
                            .removeDuibi {
                               
                                color: #fff;
                                background-color: #2d8ffc;
                                // border: 1px solid #666;
                            }
                            .tianjiazhuanye {
                             
                                margin-right: 0px;
                                color: #2d8ffc;
                            }
                            .removeMajor {
                             
                                margin-right: 0px;
                                
                                color: #fff;
                                background-color: #2d8ffc;

                            }
                        }
                    }
                }
            }
        }
        .professionalContrast {
            position: fixed;
            bottom: 30px;
            right: 0px;
            width: 185px;
            padding: 10px 20px 0px 20px;
            border: 1px solid #e7e4e4;
            border-radius: 3px;
            background-color: #fff;
            .titles {
                line-height: 36px;
                height: 36px;
                font-size: 16px;
                color: #333;
                font-weight: 500;
            }
            p {
                line-height: 34px;
                border-bottom: 1px dashed #e7e4e4;
                position: relative;
                span {
                    // display: inline-block;
                    position: absolute;
                    right: 0;
                    top: 7px;
                    text-align: center;
                    line-height: 16px;
                    float: left;
                    width: 18px;
                    height: 18px;
                    cursor: pointer;
                    font-size: 16px;
                    color: #e7e4e4;
                    border: 1px solid #e7e4e4;
                    border-radius: 50%;
                    float: right;
                }
            }
            .contrast {
                padding: 24px 0px;
                text-align:center;
                button {
                    border-radius: 2px;
                    width: 60px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 24px;
                    color: #fff;
                    border: none;
                    background-color: #2c8ffc;
                    font-size: 14px;
                    cursor: pointer;
                }

            }
        }
    } 
    .zhuanye_xiangqing {
        padding-top: 3px;
    } 
    .ft_btns {
        padding: 30px 0px;
        height: 40px;
        position: relative;
        width: 1200px;
        margin: 0 auto;
        .ft_btn {
            width: 142px;
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
    }
    .fixed_btn {
        position: fixed;
        width: 100%;
        bottom: 25%;
        z-index: 1;
        .inner_btn {
            position: relative;
            width: 1200px;
            margin: 0 auto;
        }
        ul {
            position: absolute;
            bottom: 0px;
            right: -90px;
            border: 1px solid #eaebec;
            border-radius: 3px;
            overflow: hidden;
            li {
                box-sizing: border-box;
                height: 60px;
                width: 60px;
                line-height: 60px;
                text-align: center;
                cursor: pointer;
                font-size: 14px;
                background-color: #fff;
            }
            .ft_btn {
                padding: 0px 5px;
                color: #2c8ffc;
                p {
                    border-bottom: 1px solid #eaebec;
                }
                &:hover {
                    color: #fff;
                    background-color: #2c8ffc;
                    p {
                        border: none;
                    }   
                }
            }
            .go_top {
                p {
                    line-height: 22px;
                }
                div {
                    height: 60px;
                    line-height: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .top_text {
                    display: none;
                }
                &:hover {
                    .img_box {
                        display: none;
                    }
                    .top_text {
                        display: block;
                        display: flex;
                        background-color: #2c8ffc;
                        color: #fff;
                    }
                }
            }
        }
    } 
}
</style>
<style>
    .mubiaozhuanye .contents .leibie .el-radio .el-radio__label{
        font-size: 14px;
        color: #333;
        margin-right: 0px;
        border-radius: 2px;
    }
    .mubiaozhuanye .contents .leibie .is-checked .el-radio__label{
        font-size: 14px;
        line-height: 24px;
        height: 24px;
        background-color: #2c8ffc !important;
    }
</style>
<style type="text/css" lang='less'>
    .mubiaozhuanye {
        .content {
            .content_major {
                .el-radio {
                    margin-right: 0px;
                    background-color: #f5f7f6;
                    width: 246px;
                    height: 38px;
                    border-radius: 19px;
                    margin-bottom: 10px;
                    .el-radio__label {
                        line-height: 38px;
                        text-align: left;
                        font-weight: 500;
                        font-size: 14px;
                        float: left;
                        height: 38px;
                        padding: 0px;
                        margin-left: 25px;
                    }
                }
                .is-checked {
                    background-color: #3492f9;
                    border: 0px solid #fff;
                }
            }
        }
    }
</style>
<script>
// 升学规划（自招学校库）
import zhuanyexiangqing from './zhuanyexiangqing.vue';
import StepBar from '../common/stepBar.vue';
export default {
    components: { zhuanyexiangqing, StepBar },
    props: [ 'step' ],
    data() {
        return {
            isSlide: true,
            // 是否显示添加目标专业的加号提示
            isShowAddMajorTips: true,
            from_name: 0,
            // 专业详情
            isShowMajorDetail: false,
            majorId: '',
           

            // 当前选科进行状态
            // state: 1,
            // 获取到的推荐专业
            recommendedSpecialty:[
                // {id: 3, first_id: 1, second_id: 2, first_name: "哲学", second_name: "哲学类", type: 1, name: "哲学逻辑学逻辑学逻辑学逻辑学逻辑学"},
                // {id: 4, first_id: 1, second_id: 2, first_name: "哲学", second_name: "哲学类", type: 1, name: "逻辑学逻辑学逻辑学逻辑学逻辑学逻辑学"},
                // {id: 5, first_id: 1, second_id: 2, first_name: "哲学", second_name: "哲学类", type: 1, name: "宗教学逻辑学逻辑学逻辑学逻辑学逻辑学"},
                // {id: 6, first_id: 1, second_id: 2, first_name: "哲学", second_name: "哲学类", type: 1, name: "伦理学逻辑学逻辑学逻辑学逻辑学"},
                // {id: 8, first_id: 7, second_id: null, first_name: "经济学", second_name: null, type: 1, name: "经济学类逻辑学逻辑学逻辑学逻辑学逻辑学"},
                // {id: 16, first_id: 7, second_id: null, first_name: "经济学", second_name: null, type: 1, name: "财政学类"},
                // {id: 19, first_id: 7, second_id: null, first_name: "经济学", second_name: null, type: 1, name: "金融学类"},
                // {id: 30, first_id: 7, second_id: null, first_name: "经济学", second_name: null, type: 1, name: "经济与贸易类"}
            ],
            // 目标专业
            mubiaozhuanye_1: [
                
            ],
            mubiaozhuanye_2: [],
            // 加入专业对比小窗口
            professionalContrastData: [],
            // 是否展示专业对比页面
            isShowzhuanyeduibi: false,
            // 获取到的专业对比数据
            zhuanyeduibiData: [],
            // 专业对比数据中的相关职业
            page: '',
            leibie: '1',
            cdata: [],
            // 是否显示错误信息弹窗
            isShowError: false,
            // 错误提示
            waring: '',
             // 本科学科门类
            discipline: [
                { names: '哲学', value: '1', code: '01' },
                { names: '经济学', value: '7', code: '02' },
                { names: '法学', value: '33', code: '03' },
                { names: '教育学', value: '77', code: '04' },
                { names: '文学', value: '100', code: '05' },
                { names: '历史学', value: '206', code: '06' },
                
                { names: '理学', value: '215', code: '07' },
                { names: '工学', value: '267', code: '08' },
                { names: '农学', value: '495', code: '09' },
                { names: '医学', value: '531', code: '10' },
                { names: '管理学', value: '599', code: '12' },
                { names: '艺术学', value: '662', code: '13' },
                { names: '军事学', value: '1598', code: '11' },
            ],
            isShowTips: false,
            tuance:false,
            number:0,
            flag:true
        }
    },
    computed: {
        major() {
            var arr = this.discipline.filter((item)=> {
                return item.value == this.leibie;
            })
            return arr;
        },
        subjectNumber() {
            var number = 0;
            this.cdata.forEach((item, index) => {
                item.list&&item.list.forEach((item, index) => {
                    number ++;
                })
            })
            return number;
        }
    },
    methods: {
        // 移除专业
        removeMajor(idx) {
            var arr = this.mubiaozhuanye_1;
            this.mubiaozhuanye_1 = arr.filter(function(item, index, arr) {
                return item.subjectId != idx;
            })
        },
        // 添加专业
        addMajor(value1, value2) {
            if(this.mubiaozhuanye_1.length == 20) {
                return;
            }
            var obj = {};
            obj.subjectId = value1;
            obj.subjectName = value2;
            obj.type = 1;
            this.mubiaozhuanye_1.push(obj);
            // console.log(obj);
        },

        // 存储专业信息
        goNext() {
            
            if(this.mubiaozhuanye_1.length < 5) {
                this.isShowError = true;
                this.waring = '请添加5~20个目标专业';
                return;
            }
            let mubiaozhuanye_1 = JSON.stringify(this.mubiaozhuanye_1);
            window.sessionStorage.setItem('mubiaozhuanye_1', mubiaozhuanye_1);
            window.scrollTo(0, 0);
            this.$router.push({  
                path: '/zhinengxuanke/mubiaozhuanye2',   
                name: 'mubiaozhuanye2',  
            }) 
        },
        
        // 获取测评完成后返回回来的目标专业
        goMajor() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var subject = this.professionalContrastData;
            // console.log(data)
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/chooseSubject/getRecommendedMajor', {
                    // data
                    type: 1,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                       _this.recommendedSpecialty = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    // alert('请检查网络')
                })
        },
        goJobBank(id) {
            // this.majorId = id;
            // window.scroll(0,0);
            // this.isShowMajorDetail = true;
            window.scrollTo(0, 0);
            // this.majorId = id;
            // this.isShowMajorDetail = true;
            var id = id;
            let {href}=this.$router.resolve({
                path: '/zhuanyexiangqing',
                name: 'zhuanyexiangqing',
                query: {
                    id: id,
                    type: 1,
                    from: 'zhuanyeku'
                }
            })
            window.open(href, '_blank');
        },
        isActives() {
            let bol = this.mubiaozhuanye_1.some(function(value, index, arr) {        
                    return value.subjectId == items.id
            })
        },
        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let set_target_major = $(".set_target_major");
            let set_target_major_fixed = $(".set_target_major_fixed");
            if(scrollTop > 275) {
                set_target_major.attr("class","set_target_major_fixed");
            }else {
                console.log()
                set_target_major_fixed.attr("class","set_target_major");
            }
        },
        goTop() {
            window.scroll(0,0);
        },
        getWindowWidth() {
            let width=$(window).width();
            if(width<=1380){
                $('.fixedBox').css({position:'fixed',bottom:'25%',right:0})
            }else{
               $('.fixedBox').css({position:'absolute',right:'-90px'})
            }
        }

    },
    watch: {
        mubiaozhuanye_1() {
            if(this.mubiaozhuanye_1.length) {
                this.isShowAddMajorTips = false;
            }else {
                this.isShowAddMajorTips = true;
            }
        },
    },
    created() {
        this.goMajor();
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.from_name ++;
        if(window.sessionStorage.tuance=='3'){
            this.tuance=true
        }
        window.onresize = this.getWindowWidth;
        this.getWindowWidth();

        
    },
    activated() {
    },
}
</script>