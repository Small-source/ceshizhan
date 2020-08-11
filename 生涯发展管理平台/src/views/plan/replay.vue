<template>
    <div class="month">
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    复盘结果
                </div>
                <div class="add" v-if="!showBool" @click="add">
                    保存
                </div>
            </div>
            <ul class="list" style="margin-top:30px">
                <li style="margin-right: 50px">
                    学业规划:
                    <el-select v-model="xueyeNumber" @change="changeKey" placeholder="请选择" :disabled="showBool">
                        <el-option
                                v-for="item in xueyeListNumbers"
                                :key="item.num"
                                :label="'第'+item.num+'次'"
                                :value="'第'+item.num+'次'"
                                :disabled="showBool||fupanNumber.indexOf(item.num)>=0?true:false"
                        >
                        </el-option>
                    </el-select>
                </li>
                <li>
                    日期:
                    <el-date-picker
                            v-model="date"
                             type="date"
                            :disabled="true">
                    </el-date-picker>
                </li>
            </ul>
            <ul class="list" style="margin-top:30px;border:none">
                <li style="margin-right: 50px">
                    对任务完成满意度打分:
                    <el-select v-model="taskCompleteScore"  :disabled="showBool">
                        <el-option
                                v-for="item in 10"
                                :key="item"
                                :label="item"
                                :value="item"
                        >
                        </el-option>
                    </el-select>
                </li>
                <li>
                    对自己的状态打分:
                    <el-select v-model="ownStateScore"  :disabled="showBool">
                        <el-option
                                v-for="item in 10"
                                :key="item"
                                :label="item"
                                :value="item"
                        >
                        </el-option>
                    </el-select>
                </li>
            </ul>
            <div class="monthContent">
                <p class="ps2">
                    大事件:
                </p>
                <textarea name=""  placeholder="最多输入500字" v-model="bigEvent"  :disabled="showBool"  maxlength="500"></textarea>
                <p class="ps2">
                    收获:
                </p>
                <textarea name=""  placeholder="最多输入500字" v-model="reward"  :disabled="showBool"  maxlength="500"></textarea>
                <p class="ps2">
                    可以保持的优点:
                </p>
                <textarea name=""  placeholder="最多输入500字" v-model="keepAdvantage"  :disabled="showBool"  maxlength="500"></textarea>
                <p class="ps2">
                    以后改进的方向:
                </p>
                <textarea name=""  placeholder="最多输入500字" v-model="futureDirections"  :disabled="showBool"  maxlength="500"></textarea>
            </div>
            <div class="save" v-if="!showBool" @click="add">
                保存
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "replay",
        data(){
            return {
                xueyeListNumbers:[],
                showBool:false,
                yueNumber:[],
                xueyeNumber:'',
                dates:[],
                date:'',
                datesKey:0,
                taskCompleteScore:1,//对任务完成程度打分
                ownStateScore:1,//对自己的状态打分
                bigEvent:'',//大事件
                reward:'',//收货
                keepAdvantage:'',//可以保持的优点
                futureDirections:'',//以后改进的方向
                academicPlanId:'',
                editId:'',
                fupanNumber:[]
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
                                _this.$set( _this.xueyeListNumbers,_this.xueyeListNumbers.length,{num:item.num,date:item.date,id:item.id})
                            })
                        }
                        _this.xueyeListNumbers=_this.xueyeListNumbers.sort(function (x,y) {
                            if (x.num < y.num) {
                                return -1;
                            } else if (x.num  > x.num ) {
                                return 1;
                            } else {
                                return 0;
                            }
                        })
                    }
                })
            },
            changeKey(){
                this.xueyeListNumbers.forEach(item=>{
                   if(this.xueyeNumber.indexOf(item.num)>0) {
                        this.date=item.date
                       this.academicPlanId=item.id
                   }
                })
            },
            add(){
                if(!this.academicPlanId){
                    this.$message.error('请将计划信息填写完整');
                    return
                }
                let _this=this
                this.$ajax.post(this.G_uri + this.ports.plans.fupanAdd, {
                    id:this.editId,
                    academicPlanId:this.academicPlanId,
                    taskCompleteScore:this.taskCompleteScore,
                    ownStateScore:this.ownStateScore,
                    reward:this.reward,
                    keepAdvantage:this.keepAdvantage,
                    futureDirections:this.futureDirections,
                    bigEvent:this.bigEvent,
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
            //月列表
            fupanList(number) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.fupanList, {
                    pageNumber:number,
                    pageSize:500
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        if(res.data.data.list.length>0){
                            _this.fupanNumber=[]
                            res.data.data.list.forEach(item=>{
                                _this.$set(_this.fupanNumber,_this.fupanNumber.length,Number(item.num))
                            })
                        }
                    }
                })
            },
            //复盘详情
            fupanDetail(id) {
                let _this = this
                this.$ajax.post(this.G_uri + this.ports.plans.fupanDetail, {
                    id:id
                }, {
                    headers: {
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res) => {
                    if (res.data.code == 2000) {
                        let data=res.data.data;
                        this.taskCompleteScore=data.taskCompleteScore;
                        this.ownStateScore=data.ownStateScore;
                        this.reward=data.reward;
                        this.keepAdvantage=data.keepAdvantage;
                        this.futureDirections=data.futureDirections;
                        this.xueyeNumber='第'+data.num+'次'
                        this.bigEvent=data.bigEvent
                        this.date=data.date;
                    }
                })
            },
        },
        created(){
            this.xueyeList();
            this.fupanList(1);
            if(this.$route.query.show){
                this.fupanDetail(this.$route.query.show)
                this.showBool=true
            }
            if(this.$route.query.edit){
                this.fupanDetail(this.$route.query.edit)
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
                    color:#8A8A8A;
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
        width: 140px;
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
