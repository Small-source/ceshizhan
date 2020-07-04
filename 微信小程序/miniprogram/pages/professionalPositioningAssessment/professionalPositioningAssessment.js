// pages/professionalPositioningAssessment/professionalPositioningAssessment.js
import { goLogin } from '../../utils/login.js'
import HTTP from '../../utils/httpRequest.js'
import { STORE_SUBJECT, GET_COLLECT_SUBJECT_ID } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    kaisheyuanxiao:[],
    subjectId: '',
    isShoucang: ''
  },
  getData(id){
    console.log(id)
    // id=4
    let _this=this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeku.subjectDetail,
      method: 'post',
      data:{
        id:id
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            data:data.data.data
          })

          
        } else {
        }
      }
    })
    wx.request({
      url: wx.getStorageSync('config').zhuanYeku.kaisheyuanxiao,
      method: 'post',
      data: {
        id: id
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            kaisheyuanxiao: data.data.data
          })
        } else {
        }
      }
    })
  },
  // 专业收藏和取消专业收藏
  goCollectMajor() {
    let id = this.data.subjectId;
    let isShoucang = this.data.isShoucang;
    HTTP.post(STORE_SUBJECT, {
      collectionId: id
    })
      .then((res) => {
        // this.getCollectUniversityId();
        this.setData({
          isShoucang: !isShoucang
        })
      })
  },
  // 获取是否收藏该专业
  getCollectMajor() {
    let id = this.data.subjectId;
    HTTP.post(GET_COLLECT_SUBJECT_ID, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        let bol = data.some((item) => {
          return item == id
        })
        if (bol) {
          this.setData({
            // imgSrc: '/images/schoolDetail/icon_hadCollect.png'
            isShoucang: true
          })
        } else {
          this.setData({
            // imgSrc: '/images/schoolDetail/icon_goCollect.png'
            isShoucang: false
          })
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.ZhuanyeId;
    if (!wx.getStorageSync('token')) {
      goLogin()
        .then(() => {
          this.onLoad(options)
        })
      return;
    }
    this.setData({
      subjectId: id
    })
    this.getData(options.ZhuanyeId);
    this.getCollectMajor();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})