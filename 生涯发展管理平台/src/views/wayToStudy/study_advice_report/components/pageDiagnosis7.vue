<template>
	<div>
		<div class="page_shadow page_index">
			<div class="page pdf-page">
				<div class="header">
					<span>Part4</span>学习状态自我诊断
				</div>
				<h6 class="small_title">注意力测评结果</h6>
			    <div class="content result" id="catalog_3" style="font-size: 30px;color:#4187DF;">
                    <div id="circle71" v-show="score!=0" style="margin: 0 auto">

                    </div>
                    <div class="fen" v-if="score!=0">注意力 <br>
                        <span>{{score}}分</span>
                    </div>
                    <p style="font-size: 18px;font-weight: bolder;margin-top: 20px;text-align: center;" >您的最终得分为{{score}}分，这说明: <span style="color:#4187DF;">{{content}}</span></p>
                </div>
                <div class="big_page_number"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageDiagnosis7',
	components: { },
    props: ['diagnosisData'],
    data() {
        return {
			reportData: this.diagnosisData
        }
    },
    computed: {
    	score() {
    		return this.diagnosisData.studentData.score;
    	},
    	content() {
    		return this.diagnosisData.studentData.content;
    	},
    },
    watch: {
    	diagnosisData: {
　　　　　　 immediate:true,
		    handler:function(){
		     	this.addCircle();
		    }
    	}
    },
    created() {
    },
    mounted() {
    },
    methods: {
    	addCircle() {
			this.$nextTick(() => {
				this.setCircle();
			})
    	},
	    setCircle() {
            let studentData = this.content;
            let avgScore1 = this.score;
            $("#circle71").circleChart({
                size: 200,
                widthRatio: 0.25,
                value: avgScore1/150 * 100,
                counterclockwise: true,
                startAngle: -75,
                color: "#1A8779",
                backgroundColor: "#EEEEEE",
                text: false,
                onDraw: function(el, circle) {
                }
            });
            $('canvas').css({margin:"20px auto"})
        },
    }
}
</script>
<style type="text/css" lang='less' scoped>
	@import './report.less';
	.small_title {
		margin-bottom: 20px;
	}
    .content {
    	padding-top: 50px;
		.fen{
	        position: absolute;
	        left:414px;
	        top:310px;
	        font-size: 20px;
	        line-height: 40px;
	        width: 80px;
	        height: 100px;
	        font-weight: bolder;
	        text-align: center;
	        span{
	            font-size: 24px;
	            color:#17787E;
	        }
		}
    }
</style>