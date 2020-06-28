<template>
    <!-- 在线课堂 -->
    <div class="onlineClassroom">
        <div class="banner">
            <!-- <img src="/imgs/zaixianketang/onlineClassBanner.jpg" alt=""> -->
        </div>
        <div class="content">
            <!-- 复试网课 -->
            <div class="retestNetworkCourse">
                <div class="inners">
                    <div class="title">
                        复试冲刺网课
                    </div>
                    <div class="bigTitle">自招&综评冲刺网课</div>
                    <p class="jianjie">3小时搞定22所大学自主招生</p>
                    <ul class="footLis">
                        <li>考法分析</li>
                        <li>笔试押题</li>
                        <li>面试闯关</li>
                        <li>真题训练</li>
                    </ul>
                    <div class="goBuy" @click="goBuy" v-show="isCanView == 1">在线激活</div>
                    <div class="havenBuy" v-if="isCanView !== 1" @click="goMycourse">我的课程</div>
                    <div class="arrow1"></div>
                    <div class="arrow2"></div>

                </div>
                <div class="xuemaIntroduction">
                    <div class="inner">
                        <div class="title">
                            学马教育介绍
                        </div>
                        <div class="xiangqing">
                            <p>学马教育集团总部位于北京，是一家专注于个性化生涯规划服务，为中学学校、学生提供整体解决方案的综合性教育公司，以“成为中国有影响力的生涯规划专家”为发展愿景，业务内容涵盖生涯规划测评、生涯规划师资培训、生涯教育发展管理云平台、生涯课程设计、生涯规划咨询、生涯教育顶层设计等，为中学生提供包括国内外升学路径、高考选科、大学择校、未来职业发展的决策支持，帮助中学生探寻科学的生涯发展之路。</p>
                            <p>学马教育集团旗下控股4个直营分公司，分别为长沙学马直营分公司、济南学马直营分公司、成都学马直营分公司以及湖南美丽星途直营分公司。经过6年的发展拥有近300人的服务团队，目前业务范围覆盖全国近20个省份，建立了广泛的国内外高校和渠道资源，已辅导上万名中学生顺利进入国内外理想大学。</p>
                        </div>
                    </div>
            </div>
            </div>
            <!-- 精品复试课 -->
            <div class="videoBox1">
                <div class="inner">
                    <div class="list">
                        <div class="videoBox_left">
                            <video  controls  src="http://video.xuematech.com/bd0fd5fd16074a848a1f55ce86445dca/99729ef0963f4f77a2e89baf6d61c854-2d3958bb222f41d7cc8490cb1c168d03-sd.mp4" poster="/imgs/zaixianketang/mianshi.jpg" preload="none">
                            </video>
                        </div>
                        <div class="videoBox_right">
                            <p class="title">自招面试</p>
                            <p class="tese">课程特色</p>
                            <div class="detail">
                                <p><span>·</span> 以高考为本，自招为辅，稳中取胜</p>
                                <p><span>·</span> 归纳各高校命题规律，有针对性的帮助学生总结备考策略</p>
                                <p><span>·</span> 线上学习录播课程，突破时间和空间的限制</p>
                                <p><span>·</span> 讲练结合，配套有最新自主招生真题库</p>
                            </div>
                            <p class="fuli"><span>福利1：</span>免费获得学马教育全套笔面试内部教研资料</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="videoBox2">
                <div class="inner">
                    <div class="list">
                        <div class="videoBox_left">
                            <p class="title">自招面试</p>
                            <p class="tese">课程特色</p>
                            <div class="detail">
                                <p><span>·</span> 以高考为本，自招为辅，稳中取胜</p>
                                <p><span>·</span> 归纳各高校命题规律，有针对性的帮助学生总结备考策略</p>
                                <p><span>·</span> 线上学习录播课程，突破时间和空间的限制</p>
                                <p><span>·</span> 讲练结合，配套有最新自主招生真题库</p>
                            </div>
                            <p class="fuli"><span>福利1：</span>免费获得学马教育全套笔面试内部教研资料</p>
                        </div>
                        <div class="videoBox_right">
                            <video  controls  src="http://video.xuematech.com/db59d513c02040a9932b96a32c08f01c/a1235b20bea74fbc8da3428cca893bfe-3db08da40afe876718fa058825b1619f-sd.mp4" poster="/imgs/zaixianketang/shuxue.jpg" preload="none">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="videoBox1">
                <div class="inner">
                    <div class="list">
                        <div class="videoBox_left">
                            <video  controls  src="http://video.xuematech.com/589e8b06b8e24389a8a9beba7a2f5e94/ceb1939e0efe4849a090850bfd0ff31b-1855c39233f5a93ccef9a2f894ab674b-sd.mp4" preload="none"  poster="/imgs/zaixianketang/kexueyuan.png">
                            </video>
                        </div>
                        <div class="videoBox_right">
                            <p class="title">自招综评</p>
                            <p class="tese">课程特色</p>
                            <div class="detail">
                                <p><span>·</span> 以高考为本，自招为辅，稳中取胜</p>
                                <p><span>·</span> 归纳各高校命题规律，有针对性的帮助学生总结备考策略</p>
                                <p><span>·</span> 线上学习录播课程，突破时间和空间的限制</p>
                                <p><span>·</span> 讲练结合，配套有最新自主招生真题库</p>
                            </div>
                            <p class="fuli"><span>福利1：</span>免费获得学马教育全套笔面试内部教研资料</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="videoBox2">
                <div class="inner">
                    <div class="list">
                        <div class="videoBox_left">
                            <p class="title">自招综评</p>
                            <p class="tese">课程特色</p>
                            <div class="detail">
                                <p><span>·</span> 以高考为本，自招为辅，稳中取胜</p>
                                <p><span>·</span> 归纳各高校命题规律，有针对性的帮助学生总结备考策略</p>
                                <p><span>·</span> 线上学习录播课程，突破时间和空间的限制</p>
                                <p><span>·</span> 讲练结合，配套有最新自主招生真题库</p>
                            </div>
                            <p class="fuli"><span>福利1：</span>免费获得学马教育全套笔面试内部教研资料</p>
                        </div>
                        <div class="videoBox_right">
                             <video  controls  src="http://video.xuematech.com/6ee53d3f10504b35b72913ce39623357/e05e036ae86449e3bd7a54f883ecfa1c-fafb069d095f3c2596112b9c88b2db1c-sd.mp4" preload="none"  poster="/imgs/zaixianketang/zhongnandaxue.png">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 课程大纲 -->
            <div class="courseOutline">
                <div class="inner">
                    <div class="title">
                        课程形式
                    </div>
                    <div class="OutlineContet">
                        <p class="analysis">课程形式为90所院校自招考法分析、招生简章解读以及复习建议。每位考生选3所志愿院校，进行针对性学习</p>
                        <p class="description"></p>
                        <div class="details">
                            <!-- <div class="details_title">
                                <p>真题</p>
                                <p>核心内容</p>
                            </div> -->
                            <table border="1">
                                <tr>
                                    <th>真题</th>
                                    <th>核心内容</th>
                                </tr>
                                <tr>
                                    <td>复试考法</td>
                                    <td>19年招生简章</td>
                                </tr>
                                <tr>
                                    <td>复习建议</td>
                                    <td>往年真题分析</td>
                                </tr>
                                <tr>
                                    <td>备考行程</td>
                                    <td>规划时间点</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 讲师介绍 -->
            <div class="instructors">
                <div class="inner">
                    <div class="title">讲师介绍</div>
                    <ul class="lis">
                        <li v-for="(item, index) in instructors" :key="index">
                            <img :src="item.imgSrc" alt="">
                            <p class="university">{{item.university}}</p>
                            <p class="teacher">{{item.teacher}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Jihuoka v-show="isShowjihuoka" v-on:go-close="isShowjihuoka = false" v-on:go-oppenUniversity="isShowUniversitySelection = true"></Jihuoka>
        <!-- 激活视频卡后展示自招学校，从中选取三所学校 -->
        <div class="universitySelection" v-if="isShowUniversitySelection">
            <div class="selectionBox">
                <div class="title">
                    选择大学*本课程可匹配三所自主招生的大学，请选择3所大学
                </div>
                <div class="prompt">
                    提示：确认后无法重新选择，请慎重考虑！
                </div>
                <ul class="universityLis">
                    <li v-for="(item, index) in universityList" :key="index" @click="pushId(item.id)" :class="universityIds.some(function(value,index, arr) { 
                        // console.log(1111)
                        return value == item.id }) ? 'Active': '' ">
                        <div class="imgBox">
                            <img :src="item.pic" alt="">
                        </div>
                        <p class="universityName">{{item.name}}</p>
                        <div class="check">
                            √
                        </div>
                    </li>                   
                </ul>
                <div :class="isActiveBtn ? 'btn' : 'unBtn'" @click="saveUniversityIds">
                        确定
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .onlineClassroom {
        background-color: #f9f9f9;
        padding-bottom: 40px;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .banner {
            width: 100%;
            height: 492px;
            background: url(/imgs/zaixianketang/onlineClassBanner.jpg) no-repeat center center;
        }
        .content {
            // 复试网课
            .retestNetworkCourse {
                background: url(/imgs/zaixianketang/bg/bg_xuemajiaoyu.png) no-repeat;
                height: 393px;
                .inners {
                    // margin-top: -50px;
                    top: -45px;
                    background-color: #fff;
                    padding: 10px 25px;
                    padding-top: 10px;
                    padding-bottom: 20px;
                    width: 950px;
                    margin: 0 auto;
                    box-shadow: 0px 0px 8px rgba(222, 222, 222, .61);
                    position: relative;
                    // z-index: 200;
                }
                .arrow1 {
                    width: 0px;
                    height: 0px;
                    border-style: solid;
                    border-width: 0px 26px 45px 26px;
                    border-color: transparent transparent #fff transparent;
                    position: absolute;
                    left: -26px;
                    top: 0px;
                    // z-index: 1;
                }
                .arrow2 {
                    width: 0px;
                    height: 0px;
                    border-style: solid;
                    border-width: 0px 26px 45px 26px;
                    border-color: transparent transparent #fff transparent;
                    position: absolute;
                    right: -26px;
                    top: 0px;
                    z-index: 1;
                    
                }
                .title {
                    height: 42px;
                    line-height: 42px;
                    color: #333;
                    font-size: 22px;
                    font-weight: bold;

                }
                .bigTitle {
                    height: 38px;
                    line-height: 38px;
                    color: #666;
                    font-weight: 500;
                    font-size: 18px;
                }
                .jianjie {
                    height: 36px;
                    line-height: 36px;
                    color: #3491f8;
                    font-weight: 600;
                    font-size: 16px;
                }
                .footLis {
                    padding-top: 14px;
                    height: 36px;
                    li {
                        float: left;
                        width: 102px;
                        height: 34px;
                        border-radius: 2px;
                        text-align: center;
                        line-height: 34px;
                        margin-right: 20px;
                        border: 1px solid #de675f;
                        color: #de675f;

                    }
                }
                .goBuy {
                    position: absolute;
                    right: 40px;
                    bottom: 20px;
                    width: 260px;
                    height: 50px;
                    color: #fff;
                    background-color: #3592f9;
                    border-radius: 25px;
                    line-height: 50px;
                    text-align: center;
                    cursor: pointer;
                    box-shadow: 0px 3px 3px #135fb3;
                    &:active {
                        // background-color: #156def;
                        box-shadow: none;

                    }
                }
                .havenBuy {
                    .goBuy;
                }
            }
            // 学马介绍
            .xuemaIntroduction {
                position: relative;
                top: -45px;
                .inner {
                    padding-top: 20px;
                }
                .title {
                    height: 70px;
                    color: #333;
                    line-height: 70px;
                    text-align: center;
                    font-size: 22px;
                    font-weight: bold;
                }
                .xiangqing {
                    // padding: 5px 20px;
                    font-size: 14px;
                    color: #666;
                    p {
                        text-indent: 2em;
                    }
                }
            }
            // 课程大纲
            .courseOutline {
                height: 414px;
                // margin-bottom: 20px;
                background-color: #fff;
                .inner {
                    padding-top: 50px;
                    background-color: #fff;
                }
                .title {
                    height: 40px;
                    color: #333;
                    line-height: 40px;
                    text-align: center;
                    font-size: 22px;
                    font-weight: bold;
                }
                .OutlineContet {
                    // padding: 0px 20px 20px 20px;
                }
                .analysis {
                    font-size: 14px;
                    color: #666;
                    line-height: 30px;
                    margin-bottom: 14px;
                    text-align: center;
                }
                .description {
                    line-height: 24px;
                    font-size: 14px;
                    color: #666;
                }

                .details {
                    padding-top: 20px;
                    table {
                        border: 1px solid #dedede;
                        tr {
                            width: 1160px;
                            line-height: 54px;
                            th {
                                padding-left: 20px;
                                width: 556px;
                                background-color: #f5f7f6;
                                color: #333;
                                font-size: 18px;
                            }
                        }
                        tr {
                            width: 100%;
                            line-height: 54px;
                            td {
                                padding-left: 20px;
                                width: 556px;
                                font-size: 14px;
                            }
                        }
                    }

                }
            }
            // 学员评价
            .sudentEvaluation {
                margin-bottom: 20px;
                .inner {
                    padding-top: 15px;
                    background-color: #fff;
                }
                .title {
                    width: 94px;
                    height: 36px;
                    background-color: #3592f9;
                    border-radius: 0px 18px 18px 0px;
                    color: #fff;
                    padding-left: 20px;
                    line-height: 36px;
                }
                .lis {
                    padding: 20px;
                    overflow: hidden;
                    li {
                        padding: 5px 20px;
                        width: 278px;
                        height: 259px;
                        border: 1px solid #d9d9d9;
                        border-radius: 2px;
                        margin-right: 100px;
                        float: left;
                        &:last-child {
                            margin-right: 0px;
                        }
                        .topBox {
                            padding: 12px 0px;
                            .imgBox {
                                float: left;
                                margin-right: 15px;
                                height: 60px;
                                width: 60px;
                                border-radius: 50%;
                                img {
                                    height: 60px;
                                    width: 60px;
                                    border-radius: 50%;
                                }
                            }
                            .topRight {
                                float: left;
                                .name {
                                    font-size: 14px;
                                    color: #333;
                                    height: 25px;
                                    line-height: 25px;
                                    margin-bottom: 7px;
                                }
                                .address {

                                    height: 28px;
                                    line-height: 28px;
                                    font-size: 12px;
                                    color: #3492f9;
                                }
                            }

                        }
                        .description {
                            padding: 20px;
                            overflow: hidden;
                        }
                    }
                }
            }
            // 讲师介绍
            .instructors {
                // margin-bottom: 20px;
                // height: 448px;
                height: 650px;
                background: url(/imgs/zaixianketang/bg/bg_blue.png) no-repeat center 0px;
                .inner {
                    // min-height: 1000px;
                    // padding-top: 15px;
                    // background-color: #fff;
                }
                .title {
                    height: 110px;
                    color: #fff;
                    line-height: 110px;
                    text-align: center;
                    font-size: 22px;
                 
                }
                .lis {
                    padding: 0px 50px;
                    height: 510px;
                    // overflow: hidden;
                    li {
                        box-sizing: border-box;
                        padding: 10px;
                        padding-bottom: 0px;
                        width: 257px;
                        height: 510px;
                        background: url(/imgs/zaixianketang/bg/bg_mingshi.png);
                        margin-right: 20px;
                        float: left;
                        padding-top: 132px;
                        position: relative;
                        transition: all .5s linear;
                        &:hover {
                            transform: translateY(-40px);
                           
                        }
                        &:last-child {
                            margin-right: 0px;
                        }
                        img {
                            width: 233px;
                            height: 233px;
                            border: 2px solid #fff;
                        }
                        .teacher {
                            // padding-top: 10px;
                            position: absolute;
                            left: 50%;
                            margin-left: -45px;
                            bottom: 11px;
                            font-size: 16px;
                            color: #fff;
                            background-color: #e0675c;
                            width: 90px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                        }
                        .university {
                            padding-top: 8px;
                            font-size: 14px;
                            line-height: 22px;
                            color: #fff;
                        }
                    }
                }
            }
            // 复试网课
            .videoBox1 {
                background-color: #fff;
                .inner {
                    padding: 65px 0px;
                    height: 380px;
                    box-shadow: 0px -5px 5px #f6f6f6;
                }
                .list {
                    width: 1300px;
                }
                .videoBox_left {
                    padding: 20px;
                    float: left;
                    width: 600px;
                    height: 340px;
                    background-color: #c1defe;
                    border-radius: 3px;
                    video {
                        width: 600px;
                        height: 340px;
                    }
                }
                .videoBox_right {
                    float: left;
                    padding-top: 27px;
                    padding-left: 50px;
                    width: 610px;
                    height: 380px;
                    background: url(/imgs/zaixianketang/icon/icon_ren.png) no-repeat 430px 28px;
                    .title {
                        width: 510px;
                        font-size: 22px;
                        line-height: 54px;
                        color: #3592f9;
                        border-bottom: 1px solid #dcdcdc;
                        margin-bottom: 10px;
                    }
                    .tese {
                        font-size: 16px;
                        color: #333;
                        line-height: 36px;
                        font-weight: 600;
                    }
                    .detail {
                        line-height: 34px;
                        color: #666;
                    }
                    .fuli {
                        line-height: 74px;
                        color: #333;
                        font-weight: bold;
                        font-size: 14px;
                        padding-left: 30px;
                        background: url(/imgs/zaixianketang/icon/icon_liwu.png) no-repeat 0px center;
                    }
                }
            }
            .videoBox2 {
                background-color: #fff;
                width: 100%;
                overflow: hidden;
                .inner {
                    // padding: 65px 0px;
                    height: 512px;
                }
                .list {
                    width: 1800px;
                    background-color: #f6f6f6; 
                    height: 380px;
                    padding: 65px 0px; 
                    box-shadow: 0px -5px 5px #f6f6f6;

                }
                .videoBox_left {
                    float: left;
                    padding-top: 27px;
                    padding-left: 240px;
                    width: 360px;
                    height: 380px;
                    background: url(/imgs/zaixianketang/icon/icon_fen.png) no-repeat 0px 28px;
                    margin-left: -100px;
                    margin-right: 58px;
                    .title {
                        width: 360px;
                        font-size: 22px;
                        line-height: 54px;
                        color: #3592f9;
                        border-bottom: 1px solid #dcdcdc;
                        margin-bottom: 10px;
                    }
                    .tese {
                        font-size: 16px;
                        color: #333;
                        line-height: 36px;
                        font-weight: 600;
                    }
                    .detail {
                        line-height: 34px;
                        color: #666;
                    }
                    .fuli {
                        line-height: 74px;
                        color: #333;
                        font-weight: bold;
                        font-size: 14px;
                        padding-left: 30px;
                        background: url(/imgs/zaixianketang/icon/icon_liwu.png) no-repeat 0px center;
                    }
                }
                .videoBox_right {
                    padding: 20px;
                    float: left;
                    width: 600px;
                    height: 340px;
                    background-color: #c1defe;
                    border-radius: 3px;
                    video {
                        width: 600px;
                        height: 340px;
                    }
                }

            }
        }
        .universitySelection {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            z-index: 100;
            background-color: rgba(51,51,51,.5);
            .selectionBox {
                position: absolute;
                top: 120px;
                left: 50%;
                margin-left: -366px;
                width: 672px;
                // height: 440px;
                padding-top: 10px;
                padding-left: 40px;
                padding-bottom: 30px;
                background-color: #fff;

                .title {
                    font-size: 18px;
                    color: #333333;
                    line-height: 46px;
                }
                .prompt {
                    font-size: 12px;
                    color: #f60e0e;
                    line-height: 24px;
                }
                .universityLis {
                    padding-top: 20px;
                    overflow: auto;
                    height: 312px;
                    li {
                        box-sizing: border-box;
                        width: 136px;
                        height: 136px;
                        border: 1px solid #d9d9d9;
                        margin-right: 26px;
                        padding-top: 13px;
                        float: left;
                        margin-bottom: 20px;
                        position: relative;
                        cursor: pointer;
                        .imgBox {
                            width: 86px;
                            height: 86px;
                            border-radius: 50%;
                            margin: 0 auto;
                            img {
                                width: 86px;
                                height: 86px;
                                border-radius: 50%;
                            }

                        }
                        .check {
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 18px;
                            position: absolute;
                            top: 7px;
                            right: 7px;
                            border: 1px solid #d9d9d9;
                            font-size: 16px;
                            color: #d9d9d9;
                        }
                        .universityName {
                            padding-top: 6px;
                            font-size: 14px;
                            color: #333;
                            text-align: center;
                            line-height: 30px;
                        }
                    }
                    .Active {
                        border: 1px solid #3492f9;
                        .check {
                            background-color: #3492f9;
                            border: 1px solid #3492f9;
                            color: #fff;
                        }

                    }
                }
                .btn {
                    width: 120px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    font-size: 14px;
                    color: #fff;
                    background-color: #3492f9;
                    border-radius: 2px;
                    margin: 0 auto;
                    margin-top: 10px;
                    cursor: pointer;
                    &:active {
                        background-color: #156def;
                    }
                }
                .unBtn {
                    width: 120px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    font-size: 14px;
                    color: #fff;
                    background-color: #d9d9d9;
                    border-radius: 2px;
                    margin: 0 auto;
                    margin-top: 10px;
                    cursor: pointer;
                    cursor:not-allowed
                }
            }
        }

    }
