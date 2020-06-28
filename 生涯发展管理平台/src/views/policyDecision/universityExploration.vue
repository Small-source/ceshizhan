<template>
    <div class="universityExploration">
        <div class="parts" style="padding-bottom: 20px">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    大学探索表
                </div>
            </div>
            <div class="add" @click="clear(),editFlag=false">
                <span>新增</span>
            </div>
            <div class="tables2">
                <table>
                    <tr>
                        <td>目标大学</td>
                        <td>日期</td>
                        <td>操作</td>
                    </tr>
                    <tr v-for="item in listData">
                        <td>
                            {{item.name}}
                        </td>
                        <td>
                            {{item.updatedAt||''}}
                        </td>
                        <td width="150">
                            <span class="showContent" @click="show(item.id)">查看</span>
                            <span  class="icon2 icon" @click="delConfirm(item.id,$event)"></span>
                            <span class="icon" @click="show(item.id,true)"></span>
                        </td>
                    </tr>
                </table>
                <div class="noneContent" v-if="listData.length==0"></div>
            </div>
            <div class="pages" v-if="listData.length>0">
                <span class="pageSpan">共{{count}}项 {{nowPage}}/{{totalPage}}页</span>
                <el-pagination style="display:inline-block"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :page-size="5"
                        :total="count"
                       >
                </el-pagination>
            </div>
        </div>
        <div class="parts" style="padding-bottom: 30px">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    大学探索表
                </div>
            </div>
            <div class="add addabsolute"  v-show="editFlag">
                <span @click="editFlag=false">编辑</span>
            </div>
            <form action="">
                <div class="inputs">
                    <span>大学:</span>
                    <input type="text" id='input' placeholder="搜索大学名称" v-model="university"  @focus="listflag=true"  autocomplete="off"  @input="search" @compositionstart="start" @compositionend="end" @keyup.enter="searchDetail('')"
                           @blur="blur" :disabled="editFlag" style="text-indent: 25px">
                    <ul class="searchList" v-show="listflag">
                        <li v-for="item,index in cdata" :key="index" @click="searchDetail(item.name)">{{item.name}}</li>
                    </ul>
                </div>
                <div class="inputs">
                    <span>类型:</span>
                    <el-input type="text" v-model="type" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>层次:</span>
                    <el-input type="text" v-model="cengci" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>隶属:</span>
                    <el-input type="text" v-model="lishu" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>城市:</span>
                    <el-input type="text" v-model="chengshi" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>排名:</span>
                    <el-input type="text" v-model="paiming" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs" style="width: 100%">
                    <span>分数线:</span>
                    <div class="fenshuxian">
                        <span style="width:50px;min-width: 50px">2019:</span>
                        <el-input type="text"  v-model="lastOne" :disabled="editFlag">
                        </el-input>
                        <span style="width:40px;min-width: 70px">2018:</span>
                        <el-input type="text" v-model="lastTwo" :disabled="editFlag">
                        </el-input>
                        <span style="width:40px;min-width: 70px" >2017:</span>
                        <el-input type="text" :disabled="editFlag" v-model="lastThree">
                        </el-input>
                    </div>
                </div>
                <div class="inputs">
                    <span>硕士点:</span>
                    <el-input type="text" v-model="shuobodian" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>博士点:</span>
                    <el-input type="text" v-model="boshidian" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>优势学科:</span>
                    <el-input type="text" v-model="youshixueke" :disabled="editFlag">
                    </el-input>
                </div>
                <div class="inputs">
                    <span>合并更名:</span>
                    <el-input type="text" v-model="hebinggengming" :disabled="editFlag" >
                    </el-input>
                </div>
                <div class="inputs" style="width: 100%">
                    <span>备注:</span>
                    <textarea v-model="beizhu" style="width: 842px;float: right;border-color:#DEDEDE" :disabled="editFlag"></textarea>
                </div>
            </form>
            <div class="save" @click="save()" v-show="!editFlag">
                保存
            </div>
            <div class="delright" @click="delConfirm()">
                <span class="icon icon2"></span>
                删除该大学探索表
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "universityExploration",
        data(){
            return{
                university:'',
                type:'',
                cengci:'',
                lishu:'',
                chengshi:'',
                paiming:'',
                lastOne:'',
                lastTwo:'',
                lastThree:'',
                shuobodian:'',
                boshidian:'',
                youshixueke:'',
                hebinggengming:'',
                beizhu:'',
                cdata:'',
                listflag:'',
                flag:true,
                count:1,
                listData:[],
                nowId:'',
                editFlag:true,
                oldId:'',
                ids:[],
                nowPage:1,
                totalPage:1
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.nowPage=val
                this.list(val)
            },
            //搜索内容
            search(){
                if(this.flag){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.expore.universityFive, {
                        name:this.university
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.cdata=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            searchDetail(name,aa) {
                $('#input')[0].blur();
                let _this = this;
                this.listflag = false;
                if (name) {
                    this.university = name
                }
            },
            //输入法开始
            start(){
                this.flag=false;
            },
            //输入法结束
            end(){
                this.flag=true;
            },
            blur(){
                setTimeout(function () {
                    this.listflag=false;
                },0)
            },
            //数据列表
            list(number){
                let _this=this
                this.$ajax.post(this.G_uri +this.ports.expore.universityList, {
                    pageNumber: number||1,
                    pageSize:5
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    if(res.data.code==2000) {
                        let data=res.data.data;
                        if(data.page){
                            _this.count=data.page.count
                            _this.totalPage=data.page.totalPage;
                        }
                        if(data.list.length>0){
                            _this.ids=[]
                            _this.listData=data.list
                            data.list.forEach(item=>{
                                _this.ids.push(item.id)
                            })
                            if(_this.oldId){
                                _this.show(_this.oldId)
                            }else{
                                _this.show(data.list[0].id)
                            }
                        }else{
                            _this.listData=[];
                            _this.clear();
                        }
                    }
                })
            },
            //保存和修改
            save(id){
                let _this=this;
                if(!this.university){
                    this.$notify({
                        title: '警告',
                        message: '大学名称必填',
                        type: 'warning'
                    });
                    return;
                }
                this.$ajax.post(this.G_uri +this.ports.expore.universityAddEidt, {
                    universityName:this.university,
                    type:this.type,
                    level:this.cengci,
                    affiliation:this.lishu,
                    city:this.chengshi,
                    rank:this.paiming,
                    last_one_year:this.lastOne,
                    last_two_year:this.lastTwo,
                    last_three_year:this.lastThree,
                    master_degree:this.shuobodian,
                    doctor_degree:this.boshidian,
                    advanced_subjects:this.youshixueke,
                    merge_rename:this.hebinggengming,
                    remark:this.beizhu,
                    id:this.nowId||'',
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    if(res.data.code==2000) {
                        _this.list();
                        _this.$message({
                            message: '保存成功！',
                            type: 'success'
                        })
                        _this.editFlag=true
                    }
                })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            //
            del(id){
                let _this=this
                if((!id)&&(!this.nowId)){
                    this.list()
                    return;
                }
                setTimeout(()=>{
                    let indexs;
                    if(id){
                        indexs=this.ids.indexOf(id)
                    }else{
                        indexs=this.ids.indexOf(this.nowId)
                    }
                    let numbers=this.ids.length-1;
                    if(numbers==indexs){
                        this.oldId=this.ids[indexs-1]
                    }else{
                        this.oldId=this.ids[indexs+1]
                    }
                },0)
                this.$ajax.post(this.G_uri +this.ports.expore.universityDel, {
                    id:id||this.nowId
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    if(res.data.code==2000) {
                        _this.list();
                    }
                })
            },
            show(id,flag){
                let _this=this
                this.editFlag=true
                if(flag){
                    this.editFlag=false
                }
                this.nowId=id
                this.$ajax.post(this.G_uri +this.ports.expore.universityDetail, {
                    id:id
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000) {
                        let data=res.data.data;
                        this.university=data.universityName
                        this.type=data.type
                        this.cengci=data.affiliation
                        this.chengshi=data.city
                        this.paiming=data.rank
                        this.lastOne=data.lastOneYear
                        this.lastTwo=data.lastTwoYear
                        this.lastThree=data.lastThreeYear
                        this.shuobodian=data.masterDegree
                        this.boshidian=data.doctorDegree
                        this.hebinggengming=data.mergeRename
                        this.youshixueke=data.advancedSubjects
                        this.beizhu=data.remark

                    }
                })
            },
            clear(){
                this.university=""
                this.type=""
                this.cengci=""
                this.chengshi=""
                this.lishu=""
                this.paiming=""
                this.lastOne=""
                this.lastTwo=""
                this.lastThree=""
                this.shuobodian=""
                this.boshidian=""
                this.hebinggengming=""
                this.beizhu=""
                this.nowId=""
                this.oldId=""
            },
            //删除确认
            delConfirm(id){
                if(this.university==""&&this.type==""&&this.cengci==""&&this.chengshi==""&&this.lishu==""){
                    if(this.paiming==""&&this.lastOne==""&&this.lastTwo==""&&this.lastThree==""){
                        if(this.shuobodian==""&&this.boshidian==""&&this.hebinggengming==""&&this.beizhu==""){
                            this.del(id)
                            return;
                        }
                    }
                }
                this.$confirm('内容删除后将无法恢复,是否删除？', '提示', {
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.del(id);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            },
        },
        created(){
            this.list()
        }
    }
</script>

<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .universityExploration{
        padding-left: 20px;
        .pages{
            text-align: center;
        }
        .tables2{
            padding:60px 0  20px;
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
        .parts {
            background: #fff;
            padding: 0 16px;
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
                float: right;
            }
        }
        form{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            width: 100%;
            margin-top: 40px;
            .inputs{
                min-width: 284px;
                line-height: 38px;
                width: 50%;
            }
            .noSelected{
                div{
                    display: inline-block !important;
                    width: 192px;
                    height: 38px;
                }
            }
            span{
                display: inline-block;
                min-width: 84px;
                text-align: right;
                margin-right: 12px;
                font-weight: bolder;
                i{
                    color:#F80001;
                    position: relative;
                    top:2px;
                    left:-3px;
                }
            }
            input{
                width: 370px;
                height: 38px;
                border-radius: 3px;
                border:1px solid #DEDEDE;
                display: inline-block;
                text-indent: 10px;
            }
        }
        textarea{
            padding: 10px;
            height: 112px;
            text-indent: 16px;
        }
        .save{
            width: 110px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            font-size: 16px;
            color:#FEFFFF;
            background: #3B91F4;
            margin: 0 auto;
            border-radius: 5px;
            cursor: pointer;
        }
        .searchList{
            position: absolute;
            left: 95px;
            top:39px;
            width: 194px;
            max-height: 230px;
            overflow-y: auto;
            z-index: 9999;
        }
        .searchList>li{
            line-height: 40px;
            text-indent: 16px;
            background: #F5F7F6;
            color:#333333;
            &:hover{
                background:#E1ECF7;
            }
            font-size:12px;
            cursor: pointer;
        }
        .showContent{
            margin-right: 5px;
        }
        input:disabled{
            background: #F5F7FA;
            color:#C0C4CC;
        }
        textarea:disabled{
            background: #F5F7FA ;
            color:#C0C4CC;
        }
        .addabsolute{
            position: absolute;
            right: 20px;
            top:20px;
        }
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
                background-color:  #3087E6  ;
            }
        }
        .icon2{
            background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
            &:hover{
                background-image:url("/imgs/schoolWork/icon_lajitongbai.png");
                background-color:#FB4945;
            }
        }
        .delright{
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
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
<style lang="less">
    #birthday{
        .el-input__inner{
            padding-left: 20px;
        }
    }
    .universityExploration{
        .inputs{
            position: relative;
            input{
                width: 370px;
                height: 38px;
                border-radius: 3px;
                border:1px solid #DEDEDE;
                display: inline-block;
                text-indent: 10px;
            }
            margin-bottom: 30px;
        }
        .el-input{
            padding-left: 0;
            display: inline-block !important;
            width: 192px;
            height: 38px;
        }
        .fenshuxian{
            float: right;
            width: 842px;
            .el-input{
                width: 180px;
            }
            input{
                width: 180px !important;
            }
        }

    }
</style>
