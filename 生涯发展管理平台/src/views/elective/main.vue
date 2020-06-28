<template>
    <div class="elective">
        <div class="electiveBox">
            <ul>
                <li>
                    <div class="left">
                        <img src="/imgs/elective/search.png" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                           根据专业选科目
                        </div>
                        <p>
                            清华大学与中科院心理所研究成果，结合心理学和人因学，采取物理心理测评技术针对认知潜能、人格特征、兴趣、学习风格、心理健康进行综合测量，精准定位专业范围，帮助考生发现天赋，科学完成自我认知。
                        </p>
                        <div class="button" @click="getSubjectSelectProfessional()">
                            开始测评
                        </div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="/imgs/elective/xuankemu.png" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                           选科要求查询
                        </div>
                        <p>
                            按大学查询：快速查询在本省招生普通高校招生专业选考科目要求<br/>按学科查询：根据选考科目与目标专业查看院校专业选考要求详情。
                        </p>
                        <div class="button" @click="jump('/elective/xuekezhixuan/university')">
                            查询
                        </div>
                    </div>
                </li>
            </ul>
            <p><img src="/imgs/elective/tips.png" alt="">为了更好地进行选科决策，请先完成原有<router-link to="/selfAssessment/main" tag="span" class="go_shengya">生涯测评</router-link><span>（备注：360°选科=生涯测评+根据专业选科目）</span></p>
        </div>

        <div class="myReports">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                我的报告
            </div>
            <table>
                <thead>
                <tr>
                    <td>目标学科</td>
                    <td>选科项目</td>
                    <td>创建时间</td>
                    <td>操作</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in reportList.list" :key="index">
                    <td>{{item.subjectName}}</td>
                    <td>{{item.subjectModelName}}</td>
                    <td>{{item.createdAt}}</td>
                    <td><span @click="goReport(item.subjectModel,item.batch)">查看</span></td>
                </tr>
                </tbody>
            </table>
            <div class="page_box">
                <span>共{{count}}条</span>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="pageSize"
                  :total="count"
                  @current-change="currentChange"
                >
                </el-pagination>
            </div>
        </div>
        <JihuoMajor v-on:go-back="isShowJihuoMajor = false" v-show="isShowJihuoMajor"></JihuoMajor>
    </div>
