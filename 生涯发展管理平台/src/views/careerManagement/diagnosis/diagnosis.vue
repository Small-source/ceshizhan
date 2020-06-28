<template>
    <div class="diagnosis" v-cloak>
        <masks v-show="cardFirstInterview||cardDiagnosis||isShowDiagnosis"></masks>
       <!--  <div class="banner">
        </div> -->
        <div class="main_box break_down">
            <h6 class="title">初步访谈</h6>
            <div class="recording" v-if="!isFirstInterview">
                <div class="top">
                    <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                </div>
                <div class="foot">
                    <p>暂无内容！ <span @click="cardFirstInterview = true">添加</span>初步访谈记录</p>
                    <p>备注：请让咨询师填写此项内容</p>
                </div>
            </div>
            <div class="unrecording" v-else>
                <ul class="lis_box">
                    <li class="lis">
                        <div class="img_box">
                            <img src="/imgs/careerManagement/diagnosis/icon_xuexixiguan.png" alt="">
                        </div>
                        <p class="lis_title">
                            查看初步访谈记录
                        </p>
                        <div class="btn"  @click="cardFirstInterview = true">查看</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main_box evaluation">
            <h6 class="title">测评</h6>
            <ul class="lis_box">
                <router-link tag="li" :to="'/careerManagement/diagnosis/evaluation_entry?question=' + item.id" v-for="(item, index) in evaluation" :key="index" class="lis">
                    <div class="img_box">
                        <img :src="'/imgs/careerManagement/diagnosis/' + item.img_url" alt="">
                    </div>
                    <p class="lis_title">
                        {{item.title}}
                    </p>
                    <div class="btn">测评</div>
                </router-link>
                <!-- <li class="lis">
                    <div class="img_box">
                        <img src="/imgs/careerManagement/diagnosis/icon_renjiguanxi.png" alt="">
                    </div>
                    <p class="lis_title">
                        人际关系综合诊断测评
                    </p>
                    <div class="btn" style="filter: grayscale(100%);">测评</div>
                </li> -->
            </ul>
        </div>
        <div class="main_box evaluation_report">
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
        <div class="main_box">
            <div class="box">
                <h6 class="title">评估与诊断</h6>
                <div class="recording">
                    <div class="top">
                        <img src="/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
                    </div>
                    <div class="foot">
                        <p>暂无内容！ <span @click="cardDiagnosis = true">添加</span>评估与诊断记录</p>
                        <p>备注：请让咨询师填写此项内容</p>
                    </div>
                </div>
            </div>
            <div class="history_record">
                <h6 class="title">历史记录</h6>
                <div class="table_box" v-if="history_record.length">
                    <p class="table_title">历史记录</p>
                    <ul>
                        <li v-for="(item, index) in history_record" :key="index">
                            {{item.date}}
                            <span @click="getAssessmentInfo(item.id)"></span>
                        </li>
                    </ul>
                </div>
                <p class="prompt" v-else>
                    暂无记录 ~~~！
                </p>
            </div>
        </div>
        <!-- 添加初次访谈记录 -->
        <div class="cards card_first_interview" v-show="cardFirstInterview">
            <p class="card_title">添加访谈记录</p>
            <div class="card_content">
                <div class="time">
                    访谈时间：
                    <el-date-picker
                        v-model="time_interview"
                        type="date"
                        placeholder="请选择访谈日期"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <p>一般资料</p>
                <textarea placeholder="（记录身体情况、父母职业、成长经历、家庭有无遗传病史、性格、与父母关系等）" v-model="general_information"  onfocus="this.placeholder=''" onblur="this.placeholder='（记录身体情况、父母职业、成长经历、家庭有无遗传病史、性格、与父母关系等）'">{{general_information}}</textarea>
                <p>个人陈述</p>
                <textarea  placeholder="（记录发生的事件、想法、情绪、行为和生理上的变化等）" v-model="personal_statement" onfocus="this.placeholder=''" onblur="this.placeholder='（记录发生的事件、想法、情绪、行为和生理上的变化等）'"></textarea>
                <p>咨询师观察</p>
                <textarea placeholder="（记录学生的精神面貌、眼神和肢体动作等）" v-model="consultant_observation" onfocus="this.placeholder=''" onblur="this.placeholder='（记录学生的精神面貌、眼神和肢体动作等）'"></textarea>
                <p>家长反映</p>
                <textarea placeholder="（记录家长观察到的学生的行为变化）" v-model="parents_reflect" onfocus="this.placeholder=''" onblur="this.placeholder='（记录家长观察到的学生的行为变化）'"></textarea>
                <p>咨询师总结</p>
                <textarea  placeholder="（可能存在什么问题，推荐做什么测评？）" v-model="consultant_summary" onfocus="this.placeholder=''" onblur="this.placeholder='（可能存在什么问题，推荐做什么测评？）'"></textarea>
                <div class="save" @click="storeFirstInterview">保存</div>
                <div class="close" @click="exitConfirm"></div>
            </div>
        </div>
        <!-- 添加评估与诊断 -->
        <div class="cards card_diagnosis" v-show="cardDiagnosis">
            <p class="card_title">添加评估与诊断</p>
            <div class="card_content">
                <div class="time">
                    访谈时间：
                    <el-date-picker
                        v-model="time_diagnosis"
                        type="date"
                        placeholder="请选择访谈日期"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <p>具体问题和程度</p>
                <textarea type="textarea" placeholder="（记录学生的情绪和行为变化，结合量表结果，给出具体是什么问题）" v-model="problems_diagnosis" onfocus="this.placeholder=''" onblur="this.placeholder='（记录学生的情绪和行为变化，结合量表结果，给出具体是什么问题）'"></textarea>
                <p>原因分析</p>
                <textarea type="text" placeholder="（个人原因：身体状况、个体成熟水平、认知水平能力、社会和学校因素以及家庭因素等）" v-model="reason_diagnosis" onfocus="this.placeholder=''" onblur="this.placeholder='（个人原因：身体状况、个体成熟水平、认知水平能力、社会和学校因素以及家庭因素等）'"></textarea>
                <div class="save" @click="storeAssessmentInfo">保存</div>
                <div class="close" @click="exitConfirm"></div>
            </div>
        </div>
        <!-- 查看评估与诊断详情 -->
        <div class="cards card_diagnosis" v-show="isShowDiagnosis">
            <p class="card_title">添加评估与诊断</p>
            <div class="card_content">
                <div class="time">
                    访谈时间：
                    <el-date-picker
                        v-model="time_diagnosis"
                        type="date"
                        placeholder="请选择访谈日期"
                        value-format="yyyy-MM-dd"
                        readonly
                        >
                    </el-date-picker>
                </div>
                <p>具体问题和程度</p>
                <textarea v-model="problems_diagnosis" readonly="readonly" class="read_dia"></textarea>
                <p>原因分析</p>
                <textarea v-model="reason_diagnosis" readonly="readonly" class="read_dia"></textarea>
                <div class="close" @click="closeDiagnosis()"></div>
            </div>
        </div>
    </div>
