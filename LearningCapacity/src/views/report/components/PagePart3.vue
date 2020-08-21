<!-- part1学习潜力 -->
<template>
	<div class="page_part3">
		<div class="page_shadow">
			<h5 class="header">
				<span>Part3 学习效力</span>
			</h5>
			<div class="header_detail_box">
				<p class="header_detail">学习效力指的是如何有效地学习，主要由方法效力和风格效力组成。其中，方法效力指的是学习策略，风格效力指的是学习风格。</p>
			</div>
			<p class="part_big_title part3_big_title">3.1 学习策略</p>
            <div class="header_detail_box">
                <p class="header_detail">学习策略指的是为了提高学习效率而制定的有关学习的复杂方案。它包括认知策略、元认知策略和资源管理策略。</p>
            </div>
            <p class="part_small_title">3.1.1 学习策略评估结果</p>
            <div class="content_box">
            </div>
            <div class="mark_box">
                <p>
                    <span class="bg_1"></span>
                    认知策略
                </p>
                <p>
                    <span class="bg_2"></span>
                    元认知策略
                </p>
                <p>
                    <span class="bg_3"></span>
                    资源管理策略
                </p>
            </div>
			<p class="big_page_number">09</p>
		</div>
		<div class="page_shadow">
			<p class="part_small_title">3.1.2 学习策略分析</p>
                <ThePart3Main ></ThePart3Main>
			<p class="big_page_number">10</p>
		</div>
