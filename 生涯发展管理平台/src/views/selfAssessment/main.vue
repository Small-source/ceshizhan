<template>
    <div class="explore " id="selfexplore">
        <masks v-show="addtanchuang||false"></masks>
        <div class="schoolWork" style="margin-bottom: 20px">
            <div>
                <div class="schoolWorkBox">
                    <div class="title" style="padding-bottom: 16px;border-bottom: 1px solid #E6E6E6;margin-bottom: 0">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        学生自我评估
                    </div>
                    <div class="title" style="font-size: 15px">
                        <div class="img"></div>
                        生涯测评
                    </div>
                    <ul class="electiveBox">
                        <li v-for="(item,index) in cdata1">
                            <div class="left">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="right">
                                <div class="title">
                                    {{item.title}}
                                </div>
                                <p v-html="item.content">
                                </p>
                                <div class="button" @click="jump(item.link,index)" :style='{filter:
                          index==0&&(!careerTest)&&"grayscale(100%)"||
                          index==1&&(!careerBool)&&"grayscale(100%)"||"none"}'>
                                    {{item.button}}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="schoolWorkBox">
                    <div class="title" style="font-size: 15px">
                        <div class="img"></div>
                        生涯适应力测评
                    </div>
                    <ul class="electiveBox">
                        <li v-for="(item,index) in cdata2">
                            <div class="left">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="right">
                                <div class="title">
                                    {{item.title}}
                                </div>
                                <p v-html="item.content">
                                </p>
                                <div class="button" @click="jump(item.link)" v-if="index == 0">
                                    {{item.button}}
                                </div>
                                <div class="button" @click="isShowMark = true" v-else>
                                    {{item.button}}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="mark" v-show="isShowMark">
                        <div class="tips">
                            <ul>
                                <li v-for="(item, index) in adaptabilityList" :key="index">
                                    <span>{{item.createdAt}}测评</span>
                                    <div class="btn" @click="goReport(item.id)">
                                        查看
                                    </div>
                                </li>
                            </ul>
                            <div class="close" @click="isShowMark= false"></div>
                        </div>
                    </div>
                </div>
                <div class="schoolWorkBox">
                    <div class="title" style="font-size: 15px">
                        <div class="img"></div>
                        生涯五问
                    </div>
                    <div class="add" @click="addtanchuang=true">
                        <span >新增</span>
                    </div>
                    <div class="tables2">
                        <table>
                            <tr>
                                <td>我是谁</td>
                                <td>我想成为谁</td>
                                <td>我可以达到吗</td>
                                <td>我怎么去</td>
                                <td>如何证明我已经做到</td>
                                <td>时间</td>
                                <td width="100">操作</td>
                            </tr>
                            <tr v-for="item in fiveQuestionData">
                                <td>
                                    {{item.who||'--'}}
                                </td>
                                <td>
                                    {{item.he||'--'}}
                                </td>
                                <td>
                                    {{item.iCanReach||'--'}}
                                </td>
                                <td>
                                    {{item.iGoTo||'--'}}
                                </td>
                                <td>
                                    {{item.iDoIt||'--'}}
                                </td>
                                <td>
                                    {{item.date||'--'}}
                                </td>
                                <td>
                                    <span  class="icon2 icon" @click="del(item.id)"></span>
                                    <span class="icon" @click="show(item.id)"></span>
                                </td>
                            </tr>
                        </table>
                        <div class="noneContent" v-if="fiveQuestionData.length==0"></div>
                    </div>
                </div>
                <div class="schoolWorkBox">
                    <div class="title" style="font-size: 15px">
                        <div class="img"></div>
                        学习状态诊断
                    </div>
                    <ul class="electiveBox">
                        <li v-for="(item,index) in cdata3">
                            <div class="left">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="right">
                                <div class="title">
                                    {{item.title}}
                                </div>
                                <p v-html="item.content">
                                </p>
                                <div class="button" @click="jump(item.link)">
                                    {{item.button}}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="addTests" v-show="addtanchuang">
            <div class="head">生涯五问</div>
            <img src="imgs/careerManagement/plan/icon_head.png" alt="" style="height: 60px">
            <div class="tables">
                <table>
                    <tr>
                        <td>我是谁</td>
                        <td>我想成为谁</td>
                        <td>我可以达到吗</td>
                        <td>我怎么去</td>
                        <td>如何证明我 <br>已经做到</td>
                        <td>时间</td>
                    </tr>
                    <tr>
                        <td>
                            <textarea v-model="who"></textarea>
                        </td>
                        <td>
                            <textarea v-model="he"></textarea>
                        </td>
                        <td>
                            <textarea v-model="ICanReach"></textarea>
                        </td>
                        <td>
                            <textarea v-model="IGoTo"></textarea>
                        </td>
                        <td>
                            <textarea v-model="IDoIt"></textarea>
                        </td>
                        <td>
                            <el-date-picker
                                    v-model="date"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="save" @click="addEdit(),clear()">
                保存
            </div>
            <div class="close" @click="exitConfirm"></div>
        </div>
        <div class="schoolWork">
            <div class="schoolWorkBox">
                <div class="title" style="padding-bottom: 16px;border-bottom: 1px solid #E6E6E6;margin-bottom: 0">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    学业信息
                </div>
                <div class="title" style="font-size: 15px">
                    <div class="img"></div>
                    个人信息
                </div>
                <ul class="list">
                    <li @click="$router.push('/selfAssessment/message')">
                        <img src="imgs/schoolWork/icon_gerenxinxi2.png" alt="">
                        <span>个人信息</span>
                    </li>
                </ul>
            </div>
            <div class="schoolWorkBox">
                <div class="title" style="font-size: 15px">
                    <div class="img"></div>
                    学业信息
                </div>
                <ul class="list">
                    <li @click="$router.push('/selfAssessment/seniorOne')">
                        <img src="imgs/schoolWork/icon_gaoyi2.png" alt="">
                        <span>高一</span>
                    </li>
                    <li @click="$router.push('/selfAssessment/seniorTwo')">
                        <img src="imgs/schoolWork/icon_gaoer2.png" alt="">
                        <span>高二</span>
                    </li>
                    <li @click="$router.push('/selfAssessment/seniorThree')">
                        <img src="imgs/schoolWork/icon_gaosan2.png" alt="">
                        <span>高三</span>
                    </li>
                </ul>
            </div>
            <div class="schoolWorkBox">
                <div class="title" style="font-size: 15px">
                    <div class="img"></div>
                    学业水平考试
                </div>
                <ul class="list">
                    <li @click="$router.push('/selfAssessment/test')">
                        <img src="imgs/schoolWork/icon-xueyeshuipingkaoshi2.png" alt="">
                        <span>学业水平考试</span>
                    </li>
                </ul>
            </div>
            <div class="schoolWorkBox">
                <div class="title" style="font-size: 15px">
                    <div class="img"></div>
                    获奖信息
                </div>
                <ul class="list">
                    <li @click="$router.push('/selfAssessment/reward')">
                        <img src="imgs/schoolWork/icon_huojiangxinxi2.png" alt="">
                        <span>获奖信息</span>
                    </li>
                </ul>
            </div>
        </div>
        <Jihuoka v-show="isShowjihuoka" v-on:goClose="isShowjihuoka = false"></Jihuoka>
     </div>