</template>
<script>
    // 最顶部提示卡片
    import  masks from '../../../components/mask.vue'
    export default {
        components:{masks},
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
                // 是否已经初步访谈过
                isFirstInterview: false,
                //
                isDiagnosis: false,
                // 测评报告
                evaluation_report: [],
                // 诊断历史记录
                history_record: [
                ],
                // 添加初次访谈记录
                cardFirstInterview:false,
                // 是否显示添加评估与诊断窗口
                cardDiagnosis:false,
                // 是否显示评估与诊断窗口
                isShowDiagnosis: false,
                // 是否显示评估与诊断详情
                diagnosis: null,
                // 添加日期
                time_interview: '',
                // 一般资料
                general_information: '',
                // 个人陈述
                personal_statement: '',
                // 咨询师观察
                consultant_observation: '',
                // 家长反映
                parents_reflect: '',
                // 咨询师总结
                consultant_summary: '',

                // 添加日期
                time_diagnosis: '',
                problems_diagnosis: '',
                reason_diagnosis: '',
                id_diagnosis: '',
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
            // 保存初步访谈记录
            storeFirstInterview(){
                let _this=this;
                let date = this.time_interview;
                let general_information = this.general_information;
                let personal_statement = this.personal_statement;
                let consultant_observation = this.consultant_observation;
                let parents_reflect = this.parents_reflect;
                let consultant_summary = this.consultant_summary;
                if((date&&general_information&&personal_statement&&consultant_observation&&parents_reflect&&consultant_summary) == false) {
                    return;
                }
                this.$ajax.post(this.G_uri + '/assessQuestion/storeFirstInterview',{
                    date: date,
                    general_information: general_information,
                    personal_statement: personal_statement,
                    consultant_observation: consultant_observation,
                    parents_reflect: parents_reflect,
                    consultant_summary: consultant_summary
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.cardFirstInterview = false;
                        _this.getFirstInterview();
                    }
                })
            },
            // 读取初步访谈记录
            getFirstInterview(){
                let _this=this;
                this.$ajax.post(this.G_uri + '/assessQuestion/getFirstInterview',{

                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    let data = res.data.data;
                    if(res.data.code==2000){
                        if(data.date) {
                            _this.isFirstInterview = true;
                            _this.time_interview = data.date
                            _this.general_information = data.generalInformation;
                            _this.personal_statement = data.personalStatement;
                            _this.consultant_observation = data.consultantObservation;
                            _this.parents_reflect = data.parentsReflect;
                            _this.consultant_summary = data.consultantSummary;
                        }else {
                            _this.isFirstInterview = false;
                        }
                    }
                })
            },
            // 诊断-保存评估与诊断
            storeAssessmentInfo(){
                let _this=this;
                this.$ajax.post(this.G_uri + '/assessQuestion/storeAssessmentInfo',{
                    date: this.time_diagnosis,
                    problems: this.problems_diagnosis,
                    reason: this.reason_diagnosis,
                    id: this.id_diagnosis
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        if(res.data.data.id == true) {
                            _this.cardDiagnosis = false;
                            _this.$message({
                              message: '保存成功',
                              type: 'success'
                            });
                            _this.getAssessmentList();
                        }
                    }
                })
            },
            // 诊断 - 获取评估与诊断列表
            getAssessmentList(){
                let _this=this;
                this.$ajax.post(this.G_uri + '/assessQuestion/getAssessmentList',{
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    let data = res.data.data;
                    if(res.data.code==2000){
                        if(data.length) {
                            _this.history_record = data;
                        }
                    }
                })
            },
            // 诊断 - 获取评估与诊断详情
            getAssessmentInfo(id){
                let _this=this;
                this.isShowDiagnosis = true;
                this.$ajax.post(this.G_uri + '/assessQuestion/getAssessmentInfo',{
                    id: id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    let data = res.data.data;
                    if(res.data.code==2000){
                        _this.time_diagnosis = data.date;
                        _this.problems_diagnosis = data.problems;
                        _this.reason_diagnosis = data.reason;
                    }
                })
            },
            closeDiagnosis() {
                this.isShowDiagnosis = false;
                this.time_diagnosis = '';
                this.problems_diagnosis = '';
                this.reason_diagnosis = '';
            },
            goReport(type,id) {
                let url = '/careerManagement/diagnosis/evaluationReport' + type;
                let {href} = this.$router.resolve({
                    path: url,
                    query: {
                       assessType : type,
                       id: id
                    }
                })
                window.open(href, '_blank');
                // if(type == 1) {
                //     url = 'evaluationReport1'
                //     this.report(type,url);
                // }else if(type == 2) {
                //     url = 'evaluationReport2'
                //     this.report(type,url);
                // }else if(type == 3) {
                //     url = 'evaluationReport3'
                //     this.report(type,url);
                // }else if(type == 4) {
                //     url = 'evaluationReport4'
                //     this.report(type,url);
                // }else if(type == 5) {
                //     url = 'evaluationReport5'
                //     this.report(type,url);
                // }else if(type == 6) {
                //     url = 'evaluationReport6'
                //     this.report(type,url);
                // }
            },
            // report(type, url) {
            //     let {href} = this.$router.resolve({
            //         path: '/careerManagement/diagnosis/' + url,
            //         query: {
            //            assessType : type,
            //         }
            //     })
            //     window.open(href, '_blank');
            // },
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
            cardFirstInterview() {
                this.getHeight();
            }
        },
        created() {
            this.getReportList();
            this.getAssessmentList();
            this.getFirstInterview();
            this.getAssessmentList();
        }
    }
