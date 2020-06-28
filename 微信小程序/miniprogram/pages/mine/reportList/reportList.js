// pages/newSelectSubjects/reportList/reportList.js
import HTTP from '../../../utils/httpRequest.js'
import { GET_CHOOSE_REPORT_LIST, GET_REPORT_LIST } from '../../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportList: [],
    type:'' //1:新高考选科 2：学习状态诊断
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type;
    this.setData({
      type: type
    })
    if(type==1) {
      wx.setNavigationBarTitle({
        title: '新高考选科方案'
      })
      this.getChooseReportList();
    }else if(type==2) {
      wx.setNavigationBarTitle({
        title: '学习状态诊断报告' 
      })
      this.getReportList();
    }
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

  },
  getChooseReportList() {
    HTTP.post(GET_CHOOSE_REPORT_LIST, {
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          reportList: data
        })

      })
  },
  getReportList() {
    HTTP.post(GET_REPORT_LIST, {
      pageNumber: 1,
      pageSize: 50
    })
      .then((res) => {
        let data = res.data.list;
        this.setData({
          reportList: data
        })

      })
  },
})