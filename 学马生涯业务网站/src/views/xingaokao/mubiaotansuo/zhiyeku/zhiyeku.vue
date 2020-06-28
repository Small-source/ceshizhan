<template>
    <div class="zhiyeku" id="zhiyeku">
        <div class="searchBox">
            <div class="top">
                <div class="search">
                    <input type="text" v-model="searchValue" placeholder="搜索你感兴趣的职业">
                    <span @click="search">
                        <img src="/imgs/zizhuxuanba/zizhaoluquku/search.png" alt="">
                    </span>
                </div>
                <div class="right_img_box">
                    <img src="/imgs/xingaokao/mubiaotansuo/zhiyeku/zhiye_right.png" alt="">
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="top-navs">
                <!-- 职业分类 -->
                <div class="zhiyefenlei">
                    <div class="left">行业类别 </div>
                    <div class="right">
                        <span v-for="(item, index) in zhiyefenlei" @click="goToMajorScroll(item.names)" :class="item.names == radio1 ? 'active' : ''">{{item.names}}</span>
                    </div>
                </div>
                <div class="inner-content"  v-show="!isShowSearchData">
                    <!-- 职业 -->
                    <div class="jobs">
                        <ul class="joblis">
                            <li @click="go(item.id)" v-for="(item, index) in zhiyeData" :key="index">
                                <div class="title"><span>{{item.name}}</span></div>
                                <p class="xiangqing">{{item.introduction}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 搜索显示 -->
                <div v-show="isShowSearchData" class="searchData_box">
                    <div class="inner-content"  v-for="(value, key, index) in searchData">
                        <!-- 职业 -->
                        <div class="jobs">
                            <div class="big_title">{{key}}</div>
                            <ul class="joblis"  v-for="(item, index) in value">
                                <li @click="go(item.id)" v-for="(item, index) in zhiyeData" :key="index">
                                    <div class="title"><span>{{item.name}}</span></div>
                                    <p class="xiangqing">{{item.introduction}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    *{
        letter-spacing: 2px;
    }
.zhiyeku {
    padding-top: 20px;
    background-color: #fff;
    min-height: 1000px;
    padding-bottom: 40px;
    // 小导航，用于返回上一页
    .mianbaoxie {
        height: 32px;
        font-size: 12px;
        line-height: 32px;
        color: #333;
        position: relative;
        background-color: #f9f9f9;
        .inner {
            position: relative;
        }
        .no1 {
            padding-left: 5px;
            cursor: pointer;
            &:hover {
                color: #2d90f8;
            }
        }
        .no2 {
            padding-left: 10px;
            cursor: pointer;
            &:hover {
                color: #2d90f8;
            }
        }
        .no3 {
            padding-left: 10px;
            color: #2d90f8 ;
        }
        .goBack {
            position: absolute;
            width: 50px;
            height: 20px;
            line-height: 20px;
            background-color: #2d90f8;
            color: #fff;
            right: 0;
            top: 6px;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
        }
    }
    .searchBox{
        * {
            box-sizing: border-box;
        }
        width: 100%;
        background: #fff;
        .top{
            width: 1200px;
            margin: 0 auto;
            padding: 25px 0;
            padding-bottom: 40px;
            position: relative;
        }
        .right_img_box {
            position: absolute;
            right: 0px;
            top: 0px;
        }
    }
    .search{
        box-sizing: border-box;
        width: 604px;
        height:42px;
        position: relative;
        input{
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #4C99F3;
            background: #fff;
            padding-left: 20px;
            font-size: 14px;
        }
        span{
            text-align: center;
            display: block;
            float: right;
            height: 100%;
            width:82px;
            background:#3592F9;
            position: absolute;
            right: 0;
            top: 0;
            line-height: 42px;
            cursor: pointer;
        }
    }
    .inner {
        box-sizing: border-box;
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .top-navs {
        width: 100%;
        overflow: hidden;
        .searchData_box {
            padding-top: 20px;
        }
        .zhiyefenlei {
            border: 1px solid #f2f2f2;
            width: 900px;
            .left {
                width: 150px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 17px;
                border-top: 4px solid #2c8ffc !important;
                color: #2c8ffc;
                background-color: #f9f9f9;
                margin-top: -1px;
            }
            .right {
                font-size: 14px;
                color: #333333;
                padding: 15px 8px;
                overflow: hidden;
                span {
                    float: left;
                    font-size: 15px;
                    height: 30px;
                    line-height: 30px;
                    padding: 0px 15px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    margin-right: 10px;
                    &:hover {
                        background-color: #2c8ffc;
                        color: #fff;
                    }
                }
                .active {
                    background-color: #2c8ffc;
                    color: #fff;
                }
            }
        }
    }
    .inner-content {
        .jobs {
            .big_title {
                font-size: 15px;
                height: 30px;
                line-height: 30px;
                padding: 0px 15px;
                cursor: pointer;
                background-color: #2c8ffc;
                color: #fff;
                width: 870px;
            }
            .joblis {
                width: 900px;
                li {
                    padding-bottom: 20px;
                    .title {
                        padding-top: 30px;
                        font-size: 18px;
                        color: #333;
                        height: 46px;
                        line-height: 46px;
                        font-weight: 500;
                        border-bottom: 1px solid #f2f2f2;
                        font-weight: 600;
                        cursor: pointer;
                    }
                    .xiangqing {
                        padding-top: 36px;
                        font-size: 14px;
                        color: #333;
                        line-height: 24px;
                    }
                }
            }
        }
    }
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255,255,255,.6);
    }
}
</style>
<script>
import Loading from '../../../.././components/Loading.vue'
export default {
    components: { Loading },
    data() {
        return {
            isShowLoading: true,
            isShowSearchData: false,
            // 职业分类
            radio1: '互联网/IT',
            cdata: [],
            zhiyeData: [],
            cdata2: [],
            // 搜索值
            searchValue: '',
            // 职业分类
            zhiyefenlei: [
                { names: '互联网/IT', value: '互联网/IT' },
                { names: '交通/运输/物流', value: '交通/运输/物流' },
                { names: '农/林/牧/渔/水利', value: '农/林/牧/渔/水利' },
                { names: '制造业', value: '制造业' },
                { names: '咨询/专业服务', value: '咨询/专业服务' },
                { names: '广告/公关/市场', value: '广告/公关/市场' },
                { names: '房地产/建筑', value: '房地产/建筑' },
                { names: '政府/非盈利机构', value: '政府/非盈利机构' },
                { names: '教育/培训/科研', value: '教育/培训/科研' },
                { names: '文化/传媒/出版/印刷', value: '文化/传媒/出版/印刷' },
                { names: '服务/中介/物业', value: '服务/中介/物业' },
                { names: '消费品', value: '消费品' },
                { names: '生物/医药/保健', value: '生物/医药/保健' },
                { names: '电子/微电子', value: '电子/微电子' },
                { names: '电气/电力', value: '电气/电力' },
                { names: '石油/化工/能源', value: '石油/化工/能源' },
                { names: '艺术/休闲/运动', value: '艺术/休闲/运动' },
                { names: '通用类', value: '通用类' },
                { names: '通讯', value: '通讯' },
                { names: '金融/银行', value: '金融/银行' },
                { names: '其他', value: '其他' },
            ],
        }
    },
    methods: {

        search() {
            // 职业
            var name = this.searchValue;
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            name&&this.$ajax
                // get请求
                .post(this.G_uri + '/target/getOccupationList', {
                    name: name
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.searchData = res.data.data;
                        _this.isShowSearchData = true;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        dataUpdate() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            // 行业类别
            var industryCategory = this.radio1;
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/getOccupationCategoryList', {
                    industryCategory: industryCategory
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.isShowLoading = false;
                       _this.cdata = res.data.data;
                       _this.zhiyeData = res.data.data['互联网/IT'];
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 查看详情
        go(id) {
            // var id = id;
            // this.$router.push({
            //     path: '/zhiyexiangqing',
            //     name: 'zhiyexiangqing',
            //     // params: {
            //     //     id: id,
            //     // },
            //     query: {
            //         id: id,
            //     }
            // })
            let {href}=this.$router.resolve({
                path: '/zhiyexiangqing',
                name: 'zhiyexiangqing',
                // params: {
                //     id: id,
                // },
                query: {
                    id: id,
                }
            })
            window.open(href, '_blank');
        },
        goToMajorScroll(id) {
            this.radio1 = id;
            this.zhiyeData = this.cdata[id];
            this.searchValue = '';
            this.isShowSearchData = false;
        }
    },
    watch: {
    },
    created() {
        this.dataUpdate();
    }
}
</script>
