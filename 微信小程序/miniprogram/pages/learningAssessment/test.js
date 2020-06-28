// pages/learningAssessment/test.js
import HTTP from '../../utils/httpRequest.js'
import { goLogin } from '../../utils/login.js'
import { GET_TOPIC_AND_OPTIONS_LIST, STORE_RESULT} from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question_all_data: null,
    question_data: null,
    answer_data: [],
    answer: '',
    question_number: 1,
    ischeck: false,
    check: {
      '0': 'B',
      '1': 'A',
      '2': 'B',
      '3': 'C',
      '4': 'D',
      '5': 'E',
    },
    assessType: '',
    question: {
      "1": '成就目标定向测评',
      "2": '时间管理测评',
      "3": '学习动机测评',
      "4": '学习习惯测评',  
      "5": '情绪管理测评',
      "6": '人际关系综合诊断测评',
      "8": '学业归因测评',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let assessType = options.assessType;
    let title = this.data.question[assessType];
    this.getTopicAndOptionsList(assessType);
    this.setData({
      assessType: assessType
    })
    wx.setNavigationBarTitle({
      title: title
    })
  },
  getTopicAndOptionsList(assessType) {
    HTTP.post(GET_TOPIC_AND_OPTIONS_LIST, { 'assessType': assessType })
      .then((res) => {
        let data = res.data; 
        this.setData({
          question_all_data: data,
          question_data: data[0],
        })
       
      })
  },
  changeData(e) {
    if(this.data.ischeck) {
      return;
    }
    let questionNum = e.currentTarget.dataset.questionnum;
    let answer = e.currentTarget.dataset.answer;
    this.setData({
      ischeck: true,
      answer: answer
    })
    let question_all_data = this.data.question_all_data;
    let question_number = this.data.question_number;
    let obj = {};
    obj.questionNum = questionNum;
    obj.answer = answer;
    this.data.answer_data.push(obj);
    if (question_number == question_all_data.length) {
      this.goStoreResult();
      return;
    }
    setTimeout(()=> {
      this.setData({
        question_data: question_all_data[question_number],
        question_number: question_number + 1,
        ischeck: false,
        answer: ''
      })
    },300)
  },
  // 提交测试结果  
  goStoreResult() {
    let answer = this.data.answer_data;
    let assessType = this.data.assessType;
    HTTP.post(STORE_RESULT, { 'assessType': assessType, answer: answer, source: 4})
      .then((res) => {
        let id = res.data.id;
        wx.redirectTo({
          url: '/pages/learningAssessment/testReport/testReport' + assessType + '?assessType=' + assessType + '&id=' + id
        })
      })
  },  
})