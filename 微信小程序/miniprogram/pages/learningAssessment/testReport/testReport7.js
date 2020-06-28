// // pages/learningAssessment/testReport/testReport7.js
import HTTP from '../../../utils/httpRequest.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cdata:{}
  },
  //canvas
  draw(number){
    const query = wx.createSelectorQuery()
    query.select('#circle')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        ctx.arc(67, 67, 56, 0, 2 * Math.PI, true);
        ctx.strokeStyle = '#EEEEEE';
        ctx.lineWidth = '10'
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(67, 67, 56, -Math.PI / 2, -Math.PI /2-2*Math.PI/150*number, true);
        ctx.strokeStyle = '#1A8779';
        ctx.lineCap = 'round';
        ctx.stroke();
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let _this = this;
    wx.request({
      url: wx.getStorageSync('config').xueXiCeping.reportData,
      method: 'post',
      data:{
        id: id,
        assessType: 7
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            cdata:data.data.data
          })
          let number = _this.data.cdata.report && _this.data.cdata.report.studentData.score||0;
          _this.draw(number);
        } else {
        }
      }
    })
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