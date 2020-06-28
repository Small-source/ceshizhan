<template>
    <div class="xuekeyaoqiu">
        <div class="topTitle set_target_major">
            <div class="inner">
                <h5 class="topName">{{data.name}}</h5>
            </div>    
        </div>
        <div class="inner">
            <div class="top-navs">
                <div class="search_box">
                    <input type="text" v-model="searchValue" placeholder="搜索你感兴趣的院校" @keyup.enter="query">
                    <span @click="query">搜索</span>
                </div>
                <!-- 地区 -->
                <div class="diqu" id="diqus">
                    <div class="box">
                        <div class="mingcheng">学校地区</div>
                        <div class="right">
                            <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全部</el-checkbox>
                            <el-checkbox-group v-model="provanceData" size="30px" type="text" border @change="handleCheckedCitiesChange">
                                <el-checkbox :label="item.value" v-for="(item, index) in diqu" :key="index"" :max="1" :class="'no' + index" >{{item.names}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
                <!-- 办学性质 -->
                <div class="zhuguanbumen">
                    <div class="mingcheng">办学性质</div>
                    <div class="right">
                        <el-checkbox v-model="checkAll_radio3" @change="handleCheckAllChangeRadio3">全部</el-checkbox>
                        <el-checkbox-group v-model="banxuexingziData" size="30px" type="text" border @change="handleCheckedCitiesChangeRadio3">
                            <el-checkbox :label="item.value" v-for="(item, index) in zhuguanbumen" :key="index"" :max="1">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <!-- 大学类别 -->
                <div class="daxueleibie">
                    <div class="mingcheng">大学类别</div>
                    <div class="right">
                        <el-checkbox v-model="checkAll_radio4" @change="handleCheckAllChangeRadio4">全部</el-checkbox>
                        <el-checkbox-group v-model="universityTypeData" size="30px" type="text" border @change="handleCheckedCitiesChangeRadio4">
                            <el-checkbox :label="item.value" v-for="(item, index) in daxueleibie" :key="index"" :max="1">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>  
                <!-- 特色标签 -->
                <div class="tesebiaoqian">
                    <div class="mingcheng">特色标签</div>
                    <div class="right">
                        <el-checkbox v-model="checkAll_radio5" @change="handleCheckAllChangeRadio5">全部</el-checkbox>
                        <el-checkbox-group v-model="tesebiaoqianData" size="30px" type="text" border @change="handleCheckedCitiesChangeRadio5">
                            <el-checkbox :label="item.value" v-for="(item, index) in tesebiaoqian" :key="index"" :max="1">{{item.names}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div> 
            </div>
            <div class="professionTitle">
                <span class="no1">选科院校</span>
                <span class="no2">{{data.chooseSubjectRequire}}</span>
                <span class="no3">共{{ '(' + filterData.length + ')' }}所</span>
            </div>
            <div class="content">
                <ul class="title_box">
                    <li class="title">院校名称</li>
                    <li class="zhuanyelei">专业类</li>
                    <li class="zhuanye">包含专业</li>
                    <li class="xuanke">选科要求</li>
                    <li class="details">查看详情</li>
                </ul>
                <table class="customers">
                    <tr  v-for="(item, index) in filterData" :key="index" :style="{'backgroundColor': index % 2 == 0 ? '#fff' : '#f5f7f6'}">
                        <td class="university_name">
                            <!-- <img :src="item.logo" alt=""> -->
                            <span class="title"   @click="go(item.id)">{{item.name}}</span>
                        </td>
                        <td class="main">
                            <tr v-for="(itemed) in item.chooseSubjectData">
                                <td class="main_zhuanyelei_name">{{itemed.subjectName}}</td>
                                <td class="main_zhuanye">
                                    {{itemed.descriptionJsonName}}
                                </td>
                                <td class="main_xuanke">
                                    <div v-if="itemed.chooseCourseRequire">
                                         <p class="undetail">{{itemed.chooseCourseRequire}}</p>
                                    </div>
                                    <div v-else>
                                        <p class="detail"><span>首选：</span>{{itemed.firstCourseRequire}}</p>
                                        <p class="detail"><span>再选：</span>{{itemed.secondCourseRequire}}</p>
                                    </div>
                                </td>
                            </tr>
                        </td>
                        <td class="main_details">
                            <div class="goDetail"  @click="go(item.id)">查看详情</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="loading" v-if="!cdata.length">
            <Loading></Loading>
        </div>  
    </div>
