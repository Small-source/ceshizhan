
<template>
    <!-- 自招院校库 -->
    <div class="zizhaoyuanxiaoku">
       <!--  <div class="banner"> 
        </div> -->
        <div class="search_box">
            <div class="inner">
                <div class="search">
                    <input type="text" v-model="searchValue" placeholder="搜索你感兴趣的大学" @keydown.enter="query">
                    <span @click="query">
                        <img src="/imgs/explore/common/icon_search.png" alt="">
                    </span>
                </div>
            </div>
        </div>
        <div class="top-navs">
            <div class="inner">
                <div class="banxuecengci">
                    <div class="mingcheng">办学层次 > </div>
                    <div class="right">
                        <el-radio-group v-model="radio1" size="30px" type="text" border>
                            <el-radio :label="item.value" id="cengcis" v-for="(item, index) in banxuecengci" :key="index">{{item.names}}</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <!-- 地区 -->
                <div class="diqu" id="diqus">
                    <div class="box">
                        <div class="left">
                            <div class="mingcheng">学校地区 > </div>
                            <div class="box"></div>
                        </div>
                        <div class="right">
                            <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                            <el-checkbox-group v-model="radio2" size="30px" type="text" border @change="handleCheckedCitiesChange">
                                <el-checkbox :label="item.value" v-for="(item, index) in diqu" :key="index"" :max="1" :class="'no' + index">{{item.names}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
                <!-- 办学性质 -->
                <div class="zhuguanbumen">
                    <div class="mingcheng">办学性质 > </div>
                    <div class="right">
                        <el-checkbox v-model="checkAll_radio3" @change="handleCheckAllChangeRadio3">全部</el-checkbox>
                        <el-checkbox-group v-model="radio3" size="30px" type="text" border @change="handleCheckedCitiesChangeRadio3">
                            <el-checkbox :label="item.value" v-for="(item, index) in zhuguanbumen" :key="index"" :max="1">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <!-- 大学类别 -->
                <div class="daxueleibie">
                    <div class="mingcheng">大学类别 > </div>
                    <div class="right">
                        <el-checkbox v-model="checkAll_radio4" @change="handleCheckAllChangeRadio4">全部</el-checkbox>
                        <el-checkbox-group v-model="radio4" size="30px" type="text" border @change="handleCheckedCitiesChangeRadio4">
                            <el-checkbox :label="item.value" v-for="(item, index) in daxueleibie" :key="index"" :max="1">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>  
                <!-- 特色标签 -->
                <div class="tesebiaoqian">
                    <div class="mingcheng">特色标签 > </div>
                    <div class="right">
                        <el-checkbox-group v-model="tagShuangyiliu" size="30px" type="text" border>
                            <el-checkbox :label="item.value" v-for="(item, index) in tesebiaoqian" :key="index"" :max="1">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                        <el-checkbox v-model="tag985" true-label="1" false-label="0">985</el-checkbox>
                        <el-checkbox v-model="tag211" true-label="1" false-label="0">211</el-checkbox>
                        <el-checkbox v-model="tagZhongdianxueke" true-label="1" false-label="0">重点学科</el-checkbox>
                        <el-checkbox v-model="tagTesezhuanye" true-label="1" false-label="0">特色专业</el-checkbox>
                        <el-checkbox v-model="tagBushenghejian" true-label="1" false-label="0">省部合建</el-checkbox>
                        <el-checkbox v-model="tagBaoyanzige" true-label="1" false-label="0">保研资格</el-checkbox>
                    </div>
                </div> 
            </div>
        </div>
        <div class="inner">
            <div class="content">
                <div class="neirongBox" v-for="(item, index) in cdata" :key="index">
                    <div class="neirong">
                        <div class="left">
                            <img :src="item.logo" alt="">
                        </div>
                        <div class="right">
                            <div class="title">
                                <strong class="University" @click="go(item.id)">{{item.name}}</strong>
                                <span class="area">{{item.city}}</span>
                            </div>
                            <div class="tese">
                                <span class="no0" v-show="item.tagShuangyiliuName">{{item.tagShuangyiliuName}}</span>
                                <span class="no1" v-show="item.tag985Name">{{item.tag985Name}}</span>
                                <span class="no2" v-show="item.tag211Name">{{item.tag211Name}}</span>
                                <span class="no3" v-show="item.tagZhongdianxuekeName">{{item.tagZhongdianxuekeName}}</span>
                                <span class="no4" v-show="item.tagTesezhuanyeName">{{item.tagTesezhuanyeName}}</span>
                                <span class="no5" v-show="item.tagBaoyanzigeName">{{item.tagBaoyanzigeName}}</span>
                            </div>
                           
                        </div>
                        <!-- 查看详情 -->
                        <div class="right_box">
                            <div class="goDetail"  @click="go(item.id)">查看详情</div>   
                            <div class="join_compare" @click="goJoinCompare(item,item.id)" v-if="!join_compare_id.some((id) => id == item.id )">
                                加入对比
                            </div>
                            <div class="remove_compare" @click="removeCompare(item.id)" v-else>
                                移出对比
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div class="foot">
                <div class="pages">
                    <div class="tishi" v-if="count==0">没有满足条件的结果,换一个试试？</div>
                    <!--<span class="count">共{{count}}条 {{pageValue}}/{{totalPage}}页</span>-->
                    <span @click="goBack()" v-show="pageValue > 1" class="btn_left">1</span>
                    <span @click="goOn(1)" :class="pageValue === 1 ? 'active' : 'button'" v-show="totalPage > 0">1</span>
                    <span v-show="pageValue > 4 && totalPage > 7">...</span>
                    <span @click="goOn(page[0])" :class="pageValue === page[0] ? 'active' : 'button'" v-show="totalPage >= 2">{{page[0]}}</span>
                    <span @click="goOn(page[1])" :class="pageValue === page[1] ? 'active' : 'button'" v-show="totalPage >= 3">{{page[1]}}</span>
                    <span @click="goOn(page[2])" :class="pageValue === page[2] ? 'active' : 'button'" v-show="totalPage >= 4">{{page[2]}}</span>
                    <span @click="goOn(page[3])" :class="pageValue === page[3] ? 'active' : 'button'" v-show="totalPage > 4 && totalPage >= page[3]">{{page[3]}}</span>
                    <span @click="goOn(page[4])" :class="pageValue === page[4] ? 'active' : 'button'" v-show="totalPage > 5 && totalPage >= page[4]">{{page[4]}}</span>
                    <span v-show="page[4] < totalPage - 1">...</span>
                    <span @click="goOn(totalPage)" v-show=" page[4] < totalPage" :class="pageValue === totalPage ? 'active' : 'button'">{{totalPage}}</span>
                    <span @click="goNext()" v-show="pageValue < totalPage" class="btn_right">1</span>
                </div>
            </div>
        </div>
     <!--    <div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div>  -->
        <div class="compare" :class="isShowDuibi ? 'slide' : 'eject'" :style="{'display': join_compare_arr.length == 0 ? 'none': 'block'}">
            <div class="inner">
                <div class="box">
                    <div class="top">
                        <ul>
                            <li>对比栏</li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="left_box">
                            <ul>
                                <li v-for="(item, index) in join_compare_arr" :key="index">
                                    <img :src="item.logo" alt="">
                                    <p class="title">{{item.name}}</p>
                                    <div class="btn_remove" @click="removeCompare(item.id)">
                                        [ 取消对比 ]
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="right_box">
                            <div class="goCompare" @click="goCompare">
                                对比
                            </div>
                            <div class="clear" @click="join_compare_arr=[];join_compare_id=[]">
                                清空
                            </div>
                        </div>
                    </div>
                    <div class="slide" @click="isShowDuibi = !isShowDuibi">
                        <img :src="isShowDuibi ? '/imgs/explore/yuanxiaoku/icon_slideft.png' : '/imgs/explore/yuanxiaoku/icon_slidetop.png'" alt="">
                    </div>
                </div>    
            </div>
        </div>
        <!-- 错误弹窗提醒  -->
        <div class="errors" v-show="isShowError">
            <div class="inner">
                <!-- 白色弹窗 -->
                <div class="tanchuang">
                    <div class="title">院校对比不能超过4个</div>              
                    <div class="close" @click="isShowError=false"></div>
                    <div class="queding"  @click="isShowError=false"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .zizhaoyuanxiaoku {
        background-color: #ffff;
        margin-left: 20px;
        .inner {
            width: 930px;
            margin: 0 auto;
            box-sizing: border-box;
        }
        .search{
            margin:0 auto;
            position: relative;
            height: 42px;
        }
        .search_box {
            padding-top: 30px;
            padding-bottom: 24px;
            height: 44px;
            input {
                box-sizing: border-box;
                height: 42px;
                border: 1px solid #2c8ffc;
                width: 100%;
                float: left;
                padding-left: 20px;
                font-size: 14px;
                line-height: 42px;
                border-radius: 5px;
            }
            span {
                padding-right: 20px;
                height: 44px;
                font-size: 14px;
                line-height: 44px;
                text-align: center;
                color: #fff;
                cursor: pointer;
                position: absolute;
                right: 0;
                top: 0;
                overflow: hidden;
            }
        }
        #cengci {
            display: block;
            width: 50px;
            height: 24px;
            line-height: 24px !important;
            font-size: 14px !important;
            float: left;

        }
        // 小导航，用于返回上一页
        .mianbaoxie {
            height: 32px;
            font-size: 12px;
            line-height: 32px;
            color: #333;
            position: relative;
            background-color: #f9f9f9;
            .inner {
                position: relative;
            }
            .no1 {
                padding-left: 5px;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no2 {
                padding-left: 10px;
                cursor: pointer;
                &:hover {
                    color: #2d90f8;
                }
            }
            .no3 {
                padding-left: 10px;
                color: #2d90f8 ;
            }
            .goBack {
                position: absolute;
                width: 50px;
                height: 20px;
                line-height: 20px;
                background-color: #2d90f8;
                color: #fff;
                right: 0;
                top: 6px;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
            }
        }
        .top-navs {
            border-radius: 5px;
            margin-bottom: 10px;
            .inner {
                background-color: #fff;
                padding-bottom: 10px;
            }
            .mianbaoxie {
                font-size: 12px;
                color: #333;
                line-height: 32px;
            }
            .banxuecengci {
                box-sizing: border-box;
                padding-top: 20px;
                padding-bottom: 15px;
                height: 56px;
                border-bottom: 1px solid #f2f2f2;
                display: flex;
                .mingcheng {
                    // float: left;
                    width: 72px;
                    padding-right: 26px;
                    text-align: right;
                    color: #333;
                    font-size: 13px;
                    font-weight: 600;
                }
                .right {
                    // width: 600px;
                    // float: left;
                    flex: 1;
                    font-size: 14px;
                }
            }
            .diqu {
                // height: 100px;
                padding: 5px 0px;
                border-bottom: 1px solid #f2f2f2;
                overflow: hidden;
                line-height: 24px;
                .box {
                   width: 930px; 
                   display: flex;
                }
                .left {
                    width: 72px;
                    padding-right: 26px;
                    text-align: right;
                    color: #333;
                    font-size: 14px;
                    font-weight: bold;
                }
                .mingcheng {
                    line-height: 24px;
                    width: 72px;
                    padding-right: 26px;
                    text-align: right;
                    color: #333;
                    font-size: 13px;
                    font-weight: 600;
                }
                .right {
                    flex: 1;
                }
            }
            .zhuguanbumen {
                padding: 10px 0px;
                height: 22px;
                border-bottom: 1px solid #f2f2f2;
                display: flex;
                .mingcheng {
                   
                    width: 72px;
                    padding-right: 26px;
                    text-align: right;
                    color: #333;
                    font-size: 13px;
                    font-weight: 600;
                }
                .right {
                    flex: 1;
                    // width: 1010px;
                }
            }
            .daxueleibie {
                padding: 5px 0px;
                line-height: 24px;
                border-bottom: 1px solid #f2f2f2;
                display: flex;
                .mingcheng {
                    width: 72px;
                    padding-right: 26px;
                    text-align: right;
                    color: #333;
                    font-size: 13px;
                    font-weight: 600;
                }
                .right {
                    flex: 1;
                }
            }
            .tesebiaoqian {
                padding: 5px 0px;
                border-bottom: 1px solid #f2f2f2;
                display: flex;
                .mingcheng {
                    width: 72px;
                    line-height: 24px;
                    padding-right: 26px;
                    text-align: right;
                    color: #333;
                    font-size: 13px;
                    font-weight: 600;
                }
                .right {
                    flex: 1;
                    color: #666;
                    font-size: 12px;
                    line-height: 24px;
                    span {
                        padding: 3px 13px;
                        border-radius: 2px;
                        cursor: pointer;
                        background-color: #f5f7f6;
                        margin-right: 15px;
                    }
                    .active {
                        color: #fff;
                        background-color: #2c8ffc; 
                    }
                }
              
            }
        }
        .content {
            background-color: #fff;
            .neirongBox {
                position: relative;
                background-color: #fff;
                height: 120px;
                padding: 0px 20px;
                .neirong {
                    height: 119px;
                    border-bottom: 1px solid #f2f2f2;

                }
                &:hover {
                    box-shadow: 0px 0px 21px rgba(218, 218, 218,.6);
                    z-index: 2;
                }
                .left {
                    float: left;
                    width: 120px;
                    height: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 78px;
                        height: 78px;
                        border-radius: 50%;
                    }
                   
                }
                .right {
                    float: left;
                    padding: 24px 20px;
                    position: relative;
                    .title {
                        height: 22px;
                        margin-bottom: 20px;
                        .University {
                            color: #333333;
                            font-size: 22px;
                            line-height: 22px;
                            float: left;
                            font-weight: 600;
                            margin-right: 20px;
                            cursor: pointer;
                            &:hover {
                                color: #2c8ffc;
                            }
                        }
                        .area {
                            padding-top: 5px;
                            padding-left: 25px;
                            margin: 0 auto;
                            font-size: 12px;
                            color: #9fa3af;
                            background: url(/imgs/explore/yuanxiaoku/area.png) no-repeat 0px center;
                            background-size: 24px 24px;

                        }  
                    }
                    .tese {
                        width: 600px;
                        height: 25px;
                        span {
                            float: left;
                            padding: 0px 10px;
                            margin-right: 15px;
                            font-size: 12px;
                            line-height: 25px;
                            height: 25px;
                            color: #5483b5;
                            background-color: #e1ecff;
                            text-align: center;
                            border-radius: 5px;
                        }
                    }

                }
                .right_box {
                    position: absolute;
                    right: 40px;
                    top: 50%;
                    margin-top: -16px;
                    width: 214px;
                    height: 32px;
                    display: flex;
                    justify-content: space-between;
                }
                // 查看详情
                .goDetail {
                    font-size: 14px;
                    line-height: 32px;
                    width: 90px;
                    height: 32px;
                    text-align: center;
                    background-color: #2c8ffc;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;
                    &:hover {
                        background-color: #156def;
                    }
                }
                .join_compare {
                    width: 90px;
                    height: 32px;
                    font-size: 14px;
                    line-height: 32px;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #2c8ffc;
                    color: #2c8ffc;
                    padding-left: 28px;
                    border-radius: 5px;
                    cursor: pointer;
                    background: url(/imgs/explore/yuanxiaoku/icon_unchecked.png) no-repeat  5px center;
                }
                .remove_compare {
                    .join_compare;
                    background: url(/imgs/explore/yuanxiaoku/icon_checked.png) no-repeat  5px center;

                }
            }
        }
        .tishi{
            text-align: center;
            font-size: 18px;
            color:#666;
            letter-spacing: 0.1em;
            position: relative;
            top:-30px;
        }
        .foot {
            margin: 0 auto;
            line-height: 24px;
            height: 26px;
            background-color: #fff;
            padding-top: 80px;
            padding-bottom: 40px;
            .pages {
                margin: 0 auto;
                text-align: center;
                height: 26px;
                span {
                    display: inline-block;
                    margin-left: 10px;
                    text-align: center;
                    width: 32px;
                    height: 24px;
                    line-height: 24px;
                    border-radius: 2px;
                    border: 1px solid #dcdcdc;
                    cursor: pointer;
                    color: #2d8ffc;
                    &:hover {
                        background-color: #2d8ffc;
                        color: #fff;
                    }
                }
                .btn_left {
                    background: url(/imgs/explore/yuanxiaoku/icon/icon_left.png) no-repeat center center;
                    color: transparent;
                    &:hover {
                        background: url(/imgs/explore/yuanxiaoku/icon/icon_left_white.png) no-repeat center center;
                        background-color: #2d8ffc;
                        color: transparent;
                    } 
                }
                .btn_right {
                    background: url(/imgs/explore/yuanxiaoku/icon/icon_right.png) no-repeat center center;
                    color: transparent;
                      &:hover {
                        background: url(/imgs/explore/yuanxiaoku/icon/icon_right_white.png) no-repeat center center;
                        background-color: #2d8ffc;
                        color: transparent;
                    } 

                }
                .count {
                    width: 150px;
                    font-size: 14px;
                    border: none;
                    &:hover{
                        background: none;
                        color: #2d8ffc;
                        cursor: auto;
                    }
                }
                .active {
                    display: inline-block;
                    margin-left: 10px;
                    width: 32px;
                    height: 24px;
                    border-radius: 2px;
                    border: 1px solid #dcdcdc;
                    background-color: #2d8ffc;
                    color: #fff;
                }
            }
        }
        .loading {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,.6);
        }
        // 添加对比窗口
        .compare {
            position: fixed;
            bottom: 40px;
            left: 0;
            height: 240px;
            width: 100%;
            z-index: 10;
            // overflow: hidden;
            .inner {
                width: 1200px;
                padding-left: 230px;
            }
            .box {
                box-sizing: border-box;
                box-shadow: 0 0 6px #dedede;
                // padding: 0px 20px;
                background-color: #fff;
                position: relative;
            }
            .top {
                height: 48px;
                padding-left: 20px;
                border-bottom: 1px solid #e2e2e2;
                ul li {
                    box-sizing: border-box;
                    float: left;
                    color: #333;
                    height: 48px;
                    line-height: 48px;
                    font-size: 16px;
                    border-bottom: 3px solid #2c8ffc;
                }
            }
            .content {
                height: 190px;
                width: 970px;
                .left_box {
                    width: 850px;
                    height: 190px;
                    float: left;
                    ul {
                        height: 150px;
                        padding: 20px 0px;
                        li {
                            box-sizing: border-box;
                            width: 25%;
                            float: left;
                            padding-top: 15px;
                            text-align: center;
                            border-right: 1px dashed #e2e2e2;
                            img {
                                width: 76px;
                                height: 76px;
                                border-radius: 50%;
                            }
                            .title {
                                line-height: 38px;
                                font-size: 15px;
                                font-weight: 600;
                                color: #333;
                            }
                            .btn_remove {
                                color: #2c8ffc;
                                cursor: pointer;
                                line-height: 20px;
                            }
                        }
                    }
                }
                .right_box {
                    box-sizing: border-box;
                    padding-top: 58px;
                    height: 190px;
                    width: 120px;
                    float: left;
                    .goCompare {
                        box-sizing: border-box;
                        width: 90px;
                        height: 32px;
                        text-align: center;
                        line-height: 32px;
                        background-color: #2c8ffc;
                        color: #fff;
                        font-size: 14px;
                        text-align: center;
                        border-radius: 3px;
                        margin: 0 auto;
                        cursor: pointer;
                    }
                    .clear {
                        .goCompare;
                        margin-top: 15px;
                        background-color: #fff;
                        color: #2c8ffc;
                        border: 1px solid #2c8ffc;
                    }
                }
            }
            .close {
                width: 20px;
                height: 20px;
                color: #2c8ffc;
                text-align: center;
                line-height: 20px;
                position: absolute;
                right: 20px;
                top: 10px;
                font-size: 20px;
                cursor: pointer;
            }
            .slide {
                position: absolute;
                width: 40px;
                height: 40px;
                top: -38px;
                left: 50%;
                margin-left: -20px;
                cursor: pointer;
            }
        }
        // 上拉收回隐藏
        .eject {
            height: 0px;
            transition: all 1s;
        }
        // 下拉出现
        .slide {
            bottom: -1px;
            height: 240px;
            transition: all 1s; 
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
                background: url(/imgs/explore/common/bg_tanchuang.png) no-repeat center center;
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
            }
        }  
    }
