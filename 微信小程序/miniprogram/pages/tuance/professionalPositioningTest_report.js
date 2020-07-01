// miniprogram/pages/professionalPositioningTest/professionalPositioningTest_report.js
import HTTP from '../../utils/httpRequest.js'
import { GET_APPLET_ARTICLE_LIST, Home_GET_LIST, GET_USER_INFO } from '../../utils/configAPI.js'
import * as echarts from '../../ec-canvas/echarts';
function setOption(chart, scores, subjectCount) {
  const option = {
    tooltip: {
      formatter:function(params){
        var s = '';
        s += params.name + '\n';
        var values = params.value.toString().split(",");
        s += 'S:社会:' + values[0] + '\n';
        s += 'E:企业' + values[1] + '\n';
        s += 'C:常规' + values[2] + '\n';
        s += 'R:实际' + values[3] + '\n';
        s += 'I:调研' + values[4] + '\n';
        s += 'A:艺术' + values[4] ;
        //系列名称:seriesName: string  数据名，类目名 : name: string   传入的数据值:value: number|Array
        return s;
      }
    },
    legend: {
      data: ['兴趣倾向评估']
    },
    toolbox: {
      feature: {}
    },
    radar: {
      name: {
        color: '#000',
        fontSize: 12,
        textStyle: {
          color: '#000',
          borderRadius: 3
        },
        
      },
      indicator: [{
        name: 'S社会',
        max: 100
      }, {
        name: 'E企业',
        max: 100
      }, {
        name: 'C常规',
        max: 100
      }, {
        name: 'R实际',
        max: 100
      }, {
        name: 'I调研',
        max: 100
      }, {
        name: 'A艺术',
        max: 100
      }]
    },
    calculable: true,
    series: [{
      name: '',
      type: 'radar',
      data: [{
        value: scores,
        name: '兴趣倾向评估结果'
      }]
    }]
  };
  chart.setOption(option);
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    reportId:'',
    personData:{},
    time:'',
    reportNumber:'',
    pianhao:[
      { a: '外向 (E)', b: '(I) 内向', c: false, d: false, f: 0, g: 0 },
      { a: '实感 (S)', b: '(N) 直觉', c: false, d: false, f: 0, g: 0 },
      { a: '思考 (T)', b: '(F) 情感', c: false, d: false, f: 0, g: 0 },
      { a: '判断 (J)', b: '(P) 知觉', c: false, d: false, f: 0, g: 0 }
    ],
    panhaoarr:[],
    xgtxData:{},
    xgtxDesc:'',
    xqqxData:{},
    xqqxArr:[
      { name: 'changgui', a: '', b: '' ,left:''},
      { name: 'shiji', a: '', b: '' ,left: ''},
      { name: 'diaoyan', a: '', b: '', left: '' },
      { name: 'yishu', a: '', b: '', left: ''},
      { name: 'shehui', a: '', b: '', left: ''},
      { name: 'qiye', a: '', b: '', left: ''},
    ],
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    scores:[],
    mathingData:{},
    zhiyeData:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getReportId();
  },
  //获取个人信息专业定位测评ID
  getReportId(){
    let _this=this
    wx.request({
      url: wx.getStorageSync('config').login.getuserInfo,
      method: 'post',
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        console.log(data)
        if (data.data.code == '2000') {
          _this.setData({
            reportId: data.data.data.serial_report_id
          })
          _this.detail(data.data.data.serial_report_id);
          _this.detail2(data.data.data.serial_report_id);
          _this.detail3(data.data.data.serial_report_id);
          _this.detail4(data.data.data.serial_report_id);
          _this.detail5(data.data.data.serial_report_id);
        } else {
         
        }
      }
    })
  },
  //报告接口1
  detail(id){
      let _this=this;
      wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.cepingList1,
      method: 'post',
      data:{
        report_id:id
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == '0') { 
          _this.setData({
            personData:data.data.result
          })
          _this.setData({
            time: getApp().formatTime(data.data.result.created_at, 'yyyy-MM-dd HH:mm')
          })
        } else {
          
        }
      }
    })
  },
  //报告接口2
  detail2(id) {
    let _this = this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.cepingList2,
      method: 'post',
      data: {
        reportId: id,
        type:9
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == '0') {
          _this.setData({
            reportNumber: data.data.data.reportNo
          })
        } else {

        }
      }
    })
  },
  //报告接口3
  detail3(id) {
    let _this = this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.cepingList3,
      method: 'post',
      data: {
        report_id:id,
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == '0') {
          let xgtxData=data.data.result;
          let xgtxDesc = data.data.result.personality.desc.replace(/.*(（.*）)/, "$1");
          let arr = xgtxDesc.match(/[\u4e00-\u9fa5]+/g);
          let pianhao=_this.data.pianhao;
          let score=xgtxData.personality.data;
          pianhao.forEach(item=>{
            if (item.a =='外向 (E)'){
              item.f=Math.floor(Math.abs(score.waixiang-score.neixiang) / 70*160)+"rpx"
            }
            if (item.a == '实感 (S)') {
              item.f = Math.floor(Math.abs(score.shigan - score.zhijue) / 70 * 160)  +'rpx'
            }
            if (item.a == '思考 (T)') {
              item.f = Math.floor(Math.abs(score.sikao - score.qinggan) / 70 * 160) + 'rpx'
            }
            if (item.a == '判断 (J)') {
              item.f = Math.floor(Math.abs(score.panduan - score.zhijueb) / 70 * 160)  +'rpx'
            }
            arr.forEach(it=>{
              if(item.a.indexOf(it)>=0){
                item.c=true
              }
              if (item.b.indexOf(it) >= 0) {
                item.d = true
              }
            })
          })
          _this.setData({
            xgtxData: xgtxData,
            xgtxDesc: xgtxDesc,
            pianhao:pianhao
          })
        } else {

        }
      }
    })
  },
  //报告接口4
  detail4(id) {
    let _this = this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.cepingList4,
      method: 'post',
      data: {
        report_id: id,
        team_type: 1
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == '0') {
          let xqqxData=data.data.result;
          let xqqxArr=_this.data.xqqxArr;
          let scores=_this.data.scores;
          for (var key in  xqqxData.data){
              xqqxArr.forEach(it=>{
                if(key==it.name){
                  it.a = Math.floor(xqqxData.data[key]/100*454)+'rpx'
                }
            })
          }
          for (var key in xqqxData.norm) {
            xqqxArr.forEach(it => {
              if (key == it.name) {
                it.left = Math.floor(xqqxData.norm[key].lnorm / 100 * 454) + 'rpx';
                it.b = Math.floor((xqqxData.norm[key].rnorm - xqqxData.norm[key].lnorm )/ 100 * 454) + 'rpx'
              }
            })
          }
          scores.push(xqqxData.data.shehui)
          scores.push(xqqxData.data.qiye)
          scores.push(xqqxData.data.changgui)
          scores.push(xqqxData.data.shiji)
          scores.push(xqqxData.data.diaoyan)
          scores.push(xqqxData.data.yishu)
          _this.setData({
            xqqxData: xqqxData,
            xqqxArr: xqqxArr,
            scores:scores
          })
          wx.nextTick(() => {
            _this.init();
          })
        } else {

        }
      }
    })
  },
  //测评接口5
  detail5(id) {
    let _this = this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.cepingList5,
      method: 'post',
      data: {
        report_id: id,
        team_type: 1
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == '0') {
          let mathingData=data.data.result;
          let zhiyeData=_this.data.result;
          zhiyeData=mathingData.scores;
          _this.setData({
            zhiyeData: zhiyeData,
            mathingData: mathingData
          })
        } else {

        }
      }
    })
  },
  // 点击按钮后初始化图表
  init: function () {
    let scores = this.data.scores;
    let subjectCount = this.data.subjectCount;
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      setOption(chart, scores, subjectCount);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    console.log(this.ecComponent);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})