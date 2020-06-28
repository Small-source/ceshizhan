// pages/learningAssessment/testReport/testReport.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_REPORT } from '../../../utils/configAPI.js'
import * as echarts from '../../../ec-canvas/echarts.js';
function setOption(chart, xAxisData, seriesData) {
  const option = {
    color: ['#71B15B', '#2E75B6', '#3E9B7C', '#ECAC5C'],
    legend: {
      data: []
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          var valueDetal = value.split("—").join("\n");
          return valueDetal;
        }
      }
    },
    yAxis: {
      max: 5,
      splitNumber: 5,
      Interval: 1,
      type: 'value',

    },
    series: [{
      name: '维度分析',
      type: 'bar',
      data: seriesData,
      itemStyle: {
        normal: {
          //这里是重点
          color: function (params) {
            //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
            var colorList = ['#71B15B', '#2E75B6', '#3E9B7C', '#ECAC5C'];
            return colorList[params.dataIndex]
          }
        }
      },
      label: {
        show: true,
        color: '#fff',
      }
    }],
    barCategoryGap: '60%',
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
    seriesData: []
  },
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
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
    let seriesData = [];
    for (var key in reportScoreData) {
      let obj = {};
      obj.value = key;
      xAxisData.push(obj);
      seriesData.push(reportScoreData[key].average);
    }
    this.setData({
      xAxisData: xAxisData,
      seriesData: seriesData
    })
    wx.nextTick(() => {
      console.log(this)
      this.init();
    })
  },
  // 点击按钮后初始化图表
  init() {
    let xAxisData = this.data.xAxisData;
    let seriesData = this.data.seriesData;
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      setOption(chart, xAxisData, seriesData);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  }
})