<template>
	<!-- 学马资讯 -->
	<div class="xuema_news">
		<div class="header">
			<div class="inner">
				<ul class="news_nav">
					<li @click="getNews(item.id)" v-for="(item, index) in news_nav" :key="index" :class="nowId == item.id ? 'active': ''">{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<div class="inner">
				<div class="news_box" v-for="(item,index) in newsData" :key="index"> 
					<img :src="item.pic" alt="">
					<div class="mian_news">
						<p class="title">{{item.title}}</p>
						<div class="detail">
							{{item.description}}
						</div>
						<p @click="goNewsDetail(item.id)" class="more">阅读全文>></p>
					</div>
				</div>
			</div>
		</div>	
		<div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div>
	</div>
</template>
<style type="text/css" lang="less" scoped>
.xuema_news {
	position: relative;
	z-index: 1;
	.inner {
		width: 1200px;
		margin: 0 auto;
	}
	.header {
		padding-top: 12px;
		font-size: 18px;
		color:#333;
		.news_nav {
			height: 58px;
			line-height: 56px;
			border-bottom: 1px solid #2c8ffc;
			li {
				float: left;
				margin-right: 38px;
				cursor: pointer;
				font-weight: 600;
			}
			.active {
				color: #2c8ffc;
				border-bottom: 5px solid #2c8ffc;
			}

		}
	}
	.content {
		.news_box {
			padding: 30px 0px;
			height: 156px;
			border-bottom: 1px solid #e0e0e0;
			&:last-child {
				border: none;
			}
			img {
				height: 156px;
				width: 280px;
				float: left;
				margin-right: 30px;
			}
			.mian_news {
				width: 890px;
				.title {
					color: #333;
					font-size: 16px;
					line-height: 42px;
					font-weight: 600;
				}
				.detail {
					padding: 2px 0px;
					font-size: 12px;
					line-height: 24px;
					color: #666;
					height: 48px;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;/*显示几行*/
					overflow: hidden;
				}
				.more {
					line-height: 35px;
					font-size: 13px;
					color: #2c8ffc;
					cursor: pointer;
				}
			}
		}
	}
	.loading {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 800px;
		background-color: #fff;
		// z-index: 10000000000px;
	}
} 
</style>
<script>
import Loading from '../.././components/Loading.vue'	
export default {
	 components: { Loading },
	data() {
		return {
			isShowLoading: true,
			nowId: 1,
			newsData: [],
			news_nav: [ 
				// { cateId: 1, nav: '新高考资讯' },
				// { cateId: 2, nav: '新高考资讯' },
				// { cateId: 3, nav: '生涯理论' },
				// { cateId: 4, nav: '生涯书籍' },
				// { cateId: 5, nav: '升学知识' },
				// { cateId: 6, nav: '志愿填报' },
				// { cateId: 7, nav: '企业新闻' },
				// { cateId: 8, nav: '案例专题' }
			]
		}
	},
	created() {
		this.getNews_nav();
		this.getNews(1);
	},
	mounted() {

	},
	methods: {
		 getNews_nav() {
            var _this = this;
            this.$ajax.post(this.G_uri + '/article/getCategoryList', {
            	type: 1
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.news_nav = res.data.data;
                        // _this.isShowLoading = false;

                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 获取生涯教辅视频
        getNews(id) {
        	this.nowId = id;
        	var cateId = id;
            var _this = this;
            this.$ajax.post(this.G_uri + '/article/getArticleList', {
            	cateId: id,
            	pageSize: 15,
            	totalPage: 1
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.newsData = res.data.data.list;
                        _this.isShowLoading = false;

                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        goNewsDetail(id) {
        	var id = id;
            this.$router.push({  
                path: '/newsDetail',   
                query: {  
                    id: id,    
                }  
            }) 
            window.scroll(0, 0); 
        }
	}
}
</script>