import HTTP from '../../utils/httpRequest.js'
import { GET_APPLET_ARTICLE_LIST, Home_GET_LIST, GET_USER_INFO, APPLET_DETAIL, GET_APPLET_SEL_ARTICLE_DETAIL } from '../../utils/configAPI.js'
// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    province: '北京',
    grade: 600,
    isWen: '文史',
    stamp: [
      { name: '文', value: '文史' },
      { name: '理', value: '理工' },
      { name: '新高考', value: '新高考' }
    ],
    consultantList:[],
    appletArticleList: [],
    pageSize: 8,
    pageNumber: 1,
    count:1,
    cateId: 12,
    // swiperHeight: 0,
    winWidth: 0,
    winHeight: 0,
    scrollleft: 0,
    currentTab: 0,
    isScrollY: false,
    scrollTop: 0,

    articleName: '',//自定义资讯模块名称
    articleStatus: '2'//1 已经开启自定义资讯模块 2未开启自定义资讯模

  },
  // 获取咨询师列表
  getConsultantList() {
    let id = wx.getStorageSync('a')
    // let id = 18;
    HTTP.post(Home_GET_LIST, { 'a': id,pageSize: '5' })
      .then((res) => {
        let list = res.data.list;
        this.setData({
          consultantList: list
        })
      })
  },
  getCity() {
    HTTP.post(GET_USER_INFO, {})
      .then((res) => {
        let province = res.data.province;
        wx.setStorageSync('province', province)
        this.setData({
          province: province
        })
      })
  },
  switchChange(e) {
    let tap = e.currentTarget.dataset.tap;
    this.setData({
      isWen: tap
    })
  },
  inputChange(e) {
    this.setData({
      grade: e.detail.value
    })
  },






  // 获取自定义资讯列表名称
  getAppletDetail() {
    let id = wx.getStorageSync('a')
    // let id = 18;
    HTTP.post(APPLET_DETAIL, { 'a': id })
      .then((res) => {
        let data = res.data;
        this.setData({
          articleName: data.articleName,
          articleStatus: data.articleStatus
        })
        if (data.articleStatus==1) {
          this.getAppletSelfArticleList(5);
        }
      })
  },
  getAppletSelfArticleList() {
    let id = wx.getStorageSync('a');
    // let id = 18;
    let pageNumber = this.data.pageNumber;
    wx.showLoading({
      title: '加载中',
    })
    HTTP.post(GET_APPLET_SEL_ARTICLE_DETAIL, { 'a': id, 'pageNumber': pageNumber, 'pageSize': '8' })
      .then((res) => {
        let list = res.data.list;
        let page = res.data.page;
        let nowData = this.data.appletArticleList.concat(list);
        this.setData({
          appletArticleList: nowData,
          count: page.count
        })
        wx.hideLoading();
      })
  },
  //点击tab切换 
  swichNav: function (e) {
    var id = e.target.dataset.cateid;
    var currentTab = e.target.dataset.current;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    }
    this.setData({
      cateId: id,
      pageNumber: 1,
      appletArticleList: [],
      currentTab: currentTab,
      scrollTop: 5,
      isScrollY: true
    })
    if (id == 13) {
      this.getAppletSelfArticleList();
      return;
    }
    this.getAppletArticleList();
    wx.pageScrollTo({
      scrollTop: 1000000
    }) 
  },
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollleft: 300
      })
    } else {
      this.setData({
        scrollleft: 0
      })
    }
  },

  getAppletArticleList() {
    var cateId = this.data.cateId;
    var pageNumber = this.data.pageNumber;
    wx.showLoading({
      title: '加载中',
    })
    HTTP.post(GET_APPLET_ARTICLE_LIST, { 'cateId': cateId, 'pageNumber': pageNumber,'pageSize': '8' })
      .then((res) => {
        let list = res.data.list;
        let page = res.data.page;
        let nowData = this.data.appletArticleList.concat(list);
        this.setData({
          appletArticleList: nowData,
          count: page.count
        })
        wx.hideLoading();
      })
  },
  goMatchingSchool() {
    let artsAndScience = this.data.isWen;
    let averageScore = this.data.grade;
    let scoreProvince = this.data.province;
    wx.navigateTo({
      url: '/pages/matchingSchools/matchingSchools?artsAndScience=' + artsAndScience + '&averageScore=' + averageScore + '&scoreProvince=' + scoreProvince
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getOpenId() {
    var _this = this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'https://m.xuematech.com/applet_get_openid.php',
            data: {
              code: res.code,
              a: wx.getStorageSync('a')
            },
            success: function (res) {
              if (res.data.code == '200') {
                wx.setStorageSync("openId", res.data.openid);
                // wx.setStorageSync("openId", "asd88666222247")
                _this.goLogin();
              }
            }
          })
        }
      }
    })
  },
  goLogin() {
    var _this = this;
    var config = require('../../utils/config.js');
    wx.request({
      url: config.login.loginByOpenId,
      method: 'post',
      data: {
        openId: wx.getStorageSync('openId'),
      },
      success(res) {
        if (res.data.code == 2000) {
          var data = res.data.data;
          // wx.setStorageSync("token", data.token);
          if (data.token&&data.is_band_phone != '1' && data.is_need_password != '1' && data.isImproveInformation != '2') {
            wx.setStorageSync("token", data.token);
            _this.getCity();
          }
        }
      }
    })
  },
  stopScrollY() {
    // console.log(888);
    this.setData({
      isScrollY: false
    })
  },
  getMoreData() {
    // console.log('加载更多');
    let count = this.data.count;
    let length = this.data.appletArticleList.length;
    let cateId = this.data.cateId;
    if(count==length) {
      return;
    }
    let pageNumber = this.data.pageNumber +=1;
    this.setData({
      pageNumber: pageNumber
    })
    if (cateId == '13') {
      this.getAppletSelfArticleList();
      return;
    }
    this.getAppletArticleList();
  },
  onLoad: function (options) {
    // console.log(wx.getSystemInfoSync().windowHeight)
    var that = this;
    this.getOpenId();
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  
    this.getConsultantList();
    this.getAppletArticleList();
    this.getAppletDetail();
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
    if (wx.getStorageSync('token')) {
      this.getCity();
    }
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isScrollY: true
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})