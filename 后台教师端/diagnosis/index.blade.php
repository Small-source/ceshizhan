<html class="x-admin-sm">
<head>
    <meta charset="UTF-8">
    <title>诊断</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="stylesheet" href="/career/css/reset.css">
    <link rel="stylesheet" href="/career/css/diagnosis.css">
    <link rel="stylesheet" href="/career/css/elementUi.css">
    <!-- <link rel="stylesheet/less" href="/career/css/public.less"> -->
    <!-- <script src="/career/js/less.min.js"></script> -->
</head>
<body>
    <div id="loading">
        <div class="card"></div>
    </div>
    <div class="main_inner">
        <div class="zhutiLeft">
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <span>目标设定</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1"><a href="/career/careerAnchor.html">职业定位</a></el-menu-item>
                                <el-menu-item index="1-2"><a href="/career/university.html">院校定位</a></el-menu-item>
                                <el-menu-item index="1-3"><a href="/career/major.html">专业定位</a></el-menu-item>
                                <el-menu-item index="1-4"><a href="/career/goal.html">我的目标</a></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <span>目标分解</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1"><a href="/career/decompose.html">目标分解</a></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <span>行动计划</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1"><a href="/career/plan.html">行动计划</a></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <span>学业规划报告</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="4-1"><a href="/career/academicPlanningReport.html">学业规划报告</a></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <span>学业规划</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="5-1"><a href="/career/diagnosis/index.blade.php?studentId=">诊断</a></el-menu-item>
                                <el-menu-item index="6-2"><a href="/career/planning.html">规划</a></el-menu-item>
                                <el-menu-item index="7-3"><a href="/career/counseling.html">辅导</a></el-menu-item>
                                <el-menu-item index="8-4"><a href="/career/growthArchiveEntry.html">成长档案</a></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="diagnosis" style="float:left;width:970px;">
            <div class="main_box break_down">
                <h6 class="title">初步访谈</h6>
                <div class="recording" v-if="!isFirstInterview">
                    <div class="top">
                        <img src="/career/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
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
                                <img src="/career/imgs/careerManagement/diagnosis/icon_xuexixiguan.png" alt="">
                            </div>
                            <p class="lis_title">
                                查看初步访谈记录
                            </p>
                            <div class="btn"  @click="cardFirstInterview = true">查看</div>
                        </li>
                    </ul>
                </div>
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
                            <td>${item.assessName}</td>
                            <td>${item.updatedAt}</td>
                            <td><a :href="'/career/diagnosis/evaluation_report' + item.assessType + '.html?id=' + item.id" target="_blank">查看</a></td>
                            <!-- <td><span @click="goReport(item.assessType,item.id)">查看</span></td> -->
                        </tr>
                    </table>
                    <div class="page_box">
                        <span>共${count}条</span>
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
                            <img src="/career/imgs/careerManagement/diagnosis/icon-zanwuneirong.png" alt="">
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
                                ${item.date}
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
            <div class="mark" v-show="cardFirstInterview">
                <div class="cards card_first_interview">
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
                        <textarea placeholder="（记录身体情况、父母职业、成长经历、家庭有无遗传病史、性格、与父母关系等）" v-model="general_information"  onfocus="this.placeholder=''" onblur="this.placeholder='（记录身体情况、父母职业、成长经历、家庭有无遗传病史、性格、与父母关系等）'">${general_information}</textarea>
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
            </div>    
            <!-- 添加评估与诊断 -->
            <div class="mark" v-show="cardDiagnosis">
                <div class="cards card_diagnosis">
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
            </div>
            <!-- 查看评估与诊断详情 -->
            <div class="mark" v-show="isShowDiagnosis">
                <div class="cards card_diagnosis">
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
        </div>
    </div>
