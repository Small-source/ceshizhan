// miniprogram/pages/login/bindphone.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    warning:'',
    phone:'',
    code:'',
    phoneIf:true,
    number:60,
    flag:true
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
  // 发送手机验证码
  sendCode:function(){
    this.setData({
      warning:''
    }) 
    var phone = this.data.phone;
    var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
    if (!reg.test(phone)) {
      this.setData({
        warning: '请输入正确手机号'
      })
      return;
    }
    this.setData({
      phoneIf: false
    })
    var number = 60;
    var _this=this;
    var t = setInterval(function () {
      number--;
      if (number < 0) {
        clearInterval(t);
        _this.setData({
          phoneIf: true
        })
        _this.setData({
          number: 60
        })
        return;
      }
      _this.setData({
        number:number
      })
    }, 1000);
    wx.request({
      url: wx.getStorageSync('config').login.getCodeByPhoneMobileTerminal,
      method:'post',
      data:{
        phone:phone,
        a: wx.getStorageSync('a') || ''
      },
      success:function(data){
        if (data.code == '2000') {

        } else {
         _this.setData({
            warning: data.msg
          })
        }
      }
    })
  },
  //提交信息
  submit:function(){
    if(!this.data.flag){
      return
    }
    this.setData({
      flag:false
    })
    this.setData({
      warning: ''
    })
    var code = this.data.code;
    var phone = this.data.phone;
    var _this = this;
    var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
    if (!reg.test(phone)) {
      this.setData({
        warning: '请输入正确手机号',
        flag: true
      })
      return;
    }
    if (!code) {
      this.setData({
        warning: '请输入验证码',
        flag: true
      })
      return;
    }
    wx.request({
      url: wx.getStorageSync('config').login.getUserInfoByPhone,
      method: 'post',
      data: {
        phone: phone,
        a: wx.getStorageSync('a') || '',
        phone: phone,
        code: code,
        source: wx.getStorageSync('source') ||4,
        openId: wx.getStorageSync('openId')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          var data = data.data.data;
          wx.setStorageSync("token", data.token)
          if (data.isNeedPassword == '1') {
            wx.navigateTo({
              url: '../login/password',
            })
            return;
          }
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
            warning: data.data.msg,
            flag: true
          })
        }
      }
    })
  },
  //手机号输入框信息
  bindPhone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  //验证码输入框信息
  bindCode:function(e){
    this.setData({
      code: e.detail.value
    })
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

  },
})