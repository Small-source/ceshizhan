<template>
    <div class="universityExploration">
        <div class="parts" style="padding-bottom: 30px">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                    目标大学梯度表
                </div>
            </div>
            <div class="add addabsolute">
                <span @click="save()">保存</span>
            </div>
            <form action="">
                <div class="inputs" style="margin-left: 5px;margin-right: 40px">
                    <el-select v-model="value" placeholder="请选择"   >
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value"
                                style=" text-indent:20px"
                            >
                        </el-option>
                    </el-select>
                </div>
                <div class="inputs">
                    <input type="text" id='input' placeholder="搜索大学名称" v-model="university"  @focus="listflag=true"  @input="search" autocomplete="off"   @compositionstart="start" @compositionend="end" @keyup.enter="searchDetail('')"
                           @blur="blur"  style="text-indent: 25px">
                    <ul class="searchList" v-show="listflag">
                        <li v-for="item,index in cdata" :key="index" @click="searchDetail(item.name,item)">{{item.name}}</li>
                    </ul>
                </div>
                <div class="inputs adds" @click="addItem" >添加</div>
            </form>
            <ul class="list">
                <li>
                    <div class="title" style="margin-top: 36px">
                        目标大学
                    </div>
                    <ul class="listli">
                        <li v-for="(item,index) in listData1" :key="index">
                            <div>
                                <img  :src="item.logo" alt="">
                            </div>
                            <div class="span1">
                                <span>{{item.universityName&&item.universityName.slice(0,7)}}</span>
                                <span>{{item.universityName&&item.universityName.slice(7)}}</span>
                            </div>
                            <div class="span2">
                                <span>{{item.city}}</span>
                            </div>
                            <div class="span3">
                                <span >{{item.category}}</span>
                            </div>
                            <div class="span4">
                                <span >近3年分数线:</span>
                            </div>
                            <ul class="fenshu">
                                <li>
                                    文史:
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='文史'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='文史'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='文史'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                                <li>
                                    理工:
                                    <span  v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='理工'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='理工'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='理工'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                            </ul>
                            <div class="span5">
                                <span  class="icon2 icon" @click="delConfirm(item.id,$event,index,'1')"></span>
                            </div>
                        </li>
                        <div class="noneContent" v-if="listData1.length==0"></div>
                    </ul>
                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="title">
                        提高5分
                    </div>
                    <ul class="listli">
                        <li v-for="(item,index) in listData2" :key="index">
                            <div>
                                <img  :src="item.logo" alt="">
                            </div>
                            <div class="span1">
                                <span>{{item.universityName&&item.universityName.slice(0,7)}}</span>
                                <span>{{item.universityName&&item.universityName.slice(7)}}</span>
                            </div>
                            <div class="span2">
                                <span>{{item.city}}</span>
                            </div>
                            <div class="span3">
                                <span >{{item.category}}</span>
                            </div>
                            <div class="span4">
                                <span >近3年分数线:</span>
                            </div>
                            <ul class="fenshu">
                                <li>
                                    文史:
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='文史'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='文史'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='文史'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                                <li>
                                    理工:
                                    <span  v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='理工'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='理工'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='理工'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                            </ul>
                            <div class="span5">
                                <span  class="icon2 icon" @click="delConfirm(item.id,$event,index,'2')"></span>
                            </div>
                        </li>
                        <div class="noneContent" v-if="listData2.length==0"></div>
                    </ul>

                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="title">
                        提高10分
                    </div>
                    <ul class="listli">
                        <li v-for="(item,index) in listData3" :key="index">
                            <div>
                                <img  :src="item.logo" alt="">
                            </div>
                            <div class="span1">
                                <span>{{item.universityName&&item.universityName.slice(0,7)}}</span>
                                <span>{{item.universityName&&item.universityName.slice(7)}}</span>
                            </div>
                            <div class="span2">
                                <span>{{item.city}}</span>
                            </div>
                            <div class="span3">
                                <span >{{item.category}}</span>
                            </div>
                            <div class="span4">
                                <span >近3年分数线:</span>
                            </div>
                            <ul class="fenshu">
                                <li>
                                    文史:
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='文史'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='文史'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}<</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='文史'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                                <li>
                                    理工:
                                    <span  v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='理工'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='理工'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='理工'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                            </ul>
                            <div class="span5">
                                <span  class="icon2 icon" @click="delConfirm(item.id,$event,index,'3')"></span>
                            </div>
                        </li>
                        <div class="noneContent" v-if="listData3.length==0"></div>
                    </ul>
                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="title">
                        提高20分
                    </div>
                    <ul class="listli">
                        <li v-for="(item,index) in listData4" :key="index">
                            <div>
                                <img  :src="item.logo" alt="">
                            </div>
                            <div class="span1">
                                <span>{{item.universityName&&item.universityName.slice(0,7)}}</span>
                                <span>{{item.universityName&&item.universityName.slice(7)}}</span>
                            </div>
                            <div class="span2">
                                <span>{{item.city}}</span>
                            </div>
                            <div class="span3">
                                <span >{{item.category}}</span>
                            </div>
                            <div class="span4">
                                <span >近3年分数线:</span>
                            </div>
                            <ul class="fenshu">
                                <li>
                                    文史:
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='文史'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='文史'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}<</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='文史'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                                <li>
                                    理工:
                                    <span  v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='理工'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='理工'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='理工'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                            </ul>
                            <div class="span5">
                                <span  class="icon2 icon" @click="delConfirm(item.id,$event,index,'4')"></span>
                            </div>
                        </li>
                        <div class="noneContent" v-if="listData4.length==0"></div>
                    </ul>
                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="title">
                        提高30分
                    </div>
                    <ul class="listli">
                        <li v-for="(item,index) in listData5" :key="index">
                            <div>
                                <img  :src="item.logo" alt="">
                            </div>
                            <div class="span1">
                                <span>{{item.universityName&&item.universityName.slice(0,7)}}</span>
                                <span>{{item.universityName&&item.universityName.slice(7)}}</span>
                            </div>
                            <div class="span2">
                                <span>{{item.city}}</span>
                            </div>
                            <div class="span3">
                                <span >{{item.category}}</span>
                            </div>
                            <div class="span4">
                                <span >近3年分数线:</span>
                            </div>
                            <ul class="fenshu">
                                <li>
                                    文史:
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='文史'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='文史'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='文史'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                                <li>
                                    理工:
                                    <span  v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='理工'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='理工'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='理工'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                            </ul>
                            <div class="span5">
                                <span  class="icon2 icon" @click="delConfirm(item.id,$event,index,'5')"></span>
                            </div>
                        </li>
                        <div class="noneContent" v-if="listData5.length==0"></div>
                    </ul>
                </li>
            </ul>
            <ul class="list">
                <li>
                    <div class="title">
                        提高40分
                    </div>
                    <ul class="listli">
                        <li v-for="(item,index) in listData6" :key="index">
                            <div>
                                <img  :src="item.logo" alt="">
                            </div>
                            <div class="span1">
                                <span>{{item.universityName&&item.universityName.slice(0,7)}}</span>
                                <span>{{item.universityName&&item.universityName.slice(7)}}</span>
                            </div>
                            <div class="span2">
                                <span>{{item.city}}</span>
                            </div>
                            <div class="span3">
                                <span >{{item.category}}</span>
                            </div>
                            <div class="span4">
                                <span >近3年分数线:</span>
                            </div>
                            <ul class="fenshu">
                                <li>
                                    文史:
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='文史'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='文史'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='文史'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                                <li>
                                    理工:
                                    <span  v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2019&&it.artsAndScience=='理工'">
                                        <i>(2019)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2018&&it.artsAndScience=='理工'">
                                        <i>(2018)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                    <span v-for="(it,index) in item.scoreLine" :key='index' v-if="it.year==2017&&it.artsAndScience=='理工'">
                                        <i>(2017)</i>:
                                        <a>{{it.averageScore}}</a>
                                    </span>
                                </li>
                            </ul>
                            <div class="span5">
                                <span  class="icon2 icon" @click="delConfirm(item.id,$event,index,'6')"></span>
                            </div>
                        </li>
                        <div class="noneContent" v-if="listData6.length==0"></div>
                    </ul>
                </li>
            </ul>
            <div class="save" @click="save()">
                保存
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "universityTable",
        data(){
            return{
                options:[
                    {value:"目标大学"},
                    {value:"提高5分"},
                    {value:"提高10分"},
                    {value:"提高20分"},
                    {value:"提高30分"},
                    {value:"提高40分"}
                ],
                value:'目标大学',
                university:'',
                cdata:'',
                listflag:'',
                flag:true,
                count:1,
                listData:[],
                nowId:'',
                editFlag:false,
                oldId:'',
                ids:[],
                names:'北京大学一二三四五六七八九十一热三四',
                listData1:[],
                listData2:[],
                listData3:[],
                listData4:[],
                listData5:[],
                listData6:[],
                targetData:[],
                listDataAdd:{
                    1:[],
                    2:[],
                    3:[],
                    4:[],
                    5:[],
                    6:[]
                }
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.list(val)
            },
            //搜索内容
            search(){
                if(this.flag){
                    let _this=this;
                    this.$ajax.post(this.G_uri +this.ports.target.getUniversity, {
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
            searchDetail(name,data) {
                $('#input')[0].blur();
                let _this = this;
                this.listflag = false;
                if (name) {
                    this.university = name
                    this.targetData=[data]
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
            list(){
                let _this=this
                this.$ajax.post(this.G_uri +this.ports.target.list, {

                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    if(res.data.code==2000) {
                        let data=res.data.data;
                        if(data[1]){
                            _this.listData1=data[1]
                        }
                        if(data[2]){
                            _this.listData2=data[2]
                        }
                        if(data[3]){
                            _this.listData3=data[3]
                        }
                        if(data[4]){
                            _this.listData4=data[4]
                        }
                        if(data[5]){
                            _this.listData5=data[5]
                        }
                        if(data[6]){
                            _this.listData6=data[6]
                        }
                    }
                })
            },
            //保存和修改
            save(id){
                let _this=this;
                let datas=JSON.parse(JSON.stringify(this.listDataAdd))
                let listDatas=[...this.listData1,...this.listData2,...this.listData3,...this.listData4,...this.listData5,...this.listData6]
                listDatas.forEach(item=>{
                        delete item.logo
                        if(item.module==1){
                            delete item.module
                            datas[1].push(item)
                        }
                        if(item.module==2){
                            delete item.module
                            datas[2].push(item)
                        }
                        if(item.module==3){
                            delete item.module
                            datas[3].push(item)
                        }
                        if(item.module==4){
                            delete item.module
                            datas[4].push(item)
                        }
                        if(item.module==5){
                            delete item.module
                            datas[5].push(item)
                        }
                        if(item.module==6){
                            delete item.module
                            datas[6].push(item)
                        }
                })
                datas[1].length==0&&delete datas[1]
                datas[2].length==0&&delete datas[2]
                datas[3].length==0&&delete datas[3]
                datas[4].length==0&&delete datas[4]
                datas[5].length==0&&delete datas[5]
                datas[6].length==0&&delete datas[6]
                this.$ajax.post(this.G_uri +this.ports.target.add,{
                    data:datas
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
                    }else{
                        _this.$message.error(res.data.msg);
                    }
                })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            //
            del(id,e,index,type){
                let _this=this
                if(!id){
                    if(type=='1'){
                      this.listData1.splice(index,1)
                    }
                    if(type=='2'){
                        this.listData2.splice(index,1)
                    }
                    if(type=='3'){
                        this.listData3.splice(index,1)
                    }
                    if(type=='4'){
                        this.listData4.splice(index,1)
                    }
                    if(type=='5'){
                        this.listData5.splice(index,1)
                    }
                    if(type=='6'){
                        this.listData6.splice(index,1)
                    }
                    return
                }
                this.$ajax.post(this.G_uri +this.ports.target.del, {
                    id:id
                }, {
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(function(res) {
                    if(res.data.code==2000) {
                        if(type=='1'){
                            _this.listData1.splice(index,1)
                        }
                        if(type=='2'){
                            _this.listData2.splice(index,1)
                        }
                        if(type=='3'){
                            _this.listData3.splice(index,1)
                        }
                        if(type=='4'){
                            _this.listData4.splice(index,1)
                        }
                        if(type=='5'){
                            _this.listData5.splice(index,1)
                        }
                        if(type=='6'){
                            _this.listData6.splice(index,1)
                        }
                    }
                })
            },
            clear(){
                this.university=""
                this.type=""
                this.nowId=""
                this.oldId=""
            },
            //删除确认
            delConfirm(id,e,index,type){
                this.$confirm('内容删除后将无法恢复,是否删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.del(id,e,index,type);
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
            addItem(){
                if(this.university){
                    if(this.targetData.length>0){
                        this.targetData[0].universityId=this.targetData[0].id
                        this.targetData[0].universityName=this.targetData[0].name
                        this.targetData[0].category=this.targetData[0].type
                        this.targetData[0].scoreLine=this.targetData[0].list
                        delete this.targetData[0].id;
                        delete this.targetData[0].name;
                        delete this.targetData[0].type;
                        delete this.targetData[0].province;
                        delete this.targetData[0].list;
                        console.log(this.targetData)
                        if(this.value=='目标大学'){
                            var len=this.listData1.length
                            this.targetData[0].module=1;
                            this.$set(this.listData1,len,JSON.parse(JSON.stringify(this.targetData))[0])
                        }
                        if(this.value=='提高5分'){
                            var len=this.listData2.length
                            this.targetData[0].module=2;
                            this.$set(this.listData2,len,JSON.parse(JSON.stringify(this.targetData))[0])
                        }
                        if(this.value=='提高10分'){
                            var len=this.listData3.length
                            this.targetData[0].module=3;
                            this.$set(this.listData3,len,JSON.parse(JSON.stringify(this.targetData))[0])
                        }
                        if(this.value=='提高20分'){
                            var len=this.listData4.length
                            this.targetData[0].module=4;
                            this.$set(this.listData4,len,JSON.parse(JSON.stringify(this.targetData))[0])
                        }
                        if(this.value=='提高30分'){
                            var len=this.listData5.length
                            this.targetData[0].module=5;
                            this.$set(this.listData5,len,JSON.parse(JSON.stringify(this.targetData))[0])
                        }
                        if(this.value=='提高40分'){
                            var len=this.listData6.length
                            this.targetData[0].module=6;
                            this.$set(this.listData6,len,JSON.parse(JSON.stringify(this.targetData))[0])
                        }
                    }
                    this.university=''
                }
            }
        },
        created(){
            this.list();
        }
    }
</script>
<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .universityExploration {
        padding-left: 20px;
        .pages {
            text-align: center;
        }
        .tables2 {
            padding: 60px 0 20px;

            table {
                border-collapse: collapse;
                border: 1px solid #EAEAEA;

                tr:nth-of-type(1) {
                    background: #F3F4F8;
                }

                td {
                    line-height: 40px;
                    height: 40px;
                    border: 1px solid #EAEAEA;
                    text-align: center;
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
                    .finshed {
                        width: 60px;
                        height: 20px;
                        display: inline-block;
                        background: #F3F4F8;
                        color: #666666;
                        position: relative;
                        top: 0px;
                        line-height: 20px;
                        cursor: pointer;
                        font-size: 12px;
                    }
                    span {
                        color: #3D90F6;
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
            .addabsolute{
                position: absolute;
                right: 20px;
                top:20px;
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
            form {
                width: 100%;
                margin-top: 40px;
                height: 30px;
                .inputs {
                    min-width: 125px;
                    line-height: 30px;
                    height: 30px;
                    float: left;
                    /*width: 50%;*/
                }

                .noSelected {
                    div {
                        display: inline-block !important;
                        width: 192px;
                        height: 38px;
                    }
                }

                span {
                    display: inline-block;
                    min-width: 84px;
                    text-align: right;
                    margin-right: 12px;
                    font-weight: bolder;

                    i {
                        color: #F80001;
                        position: relative;
                        top: 2px;
                        left: -3px;
                    }
                }

                input {
                    width: 190px;
                    height: 30px;
                    border-radius: 3px;
                    border: 1px solid #DEDEDE;
                    display: inline-block;
                    text-indent: 10px;
                }
            }
            textarea {
                padding: 10px;
                height: 112px;
                text-indent: 16px;
            }
            .save {
                width: 110px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                font-size: 16px;
                color: #FEFFFF;
                background: #3B91F4;
                margin: 40px auto 20px;
                border-radius: 5px;
                cursor: pointer;
            }
            .searchList {
                position: absolute;
                left: 0px;
                top: 30px;
                width: 190px;
                max-height: 230px;
                overflow-y: auto;
                z-index: 9999;
            }
            .searchList > li {
                line-height: 40px;
                padding-left: 16px;
                background: #F5F7F6;
                color: #333333;

                &:hover {
                    background: #E1ECF7;
                }

                font-size: 12px;
                cursor: pointer;
            }
            .showContent {
                margin-right: 5px;
            }
            input:disabled {
                background: #F5F7FA;
                color: #C0C4CC;
            }
            textarea:disabled {
                background: #F5F7FA;
                color: #C0C4CC;
            }
            .addabsolute {
                position: absolute;
                right: 20px;
                top: 20px;
            }
            .icon {
                display: inline-block;
                width: 34px;
                height: 20px;
                border-radius: 3px;
                cursor: pointer;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url("/imgs/schoolWork/icon_bianjihui.png");

                &:hover {
                    background-image: url("/imgs/schoolWork/icon_bianjibai.png");
                    background-color: #3087E6;
                }
            }

            .icon2 {
                background-image: url("/imgs/schoolWork/icon_lajitonghui.png");

                &:hover {
                    background-image: url("/imgs/schoolWork/icon_lajitongbai.png");
                    background-color: #FB4945 ;
                }
            }
            .delright {
                position: absolute;
                bottom: 20px;
                right: 20px;
            }

            .adds {
                width: 60px !important;
                text-align: center;
                background: #3A90F3;
                color: #fff;
                min-width: 0 !important;
                margin-left: 15px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
        .list{

        }
        .list>li{}
        .list>li>.title{
            width: 100%;
            line-height: 36px;
            height: 36px;
            background: #F3F4F8;
            font-size: 16px;
            color:#333;
            border-radius: 5px;
            text-indent: 10px;
        }
        .listli{
            padding: 10px 0;
        }
        .listli>li{
            border-bottom: 1px solid #E3E4E4;
            padding: 15px 0;
            font-size: 14px;
            overflow: hidden;
            width: 920px;
            &:last-child{
                border-bottom: none;
            }
            div,ul{
                float: left;
                height: 60px;
                line-height: 30px;
                img{
                    width: 30px;
                }
            }
            .span1{
                width: 109px;
                margin-left:10px;
                span{
                    display: block;
                    overflow: hidden;
                    width: 100%;
                    height: 30px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .span2,.span3,.span4{
                margin-left:40px;
            }
            .span4{
                color:#3C91F4;
            }
            .span5{
                height: 40px;
                line-height: 36px;
            }
            .fenshu{
                width: 410px;
                margin-left:20px;
                span{
                    margin-right: 20px;
                }
                i{
                    font-style: normal;
                    color:#666;
                    letter-spacing: 0;
                }
                a{
                    color:#333;
                }
            }
        }
    }
    .noneContent{
        margin: 0 auto;
        padding: 0;
        width: 126px;
        height:120px;
        background: url("/imgs/careerManagement/careerAnchor/noneContent.png") no-repeat center;
    }
</style>
<style lang="less">
    #birthday{
        .el-input__inner{
            padding-left: 20px;
        }
    }
    .universityExploration{
        .el-input__icon{
            line-height: 30px;
        }
        .inputs{
            position: relative;
            input{
                width: 125px;
                height: 30px;
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
            width: 125px;
            height: 30px;
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
<style>
</style>
