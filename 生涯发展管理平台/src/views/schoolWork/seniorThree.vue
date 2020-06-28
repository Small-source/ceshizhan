<template>
    <div class="seniorOne reward">
        <div>
            <masks v-if="addtanchuang||false"></masks>
            <div class="rewardBox">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    学业成绩
                </div>
                <div class="tishi" v-show="chooseSubject.length==0" style="line-height: 40px;color:red" >
                    同学，请先设置你的选科情况
                    <router-link to="/message" style="color:#348DF1"> 前往设置</router-link>
                </div>
                <div class="add" v-show="chooseSubject.length>0">
                    <span @click="addtanchuang=true">新增</span>
                </div>
                <el-table
                        v-loading="loading"
                        :data="cdata"
                        border
                        style="width: 100%">
                    <el-table-column
                            fixed
                            label="高二成绩"
                            prop="name"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            fixed
                            prop="date"
                            label="考试时间"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            label="总成绩"
                            width="120">
                        <el-table-column
                                label="成绩"
                                prop="score"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                label="满分"
                                prop="totalScore"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                label="排名"
                                prop="rank"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                label="总人数"
                                prop="totalPeople"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="语数外+最强3科"
                            width="120">
                        <el-table-column
                                prop="highLight"
                                label="成绩"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="语文"
                            width="300">
                        <el-table-column
                                prop="subject[0].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[0].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[0].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[0].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="数学"
                            width="120">
                        <el-table-column
                                prop="subject[1].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[1].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[1].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[1].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="外语"
                            width="120">
                        <el-table-column
                                prop="subject[2].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[2].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[2].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[2].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="物理"
                            width="120"
                            v-if="patt('物理')">
                        <el-table-column
                                prop="subject[3].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[3].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[3].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[3].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="化学"
                            width="120"
                            v-if="patt('化学')"
                    >
                        <el-table-column
                                prop="subject[4].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[4].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[4].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[4].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="生物"
                            width="120"
                            v-if="patt('生物')"
                    >
                        <el-table-column
                                prop="subject[5].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[5].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[5].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[5].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="政治"
                            width="120"
                            v-if="patt('思想政治')"
                    >
                        <el-table-column
                                prop="subject[6].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[6].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[6].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[6].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="历史"
                            width="120"
                            v-if="patt('历史')"
                    >
                        <el-table-column
                                prop="subject[7].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[7].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[7].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[7].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="地理"
                            width="120"
                            v-if="patt('地理')"
                    >
                        <el-table-column
                                prop="subject[8].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[8].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[8].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[8].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            label="技术"
                            width="120"
                            v-if="patt('技术')"
                    >
                        <el-table-column
                                prop="subject[9].score"
                                label="成绩"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[9].totalScore"
                                label="满分"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[9].rank"
                                label="排名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="subject[9].totalPeople"
                                label="总人数"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                        <template slot-scope="scope">
                            <el-button @click="show(scope.row.id)" type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="rewardBox" style="margin-top: 20px;position: relative">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    总成绩
                </div>
                <ul class="tabs">
                    <li class="left" @click="delTotalIndex()">
                        <
                    </li>
                    <li class="right" @click="addTotalIndex()">
                        >
                    </li>
                </ul>
                <div id="totalEcharts" :style="{width: '100%', height: '440px'}">
                </div>
            </div>
            <div class="rewardBox" style="margin-top: 20px;position: relative">
                <div class="title" style="margin-bottom: 40px">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    各科成绩
                </div>
                <ul class="tabs">
                    <li class="left" @click="delTotalIndex()">
                        <
                    </li>
                    <li class="right" @click="addTotalIndex()">
                        >
                    </li>
                </ul>
                <div id="partEcharts" :style="{width: '100%', height: '440px'}">
                </div>
            </div>
            <div class="rewardBox" style="margin-top: 20px;position: relative">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    总名次
                </div>
                <ul class="tabs">
                    <li class="left" @click="delTotalIndex()">
                        <
                    </li>
                    <li class="right" @click="addTotalIndex()">
                        >
                    </li>
                </ul>
                <div id="totalPeopleEcharts" :style="{width: '100%', height: '440px'}">
                </div>
            </div>
            <div class="rewardBox" style="margin-top: 20px;position: relative">
                <div class="title" style="margin-bottom: 40px">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    各科名次
                </div>
                <ul class="tabs">
                    <li class="left" @click="delTotalIndex()">
                        <
                    </li>
                    <li class="right" @click="addTotalIndex()">
                        >
                    </li>
                </ul>
                <div id="partPeopleEcharts" :style="{width: '100%', height: '440px'}">
                </div>
            </div>
            <div class="addBox" v-show="addtanchuang">
                <img src="imgs/careerManagement/plan/icon_head.png" alt="" style="height: 60px">
                <div class="head">新增/编辑学业成绩</div>
                <ul class="test testone">
                    <li>
                        <span>考试名称:</span>
                        <input type="text" v-model="grade.test.name">
                    </li>
                    <li>
                        <span>考试时间:</span>
                        <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="grade.test.date"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </li>
                    <li>
                        <span>总成绩排名:</span>
                        <input type="number" v-model="grade.test.rank">
                    </li>
                    <li>
                        <span>总成绩总人数:</span>
                        <input type="number" v-model="grade.test.totalPeople">
                    </li>
                </ul>
                <ul class="testtwo">
                    <li v-for="(item,index) in grade.subject" v-if="index<3||index>=3&&patt(item.subject)">
                        <span>{{item.subject}}(成绩/满分/排名/总人数)</span>
                        <input type="number" v-model="item.score"> /
                        <input type="number" v-model="item.totalScore"> /
                        <input type="number" v-model="item.rank"> /
                        <input type="number" v-model="item.totalPeople">
                    </li>
                </ul>
                <div class="save" @click="add(),clear()">保存</div>
                <div class="close" @click="addtanchuang=false,clear()"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "seniorOne",
        data(){
            return{
                cdata:[],
                addtanchuang:false,
                loading: true,
                gradeId:'',
                grade:{
                    test:{
                        "grade":"3",
                        "name":"",
                        "date":"",
                        "totalScore":'',
                        "rank":'',
                        "totalPeople":''
                    },
                    subject:[
                        {
                            subject:'语文',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'数学',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'外语',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'物理',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'化学',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'生物',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'思想政治',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'历史',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'地理',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'技术',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                    ]
                },
                gradeNull:{
                    test:{
                        "grade":"3",
                        "name":"",
                        "date":"",
                        "totalScore":'',
                        "rank":'',
                        "totalPeople":''
                    },
                    subject:[
                        {
                            subject:'语文',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'数学',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'外语',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'物理',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'化学',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'生物',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'思想政治',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'历史',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'地理',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                        {
                            subject:'技术',
                            score:'',
                            totalScore:'',
                            rank:'',
                            totalPeople:''
                        },
                    ]
                },
                gradeTotalData:[],
                gradeTotalIndex:0,
                gradeTotalCount:0,
                gradePartData:[],
                chooseSubject:[]
            }
        },
        components:{masks},
        computed:{
            //用户信息
            user(){
                return this.$store.state.user
            }
        },
        methods:{
            //添加
            add(){
                let _this=this;
                if(!_this.gradeId){
                    //添加
                    this.$ajax.post(this.G_uri + this.ports.schoolWorkMessage.add,this.grade,{
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(res=>{
                        if(res.data.code==2000){
                            _this.list()
                            _this.getTotalChart()
                            _this.getPartChart()
                            _this.addtanchuang=false;
                        }else{
                            _this.warning(res.data.msg)
                        }
                    })
                }else{
                    //编辑
                    this.$ajax.post(this.G_uri + this.ports.schoolWorkMessage.add,this.grade,{
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(res=>{
                        if(res.data.code==2000){
                            _this.list()
                            _this.getTotalChart()
                            _this.getPartChart()
                            _this.addtanchuang=false;
                        }else{
                            _this.warning(res.data.msg)
                        }
                    })
                }
            },
            //列表
            list(){
                let _this=this;
                this.$ajax.post(this.G_uri + this.ports.schoolWorkMessage.list, {
                    grade:3
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    _this.cdata=res.data.data
                    _this.loading=false;
                })
            },
            //查看
            show(id){
                let _this=this;
                _this.gradeId=id;
                this.$ajax.post(this.G_uri + this.ports.schoolWorkMessage.show, {
                    id:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    let data=res.data.data;
                    let test={
                        name:data.name,
                        date:data.date,
                        rank:data.rank,
                        totalPeople:data.totalPeople,
                        grade:'3'
                    }
                    _this.grade={
                        id:data.id,
                        test:test,
                        subject:data.subject
                    }
                    _this.addtanchuang=true;
                })
            },
            //警告提示
            warning(text){
                this.$notify({
                    title: '提示',
                    message: text,
                    type: 'warning'
                });
            },
            //清空grade数据
            clear(){
                this.grade=JSON.parse(JSON.stringify(this.gradeNull))
                this.gradeId='';
            },
            //获取总成绩图表/总名次
            getTotalChart(){
                let _this=this;
                this.$ajax.post(this.G_uri + this.ports.schoolWorkMessage.getTotalChart, {
                    grade:3
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    this.gradeTotalData=res.data.data;
                    this.gradeTotalCount=Math.ceil(res.data.data.length/6)
                })
            },
            //总成绩变化图表
            drawTotal(){
                let xArr=[],yArr=[],zArr=[];
                this.gradeTotalData.slice(this.gradeTotalIndex*6,this.gradeTotalIndex*6+6).forEach((item)=>{
                    xArr.push({
                        value:item.date+'\n'+item.name
                    })
                    yArr.push({
                        value:item.score
                    })
                    zArr.push({
                        value:item.rank
                    })
                })
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('totalEcharts'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '总成绩',
                        textStyle:{
                            fontSize:15
                        },
                        left:32
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:{
                            type:'none'
                        },
                        formatter: function (params, ticket, callback) {
                            return '总分:'+params[0].value;
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: xArr,
                        axisTick: {
                            show: false
                        },
                        offset:5,
                        axisLabel:{
                            fontSize:14,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLabel:{
                            fontSize:13,
                            textStyle:{
                                color:'#333',
                            },
                        },
                        splitLine:{
                            lineStyle:{
                                type:'dashed',

                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    series: [
                        {
                            type:'line',
                            stack: '总量',
                            symbolSize: 12,
                            symbol:'circle',
                            lineStyle:{
                                color: '#5DA1F4',
                                width: 2
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#3D91F4',  //拐点边框颜色
                                    borderWidth:4,
                                    color:"#8FC1FC"
                                }
                            },
                            data:yArr
                        }
                    ],
                    grid: {
                        bottom: '100px',
                    },
                });
                // 基于准备好的dom，初始化echarts实例
                let myChart2 = this.$echarts.init(document.getElementById('totalPeopleEcharts'));
                // 绘制图表
                myChart2.setOption({
                    title: {
                        text: '总名次',
                        textStyle:{
                            fontSize:15
                        },
                        left:32
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:{
                            type:'none'
                        },
                        formatter: function (params, ticket, callback) {
                            return '名次:'+params[0].value;
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: xArr,
                        axisTick: {
                            show: false
                        },
                        offset:5,
                        axisLabel:{
                            fontSize:14,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLabel:{
                            fontSize:13,
                            textStyle:{
                                color:'#333',
                            },
                        },
                        splitLine:{
                            lineStyle:{
                                type:'dashed',

                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    series: [
                        {
                            type:'line',
                            stack: '总量',
                            symbolSize: 12,
                            symbol:'circle',
                            lineStyle:{
                                color: '#5DA1F4',
                                width: 2
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#3D91F4',  //拐点边框颜色
                                    borderWidth:4,
                                    color:"#8FC1FC"
                                }
                            },
                            data:zArr
                        }
                    ],
                    grid: {
                        bottom: '100px',
                    },
                });
            },
            //总成绩向后切换页面
            addTotalIndex(){
                if(this.gradeTotalIndex+1>=this.gradeTotalCount){
                    return false;
                }else{
                    this.gradeTotalIndex++;
                    this.drawTotal();
                    this.drawPart();
                }
            },
            //总成绩向前切换页面
            delTotalIndex(){
                if(this.gradeTotalIndex-1<0){
                    return false;
                }else{
                    this.gradeTotalIndex--;
                    this.drawTotal();
                    this.drawPart();
                }
            },
            //各科成绩图表/总名次
            getPartChart(){
                let _this=this;
                this.$ajax.post(this.G_uri + this.ports.schoolWorkMessage.getPartChart, {
                    grade:3
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    this.gradePartData=res.data.data;
                })
            },
            //各科成绩变化图表
            drawPart(){
                let xArr=[],yArr=[],zArr=[],arr=[0,1,2,3,4,5,6,7,8,9],arr2=[0,1,2],
                    subject=['语文','数学',"外语",'物理','化学','生物','历史','思想政治','地理','技术'];
                this.chooseSubject.forEach(item=>{
                    arr2.push(subject.indexOf(item))
                })
                Array.prototype.diff = function(a) {
                    return this.filter(function(i) {return a.indexOf(i) < 0;});
                };
                let cha=arr.diff(arr2);
                cha.forEach(item=>{
                    subject[item]=null;
                })
                subject=subject.filter(val=>{
                    return !(!val || val === "")
                })
                for(var i=0;i<10;i++){
                    if(cha.indexOf(i)!=-1){
                        continue;
                    }
                    let object={
                        name:subject[i],
                        type:'line',
                        data:[]
                    }
                    let object2={
                        name:subject[i],
                        type:'line',
                        data:[]
                    }
                    this.gradePartData.slice(this.gradeTotalIndex*6,this.gradeTotalIndex*6+6).forEach((item)=>{
                        if(i==0){
                            xArr.push({
                                value:item.date+'\n'+item.name
                            })
                        }
                        object.data.push(item.subject[i].score)
                        object2.data.push(item.subject[i].rank)
                    })
                    yArr.push(object)
                    zArr.push(object2)
                }
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('partEcharts'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '各科成绩',
                        textStyle:{
                            fontSize:15
                        },
                        left:32
                    },
                    legend:{
                        data:subject
                    },
                    tooltip:{
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: xArr,
                        axisTick: {
                            show: false
                        },
                        offset:5,
                        axisLabel:{
                            fontSize:14,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLabel:{
                            fontSize:13,
                            textStyle:{
                                color:'#333',
                            },
                        },
                        splitLine:{
                            lineStyle:{
                                type:'dashed',

                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    series: yArr,
                    grid:{
                        bottom: '100px',
                    },
                });
                // 基于准备好的dom，初始化echarts实例
                let myChart2 = this.$echarts.init(document.getElementById('partPeopleEcharts'));
                // 绘制图表
                myChart2.setOption({
                    title: {
                        text: '名次',
                        textStyle:{
                            fontSize:15
                        },
                        left:32
                    },
                    legend:{
                        data:subject
                    },
                    tooltip:{
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: xArr,
                        axisTick: {
                            show: false
                        },
                        offset:5,
                        axisLabel:{
                            fontSize:14,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false,
                            textStyle:{
                                color:'#333'
                            },
                        },
                        axisLabel:{
                            fontSize:13,
                            textStyle:{
                                color:'#333',
                            },
                        },
                        splitLine:{
                            lineStyle:{
                                type:'dashed',

                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#EAEAEA"
                            }
                        }
                    },
                    series: zArr,
                    grid:{
                        bottom: '100px',
                    },
                });
            },
            //正则过滤
            patt(str){
                let re=new RegExp(str,"g");
                return re.test(this.chooseSubject)
            }
        },
        mounted(){
            this.getTotalChart();
            this.getPartChart();
            this.drawTotal();
            this.drawPart();
        },
        created(){
            this.list();
            let token= window.sessionStorage.getItem('ymtxToken')
            ///获取个人信息
            this.$store.dispatch({
                type:'getUserInfo',
                token:token,
                vue:this
            });
            this.chooseSubject=this.user.choose_subject||[];
        },
        watch:{
            gradeTotalData(){
                this.drawTotal();
            },
            gradePartData(){
                this.drawPart();
            },
            user(val){
                this.chooseSubject=val.choose_subject||[];
            },
        }
    }
</script>

<style scoped lang="less">
    .seniorOne{
        .addResult{
            position: absolute;
            left: 50%;
            top: 50%;
            padding: 90px 18px 0;
            margin-left: -331px;
            margin-top: -246px;
            width: 662px;
            height: 492px;
            z-index: 20;
            background: #fff;
            border: 1px solid rgba(0,0,0,.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,.2);
            .title{
                padding: 0 80px 0 20px;
                height: 42px;
                line-height: 42px;
                border-bottom: 1px solid #eee;
                font-size: 14px;
                color: #333;
                overflow: hidden;
                background-color: #F8F8F8;
                border-radius: 2px 2px 0 0;
            }
        }
    }
    .addBox{
        &>img{
            display: block;
            width: 100%;
            margin-bottom: 22px;
        }
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -330px;
        margin-top: -245px;
        width: 660px;
        height: 490px;
        z-index: 20;
        background-repeat: no-repeat;
        background-color: white;
        background-position: 0 -1px;
        border-radius: 5px;
        .tables{
            padding: 0 20px;
        }
        .head{
            position: absolute;
            top: 0;
            left: 0;
            line-height: 60px;
            text-align: center;
            background: none;
            width: 100%;
            font-size: 20px;
            letter-spacing: 2px;
            color:#fff;
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
        .close{
            width: 17px;
            height: 17px;
            position: absolute;
            top:21px;
            right: 22px;
            cursor: pointer;
        }
        .test{
            overflow: hidden;
        }
        .test>li{
            float: left;
            padding-left: 10px;
        }
        .testtwo>li{
            margin: 5px 0;
            padding-left: 10px;
            height: 30px;
            input{
                height: 30px;
            }
        }
        input{
            border:1px solid #E6E6E6;
            height:36px;
            display:inline-block;
            width: 75px;
        }
        .testone>li{
            width: 50%;
            margin: 5px 0;
            input{
                width: 192px;
            }
        }
    }
    .tabs{
        position: absolute;
        right: 80px;
        top: 50px;
        width: 70px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        li{
            width: 25px;
            height: 25px;
            border:1px solid #4E9FFA;
            text-align: center;
            line-height: 25px;
            color:#4E9FFA;
            cursor: pointer;
        }
        .left{

        }

    }
</style>
<style>
    .testone .el-input__inner{
        width: 190px;
    }
    .seniorOne  .el-input__inner{
        border:1px solid #E6E6E6 !important;
        height: 36px;
    }
</style>
