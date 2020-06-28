<template>
    <div class="videoCourse">
        <div class="search_box">
            <div class="search">
                <input type="text" v-model="searchValue" placeholder="搜索你需要的视频" @keydown.enter="goQuery">
                <span @click="goQuery">
                    <img src="/imgs/explore/common/icon_search.png" alt="">
                </span>
            </div>
            <div class="btn_back" @click="isShowSearch = false" v-show="isShowSearch">
                返回视频列表
            </div>
        </div>
        <div class="content" v-show="!isShowSearch">
    		<div class="main_box" v-for="(item, index) in videoCourseList" :key="index">
    			<div class="left_box">
    				<img :src="'/imgs/videoCourse/' + videoCourseImg[item.id]" alt="暂无图片">
    			</div>
    			<div class="right_box">
    				<ul class="top">
    					<li v-for="(itemTop, index) in item.list" v-if="index < 3" @click="goVideoList(item.id,itemTop.id)">{{itemTop.name}}</li>
    					<p @click="goVideoList(item.id, '')">更多>></p>
    				</ul>
    				<ul class="foot">
    					<li v-for="(itemFoot, index) in item.video" :key="index" @click="goPlay(itemFoot)">
    						<img :src="itemFoot.pic" alt="暂无图片">
    						<p>{{itemFoot.title}}</p>
    					</li>
    				</ul>
    			</div>
    		</div>
        </div> 
        <div class="content content_search" v-show="isShowSearch">
            <ul class="grandson_lisbox" v-if="grandsonList.length">
                <li v-for="(item, index) in grandsonList" :key="index" @click="goPlay(item)">
                    <img :src="item.pic" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <div class="point" v-else>
                没有搜索到相应的课程，请重新搜索~ ~ ~ ！
            </div>
            <div class="page_box" v-show="total > 20">
                <el-pagination
                           background
                           @current-change="currentChange"
                           :page-size="pageSize"
                           layout="prev, pager, next"
                           :total="total"
                           class="pages">
                </el-pagination>    
            </div>
        </div>   
    </div>
