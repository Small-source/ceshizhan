<template>
    <div class="zizhaoxuexiaoku">
        <div class="inner">
            <!--  <div class="top_title">
                     自主招生学校列表
                  </div> -->
            <!--  <div class="search">
                <p>自主招生学校列表</p>
                <input type="text" v-model="searchValue" placeholder="请输入院校名称">
                <button type="button" @click="searchValues" class="button">
                    <img src="/imgs/zizhuxuanba/zizhaoluquku/search.png" alt="">
                </button>
            </div> -->
            <div class="top-navs">
                <!-- 办学层次 -->
                <div class="banxuecengci">
                        <div class="mingcheng">办学层次 > </div>
                        <div class="right">
                            <el-radio-group v-model="radio1" size="30px" type="text" border>
                                <el-radio :label="item.value" id="cengcis" v-for="(item, index) in banxuecengci" :key="index">{{item.names}}</el-radio>
                            </el-radio-group>
                        </div>
                </div>
                <!-- 地区 -->
                <div class="diqu" id="diqus">
                    <div class="box">
                        <div class="left">
                            <div class="mingcheng">地区 > </div>
                            <div class="box"></div>
                        </div>
                        <div class="right">
                            <el-radio-group v-model="radio2" size="30px" type="text" border >
                                <el-radio :label="item.value" v-for="(item, index) in diqu" :key="index"" :max="1" :class="'no' + index">{{item.names}}</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                </div>
                <!-- 办学性质 -->
                <div class="zhuguanbumen">
                    <div class="mingcheng">办学性质 > </div>
                    <div class="right">
                        <el-radio-group v-model="radio3" size="30px" type="text" border id="banxue">
                            <el-radio :label="item.value" id="zhuguanbumen" v-for="(item, index) in zhuguanbumen" :key="index"" :max="1">{{item.names}}</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <!-- 大学类别 -->
                <div class="daxueleibie">
                    <div class="mingcheng">大学类别 > </div>
                    <div class="right">
                        <el-radio-group v-model="radio4" size="30px" type="text" border id="daxue">
                            <el-radio :label="item.value" id="daxueleibie" v-for="(item, index) in daxueleibie" :key="index"" :max="1">{{item.names}}</el-radio>
                        </el-radio-group>
                    </div>
                </div>  
                <!-- 特色标签 -->
                <div class="tesebiaoqian">
                    <div class="mingcheng">特色标签 > </div>
                    <div class="right">
                        <span @click="biaoqian(item.names, item.idx)" v-for="(item, index) in tesebiaoqian" :key="index" :class="ischecked == item.idx ? 'active' : ''">{{item.names}}</span>
                    </div>
                </div> 
            </div>
            <div class="content">
                <div class="neirongBox" v-for="(item, index) in cdata" :key="index">
                    <div class="box">
                        <div class="left">
                            <img :src="item.logo" alt="">
                            <div class="area">{{item.city}}</div>
                        </div>
                        <div class="right">
                            <div class="title">
                                <strong class="University">{{item.name}}</strong>
                                <p class="tese">
                                    <span class="no0" v-show="item.tagShuangyiliuName">{{item.tagShuangyiliuName}}</span>
                                    <span class="no1" v-show="item.tag985Name">{{item.tag985Name}}</span>
                                    <span class="no2" v-show="item.tag211Name">{{item.tag211Name}}</span>
                                    <span class="no3" v-show="item.tagZhongdianxuekeName">{{item.tagZhongdianxuekeName}}</span>
                                    <span class="no4" v-show="item.tagTesezhuanyeName">{{item.tagTesezhuanyeName}}</span>
                                    <span class="no5" v-show="item.tagBaoyanzigeName">{{item.tagBaoyanzigeName}}</span>
                                </p>
                            </div>
                            <p class="lishuyu">隶属于：{{item.affiliate}}</p>
                            <p class="teshezhuanye">特色专业：
                                <span v-for="(item, index) in item.subjectName" :key="index">{{item.subject_name}}、</span>
                            </p>
                            <p class="zhongdianxueke">重点学科：<span v-for="(item, index) in item.universityStressName" :key="index">{{item.stress_name}}、 </span></p>
                        </div>
                    </div> 
                    <!-- 查看详情 -->
                    <div class="goDetail"  @click="go(item.id)">查看详情</div>  
                </div>
            </div>
            <div class="foot">
                <div class="pages">
                    <span class="count">共{{count}}条 {{pageValue}}/{{totalPage}}页</span>
                    <span @click="goOn(1)">首页</span>
                    <span @click="goBack()" v-show="pageValue > 1">上一页</span>
                    <span @click="goOn(page[0])" :class="pageValue === page[0] ? 'active' : 'button'">{{page[0]}}</span>
                    <span @click="goOn(page[1])" :class="pageValue === page[1] ? 'active' : 'button'" v-show="totalPage >= page[1]">{{page[1]}}</span>
                    <span @click="goOn(page[2])" :class="pageValue === page[2] ? 'active' : 'button'" v-show="totalPage >= page[2]">{{page[2]}}</span>
                    <span @click="goOn(page[3])" :class="pageValue === page[3] ? 'active' : 'button'" v-show="totalPage >= page[3]">{{page[3]}}</span>
                    <span @click="goOn(page[4])" :class="pageValue === page[4] ? 'active' : 'button'" v-show="totalPage >= page[4]">{{page[4]}}</span>
                    <span @click="goNext()" v-show="pageValue < totalPage">下一页</span>
                    <span @click="goOn(totalPage)" v-show="totalPage > 5">尾页</span>
                </div>
            </div>
        </div>    
    </div>
