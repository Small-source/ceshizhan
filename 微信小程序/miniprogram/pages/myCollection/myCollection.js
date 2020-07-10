// pages/myCollection/myCollection.js
import HTTP from '../../utils/httpRequest.js'
import { GET_PCURL_BY_AGENT_ID, GET_COLLECTION_UNIVERSITY_LIST, GET_COLLECT_SUBJECT_WITH_SYART_LIST, STORE_START_UNIVERSITY, STORE_START_SUBJECT } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pcUrl: '',
    isUniversity: true,
    subjectList: {},
    universityList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPcUrlByAgentId();
    // this.getCollectUniversityList();
  },
  onShow: function () {
    if (this.data.isUniversity) {
      this.getCollectUniversityList();
    }else {
      this.getCollectSubjectWithStartList();
    }
    
  },
  // 获取pcUrl
  getPcUrlByAgentId() {
    let a = wx.getStorageSync('a')
    HTTP.post(GET_PCURL_BY_AGENT_ID, { 'a': a })
      .then((res) => {
        let pcUrl = res.data.url + '/career';
        this.setData({
          pcUrl: pcUrl
        })
      })
  },
  // 获取院校的收藏列表
  getCollectUniversityList() {
    HTTP.post(GET_COLLECTION_UNIVERSITY_LIST, {})
      .then((res) => {
        let data = res.data;
        this.setData({
          isUniversity: true,
          universityList: data
        })

      })
  },
  // 获取专业的收藏列表
  getCollectSubjectWithStartList() {
    HTTP.post(GET_COLLECT_SUBJECT_WITH_SYART_LIST, {})
      .then((res) => {
        let data = res.data;
        this.setData({
          isUniversity: false,
          subjectList: data
        })

      })
  },
  // 点亮院校星星
  storeStartUniversity(e) {
    // console.log(e)
    let data = this.data.universityList;
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;

    HTTP.post(STORE_START_UNIVERSITY, { 'collectionId': id })
      .then((res) => {
        if (data[index].isLight == 1) {
          data[index].isLight = 2
        }else {
          data[index].isLight = 1
        }
        this.setData({
          universityList: data
        })
        // this.getCollectUniversityList();
      })
  },
  // 点亮专业星星
  storeStartSubject(e) {
    let data = this.data.subjectList;
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    let key = e.currentTarget.dataset.key;
    console.log(e)
    HTTP.post(STORE_START_SUBJECT, { 'collectionId': id })
      .then((res) => {
        if (data[key][index].isLight == 1) {
          data[key][index].isLight = 2
        } else {
          data[key][index].isLight = 1
        }
        this.setData({
          subjectList: data
        })

      })
  },
  goPcUrl() {
    let pcUrl = this.data.pcUrl;
    wx.setClipboardData({
      data: pcUrl,
      success: function (res) {
        wx.showModal({
          title: pcUrl,
          content: '复制成功，可发送至pc端打开',
          showCancel: false
        });
      }
    })
  }

})