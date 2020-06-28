// pages/professionalLibrary/professionalLibrary.js
import { goLogin } from '../../utils/login.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 本科学科门类
    discipline1: [
    ],
    benKeFlag: true,
    zhuanKeFlag: false,
    currentIndex1: 0,
    currentIndex2: 0,
    benKeData: {},
    zhuanKeData: [],
    xiala: '../../images/professionalLibrary/icon_xiala.png',
    shouqi: '../../images/professionalLibrary/icon_shouqi.png',
    benKeIndex: '0',
    benKeIndexMain: '0',
    toView: 'inToView0',
    searchName: '',
    searchData: [],
    searchFlag: false,
    searchShaixuan:'',
    searchShaixuanFlag:true
  },
  benKe: function () {
    if (!this.data.benKeFlag) {
      this.setData({
        benKeFlag: true,
        zhuanKeFlag: false,
        searchFlag: false
      })
    }
  },
  zhuanKe: function () {
    if (!this.data.zhuanKeFlag) {
      this.setData({
        benKeFlag: false,
        zhuanKeFlag: true,
        searchFlag: false
      })
    }
  },
  //本科专业切换
  benKeTab: function (e) {
    this.setData({
      currentIndex1: e.currentTarget.dataset.index
    })
    var index = e.target.dataset.index
    this.setData({
      toView: 'inToView' + index
    })
  },
  //专科专业切换
  zhuanKeTab: function (e) {
    this.setData({
      currentIndex2: e.currentTarget.dataset.index
    })
    var index = e.target.dataset.index
    this.setData({
      toView: 'inToView' + index
    })
  },
  //学科数据
  zhuanyeData: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').xueKePinggu.yiJiFenLei,
      method: 'post',
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
             let Arr=Object.keys(data.data.data);
            let discipline1=_this.data.discipline1;
            Arr.forEach(item=>{
              let obj={
                names:item,
                value:item
              };
              discipline1.push(obj)
            })
            _this.setData({
              benKeData: data.data.data,
              discipline1: discipline1
            })
          wx.hideLoading()
        } else if (data.data.code == 2026) {
          wx.reLaunch({
            url: '/pages/login/perfectInformation',
          })
        } else {
        }
      }
    })
  },
  //搜索数据
  search: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let serachName = this.data.searchName;
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').xueKePinggu.yuanxiaoResult,
      method: 'post',
      data: {
        universityName: serachName 
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            zhuanKeData:data.data.data,
            searchFlag:true,
            searchData:Object.keys(data.data.data),
            searchShaixuanFlag:true,
            searchShaixuan:''
          })
          wx.hideLoading()
        } else {
        }
      }
    })
  },
  //大学展示内容
  showContent(e){
    this.setData({
      searchShaixuan: e.currentTarget.dataset.name,
      searchShaixuanFlag: false,
      searchName: e.currentTarget.dataset.name
    })
  },
  //获取input输入框内容
  setSearchName(e) {
    this.setData({ 
      searchName: e.detail.value,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.getStorageSync('token')) {
      goLogin()
        .then(() => {
          this.onLoad()
        })
      return;
    }
    this.zhuanyeData();
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