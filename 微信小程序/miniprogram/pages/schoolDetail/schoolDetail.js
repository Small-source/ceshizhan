// pages/schoolDetail/schoolDetail.js
import HTTP from '../../utils/httpRequest.js'
import { UNIVERSITY_DETAIL, GET_GROUP_BY_TIME_LIST } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: [],
    schoolId: '',
    jzList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  dataUpdate(id) {
    HTTP.post(UNIVERSITY_DETAIL, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          school: data
        })
      })
  },
  // 获取招生简章列表
  getJianZhangList(id) {
    HTTP.post(GET_GROUP_BY_TIME_LIST, {
      // id: id
      universityId: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          jzList: data
        })

      })
  },
  onLoad: function (options) {
    let id = options.schoolId;
    this.dataUpdate(id);
    this.getJianZhangList(id);
    this.setData({
      schoolId: id
    })
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