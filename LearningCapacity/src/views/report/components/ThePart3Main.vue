<!-- part2学习动力 -->
<template>
	<!-- 认知，情感，行为倾向，学习动力... 等 -->
	<div class="part3_1_main_box">
		<P class="main_title"><span class="block"></span>认知策略---<span>复述策略</span></P>
		<div class="main_norm_box">
			<div class="norm_box">
<!-- 				<div class="norm_block" :style="{right: normObj.lnorm/5*670 + 'px', width: (normObj.rnorm-normObj.lnorm)/5*670 + 'px' }" :title="normObj.lnorm + '~' +normObj.rnorm"></div> -->
				<div :class="['grade', getGrade(5)]"  :style="{left: 3.2/5*712-23 + 'px'}">
				</div>
				<div class="norm_block" :style="{right: 0, width: (5-3.2)/5*712 + 'px' }"></div>
				<div :class="['border',item==1&&'f_border']" v-for="item in 6"></div>
			</div>
		</div>
		<!-- <p class="gradeName">你在复述策略水平为<span>{{getGradeName()}}</span></p> -->
		<!-- <P class="main_directions">{{comment}}</P> -->
	</div>
</template>
<script>
export default {
	name: 'page_part3_main',
	components: {  },
    props: {
    	normObj: {
	      type: Object,//norm数组的其中一项
	      // required: true
	    },
	    comment: {
	   		type: String,//comment的类型解读
	      	// required: true
	    }
    },
    data() {
        return {
        }
    },
    watch: {
    },
    created() {	
    },
    mounted() {
    },
    methods: {
    	getGrade(value) {
    		if(value < 1) {
                return 'grade_1';
            }else if(value < 2) {
                return 'grade_2';
            }else if(value < 3) {
                return 'grade_3';
            }else if(value < 4) {
                return 'grade_4';
            }else {
                return 'grade_5';
            }
    	},
    	getGradeName() {
    		if(value < 1) {
                return '很差';
            }else if(value < 2) {
                return '较差';
            }else if(value < 3) {
                return '中等';
            }else if(value < 4) {
                return '较好';
            }else {
                return '很好';
            }
    	}

    }
}
</script>
<style type="text/css" lang='less' scoped>
	.part3_1_main_box {
		.main_title {
			display: flex;
			align-items: center;
			color: #333;
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 25px;
			.block {
				width: 10px;
				height: 10px;
				margin-right: 5px;
				border-radius: 2px;
				background-color: #333;
			}
			.main_title_1 {
				color: #DF6800;
			}
			.main_title_2 {
				color: #E8777E;
			}
			.main_title_3 {
				color: #19ADA7;
			}
		}
		.gradeName {
			margin-bottom: 35px;
			font-size: 14px;
			span {
				font-size: 16px;
				font-weight: bold;
			}
			.span_1 {
				color: #FF9F7B;
			}
			.span_2 {
				color: #FA8AA5;
			}
			.span_3 {
				color: #46CCAC;
			}
		}
		.main_directions {
			padding: 25px;
			font-size: 14px;
			color: #8A8A8A;
			line-height: 28px; 
			background-color: #F7F7F7;
			border-radius: 5px;
		}
		.main_norm_box {
			padding: 80px 0 40px 0;
			.norm_box {
				width: 712px;
				height: 23px;
				background-image: -webkit-linear-gradient(left, #fdab74, #fe8e84);
				background-image: -o-linear-gradient(left, #fdab74, #fe8e84);
				background-image: linear-gradient(to right, #fdab74, #fe8e84);
				display: flex;
				justify-content: space-between;
				position: relative;
				.grade {
					position: absolute;
					top: -79px;
					width: 45px;
					height: 77px;
				}
				.grade_1 {
					background-image: url(/imgs/report_imgs/icon_feichangcha.png);
				}
				.grade_2 {
					background-image: url(/imgs/report_imgs/icon_jiaocha.png);
				}
				.grade_3 {
					background-image: url(/imgs/report_imgs/icon_yiban.png);
				}
				.grade_4 {
					background-image: url(/imgs/report_imgs/icon_jiaohao.png);
				}
				.grade_5 {
					background-image: url(/imgs/report_imgs/icon_feichanghao.png);
				}
				.border {
					height: 23px;
					width: 2px;
					position: relative;
					z-index: 2;
					background-color: #fff;
					&:last-child {
						width: 0;
					}
				}
				.f_border {
					width: 0;
				}
				.norm_block {
					height: 23px;
					position: absolute;
					top: 0;
					right: 0;
					background-color: #DADEE2;
				}
			}
		}
	}
</style>