</template>
<style type="text/css" lang='less' scoped>
.zizhaoxuexiaoku {
    margin-top: 20px;
    // padding: 0px 20px;
    padding-bottom: 20px;
    .inner {
        box-sizing: border-box;
        padding: 0px 20px;
        width: 1220px;
        margin: 0 auto;
        background-color: #fff;
        padding-bottom: 40px;
    }
    .top_title {
        color: #333;
        font-size: 14px;
        font-weight: bold;
        line-height: 48px;
    }
    .search {
        box-sizing: border-box;
        height: 122px;
        padding: 16px 0 0px;
        border-bottom: 1px solid #F2F2F2;
        input {
            width: 556px;
            height: 44px;
            border-radius: 22px;
            border:1px solid #3592F9;
            float: left;
            padding-left: 15px;
            font-size: 14px;
            background: #F9F9F9;
        }
        p{
            font-size: 14px;
            color: #000;
            font-weight: bold;
            margin-bottom: 17px;

        }
        .button {
            margin-left: 5px;
            float: left;
            width: 88px;
            height: 45px;
            border-radius: 20px;
            text-align: center;
            line-height: 45px;
            color: #fff;
            background-color: #2c8ffc;
            border:1px solid  #3592F9;
            position: relative;
            left:-94px;
            top:0;
            img{
                position: relative;
                top:-2px;
            }
        }
    }
    .top-navs {
        border-radius: 5px;
        background-color: #fff;
        .mianbaoxie {
            font-size: 12px;
            color: #333;
            line-height: 32px;

        }
        .banxuecengci {
            box-sizing: border-box;
            padding-top: 20px;
            padding-bottom: 15px;
            width: 1200px;
            height: 56px;
            // line-height: 50px;
            border-bottom: 1px solid #f2f2f2;
            .mingcheng {
                float: left;
                width: 72px;
                padding-right: 26px;
                text-align: right;
                color: #333;
                font-size: 13px;
                font-weight: 600;
            }
            .right {
                width: 1000px;
                float: left;
                font-size: 12px;
            }
        }
        .diqu {
            width: 1200px;
            height: 68px;
            padding-top: 14px;
            // line-height: 54px;
            border-bottom: 1px solid #f2f2f2;
            overflow: hidden;
            .box {
               width: 1250px; 
            }
            .left {
                float: left;
                width: 72px;
                padding-right: 90px;
                text-align: right;
                color: #333;
                font-size: 14px;
                font-weight: bold;
            }
            .mingcheng {
                line-height: 22px;
                width: 72px;
                padding-right: 26px;
                text-align: right;
                color: #333;
                font-size: 13px;
                font-weight: 600;
            }
            .right {
                width: 1054px;
                float: left;
                .no0 {
                    margin-left: -65px;
                }
            }
        }
        .zhuguanbumen {
            width: 1200px;
            // height: 50px;
            // line-height: 50px;
            padding: 15px 0px;
            height: 22px;
            border-bottom: 1px solid #f2f2f2;
            .mingcheng {
                float: left;
                width: 72px;
                padding-right: 26px;
                text-align: right;
                color: #333;
                font-size: 13px;
                font-weight: 600;
            }
            .right {
                width: 1010px;
                float: left;
            }
        }
        .daxueleibie {
            width: 1200px;
            padding: 15px 0px;
            height: 22px;
            border-bottom: 1px solid #f2f2f2;
            .mingcheng {
                float: left;
                width: 72px;
                padding-right: 26px;
                text-align: right;
                color: #333;
                font-size: 13px;
                font-weight: 600;
            }
            .right {
                width: 1010px;
                float: left;
            }
        }
        .tesebiaoqian {
            width: 1200px;
            height: 50px;
            line-height: 50px;
            .mingcheng {
                float: left;
                width: 72px;
                padding-right: 26px;
                text-align: right;
                color: #333;
                font-size: 13px;
                font-weight: 600;
            }
            .right {
                color: #666;
                width: 1093px;
                float: left;
                font-size: 12px;
                height: 32px;
                span {
                    padding: 3px 13px;
                    border-radius: 12px;
                    cursor: pointer;
                    background-color: #f5f7f6;
                    margin-right: 15px;
                }
                .active {
                    color: #fff;
                    background-color: #2c8ffc; 
                }
            }
          
        }
    }
    .content {
        padding-top: 25px;
        width: 1180px;
        // overflow: hidden;
        .neirongBox {
            position: relative;
            box-sizing: border-box;
            background-color: #fff;
            height: 170px;
            overflow: hidden;
            margin-bottom: 20px;
            border-radius: 3px;
            border: 1px solid #dcdcdc;
            .box {
                width: 1300px;
            }
            .left {
                float: left;
                width: 170px;
                text-align: center;
                padding-top: 18px;
                // height: 120px;
                img {
                    width: 112px;
                    height: 112px;
                    border-radius: 50%;
                }
                .area {
                    // margin-top: 10px;
                    text-align: left;
                    padding-left: 72px;
                    // width: 90px;
                    margin: 0 auto;
                    font-size: 12px;
                    color: #9fa3af;
                    background: url(/imgs/xingaokao/mubiaotansuo/yuanxiaoku/area.png) no-repeat 44px center;
                    background-size: 24px 24px;

                }  
            }
            .right {
                padding-top: 20px;
                float: left;
                .title {
                    height: 35px;
                    .University {
                        color: #333333;
                        font-size: 20px;
                        float: left;
                    }
                    .tese {
                        float: left;
                        padding-left: 20px;
                        .no0 {
                            display: inline-block;
                            padding: 0px 12px;
                            margin-right: 20px;
                            // border-radius: 3px;
                            font-size: 14px;
                            line-height: 24px;
                            height: 24px;
                            color: #333;
                            // background-color: #7abaff;
                            border: 1px solid #7abaff;
                        }
                        .no1 {
                           .no0;
                           // background-color: #c39afe; 
                           border: 1px solid #c39afe;
                        }
                        .no2 {
                            .no0; 
                            // background-color: #ffa13d;
                            border: 1px solid #ffa13d;
                        }
                        .no3 {
                            .no0; 
                            // background-color: #ffa13d;
                            border: 1px solid #ffa13d;
                        }
                        .no4 {
                            .no0; 
                            // background-color: #0db815;
                            border: 1px solid #0db815;
                        }
                        .no5 {
                            .no0; 
                            // background-color: #0db815;
                            border: 1px solid #0db815;
                        }
                    }
                }
                .lishuyu {
                    font-size: 14px;
                    color: #666;
                    line-height: 32px;
                    height: 32px;
                }
                .teshezhuanye {
                    font-size: 14px;
                    color: #666;
                    line-height: 32px;
                    height: 32px;
                }
                .zhongdianxueke {
                    font-size: 14px;
                    color: #666;
                    line-height: 32px;
                    height: 32px;

                }
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
                // background-color: #2c8ffc;
                border-radius: 16px;
                border: 1px solid #2c8ffc;
                color: #2c8ffc;
                cursor: pointer;
                &:hover {
                    background-color: #2c8ffc;
                    color: #fff;
                }
                &:active {
                    background-color: #156def;
                }

            }
            
        }
    }
    .foot {
        width: 1000px;
        margin: 0 auto;
        line-height: 30px;
        padding-top: 25px;
        .pages {
            // width: 800px;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            // display: flex;
            span {
                display: inline-block;
                margin-left: 5px;
                width: 50px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid #dedede;
                cursor: pointer;
                &:hover {
                    background-color: #2d8ffc;
                    color: #fff;
                }
            }
            .count {
                width: 150px;
                font-size: 14px;
                border: none;
            }
            .active {
                display: inline-block;
                margin-left: 5px;
                width: 50px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid #dedede;
                background-color: #2d8ffc;
                color: #fff;
            }
        }
   }
}
</style>
<style type="text/css" lang='less'>
.zizhaoxuexiaoku {
    background-color: #f5f7f6;
   
    .el-radio-group .el-radio {
        border-radius: 12px;
        background-color: #f5f7f6;
        margin-right: 15px;
    }
    .el-radio-group .is-checked{
        border-radius: 12px;
        background-color: #2d8ffc;
    }

    #cengcis .el-radio__label{
        padding:  0 13px;
        display: block;
        height: 22px;
        text-align: center;
        line-height: 22px !important;
        font-size: 12px !important;
        float: left;
        color: #666;
        border-radius: 12px;
    }
    #diqus .el-radio-group .el-radio .el-radio__label {
        padding: 0 13px;
        display: block;
        // width: 50px;
        height: 22px;
        text-align:  center;
        line-height: 22px;
        font-size: 12px !important;
        float: left;
        color: #666;
    }
    #diqus .el-radio-group .el-radio {
        margin-bottom: 10px;
    }
    
    #banxue {
        width:  100%;
    }
    #zhuguanbumen .el-radio__label{
        display: block;
        padding:  0 13px;
        height: 22px;
        text-align:  center;
        line-height: 22px !important;
        font-size: 12px !important;
        float: left;
        color: #666;
    }
    #daxue {
        width:  100%;
    }
    #daxueleibie {
        margin-right: 15px;
    }
    #daxueleibie .el-radio__label{
        display: block;
        padding:  0 13px;
        // width: 50px;
        height: 22px;
        text-align:  center;
        line-height: 22px !important;
        font-size: 12px !important;
        float: left;
        color: #666;
    }
}
</style>
<script>
export default {
    // props: [ 'message' ],
    data() {
      return { 
        searchValue: '',
        radio1: '',
        radio2: '',
        radio3: '',
        radio4: '',
        // 双一流
        tagShuangyiliu: '',
        tag211: '',
        tag985: '',
        tagZhongdianxueke: '',
        tagTesezhuanye: '',
        tagBushenghejian: '',
        ischecked: '0',
        cdata: [],
        // 页码值
        pageValue: 1,
        // 每页显示多少条数据
        pageSize: 15,
        // 共有多少条
        count: '',
        // 一共有多少页
        totalPage: '',
        // 页码
        page: [ 1 ,2 , 3, 4, 5 ],
        // 办学层次
        banxuecengci: [
            { names: '全部', value: '' },
            { names: '本科', value: '1' },
            { names: '专科', value: '2' },
        ],
        // 地区
        diqu: [
            { names: '全部', value: '' },
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
            { names: '全部', value: '' },
            { names: '公办', value: '1' },
            { names: '民办', value: '2' },
            { names: '内地与港澳台地区合作办学', value: '3' },
            { names: '中外合作办学', value: '4' },
        ],
        // 大学类别
        daxueleibie: [
            { names: '全部', value: '' },
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
            { names: '全部', idx: '0' },
            { names: '一流大学建设高校A类', idx: '1' },
            { names: '一流大学建设高校B类', idx: '2' },
            { names: '一流学科建设高校', idx: '3' },
            { names: '985', idx: '4' },
            { names: '211', idx: '5' },
            { names: '国家重点学科', idx: '6' },
            { names: '国家特色专业', idx: '7' },
            { names: '部省合建', idx: '8' }
        ],
      }
    },
    computed: {
        tese() {
            var str = this.cdata.tag;

            var arr = []
            if(str) {
                arr = str.split(' ');
            }
            // console.log(this.cdata)
            return arr;
        }
    },
    watch: {
        radio1() {
            // console.log(this.radio1)
            this.pageValue = 1;
            this.dataUpdate();
        },
        radio2() {
            this.pageValue = 1;
            this.dataUpdate();
        },
        radio3() {
            this.pageValue = 1;
            this.dataUpdate();
        },
        radio4() {
            this.pageValue = 1;
            this.dataUpdate();
        },
        pageValue() {
            this.dataUpdate();
        }
    },
    methods: {
        searchValues() {
            var value = this.searchValue
            // console.log(value)
            this.cdata = this.data.filter((item) => {
                return item[2].includes(value);
            });
        },
        dataUpdate() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var radio1 = this.radio1;
            var radio2 = this.radio2;
            var radio3 = this.radio3;
            var radio4 = this.radio4;
            var tagShuangyiliu = this.tagShuangyiliu;
            var tag211 = this.tag211;
            var tag985 = this.tag985;
            var tagZhongdianxueke = this.tagZhongdianxueke;
            var tagTesezhuanye = this.tagZhongdianxueke;
            var tagBushenghejian = this.tagBushenghejian;
            var _this = this;
            var pageNumber = this.pageValue;
            var pageSize = this.pageSize;
            // console.log(this)


            this.$ajax
                // get请求
                // /api/target/getUniversityList
                .post(this.G_uri + '/target/getUniversityList', {
                    // data
                    token: token,
                    schoolLevel: radio1,
                    province: radio2,
                    schoolNature: radio3,
                    type: radio4,
                    tagShuangyiliu: tagShuangyiliu,
                    tag211: tag211,
                    tag985: tag985,
                    tagZhongdianxueke: tagZhongdianxueke,
                    tagTesezhuanye: tagTesezhuanye,
                    tagBushenghejian: tagBushenghejian,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    tagZizhuzhaosheng: '',
                    tagQiangjijihua: 1 
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    console.log(res.data.data)
                    if(res.data.code == 2000) {
                        _this.cdata = res.data.data.list;
                        _this.totalPage = res.data.data.page.totalPage;
                        _this.count = res.data.data.page.count;
                        // console.log(_this.totalPage)
                        // console.log(_this.cdata)
                        // console.log(res)
                    }else if(res.data.code == 2026) {
                        _this.$router.push('/perfectInformation');
                    }
                   
                })
                .catch(function(error) {
                    alert('服务器繁忙')
                })
        },
        go(id) {
            var id = id;
            this.$router.push({  
                path: '/yuanxiaoxiangqing',   
                name: 'yuanxiaoxiangqing',  
                // params: {   
                //     key: 1,   
                //     msgKey: 'gaga'  
                // },  
                query: {  
                    id: id,    
                }  
            })
            window.scroll(0, 0);   
        },
        goOn(value) {
            this.pageValue = value;
            if(this.pageValue === 1) {
               for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] =  i + 1;
                } 
            }
            if(this.pageValue === this.totalPage) {
                if(this.totalPage % 5 == 1) {
                    this.page[0] = this.totalPage
                    this.page[1] = this.totalPage + 1;
                    this.page[2] = this.totalPage + 2;
                    this.page[3] = this.totalPage + 3;
                    this.page[4] = this.totalPage + 4;
                }else if(this.totalPage % 5 == 2) {
                    this.page[0] = this.totalPage -1;
                    this.page[1] = this.totalPage;
                    this.page[2] = this.totalPage + 1;
                    this.page[3] = this.totalPage + 2;
                    this.page[4] = this.totalPage + 3;
                }else if(this.totalPage % 5 == 3) {
                    this.page[0] = this.totalPage - 2;
                    this.page[1] = this.totalPage - 1;
                    this.page[2] = this.totalPage;
                    this.page[3] = this.totalPage + 1;
                    this.page[4] = this.totalPage + 2;
                }else if(this.totalPage % 5 == 4) {
                    this.page[0] = this.totalPage - 3;
                    this.page[1] = this.totalPage - 2;
                    this.page[2] = this.totalPage - 1;
                    this.page[3] = this.totalPage;
                    this.page[4] = this.totalPage + 1;
                }else if(this.totalPage % 5 == 0) {
                    this.page[0] = this.totalPage - 4;
                    this.page[1] = this.totalPage - 3;
                    this.page[2] = this.totalPage - 2;
                    this.page[3] = this.totalPage - 1;
                    this.page[4] = this.totalPage;
                }
            }
            window.scroll(0, 0);
        },
        // 上一页
        goBack() {
            if(this.pageValue % 5 === 1) {
                this.pageValue --;
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] -= 5;
                }
            }else {
                this.pageValue --;
            }
            window.scroll(0, 0);
        },
        // 下一页
        goNext() {
            if(this.pageValue % 5 === 0) {
                this.pageValue ++;
                for(var i = 0; i < this.page.length; i ++) {
                    this.page[i] += 5;
                }
            }else {
                this.pageValue ++;
            }
            window.scroll(0, 0);
        },
        // 特色标签
        biaoqian(index1, index2) {
            this.ischecked = index2;
            this.tagShuangyiliu = '';
            this.tag211 = '';
            this.tag985 = '';
            this.tagZhongdianxueke = '';
            this.tagTesezhuanye = '';
            this.tagBushenghejian = '';
            // console.log(index2)
            switch (index2) {
                case "1":
                    this.tagShuangyiliu = 1;
                    break;
                case "2":
                    this.tagShuangyiliu = 2;
                    break;
                case "3":
                    this.tagShuangyiliu = 3;
                    break;
                case "4":
                    this.tag985 = 1;
                    break;
                case "5":
                    this.tag211 = 1;
                    break;
                case "6":
                    this.tagZhongdianxueke = 1;
                    break;
                case "7":
                    this.tagTesezhuanye = 1;
                    break;    
                case "8":
                    this.tagBushenghejian = 1;
                    break;  
                default:
            }
            this.dataUpdate();
        }
    },
    created() {
        this.dataUpdate();
    }
}
</script>