<template>
    <div class="jiaofuziyuan">
        <div class="banner">
        </div>
    	<!-- <div class="inner">
    		<ul>
    			<li @click="getIn('VideoResources')" :class="selection=='VideoResources'? 'active' : ''">视频资源</li>
    			<li @click="getIn('DocumentResources')" :class="selection=='DocumentResources'? 'active' : ''">文档资源</li>
    		</ul>
    	</div> -->
    	<!-- <div class="content">
            <compoent :is="selection"></compoent>
        </div> -->
        <div class="list_box">
            <div class="inner">
                 <ul class="father_list">
                    <li v-for="(item, index) in listData" :key="index" :class="fatherIndex == index ? 'active' : ''" @click="changeChildListData(item.list,index,item.id)">{{item.name}}</li>
                </ul>
                <!-- <ul class="child_list">
                    <li :class="childIndex == 0 ? 'active' : ''" @click="changeId(0,-1)">全部</li>
                    <li v-for="(item, index) in childListData" :key="index" :class="childIndex == (index + 1) ? 'active' : ''" @click="changeId(item.id,index)">{{item.name}}</li>
                </ul> -->
            </div>
        </div>
        <div class="view_box">
            <div class="inner">
                <ul>
                    <li @click="getIn('VideoResources')" :class="selection=='VideoResources'? 'active' : ''">视频资源</li>
                    <li @click="getIn('DocumentResources')" :class="selection=='DocumentResources'? 'active' : ''">文档资源</li>
                </ul>
            </div>
        </div>
        <div class="content">
            <compoent :is="selection" :id="id"></compoent>
        </div>
        <Jihuoka v-show="isShowjihuoka" v-on:go-close="isShowjihuoka = false" ></Jihuoka>
    </div>
</template>
<style type="text/css" lang='less' scoped>
.jiaofuziyuan {
    .inner {
        width: 1200px;
        margin: 0 auto;
    }
    .banner {
        height: 190px;
        background: url(/imgs/jiaofuziyuan/bg_jiaofuziyuan.png) no-repeat center center;
    }
    .list_box {
        // height: 136px;
        background-color: #fff;
        .father_list {
            height: 60px;
            border-bottom: 1px solid #ccc;
            li {
                float: left;
                margin-right: 70px;
                height: 60px;
                line-height: 60px;
                color: #333;
                font-size: 17px;
                cursor: pointer;
                box-sizing: border-box;
            }
            .active {
                color: #2c8ffc;
                border-bottom: 3px solid #2c8ffc;
            }
        }
        .child_list {
            padding: 20px 0px;
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            li {
                float: left;
                padding: 0px 15px;
                line-height: 30px;
                border-radius: 3px;
                margin-right: 24px;
                font-size: 15px;
                color: #333;
                cursor: pointer;
            }
            .active {
                background-color: #2c8ffc;
                color: #fff;
            }
        }
    }
    .view_box {
        background-color: #f5f5f5;
        ul {
            padding: 20px 0px;
            height: 28px;
            // background-color: #f9f9f9;
            li {
                width: 110px;
                height: 28px;
                line-height: 28px;
                font-size: 13px;
                color: #333;
                float: left;
                margin-right: 20px;
                cursor: pointer;
                border-radius: 14px;
                text-align: center;
            }
            .active {
                background-color: #2c8ffc;
                color: #fff;
                
            }
        }
    }        
    .content {
        overflow: hidden;
    }
}  
</style>
<script>
// 教辅资源（文档资源）
import VideoResources from './VideoResources.vue';
// 教辅资源（视频资源）
import DocumentResources from './DocumentResources.vue';
// 引入激活生涯卡组件
import Jihuoka from './jihuoka.vue';
export default {
    components: { VideoResources, DocumentResources, Jihuoka },
    // props: [ 'message' ],
    data() {
        return {
            selection: 'VideoResources',
            isShowjihuoka: false,
            listData: [],
            childListData: [],
            fatherIndex: 0,
            childIndex: 0,
            // 获取视频文档id,
            id: '',

        }
    },
    methods: {
        getIn(component) {
            this.selection = component;
        },
        // 教辅资源视频是否绑卡 1 未绑卡  2 已绑卡
        getIsCanView() {
            // var id = 2;
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerVideo/isCanView', {
                
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        if(res.data.data.isCanView == 1) {
                            _this.isShowjihuoka = true;
                        }else if(res.data.data.isCanView == 2) {
                            _this.isShowjihuoka = false;
                        }
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 获取教辅资源列表
        getCategoryLis() {
            var _this = this;
            var token = window.sessionStorage.getItem('ymtxToken');
            this.$ajax.post(this.G_uri + '/careerVideo/getCategory', {
            },{
                headers:{
                    token: token
                }
            })
                .then(function(res) {
                    let data = res.data.data;
                    if(res.data.code == 2000) {
                       _this.listData = data;
                       _this.childListData = data[0].list;
                       _this.id = data[0].id;
                    }else if(res.data.code == 1016) {
                        _this.$router.push('/login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        changeChildListData(data,index,id) {
            // console.log(data);
            this.fatherIndex = index;
            this.childIndex = 0;
            this.childListData = data;
            this.changeId(id,-1);
        },
        changeId(id,index) {
            this.id = id;
            this.childIndex = index + 1;
            // console.log(id);
        }
    },
    mounted(){
    },
    created() {
        this.getCategoryLis();
        this.getIsCanView();
    }
}
</script>
