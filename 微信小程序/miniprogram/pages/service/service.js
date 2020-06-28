// pages/service/service.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_AGENT_INFO } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agentInfo: null,
    cardData: [
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_huhangjihua.png', title: '护航计划', detail: ['提供新高考背景下升学一站式解决方案，包含新高考选科、强基/综评多元升学、学业规划、志愿填报等。'] },
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_zhiyuantianbao.png', title: '志愿填报', detail: ['量身打造科学的志愿填报方案，100%录取，填报零失误'] },
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_360xuanke.png', title: '生涯测评与选科', detail: ['解决学生的选科问题，规划专业和职业发展方向'] },
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_qiangjijihua.png', title: '强基与综评', detail: ['增加名校升学通路，提供全方位服务，包含规划方案、背景提升指导、高校申请、笔面试训练等'] },
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_shengyaceping.png', title: '学业规划', detail: ['收集学生在学习中的问题，进行对应的主题训练，培养学生自学能力，最终实现成绩提高。'] },
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_kechengxuexika.png', title: '课程学习卡', detail: ['基础课程', '专项拔高课程', '高考真题讲解'] },
      { imgUrl: 'https://m.xuematech.com/applet/img/service/icon_xuekezhenduan.png', title: '学科诊断', detail: ['试卷、成绩、排名、知识点和能力五大分析，帮助学生高效制定提分策略，精准生成个性化题集。'] }
    ]
  },
  // 获取招生简章列表
  getAgentInfo(id) {
    HTTP.post(GET_AGENT_INFO, {
      // a是代理商id 不传值 按20 学马生涯走
      a: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          agentInfo: data
        })

      })
  },
  callPhone() {
    let phone = this.data.agentInfo.serviceTel;
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.getStorageSync('token')) {
      GO_LOGIN()
        .then(() => {
          this.onLoad()
        })
      return;
    }
    let id = wx.getStorageSync("a")
    this.getAgentInfo(id);
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