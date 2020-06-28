// pages/service/serviceDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = wx.getStorageSync("a");
    let idx= options.id;
    let urlData1 = [
      'bg01.png',
      'bg02.png',
      'bg03.png',
      'bg04.png',
      'bg05.png',
      'bg06.png',
      'bg07.png'
    ];
    let urlData2 = [
      'bg0120.png',
      'bg02.png',
      'bg03.png',
      'bg0420.png',
      'bg05.png',
      'bg06.png',
      'bg07.png'
    ];
    if (userId==20) {
      this.setData({
        imgUrl: urlData2[idx]
      })
    }else {
      this.setData({
        imgUrl: urlData1[idx]
      })
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