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
                            <span @click="modifyBox(item.id)"></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <masks v-show="addtanchuang||showtanchuang||modifytanchuang||false"></masks>
        <div class="addRewards addRewards23" v-show="addtanchuang">
            <div class="addTitle">获奖信息/社会实践/研究性学习</div>
            <div class="addContent">
                <div style="padding-left: 58px;margin-top: 20px;">
                    <el-radio v-model="type" label="1" style="font-size: 16px" >大赛获奖</el-radio>
                    <el-radio v-model="type" label="2" >校园获奖</el-radio>
                    <el-radio v-model="type" label="3">社会实践</el-radio>
                    <el-radio v-model="type" label="4">研究性学习</el-radio>
                </div>
                <div class="inputs" v-show="type==1">
                    <span>大赛:</span>
                    <el-select v-model="activity" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputs">
                    <span>{{(type==1||type==2)&&'具体奖项:'||'名称:'}}</span>
                    <input type="text" v-model="name">
                </div>
                <div class="inputs">
                    <span>{{type==1&&'奖项等级:'||type==2&&'获奖类型:'||'等级:'}}</span>
                    <input type="text" v-model="degree">
                </div>
                <div class="inputs inputs2">
                    <span>参加时间:</span>
                    <div class="dateList" style="display: inline-block;width: 344px">
                        <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="date"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="inputs">
                    <span>证明材料:</span>
                    <div class="dateList" style="display: inline-block;width: 344px;border:1px solid #DEDEDE;line-height: 38px;text-indent: 10px;height: 38px">
                        <input type="file" class="inputfile1">
                    </div>
                </div>
                <div class="inputs">
                    <span>描述:</span>
                    <textarea name=""  v-model="desc" style="width: 808px;float: right;border-color:#DEDEDE"></textarea>
                </div>
                <ul class="operation">
                    <li @click="quietConfirm()">取消</li>
                    <li @click="add">保存</li>
                </ul>
                <div class="close"></div>
            </div>
            <div class="waring">{{waring}}</div>
        </div>
        <div class="addRewards showRewards" v-show="showtanchuang" style="position: fixed;">
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
                文件
            </div>
            <div class="head" style="line-height: 50px;text-indent: 10px" v-if="rewardDetail.url">
                <a :href="rewardDetail.url" target="_blank">查看</a>
            </div>
            <div class="head">
                描述
            </div>
            <p>
                {{rewardDetail.desc||'--'}}
            </p>
            <div class="close" @click="showtanchuang=false" ></div>
        </div>
        <div class="addRewards addRewards23" v-show="modifytanchuang">
            <div class="addTitle">获奖信息/社会时间/研究性学习</div>
            <div class="addContent">
                <div style="padding-left: 58px;margin-top: 20px;">
                    <el-radio v-model="type" label="1" style="font-size: 16px" >大赛获奖</el-radio>
                    <el-radio v-model="type" label="2" >校园获奖</el-radio>
                    <el-radio v-model="type" label="3">社会实践</el-radio>
                    <el-radio v-model="type" label="4">研究性学习</el-radio>
                </div>
                <div class="inputs" v-show="type==1">
                    <span>大赛:</span>
                    <el-select v-model="activity" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputs">
                    <span>{{(type==1||type==2)&&'具体奖项:'||'名称:'}}</span>
                    <input type="text" v-model="name">
                </div>
                <div class="inputs">
                    <span>{{type==1&&'奖项等级:'||type==2&&'获奖类型:'||'等级:'}}</span>
                    <input type="text" v-model="degree">
                </div>
                <div class="inputs inputs2">
                    <span>参加时间:</span>
                    <div class="dateList" style="display: inline-block;width: 344px">
                        <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="date"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="inputs">
                    <span>证明材料:</span>
                    <div class="dateList" style="display: inline-block;width: 344px;border:1px solid #DEDEDE;line-height: 38px;text-indent: 10px;height: 38px;position: relative">
                        <input type="file" class="inputfile2" >
                        <a :href="url" v-if="url" target="_blank" style="position: absolute;right: 14px;top: 0;color:#3C91F5">查看</a>
                    </div>
                </div>
                <div class="inputs">
                    <span>描述:</span>
                    <textarea name=""  v-model="desc" style="width: 808px;float: right;border-color:#DEDEDE"></textarea>
                </div>
                <ul class="operation">
                    <li @click="quietConfirm()">取消</li>
                    <li @click="modify">保存</li>
                </ul>
                <div class="close"></div>
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
                type:'1',
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
                rewardDetail:{},
                options:[
                    "全国青少年科技创新大赛",
                    "中国青少年机器人竞赛",
                    "全国青少年创意编程与智能设计大赛",
                    "“童创未来”全国青少年人工智能创新挑战赛",
                    "全国青少年电子信息智能创新大赛",
                    "全国中小学信息技术创新与实践大赛",
                    "全国中小学生创·造大赛",
                    "青少年科学调查体验竞赛",
                    "“明天小小科学家”竞赛",
                    "全国青年科普创新实验暨作品大赛",
                    "全国中学生天文知识竞赛",
                    "全国防震减灾知识大赛",
                    "全国中学生数学奥林匹克竞赛",
                    "全国中学生物理奥林匹克竞赛",
                    "全国中学生化学奥林匹克竞赛",
                    "全国中学生生物学奥林匹克竞赛",
                    "全国中学生信息学奥林匹克竞赛",
                    "世界华人学生作文大赛",
                    "全国中学生科普科幻作文大赛",
                    "叶圣陶杯全国中学生新作文大赛",
                    "高中生创新能力大赛",
                    "“外研社杯”全国中学生外语素养大赛",
                    "中国日报社“21世纪杯”全国英语演讲比赛",
                    "“希望杯”全国数学邀请赛",
                    "“地球小博士”和“环保之星”全国地理科普知识大赛",
                    "全国中小学生绘画书法作品比赛",
                    "中日青少年书画友好交流大赛",
                    "全国青少年科学影像大赛",
                    "丝路国家青少年国际摄影竞赛"
                ],
                url:''
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
                var formData=new FormData();
                var $file = $(".inputfile1").val()
                if($file){
                    var fileName1 = $file.substring($file.lastIndexOf(".") + 1).toLowerCase();
                    if(fileName1 != "png" && fileName1 !="jpg"){
                        this.waring="请选择jpg或png文件!"
                        return false;
                    }
                    formData.append('url',$(".inputfile1")[0].files[0]);
                }
                if(!this.name){
                    this.waring='请输入具体奖项或名称'
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
                formData.append('type',this.type)
                formData.append('name',this.name)
                formData.append('date',this.date)
                formData.append('activity',this.activity)
                formData.append('degree',this.degree)
                formData.append('desc',this.desc)
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.award.add,formData,{
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
            show(id,bool){
                let _this=this
                if(!bool){
                    _this.showtanchuang=true
                }
                this.$ajax.post(this.G_uri+this.ports.award.show,{
                    id:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        _this.rewardDetail=res.data.data;
                        if(bool){
                            this.date=res.data.data.date
                            this.name=res.data.data.name
                            this.activity=res.data.data.activity
                            this.degree=res.data.data.degree
                            this.desc=res.data.data.desc
                            this.id=res.data.data.id;
                            this.type=res.data.data.type+''
                            this.url=res.data.data.url;
                            console.log(this.url)
                        }
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
                var formData=new FormData();
                var $file = $(".inputfile2").val()
                if($file){
                    var fileName1 = $file.substring($file.lastIndexOf(".") + 1).toLowerCase();
                    if(fileName1 != "png" && fileName1 !="jpg"){
                        this.waring="请选择jpg或png文件!"
                        return false;
                    }
                    formData.append('url',$(".inputfile2")[0].files[0]);
                }
                if(!this.name){
                    this.waring='请输入具体奖项或名称'
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
                formData.append('id',this.id)
                formData.append('type',this.type)
                formData.append('name',this.name)
                formData.append('date',this.date)
                formData.append('activity',this.activity)
                formData.append('degree',this.degree)
                formData.append('desc',this.desc)
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.award.modify,formData,{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                   _this.modifytanchuang=false
                   _this.clear();
                   _this.list();
                })
            },
            modifyBox(id){
                this.modifytanchuang=true
                this.show(id,true)
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
                    this.type='1';
                    this.url='';
                    $('input[type="file"]').val('')
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
            },
            //退出确认
            quietConfirm(){
                this.$confirm('退出后不会保存编辑内容，是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.clear();
                    this.addtanchuang=false
                    this.modifytanchuang=false
                }).catch(() => {

                })
            }
        },
        mounted(){
            this.list()
        }
    }
</script>

<style scoped lang="less">
    .addRewards23{
        width: 670px !important;
        margin-left: -335px !important;
        textarea{
            width:508px !important;
        }
    }
    .head a{
        color: #3A90F3;
        margin-right: 10px;
    }
    .inputs{
        margin-top: 24px;
        overflow: hidden;
        input{
            width: 344px !important;
            height: 38px;
            border-radius: 3px;
            border:1px solid #DEDEDE;
            display: inline-block;
            text-indent: 10px;
        }
        span{
            display: inline-block;
            min-width: 80px;
            text-align: right;
            margin-right: 12px;
            margin-left: 20px;
            font-size: 16px;
            font-weight: bolder;
            i{
                color:#F80001;
                position: relative;
                top:2px;
                left:-3px;
            }
        }
        input[type='file']{
            border: none !important;
            text-indent: 0 !important;
            padding-left: 0;
        }
    }
</style>
<style lang="less">
    .addRewards .el-input__inner{
        height: 38px;
        border:1px solid #DEDEDE;
        width: 344px !important;
        padding-left: 0px !important;
    }
    .addRewards  .inputs2  .el-input__inner{
        padding-left: 15px !important;
    }
    .addRewards .el-radio__label{
        font-size: 16px;
        font-weight: bold;
        color: #333;
        line-height: 18px;
    }
    .addRewards label{
    }
</style>
