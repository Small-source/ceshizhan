<template>
    <div class="careerAnchor goalsaa">
        <masks v-show="tanchuang||false"></masks>
        <div class="careerAnchorBox ">
            <img src="imgs/careerManagement/wodemubiao.png" alt="" style="margin-bottom: 20px">
            <div class="parts">
                <div class="top" style="padding-bottom:20px">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        我的目标
                    </div>
                    <span @click="generate">{{mygoalData?'更新':'一键生成'}}</span>
                </div>
                <p>备注：根据大学定位工具、专业定位工具和职业定位工具中的 <router-link to="goal" class="router">定位结果</router-link>，自动生成“院校-专业”组合表</p>
                <ul class="fenshubiao">
                    <li v-for="item  in myGoal" v-if="item.id">
                        <span>{{item.universityName}}</span>
                        <span>{{item.subjectName}}专业</span>
                        <span v-if="item.score">{{item.score}}分</span>
                        <img src="imgs/careerManagement/shanchu.png" alt="" class="del" @click="showmine(item.id,2),item.id=''" >
                    </li>
                </ul>
                <div class="tables">
                    <table>
                        <thead>
                        <tr>
                            <td>目标大学</td>
                            <td>目标专业</td>
                            <td>分数</td>
                            <td>学科评估</td>
                            <td>设为目标</td>
                        </tr>
                        </thead>
                        <tr v-for="(item,index) in mygoalData" :key="index">
                            <td class="span1">
                                <span class="name">{{index}}</span>
                                <span style="color:#666666">2019年分数线</span>
                                <span>{{item[0].scoreLine}}</span>
                            </td>
                            <td class="span2">
                                <span v-for="it in item">{{it.subjectName}}</span>
                            </td>
                            <td class="span2">
                                <span v-for="it in item">{{it.score}}
                                    <span class="icon" @click="showTanchuang(it.id,it.score,it.isGoal)"></span>
                                </span>
                            </td>
                            <td class="span2">
                                <span v-for="it in item">{{it.subjectEvaluation}}</span>
                            </td>
                            <td>
                                <div class="shewei" v-for="it in item">
                                    <span v-if="it.isGoal==2" class="spans1" @click="showmine(it.id,1),it.isGoal=1">设为目标</span>
                                    <span v-if="it.isGoal==1" class="spans1 spans2" @click="showmine(it.id,2),it.isGoal=2">目标</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="text-align: center;padding: 40px 0" v-if="!mygoalData">抱歉，当前大学和专业没有匹配结果!</div>
            </div>
        </div>
        <div class="addTests tanchuang" v-show="tanchuang">
            <div class="head">编辑</div>
            <img src="/imgs/careerManagement/plan/close.png" alt="" class="close" @click="tanchuang=false">
            <div style="padding:30px" class="aads">
                <p>请输入分数:</p>
                <el-input v-model="fenshu"></el-input>
                <div class="save" @click="showmine(editId,isGoal,fenshu)">保存</div>
            </div>

        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "goal",
        components:{masks},
        data(){
            return {
                // 我的目标分页器
                pageNumber:1,//当前页码
                pageSize:10,//每页大小
                total:0,//总条数
                mygoalData:{},
                myGoal:[],
                tanchuang:false,
                fenshu:'',
                editId:'',
                isGoal:''
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

            //获取职业目标
            zhiyeMubiaolist(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiZhiye.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data.list;
                        _this.zhiyeOccupationReult=[]
                        for(let i=0;i<data.length;i+=3){
                            let arr=[];
                            data[i]&&arr.push(data[i])
                            data[i+1]&&arr.push(data[i+1])
                            data[i+2]&&arr.push(data[i+2])
                            _this.zhiyeOccupationReult.push(arr)
                            _this.zhiyemubiaoLists=data;
                        }
                    }
                })
            },
            //删除已存目标
            zhiyedelSaveMubiao(id,index){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiZhiye.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.zhiyemubiaoLists.splice(index,1)
                    }
                })
            },
            //删除我的目标
            delmine(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.myGoal.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.mineList()
                    }
                })
            },
            //设为目标和修改分数
            showmine(id,isGoal,score){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.goal.set,{
                    id:id,
                    isGoal:isGoal,
                    score:score
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.myGoalList()
                        _this.tanchuang=false;
                    }
                })
            },
            //我的目标清空
            mineclear(){
                this.universityName='', //目标院校
                    this.subjectName='', //目标专业
                    this.scoreLine='', //三年分数线
                    this.furtherWay='', //升序途径
                    this.analyze='' ,//分析原因
                    this.mineGoalId='' //我的目标ID
            },
            //删除确认
            delConfirm(id){
                this.$confirm('内容删除后将无法恢复,是否删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delmine(id)
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
            generate(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.goal.shengcheng,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                        _this.myGoalList()
                    }else{
                        _this.$message.error(res.data.msg);
                    }
                })
            },
            myGoalList(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.goal.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.mygoalData=res.data.data.all;
                        _this.myGoal=res.data.data.goal;
                    }
                })
            },
            //修改我的目标分数
            showTanchuang(id,score,isGoal){
                this.editId=id;
                this.fenshu=score;
                this.isGoal=isGoal;
                this.tanchuang=true;
            }
        },
        created(){
            this.myGoalList()
        },
        mounted(){

        },

    }
