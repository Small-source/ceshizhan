// pages/login/password.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    warning: '',
    pw1:'',
    pw2:'',
    flag:true
  },
  //密码1
  bindPw1: function (e) {
    this.setData({
      pw1: e.detail.value
    })
  },
  //密码2
  bindPw2: function (e) {
    this.setData({
      pw2: e.detail.value
    })
  },
  //提交
  submit:function(){
    if (!this.data.flag) {
      return
    }
    this.setData({
      warning: '',
      flag: false
    })
    var pw1 = this.data.pw1;
    var pw2 = this.data.pw2;
    var _this = this;
    var reg = /[a-zA-z0-9!@#$%^&*.?]{6,20}/;
    if (!pw1 || !pw2) {
      this.setData({
        warning: '请输入密码',
        flag: true
      })
      return;
    }
    if (pw1 != pw2) {
      this.setData({
        warning: '两次输入的密码不一致',
        flag: true
      })
      return;
    }
    if (!reg.test(pw1)) {
      this.setData({
        warning: '密码格式不正确',
        flag: true
      })
    }
    wx.request({
      url: wx.getStorageSync('config').login.storePassword,
      method: 'post',
      data: {
        password: pw1,
        repeatPassword: pw2
      },
      header: {
        'token': wx.getStorageSync('token') 
      },
      success: function (data) {
        if (data.data.code == '2000') {
          var data = data.data.data;
          if (data.isImproveInformation == '2') {
            wx.navigateTo({
              url: '../login/perfectInformation',
            })
            return;
          }
          wx.reLaunch({
            url: '/pages/index/index'
          })
        } else {
          _this.setData({
            warning: data.msg,
            flag: true
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.navigateTo({
    //   url: '../login/perfectInformation',
    // })
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