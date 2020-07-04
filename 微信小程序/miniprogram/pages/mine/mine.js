// pages/mine/mine.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_APPLET_ARTICLE_LIST, GET_LIST, GET_USER_INFO, APPLET_MONTH_PLAN, APPLET_WEEK_PLAN, APPLET_DAY_PLAN, APPLET_WEEK_EDIT_PLAN, APPLET_DAY_EDIT_PLAN } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    body:'../../images/mine/icon_nan.png',
    girl:'../../images/mine/icon_nv.png',
    person:{},
    teacher_id: 0,//teacher_id>0才是护航卡用户，显示护航计划
    monthData: null,
    weekData: null,
    dayData: null,
    tabIdx: 1,
    lineLength: 0,
    weekIndex: [true],
    dayIndex: [true],
    isClock: true,
    isDayClock: true,
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
    this.getUser();
    this.getMonthPlan();
  },
  changeTab(e) {
    // console.log(e);
    let idx = e.currentTarget.dataset.idx;
    this.setData({
      tabIdx: idx
    })
    if(idx == 1) {
      this.getMonthPlan();
    }else if(idx ==2) {
      this.getWeekPlan();
    }else {
      this.getDayPlan();
    }
  },
  getUser() {
    HTTP.post(GET_USER_INFO, {})
      .then((res) => {
        let person = res.data;
        let id = res.data.teacher_id;
        this.setData({
          person: person,
          teacher_id: id
        })
      })
  },
  getMonthPlan() {
    HTTP.post(APPLET_MONTH_PLAN, {})
      .then((res) => {
        let data = res.data;
        this.setData({
          monthData: data
        })
      })
  },
  getWeekPlan() {
    HTTP.post(APPLET_WEEK_PLAN, {})
      .then((res) => {
        let data = res.data;
        this.setData({
          weekData: data,
          isClock: true
        })
      })
  },
  getDayPlan() {
    HTTP.post(APPLET_DAY_PLAN, {})
      .then((res) => {
        let data = res.data;
        this.setData({
          dayData: data,
          isDayClock: true
        })
      })
  },
  changeWeekIndex(e) {
    console.log(e)
    let idx = e.currentTarget.dataset.index;
    let value = e.currentTarget.dataset.value;
    let weekIndex = this.data.weekIndex;
    weekIndex[idx] = value;
    this.setData({
      weekIndex: weekIndex
    })
  },
  changeDayIndex(e) {
    console.log(e)
    let idx = e.currentTarget.dataset.index;
    let value = e.currentTarget.dataset.value;
    let dayIndex = this.data.dayIndex;
    dayIndex[idx] = value;
    this.setData({
      dayIndex: dayIndex
    })
  },
  goEditPlanWeek(e) {
    // console.log(e)
    let isClock = this.data.isClock;
    if (isClock) {
      this.setData({
        isClock: false
      })
      let week = this.data.weekData.week;
      let index = e.currentTarget.dataset.index;
      let type = e.currentTarget.dataset.type; //type1.2.3.4重要紧急，重要不紧急，不重要紧急，不重要不紧急
      let targetIndex  = e.currentTarget.dataset.targetindex;
      week[index].target[type][targetIndex].isDone = 1;
      week[index].targetDone = week[index].targetDone + 1;
      let obj = week[index];
      HTTP.post(APPLET_WEEK_EDIT_PLAN, obj)
        .then((res) => {
          this.getWeekPlan();
        }).catch(()=>{
          this.setData({
            isClock: true
          })
        })
    }
  },
  goEditPlanDay(e) {
    console.log(e)
    let isClock = this.data.isDayClock;
    if (isClock) {
      this.setData({
        isDayClock: false
      })
      let dayData = this.data.dayData;
      let index = e.currentTarget.dataset.index;
      let type = e.currentTarget.dataset.type; //type1.2.3.4重要紧急，重要不紧急，不重要紧急，不重要不紧急
      let targetIndex = e.currentTarget.dataset.targetindex;
      dayData[index].target[type][targetIndex].isDone = 1;
      let obj = dayData[index];
      HTTP.post(APPLET_DAY_EDIT_PLAN, obj)
        .then((res) => {
          this.getDayPlan();
        }).catch(() => {
          this.setData({
            isDayClock: true
          })
        })
    }
  },
})