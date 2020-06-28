// miniprogram/pages/learningAssessment/learningAssessments.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_New_ID } from '../../utils/configAPI.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    evaluation: [
      { title: '成就目标定向测评', assessType: 1, img_url: 'icon_chengjiu.png' },
      { title: '时间管理测评', assessType: 2, img_url: 'icon_shijianguanli.png' },
      { title: '学习动机测评', assessType: 3, img_url: 'icon_xuexidongji.png' },
      { title: '学习习惯测评', assessType: 4, img_url: 'icon_xuexixiguan.png' },
      { title: '情绪管理测评', assessType: 5, img_url: 'icon_qingxuguanli.png' },
      { title: '人际关系综合诊断测评', assessType: 6, img_url: 'icon_renjiguanxi.png' },
      { title: '注意力测评', assessType: 7, img_url: 'icon_zhuyili.png' },
      { title: '学业归因测评', assessType: 8, img_url: 'icon_zhuyili.png' },
    ],
    newIdData: [],
    assessType:''
  },
  goEntry(e) {
    var assessType = e.currentTarget.dataset.index;
    wx.setStorageSync('assessType', e.currentTarget.dataset.index);
    wx.navigateTo({
      url: "/pages/learningAssessment/testEntry?a=" + wx.getStorageSync('a') + "&source=" + wx.getStorageSync('source') + "&type=" + wx.getStorageSync('assessType')
    })
  },
  goReport(e) {
    var assessType = e.currentTarget.dataset.assesstype;
    var reportId = e.currentTarget.dataset.reportid;
    // wx.setStorageSync('reportId', reportId);
    // if (assessType == 7) {
    //   wx.navigateTo({
    //     url: '/pages/learningAssessment/evaluation_report7',
    //   })
    //   return;
    // }
    wx.navigateTo({
      url: '/pages/learningAssessment/testReport/testReport' + assessType + '?assessType=' + assessType + '&id=' + reportId,
    })
  },
  getMobileReportNewID() {
    HTTP.post(GET_New_ID, {})
      .then((res) => {
        let data = res.data;
        let arr = [];
        data.forEach((item, index) => {
          arr[item.assessType - 1] = item.id;
        })    
        this.setData({
          newIdData: arr
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMobileReportNewID()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }


})