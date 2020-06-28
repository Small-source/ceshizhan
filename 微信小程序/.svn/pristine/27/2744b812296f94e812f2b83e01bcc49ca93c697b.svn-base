// pages/newSelectSubjects/newSelectSubjects.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_USER_INFO, START_TEST_EVALUATION, GET_PCURL_BY_AGENT_ID } from '../../../utils/configAPI.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pcUrl: '',
    code: '',
    province: '',
    isShowUrl: true,
    pcDetail: [
      { imgUrl: 'https://m.xuematech.com/applet/img/newSelectSubjects/icon_01.png', title: '专业的选科流程'
, detail: '基于生涯规划理念进行选科，测评定位职业，职业匹配专业，专业指导选科。' },
      { imgUrl: 'https://m.xuematech.com/applet/img/newSelectSubjects/icon_02.png', title: '完备的数据支持', detail: '具有完备的学校、专业、职业等数据，支持由专业进行选科和由选科查询专业的多种功能' },
      { imgUrl: 'https://m.xuematech.com/applet/img/newSelectSubjects/icon_03.png', title: '全面的选科方式', detail: '系统支持6选3、7选3、3+1 + 2等多种选科方式，学生可根据实际需要个性化选择选科方式。'},
      { imgUrl: 'https://m.xuematech.com/applet/img/newSelectSubjects/icon_04.png', title: '可靠的选科结果', detail: '系统综合学生决策加权的结果，学科可报专业覆盖率等数据为学生提供选科建议，选科结果可靠。' }
    ],
    fenlei: [
      {
        title: '360选科', detail: ['经过全方位测评和多维考量，提供科学选科方案', '包含生涯测评、目标专业选科要求查询、决策平衡单、生成选科结果功能'
] },
      {
        title: '根据专业选科目', detail: ['针对已测评学生，提供科学选科方案', '包含目标专业选科要求查询、决策平衡单、生成选科结果功能'

] },
      { title: '专业科目要求查询', detail: ['根据自己的所选专业，快速查询院校专业的选科要求'] },
      {
        title: '科目可报专业查询', detail: ['根据选考科目，学生可查询符合选科的高校和专业情况，以供学生在选科时做参考。'
] },
    ]
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
    let province = wx.getStorageSync('province');
    if (province) {
      this.setData({
        province: province
      })
    }else {
      this.getCity();
    }
    this.startTestEvaluation();
    this.getPcUrlByAgentId();
  },
  getPcUrlByAgentId() {
    let a = wx.getStorageSync('a')
    HTTP.post(GET_PCURL_BY_AGENT_ID, { 'a': a })
      .then((res) => {
        let pcUrl = res.data.url;
        this.setData({
          pcUrl: pcUrl
        })
      })
  },
  getCity() {
    HTTP.post(GET_USER_INFO, {})
      .then((res) => {
        let province = res.data.province;
        this.setData({
          province: province
        })
      })
  },
  startTestEvaluation() {
    // 测评进度: 1是测评第一次测试  2测评继续测试  3测评测试完成  4到选科组合页
    HTTP.post(START_TEST_EVALUATION, {})
      .then((res) => {
        let code = res.data.code;
        this.setData({
          code: code
        })
      })
  },
  goSelect() {
    let code = this.data.code;
    if(code == 3) {
      wx.navigateTo({
        url: '/pages/newSelectSubjects/selectTargetMajor1/selectTargetMajor1',
      })
    } else if (code == 4) {
      wx.navigateTo({
        url: '/pages/newSelectSubjects/generateSubjectPlan/generateSubjectPlan',
      })
    }else {
      wx.navigateTo({
        url: '/pages/professionalPositioningTest/professionalPositioningTest',
      })
    }
  },
  changeIsShow() {
    let isShowUrl = this.data.isShowUrl;
    let pcUrl = this.data.pcUrl;
    this.setData({
      isShowUrl: !isShowUrl
    })
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
    // wx.setClipboardData({
    //   data: pcUrl,
    //   success(res) {
    //     wx.getClipboardData({
    //       success(res) {
    //         console.log(res.data) // data
    //       }
    //     })
    //   }
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