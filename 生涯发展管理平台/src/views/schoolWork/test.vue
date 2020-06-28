<template>
    <div class="test reward">
        <div class="rewardBox">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                 学业水平考试
            </div>
            <div class="add">
                <span @click="addtanchuang=true">新增</span>
            </div>
            <div class="myRewards">
                <table>
                    <thead>
                    <tr>
                        <td>科目</td>
                        <td>成绩</td>
                        <td>满分</td>
                        <td>等级</td>
                        <td>考试时间</td>
                        <td style="width: 110px">操作</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in testList">
                        <td>{{item.subject||'--'}}</td>
                        <td>{{item.score||'--'}}</td>
                        <td>{{item.fullScore||'--'}}</td>
                        <td>{{item.grade||'--'}}</td>
                        <td>{{item.examTime||'--'}}</td>
                        <td class="icon">
                            <el-button type="text" @click="delConfirm(item.id,$event)">
                            </el-button>
                            <span @click="modifyBox(item)"></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <masks v-show="addtanchuang||modifytanchuang||false"></masks>
            <div class="addTests" v-show="addtanchuang">
                <table>
                    <tr>
                        <td>科目</td>
                        <td>成绩</td>
                        <td>满分</td>
                        <td>等级</td>
                        <td>考试时间</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" v-model="subject">
                        </td>
                        <td>
                            <input type="text" v-model="score">
                        </td>
                        <td>
                            <input type="text" v-model="fullScore">
                        </td>
                        <td>
                            <input type="text" v-model="grade">
                        </td>
                        <td>
                            <input type="text" v-model="examTime">
                        </td>
                    </tr>
                </table>
                <div class="save" @click="add(),clear()">
                    保存
                </div>
                <div class="close" @click="addtanchuang=false,clear()"></div>
            </div>
            <div class="addTests modifyTests" v-show="modifytanchuang">
                <table>
                    <tr>
                        <td>科目</td>
                        <td>成绩</td>
                        <td>满分</td>
                        <td>等级</td>
                        <td>考试时间</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" v-model="subject">
                        </td>
                        <td>
                            <input type="text" v-model="score">
                        </td>
                        <td>
                            <input type="text" v-model="fullScore">
                        </td>
                        <td>
                            <input type="text" v-model="grade">
                        </td>
                        <td>
                            <input type="text" v-model="examTime">
                        </td>
                    </tr>
                </table>
                <div class="save" @click="modify(),clear()">
                    保存
                </div>
                <div class="close" @click="modifytanchuang=false,clear()"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "test",
        data(){
            return{
                subject:'',//科目
                score:'',//成绩
                grade:'',//等级
                fullScore:'',//总分
                examTime:'',//考试时间
                id:'',
                waring:'',//警告
                addtanchuang:false,
                showtanchuang:false,
                modifytanchuang:false,
                testList:[]
            }
        },
        components:{masks},
        methods:{
            //添加
            add(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.academicLevelTeam.add,{
                    subject:this.subject,
                    score:this.score,
                    fullScore:this.fullScore,
                    grade:this.grade,
                    examTime:this.examTime
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.data=2000){
                        _this.list()
                        _this.addtanchuang=false;
                    }
                })
            },
            //获取学业水平考试列表
            list(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.academicLevelTeam.list,{
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.testList=res.data.data.list;
                    }
                })
            },
            //删除
            del(id,e){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.academicLevelTeam.delete,{
                    ids:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        e.target.parentNode.parentNode.remove()
                    }
                })
            },
            //修改
            modify(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.academicLevelTeam.modify,{
                    id:this.id,
                    subject:this.subject,
                    score:this.score,
                    fullScore:this.fullScore,
                    grade:this.grade,
                    examTime:this.examTime
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.modifytanchuang=false;
                        _this.list();
                    }
                })
            },
            //打开修改窗口
            modifyBox(item){
                this.id=item.id;
                this.subject=item.subject;
                this.score=item.score;
                this.fullScore=item.fullScore;
                this.grade=item.grade;
                this.examTime=item.examTime;
                this.modifytanchuang=true;
            },
            //清空数据
            clear(){
                this.subject="";
                this.score="";
                this.fullScore="";
                this.grade="";
                this.examTime="";
            },
            //删除确认
            delConfirm(id,e){
                this.$confirm('内容删除后将无法恢复,是否删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.del(id,e)
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
            }
        },
        mounted(){
            this.list()
        }
    }
</script>

<style scoped lang="less">
    .addTests{
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 90px 18px 0;
        margin-left: -326px;
        margin-top: -143px;
        width: 652px;
        height: 286px;
        z-index: 20;
        background: url("/imgs/schoolWork/bg_tankuang.png") center center no-repeat;
        table{
            tr:first-child{
                background: #F3F4F8;
            }
            td{
                border:1px solid #DDDFDE;
                text-align: center;
                line-height: 50px;
                height: 50px;
                input{
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-indent: 10px;
                }
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
    }
    .modifyTests{
        background: url("/imgs/schoolWork/bg_xiugai.png") center center no-repeat;
    }
</style>