</template>
<style type="text/css" lang='less' scoped>
.xuekeyaoqiu {
    padding-bottom: 40px;
    background-color: #f5f7f6;
    min-height: 600px;
    .inner {
        width: 1200px;
        margin: 0 auto;
        padding-top: 16px;
        position: relative;
    }
    .topTitle {
        width: 100%;
        height: 54px;
        margin-bottom: 20px;
        border-top: 1px solid #efeff0;
        z-index: 10;
        .inner {
            padding-top: 0px;
            position: relative;
        }
        .topName {
            font-size: 16px;
            color: #333;
            font-weight: 600;
            height: 54px;
            line-height: 54px;
        }
        .goBack {
            width: 62px;
            height: 26px;
            line-height: 26px;
            background-color: #2c8ffc;
            text-align: center;
            font-size: 12px;
            border-radius: 2px;
            top: 18px;
            box-shadow: 0px 4px 6px rgba(18, 103, 196, .54);
        }
    }
    .top-navs {
        background-color: #fff;
        padding: 0px 20px;
        padding-top: 20px;
        border: 1px solid #e3e7eb;
        // border: 1px solid red;
        .inner {
            background-color: #fff;
            border: 1px solid #2c8ffc;
            padding: 0px 15px;
            padding-bottom: 10px;
        }
        .search_box {
            padding-top: 0px;
            padding-bottom: 8px;
            height: 44px;
            input {
                height: 42px;
                border: 1px solid #2c8ffc;
                width: 437px;
                float: left;
                padding-left: 20px;
                font-size: 14px;
                line-height: 42px;
            }
            span {
                width: 82px;
                height: 44px;
                background-color: #2c8ffc;
                float: left;
                font-size: 14px;
                line-height: 44px;
                text-align: center;
                color: #fff;
                cursor: pointer;
            }
        }
        .diqu {
            border-bottom: 1px solid #f2f2f2;
            overflow: hidden;
            padding-bottom: 15px;
            overflow: hidden;
            .box {
                width: 1220px;
            }
            .mingcheng {
                padding-top: 18px;
                height: 16px;
                line-height: 16px;
                color: #333;
                font-size: 15px;
                font-weight: bold;
            }
            .right {
                // width: 1054px;
                // float: left;
            }
        }
        .zhuguanbumen {
           .diqu;
        }
        .daxueleibie {
           .diqu;
        }
        .tesebiaoqian {
           .diqu;
          
        }
    }
    .professionTitle {
        line-height: 50px;
        height: 50px;
        color: #333;
        font-size: 16px;
        padding-top: 10px;    
        font-weight: 600;
        .no1 {
        }
        .no2 {
            margin-right: 30px;
        }
    }
    .content {
        border-top: 1px solid #dedede;
        border-left: 1px solid #dedede;
        .mian_box {
            .neirong {
                // height: 150px;
                display: flex;
                align-items: center;
                overflow: hidden;
                background-color: #fff;
                &:nth-child(odd) {
                    background-color: #e3f2ff;
                }
                &:nth-child(even) {
                  
                }
                .yaoqiu {
                    width: 182px;
                }
                .zhuanye {
                    width: 590px;
                }
                .details {
                    width: 102px;
                }
                // 查看详情
                .goDetail {
                    position: absolute;
                    font-size: 12px;
                    line-height: 32px;
                    right: 40px;
                    top: 50%;
                    margin-top: -16px;
                    width: 90px;
                    height: 32px;
                    text-align: center;
                    background-color: #2c8ffc;
                    border-radius: 16px;
                    color: #fff;
                    cursor: pointer;
                    &:hover {
                        background-color: #156def;
                    }
                }
                li {
                    display: flex;
                    margin-right: 2px;
                    margin-bottom: 3px;
                    height: 100%;
                    display: block;
                }
            }
        }
        .customers {
            width:100%;
            border-collapse:collapse;
            color: #333;
            .university_name {
                width: 312px;
                span {
                    padding-left: 20px;
                    font-size: 20px;
                    color: #2c8ffc;
                }
            }
            .university_name {
                border-bottom: 1px solid #dedede;
                border-right: 1px solid #dedede;
            }
            .main_details {
                width: 104px;
                position: relative;
                border-bottom: 1px solid #dedede;
                border-right: 1px solid #dedede;
                .goDetail {
                    width: 76px;
                    height: 30px;
                    background-color: #2c8ffc;
                    color: #fff;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -38px;
                    margin-top: -15px;
                    font-size: 13px;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 2px;
                    cursor: pointer;
                }
            }
            .main {
                border-bottom: 1px solid #dedede;
                font-size: 14px;
                tr {
                    &:last-child {
                        td {
                            border-bottom: none;
                        }
                    }
                }
                td {
                    // border-right: 1px solid #dedede;
                    border-bottom: 1px solid #dedede;

                }
                .main_zhuanyelei_name {
                    width: 170px;
                    padding-left: 20px;
                    // text-align: center;
                }
                .main_zhuanye {
                    width: 340px;
                    padding: 20px;

                }
                .main_xuanke {
                    padding: 15px 15px;
                    // padding-left: 30px;
                    width: 180px;
                    font-size: 14px;
                    span {
                        // color: #f8801e;
                    }
                    .undetail {
                        text-align: center;
                    }

                }
            }
            th {
                font-size:15px;
                text-align:center;
                height: 46px;
                line-height: 46px;
                background-color: #2c8ffc;
                color:#ffffff;
            }
            tr.alt td {
              color:#000000;
              background-color:#EAF2D3;
            }
        }
        .title_box {
            height: 46px;
            line-height: 46px;
            color: #333;
            background-color: #aed3fc;
            // text-align: center;
            font-size: 15px;
            font-weight: 600;
            li {
                float: left;
                // border-right: 1px solid #dedede;
            }
            .title {
                // width: 312px;
                width: 292px;
                padding-left: 20px;
                border-top: 1px solid #dedede;
                border-right: 1px solid #dedede;

            }
            .zhuanyelei {
                width: 169px;
                padding-left: 20px;
                border-top: 1px solid #dedede;
            }
             .zhuanye {
                width: 359px;
                padding-left: 20px;
                border-top: 1px solid #dedede;
            }
             .xuanke {
                width: 189px;
                padding-left: 20px;
                border-top: 1px solid #dedede;
            }

            .details {
                padding-left: 20px;
                width: 85px;
            }
        }
    }
    .goBack {
        position: absolute;
        width: 50px;
        height: 20px;
        line-height: 20px;
        background-color: #2d90f8;
        color: #fff;
        right: 0px;
        top: -27px;
        font-size: 12px;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        z-index: 1000000000000000;
    }
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 2;
    }
}
</style>
<style type="text/css" lang='less'>
    .xuekeyaoqiu {
        .el-checkbox__input {
            position: relative;
            z-index: 1;
            width: 18px;
            height: 18px;
        }  
        .el-checkbox {
            .el-checkbox__input .el-checkbox__inner {
                width: 18px;
                height: 18px;
                border: none;
                background: url(/imgs/xingaokao/xuankejuece/360xuanke/icon_unchecked.png) no-repeat center center;
            }  
        }
        .is-checked {
            .el-checkbox__input .el-checkbox__inner {
                width: 18px;
                height: 18px;
                border: none;
                background: url(/imgs/xingaokao/xuankejuece/360xuanke/icon_checked.png) no-repeat center center;
                &:after {
                    border: none;
                }
            }  
        }
        .top-navs  .el-checkbox {
            padding-top: 15px;
            float: left;
            margin-right: 20px;
            height: 16px;
            line-height: 16px;
        }
        .diqu .el-checkbox {
            padding-top: 15px;
            width: 73px;
            float: left;
            margin-right: 0px;
            height: 16px;
            line-height: 16px;
        }
        .diqu .el-radio-group .el-radio {
            margin-bottom: 10px;
        }
        .zhuguanbumen {
            .el-radio-group .el-radio {
                margin-bottom: 10px;
            }
        }
        .daxueleibie { 
            .el-checkbox {
                margin-right: 20px;
                float: left;
            }
        }
        .tesebiaoqian {
            .el-checkbox-group {
                .el-checkbox {
                    &:last-child {
                        margin-right: 0px;
                    }
                }
            }
            .el-checkbox {

                float: left;
                margin-right: 20px;
            }
        }
    }
