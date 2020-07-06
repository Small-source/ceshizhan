<template>
	<!-- 学马资讯 -->
	<div class="news_details">
		<div class="top_nav">
			<div class="inner">
				<span @click="$router.push('/hoem')">首页</span> > 
				<span @click="$router.push('/xuemaNews')">学马资讯</span> > 
				<span class="nav_title">{{detailData.title}}</span>
			</div>
		</div>
		<div class="content">
			<div class="inner">
				<h5 class="title">{{detailData.title}}</h5>
				<p class="main_detail">
					
				</p>
				<!-- <div class="img_box">
					<img :src="detailData.pic" alt="">
				</div> -->
				<p class="content_main" v-html="detailData.content">
					
				</p>
			</div>
		</div>	
		<div class="loading" v-show="isShowLoading">
            <Loading></Loading>
        </div> 
	</div>
</template>
<style type="text/css" lang="less" scoped>
.news_details {
	background-color: #f5f7f6;
	.inner {
		width: 1200px;
		margin: 0 auto;
	}
	.top_nav {
		padding-top: 7px;
		.inner {
			height: 56px;
			line-height: 56px;
			font-size: 18px;
			color: #333;
			font-weight: 600;
			border-bottom: 1px solid #2c8ffc;
			span {
				cursor: pointer;
				&:hover {
					color: #127de1;
				}
			}
		}
		.nav_title {
			color: #127de1;
		}
	}
	.content {
		.title {
			padding-top: 4px;
			line-height: 76px;
			font-size: 24px;
			font-weight: 600;
			color:#333;
			text-align: center;
		}
		// strong {
		// 	font-weight: bold !important;
		// }
	}
	.loading {
		width: 100%;
		height: 600px;
	}
} 
</style>
<script>
import Loading from '../../components/Loading.vue'
export default {
	components: { Loading },
	data() {
		return {
			detailData: [],
			isShowLoading: true,
		}
	},

	created() {
		this.getNews();

	},
	mounted() {

	},
	methods: {
        // 获取视频详情
        getNews() {
        	var id = this.$route.query.id;
            var _this = this;
            this.$ajax.post(this.G_uri + '/article/getArticleDetail', {
            	id: id
            })
                .then(function(res) {
                    if(res.data.code == 2000) {
                        _this.detailData = res.data.data;
                        _this.isShowLoading = false;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
	}
}
</script>