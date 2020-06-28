<template>
    <div class="zhuanyexiangqing">
        <div class="header">
            <div class="inner">
               <!--  <div class="mianbaoxie">
                    <img src="/imgs/xingaokao/mubiaotansuo/icon_fangzi.png" alt="" style="position: relative;top:-2px">
                    <span class="no1" @click="$router.push('/home')">首页></span>
                    <span class="no2" @click="$router.go(-1)" v-show="!($route.query.from == 'zhuanyeku')">专业科目要求 ></span>

                    <span class="no2" @click="$router.go(-1)"  v-show="$route.query.from == 'zhuanyeku'">专业库 ></span>
                    <span class="no3">{{cdata2.name}}</span>
                    <div class="goBack" @click="$router.go(-1)">返回</div>
                </div> -->

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
                </div>
                <div class="top_title" v-show="type == 2">
                    <div class="imgBox"></div>
                    <div class="main">
                        <p class="title">{{cdata2.name}}</p>
                        <p class="detail"><span>专业代码： {{cdata2.code}}</span></p>
                    </div>
                </div>
                <div class="goBack" @click="$emit('go-back')"></div>
            </div>
        </div>
        <div class="inner">
            <div class="benke" v-show="type == 1">
                <div class="content">
                    <!-- 培养目标 -->
                    <div class="neirongBox">
                        <p class="title">培养目标</p>
                        <div class="xiangqing" v-html="cdata2.target"></div>
                    </div>
                    <!-- 主要课程 -->
                    <div class="neirongBox">
                        <p class="title">主要课程</p>
                        <div class="xiangqing" v-html="cdata2.course"></div>
                    </div>
                    <!-- 毕业生能力 -->
                    <div class="neirongBox">
                        <p class="title">毕业生能力</p>
                        <div class="xiangqing" v-html="cdata2.ability"></div>
                    </div>
                    <!-- 就业前景与方向 -->
                    <div class="neirongBox">
                        <p class="title">就业前景与方向</p>
                        <div class="xiangqing" v-html="cdata2.prospectDirection"></div>
                    </div>
                    <!-- 相近专业 -->
                    <div class="neirongBox">
                        <p class="title">相近专业</p>
                        <p class="xiangqing">
                            <span v-for="(item, index) in cdata2.similarName"> {{item.name}} </span>
                        </p>
                    </div>
                    <!-- 开设院校及排名 -->
                    <div class="yuanxiaopaiming">
                        <div class="neirongBox">
                            <p class="title">{{cdata2.name}}开设院校及热度指数:</p>
                        </div>
                        <el-table :data="kaisheyaunxiao" height="400" border :style="{width: '1160px', 'text-align': 'center'} ">
                            <el-table-column align="center"  prop="universityName" label="院校名称" width="290" height="50"></el-table-column>
                            <el-table-column align="center" prop="province" label="院校所在地" width="290" height="50"></el-table-column>
                            <el-table-column align="center" prop="rank" label="热度指数" width="290" height="50"></el-table-column>
                            <el-table-column align="center" prop="tagTesezhuanyeName" label="专业实力" width="288" height="50"></el-table-column>
                            <!-- <el-table-column align="center" label="选科要求" width="230" height="50">
                                <template slot-scope="scope"><span>{{scope.row.chooseCourseRequire}}</span><span v-show="scope.row.openProvince">{{ '(' + scope.row.openProvince + ')'}}</span></template>
                            </el-table-column> -->
                            <!-- <el-table-column v-if="openProvince" align="center" prop="openProvince " label="选科要求" width="220" height="50"></el-table-column> -->
                        </el-table>
                    </div>
                </div>
            </div>
            <!-- 专科 -->
            <div class="zhuanke" v-show="type == 2">
                <div class="content">
                    <!-- 专业方向举例 -->
                    <div class="neirongBox">
                        <p class="title">专业方向举例</p>
                        <div class="xiangqing" v-html="cdata2.prospectDirection"></div>
                    </div>
                    <!-- 主要对应职业类别 -->
                    <div class="neirongBox">
                        <p class="title">主要对应职业类别</p>
                        <p class="xiangqing"><span>{{cdata2.target}}</span></p>
                    </div>
                    <!-- 衔接中职专业举例 -->
                    <div class="neirongBox">
                        <p class="title">衔接中职专业举例</p>
                        <div class="xiangqing" v-html="cdata2.course"></div>
                    </div>
                    <!-- 接读本科专业举例 -->
                    <div class="neirongBox">
                        <p class="title">衔接中职专业举例</p>
                        <p class="xiangqing"><span v-for="(item, index) in cdata2.similarName">{{item.name}}</span></p>
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
        .header {
            height: 140px;
            color: #333;
            background: url(/imgs/xingaokao/mubiaotansuo/zhiyeku/bg_xiangqing.png) no-repeat center center;
            .inner {
                position: relative;
                overflow: hidden;
                padding-top: 40px;
            }
            .goBack {
                position: absolute;
                width: 60px;
                height: 32px;
                line-height: 26px;
                background: url(/imgs/xingaokao/xuankejuece/360xuanke/icon_goback.png) no-repeat center center;
                text-align: center;
                font-size: 12px;
                border-radius: 2px;
                top: 40px;
                right: 0px;
                cursor: pointer;
                color: #fff;
            }
            .top_title {
                // padding-top: 18px;
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
            }
        }

        .benke {
            padding-top: 20px;
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
                    }
                }
                .yuanxiaopaiming {
                    // .biyeshengnengli;
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
import Loading from '../../../../.././components/Loading.vue'
export default {
    props: ['majorId' ],
    components: { Loading },
    data() {
        return {
            cdata2: [],
            type: '',
            // 开设院校及排名
            kaisheyaunxiao: [],
            isShowLoading: true,
            // id: this.majorId,
        }
    },
    watch: {
        majorId() {
            this.dataUpdate();
            this.dataUpdate2();
        }
    },
    methods: {
        dataUpdate(id) {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            var id = this.majorId;
            this.type = 1;
            this.isShowLoading = true;
            this.$ajax
                // get请求
                .post( this.G_uri + '/target/subjectCategoryDetail', {
                    id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
                    if(res.data.code == 2000) {
                        _this.cdata2 = res.data.data;
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
            var id = this.majorId;
            this.$ajax
                // get请求
                .post( this.G_uri + '/target/getSubjectUniversityRankList', {
                    id: id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                // .then(({ data }) => console.log(data))
                .then(function(res) {
                    // console.log(res)
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
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        console.log(this.majorId)
    },
    created() {
        // this.dataUpdate();
        // this.dataUpdate2();

        // console.log(this.$route.query.from)
    }
}
</script>
