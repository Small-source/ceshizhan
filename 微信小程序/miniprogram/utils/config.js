// var host ="https://m.xuematech.com/papi";
// var host2="https://m.xuematech.com/api"
import HTTP from './port.js'
var host =HTTP.host;
var host2 = HTTP.host2;
var config ={
  host,
  //登录、注册模块
  login:{
    loginByOpenId: host + '/login/loginAppletByOpenId',//通过openId登陆
    getCodeByPhoneMobileTerminal: host +'/login/getCodeByPhoneMobileTerminal',//手机号发送验证码
    getUserInfoByPhone: host + '/login/getAppletUserInfoByPhoneCode',//绑定手机号
    storePassword: host + '/login/storePassword',//完善密码
    improveInfo: host + '/register/improveInfo',//完善个人信息
    dailishang: host +'/login/getMobileOpenProvince',//获取代理商省市
    getuserInfo: host +'/login/getUserInfo'
  },
  //专业定位测评
  zhuanYeDingWei:{
      cepingjindu: host + '/applet/startTestEvaluation',//测评进度
      tuijian: host +'/applet/getRecommendedMajor',//推荐专业
      tuanceTuijian: host +'/applet/getRecommendedMajorTeam',//团测推荐专业
      createTest: host2 +'/test/create',
      goonTest: host2 +'/usercenter/test/goon',//继续测试
      xgtx: host2 + '/test/mbti/list_mbti2',//人格特性试题列表
      xgtxCeHuang:host2 + '/test/polygraph/list',//人格特性测谎题列表
      xgtxCeHuangSubmit: host2 +'/result/polygraph/compute',//性格特性提交测谎题
      xgtxSubmit: host2 +'/result/mbti/mbti2/compute',//性格特性提交
      xqqx:host2 +'/test/hobby/holland/list',//兴趣倾向列表
      xqqxSubmit: host2 +'/result/hobby/holland/compute',//兴趣倾向提交
      saveNode: host2 +'/test/setNode',//保存进度
      makeOver: host2 +'/test/markOver',//测试完成
      cepingList1: host2 +'/common/report/detail',//专业定位测评接口一
      cepingList2: host +'/external/getAgentInfoByReportId',//专业定位测评接口二
      cepingList3: host2 +'/common/report/personality/content',//专业定位测评接口三
      cepingList4: host2 +'/common/report/interest/content',//专业定位测评接口四
      cepingList5: host2 +'/common/report/career/content'
  },
  //专业库
  zhuanYeku:{
    zhuanyeClass: host + '/target/getThreeLevelSubjectCategoryList',//专科本科一二三级分类
    searchSubject: host + '/target/getSubjectCategoryList',//搜索专业
    subjectDetail: host + '/target/subjectCategoryDetail',//专业详情
    kaisheyuanxiao: host + '/target/getSubjectUniversityRankList',//专业详情
  },
  //职业库
  zhiYeku:{
    zhiyelist: host+'/target/getOccupationCategoryList',//职业数据
    search: host +'/target/getOccupationList',//搜索职业
    detail: host +'/target/occupationDetail'
  },
  //学科评估
  xueKePinggu:{
    yiJiFenLei: host +'/applet/getSubjectEvaluationName',//返回一级分类名称
    xuekeResult: host +'/applet/getEvaluationBySubjectName',//根据一级分类名称返回评估结果
    yuanxiaoResult: host +'/applet/getEvaluationByUniversityName'//根据院校名称获取评估结果
  },
  //学习状态诊断测评
  xueXiCeping:{
    questionList: host + '/assessQuestion/getMobileReportNewID',//获取个人每个测评最新一条记录
    question7: host + '/assessQuestion/getRandomNumberFor10',//获取第七题测评题
    submit: host +'/assessQuestion/storeResult',//提交试题
    reportData: host +'/assessQuestion/getReport'//获取报告结果
  },
  matchingScholls: host+ '/targetSetting/getScoreMatchUniversityList',//成绩匹配院校
  xuankeDaxue: host +'/chooseSubject/getInstitutionSubjectRequireList',//选科按大学查询
  xuankeXueke: host +'/chooseSubject/getSubjectCanReportProfessionList',//选科按学科查询
  //团测部分
  tuance:{
    bindCard: host +'/login/appletTeamReportLogin',//卡号密码登录
    cepingjindu: host + '/applet/startTestEvaluationTeam',//测评进度
  }
}
module.exports=config;
