// miniprogram/pages/tuance/newSelectSubjects/balance1/balance1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc1:'https://m.xuematech.com/applet/img/tuance/xuanke/icon_dianliang.png',
    imgSrc2:'https://m.xuematech.com/applet/img/tuance/xuanke/icon_weidianliang.png',
    res: ['没有影响', '较为不重要', '一般', '重要','非常重要'],
    listData:[
     // 影响因素，权重，物理，化学，生物，思想政治，历史，地理，技术, 学科兴趣，背景图
                { influenceFactor: '1', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我对这门学科感兴趣', numbers: '01' },
                { influenceFactor: '2', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '这门学科与我的能力相匹配', numbers: '02' },
                { influenceFactor: '3', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我在这门学科上的成绩好', numbers: '03' },
                { influenceFactor: '4', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我有信心学好这门学科', numbers: '04' },
                { influenceFactor: '5', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我喜欢这门学科的老师', numbers: '05' },
                { influenceFactor: '6', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '学校在这门学科上的师资、资源有竞争力', numbers: '06' },
                { influenceFactor: '7', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '家人建议我选这门学科', numbers: '07' },
                { influenceFactor: '8', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '教师建议我选这门学科', numbers: '08' },
                { influenceFactor: '9', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '朋友建议我选这门学科', numbers: '09' },
                { influenceFactor: '10', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '大部分同学都选了这门学科', numbers: '10' },
                { influenceFactor: '11', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我的目标专业要求必须选择这门学科', numbers: '11' },
                { influenceFactor: '12', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考感兴趣的专业', numbers: '12' },
                { influenceFactor: '13', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考我有潜力学好的专业', numbers: '13' },
                { influenceFactor: '14', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '我可以报考主流热门专业', numbers: '14' },
                { influenceFactor: '15', influenceFactorWeight: '2', subjectPhysics: '0', subjectChemistry: '0', subjectBiological: '0', subjectIdeologicalPolitics: '0', subjectHistory: '0', subjectGeography: '0', subjectTechnology: '0', titles: '有利于我将来从事的职业', numbers: '15' },
    ]
  },
  //点击切换权重
  tab:function(e){
    console.log(e.currentTarget.dataset)
    let { index, i} = e.currentTarget.dataset;
    let listData=this.data.listData;
    listData[index]['influenceFactorWeight']=i;
    this.setData({
      listData:listData
    })
  },
  //跳到下一步
  next(){
    wx.navigateTo({
      url: '/pages/tuance/newSelectSubjects/balance2/balance2',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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