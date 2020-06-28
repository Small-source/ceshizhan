// pages/collegeLibrary/collegeLibrary.js
import HTTP from '../../utils/httpRequest.js'
import { GET_UNIVERSITY_LIST } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBox: [
      { value: '1', name: '学校地区', imgUrl1: '/images/common/icon_xialahui.png', imgUrl2: '/images/common/icon_shangla.png' },
      { value: '2', name: '大学类别', imgUrl1: '/images/common/icon_xialahui.png', imgUrl2: '/images/common/icon_shangla.png' },
      { value: '3', name: '特色标签', imgUrl1: '/images/common/icon_xialahui.png', imgUrl2: '/images/common/icon_shangla.png' }
    ],
    activeTabValue: 0,
    searchValue: '',
    // 地区
    diqu: ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南'],
    daxueleibie: [
      '综合类', '理工类', '师范类', '农林类', '政法类', '医药类', '财经类', '民族类', '语言类', '艺术类', '体育类', '军事类'
    ],
    tesebiaoqian: [
      { name: '一流大学A类', value: '1' },
      { name: '一流大学B类', value: '2' },
      { name: '一流学科', value: '3' }
    ],
    province: [],//学校地区
    type: [],//大学类别
    tagShuangyiliu: [],// 双一流
    tag211: '',
    tag985: '',
    tagZhongdianxueke: '',
    tagTesezhuanye: '',
    tagBushenghejian: '',
    tagBaoyanzige: '',
    pageSize: 15,
    pageNumber: 1,
    count: 1,
    schoolList: [],
    boolArr:[],
    daxueFlag:true,
    shouXuans:[
      {name:'物理',value:'物理'},
      {name:'历史',value:'历史'}
    ],
    shouXuan:'',
    fuXuans:[
      { name: '化学', value: '化学', checked:false,disabled:false},
      { name: '生物', value: '生物', checked: false,disabled: false},
      { name: '思想政治', value: '思想政治', checked: false,disabled: false},
      { name: '地理', value: '地理', checked: false,disabled: false}
    ],
    fuXuan:[],
    sanXuans:[
      { name: '物理', value: '物理', checked: false, disabled: false },
      { name: '化学', value: '化学', checked: false, disabled: false },
      { name: '生物', value: '生物', checked: false, disabled: false },
      { name: '思想政治', value: '思想政治', checked: false, disabled: false },
      { name: '历史', value: '历史', checked: false, disabled: false },
      { name: '地理', value: '地理', checked: false, disabled: false },
      { name: '技术', value: '技术', checked: false, disabled: false },
    ],
    xuankeDiqu: '',
    typeSubject: '',
    sanXuan:[],
    zhuanyeList:[],
    daxuecounts: 0,
    zhuanyecounts: 0
  },
  //大学、专业切换
  TabDaxueFlag(e){
    if(e.currentTarget.dataset.number=='0'){
      this.setData({
        daxueFlag:true
      })
    }else{
      this.setData({
        daxueFlag: false,
      })
    }
    this.setData({
      province: [],//学校地区
      type: [],//大学类别
      tagShuangyiliu: [],// 双一流
      tag211: '',
      tag985: '',
      tagZhongdianxueke: '',
      tagTesezhuanye: '',
      tagBushenghejian: '',
      tagBaoyanzige: '',
      pageNumber: 1,
      schoolList: [],
      searchValue: ""
    })
  },
  //判断省市选科情况
  tabCity:function(){
    if (['北京', '海南', '山东', '上海', '天津', '浙江', '北京市', '海南省', '山东省', '上海市', '天津市', '浙江省'].indexOf(this.data.xuankeDiqu) == -1) {
      this.setData({
        typeSubject:1
      })
    } else {
      this.setData({
        typeSubject: 2
      })
    }
  },
  //3+1
  radioChange: function (e) {
    this.setData({
      shouXuan: e.detail.value
    })
    this.goUpdate2();
  },
  //3+1+2
  checkboxChange: function (e) {
    let values= e.detail.value;
    let fuXuans=this.data.fuXuans;
    if(e.detail.value.length==2){
      fuXuans.forEach(item=>{
        if(values.indexOf(item.value)>=0){
          item.disabled=false;
          item.checked=true
        }else{
          item.disabled=true
        }
      }) 
    }else{
      fuXuans.forEach(item => {
        if (values.indexOf(item.value) >= 0) {
          item.disabled = false;
          item.checked = true;
        } else {
          item.disabled = false;
          item.checked = false;
        }
      }) 
    }
    this.setData({
      fuXuans: fuXuans
    })
    this.setData({
      fuXuan: e.detail.value
    })
    this.goUpdate2();
  },
  //3+3
  checkboxChange3: function (e) {
    let values = e.detail.value;
    let fuXuans = this.data.sanXuans;
    if (e.detail.value.length == 3) {
      fuXuans.forEach(item => {
        if (values.indexOf(item.value) >= 0) {
          item.disabled = false;
          item.checked = true
        } else {
          item.disabled = true
        }
      })
    } else {
      fuXuans.forEach(item => {
        if (values.indexOf(item.value) >= 0) {
          item.disabled = false;
          item.checked = true;
        } else {
          item.disabled = false;
          item.checked = false;
        }
      })
    }
    this.setData({
      sanXuans: fuXuans
    })
    this.setData({
      sanXuan: e.detail.value
    })
    this.goUpdate2();
  },
  searchChange(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },
  goSearch() {
    this.setData({
      pageNumber: 1
    })
    this.dataUpdate();
  },
  goSearch2() {
    this.setData({
      pageNumber: 1
    })
    this.dataUpdate2();
  },
  changeType(e) {
    let value = e.currentTarget.dataset.value;
    let nowTabValue = this.data.activeTabValue;
    if (value == nowTabValue) {
      this.setData({
        activeTabValue: 0
      })
    } else {
      this.setData({
        activeTabValue: value
      })
    }
  },
  checkChange(e) {
    let _this = this;
    let nowValue = e.target.dataset.tap;
    if (nowValue == '全国') {
      this.setData({
        province: []
      })
      return;
    }
    let oldData = this.data.province;
    let index = oldData.indexOf(nowValue);
    this.changeData(nowValue, oldData, index, 'province');
  },
  checkAllTag() {
    this.setData({
      tagShuangyiliu: [],// 双一流
      tag211: '',
      tag985: '',
      tagZhongdianxueke: '',
      tagTesezhuanye: '',
      tagBushenghejian: '',
      tagBaoyanzige: ''
    })
  },
  checkChangeType(e) {
    let nowValue = e.target.dataset.tap;
    if (nowValue == '全部') {
      this.setData({
        type: []
      })
      return;
    }
    let oldData = this.data.type;
    let index = oldData.indexOf(nowValue);
    this.changeData(nowValue, oldData, index, 'type');
  },
  checkChangeTeseTag(e) {
    let nowValue = e.target.dataset.tap;
    let oldData = this.data.tagShuangyiliu;
    let index = oldData.indexOf(nowValue);
    this.changeData(nowValue, oldData, index, 'tagShuangyiliu');
  },
  checkChangeTagSmall(e) {
    let typeName = e.target.dataset.typename;
    let value = this.data[typeName];
    if (value) {
      this.setData({
        [typeName]: ''
      })
    } else {
      this.setData({
        [typeName]: '1'
      })
    }
  },
  changeData(nowValue, oldData, index, dataName) {
    if (index === -1) {
      oldData.push(nowValue);
      this.setData({
        [dataName]: oldData
      })
    } else {
      oldData.splice(index, 1);
      this.setData({
        [dataName]: oldData
      })
    }
  },
  goUpdate() {
    this.setData({
      activeTabValue: 0,
      schoolList: [],
      pageNumber: 1,
      searchValue: ''
    })
    this.dataUpdate();
  },
  goUpdate2(){
    this.setData({
      activeTabValue: 0,
      schoolList: [],
      pageNumber: 1,
      searchValue: ''
    })
    this.dataUpdate2();
  },
  dataUpdate() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: wx.getStorageSync('config').xuankeDaxue,
      method: 'post',
      data: {
        province: this.data.province,
        type: this.data.type,
        tagShuangyiliu: this.data.tagShuangyiliu,
        tag211: this.data.tag211,
        tag985: this.data.tag985,
        tagZhongdianxueke: this.data.tagZhongdianxueke,
        tagTesezhuanye: this.data.tagTesezhuanye,
        tagBushenghejian: this.data.tagBushenghejian,
        pageNumber: this.data.pageNumber,
        pageSize: this.data.pageSize,
        name: this.data.searchValue
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: (data)=> {
        if(data.data.code == 2026) {
          wx.reLaunch({
            url: '/pages/login/perfectInformation',
          })
        }
        if (data.data.code == 1016) {
          wx.reLaunch({
            url: '/pages/login/bindphone',
          })
        }
        let res=data.data
        let pageNumber = this.data.pageNumber;
        let resData = res.data.list;
        let oldlist = this.data.schoolList;
        let nowList = oldlist.concat(resData);
        let count = res.data.page.count;
        let number=nowList.length;
       
        let arr=this.data.boolArr;
        arr.push(true)
        for (var i = 1; i < number; i++){
          arr.push(false);
        }
        this.setData({
          boolArr:arr
        })
        if (count == 0) {
          this.setData({
            schoolList: resData,
            count: count
          })
        } else {
          this.setData({
            schoolList: nowList,
            count: count
          })
        }
        wx.hideLoading();
      }
    })
  },
  dataUpdate2() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: wx.getStorageSync('config').xuankeXueke,
      method: 'post',
      data: {
        province: this.data.province,
        type: this.data.type,
        tagShuangyiliu: this.data.tagShuangyiliu,
        tag211: this.data.tag211,
        tag985: this.data.tag985,
        tagZhongdianxueke: this.data.tagZhongdianxueke,
        tagTesezhuanye: this.data.tagTesezhuanye,
        tagBushenghejian: this.data.tagBushenghejian,
        pageNumber: this.data.pageNumber,
        pageSize: this.data.pageSize,
        subjectName: this.data.searchValue,
        chooseCourseRequire: this.data.sanXuan,
        firstCourseRequire: this.data.shouXuan,
        secondCourseRequire:this.data.fuXuan
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: (data) => {
        let res = data.data
        let pageNumber = this.data.pageNumber;
        let resData = res.data.data.list;
        let oldlist = this.data.zhuanyeList;
        let nowList = oldlist.concat(resData);
        let count = res.data.data.page.count;
        if (count == 0) {
          this.setData({
            zhuanyeList: resData,
            daxuecounts: data.data.data.universityIdCount,
            zhuanyecounts: data.data.data.subjectIdCount,
            count:count
          })
        } else {
          this.setData({
            zhuanyeList: nowList,
            daxuecounts: data.data.data.universityIdCount,
            zhuanyecounts: data.data.data.subjectIdCount,
            count: count
          })
        }
        wx.hideLoading();
      }
    })
  },
  showBox(e){
      let index=e.currentTarget.dataset.index
      let boolArr=this.data.boolArr;
      let curMenu = "boolArr[" + index + "]";
      this.setData({
        [curMenu]: true
      })
  },
  hideBox(e) {
    let index = e.currentTarget.dataset.index
    let boolArr = this.data.boolArr;
    let curMenu = "boolArr[" + index + "]";
    this.setData({
      [curMenu]: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      daxueFlag: options.daxueFlag,
      xuankeDiqu:options.city
    })
    this.tabCity();
    this.dataUpdate();
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
    let length = this.data.schoolList.length;
    let count = this.data.count;
    if (length == count) {
      return;
    }
    let number = this.data.pageNumber + 1;
    this.setData({
      pageNumber: number
    })
    if(this.data.daxueFlag){
      this.dataUpdate();
    }else{
      this.dataUpdate2();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})