<!--         <div class="page_shadow">
            <p class="part_big_title part3_big_title">3.2 学习风格</p>
            <div class="header_detail_box">
                <p class="header_detail">学习风格指的是在学习时所习惯的方式，主要由对待信息的主动性程度、信息加工方式和信息加工速度三部分构成。学习风格具有个人特色，没有高低之分，不同风格各有优势。</p>
            </div>
            <p class="part_small_title par3_small_title">3.2.1 学习风格评估结果</p>
            <div class="header_detail_box">
                <p class="header_detail">在下表中学习风格水平值是测试个体在各项学习风格指标中水平大小，常模范围是群体中大多数人在该项上的得分分布，测试者的水平大小分布在哪边表明你的学习风格偏向于哪个方向。</p>
            </div>
            <div class="table_box">
                <table>
                    <thead>
                        <tr>
                            <th>学习风格</th>
                            <th>学习风格水平值</th>
                            <th>常模范围</th>
                            <th width="340">学习风格偏向</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>
                                    对待信息的<br/>主动性程度
                                </p>
                            </td>
                            <td>{{styleNorm1.score | toFixed(2)}}</td>
                            <td>{{styleNorm1.lnorm}}~{{styleNorm1.rnorm}}</td>
                            <td>
                                <div class="score_text">
                                    <p>执行型</p>
                                    <p>执行·创造型</p>
                                    <p>创造型</p>
                                </div>
                                <div class="score_line_box score_line_box1">
                                    <div class="score_line">
                                        <div class="line" :style="{left: styleNorm1.lnorm/200*294 + 'px', width: (styleNorm1.rnorm-styleNorm1.lnorm)/200*294 + 'px' }" :title="styleNorm1.lnorm + '~' +styleNorm1.rnorm">
                                            <div class="block" v-for="item in 20"></div>
                                        </div>
                                        <div class="score" :style="{left: styleNorm1.score/200*294-5 + 'px'}" :title="styleNorm1.score | toFixed(2)"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>信息加工的<br/>依靠方式</p>
                            </td>
                            <td>{{styleNorm2.score | toFixed(2)}}</td>
                            <td>{{styleNorm2.lnorm}}~{{styleNorm2.rnorm}}</td>
                            <td>
                                <div class="score_text">
                                    <p>依存型</p>
                                    <p>依存·独立型</p>
                                    <p>独立型</p>
                                </div>
                                <div class="score_line_box score_line_box2">
                                    <div class="score_line">
                                        <div class="line" :style="{left: styleNorm2.lnorm/200*294 + 'px', width: (styleNorm2.rnorm-styleNorm2.lnorm)/200*294 + 'px' }" :title="styleNorm2.lnorm + '~' +styleNorm2.rnorm">
                                            <div class="block" v-for="item in 20"></div>
                                        </div>
                                        <div class="score" :style="{left: styleNorm2.score/200*294-5 + 'px'}" :title="styleNorm2.score | toFixed(2)"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                      <tr>
                        <td>信息加工速度</td>
                        <td>{{styleNorm3.score | toFixed(2)}}</td>
                        <td>{{styleNorm3.lnorm }}~{{styleNorm3.rnorm}}</td>
                        <td>
                            <div class="score_text">
                                <p>冲动型</p>
                                <p>冲动·沉思型</p>
                                <p>沉思型</p>
                            </div>
                            <div class="score_line_box score_line_box3">
                                <div class="score_line">
                                    <div class="line" :style="{left: styleNorm3.lnorm/200*294 + 'px', width: (styleNorm3.rnorm-styleNorm3.lnorm)/200*294 + 'px' }" :title="styleNorm3.lnorm + '~' +styleNorm3.rnorm">
                                        <div class="block" v-for="item in 20"></div>
                                    </div>
                                    <div class="score" :style="{left: styleNorm3.score/200*294-5 + 'px'}" :title="styleNorm3.score | toFixed(2)"></div>
                                </div>
                            </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>

            <p class="part_small_title">3.2.2 学习风格分析</p>
            <div class="main_box">
                <P class="main_title"><span class="block"></span>你对待信息的主动性程度属于：{{comment1.name}}</P>
                <div class="main_score_box">
                    <div class="score_text">
                        <p>冲动型</p>
                        <p>冲动·沉思型</p>
                        <p>沉思型</p>
                    </div>
                    <div class="score_line_box score_line_box1">
                        <div class="score_line">
                            <div class="line" :style="{left: styleNorm1.lnorm/200*294 + 'px', width: (styleNorm1.rnorm-styleNorm1.lnorm)/200*294 + 'px' }" :title="styleNorm1.lnorm + '~' +styleNorm1.rnorm">
                                <div class="block" v-for="item in 20"></div>
                            </div>
                            <div class="score" :style="{left: styleNorm1.score/200*294-5 + 'px'}" :title="styleNorm1.score | toFixed(2)"></div>
                        </div>
                    </div>
                </div>
                <div class="advantage_box">
                    <div class="advantage">
                        <img src="/imgs/report_imgs/icon_advantage.png" alt="">
                        <p>你的优势有：<span v-for="(item, index) in comment1.advantage">{{item.detail}}</span></p>
                    </div>
                    <div class="advantage">
                        <img src="/imgs/report_imgs/icon_disadvantage.png" alt="">
                        <p>你的盲点有：<span v-for="(item, index) in comment1.disadvantage">{{item.detail}}</span></p>
                    </div>
                </div>

            </div>
            <p class="big_page_number">10</p>
        </div>
        <div class="page_shadow">
            <p class="part_small_title">3.2.2 学习风格分析</p>
            <div class="main_box">
                <P class="main_title"><span class="block"></span>你在加工信息时的依靠方式属于：{{comment2.name}}</P>
                <div class="main_score_box">
                    <div class="score_text">
                        <p>依存型</p>
                        <p>依存·独立型</p>
                        <p>独立型</p>
                    </div>
                    <div class="score_line_box score_line_box2">
                        <div class="score_line">
                            <div class="line" :style="{left: styleNorm2.lnorm/200*294 + 'px', width: (styleNorm2.rnorm-styleNorm2.lnorm)/200*294 + 'px' }" :title="styleNorm2.lnorm + '~' +styleNorm2.rnorm">
                                <div class="block" v-for="item in 20"></div>
                            </div>
                            <div class="score" :style="{left: styleNorm2.score/200*294-5 + 'px'}" :title="styleNorm2.score | toFixed(2)"></div>
                        </div>
                    </div>
                </div>
                <div class="advantage_box">
                    <div class="advantage">
                        <img src="/imgs/report_imgs/icon_advantage.png" alt="">
                        <p>你的优势有：<span v-for="(item, index) in comment2.advantage">{{item.detail}}</span></p>
                    </div>
                    <div class="advantage">
                        <img src="/imgs/report_imgs/icon_disadvantage.png" alt="">
                        <p>你的盲点有：<span v-for="(item, index) in comment2.disadvantage">{{item.detail}}</span></p>
                    </div>
                </div>
            </div>
            <div class="main_box">
                <P class="main_title"><span class="block"></span>你对信息的加工速度属于：{{comment3.name}}</P>
                <div class="main_score_box">
                    <div class="score_text">
                        <p>冲动型</p>
                        <p>冲动·沉思型</p>
                        <p>沉思型</p>
                    </div>
                    <div class="score_line_box score_line_box3">
                        <div class="score_line">
                            <div class="line" :style="{left: styleNorm3.lnorm/200*294 + 'px', width: (styleNorm3.rnorm-styleNorm3.lnorm)/200*294 + 'px' }" :title="styleNorm3.lnorm + '~' +styleNorm3.rnorm">
                                <div class="block" v-for="item in 20"></div>
                            </div>
                            <div class="score" :style="{left: styleNorm3.score/200*294-5 + 'px'}" :title="styleNorm3.score | toFixed(2)"></div>
                        </div>
                    </div>
                </div>
                <div class="advantage_box">
                    <div class="advantage">
                        <img src="/imgs/report_imgs/icon_advantage.png" alt="">
                        <p>你的优势有：<span v-for="(item, index) in comment3.advantage">{{item.detail}}</span></p>
                    </div>
                    <div class="advantage">
                        <img src="/imgs/report_imgs/icon_disadvantage.png" alt="">
                        <p>你的盲点有：<span v-for="(item, index) in comment3.disadvantage">{{item.detail}}</span></p>
                    </div>
                </div>
            </div>
            <p class="big_page_number">10</p>
        </div> -->
	</div>
