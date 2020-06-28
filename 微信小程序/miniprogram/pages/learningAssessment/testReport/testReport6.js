// pages/learningAssessment/testReport/testReport6.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_REPORT } from '../../../utils/configAPI.js'
Page({
  data: {
    reportData: null,
    assessType: '',
    id: ''
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    let assessType = options.assessType;
    let id = options.id;
    this.setData({
      assessType: assessType,
      id: id
    })
    this.getReport();
  },
  getReport() {
    let assessType = this.data.assessType;
    let id = this.data.id;
    HTTP.post(GET_REPORT, { 'assessType': assessType, 'id': id })
      .then((res) => {
        let data = res.data;
        this.setData({
          reportData: data
        })
      })
  }
})