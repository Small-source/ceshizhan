// pages/collegeLibrary/collegeLibrary.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_UNIVERSITY_LIST  } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBox: [
      { value: '1', name: '学校地区', imgUrl1: '/images/common/icon_xialahui.png', imgUrl2: '/images/common/icon_shangla.png' },
      { value: '2', name: '大学类别', imgUrl1: '/images/common/icon_xialahui.png', imgUrl2: '/images/common/icon_shangla.png' },
      { value: '3', name: '特色标签', imgUrl1: '/images/common/icon_xialahui.png', imgUrl2: '/images/common/icon_shangla.png' }
    ],
    activeTabValue: 0,
    searchValue:'',
    // 地区
    diqu: ['北京', '天津', '上海', '重庆', '河北','河南', '云南', '辽宁', '黑龙江', '湖南','安徽', '山东', '新疆', '江苏', '浙江','江西', '湖北', '广西', '甘肃', '山西','内蒙古', '陕西', '吉林', '福建', '贵州','广东', '青海', '西藏', '四川', '宁夏','海南'],
    daxueleibie: [
      '综合类', '理工类', '师范类', '农林类', '政法类', '医药类', '财经类', '民族类', '语言类', '艺术类', '体育类','军事类'
    ],
    tesebiaoqian: [
      { name: '一流大学A类', value: '1' },
      { name: '一流大学B类', value: '2' },
      { name: '一流学科', value: '3' }
    ],
    province: [],//学校地区
    type: [],//大学类别
    tagShuangyiliu: [],// 双一流
    tag211: '',
    tag985: '',
    tagZhongdianxueke: '',
    tagTesezhuanye: '',
    tagBushenghejian: '',
    tagBaoyanzige: '',
    pageSize: 15,
    pageNumber: 1,
    count: 1,
    schoolList: []
  },
  searchChange(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },
  goSearch() {
    this.setData({
      province: [],//学校地区
      type: [],//大学类别
      tagShuangyiliu: [],// 双一流
      tag211: '',
      tag985: '',
      tagZhongdianxueke: '',
      tagTesezhuanye: '',
      tagBushenghejian: '',
      tagBaoyanzige: '',
      pageNumber: 1,
      schoolList: []

    })
    this.dataUpdate();
  },
  changeType(e) {
    let value = e.currentTarget.dataset.value;
    let nowTabValue = this.data.activeTabValue;
    if(value == nowTabValue) {
      this.setData({
        activeTabValue: 0
      })
    }else {
      this.setData({
        activeTabValue: value
      })
    }
  },
  checkChange(e) {
    let _this = this;
    let nowValue = e.target.dataset.tap;
    if (nowValue == '全国') {
      this.setData({
        province: []
      })
      return;
    }
    let oldData = this.data.province;
    let index = oldData.indexOf(nowValue);
    this.changeData(nowValue, oldData, index,'province');
  },
  checkAllTag() {
    this.setData({
      tagShuangyiliu: [],// 双一流
      tag211: '',
      tag985: '',
      tagZhongdianxueke: '',
      tagTesezhuanye: '',
      tagBushenghejian: '',
      tagBaoyanzige: ''
    })
  },
  checkChangeType(e) {
    let nowValue = e.target.dataset.tap;
    if (nowValue == '全部') {
      this.setData({
        type: []
      })
      return;
    }
    let oldData = this.data.type;
    let index = oldData.indexOf(nowValue);
    this.changeData(nowValue, oldData, index, 'type');
  },
  checkChangeTeseTag(e) {
    let nowValue = e.target.dataset.tap;
    let oldData = this.data.tagShuangyiliu;
    let index = oldData.indexOf(nowValue);
    this.changeData(nowValue, oldData, index, 'tagShuangyiliu');
  },
  checkChangeTagSmall(e) {
    let typeName = e.target.dataset.typename;
    let value = this.data[typeName];
    if(value) {
      this.setData({
        [typeName]: ''
      })
    }else {
      this.setData({
        [typeName]: '1'
      })
    }
  },
  changeData(nowValue,oldData,index,dataName) {
    if (index === -1) {
      oldData.push(nowValue);
      this.setData({
        [dataName]: oldData
      })
    } else {
      oldData.splice(index, 1);
      this.setData({
        [dataName]: oldData
      })
    }
  },
  goUpdate() {
    this.setData({
      activeTabValue: 0,
      schoolList: [],
      pageNumber: 1,
      searchValue: ''
    })
    this.dataUpdate();
  },
  dataUpdate() {
    wx.showLoading({
      title: '加载中',
    })
    HTTP.post(GET_UNIVERSITY_LIST, {
        province: this.data.province,
        type: this.data.type,
        tagShuangyiliu: this.data.tagShuangyiliu,
        tag211: this.data.tag211,
        tag985: this.data.tag985,
        tagZhongdianxueke: this.data.tagZhongdianxueke,
        tagTesezhuanye: this.data.tagTesezhuanye,
        tagBushenghejian: this.data.tagBushenghejian,
        pageNumber: this.data.pageNumber,
        pageSize: this.data.pageSize,
        name: this.data.searchValue
      })
      .then((res) => {
          let pageNumber = this.data.pageNumber;
          let resData = res.data.list;
          let oldlist = this.data.schoolList;
          let nowList = oldlist.concat(resData);
          let count = res.data.page.count;
          if (count == 0) {
            this.setData({
              schoolList: resData,
              count: count
            })
          }else {
            this.setData({
              schoolList: nowList,
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
    this.dataUpdate();
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
    
    let length = this.data.schoolList.length;
    let count = this.data.count;
    if (length == count) {
      return;
    }
    let number = this.data.pageNumber + 1;
    this.setData({
      pageNumber: number
    })
    this.dataUpdate();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})