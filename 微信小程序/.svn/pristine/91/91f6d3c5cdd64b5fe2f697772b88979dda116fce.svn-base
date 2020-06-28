import HTTP from '../../utils/httpRequest.js'
import { GET_APPLET_ARTICLE_DETAIL } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:""
  }, 
  getArticleDetail(id) {
    var id = id;
    HTTP.post(GET_APPLET_ARTICLE_DETAIL, { 'id': id})
      .then((res) => {
        console.log(res);
        let content = res.data.content;
        content = content.replace(/<img/gi, '<img style="max-width:100%;height:auto;float:left;display:block" ');
        content = content.replace(/background\-color\: rgb\(255, 255, 255\);/gi, 'background-color:transparent;');
        this.setData({
          content: content
        })

      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    this.getArticleDetail(options.id);
    //decodeURIComponent()
    // this.setData({
    //   content: decodeURIComponent(options.content)
    // })

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