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
                        <div class="xuankejianyi">
                            <span class="shezhi" style="margin-right: 15px">我的选科</span>
                             <span v-for="(item, index) in subjectSets" :key="index">
                                 {{item}} {{index!=2&&'、'||''}}
                             </span>
                        </div>
                        <div class="mubiaozhuanyeTitle">
                            <span class="shezhi">可报考选科要求</span>
                        </div>
                    </div>
                    <div class="content_box">
                        <div class="neirongBox" v-for="(item, index) in cdata" :key="index">
                            <p class="professionTitle">
                                {{item.name}}
                            </p>
                            <p class="detail_num">学科要求及可报考院校数<span class="num" @click="goUniversity(item.id,'','', item.name)">{{'(共' + item.total + '所)'}}</span></p>
                            <div class="xiangqing">
                                <ul class="lis" v-if="item.total > 0">
                                    <li v-for="(childItem, index) in item.arr" :key="index" class="lis_box">
                                        <div v-if="childItem.firstCourseRequire" class="no2">
                                            <p class="names_first"><span class="first_check">首选:</span>{{childItem.firstCourseRequire}}</p>
                                            <p class="names_second"><span class="second_check">再选:</span>{{childItem.secondCourseRequire}}</p>
                                            <p class="num" @click="goUniversity(item.id, childItem.firstCourseRequire, childItem.secondCourseRequire, item.name)"><span>(</span><span class="num_border">{{childItem.num}}</span><span>)</span></p>
                                        </div>
                                        <div v-else class="no0">
                                            <p class="names">{{childItem.chooseCourseRequire}}</p>
                                            <p class="num0" @click="goUniversity(item.id, childItem.chooseCourseRequire, '',  item.name)">
                                                <span>(</span><span class="num_border">{{childItem.num}}</span><span>)</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="lis" v-if="item.total == 0">
                                    <li>
                                        <span>无</span>
                                    </li>
                                </ul>
                            </div>
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

                        background-image:url(/imgs/xingaokao/xuankejuece/xuekezhixuan/checked2.png);
                        background-size: 100% 100%;
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
    .content_box {
        padding: 0px 20px;
        background-color: #fff;
        // 专业
        .neirongBox {
            padding: 20px 0px;
            border-bottom: 1px dashed #dedede;
            letter-spacing: 1px;
            &:last-child {
                border: none;
            }
            .professionTitle {
                text-align: center;
                font-size: 18px;
                color: #333333;
                height: 28px;
                line-height: 28px;
                margin-bottom: 4px;
                font-weight: bold;
            }
            .detail_num {
                text-align: center;
                font-size: 16px;
                color: #333333;
                height: 28px;
                line-height: 28px;
                .num {
                    color: #3492f9;
                    cursor: pointer;
                }
            }
            .xiangqing {
                overflow: hidden;
                .lis {
                    overflow: hidden;
                    width: 1254px;
                    li {
                        padding-top: 15px;
                        float: left;
                        margin-right: 38px;
                        height: 24px;
                        line-height: 24px;
                        font-size: 14px;
                        color: #333;
                        &:last-child {
                            .num {
                                &:after {
                                    background-color: #fff;
                                }
                            }
                        }
                        p {
                            float: left;
                        }
                        .names_first {
                            width: 140px;
                        }
                        .names_second {
                            margin-right: 12px;
                        }
                        .first_check {
                            color: #494fad;
                        }
                        .second_check {
                            color: #f8801e;
                        }
                        .num {
                            color: #3492f9;
                            cursor: pointer;
                            position: relative;
                            .num_border {
                                border-bottom: 1px solid #3492f9;
                            }
                        }
                        .no0 {
                            width: 165px;
                            height: 24px;
                            position: relative;
                            // &:last-child {
                            //     &:after {
                            //         background: none;
                            //     }
                            // }
                            .names {
                                color: #333;
                            }

                            &:after {
                                content: '';
                                position: absolute;
                                width: 1px;
                                height: 16px;
                                right: 0;
                                top: 4px;
                                background-color: #ccc;
                            }

                            .num0 {
                                color: #3492f9;
                                cursor: pointer;
                                padding-left: 8px;
                                .num_border {
                                    border-bottom: 1px solid #3492f9;
                                }
                            }
                        }
                    }
                    .lis_box {
                        position: relative;
                        &:last-child {
                            .no0 {
                                &:after {
                                    background: none;
                                }
                            }
                            .no2 {
                                &:after {
                                    background: none;
                                }
                            }

                        }
                        .no2 {
                            width: 362px;
                            &:after {
                                content: '';
                                position: absolute;
                                width: 1px;
                                height: 16px;
                                right: 0;
                                top: 19px;
                                background-color: #ccc;
                            }
                        }

                    }
                }
            }
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
            cdata:[],
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
            htmlTitle: 'xuankezhiyuan.pdf',
            subjectSets: JSON.parse(window.sessionStorage.getItem("subjectSets"))

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
        },
        goUniversity(value1, value2, value3) {
            this.$router.push({
                path: '/zhinengxuanke/xuankeyuanxiao',
                name: 'xuankeyuanxiao',
                // params: {
                //     id: id
                // },
                query: {
                    subjectId: value1,
                    chooseSubjectRequire: value2,
                    firstCourseRequire: value2,
                    secondCourseRequire: value3
                }
            })
        },

        goOverUniversity() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/chooseSubject/getTargetSubjectUniversityList', {

                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data;
                    }

                })
                .catch(function(error) {
                    // alert('请检查网络')
                })
        }

    },
    mounted() {
        console.log(JSON.parse(window.sessionStorage.getItem("subjectSets")));
    },
    created() {
        this.pinghengdanData();
        this.zhuaneylistData();
        this.xuankejianyiList();
        // 获取省份
        this.getData();
        this.goOverUniversity();
        window.scrollTo(0, 0);
    }
}
</script>