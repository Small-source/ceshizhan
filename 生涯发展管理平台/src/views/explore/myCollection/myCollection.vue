<template>
    <div class="myCollection">
        <h5>我的收藏</h5>
        <p class="title">收藏专业</p>
        <div>
            <div class="subjectBox" v-if="subjectList.constructor == Object">
                <div class="box" v-for="(value, key, index) in subjectList" :key="index">
                    <p class="subjectBigTitle">{{key}}</p>
                    <ul>
                        <li v-for="(item, idx) in value" :key="idx">
                            <span class="subject" @click="goMajor(item.id)">{{item.name}}</span>
                            <span class="lightUp light" v-if="item.isLight == 1" @click="storeStartSubject(item.id,item.isLight);item.isLight = 2"></span>
                            <span class="lightUp unlight" v-else  @click="storeStartSubject(item.id, item.isLight);item.isLight = 1"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nodetail" v-else>
                <p>暂无收藏!~~去<span @click="$router.push('/explore/zhuanyeku')">添加</span></p>
            </div>
        </div>    
        <p class="title">收藏院校</p>
        <div>
            <div class="universityBox" v-if="universityList.length">
                <ul>
                    <li v-for="(item, index) in universityList" :key="index">
                        <span class="university" @click="goSchool(item.id)">{{item.name}}</span>
                        <span class="lightUp light" v-if="item.isLight == 1" @click="storeStartUniversity(item.id,item.isLight);item.isLight = 2"></span>
                        <span class="lightUp unlight" v-else  @click="storeStartUniversity(item.id, item.isLight);item.isLight = 1"></span>
                    </li>
                </ul>
            </div>
            <div class="nodetail" v-else>
                <p>暂无收藏!~~去<span  @click="$router.push('/explore/yuanxiaoku')">添加</span></p>
            </div>
        </div>    
    </div>
</template>
<script>
    export default {
        name: "myCollection",
        data(){
            return{
                subjectList: {},
                universityList: []
            }
        },
        methods:{
            //跳转页面
            jump(path){
                this.$router.push(path)
            },
            // // 保存成功提示
            // successMessage() {
            //     this.$message({
            //         type: 'success',
            //         message: '设为兴趣成功'
            //     });
            // },    
            //点亮专业星星
            storeStartSubject(id,light) {
                // light 1是点亮 2是取消点亮
                var isLight = light;
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax
                    .post(this.G_uri + '/collect/storeStartSubject',{
                        collectionId: id
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            if(isLight == 2) {
                                _this.$message({
                                    type: 'success',
                                    message: '设为兴趣成功'
                                });
                            }
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }else {
                            console.log(res.msg);
                        }
                       
                    })
                    .catch(function(error) {
                        console.log(error); 
                    })
            },
            //点亮院校星星
            storeStartUniversity(id,light) {
                // light 1是点亮 2是取消点亮
                var isLight = light;
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax
                    .post(this.G_uri + '/collect/storeStartUniversity',{
                        collectionId: id
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            if(isLight == 2) {
                                _this.$message({
                                    type: 'success',
                                    message: '设为兴趣成功'
                                });
                            }
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }else {
                            console.log(res.msg);
                        }
                       
                    })
                    .catch(function(error) {
                        console.log(error); 
                    })
            },
            // 获取专业的收藏列表
            getCollectSubjectWithStartList(url) {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax
                    .post(this.G_uri + '/collect/getCollectSubjectWithStartList',{},{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            _this.subjectList = res.data.data;
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }else {
                            console.log(res.msg);
                        }
                       
                    })
                    .catch(function(error) {
                        console.log(error); 
                    })
            },
            // 获取院校的收藏列表
            getCollectUniversityList(url) {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                this.$ajax
                    .post(this.G_uri + '/collect/getCollectUniversityList',{},{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                        if(res.data.code == 2000) {
                            _this.universityList = res.data.data;
                        }else if(res.data.code == 2026) {
                            _this.$router.push('/perfectInformation');
                        }else {
                            console.log(res.msg);
                        }
                       
                    })
                    .catch(function(error) {
                        console.log(error); 
                    })
            },
            // 查看收藏专业
            goMajor(id) {
                var id = id;
                let {href}=this.$router.resolve({
                    path: '/explore/zhuanyexiangqing',
                    name: '专业详情',
                    query: {
                        id: id,
                        // type: 1,
                        from: 'zhuanyeku'
                    }
                })
                window.open(href, '_blank');
            },
            // 查看收藏院校
            goSchool(id) {
                var id = id;
                window.scroll(0, 0);
                let {href}=this.$router.resolve({
                    path: '/explore/yuanxiaoxiangqing',
                    name: '院校详情',
                    query: {
                        id: id,
                    }
                })
                window.open(href, '_blank');
            },
        },
        created() {
            this.getCollectSubjectWithStartList();        
            this.getCollectUniversityList();        
        }
    }
