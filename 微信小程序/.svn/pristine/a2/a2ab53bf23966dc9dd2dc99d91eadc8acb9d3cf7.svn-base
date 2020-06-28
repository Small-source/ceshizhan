// pages/consultant/consultantDetail.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { DETAIL, IS_RESERVE, STORE_RESERVE } from '../../utils/configAPI.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    consultantId: '',
    cData: null,
    isPossibleReserve: 1  //1可以预约 本周没有预约,2不可以预约 本周已经预约
  },
  // 获取咨询师详情
  getConsultantDetail(id) {
    HTTP.post(DETAIL, { id: id })
      .then((res) => {
        let data = res.data;
        this.setData({
          cData: data
        })
      })
  },
  // 是否可以预约该咨询师
  isReserve(id) {
    HTTP.post(IS_RESERVE, { expertId: id })
      .then((res) => {
        let data = res.data.isReserve;
        this.setData({
          isPossibleReserve: data
        })
      })
  },
  //预约该咨询师
  storeReserve() {
    let expertId = this.data.consultantId;
    HTTP.post(STORE_RESERVE, { expertId: expertId })
      .then((res) => {
        wx.showToast({
          title: '预约成功',
          icon: 'success',
          duration: 2000
        })
        this.setData({
          isPossibleReserve: 2
        })
      })
      .catch((res) => {
        if (res.data.code == 5501) {
          wx.showToast({
            title: '本周已预约咨询师！',
            icon: 'none',
            duration: 2000
          })
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
    let id = options.consultantId;
    this.setData({
      consultantId: id
    })
    this.getConsultantDetail(id);
    this.isReserve(id);
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