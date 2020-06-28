<template>
    <div id="university">
        <div class="universityTop">
            <div class="title">
                大学学科要求查询
            </div>
            <ul class="list">
                <li>
                    <p>院校分类</p>
                    <ul class="change"  id="typeYuanxiao">
                        <li v-for="(item ,index) in daxueleibie" @click="typeChange($event,index)">
                            {{item.names}}
                        </li>
                    </ul>
                </li>
                <div class="line"></div>
                <li>
                    <p>院校省份</p>
                    <ul class="change" id="area">
                        <li v-for="(item ,index) in Provinces"  :class="index==0&&'changeFirst'">
                            <input type="checkbox" :value="item.value" @change="diquChange($event)">
                            <span>{{item.names}}</span>
                        </li>
                    </ul>
                </li>
                <div class="line"></div>
                <li>
                    <p>院校特性</p>
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
                <div class="line"></div>
            </ul>
            <div class="searchBox">
                <input type="text" placeholder="搜索院校名称" v-model="name" @keyup.enter="search(1)">
                <div class="search" @click="search(1)">搜索</div>
            </div>
        </div>
        <ul class="universityBottom" v-if="listShow">
            <li v-for="(item,index) in cdataList">
                <div class="listTop">
                    <div class="logo" :style="{backgroundImage:'url('+item.logo+')'}"></div>
                    <div class="content">
                        <p>{{item.name}}
                            <img src="/imgs/xingaokao/mubiaotansuo/yuanxiaoku/area.png" alt="">
                            <span>{{item.province}}</span>
                        </p>
                        <p class="tag">
                            <span v-if="item.tag211==1">{{item.tag211Name}}</span>
                            <span v-if="item.tag985==1">{{item.tag985Name}}</span>
                            <span v-if="item.tagBaoyanzige==1">{{item.tagBaoyanzigeName}}</span>
                            <span v-if="item.tagBushenghejian==1">{{item.tagBushenghejianName}}</span>
                            <span v-if="item.tagShuangyiliu!=0">{{item.tagShuangyiliuName}}</span>
                            <span v-if="item.tagTesezhuanye==1">{{item.tagTesezhuanyeName}}</span>
                            <span v-if="item.tagZhongdianxueke==1">{{item.tagZhongdianxuekeName}}</span>
                            <span v-if="item.tagZhuanxiangjihua==1">{{item.tagZhuanxiangjihuaName}}</span>
                            <span v-if="item.tagZizhuzhaosheng">{{item.tagZizhuzhaoshengName}}</span>
                            <span v-if="item.tagZonghepingjia==1">{{item.tagZonghepingjiaName}}</span>
                        </p>
                    </div>
                    <div class="showMore" @click="showMore(index)">
                        查看学科数据
                    </div>
                </div>
                <div class="tables">
                    <table>
                        <thead>
                        <tr>
                            <td>专业名称/专业类</td>
                            <td>招生层次</td>
                            <td v-if="typeSubject==1">首选科目要求</td>
                            <td v-if="typeSubject==1">再选科目要求</td>
                            <td v-if="typeSubject==2">科目要求</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="ite in item.chooseSubject">
                            <td :style="{color: ite.descriptionJsonName ? '#2c8ffc' : ''}">
                                {{ite.subjectName}}
                                <div class="descript" v-if="ite.descriptionJsonName">
                                    {{ite.descriptionJsonName.replace(/、/g,"&nbsp;| &nbsp;")}}
                                </div>
                            </td>
                            <td>{{ite.typeName}}</td>
                            <td v-if="typeSubject==2">{{ite.chooseCourseRequire}}</td>
                            <td v-if="typeSubject==1">{{ite.firstCourseRequire}}</td>
                            <td v-if="typeSubject==1">{{ite.secondCourseRequire}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </ul>
        <div class="searchNull" v-show="searchNull">没有满足条件的结果，换一个试试？</div>
        <div class="operation">
            <div class="more" @click="search(pageNumber)">↓查看更多</div>
            <div class="return" @click="back">↑返回顶部</div>
        </div>
        <div class="loading" v-if="loading">
            <loading></loading>
        </div>
    </div>
</template>
<script>
    import Loading from '../.././components/Loading2.vue'
    export default {
        name: "university",
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
                // 大学类别
                daxueleibie: [
                    { names: '不限', value: '不限' },
                    { names: '综合类', value: '综合类' },
                    { names: '理工类', value: '理工类' },
                    { names: '师范类', value: '师范类' },
                    { names: '农林类', value: '农林类' },
                    { names: '政法类', value: '政法类' },
                    { names: '医药类', value: '医药类' },
                    { names: '财经类', value: '财经类' },
                    { names: '民族类', value: '民族类' },
                    { names: '语言类', value: '语言类' },
                    { names: '艺术类', value: '艺术类' },
                    { names: '体育类', value: '体育类' },
                    { names: '军事类', value: '军事类' }
                ],
                city:"",
                lastPage:false,
                listShow:false,
                searchNull:false,
                cdataList:[],
                type:[],//院校分类
                name:"",//院校名称
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
                pageNumber:1,//第几页
                pageSize:'' ,//每页条数
                loading:false,
                number:0
            }
        },
        created(){
            this.city=this.$store.state.user.province;
            //判断身份选科类型
            if(['北京','海南','山东','上海','天津','浙江'].indexOf(this.city)== -1){
                this.typeSubject=1
            }else{
                this.typeSubject=2
            }
        },
        methods:{
            //院校类别
            typeChange(e,index){
                this.pageNumber=1
                $('#typeYuanxiao>li').css({background: "",color:""});
                $('#typeYuanxiao>li').eq(index).css({background:'#2D8FFC',color:'#fff'});
                if(e.target.innerText=='不限'){
                    this.type=[]
                }else{
                    this.type=[e.target.innerText]
                }
                this.search(1)
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
                this.searchNull=false;
                if(number==1){
                    this.pageNumber=1;
                    this.lastPage=false;
                    this.cdataList=[];
                    $('.more').css({background: '',boxShadow:''})
                }
                if(!this.lastPage) {
                    this.loading=true;
                    this.$ajax.post(this.G_uri + '/chooseSubject/getInstitutionSubjectRequireList', {
                        name: this.name,
                        province: this.belongProvince,
                        type: this.type,
                        tag211: this.tag211 && 1 || '',
                        tag985: this.tag985 && 1 || '',
                        tagTesezhuanye: this.tagTesezhuanye && 1 || '',
                        tagBushenghejian: this.tagBushenghejian && 1 || '',
                        tagBaoyanzige: this.tagBaoyanzige && 1 || '',
                        tagZhongdianxueke: this.tagZhongdianxueke && 1 || '',
                        tagZizhuzhaosheng: this.tagZizhuzhaosheng && 1 || '',
                        tagZonghepingjia: this.tagZonghepingjia && 1 || '',
                        tagZhuanxiangjihua: this.tagZhuanxiangjihua && 1 || '',
                        tagShuangyiliu: this.tagShuangyiliu,
                        pageNumber: number,
                        pageSize: 10
                    }, {
                        headers: {
                            token: window.sessionStorage.getItem('ymtxToken')
                        }
                    }).then(function (data) {
                        this.listShow = true;
                        if(data.data.data.page.totalPage==0){
                            this.searchNull=true;
                        }
                        if (data.data.data.page.totalPage <= this.pageNumber) {
                            this.lastPage = true;
                            $('.more').css({background: '#d9d9d9',boxShadow:'0 2px 1px #8f8d8d'})
                        }
                        $(data.data.data.list).each(function (i, item) {
                                this.cdataList[this.cdataList.length]=item
                        }.bind(this))
                        if (number == 1) {
                            this.pageNumber = 2;
                            this.$nextTick(function () {
                                $('.tables').eq(0).show()
                            })
                            setTimeout(function () {
                                $('.tables').eq(0).show()
                            },0)
                        } else {
                            this.pageNumber++;
                        }
                        this.loading = false
                    }.bind(this))
                }
            },
            //院校特性
            yuanxiaoChange(e){
                this.tagShuangyiliu=[]
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
                        this.tagShuangyiliu.push(3);
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
            },
            //查看学科数据
            showMore(index){
              if($('.tables').eq(index)[0].style.display == 'block'){
                  $('.tables').eq(index).hide()
              }else{
                  $('.tables').hide();
                  $('.tables').eq(index).show()
              }
            }
        },
        mounted(){
            $("#typeYuanxiao>li:first").css({background:'#2D8FFC',color:'#fff'});
            $("#area input").each(function(i,item){
                if(item.value==this.city){
                    $(item).prop('checked',true)
                    this.belongProvince=[this.city]
                    this.search(1)
                }
            }.bind(this))
        },
    }