</style>
<script>
import Loading from '../../../../.././components/Loading.vue'
export default {
    components: { Loading },
    props: [  ],
    data() {
        return { 
            data: [],
            cdata: [],
            filterData: [],
            // 多选框所用数据
            checkAll: false,
            checkAll_radio3: false,
            checkAll_radio4: false,
            checkAll_radio5: false,
            searchValue: '',
            isShowLoading: false,
            // radio1: '',
            provanceData: [],
            universityTypeData: [],
            banxuexingziData: [],
            tesebiaoqianData: [],
            // 双一流
            // tagShuangyiliu: [],
            // tag211: '',
            // tag985: '',
            // tagZhongdianxueke: '',
            // tagTesezhuanye: '',
            // tagBushenghejian: '',
            // tagBaoyanzige: '',
            // ischecked: '0',
             // 办学层次
            // banxuecengci: [
            //     { names: '全部', value: '' },
            //     { names: '本科', value: '1' },
            //     { names: '专科', value: '2' },
            // ],
            // 地区
            diqu: [
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
                { names: '内蒙古', value: '内蒙古' },
                { names: '陕西', value: '陕西' },
                { names: '吉林', value: '吉林' },
                { names: '福建', value: '福建' },
                { names: '贵州', value: '贵州' },
                { names: '广东', value: '广东' },
                { names: '青海', value: '青海' },
                { names: '西藏', value: '西藏' },
                { names: '四川', value: '四川' },
                { names: '宁夏', value: '宁夏' },
                { names: '海南', value: '海南' }
            ],
            // 办学性质
            zhuguanbumen: [
                // { names: '全部', value: '' },
                { names: '公办', value: '公办' },
                { names: '民办', value: '民办' },
                { names: '内地与港澳台地区合作办学', value: '内地与港澳台地区合作办学' },
                { names: '中外合作办学', value: '中外合作办学' },
            ],
            // 大学类别
            daxueleibie: [
                // { names: '全部', value: '' },
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
            // 特色标签
            tesebiaoqian: [
                { names: '一流大学建设高校A类', value: '一流大学A类' },
                { names: '一流大学建设高校B类', value: '一流大学B类' },
                { names: '一流学科建设高校', value: '一流学科' },
                { names: '985', value: '985' },
                { names: '211', value: '211' },
                { names: '重点学科', value: '重点学科' },
                { names: '特色专业', value: '特色专业' },
                { names: '省部合建', value: '省部合建' },
                { names: '保研资格', value: '保研资格' }
            ],

        }
    },
    methods: {
        handleCheckAllChange(val) {
            // console.log(val)
            if(val) {
                this.provanceData = [
                    '北京',
                    '天津',
                    '上海',
                    '重庆',
                    '河北',
                    '河南',
                    '云南',
                    '辽宁',
                    '黑龙江',
                    '湖南',
                    '安徽',
                    '山东',
                    '新疆',
                    '江苏',
                    '浙江',
                    '江西',
                    '湖北',
                    '广西',
                    '甘肃',
                    '山西',
                    '内蒙古',
                    '陕西',
                    '吉林',
                    '福建',
                    '贵州',
                    '广东',
                    '青海',
                    '西藏',
                    '四川',
                    '宁夏',
                    '海南'
                ];
            }else {
                this.provanceData = [];
            }
            
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            if(checkedCount > 0 && checkedCount < this.diqu.length) {
                this.checkAll = false;
            }else if(checkedCount ==  this.diqu.length){
                this.checkAll = true;

            }
        },
        handleCheckAllChangeRadio3(val) {
            if(val) {
                this.banxuexingziData = [
                    '公办',
                    '民办',
                    '内地与港澳台地区合作办学',
                    '中外合作办学',
                ];
            }else {
                this.banxuexingziData = [];
            }
           
        },
        handleCheckedCitiesChangeRadio3(value) {
            let checkedCount = value.length;
            if(checkedCount > 0 && checkedCount < this.zhuguanbumen.length) {
                this.checkAll_radio3 = false;
            }else if(checkedCount == this.zhuguanbumen.length) {
                this.checkAll_radio3 = true;
            }

        },
        handleCheckAllChangeRadio4(val) {
             if(val) {
                this.universityTypeData = [
                    '综合类',
                    '理工类',
                    '师范类',
                    '农林类',
                    '政法类',
                    '医药类',
                    '财经类',
                    '民族类',
                    '语言类',
                    '艺术类',
                    '体育类',
                    '军事类'
                ];
            }else {
                this.universityTypeData = [];
            }
        },
        handleCheckedCitiesChangeRadio4(value) {
            let checkedCount = value.length;
            if(checkedCount > 0 && checkedCount < this.daxueleibie.length) {
                this.checkAll_radio4 = false;
            }else if(checkedCount == this.daxueleibie.length) {
                this.checkAll_radio4 = true;
            }
        },
        handleCheckAllChangeRadio5(val) {
            if(val) {
                this.tesebiaoqianData = [
                    '一流大学A类',
                    '一流大学B类',
                    '一流学科',
                    '985',
                    '211',
                    '重点学科',
                    '特色专业',
                    '省部合建',
                    '保研资格'
                ];
            }else {
                this.tesebiaoqianData = [];
            }
        },
        handleCheckedCitiesChangeRadio5(value) {
            let checkedCount = value.length;
            if(checkedCount > 0 && checkedCount < this.tesebiaoqian.length) {
                this.checkAll_radio5 = false;
            }else if(checkedCount == this.tesebiaoqian.length) {
                this.checkAll_radio5 = true;
            }
        },










        // 存储专业信息，获取返回专业信息
        goUniversityList() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var subjectId = this.$route.query.subjectId;
            var chooseSubjectRequire = this.$route.query.chooseSubjectRequire;
            var firstCourseRequire = this.$route.query.firstCourseRequire;
            var secondCourseRequire = this.$route.query.secondCourseRequire;
            var subjectName = this.$route.query.subjectName;
            var _this = this;
            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/chooseSubject/getChooseSubjectUniversityList', {
                    // data
                    source: 2,
                    subjectId: subjectId,
                    chooseSubjectRequire: chooseSubjectRequire,
                    firstCourseRequire: firstCourseRequire,
                    secondCourseRequire: secondCourseRequire,
                    subjectName: subjectName
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.data = res.data.data;
                        _this.cdata = res.data.data.universityList;
                        _this.filterData = res.data.data.universityList;
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                    // alert('请检查网络')
                })
        },
        go(id) {
            var id = id;
            // this.$router.push({  
            //     path: '/yuanxiaoxiangqing',   
            //     name: 'yuanxiaoxiangqing',  
            //     query: {  
            //         id: id,    
            //     }  
            // }) 
            // window.scroll(0, 0); 
            window.scroll(0, 0);
            let {href}=this.$router.resolve({
                path: '/yuanxiaoxiangqing',
                name: 'yuanxiaoxiangqing',
                query: {
                    id: id,
                    from:1
                }
            })
            window.open(href, '_blank');
        },
                // 查询搜索
        query() {
            var _this = this;
            var value = this.searchValue;
            this.filterData = this.cdata.filter((item) => {
                return item.name.includes(value);
            })
        },
        changeFilterData() {
            let arr = [];
            let _arr = [];
            let provanceData = this.provanceData;
            let banxuexingziData = this.banxuexingziData;
            let universityTypeData = this.universityTypeData;
            let tesebiaoqianData = this.tesebiaoqianData;
            if(provanceData.length>0) {
                this.provanceData.forEach((provance) => {
                    this.cdata.forEach((item) => {
                        if(item.province == provance) {
                            arr.push(item);
                        }
                    })
                })
            }else {
                arr = this.cdata;
            }    
            if(banxuexingziData.length>0) {
                let banxuexingziStr = banxuexingziData.join('');
                arr = arr.filter((item) => {
                    return (banxuexingziStr.includes(item.schoolNatureName))             
                })
            }
            if(universityTypeData.length>0) {
                let universityTypeStr = universityTypeData.join('');
                arr = arr.filter((item) => {
                    return (universityTypeStr.includes(item.type))             
                })
            }
            if(tesebiaoqianData.length>0) {
                tesebiaoqianData.forEach((tesebiaoqian) => {
                    arr.forEach((item) => {
                        if(item.tag.includes(tesebiaoqian)) {
                            _arr.push(item)
                        }
                    })
                })  
                arr = Array.from(new Set(_arr));
            }      
            this.filterData = arr;
        }
    },
    watch: {
        provanceData() {
            this.changeFilterData();
        },
        banxuexingziData() {
            this.changeFilterData();
        },
        universityTypeData() {
            this.changeFilterData();
        },
        tesebiaoqianData() {
            this.changeFilterData();
        }
    },
    created() {
        this.goUniversityList();
    },
    mounted() {
        if(window.sessionStorage.tuance=='3'){
            $('.set_target_major').css({top:'80px'})
        }else{
            $('.set_target_major').css({top:''})
        }
    }
}
</script>