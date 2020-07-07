// pages/plan/huojiangMessage.js
import HTTP from '../../utils/httpRequest.js'
import { ADD_STORE_AWARD, ADD_DETAIL_AWARD } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      { title: '大赛获奖', type: '1' },
      { title: '校园获奖', type: '2' },
      { title: '社会实践', type: '3' },
      { title: '研究性学习', type: '4' }
    ],
    type: '1',
    activity: '',//大赛名称
    date: '',//日期
    name: '',//名称

    degree: '',//等级
    desc: '',//描述
    id: '',

    optionIndex: '',
    options: [
      "全国青少年科技创新大赛",
      "中国青少年机器人竞赛",
      "全国青少年创意编程与智能设计大赛",
      "“童创未来”全国青少年人工智能创新挑战赛",
      "全国青少年电子信息智能创新大赛",
      "全国中小学信息技术创新与实践大赛",
      "全国中小学生创·造大赛",
      "青少年科学调查体验竞赛",
      "“明天小小科学家”竞赛",
      "全国青年科普创新实验暨作品大赛",
      "全国中学生天文知识竞赛",
      "全国防震减灾知识大赛",
      "全国中学生数学奥林匹克竞赛",
      "全国中学生物理奥林匹克竞赛",
      "全国中学生化学奥林匹克竞赛",
      "全国中学生生物学奥林匹克竞赛",
      "全国中学生信息学奥林匹克竞赛",
      "世界华人学生作文大赛",
      "全国中学生科普科幻作文大赛",
      "叶圣陶杯全国中学生新作文大赛",
      "高中生创新能力大赛",
      "“外研社杯”全国中学生外语素养大赛",
      "中国日报社“21世纪杯”全国英语演讲比赛",
      "“希望杯”全国数学邀请赛",
      "“地球小博士”和“环保之星”全国地理科普知识大赛",
      "全国中小学生绘画书法作品比赛",
      "中日青少年书画友好交流大赛",
      "全国青少年科学影像大赛",
      "丝路国家青少年国际摄影竞赛"
    ],
    url: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      this.setData({
        id: options.id
      })
      this.getDetail();
    }
  },
  bindPickerChange(e) {
    // console.log(e)
    let value = e.detail.value;
    let typeList = this.data.typeList;
    let type = typeList[value].type;
    this.setData({
      type: type
    })
  },
  bindPickerChangeOption(e) {
    console.log(e)
    let value = e.detail.value;
    let activity = this.data.options[value]
    this.setData({
      optionIndex: value,
      activity: activity
    })
  },
  bindName(e) {
    let value = e.detail.value;
    this.setData({
      name: value
    })
  },
  bindDegree(e) {
    let value = e.detail.value;
    this.setData({
      degree: value
    })
  },
  bindDate(e) {
    let value = e.detail.value;
    this.setData({
      date: value,
    })
  },
  bindTextAreaBlur(e) {
    let value = e.detail.value;
    this.setData({
      desc: value,
    })
  },
  goUpload() {
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res);
        // tempFilePath可以作为img标签的src属性显示图片
        let url = res.tempFilePaths[0];
        _this.setData({
          url: url
        })
        console.log(_this.data.url)
      }
    })
  },
  removeFile() {
    this.setData({
      url: null
    })
  },
  saveData() {
    let id = this.data.id;
    let type = this.data.type; 
    let date = this.data.date;
    let activity = this.data.activity;
    let name = this.data.name;
    let degree = this.data.degree;
    let desc = this.data.desc;
    let url = this.data.url;
    // console.log(type)
    // console.log(date)
    // console.log(activity)
    // console.log(name)
    // console.log(degree)
    // console.log(desc)
    // console.log(url)
    if (!name||!date) {
      wx.showToast({
        title: '请完成必填项',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    if (url) {
      wx.uploadFile({
        url: 'https://m.xuematech.com/papi' + ADD_STORE_AWARD,          //上传的路径
        filePath: url,   //刚刚在data保存的文件路径
        name: 'url',            //后台获取的凭据
        header: {
          // "Content-Type": "multipart/form-data",
          // 'accept': 'application/json',
          'token': wx.getStorageSync('token') //若有token，此处换上你的token，没有的话省略
        },
        formData: {
          'id': id,
          'type': type,
          'date': date,
          'activity': activity,
          'name': name,
          'degree': degree,
          'desc': desc,
          // 'url': url
        },
        success(res) {
          wx.navigateTo({
            url: '/pages/plan/history',
          })
        },
        fail(res) {
          console.log(res)
        }
      })
    }else {
      let id = this.data.id;
      let type = this.data.type;
      let date = this.data.date;
      let activity = this.data.activity;
      let name = this.data.name;
      let degree = this.data.degree;
      let desc = this.data.desc;
      let url = this.data.url;
      let obj = {
        id: id,
        type: type,
        date: date,
        activity: activity,
        name: name,
        degree: degree,
        desc: desc,
        url: url
      }
      HTTP.post(ADD_STORE_AWARD, obj)
        .then((res) => {
          wx.navigateTo({
            url: '/pages/plan/history',
          })
        })
    }
  },
  getDetail() {
    let id = this.data.id;
    HTTP.post(ADD_DETAIL_AWARD, {'id': id})
      .then((res) => {
        
      })
  },
})