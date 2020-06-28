<template>
    <div class="xuekeyaoqiu">
        <StepBar step="2"></StepBar>
        <!-- 上一步下一步 -->
      <!--   <div class="set_target_major">
            <div class="inner">
                <div @click="goNext" :class="isShowTurning ? 'btn_next':'unNext'">下一步</div>
                <div class="btn_next go_pre" @click="$router.push('/majorSelectedSubjects/mubiaozhuanye')">上一步</div>  
            </div>   
        </div> -->
        <div class="inner">
            <div class="content">
                <div class="step">
                    <p class="step_detail"><span class="tishiyu">提示：</span>“+”表示需要同时满足，“/”表示满足其中一科。</p>
                </div>
                <div class="content_box" v-if="cdata">
                    <div class="neirongBox" v-for="(item, index) in cdata.data" :key="index">
                        <p class="professionTitle">
                            {{item.name}}
                        </p>
                        <p class="detail_num">科目要求及可报考院校数<span class="num" @click="goUniversity(item.id,'','', item.name)">{{'(共' + item.total + '所)'}}</span></p>
                        <div class="xiangqing">
                            <ul class="lis" v-if="item.total > 0">
                                <li v-for="(childItem, index) in item.arr" :key="index" class="lis_box">
                                    <div v-if="childItem.firstCourseRequire" class="no2">
                                        <p class="names_first"><span class="first_check">首选:</span>{{childItem.firstCourseRequire}}</p>
                                        <p class="names_second"><span class="second_check">再选:</span>{{childItem.secondCourseRequire}}</p>
                                        <p class="num" @click="goUniversity(item.id, childItem.firstCourseRequire, childItem.secondCourseRequire, item.name)"><span>(</span><span class="num_border">{{childItem.num}}</span><span>)</span></p>
                                    </div>
                                    <div v-else class="no0">
                                        <p class="names">{{childItem.chooseCourseRequire}}</p>
                                        <p class="num0" @click="goUniversity(item.id, childItem.chooseCourseRequire, '',  item.name)">
                                            <span>(</span><span class="num_border">{{childItem.num}}</span><span>)</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <ul class="lis" v-if="item.total == 0">
                                <li>
                                    <span>无</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
                <div class="tongji" v-if="cdata">
                    <p class="tongji_title">目标专业选考科目要求统计</p>
                    <ul>
                        <li class="lis_title">
                            <p>科目组合</p>
                            <p>可报院校数量</p>
                            <p>可报院校占比</p>
                        </li>
                        <li v-for="(item, index) in cdata.chooseNum.data" :key="index">
                            <div class="main">
                                <p>
                                    <span v-if="item.chooseCourseRequire">{{item.chooseCourseRequire}}</span>
                                    <span v-if="item.firstCourseRequire">首选：{{item.firstCourseRequire}}</span>
                                    <span v-if="item.secondCourseRequire">再选：{{item.secondCourseRequire}}</span>
                                </p>
                                <p class="main_num" @click="goShowDetail(index)"><span>{{item.num}}</span><span :class="detailArr.some((item) => {
                                return item == index;
                            }) ? 'num_active' : 'num_unactive'"></span></p>
                                <p>{{(item.num/cdata.chooseNum.total*100).toFixed(2)}}%</p>
                            </div>   
                            <div class="detail" :class="detailArr.some((item) => {
                                return item == index;
                            }) ? 'detail_active' : 'detail_unactive'">
                                <div class="box" v-for="(subject, index) in item.subject" :key="index">
                                    <p>{{subject.subject}}</p>
                                    <p>{{'(' + subject.num + ')'}}</p>
                                </div>    
                            </div>
                        </li>
                    </ul>
                </div>  
                <div class="readProtocol" v-if="cdata">
                    <div class="ProtocolTitle">
                        请仔细阅读以下协议
                    </div>
                    <div class="neirongBox1">
                        <div class="details">
                           <p class="detail_top">你的选考科目必须满足目标专业的科目要求才能进行报考，请你认真分析以上目标专业的选考科目要求。</p>
                           <p>若能够确定<span>1～2</span>门科目，则勾选<span>“确认”</span>，选定该科目；若未能确定任何1科，则勾选<span>“跳过”</span>，进入下一步。</p>
                        </div>
                        <div class="isAgree">
                            <div :class="isShowjumpOver ? 'jumpOver' : 'unjumpOver' " @click="jumpOver">
                                <span class="box"></span>
                                <span class="names">跳过</span>
                            </div>
                            <div :class="isShowAgree ? 'agree' : 'unAgree'" @click="agree">
                                <span class="box"></span>
                                <span class="names">确认</span>
                                
                            </div>
                        </div>
                        <div class="showAgreeBoxs" v-show="isShowAgree">
                            <div class="checkBoxs"  v-if="provinceCode =='1'">
                                <el-checkbox-group 
                                    v-model="subjectSetting"
                                    :max="2">
                                    <el-checkbox v-for="(item, index) in subjects1" :key="index" :label="item.name"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <div class="checkBoxs" v-if="provinceCode =='2'">
                                <el-checkbox-group 
                                    v-model="subjectSetting"
                                    :max="2">
                                    <el-checkbox v-for="(item, index) in subjects2" :key="index" :label="item.name"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <div class="father" v-if="provinceCode =='3'">
                                <div class="checkBoxs">
                                    <p>首选科目<span class="tishi">（首选1科或不选）</span></p>
                                    <div class="group_box">
                                        <el-checkbox-group 
                                            v-model="subjectSetting1"
                                            :max="firstChoiceMax">
                                            <el-checkbox v-for="(item, index) in subjects3a" :key="index" :label="item.name"></el-checkbox>
                                        </el-checkbox-group>
                                    </div>    
                                </div>
                                <div class="checkBoxs" >
                                    <p>再选科目<span class="tishi"><template v-if="subjectSetting1.length">（可选0-1科）</template><template v-else>（可选0-2科）</template></span></p>
                                    <div class="group_box">
                                        <el-checkbox-group 
                                            v-model="subjectSetting"
                                            :max="secondChoiceMax">
                                            <el-checkbox v-for="(item, index) in subjects3b" :key="index" :label="item.name"></el-checkbox>
                                        </el-checkbox-group>
                                    </div>    
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <!-- 底部按钮 -->
                <div class="ft_btns" v-if="cdata">
                    <div class="ft_btn go_pre" @click="$router.push('/elective/majorSelectedSubjects/mubiaozhuanye')">上一步</div>
                    <div @click="goNext" :class="isShowTurning ? 'go_next':'unNext'">
                        下一步
                    </div>
                </div>
            </div>
        </div>
        <!-- 提醒 -->
        <div class="tixing" v-if="isShowTixing">
            <div class="tanchuang">
                <p class="title">
                    是否确定目标学科组合？
                </p>
                <p class="jieshi">
                    一经确认，将跳过决策平衡单设置，保存学科组合
                </p>
                <div class="button">
                    <div class="determine" @click="goDetermine()"></div>
                    <div class="cancel" @click="isShowTixing = false"></div>
                    <div class="close" @click="isShowTixing = false"></div>
                </div>
            </div>
        </div>
        <!-- 错误弹窗提醒  -->
        <div class="errors"v-if="isShowTixing2">
            <div class="inner">
                <!-- 白色弹窗 -->
                <div class="tanchuang">
                    <div class="title">
                        <p>请选择至少一门学科后</p>
                        <p>再次点击下一步</p>
                    </div>     
                    <div class="close" @click="isShowError=false"></div>
                    <div class="queding"  @click="isShowError=false"></div>
                </div>
            </div>
        </div>
         <div class="errors" v-if="isShowTixing3">
            <div class="tanchuang">
                <div class="title">
                    {{tixing3}}
                </div>
                 <div class="jieshi">
                    不可重复设置
                </div>
            </div>
        </div>
        <div class="loading"  v-show="!isShowLoading">
            <Loading></Loading>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuekeyaoqiu {
    padding-bottom: 70px;
    letter-spacing: 1.5px;
    background-color: #fff;
    min-height: 800px;
    // 设置目标专业
    .set_target_major {
        width: 100%;
        background: #f5f3f8;
        z-index: 10;
        margin-bottom: 20px;
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
            &:active {
                box-shadow: none;
            }
        }
        .unNext {
            .btn_next;
            background-color: #dedede;
            box-shadow: none;
        }
        .go_pre {
            top: 20px;
            right: -60px;
        }
        .go_next {
            top: 20px;
            right: -60px;
        }
    }
    .inner {
        width: 940px;
        margin: 0 auto;
    }
    .content {
        // 步骤标题 第二步：查看目标专业学科要求
        .step {
            border-radius: 4px;
            margin-top: -100px;
            height: 150px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 15px #edeeee;
            position: relative;
            z-index: 1;
            .tishiyu {
                color: #fd0926;
            }
            .step_detail {
                float: left;
                font-size: 16px;
                color: #333;
                line-height: 20px;
                height: 16px;
                text-align: center;
                font-weight: 600;
            }
        }
        .content_box {
            padding: 0px 0px;
            background-color: #fff;
            padding-bottom: 30px;
             // 专业
            .neirongBox {
                padding: 20px 0px;
                border-bottom: 1px dashed #dedede;
                letter-spacing: 1px;
                &:last-child {
                    border: none;
                }
                .professionTitle {
                    text-align: center;
                    font-size: 18px;
                    color: #333333;
                    height: 28px;
                    line-height: 28px;
                    margin-bottom: 4px;
                    font-weight: bold;
                }
                .detail_num {
                    text-align: center;
                    font-size: 16px;
                    color: #333333;
                    height: 28px;
                    line-height: 28px;
                    .num {
                        color: #3492f9;
                        cursor: pointer;
                    }
                }
                .xiangqing {
                    overflow: hidden;
                    .lis {
                        overflow: hidden;
                        width: 1254px;
                        li {
                            padding-top: 15px;
                            float: left;
                            margin-right: 38px;
                            height: 24px;
                            line-height: 24px;
                            font-size: 14px;
                            color: #333;
                            &:last-child {
                                .num {
                                    &:after {
                                        background-color: #fff;
                                    }
                                }
                            }
                            p {
                                float: left;
                            }
                            .names_first {
                                width: 140px;
                            }
                            .names_second {
                                margin-right: 12px;
                            }
                            .first_check {
                                color: #494fad;
                            }
                            .second_check {
                                color: #f8801e;
                            }
                            .num {
                                color: #3492f9;
                                cursor: pointer;
                                position: relative;         
                                .num_border {
                                    border-bottom: 1px solid #3492f9;
                                }
                            }
                            .no0 {
                                width: 169px;
                                height: 24px;
                                position: relative;
                                // &:last-child {
                                //     &:after {
                                //         background: none;
                                //     }
                                // }
                                .names {
                                    color: #333;
                                }
                                
                                &:after {
                                    content: '';
                                    position: absolute;
                                    width: 1px;
                                    height: 16px;
                                    right: 0;
                                    top: 4px;
                                    background-color: #ccc;
                                }

                                .num0 {
                                    color: #3492f9;
                                    cursor: pointer;
                                    padding-left: 8px;
                                    .num_border {
                                        border-bottom: 1px solid #3492f9;
                                    }
                                }
                            }
                        }
                        .lis_box {
                            position: relative;
                            &:last-child {
                                .no0 {
                                    &:after {
                                        background: none;
                                    }
                                }
                                .no2 {
                                      &:after {
                                        background: none;
                                    }
                                }
                            }
                            .no2 {
                                width: 362px;
                                &:after {
                                    content: '';
                                    position: absolute;
                                    width: 1px;
                                    height: 16px;
                                    right: 0;
                                    top: 19px;
                                    background-color: #ccc;
                                }
                            }
                        }
                    }    
                } 
            }
        }
        .tongji {
            border-top: 1px solid #f5f5f5;
            .tongji_title {
                height: 56px;
                text-align: center;
                font-size: 17px;
                font-weight: 600;
                color: #333;
                line-height: 56px;
            }
            ul {
                li {
                    border-bottom: 1px solid #f5f5f5;
                    .main {
                        display: flex;
                        height: 48px;
                        line-height: 48px;
                        color: #333;
                        font-size: 13px;
                        p {
                            flex: 1;
                            display: flex;
                            justify-content: center;
                            span {
                                display: inline-block;
                                min-width: 146px;
                            }
                        }
                        .main_num {
                            cursor: pointer;
                            span {
                                min-width: 30px;
                                text-align: right;
                                // margin-right: 15px;
                            }
                            .num_active {
                                width: 20px;
                                background: url(/imgs/elective/common/icon_shouqi.png) no-repeat center center;
                            }
                            .num_unactive {
                                width: 20px;
                                background: url(/imgs/elective/common/icon_xiala.png) no-repeat center center;
                            }
                        }
                       
                    }
                    .detail {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        padding: 0px 20px;
                        background-color: #fafafa;
                        .box {
                            width: 25%;
                            height: 34px;
                            p {
                                line-height: 34px;
                                float: left;
                                margin-right: 16px;
                                font-size: 14px;
                                &:last-child {
                                    margin-right: 0px;
                                }
                            }
                        }
                    }  
                    .detail_active {
                        display: flex;
                    } 
                    .detail_unactive {
                        display: none;
                    } 
                }
                .lis_title {
                    color: #fff;
                    font-size: 15px;
                    background:linear-gradient(to right,#71bcff,#6897fd);
                    text-align: center;
                    display: flex;
                    height: 48px;
                    line-height: 48px;
                    p {
                        flex: 1;
                    }
                }
            }
        }
        .readProtocol {
            margin-top: 20px;
            min-height: 198px;
            padding-bottom: 15px;
            // height: 360px;
            border: 1px dashed #3492f9;
            .ProtocolTitle {
                text-align: center;
                height: 52px;
                line-height: 52px;
                font-size: 20px;
                color: #333;
                font-weight: 600;
            }
            .neirongBox1 {
                .details {
                    font-size: 14px;
                    color: #333;
                    line-height: 24px;
                    font-weight: 600;  
                    padding-left: 100px;
                    .detail_top {
                        margin-bottom: 5px;
                    } 
                    span {
                        color: #f8a616;
                        display: inline-block;
                        white-space: none;
                    }
                }
                .isAgree {
                    padding-top: 20px;
                    overflow: hidden;
                    padding-left: 100px;
                    .unjumpOver {
                        overflow: hidden;
                        float: left;
                        width: 64px;
                        margin-right: 45px;
                        cursor: pointer;
                        font-size: 14px;
                        color: #333;
                        .box {
                            width: 18px;
                            height: 18px;
                            font-size: 14px;
                            color: #fff;
                            display: inline-block;
                            text-align: center;
                            line-height: 18px;
                            background-color: #fff;
                            background: url(/imgs/elective/common/icon_unchecked.png) no-repeat center center;
                        }
                        .names {
                            float: right;
                            line-height: 18px;
                        }
                    }
                    .jumpOver {
                        .unjumpOver;
                       .box {
                             background: url(/imgs/elective/common/icon_checked.png) no-repeat center center;
                        }
                        
                        .names {
                            color: #3491f8;
                        }
                    }
                    .unAgree {
                        .unjumpOver;

                    }
                    .agree {
                        .unjumpOver;
                        .box {
                            background: url(/imgs/elective/common/icon_checked.png) no-repeat center center;
                        }
                        .names {
                            color: #3491f8;
                        }
                    }
                }
            }
            .checkBoxs {
                padding-top: 18px;
                overflow: hidden;
                .group_box {
                    display: flex;
                    justify-content: center;
                }
                p {
                    font-size: 16px;
                    color: #333;
                    line-height: 24px;
                    margin-bottom: 10px;
                    text-align: center;
                    .tishi {
                        font-size: 14px;
                        color: #666;
                    }
                }
            }
            .showAgreeBoxs {
                display: flex;
                justify-content: center;
            }
        }
            
        // 上一步下一步按钮
        .turning {
            padding: 35px 0px;
            height: 46px;
            width: 524px;
            margin: 0 auto;
            .pre {
                width: 154px;
                height: 44px;
                border: 1px solid #2d8ffc;
                border-radius: 2px;
                text-align: center;
                line-height: 44px;
                font-size: 16px;
                color: #2d8ffc;
                float: left;
                cursor: pointer;
                &:hover {
                    background-color: #2d8ffc;
                    color: #fff;
                }
            }
            .next {
                width: 154px;
                height: 44px;
                border: 1px solid #2d8ffc;
                border-radius: 2px;
                text-align: center;
                line-height: 44px;
                font-size: 16px;
                color: #2d8ffc;
                float: right;
                cursor: pointer;
                &:hover {
                    background-color: #2d8ffc;
                    color: #fff;
                }
            }
        }
        // 底部上一步下一步按钮
        .ft_btns {
            padding: 30px 0px;
            height: 40px;
            position: relative;
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
            .unNext {
                .ft_btn;
                background-color: #dedede;
                box-shadow: none;
            }
        }
    }
    // 错误弹窗
    .tixing {
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
            padding: 0px 20px;
            width: 306px;
            height: 251px;
            top: 200px;
            left: 50%;
            margin-left: -152px;
            background: url(/imgs/elective/majorSelectedSubjects/bg_tishitanchuang.png) no-repeat center center;
            // z-index: 100000000000000000000000000000;
            .title {
                font-size: 18px;
                color: #333;
                text-align: center;
                padding-top: 80px;
                line-height: 40px;
                font-weight: 600;
            }
            .jieshi {
                .title;
                padding-top: 0px;
                font-size: 16px;
                line-height: 24px;
                color: #333;
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
            .determine {
                width: 76px;
                height: 32px;
                position: absolute;
                left: 53px;
                bottom: 30px;
            }
            .cancel {
                .determine;
                left: 177px;
                bottom: 30px;
            }

            
        }
    }
    .tixing2 {
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
            background: url(/imgs/elective/majorSelectedSubjects/bg_tanchuang.png) no-repeat center center;
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
            }
            .jieshi {
                text-align: center;
            }
        }
    }
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>
<style type="text/css" lang='less'>
.xuekeyaoqiu {
    .showAgreeBoxs {
        .el-checkbox-group {
            .el-checkbox {
                margin-right: 20px;
                .el-checkbox__input {
                    display: none;
                }
                .el-checkbox__label {
                    padding: 0px 10px;
                    display: inline-block;
                    height: 24px;
                    line-height: 24px;
                    font-size: 14px;
                    color: #2c8ffc;
                    border: 1px solid #2c8ffc;
                    background-color: #e2effe;
                    text-align: center;
                    border-radius: 2px;
                }
            }
            .is-checked {
                .el-checkbox__label {
                    color: #fff;
                    background-color: #2c8ffc;
                }
            }
        }
    }
} 
</style>
<script>
import Loading from '../../../../components/Loading.vue';
import StepBar from '../common/stepBar.vue';
export default {
    props: [ 'step' ],
    components: { Loading, StepBar },
    data() {
        return { 
            // 首选科目再选科目限制数量
            firstChoiceMax: 1,
            secondChoiceMax: 2,
            isShowLoading: false,
            // 防止选3科连续点击|
            isClick: true,
            Gmubiaozhuanye_1: JSON.parse(window.sessionStorage.getItem('Gmubiaozhuanye_1')),
            Gmubiaozhuanye_2: JSON.parse(window.sessionStorage.getItem('Gmubiaozhuanye_2')),
            target_major: JSON.parse(window.sessionStorage.getItem("target_major")),
            cdata: null,
            // 省份
            provinceCode: '',
            // 是否显示提示弹窗
            isShowTixing: false,
            isShowTixing2: false,
            isShowTixing3: false,
            tixing3: '',
            isShowAgree: false,
            isShowjumpOver: false,
            isShowTurning: false,

            subject: [],
            subjectSetting1: [],
            subjectSetting: [],
            // 浙江
            subjects1: [
                { name: '物理', idx: '0' },
                { name: '化学', idx: '1' },
                { name: '生物', idx: '2' },
                { name: '历史', idx: '3' },
                { name: '思想政治', idx: '4' },
                { name: '地理', idx: '5' },
                { name: '技术', idx: '6' },
            ],
            // 北京、上海、天津、海南、山东
            subjects2: [
                { name: '物理', idx: '0' },
                { name: '化学', idx: '1' },
                { name: '生物', idx: '2' },
                { name: '历史', idx: '3' },
                { name: '思想政治', idx: '4' },
                { name: '地理', idx: '5' },
            ],
            // 重庆、广东、福建、江苏、河北、湖南、湖北、辽宁
            subjects3a: [
                { name: '物理', idx: '0' },
                { name: '历史', idx: '1' }
            ],
            subjects3b: [
                { name: '化学', idx: '0' },
                { name: '生物', idx: '1' },
                { name: '思想政治', idx: '2' },
                { name: '地理', idx: '3' }
            ],
            detailArr: []
        }
    },
    methods: {
        // // 存储专业信息，获取返回的目标专业学科要求
        getTargetProfession() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var subject = [];
            var _this = this;
            // var subject = this.$route.params.mubiaozhuanye;
            if(this.$route.params.mubiaozhuanye) {
                subject = this.$route.params.mubiaozhuanye
                window.sessionStorage.setItem("Gmubiaozhuanye",JSON.stringify(subject));
            }else {   
                subject =JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye"));
            }
            this.$ajax
                .post(this.G_uri + '/chooseSubject/getTargetProfessionSubjectRequire', {
                    source: 1,
                    subject: subject,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        var SubjectRequire = res.data.data;
                        _this.cdata = res.data.data;

                        _this.isShowLoading = true;
                        // 存储起来，在平衡单2的时候传递给小龙人算覆盖率使用
                        window.sessionStorage.setItem("SubjectRequire",JSON.stringify(SubjectRequire));
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        goUniversity(value1, value2, value3,value4) {
            if(value1.length == 0) {
                return;
            }
            // this.$router.push({  
            //     path: '/majorSelectedSubjects/xuankeyuanxiao',   
            //     name: 'xuankeyuanxiao',  
            //     query: {  
            //         subjectId: value1,
            //         chooseSubjectRequire: value2,
            //         firstCourseRequire: value2,
            //         secondCourseRequire: value3,
            //         subjectName: value4
            //     }  
            // })  
            let {href}=this.$router.resolve({
                path: '/elective/majorSelectedSubjects/xuankeyuanxiao',
                name: '选科院校',
                query: {
                    subjectId: value1,
                    chooseSubjectRequire: value2,
                    firstCourseRequire: value2,
                    secondCourseRequire: value3,
                    subjectName: value4
                }
            })
            window.open(href, '_blank');
        },
        goOverUniversity() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/getTargetSubjectUniversityList', {
                    
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
                    }
                   
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 获取省份
        getProvince() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        var province = res.data.data.province;
                        switch (province) {
                            case "浙江":
                                _this.provinceCode = '1';
                                break;
                            // 北京、海南、山东、上海、天津、浙江
                            case "北京":
                            case "海南":
                            case "山东":
                            case "上海":
                            case "天津":
                                _this.provinceCode = '2';
                                break;
                            case "重庆":
                            case "广东":
                            case "福建":
                            case "江苏":
                            case "河北":
                            case "湖南":
                            case "湖北":
                            case "辽宁":

                            case "山西":
                            case "内蒙古":
                            case "吉林":
                            case "黑龙江":
                            case "安徽":
                            case "江西":
                            case "河南":
                            case "广西":
                            case "四川":
                            case "贵州":
                            case "云南":
                            case "西藏":
                            case "陕西":
                            case "甘肃":
                            case "青海":
                            case "宁夏":
                            case "新疆":
                            case "台湾":
                            case "香港":
                            case "澳门":
                                _this.provinceCode = '3';
                                break;
                            default:
                        }
                    }else if(res.data.code != 2000) {
                        // alert(res.msg)
                        console.log(res.msg);
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                    // alert('服务器繁忙')
                })
        },
        goDetermine() {
            if(!this.isClick) {
                return;
            }
            // this.$router.push('/zhinengxuanke/xuekeyaoqiu');
            var token = window.sessionStorage.getItem('ymtxToken');
            var balance = [];
            var target = JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye"));
            var subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets2"));
            // console.log(data)
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/storeSelectionDecision', {
                    // data
                    source: 3,
                    balance: balance,
                    target: target,
                    subjectName: subjectName

                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.$router.push('/elective/majorSelectedSubjects/xuankeReport');
                        window.location.reload();
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else { 
                        _this.isShowTixing3 = true;
                        _this.isShowTixing = false;
                        _this.tixing3 = res.data.msg;
                        setTimeout(function() {
                            _this.isShowTixing3 = false;
                        }, 1500)

                    }
                    _this.isClick = true;
                })
                .catch(function(error) {
                    console.log(error);
                })
        },



        // 跳过，不选科目，直接填写平衡单
        jumpOver() {
            this.isShowAgree = false;
            this.isShowjumpOver = true;
            this.isShowTurning = true;
        },
        // 下一步,显示选科
        agree() {
            this.isShowjumpOver = false;
            this.isShowAgree = true;
            this.isShowTurning = true;
        },
        goNext() {
            var arr1 = this.subjectSetting1;
            var arr2 = this.subjectSetting;
            var subjectSets = [];
            var _this = this;
            subjectSets = arr1.concat(arr2);
            window.sessionStorage.setItem("subjectSets2",JSON.stringify(subjectSets));
            if(this.isShowAgree) {
                if(subjectSets.length < 3 && subjectSets.length > 0) {
                    this.$router.push('/elective/majorSelectedSubjects/pinghengdan1');
                }else if(subjectSets.length == 0){
                     this.isShowTixing2 = true;
                     setTimeout(function() {
                        _this.isShowTixing2 = false;
                     }, 1500)
                    
                }else if(subjectSets.length == 3){
                    this.isShowTixing = true;
                }
            }
            if(this.isShowjumpOver) {
                subjectSets = [];
                window.sessionStorage.setItem("subjectSets2",JSON.stringify(subjectSets));
                this.$router.push('/elective/majorSelectedSubjects/pinghengdan1');
            }    
        },

        goShowDetail(idx) {
            // 数组中是否含有idx，如果含有则删除当前项
            let arr1 = this.detailArr;
            let arr2 = [];
            let bol = arr1.some((item, index) => {
               return item == idx;  
            })
            if(bol) {
                let arr2 = arr1.filter((item, index) => {
                    return item  != idx;
                }) 
                this.detailArr = arr2;
            }else {
                arr1.push(idx);
                this.detailArr = arr1;
            }
        }
    },
    created() {
        this.getTargetProfession();
        this.getProvince();
        // console.log(999999)
    },
    watch: {
        subjectSetting1() {
            if(this.subjectSetting1.length) {
                this.secondChoiceMax = 1;
            }else {
                this.secondChoiceMax = 2;
            }
        },
        subjectSetting() {
            if(this.subjectSetting.length < 2) {
                this.firstChoiceMax = 1;
            }else {
                this.firstChoiceMax = 0;
            }
        }
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