<template>
	<div class="learningReport">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-show="isDownloading"></DownloadProgress>
		<div class="pdf" style="background-color:#E8E8E8;">
<!-- 			<PageCover></PageCover>
            <PageList></PageList>
			<PagePart1 v-if="part1Data.constructor === Object" :norm="part1Data.norm" :comment="part1Data.comment"></PagePart1>	
			<PagePart2 v-if="part2Data.constructor === Object" :norm="part2Data.norm" :comment="part2Data.comment"></PagePart2>	 -->
			<PagePart3 v-if="part3Strategy.constructor === Object && part3style.constructor === Object" :strategyNorm="part3Strategy.norm" :strategyComment="part3Strategy.comment" :styleNorm="part3style.norm" :styleComment="part3style.comment" ></PagePart3>	
			<!-- <PagePart4 v-if="part4Data.constructor === Object" :norm="part4Data.norm" :comment="part4Data.comment"></PagePart4>	 -->
			<PageBgCover></PageBgCover>	
		</div>
		<div class="get_pdf">
			<div class="inner">
				<div class="btn_pdf" v-on:click="isDownloading = true;getPdf(htmlTitle);">下载报告</div>
			</div>
		</div>
		<div class="loading" v-show="isLoading">
			<Loading></Loading>
		</div>
	</div>
</template>
<script>
import DownloadProgress from '../../components/DownloadProgress.vue';
import Loading from '../../components/Loading2.vue';
import PageCover from './components/PageCover.vue';//封面
import PageList from './components/PageList.vue';//目录
import PagePart1 from './components/PagePart1.vue';//学习潜力
import PagePart2 from './components/PagePart2.vue';//学习动力
import PagePart3 from './components/PagePart3.vue';//学习效力
import PagePart4 from './components/PagePart4.vue';//心理健康

import PageBgCover from './components/PageBgCover.vue';//尾封面
export default {
	components: { DownloadProgress, PageCover, PageList, PageBgCover, PagePart1, PagePart2, PagePart3, PagePart4, Loading },
    props: [],
    data() {
        return {
        	isLoading: false,
    	    isDownloading: false, //是否正在下载
            totalPages: 1, //总页数
            currentPage: 0,//当前页
        	// isDownlondPdf: true
        	htmlTitle: '',
        	reportData: null,
        	name: '',
        	reportNum: '',
        	updatedAt: '',
        	isShowpdfs: true,



        	user: null,

        	part1Data: [],
        	part2Data: [],
        	part3Strategy: [],
        	part3style: [],
        	part4Data: []

        }
    },
    computed: {

    },
    watch: {
    	reportData() {
    		this.careerId = this.reportData.career;
    	}
    },
    created() {
    	this.getReportData();
    },
    mounted() {
    },
    methods: {
        scrollToView(id) {
            document.getElementById(id).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            })
        },
        // 查看成长档案
        getReportData() {
        	// window.sessionStorage.setItem('token','30a5d70c58b8f3997bccef1de5d3f5216415e5291339032a9d6ce11649e3a555')
            // var token = window.sessionStorage.getItem('token');
            var _this = this;
            this.$ajax.post(this.G_uris + '/common/report/getByTokenAndDate', {
            		"startDate":"",
            		"endDate":""
                },{
                    headers:{
                        token: window.sessionStorage.getItem('token')
                    }
                })
                // 监听数据返回
                .then((res)=> {
                	let data = res.data.result.data;
	                if(res.data.code === 0) {
	                	this.part1Data = data[1];
	                	this.part2Data = data[2];
	                	this.part3Strategy = data[3].strategy;
	                	this.part3style = data[3].style;
	                	this.part4Data = data[4];
	                	console.log(this.part4Data)
	                }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
    }
}
</script>
<!-- <style type="text/css" lang='less' scoped>
	@import './components/report.less';
</style> -->
<style type="text/css" lang='less' scoped>
.learningReport {
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #E8E8E8;
	color: #333;
	font-size: 16px;
	.loading {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255,255,255,.5);
	}
	.get_pdf {
		height: 0px;
		width: 100%;
		position: fixed;
		top: 30%;
		.inner {
			width: 900px;
			margin: 0 auto;
			position: relative;
			.btn_pdf {
				box-sizing: border-box;
				position: absolute;
				padding: 5px 10px;
				right: -40px;
				width: 40px;
				text-align: center;
				background-color: #2c8ffc;
				color: #fff;
				cursor: pointer;
				border-radius: 5px;
			}
		}
	}
	.pdf {
		width: 900px;
		margin: 0 auto;
		background-color: #fff;
	}
}
</style>
