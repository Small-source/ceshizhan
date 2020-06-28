<template>
    <div class="careerAnchor">
        <div class="careerAnchorBox ">
            <masks v-show="addtanchuang||zhiyetanchuang||yuanxiaotanchuang||zhuanyetanchuang||false"></masks>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        大学定位结果
                    </div>
                    <span @click="yuanxiaotanchuang=true">编辑</span>
                </div>
                <h3 style="margin: 20px 10px">我的目标大学:</h3>
                <div class="Occupation">
                    <table>
                        <tr v-for="item in yuanxiaoOccupationReult">
                            <td v-for="itemContent in item">
                                {{itemContent.name}}
                                <span>{{itemContent.createdAt}}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="noneContent" v-if="yuanxiaoOccupationReult.length==0"></div>
                <div style="text-align: center;font-size: 16px;padding-bottom: 40px" v-if="yuanxiaoOccupationReult.length==0">请完善定位结果中大学信息、专业信息!</div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        专业定位结果
                    </div>
                    <span @click="zhuanyetanchuang=true">编辑</span>
                </div>
                <h3 style="margin: 20px 10px">我的目标专业:</h3>
                <div class="Occupation">
                    <table>
                        <tr v-for="item in zhuanyeOccupationReult">
                            <td v-for="itemContent in item">
                                {{itemContent.name}}
                                <span>{{itemContent.createdAt}}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="noneContent" v-if="zhuanyeOccupationReult.length==0"></div>
                <div style="text-align: center;font-size: 16px;padding-bottom: 40px" v-if="zhuanyeOccupationReult.length==0">请完善定位结果中大学信息、专业信息!</div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        职业定位结果
                    </div>
                    <span @click="zhiyetanchuang=true">编辑</span>
                </div>
                <h3 style="margin: 20px 10px">我的目标职业:</h3>
                <div class="Occupation">
                    <table>
                        <tr v-for="item in zhiyeOccupationReult">
                            <td v-for="itemContent in item">
                                {{itemContent.name}}
                                <span>{{itemContent.createdAt}}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="noneContent" v-if="zhiyeOccupationReult.length==0"></div>
            </div>
        </div>
        <div class="Cards zhiyedingwei zhiyedingwei2" v-show="yuanxiaotanchuang">
            <div class="close" @click="yuanxiaoaddSaveMubiao">
            </div>
            <div class="mubiaoBox">
                <ul class="mubiaolist">
                    <li v-for="(item,index) in  yuanxiaomubiaoLists">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="yuanxiaodelSaveMubiao(item.id,index)">
                    </li>
                    <li v-for="(item,index) in yuanxiaomubiaoAdd">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="yuanxiaodelMubiao(item.index)">
                    </li>
                    <li>
                        <!--<div class="listDiv">-->
                            <!--<img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="yuanxiaoaddMubiao">-->
                            <!--<input type="text" v-model="yuanxiaomubiaoVlaue">-->
                        <!--</div>-->
                        <div class="listDiv">
                            <img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="yuanxiaoaddMubiao">
                            <input type="text" v-model="yuanxiaomubiaoVlaue" id='input1' placeholder="搜索大学名称" @focus="resultlistflag=true" @input="resultsearch" @compositionstart="resultstart" @compositionend="resultend" @keyup.enter="resultsearchDetail()">
                        </div>
                        <ul class="searchList searchList3" v-show="resultlistflag">
                            <li v-for="item,index in resultcdata" :key="index" @click="resultsearchDetail(item.name)">{{item.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="save" @click="yuanxiaoaddSaveMubiao">
                保存
            </div>
        </div>
        <div class="Cards zhiyedingwei zhiyedingwei3" v-show="zhuanyetanchuang">
            <div class="close" @click="zhuanyeaddSaveMubiao">
            </div>
            <div class="mubiaoBox">
                <ul class="mubiaolist">
                    <li v-for="(item,index) in  zhuanyemubiaoLists">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="zhuanyedelSaveMubiao(item.id,index)">
                    </li>
                    <li v-for="(item,index) in zhuanyemubiaoAdd">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="zhuanyedelMubiao(item.index)">
                    </li>
                    <li>
                        <!--<div class="listDiv">-->
                            <!--<img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="zhuanyeaddMubiao">-->
                            <!--<input type="text" v-model="zhuanyemubiaoVlaue">-->
                        <!--</div>-->
                        <div class="listDiv">
                            <img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="zhuanyeaddMubiao">
                            <input type="text" v-model="zhuanyemubiaoVlaue" id='input2' placeholder="搜索专业名称" @focus="resultlistflag2=true" @input="resultsearch2" @compositionstart="resultstart2" @compositionend="resultend2" @keyup.enter="resultsearchDetail2()">
                        </div>
                        <ul class="searchList searchList3" v-show="resultlistflag2">
                            <li v-for="item,index in resultcdata2" :key="index" @click="resultsearchDetail2(item.name)">{{item.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="save" @click="zhuanyeaddSaveMubiao">
                保存
            </div>
        </div>
        <div class="Cards zhiyedingwei zhiyedingwei1" v-show="zhiyetanchuang">
            <div class="close" @click="zhiyeaddSaveMubiao">
            </div>
            <div class="mubiaoBox">
                <ul class="mubiaolist">
                    <li v-for="(item,index) in  zhiyemubiaoLists">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="zhiyedelSaveMubiao(item.id,index)">
                    </li>
                    <li v-for="(item,index) in zhiyemubiaoAdd">
                        <div class="listDiv">
                            {{item.name}}
                        </div>
                        <img src="/imgs/careerManagement/careerAnchor/icon_quxiao.png" alt="" @click="zhiyedelMubiao(item.index)">
                    </li>
                    <li>
                        <!--<div class="listDiv">-->
                            <!--<img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="zhiyeaddMubiao">-->
                            <!--<input type="text" v-model="zhiyemubiaoVlaue">-->
                        <!--</div>-->
                        <div class="listDiv">
                            <img src="/imgs/careerManagement/careerAnchor/icon_tianjia.png" alt="" @click="zhiyeaddMubiao">
                            <input type="text" v-model="zhiyemubiaoVlaue" id='input3' placeholder="搜索职业名称" @focus="resultlistflag3=true" @input="resultsearch3" @compositionstart="resultstart3" @compositionend="resultend3" @keyup.enter="resultsearchDetail3()">
                        </div>
                        <ul class="searchList searchList3" v-show="resultlistflag3">
                            <li v-for="item,index in resultcdata3" :key="index" @click="resultsearchDetail3(item.name)">{{item.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="save" @click="zhiyeaddSaveMubiao">
                保存
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
                zhiyetanchuang:false,
                yuanxiaotanchuang:false,
                zhuanyetanchuang:false,
                addtanchuang:false,
                edittanchuang:false,
                zhiyeOccupationReult:[
                ],
                yuanxiaoOccupationReult:[
                ],
                zhuanyeOccupationReult:[
                ],
                zhiyemubiaoAdd:[],
                zhiyemubiaoVlaue:'',
                zhiyemubiaoLists:[],
                yuanxiaomubiaoAdd:[],
                yuanxiaomubiaoVlaue:'',
                yuanxiaomubiaoLists:[],
                zhuanyemubiaoAdd:[],
                zhuanyemubiaoVlaue:'',
                zhuanyemubiaoLists:[],
                // 我的目标
                universityName:'', //目标院校
                subjectName:'', //目标专业
                scoreLine:'', //三年分数线
                furtherWay:'', //升序途径
                analyze:'' ,//分析原因
                mineGoalId:'',
                mineGoalList:[],
                // 我的目标分页器
                pageNumber:1,//当前页码
                pageSize:10,//每页大小
                total:0,//总条数
                resultlistflag:'',
                resultcdata:[],
                resultflag:true,
                resultlistflag2:'',
                resultcdata2:[],
                resultflag2:true,
                resultlistflag3:'',
                resultcdata3:[],
                resultflag3:true,
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
            //提交保存添加职业目标
            zhiyeaddSaveMubiao(){
                let _this=this
                if(this.zhiyemubiaoAdd.length==0){
                    _this.zhiyetanchuang=false;
                    _this.zhiyeMubiaolist();
                    return
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiZhiye.add,{
                    data:this.zhiyemubiaoAdd
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.zhiyemubiaoAdd=[]
                        _this.zhiyetanchuang=false;
                        _this.zhiyeMubiaolist();
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
            //添加当前目标
            zhiyeaddMubiao(){
                if(this.zhiyemubiaoVlaue){
                    let obj={
                        id:'',
                        name:this.zhiyemubiaoVlaue
                    }
                    this.$set(this.zhiyemubiaoAdd,this.zhiyemubiaoAdd.length,obj)
                    this.zhiyemubiaoVlaue="";
                }else{
                    this.warning('添加内容不能为空')
                }
            },
            //删除当前目标
            zhiyedelMubiao(index){
                this.zhiyemubiaoAdd.splice(index,1)
            },

            //获取院校目标
            yuanxiaoMubiaolist(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiYuanxiao.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data.list;
                        _this.yuanxiaoOccupationReult=[]
                        for(let i=0;i<data.length;i+=3){
                            let arr=[];
                            data[i]&&arr.push(data[i])
                            data[i+1]&&arr.push(data[i+1])
                            data[i+2]&&arr.push(data[i+2])
                            _this.yuanxiaoOccupationReult.push(arr)
                            _this.yuanxiaomubiaoLists=data;
                        }
                    }
                })
            },
            //提交保存添加院校目标
            yuanxiaoaddSaveMubiao(){
                let _this=this
                if(this.yuanxiaomubiaoAdd.length==0){
                    _this.yuanxiaotanchuang=false;
                    _this.yuanxiaoMubiaolist();
                    return
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiYuanxiao.add,{
                    data:this.yuanxiaomubiaoAdd
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.yuanxiaomubiaoAdd=[]
                        _this.yuanxiaotanchuang=false;
                        _this.yuanxiaoMubiaolist();
                    }
                })
            },
            //删除已存目标
            yuanxiaodelSaveMubiao(id,index){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiYuanxiao.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.yuanxiaomubiaoLists.splice(index,1)
                    }
                })
            },
            //添加当前目标
            yuanxiaoaddMubiao(){
                if(this.yuanxiaomubiaoVlaue){
                    let obj={
                        id:'',
                        name:this.yuanxiaomubiaoVlaue
                    }
                    this.$set(this.yuanxiaomubiaoAdd,this.yuanxiaomubiaoAdd.length,obj)
                    this.yuanxiaomubiaoVlaue="";
                }else{
                    this.warning('添加内容不能为空')
                }
            },
            //删除当前目标
            yuanxiaodelMubiao(index){
                this.yuanxiaomubiaoAdd.splice(index,1)
            },
            //获取专业目标
            zhuanyeMubiaolist(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiZhuanye.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data.list;
                        _this.zhuanyeOccupationReult=[]
                        for(let i=0;i<data.length;i+=3){
                            let arr=[];
                            data[i]&&arr.push(data[i])
                            data[i+1]&&arr.push(data[i+1])
                            data[i+2]&&arr.push(data[i+2])
                            _this.zhuanyeOccupationReult.push(arr)
                            _this.zhuanyemubiaoLists=data;
                        }
                    }
                })
            },
            //提交保存添加专业目标
            zhuanyeaddSaveMubiao(){
                let _this=this
                if(this.zhuanyemubiaoAdd.length==0){
                    _this.zhuanyetanchuang=false;
                    _this.zhuanyeMubiaolist();
                    return
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiZhuanye.add,{
                    data:this.zhuanyemubiaoAdd
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.zhuanyemubiaoAdd=[]
                        _this.zhuanyetanchuang=false;
                        _this.zhuanyeMubiaolist();
                    }
                })
            },
            //删除已存目标
            zhuanyedelSaveMubiao(id,index){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mubiaoDingweiZhuanye.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.zhuanyemubiaoLists.splice(index,1)
                    }
                })
            },
            //添加当前目标
            zhuanyeaddMubiao(){
                if(this.zhuanyemubiaoVlaue){
                    let obj={
                        id:'',
                        name:this.zhuanyemubiaoVlaue
                    }
                    this.$set(this.zhuanyemubiaoAdd,this.zhuanyemubiaoAdd.length,obj)
                    this.zhuanyemubiaoVlaue="";
                }else{
                    this.warning('添加内容不能为空')
                }
            },
            //删除当前目标
            zhuanyedelMubiao(index){
                this.zhuanyemubiaoAdd.splice(index,1)
            },
            //我的目标添加
            mineAdd(){
                let _this=this
                if(!this.universityName){
                    this.warning('请输入目标院校内容')
                    return
                }
                if(!this.subjectName){
                    this.warning('请输入目标专业内容')
                    return
                }
                if(!this.scoreLine){
                    this.warning('请输入三年分数线')
                    return
                }
                if(!this.furtherWay){
                    this.warning('请输入升学途径')
                    return
                }
                if(!this.analyze){
                    this.warning('请输入分析原因')
                    return
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.myGoal.add,{
                    universityName:this.universityName,
                    subjectName:this.subjectName,
                    scoreLine:this.scoreLine,
                    furtherWay:this.furtherWay,
                    analyze:this.analyze
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.addtanchuang=false
                        _this.mineList();
                    }
                })
            },
            //我的目标列表
            mineList(pageNumber,pageSize){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.myGoal.list,{
                    pageNumber:pageNumber||1,
                    pageSize:pageSize||10
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.mineGoalList=res.data.data.list;
                        _this.total=res.data.data.page.count
                    }
                })
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.currentPage = num;
                this.mineList(num,this.pageSize)
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
            //修改我的目标
            eidtmine(){
                let _this=this;
                if(!this.universityName){
                    this.warning('请输入目标院校内容')
                    return
                }
                if(!this.subjectName){
                    this.warning('请输入目标专业内容')
                    return
                }
                if(!this.scoreLine){
                    this.warning('请输入三年分数线')
                    return
                }
                if(!this.furtherWay){
                    this.warning('请输入升学途径')
                    return
                }
                if(!this.analyze){
                    this.warning('请输入分析原因')
                    return
                }
                this.$ajax.post(this.G_uri+this.ports.careerManagement.myGoal.edit,{
                    id:this.mineGoalId,
                    universityName:this.universityName,
                    subjectName:this.subjectName,
                    scoreLine:this.scoreLine,
                    furtherWay:this.furtherWay,
                    analyze:this.analyze
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.mineclear()
                        _this.edittanchuang=false;
                        _this.mineList()
                    }
                })
            },
            //查看我的目标
            showmine(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.myGoal.show,{
                    id:id,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                        this.universityName=data.universityName, //目标院校
                        this.subjectName=data.subjectName, //目标专业
                        this.scoreLine=data.scoreLine, //三年分数线
                        this.furtherWay=data.furtherWay, //升序途径
                        this.analyze=data.analyze ,//分析原因
                        this.mineGoalId=data.id //我的目标ID
                        _this.edittanchuang=true;
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
            //搜索内容
            resultsearch(){
                if(this.resultlistflag){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.careerManagement.yuanxiaopinghengdan.five, {
                        name:this.yuanxiaomubiaoVlaue
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.resultcdata=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            resultsearchDetail(name) {
                $('#input1')[0].blur();
                let _this = this;
                this.resultlistflag = false;
                if (name) {
                    this.yuanxiaomubiaoVlaue = name
                }
            },
            //输入法开始
            resultstart(){
                this.resultflag=false;
            },
            //输入法结束
            resultend(){
                this.resultflag=true;
            },
            //搜索内容
            resultsearch2(){
                if(this.resultlistflag2){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.careerManagement.zhuanyepinghengdan.five, {
                        name:this.zhuanyemubiaoVlaue
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.resultcdata2=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            resultsearchDetail2(name) {
                $('#input2')[0].blur();
                let _this = this;
                this.resultlistflag2 = false;
                if (name) {
                    this.zhuanyemubiaoVlaue = name
                }
            },
            //输入法开始
            resultstart2(){
                this.resultflag2=false;
            },
            //输入法结束
            resultend2(){
                this.resultflag2=true;
            },
            //搜索内容
            resultsearch3(){
                if(this.resultlistflag3){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.careerManagement.zhiyepinghengdan.five, {
                        name:this.zhiyemubiaoVlaue
                    }, {
                        headers:{
                            token:window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function(res) {
                        _this.resultcdata3=res.data.data;
                    })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            resultsearchDetail3(name) {
                $('#input3')[0].blur();
                let _this = this;
                this.resultlistflag3 = false;
                if (name) {
                    this.zhiyemubiaoVlaue = name
                }
            },
            //输入法开始
            resultstart3(){
                this.resultflag3=false;
            },
            //输入法结束
            resultend3(){
                this.resultflag3=true;
            }

        },
        created(){
            this.zhiyeMubiaolist();
            this.yuanxiaoMubiaolist();
            this.zhuanyeMubiaolist();
            // this.mineList(1,this.pageSize);
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
                    /*overflow: hidden;*/
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
                            padding-right: 40px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            input{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                text-indent: 40px;
                                background: none;
                                padding-right: 40px;
                                overflow: hidden;
                                text-overflow: ellipsis;
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
    .searchList{
        position: absolute;
        left: 0px;
        top:42px;
        width: 160px;
        max-height: 230px;
        overflow-y: auto;
        z-index: 9999;
    }
    .searchList>li{
        line-height: 40px;
        height: 40px;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;      //超出部分以省略号显示
        white-space: nowrap;;
        background: #F5F7F6;
        text-align: left;
        color:#333333;
        &:hover{
            background:#E1ECF7;
        }
        font-size:12px;
        cursor: pointer;
    }
    .searchList3{
        width: 248px;
        top:38px;
    }
    .searchList3>li{
        width: 100% !important;
        margin-bottom: 0 !important;
    }
</style>
<style scoped lang="less">
    .addTests{
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 90px 18px 0;
        margin-left: -326px;
        margin-top: -243px;
        width: 652px;
        height: 330px;
        z-index: 20;
        background-image: url("/imgs/schoolWork/bg_tankuang.png");
        background-repeat: no-repeat;
        background-color: white;
        background-position: 0 -1px;
        border-radius: 5px;
    table{
        tr:first-child{
            background: #F3F4F8;
            td{
                height: 50px;
            }
        }
        td{
            border:1px solid #DDDFDE;
            text-align: center;
            height: 100px;
            textarea{
                width: 100%;
                height: 100%;
                border:none
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
    .close{
        width: 17px;
        height: 17px;
        position: absolute;
        top:21px;
        right: 22px;
        cursor: pointer;
    }
    .tables{
        padding:10px;
        table{
            border-collapse: collapse;
            thead{
                tr{
                    background:#F3F4F8;
                }
            }
            tr{
                td{
                    line-height:44px;
                    height: 44px;
                    border:1px solid #EAEAEA;
                    text-align: center;
                    text-align: center;
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
