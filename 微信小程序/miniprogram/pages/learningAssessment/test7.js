// miniprogram/pages/learningAssessment/test7.js
let animateT;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    contentView:'none',
    daoNumber:3,
    fen:5,
    miao:'00',
    number:0,
    showNumber:[],
    cdata:[],
    total: 0,
    part: 0,
    nextPart:true,
    daoNumberFlag:true
  },
  // 界面初始化
  start:function(){
    var number=2;
    var _this=this;
    var t=setInterval(function(){
      if (number <0){
        clearInterval(t);
        _this.time();
        _this.setData({
          contentView: '',
          daoNumberFlag:false
        })
        return;
      }
      _this.setData({
        daoNumber:number
      })
      number--
    },1000)
    this.questionList();
  },
  //倒计时
  time:function(){
    var times = 300;
    animateT = setInterval(() => {
      times--;
      let miao = times % 60;
      this.setData({
        fen: Math.floor(times / 60),
        miao: miao < 10 ? "0" + miao : miao
      })
      if (times == 0) {
        this.submit();
        clearInterval(animateT);
      }
    }, 1000)
  },
  //获取试题
  questionList:function(){
    let _this=this;
    wx.request({
      url: wx.getStorageSync('config').xueXiCeping.question7,
      method: 'post',
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            cdata:data.data.data
          })
          _this.jisuan(_this.data.cdata[_this.data.number])
        } else {

        }
      }
    })
  },
  //返回数据进行计算
  jisuan:function(string){
    var arr = string.split("");
    var showNumber=[]
    for (var i = 0; i < arr.length - 1; i++) {
      if (Number(arr[i]) + Number(arr[i + 1]) == 10) {
          arr[i]=arr[i]+arr[i+1];
          showNumber.push({number:arr[i],bool:true,flag:false})
          i++
      }else{
        showNumber.push({ number: arr[i],bool:false,flag: false})
      }
    }
    this.setData({
      showNumber:showNumber
    })
  },
  //选中事件
  events(e){
    let {bool,flag,index}={...e.currentTarget.dataset}
    let showNumber=this.data.showNumber;
    if(bool&&!flag){
      showNumber[index].flag=true;
      this.setData({
        showNumber: showNumber,
        total: this.data.total + 1,
        part: this.data.part + 1
      })
    }
  },
  //切换下一组
  next(){
    let number=this.data.number;
    number++;
    this.jisuan(this.data.cdata[number])
    this.setData({
      part:0,
      number:number
    })
    if(number==199){
      this.setData({
        nextPart: false,
      })
    }
  },
  //提交试题
  submit(){
    wx.request({
      url: wx.getStorageSync('config').xueXiCeping.submit,
      method: 'post',
      data:{
        assessType: 7,
        answer: this.data.total,
        source: wx.getStorageSync('source')
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          let reportId = data.data.data.id;
          wx.navigateTo({
            url: '/pages/learningAssessment/testReport/testReport7?id=' + reportId,
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.start();
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
    clearInterval(animateT);
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