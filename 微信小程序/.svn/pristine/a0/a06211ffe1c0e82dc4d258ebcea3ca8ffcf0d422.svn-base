// pages/mine/mine.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_APPLET_ARTICLE_LIST, GET_LIST, GET_USER_INFO } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    body:'../../images/mine/icon_nan.png',
    girl:'../../images/mine/icon_nv.png',
    person:{}
  },
  getUser() {
    HTTP.post(GET_USER_INFO, {})
      .then((res) => {
        let person = res.data;
        this.setData({
          person: person 
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
    this.getUser();
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

  }
})