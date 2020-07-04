// pages/gaokaobaike/gaokaobaikeDetail.js
import HTTP from '../../utils/httpRequest.js'
import { GET_ARTICLE_DETAIL } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    HTTP.post(GET_ARTICLE_DETAIL, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          content: data
        })
      })

  },




  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})