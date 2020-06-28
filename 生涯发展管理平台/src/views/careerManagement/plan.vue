<template>
    <div class="careerAnchor" id="plan">
        <div class="careerAnchorBox ">
            <masks v-show="Dayjihuatanchuang||weekjihuatanchuang||showyuejihuatanchuang||yuejihuatanchuang||false"></masks>
            <!-- <img src="imgs/careerManagement/careerAnchor/banner.png" alt="" class="banner"> -->
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        月计划
                    </div>
                    <h3>
                        <img src="imgs/careerManagement/plan/icon.png" alt="">
                        当前月计划
                        <span  style="margin-left: 30px" @click="nowShow()">编辑</span>
                        <span  style="" @click="yuejihuatanchuang=true">新增</span>
                    </h3>
                </div>
                <div class="tables2" >
                    <table>
                        <tr>
                            <td>标题</td>
                            <td>目标内容</td>
                            <td>内容困难</td>
                            <td>达成策略与行为管理措施(奖惩)</td>
                        </tr>
                        <tr v-if="YuenowData.length!=0">
                            <td>{{YuenowData.title}}</td>
                            <td>{{YuenowData.target}}</td>
                            <td>{{YuenowData.content}}</td>
                            <td>{{YuenowData.measure}}</td>
                        </tr>
                    </table>
                </div>
                <div class="noneContent" v-if="YuenowData.length==0"></div>
                <h3>
                    <img src="imgs/careerManagement/plan/icon.png" alt="">
                    曾经月计划
                </h3>
                <p style='line-height: 14px'>添加新的月计划时，当前月计划（包括当前月的周计划和日计划）会自动收集到曾经月计划中。</p>
                <div class="tables2"  style="padding-top: 20px">
                    <table>
                        <tr>
                            <td>标题</td>
                            <td>最后编辑时间</td>
                            <td>日期</td>
                            <td>查看</td>
                            <td>删除</td>
                        </tr>
                        <tr v-for="item in YueonceData" >
                            <td>{{item.title}}</td>
                            <td>{{item.updatedAt}}</td>
                            <td>{{item.createdAt}}</td>
                            <td>
                                <span @click="showonce(item.id)">查看</span>
                            </td>
                            <td class="icon">
                                <span @click="delonce(item.id)"></span>
                            </td>
                        </tr>
                    </table>
                </div>
                <el-pagination v-if="YueonceData.length!=0"
                               background
                               @current-change="currentChange"
                               :page-size="pageSize"
                               layout="prev, pager, next"
                               :total="total"
                               class="pages"
                >
                </el-pagination>
                <div class="noneContent" v-if="YueonceData.length==0"></div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        周计划
                    </div>
                    <h3>
                        <img src="imgs/careerManagement/plan/icon.png" alt="">
                        当前月计划的周计划
                        <span  style="margin-left: 30px" @click="weekjihuatanchuang=true">编辑</span>
                    </h3>
                </div>
                <div class="tables2" >
                    <table>
                        <tr>
                            <td>标题</td>
                            <td>学科学习方面</td>
                            <td>其他方面</td>
                            <td>备注</td>
                        </tr>
                        <tr v-for="item in weekData">
                            <td>{{Month}}月第{{numbers[item.week]}}周计划</td>
                            <td>{{item.subjectLearning}}</td>
                            <td>{{item.otherAspects}}</td>
                            <td>{{item.remark}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="parts">
                <div class="top">
                    <div class="title">
                        <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                        日计划
                    </div>
                    <h3>
                        <img src="imgs/careerManagement/plan/icon.png" alt="">
                        当前月计划的日计划
                        <span  style="margin-left: 30px" @click="Dayjihuatanchuang=true">编辑</span>
                    </h3>
                </div>
                <ul class="listNav">
                    <li @click="tabs(0)" :class="Daybool[0]&&'listActive'">第一周</li>
                    <li @click="tabs(1)" :class="Daybool[1]&&'listActive'">第二周</li>
                    <li @click="tabs(2)" :class="Daybool[2]&&'listActive'">第三周</li>
                    <li @click="tabs(3)" :class="Daybool[3]&&'listActive'">第四周</li>
                </ul>
                <div class="tables2" >
                    <table >
                        <tr>
                            <td>日期</td>
                            <td>今天我要完成的目标</td>
                            <td>完成保障措施</td>
                            <td>是否完成</td>
                        </tr>
                        <tr v-for="item in DayData1" v-if="Daybool[0]">
                            <td>{{item.date}}</td>
                            <td>{{item.completeTargetToday}}</td>
                            <td>{{item.completeSafeguards}}</td>
                            <td class="wanchang">
                                <span class="weiwancheng" v-if="item.isOver!=1" @click="(item.date||item.completeSafeguards||item.completeSafeguards)&&finish(item.id)"></span>
                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.isOver==1">
                            </td>
                        </tr>
                        <tr v-for="item in DayData2" v-if="Daybool[1]">
                            <td>{{item.date}}</td>
                            <td>{{item.completeTargetToday}}</td>
                            <td>{{item.completeSafeguards}}</td>
                            <td class="wanchang">
                                <span class="weiwancheng" v-if="item.isOver!=1" @click="(item.date||item.completeSafeguards||item.completeSafeguards)&&finish(item.id)"></span>
                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.isOver==1">
                            </td>
                        </tr>
                        <tr v-for="item in DayData3" v-if="Daybool[2]">
                            <td>{{item.date}}</td>
                            <td>{{item.completeTargetToday}}</td>
                            <td>{{item.completeSafeguards}}</td>
                            <td class="wanchang">
                                <span class="weiwancheng" v-if="item.isOver!=1" @click="(item.date||item.completeSafeguards||item.completeSafeguards)&&finish(item.id)"></span>
                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.isOver==1">
                            </td>
                        </tr>
                        <tr v-for="item in DayData4" v-if="Daybool[3]">
                            <td>{{item.date}}</td>
                            <td>{{item.completeTargetToday}}</td>
                            <td>{{item.completeSafeguards}}</td>
                            <td class="wanchang">
                                <span class="weiwancheng" v-if="item.isOver!=1" @click="(item.date||item.completeSafeguards||item.completeSafeguards)&&finish(item.id)"></span>
                                <img src="imgs/careerManagement/decompose/wancheng.png" alt="" v-if="item.isOver==1">
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="addTests" v-show="yuejihuatanchuang">
            <img src="imgs/careerManagement/plan/bg_yue.png" alt="">
            <div class="tables">
                <table>
                    <tr>
                        <td>标题</td>
                        <td>目标内容</td>
                        <td>内容困难</td>
                        <td>达成策略与行为管理措施(奖惩)</td>
                    </tr>
                    <tr>
                        <td>
                            <textarea  v-model="Yuetitle"></textarea>
                        </td>
                        <td>
                            <textarea  v-model="Yuetarget"></textarea>
                        </td>
                        <td>
                            <textarea v-model="Yuecontent"></textarea>
                        </td>
                        <td>
                            <textarea v-model="Yuemeasure"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="save" @click="nowAdd(),clearData()">
                保存
            </div>
            <div class="close" @click="yuejihuatanchuang=false, clearData()"></div>
        </div>
        <div class="addTests" v-show="showyuejihuatanchuang">
            <div class="head">查看曾经月计划</div>
            <img src="imgs/careerManagement/plan/icon_head.png" alt="">
            <div class="tables">
                <table>
                    <tr>
                        <td>标题</td>
                        <td>目标内容</td>
                        <td>内容困难</td>
                        <td>达成策略与行为管理措施(奖惩)</td>
                    </tr>
                    <tr>
                        <td>
                            {{showYueData.title||''}}
                        </td>
                        <td>
                            {{showYueData.target||''}}
                        </td>
                        <td>
                            {{showYueData.content||''}}
                        </td>
                        <td>
                            {{showYueData.measure||''}}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="close" @click="showyuejihuatanchuang=false, clearData()"></div>
        </div>
        <div class="addTests week" v-show="weekjihuatanchuang">
            <img src="imgs/careerManagement/plan/bg_zhou.png" alt="">
            <div class="tables2 ">
                <table>
                    <tr>
                        <td>标题</td>
                        <td>学科学习方面</td>
                        <td>其他方面</td>
                        <td>备注</td>
                    </tr>
                    <tr v-for="item in weekData">
                        <td>
                            {{Month}}月第{{numbers[item.week]}}周计划
                        </td>
                        <td>
                            <textarea v-model="item.subjectLearning"></textarea>
                        </td>
                        <td>
                            <textarea v-model="item.otherAspects"></textarea>
                        </td>
                        <td>
                            <textarea v-model="item.remark"></textarea>
                        </td>
                    </tr>
                </table>
                <div class="save" @click="setweek()">保存</div>
                <div class="close" @click="weekjihuatanchuang=false,clearData()"></div>
            </div>
        </div>
        <div class="addTests Days" v-show="Dayjihuatanchuang">
            <div class="head">添加/编辑日计划</div>
            <img src="imgs/careerManagement/plan/icon_head.png" alt="" style="height: 60px">
            <div class="tables2" style="padding: 0 10px">
                <ul class="listNav">
                    <li @click="tabs(0)" :class="Daybool[0]&&'listActive'">第一周</li>
                    <li @click="tabs(1)" :class="Daybool[1]&&'listActive'">第二周</li>
                    <li @click="tabs(2)" :class="Daybool[2]&&'listActive'">第三周</li>
                    <li @click="tabs(3)" :class="Daybool[3]&&'listActive'">第四周</li>
                </ul>
                <table >
                    <tr>
                        <td>日期</td>
                        <td>今天我要完成的目标</td>
                        <td>完成保障措施</td>
                    </tr>
                    <tr v-for="item in DayData1" v-if="Daybool[0]">
                        <td>
                            <el-date-picker
                                    v-model="item.date"
                                    type="date"
                                    placeholder="选择日期"
                                    value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                        </td>
                        <td>
                            <textarea v-model="item.completeTargetToday">

                            </textarea>
                        </td>
                        <td>
                            <textarea v-model="item.completeSafeguards">

                            </textarea>
                        </td>
                    </tr>
                    <tr v-for="item in DayData2" v-if="Daybool[1]">
                        <td>
                            <el-date-picker
                                    v-model="item.date"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </td>
                        <td>
                            <textarea v-model="item.completeTargetToday">

                            </textarea>
                        </td>
                        <td>
                            <textarea v-model="item.completeSafeguards">

                            </textarea>
                        </td>
                    </tr>
                    <tr v-for="item in DayData3" v-if="Daybool[2]">
                        <td>
                            <el-date-picker
                                    v-model="item.date"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </td>
                        <td>
                            <textarea v-model="item.completeTargetToday">

                            </textarea>
                        </td>
                        <td>
                            <textarea v-model="item.completeSafeguards">

                            </textarea>
                        </td>
                    </tr>
                    <tr v-for="item in DayData4" v-if="Daybool[3]">
                        <td>
                            <el-date-picker
                                    v-model="item.date"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </td>
                        <td>
                            <textarea v-model="item.completeTargetToday">

                            </textarea>
                        </td>
                        <td>
                            <textarea v-model="item.completeSafeguards">

                            </textarea>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="save" @click="setDays()">保存</div>
            <div class="close" @click="Dayjihuatanchuang=false,clearData()"></div>
        </div>
    </div>
</template>

<script>
    import  masks from '../../components/mask.vue'
    export default {
        name: "plane",
        components:{masks},
        data(){
            return {
                activeName: 'first',
                yuejihuatanchuang:false,
                showyuejihuatanchuang:false,
                weekjihuatanchuang:false,
                Dayjihuatanchuang:false,
                //月计划
                Yuetitle:'', // 标题
                Yuetarget:'',//目标内容
                Yuecontent:'',//内容困难
                Yuemeasure:'',//措施
                YueID:'',
                YuenowData:[],
                YueonceData:[],
                Month:new Date().getMonth()+1,
                showYueData:{},
                //月计划分页
                pageNumber:1,//当前页码
                pageSize:10,//每页大小
                total:0,//总条数,
                currentPage:1,
                numbers:[null,'一','二','三','四'],
                weekData:[
                    {
                        week:1,
                        subjectLearning:'',
                        otherAspects:'',
                        remark:''
                    },
                    {
                        week:2,
                        subjectLearning:'',
                        otherAspects:'',
                        remark:''
                    },
                    {
                        week:3,
                        subjectLearning:'',
                        otherAspects:'',
                        remark:''
                    },
                    {
                        week:4,
                        subjectLearning:'',
                        otherAspects:'',
                        remark:''
                    }
                ],
                DayData1:[
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:1,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    }
                ],
                DayData2:[
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:2,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    }
                ],
                DayData3:[
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:3,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    }
                ],
                DayData4:[
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    },
                    {
                        week:4,
                        date:'',
                        completeTargetToday:'',
                        completeSafeguards:''
                    }
                ],
                Daybool:[true,false,false,false]
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
            //清空数据
            clearData(){
                this.Yuetitle='';
                this.Yuetarget='';
                this.Yuecontent='';
                this.Yuemeasure='';
                this.YueID='';
            },
            //添加编辑当月计划
            nowAdd(){
                let _this=this;
                if(!this.Yuetitle){
                    this.warning('标题不能为空')
                }
                if(!this.YueID){
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.nowAdd,{
                        title:this.Yuetitle,
                        target:this.Yuetarget,
                        content:this.Yuecontent,
                        measure:this.Yuemeasure
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                         _this.nowList();
                         _this.onceList(1,this.pageSize);
                         _this.yuejihuatanchuang=false;
                        }
                    })
                }else{
                    this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.nowEdit,{
                        id:this.YueID,
                        title:this.Yuetitle,
                        target:this.Yuetarget,
                        content:this.Yuecontent,
                        measure:this.Yuemeasure
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then((res)=>{
                        if(res.data.code==2000){
                            _this.nowList();
                            _this.onceList(1,this.pageSize);
                            _this.yuejihuatanchuang=false;
                        }
                    })
                }
            },
            //获取当月计划列表
            nowList(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.nowlist,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        if(res.data.data.length!=0){
                            _this.YuenowData=res.data.data;
                        }
                    }
                })
            },
            //查看当月计划
            nowShow(){
                this.Yuetitle=this.YuenowData.title||'';
                this.Yuetarget=this.YuenowData.target||'';
                this.Yuecontent=this.YuenowData.content||'';
                this.measure=this.YuenowData.measure||'';
                this.YueID=this.YuenowData.id||'';
                this.yuejihuatanchuang=true;
            },
            //获取曾经月计划列表
            onceList(pageNumber,pageSize){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.oncelist,{
                    pageNumber:pageNumber||1,
                    pageSize:pageSize||10
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.YueonceData=res.data.data.list;
                        _this.total=res.data.data.page.count;
                    }
                })
            },
            //当曾经月计划分页页面变化
            currentChange(num) {
                this.currentPage = num;
                this.onceList(num,this.pageSize);
            },
            //删除曾经月计划
            delonce(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.oncedel,{
                   id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.onceList(1,this.pageSize);
                    }
                })
            },
            //查看曾经月计划
            showonce(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.onceshow,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.showYueData=res.data.data;
                        _this.showyuejihuatanchuang=true;
                    }
                })
            },
            //添加、编辑当月周计划
            setweek(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.setweek,{
                    data:_this.weekData
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.weekjihuatanchuang=false;
                    }
                })
            },
            //获取当月周计划
            getweek(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.getweek,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        if(res.data.data.length!=0){
                            _this.weekData=res.data.data;
                        }
                    }
                })
            },
            //日计划选项卡
            tabs(index){
                this.Daybool=[false,false,false,false]
                this.Daybool[index]=true
            },
            //获取日计划
            getDays(){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.getDays,{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data=res.data.data;
                        if(data[1]&&data[1].length!=0){
                            _this.DayData1=data[1]
                            _this.DayData2=data[2]
                            _this.DayData3=data[3]
                            _this.DayData4=data[4]
                        }
                    }
                })
            },
            //添加/编辑日计划
            setDays(){
                let _this=this;
                let data=[...this.DayData1,...this.DayData2,...this.DayData3,...this.DayData4];
                data.forEach(item=>{
                    delete item.id;
                })
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.setDays,{
                    data:data
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        _this.getDays()
                        _this.DayData1=[];
                        _this.DayData2=[];
                        _this.DayData3=[];
                        _this.DayData4=[];
                        _this.Dayjihuatanchuang=false;
                    }else{
                        _this.warning(res.data.msg)
                        _this.Dayjihuatanchuang=false;
                    }
                })
            },
            //日计划点击完成
            finish(id){
                let _this=this;
                this.$ajax.post(this.G_uri+this.ports.careerManagement.mounthplan.finish,{
                    id:id
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                      _this.getDays();
                    }
                })
            }

        },
        created(){
            this.nowList();
            this.onceList(1,this.pageSize);
            this.getweek();
            this.getDays();
        },
        mounted(){
        }
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
                        top: 20px;
                        color: #fff;
                        cursor: pointer;
                        font-size: 14px;
                    }
                }
                .weiwancheng{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url("/imgs/careerManagement/plan/icon_duigouhui.png");
                    position: relative;
                    top:5px;
                    &:hover{
                        background: url("/imgs/careerManagement/plan/icon_duigoulan.png");
                    }
                }
                & > p {
                    padding-left: 40px;
                    line-height: 60px;
                    color: #666;
                }
                h3 {
                    font-size: 15px;
                    color: #333;
                    line-height: 70px;
                }
            }
            .pages{
                text-align: center;
                padding: 30px;
                margin: 0 auto;
            }
            .icon{
               span{
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
                     background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
                    &:hover{
                            background-image:url("/imgs/schoolWork/icon_lajitongbai.png") ;
                            background-color: #3087E6;
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
        .tables2{
            padding:0  0  20px;
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
                            background-image:url("/imgs/schoolWork/icon_bianjibai.png");
                            background-color:#3087E6;
                        }
                    }
                    .icon2{
                        background-image:url("/imgs/schoolWork/icon_lajitonghui.png");
                        &:hover{
                            background-image:url("/imgs/schoolWork/icon_lajitongbai.png");
                            background-color: #FB4945;;
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
    }
    .noneContent{
        margin: 0 auto;
        padding: 30px 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
</style>
<style scoped lang="less">
    .addTests{
        &>img{
            display: block;
            width: 100%;
            margin-bottom: 22px;
        }
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -326px;
        margin-top: -165px;
        width: 652px;
        height: 330px;
        z-index: 20;
        background-repeat: no-repeat;
        background-color: white;
        background-position: 0 -1px;
        border-radius: 5px;
        .tables{
            padding: 0 20px;
        }
        .head{
            position: absolute;
            top: 0;
            left: 0;
            line-height: 60px;
            text-align: center;
            background: none;
            width: 100%;
            font-size: 20px;
            color:#fff;
            letter-spacing: 2px;
        }
        table{
            tr:first-child{
                background: #F3F4F8;
                td{

                }
            }
            td{
                border:1px solid #DDDFDE;
                text-align: center;
                height: 80px;
                textarea{
                    width: 100%;
                    height: 100%;
                    border:none
                }
            }
        }
        .tables{

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
    .week{
        width: 700px;
        margin-left: -350px;
        height: 580px;
        margin-top: -290px;
        background: #fff;
        .tables2{
            padding: 0 15px;
            td{
                textarea{
                    box-sizing: border-box;
                    padding: 10px;
                    width: 100%;
                    background: none;
                }
            }
        }
    }
    .Days{
        width: 960px;
        height: 550px;
        margin-left: -430px;
        margin-top: -275px;
        textarea{
            background: none ;
            display: block;
        }
        td:first-child{
            width: 100px;
            text-align: center;
        }
    }
    .listNav{
        width: 266px;
        display: flex;
        justify-content: space-between;
        li{
            width: 56px;
            height: 24px;
            border-radius:5px;
            color:#4B9FF7;
            text-align: center;
            line-height: 24px;
            font-size: 13px;
            cursor: pointer;
        }
        .listActive{
            background: #4E9FFA;
            color: white;
        }
        margin-bottom: 20px;
    }
</style>
<style>
    #plan .el-date-editor{
        width: 160px;
    }
</style>