</template>
<script>
    export default {
        name: "careerAnchor",
        data(){
            return {
                searchValue: '',
                isShowSearch: false,
                grandsonList: [],
            	videoCourseList: [
            	],
            	videoCourseImg: {
            		'78': 'icon_zhiyuantianbao.png',
            		'77': 'icon_zhuanyejiedu.png',
            		'76': 'icon_daxuejieshao.png',
            		'68': 'icon_shengxuekecheng.png',
            		'56': 'icon_shengyakecheng.png'
            	},
                //分页器
                pageNumber:1,//当前页码
                pageSize:20,//每页显示条数
                total:1,//总条数       	
            }
        },
        computed:{
            citys(){
                return this.$store.state.citys
            },

        },
        methods:{
            //退出确认
            exitConfirm(){
                this.$confirm('退出后不会保存编辑内容，确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.cardstanchuang=false;
                    this.$message({
                        type: 'info',
                        message: '已退出'
                    });
                }).catch((error) => {

                })
            },
            //获取视频课程列表
            getNoticeDetail(id){
                this.$ajax.post(this.G_uri + '/careerArchives/index',{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                   	this.videoCourseList = res.data.data;
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            goVideoList(id1,id2) {
            	this.$router.push({
            		path: '/videoCourse/videoList',
            		query: {
            			fatherId: id1,
            			sunId: id2
            		}
            	})
            },
            goPlay(item) {
            	// this.$router.push({
            	// 	path: '/videoCourse/videoplay',
             //        query: {
             //            id: item.id,
             //            title: item.title,
             //            introduction: item.introduction,
             //            ppt: item.ppt,
             //            // 视频封面
             //            cover: item.coverUrl,
             //            from: 'videoCourse'
             //        }
            	// })
                let {href}=this.$router.resolve({
                    path: '/videoCourse/videoplay',
                    query: {
                        id: item.id,
                        title: item.title,
                        introduction: item.introduction,
                        ppt: item.ppt,
                        // 视频封面
                        cover: item.coverUrl,
                        from: 'videoCourse'
                    }
                })
                window.open(href, '_blank');
            },
            goQuery() {
                if(this.searchValue) {
                    this.pageNumber = 1;
                    this.isShowSearch = true;
                    this.query();
                }else {
                    this.isShowSearch = false;
                }
            },
            // 搜索，按输入名称查询课程
            query() {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                var name = this.searchValue;                
                var pageNumber = this.pageNumber;
                var pageSize = this.pageSize;
                this.$ajax
                    // get请求
                    .post(this.G_uri + '/careerArchives/getListByName', {
                        token: token,
                        pageNumber: pageNumber,
                        pageSize: pageSize,
                        name: name
                    },{
                        headers:{
                            token: token
                        }
                    })
                    // 监听数据返回
                    .then(function(res) {
                            _this.grandsonList = res.data.data.list;
                            _this.total = res.data.data.page.count;
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            },
            // 当页数发生变化时触发
            currentChange(num) {
                this.pageNumber = num;
                this.query();
            }
         
        },
        watch:{
          
        },
        created() {
        	this.getNoticeDetail();
        },
        mounted(){
        }
    }
</script>
<style scoped lang="less">
    *{
        letter-spacing: 1.5px;
        box-sizing: border-box;
    }
    .videoCourse{
    	padding-left: 20px;
        .content_search {
            padding: 20px;
            background-color: #fff;
            .page_box {
                display: flex;
                justify-content: center;
            }
        }
        .search_box {
            padding: 15px 20px;
            margin-bottom: 20px;
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
            .search {
                width: 520px;
                height: 44px;
                position: relative;
                float: left;
                input {
                    height: 44px;
                    border: 1px solid #2c8ffc;
                    width: 100%;
                    padding-left: 20px;
                    font-size: 14px;
                    line-height: 42px;
                    border-radius: 27px;
                }
                span {
                    width: 40px;
                    height: 44px;
                    font-size: 14px;
                    line-height: 44px;
                    text-align: center;
                    color: #fff;
                    cursor: pointer;
                    position: absolute;
                    right: 10px;
                    top: 0;
                    overflow: hidden;
                }
            }
            .btn_back {
                padding-left: 30px;
                background: url('/imgs/videoCourse/icon-shipinliebiao.png') no-repeat 5px center;
                color: #3b8cec;
                line-height: 44px;
                float: right;
                cursor: pointer;
                font-weight: 600;
                font-size: 16px;
            }
        }
    	.main_box {
    		padding: 20px;
    		margin-bottom: 20px;
    		background-color: #fff;
    		overflow: hidden;
            border-radius: 5px;
    		.left_box {
    			float: left;	
    		}
    		.right_box {
    			float: left;
    			padding-left: 30px;
    			width: 742px;
    			.top {
    				height: 26px;
    				margin-bottom: 20px;
    				li {
    					line-height: 26px;
						font-size: 14px;
						float: left;
						margin-right: 30px;
						color: #3e92f5;
						cursor: pointer;
    				}
    				p {
    					line-height: 26px;
						font-size: 14px;
    					float: right;
    					color: #3e92f5;
						cursor: pointer;
    				}


    			}
    			.foot {
    				display: flex;
    				justify-content: space-between;
    				li {
    					width: 164px;
    					cursor: pointer;
    					img {
    						display: block;
    						width: 164px;
    						height: 124px;
    						border-radius: 5px;
    					}
    					p {
    						padding-top: 10px;
    						line-height: 24px;
    						font-size: 13px;
    						overflow: hidden;
    						color: #333;
    						white-space: nowrap;
							text-overflow:ellipsis;
    					}
    				}
    			}
    		}
    	}
        .grandson_lisbox {
            min-height: 736px;
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            li {
                width: 162px;
                margin-right: 30px;
                cursor: pointer;
                &:nth-child(5n) {
                    margin-right: 0px;
                }
                img {
                    border-radius: 5px;
                    width: 162px;
                    height: 124px;
                }
                p {
                    line-height: 44px;
                    margin-bottom: 16px;
                    font-size: 13px;
                    overflow: hidden;
                    color: #333;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                }
            }
        }
        .point {
            height: 665px;
            font-size: 18px;
            text-align: center;
            line-height: 100px;
        }
    }
</style>
