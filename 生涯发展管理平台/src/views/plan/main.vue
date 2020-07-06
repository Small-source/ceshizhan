<template>
    <div class="plans">
        <masks v-show="historyTanchuang||tanchuang||false"></masks>
        <div class="parts">
            <div class="tops">
                <div class="tops1">
                    <img src="imgs/careerManagement/plan/icon_xueyeguihua.png" alt="">
                    <span class="topspan1">第{{xueyeListData[0]&&xueyeListData[0]['num']}}次学业规划</span>
                </div>
                <div class="tops1" style="margin-top: 20px">
                    <img src="imgs/careerManagement/plan/icon_riqi.png" alt="">
                    <span class="topspan1">日期:{{xueyeListData[0]&&xueyeListData[0]['date']}}</span>
                </div>
                <div class="topsRight">
                    <div class="topspan2" @click="tanchuang=true">新增学业规划</div>
                    <div class="topspan2" @click="historyTanchuang=true">学业规划记录</div>
                    <div class="topspan3" @click="$router.push('/plan/planHistoryRecord')">行动计划历史记录</div>
                </div>
            </div>
        </div>
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    月计划
                </div>
            </div>
            <div class="add" @click="tiaozhuan( '/plan/month')" >
                <span>添加</span>
            </div>
            <div class="tables">
                <table>
                    <thead>
                        <tr>
                            <td>学业规划</td>
                            <td>目标数量</td>
                            <td>制定日期</td>
                            <td>达成日期</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tr v-for="(item,index) in yueData" :key="index">
                        <td>第{{item.title}}次</td>
                        <td>{{item.targetNum}}</td>
                        <td>{{item.startDate}}</td>
                        <td>{{item.endDate}}</td>
                        <td>
                            <span  v-if="index==0" @click="tiaozhuan('/plan/month?edit='+item.id)">
                                查看
                            </span>
                            <span @click="tiaozhuan('/plan/month?show='+item.id)" v-if="index!=0">
                                查看
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="pages" v-if="yueData.length!=0">
                <span class="pageSpan">共{{yuecount}}项 {{yuenowPage}}/{{yuetotalPage}}页</span>
                <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :page-size="5"
                        :total="yuecount"
                        style="display: inline-block"
                >
                </el-pagination>
            </div>
            <div class="noneContent" v-if="yueData.length==0"></div>
        </div>
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    周计划、日计划
                </div>
            </div>
            <div class="add" @click="tiaozhuan( '/plan/week?weekNumber='+weekNumber+'&month='+(yueData[0]&&yueData[0]['id']),true)" >
                <span>添加</span>
            </div>
            <p>
                <img src="imgs/careerManagement/plan/icon_tishi.png" alt="">
                请针对<span>第{{yueData[0]&&yueData[0]['title']}}次</span>学业规划的<span>月计划</span>,制定<span>周计划</span>
            </p>
            <div class="tables">
                <table>
                    <thead>
                        <tr class="lisTableHead">
                            <td>序号</td>
                            <td>计划事项</td>
                            <td>重要事项</td>
                            <td>已完成事项</td>
                            <td>日计划</td>
                            <td style="width: 15%">操作</td>
                        </tr>
                    </thead>
                </table>
                <ul class="listTable">
                    <li v-for="(item,index) in  zhouData" :key="index">
                        <span>第{{item.week}}周</span>
                        <span>{{item.targetNum}}</span>
                        <span>{{item.targetImportNum}}</span>
                        <span>{{item.targetDone}}</span>
                        <span>
                            <span class="show" @click="showBool(index,true)" v-if="!item.bool">
                                <a style="position: relative;top:2px">﹀</a>展开
                            </span>
                             <span class="show" @click="showBool(index)" v-if="item.bool">
                                 <a style="position: relative;top:-2px">︿</a>收起
                             </span>
                        </span>
                        <span style="width: 15%">
                            <span class="show" @click="tiaozhuan('/plan/week?edit='+item.id)" >查看</span>
                        </span>
                        <ul class="lisTables" v-show="item.bool">
                            <li>
                                <div>日期</div>
                                <div>计划数量</div>
                                <div>完成情况</div>
                                <div>完成率</div>
                                <div>查看详情</div>
                                <div>
                                    <span class="edit" @click="tiaozhuan('/plan/date?weekId='+item.id+'&editId='+(item.data[0]?item.data[0].id:''))">编辑</span>
                                </div>
                            </li>
                            <li v-for="(it,index) in item.data&&item.data[0]&&item.data[0].targetDay||[]" :key="index">
                                <div>星期{{numbers[index]}}</div>
                                <div>{{it.dayPlan}}</div>
                                <div>已完成{{it.dayPlanDone}}/未完成{{it.dayPlanUndone}}</div>
                                <div>{{it.dayPlanRate}}</div>
                                <div>
                                    <span class="show" @click="tiaozhuan('/plan/date?weekId='+item.id+'&showId='+(item.data[0]?item.data[0].id:''))">查看</span>
                                </div>
                            </li>
                            <div class="noneContent" v-if="item.data&&item.data.length==0"></div>
                        </ul>
                    </li>
                </ul>
                <div class="noneContent" v-if="zhouData.length==0"></div>
            </div>
        </div>
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    学生复盘
                </div>
            </div>
            <div class="add" @click="tiaozhuan('/plan/replay')">
                <span>添加</span>
            </div>
            <div class="tables">
                <table>
                    <thead>
                    <tr>
                        <td>学业规划</td>
                        <td>日期</td>
                        <td>任务完成度</td>
                        <td>对自己打分</td>
                        <td>操作</td>
                    </tr>
                    </thead>
                    <tr v-for="(item,index) in fupanData" :key="index">
                        <td>第{{item.num}}次</td>
                        <td>{{item.date}}</td>
                        <td>{{item.taskCompleteScore}}</td>
                        <td>{{item.ownStateScore}}</td>
                        <td>
                            <!--<span class="icon"  @click="tiaozhuan('/plan/replay?edit='+item.id)"></span>-->
                            <span @click="tiaozhuan('/plan/replay?edit='+item.id)">查看</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="pages" v-if="fupanData.length!=0">
                <span class="pageSpan">共{{fupancount}}项 {{fupannowPage}}/{{fupantotalPage}}页</span>
                <el-pagination
                        background
                        @current-change="handleCurrentChange2"
                        layout="prev, pager, next"
                        :page-size="5"
                        :total="fupancount"
                        style="display: inline-block"
                >
                </el-pagination>
            </div>
            <div class="noneContent" v-if="fupanData.length==0"></div>
        </div>
        <div class="tanchuang" v-show="tanchuang">
            <div class="head">新增学业规划</div>
            <img src="/imgs/careerManagement/plan/close.png" alt="" class="close" @click="tanchuang=false">
            <div class="inputs">
                学业规划:
                <el-select v-model="xueyeNumber" placeholder="请选择" >
                    <el-option
                            v-for="item in 20"
                            :key="item"
                            :label="item"
                            :value="item"
                            :disabled="xueyeListNumbers.indexOf(item)>=0?true:false"
                            >
                    </el-option>
                </el-select>
            </div>
            <div class="inputs" style="margin-top:20px">
                日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期:
                <el-date-picker
                        v-model="xueyeDate"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd"
                >
                </el-date-picker>
                <div class="save" @click="save">保存</div>
            </div>
        </div>
        <div class="tanchuang historyTanchuang" v-show="historyTanchuang">
            <div class="head">学业规划历史记录</div>
            <img src="/imgs/careerManagement/plan/close.png" alt="" class="close" @click="historyTanchuang=false">
            <div class="zhuti">
                <div class="tables">
                    <table>
                        <thead>
                            <tr>
                                <td>学业规划</td>
                                <td>日期</td>
                            </tr>
                        </thead>
                        <tr v-for="(item,index)  in  xueyeListData" :key="index">
                            <td>第{{item.num}}次学业规划</td>
                            <td>{{item.date}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "plans",
        components:{masks},
        data(){
          return{
              yuecount:1,
              yuepageNumber:1,
              bool:false,
              tanchuang:false,
              xueyeNumber: "",
              xueyeDate:"",
              xueyeListData:[],
              xueyeListNumbers:[],
              yueData:[],
              historyTanchuang:false,
              zhoucout:1,
              zhouData:[],
              weekNumber:0,
              riData:[],
              numbers:['','一','二','三','四','五','六','日'],
              fupanData:[],
              fupancount:1,
              yuenowPage:1,
              yuetotalPage:1,
              fupannowPage:1,
              fupantotalPage:1
          }
        },
        methods:{
            handleCurrentChange(val) {
                this.yueList(val)
            },
            handleCurrentChange2(val) {
                this.fupanList(val)
            },
            //添加学业规划
            save(){
                let _this=this
                if(!this.xueyeNumber||!this.xueyeDate){
                    this.$message.error('请将规划信息填写完整');
                    return;
                }
                this.$ajax.post(this.G_uri+this.ports.plans.xueAdd,{
                    num:this.xueyeNumber,
                    date:this.xueyeDate
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.tanchuang=false;
                        _this.xueyeList()
                    }
                })
            },
            //学业规划列表
            xueyeList() {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.xueList, {
                    num: this.xueyeNumber,
                    date: this.xueyeDate
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        _this.xueyeListData=res.data.data;
                        if(_this.xueyeListData.length>0){
                            _this.xueyeListNumbers=[]
                            _this.xueyeListData.forEach(item=>{
                               _this.$set( _this.xueyeListNumbers,_this.xueyeListNumbers.length,item.num)
                            })
                        }
                    }
                })
            },
            //月列表
            yueList(number) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.yueList, {
                    pageNumber:number,
                    pageSize:5
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        _this.yueData=res.data.data.list;
                        _this.yuecount=res.data.data.page.count;
                        _this.yuetotalPage=res.data.data.page.totalPage;
                    }
                })
            },
            //周计划列表
            zhouList(number) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.zhouList, {

                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                            _this.zhouData=res.data.data;
                            if(_this.zhouData.length>0) {
                                _this.zhouData.forEach((item, index) => {
                                    item.bool = false
                                    _this.riList(item.week,index)
                                })
                                _this.weekNumber = res.data.data[res.data.data.length - 1]['week']
                            }
                    }
                })
            },
            //日计划列表
            riList(id,index) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.riList,{
                    week:id
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        if(_this.zhouData.length>0){
                            _this.zhouData[index].data=res.data.data
                        }
                    }
                })
            },
            //复盘列表
            fupanList(number) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.fupanList,{
                    pageNumber:number,
                    pageSize:5
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        _this.fupanData=res.data.data.list;
                        _this.fupancount=res.data.data.page.count;
                        _this.fupantotalPage=res.data.data.page.totalPage
                    }
                })
            },
            //跳转
            tiaozhuan(url,bool){
                if(this.xueyeListNumbers==0){
                    this.$message.error('请先添加一个学业规划');
                    return;
                }
                if(bool){
                    if(this.yueData.length==0){
                        this.$message.error('请先添加一个月计划');
                        return;
                    }
                }
                this.$router.push(url);
            },
            showBool(index,bool){
                let item=this.zhouData[index]
                    item.bool=bool
                this.$set(this.zhouData,index,item)
            }
        },
        created(){
            this.xueyeList()
            this.yueList(1)
            this.zhouList()
            this.fupanList(1);
        }
    }
