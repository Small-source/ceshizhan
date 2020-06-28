<template>
    <div class="document_resources">
        <div class="inner">
            <ul class="lis">
                <li v-for="(item, index) in videoCareerList" :key="index">
                    <div class="free">
                        <div class="imgBox"><img :src="item.pic" alt=""></div>
                        <p class="title">{{item.name}}</p>
                        <!-- <div class="btn_download"><a :href="item.file" target="_blank">下载</a></div> -->
                        <div class="btn_download"><a href="javascript:void(0)" @click="goDownload(item.id)">下载</a></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.document_resources {
    background-color: #f5f5f5;
    .inner {
        width: 1200px;
        margin: 0 auto;
        min-height: 600px;
    }
    .lis {
        overflow: hidden;
        // padding-top: 25px;
        // background-color: #fff;
        width: 1230px;
        // margin-left: -10px;
        li {
            width: 224px;
            float: left;
            margin-right: 20px;
            margin-bottom: 28px;
            cursor: pointer;
            &:hover {
                box-shadow: 0px 0px 5px rgba(215,214,214, 1);
            }
            a {
                display: block;
                width: 100%;
                height: 100%;
            }
            .imgBox {
                width: 224px;
                height: 125px;
                border-radius: 5px;
                overflow: hidden;
            }
            img {
                width: 224px;
                height: 125px;
                // &:hover {
                //     transform: scale(1.2);
                // }
            }
            .title {
                font-size: 13px;
                color: #333;
                height: 36px;
                line-height: 36px;
                width: 224px;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                // margin-bottom: 4px;
            }
            .btn_download {
                width: 57px;
                border-radius: 2px;
                border: 1px solid #007afc;
                cursor: pointer;
                background: url(/imgs/jiaofuziyuan/icon_download.png) no-repeat 5px center;
                a {
                    display: block;
                    width: 34px;
                    height: 18px;
                    line-height: 18px;
                    padding-left: 23px;
                    color: #3592fc;
                    font-size: 12px;

                }
            }

        }
    }
}
</style>
<script>
export default {
    props: [ 'id' ],
    data() {
        return {
            videoCareerList: [],
        }
    },
    methods: {
        // 生涯教辅资源 - 文档列表 
        getVideoCareerList(id) {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerVideo/getVideoCareerNewList', {
                cateId: id
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.videoCareerList = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        // 生涯教辅资源 - 文档下载 
        goDownload(id) {
            // console.log(44444444);
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerVideo/downloadFile', {
                id: id
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    console.log(res);
                    if(res.data.code == 2000) {
                        window.open(res.data.data.file);
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.getVideoCareerList(this.id);
    },
    watch: {
        id(id) {
            this.getVideoCareerList(id);
        }
    }
}
</script>
