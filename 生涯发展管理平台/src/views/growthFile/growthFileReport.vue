<template>
	<div class="growthFileReport">
		<DownloadProgress :totalPages="totalPages" :currentPage="currentPage" v-show="isDownloading"></DownloadProgress>
		<div class="pdf" style="background-color:#E8E8E8;">
			<pageCover :name="name" :reportNum="reportNum" :updatedAt="updatedAt"></pageCover>
			<div id="pdfDom">
			</div>
			<pageBgCover></pageBgCover>	
		</div>
		<div class="get_pdf">
			<div class="inner">
				<div class="btn_pdf" v-on:click="isDownloading = true;getPdf(htmlTitle);">下载报告</div>
			</div>
		</div>
		<div class="pdfs" style="background-color:#E8E8E8;" v-show="isShowpdfs">
			<pageList></pageList>
			<pageMessage1 :studentInfo="studentInfo"></pageMessage1>
			<pageMessage2 :score="score"></pageMessage2>
			<pageMessage3 :level="level"></pageMessage3>
			<pageMessage4 :award="award"></pageMessage4>
			<pageGerentezhi :careerId="careerId"   @fatherMethod="fatherMethod" ></pageGerentezhi>
			<pageMyGoal :target="target" @change="isCountPage2 = true" :careerId="careerId"></pageMyGoal>
			<pagePlan :action="action"></pagePlan>
			<pageConsultation :status="status"></pageConsultation>
			<pageZongjie :target="target" :summary="summary"></pageZongjie>
		</div>
		<div class="loading" v-show="isLoading">
			<Loading></Loading>
		</div>
	</div>
</template>
<script>
import DownloadProgress from '../../components/DownloadProgress.vue';
import Loading from '../../components/Loading2.vue';
import pageCover from './components/pageCover.vue';//封面
import pageList from './components/pageList.vue';//目录
import pageMessage1 from './components/pageMessage1.vue';//基本信息/个人信息
import pageMessage2 from './components/pageMessage2.vue';//基本信息/学业信息高一高二高三
import pageMessage3 from './components/pageMessage3.vue';//基本信息/学业水平考试
import pageMessage4 from './components/pageMessage4.vue';//基本信息/获奖信息

import pageGerentezhi from './components/pageGerentezhi.vue';//个人特质

import pageMyGoal from './components/pageMyGoal.vue';//

import pagePlan from './components/pagePlan.vue';//part4行动计划

