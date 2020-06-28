import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { UNIVERSITY_DETAIL, GET_GROUP_BY_TIME_LIST } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cData: [],
    schoolArr:[]
  },
  changeSchoolArr(e) {
    let idx = e.currentTarget.dataset.idx;
    let schoolArr = this.data.schoolArr;
    if (schoolArr[idx] == idx) {
      schoolArr[idx] = 500;
      this.setData({
        schoolArr: schoolArr
      })
    }else {
      schoolArr[idx] = idx;
      this.setData({
        schoolArr: schoolArr
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  dataUpdate(id,idx) {
    HTTP.post(UNIVERSITY_DETAIL, {
      id: id
      // id: 1
    })
      .then((res) => {
        let data = res.data.facultyMajor;
        let arr = new Array(data.length);
        arr[idx] = idx;
        this.setData({
          cData: data,
          schoolArr: arr
        })
        this.scroll(idx);
      
      })
  },
  scroll(idx) {
    var elId = '#main' + idx;
    var me = this;
    var query = wx.createSelectorQuery().in(me);
    query.selectViewport().scrollOffset()
    query.select(elId).boundingClientRect();
    query.exec(function (res) {
      var miss = res[0].scrollTop + res[1].top - 10;
      wx.pageScrollTo({
        scrollTop: miss,
        duration: 300
      });

    });
  },
  onLoad: function (options) {
    if (!wx.getStorageSync('token')) {
      goLogin()
        .then(() => {
          this.onLoad(options)
        })
      return;
    }
    let id = options.schoolId;
    let idx = options.idx;
    this.dataUpdate(id,idx);
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