</style>
<style type="text/css" lang='less'>
    .zizhaoyuanxiaoku {
        background-color: #f5f7f6;
        .el-radio-group .el-radio {
            margin-right: 15px;
            position: relative;
            top:-5px;
        }
        .el-radio-group .is-checked{
            background-color: #2d8ffc;
            border-bottom: none !important;
            border-radius: 5px;
        }
        .banxuecengci {
            .el-radio-group .el-radio .el-radio__input {
                display: none;
            }
            .el-radio-group .is-checked .el-radio__label {
                color: #fff!important;
            }
        }
        #cengcis .el-radio__label{
            padding:  0 13px;
            display: block;
            height: 30px;
            text-align: center;
            line-height: 30px !important;
            font-size: 14px !important;
            float: left;
            color: #666;
            border-radius: 12px;
        }
        .is-checked .el-radio__label{
            border:none !important;
            outline: none !important;
        }
        .el-radio *{
            outline: none !important;
            border:none !important;
        }

        .diqu .el-checkbox {
            float: left;
            width: 82px;
            margin-right: 0px;
        }
        .diqu .el-radio-group .el-radio {
            margin-bottom: 10px;
        }
        
        #banxue {
            width:  100%;
        }
        .zhuguanbumen {
            .el-checkbox {
                float: left;
                // width: 96px !important;
                margin-right: 30px;
            }
            .el-radio-group .el-radio {
                margin-bottom: 10px;
            }
        }
        .daxueleibie {
            .zhuguanbumen;
            .el-checkbox {
                float: left;
                margin-right: 0px;
                width: 82px;
            }
        }
        .tesebiaoqian {
            .el-checkbox {
                float: left;
                margin-right: 20px;
            }
        }
    }