</script>
<style scoped>
    .universityTop{
        background:#fff;
        border:1px solid #E3E6EB;
        box-sizing:border-box;
        padding:13px 0;
    }
    .title{
        width: 190px;
        height: 40px;
        background:url(/imgs/elective/xuekezhixuan/icon_biaoti.png);
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
        width: 606px;
        height: 40px;
        border:1px solid #2D8FFC;
        position: relative;
        margin: 16px 20px 18px;
        box-sizing: border-box;
    }
    .searchBox>input{
        display: block;
        width: 100%;
        height: 100%;
        text-indent: 16px;
        font-size:12px;
        color: #6D767F;
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
    .list{
        box-sizing: border-box;
        width: 100%;
        padding: 10px 18px;
        background: #fff;
    }
    .list>li>p{
        color:#323232;
        font-size: 15px;
        font-weight: bolder;
        line-height: 30px;
    }
    .line{
        width: 100%;
        height: 1px;
        background: #F2F2F2;
        margin: 10px 0;
    }
    .change{
        line-height: 30px;
        overflow: hidden;
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
    #typeYuanxiao>li{
        width: 50px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color:#666666;
        cursor: pointer;
        margin-right: 18px;
    }
    .universityBottom{
        margin-top: 13px;
        padding: 0 24px;
        box-sizing: border-box;
        background: white;
    }
    .listTop{
        width: 100%;
        height: 100px;
        border-bottom:1px solid #F2F2F2;
        position: relative;
    }
    .logo{
        width: 100px;
        height: 100px;
        float: left;
        margin-right: 15px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 66%;
    }
    .content{
        padding-top: 20px;
        box-sizing: border-box;
    }
    .content>p>img{
        width: 12px;
        height: 15px;
    }
    .content>p{
        font-size: 20px;
        letter-spacing: 0.1em;
        color:#323232;
        font-weight: bolder;
    }
    .content>p>span{
        font-size:12px;
        color:#A1A3AF;
        font-weight: normal;
    }
    .tag{
        margin-top: 15px;
    }
    .tag>span{
        height: 25px;
        display: block;
        float: left;
        padding: 0 8px;
        background: #E0EDFF;
        color:#5383B4 !important;
        font-size:13px;
        margin-right: 14px;
    }
    .showMore{
        width: 110px;
        height: 32px;
        text-align: center;
        float: right;
        line-height: 32px;
        position: absolute;
        top:34px;
        right: 0;
        background:#2B90FC;
        color:#F5F7F4;
        font-size: 13px;
        letter-spacing: 0.05em;
        cursor: pointer;
        box-shadow: 0 2px 1px #1670D1;
    }
    .searchNull{
        text-align: center;
        font-size: 18px;
        padding-top: 20px;
        color:#666;
        letter-spacing: 0.1em;
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
    td{
        border:1px solid #F2F2F2;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        letter-spacing: 0.1em;
    }
    thead td{
        font-size: 15px;
        color:#323232;
        font-weight: bolder;
        background:#E3E7F2;
    }
    table{
        border:1px solid #F2F2F2;
        background: #FAFAFA;
        margin-top:12px;
    }
    .tables{
        max-height: 248px;
        display: none;
        overflow-x: hidden;
    }
    tbody>tr>td:first-child{
        cursor: pointer;
        position: relative;
    }
    .descript{
        position: absolute;
        left:65%;
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
        background-image:url(/imgs/elective/xuekezhixuan/three.png);
        background-size: 100% 100%;
    }
    td:hover .descript{
        display: block;
    }
    .loading{
        height: 120px;
    }
    input[type='checkbox']{
        -webkit-appearance:none;
        background-image:url(/imgs/elective/xuekezhixuan/checked1.png);
        background-size: 100% 100%;
    }
    input[type='checkbox']:checked{
        background-image:url(/imgs/elective/xuekezhixuan/checked2.png);
        background-size: 100% 100%;
    }
    .jinzhi{
        background: #d9d9d9;
        box-shadow:0 2px 1px #8f8d8d;
    }
</style>
