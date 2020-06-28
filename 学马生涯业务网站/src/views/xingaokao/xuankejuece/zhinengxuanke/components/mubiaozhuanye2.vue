<template>
    <!-- 目标专业 -->
    <div class="mubiaozhuanye_360">
        <StepBar step="1"></StepBar>
        <div class="inner inner_content"  v-show="!isShowMajorDetail">
            <!-- 设置目标专业 -->
            <div class="set_target_major">
                <div class="inner">
                    <div :class="['target_major_box', isSlide ? 'slide': 'unSlide']">
                        <div class="target_major">
                            <p class="title_box">
                                <span class="btn_box"  @click="isSlide = !isSlide">
                                    <img src="/imgs/xingaokao/xuankejuece/common/slide.png" alt="">
                                    <template v-if="isSlide">收起</template>
                                    <template v-else>弹出</template>
                                </span>
                                <span class="title">添加目标专业</span>
                                <span class="tuijian">(0~20个)</span>:
                            </p>
                            <div class="major_box">
                                <p class="major" v-for="(item, index) in mubiaozhuanye_2" :key="index">
                                    <span @click="goJobBank(item.subjectId)">{{item.subjectName}}</span>
                                    <span class="btn_remove" @click="removeMajor(item.subjectId)"></span>
                                </p>
                            </div>
                            <div class="add_major_tips" v-show="isShowAddMajorTips"><img src="/imgs/xingaokao/xuankejuece/common/icon_tianjia1.png" alt=""></div>
                            <p class="had_addmajor_length">
                                已选<span>{{mubiaozhuanye_2.length}}</span>个
                            </p>
                        </div>
                    </div>    
                </div>   
            </div>
            <div class="step">
                <p class="step_detail"><span class="tishiyu">提示：</span>你还可以根据你的学科特长、个人兴趣、家人建议等因素，在以下专业库中补充添加目标专业，最多添加20个，若没有直接点击“下一步”。</p>
            </div>
            <div class="content" v-show="!isShowzhuanyeduibi">
                <div class="search_box">
                    <div class="search">
                        <input type="text" v-model="searchValue" placeholder="搜索你感兴趣的专业" @keyup.enter="query">
                        <span @click="query"></span>
                    </div>
                </div>
                <!-- 本科专业 -->
                <div class="content_major">
                    <!-- 专业大类 -->
                    <div class="left_majors_largeClass">
                        <div class="arrow"></div>
                        <div class="title">
                            本科专业
                        </div>
                        <!-- 13个大类 -->
                        <div class="majors_largeClass">
                            <el-radio-group v-model="leibie" size="30px" type="text" border>
                                <el-radio :label="item.value" v-for="(item, index) in discipline" :key="index" :max="1" id="leibie1">{{item.names}}</el-radio>
                            </el-radio-group>
                        </div>
                    </div>

                    <div class="right_majors">
                        <div class="largeClass_name" v-if="isShowLargeClass">
                            <span class='no1'>{{major[0].names}}</span><span class='no1'>{{'('+major[0].code+')'}}</span>
                            <p><span>{{cdata.length}}</span>个专业类,</p>
                            <p><span>{{subjectNumber}}</span>个本科专业</p>
                        </div>
            
                        <div class="major" v-for="(item, index) in cdata" :key="index">
                            <div class="zhuanyelei">
                                <span class="lei"> {{item.name}}</span>
                                <span class="daihao">{{'('+item.code+')'}}</span>
                            </div>
                
                            <div class="zhuanyeleiBox">
                                <div class="neirongBox"  v-for="(items, index) in item.list">
                                    <div class="add_major boxs" v-if="!mubiaozhuanye_2.some(
                                            function(value, index, arr) {        
                                                return value.subjectId == items.id
                                            })">
                                        <div class="checkBox" @click="addMajor(items.id, items.name)">
                                            <div class="check"></div>
                                        </div>
                                        <div class="name" @click="goJobBank(items.id)">{{items.name}}</div>
                                    </div>
                                    <div class="remove_major boxs" v-if="mubiaozhuanye_2.some(
                                            function(value, index, arr) {      
                                                return value.subjectId == items.id
                                            })">
                                        <!-- <div class="checkBox"  @click="removeMajor(items.id)">
                                            <div class="check"></div>
                                        </div> -->
                                        <div class="name" @click="goJobBank(items.id)">{{items.name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </div>
        <div class="ft_btns" v-show="!isShowMajorDetail">
            <div class="ft_btn go_pre" @click="$router.push('/zhinengxuanke/mubiaozhuanye')">上一步</div>
            <div class="ft_btn go_next" @click="goNext"  >下一步</div>
        </div>    
        <div class="zhuanye_xiangqing" v-show="isShowMajorDetail">
            <zhuanyexiangqing :majorId="majorId" ref="zhuanyexiangqing" v-on:go-back="isShowMajorDetail=false"></zhuanyexiangqing>
        </div>
        <div class="fixed_btn">
            <div class="inner_btn">
                <ul class='fixedBox'>
                    <li class="ft_btn go_pre" @click="$router.push('/zhinengxuanke/mubiaozhuanye')"  v-show="!isShowMajorDetail"><p>上一步</p></li>
                    <li class="ft_btn go_next" @click="goNext"  v-show="!isShowMajorDetail"><p>下一步</p></li>
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
.mubiaozhuanye_360 {
    padding-bottom: 70px;
    letter-spacing: 1.5px;
    background: #fff;
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
            // padding-bottom: 5px;
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
        // width: 1200px;
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
     // 提醒
    .tipsMark {
        position: fixed;
        padding: 0px 40px;
        padding-top: 50px;
        padding-bottom: 30px;
        width: 220px;
        height: 80px;
        left: 50%;
        top: 50%;
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
        background-color: #fff;
        padding: 40px 0px 20px 0px;
        .search_box {
            height: 44px;
            width: 1000px;
            margin: 0 auto;
            margin-bottom: 30px;
            position: relative;
            input {
                height: 42px;
                border: 1px solid #2c8ffc;
                border-radius: 4px;
                width: 980px;
                float: left;
                padding-left: 20px;
                font-size: 14px;
                line-height: 42px;
            }
            span {
                position: absolute;
                right: 0;
                top: 0;
                width: 66px;
                height: 44px;
                background: url(/imgs/xingaokao/xuankejuece/common/icon_sousuo.png) no-repeat center center;
                cursor: pointer;
            }
        }
        // 专业内容介绍，分类列表
        .content_major {
            background-color: #fff;
            overflow: hidden;
            // 左侧展示13个专业大类
            .left_majors_largeClass {
                float: left;
                background: linear-gradient(to bottom, #71bcff, #6897fd);
                position: relative;
                padding: 0px 20px;
                border-radius: 4px;
                width: 202px;
                .title {
                    height: 45px;
                    color: #fff;
                    font-size: 16px;
                    line-height: 45px;
                    font-weight: 600;
                    text-align: center;
                }
                // 专业大类
                .majors_largeClass {
                }
            }
            .right_majors {
                background-color: #fff;
                float: left;
                padding-left: 18px;
                width: 940px;
                min-height: 200px;
                .largeClass_name {
                    line-height: 40px;
                    height: 40px;
                    background-color: #f5f7f6;
                    padding-left: 20px;
                    padding-right: 20px;
                    font-size: 18px;
                    border-left: 2px solid #3492f9;
                    margin-bottom: 20px;
                    color: #333;
                    .no1 {
                        margin-right: 20px;
                        font-size: 17px;
                        font-weight: 600;
                    }
                    p {
                        float: right;
                        font-size: 14px;
                        margin-left: 12px;
                    }
                }

                .zhuanyelei {
                    height: 44px;
                    font-size: 16px;
                    line-height: 44px;
                    color: #333;
                    border-bottom: 1px solid #d9d9d9;
                    font-weight: 600;
                    margin-left: 15px;
                    .lei {
                        margin-right:15px;
                    }
                }
                .zhuanyeleiBox {
                    overflow: hidden;
                    padding-top: 18px;
                    padding-left: 15px;
                    .neirongBox {
                        width: 33.3%;
                        height: 20px;
                        font-size: 14px;
                        color: #666;
                        float: left;
                        // margin-right: 20px;
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
                                    left: 0px;
                                }
                            }
                            .name {
                                float: left;
                                height: 20px;
                                line-height: 20px;
                            }
                        }

                        .add_major {
                            .name {
                                color: #333333;
                                &:hover {
                                    color: #3492f9;
                                }
                            }
                            .checkBox {
                                background: url(/imgs/xingaokao/xuankejuece/common/icon_tianjia.png) no-repeat center center;
                                .check{
                                    
                                }
                            }
                        }
                        .remove_major {
                            .name {
                                color: #3492f9;
                            }
                            .checkBox {
                                background: url(/imgs/xingaokao/xuankejuece/common/icon_remove.png) no-repeat center center;
                                // .check{
                                //      background: url(/imgs/xingaokao/xuankejuece/360xuanke/icon_duihao.png) no-repeat center center;
                                //     // animation: duihao ease 1s 1 normal ;
                                // }
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
        width: 1200px;
        margin: 0 auto;
        position: relative;
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
<style type="text/css" lang='less'>
    .mubiaozhuanye_360 {
        .content {
            .content_major {
                .left_majors_largeClass {
                    .majors_largeClass {
                        .el-radio {
                            text-align: center;
                            margin-right: 0px;
                            width: 200px;
                            height: 36px;
                            margin-bottom: 10px;
                            border: 1px solid #fff;
                            border-radius: 3px;
                            .el-radio__label {
                                line-height: 36px;
                                text-align: center;
                                font-weight: 500;
                                font-size: 14px;
                                padding: 0px;
                                margin-left: 0px;
                                color: #fff;
                            }
                        }
                        .is-checked {
                            background-color: #fff;
                            border: 1px solid #fff;
                            .el-radio__label {
                                color: #2c8ffc !important;
                            }
                        }
                    }
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
            majorId: '',
            isShowMajorDetail: false,
            // 搜索
            searchValue: '',
            isShowLargeClass: true,

            // 当前选科进行状态
            // state: 1,
            // 获取到的推荐专业
            recommendedSpecialty:[
            ],
            // 目标专业
            mubiaozhuanye_1: JSON.parse(window.sessionStorage.getItem('mubiaozhuanye_1')),
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
            var arr = this.mubiaozhuanye_2;
            this.mubiaozhuanye_2 = arr.filter(function(item, index, arr) {
                return item.subjectId != idx;
            })
        },
        // 添加专业
        addMajor(value1, value2) {
            if(this.mubiaozhuanye_2.length == 20) {
                return;
            }
            var obj = {};
            obj.subjectId = value1;
            obj.subjectName = value2;
            obj.type = 2;
            this.mubiaozhuanye_2.push(obj);
            // console.log(obj);
        },
        dataUpdate() {
            var _this = this;
            // 本科、专科
            var type = '1';
            // var type = this.radio1;
            // 大类id
            var firstId = this.leibie;
            // 搜索的值
            // var name = this.name;
            var token = window.sessionStorage.getItem('ymtxToken');
            // console.log(token)
            // var pageNumber = this.pageNumber;
            // var pageSize = this.pageSize;
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/getSubjectCategoryList', {
                    // data
                    type: type,
                    firstId: firstId,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                    
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 存储专业信息
        goNext() {
            // if(this.mubiaozhuanye_2.length < 5) {
            //     this.isShowError = true;
            //     this.waring = '请添加5~20个目标专业';
            //     return;
            // }
            let arr1 = this.mubiaozhuanye_1;
            let arr2 = this.mubiaozhuanye_2;
            window.sessionStorage.setItem("mubiaozhuanye_2",JSON.stringify(this.mubiaozhuanye_2));
            let mubiaozhuanye = arr1.concat(arr2);
            window.scrollTo(0, 0);
            this.$router.push({  
                path: '/zhinengxuanke/xuekeyaoqiu',   
                name: 'xuekeyaoqiu',  
                params: {   
                   mubiaozhuanye: mubiaozhuanye
                } 
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
        // 查询搜索
        query() {
            this.isShowLargeClass = false;
            this.leibie = '';
            var _this = this;
            // 本科、专科
            var type = 1;
            // 大类id
            var name = this.searchValue;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/getSubjectCategoryList', {
                    // data
                    type: 1,
                    name: name
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                        _this.cdata = res.data.data;
                })
                .catch(function(error) {
                    console.log(error)
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
        mubiaozhuanye_2() {
            if(this.mubiaozhuanye_2.length) {
                this.isShowAddMajorTips = false;
            }else {
                this.isShowAddMajorTips = true;
            }
        },
        leibie() {
            if(this.leibie == '') {
                return;
            }
            this.isShowLargeClass = true;
            this.dataUpdate();
        },
        $route(to,from){
            // console.log(from)
            if(from.name == 'mubiaozhuanye') {
                this.mubiaozhuanye_1 = JSON.parse(window.sessionStorage.getItem('mubiaozhuanye_1'))
            }
        }
    },
    created() {
        // console.log(JSON.parse(window.sessionStorage.getItem('mubiaozhuanye_1')))
        // this.goMajor();
        this.dataUpdate();
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        if(window.sessionStorage.tuance=='3'){
            $('.set_target_major').css({top:'80px'})
        }else{
            $('.set_target_major').css({top:''})
        }
        window.onresize = this.getWindowWidth;
        this.getWindowWidth();
    }
    
}
</script>