<template>
    <div class="myreport">
        <div v-if="cdata&&cdata.list.length > 0">
            <div class="reportlist">
                <p class="myreport_title">我的报告</p>
                <div class="list_title">
                    <span class="no1">目标学科</span>
                    <span class="no2">选科模式</span>
                    <span class="no3">创建时间</span>
                    <span class="no4">操作</span>
                </div>
                <div class="fatherBox">
                    <div v-for="(item, index) in cdata.list" class="childBox" :key="index">
                        <span class="no1">{{item.subjectName}}</span>
                        <span class="no2">{{item.subjectModelName}}</span>
                        <span class="no3">{{item.createdAt}}</span>
                        <div class="no4"><span @click="goReport(item.subjectModel,item.batch)">查看</span></div>
                    </div>
                </div> 
                <Pager ref="pager" :totalPage="totalPage" :count="count"></Pager>
            </div>
            <div class="mianze">
                <div class="title">
                    <img src="/imgs/gerenzhongxin/icon/icon_deng.png" alt="">
                    系统说明:
                </div>
                <p>1.本系统的选科要求数据是根据各省教育考试院普通高校招生专业选考科目要求文件进行整理，实际招生的学校和专业以高考当年最终公布为准。</p>
                <p>2.本报告结果是专业选择、确定选考科目的重要参考，但不是唯一依据，报告解读请向专业人士咨询。</p>
                <p>3.教育考试院和高校会对院校专业信息、选科要求等数据进行不定期更新，本系统不对网站信息内容的准确性、完整性以及可能给使用者造成的损失承担责任。</p>
            </div>
            <div class="go_againXuanke" v-if="!tuance">
                <div class="btn" @click="goAgainXuanke">重新测评</div>
            </div>
        </div>    
        <div class="noReport" v-if="cdata&&cdata.list.length == 0">
            <div class="tubiao"></div>
            <p>暂无报告~~~</p>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.myreport {
    position: relative;
    box-sizing: border-box;
    min-height: 628px;
    position: relative;
    padding-left: 45px;
    padding-right: 20px;
    background-color: #fff;
    overflow: hidden;
    .myreport_title {
        line-height: 70px;
        color: #333;
        font-size: 16px;
    }
    .list_title {
        line-height: 44px;
        color: #fff;
        font-size: 16px;
        border-radius: 4px;
        background:linear-gradient(to right,#71bcff,#6897fd);
    }
    .reportlist {
        .no1 {
            width: 236px;
        }
        .no2 {
            width: 234px;
        }
        .no3 {
            width: 204px;
        }
        .no4 {
            width: 218px;
        }
        .list_title {
            height: 44px;
            span {
                float: left;
                height: 44px;
                line-height: 44px;
                font-size: 14px;
                text-align: center;
                font-weight: 500;
                border-bottom: 1px solid #f2f2f2;
            }
        }
        .fatherBox {
            height: 245px;
        }
        .childBox {
            height: 49px;
            span {
                float: left;
                height: 48px;
                color: #333;
                line-height: 48px;
                font-size: 14px;
                text-align: center;
                font-weight: 500;
                border-bottom: 1px solid #f2f2f2;
            }
            .no4 {
                float: left;
                border-bottom: 1px solid #f2f2f2;
                position: relative;
                height: 48px;
                span {
                    width: 64px;
                    height: 24px;
                    line-height: 24px;
                    color: #3492f9;
                    border-radius: 12px; 
                    border: 1px solid #3492f9;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-top: -13px;
                    margin-left: -33px;
                    cursor: pointer;
                    &:hover {
                        color: #fff;
                        background-color: #3492f9;
                    }
                }
            }
        }
    }
    .go_againXuanke {
        padding-top: 20px;
        height: 36px;
        .btn {
            width: 124px;
            height: 36px;
            line-height: 36px;
            margin: 0 auto;
            color: #fff;
            background-color: #2d8ffc;
            box-shadow: 0px 4px 6px rgba(18, 103, 196, .54);
            border-radius: 18px;
            cursor: pointer;
            float: right;
            &:active {
                box-shadow: none;
            }
        }
    }
    .noReport {
        width: 400px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -150px;
        margin-left: -200px;
        text-align: center;

        .tubiao {
            height: 122px;
            background: url(/imgs/gerenzhongxin/zhanwushuju.png) no-repeat center center;
        }
        p {
            line-height: 54px;
            color: #666;
            font-size: 14px;
        }
    }
    .mianze{
        height: 120px;
        border:1px dashed #4C9FFD;
        padding: 0 18px;
        box-sizing: border-box;
        .title{
            line-height: 30px;
            font-size: 12px;
            color:#666666;
            overflow: hidden;
            padding-left:20px;
            position: relative;
            img{
                position: absolute;
                width: 20px;
                height: 20px;
                left: 0px;
                top: 3px;
            }
        }
        p{
            font-size: 12px;
            color:#666666;
            line-height: 20px;
        }
    }
}
</style>
<script>
import Pager from '../../../components/Pager.vue';
export default {
    // props: [ 'message' ],
    components: { Pager },
    data() {
        return { 
            // 是否绑定360
            isBind360: 1,
            cdata: null,
            data: [],
            // 判断智能选科是去到哪一页，1报告页，2 xuekeyuanxiao
            smart_select: -1,
            // 判断根据专业选科目是去到哪一页，1报告页，2 结果页
            balance_choose_subject: -1,
            tuance: window.sessionStorage.tuance,


            // 页码值
            // pageValue: 1,
            // 每页显示多少条数据
            // pageSize: 15,
            // 共有多少条
            count: '',
            // 一共有多少页
            totalPage: '',
        }
    },
    methods: {
        getData(value) {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            var pageNumber = value;
            if(value){
                pageNumber = value;
            }else {
                pageNumber = 1;
            }
            this.$ajax
                .post(this.G_uri + '/userCenter/getChooseReportList',{
                    pageNumber: pageNumber,
                    pageSize: 5,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    let data = res.data.data;
                    if(res.data.code == 2000) {
                        _this.cdata = data;
                        _this.totalPage = data.page.totalPage;
                        _this.count = data.page.count;
                    }else if(res.data.code != 2000) {
                        console.log(res.msg);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        getUserInfo() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + '/login/getUserInfo',{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.data = res.data.data;
                        _this.smart_select = res.data.data.smart_select;
                        _this.balance_choose_subject = res.data.data.balance_choose_subject;
                        _this.isBind360 =  res.data.data.cards;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        goReport(idx,batch) {
            //1是360°选科  3根据科目选专业 
            if(idx == 1) {
                this.$router.push({  
                    path: '/zhinengxuanke/xuankeReport',    
                    query: {  
                        batch: batch
                    }  
                })
            }else if(idx == 3) {
                // 1是报告页，2是结果页
                this.$router.push({  
                    path: '/majorSelectedSubjects/xuankeReport',    
                    query: {  
                        batch: batch,    
                    }  
                })
            }
        },
        goZhinengXuanke() {// 360选科测评
            window.sessionStorage.setItem('testType', 'type1');
            window.sessionStorage.setItem('testType360', '2');
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/intelligentSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            }).then(function(res) {
                // console.log(res)
                if(res.data.code == 2000) {
                    // code: 1.第一次测试2.继续测试3.测试完成4.绑卡5.报告页,
                    // 6直接选三科不做平衡单 7报告页跟后台一样
                    console.log(res.data.data.code)
                    if(res.data.data.code == 7) {
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 6) {
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 5) {
                        _this.zhuangtai = 5;
                        _this.$router.push('/zhinengxuanke/xuankezhiyuan');
                        return;
                    }
                    if(res.data.data.code == 4) {
                        _this.zhuangtai = 4;
                        //_this.isShowjihuoka = true;
                        _this.isShowjihuoxuankeka = true;
                        return;
                    }
                    if(res.data.data.code == 3) {
                        _this.zhuangtai = 3;
                        _this.$router.push('/zhinengxuanke/mubiaozhuanye');
                        return;
                    }
                    if(res.data.data.code == 2) {//2.继续测试
                        _this.zhuangtai = 2;
                        _this.serial_no = res.data.data.testId;
                        _this.goOnTest();
                        return;
                    }
                    if(res.data.data.code == 1) {//1.第一次测试
                        console.log(158)
                        _this.zhuangtai = 1;
                        _this.serial_no = res.data.data.testId;
                        _this.goCreate();
                    }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
        },
        // 根据专业选科目进度
        goMajorSelectSubject() {
            var token = window.sessionStorage.getItem('ymtxToken');
            window.sessionStorage.setItem('token',token);
            var _this = this;
            this.$ajax.post(this.G_uri + '/chooseSubject/balanceSelectSubject',{
                testType: 2,
            },{
                headers:{token: token}
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    // 1未绑卡 2已绑卡未测试 3报告页 4目标页
                    let code = res.data.data.code;
                    if(code == 1) {
                        _this.isShowJihuoMajor = true;
                    } else if(code == 3) {
                        _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                    } else {
                        _this.$router.push('/majorSelectedSubjects/mubiaozhuanye');
                    } 

                    // else if(code == 3) {
                    //     _this.$router.push('/majorSelectedSubjects/xuankezhiyuan');
                    // }else if(code == 4) {
                    //     _this.$router.push('/majorSelectedSubjects/threeResult');
                    // }else if(code == 5) {
                    //     _this.$router.push('/majorSelectedSubjects/xuankeReport');
                    // }

                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }else if(res.data.code == 2026) {
                    _this.$router.push('/perfectInformation');
                }
            })
        },
        // 重新测评
        goAgainXuanke() {
            let str = this.isBind360;
            if(str.indexOf('2') > -1) {
                this.goZhinengXuanke();
            }else {
                this.goMajorSelectSubject();
            }
           
           
        }
    },
    created() {
        this.getData();
        this.getUserInfo();
    },
    watch: {
    }
}
</script>