</body>
<script src="/career/js/jquery-3.4.1.min.js"></script>
<script src="/career/js/vue.js"></script>
<!-- <script src="/careerjs/echarts.min.js"></script> -->
<script src="/career/js/elementUi.js"></script>
<script src="/career/js/axios.min.js"></script>
<script src="/career/js/api/index.js"></script>
<script src="/career/js/api/address.js"></script>
<!-- <script src="/career/js/circleChart.min.js"></script> -->
<!-- <script src="/career/js/html2canvas.js"></script> -->
<!-- <script src="/career/js/jspdf.js"></script> -->
<script type="module">
    // 最顶部提示卡片
    // import  masks from './components/mask.vue'
    // import getPdf from '/js/htmlToPdf.js';
    // Vue.prototype.$echarts = echarts;
    // Vue.prototype.getPdf = getPdf;
    Vue.prototype.ports = ports;
    Vue.prototype.$ajax= axios;
    Vue.prototype.G_uri= address.G_uri;
    Vue.prototype.G_uris= address.G_uris;
    new Vue({
        delimiters:['${','}'],
        el:'.main_inner',
        data(){
            return{
                studentId: window.sessionStorage.getItem('studentId'),
                count: 0,// 报告共有多少条
                totalPage: '',// 报告一共有多少页
                pageSize: 10,// 每页显示多少条
                currentPage: 1,// 当前页
                // evaluation: [
                //     { title: '成就目标定向测评', id: 1, img_url: 'icon_chengjiu.png' },
                //     { title: '时间管理测评',id: 2, img_url: 'icon_shijianguanli.png' },
                //     { title: '学习动机测评',id: 3, img_url: 'icon_xuexidongji.png' },
                //     { title: '学习习惯测评',id: 4, img_url: 'icon_xuexixiguan.png' },
                //     { title: '情绪管理测评',id: 5, img_url: 'icon_qingxuguanli.png' },
                //     { title: '人际关系综合诊断测评',id: 6, img_url: 'icon_renjiguanxi.png' }
                // ],
                // 是否已经初步访谈过
                isFirstInterview: false,
                isDiagnosis: false,
                evaluation_report: [],// 测评报告
                history_record: [],// 诊断历史记录
                cardFirstInterview:false,// 添加初次访谈记录
                cardDiagnosis:false,// 是否显示添加评估与诊断窗口
                isShowDiagnosis: false,// 是否显示评估与诊断窗口
                diagnosis: null,// 是否显示评估与诊断详情
                time_interview: '',// 添加日期
                general_information: '',// 一般资料
                personal_statement: '', // 个人陈述
                consultant_observation: '',// 咨询师观察
                parents_reflect: '',// 家长反映
                consultant_summary: '',// 咨询师总结
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
                var studentId = this.studentId;
                this.$ajax.post('/careerArchives/getDiagnosisReportList',{
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    studentId: studentId
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
                let studentId = this.studentId;
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
                this.$ajax.post('/careerArchives/storeFirstInterview',{
                    studentId: studentId,
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
                let studentId = this.studentId;
                this.$ajax.post('/careerArchives/getFirstInterview',{
                    studentId: studentId
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
                let studentId = this.studentId;
                this.$ajax.post('/careerArchives/storeAssessmentInfo',{
                    date: this.time_diagnosis,
                    problems: this.problems_diagnosis,
                    reason: this.reason_diagnosis,
                    id: this.id_diagnosis,
                    studentId: studentId
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
                let studentId = this.studentId;
                this.$ajax.post('/careerArchives/getAssessmentList',{
                    studentId: studentId
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
                let studentId = this.studentId;
                this.isShowDiagnosis = true;
                this.$ajax.post('/careerArchives/getAssessmentInfo',{
                    id: id,
                    studentId: studentId
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
                this.$nextTick(() => {
                    this.getHeight();
                })
            },
            cardDiagnosis() {
                this.$nextTick(() => {
                    this.getHeight();
                })
            },
            isShowDiagnosis() {
                this.$nextTick(() => {
                    this.getHeight();
                })
            }
        },
        created() {
            this.getReportList();
            this.getAssessmentList();
            this.getFirstInterview();
            this.getAssessmentList();
        },
        mounted(){
            setTimeout(function () {
                $('#loading').hide();
                // $('.main').fadeIn();
            })
        }
    })
</script>
</html>