</script>

<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .noneContent{
        margin: 0 auto;
        padding: 30px 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
    .careerAnchor{
        padding-left: 20px;
        .careerAnchorBox{
            .banner{
                display: block;
                margin-bottom: 20px;
            }
            .parts {
                background: #fff;
                padding: 0 16px;
                margin-bottom: 20px;
                .fenshubiao{
                    /*display: flex;*/
                    /*justify-content: space-between;*/
                    /*align-content: space-between;*/
                    /*flex-wrap: wrap;*/
                    overflow-y: hidden;
                    li{
                        padding: 0 30px 0 10px;
                        float: left;
                        font-size: 15px;
                        color:#333;
                        margin-top:20px;
                        margin-right: 20px;
                        height: 42px;
                        line-height: 42px;
                        border:1px solid #EAEAEA;
                        position: relative;
                        span{
                            margin-right: 15px;
                        }
                        .del{
                            position: absolute;
                            right: 10px;
                            top:11px;
                            cursor: pointer;
                        }
                    }
                }
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
                        padding: 0 10px;
                        height: 26px;
                        border-radius: 3px;
                        text-align: center;
                        line-height: 26px;
                        background: #3A90F3;
                        position: relative;
                        top: -24px;
                        color: #fff;
                        cursor: pointer;
                    }
                }
                & > p {
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
                    li:nth-of-type(1) {
                        background: url("/imgs/careerManagement/careerAnchor/icon_zhengmian.png");
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
                    margin-bottom: 18px;
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
        .Cards {
            width: 652px;
            height: 622px;
            position: fixed;
            left: 50%;
            top:50%;
            z-index: 20;
            margin-left: -326px;
            margin-top: -340px;
            background: url('/imgs/careerManagement/careerAnchor/bg_bianjimingpian.png');
            .addContent{
                padding: 80px 50px 20px;
                p{
                    line-height: 40px;
                    color:#333333;
                    font-size: 15px;
                    font-weight: bolder;
                    position: relative;
                    margin-top: 10px;
                    span{
                        font-size: 12px;
                        color:#666;
                        font-weight: normal;
                    }
                    i{
                        display: block;
                        position: absolute;
                        left: -12px;
                        top: 3px;
                        color:#F40000;
                    }
                }
                input{
                    width: 100%;
                    height: 38px;
                    border:1px solid #DEDEDE;
                    border-radius: 3px;
                    text-indent: 10px;
                }
                textarea{
                    width: 100%;
                    padding:10px;
                    height: 112px;
                }
            }
            .close{
                width: 17px;
                height: 17px;
                position: absolute;
                top:21px;
                right: 22px;
                cursor: pointer;
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
        .router{
            color:#3C91F4;
            text-decoration: underline;
        }
        .zhiyedingwei{
            width: 652px;
            height: 460px;
            margin-left: -326px;
            margin-top: -230px;

            padding: 95px 45px 0;
            .mubiaoBox{
                height: 260px;
                overflow: auto;
                .mubiaolist{
                    overflow: hidden;
                    li{
                        width: 50%;
                        position: relative;
                        margin-bottom: 20px;
                        float: left;
                        .listDiv{
                            width: 250px;
                            height: 38px;
                            line-height: 38px;
                            text-indent: 10px;
                            border:1px solid #DEDEDE;
                            border-radius: 5px;
                            position: relative;
                            input{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                text-indent: 40px;
                                background: none;
                            }
                            img{
                                position: relative;
                                cursor: pointer;
                                z-index: 5;
                                top:-2px;
                            }
                        }
                        &>img{
                            position: absolute;
                            right: 40px;
                            top: 10px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .zhiyedingwei1{
            background:url('/imgs/careerManagement/careerAnchor/bg_wodemubiao.png');
        }
        .zhiyedingwei2{
            background:url('/imgs/careerManagement/careerAnchor/bg_yuanxiaodingwei.png');
        }
        .zhiyedingwei3{
            background:url('/imgs/careerManagement/careerAnchor/bg_zhuanyedingwei.png');
        }
    }
    .electiveBox{
        background: #fff;
        height: 280px;
        border-radius: 5px;
        display: flex;
        li{
            position: relative;
            width: 455px;
            height: 230px;
            border-radius: 5px;
            border:1px solid #EBEBEB;
            &:nth-of-type(3){
                height: 198px;
            }
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
                    a{
                        &:hover{
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
    .icon {
        display: inline-block;
        width: 34px;
        height: 20px;
        border-radius: 3px;
        cursor: pointer;
        position: relative;
        top: 5px;
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
    .tanchuang{
        position: absolute;
        width: 300px;
        height:300px;
        background: #fff;
        left: 50%;
        top:50%;
        z-index: 999;
    }
</style>
<style>
    .goalsaa input{
        border:1px solid #DEDEDE !important;
        width: 196px;
        margin: 28px auto 10px;
    }
</style>
<style scoped lang="less">
    .addTests{
        width: 400px;
        height: 280px;
        margin-left: -200px;
        margin-top: -140px;
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
        .aads>p{
            font-size: 18px;
        }
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
    .close{
        width: 17px;
        height: 17px;
        position: absolute;
        top:21px;
        right: 22px;
        cursor: pointer;
    }
    .tables{
        padding:30px 10px;
        table{
            border-collapse: collapse;
            thead{
                tr{
                    background:#F3F4F8;
                    td{
                        font-size: 16px;
                        font-weight: bolder;
                        line-height: 43px;
                        height: 43px;
                    }
                }
            }
            tr{
                td{
                    box-sizing: border-box;
                    overflow: hidden;
                    padding: 0;
                    border:1px solid #EAEAEA;
                    text-align: center;
                    .shewei{
                        height: 44px;
                        border-bottom: 1px solid #EAEAEA;
                        .spans1{
                            display: block;
                            width: 75px;
                            height: 26px;
                            line-height: 26px;
                            text-align: center;
                            border:1px solid #3C91F4;
                            color:#3C91F4;
                            border-radius: 5px;
                            margin: 0 auto;
                            position: relative;
                            top:8px;
                            cursor: pointer;
                        }
                        .spans2{
                            background: #3C91F4;
                            color:#fff;
                            cursor: pointer;
                        }
                        &:last-child{
                            border-bottom: none;
                        }
                    }
                }
                .span1>span{
                    display: block;
                    text-align: left;
                    padding-left: 20px;
                    height: 30px;
                    line-height: 30px;
                }
                .span2>span{
                    display: block;
                    height: 44px;
                    line-height: 44px;
                    border-bottom: 1px solid #EAEAEA;
                    &:last-child{
                        border-bottom: none;
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
            text-align: center;
        }
    }
</style>
