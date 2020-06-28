<template>
    <div id="subject">
        <div class="subjectTop">
            <div class="searchBox">
                <input type="text" placeholder="搜索你感兴趣的专业" v-model="subjectName" @keyup.enter="search(1)">
                <div class="search" @click="search(1)"></div>
            </div>
            <ul class="list">
                <li>
                    <span>学科要求></span>
                    <ul class="change" v-if="typeSubject==2" id="threeThree">
                        <div class="subjectColor1">
                          科目:
                        </div>
                        <li class="changeFirst" style="display: none">
                            <input type="checkbox"  value="无选科要求" @change="xuekeChange1($event)" >
                            <span>无选科要求</span>
                        </li>
                        <li>
                            <input type="checkbox" value="物理" @change="xuekeChange1($event)">
                            <span>物理</span>
                        </li>
                        <li>
                            <input type="checkbox" value="化学" @change="xuekeChange1($event)">
                            <span>化学</span>
                        </li>
                        <li>
                            <input type="checkbox" value="生物" @change="xuekeChange1($event)">
                            <span>生物</span>
                        </li>
                        <li>
                            <input type="checkbox"  value="思想政治" @change="xuekeChange1($event)">
                            <span>思想政治</span>
                        </li>
                        <li>
                            <input type="checkbox" value="历史" @change="xuekeChange1($event)">
                            <span>历史</span>
                        </li>
                        <li>
                            <input type="checkbox" value="地理" @change="xuekeChange1($event)">
                            <span>地理</span>
                        </li>
                        <li v-if="city=='浙江'">
                            <input type="checkbox"  value="技术" @change="xuekeChange1($event)">
                            <span>技术</span>
                        </li>
                    </ul>
                    <ul class="change"  v-if="typeSubject==1" id="threeOne">
                        <div class="subjectColor1">
                            首选科目:
                        </div>
                        <li style="display: none">
                            <input type="checkbox" value="无选科要求" @change="xuekeChange2($event)">
                            <span>无选科要求</span>
                        </li>
                        <li>
                            <input type="checkbox" value="物理" @change="xuekeChange2($event)">
                            <span>物理</span>
                        </li>
                        <li>
                            <input type="checkbox" value="历史" @change="xuekeChange2($event)">
                            <span>历史</span>
                        </li>
                    </ul>
                    <br>
                    <ul class="change" v-if="typeSubject==1" id="threeTwo">
                        <div class="subjectColor1">
                            再选科目:
                        </div>
                        <li class="changeFirst" style="display: none">
                            <input type="checkbox" value="无选科要求" @change="xuekeChange3($event)">
                            <span>无选科要求</span>
                        </li>
                        <li>
                            <input type="checkbox" value="化学" @change="xuekeChange3($event)">
                            <span>化学</span>
                        </li>
                        <li>
                            <input type="checkbox" value="生物" @change="xuekeChange3($event)">
                            <span>生物</span>
                        </li>
                        <li>
                            <input type="checkbox" value="思想政治" @change="xuekeChange3($event)">
                            <span>思想政治</span>
                        </li>
                        <li>
                            <input type="checkbox" value="地理" @change="xuekeChange3($event)">
                            <span>地理</span>
                        </li>
                    </ul>
                </li>
                <div class="line"></div>
                <li>
                    <span>学校地区 ></span>
                    <ul class="change" id="area">
                        <li v-for="(item ,index) in Provinces"  :class="index==0&&'changeFirst'">
                            <input type="checkbox" :value="item.value" @change="diquChange($event)">
                            <span>{{item.names}}</span>
                        </li>
                    </ul>
                </li>
                <div class="line"></div>
                <li>
                    <span>特色标签 ></span>
                    <ul class="change">
                        <li>
                            <input type="checkbox" class="texing" value="一流大学建设高校A类" @click="yuanxiaoChange">
                            <span>一流大学建设高校A类</span>
                            <input type="checkbox" class="texing" value="一流大学建设高校B类" @click="yuanxiaoChange">
                            <span>一流大学建设高校B类</span>
                            <input type="checkbox" class="texing" value="一流学科建设高校" @click="yuanxiaoChange">
                            <span>一流学科建设高校</span>
                            <input type="checkbox"  value="985" @click="yuanxiaoChange">
                            <span>985</span>
                            <input type="checkbox" value="211" @click="yuanxiaoChange">
                            <span>211</span>
                            <input type="checkbox"  value="xueke" @click="yuanxiaoChange">
                            <span>国家重点学科</span>
                            <input type="checkbox"   value='zhuanye'@click="yuanxiaoChange">
                            <span>国家特色专业</span>
                            <input type="checkbox"  value="hejian" @click="yuanxiaoChange">
                            <span>部省合建</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="subjectBottom" v-if="listShow">
            <div class="top">
                <span>考试省份:{{city}}</span>
                <span>
                    可报考<i>{{universityIdCount}}/{{cdata.universityIdTotal}}</i>所大学
                    可报考<i>{{subjectIdCount}}/{{cdata.subjectIdTotal}}</i>个专业（包含专业类、专业、专业方向）
                </span>
            </div>
            <div class="bottom">
                <table>
                    <thead>
                    <tr>
                        <td>学校</td>
                        <td>
                            专业名称/专业类
                        </td>

                        <td>招生层次</td>
                        <td v-if="typeSubject==1">首选科目要求</td>
                        <td v-if="typeSubject==1">再选科目要求</td>
                        <td v-if="typeSubject==2">科目要求</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in cdataList">
                        <td>{{item.universityName}}</td>
                        <td :style="{color: item.descriptionJsonName ? '#2c8ffc' : ''}">
                            {{item.subjectName}}
                            <div class="descript" v-if="item.descriptionJsonName">
                                {{item.descriptionJsonName.replace(/、/g,"&nbsp;| &nbsp;")}}
                            </div>
                        </td>
                        <td>{{item.typeName}}</td>
                        <td v-if="typeSubject==2">{{item.chooseCourseRequire}}</td>
                        <td v-if="typeSubject==1">{{item.firstCourseRequire}}</td>
                        <td v-if="typeSubject==1">{{item.secondCourseRequire}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="searchNull" v-show="searchNull">没有满足条件的结果，换一个试试？</div>
                <div class="operation">
                    <div class="more" @click="search(pageNumber)">↓查看更多</div>
                    <div class="return" @click="back">↑返回顶部</div>
                </div>
            </div>
            <div class="loading" v-if="loading">
                <loading></loading>
            </div>
        </div>
    </div>
</template>
<script>
    import Loading from '../../../.././components/Loading2.vue'
    export default {
        name: "subject",
        components:{Loading},
        data(){
            return{
                Provinces:[
                    { names: '全部', value: '全部' },
                    { names: '北京', value: '北京' },
                    { names: '天津', value: '天津' },
                    { names: '上海', value: '上海' },
                    { names: '重庆', value: '重庆' },
                    { names: '河北', value: '河北' },
                    { names: '河南', value: '河南' },
                    { names: '云南', value: '云南' },
                    { names: '辽宁', value: '辽宁' },
                    { names: '黑龙江', value: '黑龙江' },
                    { names: '湖南', value: '湖南' },
                    { names: '安徽', value: '安徽' },
                    { names: '山东', value: '山东' },
                    { names: '新疆', value: '新疆' },
                    { names: '江苏', value: '江苏' },
                    { names: '浙江', value: '浙江' },
                    { names: '江西', value: '江西' },
                    { names: '湖北', value: '湖北' },
                    { names: '广西', value: '广西' },
                    { names: '甘肃', value: '甘肃' },
                    { names: '山西', value: '山西' },
                    { names: '陕西', value: '陕西' },
                    { names: '吉林', value: '吉林' },
                    { names: '福建', value: '福建' },
                    { names: '贵州', value: '贵州' },
                    { names: '内蒙古', value: '内蒙古' },
                    { names: '广东', value: '广东' },
                    { names: '青海', value: '青海' },
                    { names: '西藏', value: '西藏' },
                    { names: '四川', value: '四川' },
                    { names: '宁夏', value: '宁夏' },
                    { names: '海南', value: '海南' }
                ],
                city:"",
                listShow:false,
                cdataList:[],
                lastPage:false,
                searchNull:false,
                universityIdCount:'',
                cdata:'',
                subjectIdCount:'',
                type:1,//类型 本科1、专科2
                typeSubject:"" ,//选科类型 1:3+1+2  2:3+3
                subjectName:"",//专业类、专业名称
                chooseCourseRequire:[],//学科要求3+3
                belongProvince:[],//院校省份
                tag985:'',  //院校特性 ： 985
                tag211:'',  //院校特性 ： 211
                tagZhongdianxueke:'', //重点学科
                tagTesezhuanye:'',  //特色专业
                tagBushenghejian:'', //部省合建
                tagShuangyiliu:[],//院校特性 ：1.一流大学A类 2.一流大学B类 3.一流学科
                tagBaoyanzige:'', //保研资格
                tagZizhuzhaosheng:'', //自主招生
                tagZonghepingjia:'', //综合评价
                tagZhuanxiangjihua:'',//专项计划
                firstCourseRequire:'',// 首选学科要求 3+1+2
                secondCourseRequire:[], //再选学科要求 3+1+2
                pageNumber:1,//第几页
                pageSize:10 ,//每页条数,
                loading:false
            }
        },
        created(){
            this.city=window.localStorage.cityNow;
            //判断身份选科类型
            if(['北京','海南','山东','上海','天津','浙江'].indexOf(this.city)== -1){
                this.typeSubject=1
            }else{
                this.typeSubject=2
            }
            this.typeSubject=2
        },
        methods:{
            //学科3+3
            xuekeChange1(e){
                var _this=this;
                var flag=true;
                this.pageNumber=1
                if(e.target.value=='无选科要求'){
                   $(e.target).parent().siblings().find('input').prop('checked',false)
                }else{
                    $(e.target).parent().parent().find('.changeFirst').find('input').prop('checked',false)
                }
                if($('#threeThree .changeFirst').siblings().find('input:checked').length>3){
                    $(e.target).prop('checked',false)
                    _this.chooseCourseRequire = [];
                    $('#threeThree').find('input:checked').each(function (i, n) {
                        _this.chooseCourseRequire.push(n.value)
                        flag=false;
                    })
                }
                if(flag) {
                    this.chooseCourseRequire = [];
                    $('#threeThree').find('input:checked').each(function (i, n) {
                        this.chooseCourseRequire.push(n.value)
                    }.bind(this))
                    this.search(1)
                }
            },
            //学科3+1+2 首选
            xuekeChange2(e){
                this.pageNumber=1
                if(e.target.checked){
                    $(e.target).parent().siblings().find('input').prop('checked',false)
                    this.firstCourseRequire=e.target.value;
                }else{
                    this.firstCourseRequire=""
                }
                this.search(1)
            },
            //学科3+1+2 次选
            xuekeChange3(e){
                var _this=this;
                var flag=true;
                this.pageNumber=1
                if(e.target.value=='无选科要求'){
                    $(e.target).parent().siblings().find('input').prop('checked',false)
                }else{
                    $(e.target).parent().parent().find('.changeFirst').find('input').prop('checked',false)
                }
                if($('#threeTwo .changeFirst').siblings().find('input:checked').length>2){
                    $(e.target).prop('checked',false)
                    _this.secondCourseRequire=[];
                    $('#threeTwo').find('input:checked').each(function (i,n) {
                        _this.secondCourseRequire.push(n.value)
                    })
                    flag=false;
                }
                if(flag){
                    this.secondCourseRequire=[];
                    $('#threeTwo').find('input:checked').each(function (i,n) {
                        this.secondCourseRequire.push(n.value)
                    }.bind(this))
                    this.search(1)
                }
            },
            //地区
            diquChange(e){
                this.pageNumber=1
                this.belongProvince=[];
                if(e.target.value=='全部'&&e.target.checked){
                    $('#area').find('input').prop('checked',true);
                }else if(e.target.value=='全部'&&!e.target.checked){
                    $('#area').find('input').prop('checked',false);
                }else{
                    $(e.target).parent().parent().find('.changeFirst').find('input').prop('checked',false)
                }
                if($('#area .changeFirst').siblings().find('input:checked').length==31){
                    $('#area .changeFirst').find('input').prop('checked',true)
                }else{
                    $('#area').find('input:checked').each(function (i,n) {
                        this.belongProvince.push(n.value)
                    }.bind(this))
                }
                this.search(1)
            },
            //搜索
            search(number){
                this.searchNull=false
                if(number==1){
                    this.pageNumber=1;
                    this.lastPage=false;
                    this.cdataList=[];
                    $('.more').css({background: '',boxShadow:''})
                }
                if(!this.lastPage){
                   this.loading=true;
                    this.$ajax.post(this.G_uri + '/chooseSubject/getSubjectCanReportProfessionList', {
                        subjectName:this.subjectName,
                        chooseCourseRequire:this.chooseCourseRequire,
                        province:this.belongProvince,
                        // type:this.type,
                        tag211:this.tag211&&1||'',
                        tag985:this.tag985&&1||'',
                        tagTesezhuanye:this.tagTesezhuanye&&1||'',
                        tagBushenghejian:this.tagBushenghejian&&1||'',
                        tagBaoyanzige:this.tagBaoyanzige&&1||'',
                        tagZhongdianxueke:this.tagZhongdianxueke&&1||'',
                        tagZizhuzhaosheng:this.tagZizhuzhaosheng&&1||'',
                        tagZonghepingjia:this.tagZonghepingjia&&1||'',
                        tagZhuanxiangjihua:this.tagZhuanxiangjihua&&1||'',
                        tagShuangyiliu:this.tagShuangyiliu,
                        firstCourseRequire:this.firstCourseRequire,
                        secondCourseRequire:this.secondCourseRequire,
                        pageNumber:number,
                        pageSize:this.pageSize
                    },{
                        headers:{
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function (data) {
                        this.listShow=true;
                        if( data.data.data.subjectIdCount==0){
                            this.searchNull=true;
                        }

                        this.cdata=data.data.data;
                        this.universityIdCount=data.data.data.universityIdCount;
                        this.subjectIdCount=data.data.data.subjectIdCount;
                            if(data.data.data.universityIdCount!==0) {
                                if (data.data.data.data.page.totalPage <= this.pageNumber) {
                                    this.lastPage = true;
                                    $('.more').css({background: '#d9d9d9', boxShadow: '0 2px 1px #8f8d8d'})
                                }

                            if(number==1){
                                this.cdataList=data.data.data.data.list;
                                this.pageNumber=2;
                            }else{
                                this.pageNumber++;
                                $(data.data.data.data.list).each(function (i,item) {
                                    this.cdataList[this.cdataList.length]=item;
                                }.bind(this))

                            }
                        }else{
                                this.lastPage = true;
                                $('.more').css({background: '#d9d9d9', boxShadow: '0 2px 1px #8f8d8d'})
                            }
                        this.loading=false;
                    }.bind(this))
            }},
            //院校特性
            yuanxiaoChange(e){
                this.tagShuangyiliu=[];
                this.tag985=false;
                this.tag211=false;
                this.tagZhongdianxueke=false;
                this.tagTesezhuanye=false;
                this.tagBushenghejian=false;
              $(e.target).parent().find("input:checked").each(function (i,item) {
                  if(item.value=='一流大学建设高校A类'){
                      this.tagShuangyiliu.push(1)
                  }
                  if(item.value=='一流大学建设高校B类'){
                      this.tagShuangyiliu.push(2)
                  }
                  if(item.value=='一流学科建设高校'){
                      this.tagShuangyiliu.push(3)
                  }
                  if(item.value=='985'){
                      this.tag985=true
                  }
                  if(item.value=='211'){
                      this.tag211=true
                  }
                  if(item.value=='xueke'){
                      this.tagZhongdianxueke=true
                  }
                  if(item.value=='zhuanye'){
                      this.tagTesezhuanye=true
                  }
                  if(item.value=='hejian'){
                      this.tagBushenghejian=true
                  }
              }.bind(this))
                this.search(1)
            },
            //返回顶部
            back(){
                window.scrollTo(0, 0)
            }
        },
        mounted(){
            // console.log($)
            $("#area input").each(function(i,item){
                if(item.value==this.city){
                    $(item).prop('checked',true)
                    this.belongProvince=[this.city]
                    this.search(1)
                }
            }.bind(this))
        }
    }
</script>

<style scoped lang="less">
    .subjectTop{
        background:#fff;
        box-sizing:border-box;
        padding:13px 0;
    }
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
        width: 1000px;
        height: 40px;
        border:1px solid #2D8FFC;
        position: relative;
        margin: 16px auto 18px;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .searchBox>input{
        display: block;
        width: 100%;
        height: 100%;
        text-indent: 16px;
        font-size:12px;
        color: #6D767F;
        letter-spacing: 0.1em;
        border-radius: 5px;
    }
    .search{
        width: 60px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        /*background: #2D8FFC;*/
        line-height: 40px;
        text-align: center;
        color:#fff;
        cursor: pointer;
        letter-spacing: 0.1em;
        font-size: 15px;
        background: url("/imgs/xingaokao/mubiaotansuo/yuanxiaoku/serach.png") center center no-repeat;
    }
    .searchNull{
        text-align: center;
        font-size: 18px;
        padding-top: 20px;
        color:#666;
        letter-spacing: 0.1em;
    }
    .list{
        box-sizing: border-box;
        width: 100%;
        padding: 10px 18px;
        overflow: hidden;
    }
    .list>li>span{
        color:#323232;
        font-size: 14px;
        font-weight: bolder;
        line-height: 24px;
        display: inline-block;
        margin-right: 20px;
    }
    .list>li{
        overflow: hidden;
    }
    .line{
        width: 100%;
        height: 1px;
        background: #F2F2F2;
        margin: 10px 0;
    }
    .change{
        display: inline-block;
        line-height: 30px;
        width: 1070px;
        float: right;
    }
    .change>li{
        display: inline-block;
    }
    .change>li>input{
        width: 16px;
        height: 16px;
        cursor: pointer;
    }
    .change>li>span{
        font-size: 14px;
        position: relative;
        margin-left:9px;
        margin-right: 18px;
        top:-2px;
    }
    .subjectColor1{
        color:black;
        font-size:14px;
        font-weight: bolder;
        letter-spacing: 0.1em;
        display: inline-block;
        margin-right: 17px;
        position: relative;
        top:-3px;
    }
    .subjectBottom .top{
        margin-top: 13px;
        width: 100%;
        height: 70px;
        background-image: url(/imgs/xingaokao/xuankejuece/xuekezhixuan/bg_biaoti.png);
        text-align: center;
        font-size:16px;
        color:white;
        line-height: 70px;
        letter-spacing: 0.1em;
        span:nth-of-type(1){
            margin-right: 40px;
        }
        i{
            font-size: 22px;
            color:#F6E571;
        }
    }
    .bottom{
        padding: 21px;
        box-sizing: border-box;
        background: #ffffff;
    }
    td{
        border:1px solid #F2F2F2;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
    }
    tbody>tr>td:nth-child(2){
        cursor: pointer;
        position: relative;
    }
    .descript{
        position: absolute;
        left:75%;
        top: 0;
        background: #fff;
        width: 400px;
        box-sizing: border-box;
        box-shadow: 0 0 0 1px #EBEBEB;
        border-radius: 2px;
        padding: 0 18px;
        line-height: 28px;
        color:#333333;
        text-align: left;
        display: none;
    }
    .descript:after{
        content: "";
        display: block;
        width: 15px;
        height: 20px;
        position: absolute;
        left:-11px;
        top: 5px;
        background-image:url(/imgs/xingaokao/xuankejuece/xuekezhixuan/three.png);
        background-size: 100% 100%;
    }
    td:hover .descript{
        display: block;
    }
    thead td{
        font-size: 15px;
        color:#323232;
        font-weight: bolder;
        background:#E3E7F2;
    }
    table{
        border:1px solid #F2F2F2;
        background: #FFFFFF;
    }
    .operation{
        margin: 40px 0;
        position: relative;
        height: 33px;
    }
    .more{
       width: 120px;
       height: 33px;
       line-height: 33px;
       text-align: center;
       background: #2D8FFC;
       color:#FEFDFB;
       letter-spacing: 0.15em;
       cursor: pointer;
        border-radius: 3px;
        margin: 0 auto;
        box-shadow: 0 2px 1px #1670D1;
    }
    .return{
        width: 120px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        background: #2D8FFC;
        color:#FEFDFB;
        letter-spacing: 0.15em;
        cursor: pointer;
        border-radius: 3px;
        position: absolute;
        right: 0;
        top: 0;
        box-shadow: 0 2px 1px #1670D1;
    }
    .loading{
        height: 120px;
    }
    input[type='checkbox']{
        -webkit-appearance:none;
        background-image:url(/imgs/xingaokao/xuankejuece/xuekezhixuan/checked1.png);
        background-size: 100% 100%;
    }
    input[type='checkbox']:checked{
        background-image:url(/imgs/xingaokao/xuankejuece/xuekezhixuan/checked2.png);
        background-size: 100% 100%;
    }
</style>
