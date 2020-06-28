// miniprogram/pages/matchingSchools/matchingSchools.js
import { goLogin } from '../../utils/login.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageYuanxiao:'../../images/matchingSchools/icon_xiala2.png',
    imageDaxue:'../../images/matchingSchools/icon_xiala2.png',
    flagYuanxiao:false,
    flagDaxue:false,
    diqu: [ 
            { names: '全国', value: false },
            { names: '北京', value: '北京' },
            { names: '天津', value: '天津' },
            { names: '上海', value: '上海' },
            { names: '重庆', value: '重庆' },
            { names: '河北', value: '河北' },
            { names: '河南', value: '河南' },
            { names: '云南', value: '云南' },
            { names: '辽宁', value: '辽宁' },
            { names: '黑龙江', value: '黑龙江' },
            { names: '湖南', value: '湖南' },
            { names: '安徽', value: '安徽' },
            { names: '山东', value: '山东' },
            { names: '新疆', value: '新疆' },
            { names: '江苏', value: '江苏' },
            { names: '浙江', value: '浙江' },
            { names: '江西', value: '江西' },
            { names: '湖北', value: '湖北' },
            { names: '广西', value: '广西' },
            { names: '甘肃', value: '甘肃' },
            { names: '山西', value: '山西' },
            { names: '陕西', value: '陕西' },
            { names: '吉林', value: '吉林' },
            { names: '福建', value: '福建' },
            { names: '贵州', value: '贵州' },
            { names: '内蒙古', value: '内蒙古' },
            { names: '广东', value: '广东' },
            { names: '青海', value: '青海' },
            { names: '西藏', value: '西藏' },
            { names: '四川', value: '四川' },
            { names: '宁夏', value: '宁夏' },
            { names: '海南', value: '海南' }
      ],
    daxue: [
          { names: '不限', value: false },
          { names: '综合类', value: '综合类' },
          { names: '理工类', value: '理工类' },
          { names: '师范类', value: '师范类' },
          { names: '农林类', value: '农林类' },
          { names: '政法类', value: '政法类' },
          { names: '医药类', value: '医药类' },
          { names: '财经类', value: '财经类' },
          { names: '民族类', value: '民族类' },
          { names: '语言类', value: '语言类' },
          { names: '艺术类', value: '艺术类' },
          { names: '体育类', value: '体育类' },
          { names: '军事类', value: '军事类' }
    ],
    artsAndScience: '理工',
    scoreProvince: '北京',
    averageScore:600,
    high: 1,
    low: 1,
    listData:[],
    serachflag:true
  },
  //院校地区点击切换隐藏
  clickYuanxiaoShow:function(e){
    this.setData({
      flagDaxue: false,
      imageDaxue: '../../images/matchingSchools/icon_xiala2.png'
    })
    if (this.data.flagYuanxiao){
      this.setData({
        flagYuanxiao:false,
        imageYuanxiao: '../../images/matchingSchools/icon_xiala2.png'
      })
    }else{
      this.setData({
        flagYuanxiao: true,
        imageYuanxiao:'../../images/matchingSchools/icon_shangla.png'
      })
    }
  },
  //大学类别点击切换隐藏
  clickDaxueShow: function (e) {
    this.setData({
      flagYuanxiao: false,
      imageYuanxiao: '../../images/matchingSchools/icon_xiala2.png'
    })
    if (this.data.flagDaxue) {
      this.setData({
        flagDaxue: false,
        imageDaxue: '../../images/matchingSchools/icon_xiala2.png'
      })
    } else {
      this.setData({
        flagDaxue: true,
        imageDaxue: '../../images/matchingSchools/icon_shangla.png'
      })
    }
  },
  //院校地区点击改变状态
  clickYuanxiao:function(e){
    let arr=e.currentTarget.dataset.value.split(',');
    let diqu=this.data.diqu;
    if(arr[0]!='全国'){
      if (arr[0] == arr[1]) {
        let curMenu = "diqu[" + arr[2] + "].value";
        this.setData({
          ['diqu[0].value']: diqu[0].names,
          [curMenu]: false,
        })
      } else {
        let curMenu = "diqu[" + arr[2] + "].value";
        this.setData({
          [curMenu]: arr[0]
        })
      }
    }else{
      diqu.forEach(item => {
        item.value = item.names;
      })
      this.setData({
        diqu: diqu
      })
      let curMenu = "diqu[" + arr[2] + "].value";
      this.setData({
        [curMenu]: false
      })
    } 
  },
  //大学类别点击改变状态
  clickDaxue: function (e) {
    let arr = e.currentTarget.dataset.value.split(',');
    let daxue=JSON.parse(JSON.stringify(this.data.daxue))
    daxue.forEach(item=>{
      item.value=item.names;
    })
    this.setData({
      daxue: daxue
    })
      let curMenu = "daxue[" + arr[2] + "].value";
      this.setData({
        [curMenu]: false
      })
  },
  //筛选确定匹配院校
  fixSubmit(){
    this.setData({
      low:1,
      high:1
    })
    this.submit();
  },
  //请求匹配院校
  submit:function(){
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      flagDaxue: false,
      imageDaxue: '../../images/matchingSchools/icon_xiala2.png'
    })
    this.setData({
      flagYuanxiao: false,
      imageYuanxiao: '../../images/matchingSchools/icon_xiala2.png'
    })
    let scoreProvince=this.data.scoreProvince;
    let artsAndScience=this.data.artsAndScience;
    let averageScore=this.data.averageScore;
    let high=this.data.high;
    let low=this.data.low;
    let type;
    let province=[];
    this.data.daxue.forEach(item=>{
      if(!item.value){
        type=item.names
        return;
      }
    })
    this.data.diqu.forEach(item=>{
      if(item.names!='全国'){
        if (!item.value){
          province.push(item.names);
        }
      }  
    })
    let _this=this;
    wx.request({
      url: wx.getStorageSync('config').matchingScholls,
      method: 'post',
      data: {
        scoreProvince: scoreProvince,
        artsAndScience: artsAndScience,
        averageScore: averageScore,
        high:this.data.high,
        low:this.data.low,
        type: type == '不限' ? [] : [type],
        province: province.length == 31 ? [] : province
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            listData:data.data.data
          })
          console.log(data.data.data)
          if(data.data.data.length==0){
            _this.setData({
              serachflag: false
            })}else{
              _this.setData({
                serachflag: true
              })
            }
          wx.hideLoading()
        } else if (data.data.code == 2026) {
          wx.reLaunch({
            url: '/pages/login/perfectInformation',
          })
        } else {
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.getStorageSync('token')) {
      goLogin()
        .then(() => {
          this.onLoad(options);
        })
      return;
    }
    this.setData({
      artsAndScience: options.artsAndScience,
      scoreProvince: options.scoreProvince,
      averageScore: options.averageScore
    })
    this.submit();
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
    this.setData({
      high:this.data.high+1
    })
    this.submit();
    wx.stopPullDownRefresh(); 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.setData({
        low: this.data.low + 1
      })
      this.submit();
    wx.stopPullDownRefresh(); 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})