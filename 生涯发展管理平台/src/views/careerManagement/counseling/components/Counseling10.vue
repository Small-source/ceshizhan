<!-- 生涯管理 - 学业规划 -辅导 - 学习能力 注意力训练  -->
<template>
    <!-- 生涯管理 - 学业规划 - 辅导 -->
    <div class="Counseling10">
        <div class="main_box">
            <h6 class="title"><span>学习能力</span></h6>
            <div class="detail_btn_box">
                <p>注意力训练</p>
                <div class="btn_box">
                    <!-- <div class="btn" @click="addContent()">新增</div> -->
                    <!-- <div class="btn" @click="addEdit()">编辑</div> -->
                </div>
            </div>
            <ul class="lis_box">
                <li class="lis">
                    <div class="img_box">
                        <img src="/imgs/careerManagement/counseling/icon_shuerte.png" alt="">
                    </div>
                    <p class="lis_title">
                        舒尔特方格表
                    </p>
                    <div class="btn" @click="$router.push('/careerManagement/sweet')">测评</div>
                </li>
            </ul>
            <div class="detail_btn_box">
                <p>历史记录</p>
                <div class="btn_box">
                </div>
            </div>
            <div class="table_box" >
                <table>
                    <tr>
                        <td >历史记录</td>
                        <td>完成时间</td>
                        <td>我的感悟</td>
                    </tr>
                    <tr v-for="(item,index) in tableDetailList" :key="index">
                        <td>{{item.over_time}}</td>
                        <td class="btnbox_date">{{item.created_at}}</td>
                        <td class="icon icon_edit" v-if="!item.feel">
                            <span  @click="showshuerte(item.id)" ></span>
                        </td>
                        <td class="icon icon_show"  v-if="item.feel">
                            <span  @click="showshuerte(item.id,true)"> 查看</span>
                            <span></span>
                            <span @click="showshuerte(item.id)">编辑</span>
                        </td>
                    </tr>
                </table>
                <div class="page_box">
                    <el-pagination
                            background
                            @current-change="currentChange"
                            :page-size="pageSize"
                            layout="prev, pager, next"
                            :total="total"
                            class="pages">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="mark" v-show="isShowCoachIntensiveTraining">
            <div class="card">
                <p class="card_title">编辑</p>
                <div class="card_content">
                    <!-- readonly -->
                    <p>内容</p>
                    <textarea v-model="cardObj.feel" class="textarea_content"></textarea>
                    <div class="close" @click="closeCard()"></div>
                    <div class="save" @click="getCoachIntensiveTraining()">保存</div>
                </div>
            </div>
        </div>
        <div class="mark" v-show="shows">
            <div class="card">
                <p class="card_title">舒尔特训练游戏感悟</p>
                <div class="card_content">
                    <!-- readonly -->
                    <p>内容</p>
                    <textarea   v-model="cardObj.feel"readonly="readonly" class="textarea_content"></textarea>
                    <div class="close" @click="shows=false"></div>
                    <div class="save" style="background: none;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Counseling10",
        data(){
            return {
                // 添加和编辑使用
                cardObj: {
                    id: '',
                    feel:''
                },

                CoachIntensiveTrainingList: [],
                // 是否显示强化训练弹窗
                isShowCoachIntensiveTraining: false,
                tableDetailList:[],
                shows:false,
                //分页器
                pageNumber:1,//当前页码
                pageSize:5,//每页大小
                total:0,//总条数
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
            exitConfirm(){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.isShowCoachIntensiveTraining = false;
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch((error) => {
                    console.log(error)
                })
            },
            closeCard() {
                this.exitConfirm();

            },
            addContent() {
                this.cardObj = {
                };
                this.isShowCoachIntensiveTraining = true;
            },
            showshuerte(id,bool) {
                if(bool){
                    this.shows=true;
                }else{
                    this.isShowCoachIntensiveTraining = true;
                }
                this.$ajax.post(this.G_uri + '/coach/detailAttentionTrain',{
                    id: id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                    .then((res)=>{
                        let data = res.data.data;
                        if(res.data.code == 2000) {
                            this.cardObj = data;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            // 生涯管理 - 学业规划 - 辅导舒尔特方格表列表
            getCoachIntensiveTrainingList(){
                this.$ajax.post(this.G_uri + '/coach/getAttentionTrainList',{
                    pageNumber: this.pageNumber,
                    pageSize: this.pageSize,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    let data = res.data.data;
                    if(res.data.code == 2000) {
                        this.isShowCoachIntensiveTraining = false;
                        this.tableDetailList = data.list;
                        this.total = data.page.count;
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            },
            // 生涯管理 - 学业规划 - 辅导舒尔特方格表编辑
            getCoachIntensiveTraining(){
                this.$ajax.post(this.G_uri + '/coach/editAttentionTrain',{
                    id: this.cardObj.id,
                    feel:this.cardObj.feel
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                    .then((res)=>{
                        if(res.data.code == 2000) {
                            this.getCoachIntensiveTrainingList()
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.pageNumber=this.currentPage;
                this.getCoachIntensiveTrainingList();
            },

        },
        watch:{

        },
        created() {

        },
        mounted(){
            this.getCoachIntensiveTrainingList();
        }
    }
</script>
<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .Counseling10 {
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
        .detail_btn_box {
                margin-bottom: 20px;
                height: 26px;
                line-height: 26px;
                p {
                    background: url(/imgs/careerManagement/counseling/icon.png) no-repeat 0px center;
                    font-weight: 600;
                    float: left;
                    padding-left: 30px;
                }
            }
        .main_box {
            padding:0px 20px 20px 20px;
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
                            width: 20%;
                        }
                        &:nth-child(2) {
                            width: 20%;
                        }
                        &:nth-child(3) {
                            width: 20%;
                        }
                    }
                    td {
                        padding: 10px;
                        border: 1px solid #ebebeb;
                        line-height: 24px;
                        text-align: center;
                        width: 25%;
                    }
                    .btnbox_date {
                        width: 15%;
                        text-align: center;
                    }
                    .btnbox_edit {
                        width: 10%;
                    }
                    .btnbox_del {
                        width: 10%;
                    }
                    .icon {
                        text-align: center;
                        cursor: pointer;
                        span {
                            cursor: pointer;
                            display: inline-block;
                            width: 34px;
                            height: 20px;
                            border: 1px solid #EDEDED;
                            border-radius: 5px;

                        }
                    }
                    .icon_show{
                        span{
                            border:none;
                            &:hover{
                                color:"#358CED";
                            }
                        }
                    }
                    .icon_edit {
                        span {
                            background: url(/imgs/careerManagement/icon_bianjihui.png) no-repeat center center;
                            &:hover {
                                background-color: #3A90F3;
                            }
                        }
                    }
                    .icon_del {
                        span {
                            background: url(/imgs/careerManagement/icon_lajitonghui.png) no-repeat center center;
                            &:hover {
                                background-color: #FB4945;
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
                margin-top: -195px;
                border-radius: 5px;
                background-color: #fff;
                .card_title {
                    line-height: 60px;
                    text-align: center;
                    font-size: 17px;
                    color: #fff;
                    background: url('/imgs/careerManagement/diagnosis/icon_toubu.png');
                }
                .card_content {
                    padding: 10px 40px;
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
                        height: 100px;
                        border-radius: 5px;
                        font-size: 14px;
                        color: #333;
                        border: 1px solid #DCDFE6 !important;

                    }
                    .textarea_content {
                        height: 200px;

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
