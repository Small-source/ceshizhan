<template>
    <div class="video_resources">
    	<div class="inner">
    		<ul class="lis">
                <li v-for="(item, index) in VideoList" :key="index" @click="goPlay(item)">
                    <div class="free">
                        <div class="imgBox"><img :src="item.pic" alt=""></div>
                        <p class="title">{{item.title}}</p>
                    </div>
                </li>
            </ul>
    	</div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return { 
        	VideoList: [],
        	videoDetail: [],
        	
            isshow: false
        }
    },
    methods: {
    	// 生涯教辅资源视频 - 视频 
    	getVideoList(id) {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerVideo/getNewVideoList', {
                cateId: id
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.VideoList = res.data.data;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    	// 生涯教辅资源视频 - 详情 
        // getVideoDetail() {
        // 	// var id = 2;
        //     var _this = this;
        //     var token = window.sessionStorage.getItem('ymtxToken');
        //     this.$ajax.post(this.G_uri + '/careerVideo/videoDetail', {
        //     	// id: id
        //     },{
        //         headers:{
        //             token: token
        //         }
        //     })
        //         .then(function(res) {
        //             if(res.data.code == 2000) {
        //                 _this.videoDetail = res.data.data;
        //             }else if(res.data.code == 1016) {
        //                 _this.$router.push('/login');
        //             }
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });
        // },
        goPlay(item) {
            this.$router.push({
                path: '/videoplay',
                query: {
                    id: item.id,
                    title: item.title,
                    introduction: item.introduction,
                    ppt: item.ppt,
                    // 视频封面
                    cover: item.coverUrl,
                    from: 'jiaofuziyuan'
                }
            })
        },
    },
    created() {
        this.getVideoList(this.id);
    },
    watch: {
        id(id) {
            this.getVideoList(id);
            console.log(id);
        }
    }
}

</script>

<style type="text/css" lang='less' scoped>
.video_resources {
    background-color: #f5f5f5;
	.inner {
		width: 1200px;
		margin: 0 auto;
        min-height: 600px;
	}
    .lis {
        overflow: hidden;
        // padding-left: 1px;
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
                height: 50px;
                width: 224px;
                line-height: 50px;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                // margin-bottom: 4px;
            }

        }
    }
}
</style>