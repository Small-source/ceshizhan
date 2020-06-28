<template>
    <div class="MyCollection" v-if="data">
        <p class="personal">我的收藏</p>
        <div class="content">
            <ul class="lis_nav">
                <li @click="goChange('active1','/collect/getCollectSubjectList')" :class="isActive == 'active1' ? 'active' : ''">专业收藏</li>
                <li @click="goChange('active2', '/collect/getCollectUniversityList')" :class="isActive == 'active2' ? 'active' : ''">院校收藏</li>
                <!-- <li @click="goChange('active3')" :class="isActive == 'active3' ? 'active' : ''">职业收藏</li> -->
            </ul>
            <div v-if="data.length" class="content_main">
                <div class="content_major" v-show="isActive == 'active1'">
                    <ul>
                        <li v-for="(item, index) in dataFuben" :key="index">
                            <div class="img_box">
                                <img src="/imgs/gerenzhongxin/myCollection/icon_zhuanye.png" alt="">
                            </div>
                            <div class="neirong_box">
                                <p class="title">{{item.name}}</p>
                                <p class="num">专业代码：{{item.code}}</p>
                            </div>
                            <div class="btn_detail" @click="goMajor(item.id)">查看详情</div>
                        </li>
                    </ul>
                </div>
                <div class="content_school" v-show="isActive == 'active2'">
                    <ul>
                        <li v-for="(item, index) in dataFuben" :key="index">
                            <div class="img_box">
                                <img :src="item.logo" alt="">
                            </div>
                            <div class="neirong_box">
                                <p class="title">{{item.name}}</p>
                                <p class="num">{{item.city}}</p>
                            </div>
                            <div class="btn_detail" @click="goSchool(item.id)">查看详情</div>
                        </li>
                    </ul>
                </div>
                <OwerPager v-bind:right-list="data"></OwerPager>
            </div>    
            <div class="noReport" v-else="!data.length">
                <div class="tubiao"></div>
                <p>暂无收藏~~~</p>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.MyCollection {
    padding: 0px 46px;
    padding-right: 20px;
    box-sizing: border-box;
    min-height: 628px;
    background-color: #fff;
    .personal {
        line-height: 60px;
        color: #333;
        font-size: 16px;
    }
    .content {
        .lis_nav {
            height: 50px;
            border-bottom: 1px solid #f2f2f2;
            li {
                float: left;
                width: 90px;
                line-height: 50px;
                height: 50px;
                text-align: center;
                margin-right: 10px;
                cursor: pointer;
            }
            .active {
                color: #2c8ffc;
                border-bottom: 3px solid #2c8ffc; 
                box-sizing: border-box; 
            }
        }
        .content_major {
            padding-top: 20px;
            height: 410px;
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between; 
                li {
                    box-sizing: border-box;
                    padding: 12px 0;
                    width: 436px;
                    height: 76px;
                    border: 1px solid #f2f2f2;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    position: relative;
                    .img_box {
                        float: left;
                        width: 78px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 52px;
                            height: 52px;
                        }
                    }
                    .neirong_box {
                        float: left;
                        .title {
                            line-height: 26px;
                            color: #333;
                            font-size: 16px;
                            font-weight: 600;
                        }
                        .num {
                            line-height: 26px;
                            color: #666;
                            font-size: 13px;
                        }
                    }
                    .btn_detail {
                        position: absolute;
                        right: 20px;
                        top: 50%;
                        margin-top: -12px;
                        width: 64px;
                        height: 24px;
                        border-radius: 3px;
                        border: 1px solid #2c8ffc;
                        color: #2c8ffc;
                        line-height: 24px;
                        font-size: 12px;
                        text-align: center;
                        cursor: pointer;
                    }
                    
                }
            }
        }
        .content_school {
            .content_major;
            .num {
                padding-left: 18px;
                background: url(/imgs/gerenzhongxin/myCollection/icon_dingwei.png) no-repeat 0px center;
            }
        } 
        .content_main {
            width: 894px;
            height: 498px;
        }
        .noReport {
            width: 400px;
            height: 300px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -150px;
            margin-left: -200px;
            text-align: center;
            .tubiao {
                height: 122px;
                background: url(/imgs/gerenzhongxin/zhanwushuju.png) no-repeat center center;
            }
            p {
                line-height: 54px;
                color: #666;
                font-size: 14px;
            }
        }
    }
}
</style>
<script>
import OwerPager from './OwnerPager.vue';
export default {
    components: { OwerPager },
    data() {
        return { 
            data: [],
            // 保存data副本，做分页时使用
            dataFuben: [],
            isActive: 'active1',
        }
    },
    computed: {
    },
    watch: {
        // isShowSubjects() {
        //     if(!this.isShowSubjects) {
        //         let arr = this.subjectsmianshi[0].list;
        //         this.idx = 0;
        //         this.rightList = arr;
        //     }else {
        //         this.idx = 0;
        //         let arr = this.subjects[0].list;
        //         this.rightList = arr;
               
        //     }
            
        // },
        data() {
            let arr = this.data;
            if(arr.length <= 8) {
                this.dataFuben = arr;
            }else {
                this.dataFuben = arr.slice(0,8);
            }
        }
    },
    methods: {
        // 获取专业和院校的收藏列表
        getCollections(url) {
            var url = url;
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax
                .post(this.G_uri + url,{},{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.data = res.data.data;
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
        goChange(active,url) {
            this.isActive = active;
            this.getCollections(url);
        },
        // 分页改变，数据随之改变
        changeRightList(value) {
            let arr = this.data;
            this.dataFuben = arr.slice(8*(value-1), 8*value);
        }, 
        // 查看收藏专业
        goMajor(id) {
            var id = id;
            let {href}=this.$router.resolve({
                path: '/zhuanyexiangqing',
                name: 'zhuanyexiangqing',
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
                path: '/yuanxiaoxiangqing',
                name: 'yuanxiaoxiangqing',
                query: {
                    id: id,
                }
            })
            window.open(href, '_blank');
        },


    },
    created() {
        this.getCollections('/collect/getCollectSubjectList');
    }
}
</script>
