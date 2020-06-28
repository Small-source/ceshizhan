<template>
    <!-- 4.选科志愿 -->
    <div class="xuanKeZhiYuan">
        <div class="row" id="pdfDom">
            <div class="inner">
                <div class="tishi">
                    <p class="no1">
                        <span class="tixing">提示:</span>
                        <span>
                            请根据选科报告，选择您的学科组合，选择一个学科组合，提交后的志愿将会保存到我的选科
                        </span> 
                    </p>
                </div>

                    <div class="content">
                        <div class="report-title">
                            360°选科报告
                            <!-- <button type="button" class="btn btn-primary"v-on:click="getPdf()">导出PDF</button> -->
                        </div>
                        <div class="mubiaozhuanyeTitle">
                            <span class="shezhi">目标专业</span>
                        </div>
                        <div class="mubiaozhuanyeList">
                            <span class="box" v-for="(item, index) in zyList" :key="index">{{item.subjectName}}</span>
                        </div>
                        <div class="pinghengdans">
                            <span class="shezhi">平衡单</span>
                        </div>
                        <div class="pinghengdanList">
                            <!-- ，权重，物理，化学，生物，思想政治，历史，地理，技术 -->
                            <el-table v-if="UserProvince" :data="phdData" :height=840 border :style="{'text-align': 'center'} ">
                                <el-table-column align="center"  prop="influenceFactorName" label="影响因素" width="199" height="46"></el-table-column>
                                <el-table-column align="center" prop="influenceFactorWeight" label="权重" width="138" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectPhysics" label="物理" width="137" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectChemistry" label="化学" width="137" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectBiology" label="生物" width="137" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectIdeologicalPolitics" label="思想政治" width="137" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectHistory" label="历史" width="137" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectGeography" label="地理" width="137" height="46"></el-table-column>
                            </el-table>

                            <el-table v-if="!UserProvince" :data="phdData" :height=840 border :style="{'text-align': 'center'} ">
                                <el-table-column align="center"  prop="influenceFactorName" label="影响因素" width="199" height="46"></el-table-column>
                                <el-table-column align="center" prop="influenceFactorWeight" label="权重" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectPhysics" label="物理" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectChemistry" label="化学" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectBiology" label="生物" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectIdeologicalPolitics" label="思想政治" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectHistory" label="历史" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectGeography" label="地理" width="120" height="46"></el-table-column>
                                <el-table-column align="center" prop="subjectTechnology" label="技术" width="120" height="46"></el-table-column>
                            </el-table>
                        </div>
                        <div class="xuankejianyi">
                            <span class="shezhi">选科建议</span>
                            <span class="tishis"><span>请选择<strong class="nums">“1”</strong>个学科组合进行保存</span></span>
                        </div>
                        <!-- 选科建议 -->
                        <div class="xuankejianyiList">
                            <div class="jianyi-title">
                                <div class="no0">设为目标学科</div>
                                <div class="no1">排名</div>
                                <div class="no2">学科</div>
                                <div class="no3">加权结果</div>
                                <div class="no4">可报考专业覆盖率</div>
                                <div class="no5">可报考院校覆盖率</div>
                                <div class="no6">目标专业覆盖率</div>
                                <!-- <span class="no7">设为目标学科</span> -->
                            </div>
                            <div class="jianyiBoxs" v-for="(item, index) in xkjyList" :key="index">
                                <div class="no0">
                                  <!--   <span class="checkBox" v-if="TargetDiscipline.length >= 0 && TargetDiscipline.length < 3 && TargetDiscipline.every(function(id) {
                                            return id != item.subjectName;
                                        }) " 
                                        @click="addTargetDiscipline(item.subjectName,index)">
                                    </span>
                                    <span class="checkeds" v-else-if="TargetDiscipline.some(function(items) {
                                        return items == item.subjectName;
                                    })" @click="removeTargetDiscipline(item.subjectName,index)">
                                        √
                                    </span>
                                    <span class="uncheckeds" v-else-if="TargetDiscipline.length == 3">
                                    </span> -->
                                    <span class="checkBox" v-if="TargetDiscipline.length >= 0 && TargetDiscipline.length < 1 && TargetDiscipline.every(function(id) {
                                            return id != item.subjectName;
                                        }) " 
                                        @click="addTargetDiscipline(item.subjectName,index)">
                                    </span>
                                    <span class="checkeds" v-else-if="TargetDiscipline.some(function(items) {
                                        return items == item.subjectName;
                                    })" @click="removeTargetDiscipline(item.subjectName,index)">
                                        √
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
                            <!-- <div class="pre" @click="$router.push('/zhinengxuanke/pinghengdan2')">上一步</div> -->

                            <div class="save" @click="goTargetDiscipline">保存至我的报告</div>
                        </div> 
                    </div> 
            </div> 
            <div class="tipsMark" v-if="isShowTips">
                <p v-html="tishi"></p>
                <p></p>
            </div>

        </div>
        <!-- <button type="button" class="btn btn-primary"v-on:click="getPdf()">导出PDF</button> -->
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuanKeZhiYuan {
    // padding-top: 20px;
    // background-color: #f9f9f9;
    // padding: 20px;
    .inner {
        padding-top: 20px;
        padding-bottom: 40px;
        background-color: #f9f9f9;
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
    .content {
        padding: 20px;
        padding-top: 0px;
        background-color: #fff;
        .btn {
            float: right;
            margin-top: 18px;
            border: none;
            background-color: #2c8fff;
            color: #fff;
            height: 30px;
            padding: 0px 10px;
            border-radius: 2px;
            cursor: pointer;
            &:active {
                background-color: #156def;
            }
        }
        .report-title {
            line-height: 65px;
            text-align: center;
            font-size: 18px;
            color: #2c8fff;
            font-weight: 600;
        }
        // 目标专业
        .mubiaozhuanyeTitle {
            height: 30px;
            padding: 10px 0px;
            background-color: #f9f9f9;
            margin-bottom: 20px;
            span {
                display: inline-block;
                padding-left: 20px;
                font-size: 16px;
                color: #333333;
                float: left;
                height: 30px;
                line-height: 30px;

            }
            .shezhi {
                border-left: 4px solid #2d8ffc;
                font-weight: 550;
            }
        }
        .mubiaozhuanyeList {
            padding: 20px;
            padding-bottom: 0px;
            border: 1px solid #dedede;
            border-radius: 3px;
            // background-color: #fff;
            .box {
                display: inline-block;
                height: 44px;
                line-height: 44px;
                background-color: #f9f9f9;
                border: 1px solid #dedede;
                font-size: 16px;
                color: #333;
                margin-bottom: 20px;
                margin-right: 20px;
                padding: 0 8px;
                border-radius: 3px;
            }
        }
        // 平衡单
        .pinghengdans {
            .mubiaozhuanyeTitle;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .turning {
            padding: 35px 0px;
            height: 46px;
            // width: 524px;
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
        .xuankejianyi {
            .mubiaozhuanyeTitle;
            margin-top: 20px;
            margin-bottom: 20px;
            .shezhi {
                padding-left: 20px;
            }
            .tishis {
                margin-left: 20px;
                .nums {
                    // float: left;
                    color: red;
                }
            }
            span {
                padding-left: 0px;

                margin-left: 0px;
                // float: left;
            }
            .nochecked {
                // display: inline-block;
                padding-left: 0px;
                width: 40px;
                height: 30px;
                background: url(/imgs/xingaokao/xuankejuece/nochecked.png) no-repeat center center;
            }
            .checked {
                margin-left: 0px;
                padding-left: 0px;
                // display: inline-block;
                width: 40px;
                height: 30px;
                background: url(/imgs/xingaokao/xuankejuece/checked.png) no-repeat center center;
            }
        }
        .xuankejianyiList {
            width: 1165px;
            .jianyi-title {
                height: 46px;
                 div {
                    display: inline-block;
                    height: 46px;
                    line-height: 46px;
                    background-color: #2d8ffc;
                    border-right: 1px solid #dedede;
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                    float: left;
                }
                .no0 {
                    width: 160px;

                }
                .no1 {
                    width: 160px;
                }
                .no2 {
                    width: 173px;
                }
                .no3 {
                    width: 160px;
                }
                .no4 {
                    width: 160px;
                }
                .no5 {
                    width: 170px;
                }
                .no6 {
                    width: 170px;
                }
            }
            .jianyiBoxs {
                height: 47px;
                div {
                    display: inline-block;
                    height: 46px;
                    line-height: 46px;
                    border-right: 1px solid #dedede;
                    border-bottom: 1px solid #dedede;
                    color: #333;
                    font-size: 14px;
                    text-align: center;
                    float: left;
                }
                .no0 {
                    width: 159px;
                    border-left: 1px solid #dedede;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        border: 1px solid #dedede;
                        line-height: 20px;
                        cursor: pointer;
                    }
                    .checkeds {
                        color: #fff;
                        background-color: #2d8ffc;
                    }
                    .uncheckeds {
                        background-color: #dedede;
                    }
                }
                .no1 {
                    color: #333;
                    width: 160px;
                }
                .no2 {
                    width: 173px;
                }
                .no3 {
                    width: 160px;
                }
                .no4 {
                    width: 160px;
                }
                .no5 {
                    width: 170px;
                }
                .no6 {
                    width: 169px;
                }
            }
        }
    }
    // 专业对比超过四条弹窗
    .tipsMark {
        position: fixed;
        padding: 0px 40px;
        padding-top: 50px;
        padding-bottom: 30px;
        // z-index: 1000;
        width: 220px;
        height: 80px;
        left: 50%;
        top: 50%;
        // right: 50%;
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
<style type="text/css" lang='less'>
.xuanKeZhiYuan {
    .pinghengdanList {
        position: relative;
        .pingBox {
            width: 122.2px;
            height: 830px;
            background-color:  #fff;
            position: absolute;
            right: -2px;
            top: 0px;
            z-index: 5;
        }
        .has-gutter {
            font-size: 14px;
            color: #ffffff !important;
            // background-color: red;
            th {
                background-color: #2c8ffc;
                border-right: 1px solid #dedede;
            }
        }
        // .el-table_10_column_78 {
        //     background-color: #93c4fb;
        //     color: #333;
        // }
        tbody .el-table__row td{
            &:first-child {
                background-color: #93c4fb;
                color: #333;
            }
        }
    }
}   
</style>
<script>
export default {
    // components: { Mubiaozhuanye },
    props: [ 'message' ],
    data() {
        return {
            // 当前选科进行状态
            state: 1,
            page: '',
            // 平衡单
            phdData: [],
            // 专业
            zyList: [],
            // 选科建议
            xkjyList: [],
            UserProvince: '',
             //设置为目标学科
            TargetDiscipline: [],
            // 目标学科不足3门时，保存至我的报告显示提示框
            isShowTips: false,
            tishi: '',
            // 导出PDF
            htmlTitle: 'xuankezhiyuan.pdf'

            // isSave: '',
        }
    },
    methods: {
        // 获取平衡单
        pinghengdanData() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/chooseSubject/getBalanceSheetList', {
                    // data
                    token: token,
                    source: 1,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.phdData = res.data.data;
                        // _this.xkzyData = res.data.data;
                        // _this.$emit('go-next');
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        },
        // 获取专业列表
        zhuaneylistData() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
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
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.zyList = res.data.data;
                        // _this.xkzyData = res.data.data;
                        // _this.$emit('go-next');
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        },
        // 获取选科建议列表
        xuankejianyiList() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var subjectName = JSON.parse(window.sessionStorage.getItem("subjectSets"));
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/chooseSubject/getSelectionAdviceList', {
                    source: 1,
                    subjectName: subjectName
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        _this.xkjyList = res.data.data.report;
                        // _this.isSave = res.data.data.isSave;
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
                    // alert('请检查网络')
                })
        },
        // 设置目标专业
        saveGoal(subjectName,goalType,indexKey) {

            var subjectNameArr = subjectName.split("+");
            // console.log(subjectNameArr)
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/storeSelectionAdviceList', {
                    token: token,
                    subject:subjectNameArr,
                    goalType:goalType
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        // _this.zyList = res.data.data;
                        _this.xkjyList[indexKey].isGoal = goalType;
                        // _this.xkzyData = res.data.data;
                        // _this.$emit('go-next');
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }

                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        },
        getData() {
            var token = window.sessionStorage.getItem('ymtxToken');
           
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res)
                    if(res.data.code == 2000) {
                        if(res.data.data.province == '浙江') {
                            // console.log(11111)
                            _this.UserProvince = false;
                        } else if( res.data.data.province != '浙江') {
                            // console.log(222222222)
                            _this.UserProvince = true;
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    // alert('服务器繁忙')
                })
        },
        addTargetDiscipline(value1, value2) {  
            // if(this.isSave == 1) {
            //     return;
            // }         
            this.TargetDiscipline.push(value1);     
            // console.log(this.TargetDiscipline);
            // console.log(this.TargetDiscipline1);
        },
        removeTargetDiscipline(value1, value2) {
            // if(this.isSave == 1) {
            //     return;
            // }   
            this.TargetDiscipline = this.TargetDiscipline.filter(function(item, index, arr) {
                return item != value1;
            })
            // console.log(this.TargetDiscipline);
        },
        goTargetDiscipline() {
            // var subjectNameArr = subjectName.split("+");
            var _this = this;
            if(this.TargetDiscipline.length == 0) {
                this.tishi = '目标学科必须勾选1个!<br/>请勾选后再次点击保存'
                this.isShowTips = true;
                setTimeout(function() {
                    _this.isShowTips = false;
                }, 2000)
                return;
            }
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
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.tishi = '目标学科保存成功<br/>可至个人中心我的报告查看';
                        _this.isShowTips = true;
                        setTimeout(function() {
                            // _this.isSave = 1;
                            _this.isShowTips = false;
                        }, 2000)
                        _this.xkjyList[indexKey].isGoal = goalType;
                    
                    }else if(res.data.code == 2520) {
                        _this.tishi = res.data.msg
                        _this.isShowTips = true;
                        setTimeout(function() {
                            _this.isShowTips = false;
                        }, 2000)
                    }

                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        }

    },
    created() {
        this.pinghengdanData();
        this.zhuaneylistData();
        this.xuankejianyiList();
        // 获取省份
        this.getData();
        window.scrollTo(0, 0);
    }
}
</script>