<template>
    <div class="careerPlanning">
        <div class="banner">
            <img src="/imgs/explore/banner.png" alt="">
        </div>
        <div class="content">
            <h6 class="title">初步访谈</h6>
            <ul class="lis_box">
                <li class="lis">
                    <div class="img_box">
                        <img src="/imgs/careerManagement/diagnosis/icon_chengjiu.png" alt="">
                    </div>
                    <p class="lis_title">
                        生涯规划报告
                    </p>
                    <div class="btn">查看</div>
                </li>
            </ul>
             <h6 class="title">历史记录</h6>
             <div class="table_box">
                 <table>
                     <tr>
                         <th>名称</th>
                         <th>日期</th>
                         <th>查看</th>
                         <th>下载</th>
                     </tr>
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
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
        </div>
    </div>
</template>

<script>
    import  masks from '../../../components/mask.vue'
    export default {
        name: "careerPlanning",
        components:{masks},
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
            }
        },
        computed:{
            user(){
                return this.$store.state.user
            }
        },
        methods:{
            //获取服务通知列表
            getNoticeList(pageNumber,pageSize){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.notice.getNoticeList,{
                    pageNumber:pageNumber||1,
                    pageSize:pageSize||10
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                   _this.noticeList=res.data.data
                    _this.total=_this.noticeList.page.count
                })
            },
            // 当页数发生变化时触发
            currentChange(currentPage) {
                this.currentPage = currentPage;
                this.getChooseReportList(currentPage);
            },
            // 获取报告列表
            getChooseReportList(value) {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                var pageNumber = value;
                var pageSize = this.pageSize;
                // if(value){
                //     pageNumber = value;
                // }else {
                //     pageNumber = 1;
                // }
                this.$ajax
                    .post(this.G_uri + '/userCenter/getChooseReportList',{
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
        },
        mounted(){

        },
        watch:{
            user(){
                this.positonCards();
            }
        }
    }
</script>

<style scoped lang="less" scoped>
    .careerPlanning{
        padding-left: 20px;
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        .banner {
            padding-bottom: 20px;
        }
        .content {
            padding: 0 20px;
            background-color: #fff;
            h6.title {
                line-height: 64px;
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                letter-spacing: 2px;
                padding-left: 30px;
                background: url(/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
            }
            .lis_box {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .lis {
                    width: 454px;
                    height: 106px;
                    border-radius: 5px;
                    border: 1px solid #ebebeb;
                    padding: 30px 20px 0px 20px;
                    margin-bottom: 20px;
                    .img_box {
                        float: left;
                    }
                    p {
                        line-height: 42px;
                        font-size: 17px;
                        color: #333;
                        font-weight: 600;
                        float: left;
                        padding-left: 10px;
                    }
                    .btn {
                        width: 76px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border-radius: 3px;
                        background-color: #358ced;
                        color: #fff;
                        font-size: 13px;
                        float: right;
                        margin-top: 7px; 
                        cursor: pointer;
                    }
                }
            }
            .table_box {
                table {
                    tr {
                        line-height: 40px;
                        th {
                            background-color: #f3f4f8;
                            border: 1px solid #ebebeb;
                            color: #000;
                            font-size: 14px;
                            font-weight: 600;
                            &:nth-child(1) {
                                padding-left: 140px;
                            }
                            &:nth-child(2) {
                                width: 20%;
                                text-align: center;

                            }
                            &:nth-child(3) {
                                width: 20%;
                                text-align: center;    
                            }
                            &:nth-child(4) {
                                width: 20%;
                                text-align: center;    
                            }
                        }
                        td {
                            border: 1px solid #ebebeb;

                            &:nth-child(1) {
                                padding-left: 30px;
                            }
                            &:nth-child(2) {
                                text-align: center;

                            }
                            &:nth-child(3) {
                                text-align: center;
                                span {
                                    color: #358ced;
                                    cursor: pointer;
                                }    
                            }
                            &:nth-child(4) {
                                text-align: center;
                                span {
                                    color: #358ced;
                                    cursor: pointer;
                                }    
                            }
                        }
                    }
                }
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
