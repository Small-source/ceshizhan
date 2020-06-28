<template>
	<div class="page_shadow">
		<div class="page_bg_cover pdf-page">
			<div class="logo_box">
				<img :src="logoUrl" alt="">	
				<!-- <img src="http://a.xuematech.com/data/agent/20191104/1572839873917.png" alt="">	 -->
			</div>
			<div class="header">
				<h5 class="title">{{name}}</h5>
			</div>
			<div class="bottom">
				<p>生涯发展管理平台：{{url}}</p>
				<p>地址：{{address}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'page_bg_cover',
	components: {  },
    props: [],
    data() {
        return {
        	logoUrl: '',
        	name: '',
        	url: '',
        	address: ''
        }
    },
    watch: {
    },
    created() {
    	this.getDetail();
    },
    mounted() {
    },
    methods: {
    	// 获取logo,版权信息等
        getDetail() {
            var _this = this;
            var OEMdomain = this.$OEMdomain;
            this.$ajax.post(this.G_uri + '/agent/detail', {
                webSite: OEMdomain
            })
            .then(function(res) {
                if(res.data.code == 2000) {
                    let data = res.data.data;
                    _this.logoUrl = '/reportLogo'+data.webBaseInfo.home_logo;
                    //_this.logoUrl = 'http://a.xuematech.com/data/agent/20191104/1572839911198.png';
                    _this.address = data.webBaseInfo.address;
                    _this.name = data.agentName;
                    _this.url = document.domain;
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        },
    },
}
</script>
<style type="text/css" lang='less' scoped>
	// @import './report.less';
	.page_bg_cover {
		height: 1230px;
		padding-top: 70px;
		background: url(/imgs/growthFile/bg_cover.png);
		background-size: 900px 1300px;
		position: relative;
		.header {
			.title {
				font-size: 24px;
				color: #333;
				font-weight: 600;
				text-align: center;
			}
		}
		.logo_box {
		    margin: 400px auto 10px;
		    max-height: 120px;
		    max-width: 135px;
		    img {
		    	display: block;
		    	width: 100%;
		    	height: 100%;
		    }	
		}
		.bottom {
			position: absolute;
			width: 900px;
			bottom: 40px;
			p {
				text-align: center;
				line-height: 30px;
			}
		}

	}
</style>
