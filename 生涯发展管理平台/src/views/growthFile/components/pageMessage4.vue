<template>
	<div>
		<div class="page_content page_award" v-for="(item,index) in award">
			<h6 class="small_title" v-if="index == 0">获奖信息</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>类型：{{item.t | model}}</p>
				</div>
				<div class="main">			
					<ul class="lis_detail">
						<li v-if="item.a">大赛：{{item.a}}</li>
						<li>具体奖项：{{item.n}}</li>
					</ul>
					<ul class="lis_detail">
						<li>奖项等级：{{item.deg}}</li>
						<li>参加时间：{{item.d}}</li>
					</ul>
					<div class="detail_box">
						<p class="title">描述：</p>
						<p class="detail">
							{{item.desc}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
export default {
	name: 'growthMessage4',
	components: { },
    props: ['award'],
    data() {
        return {
        }
    },
    computed: {
    },
    filters: {
    	model(idx) {
			switch(idx) {
			    case 1:
			        return '大赛获奖'
			        break;
			    case 2:
			        return '校园获奖'
			        break;
			  	case 3:
			        return '社会实践'
			        break;
			    case 4:
			        return '研究性学习'
			} 
    	}
    },
    methods: {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_award {
		padding-bottom: 40px;
		&:last-child {
			.main_box {
				border: none;
			}
		}
		.main_box {
			padding-bottom: 30px;
			border-bottom: 1px dashed #dedede;
			.title_box {
				display: flex;
				align-items: center;
				margin-bottom: 20px;
				font-size: 20px;
				color: #7AC34F;
				font-weight: 600;
				// .block {
				// 	width: 26px;
				// 	height: 15px;
				// 	margin-right: 10px;
				// }
			}
			.main {
				padding-left: 26px;
			}
			.lis_detail {
				display: flex;
				flex-wrap: wrap;
				font-size: 18px;
				margin-bottom: 10px;
				li {
					margin-right: 60px;
					line-height: 30px;
				}
			}
			.detail_box {
				.title {
					font-weight: bold;
					font-size: 16px;
					line-height: 30px;
				}
				.detail {
					color: #666;
					font-size: 14px;
					line-height: 24px;
				}
			}
		}
	}
</style>