<template>
    <!-- 生涯管理-学业规划-规划 -->
    <div class="counseling">
        <div class="banner">
            <img src="/imgs/careerManagement/careerAnchor/banner.png" alt="">
        </div>
        <div class="study_motivation content_box">
            <!-- 学习动机 -->
            <!-- 强化训练 -->
            <Counseling1></Counseling1>
            <!-- 自我激励训练 -->
            <Counseling2></Counseling2>
            <!-- 归因训练 -->
            <Counseling3></Counseling3>
            <!-- 归因训练咨询师评估 -->
            <!-- <Counseling4></Counseling4> -->
        </div>
        <!-- 学习习惯 -->
        <div class="content_box">
            <!-- 课前预习--小作业 -->
            <Counseling5></Counseling5>
            <!-- 课后复习--小作业 -->
            <Counseling6></Counseling6>
            <!-- 发现黄金时间 -->
            <Counseling7></Counseling7>
            <!-- 养成好习惯 -->
            <Counseling9></Counseling9>
        </div>
        <!-- 学习能力 -->
        <div class="content_box">
            <!-- 注意力训练 -->
            <Counseling10></Counseling10>
            <!-- 思维能力训练 -->
            <Counseling13></Counseling13>
            <!-- 记忆力训练 -->
            <Counseling14></Counseling14>
        </div>
        <!-- 情绪管理 -->
        <div class="content_box">
            <!-- 练习：自我觉察应用表 -->
            <Counseling16></Counseling16>
            <!-- 和情绪对话 -->
            <Counseling17></Counseling17>
            <!-- 用ABC理论管理情绪的计划 -->
            <Counseling18></Counseling18>
        </div>
        <!-- 人际关系 -->
        <div class="content_box">
            <Counseling19></Counseling19>
        </div>
    </div>