import pageConsultation from './components/pageConsultation.vue';//part5状态咨询
import pageZongjie from './components/pageZongjie.vue';//part6总结
import pageBgCover from './components/pageBgCover.vue';//尾封面
export default {
	components: { DownloadProgress, pageCover, pageList, pageMessage1, pageMessage2, pageMessage3, pageMessage4, pageGerentezhi, pageMyGoal, pagePlan, pageConsultation, pageZongjie, pageBgCover,Loading },
    props: [],
    data() {
        return {
        	isLoading: true,
    	    isDownloading: false, //是否正在下载
            totalPages: 1, //总页数
            currentPage: 0,//当前页
        	// isDownlondPdf: true
        	htmlTitle: '',
        	reportData: null,
        	name: '',
        	reportNum: '',
        	updatedAt: '',
        	isShowpdfs: true,

        	// isShowBiao: false,
        	careerId: '',
        	scores: [],
        	tagNames: [],



        	// 接口是否已经返回并且页面更新
        	isCountPage1: false,
        	isCountPage2: false,


       		echartsplan1x1: [],
        	echartsplan1x2: [],
       		echartsplan1s2: [],
        	echartsplan1s2: [],

        	echartsplan2: [],
        	echartsplan2x: [],
        	echartsplan2s: [],

        	echartConsultation1: [],
        	echartConsultation1x: [],
        	echartConsultation1s: [],




        	echartZongjie1: [],
        	echartZongjie1x: [],
        	echartZongjie1s: [],
			
			echartZongjie2: [],
        	echartZongjie2x: [],
        	echartZongjie2s: [],


			echartZongjie3: [],
        	echartZongjie3x1: [],
        	echartZongjie3x2: [],
        	echartZongjie3s1: [],
        	echartZongjie3s2: [],

        	echartZongjie4x: [],
        	echartZongjie4s: [],


        	echartZongjie5x: [],
        	echartZongjie5s: [],


        	echartZongjie6x: [],
        	echartZongjie6s: [],


        }
    },
    computed: {
    	studentInfo() {
    		if(this.reportData) {
    			return this.reportData.studentInfo;
    		}
    	},
    	score() {
    		if(this.reportData) {
    			return this.reportData.score;
    		}
    	},
    	level() {
    		if(this.reportData) {
    			return this.reportData.level;
    		}
    	},
    	//基本信息/获奖信息
    	award() {
    		if(this.reportData) {
    			return this.reportData.award;
    		}
    	},

    	//我的目标
    	target() {
    		if(this.reportData) {
    			return this.reportData.target;
    		}
    	},

    	//part4行动计划
    	action() {
    		if(this.reportData) {
    			return this.reportData.action;
    		}
    	},

    	//part5状态咨询
    	status() {
    		if(this.reportData) {
    			return this.reportData.status;
    		}
    	},
    	//part6总结
    	summary() {
    		if(this.reportData) {
    			return this.reportData.summary;
    		}
    	},


    },
    watch: {
    	reportData() {
    		this.careerId = this.reportData.career;
    		this.echartsplan2 = this.reportData.action.weekRank;
    		this.echartConsultation1 = this.reportData.status.studentReviewResult;
    		this.echartZongjie3 =  this.reportData.action.planAndRank;
    		this.echartZongjie2 =  this.reportData.summary;
    		this.echartZongjie1 =  this.reportData.target;


    	},
    	isCountPage1() {
    		console.log(this.isCountPage1)
    		this.isGoCountPage();
    	},
    	isCountPage2() {
    		console.log(this.isCountPage2)
			this.isGoCountPage();
    	},
    	echartsplan2() {
    		let echartsplan2 = this.echartsplan2;
    		let data1=[];
    		let data2=[];
    		for(let key in echartsplan2) {
    			data1.push(key);
    			data2.push(echartsplan2[key].weekRate)
    		}
    		this.echartsplan2x = data1;
    		this.echartsplan2s = data2;
    		this.echartZongjie4x = data1;
    		this.echartZongjie4s = data2;
    	},
       	echartConsultation1() {
    		let echartConsultation1 = this.echartConsultation1;
    		let data1=[];
    		let data2=[];
    		let data3=[];
    		echartConsultation1.forEach((item)=>{
    			data1.push(item.n);
    			data2.push(item.s);
    			data3.push(item.os);
    		})
    		this.echartConsultation1x = data1;
    		this.echartConsultation1s = data2;

    		this.echartZongjie5x = data1;
    		this.echartZongjie5s = data2;
    		this.echartZongjie6x = data1;
    		this.echartZongjie6s = data3;
    	},
    	echartZongjie1() {
    		let echartZongjie1 = this.echartZongjie1;
    		let data2 = [];
    		data2[0] = echartZongjie1.collectOccupation;
    		data2[1] = echartZongjie1.collectUniversity;
			data2[2] = echartZongjie1.collectSubject;
			data2[3] = echartZongjie1.questUniversityCount;
			data2[4] = echartZongjie1.questSubjectCount;
			data2[5] = echartZongjie1.occupationCount;
			data2[6] = echartZongjie1.subjectCount;
			data2[7] = echartZongjie1.universityCount;
    		data2[8] = echartZongjie1.volCount;
    		this.echartZongjie1s = data2;
    	},
    	echartZongjie2() {
    		let echartZongjie2 = this.echartZongjie2;
    		let data1=[];
    		let data2=[];
    		echartZongjie2.forEach((item)=>{
    			data1.push(item.data);
    			data2.push(item.count);
    		})
    		this.echartZongjie2x = data1;
    		this.echartZongjie2s = data2;
    	},
    	echartZongjie3() {
    		let echartZongjie3 = this.echartZongjie3;

    		this.echartZongjie3x1 = echartZongjie3.xAxis[0];
    		this.echartZongjie3x2 = echartZongjie3.xAxis[1];
    		this.echartZongjie3s1 = echartZongjie3.seriesData[0];
    		this.echartZongjie3s2 = echartZongjie3.seriesData[1];

    		this.echartsplan1x1 = echartZongjie3.xAxis[0];
    		this.echartsplan1x2 = echartZongjie3.xAxis[1];
    		this.echartsplan1s1 = echartZongjie3.seriesData[0];
    		this.echartsplan1s2 = echartZongjie3.seriesData[1];
    	}


    },
    created() {
    	this.viewReport();
    	this.stop();
    },
    mounted() {
    },
    methods: {
        scrollToView(id) {
            document.getElementById(id).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            })
        },
        // 查看成长档案
        viewReport() {
            var token = window.sessionStorage.getItem('ymtxToken');
            var _this = this;
            this.$ajax.post(this.G_uri + '/careerGrowthReport/viewReport', {
            	id: this.$route.query.id
                },{
                    headers:{
                        token: token
                    }
                })
                // 监听数据返回
                .then((res)=> {
                	let data = res.data.data;
	                if(res.data.code == 2000) {
	                    this.name = data.name;
	                    this.reportNum = data.num;
	                    this.updatedAt = data.date;
	                    this.reportData = data;
	                    this.htmlTitle = data.name + '的成长档案';
	                    // this.isShowTubiao = true;
	                }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        stop(){//滑动限制
          var mo=function(e){e.preventDefault()};
          document.body.style.overflow='hidden';
          document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        move(){//取消滑动限制
          var mo=function(e){e.preventDefault();};
          document.body.style.overflow='';//出现滚动条
          document.removeEventListener("touchmove",mo,false);
        },
        countPage() {
        	let html1 = '<div class="page_shadow"><div class="page pdf-page">';
        	let html2 = '</div></div>';
        	let allHtml = '<div class="page_shadow"><div class="page pdf-page"><p class="big_page_number">1</p>';
        	// let allHtml = '<div class="page_shadow"><div class="page pdf-page">';
        	let pageNumber = 1;
        	let height = 1200;
        	let page_content_height = 0;
        	$('.page_content').each(function() {
        		// let nowHtml = $(this).outerHTML();
        		let nowHtml = $(this).prop('outerHTML')
        		let nowHeight = $(this).innerHeight();
        		page_content_height += nowHeight;
        		// console.log(nowHeight)
        		if(page_content_height <= height) {
        			allHtml = allHtml + nowHtml;
        		}else {
        			pageNumber ++;
        			let elPageNumber = '<p class="big_page_number">' + pageNumber + '</p>';
        			page_content_height = nowHeight
        			allHtml = allHtml + html2 + html1 +  nowHtml + elPageNumber;
        		}
        	})
        	allHtml  = allHtml + html2;
        	$('#pdfDom').append(allHtml);

        	this.$nextTick(()=>{
        		this.radarChartInit();
        		this.createEcharts1();
        		this.createEcharts2();
        		this.createEcharts3();

        		this.createEchartZongjie1();
        		this.createEchartZongjie2();
        		this.createEchartZongjie3();
        		this.createEchartZongjie4();
        		this.createEchartZongjie5();
        		this.createEchartZongjie6();
        	})
        	this.isShowpdfs = false;
        	this.isLoading = false;
        	this.move();
        	this.countListPage();
        },
        isGoCountPage() {
        	let isCountPage1 = this.isCountPage1;
        	let isCountPage2 = this.isCountPage2;
        	if(isCountPage1&&isCountPage2) {
        		this.countPage();
        	}

        },
        countListPage() {
        	$('.small_title').each(function(idx) {
        		let number = $(this).parent().parent().find('.big_page_number').text();
        		$('.small_title_box').eq(idx).find('.page_number').html(number);
        	})
        },
        fatherMethod(data1,data2) {
        	this.scores = data1;
        	this.tagNames = data2;
        	this.isCountPage1 = true;
        },

        // 个人特质兴趣倾向图表
        radarChartInit() {
        	let scores = this.scores;
        	let tagNames = this.tagNames;
            // 基于准备好的dom，初始化echarts实例
            var lineChart = this.$echarts.init(document.getElementById('radarChart'));
            // 绘制图表
            lineChart.setOption({
                tooltip: {},
                legend: {
                    data: ['兴趣倾向评估']
                },
                toolbox: {
                    feature: {}
                },
                radar: {
                    name: {
                        color: '#fff',
                        fontSize: 14,
                        lineHeight: 22,
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#82BE64',
                            borderRadius: 3,
                            padding: [3, 3]
                        }
                    },
		            splitLine: {
		                lineStyle: {
		                    color: 'rgba(255, 255, 255, 0.6)'
		                }
		            },
                    splitArea: {
		                areaStyle: {
		                    color: ['rgba(130, 190, 100, 0.9)','rgba(130, 190, 100, 0.8)','rgba(130, 190, 100, 0.6)','rgba(130, 190, 100, 0.4)','rgba(130, 190, 100, 0.2)',],
		                    shadowColor: 'rgba(0, 0, 0, 0.3)',
		                    shadowBlur: 10
		                }
		            },
		            axisLine: {
			            lineStyle: {
			                color: '#8FC473'
			            }
			        },
                    indicator: tagNames
                },
                calculable: true,
                series: [{
                    name: '',
                    type: 'radar',
                    data: [{
                        value: scores,
                        name: '兴趣倾向评估结果'
                    },],
                    lineStyle: {
                    	color: '#FBAB5A'
                    }
                }]
            });
            lineChart.resize();      
        },




 		// part4行动计划/排名变化趋势
		createEcharts1() {
        	let xAxisData1 = this.echartsplan1x1;
        	let xAxisData2 = this.echartsplan1x2;
        	let seriesData1 = this.echartsplan1s1;
        	let seriesData2= this.echartsplan1s2;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartsplan1'));
            // 指定图表的配置项和数据
            var option = {
			    color:['#80BF61','#3492f9'],
		        toolbox: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                },
                // tooltip: {
                //     trigger: 'axis',
                   
                //     axisPointer: {
                //         type: 'cross',
                //         crossStyle: {
                //             color: '#999'
                //         }

                //     },
                //     formatter: function(params) {
                //     	console.log(params);
                //         let result = '';
                //         let obj0 = params[0];
                //         let obj1 = params[1];
                //         if(obj1.axisValue) {
                //         	result='排名：' + obj1.axisValue;
                //         }else {
                //         	result='';
                //         }
                //         return result;
                //     }

                // },
		        grid: {
	                left: '5%',
	                right: '8%',
	                bottom: '3%',
	                top: '8%',
	                containLabel: true
	            },
			    legend: {
			        data: ['学业规划', '排名']
			    },
			    xAxis: [

			        
			        {
			            type: 'category',
			            name: '学业规划',
			            axisTick: true,
			            // data: ['第1次学业规划', '', '第2次学业规划', '', '第3次学业规划', '', '第4次学业规划'],
			            data: xAxisData2
			        },
			        {
			            type: 'category',
			            // data: ['','第1名','','第2名','','第4名',''],
			            data: xAxisData1,
			            show:false
			        },
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '排名',
			            nameLocation:'start',
			            inverse:true,
			            min:1,
			            axisLabel: {
			                formatter: '{value}'
			            }
			        },
			        {
			            type: 'value',
			            name: '',
			            show:false,
			            axisLabel: {
			                formatter: '{value} '
			            }
			        }
			    ],
			    series: [
			        {
			            name: '排名',
			            type: 'line',
			            connectNulls:true,
			            xAxisIndex: 1,
			            data: seriesData1

			        },
			        {
			            name: '学业规划',
			            type: 'bar',
			            barWidth: 5,
			            yAxisIndex: 1,
			           	data: seriesData2
			        }
			    ]
			};

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 

        // part4行动计划/周计划完成率
        createEcharts2() {
        	let xAxisData = this.echartsplan2x;
        	let seriesData = this.echartsplan2s;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartsplan2'));
            // 指定图表的配置项和数据
            var option = {
                    color:['#80BF61','#3492f9'],
                    tooltip: {
                        trigger: 'axis',
                       
                        // formatter: "{a} <br/>{b}: {c} ({d}%)",//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#80BF61'
                            }

                        },
                        formatter: function(params) {
                        	// console.log(params);
                            // var result = params[0].name+'<br>';
                            // result += params[0].marker + " " + params[0].seriesName + " : " + params[0].value +"%</br>";
                            // result += params[1].marker + " " + params[1].seriesName + " : " + params[1].value +"%</br>";
                            // result += params[2].marker + " " + params[2].seriesName + " : " + params[2].value +"</br>";
                            // result += params[3].marker + " " + params[3].seriesName + " : " + params[3].value +"</br>";
                            // result += params[4].marker + " " + params[4].seriesName + " : " + params[4].value +"</br>";
                            let result = '第' + params[0].name + '次学业规划</br>';
                            result += params[0].marker + params[0].seriesName + ': ' + params[0].value + '%';
                            return result;
                        }

                    },
                	grid: {
		                left: '3%',
		                right: '8%',
		                bottom: '3%',
		                containLabel: true
		            },

                    toolbox: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    },
                    legend: {
                        data: ['周计划完成率']
                    },
                    xAxis:{
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
				    		interval: 0
				    	},
                        name: '学业规划'
    
                    },
                    yAxis:{
                            type: 'value',
                            name: '周计划完成率',
                            //min: 0,
                            //max: 250,
                            //interval: 50,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                    },
                    series: [
                        {
                            name: '周计划完成率',
                            type: 'line',
                            data: seriesData,
                            itemStyle: {
                            	borderColor: 'green'
                            },
                            lineStyle: {
					            normal: {
					              color: '#80BF61',
					              width: 2
					            }
					        }
                        },
                    ]
                };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 


        // part5状态咨询/复盘结果-学习状态趋势
        createEcharts3() {
        	let xAxisData = this.echartConsultation1x;
        	let seriesData = this.echartConsultation1s;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartConsultation1'));
            // 指定图表的配置项和数据
            var option = {
                    color:['#80BF61','#afd650'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }

                        },
                        formatter: function(params) {          
                            let result = '第' + params[0].name + '次学业规划</br>';
                            result += params[0].marker + params[0].seriesName + ': ' + params[0].value;
                            return result;
                        }

                    },
                	grid: {
		                left: '3%',
		                right: '12%',
		                bottom: '3%',
		                top: '10%',
		                containLabel: true
		            },

                    toolbox: {
                        // dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        // saveAsImage: {show: true}
                    },
                    xAxis:{
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
				    		interval: 0
				    	},
                        name: '学业规划次数'
    
                    },
                    yAxis:{
                            type: 'value',
                            name: '任务完成度',
                            min: 0,
                            max: 10,
                            //interval: 50,
                            // axisLabel: {
                            //     formatter: '{value} %'
                            // }
                    },
                    series: [
                        {
                            name: '任务完成度',
                            type: 'line',
                            data: seriesData,
                        },
                    ]
                };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 




       	// 升学规划展示
		createEchartZongjie1() {
        	let xAxisData = this.echartZongjie1x;
        	let seriesData = this.echartZongjie1s;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartZongjie1'));
            // 指定图表的配置项和数据
            var option = {
            	color:['#80BF61','#3492f9'],
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    // legend: {
			    //     data: ['2011年', '2012年']
			    // },
			    grid: {
			        left: '1%',
			        right: '6%',
			        bottom: '3%',
			        top: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'value',
			        name: '数量',
			        // boundaryGap: [0, 0.01],
			        minInterval: 1,
			        interval: 1
			    },
			    yAxis: {
			        type: 'category',
			        data: ['收藏职业','收藏大学','收藏专业','探索学校','探索专业','职业目标','专业目标','大学目标', '大学+专业']
			    },
			    series: [
			        {
			            name: '数量',
			            type: 'bar',
			            data: seriesData,
			            barWidth : 20
			        }
			    ]
			};
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 



       	// 院校 + 专业目标分析
		createEchartZongjie2() {
        	let xAxisData = this.echartZongjie2x;
        	let seriesData = this.echartZongjie2s;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartZongjie2'));
            // 指定图表的配置项和数据
            var option = {
                    color:['#80BF61','#3492f9'],
                    tooltip: {
                        trigger: 'axis',
                       
                        // formatter: "{a} <br/>{b}: {c} ({d}%)",//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }

                        },
                        // formatter: function(params) {
                        // 	// console.log(params);
                        //     let result = '第' + params[0].name + '次学业规划</br>';
                        //     result += params[0].marker + params[0].seriesName + ': ' + params[0].value + '%';
                        //     return result;
                        // }

                    },
                	grid: {
		                left: '3%',
		                right: '12%',
		                bottom: '3%',
		                top: '15%',
		                containLabel: true
		            },

                    toolbox: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    },
                    // legend: {
                    //     data: ['周计划完成率']
                    // },
                    xAxis:{
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
				    		interval: 0
				    	},
                        name: '日期'
    
                    },
                    yAxis:{
                            type: 'value',
                            name: '目标数量',
                            // min: 10,
                            // max: 500,
                            interval: 1,
                            axisLabel: {
                                formatter: '{value}'
                            }
                    },
                    series: [
                        {
                            name: '目标数量',
                            type: 'line',
                            data: seriesData,
                        },
                    ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 

		// part6总结/复盘结果-学习状态趋势
		// 排名变化趋势
		createEchartZongjie3() {
        	let xAxisData1 = this.echartZongjie3x1;
        	let xAxisData2 = this.echartZongjie3x2;
        	let seriesData1 = this.echartZongjie3s1;
        	let seriesData2= this.echartZongjie3s2;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartZongjie3'));
            // 指定图表的配置项和数据
            var option = {
			    color:['#80BF61','#3492f9'],
		        // toolbox: {
          //           dataView: {show: true, readOnly: false},
          //           magicType: {show: true, type: ['line', 'bar']},
          //           restore: {show: true},
          //           saveAsImage: {show: true}
          //       },
          		grid: {
	                left: '5%',
	                right: '8%',
	                bottom: '3%',
	                top: '8%',
	                containLabel: true
	            },
			    legend: {
			        data: ['学业规划', '排名']
			    },
			    xAxis: [

			        
			        {
			            type: 'category',
			            name: '学业规划',
			            axisTick: true,
			            // data: ['第1次学业规划', '', '第2次学业规划', '', '第3次学业规划', '', '第4次学业规划'],
			            data: xAxisData2
			        },
			        {
			            type: 'category',
			            // data: ['','第1名','','第2名','','第4名',''],
			            data: xAxisData1,
			            show:false
			        },
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '排名',
			            nameLocation:'start',
			            inverse:true,
			            min:1,
			            axisLabel: {
			                formatter: '{value}'
			            }
			        },
			        {
			            type: 'value',
			            name: '',
			            show:false,
			            axisLabel: {
			                formatter: '{value} '
			            }
			        }
			    ],
			    series: [
			        {
			            name: '排名',
			            type: 'line',
			            connectNulls:true,
			            xAxisIndex: 1,
			            data: seriesData1
			        },
			        {
			            name: '学业规划',
			            type: 'bar',
			            barWidth: 5,
			            yAxisIndex: 1,
			           	data: seriesData2
			        }
			    ]
			};

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 
		// 周计划完成率
		createEchartZongjie4() {
        	let xAxisData = this.echartZongjie4x;
        	let seriesData = this.echartZongjie4s;
        	console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartZongjie4'));
            // 指定图表的配置项和数据
            var option = {
                    color:['#80BF61','#3492f9'],
                    tooltip: {
                        trigger: 'axis',
                       
                        // formatter: "{a} <br/>{b}: {c} ({d}%)",//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }

                        },
                        formatter: function(params) {
                        	// console.log(params);
                            let result = '第' + params[0].name + '次学业规划</br>';
                            result += params[0].marker + params[0].seriesName + ': ' + params[0].value + '%';
                            return result;
                        }

                    },
                	grid: {
		                left: '3%',
		                right: '12%',
		                bottom: '3%',
		                top: '15%',
		                containLabel: true
		            },

                    toolbox: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    },
                    // legend: {
                    //     data: ['周计划完成率']
                    // },
                    xAxis:{
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
				    		interval: 0
				    	},
                        name: '学业规划'
    
                    },
                    yAxis:{
                            type: 'value',
                            name: '周计划完成率',
                            //min: 0,
                            //max: 250,
                            //interval: 50,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                    },
                    series: [
                        {
                            name: '周计划完成率',
                            type: 'line',
                            data: seriesData,
                        },
                    ]
                };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 
		// 复盘结果-任务完成满意度
		createEchartZongjie5() {
        	let xAxisData = this.echartZongjie5x;
        	let seriesData = this.echartZongjie5s;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartZongjie5'));
            // 指定图表的配置项和数据
            var option = {
                    color:['#80BF61','#3492f9'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }

                        },
                        formatter: function(params) {          
                            let result = '第' + params[0].name + '次学业规划</br>';
                            result += params[0].marker + params[0].seriesName + ': ' + params[0].value;
                            return result;
                        }

                    },
                	grid: {
		                left: '3%',
		                right: '12%',
		                bottom: '3%',
		                top: '15%',
		                containLabel: true
		            },

                    toolbox: {
                        // dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        // saveAsImage: {show: true}
                    },
                    xAxis:{
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
				    		interval: 0
				    	},
                        name: '学业规划'
    
                    },
                    yAxis:{
                            type: 'value',
                            name: '任务完成满意度',
                            min: 0,
                            max: 10,
                            //interval: 50,
                            // axisLabel: {
                            //     formatter: '{value} %'
                            // }
                    },
                    series: [
                        {
                            name: '任务完成满意度',
                            type: 'line',
                            data: seriesData,
                        },
                    ]
                };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }, 
        // 复盘结果-学习状态指数
		createEchartZongjie6() {
        	let xAxisData = this.echartZongjie6x;
        	let seriesData = this.echartZongjie6s;
        	// console.log(seriesData)
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('echartZongjie6'));
            // 指定图表的配置项和数据
            var option = {
                    color:['#80BF61','#3492f9'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }

                        },
                        formatter: function(params) {          
                            let result = '第' + params[0].name + '次学业规划</br>';
                            result += params[0].marker + params[0].seriesName + ': ' + params[0].value;
                            return result;
                        }

                    },
                	grid: {
		                left: '3%',
		                right: '12%',
		                bottom: '3%',
		                top: '15%',
		                containLabel: true
		            },

                    toolbox: {
                        // dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        // saveAsImage: {show: true}
                    },
                    xAxis:{
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
				    		interval: 0
				    	},
                        name: '学业规划'
    
                    },
                    yAxis:{
                            type: 'value',
                            name: '学习状态指数',
                            min: 0,
                            max: 10,
                            //interval: 50,
                            // axisLabel: {
                            //     formatter: '{value} %'
                            // }
                    },
                    series: [
                        {
                            name: '学习状态指数',
                            type: 'line',
                            data: seriesData,
                        },
                    ]
                };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }


    }
}
</script>
<!-- <style type="text/css" lang='less' scoped>
	@import './components/report.less';
</style> -->
<style type="text/css" lang='less'>
.growthFileReport {
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #E8E8E8;
	color: #333;
	font-size: 16px;
	.loading {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255,255,255,.5);
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
		.page {
			box-sizing: border-box;
			height: 1300px;
			width: 900px;
			padding: 50px;
			background: url(/imgs/growthFile/report_bg.png) no-repeat;
			background-size: 900px 1300px;
			background-color: #fff;
			position: relative;
			.report_header {
				margin-bottom: 20px;
				line-height: 50px;
				color: #2E75B6;
				font-size: 24px;
				padding-left: 100px;
				background: url('/imgs/growthFile/icon_smallbg.png') no-repeat 0px center;
				background-size: 80px 30px;
			}
			.big_page_number {
				position: absolute;
				bottom: 0px;
				left: 0px;
				width: 100%;
				line-height: 40px;
				font-size: 18px;
				color: #666;
				text-align: center;
			}
		}
	}
	.pdfs {
		position: relative;
		// top: -10000000px;
		// right: -10000px;
		.pdf;
	}
}
</style>
