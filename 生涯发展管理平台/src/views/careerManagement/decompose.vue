<template>
    <div class="careerAnchor">
        <masks v-show="jinqitanchuang||xuekaotanchuang||xueqitanchuang||gaokaotanchuang||false"></masks>
        <div class="careerAnchorBox ">
            <!-- <img src="imgs/careerManagement/careerAnchor/banner.png" alt="" class="banner"> -->
            <div class="parts">
                <div class="top" style="padding-bottom:50px">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        高考目标
                    </div>
                    <span @click="gaokaotanchuang=true" style="position: relative;top:20px">新增</span>
                </div>
                <div class="tables">
                    <table>
                        <tr v-for="(item,index) in GgaokaoList">
                            <td>高考目标{{index+1}}</td>
                            <td>
                                <span>总分</span>
                               {{item.totalScore}}
                            </td>
                            <td>
                                <span>名次</span>
                                {{item.rank||'--'}}
                            </td>
                            <td v-for="(n,key)  in item.list">
                                <span>{{n.name}}</span>
                                {{n.score}}
                            </td>
                            <td>
                                <span>日期</span>
                                {{item.updatedAt||'--'}}
                            </td>
                            <td>
                                <span>操作</span>
                                <i class="icon" @click="gaokaoShow(item.id)"></i>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="noneContent" v-if="GgaokaoList.length==0"></div>
            </div>
            <div class="parts">
                <div class="top" >
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        学期目标
                    </div>
                </div>
                <div class="tables">
                    <table>
                        <tr v-for="(item,index) in xueqitTotal">
                            <td>{{item.title}}</td>
                            <td>
                                <span>总分</span>
                                {{item.totalScore||'--'}}
                            </td>
                            <td>
                                <span>名次</span>
                                {{item.rank||'--'}}
                            </td>
                            <td v-for="(n)  in item.list||subjectList">
                                <span>{{n.name||n.subject}}</span>
                                {{n.score||'--'}}
                            </td>
                            <td>
                                <span>日期</span>
                                {{item.updatedAt||'--'}}
                            </td>
                            <td>
                                <span>操作</span>
                                <i class="icon" @click="xueqiShow(item.id),xueqiType=(index+1)"></i>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="parts">
                <div class="top" >
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        学考目标
                    </div>
                    <span @click="xuekaotanchuang=true" style="position: relative;top:20px">编辑</span>
                </div>
                <div class="tables2" style="padding-top: 60px" >
                    <table>
                        <tr>
                            <td>科目</td>
                            <td>学考目标</td>
                            <td>备注</td>
                        </tr>
                        <tr v-for="item in subjectList">
                            <td>{{item.subject}}</td>
                            <td>{{item.target}}
                            </td>
                            <td>{{item.remark}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="parts">
                <div class="top" style="padding-bottom:50px">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        近期目标
                    </div>
                    <span @click="jinqitanchuang=true" style="position: relative;top:20px">新增</span>
                </div>
                <div class="tables2" style="padding-top: 20px" >
                    <table>
                        <tr>
                            <td>优先等级</td>
                            <td>近期目标</td>
                            <td>完成期限</td>
                            <td>达成情况</td>
                            <td>删除</td>
                            <td>修改</td>
                        </tr>
                        <tr v-for="(item,index) in jinqiData">
                            <td>{{(currentPage-1)*pageSize+index+1}}</td>
                            <td>
                                {{item.target}}
                            </td>
                            <td>
                                {{item.startDate+'至'+item.endDate}}
                            </td>
                            <td>
                                <span class="finshed" @click="jinqiFinshe(item.id)" v-if="item.isOver==2">未完成</span>
                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.isOver==1">
                            </td>
                            <td>
                                <i class="icon icon2" @click="jinqidel(item.id)"></i>
                            </td>
                            <td>
                                <i class="icon" @click="showjinqi(item.id)"></i>
                            </td>
                        </tr>
                    </table>
                </div>
                <el-pagination v-if="jinqiData.length!=0"
                               background
                               @current-change="currentChange"
                               :page-size="pageSize"
                               layout="prev, pager, next"
                               :total="total"
                               class="pages"
                >
                </el-pagination>
                <div class="noneContent" v-if="jinqiData.length==0"></div>
            </div>
        </div>
        <div class="Cards" v-show="gaokaotanchuang">
            <ul class="inputList">
                <li>
                    <p>总分:</p>
                    <input type="number" v-model="GtotalScore">
                </li>
                <li>
                    <p>名次:</p>
                    <input type="number" v-model="Grank">
                </li>
                <li></li>
                <li></li>
                <li>
                    <p>语文:</p>
                    <input type="number" v-model="GsubjectLanguage">
                </li>
                <li>
                    <p>数学:</p>
                    <input type="number" v-model="GsubjectMath">
                </li>
                <li>
                    <p>外语:</p>
                    <input type="number" v-model="GsubjectForeignLanguage">
                </li>
                <li>
                    <p>物理:</p>
                    <input type="number" v-model="GsubjectPhysics">
                </li>
                <li>
                    <p>化学:</p>
                    <input type="number" v-model="GsubjectChemistry">
                </li>
                <li>
                    <p>生物:</p>
                    <input type="number" v-model="GsubjectBiology">
                </li>
                <li>
                    <p>政治:</p>
                    <input type="number" v-model="GsubjectIdeologicalPolitics">
                </li>
                <li>
                    <p>历史:</p>
                    <input type="number" v-model="GsubjectHistory">
                </li>
                <li>
                    <p>地理:</p>
                    <input type="number" v-model="GsubjectGeography">
                </li>
                <li>
                    <p>技术:</p>
                    <input type="number" v-model="GsubjectTechnology">
                </li>
            </ul>
            <div class="save" @click="gaokaoAddEdit(),clearGao()">
                保存
            </div>
            <div class="close" @click="gaokaotanchuang=false,clearGao()"></div>
        </div>
        <div class="Cards Xueqi" v-show="xueqitanchuang">
            <ul class="inputList">
                <li>
                    <p>总分:</p>
                    <input type="number" v-model="GtotalScore">
                </li>
                <li>
                    <p>名次:</p>
                    <input type="number" v-model="Grank">
                </li>
                <li></li>
                <li></li>
                <li>
                    <p>语文:</p>
                    <input type="number" v-model="GsubjectLanguage">
                </li>
                <li>
                    <p>数学:</p>
                    <input type="number" v-model="GsubjectMath">
                </li>
                <li>
                    <p>外语:</p>
                    <input type="number" v-model="GsubjectForeignLanguage">
                </li>
                <li>
                    <p>物理:</p>
                    <input type="number" v-model="GsubjectPhysics">
                </li>
                <li>
                    <p>化学:</p>
                    <input type="number" v-model="GsubjectChemistry">
                </li>
                <li>
                    <p>生物:</p>
                    <input type="number" v-model="GsubjectBiology">
                </li>
                <li>
                    <p>政治:</p>
                    <input type="number" v-model="GsubjectIdeologicalPolitics">
                </li>
                <li>
                    <p>历史:</p>
                    <input type="number" v-model="GsubjectHistory">
                </li>
                <li>
                    <p>地理:</p>
                    <input type="number" v-model="GsubjectGeography">
                </li>
                <li>
                    <p>技术:</p>
                    <input type="number" v-model="GsubjectTechnology">
                </li>
            </ul>
            <div class="save" @click="xueqiAdd(),clearGao()">
                保存
            </div>
            <div class="close" @click="xueqitanchuang=false,clearGao()">

            </div>
        </div>
        <div class="Cards Xuekao" v-show="xuekaotanchuang">
            <div class="tables2">
                <table>
                    <tr>
                        <td>科目</td>
                        <td>学考目标</td>
                        <td>备注</td>
                    </tr>
                    <tr v-for="item in subjectList">
                        <td>{{item.subject}}</td>
                        <td><input type="text" v-model="item.target"></td>
                        <td><input type="text" v-model="item.remark"></td>
                    </tr>
                </table>
            </div>
            <div class="save" @click="xueKaoAdd(),clearGao()">
                保存
            </div>
            <div class="close" @click="xuekaotanchuang=false,clearGao()">

            </div>
        </div>
        <div class="Cards Jinqi" v-show="jinqitanchuang">
            <div class="jinqiBox">
                <p>优先级:</p>
                <el-select  v-model="jinqiSort" placeholder="请选择优先级">
                    <el-option  label="最前" value="0"></el-option>
                    <el-option  label="最后" value="最后"></el-option>
                </el-select>
                <p>内容:</p>
                <textarea  v-model="jinqiText" ></textarea>
                <p>完成日期</p>
                <div class="block">
                    <el-date-picker
                            v-model="jinqiDate"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </div>
            <div class="save" @click="jinqiAdd(),clearGao()" >
                保存
            </div>
            <div class="close" @click="jinqitanchuang=false,clearGao()">
            </div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "decompose",
        components:{masks},
        data(){
            return {
                gaokaotanchuang:false,
                xueqitanchuang:false,
                xuekaotanchuang:false,
                jinqitanchuang:false,
                //高考目标
                GgaokaoList:[],
                GgaokaoId:'',
                GtotalScore:'',//总分
                Grank:'',//名次
                GsubjectLanguage:'',//语文分数
                GsubjectMath:'',//数学分数
                GsubjectForeignLanguage:'',//外语分数
                GsubjectPhysics:'',//物理分数
                GsubjectChemistry:'',//化学分数
                GsubjectBiology:'',//生物分数
                GsubjectIdeologicalPolitics:'',//思想政治
                GsubjectHistory:'',//历史分数
                GsubjectGeography:'',//地理分数
                GsubjectTechnology:'',//技术
                //学期目标
                xueqiType:1,
                xueqitTotal:[
                    {title :'高一上(期中)'},
                    {title :'高一上(期末)'},
                    {title :'高一下(期中)'},
                    {title :'高一下(期末)'},
                    {title :'高二上(期中)'},
                    {title :'高二上(期末)'},
                    {title :'高二下(期中)'},
                    {title :'高二下(期末)'},
                    {title :'高三上(期中)'},
                    {title :'高三上(期末)'},
                    {title :'高三下(期中)'}
                ],
                subjectList:[
                    {
                        subject:'语文',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'数学',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'外语',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'物理',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'化学',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'生物',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'思想政治',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'历史',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'地理',
                        target:'',
                        remark:''
                    },
                    {
                        subject:'技术',
                        target:'',
                        remark:''
                    }
                ],
                xueqiListData:[],
                //近期目标
                jinqiData:[],
                jinqiSort:'',
                jinqiText:'',
                jinqiDate:'',
                jinqiID:'',
                //近期目标分页
                pageNumber:1,//当前页码
                pageSize:10,//每页大小
                total:0,//总条数,
                currentPage:1
            }
        },
        methods:{
            //高考目标添加&编辑
            gaokaoAddEdit(){
                let _this=this
                if(!_this.GgaokaoId){
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.gaoGoal.add,{
                        totalScore:this.GtotalScore,
                        rank:this.Grank,
                        subjectLanguage:this.GsubjectLanguage,
                        subjectMath:this.GsubjectMath,
                        subjectForeignLanguage:this.GsubjectForeignLanguage,
                        subjectPhysics:this.GsubjectPhysics,
                        subjectChemistry:this.GsubjectChemistry,
                        subjectBiology:this.GsubjectBiology,
                        subjectIdeologicalPolitics:this.GsubjectIdeologicalPolitics,
                        subjectHistory:this.GsubjectHistory,
                        subjectGeography:this.GsubjectGeography,
                        subjectTechnology:this.GsubjectTechnology
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.gaokaoList();
                            _this.gaokaotanchuang=false;
                        }
                    })
                }else{
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.gaoGoal.edit,{
                        id:this.GgaokaoId,
                        totalScore:this.GtotalScore,
                        rank:this.Grank,
                        subjectLanguage:this.GsubjectLanguage,
                        subjectMath:this.GsubjectMath,
                        subjectForeignLanguage:this.GsubjectForeignLanguage,
                        subjectPhysics:this.GsubjectPhysics,
                        subjectChemistry:this.GsubjectChemistry,
                        subjectBiology:this.GsubjectBiology,
                        subjectIdeologicalPolitics:this.GsubjectIdeologicalPolitics,
                        subjectHistory:this.GsubjectHistory,
                        subjectGeography:this.GsubjectGeography,
                        subjectTechnology:this.GsubjectTechnology
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.gaokaoList();
                            _this.gaokaotanchuang=false;
                        }
                    })
                }
            },
            //高考目标添加列表
            gaokaoList(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.gaoGoal.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.GgaokaoList=res.data.data.list;
                    }
                })
            },
            //高考目标详情
            gaokaoShow(id){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.gaoGoal.show,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                        _this.GtotalScore=data.totalScore;
                        _this.Grank=data.rank;
                        _this.GsubjectLanguage=data.subjectLanguage;
                        _this.GsubjectMath=data.subjectMath;
                        _this.GsubjectForeignLanguage=data.subjectForeignLanguage;
                        _this.GsubjectPhysics=data.subjectPhysics;
                        _this.GsubjectChemistry=data.subjectChemistry;
                        _this.GsubjectBiology=data.subjectBiology;
                        _this.GsubjectIdeologicalPolitics=data.subjectIdeologicalPolitics;
                        _this.GsubjectHistory=data.subjectHistory;
                        _this.GsubjectGeography=data.subjectGeography;
                        _this.GsubjectTechnology=data.subjectTechnology;
                        _this.GgaokaoId=data.id;
                        _this.gaokaotanchuang=true;
                    }
                })
            },
            //清空高考目标
            clearGao(){
                this.GtotalScore='';
                this.Grank='';
                this.GsubjectLanguage='';
                this.GsubjectMath='';
                this.GsubjectForeignLanguage='';
                this.GsubjectPhysics='';
                this.GsubjectChemistry='';
                this.GsubjectBiology='';
                this.GsubjectIdeologicalPolitics='';
                this.GsubjectHistory='';
                this.GsubjectGeography='';
                this.GsubjectTechnology='';
                this.GgaokaoId='';
                this.jinqiSort='';
                this.jinqiText='';
                this.jinqiDate='';
                this.jinqiID=''
            },
            //添加学期目标
            xueqiAdd(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.xueQiGoal.addEidt,{
                    type:this.xueqiType,
                    totalScore:this.GtotalScore,
                    rank:this.Grank,
                    subjectLanguage:this.GsubjectLanguage,
                    subjectMath:this.GsubjectMath,
                    subjectForeignLanguage:this.GsubjectForeignLanguage,
                    subjectPhysics:this.GsubjectPhysics,
                    subjectChemistry:this.GsubjectChemistry,
                    subjectBiology:this.GsubjectBiology,
                    subjectIdeologicalPolitics:this.GsubjectIdeologicalPolitics,
                    subjectHistory:this.GsubjectHistory,
                    subjectGeography:this.GsubjectGeography,
                    subjectTechnology:this.GsubjectTechnology
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.xueqiList();
                        _this.xueqitanchuang=false;
                    }
                })
            },
            //学期目标详情
            xueqiShow(id){
                if(id){
                    let _this=this;
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.xueQiGoal.show,{
                        id:id
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            let data=res.data.data;
                            _this.GtotalScore=data.totalScore;
                            _this.Grank=data.rank;
                            _this.GsubjectLanguage=data.subjectLanguage;
                            _this.GsubjectMath=data.subjectMath;
                            _this.GsubjectForeignLanguage=data.subjectForeignLanguage;
                            _this.GsubjectPhysics=data.subjectPhysics;
                            _this.GsubjectChemistry=data.subjectChemistry;
                            _this.GsubjectBiology=data.subjectBiology;
                            _this.GsubjectIdeologicalPolitics=data.subjectIdeologicalPolitics;
                            _this.GsubjectHistory=data.subjectHistory;
                            _this.GsubjectGeography=data.subjectGeography;
                            _this.GsubjectTechnology=data.subjectTechnology;
                            _this.GgaokaoId=data.id;
                            _this.xueqitanchuang=true;
                        }
                    })
                }else{
                    this.xueqitanchuang=true;
                }
            },
            //学期目标列表
            xueqiList(){
                let _this=this
                this.$ajax.post(this.G_uri+this.ports.careerManagement.xueQiGoal.list,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                          let data=res.data.data.list;
                            _this.xueqitTotal.forEach((item,index)=>{
                                data.forEach((n,i)=>{
                                    if(n.type==(index+1)){
                                        item.totalScore=n.totalScore;
                                        item.rank=n.rank;
                                        item.updatedAt=n.updatedAt;
                                        item.list=n.list;
                                        item.type=n.type;
                                        item.id=n.id
                                    }
                                })
                            })
                        _this.xueqitTotal=[..._this.xueqitTotal]
                    }
                })
            },
            //学考目标添加
            xueKaoAdd(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.xueKaoGoal.addEidt,{
                    subject:_this.subjectList
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        // _this.xueqiList();
                        _this.xuekaotanchuang=false;
                    }
                })
            },
            //学考目标列表
            xueKaoList(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.xueKaoGoal.list,{
                    subject:_this.subjectList
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        // _this.xueqiList();
                        let data=res.data.data;
                        if(data.length>0){
                            _this.subjectList=data;
                        }
                        _this.xuekaotanchuang=false;
                    }
                })
            },
            //近期目标添加修改
            jinqiAdd(){
                let _this=this;
                if(!this.jinqiID){
                    //添加
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.nearGoal.add,{
                        sort:this.jinqiSort,
                        target:this.jinqiText,
                        startDate:this.jinqiDate[0],
                        endDate:this.jinqiDate[1]
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.jinqitanchuang=false;
                            _this.jinqiList(1,_this.pageSize);
                        }
                    })
                }else{
                    //修改
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.nearGoal.edit,{
                        id:this.jinqiID,
                        sort:this.jinqiSort,
                        target:this.jinqiText,
                        startDate:this.jinqiDate[0],
                        endDate:this.jinqiDate[1]
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.jinqitanchuang=false;
                            _this.jinqiList(1,_this.pageSize);
                        }
                    })
                }
            },
            //近期目标列表
            jinqiList(pageNumber,pageSize){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.nearGoal.list,{
                    pageNumber:pageNumber||1,
                    pageSize:pageSize||10
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.total=res.data.data.page.count;
                        _this.jinqiData=res.data.data.list
                    }
                })
            },
            //点击完成{
            jinqiFinshe(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.nearGoal.complete,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.jinqiList(1,_this.pageSize);
                    }
                })
            },
            //删除近期目标
            jinqidel(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.nearGoal.del,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        this.jinqiList(1,_this.pageSize);
                    }
                })
            },
            //查看近期目标
            showjinqi(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.nearGoal.show,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                        _this.jinqiText=data.target;
                        _this.jinqiDate=[data.startDate,data.endDate];
                        _this.jinqiID=data.id;
                        _this.jinqitanchuang=true;
                    }
                })
            },
            //当近期页面变化
            currentChange(num) {
                this.currentPage = num;
                this.jinqiList(num,this.pageSize);
            },
        },
        created(){
            this.gaokaoList();
            this.xueqiList();
            this.jinqiList(1,this.pageSize);
            this.xueKaoList();
        }
    }
