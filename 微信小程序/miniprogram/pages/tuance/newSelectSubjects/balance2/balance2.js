// miniprogram/pages/tuance/newSelectSubjects/balance2/balance2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    listData:'',
    currentIndex:'01',
    imgSrc1: 'https://m.xuematech.com/applet/img/tuance/xuanke/icon_dianliang.png',
    imgSrc2: 'https://m.xuematech.com/applet/img/tuance/xuanke/icon_weidianliang.png',
    res: ['没有影响', '较为不重要', '一般', '重要', '非常重要'],
    fen:['-2','-1','0','1','2'],
    province: wx.getStorageSync('tuanceUserInfo').province,
    subjectArr: ['subjectPhysics', 'subjectChemistry', 'subjectBiological', 'subjectIdeologicalPolitics',
      'subjectHistory', 'subjectGeography','subjectTechnology']
  },

  //切换tab选项
  Tab(e){
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })
  },
  //更改分数
  tabfen(e){
    let { index, i ,it} = e.currentTarget.dataset;
    let listData = this.data.listData;
    let subjectArr = this.data.subjectArr;
    listData[index][subjectArr[i]]=it;
    this.setData({
      listData:listData
    })
  },
  //进行下一项
  nextCurrentIndex(){
    let currentIndex = this.data.currentIndex;
    let res=parseInt(currentIndex)+1
    let jieguo=res<10?'0'+res:''+res
    this.setData({
      currentIndex:jieguo
    })
    this.setData({
      x: (res-1) * 130+'rpx'
    })
  },
  submit:function(){
    wx.request({
      url: wx.getStorageSync('config').tuance.xuanke,
      method: 'post',
      data: {
        'source':5,
        'balance': this.data.listData,
        'target': wx.getStorageSync('checkMajorTotal'),
        'subjectName': []
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        wx.navigateTo({
          url: '/pages/tuance/newSelectSubjects/generateSubjectPlan/generateSubjectPlan',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listData: wx.getStorageSync('balance')
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