<template>
	<div class="step_bar">
		<div class="content">
			<ul class="title_box">
				<li v-for="(item, index) in step_bar" :key="index">
					<div class="imgBox">
						<img :src="'/imgs/wayToStudy/analysis_test/step/' + (index < step ? item.overImgUrl : item.imgUrl)" alt="">
						<div :class="index == (step-1) ? 'green_line' : 'white_line'"></div>
					</div>
					<p :class="index < step ? 'title' : ''">
						{{item.title}}
					</p>
				</li>
			</ul>
		</div>
	</div>       
</template>
<style type="text/css" lang='less' scoped>
.step_bar {
	width: 100%;
	.content {
		width: 930px;
		margin: 0 auto;
		padding-top: 20px;
		.title_box {
			padding-bottom: 10px;
			// height: 36px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li {
				width: 110px;
				.imgBox {
					width: 110px;
					height: 60px;
					text-align: center;
				}
				p {
					line-height: 36px;
					font-size: 16px;
					color: #666;
					font-weight: 600;
					text-align: center;
				}
				.title {
					color: #3187e6;
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
        		{ title: '基本信息', imgUrl: 'icon_white1.png',overImgUrl: 'icon_blue1.png' },
        		{ title: '身体条件', imgUrl: 'icon_white2.png',overImgUrl: 'icon_blue2.png' },
        		{ title: '家庭条件', imgUrl: 'icon_white3.png',overImgUrl: 'icon_blue3.png' },
        		{ title: '个人能力', imgUrl: 'icon_white4.png',overImgUrl: 'icon_blue4.png' },
        		{ title: '个人意愿', imgUrl: 'icon_white5.png',overImgUrl: 'icon_blue5.png' },
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
