// pages/selectTargetMajor/selectTargetMajor2.js
import HTTP from '../../../utils/httpRequest.js'
import { GET_SUBJECT_CATEGORY_LIST, STORE_SELECTION_DECISION } from '../../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: '',
    winHeight: '',
    searchValue: '', 
    isShowHad: true,
    isSearching: false,
    checkMajor2: [],
    typeId: '1',
    // 本科学科门类
    discipline: [
      { names: '哲学', value: '1', code: '01' },
      { names: '经济学', value: '7', code: '02' },
      { names: '法学', value: '33', code: '03' },
      { names: '教育学', value: '77', code: '04' },
      { names: '文学', value: '100', code: '05' },
      { names: '历史学', value: '206', code: '06' },

      { names: '理学', value: '215', code: '07' },
      { names: '工学', value: '267', code: '08' },
      { names: '农学', value: '495', code: '09' },
      { names: '医学', value: '531', code: '10' },
      { names: '管理学', value: '599', code: '12' },
      { names: '艺术学', value: '662', code: '13' },
      { names: '军事学', value: '1598', code: '11' }
    ],
    cData: [],
    schoolArr: [],
    searhResults: []
  },
  addMajor(e) {
    let arr = this.data.checkMajor2;
    let obj = {};
    obj.subjectId = e.target.dataset.id;
    obj.subjectName = e.target.dataset.name;
    obj.type = 4;
    arr.push(obj);
    this.setData({
      checkMajor2: arr
    })
  },
  removeMajor(e) {
    let id = e.target.dataset.id;
    let arr = this.data.checkMajor2;
    arr = arr.filter(function (item, index, arr) {
      return item.subjectId != id;
    })
    this.setData({
      checkMajor2: arr
    })
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
  // 获取专业
  getSubjectCategoryList() {
    wx.showLoading({
      title: '加载中',
    })
    let id = this.data.typeId;
    HTTP.post(GET_SUBJECT_CATEGORY_LIST, 
      { 
        'type': 1,
        'firstId': id
      }
    )
      .then((res) => {
        wx.hideLoading();
        let data = res.data;
        let arr = [];
        for (let i = 0; i < data.length; i++) {
          arr[i] = i;
        }
        this.setData({
          cData: data,
          schoolArr: arr
        })
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
    if (value.length<1) {
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
  // 搜索专业
  query(value) {
    // let value = this.data.searchValue;
    HTTP.post(GET_SUBJECT_CATEGORY_LIST,
      {
        'type': 1,
        'name': value
      }
    )
      .then((res) => {
        let data = res.data;
        this.setData({
          searhResults: data,
        })
      })
  },
  changeData(e) {
    console.log(e);
    let id = e.target.dataset.typeid;
    this.setData({
      typeId: id
    })
    this.getSubjectCategoryList();
  },
  changeSchoolArr(e) {
    let idx = e.currentTarget.dataset.idx;
    let schoolArr = this.data.schoolArr;
    if (schoolArr[idx] == idx) {
      schoolArr[idx] = '空';
      this.setData({
        schoolArr: schoolArr
      })
    } else {
      schoolArr[idx] = idx;
      this.setData({
        schoolArr: schoolArr
      })
    }
  },
  // 将选择的目标专业1,2发送给后台
  storeSelectionDecision(arr) {
    HTTP.post(STORE_SELECTION_DECISION,
      {
        'source': 4,
        'balance': [],
        'target': arr,
        'subjectName': []
      }
    )
    .then((res) => {
      wx.reLaunch({
        url: '/pages/newSelectSubjects/generateSubjectPlan/generateSubjectPlan',
      })
      // wx.navigateTo({
      //   url: '/pages/newSelectSubjects/generateSubjectPlan/generateSubjectPlan',
      // })
    })
  },
  goNext() {
    let arr2 = this.data.checkMajor2;
    if (arr2.length < 5) {
      wx.showToast({
        title: '请添加5~20个目标专业 ！',
        icon: 'none',
        duration: 2000
      })
    } else {
      // wx.setStorageSync('checkMajor2', arr2);
      let arr1 = wx.getStorageSync('checkMajor1');
      let arr = [...arr1,...arr2];
      this.storeSelectionDecision(arr);
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
    this.getSubjectCategoryList();
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