// pages/professionalPositioningTest/professionalPositioningTest.js
import { goLogin } from '../../utils/login.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
      text1:'第一部分',
      text2:'人格特性',
      number:1,
      total:'',
      questions:[],
      answers: [],
      startTime: '',
      endTime: '',
      number2:1,
      total2:'',
      answers2:[],
      questions2:[],
      startTime2: '',
      finish:false,
      resultData:[],
      first:true,
      numberArr:[],
      numberArr2:[],
      timeFlag:true,
      testCode: '',
      homeFlag:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.getStorageSync('tuanceToken')) {
      goLogin()
        .then(() => {
          this.onLoad(options)
        })
      return;
    }
    if(options.homeFlag){
      this.setData({
        homeFlag:false
      })
    }
    this.cePingJinDu();
  },
  /**
  * 数组随机排序
  */
  randomSort:function (a, b) {
    return Math.random() > 0.5 ? -1 : 1;
  },
  //获取测评进度
  cePingJinDu:function(){
    // this.tuijian();
    // return
    let _this=this;
      wx.showLoading({
          title: '加载中',
      })
      wx.request({
        url: wx.getStorageSync('config').tuance.cepingjindu,
          method: 'post',
          data: {

          },
          header: {
              'token': wx.getStorageSync('tuanceToken')
          },
          success: function (data) {
              if (data.data.code == 2000) {
                  wx.setStorageSync("testId", data.data.data.testId)
                  _this.setData({
                    testCode: data.data.data.code
                  })
                if (data.data.data.code==1){
                    _this.createTest();
                    _this.xgtxList();
                }
                if(data.data.data.code==2){
                  _this.goonTest();
                } 
                if (data.data.data.code >= 3) {
                  _this.tuijian();
                  wx.hideLoading()
                
                }  
              } else if (data.data.code == 2026) {
                wx.reLaunch({
                  url: '/pages/login/perfectInformation',
                })
              }else {
              }
          }
      })
  },
  //创建测试
  createTest:function(){
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.createTest,
      method: 'post',
      data: {
        type:1,
        serial_no:wx.getStorageSync("testId"),
        cognition_order: "[1,2,3,4,5,6,7,8,9,10,11,12,13]"
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
      }
    })
  },
  // 继续测试
  goonTest: function () {
    let _this=this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.goonTest,
      method: 'post',
      data: {
        test_id: wx.getStorageSync("testId"),
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if(data.data.code=='0'){
           if(data.data.result.module==0){
             _this.xgtxList();
           }
           if(data.data.result.module==1){
             _this.xqqx();
           }
        }
      }
    })
  },
  //人格特性试题列表
  xgtxList:function(){
      let _this=this;
      wx.showLoading({
          title: '加载中',
      })
      wx.request({
          url: wx.getStorageSync('config').zhuanYeDingWei.xgtx,
          method: 'post',
          header: {
            'token': wx.getStorageSync('tuanceToken')
          },
          success: function (data) {
              if (data.data.code == 0) {
                _this.setData({
                    questions:data.data.result,
                    total:data.data.result.length,
                })
                _this.xgtxCeHuang()
              } else {
              }
          }
      })
  },
  //人格特性测谎题列表
  xgtxCeHuang:function(){
      let _this=this
      wx.request({
          url: wx.getStorageSync('config').zhuanYeDingWei.xgtxCeHuang,
          method: 'post',
          data: {
              paper: 2
          },
          header: {
              'token': wx.getStorageSync('tuanceToken')
          },
          success: function (data) {
              if (data.data.code == 0) {
                let total=_this.data.total;
                let questions = [..._this.data.questions, ...data.data.result].sort(_this.randomSort);
                let numberArr = _this.data.numberArr;
                  for (var i = 1; i <= data.data.result.length + total; i++) {
                    numberArr[i] = [];
                    numberArr[i][0] = false;
                    numberArr[i][1] = false;
                  }
                  _this.setData({
                      total:data.data.result.length+total,
                      questions:questions,
                      numberArr:numberArr
                  })

                  wx.hideLoading()
              } else {
              }
          }
      })
  },
  // 切换人格特性题目
  TabTitle:function(e){
    if(!this.data.timeFlag){
      return;
    }
    this.setData({
      timeFlag:false
    })
    let numberArr=this.data.numberArr;
    numberArr[this.data.number][e.currentTarget.dataset.index]=true;
    this.setData({
      numberArr: numberArr
    })
    setTimeout(()=>{
      if (this.data.number == 1) {
        this.setData({
          startTime: new Date().getTime()
        })
      }
      if (e.currentTarget.dataset.answer) {
        this.xgtxCeHuangSubmit(e.currentTarget.dataset.id, e.currentTarget.dataset.answer)
      } else {
        let answers = this.data.answers;
        answers.push(
          {
            question_id: e.currentTarget.dataset.id,
            paper: e.currentTarget.dataset.paper,
            answer: e.currentTarget.dataset.order
          }
        )
        this.setData({
          answers: answers
        })
      }
      let number = this.data.number + 1
      if (number > this.data.total) {
        this.xgtxSubmit();
      }
      this.setData({
        number: number,
        timeFlag: true
      })
    },300)
   
  },
  //人格特性测谎题提交
  xgtxCeHuangSubmit:function(id,answer){
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.xgtxCeHuangSubmit,
      method: 'post',
      data: {
        question_id:id,
        answer: answer,
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 0) {
         
        } else {
        }
      }
    })
  },
  //人格特性提交
  xgtxSubmit: function () {
    let _this=this
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.xgtxSubmit,
      method: 'post',
      data: {
        time: Number(new Date().getTime()) - Number(this.data.startTime),
        answers: JSON.stringify(this.data.answers),
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 0) {
            _this.saveNode(1)
             _this.xqqx();
             _this.setData({
               timeFlag:true
             })
        } else {
        }
      }
    })
  },
  //兴趣倾向列表
  xqqx:function(){
    wx.showLoading({
      title: '加载中',
    })
    let _this=this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.xqqx,
      method: 'post',
      data: {
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 0) {
          let numberArr2 = _this.data.numberArr2;
          for (var i = 1; i <= data.data.result.length; i++) {
            numberArr2[i] = [];
            numberArr2[i][0] = false;
            numberArr2[i][1] = false;
          }
          _this.setData({
            questions2: data.data.result,
            total2: data.data.result.length,
            numberArr2:numberArr2
          })
          wx.hideLoading();
        } else {
        }
      }
    })
  },
  //切换兴趣倾向题目
  TabTitle2: function (e) {
    if (!this.data.timeFlag) {
      return;
    }
    this.setData({
      timeFlag: false
    })
    let numberArr2= this.data.numberArr2;
    numberArr2[this.data.number2][e.currentTarget.dataset.index] = true;
    this.setData({
      numberArr2: numberArr2
    })
    setTimeout(()=>{
      if (this.data.number2 == 1) {
        this.setData({
          startTime2: new Date().getTime()
        })
      }
      let answers2 = this.data.answers2;
      answers2.push(
        {
          question_id: e.currentTarget.dataset.id,
          paper: e.currentTarget.dataset.paper,
          answer: e.currentTarget.dataset.order
        }
      )
      this.setData({
        answers2: answers2
      })
      let number = this.data.number2 + 1
      if (number > this.data.total2) {
        this.xqqxSubmit();
      }
      this.setData({
        number2: number,
        timeFlag: true
      })
    },300)
  },
  //兴趣倾向提交
  xqqxSubmit:function(){
    let _this=this
      wx.request({
        url: wx.getStorageSync('config').zhuanYeDingWei.xqqxSubmit,
        method: 'post',
        data: {
          time: Number(new Date().getTime()) - Number(this.data.startTime2),
          answers: JSON.stringify(this.data.answers2),
        },
        header: {
          'token': wx.getStorageSync('tuanceToken')
        },
        success: function (data) {
          if (data.data.code == 0) {
            _this.makeOver();
            _this.setData({
              finish:true
            })
          } else {
          }
      }
      })
  },
  // 标记测试完成
  makeOver:function(){
    let _this=this
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.makeOver,
      method: 'post',
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 0) {
           _this.tuijian();
        } else {
        }
      }
    })
  },
  //保存测试进度
  saveNode:function(module){
    let _this=this;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.saveNode,
      method: 'post',
      data:{
        module: module, // 1-性格特性，2-认知潜能，3-兴趣倾向，4-心理健康
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == 0) {
        
        } else {
        }
      }
    })
  },
  //获取推荐专业
  tuijian:function(){
    this.setData({
      finish: true,
    })
    return;
    wx.showLoading({
      title: '加载中',
    })
    let _this=this;
    let number=0,t;
    wx.request({
      url: wx.getStorageSync('config').zhuanYeDingWei.tuijian,
      method: 'post',
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if(data.data.code==2000){
          if (data.data.data.length == 0){
    
          }else{
            _this.setData({
              finish:true,
              resultData:data.data.data
            })
            clearInterval(t)
            wx.hideLoading()
          }
        }else{
          t=setInterval(function(){
            number++;
            if(number<6){
              _this.tuijian();
              wx.hideLoading();
            }
          },1000)
        }
      }
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
