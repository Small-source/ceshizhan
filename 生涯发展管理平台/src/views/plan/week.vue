<template>
    <div class="month">
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    周计划
                </div>
                <div class="add" @click="addPlane" style="margin-top: 4px">
                    保存
                </div>
            </div>
            <div class="tops">
                <div class="tops1">
                    <img src="imgs/careerManagement/plan/icon_xueyeguihua.png" alt="">
                    <span class="topspan1">
                        第<a>{{xueyeId}}</a>次学业规划<span>月计划</span>中第<a>{{week}}</a> <span>周计划</span>
                    </span>
                </div>
                <div class="tops1" style="margin-top: 20px">
                    <img src="imgs/careerManagement/plan/icon_riqi.png" alt="">
                    <span class="topspan1">
                        周计划制定时间:
                        <el-select v-model="xueyeNumber" placeholder="请选择" :disabled="showBool">
                            <el-option
                                    v-for="item in xueyeListNumbers"
                                    :key="item"
                                    :label="'第'+item+'次'"
                                    :value="'第'+item+'次'"
                                    :disabled="showBool">
                            </el-option>
                        </el-select>
                        学业规划
                    </span>
                </div>
            </div>
            <div class="line"></div>
            <p>月计划</p>
            <ul class="yuelist">
                <li v-for="(item,index) in yuelist1">
                    <span style="color:#3187E6;font-weight: bolder">[ 重要紧急 ]</span>
                    {{item.title}}
                    <div style="float: right;width: 200px">截止时间:{{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}</div>
                </li>
                <li v-for="(item,index) in yuelist2">
                    <span style="color:#3187E6;font-weight: bolder">[ 重要不紧急 ]</span>
                    {{item.title}}
                    <div style="float: right;width: 200px">截止时间:{{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}</div>
                </li>
                <li v-for="(item,index) in yuelist3">
                    <span style="color:#3187E6;font-weight: bolder">[ 不重要紧急 ]</span>
                    {{item.title}}
                    <div style="float: right;width: 200px">截止时间:{{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}</div>
                </li>
                <li v-for="(item,index) in yuelist4">
                    <span style="color:#3187E6;font-weight: bolder">[ 不重要不紧急 ]</span>
                    {{item.title}}
                    <div style="float: right;width: 200px">截止时间:{{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}</div>
                </li>
            </ul>
            <p style="margin-top: 10px">第{{week}}周计划</p>
            <ul class="list">
                <li>
                    <el-select v-model="zhongyaodu" placeholder="请选择" style="margin-left: 0;margin-right: 14px" :disabled="showBool">
                        <el-option
                                v-for="item in zhongyaoduList"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value"
                                :disabled="showBool"
                        >
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <el-input v-model="zhongyaoduContent" placeholder="最长不超过20个字" maxlength="20" :disabled="showBool"></el-input>
                </li>
                <li>
                    截止时间:
                    <el-select v-model="startDate" placeholder="请选择" style="margin-left: 0;"
                               @change="changeKey" :disabled="showBool">
                        <el-option
                                v-for="(item,index) in dates"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value"
                                :disabled="showBool"
                        >
                        </el-option>
                    </el-select>
                    至
                    <el-select v-model="endDate" placeholder="请选择" style="margin-left: 0;margin-right: 14px"  :disabled="showBool">
                        <el-option
                                v-for="(item,index) in dates"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value"
                                :disabled="datesKey>index"
                        >
                        </el-option>
                    </el-select>
                </li>
                <li class="listAdd" @click="add">
                    新增
                </li>
            </ul>
            <div class="monthContent">
                <p>本周计划事项:</p>
                <div class="zhongyaoTop">
                    重要 紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list1">
                        <div class="img" v-if="item.isDone==2" @click="item.isDone=1">
                        </div>
                        <div class="img2" v-if="item.isDone==1" @click="item.isDone=2">
                        </div>
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" @click="list1.splice(index,1)" v-if="!showBool"></span>
                    </li>
                </ul>
                <div class="noneContent" v-if="list1.length==0">

                </div>
                <div class="zhongyaoTop">
                    重要 不紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list2">
                        <div class="img" v-if="item.isDone==2" @click="item.isDone=1">
                        </div>
                        <div class="img2" v-if="item.isDone==1" @click="item.isDone=2">
                        </div>
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" @click="list2.splice(index,1)" v-if="!showBool"></span>
                    </li>
                </ul>
                <div class="noneContent" v-if="list2.length==0">

                </div>
                <div class="zhongyaoTop">
                    不重要 紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list3">
                        <div class="img" v-if="item.isDone==2" @click="item.isDone=1">
                        </div>
                        <div class="img2" v-if="item.isDone==1" @click="item.isDone=2">
                        </div>
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" @click="list3.splice(index,1)" v-if="!showBool"></span>
                    </li>
                </ul>
                <div class="noneContent" v-if="list3.length==0">

                </div>
                <div class="zhongyaoTop">
                    不重要 不紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list4">
                        <div class="img" v-if="item.isDone==2" @click="item.isDone=1">
                        </div>
                        <div class="img2" v-if="item.isDone==1" @click="item.isDone=2">
                        </div>
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" v-if="!showBool"></span>
                    </li>
                </ul>
                <div class="noneContent" @click="list4.splice(index,1)" v-if="list4.length==0">
                </div>
                <div class="save" @click="addPlane" v-if="!showBool">
                    保存
                </div>
                <ul class="xuelist">
                    <img src="imgs/careerManagement/plan/icon_tishi.png" alt="">
                    <li>1、先列出本周事项，然后在四象限内填入事项序号，最后对事项进行优先级排序。</li>
                    <li>2、计划完成时间应具体到天，即周一、周日等。</li>
                    <li>3、计划的制定要符合 smart 原则，即具体、可度量、可实现、相关性、有时限。</li>
                    <li>4、周计划的制定是为了帮助我们更好的完成当月的目标，便于对过程的监控和调整。</li>
                    <li>5、完成情况一栏，完成打“√”。</li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "month",
        data(){
            return {
                xueyeId:'',
                xueyeNumber:'',
                xueyeListNumbers:[],
                showBool:false,
                list1:[],
                list2:[],
                list3:[],
                list4:[],
                zhongyaodu:'重要 紧急',
                zhongyaoduList:[
                    {value:'重要 紧急'},
                    {value:'重要 不紧急'},
                    {value:'不重要 紧急'},
                    {value:'不重要 不紧急'},
                ],
                zhongyaoduContent:'',
                zhongyaoduDate:'',
                dates:[
                    {value:'星期一'},
                    {value:'星期二'},
                    {value:'星期三'},
                    {value:'星期四'},
                    {value:'星期五'},
                    {value:'星期六'},
                    {value:'星期日'}
                ],
                startDate:"",
                endDate:"",
                datesKey:0,
                yuelist1:[],
                yuelist2:[],
                yuelist3:[],
                yuelist4:[],
                week:0,
                editId:''
            }
        },
        methods:{
            //学业规划列表
            xueyeList() {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.xueList, {

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
                        _this.xueyeListNumbers=_this.xueyeListNumbers.sort(function (x,y) {
                            if (x < y) {
                                return -1;
                            } else if (x > y) {
                                return 1;
                            } else {
                                return 0;
                            }
                        })
                    }
                })
            },
            // 查看月计划详情
            showPlane(id){
                let _this=this
                this.$ajax.post(this.G_uri + this.ports.plans.yueDetail, {
                    id:id
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        let data=res.data.data
                        this.measure=data.measure;
                        this.measureTrue=data.measureTrue;
                        this.promise=data.promise;
                        this.witness=data.witness;
                        this.xueyeId=data.title;
                        this.yuelist1=data.target[1];
                        this.yuelist2=data.target[2];
                        this.yuelist3=data.target[3];
                        this.yuelist4=data.target[4];
                    }
                })
            },
            changeKey(){
                this.endDate=this.startDate;
                switch (this.startDate) {
                    case '星期一':
                        this.datesKey=0
                        break;
                    case '星期二':
                        this.datesKey=1
                        break;
                    case '星期三':
                        this.datesKey=2
                        break;
                    case '星期四':
                        this.datesKey=3
                        break;
                    case '星期五':
                        this.datesKey=4
                        break;
                    case '星期六':
                        this.datesKey=5
                        break;
                    case '星期日':
                        this.datesKey=6
                        break;
                }
            },
            add(){
                if(!this.zhongyaoduContent||!this.startDate){
                    this.$message.error('请将计划信息填写完整');
                    return
                }
                let obj={}
                obj.title=this.zhongyaoduContent
                obj.startDate=this.startDate
                obj.endDate=this.endDate
                obj.isDone=2
                if(this.zhongyaodu=='重要 紧急'){
                    obj.target=1
                    this.$set(this.list1,this.list1.length,obj)
                }
                if(this.zhongyaodu=='重要 不紧急'){
                    obj.target=2
                    this.$set(this.list2,this.list2.length,obj)
                }
                if(this.zhongyaodu=='不重要 紧急'){
                    obj.target=3
                    this.$set(this.list3,this.list3.length,obj)
                }
                if(this.zhongyaodu=='不重要 不紧急'){
                    obj.target=4
                    this.$set(this.list4,this.list4.length,obj)
                }
                this.zhongyaoduContent='';
                this.startDate='';
                this.endDate='';
            },
            // 添加计划
            addPlane(){
                if(this.editId){
                    this.editPlane();
                    return;
                }
                let _this = this;
                let target={1:[],2:[],3:[],4:[]}
                let arr=[...this.list1,...this.list2,...this.list3,...this.list4];
                //计算目标数量
                let number=[...this.list1,...this.list2,...this.list3,...this.list4].length
                //计算重要数量
                let zhongyaoNumber=[...this.list1,...this.list2].length
                //计算紧急数量
                let jinjiNumber=[...this.list1,...this.list3].length
                //已完成数量
                let Done=0
                arr.forEach(item=>{
                    if(item.target==1){
                        target[1].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.target==2){
                        target[2].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.target==3){
                        target[3].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.target==4){
                        target[4].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.isDone==1){
                        Done++
                    }
                })
                if(!this.xueyeNumber){
                    this.$message.error('请将计划信息填写完整');
                    return
                }
                this.$ajax.post(this.G_uri + this.ports.plans.zhouAdd, {
                    actionPlanMonthId:this.$route.query.month,
                    academicPlan:this.xueyeNumber.match(/\d+/g)[0],
                    target:target,
                    week:this.week,
                    targetNum:number,
                    targetImportNum:zhongyaoNumber,
                    urgentNum:jinjiNumber,
                    targetDone:Done
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        _this.$router.push('/plan/main')
                    }
                })
            },
            // 添加计划
            editPlane(){
                let _this = this;
                let target={1:[],2:[],3:[],4:[]}
                let arr=[...this.list1,...this.list2,...this.list3,...this.list4];
                //计算目标数量
                let number=[...this.list1,...this.list2,...this.list3,...this.list4].length
                //计算重要数量
                let zhongyaoNumber=[...this.list1,...this.list2].length
                //计算紧急数量
                let jinjiNumber=[...this.list1,...this.list3].length
                //已完成数量
                let Done=0
                arr.forEach(item=>{
                    if(item.target==1){
                        target[1].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.target==2){
                        target[2].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.target==3){
                        target[3].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.target==4){
                        target[4].push({title:item.title,startDate:item.startDate,endDate:item.endDate,isDone:item.isDone})
                    }
                    if(item.isDone==1){
                        Done++
                    }
                })
                if(!this.xueyeNumber){
                    this.$message.error('请将计划信息填写完整');
                    return
                }
                this.$ajax.post(this.G_uri + this.ports.plans.zhouEdit, {
                    id:this.editId,
                    academicPlan:this.xueyeNumber.match(/\d+/g)[0],
                    target:target,
                    week:this.week,
                    targetNum:number,
                    targetImportNum:zhongyaoNumber,
                    urgentNum:jinjiNumber,
                    targetDone:Done
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        _this.$router.push('/plan/main');
                    }else{
                        _this.$message.error(res.data.msg);
                    }
                })
            },
            // 查看周计划详情
            showPlaneweek(id){
                let _this=this
                this.$ajax.post(this.G_uri + this.ports.plans.zhouDetail, {
                    id:id
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        let data=res.data.data
                        this.xueyeNumber="第"+data.academicPlan+"次"
                        this.showPlane(data.actionPlanMonthId)
                        this.week=data.week
                        this.list1=data.target[1];
                        this.list2=data.target[2];
                        this.list3=data.target[3];
                        this.list4=data.target[4];
                        this.list1.forEach(item=>{
                            item.target=1
                        })
                        this.list2.forEach(item=>{
                            item.target=2
                        })
                        this.list3.forEach(item=>{
                            item.target=3
                        })
                        this.list4.forEach(item=>{
                            item.target=4
                        })
                    }
                })
            }
        },
        created(){
            this.xueyeList();
            if(this.$route.query.weekNumber){
                this.week=parseInt(this.$route.query.weekNumber)+1
                this.showPlane(this.$route.query.month)
            }
            if(this.$route.query.show){
                this.showPlaneweek(this.$route.query.show)
                this.showBool=true;
            }
            if(this.$route.query.edit){
                this.showPlaneweek(this.$route.query.edit)
                this.editId=this.$route.query.edit
            }
        }
    }