</template>
<script>
    // 引入激活生涯卡组件
    import JihuoMajor from '../../components/jihuomajor.vue';
    export default {
        name: "index",
        components:{ JihuoMajor },
        data(){
            return{
                cdata:[
                    {
                        src:"/imgs/elective/search.png",
                        title:" 根据专业选科目",
                        content:"清华大学与中科院心理所研究成果，结合心理学和人因学，采取物理心理测评技术针对认知潜能、人格特征、兴趣、学习风格、心理健康进行综合测量，精准定位专业范围，帮助考生发现天赋，科学完成自我认知。",
                        button:"开始测评",
                        link:""
                    },
                    {
                        src:"/imgs/elective/xuankemu.png",
                        title:" 选科要求查询",
                        content:"按大学查询：快速查询在本省招生普通高校招生专业选考科目要求<br/>按学科查询：根据选考科目与目标专业查看院校专业选考要求详情。",
                        button:"开始测评",
                        link:"/elective/xuekezhixuan/university"
                    }
                ],
                // 报告数组
                reportList: [],
                // 报告共有多少条
                count: 0,
                // 报告一共有多少页
                totalPage: '',
                // 每页显示多少条
                pageSize: 8,
                // 当前页
                currentPage: 1,
                isShowJihuoMajor: false
            }
        },
        methods:{
            //跳转测评
            jump(path){
                this.$router.push(path)
            },
            //生涯档案-根据专业选科目-进度
            // code 1报告页，2去设置目标专业
            // getSubjectSelectProfessional(){
            //     let _this=this;
            //     this.$ajax.post(this.G_uri + '/chooseSubject/careerAccordingSubjectSelectProfessional',{
            //     },{
            //         headers:{
            //             token:window.sessionStorage.getItem('ymtxToken')
            //         }
            //     }).then( (res)=> {
            //         let code = res.data.data.code;
            //         if(res.data.code==2000){
            //             if(code == 1) {
            //                 _this.$router.push('/elective/majorSelectedSubjects/xuankezhiyuan');
            //             }else if(code == 2) {
            //                 _this.$router.push('/elective/majorSelectedSubjects/mubiaozhuanye');
            //             }
            //             // else if(code == 3) {
            //             //     _this.$router.push('/elective/majorSelectedSubjects/mubiaozhuanye');
            //             // }
            //         }
            //     })
            // },
            // 根据专业选科目进度
            getSubjectSelectProfessional() {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax.post(this.G_uri + '/chooseSubject/balanceSelectSubject',{
                    testType: 2,
                },{
                    headers:{token: token}
                })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        // 1未绑卡 2已绑卡未测试 3报告页 4目标页
                        let code = res.data.data.code;
                        if(code == 1) {
                            _this.isShowJihuoMajor = true;
                        } else if(code == 3) {
                            _this.$router.push('/elective/majorSelectedSubjects/xuankezhiyuan');
                        } else {
                            _this.$router.push('/elective/majorSelectedSubjects/mubiaozhuanye');
                        }

                        // else if(code == 3) {
                        //     _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                        // }else if(code == 4) {
                        //     _this.$router.push('/majorSelectedSubjects/threeResult');
                        // }else if(code == 5) {
                        //     _this.$router.push('/majorSelectedSubjects/xuankeReport');
                        // }

                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
            },
            // 获取报告列表
            getChooseReportList(value) {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                var pageNumber = value;
                var pageSize = this.pageSize;
                this.$ajax
                    .post(this.G_uri + '/chooseSubject/getChooseReportList',{
                        pageNumber: pageNumber,
                        pageSize: pageSize,
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        let data = res.data.data;
                        if(res.data.code == 2000) {
                            _this.reportList = data;
                            _this.totalPage = data.page.totalPage;
                            _this.count = data.page.count;
                        }else {
                            console.log(res.msg);
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            // 查看报告
            goReport(idx,batch) {
                //1是360°选科  3根据科目选专业 
                if(idx == 1) {
                    this.$router.push({  
                        path: '/zhinengxuanke/xuankeReport',    
                        query: {  
                            batch: batch
                        }  
                    })
                }else if(idx == 3) {
                    // 1是报告页，2是结果页
                    this.$router.push({  
                        path: '/elective/majorSelectedSubjects/xuankeReport',    
                        query: {  
                            batch: batch,    
                        }  
                    })
                }
            },
            currentChange(currentPage) {
                this.currentPage = currentPage;
                this.getChooseReportList(currentPage);
            }
        },
        created() { 
            this.getChooseReportList();
        },
    }
</script>
<style scoped lang="less">
    .elective{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        width: 100%;
        padding-left: 20px;
        .electiveBox{
            background: #fff;
            width: 970px;
            padding:25px 20px 18px;
            border-radius: 5px;
            ul {
                height: 230px;
                display: flex;
                justify-content: space-between;
                align-content: space-between;
                flex-wrap: wrap;
                li{
                    position: relative;
                    width: 455px;
                    height: 218px;
                    border-radius: 5px;
                    border:1px solid #EBEBEB;
                    &:nth-of-type(3){
                        height: 198px;
                    }
                    .left{
                        width: 120px;
                        float: left;
                        img{
                            position: relative;
                            left:30px;
                            top:16px;
                        }
                    }
                    .right{
                        width: 330px;
                        float: right;
                        padding-right: 25px;
                        .title{
                            line-height: 56px;
                            font-weight: bolder;
                            font-size: 18px;
                            color:#333333;
                        }
                        p{
                            line-height: 20px;
                            color:#AFAFAF;
                            font-size: 12px;
                        }
                        .button{
                            background: #3D90F6;
                            border-radius: 5px;
                            text-align: center;
                            letter-spacing: 3px;
                            line-height: 30px;
                            color:#fff;
                            font-size: 14px;
                            width: 76px;
                            position: absolute;
                            right: 28px;
                            bottom: 20px;
                            cursor: pointer;
                        }
                    }
                }
            }
            p {
                font-size: 14px;
                line-height: 20px;
                display: flex;
                align-items: center;
                img {
                    margin-right: 4px;
                    margin-top: -2px;
                }
                span {
                    font-size: 12px;
                    color: #666;
                }
                .go_shengya {
                    color: #4898F5;
                    font-size: 14px;
                    cursor: pointer;
                    border-bottom: 1px solid #4898F5;
                }

            }
        }
        .myReports{
            width: 970px;
            background: #fff;
            margin-top: 20px;
            padding: 0 16px;
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
                            span {
                                cursor: pointer;
                                &:hover {
                                    color: #2c8ffc;
                                }
                            }
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
            .page_box {
                padding: 30px;
                display: flex;
                justify-content: center;
                span {
                    line-height: 32px;
                    margin-right: 10px;
                }
            }
        }
    }
</style>
