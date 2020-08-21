<!-- part1学习潜力 -->
<template>
	<div class="page_part4">
        <div class="page_shadow">
            <h5 class="header">
                <span>Part4 心理健康</span>
            </h5>
            <div class="header_detail_box">
                <p class="header_detail">本报告将从人际关系敏感性、偏执、焦虑、强迫症状、敌对、抑郁等六个方面评估测评对象的心理健康水平</p>
            </div>
            <p class="part_big_title part3_big_title">4.1 心理健康评估结果</p>
            <div class="header_detail_box">
                <p class="header_detail">在下表中心里健康水平值是测试个体在各项心理健康指标中的水平大小，值越高则在该因子上测试者的症状越明显</p>
                <p class="header_detail">常模范围是群体中大多数人在该项上的水平范围，途中评估的心理健康水平值高于常模范围，则说明在该指标上异常；若心理健康水平值在常模范围之内或低于常模范围，则说明该心理健康指标与大多数人无明显差别且正常。</p>
            </div>
            <div class="table_box">
                <table>
                    <thead>
                        <tr>   
                            <th rowspan="2">心理健康</th>
                            <th rowspan="2">心理健康水平值</th>
                            <th rowspan="2">常模范围</th>
                            <th colspan="5">得分</th>
                        </tr>
                        <tr>
                            <th width="64">1</th>
                            <th width="64">2</th>
                            <th width="64">3</th>
                            <th width="64">4</th>
                            <th width="64">5</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr  v-for="(value, key, index) in norm">
                            <td>{{value.name}}</td>
                            <td>{{value.score | toFixed(2)}}</td>
                            <td>{{value.lnorm}}~{{value.rnorm}}</td>
                            <td colspan="5">
                                <div class="line_box">
                                    <div :class="['line_score', getColor(value.score)]" :style="{ width: value.score/5*324 + 'px' }" :title="value.score | toFixed(2)"></div>
                                    <div class="lien_norm" :style="{left: value.lnorm/5*324 + 'px', width: (value.rnorm-value.lnorm)/5*324 + 'px' }"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="big_page_number">10</p>
        </div>
        <div class="page_shadow" v-if="norm">
            <p class="part_big_title">4.2 心理健康分析</p>
            <!-- 人际关系敏感、偏执、焦虑 -->
            <ThePart4Main :normObj="norm.mingan" :comment="comment.mingan" canvasId="canvas_mingan"></ThePart4Main>
            <ThePart4Main :normObj="norm.pizhi" :comment="comment.pizhi" canvasId="canvas_pizhi"></ThePart4Main>
            <ThePart4Main :normObj="norm.jiaolv" :comment="comment.jiaolv" canvasId="canvas_jiaolv"></ThePart4Main>
            <p class="big_page_number">10</p>
        </div>
        <div class="page_shadow" v-if="norm">
            <p class="part_big_title">4.2 心理健康分析</p>
            <!-- 强迫症状、敌对、抑郁 -->
            <ThePart4Main :normObj="norm.qiangpo" :comment="comment.qiangpo" canvasId="canvas_qiangpo"></ThePart4Main>
            <ThePart4Main :normObj="norm.didui" :comment="comment.didui" canvasId="canvas_didui"></ThePart4Main>
            <ThePart4Main :normObj="norm.yiyu" :comment="comment.yiyu" canvasId="canvas_yiyu"></ThePart4Main>
            <p class="big_page_number">10</p>
        </div>
	</div>
</template>
<script>
import ThePart4Main from './ThePart4Main.vue';//目录
export default {
	name: 'page_part4',
	components: { ThePart4Main },
    props: [],
    data() {
        return {
        	comment: null,
        	norm: null,
        }
    },
    computed: {

    },
    watch: {
    },
    created() {	
    	this.getXljkInfo()
    },
    mounted() {
    },
    methods: {
        getColor(value) {
            if(value < 1) {
                return 'c_line_score1';
            }else if(value < 2) {
                return 'c_line_score2';
            }else if(value < 3) {
                return 'c_line_score3';
            }else if(value < 4) {
                return 'c_line_score4';
            }else if(value < 5) {
                return 'c_line_score5';
            }
        },
    	getXljkInfo() {
		    this.$ajax.post(this.G_uris + '/common/report/mind/content',{
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
	.page_part4 {
        .table_box {
            padding-bottom: 60px;
            tr {
                .c_line_score1 {
                    background-color: #F6B980;
                }
                .c_line_score2 {
                    background-color: #F08C00;
                }
                .c_line_score3 {
                    background-color: #E7A53C;
                }
                .c_line_score4 {
                    background-color: #F87608;
                }
                .c_line_score5 {
                    background-color: #DF6800;
                }
                th {
                    background-color: #41CBAA;
                    color: #fff;
                    font-size: 16px;
                    line-height: 42px;
                    background-color: #41CBAA;
                    border: 1px solid #fff;
                    text-align: center;
                }
                td {
                    font-size: 14px;
                    height: 60px;
                    text-align: center;
                    background-color: #F7F7F7;
                    border: 1px solid #fff;
                    .line_box {
                        height: 20px;
                        position: relative;
                        .line_score {
                            height: 20px;
                        }
                        .lien_norm {
                            position: absolute;
                            top: -4px;
                            height: 28px;
                            background-color: rgba(243, 96, 41, .4);
                        }
                    }

                }
            }
        }


        
	}
</style>