</script>

<style scoped lang="less">
    .careerAnchor{
        *{
            box-sizing: border-box;
        }
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
                .tables{
                    padding:20px  0;
                    table{
                        border-collapse: collapse;
                        border:1px solid #EAEAEA;
                        tr{
                            td:nth-of-type(1){
                                background: #F3F4F8;
                            }
                        }
                        td{
                            line-height:40px;
                            border:1px solid #EAEAEA;
                            text-align: center;
                            span{
                                display: block;
                                border-bottom: 1px solid #EAEAEA;
                                background: #F3F4F8;
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
                                      background-color: #FB4945;
                                  }
                            }
                        }
                    }
                }
                .tables2{
                    padding:20px  0;
                    table{
                        border-collapse: collapse;
                        border:1px solid #EAEAEA;
                        tr:nth-of-type(1){
                           background: #F3F4F8;
                        }
                        td{
                            line-height:40px;
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
                                    background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                                    background-color:#3087E6 ;
                                }
                            }
                            .icon2{
                                background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
                                &:hover{
                                    background-image:url("/imgs/schoolWork/icon_lajitongbai.png");
                                    background-color:  #FB4945;
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
                        }
                    }
                }
                .pages{
                    text-align: center;
                    padding: 30px;
                    margin: 0 auto;
                }
            }
        }
        .Cards {
            width: 652px;
            height: 492px;
            position: fixed;
            left: 50%;
            top:50%;
            z-index: 20;
            margin-left: -326px;
            margin-top: -246px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url('/imgs/careerManagement/decompose/bg_gaokao.png');
            .inputList{
                margin-top: 70px;
                padding: 0 40px;
                width: 100%;
                overflow: hidden;
                li{
                    width: 25%;
                    float: left;
                    height: 84px;
                    p{
                        line-height: 30px;
                        font-size: 14px;
                        color:#343434;
                    }
                    input{
                        width: 82px;
                        line-height: 38px;
                        height: 38px;
                        box-sizing: border-box;
                        border-radius: 5px;
                        outline: none;
                        text-indent: 10px;
                        border:1px solid #DEDEDE;
                    }
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
        .Xueqi{
            background-color: #fff;
            background-image: url('/imgs/careerManagement/decompose/bg_tianjiaxueqimubiao.png');
            border-radius: 5px;
        }
        .Xuekao{
            background-color: #fff;
            background-image: url('/imgs/careerManagement/decompose/bg_xuekao.png');
            border-radius: 5px;
            .tables2{
                padding: 70px  10px 0;
                table{
                    border-collapse: collapse;
                    border:1px solid #EAEAEA;
                    tr:nth-of-type(1){
                        background: #F3F4F8;
                    }
                    td{
                        line-height:30px;
                        border:1px solid #EAEAEA;
                        text-align: center;
                        span{
                            display: block;
                            border-bottom: 1px solid #EAEAEA;
                            background: #F3F4F8;
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
                                background-color: #FB4945;
                            }
                        }
                        input{
                            text-indent: 10px;
                        }
                    }
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
        .Jinqi{
            background-color: #fff;
            background-image: url('/imgs/careerManagement/decompose/icon_tianjiajinqimubiao.png');
            border-radius: 5px;
            .jinqiBox{
                padding: 80px  40px 0;
                p{
                    color:#333333;
                    line-height: 40px;
                }
                textarea{
                    width: 100%;
                    height: 100px;
                    border-radius: 5px;
                    outline: none;
                }
            }
        }
    }
    .noneContent{
        margin: 0 auto;
        padding: 30px 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
</style>
<style>
    .jinqiBox .el-select{
        border:1px solid #DEDEDE;
        border-radius: 5px;
        width: 140px;
    }
</style>
