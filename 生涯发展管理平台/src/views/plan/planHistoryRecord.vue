<template>
    <div class="planHistoryRecord">
        <h5>行动计划历史记录</h5>
        <div class="content_box">
            <div class="top_box">
                <div class="title_box">
                    第
                    <el-select v-model="num" placeholder="请选择">
                        <el-option
                          v-for="item in numList"
                          :key="item.num"
                          :label="item.num"
                          :value="item.num">
                        </el-option>
                    </el-select>
                    次学业规划 月计划 <span>日期：{{planData.date}}</span>
                </div>
                <p class="top_detail">
                    <span>目标数量：{{planData.monthTargetNum}}</span>
                    <span>共计：{{planData.weekNum}}周</span>
                    <span>覆盖学业规划：{{planData.weekAcademicPlan}}次</span>
                </p>
                <div class="top_bottom">
                    <p>周计划：共{{planData.weekTargetNum}}个 已完成{{planData.weekTargetDone}}个/剩余{{planData.weekTargetUndone}}个 计划完成率{{planData.weekTargetRate}}</p>
                    <p>日计划：共{{planData.dayTargetNum}}个 已完成{{planData.dayTargetDoneNum}}个/剩余{{planData.dayTargetUndoneNum}}个 平均完成率{{planData.dayTargetRate}}</p>
                </div>
            </div>
            <ul class="weeek_boxs">
                <li v-for="(item, index) in planData.week" :key="index"><span>第{{item.week}}周</span><span>周计划{{item.weekTargetNum}}个</span> <span>重要事项{{item.weekTargetImportNum}}个</span><span>完成{{item.weekTargetDone}}个</span><span>完成率{{item.weekEveryTargetRate}}</span></li>
            </ul>
            <ul class="day_boxs">
                <template  v-for="(item, index) in planData.week">
                     <li v-for="(child,key) in item.weekDayRate"><span>第{{item.week}}周</span><span>星期{{key}}</span><span>完成率{{(Math.round(child*100)/100)}}%</span></li>
                </template>
            </ul>
        </div>
        <div class="echatrs_box">
            <div class="top_title_box">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                月计划统计
            </div>

            <div class="echarts" id="echarts1" v-if="echartsData1.length"></div>
            <div class="tips" v-else>
                暂无内容~~！
            </div>
        </div>
        <div class="echatrs_box">
            <div class="top_title_box">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                周计划统计
            </div>
            <div class="echarts" id="echarts2" v-if="echartsData2.length"></div>
            <div class="tips" v-else>
                暂无内容~~！
            </div>
        </div>
        <div class="echatrs_box">
            <div class="top_title_box">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                日计划统计
            </div>
            <div class="echarts" id="echarts3" v-if="echartsData3.length"></div>
            <div class="tips" v-else>
                暂无内容~~！
            </div>
        </div>
        <div class="echatrs_box">
            <div class="top_title_box">
                <img src="imgs/careerArchives/icon_biaoti.png" alt="">
                自我评估趋势
            </div>
            <div class="echarts" id="echarts4" v-if="echartsData4.length"></div>
            <div class="tips" v-else>
                暂无内容~~！
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "planHistoryRecord",
        data(){
            return {
                num: '',
                numList: [],
                planData: [],
                echartsData1: [],
                echartsData2: [],
                echartsData3: [],
                echartsData4: []
            }
        },
        created(){
            this.getAcademicPlanList();
            // this.actionHistoryRecordChooseAcademic();
            this.actionHistoryRecordAcademicStatics();
            this.actionHistoryRecordWeekStatics();
            this.actionHistoryRecordDayStatics();
            this.actionHistoryRecordAssessment();
        },
        watch: {
            num() {
                this.actionHistoryRecordChooseAcademic();
            },
            echartsData1() {
                let data = this.echartsData1;
                let xAxisData = [];
                let seriesData1 = [];
                let seriesData2 = [];
                let seriesData3 = [];
                let seriesData4 = [];
                let seriesData5 = [];
                let idx = 0;
                data.forEach((item) => {
                    idx ++;
                    xAxisData.push('第' + idx + '月');
                    seriesData1.push(item.weekTargetRate);
                    seriesData2.push(item.dayAverageRate);
                    seriesData3.push(item.monthTargetNum);
                    seriesData4.push(item.week);
                    seriesData5.push(item.academicPlan);
                })
                this.$nextTick(()=> {
                    this.createEcharts1(xAxisData,seriesData1,seriesData2,seriesData3,seriesData4,seriesData5);
                })
            },
            echartsData2() {
                let data = this.echartsData2;
                let xAxisData = [];
                let seriesData1 = [];
                let seriesData2 = [];
                let idx = 0;
                let num1 = ''; 
                data.forEach((item) => {
                    if(item.num != num1) {
                        idx ++;
                        num1 = item.num;
                    }
                    xAxisData.push('第' + idx + '月,第' + item.week + '周');
                    seriesData1.push(item.weekTargetRate);
                    seriesData2.push(item.targetNum);
                })
                this.$nextTick(()=> {
                    this.createEcharts2(xAxisData,seriesData1,seriesData2);

                })
            },
            echartsData3() {
                let data = this.echartsData3;
                let xAxisData = [];
                let seriesData1 = [];
                let seriesData2 = [];
                let idx = 0;
                let num1 = '';
                data.forEach((item) => {
                    if(item.num != num1) {
                        idx ++;
                        num1 = item.num;
                    }
                    // xAxisData.push('第' + item.num + '次学业规划\n'+ '第' + item.week + '周');
                     xAxisData.push('第' + idx + '月\n第' + item.week + '周');
                    seriesData1.push(item.dayAverageRate);
                    seriesData2.push(item.dayAveragePlan);
                })
                this.$nextTick(()=> {
                    this.createEcharts3(xAxisData,seriesData1,seriesData2);
                })
            },
            echartsData4() {
                let data = this.echartsData4;
                let xAxisData = [];
                let seriesData1 = [];
                let seriesData2 = [];
                data.forEach((item) => {
                    xAxisData.push('第' + item.num + '次');
                    seriesData1.push(item.taskCompleteScore);
                    seriesData2.push(item.ownStateScore);
                })
                this.$nextTick(()=> {
                    this.createEcharts4(xAxisData,seriesData1,seriesData2);
                })
            },
        },
        methods:{

            createEcharts1(xAxisData, seriesData1, seriesData2,seriesData3,seriesData4,seriesData5) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('echarts1'));
                // 指定图表的配置项和数据
                var option = {
                        color:['#2d85ff','#32c5e9','#9fe6b8','#ff9f80','#ff6085'],
                        grid: {
                            left: '3%',
                            right: '5%',
                            bottom: '10%',
                            containLabel: true
                        },
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
                                 var result = params[0].name+'<br>';
                                 result += params[0].marker + " " + params[0].seriesName + " : " + params[0].value +"%</br>";
                                 result += params[1].marker + " " + params[1].seriesName + " : " + params[1].value +"%</br>";
                                 result += params[2].marker + " " + params[2].seriesName + " : " + params[2].value +"</br>";
                                 result += params[3].marker + " " + params[3].seriesName + " : " + params[3].value +"</br>";
                                 result += params[4].marker + " " + params[4].seriesName + " : " + params[4].value +"</br>";
                                 return result;
                            }
                        },

                        toolbox: {
                            feature: {
                                // dataView: {show: true, readOnly: false},
                                magicType: {show: false, type: ['line', 'bar']},
                                // restore: {show: true},
                                // saveAsImage: {show: true}
                            }
                        },
                        legend: {
                            data: ['目标数量', '涵盖周数','涵盖学业规划次数', '周计划完成率', '日计划平均完成率']
                        },
                        xAxis: [
                            {
                                type: 'category',
                                name: '月计划',
                                offset: 10,
                                nameTextStyle: {
                                    padding: [30,0,0,0],
                                    verticalAlign:'top'
                                },
                                // data: ['第1次', '第2次', '第3次', '第4次', '第5次', '第6次', '第7次', '第8次', '第9次', '第10次', '第11次', '第12次'],
                                data: xAxisData,
                                axisPointer: {
                                    type: 'shadow'
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '完成率',
                                //min: 0,
                                //max: 250,
                                //interval: 50,
                                axisLabel: {
                                    formatter: '{value} %'
                                }
                            },
                            {
                                type: 'value',
                                name: '数量',
                                //min: 0,
                                //max: 25,
                                //interval: 5,
                                axisLabel: {
                                    formatter: '{value} '
                                }
                            }
                        ],
                        dataZoom: [
                            {
                                show: true,
                                startValue: 0,
                                endValue: 4
                            }
                        ],
                        series: [
                            {
                                name: '周计划完成率',
                                type: 'line',
                                data: seriesData1,
                            },{
                                name: '日计划平均完成率',
                                type: 'line',
                                data: seriesData2
                            },
                            {
                                name: '目标数量',
                                type: 'bar',
                                //barWidth: 5,
                                yAxisIndex: 1,
                                 data: seriesData3
                            },
                            {
                                name: '涵盖周数',
                                type: 'bar',
                                //barWidth: 5,
                                yAxisIndex: 1,
                                 data: seriesData4
                            },
                            {
                                name: '涵盖学业规划次数',
                                type: 'bar',
                                //barWidth: 5,
                                yAxisIndex: 1,
                                data: seriesData5
                            }
                        ]
                    };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            createEcharts2(xAxisData, seriesData1, seriesData2) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('echarts2'));
                // 指定图表的配置项和数据
                var option = {
                    color:['#2d85ff','#ff6085'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        formatter: function(params) {
                             var result = params[0].name+'<br>';
                             result += params[0].marker + " " + params[0].seriesName + " : " + params[0].value +"%</br>";
                             result += params[1].marker + " " + params[1].seriesName + " : " + params[1].value +"</br>";
                             return result;
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data: ['周计划数量', '完成率']
                    },
                    grid:{
                        bottom:100
                    },
                    dataZoom: [
                        {
                            show: true,
                            startValue: 0,
                            endValue: 4,
                            bottom:0
                        }
                    ],
                    xAxis: [
                        {
                            type: 'category',
                            // data: ['第1次', '第2次', '第3次', '第4次', '第5次', '第6次', '第7次', '第8次', '第9次', '第10次', '第11次', '第12次'],
                            name: '周计划',
                            offset: 10,
                            nameTextStyle: {
                                padding: [30,0,0,0],
                                verticalAlign:'bottom'
                            },
                            data: xAxisData,
                            axisPointer: {
                                type: 'shadow'
                            },

                            axisLabel: {
                                lineHeight: 16, 

                                formatter:function(params) {
                                    // var newParamsName = "";
                                    // var paramsNameNumber = params.length;
                                    // var provideNumber = 2;  //一行显示几个字
                                    // var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                    // if (paramsNameNumber > provideNumber) {
                                    //     for (var p = 0; p < rowNumber; p++) {
                                    //         var tempStr = "";
                                    //         var start = p * provideNumber;
                                    //         var end = start + provideNumber;
                                    //         if (p == rowNumber - 1) {
                                    //             tempStr = params.substring(start, paramsNameNumber);
                                    //         } else {
                                    //             tempStr = params.substring(start, end) + "\n";
                                    //         }
                                    //         newParamsName += tempStr;
                                    //     }

                                    // } else {
                                    //     newParamsName = params;
                                    // }
                                    let newParamsName = params.replace(/,/g,'\n')
                                    return newParamsName
                                }
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '完成率',
                            //min: 0,
                            //max: 250,
                            //interval: 50,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        },
                        {
                            type: 'value',
                            name: '数量',
                            //min: 0,
                            //max: 25,
                            //interval: 5,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    dataZoom: [
                        {
                            show: true,
                            startValue: 0,
                            endValue: 4
                        }
                    ],
                    series: [
                        {
                            name: '完成率',
                            type: 'line',
                            // data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                            data: seriesData1,
                        },
                        {
                            name: '周计划数量',
                            type: 'bar',
                            yAxisIndex: 1,
                            // data: [ 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,2.6]
                            data: seriesData2
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            createEcharts3(xAxisData, seriesData1, seriesData2) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('echarts3'));
                // 指定图表的配置项和数据
                var option = {
                    color:['#2d85ff','#ff6085'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        formatter: function(params) {
                             var result = params[0].name+'<br>';
                             result += params[0].marker + " " + params[0].seriesName + " : " + params[0].value +"%</br>";
                             result += params[1].marker + " " + params[1].seriesName + " : " + params[1].value +"</br>";
                             return result;
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data: ['平均每天计划', '平均完成率']
                    },
                    grid:{
                        bottom:80
                    },
                    xAxis: [
                        {
                            type: 'category',
                            name: '日计划',
                            nameTextStyle: {
                                padding: [30,0,0,0],
                                verticalAlign:'bottom'
                            },
                            // data: ['第1次', '第2次', '第3次', '第4次', '第5次', '第6次', '第7次', '第8次', '第9次', '第10次', '第11次', '第12次'],
                            data: xAxisData,
                            lineHeight: 16, 
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '完成率',
                            //min: 0,
                            //max: 250,
                            //interval: 50,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        },
                        {
                            type: 'value',
                            name: '数量',
                            //min: 0,
                            //max: 25,
                            //interval: 5,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    dataZoom: [
                        {
                            show: true,
                            startValue: 0,
                            endValue: 4
                        }
                    ],
                    series: [
                        {
                            name: '平均完成率',
                            type: 'line',
                            // data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                            data: seriesData1
                        },
                        {
                            name: '平均每天计划',
                            type: 'bar',
                            yAxisIndex: 1,
                            data: seriesData2
                            // data: [ 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,2.6]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            createEcharts4(xAxisData, seriesData1, seriesData2) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('echarts4'));
                // 指定图表的配置项和数据
                var  option = {
                    color:['#2d85ff','#ff6085'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '15%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: false},
                            saveAsImage: {show: false}
                        }
                    },
                    legend: {
                        data: ['任务完成程度', '学习状态']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            name: '咨询时间(学业规划)',
                            data: xAxisData,
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '打分',
                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    dataZoom: [
                        {
                            show: true,
                            startValue: 0,
                            endValue: 4
                        }
                    ],
                    series: [
                        {
                            name: '任务完成程度',
                            type: 'line',
                            // data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                            data: seriesData1
                        },
                        {
                            name: '学习状态',
                            type: 'line',
                            // data: [4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,2.0]
                            data: seriesData2
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            // 行动计划 - 历史记录 - 第一个图标 选择第几次学业规划 查看
            getAcademicPlanList(){
                this.$ajax.post(this.G_uri+"/academicPlanCategory/getHaveMonthActionPlan",{
                    
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        let data = res.data.data;
                        this.numList = data;
                        if(data.constructor == Array && data.length) {
                            this.num = data[0].num;
                        }
                    }
                })
            },
            // 行动计划 - 历史记录 - 第一个图标 选择第几次学业规划 查看
            actionHistoryRecordChooseAcademic(){
                let num = this.num;
                this.$ajax.post(this.G_uri+"/actionPlan/actionHistoryRecordChooseAcademic",{
                    num: num
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                       this.planData = res.data.data;
                    }
                })
            },
            //行动计划 - 历史记录 - 可视化图表 - 学业规划统计
            actionHistoryRecordAcademicStatics(){
                this.$ajax.post(this.G_uri+"/actionPlan/actionHistoryRecordAcademicStatics",{
                    pageSize: 9999
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                       this.echartsData1=res.data.data.list;
                    }
                })
            },
            //行动计划 - 历史记录 - 可视化图表 - 周计划统计
            actionHistoryRecordWeekStatics(){
                this.$ajax.post(this.G_uri+"/actionPlan/actionHistoryRecordWeekStatics",{
                    pageSize: 9999
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        this.echartsData2=res.data.data.list;
                    }
                })
            },
            //行动计划 - 历史记录 - 可视化图表 - 日计划统计
            actionHistoryRecordDayStatics(){
                this.$ajax.post(this.G_uri+"/actionPlan/actionHistoryRecordDayStatics",{
                    pageSize: 9999
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                        this.echartsData3=res.data.data.list;
                    }
                })
            },
            // 行动计划 - 历史记录 - 可视化图表 - 自我评估趋势
            actionHistoryRecordAssessment(){
                this.$ajax.post(this.G_uri+"/actionPlan/actionHistoryRecordAssessment",{
                    pageSize: 9999
                },{
                    headers:{
                        token: window.sessionStorage.getItem('ymtxToken')
                    }
                }).then((res)=>{
                    if(res.data.code==2000){
                       this.echartsData4=res.data.data.list;
                    }
                })
            },

        }

    }
</script>

<style scoped lang="less">
    .planHistoryRecord {
        margin-left: 20px;
        background-color: #fff;
        h5 {
            line-height: 70px;
            font-size: 26px;
            text-align: center;
            color: #3492f9;
        }
        .top_title_box {
            img {
                margin-right: 10px;
            }
            font-size: 17px;
            color: #348DF1;
            font-weight: bolder;
            padding-top: 24px;
            letter-spacing: 2px;         
        }
        .content_box {
            padding:20px;
            width: 890px;
            margin: 0 auto;
            border: 1px solid #dedede;
            .top_box {
                padding: 20px; 
                background-color: #F3F4F8;
                .title_box {
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    margin-bottom: 15px;
                    span {
                        font-size: 14px;
                        margin-left: 5px;
                    }
                }
                .top_detail {
                    padding-left: 40px;
                    margin-bottom: 15px;
                    span {
                        margin-right: 40px;

                    }
                }
                .top_bottom {
                    display: flex;
                    justify-content: space-between;
                    p {
                        padding: 0px 20px;
                        line-height: 40px;
                        background-color: #dedede;

                    }
                }
            }
            .weeek_boxs {
                padding: 20px 20px 0 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
                    padding: 0 10px;
                    line-height: 40px;
                    font-size: 14px;
                    width: 380px;
                    border: 1px solid #dfdfdf;
                    border-radius: 2px;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                }
            }
            .day_boxs {
                display: flex;
                flex-wrap: wrap;
                li {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 10px;
                    line-height: 40px;
                    width: 20%;
                    background-color: #F3F4F8;
                    &:nth-child(even) {
                        background-color: #DEDEDE;
                    }
                }
            }

        }
        .echatrs_box {
            padding: 20px;
            .echarts {
                width: 930px;
                height: 500px;
                padding: 20px 0px;
            }
        }
        .tips {
            height: 300px;
            line-height: 300px;
            text-align: center;
            font-size: 26px;
        }

    }
</style>
<style lang="less">
.planHistoryRecord {
    .el-input__inner  {
        width: 70px;
        border: 1px solid #DCDFE6 !important;
        border-radius: 4px;
        height: 30px;
    }
    .el-input__icon {
        line-height: 30px;
    }
}
</style>
