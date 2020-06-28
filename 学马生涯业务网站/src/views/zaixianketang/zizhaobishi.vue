<template>
    <div class="zizhaobishi">
        <div class="banner">
            <div class="inner">
                <p class="title">自招笔试</p>
                <p class="detail"><span>———</span>精品视频</p>
            </div>
        </div>
        <div class="inner">
            <!-- 高中课程学科分类 -->
            <div class="gaozhongkecheng">
                <p class="title">高中课程</p>
                <div class="right">
                    <el-radio-group v-model="radio1" size="30px" type="text" border>
                        <el-radio :label="item.idx" v-for="(item, index) in gaozhongkecheng" :key="index" >{{item.kemu}}</el-radio>
                    </el-radio-group>
                </div>
                <!-- <h3>{{radio1}}</h3> -->
            </div>
            <div class="content">
                <!-- <p class="zhizhao">自招笔试</p> -->
                <ul class="lis">
                    <li v-for="(item, index) in data" :key="index">
                        <!-- <a href="javascript:void(0);" v-if="item.isVIP == '免费'" @click="goPlay">
                            <img :src="item.img" alt="">
                            <p class="title">{{item.title}}</p>
                            <p class="noVIP">{{item.isVIP}}</p>
                        </a> -->
                        <div class="free" v-if="item.isVIP == '免费'" @click="goPlay">
                            <!-- <video width="218" height="162" controls  :poster="item.img" :src="item.src">
                               
                            </video> -->
                            <div class="imgBox" @click="goPlayVideo(item.src)"><img :src="item.img" alt=""></div>
                            <p class="title">{{item.title}}</p>
                            <p class="noVIP">{{item.isVIP}}</p>
                        </div>
                        <div v-else="item.isVIP == 'VIP'" @click="tanchuang">
                            <div class="imgBox">
                                <img :src="item.img" alt="">
                            </div>
                            <p class="title">{{item.title}}</p>
                            <p class="VIP">{{item.isVIP}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Viptanchuang :data="isshow" v-on:go-back="isshow = false"></Viptanchuang>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .zizhaobishi {
        background-color: #f9f9f9;
        width: 100%;
        letter-spacing: 1px;
        .inner {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
        }
        .banner {
            height: 88px;
            background: url(/imgs/zaixianketang/bg/bg_bishibanner.png) no-repeat;
            margin-bottom: 17px;
            .inner {
                padding-top: 6px;
            }
            .title {
                line-height: 50px;
                font-size: 22px;
                font-weight: 500;
                color: #fff;
            }
            .detail {
                padding-left: 100px;
                height: 18px;
                line-height: 18px;
                font-size: 16px;
                color: #fff;
                span {
                    letter-spacing: 0px;
                    margin-right: 2px;
                }
            }
        }
        .gaozhongkecheng {
            padding: 12px 20px;
            height: 26px;
            .title {
                font-size: 14px;
                color: #333333;
                line-height: 26px;
                float: left;
            }
            .right {
                padding-left: 24px;
                float: left;
            }

        }
        .content {
            .zhizhao {
                height: 60px;
                line-height: 60px;
                padding-left: 25px;
                color: #333;
                border-bottom: 1px solid #dedede;
                background-color: #fff;
            }

            .lis {
                overflow: hidden;
                padding-top: 25px;
                background-color: #fff;
                width: 1230px;
                li {
                    width: 220px;
                    float: left;
                    padding: 7px;
                    margin-right: 8px;
                    margin-bottom: 28px;
                    cursor: pointer;
                    border-radius: 2px;
                   
                    &:hover {
                        padding: 7px;
                        box-shadow: 0px 0px 10px #dedede; 
                    }
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    .imgBox {
                        width: 220px;
                        height: 140px;
                        overflow: hidden;
                    }
                    img {
                        width: 220px;
                        height: 140px;
                        // &:hover {
                        //     transform: scale(1.2);
                        // }
                    }
                    .title {
                        font-size: 13px;
                        color: #333;
                        height: 37px;
                        line-height: 37px;
                        margin-bottom: 4px;
                    }
                    .noVIP {
                        height: 20px;
                        width: 40px;
                        font-size: 12px;
                        color: #f21e1e;
                        line-height: 20px;
                        border-radius: 2px;
                        background: linear-gradient(#e9e7e8, #c7c6c6);
                        text-align: center;
                    }
                    .VIP {
                        height: 20px;
                        width: 40px;
                        font-size: 12px;
                        background: linear-gradient(#fcc772, #ee8935);
                        text-align: center;
                        line-height: 20px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
<style lang='less'>
    .el-radio-group {
        .is-checked {
            border-radius: 2px;
            background-color: #2d8ffc;
            .el-radio__label {
               color: #fff !important;
            }
        }
        .el-radio {
            margin-right: 10px;
            text-align: center;
            .el-radio__input{
                display: none;

            }
            .el-radio__label {
                font-size: 16px;
                line-height: 28px;
                padding: 6px 12px;
                color: #333;
                // border: 2px solid #000;
            }
        }
    }
    // .zizhaobishi {
        // .el-radio-group {
        //     .is-checked {
        //         border-radius: 13px;
        //         // background-color: #2d8ffc;
        //         font-size: 14px;
        //         .el-radio__label {
        //             background-color: #2d8ffc;
        //             border-radius: 13px;
        //             overflow: hidden;
        //             height: 26px;
        //             line-height: 26px;
        //             display: inline-block;
        //             color: #fff !important;
        //         }
        //     }
        //     .el-radio {
        //         margin-right: 10px;
        //         text-align: center;
        //         font-size: 14px;
        //         .el-radio__input{
        //             display: none;

        //         }
        //         .el-radio__label {
        //             border-radius: 13px;
        //             overflow: hidden;
        //             height: 26px;
        //             line-height: 26px;
        //             display: inline-block;
        //             color: #333;
        //             padding: 0px 20px;
        //             // border: 2px solid #000;
        //         }
        //     }
        // }
    // }

</style>
<script>
import Viptanchuang from '../../components/Viptanchuang.vue'
export default {
    components: { Viptanchuang },
    // props: [ 'message' ],
    data() {
        return { 
            // '语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'
            gaozhongkecheng: [ 
                { kemu: '语文', idx: 'km1' },
                { kemu: '数学', idx: 'km2' },
                { kemu: '英语', idx: 'km3' },
                { kemu: '物理', idx: 'km4' },
                { kemu: '化学', idx: 'km5' },
                // { kemu: '生物', idx: 'km5' },
                // { kemu: '历史', idx: 'km5' },
                // { kemu: '地理', idx: 'km5' },
                // { kemu: '政治', idx: 'km5' }
            ],
            radio1: 'km1',
            data:  [
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数学简介--集合与逻辑', isVIP: '免费', src: 'http://cdn.xuematech.com/video/数学.mp4' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数论-整除、同余', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '均值、柯西、排序不等式', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '基本初等函数', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '三角专题', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数列1-求和', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数列2-求通项', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '向量综合', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '复数综合1', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '复数综合2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '倒数及其应用', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '立体几何', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '排列组合与二项式定理', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '直线与圆的方程', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '解析几何', isVIP: 'VIP' }
            ],
            // cdata: [],
            // 语文
            km1: [
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '语文试题特点-1', isVIP: '免费', src:'http://cdn.xuematech.com/video/语文.mp4' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '语文试题特点-2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '基础知识-压缩对比', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '基础知识-样章', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '古诗文-1', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '古诗文-2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '古诗文-3', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '古诗文-4诗歌', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '现代文-1', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '现代文-2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '现代文-3', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '作文-1', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '作文-2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '真题解析-1', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '真题解析-2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '真题解析-3', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '真题解析-4', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '真题解析-5', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yuwen.jpg', title: '真题解析-6', isVIP: 'VIP' },
                
            ],
            // 数学
            km2: [
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数学简介--集合与逻辑', isVIP: '免费', src:'http://cdn.xuematech.com/video/数学.mp4' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数论-整除、同余', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '均值、柯西、排序不等式', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '基本初等函数', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '三角专题', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数列1-求和', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '数列2-求通项', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '向量综合', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '复数综合1', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '复数综合2', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '倒数及其应用', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '立体几何', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '排列组合与二项式定理', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '直线与圆的方程', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/shuxue.jpg', title: '解析几何', isVIP: 'VIP' }
            ],
             // 英语
            km3: [
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '英语考试特点', isVIP: '免费', src:'http://cdn.xuematech.com/video/英语.mp4' },
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '英语完型', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(1)总论', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(2)常见出题点', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(3)题型解析1', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(3)题型解析2', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(3)题型解析3', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(4)附加题1', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '阅读(4)附加题2', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '英语写作(1)', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '英语写作(2)', isVIP: 'VIP'},
                { img: '/imgs/zaixianketang/zizhaobishi/yingyu.jpg', title: '英语写作(3)', isVIP: 'VIP'},
               
            ],
            // 物理
            km4: [
                { img: '/imgs/zaixianketang/zizhaobishi/wuli.jpg', title: '真题库', isVIP: '免费', src:'http://cdn.xuematech.com/video/物理.mp4' },
                { img: '/imgs/zaixianketang/zizhaobishi/wuli.jpg', title: '试题特点', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/wuli.jpg', title: '运动学', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/wuli.jpg', title: '静电场和电容器', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/wuli.jpg', title: '电路', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/wuli.jpg', title: '磁场和磁感应', isVIP: 'VIP' }
            ],
            // 化学
            km5: [
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(1)', isVIP: '免费', src:'http://cdn.xuematech.com/video/化学.mp4' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(2)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '试题特点', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '备考策略', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(1)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(2)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(3)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(4)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(5)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(6)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(7)', isVIP: 'VIP' },
                { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(8)', isVIP: 'VIP' },
            ],
            // 生物
            // km6: [
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(1)', isVIP: '免费', src:'http://cdn.xuematech.com/video/化学.mp4' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '试题特点', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '备考策略', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(1)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(3)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(4)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(5)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(6)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(7)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(8)', isVIP: 'VIP' },
            // ],
            // 历史
            // km7: [
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(1)', isVIP: '免费', src:'http://cdn.xuematech.com/video/化学.mp4' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '试题特点', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '备考策略', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(1)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(3)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(4)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(5)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(6)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(7)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(8)', isVIP: 'VIP' },
            // ],
            // 地理
            // km8: [
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(1)', isVIP: '免费', src:'http://cdn.xuematech.com/video/化学.mp4' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '试题特点', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '备考策略', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(1)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(3)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(4)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(5)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(6)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(7)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(8)', isVIP: 'VIP' },
            // ],
            // 政治
            // km9: [
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(1)', isVIP: '免费', src:'http://cdn.xuematech.com/video/化学.mp4' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '名校真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '试题特点', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '备考策略', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(1)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(2)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(3)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(4)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(5)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(6)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(7)', isVIP: 'VIP' },
            //     { img: '/imgs/zaixianketang/zizhaobishi/huaxue.jpg', title: '清北真题库(8)', isVIP: 'VIP' },
            // ],
           
            isshow: false

        }
    },
    methods: {
        tanchuang() {
            this.isshow = true;
        },
        goPlay() {

        },
        goPlayVideo(src) {
            var src = src;
            this.$router.push({  
                path: '/videoplay',   
                name: 'videoplay',  
                params: {   
                    src: src  
                },  
                // query: {  
                //     id: id,    
                // }  
            }) 
            window.scroll(0, 0); 
        }
    },
    watch: {
        radio1() {
            let num = this.radio1;
            // console.log(num)
            this.data = this[num];
            // console.log(this.data)
            // this.cdata = this.data.filter((item) => {
            //     console.log(item)
            //     // return item
            // });
            // console.log(this.cdata)
        }
    },
    created() {
        // this.dataUpdate();
    }
}
</script>