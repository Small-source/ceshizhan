<template>
    <div class="competitionVideoList">
        <div class="inner">
            <ul class="lis">
                <li v-for="(item, index) in videoList" :key="index" @click="goPlay(item)">
                    <div class="free">
                        <div class="imgBox"><img :src="item.pic" alt=""></div>
                        <p class="title">{{item.title}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- <Jihuoka v-show="isShowjihuoka" v-on:go-close="isShowjihuoka = false" ></Jihuoka> -->
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .competitionVideoList {
        .inner {
            padding: 20px 0px;
            width: 1200px;
            margin: 0 auto;
            min-height: 600px;
        }
        .lis {
            overflow: hidden;
            padding-left: 20px;
            padding-top: 25px;
            background-color: #fff;
            width: 1230px;
            min-height: 630px;
            margin-left: -10px;
            li {
                width: 210px;
                float: left;
                padding: 7px;
                margin-right: 18px;
                margin-bottom: 28px;
                cursor: pointer;
                border-radius: 2px;
                &:hover {
                    padding: 7px;
                    box-shadow: 0px 0px 5px rgba(215,214,214, 1);
                }
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                .imgBox {
                    width: 220px;
                    height: 140px;
                    overflow: hidden;
                }
                img {
                    width: 220px;
                    height: 140px;
                }
                .title {
                    font-size: 13px;
                    color: #333;
                    height: 50px;
                    width: 220px;
                    line-height: 50px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
            }
        }
    }
</style>
<script>
// 引入激活竞赛视频卡组件
import Jihuoka from './jihuoka.vue';
export default {
    components: { Jihuoka },
    props: ['isFrom'],
    data() {
        return {
            isShowjihuoka: false,
            videoList: [],
            // 视频播放面包屑显示自主招生还是综合评价
        }
    },
    methods: {
        // 竞赛视频是否绑卡 1 未绑卡  2 已绑卡
        // getIsCanView() {
        //     var _this = this;
        //     var token = window.sessionStorage.getItem('ymtxToken');
        //     this.$ajax.post(this.G_uri + '/competitionVideo/isCanView', {
                
        //     },{
        //         headers:{
        //             token: token
        //         }
        //     })
        //         .then(function(res) {
        //             let isCanView = res.data.data.isCanView;
        //             if(res.data.code == 2000) {
        //                 if(isCanView == 1) {
        //                     _this.isShowjihuoka = true;
        //                 }else if(isCanView == 2) {
        //                     _this.isShowjihuoka = false;
        //                 }
        //             }else if(res.data.code == 1016) {
        //                 _this.$router.push('/login');
        //             }
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });
        // },

        getVideoList() {
            // 竞赛指导视频名称
            var categoryName = this.$route.query.categoryName;
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/competitionVideo/getVideoListByCategory', {
                categoryName: categoryName
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                       _this.videoList = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                   
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        goPlay(item) {
            let isFrom = this.isFrom;
            let _this=this;
            this.$router.push({
                path: '/competitionVideoPlay',
                query: {
                    id: item.id,
                    title: item.title,
                    introduction: item.introduction,
                    ppt: item.ppt,
                    isFrom: isFrom,
                    categoryName:this.$route.query.categoryName
                }
            })
        },
    },
    created() {
        // this.getIsCanView();
        this.getVideoList();
    }
}
</script>