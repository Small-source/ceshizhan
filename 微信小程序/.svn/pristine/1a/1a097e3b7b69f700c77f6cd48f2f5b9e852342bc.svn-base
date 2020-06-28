// pages/selectTargetMajor/selectSubjectReport.js
import HTTP from '../../../utils/httpRequest.js'
import { GET_CHOOSE_SUBJECT_REPORT_DETAIL } from '../../../utils/configAPI.js'
import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
function setOption(chart, echartsData1, subjectCount) {
  console.log(subjectCount)
  const option = {
    title: {
      // 可选专业总数
      text: "可选专业:" + subjectCount,
      top: '38%',
      left: '36%',
      textStyle: {
        color: '#2c8ffc',
        fontSize: '14'
      }
    },
    color: ['#7eb6ea','#93e982','#93eBe0','#f2505f','#32908f','#e4d25f','#f05eB1','#8188e7','#f6a262','#3276b4','#444348','#eB3d3d','#90abda','#1aae54'],
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {}
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'horizontal',
      bottom: 20,
      itemGap: 20,
      data: ['哲学', '经济学', '法学', '教育学', '文学', '历史学', '理学', '工学', '农学', '医学', '管理学', '艺术学', '军事学']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 20,
      containLabel: true
    },
    series: [
      {
        name: '学科门类',
        type: 'pie',
        radius: ['35%', '50%'],
        center: ['50%', '40%'],
        silent: false,
        label: {
          normal: {
            formatter: '{b|{b}:}{c}',
            textStyle: {
              fontSize: '10',
              fontWeight: 'bold',
              // color:'#2c8ffc'
            },
            rich: {
              a: {
                color: '#999',
                lineHeight: 22,
                align: 'center',
              },
              hr: {
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              b: {
                fontSize: 10,
                lineHeight: 24
              },
              per: {
                color: '#eee',
                backgroundColor: '#2c8ffc',
                padding: [2, 2],
                borderRadius: 2
              }
            }
          }
        },
        data: echartsData1
      }
    ]
  };
  chart.setOption(option);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    isLoaded: false,
    isDisposed: false,
    select:'',
    target: {},
    subjectCount: '',
    subjectCategoryData: [],
    echartsData1: [
      { value: 0, name: '哲学' },
      { value: 0, name: '经济学' },
      { value: 0, name: '法学' },
      { value: 0, name: '教育学' },
      { value: 0, name: '文学' },
      { value: 0, name: '历史学' },
      { value: 0, name: '理学' },
      { value: 0, name: '工学' },
      { value: 0, name: '农学' },
      { value: 0, name: '医学' },
      { value: 0, name: '管理学' },
      { value: 0, name: '艺术学' },
      { value: 0, name: '军事学' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let batch = options.batch;
    this.getChooseSubjectReportDetail(batch);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
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
  // 获取
  getChooseSubjectReportDetail(batch) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    HTTP.post(GET_CHOOSE_SUBJECT_REPORT_DETAIL, { 'source': 4, 'batch': batch })
      .then((res) => {
        let data = res.data;
        let echartsData = res.data.char;
        let subjectCount = res.data.char.subjectCount;
        console.log(subjectCount);
        wx.hideLoading();
        this.setData({
          select: data.studentSubjectData,
          target: data.target,
          subjectCount: subjectCount,
          subjectCategoryData: data.subjectCategoryData,
          hidden: false
        })
        this.changeEchartsData(echartsData);
      })
  },
  changeEchartsData(echartsData) {
    let m = echartsData;
    let arr = [
      { value: m.zhexue, name: '哲学' },
      { value: m.jingji, name: '经济学' },
      { value: m.faxue, name: '法学' },
      { value: m.jiaoyuxue, name: '教育学' },
      { value: m.wenxue, name: '文学' },
      { value: m.lishi, name: '历史学' },
      { value: m.lixue, name: '理学' },
      { value: m.gongxue, name: '工学' },
      { value: m.nongxue, name: '农学' },
      { value: m.yixue, name: '医学' },
      { value: m.guanliXue, name: '管理学' },
      { value: m.yishuxue, name: '艺术学' },
      { value: m.junshixue, name: '军事学' }
    ];
    this.setData({
      echartsData1: arr
    })
    wx.nextTick(() => {
      this.init();
    })
    
  },
  // 点击按钮后初始化图表
  init: function () {
    let echartsData1 = this.data.echartsData1;
    let subjectCount = this.data.subjectCount;
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      setOption(chart, echartsData1, subjectCount);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  }
})