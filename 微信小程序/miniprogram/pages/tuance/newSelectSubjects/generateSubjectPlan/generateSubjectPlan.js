// pages/selectTargetMajor/generateSubjectPlan.js
import HTTP from '../../../../utils/httpRequest.js'
import { GET_SELECTION_ADVICE_LIST, STORE_SELECTION_ADVICE_LIST } from '../../../../utils/configAPI.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    xkjyList: [],
    subjectValue: ''
  },
  // 获取测评完成后返回回来的目标专业
  getSelectionAdviceList() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: wx.getStorageSync('config').tuance.xuankelist,
      method: 'post',
      data: {
        'source': 5, 
        subjectName: ''
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: (data)=> {
        wx.hideLoading();
        let list = data.data.data.report;
        this.setData({
          xkjyList: list,
          subjectValue: list[0].subjectName
        })
      }
    })
  },
  // 生成选科报告
  storeSelectionAdviceList() {
    let arr = [];
    let value = this.data.subjectValue;
    arr.push(value);
    wx.request({
      url: wx.getStorageSync('config').tuance.xuankeSave,
      method: 'post',
      data: {
         source: 5,
         subject: arr
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: (data) => {
        wx.reLaunch({
          url: '/pages/tuance/tEnd',
        })
      }
    })
  },
  changeSubject(e) {
    let value = e.currentTarget.dataset.value;
    this.setData({
      subjectValue: value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSelectionAdviceList();
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