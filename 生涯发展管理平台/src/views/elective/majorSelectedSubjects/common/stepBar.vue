<template>
	<div class="step_bar">
		<div class="content">
			<ul class="title_box">
				<li v-for="(item, index) in step_bar" :key="index">
					<p :class="index < step ? 'title' : ''">
						{{item.title}}
					</p>
				</li>
			</ul>
			<ul class="number_box">
				<li v-for="(item, index) in step_bar" :key="index">
					<div class="imgBox">
						<img :src="'/imgs/elective/common/' + (index < step ? item.overImgUrl : item.imgUrl)" alt="">
						<div :class="index < (step-1) ? 'green_line' : 'white_line'" v-show="index < 4"></div>
					</div>
				</li>
			</ul>
		</div>
	</div>       
</template>
<style type="text/css" lang='less' scoped>
.step_bar {
	height: 250px;
	width: 100%;
	background-color: #2c8ffc;
	background: url(/imgs/elective/common/bg_beijing.png) no-repeat center center;
	.content {
		width: 970px;
		margin: 0 auto;
		padding-top: 30px;
		.title_box {
			padding-bottom: 10px;
			height: 36px;
			li {
				width: 190px;
				float: left;
				p {
					line-height: 36px;
					font-size: 16px;
					color: #fff;
					font-weight: 600;
					text-align: center;
				}
				.title {
					color: #05ef8e;
				}
			}
		}
		.number_box {
			height: 30px;
			background: url(/imgs/elective/common/icon_jindu.png) no-repeat center center;
			background-size: 820px 30px;
			li {
				width: 190px;
				height: 30px;
				float: left;
				.imgBox {
					width: 20px;
					height: 30px;
					margin: 0 auto;
					position: relative;
					display: flex;
					align-items:center;
					div {
						position: absolute;
						right: -185px;
						height: 4px;
						width: 190px;
						top: 50%;
						margin-top: -2px;
					}
					.green_line {
						background: url(/imgs/elective/common/icon_lvtiao.png) no-repeat center center;
					}
					.white_line {
						background: url(/imgs/elective/common/icon_baitiao.png) no-repeat center center;
						// background-color: red;
					}
				}
			}
		}
	}
}
</style>
<script>
export default {
    props: [ 'step' ],
    data() {
        return {
        	step_bar: [
        		{ title: '设置目标专业', imgUrl: 'icon_white1.png',overImgUrl: 'icon_green1.png' },
        		{ title: '查看目标专业科目要求', imgUrl: 'icon_white2.png',overImgUrl: 'icon_green2.png' },
        		{ title: '填写决策平衡单', imgUrl: 'icon_white3.png',overImgUrl: 'icon_green3.png' },
        		{ title: '确定选考科目组合', imgUrl: 'icon_white4.png',overImgUrl: 'icon_green4.png' },
        		{ title: '生成报告', imgUrl: 'icon_white5.png',overImgUrl: 'icon_green5.png' },
        	]
        }
    },
    methods: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
       
    }
}
</script>
