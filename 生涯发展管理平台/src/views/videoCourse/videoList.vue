<template>
    <div class="videoList">
    	<div class="content">
    		<h6 class="title">视频课程</h6>
			<ul class="father_lisbox">
				<li v-for="(item, index) in fatherList" :key="index" @click="changeFatherId(item.id,item.list)" :class="fatherId == item.id ? 'active' : ''"><span>{{item.name}}</span></li>
			</ul>
			<ul class="sun_lisbox">
				<li v-for="(item, index) in sunList" :key="index" @click="changeSunId(item.id,item.list)"  :class="sunId == item.id ? 'active' : 'unactive'"><span>{{item.name}}</span></li>
			</ul>
			<ul class="grandson_lisbox">
				<li v-for="(item, index) in grandsonList" :key="index" @click="goPlay(item)">
					<img :src="item.pic" alt="">
					<p>{{item.title}}</p>
				</li>
			</ul>
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
        components:{},
        data(){
            return {
                //分页器
                pageNumber:1,//当前页码
                pageSize:20,//每页显示条数
                total:1,//总条数 
            	fatherList: [],
            	sunList: [],
            	grandsonList: [],
            	fatherId: '',
            	sunId: '',

                cateId: ''
            }
        },
        computed:{
        },
        methods:{
            // 当页数发生变化时触发
            currentChange(num) {
                this.pageNumber = num;
                this.getListByLevelId();
            },
            //获取视频分类层级
            getLevelList(){
                this.$ajax.post(this.G_uri + '/careerArchives/getLevelList',{
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                   	this.fatherList = res.data.data;
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },
            //获取分类id获取视频列表
            getListByLevelId(id){
                var pageNumber = this.pageNumber;
                var pageSize = this.pageSize;
                var nowId;
                if(id) {
                    nowId = id;
                    this.cateId = id;
                }else {
                    nowId = this.cateId;
                }
                this.$ajax.post(this.G_uri + '/careerArchives/getListByLevelId',{
                	cateId: nowId,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                })
                .then((res)=>{
                    this.grandsonList = res.data.data.list;
                    this.total = res.data.data.page.count;
                })
                .catch((error) => {
                	console.log(error);
                }) 
            },

         	changeFatherId(id,list) {
         		this.fatherId = id;
        		this.sunList = list;
                this.pageNumber = 1;
        		if(list.length == 0) {
        			this.getListByLevelId(id);
        			return;
        		}
        		this.sunId = this.sunList[0].id;
        		this.getListByLevelId(this.sunId);
         	},
         	changeSunId(id,list) {
                this.pageNumber = 1;
         		this.sunId = id;
        		this.getListByLevelId(id);
         	},
            goPlay(item) {
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
            }
        },
        watch:{
        	fatherList() {
        		let fatherId = this.$route.query.fatherId;
        		let sunId = this.$route.query.sunId;
        		if(sunId) {
        			this.fatherList.forEach((item) => {
        				if(item.id == fatherId) {
        					this.fatherId = fatherId;
        					this.sunList = item.list;
        				}
        			})
        			this.sunList.forEach((item) => {
        				if(item.id == sunId) {
        					this.sunId = sunId;
        					this.getListByLevelId(this.sunId);
        				}
        			})
        		}else {
        			this.fatherList.forEach((item) => {
        				if(item.id == fatherId) {
        					this.fatherId = fatherId;
        					this.sunList = item.list;
			        		if(item.list.length == 0) {
			        			this.getListByLevelId(this.fatherId);
			        			return;
			        		}
			        		this.sunId = this.sunList[0].id;
			        		this.getListByLevelId(this.sunId);
        				}
        			})
        		}
        	}
        },
        created() {
        	this.getLevelList();
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
	.videoList {
		padding-left: 20px;
		.content {
			background-color: #fff;
			padding: 0px 20px;
            padding-bottom: 20px;
			h6.title {
                line-height: 64px;
                font-size: 17px;
                color: #348DF1;
                font-weight: bolder;
                letter-spacing: 2px;
                padding-left: 30px;
                background: url(/imgs/careerArchives/icon_biaoti.png) no-repeat 0px center;
            }
            .father_lisbox {
            	display: flex;
            	justify-content: flex-start;
            	li {
            		padding: 0px 20px;
            		line-height: 24px;
            		padding-bottom: 6px;
            		color: #333;
            		cursor: pointer;
            		border-bottom: 3px solid #fff;
            	}
            	.active {
            		color: #2c8efb;
            		border-bottom: 3px solid #2c8efb;
            	}
            }
            .sun_lisbox {
            	padding-top: 16px;
            	margin-bottom: 25px;
            	display: flex;
            	justify-content: flex-start;
            	li {
            		padding: 0px 10px;
            		text-align: center;
            		margin-right: 30px;
            		line-height: 30px;
            		color: #333;
            		cursor: pointer;
            	}
            	.active {
            		color: #fff;
            		background-color: #2c8efb;
            		border-radius: 3px;
            	}
            }
            .grandson_lisbox {
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
		}
        .page_box {
            display: flex;
            justify-content: center;
        }
	}
</style>
