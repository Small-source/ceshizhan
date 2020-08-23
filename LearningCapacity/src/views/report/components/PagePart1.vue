<!-- part1学习潜力 -->
<template>
	<div class="page_part1">
		<div class="page_shadow">
			<h5 class="header">
				<span>Part1 学习潜力</span>
			</h5>
			<div class="header_detail_box">
				<p class="header_detail">学习潜力由进行学习活动时所运用到的能力所构成。学习力测评通过对与学习活动相关的9项基本能力进行测试，并与测评者同龄群体平均水平进行对比来评估测评者的学习潜力。</p>
				<p class="header_detail">9项基本能力包括：信息加工能力、工作记忆能力、逻辑推理能力、思维转换能力、表象能力、空间能力、语言能力、数学能力、注意力。</p>
			</div>
			<p class="part_big_title">1.1 学习潜力评估结果</p>
			<div class="table_box">
				<table >
                    <thead>
                        <tr>
	                        <th>学习潜力指标</th>
	                        <th>潜能水平值</th>
	                        <th>常模范围</th>
	                        <th>出众百分比</th>
	                        <th width="55">很低</th>
	                        <th width="55">较低</th>
	                        <th width="55">一般</th>
	                        <th width="55">较高</th>
	                        <th width="55">很高</th>
                    	</tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in norm_copy">
	                        <td>{{data.name }}</td>
	                        <td>{{data.score | toFixed(2)}}</td>
	                        <td>{{data.lnorm}}~{{data.rnorm}}</td>
	                        <td>{{data.percent*100 | toFixed(2)}}%</td>
	                        <td colspan="5">
	                            <div class="percent_line">
		                            <div class="line c_grade1" v-if="data.grade==1" :style="{width:10+'%'}"></div>
		                            <div class="line c_grade2" v-if="data.grade==2"
		                                 :style="{width:30+'%'}"></div>
		                            <div class="line c_grade3" v-if="data.grade==3"
		                                 :style="{width:50+'%'}"></div>
		                            <div class="line c_grade4" v-if="data.grade==4"
		                                 :style="{width:70+'%'}"></div>
		                            <div class="line c_grade5" v-if="data.grade==5"
		                                 :style="{width:90+'%'}"></div>
	                            </div>
	                        </td>
	                    </tr>
                      </tbody>
                </table>
			</div>
			<p class="big_page_number">01</p>
		</div>
		<div class="page_shadow" v-if="comment">
			<p class="part_big_title">1.2 学习潜力分析</p>
			<!-- 信息加工能力 -->
			<!-- <div class="main_box">
				<P class="main_title"><span class="block"></span>{{norm[0].name}}</P>
				<div class="main_norm_box">
					<div class="rule_box">
						<img src="~@/assets/report_imgs/norm_rule.png" alt="">
					</div>
					<div class="norm_box">
						<div class="norm_block" :style="{left: norm[0].lnorm/200*670 + 'px', width: (norm[0].rnorm-norm[0].lnorm)/200*670 + 'px' }" :title="norm[0].lnorm + '~' +norm[0].rnorm"></div>
						<div class="norm_score" v-if="norm[0].score/200 < 0.1" :style="{left: norm[0].score/200*670-30 + 'px',background: 'url(~@/assets/report_imgs/icon_circle1.png) no-repeat center center'}">{{norm[0].score}}</div>
						<div class="norm_score" v-else-if="norm[0].score/200 < 0.25" :style="{left: norm[0].score/200*670-30 + 'px',background: 'url(~@/assets/report_imgs/icon_circle2.png) no-repeat center center'}">{{norm[0].score}}</div>
						<div class="norm_score" v-else-if="norm[0].score/200 < 0.75" :style="{left: norm[0].score/200*670-30 + 'px',background: 'url(~@/assets/report_imgs/icon_circle3.png) no-repeat center center'}">{{norm[0].score}}</div>
						<div class="norm_score" v-else-if="norm[0].score/200 < 0.9" :style="{left: norm[0].score/200*670-30 + 'px',background: 'url(~@/assets/report_imgs/icon_circle4.png) no-repeat center center'}">{{norm[0].score}}</div>
						<div class="norm_score" v-else=" 0.9<= norm[0].score/200" :style="{left: norm[0].score/200*670-30 + 'px',background: 'url(~@/assets/report_imgs/icon_circle5.png) no-repeat center center'}">{{norm[0].score}}</div>
					</div>
				</div>
				<p class="main_detail">你在{{norm[0].name}}的潜能水平值为<span class="c_orange">{{norm[0].score}}</span>，你超过<span class="c_red">{{(norm[0].percent) * 100}}%</span>的同龄人。</p>
				<p class="main_remark"><span class="remark">备注</span>本测评潜能水平值范围0~200，工作记忆能力平均潜能水平值<span class="c_green">{{norm[0].lnorm}}~{{norm[0].rnorm}}</span></p>
				<P class="main_directions">{{comment.info.comment}}</P>
			</div> -->
			<ThePart1Main :normObj="norm_copy[0]" :comment="comment[norm_copy[0].type].comment" ></ThePart1Main>
			<ThePart1Main :normObj="norm_copy[1]" :comment="comment[norm_copy[1].type].comment" ></ThePart1Main>
			<p class="big_page_number">02</p>
		</div>
		<div class="page_shadow" v-if="comment">
			<p class="part_big_title">1.2 学习潜力分析</p>
			<ThePart1Main :normObj="norm_copy[5]" :comment="comment[norm_copy[5].type].comment" ></ThePart1Main>
			<ThePart1Main :normObj="norm_copy[4]" :comment="comment[norm_copy[4].type].comment" ></ThePart1Main>
			<p class="big_page_number">03</p>
		</div>
		<div class="page_shadow" v-if="comment">
			<p class="part_big_title">1.2 学习潜力分析</p>
			<ThePart1Main :normObj="norm_copy[3]" :comment="comment[norm_copy[3].type].comment" ></ThePart1Main>
			<ThePart1Main :normObj="norm_copy[2]" :comment="comment[norm_copy[2].type].comment" ></ThePart1Main>
			<p class="big_page_number">04</p>
		</div>
		<div class="page_shadow" v-if="comment">
			<p class="part_big_title">1.2 学习潜力分析</p>
			<ThePart1Main :normObj="norm_copy[6]" :comment="comment[norm_copy[6].type].comment" ></ThePart1Main>
			<ThePart1Main :normObj="norm_copy[7]" :comment="comment[norm_copy[7].type].comment" ></ThePart1Main>
			<p class="big_page_number">05</p>
		</div>
	</div>