</script>
<style type="text/css" lang='less' scoped>
    .diagnosis {
        padding-left: 20px;
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
                width: 460px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                p {
                    font-size: 14px;
                    color: #666;
                    span {
                        color: #358ced;
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
        // 诊断与评估历史记录
        .history_record {
            .table_box {
                .table_title {
                    background-color: #f3f4f8;
                    border: 1px solid #ebebeb;
                    color: #000;
                    font-size: 14px;
                    font-weight: 600;
                    padding-left: 140px;
                    width: 100%;
                    line-height: 40px;
                }
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        border-right: 1px solid #ebebeb;
                        border-bottom: 1px solid #ebebeb;
                        color: #000;
                        font-size: 14px;
                        font-weight: 600;
                        padding: 0px 20px;
                        width: 25%;
                        line-height: 40px;
                        &:nth-child(4n + 1) {
                            border-left: 1px solid #ebebeb;
                        }
                        span {
                            float: right;
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            cursor: pointer;
                            background: url(/imgs/careerManagement/diagnosis/icon_chakan.png) no-repeat center center;
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
        .cards {
            width: 652px;
            position: fixed;
            left: 50%;
            top:50%;
            z-index: 20;
            margin-left: -326px;
            top: 50px;
            border-radius: 5px;
            overflow: hidden;
            .card_title {
                line-height: 60px;
                text-align: center;
                font-size: 17px;
                color: #fff;
                background: url('/imgs/careerManagement/diagnosis/icon_toubu.png');
            }
            .card_content {
                padding: 10px 40px;
                overflow-y: auto;
                // height: 670px;
                background-color: #fff;
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
                .save {
                    margin: 20px auto;
                    width: 76px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 3px;
                    background-color: #358ced;
                    color: #fff;
                    font-size: 13px;
                    cursor: pointer;
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
        .card_diagnosis {
            .card_content {
                padding-top: 20px;
                p {
                    line-height: 40px;
                }
                textarea {
                    height: 160px;
                }
                .save {
                    width: 110px;
                    height: 42px;
                    line-height: 42px;
                    font-size: 15px;
                    font-weight: 600;
                    margin: 35px auto;
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
</style>
<style type="text/css" lang='less'>
.diagnosis {
    .el-input__inner  {
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
    }
}
</style>
