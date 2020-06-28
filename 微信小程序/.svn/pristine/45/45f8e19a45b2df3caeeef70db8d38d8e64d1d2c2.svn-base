// pages/learningAssessment/testReport/testReport4.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_REPORT } from '../../../utils/configAPI.js'
Page({
  data: {
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
    console.log(this)
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
        this.changeCircle();
      })
  },
  changeCircle() {
    let value1 = this.data.reportData.report.studentData['课前准备'].avgScore;
    let value2 = this.data.reportData.report.studentData['课上听课'].avgScore;
    let value3 = this.data.reportData.report.studentData['课后学习'].avgScore;
    var systemInfo = wx.getSystemInfoSync();
    var width = systemInfo.windowWidth / 3;
    this.createCanvas('yuan1', width / 2, '#1A8779', '课前准备', value1, 5)
    this.createCanvas('yuan2', width / 2, '#F19149', '课上听课', value2, 5)
    this.createCanvas('yuan3', width / 2, '#056C9E', '课后学习', value3, 5)
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