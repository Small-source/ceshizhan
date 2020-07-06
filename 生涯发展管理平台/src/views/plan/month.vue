<template>
    <div class="month">
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    月计划
                </div>
                <div class="add" @click="addPlane" style="margin-top: 4px">
                    保存
                </div>
            </div>
            <ul class="list">
                <li style="margin-right: 58px">
                    学业规划:
                    <el-select v-model="xueyeNumber" placeholder="请选择" :disabled="showBool" @change="xueyeChange">
                        <el-option
                                v-for="item in xueyeListNumbers"
                                :key="item"
                                :label="'第'+item+'次'"
                                :value="'第'+item+'次'"S
                                :disabled="showBool||yueNumber.indexOf(item)>=0?true:false">
                        </el-option>
                    </el-select>
                </li>
                 <li class="dateRiqi">
                    制定日期:
                    <el-date-picker
                            v-model="monthDate1"
                            type="date"
                            format="yyyy-MM-dd"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            :disabled="true">
                    </el-date-picker>
                 </li>
                <li class="dateRiqi">
                   达成日期:
                    <el-date-picker
                            v-model="monthDate2"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
                            :disabled="showBool"
                            :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                </li>
            </ul>
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
                <p>本月计划事项:</p>
                <div class="zhongyaoTop">
                    重要 紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list1">
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
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" v-if="!showBool" @click="list2.splice(index,1)"></span>
                    </li>
                </ul>
                <div class="noneContent" v-if="list2.length==0" >

                </div>
                <div class="zhongyaoTop">
                    不重要 紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list3">
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" v-if="!showBool" @click="list3.splice(index,1)"></span>
                    </li>
                </ul>
                <div class="noneContent" v-if="list3.length==0">

                </div>
                <div class="zhongyaoTop">
                    不重要 不紧急
                </div>
                <ul class="listMonth">
                    <li v-for="(item,index) in list4">
                        <span style="width:376px;margin-right:200px ">{{item.title}}</span>
                        <span class="date">
                            截止时间: {{item.startDate}}{{item.startDate!=item.endDate? '---'+item.endDate:''}}
                        </span>
                        <span class="icon icon2" v-if="!showBool" @click="list4.splice(index,1)"></span>
                    </li>
                </ul>
                <div class="noneContent" v-if="list4.length==0">
                </div>
                <p class="ps" style="padding-top:30px">达成日期:</p>
                <p class="ps" style="padding-bottom: 20px">
                    <img data-v-4f526cb5="" src="imgs/careerManagement/plan/icon_riqi.png" alt="">
                    {{monthDate2}}
                </p>
                <p class="ps2">
                    如果不能达成目标，我将:
                </p>
                <textarea name=""  placeholder="最多输入500字" v-model="measure"  :disabled="showBool"></textarea>
                <p class="ps2">
                    如果达成目标，我将:
                </p>
                <textarea name=""  placeholder="最多输入500字" v-model="measureTrue"  :disabled="showBool"></textarea>
                <div class="chengnuo">
                    <ul class="right">
                        <li>
                            承诺人:
                            <el-input v-model="promise" :disabled="showBool"></el-input>
                        </li>
                        <li>
                            见证人:
                            <el-input v-model="witness" :disabled="showBool"></el-input>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="save" @click="addPlane" v-if="!showBool">
                保存
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "month",
        data(){
            return {
                xueyeNumber:'',
                options:[
                    {value:'第1次'},
                    {value:'第2次'},
                    {value:'第3次'}
                ],
                monthDate:'',
                monthDate1:'',
                monthDate2:'',
                zhongyaodu:'重要 紧急',
                zhongyaoduList:[
                    {value:'重要 紧急'},
                    {value:'重要 不紧急'},
                    {value:'不重要 紧急'},
                    {value:'不重要 不紧急'},
                ],
                zhongyaoduContent:'',
                zhongyaoduDate:'',
                list1:[],
                list2:[],
                list3:[],
                list4:[],
                measure:"",
                measureTrue:"",
                promise:"",
                witness:"",
                startDate:"",
                endDate:"",
                dates:[
                    {value:'第一周'},
                    {value:'第二周'},
                    {value:'第三周'},
                    {value:'第四周'},
                    {value:'第五周'},
                    {value:'第六周'},
                    {value:'第七周'},
                    {value:'第八周'}
                ],
                datesKey:0,
                xueyeListData:[],
                xueyeListNumbers:[],
                showBool:false,
                yueNumber:[],
                editId:'',
                returnDate:true,
                pickerOptions:{
                    disabledDate(time) {
                        return  false;
                    },
                }

            }
        },
        methods:{
           add(){
                let obj={}
                obj.title=this.zhongyaoduContent
                obj.startDate=this.startDate
                obj.endDate=this.endDate
               if(!this.zhongyaoduContent||!this.startDate){
                   this.$message.error('请将计划信息填写完整');
                   return
               }
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
           changeKey(){
               this.endDate=this.startDate;
               switch (this.startDate) {
                   case '第一周':
                       this.datesKey=0
                       break;
                   case '第二周':
                       this.datesKey=1
                       break;
                   case '第三周':
                       this.datesKey=2
                       break;
                   case '第四周':
                       this.datesKey=3
                       break;
                   case '第五周':
                       this.datesKey=4
                       break;
                   case '第六周':
                       this.datesKey=5
                       break;
                   case '第七周':
                       this.datesKey=6
                       break;
                   case '第八周':
                       this.datesKey=7
                       break;
               }
           },
            xueyeChange(){
                this.xueyeListData.forEach(item=>{
                    if(this.xueyeNumber.indexOf(item.num)>=0){
                        this.monthDate1=item.date
                        this.monthDate2=''
                    }
                })
                let _this=this
                this.pickerOptions={
                    disabledDate(time) {
                        return   time.getTime()<(new Date(_this.monthDate1)).getTime();
                    },
                }
            },
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
            //月列表
            yueList(number) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.yueList, {
                    pageNumber:number,
                    pageSize:500
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        if(res.data.data.list.length>0){
                            _this.yueNumber=[]
                            res.data.data.list.forEach(item=>{
                                _this.$set(_this.yueNumber,_this.yueNumber.length,Number(item.title))
                            })
                        }
                    }
                })
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
                let number=[...this.list1,...this.list2,...this.list3,...this.list4].length
                arr.forEach(item=>{
                    if(item.target==1){
                        target[1].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                    if(item.target==2){
                        target[2].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                    if(item.target==3){
                        target[3].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                    if(item.target==4){
                        target[4].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                })
                if(!this.xueyeNumber||!this.monthDate1||!this.monthDate2){
                    this.$message.error('请将计划信息填写完整');
                    return
                }
                this.$ajax.post(this.G_uri + this.ports.plans.yueAdd, {
                    title:this.xueyeNumber.match(/\d+/g)[0],
                    target:target,
                    startDate:this.monthDate1,
                    endDate:this.monthDate2,
                    measure:this.measure,
                    measureTrue:this.measureTrue,
                    promise:this.promise,
                    witness:this.witness,
                    targetNum:number
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        _this.$router.push('/plan/main')
                    }else{
                        _this.$message.error(res.data.msg);
                        return
                    }
                })
            },
            editPlane(){
                let _this = this;
                let target={1:[],2:[],3:[],4:[]}
                let arr=[...this.list1,...this.list2,...this.list3,...this.list4];
                let number=[...this.list1,...this.list2,...this.list3,...this.list4].length;
                arr.forEach(item=>{
                    if(item.target==1){
                        target[1].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                    if(item.target==2){
                        target[2].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                    if(item.target==3){
                        target[3].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                    if(item.target==4){
                        target[4].push({title:item.title,startDate:item.startDate,endDate:item.endDate})
                    }
                })
                if(!this.xueyeNumber||!this.monthDate1||!this.monthDate2){
                    this.$message.error('请将计划信息填写完整');
                    return
                }
                this.$ajax.post(this.G_uri + this.ports.plans.yueEdit, {
                    id:this.editId,
                    title:this.xueyeNumber.match(/\d+/g)[0],
                    target:target,
                    startDate:this.monthDate1,
                    endDate:this.monthDate2,
                    measure:this.measure,
                    measureTrue:this.measureTrue,
                    promise:this.promise,
                    witness:this.witness,
                    targetNum:number
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
                        this.xueyeNumber="第"+data.title+"次"
                        this.monthDate1=data.startDate
                        this.monthDate2=data.endDate;
                        this.measure=data.measure;
                        this.measureTrue=data.measureTrue;
                        this.promise=data.promise;
                        this.witness=data.witness;
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
                        this.pickerOptions={
                            disabledDate(time) {
                                return   time.getTime()<(new Date(_this.monthDate1)).getTime();
                            }
                        }
                    }
                })
            }
        },
        created(){
            this.xueyeList();
            this.yueList();
            if(this.$route.query.show){
                this.showPlane(this.$route.query.show)
                this.showBool=true;
            }
            if(this.$route.query.edit){
                this.showPlane(this.$route.query.edit)
                this.editId=this.$route.query.edit;
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
                padding-left: 40px;
                line-height: 60px;
                color: #666;
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
                margin-top: 20px;
                padding-bottom: 30px;
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
    .dateRiqi  input{
        width:160px !important;
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
