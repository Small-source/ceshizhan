// pages/learningAssessment/testReport/testReport2.js
import HTTP from '../../../utils/httpRequest.js'
import { goLogin } from '../../../utils/login.js'
import { GET_REPORT } from '../../../utils/configAPI.js'
import * as echarts from '../../../ec-canvas/echarts.js';
function setOption(chart, xAxisData, seriesData) {
  const option = {
    color: ['#71B15B', '#2E75B6', '#3E9B7C', '#ECAC5C'],
    legend: {
      data: []
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          let value1 = value.slice(0,4);
          let value2 = value.slice(4);
          var valueDetal = value1 + '\n' + value2;
          return valueDetal;
        }
      }
    },
    yAxis: {
      max: 5,
      splitNumber: 5,
      Interval: 1,
      type: 'value',

    },
    series: [{
      name: '维度分析',
      type: 'bar',
      data: seriesData,
      itemStyle: {
        normal: {
          //这里是重点
          color: function (params) {
            //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
            var colorList = ['#71B15B', '#2E75B6', '#3E9B7C', '#ECAC5C'];
            return colorList[params.dataIndex]
          }
        }
      },
      label: {
        show: true,
        color: '#fff',
      }
    }],
    barCategoryGap: '60%',
  };
  chart.setOption(option);
}
Page({
  data: {
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    reportData: null,
    assessType: '',
    id: '',
    detail: {
      '学习动机太弱': '您在学习动机太弱这个维度上没有困扰，对学习非常有兴趣，学习积极性非常高，完成作业非常积极。',
      '学习动机太强': '您在学习动机太强这个维度上没有困扰，对目前的学习效果和考试成绩非常满意。',
      '学习兴趣': '您对学习非常有兴趣，喜欢学习的过程，能在学习过程中感受到快乐，能享受到学习成功带来的乐趣。',
      '学习目标': '您能独立制定合理的学习目标，按照目标制定学习计划，并能非常好地完成每天的学习任务以及目标。',
    },
    tips: {
      '学习动机太弱': [
        {
          title: '学会主动思考学习的意义和价值',
          detail: '学习的意义重大，学习是人类进步的阶梯，学习是永不磨灭的主题。通过学习能掌握许多知识，学习是人类区别于动物的主要标志，也是人类作为高等动物的主要象征，没有学习人类就会停滞不前，就会没有进步和发展。学习对于任何人来说都是非常重要的，学会思考学习的意义和价值。'
        },
        {
          title: '规律作息，保证睡眠时间',
          detail: '只有保证充足的睡眠，我们才能进行正常的学习和工作。睡眠时间过短或者作息不规律，会严重影响白天的学习效率。因此要想在白天学习时有较好的状态，要注意保证充足的睡眠和规律的作息。'
        },
        {
          title: '参加课外活动，增强体育锻炼',
          detail: '经常会碰到这样的情况，有的时候想要学习，但是发现自己精力不济，没有精神，不能集中注意力，这可能是因为平时锻炼太少，导致身体处于亚健康状态。体育锻炼不仅能增强体魄，还能让人精力更加充沛。可以在学习之余做一些体育锻炼，打篮球、爬山、跑步等等。'
        }
      ],
      '学习动机太强': [
        {
          title: '学会制定合理的目标，以掌握知识为主',
          detail: '学习最重要的目的是掌握知识和提高能力，而不仅仅是取得好的成绩或者超过别人。好成绩不是目的，掌握知识才是目的，因此在制定目标的时候，应该制定掌握型目标，比如说“我要学会这个知识点”、“我要把这些单词背会”，而不是说“我要考XXX分”、“我要超过XXX”。'
        },
        {
          title: '学会识别自己的不合理信念，并与其进行辩论',
          detail: '有的时候经常会有一些这样的想法，特别是一次考试没考好时，比如“我考的这么差，我肯定考不上大学了”、“我的人生没有希望了”，这是一些不合理的信念和想法。在有这样的想法时，要提醒自己这些想法是不合理的，并与这些不合理的信念进行辩论，一次考试没考好并不能说明什么，有可能是最近学习不努力导致知识点掌握得不好，或者考试时状态不好，接下来及时努力学习或者及时调整状态就可以。高考是一个长期积累的过程，只有持续不断的学习，才能取得好成绩，一次两次的考试失误并不能说明问题。'
        },
        {
          title: '合理宣泄自己的负面情绪',
          detail: '如果学习动机过强，在遭遇考试失败时，情绪波动会比较大。在这个时候，要学会合理地宣泄自己的负面情绪，做一些自己喜欢的事情，比如说看电影、写日记等，也可以进行一些体育锻炼，女生可以做瑜伽或者跑步等，男生可以打篮球或者踢足球等。'
        }
      ],
      '学习兴趣': [
        {
          title: '学会通过强化的方法进行自我激励',
          detail: '在自己顺利完成一天的工作计划或者考试成绩有所进步时，可以奖励自己去看一场电影或者吃一顿美食，将自己喜欢的活动作为奖励激励自己的学习，有助于提高对学习的兴趣。'
        },
        {
          title: '培养对学习的内在兴趣',
          detail: '有意识地提醒自己，要在学习过程中感受快乐，解决难题获得知识本身是一件非常有满足感的事情，感受解决难题过程中的乐趣并在其中找寻成就感。'
        },
        {
          title: '多和同学交流',
          detail: '碰到不会的问题，自己思考仍然没有思路，可以和同学多多交流，一方面解决了自己的问题和困惑，另一方面也可以使得同学之间的关系更好。同学碰到不会的问题问自己，自己正好会的话，要耐心地给同学讲解，讲解的过程能够使得自己对这个知识点的理解更深。'
        }
      ],
      '学习目标': [
        {
          title: '根据个人实际情况制定目标和行动计划',
          detail: '制定目标和行动计划一定要结合个人的实际情况，在保证充足的睡眠时间和适当的娱乐活动的前提下制定合理的目标和行动计划。目标不要太多，行动计划注意不要安排得太满，要留有一定的机动时间。'
        },
        {
          title: '严格按照行动计划进行学习活动',
          detail: '安排好行动计划，最重要的是执行过程。在制定合理的目标和行动计划的基础上，严格按照行动计划执行，有助于提高自己的时间效能感。'
        },
      ]
    },
    endData: []
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    console.log(options)
    let assessType = options.assessType;
    let id = options.id;
    this.setData({
      assessType: assessType,
      id: id
    })
  },
  onReady: function () {
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
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
        this.goInit();
      })
  },
  goInit() {
    let reportScoreData = this.data.reportData.report.reportScoreData;
    let xAxisData = [];
    let seriesData = [];
    let idx = 0;
    let arr = [];
    for (var key in reportScoreData) {
      xAxisData.push(key);
      seriesData.push(reportScoreData[key].score);
      this.init( xAxisData, seriesData);
      if (reportScoreData[key].score >= 1) {
        this.data.tips[key].forEach((item) => {
          arr.push(item);
        })
      }
      this.setData({
        endData: arr
      })
    }
  },
  // 点击按钮后初始化图表
  init( xAxisData, seriesData) {
    var xAxisData = xAxisData;
    var seriesData = seriesData;
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      setOption(chart, xAxisData, seriesData);
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },

})