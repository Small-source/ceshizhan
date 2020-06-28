// pages/learningAssessment/testReport/testReport2.js
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
    assessType: '',
    id: ''
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    let assessType = options.assessType;
    let id = options.id;
    this.setData({
      assessType: assessType,
      id: id
    })
  },
  onReady: function () {
    this.getReport();
    // 获取组件
    this.ecComponent1 = this.selectComponent('#mychart-dom-bar1');
    this.ecComponent2 = this.selectComponent('#mychart-dom-bar2');
    this.ecComponent3 = this.selectComponent('#mychart-dom-bar3');
  },
  getReport() {
    let assessType = this.data.assessType;
    let id = this.data.id;
    HTTP.post(GET_REPORT, { 'assessType': assessType, 'id': id })
      .then((res) => {
        let data = res.data;
        this.setData({
          reportData: data
        })
        this.goInit();
        this.changeCircle();
      })
  },
  changeCircle() {
    let value1 = this.data.reportData.report.studentData.list['时间价值感'].avgScore;
    let value2 = this.data.reportData.report.studentData.list['时间监控观'].avgScore;
    let value3 = this.data.reportData.report.studentData.list['时间效能感'].avgScore;
    var systemInfo = wx.getSystemInfoSync();
    var width = systemInfo.windowWidth / 3;
    this.createCanvas('yuan1', width / 2, '#1A8779', '时间价值感', value1, 5)
    this.createCanvas('yuan2', width / 2, '#F19149', '时间监控观', value2, 5)
    this.createCanvas('yuan3', width / 2, '#056C9E', '时间效能感', value3, 5)
  },
  goInit() {
    let reportScoreData = this.data.reportData.report.studentData.list;
    let xAxisData = [];
    let seriesData = [];
    let idx = 0;
    for (var key in reportScoreData) {
      idx++;
      let xAxisData = [];
      let seriesData = [];
      for (var item in reportScoreData[key].list) {
        xAxisData.push(item);
        seriesData.push(reportScoreData[key].list[item].avgScore);
      }
      this.init(idx, xAxisData, seriesData);
    }
  },
  // 点击按钮后初始化图表
  init(idx, xAxisData, seriesData) {
    var xAxisData = xAxisData;
    var seriesData = seriesData;
    var ecComponent = 'ecComponent' + idx;
    this[ecComponent].init((canvas, width, height, dpr) => {
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
  },

  createCanvas: function (id, xy, color, txt, val, total) {
    var ctx = wx.createCanvasContext(id);
    ctx.setLineWidth(8);
    ctx.setStrokeStyle('#dedede');
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(xy, xy, 0.75 * xy, 0, 2 * Math.PI, false);
    ctx.stroke();

    ctx.setLineWidth(8);
    ctx.setStrokeStyle(color);
    ctx.setLineCap('round');
    var p = val / total;

    ctx.beginPath(xy);
    ctx.arc(xy, xy, 0.75 * xy, -90 * Math.PI / 180, (p * 360 - 90) * Math.PI / 180, false);
    ctx.textAlign = "center";
    ctx.font = '12px Arial';
    ctx.fillText(txt, xy, 1.2 * xy, xy);
    ctx.font = '16px Arial';
    ctx.fillStyle = color;
    ctx.fillText(val, xy, 0.9 * xy, xy);
    ctx.stroke();//对当前路径进行描边
    ctx.draw();
  }
})