</style>
<script>
// import Loading from '../../../.././components/Loading.vue'
export default {
    // components: { Loading },
    data() {
        return { 
            // 添加对比
            join_compare_arr: [],
            // 添加对比的大学id
            join_compare_id: [],    
            // 是否显示对比框
            isShowDuibi: false,
            // 专业对比超过四条提醒
            isShowError: false,


            // 多选框所用数据
            checkAll: false,
            checkAll_radio3: false,
            checkAll_radio4: false,


            searchValue: '',
            isShowLoading: true,
            radio1: '',
            radio2: [],
            radio3: [],
            radio4: [],
            // 双一流
            tagShuangyiliu: [],
            tag211: '',
            tag985: '',
            tagZhongdianxueke: '',
            tagTesezhuanye: '',
            tagBushenghejian: '',
            tagBaoyanzige: '',
            ischecked: '0',
            cdata: [],
            // 页码值
            pageValue: 1,
            // 每页显示多少条数据
            pageSize: 15,
            // 共有多少条
            count: '',
            // 一共有多少页
            totalPage: '',
            // 页码
            page: [ 2 ,3 , 4, 5, 6 ],
            // 办学层次
            banxuecengci: [
                { names: '全部', value: '' },
                { names: '本科', value: '1' },
                { names: '专科', value: '2' },
            ],
            // 地区
            diqu: [
                { names: '北京', value: '北京' },
                { names: '天津', value: '天津' },
                { names: '上海', value: '上海' },
                { names: '重庆', value: '重庆' },
                { names: '河北', value: '河北' },
                { names: '河南', value: '河南' },
                { names: '云南', value: '云南' },
                { names: '辽宁', value: '辽宁' },
                { names: '黑龙江', value: '黑龙江' },
                { names: '湖南', value: '湖南' },
                { names: '安徽', value: '安徽' },
                { names: '山东', value: '山东' },
                { names: '新疆', value: '新疆' },
                { names: '江苏', value: '江苏' },
                { names: '浙江', value: '浙江' },
                { names: '江西', value: '江西' },
                { names: '湖北', value: '湖北' },
                { names: '广西', value: '广西' },
                { names: '甘肃', value: '甘肃' },
                { names: '山西', value: '山西' },
                { names: '内蒙古', value: '内蒙古' },
                { names: '陕西', value: '陕西' },
                { names: '吉林', value: '吉林' },
                { names: '福建', value: '福建' },
                { names: '贵州', value: '贵州' },
                { names: '广东', value: '广东' },
                { names: '青海', value: '青海' },
                { names: '西藏', value: '西藏' },
                { names: '四川', value: '四川' },
                { names: '宁夏', value: '宁夏' },
                { names: '海南', value: '海南' }
            ],
            // 办学性质
            zhuguanbumen: [
                // { names: '全部', value: '' },
                { names: '公办', value: '1' },
                { names: '民办', value: '2' },
                { names: '内地与港澳台地区合作办学', value: '3' },
                { names: '中外合作办学', value: '4' },
            ],
            // 大学类别
            daxueleibie: [
                // { names: '全部', value: '' },
                { names: '综合类', value: '综合类' },
                { names: '理工类', value: '理工类' },
                { names: '师范类', value: '师范类' },
                { names: '农林类', value: '农林类' },
                { names: '政法类', value: '政法类' },
                { names: '医药类', value: '医药类' },
                { names: '财经类', value: '财经类' },
                { names: '民族类', value: '民族类' },
                { names: '语言类', value: '语言类' },
                { names: '艺术类', value: '艺术类' },
                { names: '体育类', value: '体育类' },
                { names: '军事类', value: '军事类' }
            ],
            // 特色标签
            tesebiaoqian: [
                { names: '一流大学建设高校A类', value: '1' },
                { names: '一流大学建设高校B类', value: '2' },
                { names: '一流学科建设高校', value: '3' }
            ]
        }
    },
    computed: {
        tese() {
            var str = this.cdata.tag;
            var arr = []
            if(str) {
                arr = str.split(' ');
            }
            console.log(this.cdata)
            return arr;
        }
    },
    watch: {
        radio1() {
            // console.log(this.radio1)
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        radio2() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        radio3() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        radio4() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tagShuangyiliu() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tag985() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tag211() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tagZhongdianxueke() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tagTesezhuanye() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tagBushenghejian() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        tagBaoyanzige() {
            this.page = [ 2 ,3 , 4, 5, 6 ];
            this.pageValue = 1;
            this.dataUpdate();
        },
        pageValue() {
            this.dataUpdate();
        }
    },
    methods: {
        handleCheckAllChange(val) {
            if(val) {
                this.radio2 = [
                    '北京','天津','上海','重庆','河北',
                    '河南','云南','辽宁','黑龙江','湖南',
                    '安徽','山东','新疆','江苏','浙江',
                    '江西','湖北','广西','甘肃','山西',
                    '内蒙古','陕西','吉林','福建','贵州',
                    '广东','青海','西藏','四川','宁夏',
                    '海南'
                ];
            }else {
                this.radio2 = [];
            }
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            if(checkedCount >= 0 && checkedCount < this.diqu.length) {
                this.checkAll = false;
            }else if(checkedCount ==  this.diqu.length){
                this.checkAll = true;

            }
        },
        handleCheckAllChangeRadio3(val) {
            if(val) {
                this.radio3 = ['1','2','3','4'];
            }else {
                this.radio3 = [];
            }
        },
        handleCheckedCitiesChangeRadio3(value) {
            let checkedCount = value.length;
            if(checkedCount >= 0 && checkedCount < this.zhuguanbumen.length) {
                this.checkAll_radio3 = false;
            }else if(checkedCount ==  this.zhuguanbumen.length) {
                this.checkAll_radio3 = true;
            }
        },
        handleCheckAllChangeRadio4(val) {
            if(val) {
                this.radio4 = ['综合类','理工类','师范类','农林类','政法类','医药类','财经类','民族类','语言类','艺术类','体育类','军事类'];
            }else {
                this.radio4 = [];
            }
        },
        handleCheckedCitiesChangeRadio4(value) {
            let checkedCount = value.length;
            if(checkedCount >= 0 && checkedCount < this.daxueleibie.length) {
                this.checkAll_radio4 = false;
            }else if(checkedCount ==  this.daxueleibie.length) {
                this.checkAll_radio4 = true;
            }
        },
        dataUpdate() {
            this.isShowLoading = true;
            var name = this.searchValue;
            var token =  window.sessionStorage.getItem('ymtxToken');
            var radio1 = this.radio1;
            var radio2 = this.radio2;
            var radio3 = this.radio3;
            var radio4 = this.radio4;
            var tagShuangyiliu = this.tagShuangyiliu;
            var tag211 = this.tag211;
            var tag985 = this.tag985;
            var tagZhongdianxueke = this.tagZhongdianxueke;
            var tagTesezhuanye = this.tagZhongdianxueke;
            var tagBushenghejian = this.tagBushenghejian;
            var tagQiangjijihua = 1;
            var _this = this;
            var pageNumber = this.pageValue;
            var pageSize = this.pageSize;
            this.$ajax
                .post(this.G_uri + '/target/getUniversityList', {
                    // data
                    token: token,
                    schoolLevel: radio1,
                    province: radio2,
                    schoolNature: radio3,
                    type: radio4,
                    tagShuangyiliu: tagShuangyiliu,
                    tag211: tag211,
                    tag985: tag985,
                    tagZhongdianxueke: tagZhongdianxueke,
                    tagTesezhuanye: tagTesezhuanye,
                    tagBushenghejian: tagBushenghejian,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    name:name,
                    tagQiangjijihua: tagQiangjijihua
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res.data.data)
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data.list;
                        _this.totalPage = res.data.data.page.totalPage;
                        _this.count = res.data.data.page.count;
                        _this.isShowLoading = false;
                    } else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    } else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    } else {
                        console.log(res.msg);
                    }
                   
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        go(id) {
            var id = id;
            let {href}=this.$router.resolve({
                path: '/explore/yuanxiaoxiangqing',
                name: '院校详情',
                query: {
                    id: id,
                }
            })
            window.open(href, '_blank');
        },
        goOn(value) {
            this.pageValue = value;
            // 根据中间的值计算步长
            var num = this.page[2];
            // 步长
            var index = value - num;
            if(this.totalPage <= 7) {
                window.scroll(0, 0);
                return;
            }
            if(value < 5) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] = i + 2;
                }
                window.scroll(0, 0);
                return;
            }

            // 下（页加）
            if(index > 0 &&  4 < value <= this.totalPage) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] += index;
                }
                window.scroll(0, 0);
                return;
            }
            // 上（页减）
            if(index < 0 && value >= 4) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] += index;
                }
                window.scroll(0, 0);
                return;
            }
            if(index < 0 && value === 3) {
                this.page[0] = 2;
                this.page[1] = 3;
                this.page[2] = 4;
                this.page[3] = 5;
                this.page[4] = 6;
                window.scroll(0, 0);

                return;
            }
        },
        // 上一页
        goBack() {
            this.pageValue --;
            if(this.totalPage <= 7) {
                window.scroll(0, 0);
                return;
            }
            if(this.pageValue < 5) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] = i + 2;
                }
            }else {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] --;
                }
            }
            window.scroll(0, 0);
        },
        // 下一页
        goNext() {
            this.pageValue ++;
            if(this.totalPage <= 7) {
                window.scroll(0, 0);
                return;
            }
            if(this.pageValue >= 5) {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] ++;
                }
            }else {
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] = i + 2;
                }
            }
            window.scroll(0, 0);
        },
        
        // 查询搜索
        query() {
            var _this = this;
            var name = this.searchValue;
            this.pageValue=1;
            this.page = [ 2 ,3 , 4, 5, 6 ];
            if(!name) {
                return;
            }
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            var radio1 = '';
            var radio2 = [];
            var radio3 = [];
            var radio4 = [];
            var tagShuangyiliu = [];
            var tag211 =  '';
            var tag985 =  '';
            var tagZhongdianxueke = '';
            var tagTesezhuanye = '';
            var tagBushenghejian = '';
            
            var pageNumber = this.pageValue;
            var pageSize = this.pageSize;

                        
            // 搜索的值
            // var name = this.name;
            // 页码
            // var pageNumber = this.pageNumber;
            // 每页显示多少条数据
            // var pageSize =  this.pageSize;
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/getUniversityList', {
                    token: token,
                    schoolLevel: radio1,
                    province: radio2,
                    schoolNature: radio3,
                    type: radio4,
                    tagShuangyiliu: tagShuangyiliu,
                    tag211: tag211,
                    tag985: tag985,
                    tagZhongdianxueke: tagZhongdianxueke,
                    tagTesezhuanye: tagTesezhuanye,
                    tagBushenghejian: tagBushenghejian,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    name: name,
                    tagZizhuzhaosheng: 1
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                        _this.cdata = res.data.data.list;
                        _this.totalPage = res.data.data.page.totalPage;
                        _this.count = res.data.data.page.count;
                        _this.isShowLoading = false;
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        goJoinCompare(item,id) {
            if(this.join_compare_arr.length == 4) {
                this.isShowError = true;
                return;
            }else {
                this.join_compare_arr.push(item);
                this.join_compare_id.push(id);
                if(this.join_compare_arr.length == 1) {
                    this.isShowDuibi = true;
                }
            }
        },
        removeCompare(id) {
            this.join_compare_arr = this.join_compare_arr.filter((item) => {
                return item.id != id
            });
            this.join_compare_id = this.join_compare_id.filter((item) => {
                return item != id
            });
        },
        // 去对比页面对比
        goCompare() {
            var universityIds = this.join_compare_id;
            let {href} = this.$router.resolve({
                path: '/explore/yuanxiaoku',
                name: '院校对比',
                query: {
                    universityIds: universityIds,
                }
            })
            window.open(href, '_blank');
        }
    },
    created() {
        this.dataUpdate();
    }
}
</script>