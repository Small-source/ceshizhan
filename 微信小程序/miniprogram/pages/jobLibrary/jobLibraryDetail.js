// pages/professionalPositioningAssessment/professionalPositioningAssessment.js
import { goLogin } from '../../utils/login.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    kaisheyuanxiao: []
  },
  getData(id) {
    console.log(id)
    // id=4
    let _this = this;
    wx.request({
      url: wx.getStorageSync('config').zhiYeku.detail,
      method: 'post',
      data: {
        id: 180
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            data: data.data.data
          })
          console.log(data)
        } else {
        }
      }
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
    this.getData(options.ZhiyeId);
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