</script>
<style scoped lang="less">
    .myCollection{
        min-height: 800px;
        margin-left: 20px;
        background-color: #fff;
        padding: 0px 20px 20px 20px; 
        *{
            box-sizing: border-box;
            letter-spacing: 1.5px;
        }
        h5 {
            line-height: 64px;  
            color: #338cef;
            font-size: 16px;  
            font-weight: 600; 
            padding-left: 30px; 
            background: url(/imgs/wayToStudy/main/icon_title.png) no-repeat 0px center;
        }
        table {
            tr {
                line-height: 40px;
                width: 100%;
                border: 1px solid #000;
                td {
                    width: 200px;
                    border: 1px solid #000;
                }
            }
        }
        .title {
            line-height: 26px;
            padding-left: 26px;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 18px;
            background: url(/imgs/explore/myCollection/icon_jiantou.png) no-repeat 0px center;
        }
        .subjectBox { 
            margin-bottom: 30px;
            .box {
                border: 1px solid #eaeaea;
                .subjectBigTitle {
                    line-height: 45px;
                    padding-left: 20px;
                    background-color: #f3f4f8;
                    border-bottom: 1px solid #eaeaea;
                    font-size: 14px;
                    font-weight: 600;
                }
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    li {
                        box-sizing: border-box;
                        padding-left: 20px;
                        padding-right: 20px;
                        width: 33.33%;
                        line-height: 45px;
                        border-right: 1px solid #eaeaea;
                        .subject {
                            cursor: pointer;
                        }
                        .lightUp {
                            width: 25px;
                            height: 45px;
                            float: right;
                            cursor: pointer;
                        }
                        .light {
                            background: url(/imgs/explore/myCollection/icon_huang.png) no-repeat center center;
                        }
                        .unlight {
                            background: url(/imgs/explore/myCollection/icon_hui.png) no-repeat center center;
                        }
                    }
                }
            }
        }
        .universityBox {
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                li {
                    box-sizing: border-box;
                    padding-left: 20px;
                    padding-right: 20px;
                    width: 33.33%;
                    line-height: 45px;
                    border-right: 1px solid #eaeaea;
                    border-bottom: 1px solid #eaeaea;
                    &:nth-child(-n + 3) {
                        border-top: 1px solid #eaeaea;
                    }
                    &:nth-child(3n + 1) {
                        border-left: 1px solid #eaeaea;
                    }
                    .university {
                        cursor: pointer;
                    }
                    .lightUp {
                        width: 25px;
                        height: 45px;
                        float: right;
                        cursor: pointer;
                    }
                    .light {
                        background: url(/imgs/explore/myCollection/icon_huang.png) no-repeat center center;
                    }
                    .unlight {
                        background: url(/imgs/explore/myCollection/icon_hui.png) no-repeat center center;
                    }
                }
            }
        }
        .nodetail {
            padding: 60px 0px;
            margin-bottom: 20px;
            p {
                text-align: center;
                font-size: 18px;
                span {
                    cursor: pointer;
                    color: #2c8ffc;
                }
            }
        }
    }
</style>

