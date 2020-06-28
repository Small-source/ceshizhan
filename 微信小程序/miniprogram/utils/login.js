var config = require('./config.js');
const goLogin = function() {
  return  new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'https://m.xuematech.com/applet_get_openid.php',
            data: {
              code: res.code,
              a: wx.getStorageSync('a')
            },
            success: function (res) {
              if (res.data.code == '200') {
                wx.setStorageSync("openId", res.data.openid);
                // wx.setStorageSync("openId", "asd88666222246")
                login();
              }
            }
          })
        }
      }
    })
    function login() {
      wx.request({
        url: config.login.loginByOpenId,
        method: 'post',
        data: {
          openId: wx.getStorageSync('openId'),
          a: wx.getStorageSync('a') || ''
        },
        success(res) {
          if (res.data.code == 2000) {
            var data = res.data.data;
            if (!data.token) {
              wx.navigateTo({
                url: '/pages/login/bindphone',
              })
              return;
            }
            wx.setStorageSync("token", data.token)
            if (data.is_band_phone == '1') {
              wx.navigateTo({
                url: '/pages/login/bindphone',
              })
              return;
            }
            if (data.is_need_password == '1') {
              wx.navigateTo({
                url: '/pages/login/password',
              })
              return;
            }
            if (data.isImproveInformation == '2') {
              wx.navigateTo({
                url: '/pages/login/perfectInformation',
              })
              return;
            }
            resolve();
          }
        }
      })
    }

  })
}
module.exports = { goLogin };
