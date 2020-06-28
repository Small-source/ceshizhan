<template>
    <div class="content">
        <ul class="list">
            <li v-for="(item,index) in  cdata" :key="index" @click="Tab(index)"  :class="{active:number==index}">{{index}}</li>
        </ul>
        <ul class="lists">
            <li v-for="(item,index) in  cdata" :key="index" v-show="number==item.disciplines">
                <div v-for="(it,index2) in item.subjectName" :key="index2"  :class="{active2:number2==index2}" @click="number2=index2,result(it)" >{{it}}</div>
            </li>
        </ul>
        <table class="main">
            <thead>
                <tr>
                    <td>序号</td>
                    <td>学校代码</td>
                    <td>学校名称</td>
                    <td>评估结果</td>
                </tr>
            </thead>
            <tr v-for="(item,index) in cdata2">
                <td>{{index+1}}</td>
                <td>{{item.universityCode}}</td>
                <td>{{item.universityName}}</td>
                <td>{{item.selectionResult}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: "vuekesubject",
        data(){
            return{
               cdata:[],
               number:'',
               number2:0,
               cdata2:[]
            }
        },
        mounted(){
            this.subjectClass();
        },
        methods:{
            //获取学科分类
            subjectClass(){
                let _this=this;
                this.$ajax.post(this.G_uri + '/applet/getSubjectEvaluationName', {}, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                        _this.number=Object.keys(res.data.data)[0]
                        _this.cdata=res.data.data;
                        _this.result(res.data.data[Object.keys(res.data.data)[0]].subjectName[0])
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            //评估结果
            result(name){
                let _this=this;
                this.$ajax.post(this.G_uri + '/applet/getEvaluationBySubjectName', {
                    subjectName:name
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    _this.cdata2=res.data.data
                })
                    .catch(function(error) {

                    });
            },
            //Tab切换
            Tab(index){
                this.number=index;
                this.number2=0;
                this.result(this.cdata[index].subjectName[0])
            }
        }

    }
</script>

<style scoped>
    .content{
        background: #fff;
        padding: 30px 20px;
        margin-bottom: 50px;
    }
    .list{
        overflow: hidden;
        margin-bottom:20px;
    }
    .list>li{
        float: left;
        padding: 8px 13px;
        letter-spacing: 1.5px;
        font-size:15px;
        background:#F1F2F5;
        margin-right: 20px;
        border-radius: 5px;
        cursor: pointer;
        color:#333;
    }
    .active{
        color:#fff !important;
        background: #2C8FFC !important;
    }
    .lists>li{
        padding: 15px 15px 0;
        border:1px solid #EDEDEE;
        overflow: hidden;
    }
    .lists>li>div{
        font-size: 15px;
        color:#333;
        margin-right: 30px;
        float: left;
        margin-bottom: 15px;
        cursor: pointer;
    }
    table,th,td {
        border: 1px solid #F2F2F2;
        color: #666;
        text-align: center;
        font-size: 15px;
    }
    td{
        line-height: 42px;
    }
    thead>tr{
        background:#E3E7F1;
    }
    thead>tr>td{
        color:#333;
        font-weight: bolder;
        font-size: 16px;
    }
    table {
        margin-top:40px;
        width: 100%;
        border-collapse:collapse;
    }
    .active2{
        color:#2C8FFC !important;
    }
</style>
