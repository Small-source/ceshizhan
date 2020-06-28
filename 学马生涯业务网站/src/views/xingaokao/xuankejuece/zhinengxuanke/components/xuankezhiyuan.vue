<template>
    <!-- 4.选科志愿 -->
    <div class="xuanKeZhiYuan">
        <StepBar step="4"></StepBar>
        <!-- <div class="generating_reports">
            <div class="inner">
                <div class="report" @click="goTargetDiscipline">生成</br>报告</div>
            </div>
        </div> -->
         <!-- 目标专业 -->
        <!-- <div class="set_target_major">
            <div class="inner">
                <div class="target_major_box">
                    <div class="target_major target_major_top" v-if="zyList">
                        <p class="title_box">
                            <span class="title">目标专业</span>
                        </p>
                        <p class="major_box">
                            <span class="major" v-for="(item, index) in zyList"" :key="index">{{item.subjectName}}</span>
                        </p>
                    </div>
                </div>    
            </div>   
        </div> -->
        <div class="inner">
            <div class="step">
                <p class="step_detail"><span class=tishiyu>提示：</span>请根据选科建议的分析指标，选定“1”个科目组合，然后点击“生成报告”。</p>  
            </div>
            <!-- 平衡单 -->
            <!-- <div class="balance">
                <p class="balance_title">平衡单</p>
                <table  border="1">
                    <tr class="table_header">
                        <th>影响因素</th>
                        <th>权重</th>
                        <th v-if="checkProvince('物理')&&province">物理</th>
                        <th v-if="checkProvince('化学')&&province">化学</th>
                        <th v-if="checkProvince('生物')&&province">生物</th>
                        <th v-if="checkProvince('思想政治')&&province">思想政治</th>
                        <th v-if="checkProvince('历史')&&province">历史</th>
                        <th v-if="checkProvince('地理')&&province">地理</th>
                        <th v-if="checkProvince('技术')&&province">技术</th>
                    </tr>
                    <tr v-for="(item, index) in phdData" :key="index">
                        <th>{{item.influenceFactorName}}</th>
                        <td>{{item.influenceFactorWeight}}</td>
                        <td v-if="checkProvince('物理')&&province">{{item.subjectPhysics}}</td>
                        <td v-if="checkProvince('化学')&&province">{{item.subjectChemistry}}</td>
                        <td v-if="checkProvince('生物')&&province">{{item.subjectBiology}}</td>
                        <td v-if="checkProvince('思想政治')&&province">{{item.subjectIdeologicalPolitics}}</td>
                        <td v-if="checkProvince('历史')&&province">{{item.subjectHistory}}</td>
                        <td v-if="checkProvince('地理')&&province">{{item.subjectGeography}}</td>
                        <td v-if="checkProvince('技术')&&province">{{item.subjectTechnology}}</td>
                    </tr>
                </table>
            </div> -->
            <!-- 选科建议 -->
            <div class="xuankejianyiList" id="xuankejianyiList">
                <p class="xuankejianyi_title">选科建议</p>
                <div class="jianyi-title">
                    <div class="no0">设为目标学科</div>
                    <div class="no1">排名</div>
                    <div class="no2">学科</div>
                    <div class="no3">加权结果</div>
                    <div class="no4">可报考专业覆盖率</div>
                    <div class="no5">可报考院校覆盖率</div>
                    <div class="no6">目标专业覆盖率</div>
                </div>
                <div class="jianyiBoxs" v-for="(item, index) in xkjyList" :key="index">
                    <div class="no0">
                        <span class="checkBox" v-if="TargetDiscipline.length >= 0 && TargetDiscipline.length < 1 && TargetDiscipline.every(function(id) {
                                return id != item.subjectName;
                            }) " 
                            @click="addTargetDiscipline(item.subjectName,index)">
                        </span>
                        <span class="checkeds" v-else-if="TargetDiscipline.some(function(items) {
                            return items == item.subjectName;
                        })" @click="removeTargetDiscipline(item.subjectName,index,item.isGoal)">
                            
                        </span>
                        <span class="uncheckeds" v-else-if="TargetDiscipline.length == 1">
                        </span>
                    </div>
                    <div class="no1">第{{index + 1}}名</div>
                    <div class="no2">{{item.subjectName}}</div>
                    <div class="no3">{{item.weight}}</div>
                    <div class="no4">{{item.subjectCoverage}}%</div>
                    <div class="no5">{{item.universityCoverage}}%</div>
                    <div class="no6">{{item.targetSubjectCoverage}}%</div>
                  
                </div>
            </div>
            <div class="turning">
                <div class="save" @click="goTargetDiscipline">生成报告</div>
            </div> 
        </div>
        <div class="tipsMark" v-if="isShowTips">
            <p v-html="tishi"></p>
            <p></p>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuanKeZhiYuan {
    background-color: #fff;
    // padding-bottom: 30px;
    .inner {
        // background-color: #f5f7f6;
        width: 1200px;
        margin: 0 auto;
    }
    // 提示
    .tishi {
        margin-bottom: 20px;
        padding: 0px 20px;
        // width: 1200px;
        height: 44px;
        line-height: 44px;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        font-size: 14px;
        color: #333333;
        border-radius: 2px;
        .tixing {
            color: red;
        }
        p {
            // float: left;
            // margin-right: 80px;
            span{
                margin-left: 20px;
            }
        }
    }
    .generating_reports {
        width: 100%;
        height: 60px;
        position: fixed;
        z-index: 1;
        left: 0px;
        top: 255px;
        .inner {
            position: relative;
            .report {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                color: #fff;
                background-color: #2c8ffc;
                text-align: center;
                position: absolute;
                right: -60px;
                top: 0px;
                cursor: pointer;
            }
        }
    }
    // 设置目标专业
    .set_target_major {
        width: 100%;
        padding-top: 20px;
        min-height: 70px;
        background: #f5f7f6;
        z-index: 10;
        margin-bottom: 20px;
        .inner {
            position: relative;
            padding-top: 0px;
        }
        .btn_next {
            width: 60px;
            height: 58px;
            text-align: center;
            line-height: 58px;
            font-size: 13px;
            color: #fff;
            cursor: pointer;
            position: absolute;
            position: absolute;
            top: 88px;
            right: -60px;
            background-color: #2d8ffc;
            &:active {
                box-shadow: none;
            }
        }
        .go_pre {
            top: 25px;
            right: -60px;
        }
        .go_next {
            top: 90px;
            right: -60px;
        }
        .target_major_box {
            padding: 0px 20px;
            padding-bottom: 20px;
            background: #fff;
            .target_major {
                .title_box {
                    font-size: 16px;
                    color: #333;
                    height: 60px;
                    line-height: 60px;
                    .tuijian {
                        color: #484cb0;
                        font-size: 14px;
                        font-weight: 600;
                    }
                    .title {
                        font-weight: 600;
                        color: #333;
                    }
                }
                .major_box {
                    overflow: hidden;
                    width: 1165px;
                    // border-top: 1px solid #cccccc;
                    border-left: 1px solid #cccccc;
                    // min-height: 40px;
                    .major {
                        box-sizing: border-box;
                        float: left;
                        width: 232px;
                        height: 41px;
                        line-height: 40px;
                        padding: 0px 10px;
                        border-right: 1px solid #cccccc;
                        border-bottom: 1px solid #cccccc;
                        color: #333;
                        position: relative;
                        &:nth-child(-n+5) {
                            border-top: 1px solid #cccccc;
                            line-height: 39px;
                        }
                        .btn_remove {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            margin-top: -10px;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 16px;
                            text-align: center;
                            cursor: pointer;
                            background: url(/imgs/xingaokao/xuankejuece/360xuanke/icon_close.png) no-repeat center center;
                        }
                    }
                }

            }
        }
    }
    // 步骤标题 .第四步：确定选考科目组合
    .step {
        border-radius: 4px;
        margin-top: -90px;
        height: 150px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 15px #edeeee;
        position: relative;
        z-index: 1;
        .tishiyu {
            color: #fd0926;
        }
        .step_detail {
            float: left;
            font-size: 16px;
            color: #333;
            line-height: 20px;
            height: 16px;
            text-align: center;
            font-weight: 600;

        }
    }
    .balance {
        padding: 0px 20px;
        background-color: #fff;
        .balance_title {
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            line-height: 70px;
            height: 70px;
            color: #333;
        }
        table {
             border: 1px solid #cccccc;
             color: #333;
            tr {
                th {
                    padding-left: 15px;
                    text-align: left;
                }
                td {
                    height: 42px;
                    font-size: 14px;
                    text-align: left;
                    padding-left: 15px;
                }
            }
            .table_header {
                th {
                    height: 42px;
                    font-size: 14px;
                    text-align: left;
                    background-color: #f5f7fa;
                    &:first-child {
                        width: 332px;
                    }
                    width: 118px;
                }
            }
        }
    }
    .xuankejianyiList {
        background-color: #fff;
        padding-bottom: 20px;
        .xuankejianyi_title {
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            line-height: 65px;
            height: 65px;
            color: #000;
        }
        .jianyi-title {
            height: 46px;
            background:linear-gradient(to right,#71bcff,#6897fd);
            border-radius: 3px;
             div {
                text-align: center;
                height: 44px;
                line-height: 44px;
                color: #fff;
                font-size: 14px;
                float: left;
                box-sizing: border-box;
            }
            .no0 {
                width: 150px;
            }
            .no1 {
                width: 150px;
            }
            .no2 {
                width: 190px;
            }
            .no3 {
                width: 170px;
            }
            .no4 {
                width: 180px;
            }
            .no5 {
                width: 180px;
            }
            .no6 {
                width: 178px;
            }
        }
        .jianyiBoxs {
            height: 44px;
            position: relative;
            z-index: 2;
            div {
                height: 44px;
                line-height: 44px;
                border-bottom: 1px solid #f5f5f5;
                color: #333;
                font-size: 14px;
                text-align: center;
                float: left;
                box-sizing: border-box;
            
            }
            .no0 {
                width: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #2c8ffc;
                    line-height: 20px;
                    cursor: pointer;
                }
                .checkeds {
                    background:url(/imgs/xingaokao/xuankejuece/xuekezhixuan/checked2.png) no-repeat center center;
                    background-size: 20px 20px;
                }
                .uncheckeds {
                    background-color: #dedede;
                    border: 1px solid #dedede;
                }
            }
            .no1 {
                color: #333;
                width: 150px;
            }
            .no2 {
                width: 190px;
            }
            .no3 {
                width: 170px;
            }
            .no4 {
                width: 180px;
            }
            .no5 {
                width: 180px;
            }
            .no6 {
                width: 178px;
            }
        }
    }
    .turning {
        padding: 35px 0px;
        height: 46px;
        background-color: #fff;
        .save {
            float: right;
            background-color: #2c8ffc;
            color: #fff;
            padding: 10px 15px; 
            cursor: pointer;
            border-radius: 3px;
            border: none;
            &:active {
                background-color: #156def; 
            }
        }
        .pre {
            width: 154px;
            height: 44px;
            border: 1px solid #2d8ffc;
            border-radius: 2px;
            text-align: center;
            line-height: 44px;
            font-size: 16px;
            color: #2d8ffc;
            float: left;
            cursor: pointer;
            margin: 0 auto;
            // &:hover {
            //     background-color: #2d8ffc;
            //     color: #fff;
            // }
        }
    }
    // 不勾选时候的提示语
    .tipsMark {
        position: fixed;
        padding: 0px 40px;
        padding-top: 50px;
        padding-bottom: 30px;
        width: 220px;
        height: 80px;
        left: 50%;
        top: 50%;
        margin-left: -110px;
        margin-top: -100px;
        background-color: rgba(51,51,51,.5);
        background: url(/imgs/xingaokao/xuankejuece/tips.png);
        font-size: 18px;
        color: #333 ;
        p {
            text-align: center;
            line-height: 40px;
        }
    } 
}
</style>
<script>
import StepBar from '../common/stepBar.vue';
export default {
    components: { StepBar },
    props: [ 'message', 'step' ],
    data() {
        return {
            subjectName: [],
            province: '',
            // 防止选科连续点击|
            isClick: true,
            // 当前选科进行状态
            state: 1,
            page: '',
            // 平衡单
            phdData: [],
            // 专业
            zyList: null,
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
            // text:"360°选科报告"
            // isSave: '',
        }
    },
    methods: {
        // 获取平衡单
        pinghengdanData() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/getBalanceSheetList', {
                    // data
                    token: token,
                    source: 1,
                    // batch: 1
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.phdData = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        // 获取专业列表
        zhuaneylistData() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/getTargetSubjectList', {
                    // data
                    token: token,
                    source: 1,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.zyList = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 获取选科建议列表
        xuankejianyiList() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets"));
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/getSelectionAdviceList', {
                    source: 1,
                    subjectName: subjectName,
                      // batch: 1
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.xkjyList = res.data.data.report;
                        res.data.data.report.forEach(function(item,index) {
                            if(item.isGoal == 1) {
                                _this.TargetDiscipline.push(item.subjectName);
                            }
                        }); 
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }   
                   
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 设置目标专业
        saveGoal(subjectName,goalType,indexKey) {

            var subjectNameArr = subjectName.split("+");
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/storeSelectionAdviceList', {
                    token: token,
                    subject:subjectNameArr,
                    goalType:goalType,
                    // batch: 1
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.xkjyList[indexKey].isGoal = goalType;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }

                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        getData() {
            var token = window.sessionStorage.getItem('ymtxToken');
           
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回)
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.province = res.data.data.province;
                        _this.subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets"));
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        addTargetDiscipline(value1, value2) {           
            this.TargetDiscipline.push(value1);     
        },
        removeTargetDiscipline(value1, value2) {  
            this.TargetDiscipline = this.TargetDiscipline.filter(function(item, index, arr) {
                return item != value1;
            })
        },
        goTargetDiscipline() {
            if(!this.isClick) {
                return;
            }
            var _this = this;
            if(this.TargetDiscipline.length == 0) {
                this.tishi = '目标学科必须勾选1个!<br/>请勾选后再次点击保存'
                this.isShowTips = true;
                this.isClick = true;
                setTimeout(function() {
                    _this.isShowTips = false;
                }, 2000)
                return;
            }
            this.isClick = false;
            var token = window.sessionStorage.getItem('ymtxToken');
            var subject = this.TargetDiscipline;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/storeSelectionAdviceList', {
                    token: token,
                    subject:subject,
                    source: 1,
                    
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.$router.push('/zhinengxuanke/xuankeReport');
                        // window.location.reload();
                    }else if(res.data.code == 2520) {
                        _this.tishi = res.data.msg
                        _this.isShowTips = true;
                        setTimeout(function() {
                            _this.isShowTips = false;
                        }, 2000)
                    }
                    _this.isClick = true;
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        checkProvince(subject) {
            if(subject == '技术') {
                if(this.province != '浙江') {
                    return false;
                }else {
                    return !this.subjectName.some(function(named) {
                        return subject == named;
                    })
                }
                                
            }else if(subject == '物理') {
                let bol = false;
                let province = new RegExp(this.province);
                // 北京、海南、山东、上海、天津、浙江
                // 河北、辽宁、江苏、福建、湖北、湖南、广东、重庆
                if(province.test('北京、海南、山东、上海、天津、浙江')) {
                    bol = !this.subjectName.some(function(named) {
                        return named == '物理';
                    })
                }else {
                    bol = !this.subjectName.some(function(named) {
                        return named == '物理' || named == '历史';
                    })
                    
                }
                return bol;
            }else if(subject == '历史') {
                let bol1 = false;
                let province1 = new RegExp(this.province);
                if(province1.test('北京、海南、山东、上海、天津、浙江')) {
                    bol1 = !this.subjectName.some(function(named) {
                        return named == '历史';
                    })
                }else {
                    bol1 = !this.subjectName.some(function(named) {
                        return named == '物理' || named == '历史';
                    })
                   
                }
                return bol1;
            }else {
                return !this.subjectName.some(function(named) {
                                return subject == named;
                            })
            }
        },

    },
    created() {
        this.pinghengdanData();
        this.zhuaneylistData();
        this.xuankejianyiList();
        // 获取省份
        this.getData();
        window.scrollTo(0, 0);
    },
    mounted(){
    }
}
</script>