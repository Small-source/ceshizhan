<template>
    <div class="reward">
        <div class="rewardBox">
            <div class="title">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                获奖信息
            </div>
            <div class="add">
                <span @click="addtanchuang=true">新增</span>
            </div>
            <div class="myRewards">
                <table>
                    <thead>
                    <tr>
                        <td>名称</td>
                        <td>活动</td>
                        <td>等级</td>
                        <td>时间</td>
                        <td>查看详情</td>
                        <td style="width: 110px">操作</td>
                    </tr>
                    </thead>
                    <tbody>
                       <tr v-for="item in rewardList">
                        <td>{{item.name||'--'}}</td>
                        <td>{{item.activity||'--'}}</td>
                        <td>{{item.degree||'--'}}</td>
                        <td>{{item.date||'--'}}</td>
                        <td class="show" @click="show(item.id)">查看</td>
                        <td class="icon">
                            <el-button type="text" @click="delConfirm(item.id,$event)">
                            </el-button>
                            <span @click="modifyBox(item)"></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <masks v-show="addtanchuang||showtanchuang||modifytanchuang||false"></masks>
        <div class="addRewards" v-show="addtanchuang">
            <div class="addTitle">新增获奖信息/社会实践/研究性学习</div>
            <div class="addContent">
                <p>
                    <i>*</i>名称 <span>（奖项名称/社会实践/研究性学习)</span>
                </p>
                <input type="text" v-model="name">
                <p>
                    活动 <span>（竞赛/社会实践/研究性学习)</span>
                </p>
                <input type="text" v-model="activity">
                <p>
                    等级 <span>（竞赛等级)</span>
                </p>
                <input type="text" v-model="degree">
                <p>
                    <i>*</i>时间
                </p>
                <div class="dateList">
                        <el-date-picker
                            value-format="yyyy-MM-dd"
                            v-model="date"



                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                </div>
                <p>
                    描述
                </p>
                <textarea name=""  v-model="desc"></textarea>
                <ul class="operation">
                    <li @click="tanchuang=false"></li>
                    <li @click="add"></li>
                </ul>
                <div class="close" @click="addtanchuang=false"></div>
            </div>
            <div class="waring">{{waring}}</div>
        </div>
        <div class="addRewards showRewards" v-show="showtanchuang" style="position: fixed">
            <ul class="title">
                <li>名称</li>
                <li>活动</li>
                <li>等级</li>
                <li>时间</li>
            </ul>
            <ul class="showContent">
                <li>{{rewardDetail.name}}</li>
                <li>{{rewardDetail.activity||'--'}}</li>
                <li>{{rewardDetail.degree||'--'}}</li>
                <li>{{rewardDetail.date}}</li>
            </ul>
            <div class="head">
                描述
            </div>
            <p>
                {{rewardDetail.desc||'--'}}
            </p>
            <div class="close" @click="showtanchuang=false" ></div>
        </div>
        <div class="addRewards" v-show="modifytanchuang">
            <div class="addTitle">修改获奖信息/社会时间/研究性学习</div>
            <div class="addContent">
                <p>
                    <i>*</i>名称 <span>（奖项名称/社会实践/研究性学习)</span>
                </p>
                <input type="text" v-model="name">
                <p>
                    活动 <span>（竞赛/社会实践/研究性学习)</span>
                </p>
                <input type="text" v-model="activity">
                <p>
                    等级 <span>（竞赛等级)</span>
                </p>
                <input type="text" v-model="degree">
                <p>
                    <i>*</i>时间
                </p>
                <div class="dateList">
                    <el-date-picker
                            value-format="yyyy-MM-dd"
                            v-model="date"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
                <p>
                    描述
                </p>
                <textarea name=""  v-model="desc"></textarea>
                <ul class="operation">
                    <li @click="modifytanchuang=false,clear()"></li>
                    <li @click="modify"></li>
                </ul>
                <div class="close" @click="modifytanchuang=false,clear()"></div>
            </div>
            <div class="waring">{{waring}}</div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "reward",
        data(){
            return{
                date:'',//日期
                name:'',//名称
                activity:'',//活动
                degree:'',//等级
                desc:'',//描述
                id:'',
                waring:'',//警告
                addtanchuang:false,
                showtanchuang:false,
                modifytanchuang:false,
                rewardList:[],
                rewardDetail:{}
            }
        },
        components:{masks},
        methods:{
            //获奖信息列表
            list(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.award.list,{
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.rewardList=res.data.data.list
                    }
                })
            },
            //添加获奖信息
            add(){
                this.waring='';
                if(!this.name){
                    this.waring='请输入名称'
                    return
                }
                if(this.name.length>=50){
                    this.waring='不能超过50个字符'
                    return
                }
                if(!this.date){
                    this.waring='请选择日期'
                    return
                }
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.award.add,{
                    name:this.name,
                    date:this.date,
                    activity:this.activity,
                    degree:this.degree,
                    desc:this.desc
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.data=2000){
                        _this.list()
                        _this.addtanchuang=false;
                        _this.clear()
                    }
                })
            },
            //查看获奖信息详情
            show(id){
                let _this=this
                _this.showtanchuang=true
                this.$ajax.post(this.G_uri+this.ports.award.show,{
                    id:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.rewardDetail=res.data.data;
                    }
                })
            },
            //删除获奖信息
            del(id,e){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.award.delete,{
                    ids:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    e.target.parentNode.parentNode.remove()
                })
            },
            //修改获奖信息
            modify(){
                this.waring='';
                if(!this.name){
                    this.waring='请输入名称'
                    return
                }
                if(this.name.length>=50){
                    this.waring='不能超过50个字符'
                    return
                }
                if(!this.date){
                    this.waring='请选择日期'
                    return
                }
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.award.modify,{
                    id:this.id,
                    name:this.name,
                    date:this.date,
                    activity:this.activity,
                    degree:this.degree,
                    desc:this.desc
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                   _this.modifytanchuang=false
                   _this.clear();
                   _this.list();
                })
            },
            modifyBox(item){
                this.date=item.date
                this.name=item.name
                this.activity=item.activity
                this.degree=item.degree
                this.desc=item.desc
                this.id=item.id;
                this.modifytanchuang=true
            },
            //数据清空
            clear(){
                    this.date=''
                    this.name=''
                    this.activity=''
                    this.degree=''
                    this.desc=''
                    this.waring=''
                    this.id=''
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

</style>
<style>
    .addRewards .el-input__inner{
        height: 38px;
        border:1px solid #DEDEDE;
    }
</style>
