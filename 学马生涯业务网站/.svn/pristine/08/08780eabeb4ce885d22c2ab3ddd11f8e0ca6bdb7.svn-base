<template>
    <div class="zhuanyexiangqing">
        <div class="header">
            <div class="inner">
                <div class="top_title" v-show="type == 1">
                    <div class="imgBox"></div>
                    <div class="main">
                        <p class="title">{{cdata2.name}}</p>
                        <p class="detail">
                            <span>专业代码： {{cdata2.code}}</span>
                            <span>授予学位： {{cdata2.academicDegree}}</span>
                            <span>学制： {{cdata2.learnYear}}</span>
                        </p>
                    </div>
                    <div class="collect">
                        <span @click="goCollectMajor()" v-if="!isHadCollected">
                            <img src="/imgs/xingaokao/mubiaotansuo/icon_shoucang.png" alt="">
                        </span>
                        <span  @click="goCollectMajor()" v-else>
                            <img src="/imgs/xingaokao/mubiaotansuo/icon_shoucangdianliang.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="top_title" v-show="type == 2">
                    <div class="imgBox"></div>
                    <div class="main">
                        <p class="title">{{cdata2.name}}</p>
                        <p class="detail"><span>专业代码： {{cdata2.code}}</span></p>
                    </div>
                    <div class="collect">
                        <span  @click="goCollectMajor()" v-if="!isHadCollected">
                            <img src="/imgs/xingaokao/mubiaotansuo/icon_shoucang.png" alt="">
                        </span>
                        <span  @click="goCollectMajor()" v-else>
                            <img src="/imgs/xingaokao/mubiaotansuo/icon_shoucangdianliang.png" alt="">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="benke" v-show="type == 1">
                <div class="content">
                    <!-- 培养目标 -->
                    <div class="neirongBox">
                        <p class="title">培养目标</p>
                        <p class="xiangqing" v-html="cdata2.target"></p>
                    </div>
                    <!-- 主要课程 -->
                    <div class="neirongBox">
                        <p class="title">主要课程</p>
                        <p class="xiangqing" v-html="cdata2.course"></p>
                    </div>
                    <!-- 毕业生能力 -->
                    <div class="neirongBox">
                        <p class="title">毕业生能力</p>
                        <div class="xiangqing" v-html="cdata2.ability"></div>
                    </div>
                    <!-- 就业前景与方向 -->
                    <div class="neirongBox">
                        <p class="title">就业前景与方向</p>
                        <p class="xiangqing" v-html="cdata2.prospectDirection">
                        </p>
                    </div>
                    <!-- 相近专业 -->
                    <div class="neirongBox">
                        <p class="title">相近专业:</p>
                        <p class="xiangqing">
                            <span v-for="(item, index) in cdata2.similarName" @click="go(item.id,1)"> {{item.name}} </span>
                        </p>
                    </div>
                    <!-- 开设院校及排名 -->
                    <div class="yuanxiaopaiming" v-if="kaisheyaunxiao.length">
                        <div class="neirongBox">
                            <p class="title">{{cdata2.name}}开设院校及热度指数:</p>
                        </div>
                        <div class="table_title">
                            <ul>
                                <li>院校名称</li>
                                <li>院校所在地</li>
                                <li>热度指数</li>
                                <li>专业实力</li>
                            </ul>
                        </div>
                        <div class="table_box">
                            <table border="1" cellspacing="0">
                                <tr v-for="(item, index) in kaisheyaunxiao" :key="index">
                                    <td @click="goSchool(item.universityId)">{{item.universityName}}</td>
                                    <td>{{item.province}}</td>
                                    <td>{{item.rank}}</td>
                                    <td>{{item.tagTesezhuanyeName}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 专科 -->
            <div class="zhuanke" v-show="type == 2">
                <div class="content">
                    <!-- 专业方向举例 -->
                    <div class="neirongBox">
                        <p class="title">专业方向举例</p>
                        <p class="xiangqing">{{cdata2.prospectDirection}}</p>
                    </div>
                    <!-- 主要对应职业类别 -->
                    <div class="neirongBox">
                        <p class="title">主要对应职业类别</p>
                        <p class="xiangqing"><span>{{cdata2.target}}</span></p>
                    </div>
                    <!-- 衔接中职专业举例 -->
                    <div class="neirongBox">
                        <p class="title">衔接中职专业举例</p>
                        <p class="xiangqing">{{cdata2.course}}</p>
                    </div>
                    <!-- 接读本科专业举例 -->
                    <div class="neirongBox">
                        <p class="title">衔接中职专业举例</p>
                        <p class="xiangqing"><span v-for="(item, index) in cdata2.similarName"  @click="go(item.universityId,2)">{{item.name}}</span></p>
                    </div>
                </div>
            </div>
            <!-- <div class="goBack" @click="$router.go(-1)">返回</div> -->
        </div>
        <div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .zhuanyexiangqing {
        background: #f5f7f6;
        padding-bottom: 20px;
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        // 小导航，用于返回上一页
        .mianbaoxie {
            height: 40px;
            font-size: 12px;
            line-height: 40px;
            color: #fff;
            position: relative;
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
                color: #2d90f8;
            }
            .goBack {
                position: absolute;
                width: 50px;
                height: 26px;
                line-height: 26px;
                background-color: #2d90f8;
                color: #fff;
                right: 0;
                top: 3px;
                border-radius: 2px;
                text-align: center;
                cursor: pointer;
            }
        }
        .header {
            height: 140px;
            color: #333;
            background: url(/imgs/xingaokao/mubiaotansuo/zhiyeku/bg_xiangqing.png) no-repeat center center;
            margin-bottom: 20px;
            .inner {
                height: 140px;
                position: relative;
            }
            .top_title {
                padding-top: 40px;
                .imgBox {
                    width: 56px;
                    height: 56px;
                    float: left;
                    border: 2px solid #fff;
                    background: url(/imgs/xingaokao/mubiaotansuo/zhiyeku/icon_gongjuxiang.png) no-repeat center center;
                }
                .main {
                    float: left;
                    padding-left: 20px;
                    color: #fff;
                    .title {
                        font-size: 22px;
                        line-height: 24px;
                        margin-bottom: 20px;
                    }
                    .detail {
                        font-size: 14px;
                        line-height: 20px;
                        span {
                            margin-right: 50px;
                        }
                    }
                }
                .collect {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -25px;
                    cursor: pointer;
                    span {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .benke {
            .content {
                padding: 0px 20px;
                padding-bottom: 50px;
                background-color: #fff;
                .neirongBox {
                    .title {
                        font-size: 20px;
                        color: #333;
                        height: 54px;
                        line-height: 54px;
                        font-weight: 600;
                        border-bottom: 1px solid #dedede;
                        padding-left: 20px;
                        position: relative;
                        &:before {
                            content: '';
                            position: absolute;
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background-color: #333;
                            left: 0;
                            top: 24px;
                        }
                    }
                    .xiangqing {
                        font-size: 14px;
                        color: #666666;
                        line-height: 24px;
                        padding-top: 32px;
                        padding-bottom: 26px;
                        span {
                            margin-right: 10px;
                            &:hover {
                                cursor: pointer;
                                color: #3492f9;
                            }
                        }
                    }
                }
                .yuanxiaopaiming {
                    // .biyeshengnengli;
                    .table_title ul {
                        width: 1160px;
                        display: flex;
                        border-right: 1px solid #000;
                        li {
                            box-sizing: border-box;
                            flex: 1;
                            text-align: center;
                            height: 50px;
                            line-height: 50px;
                            font-size: 17px;
                            font-weight: 600;
                            color: #333;
                            background-color: #f5f5f5;
                            border-top: 1px solid #000;
                            border-left: 1px solid #000;
                        }
                    }
                    .table_box {
                        width: 1180px;
                        height: 358px;
                        overflow-y: auto;
                    }
                    table {
                        width: 1160px;
                        tr {
                            height: 50px;
                            &:hover {
                                background-color: #f5f5f5;
                            }
                            td {
                                &:first-child {
                                    cursor: pointer;
                                }
                                text-align: center;
                                height: 50px;
                                width: 25%;
                                font-size: 15px;
                            }
                        }
                    }

                    span {
                        width: 1000px !important;
                    }
                }
            }
        }
        .zhuanke {
            .benke .content;
            min-height: 700px;
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
<style type="text/css">
    .has-gutter {
        font-size: 20px;
        color: #333 !important;
    }
</style>

<script>
import Loading from '../../../.././components/Loading.vue'
export default {
    props: [ 'message' ],
    components: { Loading },
    data() {
        return {
            cdata2: [],
            type: '',
            // 开设院校及排名
            kaisheyaunxiao: [],
            isShowLoading: true,
            isHadCollected: false
        }
    },
    methods: {
        dataUpdate() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            var id = this.$route.query.id;
            this.type = this.$route.query.type;
            this.$ajax
                .post( this.G_uri + '/target/subjectCategoryDetail', {
                    id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.cdata2 = res.data.data;
                        _this.type = res.data.data.type;
                        _this.isShowLoading = false;
                    } else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }

                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        dataUpdate2() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            var id = this.$route.query.id;
            this.type = this.$route.query.type;
            this.$ajax
                .post( this.G_uri + '/target/getSubjectUniversityRankList', {
                    id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.kaisheyaunxiao = res.data.data;
                        _this.isShowLoading = false;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }

                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        // 查看详情
        go(id,type) {
            var id = id;
            var type = type;
            let {href}=this.$router.resolve({
                path: '/zhuanyexiangqing',
                name: 'zhuanyexiangqing',
                query: {
                    id: id,
                    type: type,
                    from: 'zhuanyeku'
                }
            })
            window.open(href, '_blank');
        },
        goSchool(id) {
            var id = id;
            window.scroll(0, 0);
            let {href}=this.$router.resolve({
                path: '/yuanxiaoxiangqing',
                name: 'yuanxiaoxiangqing',
                query: {
                    id: id,
                }
            })
            window.open(href, '_blank');
        },
        goCollectMajor() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            var id = this.$route.query.id;
            this.$ajax
                .post( this.G_uri + '/collect/storeSubject', {
                    collectionId: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.isHadCollected = !_this.isHadCollected;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        getCollectMajor() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            var id = this.$route.query.id;
            this.$ajax
                .post( this.G_uri + '/collect/getCollectSubjectId', {

                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    let collectionData = res.data.data;
                    if(res.data.code == 2000) {
                        let bol = collectionData.some((item) => {
                            return item == id
                        })
                        _this.isHadCollected = bol;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login')
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    created() {
        this.dataUpdate();
        this.getCollectMajor();
        this.dataUpdate2();

    }
}
</script>
