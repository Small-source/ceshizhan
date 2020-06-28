// pages/classroom/classroom.js
import HTTP from '../../utils/httpRequest.js'
import { saveImg } from '../../utils/saveImg.js'
import { goLogin } from '../../utils/login.js'
import { GET_LIVE_COLUMN_LIST, GET_PCURL_BY_AGENT_ID } from '../../utils/configAPI.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isThrough: 2, //1视频2二维码
    isShowCard: false,
    imgUrl: '',
    liveList: [],
    columnList: [],
    headerNav: [
      { imgUrl: '/images/classRoom/icon_zhibo.png', title: '优选', popsrc: 'https://m.xuematech.com/applet/img/classroom/pop/zhibo.png' },
      { imgUrl: '/images/classRoom/icon_zhuanlan.png', title: '专栏', popsrc: 'https://m.xuematech.com/applet/img/classroom/pop/zhuanlan.png' },
      { imgUrl: '/images/classRoom/icon_daxue.png', title: '大学介绍', popsrc: 'https://m.xuematech.com/applet/img/classroom/pop/school.png' },
      { imgUrl: '/images/classRoom/icon_zhuanye.png', title: '专业介绍', popsrc: 'https://m.xuematech.com/applet/img/classroom/pop/subejct.png'  }
    ],
    zhuanlan: [
      'https://m.xuematech.com/applet/img/classroom/pop/zl02.png',
      'https://m.xuematech.com/applet/img/classroom/pop/zl01.png',
      'https://m.xuematech.com/applet/img/classroom/pop/zl03.png',
      'https://m.xuematech.com/applet/img/classroom/pop/zl04.png'
    ],
    zhibo: [
      'https://m.xuematech.com/applet/img/classroom/pop/zb01.png',
      'https://m.xuematech.com/applet/img/classroom/pop/zb02.png',
      'https://m.xuematech.com/applet/img/classroom/pop/zb03.png'
    ]

  },
  getPcUrlByAgentId() {
    let a = wx.getStorageSync('a')
    HTTP.post(GET_PCURL_BY_AGENT_ID, { 'a': a })
      .then((res) => {
        let pcUrl = res.data.appletVideoStatus;
        this.setData({
          isThrough: pcUrl
        })
      })
  },
  saveImg(e) {
    saveImg.bind(this)(e);
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
  previewImage(e) {
    var current = e.target.dataset.src;   //这里获取到的是一张本地的图片
    wx.previewImage({
      current: current,//需要预览的图片链接列表
      urls: [current] //当前显示图片的链接
    })
  },
  getLiveColumnList(type) {
    // type: 1直播 2专栏 必传
    HTTP.post(GET_LIVE_COLUMN_LIST, {
      type: type,
      pageSize: 5
    })
      .then((res) => {
        let data = res.data.list;
        if(type == 1) {
          this.setData({
            liveList: data
          })
        }else {
          this.setData({
            columnList: data
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
        .then(()=> {
          this.onLoad(options)
        })
      return;
    }
    this.getPcUrlByAgentId()
    this.getLiveColumnList(1);
    this.getLiveColumnList(2);
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