</style>

<script>
// 引入激活生涯卡组件
import Jihuoka from './jihuoka.vue';
export default {
    components: { Jihuoka },
    props: [ ],
    data() {
        return { 
            navAnchorPoint: [
                { title: '学马教育', idx: '0' },
                { title: '精品视频', idx: '1' },
                // { title: '精品复试网课介绍', idx: '2' },   
                { title: '课程形式', idx: '2' },
                { title: '讲师介绍', idx: '3' }
            ],
            instructors: [
                { imgSrc: '/imgs/zaixianketang/jinbo.jpg', teacher: '金  波', university: '清华大学 2015年以712分湖南省第二名的成绩考入清华大学 ' },
                { imgSrc: '/imgs/zaixianketang/zhouyalin.jpg', teacher: '周雅琳', university: '清华大学 环境、化工与新材料大类 领军计划初试优秀，免笔试录取' },
                { imgSrc: '/imgs/zaixianketang/xiaoshiyu.jpg', teacher: '肖世裕', university: '清华大学 物理系  领军计划笔试优秀录取' },
                { imgSrc: '/imgs/zaixianketang/qiaodan.jpg', teacher: '乔  丹', university: '北京师范大学 汉语言文学 高考英语142分，曾成功辅导学员通过北大自主招生' },
            ],
            AnchorPoint: '0',
            src: '',
            // 视频卡进度 // 1 未绑卡  2绑卡 未选科 3选完课
            isCanView: 1,
            isShowjihuoka: false,
            // 自主招生学校列表
            universityList: [],
            universityIds: [],
            isActiveBtn: false,
            // 自主招生学校页面
            isShowUniversitySelection: false,

        }
    },
    methods: {
        goAnchorPoint(idx) {
            this.AnchorPoint = idx;
            if(idx == 0) {
                window.scrollTo(0,600);
            }
            if(idx == 1) {
                window.scrollTo(0,1000);
            }
            if(idx == 2) {
                window.scrollTo(0,1600);
            }
            if(idx == 3) {
                window.scrollTo(0,2000);
            }

        },
        goBuy() {
            this.isShowjihuoka = true
        },
        // 获取购买视频卡进度 isCanView// 视频卡进度 // 1 未绑卡  2绑卡 未选科 3选完课
        getCanView() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/video/isCanView', {
                    token: token,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.isCanView = res.data.data.isCanView;
                        if(_this.isCanView == 2) {
                            _this.isShowUniversitySelection = true;
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                   
                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        },
        // 获取自主招生学校列表，pid：2自招面试
        getUniversityList() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/video/getCategoryList', {
                    pid: 2
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.universityList = res.data.data.filter(function(item, index, arr) {
                            return item.id != 12;
                        });
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        },
        // 将添加好的自招学校id发送
        saveUniversityIds() {

            var token = window.sessionStorage.getItem('ymtxToken');
            var cateId = this.universityIds;
            var _this = this;
            if(cateId.length !== 3) {
                return;
            }
            this.$ajax
                .post(this.G_uri + '/video/storeViewList', {
                    cateId: cateId 
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                       if(res.data.data.id) {
                            _this.$router.push({
                                path: '/gerenzhongxin',
                                query: {
                                    component: 'Mycourses'
                                },
                                params: {   
                                    component: 'Mycourses',     
                                },  
                            })
                       }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        },
        // 向数组universityIds，添加自招学校id
        pushId(id) {
            // var ids = this.universityIds;
            var length = this.universityIds.length;
            // var boolean = ids.some.filter(function() {

            // })
            if(length == 0) {
                this.universityIds.push(id);
                return;
            }
            if(length > 0 && length < 3) {
                var boolean = this.universityIds.some(function(item, index) {
                    return item == id;
                })
                if(boolean) {
                    this.universityIds = this.universityIds.filter(function(item, index) {
                        return item != id;
                    })
                }else {
                    this.universityIds.push(id);
                }
                
            }
            if(length == 3) {
                var boolean2 = this.universityIds.some(function(item, index) {
                    return item == id;
                })
                if(boolean2) {
                    this.universityIds = this.universityIds.filter(function(item, index, arr) {
                        return item != id;
                    })
                }else {
                    return;
                }
            } 
        },
        // 已经购买，去个人中心我的课程查看
        goMycourse() {
            this.$router.push({
                path: '/gerenzhongxin',
                query: {
                    component: 'Mycourses'
                },
                params: {   
                    component: 'Mycourses',     
                },  
            })
        }


        

    },
    watch: {
        universityIds() {
            // console.log(this.universityIds);
            if(this.universityIds.length == 3) {
                this.isActiveBtn = true;
            }else {
                this.isActiveBtn = false;
            }
        }
    },
    mounted() {
        this.getCanView();
    },
    created() {
        this.getUniversityList();
    }   
}
</script>