</template>
<script>
    import  masks from '../../components/mask.vue'
    // 引入激活生涯卡组件
    import Jihuoka from '../../components/jihuoka.vue';
    export default {
        name: "",
        components:{masks,Jihuoka},
        data(){
            return{
                isShowjihuoka: false,
                cdata1:[
                    {
                        src:"/imgs/selfAssessment/icon_shengyaceping.png",
                        title:"生涯测评",
                        content:"针对四大部分“认知潜能、人格特性、兴趣倾向、心理健康”进行测评",
                        button:"开始测评",
                        link:"/shengyaceping"
                    },
                    {
                        src:"/imgs/selfAssessment/icon_chakanbaogao.png",
                        title:"查看报告",
                        content:"查看生涯测评报告。",
                        button:"查看",
                        link:'/shengaycepingReport'
                    }
                ],
                cdata2:[
                    {
                        src:"/imgs/selfAssessment/icon_shiyingli.png",
                        title:"生涯适应力测评",
                        content:"对我们的优势和劣势进行测评。",
                        button:"开始测评",
                        link:"/selfAssessment/adaptability"
                    },
                    {
                        src:"/imgs/selfAssessment/icon_chakancepingjilu.png",
                        title:"查看测评记录",
                        content:"查看生涯适应力的变化。",
                        button:"查看",
                        link:""
                    }
                ],
                cdata3:[
                    {
                        src:"/imgs/selfAssessment/icon_shiyingli.png",
                        title:"学习状态诊断测评",
                        content:"",
                        button:"前往测评",
                        link:"/selfAssessment/diagnosis"
                    },
                    {
                        src:"/imgs/selfAssessment/icon_chakancepingjilu.png",
                        title:"查看测评记录",
                        content:"",
                        button:"查看报告",
                        link:"/selfAssessment/diagnosis"
                    }
                ],
                lists:[],
                adaptabilityList: [],
                isShowMark: false,
                addtanchuang:false,
                //生涯五问
                who:"",
                he:"",
                ICanReach:"",
                IGoTo:"",
                IDoIt:"",
                date:"",
                wuwengId:'',
                fiveQuestionData:[],
                careerLinks:'',//生涯测评报告链接
                careerBool:false,//是否可以查看生涯测评报告
                careerTest:true//测评
            }
        },
        methods:{
            //警告提示
            warning(text){
                this.$notify({
                    title: '提示',
                    message: text,
                    type: 'warning'
                });
            },
            //跳转页面
            jump(path,index){
                if(path=='/shengaycepingReport'){
                    if(this.careerBool){
                        window.open(this.careerLinks, '_blank');
                    }
                    return ;
                }
                if(index==0){
                    if(this.careerTest){
                        this.goTest();
                        // let {href}=this.$router.resolve({
                        //     path: path
                        // })
                        // window.open(href, '_blank');
                    }
                }else{
                    this.$router.push(path)
                }
            },
            // 生涯适应力测评记录
            getReportList() {
                var _this = this;
                var token = window.sessionStorage.getItem('ymtxToken');
                this.$ajax
                    .post(this.G_uri + '/assessment/getReportList', {
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        let data = res.data.data;
                        _this.adaptabilityList = data;
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            },
            goReport(id) {
                let {href} = this.$router.resolve({
                    path: '/selfAssessment/adaptability/testreport',
                    name: '生涯适应力测评报告',
                    query: {
                        id: id,
                    }
                })
                window.open(href, '_blank');
            },
            clear(){
                this.who='';
                this.he='';
                this.ICanReach="";
                this.IGoTo="";
                this.IDoIt="";
                this.date="";
                this.wuwengId="";
            },
            //生涯五问添加/编辑
            addEdit(){
                //添加
                if(!this.wuwengId){
                    this.$ajax.post(this.G_uri+this.ports.fiveQuestion.add,{
                            who:this.who,
                            he:this.he,
                            ICanReach:this.ICanReach,
                            IGoTo:this.IGoTo,
                            IDoIt:this.IDoIt,
                            date:this.date
                    },{
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(res=>{
                        if(res.data.code==2000){
                            this.list();
                            this.addtanchuang=false;
                        }else{
                            this.warning(res.data.msg)
                        }
                    })
                }else{
                    this.$ajax.post(this.G_uri+this.ports.fiveQuestion.edit,{
                        id:this.wuwengId,
                        who:this.who,
                        he:this.he,
                        ICanReach:this.ICanReach,
                        IGoTo:this.IGoTo,
                        IDoIt:this.IDoIt,
                        date:this.date
                    },{
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(res=>{
                        if(res.data.code==2000){
                            this.list();
                            this.addtanchuang=false;
                        }else{
                            this.warning(res.data.msg)
                        }
                    })
                }
            },
            //生涯五问列表
            list(){
                this.fiveQuestionData=[];
                this.$ajax.post(this.G_uri+this.ports.fiveQuestion.list,{

                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        if(res.data.data.list.length>0){
                            this.fiveQuestionData=res.data.data.list;
                        }
                    }else{
                        this.warning(res.data.msg)
                    }
                })
            },
            //生涯五问详情
            show(id){
                this.$ajax.post(this.G_uri+this.ports.fiveQuestion.show,{
                    id:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                            let data=res.data.data;
                                this.who=data.who;
                                this.he=data.he;
                                this.ICanReach=data.iCanReach;
                                this.IGoTo=data.iGoTo;
                                this.IDoIt=data.iDoIt;
                                this.date=data.date;
                                this.wuwengId=data.id;
                                this.addtanchuang=true;
                    }else{

                    }
                })
            },
            //生涯五问删除
            del(id){
                this.$ajax.post(this.G_uri+this.ports.fiveQuestion.del,{
                    id:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        this.list();
                    }else{

                    }
                })
            },
            //查看生涯测评报告
            showCareerReport(){
                this.$ajax.post(this.G_uri+this.ports.fiveQuestion.careerReport,{
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                            if(data.see==1){
                                this.careerLinks=data.link;
                                this.careerBool=true;
                            }
                            if(data.link){
                                this.careerTest=false;
                            }
                    }else{

                    }
                })
            },
            goTest() {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax.post(this.G_uri + '/chooseSubject/startTest',{
                    testType: 1,
                },{
                    headers:{
                        token: token
                    }
                })
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        // code: 1.第一次测试2.继续测试3.测试完成4.绑卡
                        if(res.data.data.code == 4) {
                            _this.isShowjihuoka = true;
                            return;
                        }else {
                            let {href}=_this.$router.resolve({
                                path: '/shengyaceping'
                            })
                            window.open(href, '_blank');
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                    // alert('当前服务器繁忙，请刷新')
                });
            },
            //退出确认
            exitConfirm(){
                if(this.who==''&&this.he==''&&this.ICanReach==''&&this.IGoTo==''&&this.IDoIt==''&&this.date==''&&this.wuwengId==''){
                    this.addtanchuang=false;
                    return;
                }
                this.$confirm('当前内容还未保存，是否退出?', '提示', {
                    confirmButtonText: '退出',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.addtanchuang=false
                    this.clear();
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch((error) => {

                })
            },

        },
        watch: {
            isShowMark() {
                if(this.isShowMark) {
                    this.getReportList();
                }
            }
        },
        created(){
            this.list();
            this.showCareerReport();
        }
    }
</script>
<style scoped lang="less">
    .noneContent{
        margin: 0 auto;
        padding: 30px 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
    .add {
        width: 62px;
        height: 26px;
        border-radius: 3px;
        text-align: center;
        line-height: 26px;
        background: #3A90F3;
        color: #fff;
        cursor: pointer;
        margin-left: 40px;
        margin-top: 20px;
        margin-bottom: 10px;
        position: absolute;
        right: 20px;
        top: 30px;
    }
    .addTests{
        &>img{
            display: block;
            width: 100%;
            margin-bottom: 22px;
        }
        background-color: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -400px;
        margin-top: -185px;
        width: 800px;
        height: 370px;
        z-index: 20;
        .head{
            position: absolute;
            top: 0;
            left: 0;
            line-height: 60px;
            text-align: center;
            background: none;
            width: 100%;
            font-size: 20px;
            color:#fff;
            letter-spacing: 2px;
        }
        table{
            tr:first-child{
                background: #F3F4F8;
            }
            td{
                border:1px solid #DDDFDE;
                text-align: center;
                height: 50px;
                textarea{
                    display: block;
                    box-sizing: border-box;
                    padding: 10px;
                    width: 100%;
                    height: 100%;
                    background: none;
                    border:none
                }
            }
            tr:last-child{
                td{
                    height: 150px;
                }
            }

        }
        .save{
            width: 110px;
            height: 42px;
            text-align: center;
            line-height: 42px;
            border-radius: 5px;
            font-size: 17px;
            color:#fff;
            margin: 24px auto 0;
            background: #3B91F4;
            cursor: pointer;
        }
        .close {
            width: 36px;
            height: 36px;
            position: absolute;
            right: 13px;
            top: 13px;
            cursor: pointer;
        }
    }
    .tables{
        padding:0 15px;
    }
    .tables2{
        padding:25px 0  40px;
        table{
            border-collapse: collapse;
            border:1px solid #EAEAEA;
            tr:nth-of-type(1){
                background: #F3F4F8;
            }
            td{
                line-height:40px;
                height: 40px;
                border:1px solid #EAEAEA;
                text-align: center;
                .icon{
                    display: inline-block;
                    width: 34px;
                    height: 20px;
                    border-radius: 3px;
                    cursor: pointer;
                    position: relative;
                    top:5px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image:url("/imgs/schoolWork/icon_bianjihui.png") ;
                    &:hover{
                        background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                        background-color: #3087E6;
                    }
                }
                .icon2{
                    background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
                    &:hover{
                        background-image:url("/imgs/schoolWork/icon_lajitongbai.png");
                        background-color: #FB4945;
                    }
                }
                .finshed{
                    width: 60px;
                    height: 20px;
                    display: inline-block;
                    background: #F3F4F8;
                    color:#666666;
                    position: relative;
                    top:0px;
                    line-height: 20px;
                    cursor: pointer;
                    font-size: 12px;
                }
                span{
                    color:#3D90F6;
                    cursor: pointer;
                }
            }
        }
    }

    .explore{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        // width: 100%;
        padding-left: 20px;
        .parts {
            background: #fff;
            padding: 0 16px;
            margin-bottom: 20px;
            .top {
                img {
                    margin-right: 10px;
                }
                .title {
                    font-size: 17px;
                    color: #348DF1;
                    font-weight: bolder;
                    padding-top: 24px;
                    letter-spacing: 2px;
                }

                span {
                    float: right;
                    display: block;
                    width: 62px;
                    height: 26px;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 26px;
                    background: #3A90F3;
                    position: relative;
                    top: -20px;
                    color: #fff;
                    cursor: pointer;
                }
            }
            & > p {
                padding-left: 40px;
                line-height: 60px;
                color: #666;
            }
            .list {
                padding-bottom: 25px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                & > li {
                    width: 298px;
                    min-height: 256px;
                    background-repeat: no-repeat;
                    background-color: #FAFBFC;
                    p {
                        line-height: 56px;
                        text-align: center;
                        font-size: 16px;
                        color: #fff;
                    }
                    .zhiye {
                        padding: 10px 25px 10px;

                        li {
                            width: 100%;
                            line-height: 20px;
                            span {
                                display: inline-block;
                                width: 4px;
                                height: 4px;
                                border-radius: 50%;
                                background: #3B91F4;
                                margin-right: 10px;
                                position: relative;
                                top: 0;
                                color: #666666;
                            }
                        }
                    }
                }
                & > li:nth-of-type(1) {
                    background-image: url("/imgs/careerManagement/careerAnchor/icon_tuijian1.png");
                }
                & > li:nth-of-type(2) {
                    background-image: url("/imgs/careerManagement/careerAnchor/icon_tuijian2.png");
                }
                & > li:nth-of-type(3) {
                    background-image: url("/imgs/careerManagement/careerAnchor/icon_tuijian3.png");
                }
            }
            .card {
                display: flex;
                justify-content: space-between;
                padding: 0 0 25px 30px;

                li {
                    width: 410px;
                    height: 247px;
                    .cardZheng {
                        width: 230px;
                        float: right;
                        padding-top: 50px;
                        p {
                            line-height: 36px;
                            color: #333333;
                        }
                    }
                    .cardFan {
                        padding-top: 140px;
                        text-align: center;
                        font-size: 16px;
                    }
                }
                li:nth-of-type(2) {
                    background: url("/imgs/careerManagement/careerAnchor/icon_fanmian.png");
                }
            }
            h3 {
                font-size: 15px;
                color: #333;
                font-weight: bolder;
                line-height: 36px;
                text-indent: 25px;
                margin-bottom: 15px;
            }
            .yixiang {
                width: 100%;
                padding-left: 25px;
                max-height: 325px;
                margin-bottom: 20px;
                .left {
                    float: left;
                    width: 154px;
                    height: 100%;
                    border-right: 1px solid #EAEAEA;
                    li {
                        width: 100%;
                        height:65px;
                        overflow: hidden;
                        line-height: 65px;
                        .img {
                            width: 30px;
                            height: 28px;
                            display: inline-block;
                            position: relative;
                            top:8px;
                        }
                    }
                    li:nth-of-type(1) .img{
                        background: url("/imgs/careerManagement/careerAnchor/icon_01.png");
                    }
                    li:nth-of-type(2) .img{
                        background: url("/imgs/careerManagement/careerAnchor/icon_02.png");
                    }
                    li:nth-of-type(3) .img{
                        background: url("/imgs/careerManagement/careerAnchor/icon_03.png");
                    }
                    li:nth-of-type(4) .img{
                        background: url("/imgs/careerManagement/careerAnchor/icon_04.png");
                    }
                    li:nth-of-type(5) .img{
                        background: url("/imgs/careerManagement/careerAnchor/icon_05.png");
                    }
                }
                .right {
                    width: 684px;
                    height: 100%;
                    float: left;
                    li {
                        width: 100%;
                        height: 65px;
                        padding-top: 20px;
                        .hui {
                            position: relative;
                            height: 30px;
                            background: #EEEEEE;
                            .lan {
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 0;
                                height: 100%;
                                background: #3C8DE8;
                                transition: 1s linear;
                            }
                        }
                    }
                }
                .fen {
                    width: 60px;
                    height: 100%;
                    float: left;
                    li {
                        height: 20%;
                        line-height: 65px;
                        text-indent: 10px;
                    }
                }

            }


        }
        .electiveBox{
            background: #fff;
            // width: 970px;
            padding:0px 0px 40px 0px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            li{
                position: relative;
                width: 455px;
                height: 158px;
                border-radius: 5px;
                border:1px solid #EBEBEB;
                .left{
                    width: 120px;
                    float: left;
                    img{
                        position: relative;
                        left:30px;
                        top:16px;
                    }
                }
                .right{
                    width: 330px;
                    float: right;
                    padding-right: 25px;
                    .title{
                        line-height: 56px;
                        font-weight: bolder;
                        font-size: 18px;
                        color:#333333;
                    }
                    p{
                        line-height: 20px;
                        color:#AFAFAF;
                        font-size: 12px;
                    }
                    .button{
                        background: #3D90F6;
                        border-radius: 5px;
                        text-align: center;
                        letter-spacing: 3px;
                        line-height: 30px;
                        color:#fff;
                        font-size: 14px;
                        width: 76px;
                        position: absolute;
                        right: 28px;
                        bottom: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
        .myReports{
            width: 970px;
            background: #fff;
            margin-top: 20px;
            padding: 0 16px;
            img{
                margin-right: 10px;
            }
            .title{
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                padding-top: 24px;
                letter-spacing: 2px;
                margin-bottom: 24px;
            }
            p{
                line-height: 62px;
                color:#333333;
            }
            .list{
                padding-top: 20px;
                flex-wrap: wrap;
                overflow: hidden;
                li{
                    float: left;
                    width: 50%;
                    height: 60px;
                    margin-bottom: 20px;
                    .img{
                        float: left;
                        width: 90px;
                        height: 60px;
                        margin-right: 10px;
                    }
                    .right{
                        float: left;
                        width: 332px;
                        p{
                            font-size: 14px;
                            line-height: 18px;
                            font-weight: bolder;
                            color:#000;
                            &:hover{
                                color:#3492F9;
                            }
                            cursor: pointer;
                        }
                        div{
                            span{
                                font-size: 12px;
                                color:#676767;
                                position: relative;
                                top:2px;
                                left:-2px;
                            }
                        }
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
            .tips {
                width: 652px;
                height: 408px;
                padding-top: 96px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -204px;
                margin-left: -326px;
                background: url(/imgs/selfAssessment/bg_chakancepingjilu.png) no-repeat;
                ul {
                    padding: 0px 50px 0px 40px;
                    height: 276px;
                    overflow-y: auto;
                    li {
                        border-bottom: 1px dashed #eaeaea;
                        height: 46px;
                        line-height: 46px;
                        font-size: 14px;
                        color: #2c8ffc;
                        // span {
                        //     cursor: pointer;
                        // }
                        .btn {
                            float: right;
                            width: 76px;
                            height: 30px;
                            line-height: 30px;
                            border-radius: 3px;
                            background-color: #2c8ffc;
                            color: #fff;
                            text-align: center;
                            margin-top: 8px;
                            cursor: pointer;
                        }
                    }
                }
                .close {
                    width: 36px;
                    height: 36px;
                    position: absolute;
                    right: 13px;
                    top: 13px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
<style>
    #selfexplore .el-date-editor{
        width: 160px;
    }
</style>
<style scoped lang="less">
    .schoolWork{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        border-radius: 5px;
        width: 100%;
        .schoolWorkBox{
            position: relative;
            width: 970px;
            background: #fff;
            padding: 0 18px;
            img{
                margin-right: 10px;
            }
            .img{
                display: inline-block;
                width: 8px;
                height: 8px;
                background: #3D90F6;
            }
            .title{
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                padding-top: 24px;
                letter-spacing: 2px;
                margin-bottom: 24px;
            }
            p{
                line-height: 62px;
                color:#333333;
            }
            .list{
                display: flex;
                justify-content: space-between;
                height: 154px;
                width: 100%;
                li{
                    width: 296px;
                    height: 100px;
                    line-height: 100px;
                    border:1px solid #EBEBEB;
                    span{
                        font-size: 16px;
                        color:#333333;
                        font-weight: bold;
                        margin-left: 20px;
                    }
                    img{
                        cursor: pointer;
                        position: relative;
                        top:-2px;
                        left:10px;
                    }
                }
            }
        }
    }
</style>

