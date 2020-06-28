
//app.js
const app = getApp()
var config = require('./utils/config.js')
App({
  onLaunch: function (options) {    
    wx.setStorageSync("a", 20) 
    wx.setStorageSync("source", 4)
    wx.setStorageSync("config", config)
  },
  onGetUserInfo: function (e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  onShow: function () {
  },
  //格式化时间戳
  formatTime:function(date,format){
    var timeformat = new Date(date)
    var tf = function (i) { return (i < 10 ? '0' : '') + i }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
      switch (a) {
        case 'yyyy':
          return tf(timeformat.getFullYear())
        case 'MM':
          return tf(timeformat.getMonth() + 1)
        case 'mm':
          return tf(timeformat.getMinutes())
        case 'dd':
          return tf(timeformat.getDate())
        case 'HH':
          return tf(timeformat.getHours())
        case 'ss':
          return tf(timeformat.getSeconds())
      }
    })
  }
})
