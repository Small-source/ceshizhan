// pages/schoolDetail/schoolDetail.js
import HTTP from '../../utils/httpRequest.js'
import { UNIVERSITY_DETAIL, GET_GROUP_BY_TIME_LIST, STORE_UNIVERSITY, GET_COLLECT_UNIVERSITY_ID } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: [],
    schoolId: '',
    jzList: null,
    imgSrc:'',
    isShoucang: false

  },
  onLoad: function (options) {
    let id = options.schoolId;
    this.dataUpdate(id);
    this.getJianZhangList(id);
    this.setData({
      schoolId: id
    })
    this.getCollectUniversityId();
  },
  // 用户点击右上角分享
  onShareAppMessage: function () {
  },
  dataUpdate(id) {
    HTTP.post(UNIVERSITY_DETAIL, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          school: data
        })
      })
  },
  // 获取招生简章列表
  getJianZhangList(id) {
    HTTP.post(GET_GROUP_BY_TIME_LIST, {
      // id: id
      universityId: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          jzList: data
        })

      })
  },

  // 收藏和取消院校
  getStoreUniversity() {
    let id = this.data.schoolId;
    let isShoucang = this.data.isShoucang;
    HTTP.post(STORE_UNIVERSITY, {
      collectionId: id
    })
      .then((res) => {
        this.getCollectUniversityId();
      })
  },
  // 获取是否收藏该院校
  getCollectUniversityId() {
    let id = this.data.schoolId;
    HTTP.post(GET_COLLECT_UNIVERSITY_ID, {
      id: id
    })
      .then((res) => {
        let data = res.data;
        if (data.indexOf(Number(id)) != -1) {
          this.setData({
            // imgSrc: '/images/schoolDetail/icon_hadCollect.png'
            isShoucang: true
          })
        }else {
          this.setData({
            // imgSrc: '/images/schoolDetail/icon_goCollect.png'
            isShoucang: false
          })
        }
      })
  },
})