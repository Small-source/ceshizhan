// pages/classroom/classroomList/classroomList.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_LIVE_COLUMN_LIST, GET_UNIVERSITY_VIDEO_LIST, GET_SUBJECT_VIDEO_LIST } from '../../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    title: '',
    classList: [],
    pageNumber: 1,
    count: 1,
    searchValue: '',
    isSearching: false,
    searchNumber: 1,
    searchList: []
  },
  getLiveColumnList(type) {
    wx.showLoading({
      title: '加载中',
    })
    // type: 1直播 2专栏 必传
    HTTP.post(GET_LIVE_COLUMN_LIST, {
      type: type,
      pageSize: 15,
      pageNumber: this.data.pageNumber
    })
      .then((res) => {
        let data = res.data.list;
        this.setData({
          classList: data
        })
        wx.hideLoading();
      })
  },
  closeSearch() {
    this.setData({
      searchValue: '',
      isSearching: false
    })
  },
  searchChange(e) {
    let value = e.detail.value;
    if (value.length < 1) {
      this.setData({
        searchValue: value,
        isSearching: false
      })
      return;
    }
    this.setData({
      searchValue: value,
      isSearching: true
    })
    this.query(value);
  },
  // 搜索专业或者大学视频
  query(value) {
    let type = this.data.type;
    let searchNumber = this.data.searchNumber;
    if (searchNumber != 1) {
      this.setData({
        searchNumber: 1
      })
    }
    if(type==3) {
      this.getUniversityVideoList(value)
    }else {
      this.getSubjectVideoList(value)
    }
  },
  // 获取大学视频列表
  getUniversityVideoList(title) {
    wx.showLoading({
      title: '加载中',
    })
    let pageNumber='';
    let isSearching = this.data.isSearching;
    if (isSearching) {
      pageNumber = this.data.searchNumber;
    }else {
      pageNumber = this.data.pageNumber;
    }
    HTTP.post(GET_UNIVERSITY_VIDEO_LIST, {
      title: title,
      pageSize: 16,
      pageNumber: pageNumber
    })
      .then((res) => {
        let data = res.data.list;
        let count = res.data.page.count;
        let oldlist = this.data.classList;
        let nowList = oldlist.concat(data);

        let oldSearchList = this.data.searchList;
        let nowSearchList = oldSearchList.concat(data);
        if (isSearching) {
          this.setData({
            searchList: nowSearchList,
            count: count
          })
        } else {
          this.setData({
            classList: nowList,
            count: count
          })
        }
        wx.hideLoading();
      })
  },
  // 获取专业视频列表
  getSubjectVideoList(title) {
    wx.showLoading({
      title: '加载中',
    })
    let pageNumber = '';
    let isSearching = this.data.isSearching;
    if (isSearching) {
      pageNumber = this.data.searchNumber;
    } else {
      pageNumber = this.data.pageNumber;
    }
    HTTP.post(GET_SUBJECT_VIDEO_LIST, {
      title: title,
      pageSize: 16,
      pageNumber: pageNumber
    })
      .then((res) => {
        let data = res.data.list;
        let count = res.data.page.count;
        let oldlist = this.data.classList;
        let nowList = oldlist.concat(data);

        let oldSearchList = this.data.searchList;
        let nowSearchList = oldSearchList.concat(data);
        if (isSearching) {
          this.setData({
            searchList: nowSearchList,
            count: count
          })
        } else {
          this.setData({
            classList: nowList,
            count: count
          })
        }
        wx.hideLoading();
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
    let type = options.type; // type: 1直播 2专栏 3大学介绍4专业介绍
    this.setData({
      type: type
    })
    if(type == 1) {
      this.getLiveColumnList(type);
      wx.setNavigationBarTitle({
        title: '优选'
      })
    } else if (type == 2) {
      wx.setNavigationBarTitle({
        title: '专栏'
      })
      this.getLiveColumnList(type);
    }else if(type==3) {
      wx.setNavigationBarTitle({
        title: '大学介绍'
      })
      this.getUniversityVideoList();
    }else {
      wx.setNavigationBarTitle({
        title: '专业介绍'
      })
      this.getSubjectVideoList();
    }
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
    let type = this.data.type;
    let pageNumber = this.data.pageNumber;
    let searchNumber = this.data.searchNumber;
    let isSearching = this.data.isSearching;
    if (isSearching) {
      searchNumber ++;
      this.setData({
        searchNumber: searchNumber
      })
    } else {
      pageNumber ++;
      this.setData({
        pageNumber: pageNumber
      })
      if (type == 1) {
        this.getLiveColumnList(type);
      } else if (type == 2) {
        this.getLiveColumnList(type);
      } else if (type == 3) {
        this.getUniversityVideoList();
      } else {
        this.getSubjectVideoList();
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})