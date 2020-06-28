<template>
    <div class="matchingSchools" id="matchingSchools">
        <div class="parts">
            <div class="top">
                <div class="title">
                    <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                     成绩匹配院校
                </div>
            </div>
            <div class="searchBox">
                <el-select v-model="scoreProvince" placeholder="请选择">
                    <el-option
                            v-for="item in Provinces"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="artsAndScience" placeholder="请选择">
                    <el-option
                            v-for="item in subjectType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                参考分数
                <el-input v-model="averageScore" placeholder="请输入分数" type="number"></el-input>
                <div class="search" @click="reset(),yuanxiaolist()">
                    搜索
                </div>
                <p>院校筛选:</p>
                <div class="tiaojian">
                    <span>
                        大学类别&nbsp;>
                    </span>
                    <div class="type1">
                        <el-radio-group v-model="type">
                            <el-radio-button v-for="item in daxueleibie" :label="item.names" :key="index"></el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="line"></div>
                <div class="tiaojian">
                    <span>
                        学校地区&nbsp;>
                    </span>
                    <div class="type1">
                        <el-checkbox v-model="checkAll" @change="handleCheckAllChange" class="All">全选</el-checkbox>
                        <el-checkbox-group v-model="province" @change="handleCheckedCitiesChange" class="checkBox">
                            <el-checkbox v-for="item in Provinces" :label="item.names" :key="item.names">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
            </div>
        </div>
        <p>筛选结果:</p>
        <div class="parts" style="margin-top: 20px;padding: 20px 18px;">
            <table>
                <tr>
                    <td width="244">院校</td>
                    <td  width="412">
                        <div>
                            <span>投档线</span>
                            <span>2019年</span>
                            <span>2018年</span>
                            <span>2017年</span>
                        </div>
                    </td>
                    <td width="102">
                        收藏
                    </td>
                    <td>
                        设为成绩匹配
                    </td>
                </tr>
            </table>
            <div class="more" v-if="cdata.length!=0" @click="moreAverageScore('add')">
                <img src="imgs/careerManagement/careerAnchor/icon_xiala.png" alt="">
                查看更高投档线院校
            </div>
            <ul class="list">
                <li v-for="item in cdata">
                    <div class="div1">
                        <div class="left">
                            <img :src="item.logo" alt="">
                        </div>
                        <div class="right">{{item.universityName}}</div>
                    </div>
                    <div class="div2">
                        <span >{{item.list&&item.list['2019']&&item.list['2019'].averageScore||""}}</span>
                        <span >{{item.list&&item.list['2018']&&item.list['2018'].averageScore||""}}</span>
                        <!--<span >{{item.list&&item.list['2017']&&item.list['2017'].averageScore||""}}</span>-->
                    </div>
                    <div class="div3">
                        <img src="imgs/careerManagement/careerAnchor/icon_weishoucang.png" alt=""
                             v-show="collectListId.indexOf(item.universityId)==-1"
                             @click="addCollect(item.universityId)"
                        >
                        <img src="imgs/careerManagement/careerAnchor/icon_shoucang.png" alt=""
                             v-show="(collectListId.indexOf(item.universityId)!=-1)"
                             @click="addCollect(item.universityId)"
                        >
                    </div>
                    <div class="div4">
                        <div class="button" v-show="matchingListId.indexOf(item.universityId)==-1"@click="addMatching(item.universityId)">加入匹配</div>
                        <div class="button"
                             v-show="matchingListId.indexOf(item.universityId)!=-1" @click="addMatching(item.universityId)"
                           style="background:#D7D7D7">已加入</div>
                    </div>
                </li>
            </ul>
            <div class="noneContent" v-if="cdata.length==0"></div>
            <div class="more" v-if="cdata.length!=0" @click="moreAverageScore('reduce')">
                <img src="imgs/careerManagement/careerAnchor/icon_xiala.png" alt="" style="transform: rotate(180deg)">
                查看更低投档线院校
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "matchingSchools",
        data(){
            return {
                //所在地区
                Provinces:[
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
                //科目类别
                subjectType:[
                    { names: '文史', value: '文史' },
                    { names: '理工', value: '理工' },
                    { names: '新高考', value: '新高考' },
                ],
                artsAndScience:'理工',
                scoreProvince:'北京',
                province:[],
                averageScore:'',
                type:'不限',
                checkAll:false,
                isIndeterminate: false,
                high:0,
                low:0,
                cdata:[],
                collectListId:[],
                matchingListId:[]
            }
        },
        methods:{
            handleCheckAllChange(val) {
                let arr=[];
                this.Provinces.forEach(item=>{
                    arr.push(item.value)
                })
                this.province= val ? arr : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let arr=[];
                this.Provinces.forEach(item=>{
                    arr.push(item.value)
                })
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.Provinces.length;
            },
            //成绩匹配院校列表
            yuanxiaolist(){
                this.$ajax.post(this.G_uri+this.ports.careerManagement.matchingScholls.list,{
                    scoreProvince:this.scoreProvince,
                    artsAndScience:this.artsAndScience,
                    averageScore:this.averageScore,
                    type:this.type=='不限'?[]:[this.type],
                    province:this.province.length==31?[]:this.province,
                    high:this.high,
                    low:this.low
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        this.cdata=res.data.data;
                    }
                })
            },
            //添加/取消院校收藏
            addCollect(id){
                this.$ajax.post(this.G_uri+this.ports.careerManagement.matchingScholls.addCollect,{
                    collectionId:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        this.collectList()
                    }
                })
            },
            //院校收藏列表id列表
            collectList(){
                this.$ajax.post(this.G_uri+this.ports.careerManagement.matchingScholls.collectList,{
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        this.collectListId=res.data.data
                    }
                })
            },
            //添加/取消成绩匹配院校
            addMatching(id){
                this.$ajax.post(this.G_uri+this.ports.careerManagement.matchingScholls.add,{
                    collectionId:id
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        this.mathingList();
                    }
                })
            },
            //获取已匹配院校数组
            mathingList(){
                this.$ajax.post(this.G_uri+this.ports.careerManagement.matchingScholls.matchingList,{
                },{
                    headers:{
                        token:window.sessionStorage.getItem('ymtxToken')
                    }
                }).then(res=>{
                    if(res.data.code==2000){
                        this.matchingListId=res.data.data;
                    }
                })
            },
            //更高或更低投档线院校
            moreAverageScore(item){
                if(item=='add'){
                    this.high++;
                }
                if(item=='reduce'){
                    this.low++;
                }
                this.yuanxiaolist();
            },
            //投档重置
            reset(){
                this.high=0;
                this.low=0;
            }
        },
        created(){
            this.collectList();
            this.mathingList();
        }
    }
