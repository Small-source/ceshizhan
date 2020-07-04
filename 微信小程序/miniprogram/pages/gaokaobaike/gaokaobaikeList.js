// pages/gaokaobaike/gaokaobaikeList.js
import HTTP from '../../utils/httpRequest.js'
import { GET_ENCYCLOPEDIA_LIST } from '../../utils/configAPI.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortData: [ 
      { title: '大学', cateId: '21' }, 
      { title: '专业', cateId: '22'  }, 
      { title: '新高考', cateId: '23'  }, 
      { title: '招生录取相关', cateId: '24'  }, 
      { title: '志愿填报相关', cateId: '25'  }, 
      { title: '考试政策相关', cateId: '29'  }, 
      { title: '其他必备相关', cateId: '30'  }
    ],
    cateId: '21',
    cData: []
    // data1: '',
    // data2: '',
    // data3: '',
    // data4: '',
    // data5: '',
    // data6: '',
    // data7:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    HTTP.post(GET_ENCYCLOPEDIA_LIST, {
      cateId: 21
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          cData: data
        })
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取招生简章列表
  getEncyclopediaList(e) {
    // console.log(e)
    let id = e.currentTarget.dataset.cateid;
    this.setData({
      cateId: id
    })
    HTTP.post(GET_ENCYCLOPEDIA_LIST, {
      cateId: id
    })
      .then((res) => {
        let data = res.data;
        this.setData({
          cData: data
        })
      })
  },


})