</script>
<style scoped lang="less">
    .month{
        *{
            letter-spacing: 1.5px;
        }
        padding-left: 20px;
        .parts {
            background: #fff;
            padding: 0 16px;
            padding-bottom: 10px;
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
                line-height: 60px;
                color: #333;
                font-size: 16px;
                font-weight: bolder;
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
            .list{
                overflow: hidden;
                border-bottom:1px solid #E3E4E4;
                padding-bottom: 30px;
                margin-top: 12px;
            }
            .list>li{
                float: left;
            }
            .listAdd{
                width: 60px;
                height: 38px;
                border-radius: 5px;
                background: #3C91F4;
                color:#fff;
                text-align: center;
                line-height: 38px;
                cursor: pointer;
            }
        }
        .monthContent{
            p{
                font-size: 16px;
                line-height: 70px;
                font-weight: bolder;
                img{
                    position: relative;
                    top:-3px;
                }
            }
            .ps{
                line-height: 40px;
            }
            .ps2{
                line-height: 40px;
                font-size: 14px;
                font-weight: normal;
            }
            .zhongyaoTop{
                text-align: center;
                line-height: 36px;
                border-radius: 3px;
                background:#DCECFE;
                color:#3187E6;
                font-weight: bolder;
            }
            .listMonth{
                li{
                    line-height: 50px;
                    border-bottom: 1px solid #E4E4E4;
                    color:#000;
                    .img{
                        display: inline-block;
                        width: 34px;
                        height: 34px;
                        margin-right: 10px;
                        cursor:pointer;
                        position: relative;
                        top:10px;
                        background: url("/imgs/careerManagement/plan/icon_weidianjishi.png");
                        &:hover{
                            background: url("/imgs/careerManagement/plan/icon_dianjishi.png");
                        }
                    }
                    .img2{
                        display: inline-block;
                        width: 34px;
                        height: 34px;
                        margin-right: 10px;
                        cursor:pointer;
                        position: relative;
                        top:10px;
                        background: url("/imgs/careerManagement/plan/icon_yiwancheng.png");
                    }
                    span{
                        display: inline-block;
                    }
                    date{

                    }
                }
            }
        }
        .chengnuo{
            overflow: hidden;
            margin-top: 26px;
        }
        .right{
            float: right;
            li{
                margin-left: 20px;
                float: left;
                span{
                    display:inline-block;
                    font-size:18px;
                    border-bottom:1px dashed #343434;
                    height: 30px;
                    font-weight: bolder;
                }
            }
            div{
                display: inline-block;
            }
        }
        .noneContent{
            margin: 0 auto;
            padding: 0;
            width: 126px;
            height:120px;
            background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
        }
        .icon {
            display: inline-block;
            width: 34px;
            height: 20px;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
            float: right;
            top: 16px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("/imgs/schoolWork/icon_bianjihui.png");
            &:hover {
                background-image: url("/imgs/schoolWork/icon_bianjibai.png");
                background-color:  #3087E6;
            }
        }
        .icon2 {
            background-image: url("/imgs/schoolWork/icon_lajitonghui.png");
            &:hover {
                background-image: url("/imgs/schoolWork/icon_lajitongbai.png");
                background-color: #FB4945;
            }
        }
        textarea{
            width: 100%;
            height: 108px;
            border-radius: 10px;
            padding: 10px;
            overflow-y: auto;
            box-sizing: border-box;
            color:#333;
            border-color:#E4E4E4;
        }
        textarea:disabled{
            background:#F5F7FA;
            color:#C0C4CC;
            cursor:not-allowed
        }
        .save {
            width: 110px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            color: #FEFFFF;
            background: #3B91F4;
            margin: 20px auto 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .tops{
            position: relative;
            .tops1{

            }
            padding: 25px 20px;
            img{
                margin-right:5px;
                position: relative;
                top:-2px;
            }
            a{
                color:#3C91F4;
                font-weight: bolder;
                font-size: 16px;
            }
            .topspan1{
                font-size:14px;
                color:#333;
                cursor: pointer;
                span{
                    font-size: 16px;
                    font-weight: bolder;
                }
            }
            .topspan2{
                border-radius: 5px;
                min-width: 104px;
                line-height: 26px;
                text-align: center;
                background:#3C91F4;
                color:#fff;
                margin-bottom:10px ;
                cursor: pointer;
            }
            .topsRight{
                position: absolute;
                right: 0;
                top:10px;
            }
        }
        .line{
            border-bottom: 1px solid  #E3E4E4;
        }
        .yuelist>li{
            line-height: 50px;
            border-bottom: 1px dashed #E4E4E4;
        }
        .xuelist{
            position: relative;
            li{
                line-height: 24px;
                color:#8A8A8A;
                padding-left:40px;
            }
            img{
                position: absolute;
                left: 14px;
                top: 0;
            }
        }
    }
</style>
<style>
    .month .el-select{
        margin-left: 10px;
        width: 140px;
    }
    .month  .el-select input{
        border:1px solid #CDCDCD;
        border-radius: 5px;
        width: 140px;
    }
    .month input{
        border:1px solid #CDCDCD;
        border-radius: 5px;
        width: 280px;
        margin-right: 20px;
    }
    .month  .el-date-editor{
        margin-left: 10px;
    }
    .month .el-date-editor--daterange{
        width: 320px;
        margin-right: 10px;
    }
    .month  .right  .el-input{
        width: auto;
    }
    .month  .right  .el-input input{
        width: 100px !important;
    }
</style>