</template>
<script>
import ThePart1Main from './ThePart1Main.vue';//目录
export default {
	name: 'page_part1',
	components: { ThePart1Main },
    props: {
    	norm: {
	      type: Array//norm数组的其中一项
	      // required: true
	    },
	    comment: {
	   		type: Object//comment的类型解读
	      	// required: true
	    }
    },
    data() {
        return {
        	// comment: null,  //info    work        space    present  think          logic       lang      math
        	// norm: [] //0信息加工能力 1工作记忆能力 2空间能力 3表象能力 4思维转换能力 5逻辑推理能力 6语言能力 7数学能力 
        }
    },
    computed: {
		norm_copy() {
			return this.norm.slice(0,9);
		},
		norm_total() {
			return this.norm.slice(9);
		}
    },
    watch: {
    },
    created() {	
    	// this.getRzqnInfo()
    },
    mounted() {
    },
    methods: {
    	getRzqnInfo() {
		    this.$ajax.post(this.G_uris + '/common/report/cognition/content',{
		    		// "test_id":"83404124475f4f9dad0bfb54e4b1e177"
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
	.page_part1 {
		.table_box {
			tr {
				.c_grade1 {
					background-color: #F6B980;
				}
				.c_grade2 {
					background-color: #F08C00;
				}
				.c_grade3 {
					background-color: #E7A53C;
				}
				.c_grade4 {
					background-color: #F87608;
				}
				.c_grade5 {
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
					line-height: 46px;
					text-align: center;
					background-color: #F7F7F7;
					border: 1px solid #fff;
					.percent_line {
						height: 19px;
						.line {
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
