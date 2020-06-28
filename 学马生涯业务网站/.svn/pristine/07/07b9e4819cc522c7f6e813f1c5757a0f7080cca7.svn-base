<template>
    <!-- 4.选科志愿 -->
    <div class="xuankeReport">
        <div class="inner">
            <div class="report_page"  v-if="!isTuance&&data.headLogo">
                <div class="page_title">
                    EVALUATION REPORT OF HIGH SCHOOL STUDENTS` SUBJECT SELEVTION
                </div>
                <div class="page_img_title">
                    <img :src="data.headLogo.evaluation_logo">
                </div>
                <div class="page_img_logo">
                    <img :src="data.headLogo.home_logo">
                </div>
                <div class="page_detail">
                    <ul>
                        <li>
                            <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</p>
                            <p>{{data.studentData.name}}</p>
                        </li>
                        <li>
                            <p>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：</p>
                            <p>{{data.studentData.baccll_year}}</p>
                        </li>
                        <li>
                            <p>日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</p>
                            <p>{{data.studentData.serial_choose_report_create_at}}</p>
                        </li>
                    </ul>
                </div>
                <div class="page_bottom">
                    <img src="/imgs/xingaokao/xuankejuece/common/page-one-line.png" alt="">
                    <p>{{data.oem.name}}旗下品牌</p>
                    <p>测评网址{{data.oem.oem}}</p>
                    <p v-if="data.headLogo.address">地址{{data.headLogo.address}}</p>
                    <p>系统开发技术、测评方法及报告设计已申请知识产权保护</p>
                    <p>本报告仅供相关个人阅读参考，未经许可不得传阅 严禁用做他途</p>
                </div>
            </div>
            <div class="header_tuance" v-if="isTuance">
                 <p class="title">中学生选科测评报告</p>
            </div>
            <div class="header" v-if="!isTuance&&data.headLogo">
                <img :src="data.headLogo.header_logo" alt="">
                <p class="page_seq"></p>
                <p class="header_title">中学生选科测评报告</p>
            </div>
           <!--  <div class="header">
                <p class="title">{{text}}</p>
            </div> -->
            <div class="content">
                <div class="content_main"  v-if="data.target&&data.target[1]">
                    <div class="main_title">
                        <span>目标专业(测评)</span>
                    </div>
                    <ul class="mubiao_box">
                       <li v-for="(item, index) in data.target[1]">{{item.subject_name}}</li>
                    </ul>
                </div>  
                <div class="content_main"  v-if="data.target&&data.target[2]">
                    <div class="main_title">
                        <span>目标专业(探索)</span>
                    </div>
                    <ul class="mubiao_box">
                       <li v-for="(item, index) in data.target[2]">{{item.subject_name}}</li>
                    </ul>
                </div>   
                <div class="my_xuanke">
                    <div class="main_title">
                        <span>我的选科</span>
                    </div>
                    <div class="xuanke_box">
                        <p>选科组合</p>
                        <p>{{data.studentSubjectData}}</p>
                    </div>
                </div>
                <div class="yuanxiao">
                     <div class="main_title">
                        <span>选科要求及可报院校</span>
                    </div>
                    <div class="yuanxiao_box"  v-for="(item, index) in data.subjectUniversity" :key="index">
                        <div class="yuanxiao_box_title">
                            <!-- <span>专业</span> -->
                            <span>{{item.name}}</span>
                            <span>(共{{item.total}}所)</span>
                        </div>
                        <ul>
                            <li v-for="(item_arr, index) in item.arr" :key="index" v-if="item.total > 0" style="line-height:36px;">
                                <div v-if="item_arr.first_course_require">
                                    <span style="font-size:14px;font-weight:bold;">首选:{{item_arr.first_course_require}}<br>再选:{{item_arr.second_course_require}}</span>
                                    <span class="num">{{'(' + item_arr.num + ')'}}</span>
                                </div>
                                <div v-else>
                                    <span>{{ item_arr.choose_course_require}}</span>
                                    <span class="num">{{'(' + item_arr.num + ')'}}</span>
                                </div>
                            </li>
                            <li v-else>无</li>
                        </ul>
                    </div>
                </div>
                <div class="suggest">
                    <div class="main_title"><span>选科建议</span></div>
                    <div class="suggest_main">
                        <table width="100%" cellspacing="0" border="1">
                            <tr bgcolor="#3b7dbe" height="90th" style="color: #fff;font-size:24px" align="center">
                                <th width="190">学科</th>
                                <th width="152">加权结果</th>
                                <th width="220"><p>可报考专业</p><p>覆盖率</p></th>
                                <th width="190"><p>可报考院校</p><p>覆盖率</p></th>
                                <th width="190">目标专业覆盖率</th>
                                <th width="190">设为目标学科</th>
                            </tr>
                            <tr bgcolor="white" height="58" align="center" v-for="(item, index) in data.report">　　
                                <td bgcolor="#89b1d8">{{item.subject_name}}</td>　　
                                <td>{{item.weight}}</td>　　
                                <td>{{item.subject_coverage}}%</td>　　
                                <td>{{item.university_coverage}}%</td>　　
                                <td>{{item.targetSubject_coverage}}</td>　　　　
                                <td><i class="icon iconfont" style="font-size:18px;color:#0aa70a;" v-show="item.isGoal==1">✔</i></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="kebaozhuanye">
                    <div class="main_title">
                        <span>科目可报专业数据</span>
                    </div>
                     <div class="myEcharts">
                        <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart">
                        </div>
                    </div>
                </div>
                <div class="subject_message" v-for="(item, index) in data.subjectCategoryData" :key="index">
                    <div class="main_title">
                        <span>目标专业信息</span>
                    </div>
                    <div class="content_main subject">
                        <table width="100%" cellspacing="0" cellpadding="0" border="1">
                            <tr bgcolor="white" align="center">　　
                                <td width="120" bgcolor="#89b1d8">专业名称</td>　　
                                <td class="subject_info" align="left">{{item.name}}</td>　　
                            </tr>
                            <tr bgcolor="white" align="center">
                                <td bgcolor="#89b1d8">学科门类</td>
                                <td class="subject_info" align="left">{{item.first_name}}</td>
                            </tr>
                            <tr bgcolor="white" align="center">
                                <td bgcolor="#89b1d8">专业类</td>
                                <td class="subject_info" align="left">{{item.second_name}}</td>
                            </tr>
                            <tr bgcolor="white" align="center">
                                <td bgcolor="#89b1d8">专业代码</td>
                                <td class="subject_info" align="left">{{item.code}}</td>
                            </tr>
                            <tr bgcolor="white" align="center">
                                <td bgcolor="#89b1d8">授予学位</td>
                                <td class="subject_info" align="left">{{item.academic_degree}}</td>
                            </tr>
                            <tr bgcolor="white" align="center">
                                <td bgcolor="#89b1d8">学制</td>
                                <td class="subject_info" align="left">{{item.learn_year}}</td>
                            </tr>
                            <tr bgcolor="white" align="center">
                                <td bgcolor="#89b1d8">培养目标</td>
                                <td class="subject_info" v-html="item.target" align="left"></td>
                            </tr>
                            <tr bgcolor="white">
                                <td bgcolor="#89b1d8" align="center">主要课程</td>
                                <td class="subject_info" v-html="item.course" align="left"></td>
                            </tr>
                            <tr bgcolor="white" align="left">
                                <td bgcolor="#89b1d8" align="center">毕业生能力</td>
                                <td class="subject_info" v-html="item.ability" align="left"></td>
                            </tr>
                            <tr bgcolor="white">
                                <td bgcolor="#89b1d8" align="center">就业前景与方向</td>
                                <td class="subject_info" v-html="item.prospect_direction" align="left"></td>
                            </tr>
                            <tr bgcolor="white">
                                <td bgcolor="#89b1d8" align="center">相近专业</td>
                                <td class="subject_info" align="left">
                                   <span v-for="(item_zy,index) in item.similar_name">{{item_zy.name}}<span v-show="index < item.similar_name.length-1">、</span></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p class="footer_left" v-if="data.length&&data.oem.oem">测评网址：{{data.oem.oem}}</p>
                <p class="footer_right">测评方法、工具及报告设计已申请产权保护</p>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .xuankeReport {
        .inner {
            width: 810px;
            margin: 0 auto;
            padding: 40px 34.6px;
        }
        .report_page {
            border: 1px solid #000;
            padding: 20px 2%;
            height: 1100px;
            color: #000;
            font-size: 17px;
            .page_title {
                height: 40px;
                line-height: 40px;
                width: 90%;
                margin: 20px auto;
                text-align: center;
                background: #068b50;
                color: #fff;
                font-size: 17px;
            }
            .page_img_title {
                padding: 0px 115px;
                padding-top: 60px;
                width: 540px;
                img {
                    width: 540px;
                    height: 136px;
                    display: block;
                    margin: 0 auto;
                }
            }
            .page_img_logo {
                height: 415px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    display: block;
                    // margin: 150px auto 150px;
                    max-height: 120px;
                    max-width: 135px;
                    border: 0;
                }
            }
            .page_detail {
                ul {
                    width: 390px;
                    overflow: hidden;
                    margin: 0 auto;
                    li {
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        margin-bottom: 20px;
                        p {
                            float: left;
                            &:first-child {
                                width: 87px;
                            }
                            &:last-child {
                                height: 19px;
                                line-height: 19px;
                                width: 300px;
                                border-bottom: 1px solid #000;
                            }
                        }
                    }
                }
            }
            .page_bottom {
                width: 618px;
                margin: 0 auto;
                img {
                    width: 618px;
                }
                p {
                    line-height: 40px;
                    text-align: center;
                }
            }
        }
        .header_tuance {
            height: 70px;
            border-bottom: 1px solid #000;
            overflow: hidden;
            margin: 0 auto 10px;
            line-height: 70px;
            padding-bottom: 30px;
            margin-bottom: 20px;
            .title {
                text-align: center;
                color: #1654a1;
                font-size: 35px;
            }
        }
        .header {
            height: 40px;
            border-bottom: 1px solid #000;
            overflow: hidden;
            margin: 0 auto 10px;
            line-height: 40px;
            margin-bottom: 20px;
            padding-top: 30px;
            img {
                float: left;
                width: 130px;
                height: 40px;
            }
            .page_seq {
                float: right;
                width: 38px;
                height: 38px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABKCAIAAAB8cD4YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NjgxZTg5OS0yN2RmLTY1NDQtYWEyOS0wOGIwYzdjZTk2ZjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJENTc1RkNGODE0MTFFNzk1RjhGN0Q1MDJDRjdFODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmQ1M2NhODQtOThkNi00YzdlLWI1YWUtNzBlYWRmMTI2ZGI4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIg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) no-repeat center/100% 100%;
                text-align: center;
                color: #fff;
                margin-left: 5px;
            }
            .header_title {
                text-align: center;
                color: #1654a1;
                font-size: 17px;
                float: right;
            }
        }
        .content {
            border: 1px solid #000;
            padding: 20px 2%;
            .main_title {
                font-size: 30px;
                text-align: center;
                margin: 0 auto 20px;
                // width: auto;
                color: #1654a1;
                span {
                    border-bottom: 1px solid #1654a1;
                    line-height: 1.6;
                }
            }
            .content_main {
                margin-bottom: 40px;
                .mubiao_box {
                    overflow: hidden;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    li {
                        width: 300px;
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        border: 1px solid #333;
                        margin-bottom: 20px;
                    }
                } 
            }
            .my_xuanke {
                margin-bottom: 40px;
                .xuanke_box {
                    border: 1px solid #333;
                    font-size: 17px;

                    p {
                        background-color: rgb(59, 125, 190);
                        height: 58px;
                        color: #fff;
                        text-align: center;
                        line-height: 58px;

                         &:last-child {
                            background-color: rgb(255, 255, 255);
                            height: 108px;
                            color: #000;  
                            line-height: 108px;
                        }
                    }
                }
            }
            .yuanxiao {
                margin-bottom: 40px;

                .yuanxiao_box {
                    margin-bottom: 30px;
                    border: 1px solid #000;
                    .yuanxiao_box_title {
                        padding-left: 30px;
                        background-color: #3b7dbe;
                        height: 56px;
                        line-height: 56px;
                        color: #fff;
                        font-size: 20px;
                        span {
                            margin-right: 5px;
                        }
                    }
                    ul {
                            display: flex;
                            /* justify-content: space-between; */
                            flex-wrap: wrap;
                        li {
                            box-sizing: border-box;
                            width: 374px;
                            height: 88px;
                            line-height: 88px;
                            font-size: 16px;
                            color: #333;
                            padding-left: 30px;
                            span {
                                // font-size: 14px;
                                font-weight: bold;
                                line-height: 36px;
                            }
                            .num {
                                color: #3b7dbe;
                                margin-left: 15px;
                            }
                        }
                    }

                }
            }
            .blance {
                margin-bottom: 40px;
                table {
                    border: 1px solid #333;
                    font-size: 0px;
                    .table_header {
                        background-color: rgb(59, 125, 190);
                        height: 58px;
                        text-align: -webkit-center;
                        th {
                            color:#fff;
                            font-size: 17px;
                            text-align: center;
                        }
                    }
                    .table_main {
                        text-align: center;
                        color: #333;
                        border-right: 1px solid #333;
                        border-bottom: 1px solid #333;
                        font-size: 14px;
                        line-height: 26px;
                        th {

                        }
                    }
                }
            }
            .suggest {
                margin-bottom: 40px;

                table {
                    border: 1px solid #333;
                    font-size: 0px;
                    tr {
                           // background-color: rgb(59, 125, 190);
                            height: 90px;
                            text-align: center;
                        th {
                            text-align: center;
                            color: #fff;
                            border-right: 1px solid #333;
                            border-bottom: 1px solid #333;
                            font-size: 17px;
                            background-color: #3b7dbe;
                            p {

                            }
                        }
                    }
                    tr {
                        text-align: center;
                        color: #333;
                        border-right: 1px solid #333;
                        border-bottom: 1px solid #333;
                        font-size: 14px;
                        line-height: 26px;
                        td {

                        }
                    }
                }
            }
            .kebaozhuanye {
                 margin-bottom: 40px;
                 .myEcharts {
                    height: 800px;
                 }
            }
            .subject_message {
                table {
                    width: 100%;
                    empty-cells: show;
                    background-color: transparent;
                    border-collapse: collapse;
                    border-spacing: 0;
                    tr {
                        td {
                            // text-align: left;
                            color: #333;
                            border-right: 1px solid #333;
                            border-bottom: 1px solid #333;
                            font-size: 14px;
                            padding: 5px 10px;
                        }
                    }
                }
            }
        }
        .footer {
            height: 40px;
            border-top: 1px solid #000;
            margin: 10px auto 0;
            overflow: hidden;
            box-sizing: border-box;
            line-height: 25px;
            color: #1654a1;
            font-size: 17px;
            .footer_left {
                float: left;
            }
            .footer_right {
                float: right;
            }
        }
        // .content_main_target li {
        //     width: 300px;
        //     height: 60px;
        //     line-height: 60px;
        //     text-align: center;
        //     border: 1px solid #333;
        //     margin-bottom: 20px;
        // }
    }
</style>
<script>

import echarts from 'echarts';
export default {
    props: {
        className: {
          type: String,
          default: 'yourClassName'                    
        },
        id: {
          type: String,
          default: 'yourID'
        },
        width: {
          // type: String,
          default: '800px'
        },
        height: {
          // type: String,
          default: '800px'
        } 
    },
    data() {
        return {
            // 数据回来后在显示页面
            // isShowPage: false,

            isTuance: false,
            data: [],
            state: 1,
            page: '',
            // 平衡单
            phdData: [],
            // 专业
            zyList: { 1: [], 2: [] },
            // 选科建议
            xkjyList: [],
            UserProvince: '',
             //设置为目标学科
            TargetDiscipline: [],
            // 目标学科不足3门时，保存至我的报告显示提示框
            isShowTips: false,
            tishi: '',
            // 导出PDF
            htmlTitle: 'xuankezhiyuan.pdf',
            echartsData: [],
           // echarts图表中用于渲染可选专业总数
            echartsSubjectCount: '--',
            echartsData1 : [
                {value: 0, name: '哲学'},
                {value: 0, name: '经济学'},
                {value: 0, name: '法学'},
                {value: 0, name: '教育学'},
                {value: 0, name: '文学'},
                {value: 0, name: '历史学'},
                {value: 0, name: '理学'},
                {value: 0, name: '工学'},
                {value: 0, name: '农学'},
                {value: 0, name: '医学'},
                {value: 0, name: '管理学'},
                {value: 0, name: '艺术学'},
                {value: 0, name: '军事学'}
            ],
            disciplineBZdata: ['哲学','经济学', '法学', '教育学', '文学', '历史学', '理学', '工学', '农学', '医学', '管理学','艺术学', '军事学'],
            text: '360°选科测评报告'
        }
    },
    watch: {
        echartsData() {
            var m = this.echartsData;
          
            this.echartsData1 = [];
            this.echartsData1 = [
                {value: m.zhexue, name: '哲学'},
                {value: m.jingji, name: '经济学'},
                {value: m.faxue, name: '法学'},
                {value: m.jiaoyuxue, name: '教育学'},
                {value: m.wenxue, name: '文学'},
                {value: m.lishi, name: '历史学'},
                {value: m.lixue, name: '理学'},
                {value: m.gongxue, name: '工学'},
                {value: m.nongxue, name: '农学'},
                {value: m.yixue, name: '医学'},
                {value: m.guanliXue, name: '管理学'},
                {value: m.yishuxue, name: '艺术学'},
                {value: m.junshixue, name: '军事学'}
            ];
            this.initChart();
        }
    },
    methods: {
        getUserChartBySubject() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax
                // get请求
                .post(this.G_uri + '/chooseSubject/getChooseSubjectReportDetail', {
                    // data
                    source: 1,
                    batch: this.$route.query.batch
                },{
                    headers:{
                        token: token
                    }
                })
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.data = res.data.data; 
                        _this.echartsData = res.data.data.char;
                        _this.echartsSubjectCount = res.data.data.char.subjectCount;
                    } 
                    
                })
                .catch(function(error) {
                    console.log(error)
                })
        },

        initChart() {
            // console.log(echarts)
            this.chart = echarts.init(this.$refs.myEchart);
            // 把配置和数据放这里
            this.chart.setOption({
                title: {
                    // 可选专业总数
                    text: "可选专业:" + this.echartsSubjectCount,
                    top: 'center',
                    left: 'center',
                    textStyle: {
                        color:'#2c8ffc'
                        
                    }
                },
                toolbox: {
                    show: false,
                    feature: {
                        saveAsImage: {}
                    },
                    right:50
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: this.disciplineBZdata,
                },
                series: [
                    // {
                    //     name:'访问来源',
                    //     type:'pie',
                    //     selectedMode: 'single',
                    //     radius: [0, '30%'],

                    //     label: {
                    //         normal: {
                    //             position: 'inner'
                    //         }
                    //     },
                    //     labelLine: {
                    //         normal: {
                    //             show: false
                    //         }
                    //     },
                    //     data:[
                    //         {value:335, name:'直达', selected:true},
                    //         {value:679, name:'营销广告'},
                    //         {value:1548, name:'搜索引擎'}
                    //     ]
                    // },
                    {
                        name:'学科门类',
                        type:'pie',
                        radius: ['40%', '55%'],
                        silent:false,
                        label: {
                            normal: {
                                formatter: '  {b|{b}：}{c}  {per|{d}%}  ',
                                // formatter:function(){
                                //     return "水水水水";
                                // },
                                
                                textStyle: {
                                    fontSize: '16',
                                    fontWeight: 'bold',
                                    // color:'#2c8ffc'
                                },
                                //backgroundColor: '#eee',
                                //borderColor: '#aaa',
                                //borderWidth: 1,
                                //borderRadius: 4,
                                // shadowBlur:3,
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2,
                                // shadowColor: '#999',
                                // padding: [0, 7],
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center',
                                    },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    hr: {
                                        //borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#2c8ffc',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data:this.echartsData1
                    }
                ]
            })
        }
    },
    created() {

        this.getUserChartBySubject();
        window.scrollTo(0, 0);
    },
    mounted() {
        this.getUserChartBySubject();
        this.initChart();
        if(window.sessionStorage.tuance=='3'){
            this.isTuance = true;
        }
    }
}
</script>
