// pages/professionalLibrary/professionalLibrary.js
import { goLogin } from '../../utils/login.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 本科学科门类
    discipline1: [
      { names: '哲学', value: '1' },
      { names: '经济学', value: '7' },
      { names: '法学', value: '33' },
      { names: '教育学', value: '77' },
      { names: '文学', value: '100' },
      { names: '历史学', value: '206' },
      { names: '理学', value: '215' },
      { names: '工学', value: '267' },
      { names: '农学', value: '495' },
      { names: '医学', value: '531' },
      { names: '管理学', value: '599' },
      { names: '艺术学', value: '662' },
      { names: '军事学', value: '1598' },
    ],
    // 专科学科门类 
    discipline2: [
      { names: '农林牧渔大类', value: '710' },
      { names: '资源环境与安全大类', value: '768' },
      { names: '能源动力与材料大类', value: '846' },
      { names: '土木建筑大类', value: '905' },
      { names: '水利大类', value: '945' },
      { names: '装备制造大类', value: '966' },
      { names: '生物与化工大类', value: '1039' },
      { names: '轻工纺织大类', value: '1059' },
      { names: '食品药品与粮食大类', value: '1097' },
      { names: '交通运输大类', value: '1126' },
      { names: '电子信息大类', value: '1200' },
      { names: '医药卫生大类', value: '1246' },
      { names: '财经商贸大类', value: '1303' },
      { names: '旅游大类', value: '1362' },
      { names: '文化艺术大类', value: '1378' },
      { names: '新闻传播大类', value: '1442' },
      { names: '教育与体育大类', value: '1468' },
      { names: '公安与司法大类', value: '1523' },
      { names: '公共管理与服务大类', value: '1573' }
    ],
    benKeFlag:true,
    zhuanKeFlag:false,
    currentIndex1:0,
    currentIndex2:0,
    benKeData:[],
    zhuanKeData:[],
    xiala:'../../images/professionalLibrary/icon_xiala.png',
    shouqi:'../../images/professionalLibrary/icon_shouqi.png',
    benKeIndex:'0',
    benKeIndexMain:'0',
    toView:'inToView0',
    searchName:'',
    searchData:[],
    searchFlag:false
  },
  benKe:function(){
    if(!this.data.benKeFlag){
      this.setData({
        benKeFlag:true,
        zhuanKeFlag:false,
        searchFlag:false
      })
    }
  },
  zhuanKe:function(){
    if (!this.data.zhuanKeFlag) {
      this.setData({
        benKeFlag: false,
        zhuanKeFlag: true,
        searchFlag: false
      })
    }
  },
  //本科专业切换
  benKeTab:function(e){
    this.setData({
      currentIndex1:e.currentTarget.dataset.index
    })
    var index = e.target.dataset.index
    this.setData({
      toView: 'inToView'+index
    }) 
  },
  //专科专业切换
  zhuanKeTab:function(e){
    this.setData({
      currentIndex2:e.currentTarget.dataset.index
    })
    var index = e.target.dataset.index
    this.setData({
      toView: 'inToView' + index
    })
  },
  //专业数据
  zhuanyeData:function(e){
    wx.showLoading({
      title: '加载中',
    })
    let _this=this
    wx.request({
      url: wx.getStorageSync('config').zhuanYeku.zhuanyeClass,
      method: 'post',
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            benKeData: data.data.data.undergraduate,
            zhuanKeData: data.data.data.specialty
          })
          _this.dataChange();
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
  //数据改变
  dataChange:function(){
    let benKeData=this.data.benKeData;
    let zhuanKeData = this.data.zhuanKeData;
    let searchData = this.data.searchData;
    benKeData.forEach(items=>{
      for(var key in items.list){
        items.list[key].showFlag=true
        var lists=items.list[key].list
          for(var ky in lists){
            items.list[key].length = Object.keys(lists).length
          }
      }
    })
    zhuanKeData.forEach(items => {
      for (var key in items.list) {
        items.list[key].showFlag = true
        var lists = items.list[key].list
        for (var ky in lists) {
          items.list[key].length = Object.keys(lists).length
        }
      }
    })
    if (searchData.length>0){
      searchData.forEach(items => {
          items.showFlag = true
        var lists = items.list
        for (var ky in lists) {
          items.length = Object.keys(lists).length
        }
      })
    }
    this.setData({
      benKeData:benKeData,
      zhuanKeData:zhuanKeData,
      searchData: searchData
    })
  },
  //本科三级菜单切换
  tabBenke: function (e) {
    let idx=e.currentTarget.dataset.idx;
    let index = e.currentTarget.dataset.index
    let benKeData = this.data.benKeData;
    let curMenu = "benKeData [" + idx + "].list["+index+"].showFlag";
    if (e.currentTarget.dataset.bool){
      benKeData[idx].list[index].showFlag = false;
    }else{
      benKeData[idx].list[index].showFlag = true;
    }
    this.setData({
      benKeData:benKeData
    })
  },
  //专科三级菜单切换
  tabZhuanke: function (e) {
    let idx = e.currentTarget.dataset.idx;
    let index = e.currentTarget.dataset.index
    let zhuanKeData = this.data.zhuanKeData;
    let curMenu = "zhuanKeData [" + idx + "].list[" + index + "].showFlag";
    if (e.currentTarget.dataset.bool) {
      zhuanKeData[idx].list[index].showFlag = false;
    } else {
      zhuanKeData[idx].list[index].showFlag = true;
    }
    this.setData({
      zhuanKeData: zhuanKeData
    })
  },
  //搜索区域三级菜单切换
  tabSearch(e){
    let index = e.currentTarget.dataset.index
    let zhuanKeData = this.data.searchData;
    let curMenu = "zhuanKeData[" + index + "].showFlag";
    if (e.currentTarget.dataset.bool) {
      zhuanKeData[index].showFlag = false;
    } else {
      zhuanKeData[index].showFlag = true;
    }
    this.setData({
      searchData: zhuanKeData
    })
  },
  //搜索数据
  search: function (e) {
    this.setData({
      benKeFlag: false,
      zhuanKeFlag: false
    })
    wx.showLoading({
      title: '加载中',
    })
    let serachName = this.data.searchName;
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').zhuanYeku.searchSubject,
      method: 'post',
      data: {
        name: serachName,
        type:'1'
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            searchData: data.data.data,
            searchFlag: true
          })
          _this.dataChange();
          wx.hideLoading()
        } else {
        }
      }
    })
  },
  //获取input输入框内容
  setSearchName(e){
    this.setData({ searchName: e.detail.value })
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
    this.zhuanyeData();
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