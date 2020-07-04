// miniprogram/pages/login/perfectInformation.js
import HTTP from '../../utils/httpRequest.js'
import { GET_MOBILE_OPEN_PROVINCE } from '../../utils/configAPI.js'
let areaList = require('../../utils/map.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    warning:'',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    gardes:[2020,2021,2022,2023,2024,2025],
    garde:0,
    nianji:'高三',
    school:'',
    name:'',
    sexs: [
      { name: '1', value: '男' ,checked:true},
      { name: '2', value: '女'},
    ],
    sex:'男',
    multiArray: [],
    multiIndex: [0, 0, 0],
    dailishangData:[],
    classNumber:'',
    flag:true,
    phone:'',
    images: [
      [
        {
          src: 'https://m.xuematech.com/applet/img/tuance/perfectInformation/icon_nanbai.png',
          color: '#fff',
          background: '#3979FD',
          text: '男'
        },
        {
          src: 'https://m.xuematech.com/applet/img/tuance/perfectInformation/icon_nvlan.png',
          color: '3979FD',
          background: '#fff',
          text: '女'
        }
      ]
    ]
  },
  //绑定学校名称
  bindSchool:function(e){
    this.setData({
      school: e.detail.value
    })
  },
  //绑定姓名
  bindName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  //班级
  bindClass: function (e) {
    this.setData({
      classNumber: e.detail.value
    })
  },
  //地区
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  //手机号n
  bindPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  //年级
  bindPickerChange: function (e) {
    this.setData({
      garde: e.detail.value
    })
    if(e.detail.value=='0'){
      this.setData({
        nianji: '高三'
      })
    }
    if (e.detail.value == '1') {
      this.setData({
        nianji: '高二'
      })
    }
    if (e.detail.value == '2') {
      this.setData({
        nianji: '高一'
      })
    }
    if (e.detail.value == '3') {
      this.setData({
        nianji: '初三'
      })
    }
    if (e.detail.value == '4') {
      this.setData({
        nianji: '初二'
      })
    }
    if (e.detail.value == '5') {
      this.setData({
        nianji: '初一'
      })
    }
  },
  //性别
  radioChange: function (e) {
    this.setData({
      sex:e.detail.value
    })
  },
  //性别
  sexTab: function (e) {
    if(e.currentTarget.dataset.sex=='男'){
      this.setData({
        images: [
          [
            {
              src: 'https://m.xuematech.com/applet/img/tuance/perfectInformation/icon_nanbai.png',
              color: '#fff',
              background: '#3979FD',
              text: '男'
            },
            {
              src: 'https://m.xuematech.com/applet/img/tuance/perfectInformation/icon_nvlan.png',
              color: '3979FD',
              background: '#fff',
              text: '女'
            }
          ]
        ]
      })
    }else{
      this.setData({
        images: [
          [
            {
              src: 'https://m.xuematech.com/applet/img/tuance/perfectInformation/icon_nanlan.png',
              color: '3979FD',
              background: '#fff',
              text: '男'
            },
            {
              src: 'https://m.xuematech.com/applet/img/tuance/perfectInformation/icon_nvbai.png',
              color: '#fff',
              background: '#3979FD',
              text: '女'
            }
          ],
        ]
      })
    }
    this.setData({
      sex: e.currentTarget.dataset.sex
    })
  },
  //提交
  submit:function(e){
    if (!this.data.flag) {
      return
    }
    this.setData({
      warning: '',
      flag:false
    })
    var _this=this;
    var province = this.data.multiArray[0][this.data.multiIndex[0]];
    var city = this.data.multiArray[1][this.data.multiIndex[1]];
    var area = this.data.multiArray[2][this.data.multiIndex[2]]; 
    var schoolName=this.data.school;
    var name=this.data.name;
    var baccllYear=this.data.gardes[this.data.garde];
    var sex=this.data.sex;
    var classNumber=this.data.classNumber;
    var phone = this.data.phone;
    if(!schoolName){
      this.setData({
        warning: '请输入学校名称',
        flag: true
      })
      return;
    }
    if (!classNumber) {
      this.setData({
        warning: '请输入你的班级',
        flag: true
      })
      return;
    }
    if (!phone) {
      this.setData({
        warning: '请输入你的手机号',
        flag: true
      })
      return;
    }
    if(!name){
      this.setData({
        warning:'请输入你的姓名',
        flag: true
      })
      return;
    }
    var reg = /(^1[123456789]\d{9}$)|(^\d{8}$)/;
    if (!reg.test(phone)) {
      this.setData({
        warning: '手机号格式不正确',
        flag: true
      })
      return;
    }
    wx.request({
      url: wx.getStorageSync('config').login.improveInfo,
      method: 'post',
      data: {
        province: province,
        city: city,
        area: area,
        schoolName: schoolName,
        baccllYear: baccllYear,
        name: name,
        sex: sex=='男'?1:2,
        type:2,
        schoolClass: classNumber,
        phone:phone
      },
      header: {
        'token': wx.getStorageSync('tuanceToken')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          wx.redirectTo({
            url: '/pages/tuance/tStart',
          })
        } else {
          _this.setData({
            warning: data.data.msg,
            flag:true
          })
        }
      }
    })
  },
  bindMultiPickerColumnChange: function (e) {
    let column = e.detail.column;
    let number = e.detail.value;
    console.log(number);
    let multiArray = this.data.multiArray;
    let multiIndex = this.data.multiIndex;
    if (column == 0) {
      multiArray[1] = [];
      multiArray[2] = [];
      areaList[number].cityList.filter(item => {
        return multiArray[1].push(item.name);
      })
      areaList[number].cityList[0].areaList.filter(item => {
        return multiArray[2].push(item);
      })
      multiIndex[0] = number;
      multiIndex[1] = 0
      multiIndex[2] = 0
      this.setData({
        multiIndex: multiIndex
      })
    }
    if (column == 1) {
      multiArray[2] = [];
      areaList[multiIndex[0]].cityList[number].areaList.filter(item => {
        return multiArray[2].push(item);
      })
      multiIndex[1] = number;
      multiIndex[2] = 0
      this.setData({
        multiIndex: multiIndex
      })
    }
    if (column == 2) {
      multiIndex[2] = number;
      this.setData({
        multiIndex: multiIndex
      })
    }
    this.setData({
      multiArray: multiArray
    })
  },
  //省市区初始
  areaStart:function(){
    var province = [], city = [], area = [];
    var dailishangData=this.data.dailishangData;
    let dailishangAreaList = [];
    // console.log(dailishangData.constructor == Array)
    // console.log(dailishangData.length)
    if (dailishangData.constructor == Array && dailishangData.length) {
      dailishangData.forEach((item)=> {
        let obj = {}
        areaList.forEach((a_item) =>{
          if (a_item.name == item.name) {
            obj.name = item.name;
            let arr = [];
            item.child.forEach((child)=>{
              // console.log(a_item)
              // console.log(child)
              a_item.cityList.forEach((cityList)=>{
                if (child.name == cityList.name) {
                  arr.push(cityList);
                }
              })
            })
            obj.cityList = arr;
          }
        }) 
        dailishangAreaList.push(obj);
      })
      areaList = dailishangAreaList;
      console.log(areaList);
      // areaList = dailishangAreaList;
    }

    areaList.filter(item => {
      return province.push(item.name);
    })
    areaList[0].cityList.filter(item => {
      return city.push(item.name);
    })
    areaList[0].cityList[0].areaList.filter(item => {
      return area.push(item);
    })
    this.setData({
      multiArray: [province, city, area]
    })
   
  },
  //获取代理商开通省市
  // dailishang:function(){
  //   let _this=this;
  //   wx.request({
  //     url: wx.getStorageSync('config').login.dailishang,
  //     method: 'post',
  //     data: {
  //       a: wx.getStorageSync('a')||33
  //     },
  //     header: {
  //       'token': wx.getStorageSync('token')
  //     },
  //     success: function (data) {
  //       if (data.data.code == '2000') {
  //          if(data.data.data.length>0){
  //            _this.setData({
  //              dailishangData:data.data.data
  //            })
  //          }
         
  //       } else {
  //       }
  //     }
  //   })
  // },
  dailishang() {
    HTTP.post(GET_MOBILE_OPEN_PROVINCE, {
      a: wx.getStorageSync('a') || 20
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          dailishangData: data
        })
        this.areaStart();
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = wx.getStorageSync('tuanceUserInfo')
    if(user){
      this.setData({
        multiArray:[[user.province],[user.city],[user.area]]
      })
      return;
    }
    this.dailishang();
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