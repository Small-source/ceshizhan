<template>
    <div class="xuexiaoxiangqing">
        <div class="inner">
            <div class="goBack" @click="$router.go(-1)">返回</div>
            <div class="top-university">
                <div class="imgBox"></div>
                <div class="right">
                    <p class="title">
                        <span class="daxue">{{cdata.name}}</span>
                        <span v-for="(item, index) in tese" :key="index" :class="'no' + index">{{item}}</span>
                    </p>
                    <!-- 隶属于 -->
                    <div class="lishuyu">
                        <span>隶属于: </span><span>{{cdata.affiliate}}</span> 
                        <span>综合排名：</span> <span>{{cdata.rank}}</span>
                    </div>
                    <!-- 院校类型 -->
                    <div class="yuanxiaoleixing">
                        <span>院校类型: </span><span>{{cdata.type}}</span> 
                        <span>学历层次：</span> <span>{{cdata.schoolLevelName}}</span>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="left">
                    <ul class="lis">
                        <li @click="isShow = 'yuanxiaojianjie'" :class="isShow == 'yuanxiaojianjie' ? 'active' : ''">院校简介</li>
                        <li @click="isShow = 'zhongdianxueke'" :class="isShow == 'zhongdianxueke' ? 'active' : ''">重点学科</li>
                        <li @click="isShow = 'tesezhuanye'" :class="isShow == 'tesezhuanye' ? 'active' : ''">特色专业</li>
                        <li @click="isShow = 'kaishezhuanye'" :class="isShow == 'kaishezhuanye' ? 'active' : ''">开设专业</li>
                        <li @click="isShow = 'luquxin'" :class="isShow == 'luquxin' ? 'active' : ''">近三年录取分数线</li>
                    </ul>
                </div>
                <div class="right">
                    <!-- 院校简介 -->
                    <div class="yuanxiaojianjie" v-if="isShow == 'yuanxiaojianjie'">
                        <p class="title">院校简介</p>
                        <p class="xiangqing">{{cdata.introduction}}</p>
                    </div>
                    <!-- 重点学科 -->
                    <div class="zhongdianxueke" v-if="isShow == 'zhongdianxueke'">
                        <p class="title">重点学科</p>
                        <p class="xiangqing">
                            <span v-for="(item, index) in cdata.stressName" :key="index">{{item.stressName}}</span>
                        </p>
                    </div>
                    <!-- 特色专业 -->
                    <div class="tesezhuanye" v-if="isShow == 'tesezhuanye'">
                        <p class="title">特色专业</p>
                        <p class="xiangqing">
                            <span v-for="(item, index) in cdata.subjectName" :key="index">{{item.subjectName}}</span>
                        </p>
                    </div>
                    <!-- 开设专业 -->
                    <div class="kaishezhuanye" v-if="isShow == 'kaishezhuanye'">
                        <p class="title">开设专业</p>
                        <p class="xiangqing">
                            <span v-for="(item, index) in cdata.openSubject" :key="index">{{item.subjectName}}</span>
                        </p>
                    </div>
                    <!-- 近三年录取分数线 -->
                    <div class="luquxin" v-if="isShow == 'luquxin'">
                        <p class="title">近三年录取分数线</p>
                        <el-table :data="cdata.threeYearScore" height="400" border :style="{width: '1002px', 'text-align': 'center'} "> 
                            <el-table-column align="center"  prop="province" label="省份" width="200" height="50"></el-table-column>
                            <el-table-column align="center" prop="artsAndScience" label="文理科" width="200" height="50"></el-table-column>
                            <el-table-column align="center" prop="year" label="年份" width="200" height="50"></el-table-column>
                            <el-table-column align="center" prop="batch" label="批次" width="200" height="50"></el-table-column>
                            <el-table-column align="center" prop="averageScore" label="分数线" width="200" height="50"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .xuexiaoxiangqing {
        .inner {
            width: 1200px;
            margin: 0 auto;
        }
        .top-university {
            height: 150px;
        }
        .content {
            .left {
                float: left;
                width: 150px;
                text-align: center;
                .active {
                    background-color: #156def;
                    color: #fff;
                }

            }
            .right {
               float: left; 
               width: 1050px;
            }
        }
     
    }
</style>
<script>
export default {
    data() {
        return {
            msg: '',
            cdata: [],
            isShow: 'yuanxiaojianjie',
        }
    },
    computed: {
        tese() {
            var str = this.cdata.tag;
            var arr = []
            if(str) {
                arr = str.split(' ');
            }
            return arr;
        }
    },
    methods: {
        dataUpdate() {  
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this; 
            var id = this.$route.query.id                                     
            this.$ajax
                // get请求
                .post(this.G_uri + '/target/universityDetail', {
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
                        _this.cdata = res.data.data
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    },
    created() {
        this.dataUpdate();
        // console.log(this.$route.params)
    }
}
</script>