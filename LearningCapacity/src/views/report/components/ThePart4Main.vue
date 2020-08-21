<!-- part4.2心理健康分析 -->
<template>
	<!-- 认知，情感，行为倾向，学习动力... 等 -->
	<div class="part4_2_main_box">
		<P class="main_title"><span class="block"></span>{{normObj.name}}</P>
		<div class="part4_2_main">
			<div class="norm_box">
				<div class="norm_canvas">
					<canvas :id="canvasId" width="254" height="201"></canvas>
					<div class="pointer" :style="{transform:'rotate(' + (-120 + normObj.score/5*240)+ 'deg)'}"><img src="/imgs/report_imgs/icon_xinlijiankangzhizhen.png" alt=""></div>
				</div>
				<div class="detail_box">
					<p class="title">{{normObj.name}}</p>
					<p class="score">心理健康水平值：<span>{{normObj.score | toFixed(2)}}</span></p>
					<p class="norm">常模范围：<span>{{normObj.lnorm}}-{{normObj.rnorm}}</span></p>
				</div>
			</div>
			<p class="comment">{{comment.comment}}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'page_part4_main',
	components: {},
    props: {
    	normObj: {
	      type: Object,//norm数组的其中一项
	      required: true
	    },
	    comment: {
	   		type: Object,//comment的类型解读
	      	required: true
	    },
	    canvasId: {
	    	type: String,//comment的类型解读
	      	required: true
	    }
    },
    data() {
        return {
        }
    },
    watch: {
    	// normObj() {
    	// 	let score = this.normObj.normObj;
    	// 	console.log(score)
    	// 	this.$nextTick(() =>{
    	// 		this.setCanvas(score);
    	// 	});
    	// }
    },
    created() {	
    },
    mounted() {
    	let score = this.normObj.score;
    	let lnorm = this.normObj.lnorm;
    	let rnorm = this.normObj.rnorm;
    	this.setCanvas(score,lnorm,rnorm);
    },
    methods: {
   		setCanvas(score,lnorm,rnorm) {
   			let canvasId = this.canvasId;
   			let ctx = document.getElementById(canvasId).getContext('2d')

	        ctx.beginPath(); //起始路径，重置当前路径 
			ctx.strokeStyle="#FCE5E0";	
	        ctx.lineWidth = 55;  //设置或返回当前的线条宽度。
	        ctx.lineCap = 'butt'; //设置或返回线条的结束端点样式。
	        ctx.arc(126,127,60, (0.825+lnorm/5*244/180) * Math.PI,(rnorm/5*244/180+0.825)  * Math.PI); //4个刻度平分180°
	        ctx.stroke()
	        ctx.closePath()

	        //橙色圈
	        ctx.beginPath(); //起始路径，重置当前路径 
	        let lingrad = ctx.createLinearGradient(40,20,215,20);//创建线性渐变，颜色渐变
				lingrad.addColorStop(0, '#FDAB74');
				lingrad.addColorStop(1, '#FE8E84');

	        ctx.strokeStyle = lingrad; //设置或返回用于笔触的颜色、渐变或模式。
	        ctx.lineWidth = 10;  //设置或返回当前的线条宽度。
	        ctx.lineCap = 'round'; //设置或返回线条的结束端点样式。

	        ctx.arc(127,127,101, 0.825 * Math.PI,(score/5*244/180+0.825) * Math.PI); //4个刻度平分180°
	        ctx.stroke()
	        ctx.closePath()
   		}
    }
}
</script>
<style type="text/css" lang='less' scoped>
	.part4_2_main_box {
		margin-bottom: 30px;
		.main_title {
			display: flex;
			align-items: center;
			color: #41CBAA;
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 25px;
			.block {
				width: 10px;
				height: 10px;
				margin-right: 5px;
				border-radius: 2px;
				background-color: #41CBAA;
			}
		}
		.part4_2_main {
			display: flex;
			.norm_box {
				text-align: center;
				.norm_canvas {
					width: 254px;
					height: 201px;
					position: relative;
					background: url(/imgs/report_imgs/part4_canvas.png);
					.pointer {
						position: absolute;
						height: 194px;
						left: 113.5px;
						top: 30px;
					}
				}
				.detail_box {
					p {
						line-height: 30px;
						font-size: 16px;
					}
					.title {
						font-weight: bold;
					}
					.score {
						color: #8a8a8a;
						span {
							color: #F8AF3E;
						}
					}
					.norm {
						color: #8a8a8a;
						span {
							color: #50CFB1;
						}
					}
				}
			}
			.comment {
				width: 440px;
				padding-left: 30px;
				padding-top: 30px;
				font-size: 14px;
				color: #8a8a8a;
				line-height: 28px;
			}
		}
	}
</style>
