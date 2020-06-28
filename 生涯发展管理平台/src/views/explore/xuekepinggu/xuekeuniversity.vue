<template>
    <div class="content">
        <div class="searchBox">
            <input type="text" id='input' placeholder="搜索大学名称" v-model="subjectName" autocomplete="off"  @focus="listflag=true"  @input="search" @compositionstart="start" @compositionend="end" @keyup.enter="searchDetail('')"
                   @blur="blur">
            <div class="search" @click="searchDetail('')">搜索</div>
            <ul class="searchList" v-show="listflag">
                <li v-for="item,index in cdata" :key="index" @click="searchDetail(item.universityName)">{{item.universityName}}</li>
            </ul>
        </div>
        <table class="main">
            <thead>
            <tr>
                <td>序号</td>
                <td>学科门类</td>
                <td>一级学科名称</td>
                <td>评估结果</td>
            </tr>
            </thead>
            <tr v-for="(item,index) in cdata2" :key="index" >
                <td>{{index+1}}</td>
                <td>{{item.disciplines}}</td>
                <td>{{item.subjectName}}</td>
                <td>{{item.selectionResult}}</td>
            </tr>
        </table>
        <div class="tishi" v-if="cdata2&&cdata2.length==0">学校暂无信息，换一个院校试试?</div>
    </div>
</template>
<script>
    export default {
        name: "xuekeuniversity",
        data(){
            return{
                subjectName:'',
                flag:true,
                cdata:'',
                cdata2:'',
                listflag:false
            }
        },
        methods:{
            //搜索内容
            search(){
                if(this.flag){
                    let _this=this;
                    this.$ajax.post(this.G_uri + '/applet/getLikeUniversityName', {
                        universityName:this.subjectName
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
            searchDetail(name,aa){
                $('#input')[0].blur();
                let _this=this;
                this.listflag=false;
                if(name){
                    this.subjectName=name
                }
                this.$ajax.post(this.G_uri + '/applet/getDataByUniversityName', {
                    universityName:this.subjectName
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    _this.cdata2=res.data.data;
                })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            //输入法开始
            start(){
                this.flag=false;
            },
            //输入法结束
            end(){
                this.flag=true;
            },
            //
            blur(){
                setTimeout(function () {
                    this.listflag=false;
                },0)
            }
        },
        created(){
            let _this=this
            console.log(this.cdata2)
        }
    }
</script>

<style scoped lang="less">
    .content{
        background: #fff;
        padding: 30px 20px;
        margin-bottom: 50px;
        min-height: 500px;
        .title{
            width: 190px;
            height: 40px;
            background-image:url(/imgs/xingaokao/xuankejuece/xuekezhixuan/icon_biaoti.png);
            background-repeat:no-repeat;
            background-position-x: -13px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            letter-spacing: 0.1em;
            font-weight: bolder;
            color:#fff;
            position: relative;
            left:-2px;
        }
        .searchBox{
            width: 510px;
            height: 40px;
            border:1px solid #2D8FFC;
            position: relative;
            box-sizing: border-box;
        }

        .searchBox>input{
            display: block;
            width: 100%;
            height: 100%;
            text-indent: 16px;
            font-size:13px;
            color: #333;
            letter-spacing: 0.1em;
        }
        .search{
            width: 80px;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background: #2D8FFC;
            line-height: 40px;
            text-align: center;
            color:#fff;
            cursor: pointer;
            letter-spacing: 0.1em;
            font-size: 15px;
        }
        .searchList{
            position: absolute;
            left: -1px;
            top:39px;
            width: 429px;
            max-height: 230px;
            overflow-y: auto;
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
        .tishi{
            font-size:18px;
            text-align: center;
            margin:80px auto;
        }
    }
</style>
