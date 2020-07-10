// pages/plan/xueyeMessage.js
import HTTP from '../../utils/httpRequest.js'
import { ADD_academic_Info_store, ADD_academic_Info_DETAIL } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gradeList: [
      { title: '高一', value: '1' },
      { title: '高二', value: '2' },
      { title: '高三', value: '3' }
    ],
    gradeId: '',
    gradeIndex: 0,
    test: {
      "grade": "",
      "name": "",
      "date": "",
      "totalScore": '',
      "rank": '',
      "totalPeople": ''
    },
    subject: [
      {
        subject: '语文',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '数学',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '外语',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '物理',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '化学',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '生物',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '思想政治',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '历史',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '地理',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
      {
        subject: '技术',
        score: '',
        totalScore: '',
        rank: '',
        totalPeople: ''
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (options.id) {
    //   this.setData({
    //     gradeId: options.id
    //   })
    //   this.getInfoDetail();
    // }
  },
  bindPickerChange(e) {
    let value = e.detail.value;
    let test = this.data.test;
    test.grade = Number(value) + 1;
    this.setData({
      test: test,
      gradeIndex: value
    })
  },
  bindName(e) {
    let value = e.detail.value;
    let test = this.data.test;
    test.name = value;
    this.setData({
      test: test,
    })
  },
  bindDate(e) {
    let value = e.detail.value;
    let test = this.data.test;
    test.date = value;
    this.setData({
      test: test,
    })
  },

  bindRank(e) {
    let value = e.detail.value;
    let test = this.data.test;
    test.rank = value;
    this.setData({
      test: test,
    })
  },
  bindTotalPeople(e) {
    let value = e.detail.value;
    let test = this.data.test;
    test.totalPeople = value;
    this.setData({
      test: test,
    })
  },

  bindSubjectScore(e) {
    let value = e.detail.value;
    let index = e.currentTarget.dataset.index;
    let subject = this.data.subject;
    subject[index].score = value;
    this.setData({
      subject: subject,
    })
  },
  bindSubjectRank(e) {
    let value = e.detail.value;
    let index = e.currentTarget.dataset.index;
    let subject = this.data.subject;
    subject[index].rank = value;
    this.setData({
      subject: subject,
    })
    console.log(subject);
  },
  saveData() {

    let test = this.data.test;
    let subject = this.data.subject;
    let gradeId = this.data.gradeId; // gradeId存在为编辑，不存在为添加
    let obj = {
      gradeId: gradeId,
      test: test,
      subject: subject
    }
    // let grade = test.grade;
    // let name = test.name;
    // let date = test.date;
    // let rank = test.rank;
    // let totalPeople = test.totalPeople;

    HTTP.post(ADD_academic_Info_store, obj)
      .then((res) => {
        wx.navigateBack({
          delta: 1
        })
        // wx.redirectTo({
        //   url: '/pages/plan/history',
        // })
      })
      .catch((error) =>{
        wx.showToast({
          title: '请完成必填项',
          icon: 'none',
          duration: 1500
        })
      })
  },
  // 如果是编辑，去获取信息
  getInfoDetail(){
    let gradeId = this.data.gradeId;
    HTTP.post(ADD_academic_Info_DETAIL, { id: gradeId})
      .then((res) => {
        let data = res.data;
        let test = {
          name: data.name,
          date: data.date,
          rank: data.rank,
          totalPeople: data.totalPeople,
          grade: data.grade
        }
        let subject = data.subject;
        this.setData({
          test: test,
          subject: subject
        })
      })
  }

})