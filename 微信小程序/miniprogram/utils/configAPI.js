const API = {
  GET_USER_INFO: '/login/getUserInfo',//首页获取详情，城市信息
  STORE_RESERVE: '/expert/storeReserve',//预约咨询师
  IS_RESERVE: '/expert/isReserve',//是否可以预约
  GET_LIST: '/expert/getList',//咨询师列表
  Home_GET_LIST: '/expertNoLogin/getList',//咨询师列表
  DETAIL: '/expert/detail',//咨询师详情
  GET_APPLET_ARTICLE_LIST: '/article/getAppletArticleList',//资讯列表,
  GET_APPLET_ARTICLE_DETAIL: '/article/getArticleDetail',//资讯详情,
  APPLET_DETAIL: '/agent/appletDetail',//自定义资讯名称,
  GET_APPLET_SEL_ARTICLE_DETAIL: '/article/getAppletSelfArticleList',//自定义资讯,

  GET_LIVE_COLUMN_LIST: '/applet/getLiveColumnList',//课堂 - 近期直播、近期专栏列表,
  GET_COLUMN_LIST: '/applet/getColumnList',//课堂 - 专栏列表,
  GET_UNIVERSITY_VIDEO_LIST: '/applet/getUniversityVideoList',//课堂 - 大学视频列表,
  GET_SUBJECT_VIDEO_LIST: '/applet/getSubjectVideoList',//课堂 - 专业视频列表,
  GET_LIVE_COLUMN_DETAIL: '/applet/getLiveColumnDetail',//课堂 - 近期直播详情,
  GET_UNIVERSITY_VIDEO_DETAIL: '/applet/getUniversityVideoDetail',//课堂 - 大学视频详情/专业视频详情/专栏详情,

  GET_AGENT_INFO: '/applet/getAgentInfo',//服务、获取代理商相关信息,

  GET_UNIVERSITY_LIST: '/target/getUniversityList',  //获取院校列表
  UNIVERSITY_DETAIL: '/target/universityDetail',  //获取院校详情
  GET_GROUP_BY_TIME_LIST: '/progressionPlan/getUniversityOverviewGroupByTimeList',  //获取招生简章列表
  GET_OVERVIEW_DETAIL: '/progressionPlan/getOverviewDetail',  //获取招生简章详情
  STORE_UNIVERSITY: '/collect/storeUniversity',  //院校收藏 
  GET_COLLECT_UNIVERSITY_ID: '/collect/getCollectUniversityId',  //获取已收藏院校 

  STORE_SUBJECT: '/collect/storeSubject',  //专业收藏 
  GET_COLLECT_SUBJECT_ID: '/collect/getCollectSubjectId',  //获取已收藏专业 

  START_TEST_EVALUATION: '/applet/schedule', //获取选科进度
  GET_RECOMMENDE_MAJOR: '/applet/getRecommendedMajor', //获取专业定位测评完成后返回回来的目标专业
  GET_SUBJECT_CATEGORY_LIST: '/target/getSubjectCategoryList',  //获取专业列表
  STORE_SELECTION_DECISION: '/chooseSubject/storeSelectionDecision', // 向后台发送已选专业推荐加自选专业
  GET_SELECTION_ADVICE_LIST: '/chooseSubject/getSelectionAdviceList',  // 获取选科建议列表
  STORE_SELECTION_ADVICE_LIST: '/chooseSubject/storeSelectionAdviceApplet',  // 存储选科建议
  GET_CHOOSE_SUBJECT_REPORT_DETAIL: '/chooseSubject/getChooseSubjectReportDetail',  // 生成选科报告
  GET_CHOOSE_REPORT_LIST: '/applet/getChooseReportList',  // 选科报告列表
  GET_PCURL_BY_AGENT_ID: '/login/getPcUrlByAgentId',  // 根据代理商ID获取pc端网址

  GET_TOPIC_AND_OPTIONS_LIST: '/assessQuestion/getTopicAndOptionsList', //学习状态诊断获取测试题,              
  STORE_RESULT: '/assessQuestion/storeResult', //学习状态诊断获提交测试结果,              
  GET_REPORT: '/assessQuestion/getReport', //学习状态诊断获取报告,              
  GET_REPORT_LIST: '/assessQuestion/getReportList', //学习状态诊断获取报告,        
  GET_New_ID: '/assessQuestion/getMobileReportNewID', //学习状态诊断获取报告       

  GET_MOBILE_OPEN_PROVINCE: '/login/getMobileOpenProvince', //学习状态诊断获取报告           
  GET_ENCYCLOPEDIA_LIST: '/article/getEncyclopediaList', //获取高考百科列表        
  GET_ARTICLE_DETAIL: '/article/getArticleDetail', //获取高考百科详情   

  GET_COLLECTION_UNIVERSITY_LIST: '/collect/getCollectUniversityList', //我的/收藏/获取院校的收藏列表           
  GET_COLLECT_SUBJECT_WITH_SYART_LIST: '/collect/getCollectSubjectWithStartList', //我的/收藏/获取专业的收藏列表          
  STORE_START_UNIVERSITY: '/collect/storeStartUniversity', //我的/收藏/点亮院校星星           
  STORE_START_SUBJECT: '/collect/storeStartSubject', //我的/收藏/点亮专业星星  




  ADD_academic_Info_store: '/academicInfo/store', //我的/护航计划/添加学业信息    
  ADD_academic_Info_DETAIL: '/academicInfo/detail', //我的/护航计划/编辑学业信息    
  ADD_STORE_AWARD: '/award/storeAward', //我的/护航计划/添加获奖信息   
  ADD_DETAIL_AWARD: '/award/detailAward', //我的/护航计划/编辑获奖信息   
  APPLET_MONTH_PLAN: '/actionPlan/appletMonthPlan', //我的/护航计划/月计划列表   
  APPLET_WEEK_PLAN: '/actionPlan/appletWeekPlan', //我的/护航计划/周计划列表   
  APPLET_DAY_PLAN: '/actionPlan/appletDayPlan', //我的/护航计划/日计划列表  
  APPLET_WEEK_EDIT_PLAN: '/actionPlan/editCurrentMonthlyWeeklyPlan', //我的/护航计划/周计划点击实现完成状态  
  APPLET_DAY_EDIT_PLAN: '/applet/doneCurrentMonthlyWeeklyDayPlan' //我的/护航计划/日点击实现完成状态  

  

}
module.exports = API