</template>
<script>
    import  Counseling1 from './components/Counseling1.vue';
    import  Counseling2 from './components/Counseling2.vue';
    import  Counseling3 from './components/Counseling3.vue';
    import  Counseling4 from './components/Counseling4.vue';
    import  Counseling5 from './components/Counseling5.vue';
    import  Counseling6 from './components/Counseling6.vue';
    import  Counseling7 from './components/Counseling7.vue';
    import  Counseling9 from './components/Counseling9.vue';
    import  Counseling10 from './components/Counseling10.vue';
    import  Counseling13 from './components/Counseling13.vue';
    import  Counseling14 from './components/Counseling14.vue';
    import  Counseling15 from './components/Counseling15.vue';
    import  Counseling16 from './components/Counseling16.vue';
    import  Counseling17 from './components/Counseling17.vue';
    import  Counseling18 from './components/Counseling18.vue';
    import  Counseling19 from './components/Counseling19.vue';
    export default {
        name: "counseling",
        components:{Counseling1, Counseling2, Counseling3, Counseling4, Counseling5, Counseling6, Counseling7,Counseling9,Counseling10, Counseling13, Counseling14, Counseling15,Counseling16, Counseling17, Counseling18, Counseling19},
        data(){
            return {
                // 是否显示咨询目标填写弹窗
                isShowTargetCard: false,
                // 咨询目标
                target: '',
                targetObj: {},
                isShowSchemeCard: false,
                // 咨询方案
                scheme: '',
                schemeObj: {},
                // 是否显示咨询记录弹窗
                isShowConsultLog: false,
                // 咨询记录
                consultLogObj: {
                    id: '',
                    date: '',
                    theme: '',
                    purpose: '',
                    method: '',
                    process: '',
                    result: '',
                    next_plan: '',
                    homework: ''
                },
                // 获取咨询记录列表
                ConsultLogList: [],
                // 查看咨询记录详情，不可修改
                // 是否显示咨询记录弹窗，不可保存，修改
                isShowConsultLogDetail: false,
                consultLogObjDetail: {},

                // 分页器
                // 报告数组
                reportList: [],
                // 报告共有多少条
                count: 1,
                // 报告一共有多少页
                totalPage: '',
                // 每页显示多少条
                pageSize: 7,
                // 当前页
                currentPage: 1
            }
        },
        computed:{
        },
        methods:{
            // 保存成功提示
            successMessage() {
                this.$message({
                    type: 'success',
                    message: '保存成功'
                });
            },
            //退出确认
            exitConfirm(id){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch((error) => {
                    console.log(error)
                })
            },
            //生涯管理 - 学业规划 - 规划 - 获取咨询目标详情
            getConsultTarget(id){
                this.$ajax.post(this.G_uri + '/plan/getConsultTarget',{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    let data = res.data.data;
                    if(res.data.code == 2000) {
                        if(data.updatedAt) {
                            this.targetObj = data;
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            },
            // //生涯管理 - 学业规划 - 规划 - 保存咨询目标
            storeConsultTarget(id){
                this.$ajax.post(this.G_uri + '/plan/storeConsultTarget',{
                    target: this.target,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    if(res.data.data.id == true) {
                        this.getConsultTarget();
                        this.isShowTargetCard = false;
                        this.successMessage();

                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            getHeight() {
                let Height = $(window).height() - 50;
                console.log( $('.card'));
                $('.card').each(function() {
                    let cardHeight = $(this).height();
                    if( cardHeight > Height) {
                        $(this).height(Height-20);
                        $(this).find('.card_content').height(Height - 62-20);
                    }
                })
            }
        },
        watch:{

            isShowConsultLogDetail() {
                if(this.isShowConsultLogDetail) {
                    this.$nextTick(() => {
                        this.getHeight();
                    })
                }
            }
        },
        created() {

        },
        mounted(){
        }
    }
</script>
<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .counseling {
        padding-left: 20px;
        .banner {
            margin-bottom: 20px;
        }
        .content_box {
            background-color: #fff;
            margin-bottom: 20px;
        }
        .btn {
            width: 62px;
            height: 24px;
            line-height: 24px;
            background-color: #3d91f4;
            text-align: center;
            color: #fff;
            cursor: pointer;
            font-size: 13px;
            border-radius: 3px;
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
                p {
                    float: right;
                    cursor: pointer;
                    margin-top: 20px;
                }
            }
            // 初步访谈记录 评估与诊断记录
            .recording {
                border: 1px solid #ebebeb;
                border-radius: 5px;
                height: 132px;
                .top {
                    height: 90px;
                    line-height: 90px;
                    text-align: center;
                    cursor: pointer;
                    width: 66px;
                    margin: 0 auto;
                }
                .foot {
                    width: 490px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    p {
                        font-size: 14px;
                        color: #666;
                        padding-left: 40px;
                        span {
                            color: #358ced;
                            cursor: pointer;
                        }
                    }
                }
            }
            .table_box {
                table {
                    tr {
                        th {
                            background-color: #f3f4f8;
                            border: 1px solid #ebebeb;
                            color: #000;
                            font-size: 14px;
                            font-weight: 600;
                            text-align: center;
                            padding: 10px;
                            line-height: 24px;
                            &:nth-child(1) {
                                width: 80%;
                            }
                            &:nth-child(2) {
                                width: 20%;
                            }
                        }
                        td {
                            padding: 10px;
                            border: 1px solid #ebebeb;
                            line-height: 24px;
                            &:nth-child(1) {

                            }
                            &:nth-child(2) {
                                text-align: center;

                            }
                        }
                    }
                }
            }
            .history_title {
                line-height: 74px;
                height: 74px;
            }
            .now_history_btn {
                margin-bottom: 20px;
                height: 26px;
                line-height: 26px;
                p {
                    float: left;
                    padding-left: 30px;
                }
                .btn_box {
                    float: right;
                    .btn {
                        float: left;
                        margin-left: 16px;
                    }
                }

            }
            .now_history_table {
                table {

                    tr {
                        td {
                            border: 1px solid #ebebeb;
                            color: #000;
                            font-size: 14px;

                            text-align: center;
                            padding: 10px 20px;
                            &:first-child {
                                background-color: #f3f4f8;
                                line-height: 60px;
                                font-weight: 600;
                            }
                            &:last-child {
                                text-align: left;
                                line-height: 24px;
                            }
                        }
                    }
                    .table_title {
                        td {
                            background-color: #f3f4f8;
                            border: 1px solid #ebebeb;
                            text-align: left;
                            padding: 10px 20px;
                            font-weight: 600;
                            line-height: 24px !important;
                        }
                    }
                }
            }
            .history_table {
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
        .mark {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 10;
            background: rgba(0,0,0,.5);
            .card {
                width: 652px;
                position: fixed;
                left: 50%;
                top:50%;
                z-index: 20;
                margin-left: -326px;
                top: 50px;
                border-radius: 5px;
                // overflow: hidden;
                background-color: #fff;
                .card_title {
                    line-height: 60px;
                    text-align: center;
                    font-size: 17px;
                    color: #fff;
                    background: url('/imgs/careerManagement/diagnosis/icon_toubu.png');
                }
                .card_content {
                    padding: 0px 40px;
                    padding-top: 10px;
                    background-color: #fff;
                    overflow-y: auto;
                    p {
                        line-height: 30px;
                        padding-top: 5px;
                        font-size: 14px;
                        font-weight: 600;
                        color: #333;
                    }
                    textarea {
                        box-sizing: border-box;
                        padding: 10px;
                        width: 100%;
                        height: 75px;
                        border-radius: 5px;
                        font-size: 14px;
                        color: #333;
                        border: 1px solid #DCDFE6 !important;

                    }
                    textarea::-webkit-input-placeholder {
                        color: #666;
                        font-size: 12px;
                    }
                    .text_targe {
                        height: 200px;
                    }
                    .save {
                        width: 76px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border-radius: 3px;
                        background-color: #358ced;
                        color: #fff;
                        font-size: 13px;
                        cursor: pointer;
                        margin: 20px auto;

                    }
                }
                .close{
                    width: 17px;
                    height: 17px;
                    position: absolute;
                    top:21px;
                    right: 22px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
<style>
    .el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
</style>