</script>

<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .plans{
        padding-left: 20px;
        .parts {
            background:#fff;
            padding: 0 16px  20px;
            margin-bottom: 20px;
            position: relative;
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
                color: #666;
                margin-top: 20px;
                span{
                    font-size: 15px;
                    font-weight: bolder;
                    color: #333;
                }
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
                /*li:nth-of-type(1) {*/
                /*background: url("/imgs/careerManagement/careerAnchor/icon_zhengmiannan.png");*/
                /*}*/
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
                margin-bottom: 18px;
                position: absolute;
                right: 24px;
                top: 26px;
            }
            .swot {
                display: flex;
                justify-content: space-between;
                padding-bottom: 20px;
                .swotLeft {
                    width: 690px;
                    margin-left: 40px;
                    table {
                        border: 1px solid #eaeaea;
                        font-size: 16px;
                        text-align: center;
                        border-radius: 3px;
                        thead{
                            background: #F3F4F8;
                            td{
                                font-weight: bolder;
                            }
                        }
                        tr {
                            td {
                                border: 1px solid #eaeaea;
                                line-height: 44px;
                                color:#333;
                                font-size: 15px;
                                .del{
                                    display: block;
                                    float: right;
                                    width: 18px;
                                    height: 18px;
                                    margin-top: 12px;
                                    margin-right: 20px;
                                    background:url('/imgs/careerManagement/careerAnchor/icon_del.png');
                                    cursor:pointer;
                                    &:hover{
                                        background:url('/imgs/careerManagement/careerAnchor/icon_dellan.png');
                                    }
                                }
                                .edit{
                                    color:#3A90F3;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
                .swotRight{
                    width: 186px;
                    border:1px solid #EAEAEA;
                    .swotList{
                        padding: 20px auto;
                        li{
                            line-height: 40px;
                            span{
                                display: inline-block;
                                margin-left: 20px;
                                width: 15px;
                                height: 15px;
                                border-radius: 50%;
                                background:#F2F3F7 ;
                                text-align: center;
                                line-height: 15px;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
            .Occupation {
                width: 100%;
                padding-left: 36px;
                table{
                    border: 1px solid #eaeaea;
                    font-size: 16px;
                    border-radius: 3px;
                    border-collapse:collapse;
                    tr {
                        td {
                            border: 1px solid #eaeaea;
                            line-height: 44px;
                            color:#333;
                            text-indent: 10px;
                            font-size: 13px;
                            span{
                                float: right;
                                color:#CACACA;
                                margin-right: 10px;
                            }
                        }
                    }
                }
                padding-bottom: 30px;
            }
        }
    }
    .tables{
        margin-top: 20px;
        padding:10px;
        table{
            border-collapse: collapse;
            thead{
                tr{
                    background:#F3F4F8;
                }
                td{
                    font-weight: bolder;
                }
            }
            tr{
                position: relative;
                td{
                    line-height:44px;
                    height: 44px;
                    border:1px solid #EAEAEA;
                    text-align: center;
                    span{
                        color:#3C91F4;
                        cursor: pointer;
                    }
                }
            }
        }
        .lisTableHead>td{
            width: 17%;
        }
        .listTable{
            li{
                position: relative;
                overflow: hidden;
                &>span{
                    display: block;
                    float: left;
                    width: 17%;
                    text-align: center;
                    line-height: 45px;
                }
                .show{
                    color:#3C91F4;
                    display: inline-block !important;
                    float: none !important;
                    cursor: pointer;
                    a{
                        color:#3C91F4;
                        display: inline-block !important;
                        float: none !important;
                        cursor: pointer;
                    }
                }
                border-bottom: 1px solid #EAEAEA;
            }
        }

        .lisTables{
            background:#F3F4F8;
            overflow: hidden;
            width: 896px;
            margin: 0 auto;
            li{
                border-bottom: 1px solid #E4E4E4;
                line-height: 38px;
                font-size: 12px;
                color:#666;
                &:first-child{
                    font-weight: bolder;
                    color:#333333;
                }
                &:last-child{
                    border-bottom: none;
                }
                .edit{
                    width: 62px;
                    height: 26px;
                    border-radius: 3px;
                    text-align: center;
                    line-height: 26px;
                    background: #3A90F3;
                    color: #fff;
                    cursor: pointer;
                    display: block;
                    margin: 0 auto;
                    position: relative;
                    top:6px;
                }
                div{
                    float: left;
                    width: 17%;
                    text-align: center;
                    &:last-child{
                        width:15%;
                    }
                }
            }
        }
        .icon{
            button,span{
                padding: 0 !important;
                cursor: pointer;
                display: inline-block;
                width: 34px;
                height: 20px;
                border:1px solid #EDEDED;
                border-radius: 5px;
                margin-right: 10px;
                position: relative;
                top:6px;
                background-repeat: no-repeat;
                background-position: center center;
                &:first-child{
                    background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
                }
                &:last-child{
                    background-image:url("/imgs/schoolWork/icon_bianjihui.png") ;
                }
                &:hover{
                    &:first-child{
                        background-image:url("/imgs/schoolWork/icon_lajitongbai.png") ;
                        background-color: #3087E6;
                    }
                    &:last-child{
                        background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                        background-color: #FB4945;
                    }
                }
            }
        }
        .pages{
            margin: 20px;
            padding: 20px 0;
            text-align: center;
        }
    }
    .pages{
        text-align: center;
    }
    .tops{
        position: relative;
        .tops1{
            height: 26px;
        }
        padding: 25px 20px;
        img{
            margin-right:15px;
        }
        .topspan1{
            font-size:16px;
            color:#333;
            font-weight: bolder;
            cursor: pointer;
        }
        .topspan2{
            border-radius: 5px;
            width: 124px;
            float: right;
            // padding: 0 10px;
            line-height: 26px;
            text-align: center;
            background:#3C91F4;
            color:#fff;
            margin-bottom:10px ;
            cursor: pointer;
        }
        .topspan3 {
            .topspan2;
            width: 144px;

        }
        .topsRight{
            width: 144px;
            position: absolute;
            right: 0;
            top:10px;
        }
    }
    .icon{
        display: inline-block !important;
        float: none !important;
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
    .tanchuang{
        position: fixed;
        width: 410px;
        height:280px;
        background: #fff;
        margin-left:-205px;
        margin-top: -140px;
        left: 50%;
        top:50%;
        z-index: 999;
        border-radius: 3px;
        .head{
            width: 100%;
            height: 54px;
            background: url('/imgs/careerManagement/plan/bg_top.png');
            text-align: center;
            font-size: 20px;
            font-weight: bolder;
            color:#fff;
            line-height: 54px;
        }
        .close{
            position: absolute;
            right: 10px;
            top: 20px;
            cursor: pointer;
        }
        .inputs{
            text-align: center;
            margin-top: 30px;
        }
    }
    .historyTanchuang{
        width: 400px;
        height: 420px;
        margin-left: -200px;
        margin-top: -210px;
        .zhuti{
            overflow-y: auto;
            padding: 10px 20px;
            max-height: 360px;
            .tables{
                padding: 0;
                margin-top: 10px;
                td{
                    width: 50%;
                }
            }
        }
    }
    .save {
        width: 110px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        color: #FEFFFF;
        background: #3B91F4;
        margin: 30px auto 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
    .noneContent{
        margin: 0 auto;
        padding: 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
    .pageSpan{
        display: inline-block;
        font-weight: bolder;
        font-size: 16px;
        position: relative;
        top:4px;
        color:#666;
        letter-spacing: 1px;
    }
</style>
<style>
    .plans .el-select{
        margin-left: 10px;
        width: 140px;
    }
    .plans  .el-select input{
        border:1px solid #CDCDCD;
        border-radius: 5px;
        width: 140px;
    }
    .plans   input{
        border:1px solid #CDCDCD;
        border-radius: 5px;
        width: 140px;
    }
    .plans .el-date-editor{
        width: 140px;
    }
</style>
