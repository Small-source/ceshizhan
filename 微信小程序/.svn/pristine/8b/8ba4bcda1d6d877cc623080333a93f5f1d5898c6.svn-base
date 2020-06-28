// pages/learningAssessment/testReport/testReport6.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_REPORT } from '../../../utils/configAPI.js'
import * as echarts from '../../../ec-canvas/echarts.js';
function setOption(chart, xAxisData, seriesData1, seriesData2) {
  const option = {
    color: ['#5B9BD5', '#ED7D31'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['成功归因', '失败归因']
    },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    yAxis: {
      // max: 5,
      splitNumber: 5,
      Interval: 1,
      type: 'value',

    },
    series: [
      {
        name: '成功归因',
        type: 'bar',
        data: seriesData1,
        label: {
          show: true,
          color: '#fff',
        }
      },
      {
        name: '失败归因',
        type: 'bar',
        data: seriesData2,
        label: {
          show: true,
          color: '#fff',
        }
      }
    ],
    barCategoryGap: '40%',
  };
  chart.setOption(option);
}
Page({
  data: {
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    reportData: null,
    xAxisData: [],
    seriesData1: [],
    seriesData2: []
  },
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-dom-bar1');
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    console.log(options)
    let assessType = options.assessType;
    let id = options.id;
    this.getReport(assessType, id);
  },
  getReport(assessType, id) {
    HTTP.post(GET_REPORT, { 'assessType': assessType, 'id': id })
      .then((res) => {
        let data = res.data;
        this.setData({
          reportData: data
        })
        this.goInit();
      })
  },
  goInit() {
    let reportScoreData = this.data.reportData.report.reportScoreData;
    let xAxisData = [];
    let seriesData1 = [];
    let seriesData2 = [];
    for (var key in reportScoreData) {
      let obj = {};
      xAxisData.push(key);
      seriesData1.push(reportScoreData[key]['list']['成功归因']['score']);
      seriesData2.push(reportScoreData[key]['list']['失败归因']['score']);
    }
    this.setData({
      xAxisData: xAxisData,
      seriesData1: seriesData1,
      seriesData2: seriesData2
    })
    wx.nextTick(() => {
      this.init();
    })
  },
  // 点击按钮后初始化图表
  init() {
    let xAxisData = this.data.xAxisData;
    let seriesData1 = this.data.seriesData1;
    let seriesData2 = this.data.seriesData2;
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      setOption(chart, xAxisData, seriesData1, seriesData2);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  }
})