</script>

<style scoped lang="less">
    .matchingSchools{
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        &>p{
            font-size: 16px;
            font-weight:bolder;
            color: #333;
        }
        // width: 100%;
        padding-left: 20px;
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
            .searchBox{
                margin-top: 20px;
                padding-left: 26px;
                .search{
                    width: 60px;
                    height: 28px;
                    text-align: center;
                    line-height: 28px;
                    border-radius: 5px;
                    font-size: 15px;
                    color:#FFFEFD;
                    background:#3D91F4;
                    display: inline-block;
                    cursor:pointer;
                }
                &>p{
                    font-size: 15px;
                    font-weight: bolder;
                    color:#333333;
                    line-height: 80px;
                }
                .tiaojian{
                    overflow: hidden;
                    position: relative;
                    &>span{
                        color:#333333;
                        font-size: 13px;
                    }
                    .type1{
                        width: 800px;
                        float: right;
                        .checkBox{
                            text-indent:100px ;
                            *{
                                text-indent: 0;
                            }
                        }
                        .All{
                            position: absolute;
                        }
                    }
                }
                .line{
                    border-bottom: 1px solid #F2F2F2;
                    margin: 10px 0 20px;
                }
            }
        }
        table{
            tr:first-child{
                background: #F3F4F8;
            }
            td{
                border:1px solid #DDDFDE;
                text-align: center;
                height: 45px;
                div{
                    width: 100%;
                    height: 100%;
                    line-height: 45px;
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
        .list>li{
            height: 120px;
            padding-top: 22px;
            border-bottom:1px solid #F2F2F2;
            div{
                float: left;
            }
            .div1{
                width: 365px;
                .left{
                    width: 80px;
                    height: 80px;
                    margin-right:15px;
                    background: red;
                    img{
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
                .right{
                    height: 100%;
                    font-size: 20px;
                    font-weight: bolder;
                    width: 180px;
                    padding-top: 12px;
                }
            }
            .div2{
                width: 265px;
                margin-right: 27px;
                line-height:80px;
                display: flex;
                justify-content: space-between;
                span{
                    display: block;
                    text-indent: 4px;
                    width: 56px;
                    text-align: center;
                }
            }
            .div3{
                width: 102px;
                height: 100%;
                text-align: center;
                line-height: 80px;
                img{
                    cursor: pointer;
                }
            }
            .div4{
                width: 172px;
                .button{
                    width: 86px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 5px;
                    background: #3D91F3;
                    margin: 28px auto;
                    cursor: pointer;
                    text-align: center;
                    color:white;
                    float: none;
                }
            }
        }
        .more{
            width: 190px;
            margin: 35px auto 10px;
            font-size: 16px;
            color:#3F91F5;
            cursor: pointer;
            img{
                position: relative;
                top:-2px;
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
<style lang="less">
    #matchingSchools .el-select{
        width: 128px;
        height: 30px;
        border:1px solid #DEDEDE;
        border-radius: 5px;
        margin-right: 20px;
        *{
            height:28px;
            line-height: 28px;
        }
        input{
            width: 126px;
        }
    }
    #matchingSchools{
        .el-input {
            width: 126px;
            height: 30px;
            border-radius: 5px;
            margin-right: 20px;
            * {
                height: 28px;
                line-height: 28px;
            }
        }
        .el-radio-button__inner{
            border:none;
            padding: 5px 10px;
            border-radius: 3px;
            margin-right: 20px;
            font-size: 13px;
            box-sizing: border-box;
            margin-bottom: 10px;
        }
        .el-checkbox{
            margin-bottom: 10px;
            width: 70px;
        }
    }
</style>
