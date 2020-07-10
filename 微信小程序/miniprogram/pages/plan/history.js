// miniprogram/pages/plan/history.js
import * as echarts from '../../ec-canvas/echarts'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    awardData:[],
    xueyeData:[],
    monthData:[],
    number:0,
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    one1:'',
    one2:'',
    two1:'',
    two2:'',
    three1:'',
    three2:'',
    four1:'',
    four2:'',
    w1:'0%',
    w2: '0%',
    w3: '0%',
    w4: '0%'
  },
  //获奖信息列表
  awardlist:function(){
    let _this=this
    wx.request({
      url: wx.getStorageSync('config').huhang.awardlist,
      method: 'post',
      data: {
        pageSize:500
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            awardData:data.data.data.list||[]
          })
        } else {
        
        }
      }
    })
  },
  //学业信息列表
  xueyelist: function () {
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').huhang.xueyelist,
      method: 'post',
      data: {},
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            xueyeData: data.data.data || []
          })
        } else {

        }
      }
    })
  },
  //月计划列表
  monthlist:function(){
    let _this = this
    wx.request({
      url: wx.getStorageSync('config').huhang.monthlist,
      method: 'post',
      data: {
        pageSize:500
      },
      header: {
        'token': wx.getStorageSync('token')
      },
      success: function (data) {
        if (data.data.code == '2000') {
          _this.setData({
            monthData: data.data.data || []
          })
          wx.nextTick(() => {
            _this.init();
          })
        } else {

        }
      }
    })
  },
  
  // 获取数据后初始化图表
  init: function () {
    let monthData = this.data.monthData;
    let _this=this
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      _this.setOption(chart, monthData);
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      _this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  // 获取数据后初始化图表
  init2: function (data) {
    let _this = this
    this.ecComponent2.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      _this.setOption2(chart, data);
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      _this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  onLoad: function (options) {
    // this.ecComponent = this.selectComponent('#mychart-dom-bar');
    // this.ecComponent2 = this.selectComponent('#mychart-dom-bar2');
    // this.awardlist()
    // this.xueyelist()
    // this.monthlist()
  },
  onShow: function () {
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    this.ecComponent2 = this.selectComponent('#mychart-dom-bar2');
    this.awardlist()
    this.xueyelist()
    this.monthlist()
  },
  //图表1
  setOption: function (chart,monthData){
    const xArr = []
    const yArr = []
    const _this=this
    if (monthData.length > 0) {
      monthData.forEach((item,index) => {
        if(index==(monthData.length-1)){
          _this.setData({
            number: item.importUrgent + item.importNoUrgent + item.noImportUrgent + item.noImportNoUrgent,
            one1: item.importUrgent,
            one2: item.importUrgentDone,
            two1: item.importNoUrgent,
            two2: item.importNoUrgentDone,
            three1: item.noImportUrgent,
            three2: item.noImportUrgentDone,
            four1: item.noImportNoUrgent,
            four2: item.noImportNoUrgentDone
          })
          _this.setData({
            w1: _this.data.one2 / _this.data.one1 * 100 + '%',
            w2: _this.data.two2 / _this.data.two1 * 100 + '%',
            w3: _this.data.three2 / _this.data.three1 * 100 + '%',
            w4: _this.data.four2 / _this.data.four1 * 100 + '%'
          })
          _this.init2([item.importUrgent, item.importNoUrgent, item.noImportUrgent, item.noImportNoUrgent])
        }
        xArr[xArr.length] = item.num
        let obj = {
          value: item.monthTargetNum,
          date: item.date,
          item:item
        }
        yArr[yArr.length] = obj
      })
    }
    const option = {
      title: {
        text: '计划数量',
        textStyle: {
          fontSize: 13
        },
        left: 0,
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params, ticket, callback) {
          let item=params[0].data.item
          _this.setData({
            number: item.importUrgent + item.importNoUrgent + item.noImportUrgent + item.noImportNoUrgent,
            one1: item.importUrgent,
            one2: item.importUrgentDone,
            two1: item.importNoUrgent,
            two2: item.importNoUrgentDone,
            three1: item.noImportUrgent,
            three2: item.noImportUrgentDone,
            four1: item.noImportNoUrgent,
            four2: item.noImportNoUrgentDone
          })
          _this.setData({
            w1: _this.data.one2 / _this.data.one1 * 100 + '%',
            w2: _this.data.two2 / _this.data.two1 * 100 + '%',
            w3: _this.data.three2 / _this.data.three1 * 100 + '%',
            w4: _this.data.four2 / _this.data.four1 * 100 + '%'
          })
          _this.init2([item.importUrgent, item.importNoUrgent, item.noImportUrgent, item.noImportNoUrgent])
          return params[0].data.date + ":" + params[0].data.value + '个'
        },
        padding: [10, 10]
      },
      xAxis: {
        type: 'category',
        data: xArr,
        axisTick: {
          show: false
        },
        offset: 5,
        axisLabel: {
          fontSize: 14,
          textStyle: {
            color: '#333'
          },
        },
        axisLine: {
          lineStyle: {
            color: "#EAEAEA"
          }
        }
      },
      yAxis: {
        minInterval: 1,
        type: 'value',
        axisTick: {
          show: false,
          textStyle: {
            color: '#333'
          },
        },
        axisLabel: {
          fontSize: 13,
          textStyle: {
            color: '#333',
          },
        },
        splitLine: {
          lineStyle: {
            type: 'solid',
          }
        },
        axisLine: {
          lineStyle: {
            color: "#EAEAEA"
          }
        }
      },
      series: [
        {
          type: 'line',
          stack: '总量',
          symbolSize: 12,
          symbol: 'circle',
          lineStyle: {
            color: '#5DA1F4',
            width: 2
          },
          itemStyle: {
            normal: {
              borderColor: '#3D91F4',  //拐点边框颜色
              borderWidth: 4,
              color: "#8FC1FC"
            }
          },
          data: yArr
        }
      ]
    }
    chart.setOption(option);
  },
  //图表2
  setOption2(chart, data) {
  const xArr = []
  const yArr = []
  if(data.length>0){
    const option={
      color: ['#F85A50', '#FD9455', '#1ACEFF','#6B72F4'],
      series: [
        {
          name: '访问来源',
          type: 'pie',
          animation: false,
          radius: ['100%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data:data
        }
      ]
    }
    chart.setOption(option);
  }

 
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },

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