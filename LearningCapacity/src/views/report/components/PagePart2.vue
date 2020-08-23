<!-- part1学习潜力 -->
<template>
	<div class="page_part2">
		<div class="page_shadow">
			<h5 class="header">
				<span>Part2 学习动力</span>
			</h5>
			<div class="header_detail_box">
				<p class="header_detail">学习动力指的是引发并维持学习活动的内部心理倾向。学习动力主要表现在学习态度上，学习态度由认知、情感、行为意向三部分组成，这三部分是协调统一的关系。</p>
			</div>
			<p class="part_big_title">2.1 学习动力评估结果</p>
			<div class="result_box">
				<div :class="['detail_box','detail_box'+index]" v-for="(item,index) in norm" :key="index">
					<p class="title"><span v-if="index !=3"></span>{{item.name}}</p>
					<p class="score">水平值：<span>{{item.name}}</span></p>
					<p class="score">评价：<span>{{getGrade(item.grade)}}</span></p>
					<p class="norm">常模范围：<span>{{item.lnorm}}-{{item.rnorm}}</span></p>
				</div>
				<div class="circle_box">
					<p class="qg">情感</p>
					<p class="rz">认知</p>
					<p class="xwyx">行为意向</p>
					<div :class="['norm_box', 'norm_' + item.type]" v-for="(item,index) in norm" :key="index" v-if="index !=3"> 
						<div class="norm">
							<div class="norm_child"  :style="{left: (item.lnorm-1)/4*78 + 'px', width: (item.rnorm-item.lnorm)/4*78 + 'px' }"></div>
							<div class="norm_bg"></div>
							<div class="score" :style="{left: (item.score-1)/4*78-12 + 'px'}"><img src="~@/assets/report_imgs/icon_xuexidongliyuanquan.png" alt="" :title="item.score | toFixed(2)"></div>
						</div>
					</div>
				</div>
			</div>
			<p class="big_page_number">07</p>
		</div>
		<div class="page_shadow" v-if="comment">
			<p class="part_big_title">2.2 学习动力分析</p>
			<ThePart2Main :normObj="norm[0]" :comment="comment[0].comment" ></ThePart2Main>
			<ThePart2Main :normObj="norm[1]" :comment="comment[1].comment" ></ThePart2Main>
			<p class="big_page_number">08</p>
		</div>
		<div class="page_shadow" v-if="comment">
			<p class="part_big_title">2.2 学习动力分析</p>
			<ThePart2Main :normObj="norm[2]" :comment="comment[2].comment" ></ThePart2Main>
			<ThePart2Main :normObj="norm[3]" :comment="comment[3].comment" ></ThePart2Main>
			<p class="big_page_number">09</p>
		</div>
	</div>
</template>
<script>
import ThePart2Main from './ThePart2Main.vue';//学习动力/学习动力分析
export default {
	name: 'page_part2',
	components: { ThePart2Main },
    props: [],
    data() {
        return {
        	comment: null,
        	norm: []
        }
    },
    watch: {
    },
    created() {	
    	// this.getXxdlInfo()
    },
    mounted() {
    },
    methods: {
    	getGrade(grade) {
			switch(grade) {
			    case 1:
			        return '很差';
			        break;
			    case 2:
			        return '较差';
			        break;
			  	case 3:
			        return '中等';
			        break;
			    case 4:
			        return '较好';
			        break;		
			  	case 5:
			        return '很好';
			        break;	        
			}
    	},
    	getXxdlInfo() {
    		window.sessionStorage.setItem('token','30a5d70c58b8f3997bccef1de5d3f5216415e5291339032a9d6ce11649e3a555')
            var token = window.sessionStorage.getItem('token');
		    this.$ajax.post(this.G_uris + '/common/report/learning/content',{
		    		"test_id":"83404124475f4f9dad0bfb54e4b1e177"
                },{
                    headers:{
                        token: window.sessionStorage.getItem('token')
                    }
                })
                // 监听数据返回
                .then(res=> {
                	let data = res.data;
                    if(data.code == 0) {
                        this.comment = data.result.comment;
                        this.norm = data.result.norm;
                    }else {

                    }
                })
                .catch(res=>  {
                    console.log(error);
                })
    	}
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.page_part2 {
		.result_box {
			padding-top: 180px;
			position: relative;
			.circle_box {
				position: relative;
				width: 317px;
				height: 319px;
				margin: 0 auto;
				background: url(~@/assets/report_imgs/icon_xuexidongli.png) no-repeat center center;
				p {
					font-size: 15px;
					font-weight: bold;
					position: absolute; 
				}
				.qg {
					top: -24px;
					left: 145px;
				}
				.rz {
					bottom: 66px;
					left: -20px;
				}
				.xwyx {
					bottom: 66px;
					right: -50px;
				}
				.norm_box {
					position: absolute;
					width: 302px;
					top: 155px;
					height: 8.5px;
					left: 7px;
					.norm {
						width: 78px;
						height: 9px;
						background-color: #DCDCDC;
						position: relative;
						float: right;
						.norm_bg {
							width: 78px;
							height: 9px;
							position: relative;
							z-index: 2;
							background: url(~@/assets/report_imgs/part2_tip.png) no-repeat center center;
						}
						.norm_child {
							height: 9px;
							background-color: #50CFB1;
							position: absolute;	
							z-index: 1
						}
						.score {
							position: absolute;
							z-index: 10;
							width: 24px;
							height: 24px;
							top: 50%;
							margin-top: -12px;
						}
					}
				}
				.norm_qinggan {
					transform: rotate(-90deg);
				}
				.norm_renzhi {
					transform: rotate(150deg);
				}
				.norm_xingwei {
					transform: rotate(30deg);
				}
			}
			.detail_box {
				line-height: 28px;
				color: #8a8a8a;
				font-size: 14px;
				position: absolute;
				.title {
					font-size: 15px;
					font-weight: bold;
					color: #333;
					display: flex;
					align-items: center;
					margin-left: -10px;
					span {
						width: 6px;
						height: 6px;
						background-color: #333;
						margin-right: 5px;
						border-radius: 2px;
					}
				}
				.score {
					span {
						color: #F8AF3E;
					}
				}
				.norm {
					span {
						color: #50CFB1;
					}
				}
			}
			.detail_box0 {
				left: 10px;
				top: 380px;
			}
			.detail_box1 {
				left: 315px;
				top: 20px;
			}
			.detail_box2 {
				left: 600px;
				top: 380px;
			}
			.detail_box3 {
				left: 300px;
				top: 280px;
				z-index: 3;
				text-align: center;
				.title {
					font-size: 16px;
					margin-left: 0;
					text-align: center;
					justify-content: center;
				}
			}
		}
	}
</style>