</template>
<script>
import ThePart3Main from './ThePart3Main.vue';//目录
export default {
	name: 'page_part3',
	components: { ThePart3Main },
    props: [],
    data() {
        return {
        	comment: null,
        	norm: []
        }
    },
    computed: {
        styleNorm1() {
            return this.norm.chuangxin;
        },
        styleNorm2() {
            return this.norm.duli;
        },
        styleNorm3() {
            return this.norm.chensi;
        },
        comment1() {
            return this.comment.chuangxin;
        },
        comment2() {
            return this.comment.duli;
        },
        comment3() {
            return this.comment.chensi;
        }
    },
    watch: {
    },
    created() {	
    	this.getXxfgInfo()
    },
    mounted() {
    },
    methods: {
    	getXxfgInfo() {
		    this.$ajax.post(this.G_uris + '/common/report/style/content',{
		    		report_id: '082c47e4a2e34b44bbc5f655259d3ff4'
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
	.page_part3 {
        .content_box {
            width: 100%;
            height: 580px;
            background: url(/imgs/report_imgs/icon_xuexicelue.png) no-repeat center center;
        }
        .mark_box {
            width: 410px;
            height: 20px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            p {
                font-size: 14px;
                line-height: 20px;
                display: flex;
                align-items: center;
                .bg_1 {
                    background-color: #FF9F7B;
                }
                .bg_2 {
                    background-color: #E77178;
                }
                .bg_3 {
                    background-color: #41CBAA;
                }
                span {
                    width: 24px;
                    height: 13px;
                    border-radius: 2px;
                    margin-right: 7px;
                }
            }
        }
        .score_text {
            padding: 0 15px;
            line-height: 50px;
            display: flex;
            justify-content: space-between;
        }
        .score_line_box {
            width: 340px;
            height: 34px;
            .score_line {
                width: 294px;
                height: 18px;
                margin: 0 auto;
                border-radius: 9px;
                position: relative;
                .line {
                    height: 24px;
                    position: absolute;
                    top: -3px;
                    overflow: hidden;
                    .block {
                        float: left;
                        height: 24px;
                        width: 10px;
                        margin-right: 1px;
                    }
                }
                .score {
                    position: absolute;
                    top: -3px;
                    height: 24px;
                    width: 10px; 
                }
            }
        }
        .score_line_box1 {
            .score_line {
                background-color: #41CBAA;  
                .block {
                    background-color: rgba(14, 238, 184, 0.4);
                }
                .score {
                    background-color: #FDB523;
                }
            }
        }
        .score_line_box2 {
            .score_line {
                background-color: #FDB523;  
                .block {
                    background-color: rgba(255, 208, 20, 0.6);
                }
                .score {
                    background-color: #FA5F51;
                }
            }
        }
        .score_line_box3 {
            .score_line {
                background-color: #FE8E84;  
                .block {
                    background-color: rgba(252, 103, 84, 0.4);
                }
                .score {
                    background-color: #77D6FD;
                }
            }
        }
        .table_box {
            padding-bottom: 60px;
            tr {
                .c_line {
                    background-color: #41CBAA;
                }
                .c_linec {
                    background-color: #F08C00;
                }
                .c_line {
                    background-color: #E7A53C;
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
                    height: 84px;
                    text-align: center;
                    background-color: #F7F7F7;
                    border: 1px solid #fff;


                }
            }
        }
        .main_score_box {
            width: 340px;
            margin-top: -20px;
        }
        .advantage_box {
            padding-top: 40px;
            .advantage {
                display: flex;
                height: 56px;
                align-items: center;
                line-height: 28px;
                margin-bottom: 35px;
                p {
                    font-weight: bold;
                    span {
                        font-weight: normal;
                        color: #8a8a8a;
                    }
                }
                img {
                    margin-right: 15px;
                }
            }
        }
        
	}
</style>
