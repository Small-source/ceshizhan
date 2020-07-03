// pages/tuance/bindcard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'90001344',
    passWord:'985363',
    warning:''
  },
  //绑定卡号
  binduserName:function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  //绑定密码
  bindpassWord: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  // 登录
  submit:function(){
    var _this=this;
    this.setData({
      warning: ''
    })
    var userName=this.data.userName;
    var password=this.data.passWord;
    if (!userName) {
      this.setData({
        warning: '卡号不能为空'
      })
      return false
    }
    if (!password) {
      this.setData({
        warning: '密码不能为空'
      })
      return false
    }
    if (!/^9\d{7}$/.test(userName)) {
      this.setData({
        warning: '卡号格式不正确'
      })
      return false
    }
    if (!/^\d{6}$/.test(password)) {
      this.setData({
        warning: '密码格式不正确'
      })
      return false
    }
    wx.request({
      url: wx.getStorageSync('config').tuance.bindCard,
      method: 'post',
      data: {
        card:userName,
        password:password
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          wx.setStorageSync('tuanceToken', data.data.data.token_applet_team_report)
          wx.setStorageSync('tuanceUserInfo', data.data.data.userInfo)
                if(data.data.data.isImproveInformation==2){   
                  wx.navigateTo({
                    url: 'perfectInformation',
                  })
                }else{
                  _this.cePingJinDu()
                }
        } else {
          _this.setData({
            warning: data.data.msg
          })
        }
      }
    })
    return;
    wx.navigateTo({
      url: 'perfectInformation',
    })
  },
  //获取测评进度
  cePingJinDu: function () {
    let _this = this;
   
    wx.request({
      url: wx.getStorageSync('config').tuance.cepingjindu,
      method: 'post',
      data: {

      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 2000) {
          if (data.data.data.code == 1) {
            wx.redirectTo({
              url: '/pages/tuance/tStart',
            })
            return;
          }
          if (data.data.data.code == 2 || data.data.data.code == 3) {
            wx.redirectTo({
              url: '/pages/tuance/professionalPositioningTest'
            })
            return
          }
          if (data.data.data.code == 4) {
            wx.redirectTo({
              url: '/pages/tuance/newSelectSubjects/generateSubjectPlan/generateSubjectPlan',
            })
            return;
          }
          wx.redirectTo({
            url: 'tEnd',
          })
        } else if (data.data.code == 2026) {
          wx.redirectTo({
            url: '/pages/login/perfectInformation',
          })
        } else {
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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