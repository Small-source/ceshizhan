<template>
	<div>
		<div class="page_content xueye_message" v-for="(item,index) in data1" v-if="data1.length">
			<h6 class="small_title" v-if="index == 0">学业信息</h6>
			<h6 class="small_title_nobg" v-if="index == 0">高一</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>考试名称：{{item.n}}</p>
					<p>考试时间：{{item.d}}</p>
					<p>年级排名：{{item.r}}</p>
				</div>
				<ul class="main">
					<li  v-for="(child) in item.c" v-if="child.s">{{child.sub}}：{{child.s}}分 / {{child.r}}名</li>
				</ul>
			</div>
		</div>
		<div class="page_content xueye_message" v-for="(item,index) in data2" v-if="data2.length">
			<h6 class="small_title_nobg" v-if="index == 0">高二</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>考试名称：{{item.n}}</p>
					<p>考试时间：{{item.d}}</p>
					<p>年级排名：{{item.r}}</p>
				</div>
				<ul class="main">
					<li  v-for="(child) in item.c" v-if="child.s">{{child.sub}}：{{child.s}}分 / {{child.r}}名</li>
				</ul>
			</div>
		</div>
		<div class="page_content xueye_message" v-for="(item,index) in data3" v-if="data3.length">
			<h6 class="small_title_nobg" v-if="index == 0">高三</h6>
			<div class="main_box">
				<div class="title_box">
					<p class="block"></p>
					<p>考试名称：{{item.n}}</p>
					<p>考试时间：{{item.d}}</p>
					<p>年级排名：{{item.r}}</p>
				</div>
				<ul class="main">
					<li  v-for="(child) in item.c" v-if="child.s">{{child.sub}}：{{child.s}}分 / {{child.r}}名</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'growthMessage2',
	components: { },
    props: ['score'],
    data() {
        return {

        }
    },
    computed: {
    	data1() {
    		let data = this.score;
    		if(data) {
    			if(data[1]) {
    				return data[1];
    			}else {
    				return [];
    			}
    		}
    	},
    	data2() {
    		let data = this.score;
    		if(data) {
    			if(data[2]) {
    				return data[2];
    			}else {
    				return [];
    			}
    		}
    	},
    	data3() {
    		let data = this.score;
    		if(data) {
    			if(data[3]) {
    				return data[3];
    			}else {
    				return [];
    			}
    		}
    	},
    },
    methods: {
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.xueye_message {
		.main_box {
			padding-bottom: 40px;
			.title_box {
				display: flex;
				align-items: center;
				margin-bottom: 20px;
				font-size: 18px;
				p {
					margin-right: 60px;
					&:last-child {
						margin-right: 0px;
					}
				}
				.block {
					width: 16px;
					height: 10px;
					margin-right: 10px;
					background-color: #7AC34F;
				}
			}
			.main {
				padding-left: 30px;
				display: flex;
				flex-wrap: wrap;
				li {
					margin-bottom: 10px;
					width: 25%;
					font-size: 14px;
					color: #666;
				}
			}
		}
	}
</style>