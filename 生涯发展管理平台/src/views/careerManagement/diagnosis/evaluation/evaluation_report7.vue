<template>
    <div class="evaluation_report">
        <DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-if="isDownloading"></DownloadProgress>
        <div class="pdf" id="pdfDom" style="background-color:#E8E8E8;">
            <div class="page_shadow">
                <div class="page_cover pdf-page">
                    <div class="header">
                        <h3>注意力测评报告</h3>
                        <p class="detail">[ 个人报告 ]</p>
                    </div>
                    <div class="main" v-if="reportData">
                        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{reportData.name}}</p>
                        <p>报告编号：{{reportData.reportNum}}</p>
                        <p>报告时间：{{reportData.updatedAt}}</p>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        <span>目录</span>
                    </h5>
                    <div class="content" id="catalog_1">
                        <div class="big_title_box" @click="scrollToView('page1')">
                            <div class="big_title"><span>Part1</span>前言</div>
                            <div class="line"></div>
                            <div class="page_number">1</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page2')">
                            <p class="big_title"><span>Part2</span>测评结果</p>
                            <div class="line"></div>
                            <div class="page_number">2</div>
                        </div>
                        <div class="big_title_box" @click="scrollToView('page3')">
                            <p class="big_title"><span>Part3</span>温馨提示</p>
                            <div class="line"></div>
                            <div class="page_number">3</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        第一部分 前言
                    </h5>
                    <div class="content" id="catalog_2">
                        <div class="foreword_detail">
                            <p>有的学生上课集中注意力时间短，经常东张西望，做小动作，如玩钢笔、抓耳挠腮等；不听从老师的指令，不遵守课堂纪律。一件小小的事反应特别强烈，情绪激动，并好长时间平静不下来；上课时常想与旁边的同学说话，不能专心做作业，影响别人；写作业速度慢，别人一个小时就能完成的作业，他们要拖到3—4个小时；行为较为急躁冲动，不能推迟需要的满足；较为幼稚，爱与比自己小的孩子一起玩；不喜欢阅读文字书，尤其是篇幅较长的书。经常爱看漫画书，并乐此不疲；集体活动中不能像别人一样遵守规则，不能等待，表现为急不可耐；作业质量不稳定，有时很好，有时则很差；甚至牛头不对马嘴；爱做具体的数学题，而不爱解决与听、说、读、写、记有关的作业。以上这些行为都是注意力不集中的表现。</p>
                            <p>俄国教育家乌申斯基曾说：注意力是心灵的天窗，只有打开这扇天窗，才能让知识的阳光洒满心田。心理学家认为，在一个人所有的学习能力中，注意力是最根本的能力，是影响人们学习效果好坏、成绩提升的核心因素，同时也是最重要的智力因素。</p>
                            <p>注意力是一切学习能力的根本，是影响学生学习成绩提升的最关键因素；注意力是最重要的智力因素，是记忆力、想象力、思维力、观察力的准备状态；是大脑进行感知、学习、思维等认知活动的基本条件。学生在学习过程中，首先要有高度的注意力，一个学习不专心，上课总是开小差的学生是很难取得好成绩的，慢慢的成绩差就失去了学习的兴趣，没有了自信，成绩就会更差，结果注意力更加不集中，造成恶性循环。该注意力测评由华南师范大学教科院编制，通过该测评可以测量中小学学生的注意力能力。</p>
                        </div>
                        <div class="foreword_footer">
                            <div class="title">阅读须知：</div>
                            <p>①本报告基于您的在线作答结果，有针对性地为您提供建议。</p>
                            <p>②测评结果的准确性和可靠性主要依赖于您是否对自己有明确客观的认识，以及在测评过程中是否认真和坦白等。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        第二部分 测评结果
                    </h5>
                    <div class="content result" id="catalog_3" style="font-size: 30px;color:#4187DF;">
                        <img src="imgs/careerManagement/diagnosis/icon_zhuyiliceping.png" alt="" style="height: 30px">
                        注意力测评
                        <div id="circle" v-show="score!=0" style="margin: 0 auto">

                        </div>
                        <div class="fen" v-if="score!=0">注意力 <br>
                            <span>{{score}}分</span>
                        </div>
                        <p style="font-size: 18px;font-weight: bolder;margin-top: 20px;" >您的最终得分为{{score}}分，这说明: <span style="color:#4187DF;">{{content}}</span></p>
                    </div>
                </div>
            </div>
            <div class="page_shadow">
                <div class="page pdf-page">
                    <h5 class="header">
                        第三部分 温馨提示
                    </h5>
                    <div class="content warmtips" id="catalog_3">
                        <p>注意的稳定性直接影响学习效率，进而影响中学生的学习成绩，因此对中学生进行注意力训练是非常有必要的，以下是注意力训练的几种方法，可以独立进行训练：</p>
                        <div class="tips_box">
                            <h6 class="tips_title">1.142呼吸法：</h6>
                            <p>闭上自己的眼睛，在闭上眼睛的同时请检查一下你是否保持了科学坐姿，如果是就在心里表扬一下你自己，如果不是请调整你的坐姿。深深地吸一口气，感觉小肚子鼓起来了，又鼓起来了，慢慢地吐气，你的小肚子在一点一点的变小，把你肚子中所有不快乐的气体统统呼出，现在的你放松极了，慢慢地吸进一口清凉的空气，感觉你的心情变得非常轻松，非常愉悦，你的小肚子慢慢地鼓起来了，然后将你体内所有的不快，所有的烦恼慢慢地呼出，你的身体凝聚一股神奇的力量，请在心里告诉自己：我已经做好上课的准备了，我要开始上课了，默数2个数字，睁开你的眼睛。</p>
                            <p>训练过程中，呼吸的深度是按照吸气1秒钟，屏住呼吸4秒钟，吐气2秒钟来进行，可以自己在心里数节拍，自行控制节奏。如果不好掌控学生呼吸的深度，可以配合手势来进行。即：一手放在自己的脖子下面，另一只手放在自己的小肚子上，随着深呼吸的进行，你会感到下面的手在一吸一呼的过程中慢慢地前后移动着，而上面的这只手并没太大频率的移动即可。</p>
                        </div>
                        <div class="tips_box">
                            <h6 class="tips_title">1.冥想法：</h6>
                            <p>身体坐直，全身放松，双手自然放在两腿上，手心向内，微闭双目，全身放松，慢慢地深呼吸。一边深呼吸，一边想象在一片大山的深处有一潭平静的湖水，湖面非常平静，没有一丝波纹，湖边长满了花草树木.....（一幅有情景的文章）。结束后，进行自我暗示，比如我发觉我的注意力越来越集中了，我的心情也越来越好了等等。</p>
                            <p>冥想训练强调的是在安静的环境中进行的行为训练，在进行的过程要与自己的呼吸相结合，呼吸要求吸气像品花香一样慢慢地吸气，吐气像蚕吐丝一样微微的吐气不发出任何声音。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="get_pdf">
            <div class="inner">
                <div class="btn_pdf" v-on:click="getPdf(htmlTitle);isDownloading = true;">下载报告</div>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang='less' scoped>
    .evaluation_report {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #E8E8E8;
        * {
            font-size: 16px;
            color: #333;
        }
        .get_pdf {
            height: 0px;
            width: 100%;
            position: fixed;
            top: 30%;
            .inner {
                width: 900px;
                margin: 0 auto;
                position: relative;
                .btn_pdf {
                    position: absolute;
                    padding: 5px 10px;
                    right: -40px;
                    width: 20px;
                    text-align: center;
                    background-color: #2c8ffc;
                    color: #fff;
                    cursor: pointer;
                    border-radius: 5px;
                }
            }
        }
        .pdf {
            width: 900px;
            margin: 0 auto;
            background-color: #fff;
            .page_shadow{
                -webkit-box-shadow: 0px 0px 10px #666;
                -ms-box-shadow: 0px 0px 10px #666;
                -moz-box-shadow: 0px 0px 10px #666;
                height: 1300px;
                width: 900px;
                margin-bottom: 20px;
            }
            .page_cover {
                height: 1230px;
                padding-top: 70px;
                background: url(/imgs/careerManagement/diagnosis/reportCover7.jpg);
                background-size: 900px 1300px;
                .header {
                    padding-top: 320px;
                    margin-bottom: 50px;
                    h3 {
                        line-height: 70px;
                        font-size: 56px;
                        padding-left: 220px;
                        color: #fff;
                        margin-bottom: 30px;
                    }
                    .detail {
                        line-height: 30px;
                        text-align: center;
                        font-size: 24px;
                        color: #fff;
                    }
                }
                .main {
                    height: 246px;
                    width: 440px;
                    margin: 0 auto;
                    p {
                        line-height: 60px;
                        font-size: 20px;
                        font-weight: 600;
                        color: #000;
                        color: #fff;
                    }
                }
                .bottom {
                    padding-top: 50px;
                    color: #fff;
                    p {
                        line-height: 30px;
                        text-align: center;
                        font-size: 16px;
                        color: #fff;
                    }
                }
            }
            .page {
                height: 1180px;
                padding-top: 120px;
                background: url(/imgs/selfAssessment/report_bg.png) no-repeat;
                background-size: 900px 1300px;
                background-color: #fff;
                position: relative;
                // 大标题
                .header {
                    line-height: 50px;
                    color: #4F7CBD;
                    font-size: 30px;
                    text-align: center;
                    span {
                        color: #4F7CBD;
                        font-size: 30px;
                    }
                }
                .header_detail {
                    text-align: center;
                    line-height: 60px;
                }
                .content {
                    padding: 30px 100px;
                    .big_title_box {
                        display: flex;
                        line-height: 50px;
                        .big_title {
                            position: relative;
                            padding-left: 70px;
                            padding-right: 20px;
                            span {
                                height: 50px;
                                font-size: 24px;
                                line-height: 50px;
                                // font-weight: 600;
                                text-align: center;
                                width: 30px;
                                position: absolute;
                                left: 0px;
                                top:  0px;
                                color: #4F7CBD;
                            }
                            font-size: 20px;
                            color: #000;
                        }
                        .line {
                            flex: 1;
                            border-top: 1px dashed #000;
                            margin: auto 0;
                        }
                        .page_number {
                            padding-left: 10px;
                            font-size: 18px;
                        }
                    }
                    .foreword_detail {
                        p {
                            line-height: 24px;
                            text-indent: 2em;
                            font-size: 16px;
                            color: #333;
                            margin-bottom: 10px;
                        }
                    }
                    .foreword_table {
                        padding-top: 20px;
                        margin-bottom: 30px;
                        table {
                            width: 600px;
                            margin: 0 auto;
                            tr {
                                td {
                                    line-height: 50px;
                                    font-size: 18px;
                                    text-align: center;
                                    border: 2px solid #fff;
                                    color: #168275;
                                    background-color: #CCE4E1;
                                }
                            }
                        }
                    }
                    .foreword_footer {
                        .title {
                            font-size: 18px;
                            font-weight: 600;
                            line-height: 40px;
                        }
                        p {
                            line-height: 24px;
                            font-size: 16px;
                            margin-bottom: 5px;
                        }
                    }
                    .warmtips_header {
                        font-size: 16px;
                        line-height: 24px;
                        margin-bottom: 20px;
                    }
                    .tips_box {
                        margin-bottom: 30px;
                        .tips_title {
                            font-size: 18px;
                            color: #4F7CBD;
                            line-height: 30px;
                            margin-bottom: 5px;
                        }
                        p {
                            line-height: 30px;
                            font-size: 16px;
                            color: #333;

                        }
                    }
                    .explanation {
                        margin-bottom: 30px;
                        ul {
                            li {
                                display: flex;
                                margin-bottom: 20px;
                                line-height: 50px;
                                border: 1px solid #eee;
                                .title {
                                    color: #fff;
                                    width: 130px;
                                    padding-left:30px;
                                }
                                .detail {
                                    padding-left:30px;
                                }
                                &:nth-child(1) {
                                    .title {
                                        background-color: #2E75B6;
                                    }
                                }
                                &:nth-child(2) {
                                    .title {
                                        background-color: #4C92C0;
                                    }
                                }
                                &:nth-child(3) {
                                    .title {
                                        background-color: #A3C066;
                                    }
                                }
                                &:nth-child(4) {
                                    .title {
                                        background-color: #F4B183;
                                    }
                                }
                            }
                        }
                    }

                    .resule_header {
                        font-size: 16px;
                        line-height: 44px;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }
                    .resule_table {
                        margin-bottom: 40px;
                        .completion {
                            letter-spacing: 1px;
                            line-height: 30px;
                            font-weight: 600;
                            margin-bottom: 20px;
                            span {
                                color: #4F7CBD;
                            }
                        }
                        ul {
                            li {
                                margin-bottom: 30px;
                                .lis_title {
                                    line-height: 26px;
                                    margin-bottom: 5px;
                                    font-weight: 600;
                                    display: flex;
                                    align-items: center;
                                    .color_box {
                                        display: inline-block;
                                        width: 25px;
                                        height: 16px;
                                        margin-right: 5px;
                                        line-height: 26px;
                                        background-color: #71B15B;
                                    }
                                    .weidu {
                                        margin-right: 30px;
                                    }
                                    .defen {
                                        color: #4F7CBD;

                                    }
                                }
                                .lis_detail {
                                    padding-left: 32px;
                                    margin-bottom: 5px;
                                    font-weight: 600;
                                }
                                .detail {
                                    padding-left: 32px;
                                }
                                &:nth-child(1) {
                                    .color_box {
                                        background-color: #71B15B;
                                    }
                                }
                                &:nth-child(2) {
                                    .color_box {
                                        background-color: #2E75B6;
                                    }
                                }
                                &:nth-child(3) {
                                    .color_box {
                                        background-color: #3E9B7C;
                                    }
                                }
                                &:nth-child(4) {
                                    .color_box {
                                        background-color: #ECAC5C;
                                    }
                                }
                            }
                        }
                        // table {
                        // 	tr {
                        // 		th {
                        // 			line-height: 40px;
                        // 			background-color: #2c8ffc;
                        // 			color: #fff;
                        // 			text-align: center;
                        // 			border: 1px solid #efefef;
                        // 			&:first-child {
                        // 				width: 40%;
                        // 			}
                        // 		}
                        // 		td {
                        // 			padding: 10px;
                        // 			font-size: 16px;
                        // 			line-height: 24px;
                        // 			border: 1px solid #efefef;
                        // 			&:first-child {
                        // 				font-weight: 600;
                        // 				text-align: center;
                        // 			}
                        // 		}
                        // 	}
                        // }
                    }
                    .echarts_box {
                        .title {
                            font-weight: 600;
                        }
                        .fenxi {
                            margin-bottom: 10px;
                            span {
                                color: #4F7CBD;
                                font-weight: 600;
                            }
                        }
                    }
                }
                .big_page_number {
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 100%;
                    line-height: 40px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #666;
                    text-align: center;
                }
            }
        }
    }
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
</style>
<script>
    import DownloadProgress from '../../../../components/DownloadProgress.vue';
    // 引用jquery写的圆环插件
    import circleChart from '../../../../../public/statics/js/circleChart.min.js'
    export default {
        components: { DownloadProgress },
        props: [],
        data() {
            return {
                isDownloading: false, //是否正在下载
                totalPages: 1, //总页数
                currentPage: 0,//当前页
                htmlTitle: '',
                reportData: null,
                // echarts图表
                xAxisData: [],
                seriesData: [],
                score:"",
                content:''
            }
        },
        methods: {
            // 获取测试结果
            getReport() {
                var token = window.sessionStorage.getItem('ymtxToken');
                var _this = this;
                var id = this.$route.query.id;
                this.$ajax.post(this.G_uri + '/assessQuestion/getReport', {
                	id: id,
                    assessType:7
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                    .then(function(res) {
                        _this.reportData = res.data.data;
                        _this.htmlTitle = res.data.data.name + '的注意力测评报告';
                        _this.score=_this.reportData.report.studentData.score;
                        _this.content=_this.reportData.report.studentData.content;
                        _this.setCircle()
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            },
            setCircle() {
                let studentData = this.content;
                let avgScore1 = this.score;
                $("#circle").circleChart({
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
        },
        created() {
            this.getReport();
        },
        mounted() {
        }
    }
</script>
