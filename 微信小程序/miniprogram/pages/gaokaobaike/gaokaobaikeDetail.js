// pages/gaokaobaike/gaokaobaikeDetail.js
import HTTP from '../../utils/httpRequest.js'
import { GET_ARTICLE_DETAIL } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
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
        let title = res.data.title;
        let content = res.data.content;

        // content = content.replace(/<td/g, '<td style="border: 1px solid #dedede;color: red;line-height: 40px;"');
        // console.log(content)
        // content = content.replace(/background\-color\: rgb\(255, 255, 255\);/gi, 'background-color:transparent;');

        this.setData({
          title: title,
          content: content
        })
      })

  },




  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})