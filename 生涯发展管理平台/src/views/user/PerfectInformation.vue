<template>
    <div class="mark">
        <div class="perfectInformation">
            <div class="top_title">为了更好的为您服务，请完善以下信息！</div>
            <div class="content">
                <div class="left_banner"></div>
                <div class="right_content" :style="{paddingTop:tuance&&'30px'}">
                    <!-- 所在地 -->
                    <div class="linkage" v-if="openProvinceData.length == 0">
                        <div class="zheceng" v-if="tuance"></div>
                        <p class="no1"  style="width: 80px">地<span style="opacity:0">空空</span>区：</p>
                        <div class="el">
                            <el-select
                                v-model="province"
                                placeholder="省级地区"
                                class="suozaidi1"
                                >
                                <el-option
                                    v-for="(item, index) in mapData"
                                    :key="index"
                                    :label="item.name"
                                    :value="item.name"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <p class="no2">省/市</p>
                        <div class="el">
                            <el-select
                                v-model="city"
                                placeholder="市级地区"
                                class="suozaidi2">
                                <el-option
                                    v-for="(item, index) in cityData"
                                    :key="index"
                                    :label="item.name"
                                    :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                        <p class="no2">城市</p>
                        <div class="el">
                            <el-select
                                v-model="area"
                                placeholder="区级地区"
                                class="suozaidi3">
                                <el-option
                                    v-for="(item, index) in areaData"
                                    :key="index"
                                    :label="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </div>
                        <p class="no2">区/县/市</p>
                    </div>
                    <div class="linkage" v-if="openProvinceData.length > 0">
                        <div class="zheceng" v-if="tuance"></div>
                        <p class="no1"  style="width: 80px">地<span style="opacity:0">空空</span>区：</p>
                        <div class="el">
                            <el-select
                                v-model="province"
                                placeholder="省级地区"
                                class="suozaidi1"
                                >
                                <el-option
                                    v-for="(item, index) in openProvinceData"
                                    :key="index"
                                    :label="item.name"
                                    :value="item.name"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <p class="no2">省/市</p>
                        <div class="el">
                            <el-select
                                v-model="city"
                                placeholder="市级地区"
                                class="suozaidi2">
                                <el-option
                                    v-for="(item, index) in openCityData"
                                    :key="index"
                                    :label="item.name"
                                    :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                        <p class="no2">城市</p>
                        <div class="el">
                            <el-select
                                v-model="area"
                                placeholder="区级地区"
                                class="suozaidi3">
                                <el-option
                                    v-for="(item, index) in areaData"
                                    :key="index"
                                    :label="item"
                                    :value="item">
                                </el-option>
                            </el-select>
                        </div>
                        <p class="no2">区/县/市</p>
                    </div>
                    <!-- 学校 -->
                    <div class="xuexiao" :style="{marginBottom:tuance&&'25px'}">
                        <div class="zheceng" v-if="tuance"></div>
                        <p class="no1" style="width: 80px">学<span style="opacity:0">空空</span>校：</p>
                        <input type="text" v-model="school" placeholder="请输入学校的名称" onfocus="placeholder=''" onblur="placeholder='请输入学校的名称'">
                    </div>
                    <!-- 高考年份 -->
                    <div class="year" :style="{marginBottom:tuance&&'25px'}">
                        <div class="zheceng" v-if="tuance"></div>
                        <p class="no1" style="width: 80px">高考年份：</p>
                        <el-select v-model="year" class="year1" slot="prepend" placeholder="请选择">
                            <el-option :label="years+item-1" :value="years+item-1" v-for="item in 6" :key="index"></el-option>
                            <el-option label="成年人" value="成年人"></el-option>
                        </el-select>
                        &nbsp;<span>{{nianji[year-years]}}</span>
                        <!-- <span class="no2">当前选择年份适用高三学生</span> -->
                    </div>
                    <!-- 班级 -->
                    <div class="ownname" v-if="tuance" :style="{marginBottom:tuance&&'25px'}">
                        <p class="no1" style="width: 80px">班<span style="opacity:0">空空</span>级：</p>
                        <el-select v-model="classNumber" class="classNumber" slot="prepend" placeholder="请选择">
                            <el-option  :label="start+item-1" :value="start+item-1" v-for="item  in  end-start+1" :key="index"></el-option>
                        </el-select>
                    </div>
                    <!-- 姓名 -->
                    <div class="ownname" :style="{marginBottom:tuance&&'25px'}">
                        <p class="no1" style="width: 80px">姓<span style="opacity:0">空空</span>名：</p>
                        <input type="text" v-model="ownname" placeholder="请输入你的姓名" onfocus="placeholder=''" onblur="placeholder='请输入你的姓名'">
                    </div>
                    <!-- 请输入手机号-->
                    <div class="ownname" v-if="tuance" :style="{marginBottom:tuance&&'25px'}">
                        <p class="no1" style="width: 80px">手<span style="opacity:0">空空</span>机：</p>
                        <input type="number" v-model="phone" placeholder="请输入你的手机号" onfocus="placeholder=''" onblur="placeholder='请输入你的手机号'">
                    </div>
                    <div class="sex">
                        <p class="no1" style="width: 80px">性<span style="opacity:0">空空</span>别：</p>
                        <div class="el">
                            <el-radio-group v-model="sex">
                                <el-radio :label="1">男</el-radio>
                                <el-radio :label="2" class="women">女</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                    <p class="warning">{{warning}}</p>
                    <div @click="goHome" class="goHome">确定</div>
                    <p class="bottom">注以上信息一旦提交不能修改</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.mark {
    position: fixed;
    width: 100%;
    left: 0px;
    top: 0px;
    bottom: 0px;
    overflow-y: scroll;
    right: 0px;
    background-color: #fff;
    z-index: 100000000000000000;
}
.perfectInformation {
    position: absolute;
    left: 50%;
    margin-left: -600px;
    // top: 20px;
    width: 1220px;
    height: 600px;
    z-index:  1000;
    .top_title {
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        color: #333;
        text-align: center;
    }
    .content {
        box-sizing: border-box;
        height: 600px;
        box-shadow: 0px 0px 10px #e7e6e6;
    }
    .content1 {
        box-sizing: border-box;
        height: 400px;
        overflow-y: auto;
        box-shadow: 0px 0px 10px #e7e6e6;
    }
    .left_banner {
        float: left;
        width: 510px;
        height: 600px;
        background: url(/imgs/user/bg2.png) no-repeat -1px center;
    }
    .right_content {
        padding-top: 50px;
        float: left;
        width: 690px;
        height: 550px;
        background-color: #fff;

        .warning{
            height: 30px;
            font-size: 12px;
            color: red;
            line-height: 30px;
            text-align: center;
        }
        .linkage {
            // padding-top: 30px;
            position: relative;
            margin-bottom: 35px;
            height: 42px;
            .el {
                float: left;
            }
            .no1 {
                float: left;
                padding-left: 40px;
                width: 70px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
                background: url(/imgs/user/icon_xinghao.png) no-repeat 22px center;
                background-size: 12px 12px;
            }
            .no2 {
                float: left;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #333;
                border: 1px solid #d9d9d9;
                margin-right: 10px;
                border-left: 0px solid #000;
                padding: 0px 4px;
            }
            .childSpan {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            ul {
                li {
                    width: 120px !important;
                    padding: 0px !important;
                }
            }

        }
        .xuexiao {
            position: relative;
            margin-bottom: 35px;
            .no1 {
                float: left;
                padding-left: 40px;
                width: 70px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
                background: url(/imgs/user/icon_xinghao.png) no-repeat 22px center;
                background-size: 12px 12px;
            }
            input {
                width: 290px;
                padding-left: 10px;
                height: 40px;
                border: none;
                border-radius: 2px;
                border: 1px solid #d9d9d9;
                color: #333;
                font-size: 14px;
            }
            input::-webkit-input-placeholder {
                color: #666;
            }

        }
        .year {
            position: relative;
            margin-bottom: 35px;
            .no1 {
                float: left;
                padding-left: 40px;
                width: 80px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
                background: url(/imgs/user/icon_xinghao.png) no-repeat 22px center;
                background-size: 12px 12px;
            }
            .no2 {
                color: red;
            }
        }
        .ownname {
            height: 42px;
            margin-bottom: 35px;
            .no1 {
                float: left;
                padding-left: 40px;
                width: 70px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
                background: url(/imgs/user/icon_xinghao.png) no-repeat 22px center;
                background-size: 12px 12px;
            }
            input {
                width: 290px;
                padding-left: 10px;
                height: 40px;
                border: none;
                border-radius: 2px;
                border: 1px solid #d9d9d9;
                color: #333;
                font-size: 14px;
            }
            input::-webkit-input-placeholder {
                color: #666;
            }
        }
        .sex {
            margin-bottom: 10px;
            .no1 {
                float: left;
                padding-left: 40px;
                width: 70px;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: #333;
                background: url(/imgs/user/icon_xinghao.png) no-repeat 22px center;
                background-size: 12px 12px;
            }
            .no2 {
                color: red;
            }
        }
        .goHome {
            width: 220px;
            height: 44px;
            font-size: 14px;
            color: #fff;
            text-align: center;
            line-height: 44px;
            background-color: #3492f9;
            margin: 0 auto;
            border-radius: 22px;
            cursor: pointer;
            box-shadow: 0px 3px 5px #246cbb;
            &:active {
                background-color: #246cbb;
            }
        }
        .bottom {
            font-size: 12px;
            line-height: 50px;
            text-align: center;
            color: red;
        }
    }
}
</style>
<style type="text/css" lang='less'>
    .classNumber{
        width: 120px !important;
        box-sizing: border-box;
        input{
            border:1px solid #D9D9D9 !important;
        }
    }
    .zheceng{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
    }
.perfectInformation  .linkage .suozaidi1 .el-input__inner{
    width: 130px;
    height: 42px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
}
.perfectInformation  .linkage .suozaidi2 .el-input__inner{
    width: 130px;
    height: 42px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
}
.perfectInformation  .linkage .suozaidi3 .el-input__inner{
    width: 130px;
    height: 42px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
}
.perfectInformation  .year .year1 .el-input__inner{
    width: 120px;
    height: 42px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
}
.perfectInformation .sex  {
    .el-radio-group .is-checked{
        background-color: #fff;
        border: none !important;
    }
    .el-radio-group .el-radio {
        // margin-right: 35px;
        margin-bottom: 0px;
        height: 42px;
        line-height: 42px;
        // display: flex;
        // vertical-align: middle;
        // align-items: center;
        .el-radio__label {
            display: inline-block;
            padding:0px 40px;
            line-height: 42px;
            height: 42px;
            background: url(/imgs/user/men.png) no-repeat 13px center;
        }
        .el-radio__input {
            padding-top: 0px;
            line-height: 42px;
            .el-radio__inner {
                margin-top: 15px;
            }
        }
    }
    .el-radio-group .el-radio .el-radio__input {
        display: block;
        float: left;
        padding-top: 0px;
    }
    .is-checked .el-radio__label {
        color: #333 !important;
    }
    .women {
        .el-radio__label {
            background: url(/imgs/user/women.png) no-repeat 13px center !important;
        }
    }

}

</style>
<style type="text/css">
.el-popper {
    z-index: 10000000000000 !important;
}
</style>
<script>
export default {
    // props: [ 'message' ],
    data() {
        return {
            // 接收省市区数据
            mapData: [],
            // // 省份数据
            // provinceData: [],
            // 市、县数据
            cityData: [],
            // 区数据
            areaData: [],
            // 省市区
            province: '',
            city: '',
            area: '',
            school: '',
            year: '',
            ownname: '',
            sex: '',
            // 错误提示
            warning:'',
            //班级
            classNumber:'',
            phone:'',
            // agentId为20时，是学马自己的不限制省份，其他为代理商，限制省份
            agentId: -1,
            province0: '',
            city0: '',
            area0: '',
            school0: '',
            year0: '',
            // 代理商开通省市
            openProvinceData: [],
            openCityData: [],
            isShowScoll: false,
            tuance:false,
            start:'',
            end:'',
            years:'',
            nianji:['高三','高二','高一','初三','初二','初一']
        }
    },
    watch: {
        province() {
            // 如果代理商设置了省
            var provinceName = this.province;
            var _this = this;
            this.warning = '';
            if(this.province0) {
                this.province = this.province0;
            }else {
                this.city = '';
            }
            if(this.openProvinceData.length == 0) {
                this.mapData.forEach(function(item, index) {
                    if(item.name == provinceName) {
                        _this.cityData = item.cityList;
                        // return;
                    }
                })
            }else {
                this.openProvinceData.forEach(function(item, index) {
                    if(item.name == provinceName) {
                        _this.openCityData = item.child;
                    }
                })
            }
        },
        city() {
            var provinceName = this.province;
            var cityName = this.city;
            var _this = this;
            var arr1 = [];
            var arr2 = [];
            this.warning = '';
            if(this.city0) {
                this.city = this.city0;
            }else {
                this.area = '';
            }
            if(this.openProvinceData.length == 0) {
                this.cityData.forEach(function(item, index) {
                    if(item.name == cityName) {
                        // console.log(555555)
                        _this.areaData = item.areaList;
                        return;
                    }
                })
            }else {
                this.mapData.forEach(function(item, index) {
                    if(item.name == provinceName) {
                        arr1 = item.cityList;
                        return;
                    }
                })
                arr1.forEach(function(item, index) {
                    if(item.name == cityName) {
                        _this.areaData = item.areaList;
                        return;
                    }
                })
            }
        },
        area() {
            this.warning = '';
            if(this.area0) {
                this.area = this.area0;
            }
        },
        school() {
            this.warning = '';
            if(this.school0) {
                this.school = this.school0;
            }
        },
        year() {
            if(this.year0) {
                this.year = this.year0;
            }
        },
        ownname() {
            this.warning = '';
        }
    },
    methods:{
        // 加载china地点数据，三级
        getCityData:function(){
            var _this = this;
            this.$ajax.get('/data/map.json')
                .then(function(res){
                    if (res.status==200) {
                        _this.mapData = res.data;
                    }

                })
                .then(function(res) {
                    _this.getUserInfo();
                })
                .catch(function(error){

                })
        },
        goHome() {
            this.warning=''
            if(!this.province) {
                this.warning = "请选择省份";
                return;
            }
            if(!this.city) {
                this.warning = "请选择城市";
                return;
            }
            if(!this.area) {
                this.warning = "请选择区/县/市";
                return;
            }

            if(!this.school) {
                this.warning = "请填写学校名称";
                return;
            }
            if(this.tuance){
                if(!this.classNumber) {
                    this.warning = "请填写班级";
                    return;
                }
            }
            if(!this.ownname) {
                this.warning = "请填写姓名";
                return;
            }
            if(this.tuance){
                if(!this.phone) {
                    this.warning = "请填写手机号";
                    return;
                }
                var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
                if(!reg.test(this.phone)) {
                    this.warning = '请输入正确的手机号';
                    return;
                }
            }
            if(!this.sex) {
                this.warning = "请选择性别";
                return;
            }
            var province = this.province;
            var city = this.city;
            var area = this.area;
            var schoolName = this.school;
            var baccllYear = this.year;
            var name = this.ownname;
            var sex = this.sex;
            var token =  window.sessionStorage.getItem('ymtxToken')
            var _this = this;
            var schoolClass=this.classNumber
            var phone=this.phone;
            this.$ajax
                // get请求
                .post(this.G_uri + this.ports.user.setImproveInfo, {
                    // data
                    province: province,
                    city: city,
                    area: area,
                    schoolName: schoolName,
                    baccllYear: baccllYear,
                    name: name,
                    sex: sex,
                    token: token,
                    schoolClass:schoolClass,
                    phone:phone,
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.$router.push('/careerArchives')
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 获取代理商代理省份城市
        getProvance() {
            // agent/detail
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            this.$ajax.post(this.G_uri + '/agent/detail', {
                webSite: OEMdomain
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    _this.agentId = res.data.data.agentId;
                    _this.openProvinceData = res.data.data.openProvince;
                }else if(res.data.code == 1016) {
                    _this.$router.push('/login');
                }
            })
            .catch(function(error) {
            });
        },
        //获取最低高考年份
        getYear(){
            var date=new Date();
            var year=date.getFullYear();
            var mounth=date.getMonth()+1;
            var day=date.getDate();
            if(mounth>=9){
                year+=1
            }
            this.years=year;
            this.year=year;
        }
    },
    created:function(){
        this.getYear();
        this.getCityData();
        this.getProvance();
    }
}
</script>

