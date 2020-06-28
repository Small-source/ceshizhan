import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_APPLET_ARTICLE_LIST, GET_LIST, GET_USER_INFO } from '../../utils/configAPI.js'
// pages/consultant/consultant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consultantList: []
  },
  // 获取咨询师列表
  getConsultantList() {
    let id = wx.getStorageSync('a')
    // let id = 18;
    HTTP.post(GET_LIST, { 'a': id })
      .then((res) => {
        let list = res.data.list;
        this.setData({
          consultantList: list
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.getStorageSync('token')) {
      goLogin()
        .then(() => {
          this.onLoad(options)
        })
      return;
    }
    this.getConsultantList();
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