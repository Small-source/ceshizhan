// pages/classroom/page1.js
import HTTP from '../../utils/httpRequest.js'
import { saveImg } from '../../utils/saveImg.js'
import { goLogin } from '../../utils/login.js'
import { GET_PCURL_BY_AGENT_ID } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    isShowCard: false
  },
  saveImg(e) {
    saveImg.bind(this)(e);
  },
  getPcUrlByAgentId() {
    let a = wx.getStorageSync('a')
    HTTP.post(GET_PCURL_BY_AGENT_ID, { 'a': a })
      .then((res) => {
        let imgUrl = res.data.qrCode;
        this.setData({
          imgUrl: imgUrl
        })
      })
  },
  changeCard(e) {
    let popsrc = e.currentTarget.dataset.imgurl;
    this.setData({
      imgUrl: popsrc,
      isShowCard: true
    })
  },
  closeCard() {
    this.setData({
      isShowCard: false
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
    this.getPcUrlByAgentId();
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
    if (!wx.getStorageSync('token')) {
      GO_LOGIN()
        .then(() => {
          this.onLoad()
        })
      return;
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})