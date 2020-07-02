// pages/newSelectSubjects/selectTargetMajor1/selectTargetMajor1
import HTTP from '../../../../utils/httpRequest.js'
import { GET_RECOMMENDE_MAJOR } from '../../../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: '',
    winHeight: '',
    isShowHad: true,
    majorList: [],
    checkMajor1: []
  },
  getHeight() {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 获取测评完成后返回回来的目标专业
  getRecommendedMajor() {
    wx.showLoading({
      title: '加载中',
    })
    let _this=this
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.tuanceTuijian,
      method: 'post',
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 2000) {
          if (data.data.data.length == 0) {
          } else {
            _this.setData({
              majorList: data.data.data
            })
            wx.hideLoading()
          }
        } else {
      
        }
      }
    })
  },
  addMajor(e) {
    let arr = this.data.checkMajor1;
    let obj = {};
    obj.subjectId = e.target.dataset.id;
    obj.subjectName = e.target.dataset.name;
    obj.type = 4;
    arr.push(obj);
    this.setData({
      checkMajor1: arr
    })
  },
  removeMajor(e) {
    let id = e.target.dataset.id;
    let arr = this.data.checkMajor1;
    arr = arr.filter(function (item, index, arr) {
      return item.subjectId != id;
    })
    this.setData({
      checkMajor1: arr
    })
  },
  goNext() {
    let arr = this.data.checkMajor1;
    if (arr.length < 5) {
      wx.showToast({
        title: '请添加5~20个目标专业 ！',
        icon: 'none',
        duration: 2000
      })
    }else {
      wx.setStorageSync('checkMajor1', arr);
      wx.navigateTo({
        url: '/pages/tuance/newSelectSubjects/selectTargetMajor2/selectTargetMajor2',
      })
      // let data = wx.getStorageSync('checkMajor1')
    }
  },
  changeHad() {
    let had = this.data.isShowHad;
    this.setData({
      isShowHad: !had
    })
  },
  closeHadCheck() {
    this.setData({
      isShowHad: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHeight();
    this.getRecommendedMajor();
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

  }
})