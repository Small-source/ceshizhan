<template>
    <div class="baikexiangqing">
    	<div class="title">{{baikeData.title}}</div>
		<div v-html="baikeData.content"></div>
    </div>
</template>
<script>
// import Loading from '../../../.././components/Loading.vue'
export default {
    name: '',
    // components: { Loading },
    data() {
        return {
            baikeData: ''
        }
    },
    methods: {
    	//高考百科详情
        getArticleDetail(id){
            var _this=this;
            this.$ajax.post('http://www.xuematech.com/papi/article/getArticleDetail', {
                id:id,
            }).then(function (res) {
                _this.baikeData = res.data.data;
            })
        },
    },
    watch: {
    },
    created() {
    	let id = this.$route.query.id;
    	this.getArticleDetail(id);
    }
}
</script>
<style type="text/css" lang='less' scoped>
    .baikexiangqing {
        min-height: 780px;
        margin-left: 20px;
        background-color: #fff;
        padding: 0px 20px 20px 20px;
        strong {
        	font-weight: bold;
        }
        p *{
        	font-size: 16px;
        	line-height: 1.5em;
        } 
        table {
        	border: 1px solid #333;
        }
        .title {
        	text-align: center;
        	font-size: 24px;
        	font-weight: bold;
        	line-height: 50px;
        	border-bottom: 1px solid #ebebeb;
        	padding-top: 20px;
        	margin-bottom: 20px;
        }
    }
</style>
<style lang='less'>
	.baikexiangqing {
		table {
			width: 900px;
			margin: 0 auto;
			border: 1px solid #333;
			tr td{
				line-height: 40px;
				border: 1px solid #333;
				p {
					margin-bottom: 0px !important;
					padding: 0px 10px;
				}
			}
		}
	}
</style>