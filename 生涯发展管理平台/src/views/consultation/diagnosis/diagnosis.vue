<template>
    <div class="diagnosis" v-cloak>
        <!-- <masks></masks> -->
        <div class="main_box">     
	        <div class="evaluation">
	            <h6 class="title">学习状态诊断</h6>
	            <ul class="lis_box">
	                <router-link tag="li" :to="'/consultation/diagnosis/evaluation_entry?question=' + item.id" v-for="(item, index) in evaluation" :key="index" class="lis">
	                    <div class="img_box">
	                        <img :src="'/imgs/careerManagement/diagnosis/' + item.img_url" alt="">
	                    </div>
	                    <p class="lis_title">
	                        {{item.title}}
	                    </p>
	                    <div class="btn">测评</div>
	                </router-link>
	            </ul>
	        </div>
	        <div class="evaluation_report">
	            <h6 class="title">测评报告</h6>
	            <div class="table_box"  v-if="evaluation_report.length">
	                <table>
	                    <tr>
	                        <th>测评报告</th>
	                        <th>测评日期</th>
	                        <th>查看</th>
	                    </tr>
	                    <tr v-for="(item, index) in evaluation_report" :key="index">
	                        <td>{{item.assessName}}</td>
	                        <td>{{item.updatedAt}}</td>
	                        <td><span @click="goReport(item.assessType,item.id)">查看</span></td>
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
	            <p class="prompt" v-else>
	                暂无报告 ~~~！
	            </p>
	        </div>
	    </div>
    </div>
</template>
<script>
    // 最顶部提示卡片
    // import  masks from '../../../components/mask.vue'
    export default {
        // components:{masks},
        name: 'diagnosis',
        data() {
            return {
                // 报告共有多少条
                count: 0,
                // 报告一共有多少页
                totalPage: '',
                // 每页显示多少条
                pageSize: 10,
                // 当前页
                currentPage: 1,
                evaluation: [
                    { title: '成就目标定向测评', id: 1, img_url: 'icon_chengjiu.png' },
                    { title: '时间管理测评',id: 2, img_url: 'icon_shijianguanli.png' },
                    { title: '学习动机测评',id: 3, img_url: 'icon_xuexidongji.png' },
                    { title: '学习习惯测评',id: 4, img_url: 'icon_xuexixiguan.png' },
                    { title: '情绪管理测评',id: 5, img_url: 'icon_qingxuguanli.png' },
                    { title: '人际关系综合诊断测评',id: 6, img_url: 'icon_renjiguanxi.png' },
                    { title: '学业归因测评',id: 8, img_url: 'icon_renjiguanxi.png' },
                    { title: '注意力测评',id: 7, img_url: 'icon_zhuyili.png' }
                ],
                evaluation_report: []
            }
        },
        methods: {
            // 当页数发生变化时触发
            currentChange(currentPage) {
                this.currentPage = currentPage;
                this.getReportList();
            },
            // 生涯管理-学业规划-诊断-获取测评报告列表
            getReportList(){
                let _this=this;
                var pageNumber = this.currentPage;
                var pageSize = this.pageSize;
                this.$ajax.post(this.G_uri + '/assessQuestion/getReportList',{
                    pageNumber: pageNumber,
                    pageSize: pageSize
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        let data = res.data.data;
                        _this.evaluation_report = data.list;
                        _this.totalPage = data.page.totalPage;
                        _this.count = data.page.count;
                    }
                })
            },
            //退出确认
            exitConfirm(){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.cardFirstInterview=false;
                    this.cardDiagnosis=false;
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch(() => {

                })
            },

            goReport(type,id) {
                let url = '/consultation/diagnosis/evaluationReport' + type;
                let {href} = this.$router.resolve({
                    path: url,
                    query: {
                       assessType : type,
                       id: id
                    }
                })
                window.open(href, '_blank');
            },
            getHeight() {
                let Height = $(window).height() - 50;
                console.log( $('.cards'));
                $('.cards').each(function() {
                    let cardHeight = $(this).height();
                    if( cardHeight > Height) {
                        $(this).height(Height-20);
                        $(this).find('.card_content').height(Height - 62-20);
                    }
                })
            }

        },
        watch: {
            // cardFirstInterview() {
            //     this.getHeight();
            // }
        },
        created() {
            this.getReportList();
        }
    }
</script>
<style type="text/css" lang='less' scoped>
    .diagnosis {
        * {
            box-sizing: border-box;
        }
        .banner {
            margin-bottom: 20px;
        }
        .main_box {
            padding:0px 20px 24px 20px;
            background-color: #fff;
            margin-bottom: 20px;
            border-radius: 5px;
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
                        width: 52px;
                        height: 52px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
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
        }
        .evaluation {
            padding-bottom: 4px;
        }
        .evaluation_report {
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
                    }
                }
            }
            .prompt {
                line-height: 80px;
                font-size: 20px;
                text-align: center;
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
</style>
<style type="text/css" lang='less'>
.diagnosis {
    .el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
}
</style>