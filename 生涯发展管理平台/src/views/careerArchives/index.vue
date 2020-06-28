<template>
    <div class="careerArchives">
        <div class="shengxue" v-show="shengxue">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                升学规划
            </div>
            <p>高一</p>
            <ul class="list">
                <li v-for="item in gaoyi" :style="{opacity:item.zhanwei&&0}">
                    <div class="listContent">
                        <div class="head">
                            <span v-for="content in item.date">{{content}}</span>
                        </div>
                        <p v-for="li in item.content">
                            <span></span>
                            {{li}}
                        </p>
                    </div>
                </li>
            </ul>
            <p>高二</p>
            <ul class="list">
                <li v-for="item in gaoer" :style="{opacity:item.zhanwei&&0}">
                    <div class="listContent">
                        <div class="head">
                            <span v-for="content in item.date">{{content}}</span>
                        </div>
                        <p v-for="li in item.content">
                            <span></span>
                            {{li}}
                        </p>
                    </div>
                </li>
            </ul>
            <p>高三</p>
            <ul class="list">
                <li v-for="item in gaosan" :style="{opacity:item.zhanwei&&0}">
                    <div class="listContent">
                        <div class="head">
                            <span v-for="content in item.date">{{content}}</span>
                        </div>
                        <p v-for="li in item.content">
                            <span></span>
                            {{li}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="main" v-show="!shengxue">
            <img src="imgs/careerArchives/banner.png" alt="" class="banner">
            <div class="shengxueguihua">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    升学规划
                </div>
                <div class="guihuaNav">
                    <ul class="classNavs">
                        <li @click="tabGuihua(0)">高一</li>
                        <li @click="tabGuihua(7)">高二</li>
                        <li @click="tabGuihua(15)">高三</li>
                    </ul>
                    <ul class="jiantou">
                        <li class="jiantouLeft" @click="tabGuihua(index-1)"></li>
                        <li class="jiantouRight" @click="tabGuihua(index+1)"></li>
                    </ul>
                </div>
                <div class="lunbo">
                    <div class="lunboList">
                        <li v-for="item in gaozhong" :style="{opacity:item.zhanwei&&0}">
                            <div class="listContent">
                                <div class="head">
                                    <span v-for="content in item.date">{{content}}</span>
                                </div>
                                <p v-for="li in item.content">
                                    <span></span>
                                    {{li}}
                                </p>
                            </div>
                        </li>
                    </div>
                </div>
                <div class="showAll">
                    <span @click="showCards">查看全部</span>
                </div>
            </div>
            <div class="fuwutongzhi">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    服务通知
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>标题</td>
                            <td>发送人</td>
                            <td>时间</td>
                            <td>查看</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in noticeList.list" :class="item.viewTime&&'showClose'">
                            <td>{{item.title}}</td>
                            <td>{{item.teacherName}}</td>
                            <td>{{item.createdAt}}</td>
                            <td class="show" @click="getNoticeDetail(item.id)">查看</td>
                        </tr>
                    </tbody>
                </table>
                <el-pagination v-if="noticeList&&noticeList.page.count!=0"
                        background
                        @current-change="currentChange"
                        :page-size="pageSize"
                        layout="prev, pager, next"
                        :total="total"
                        class="pages">
                </el-pagination>
                <div class="noNotice" v-if="noticeList&&noticeList.page.count==0">
                    暂无通知!
                </div>
            </div>
        </div>
        <div class="showNotice" v-show="noticePopup">
            <masks></masks>
            <div class="tanchuang" >
                <div class="close" @click="noticePopup=false">

                </div>
                <div class="title">
                    {{notice.title}}
                </div>
                <p v-html="notice.content">
                </p>
                <div class="shuming">
                    发送人:<span>{{notice.teacher_name}}</span> <br>
                    <span>{{notice.created_at}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "careerArchives",
        components:{masks},
        data(){
            return{
                gaoyi:[
                    {
                        date:['9月','10月','11月','12月'],
                        content:[ '自我认知测评与解读']
                    },
                    {
                        date:['1月'],
                        content:[
                            '学业分析',
                            '自我认知测评与解读',
                            '专业了解与定位',
                            '背景提升建议',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['2月'],
                        content:[
                            '专业了解与定位',
                            '课外科创活动参与',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['3月','4月'],
                        content:[
                            '专业了解与定位',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['5月'],
                        content:[
                            '院校、升学路径定位',
                            '选科/分科决策',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['6月'],
                        content:[
                            '学业分析',
                            '选科/分科决策',
                            '背景提升建议',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['7月','8月'],
                        content:[
                            '选科/分科决策',
                            '课外科创活动参与',
                            '背景提升建议'
                        ]
                    },
                    {
                        zhanwei:true
                    }
                ],
                gaoer:[
                    {
                        date:['9月'],
                        content:[
                            '选科/分科决策',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['10月'],
                        content:[
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['11月','12月'],
                        content:[
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['1月'],
                        content:[
                            '学业分析',
                            '背景提升建议',
                            '综评初审',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['2月'],
                        content:[
                            '课外科创活动参与',
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['3月','4月','5月'],
                        content:[
                            '背景提升建议',
                            '综评初审',
                        ]
                    },
                    {
                        date:['6月'],
                        content:[
                            '学业分析',
                            '背景提升建议',
                            '综评初审',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['7月','8月'],
                        content:[
                            '课外科创活动参与',
                            '背景提升建议',
                            '综评初审'
                        ]
                    }
                ],
                gaosan:[
                    {
                        date:['9月','10月','11月','12月'],
                        content:[
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['1月'],
                        content:[
                            '学业分析',
                            '背景提升建议',
                            '综评初审',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['2月'],
                        content:[
                            '课外科创活动参与',
                            '综评初审'
                        ]
                    },
                    {
                        date:['3月','4月'],
                        content:[
                            '综评初审'
                        ]
                    },
                    {
                        date:['5月','6月'],
                        content:[
                            '综评面试'
                        ]
                    },
                    {
                        zhanwei:true
                    },
                    {
                        zhanwei:true
                    },
                    {
                        zhanwei:true
                    }
                ],
                gaozhong:[
                    {
                        date:['9月','10月','11月','12月'],
                        content:[ '自我认知测评与解读']
                    },
                    {
                        date:['1月'],
                        content:[
                            '学业分析',
                            '自我认知测评与解读',
                            '专业了解与定位',
                            '背景提升建议',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['2月'],
                        content:[
                            '专业了解与定位',
                            '课外科创活动参与',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['3月','4月'],
                        content:[
                            '专业了解与定位',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['5月'],
                        content:[
                            '院校、升学路径定位',
                            '选科/分科决策',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['6月'],
                        content:[
                            '学业分析',
                            '选科/分科决策',
                            '背景提升建议',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['7月','8月'],
                        content:[
                            '选科/分科决策',
                            '课外科创活动参与',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['9月'],
                        content:[
                            '选科/分科决策',
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['10月'],
                        content:[
                            '背景提升建议'
                        ]
                    },
                    {
                        date:['11月','12月'],
                        content:[
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['1月'],
                        content:[
                            '学业分析',
                            '背景提升建议',
                            '综评初审',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['2月'],
                        content:[
                            '课外科创活动参与',
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['3月','4月','5月'],
                        content:[
                            '背景提升建议',
                            '综评初审',
                        ]
                    },
                    {
                        date:['6月'],
                        content:[
                            '学业分析',
                            '背景提升建议',
                            '综评初审',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['7月','8月'],
                        content:[
                            '课外科创活动参与',
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['9月','10月','11月','12月'],
                        content:[
                            '背景提升建议',
                            '综评初审'
                        ]
                    },
                    {
                        date:['1月'],
                        content:[
                            '学业分析',
                            '背景提升建议',
                            '综评初审',
                            '学年评估升学规划定位报告'
                        ]
                    },
                    {
                        date:['2月'],
                        content:[
                            '课外科创活动参与',
                            '综评初审'
                        ]
                    },
                    {
                        date:['3月','4月'],
                        content:[
                            '综评初审'
                        ]
                    },
                    {
                        date:['5月','6月'],
                        content:[
                            '综评面试'
                        ]
                    }
                ],
                shengxue:false,
                index:0,
                mounths:[
                    [9,10,11,12],[1],[2],[3,4],[5],[6],[7,8],
                    [9],[10],[11,12],[1],[2],[3,4,5],[6],[7,8],
                    [9,10,11,12],[1],[2],[3,4],[5,6]
                ],
                nianjis:['高三','高二','高一','初三','初二'],
                year:'',
                mounth:'',
                notice:'',
                noticeList:'',
                noticePopup:false,
                // 通知列表分页器
                pageNumber:1,//当前页码
                pageSize:10,//每页大小
                total:0,//总条数
            }
        },
        computed:{
            user(){
                return this.$store.state.user
            }
        },
        methods:{
            //切换升学规划月卡
            tabGuihua(index){
                if(index<0||index>16){
                    return false;
                }
                $('.classNavs>li').removeClass('xuanzhong')
                this.index=index;
                if(this.index>=0&&this.index<7){
                    $('.classNavs>li').eq(0).addClass('xuanzhong')
                }else if(this.index>=7&&this.index<15){
                    $('.classNavs>li').eq(1).addClass('xuanzhong')
                }else{
                    $('.classNavs>li').eq(2).addClass('xuanzhong')
                }
                $('.lunboList').animate({marginLeft:-this.index*240},300)
            },
            //查看升学规划所有卡片
            showCards(){
                this.shengxue=true
            },
            //定位当前是高几和月份
            positonCards(){
                if(this.user){
                    this.getYear()
                    if(this.user.baccll_year=='成年人'){
                        this.tabGuihua(16)
                    }else if(this.nianjis[this.user.baccll_year-this.year]=="高三"){
                        for(var i=15;i<=23;i++){
                            if(this.mounths[i].indexOf(this.mounth)!=-1){
                                if(i==15){
                                    this.tabGuihua(15)
                                }else{
                                    this.tabGuihua(16);
                                }
                                return
                            }
                        }
                    }else if(this.nianjis[this.user.baccll_year-this.year]=="高二"){
                        for(var i=7;i<15;i++){
                            if(this.mounths[i].indexOf(this.mounth)!=-1){
                                this.tabGuihua(i);
                                return
                            }
                        }
                    }else if(this.nianjis[this.user.baccll_year-this.year]=="高一"){
                        for(var i=0;i<7;i++){
                            if(this.mounths[i].indexOf(this.mounth)!=-1){
                                this.tabGuihua(i);
                                return
                            }
                        }
                    }else if(this.user.baccll_year-this.year<0){
                        this.tabGuihua(16);
                    }else{
                        this.tabGuihua(0);
                    }
                }
            },
            //获取当前年份
            getYear(){
                let date=new Date();
                let year=date.getFullYear();
                let mounth=date.getMonth()+1;
                let day=date.getDate();
                if(mounth>=9){
                    year+=1
                }
                this.year=year;
                this.mounth=mounth;
            },
            //获取服务通知列表
            getNoticeList(pageNumber,pageSize){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.notice.getNoticeList,{
                    pageNumber:pageNumber||1,
                    pageSize:pageSize||10
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                   _this.noticeList=res.data.data
                    _this.total=_this.noticeList.page.count
                })
            },
            //查看服务通知
            getNoticeDetail(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.notice.getNoticeDetail,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    _this.notice=res.data.data
                    _this.noticePopup=true
                    _this.$store.dispatch('getUnreadNum',window.sessionStorage.getItem('ymtxToken'));
                })
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.getNoticeList(num)
            },
        },
        mounted(){
            this.tabGuihua(0);
            this.getNoticeList();
            this.positonCards();
        },
        watch:{
            user(){
                this.positonCards();
            }
        }
    }
</script>

<style scoped lang="less" scoped>
    .careerArchives{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        box-sizing: border-box;
        padding-left:20px;
        .shengxue{
            background: #fff;
            padding: 0 16px 25px;
            img{
                margin-right: 10px;
            }
            .title{
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                padding-top: 24px;
                letter-spacing: 2px;
            }
            p{
                line-height: 62px;
                color:#333333;
            }
            .list{
                width: 100%;
                height: 420px;
                display: flex;
                justify-content: space-between;
                align-content:space-between;
                flex-wrap: wrap;
                li{
                    width: 220px;
                    height: 200px;
                    &:nth-of-type(1){
                        background-image: url("/imgs/careerArchives/icon_01.png");
                    }
                    &:nth-of-type(2){
                        background-image: url("/imgs/careerArchives/icon_02.png");
                    }
                    &:nth-of-type(3){
                        background-image: url("/imgs/careerArchives/icon_03.png");
                    }
                    &:nth-of-type(4){
                        background-image: url("/imgs/careerArchives/icon_04.png");
                    }
                    &:nth-of-type(5){
                        background-image: url("/imgs/careerArchives/icon_05.png");
                    }
                    &:nth-of-type(6){
                        background-image: url("/imgs/careerArchives/icon_06.png");
                    }
                    &:nth-of-type(7){
                        background-image: url("/imgs/careerArchives/icon_07.png");
                    }
                    &:nth-of-type(8){
                        background-image: url("/imgs/careerArchives/icon_08.png");
                    }
                    .listContent{
                        .head{
                            height: 52px;
                            line-height: 56px;
                            text-align: center;
                            background: none;
                            margin-bottom: 10px;
                            span{
                                color: white;
                                font-size: 13px;
                                margin-right: 8px;
                            }
                        }
                        p{
                            line-height: 26px;
                            color:#666666;
                            font-size: 11px;
                            text-indent: 30px;
                            position: relative;
                            span{
                                position: absolute;
                                display: block;
                                width: 6px;
                                height: 6px;
                                border-radius: 50%;
                                background: #BFBFBF;
                                left:18px;
                                top:10px;
                            }
                        }
                    }
                }
            }
        }
        .main{
            .banner{
                display: block;
                width: 100%;
                margin-bottom: 20px;
            }
            .shengxueguihua{
                background: #fff;
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
                }
                p{
                    line-height: 62px;
                    color:#333333;
                }
                .guihuaNav{
                    overflow: hidden;
                    line-height: 24px;
                    margin: 30px 0 20px;
                    .classNavs{
                        float: left;
                        width: 180px;
                        display: flex;
                        justify-content: space-between;
                        color:#4E9FFA;
                        li{
                            width:50px;
                            height: 100%;
                            border-radius: 5px;
                            /*background: red;*/
                            text-align: center;
                            font-size: 13px;
                            cursor:pointer;
                        }
                    }
                    .jiantou{
                        float: right;
                        width: 80px;
                        display: flex;
                        justify-content: space-between;
                        li{
                            width: 24px;
                            height: 24px;
                            cursor: pointer
                        }
                        .jiantouLeft{
                            background: url('/imgs/careerArchives/icon_zuohua.png');
                        }
                        .jiantouRight{
                            background: url('/imgs/careerArchives/icon_youhua.png');
                        }
                    }
                    .xuanzhong{
                        background: #4E9FFA;
                        color:white;
                    }
                }
                .lunbo{
                    width: 100%;
                    overflow: hidden;
                    .lunboList{
                        white-space:nowrap;
                        width: 10000px;
                        overflow: hidden;
                        li{
                            width: 220px;
                            height: 200px;
                            margin-right: 20px;
                            float: left;
                            &:nth-of-type(1),&:nth-of-type(8),&:nth-of-type(16){
                                background-image: url("/imgs/careerArchives/icon_01.png");
                            }
                            &:nth-of-type(2),&:nth-of-type(9),&:nth-of-type(17){
                                background-image: url("/imgs/careerArchives/icon_02.png");
                            }
                            &:nth-of-type(3),&:nth-of-type(10),&:nth-of-type(18){
                                background-image: url("/imgs/careerArchives/icon_03.png");
                            }
                            &:nth-of-type(4), &:nth-of-type(11),&:nth-of-type(19){
                                background-image: url("/imgs/careerArchives/icon_04.png");
                            }
                            &:nth-of-type(5),&:nth-of-type(12),&:nth-of-type(20){
                                background-image: url("/imgs/careerArchives/icon_05.png");
                            }
                            &:nth-of-type(6),&:nth-of-type(13){
                                background-image: url("/imgs/careerArchives/icon_06.png");
                            }
                            &:nth-of-type(7),&:nth-of-type(14){
                                background-image: url("/imgs/careerArchives/icon_07.png");
                            }
                            &:nth-of-type(15){
                                background-image: url("/imgs/careerArchives/icon_08.png");
                            }
                            .listContent{
                                .head{
                                    height: 52px;
                                    line-height: 56px;
                                    text-align: center;
                                    background: none;
                                    margin-bottom: 10px;
                                    span{
                                        color: white;
                                        font-size: 13px;
                                        margin-right: 8px;
                                    }
                                }
                                p{
                                    line-height: 26px;
                                    color:#666666;
                                    font-size: 11px;
                                    text-indent: 30px;
                                    position: relative;
                                    span{
                                        position: absolute;
                                        display: block;
                                        width: 6px;
                                        height: 6px;
                                        border-radius: 50%;
                                        background: #BFBFBF;
                                        left:18px;
                                        top:10px;
                                    }
                                }
                            }
                        }
                    }
                }
                .showAll{
                    font-size: 14px;
                    color:#4D9EF9;
                    line-height: 58px;
                    height: 58px;
                    cursor: pointer;
                    span{
                        float: right;
                    }
                }
            }
            .fuwutongzhi{
                background: #fff;
                margin-top: 20px;
                .shengxueguihua;
                padding-bottom: 20px;
                table{
                    width: 100%;
                    thead{
                        tr{
                            border-bottom: 1px dashed #E9E9E9;
                        }
                        td{
                            font-size: 15px;
                            color:#656565;
                            line-height: 60px;
                            font-weight: bolder;
                            text-align: center;
                        }
                    }
                    tbody{
                        tr{
                            border-bottom: 1px dashed #E9E9E9;
                            td{
                                text-align: center;
                                line-height: 38px;
                                font-size: 12px;
                            }
                            .show{
                                color:#469AFA !important;
                                cursor: pointer;
                            }
                        }
                        .showClose{
                            td{
                                color:#CACACA;
                            }
                        }
                    }
                }
                .pages{
                    margin: 40px auto;
                    text-align: center;
                }
                .noNotice {
                    text-align: center;
                    padding-top: 30px;
                    font-size: 16px;
                    color:#9e9e9e;
                }
            }
        }
        .tanchuang{
            position: fixed;
            width:838px;
            height: 722px;
            left: 50%;
            top: 50%;
            margin-left: -419px;
            margin-top: -361px;
            background: url("/imgs/careerArchives/bg_tongzhi.png");
            z-index: 20;
            padding:0 68px ;
            p{
                line-height: 60px;
                text-indent: 32px;
                color:#666;
            }

            .title{
                height: 230px;
                line-height: 250px;
                text-align: center;
                font-size: 20px;
                font-weight: bolder;
                letter-spacing: 3px;
            }
            .shuming{
                width: 200px;
                height: 70px;
                position: absolute;
                right: 66px;
                bottom: 70px;
                font-size: 14px;
                color:#333;
                letter-spacing: 2px;
                line-height: 30px;
                padding-top: 10px;
                font-weight: bolder;
                span{

                }
            }
            .close{
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                right: 66px;
                top: 193px;
            }
        }
    }
</style>
