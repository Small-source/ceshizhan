<template>
    <div class="growthFile">
        <div class="myReports">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                成长档案
            </div>
            <ul class="electiveBox">
                <li>
                    <div class="left">
                        <img src="/imgs/careerManagement/academicPlanningReport/icon_head.png" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            成长档案
                        </div>
                        <div class="buttons">
                            <div class="button" :style="{margin:(!isReport)&&'40px 20px'||''}" @click="createReport">
                                生成
                            </div>
                            <div class="button" v-if="isReport" @click="goReport(reportId)">
                                查看
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                历史记录
            </div>
            <table>
                <thead>
                <tr>
                    <td>名称</td>
                    <td>日期</td>
                    <td>查看</td>
                    <!-- <td>下载</td> -->
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in reportList" :key="index">
                        <td>成长档案</td>
                        <td>{{item.createdAt}}</td>
                        <td><span @click="goReport(item.id)">查看</span></td>
                        <!-- <td>
                            <span class="icon"></span>
                        </td> -->
                    </tr>
                </tbody>
            </table>
            <div class="noneContent" v-if="reportList.length==0"></div>
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
        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <span>您当前的学业规划次数较少，此时生成《成长档案》内容可能会有缺失，是否还要继续生成？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="goCreateReport">生 成</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: "index",
        data(){
            return{
                // 报告数组
                reportList: [],
                // 报告共有多少条
                count: 0,
                // 报告一共有多少页
                totalPage: '',
                // 每页显示多少条
                pageSize: 7,
                // 当前页
                currentPage: 1,
                //是否生成过报告
                isReport:false,
                reportId:0,
                isFinishTest: false,
                numList: [],//学业规划次数，多于10次才生成成长档案
                centerDialogVisible: false
            }
        },
        methods:{
            // 保存成功提示
            successMessage(detail) {
                this.$message({
                    type: 'success',
                    message: 'detail'
                });
            },
            // 保存有问题提示
            unSuccess(detail) {
                this.$message({
                    type: 'error',
                    message: detail
                });
            },


            //跳转测评
            jump(path){
                this.$router.push(path)
            },

            // 查看报告
            goReport(id) {
                let {href}=this.$router.resolve({
                    path: '/growthFile/growthFileReport',
                    name: '成长档案',
                    query: {
                        id: id,
                    }
                })
            window.open(href, '_blank');
            },
            currentChange(currentPage) {
                this.currentPage = currentPage;
                this.history(currentPage);
            },
            //是否生成过报告
            isNo(){
                this.$ajax
                    .post(this.G_uri + '/careerGrowthReport/getLastReport',{
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    })
                    // 监听数据返回
                    .then(res=> {
                        if(res.data.code == 2000) {
                            let data = res.data.data;
                            if(data.id!=0){
                                this.isReport=true
                            }
                            this.reportId=data.id;
                        }else {

                        }
                    })
                    .catch(res=>  {
                        console.log(error);
                    })
            },
            //生成报告
            createReport(){
                let isFinishTest = this.isFinishTest;
                let dataLength = this.numList.length;
                console.log(isFinishTest,dataLength)
                if(!isFinishTest) {
                    this.unSuccess('请先完成生涯测评！');
                    return;
                }
                if(dataLength < 10) {
                    this.centerDialogVisible = true;
                    return;
                }else {
                    this.goCreateReport();
                }

            },
            goCreateReport() {
                this.centerDialogVisible = false;
                this.$ajax
                    .post(this.G_uri + '/careerGrowthReport/storeReport',{
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    })
                    // 监听数据返回
                    .then(res=> {
                        if(res.data.code == 2000) {
                            this.isNo();
                            this.history()
                        }else {

                        }
                    })
                    .catch(error =>{
                        console.log(error);
                    })

            },
            //历史记录
            history(value){
                var pageNumber = value;
                var pageSize = this.pageSize;
                this.$ajax
                    .post(this.G_uri + '/careerGrowthReport/getReportList',{
                        pageNumber: pageNumber,
                        pageSize: pageSize,
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    })
                    // 监听数据返回
                    .then(res=> {
                        if(res.data.code == 2000) {
                            let data=res.data.data;
                            if(data.list.length!=0){
                                this.reportList=data.list
                            }
                            this.totalPage = data.page.totalPage;
                            this.count = data.page.count;
                        }else {

                        }
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            },


            // 获取是否已经完成生涯测评
            goTest() {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax.post(this.G_uri + '/chooseSubject/startTest',{
                    testType: 1,
                },{
                    headers:{
                        token: token
                    }
                })
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        // code: 1.第一次测试2.继续测试3.测试完成4.绑卡
                        if(res.data.data.code == 3) {
                            _this.isFinishTest = true;
                        }else {
                            _this.isFinishTest = false;
                        }
                    }
                })
                .catch(function(error) {
                    console.log(error)
                    // alert('当前服务器繁忙，请刷新')
                });
            },
            // 查看有没添加10次学业规划
            getAcademicPlanList(){
                this.$ajax.post(this.G_uri+"/academicPlanCategory/getAcademicPlanList",{
                    
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data = res.data.data;
                        this.numList = data;
                    }
                })
            },

        },
        created() {
            this.goTest();
            this.getAcademicPlanList();
            this.isNo();
            this.history();
        },
    }
</script>
<style scoped lang="less">
    .growthFile{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        width: 100%;
        padding-left: 20px;
        .noneContent{
            margin: 0 auto;
            padding: 30px 0;
            width: 126px;
            height:120px;
            background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center center;
        }
        .electiveBox{
            background: #fff;
            width: 970px;
            padding:0 20px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            li{
                position: relative;
                width: 455px;
                height: 106px;
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
                        top:26px;
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
                    .buttons{
                        position: absolute;
                        right: 0;
                        top: 0;
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
                        margin:15px;
                        cursor: pointer;
                    }
                }
            }
        }
        .myReports{
            width: 970px;
            background: #fff;
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
                td{
                    border:1px solid #EBEBEB;
                }
                tbody{
                    tr{
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
                            .icon{
                                display: block;
                                margin: 0 auto;
                                width: 34px;
                                height: 22px;
                                background:url("/imgs/careerManagement/academicPlanningReport/icon_xiazaihui.png") ;
                                &:hover{
                                    background:url("/imgs/careerManagement/academicPlanningReport/icon_xiazailan.png") ;
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
