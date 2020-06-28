// pages/professionalLibrary/professionalLibrary.js
import { goLogin } from '../../utils/login.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 本科学科门类
    discipline1: [
      [
        { names: '互联网/IT', value: '互联网/IT' ,id:0},
        { names: '交通/运输/物流', value: '交通/运输/物流', id: 1 }
      ],
      [
        { names: '农/林/牧/渔/水利', value: '农/林/牧/渔/水利', id: 2 },
        { names: '制造业', value: '制造业', id: 3 }
      ],
      [
        { names: '咨询/专业服务', value: '咨询/专业服务', id: 4 },
        { names: '广告/公关/市场', value: '广告/公关/市场', id: 5 }
      ],
      [
        { names: '房地产/建筑', value: '房地产/建筑', id: 6 },
        { names: '政府/非盈利机构', value: '政府/非盈利机构', id: 7 }
      ],
      [
        { names: '教育/培训/科研', value: '教育/培训/科研', id: 8 },
        { names: '文化/传媒/出版/印刷', value: '文化/传媒/出版/印刷', id: 9 }
      ],
      [
        { names: '服务/中介/物业', value: '服务/中介/物业', id: 10 },
        { names: '消费品', value: '消费品', id: 11 }
      ],
      [
        { names: '生物/医药/保健', value: '生物/医药/保健', id: 11 },
        { names: '电子/微电子', value: '电子/微电子', id: 12 }
      ],
      [
        { names: '电气/电力', value: '电气/电力', id: 13 },
        { names: '石油/化工/能源', value: '石油/化工/能源', id: 14 }
      ],
      [
        { names: '艺术/休闲/运动', value: '艺术/休闲/运动', id: 15 },
        { names: '通用类', value: '通用类', id: 16 }
      ],
      [
        { names: '通讯', value: '通讯', id: 17 },
        { names: '金融/银行', value: '金融/银行', id: 18 }
      ],
      [
        { names: '其他', value: '其他', id: 19 }
      ],
    ],
    // 专科学科门类 
    discipline2: [
      
    ],
    tag:'互联网/IT',
    currentIndex1: 0,
    zhiYeData: {},
    searchName: '',
    searchData: {},
    searchFlag: false,
    searchNone:false
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
  //职业切换
  benKeTab: function (e) {
    this.setData({
      currentIndex1: e.currentTarget.dataset.index,
      tag: e.target.dataset.value,
      searchFlag:false,
      searchNone: false
    })
  },
  //职业数据
  zhiyeData: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').zhiYeku.zhiyelist,
      method: 'post',
      data:{
        industryCategory:'互联网/IT'
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            zhiYeData:data.data.data
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
    this.setData({
      searchFlag:true,
      searchNone:false
    })
    wx.showLoading({
      title: '加载中',
    })
    let serachName = this.data.searchName;
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').zhiYeku.search,
      method: 'post',
      data: {
        name: serachName,
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          console.log(100)
          console.log(data.data.data)
          _this.setData({
            searchData:data.data.data
          })
          if(Object.keys(data.data.data).length==0){
            _this.setData({
              searchNone:true
            })
          }
          wx.hideLoading()
        } else {
        }
      }
    })
  },
  //获取input输入框内容
  setSearchName(e) {
    this.setData({ searchName: e.detail.value })
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
    this.zhiyeData();
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