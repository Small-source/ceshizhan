// pages/classroom/videoPlay/videoPlay.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { saveImg } from '../../../utils/saveImg.js'
import { GET_LIVE_COLUMN_DETAIL, GET_UNIVERSITY_VIDEO_DETAIL, GET_PCURL_BY_AGENT_ID } from '../../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowCard: false,
    videoData: null,
    imgUrl: '',
    remark: '',
    type: 1,
    isThrough: 2//1视频2二维码
  },
  // 获取直播视频详情
  getLiveColumnDetail(id) {
    let pageNumber = this.data.pageNumber;
    HTTP.post(GET_LIVE_COLUMN_DETAIL, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        let content = res.data.remark;
        content = content.replace(/<img/gi, '<img style="max-width:100%;height:auto;float:left;display:block" ');
        content = content.replace(/background\-color\: rgb\(255, 255, 255\);/gi, 'background-color:transparent;');
        content = content.replace(/<table/ig, '<table style="font-size:12px;background: #dedede;width: 100%;margin-bottom:15px; "');
        content = content.replace(/<td([\s\w"-=\/\.:;]*)style="/ig, '<td $1 style="background: #FFF; ');
        this.setData({
          videoData: data,
          remark: content
        })
      })
  },
  // 课堂 - 大学视频详情 / 专业视频详情 / 专栏详情
  getUniversityVideoDetail(id) {
    HTTP.post(GET_UNIVERSITY_VIDEO_DETAIL, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          videoData: data
        })
      })
  },
  changeCard(e) {
    let imgUrl = e.currentTarget.dataset.imgurl;
    this.setData({
      imgUrl: imgUrl,
      isShowCard: true
    })
    console.log(imgUrl)
    console.log(e)
  },
  closeCard() {
    this.setData({
      isShowCard: false
    })
  },
  saveImg(e) {
    saveImg.bind(this)(e);
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
    let type = options.type;
    let id = options.id;
    this.setData({
      type: type
    })
    if(type==1) {
      this.getLiveColumnDetail(id);
    }else {
      this.getUniversityVideoDetail(id);
    }
    if (type == 1) {
      wx.setNavigationBarTitle({
        title: '优选'
      })
    } else if (type == 2) {
      wx.setNavigationBarTitle({
        title: '专栏'
      })
    } else if (type == 3) {
      wx.setNavigationBarTitle({
        title: '大学介绍'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '专业介绍'
      })
    }
  },
  changData(e) {
    var id= e.currentTarget.dataset.id;
    this.getUniversityVideoDetail(id);
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