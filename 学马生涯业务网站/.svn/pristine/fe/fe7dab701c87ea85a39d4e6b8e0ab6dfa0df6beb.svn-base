import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

// 首页
import Home from './views/home/Home.vue';

//资讯详情
const informationDetails = () => import('./views/zixun/xiangqing.vue');
//资讯列表
const informationList = () => import('./views/zixun/zixunList.vue');

//团测
const tuance = () => import('./views/login/tuance');
const tHome = () => import('./views/home/tHome')
//联系我们
const Aboutus = () => import('./views/aboutus/Aboutus.vue');
// const Jianjie = () => import("./views/aboutus/Jianjie.vue");
// const Callus = () => import("./views/aboutus/Callus.vue");
// 在线购买
const OnlineShopping = () => import('./views/onlineShopping/onlineShopping.vue');
// 在线激活
const OnlineActive = () => import( './views/onlineActive/OnlineActive.vue');
// 登录之后，已购卡去激活
const HadCardGoActive = () => import('./views/hadCardGoActive/hadCardGoActive.vue');
// 登录注册
const Login = () => import('./views/login/Login.vue');

// 完善个人信息
const PerfectInformation = () => import('./views/login/PerfectInformation.vue');
// 新高考生涯测评
const Shengyaceping = () => import('./views/xingaokao/shengyaceping/shengyaceping.vue');

// 测评完成显示该页面
const Cepingwancheng = () => import('./views/xingaokao/shengyaceping/cepingwancheng.vue');

// 新高考目标探索
const Mubiaotansuo = () => import('./views/xingaokao/mubiaotansuo/mubiaotansuo.vue');
// 院校库（新高考-目标探索）
const Yuanxiaoku = () => import('./views/xingaokao/mubiaotansuo/yuanxiaoku/yuanxiaoku.vue');
// 专业库（新高考-目标探索）
const Zhuanyeku = () => import('./views/xingaokao/mubiaotansuo/zhuanyeku/zhuanyeku.vue');
// // 职业库（新高考-目标探索）
const Zhiyeku = () => import('./views/xingaokao/mubiaotansuo/zhiyeku/zhiyeku.vue');
// 新高考目标探索 院校库(院校详情)
const Yuanxiaoxiangqing = () => import('./views/xingaokao/mubiaotansuo/yuanxiaoku/yuanxiaoxiangqing.vue');
// 新高考目标探索 院校库(招生简章)
const Zhaoshengjianzhang = () => import('./views/xingaokao/mubiaotansuo/yuanxiaoku/zhaoshengjianzhang.vue');
//院校对比
const Yuanxiaoduibi = () => import('./views/xingaokao/mubiaotansuo/yuanxiaoku/yuanxiaoduibi.vue');
// 新高考目标探索 专业库(专业详情)
const Zhuanyexiangqing = () => import('./views/xingaokao/mubiaotansuo/zhuanyeku/zhuanyexiangqing.vue');
// 新高考目标探索 职业库(职业详情)
const Zhiyexiangqing = () => import('./views/xingaokao/mubiaotansuo/zhiyeku/zhiyexiangqing.vue');

// 新高考选科决策
const Xuankejuece = () => import('./views/xingaokao/xuankejuece/xuankejuece.vue');
// 新高考(选科决策)(智能选科)
const Zhinengxuanke = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/zhinengxuanke.vue');
const Ceping = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/ceping.vue');
const Mubiaozhuanye = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/mubiaozhuanye.vue');
const Mubiaozhuanye2 = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/mubiaozhuanye2.vue');
const Xuekeyaoqiu = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/xuekeyaoqiu.vue');
const Xuekeyaoqiushezhi = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/xuekeyaoqiushezhi.vue');
const Xuankeyuanxiao = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/xuankeyuanxiao.vue');
const Pinghengdan1 = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/pinghengdan1.vue');
const Pinghengdan2 = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/pinghengdan2.vue');
const Xuankezhiyuan = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/xuankezhiyuan.vue');
const XuankeReport = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/xuankeReport.vue');
const ThreeResult = () => import('./views/xingaokao/xuankejuece/zhinengxuanke/components/threeResult.vue');
// const Xuankeceping = () => import('./views/xingaokao/xuankeceping/shengyaceping.vue');

// 新高考(选科决策)(根据专业选科目)
const MajorSelectedSubjects = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/majorSelectedSubjects.vue');
const Mmubiaozhuanye = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/mubiaozhuanye.vue');
const Mxuekeyaoqiu = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/xuekeyaoqiu.vue');
const Mxuekeyaoqiushezhi = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/xuekeyaoqiushezhi.vue');
const Mxuankeyuanxiao = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/xuankeyuanxiao.vue');
const Mpinghengdan1 = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/pinghengdan1.vue');
const Mpinghengdan2 = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/pinghengdan2.vue');
const Mxuankezhiyuan = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/xuankezhiyuan.vue');
const MxuankeReport = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/xuankeReport.vue');
const MthreeResult = () => import('./views/xingaokao/xuankejuece/majorSelectedSubjects/components/threeResult.vue');
// const Xuankeceping = () => import()'./views/xingaokao/xuankeceping/shengyaceping.vue';



// 新高考(选科决策)(学科直选)
const Xuekezhixuan = () => import('./views/xingaokao/xuankejuece/xuekezhixuan/xuekezhixuan.vue');
const University = () => import('./views/xingaokao/xuankejuece/xuekezhixuan/university.vue');
const Subject = () => import('./views/xingaokao/xuankejuece/xuekezhixuan/subject.vue');
const Major = () => import('./views/xingaokao/xuankejuece/xuekezhixuan/major.vue');

//学科评估
const Xuekepinggu = () => import('./views/xingaokao/xuankejuece/xuekepinggu/xuekepinggu.vue');
const XuekeUniversity = () => import('./views/xingaokao/xuankejuece/xuekepinggu/xuekeuniversity.vue');
const XuekeSubject = () => import('./views/xingaokao/xuankejuece/xuekepinggu/xuekesubject.vue');

// 升学规划
const Shengxueguihua = () => import('./views/shengxueguihua/shengxueguihua.vue');
// 高中竞赛视频播放器
const CompetitionVideoPlay = () => import('./views/shengxueguihua/commen/competitionVideoPlay.vue');
// 自主招生，综合评价，港澳升学，海外留学
// 自主招生
const Zizhuzhaosheng = () => import('./views/shengxueguihua/zizhuzhaosheng/zizhuzhaosheng.vue');
// 高中竞赛库
// 高中竞赛详情
const Gaozhongjingsaiku = () => import('./views/shengxueguihua/zizhuzhaosheng/component/gaozhongjingsaiku/gaozhongjingsaiku.vue');
const Competition = () => import('./views/shengxueguihua/zizhuzhaosheng/component/gaozhongjingsaiku/competition.vue');
const CompetitionVideoList = () => import('./views/shengxueguihua/zizhuzhaosheng/component/gaozhongjingsaiku/competitionVideoList.vue');
// 自招院校库
// 自招院校库详情
const Zizhaoyuanxiao = () => import('./views/shengxueguihua/zizhuzhaosheng/component/zizhaoyuanxiaoku/zizhaoyuanxiaoku.vue');
const Zizhaoyuanxiaoxiangqing = () => import('./views/shengxueguihua/zizhuzhaosheng/component/zizhaoyuanxiaoku/xuexiaoxiangqing.vue');
// 自招录取库
// 自招录取库详情
const Zizhaoluquku = () => import('./views/shengxueguihua/zizhuzhaosheng/component/zizhaoluquku/zizhaoluquku.vue');
const Zizhaoluquxiangqing = () => import('./views/shengxueguihua/zizhuzhaosheng/component/zizhaoluquku/luquxiangqing.vue');
// 自招复试（原在线课堂页面）
const Zizhaozongpingfushi = () => import('./views/shengxueguihua/zizhuzhaosheng/component/zizhaozongpingfushi/zizhaozongpingfushi.vue');



// 综合评价)
const Zonghepingjia = () => import('./views/shengxueguihua/zonghepingjia/zonghepingjia.vue');
// 高中竞赛库
// 高中竞赛详情
const ZPgaozhongjingsaiku = () => import('./views/shengxueguihua/zonghepingjia/component/gaozhongjingsaiku/gaozhongjingsaiku.vue');
const ZPcompetition = () => import('./views/shengxueguihua/zonghepingjia/component/gaozhongjingsaiku/competition.vue');
const ZPcompetitionVideoList = () => import('./views/shengxueguihua/zonghepingjia/component/gaozhongjingsaiku/competitionVideoList.vue');
// 综评院校库
// 综评院校库详情
const Zongpingyuanxiao = () => import('./views/shengxueguihua/zonghepingjia/component/zongpingyuanxiaoku/zongpingyuanxiaoku.vue');
const Zongpingyuanxiaoxiangqing = () => import('./views/shengxueguihua/zonghepingjia/component/zongpingyuanxiaoku/xuexiaoxiangqing.vue');
// 港澳升学
const Gangaoshengxue = () => import('./views/shengxueguihua/gangaoshengxue/gangaoshengxue.vue');
// 海外留学
const Haiwailiuxue = () => import('./views/shengxueguihua/haiwailiuxue/haiwailiuxue.vue');




//在线课堂
const OnlineClassroom = () => import('./views/zaixianketang/onlineClassroom.vue');
//在线课堂（自招笔试）
const Zizhaobishi = () => import('./views/zaixianketang/zizhaobishi.vue');
//在线课堂（自招面试）
const Zizhaomianshi = () => import('./views/zaixianketang/zizhaomianshi.vue');
// 教辅资源
const Jiaofuziyuan = () => import('./views/jiaofuziyuan/Jiaofuziyuan.vue');
// 个人中心
const Gerenzhongxin = () => import('./views/gerenzhongxin/Gerenzhongxin.vue');
// 个人中心（视频播放）
const Videoplay = () => import('./views/gerenzhongxin/component/videoplay.vue');
//中专
const Zhongzhuan = () => import('./views/zhongzhuan');
// 高考测评库
    //生涯测
    //主页面
    const EvluaClassify = () => import('./views/xingaokao/shengyaceping/view/evlua/classify.vue');
    const EvluaClassify12 = () => import('./views/xingaokao/shengyaceping/view/evlua/classify12');
    const EvluaClassify13 = () => import('./views/xingaokao/shengyaceping/view/evlua/classify13');
    const EvluaClassify14 = () => import('./views/xingaokao/shengyaceping/view/evlua/classify14');
    const EvluaClassify22 = () => import('./views/xingaokao/shengyaceping/view/evlua/classify22');
    const EvluaClassify23 = () => import('./views/xingaokao/shengyaceping/view/evlua/classify23');
    // 认知潜能
    const RzqnIndex = () => import('./views/xingaokao/shengyaceping/view/rzqn/index.vue');
    const RzqnQuesOne = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques1');
    const RzqnQues21 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques21');
    const RzqnQues22 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques22');
    const RzqnQues3 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques3');
    const RzqnQues4 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques4');
    const RzqnQues5 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques5');
    const RzqnQues6 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques6');
    const RzqnQues71 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques71');
    const RzqnQues72 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques72');
    const RzqnQues8 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques8');
    const RzqnQues91 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques91');
    const RzqnQues92 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques92');
    const RzqnQues10 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques10');
    const RzqnQues11 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques11');
    const RzqnQues121 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques121')
    const RzqnQues122 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques122')
    const RzqnQues123 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques123')
    const RzqnQues13 = () => import('./views/xingaokao/shengyaceping/view/rzqn/ques13')
    const RzqnInstru1 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru1')
    const RzqnInstru21 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru21')
    const RzqnInstru3 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru3')
    const RzqnInstru4 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru4')
    const RzqnInstru5 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru5')
    const RzqnInstru6 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru6')
    const RzqnInstru7 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru7')
    const RzqnInstru8 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru8')
    const RzqnInstru9 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru9')
    const RzqnInstru10 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru10')
    const RzqnInstru11 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru11')
    const RzqnInstru12 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru12')
    const RzqnInstru13 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesInstru13')
    const RzqnGuide1 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide1')
    const RzqnGuide21 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide21')
    const RzqnGuide22 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide22')
    const RzqnGuide3 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide3')
    const RzqnPlay3 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesPlay3')
    const RzqnGuide4 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide4')
    const RzqnGuide5 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide5')
    const RzqnGuide6 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide6')
    const RzqnGuide71 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide71')
    const RzqnGuide72 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide72')
    const RzqnPlay7 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesPlay7')
    const RzqnGuide8 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide8')
    const RzqnGuide91 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide91')
    const RzqnGuide92 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide92')
    const RzqnGuide10 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide10')
    const RzqnGuide11 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide11')
    const RzqnGuide121 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide121')
    const RzqnGuide122 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide122')
    const RzqnGuide123 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide123')
    const RzqnGuide13 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesGuide13')
    const RzqnSuccess1 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess1')
    const RzqnSuccess21 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess21')
    const RzqnSuccess22 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess22')
    const RzqnSuccess3 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess3')
    const RzqnSuccess4 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess4')
    const RzqnSuccess5 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess5')
    const RzqnSuccess6 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess6')
    const RzqnSuccess71 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess71')
    const RzqnSuccess72 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess72')
    const RzqnSuccess8 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess8')
    const RzqnSuccess91 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess91')
    const RzqnSuccess92 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess92')
    const RzqnSuccess10 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess10')
    const RzqnSuccess11 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess11')
    const RzqnSuccess121 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess121')
    const RzqnSuccess122 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess122')
    const RzqnSuccess123 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess123')
    const RzqnSuccess13 = () => import('./views/xingaokao/shengyaceping/view/rzqn/quesSuccess13')
    //性格特性
    const XgtxIndex = () => import('./views/xingaokao/shengyaceping/view/xgtx/index')
    const quesOne = () => import('./views/xingaokao/shengyaceping/view/xgtx/quesOne')
    const quesGuide1 = () => import('./views/xingaokao/shengyaceping/view/xgtx/quesGuide1')
    const quesGuide2 = () => import('./views/xingaokao/shengyaceping/view/xgtx/quesGuide2')
    const quesSuccess1 = () => import('./views/xingaokao/shengyaceping/view/xgtx/quesSuccess1')
    const quesSuccess2 = () => import('./views/xingaokao/shengyaceping/view/xgtx/quesSuccess2')
    const quesTwo = () => import('./views/xingaokao/shengyaceping/view/xgtx/quesTwo')
    //心理健康
    const XljkIndex = () => import('./views/xingaokao/shengyaceping/view/xljk/index')
    const XljkGuide = () => import('./views/xingaokao/shengyaceping/view/xljk/quesGuide')
    const xljkQuesOne = () => import('./views/xingaokao/shengyaceping/view/xljk/quesOne')
    const xljkQuesSuccess = () => import('./views/xingaokao/shengyaceping/view/xljk/quesSuccess')
    //兴趣倾向
    const XqqxIndex = () => import('./views/xingaokao/shengyaceping/view/xqqx/index')
    const XkcjIndex = () => import('./views/xingaokao/shengyaceping/view/xqqx/index2')
    const XqqxQuesOne = () => import('./views/xingaokao/shengyaceping/view/xqqx/ques1')
    const XqqxQuesTwo = () => import('./views/xingaokao/shengyaceping/view/xqqx/ques2')
    const XqqxQuesThree = () => import('./views/xingaokao/shengyaceping/view/xqqx/ques3')
    const XqqxQuesFour = () => import('./views/xingaokao/shengyaceping/view/xqqx/ques4')
    const XqqxGuide1 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesGuide1')
    const XqqxGuide2 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesGuide2')
    const XqqxGuide3 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesGuide3')
    const XqqxGuide4 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesGuide4')
    const XqqxSuccess1 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesSuccess1')
    const XqqxSuccess2 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesSuccess2')
    const XqqxSuccess3 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesSuccess3')
    const XqqxSuccess4 = () => import('./views/xingaokao/shengyaceping/view/xqqx/quesSuccess4')







Vue.use(VueRouter);
const routes = [
  // 联系我们
  // {path:'/aboutus',name:'aboutus',component:Aboutus},
   // 关于我们
  { path: '/aboutus', component: Aboutus,
    // children: [
    //   { path: '/aboutus/jianjie',
    //     name: 'jianjie',
    //     component: Jianjie
    //   },
    //   // 绝对路径
    //   { path: '/aboutus/callus',
    //     name: 'callus',
    //     component: Callus
    //   }
    // ]
  },
  //中转
  {path:'/zhongzhuan',name:'zhongzhuan',component:Zhongzhuan},
    {path:'/informationDetails',name:' informationDetails',component: informationDetails},
    {path:'/informationList',name:' informationList',component: informationList},
  // 登录之后，已购卡去激活
  { path: '/hadCardGoActive', name: 'hadCardGoActive', component: HadCardGoActive },
  // 在线购买
  { path: '/onlineShopping', name: 'onlineShopping', component: OnlineShopping },
  // 在线激活
  { path: '/onlineActive', name: 'onlineActive', component: OnlineActive },
  // 登录页面
  { path: '/login', component: Login },
  // 完善个人信息
  { path: '/perfectInformation', component: PerfectInformation },
  // 个人中心
  { path: '/gerenzhongxin', name: 'gerenzhongxin', component: Gerenzhongxin
    // meta: { keepAlive: true }
  },
    //团测登录页
    {path:'/tuance',name:'tuance',component:tuance},
    //团测首页
    {path:'/tHome',name:'tHome',component:tHome},
  // 首页
  { path: '/home', component: Home },
  // 新高考生涯测评
  {
      path: '/shengyaceping',
      component: Shengyaceping,
      children:[
          {
              path: '/',
              name: 'EvluaClassify',
              component:EvluaClassify
          },
          {
              path: '/shengyaceping/evlua/classify/12',
              name: 'EvluaClassify12',
              component: EvluaClassify12,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/evlua/classify/13',
              name: 'EvluaClassify13',
              component: EvluaClassify13,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/evlua/classify/14',
              name: 'EvluaClassify14',
              component: EvluaClassify14,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/evlua/classify/22',
              name: 'EvluaClassify22',
              component: EvluaClassify22,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/evlua/classify/23',
              name: 'EvluaClassify23',
              component: EvluaClassify23,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          // 认知潜能
          {
              path: '/shengyaceping/rzqn',
              name: 'RZQN',
              component: RzqnIndex,
          },
          {
              path: '/shengyaceping/rzqn/1',
              name: 'RzqnQuesOne',
              component: RzqnQuesOne
          },
          {
              path: '/shengyaceping/rzqn/21',
              name: 'RzqnQues21',
              component: RzqnQues21
          },
          {
              path: '/shengyaceping/rzqn/22',
              name: 'RzqnQues22',
              component: RzqnQues22
          },
          {
              path: '/shengyaceping/rzqn/3',
              name: 'RzqnQues3',
              component: RzqnQues3
          },
          {
              path: '/shengyaceping/rzqn/4',
              name: 'RzqnQues4',
              component: RzqnQues4
          },
          {
              path: '/shengyaceping/rzqn/5',
              name: 'RzqnQues5',
              component: RzqnQues5
          },
          {
              path: '/shengyaceping/rzqn/6',
              name: 'RzqnQues6',
              component: RzqnQues6
          },
          {
              path: '/shengyaceping/rzqn/7',
              name: 'RzqnQues71',
              component: RzqnQues71
          },
          {
              path: '/shengyaceping/rzqn/72',
              name: 'RzqnQues72',
              component: RzqnQues72
          },
          {
              path: '/shengyaceping/rzqn/8',
              name: 'RzqnQues8',
              component: RzqnQues8
          },
          {
              path: '/shengyaceping/rzqn/91',
              name: 'RzqnQues91',
              component: RzqnQues91
          },
          {
              path: '/shengyaceping/rzqn/92',
              name: 'RzqnQues92',
              component: RzqnQues92
          },
          {
              path: '/shengyaceping/rzqn/10',
              name: 'RzqnQues10',
              component: RzqnQues10
          },
          {
              path: '/shengyaceping/rzqn/11',
              name: 'RzqnQues11',
              component: RzqnQues11
          },
          {
              path: '/shengyaceping/rzqn/121',
              name: 'RzqnQues121',
              component: RzqnQues121
          },
          {
              path: '/shengyaceping/rzqn/122',
              name: 'RzqnQues122',
              component: RzqnQues122
          },
          {
              path: '/shengyaceping/rzqn/123',
              name: 'RzqnQues123',
              component: RzqnQues123
          },
          {
              path: '/shengyaceping/rzqn/13',
              name: 'RzqnQues13',
              component: RzqnQues13
          },
          {
              path: '/shengyaceping/rzqn/instru/1',
              name: 'RzqnInstru1',
              component: RzqnInstru1
          },
          {
              path: '/shengyaceping/rzqn/instru/2',
              name: 'RzqnInstru21',
              component: RzqnInstru21
          },
          {
              path: '/shengyaceping/rzqn/instru/3',
              name: 'RzqnInstru3',
              component: RzqnInstru3
          },

          {
              path: '/shengyaceping/rzqn/instru/4',
              name: 'RzqnInstru4',
              component: RzqnInstru4,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/instru/5',
              name: 'RzqnInstru5',
              component: RzqnInstru5
          },
          {
              path: '/shengyaceping/rzqn/instru/6',
              name: 'RzqnInstru6',
              component: RzqnInstru6
          },
          {
              path: '/shengyaceping/rzqn/instru/7',
              name: 'RzqnInstru7',
              component: RzqnInstru7
          },
          {
              path: '/shengyaceping/rzqn/instru/8',
              name: 'RzqnInstru8',
              component: RzqnInstru8
          },
          {
              path: '/shengyaceping/rzqn/instru/9',
              name: 'RzqnInstru9',
              component: RzqnInstru9
          },
          {
              path: '/shengyaceping/rzqn/instru/10',
              name: 'RzqnInstru10',
              component: RzqnInstru10
          },
          {
              path: '/shengyaceping/rzqn/instru/11',
              name: 'RzqnInstru11',
              component: RzqnInstru11
          },
          {
              path: '/shengyaceping/rzqn/instru/12',
              name: 'RzqnInstru12',
              component: RzqnInstru12
          },
          {
              path: '/shengyaceping/rzqn/instru/13',
              name: 'RzqnInstru13',
              component: RzqnInstru13
          },
          {
              path: '/shengyaceping/rzqn/guide/1',
              name: 'RzqnGuide1',
              component: RzqnGuide1
          },
          {
              path: '/shengyaceping/rzqn/guide/21',
              name: 'RzqnGuide21',
              component: RzqnGuide21
          },
          {
              path: '/shengyaceping/rzqn/guide/22',
              name: 'RzqnGuide22',
              component: RzqnGuide22
          },
          {
              path: '/shengyaceping/rzqn/guide/3',
              name: 'RzqnGuide3',
              component: RzqnGuide3
          },
          {
              path: '/shengyaceping/rzqn/play/3',
              name: 'RzqnPlay3',
              component: RzqnPlay3
          },
          {
              path: '/shengyaceping/rzqn/guide/4',
              name: 'RzqnGuide4',
              component: RzqnGuide4
          },
          {
              path: '/shengyaceping/rzqn/guide/5',
              name: 'RzqnGuide5',
              component: RzqnGuide5
          },
          {
              path: '/shengyaceping/rzqn/guide/6',
              name: 'RzqnGuide6',
              component: RzqnGuide6
          },
          {
              path: '/shengyaceping/rzqn/guide/7',
              name: 'RzqnGuide71',
              component: RzqnGuide71
          },
          {
              path: '/shengyaceping/rzqn/play/7',
              name: 'RzqnPlay7',
              component: RzqnPlay7
          },
          {
              path: '/shengyaceping/rzqn/guide/72',
              name: 'RzqnGuide72',
              component: RzqnGuide72
          },
          {
              path: '/shengyaceping/rzqn/guide/8',
              name: 'RzqnGuide8',
              component: RzqnGuide8
          },
          {
              path: '/shengyaceping/rzqn/guide/91',
              name: 'RzqnGuide91',
              component: RzqnGuide91,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/guide/92',
              name: 'RzqnGuide92',
              component: RzqnGuide92,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/guide/10',
              name: 'RzqnGuide10',
              component: RzqnGuide10,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/guide/11',
              name: 'RzqnGuide11',
              component: RzqnGuide11,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },

          {
              path: '/shengyaceping/rzqn/guide/121',
              name: 'RzqnGuide121',
              component: RzqnGuide121,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/guide/122',
              name: 'RzqnGuide122',
              component: RzqnGuide122,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/guide/123',
              name: 'RzqnGuide123',
              component: RzqnGuide123,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/guide/13',
              name: 'RzqnGuide13',
              component: RzqnGuide13,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/1',
              name: 'RzqnSuccess1',
              component: RzqnSuccess1,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/21',
              name: 'RzqnSuccess21',
              component: RzqnSuccess21,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/22',
              name: 'RzqnSuccess22',
              component: RzqnSuccess22,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/3',
              name: 'RzqnSuccess3',
              component: RzqnSuccess3,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/4',
              name: 'RzqnSuccess4',
              component: RzqnSuccess4,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/5',
              name: 'RzqnSuccess5',
              component: RzqnSuccess5,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/6',
              name: 'RzqnSuccess6',
              component: RzqnSuccess6,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/7',
              name: 'RzqnSuccess71',
              component: RzqnSuccess71,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/72',
              name: 'RzqnSuccess72',
              component: RzqnSuccess72,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/8',
              name: 'RzqnSuccess8',
              component: RzqnSuccess8,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/91',
              name: 'RzqnSuccess91',
              component: RzqnSuccess91,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/92',
              name: 'RzqnSuccess92',
              component: RzqnSuccess92,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/10',
              name: 'RzqnSuccess10',
              component: RzqnSuccess10,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/11',
              name: 'RzqnSuccess11',
              component: RzqnSuccess11,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/121',
              name: 'RzqnSuccess121',
              component: RzqnSuccess121,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/122',
              name: 'RzqnSuccess122',
              component: RzqnSuccess122,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/123',
              name: 'RzqnSuccess123',
              component: RzqnSuccess123,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/rzqn/success/13',
              name: 'RzqnSuccess13',
              component: RzqnSuccess13,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          //人格特性测评
          {
              path: '/shengyaceping/xgtx',
              name: 'XgtxIndex',
              component: XgtxIndex,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xgtx/guide/1',
              name: 'quesGuide1',
              component: quesGuide1,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xgtx/guide/2',
              name: 'quesGuide2',
              component: quesGuide2,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xgtx/1',
              name: 'quesOne',
              component: quesOne,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xgtx/2',
              name: 'quesTwo',
              component: quesTwo,
              meta: {
                  // requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xgtx/success/1',
              name: 'quesSuccess1',
              component: quesSuccess1,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xgtx/success/2',
              name: 'quesSuccess2',
              component: quesSuccess2,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          // 心理健康
          {
              path: '/shengyaceping/xljk',
              name: 'XLJK',
              component: XljkIndex,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xljk/guide',
              name: 'XljkGuide',
              component: XljkGuide,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xljk/1',
              name: 'quesOne1',
              component: xljkQuesOne,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xljk/success',
              name: 'xljkQuesSuccess',
              component: xljkQuesSuccess,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          // 兴趣倾向
          {
              path: '/shengyaceping/xqqx',
              name: 'XQQX',
              component: XqqxIndex,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          // 学科成绩
          {
              path: '/shengyaceping/xkcj',
              name: 'XKCJ',
              component: XkcjIndex,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/1',
              name: 'XqqxQuesOne',
              component: XqqxQuesOne,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/2',
              name: 'XqqxQuesTwo',
              component: XqqxQuesTwo,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/3',
              name: 'XqqxQuesThree',
              component: XqqxQuesThree,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/4',
              name: 'XqqxQuesFour',
              component: XqqxQuesFour,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/guide/1',
              name: 'XqqxGuide1',
              component: XqqxGuide1,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/guide/2',
              name: 'XqqxGuide2',
              component: XqqxGuide2,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/guide/3',
              name: 'XqqxGuide3',
              component: XqqxGuide3,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/guide/4',
              name: 'XqqxGuide4',
              component: XqqxGuide4,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/success/4',
              name: 'XqqxSuccess4',
              component: XqqxSuccess4,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/success/1',
              name: 'XqqxSuccess1',
              component: XqqxSuccess1,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/success/2',
              name: 'XqqxSuccess2',
              component: XqqxSuccess2,
              meta: {
                  requireAuth: true, // 需要登录
              }
          },
          {
              path: '/shengyaceping/xqqx/success/3',
              name: 'XqqxSuccess3',
              component: XqqxSuccess3,
              meta: {
                  requireAuth: true, // 需要登录
              }
          }
      ]
  },
  { path: '/cepingwancheng', component: Cepingwancheng },
  // 新高考目标探索
  { path: '/mubiaotansuo/yuanxiaoku', component: Mubiaotansuo,
    meta: { keepAlive: true },
    children: [
      // 院校库
      { path: '/mubiaotansuo/yuanxiaoku',
        name: 'yuanxiaoku',
        component: Yuanxiaoku,
        meta: { keepAlive: true },
      },
      // 专业库
      { path: '/mubiaotansuo/zhuanyeku',
        name: 'zhuanyeku',
        component: Zhuanyeku,
        meta: { keepAlive: true }
      },
      // 职业库
      { path: '/mubiaotansuo/zhiyeku',
        name: 'zhiyeku',
        component: Zhiyeku,
        meta: { keepAlive: true },
      },
    ]
  },

  // 新高考目标探索 院校库(院校详情)。
  { path: '/yuanxiaoxiangqing', component: Yuanxiaoxiangqing, name: 'yuanxiaoxiangqing' },
    // 新高考目标探索 院校库(招生简章)。
  { path: '/zhaoshengjianzhang', component: Zhaoshengjianzhang, name: 'zhaoshengjianzhang' },
  // 院校对比
  { path: '/yuanxiaoduibi', component: Yuanxiaoduibi, name: 'yuanxiaoduibi' },
  // 新高考目标探索 专业库(专业详情)
  { path: '/zhuanyexiangqing', component: Zhuanyexiangqing, name: 'zhuanyexiangqing' },
  // 新高考目标探索 职业库(职业详情)
  { path: '/zhiyexiangqing', component: Zhiyexiangqing, name: 'zhiyexiangqing' },


  // 新高考选科决策
  { path: '/xuankejuece', component: Xuankejuece },
  // 新高考(选科决策)智能选科
  // { path: '/zhinengxuanke', component: Zhinengxuanke },
  // 新高考智能选科
  { path: '/zhinengxuanke/xuankeceping', component: Zhinengxuanke,
    meta: { keepAlive: true },
    children: [
      // 选科ceping
      // { path: '/zhinengxuanke/xuankeceping',
      //   name: 'ceping',
      //   component: Xuankeceping,
      //   children:[
      //         {
      //             path: '/zhinengxuanke/ceping',
      //             name: 'cengping',
      //             component:Ceping,
      //         }
      //     ]
      // },
      // 设置目标专业
      { path: '/zhinengxuanke/mubiaozhuanye',
        name: 'mubiaozhuanye',
        component: Mubiaozhuanye,
        meta: { keepAlive: true },
      },
             // 设置目标专业
      { path: '/zhinengxuanke/mubiaozhuanye2',
        name: 'mubiaozhuanye2',
        component: Mubiaozhuanye2,
        meta: { keepAlive: true },
      },
      // 目标专业学科要求
      { path: '/zhinengxuanke/xuekeyaoqiu',
        name: 'xuekeyaoqiu',
        component: Xuekeyaoqiu,
        // meta: { keepAlive: true },
      },
      // 目标专业选科院校
      { path: '/zhinengxuanke/xuankeyuanxiao',
        name: 'xuankeyuanxiao',
        component: Xuankeyuanxiao,
        // meta: { keepAlive: true },
      },
       // 目标专业学科要求设置
      { path: '/zhinengxuanke/xuekeyaoqiushezhi',
        name: 'xuekeyaoqiushezhi',
        component: Xuekeyaoqiushezhi,
        // meta: { keepAlive: true },
      },
      // 填写平衡单
      { path: '/zhinengxuanke/pinghengdan1',
        name: 'pinghengdan1',
        component: Pinghengdan1,
        // meta: { keepAlive: true },
      },
      { path: '/zhinengxuanke/pinghengdan2',
        name: 'pinghengdan2',
        component: Pinghengdan2,
        // meta: { keepAlive: true },
      },
       // 设置选科志愿
      { path: '/zhinengxuanke/xuankezhiyuan',
        name: 'xuankezhiyuan',
        component: Xuankezhiyuan,
        // meta: { keepAlive: true },
      },
                 // 选科报告
      { path: '/zhinengxuanke/xuankeReport',
        name: 'xuankeReport',
        component: XuankeReport,
        // meta: { keepAlive: true },
      },
       // 设置3科学科跳至结果
      { path: '/zhinengxuanke/threeResult',
        name: 'threeResult',
        component: ThreeResult,
        meta: { keepAlive: true },
      },
    ]
  },



 // 新高考根据专业选科目
  { path: '/majorSelectedSubjects/mubiaozhuanye', component: MajorSelectedSubjects,
    meta: { keepAlive: true },
    children:[
      // 设置目标专业
      { path: '/majorSelectedSubjects/mubiaozhuanye',
        name: 'Mmubiaozhuanye',
        component: Mmubiaozhuanye,
        meta: { keepAlive: true },
      },
      // 目标专业学科要求
      { path: '/majorSelectedSubjects/xuekeyaoqiu',
        name: 'Mxuekeyaoqiu',
        component: Mxuekeyaoqiu,
        // meta: { keepAlive: true },
      },
      // 目标专业选科院校
      { path: '/majorSelectedSubjects/xuankeyuanxiao',
        name: 'Mxuankeyuanxiao',
        component: Mxuankeyuanxiao,
        // meta: { keepAlive: true },
      },
       // 目标专业学科要求设置
      { path: '/majorSelectedSubjects/xuekeyaoqiushezhi',
        name: 'Mxuekeyaoqiushezhi',
        component: Mxuekeyaoqiushezhi,
        // meta: { keepAlive: true },
      },
      // 填写平衡单
      { path: '/majorSelectedSubjects/pinghengdan1',
        name: 'Mpinghengdan1',
        component: Mpinghengdan1,
        // meta: { keepAlive: true },
      },
      { path: '/majorSelectedSubjects/pinghengdan2',
        name: 'Mpinghengdan2',
        component: Mpinghengdan2,
        // meta: { keepAlive: true },
      },
       // 设置选科志愿
      { path: '/majorSelectedSubjects/xuankezhiyuan',
        name: 'Mxuankezhiyuan',
        component: Mxuankezhiyuan,
        // meta: { keepAlive: true },
      },
           // 选科报告
      { path: '/majorSelectedSubjects/xuankeReport',
        name: 'MxuankeReport',
        component: MxuankeReport,
        // meta: { keepAlive: true },
      },
       // 设置3科学科跳至结果
      { path: '/majorSelectedSubjects/threeResult',
        name: 'MthreeResult',
        component: MthreeResult,
        meta: { keepAlive: true },
      },
    ]
  },
  // 新高考(选科决策)(学科直选)
  {
      path: '/xuekezhixuan',
      component: Xuekezhixuan ,
      children:[
          {
              path: '/xuekezhixuan/university',
              component:University,
          },
          {
              path: '/xuekezhixuan/subject',
              component:Subject
          },
          {
              path: '/xuekezhixuan/major',
              component:Major
          }
      ]
  },
// 新高考(选科决策)(学科评估)
{
    path: '/xuekepinggu',
    component: Xuekepinggu ,
    children:[
        {
            path: '/xuekepinggu/xuekeuniversity',
            component:XuekeUniversity,
        },
        {
            path: '/xuekepinggu/xuekesubject',
            component:XuekeSubject
        }
    ]
},

    // 升学规划
  {
      path: '/shengxueguihua',
      component: Shengxueguihua ,
      redirect: '/shengxueguihua/zizhuzhaosheng',
      children:[
          // 升学规划(自主招生)
          {
              path: '/shengxueguihua/zizhuzhaosheng',
              component:Zizhuzhaosheng
          },
          // 升学规划(综合评价)
          {
              path: '/shengxueguihua/zonghepingjia',
              component:Zonghepingjia
          },
          // 升学规划(港澳升学)
          {
              path: '/shengxueguihua/gangaoshengxue',
              component:Gangaoshengxue
          },
          // 升学规划(海外留学)
          {
              path: '/shengxueguihua/haiwailiuxue',
              component:Haiwailiuxue
          }
      ]
  },
  // 升学规划/自主招生(自招院校库，院校库详情)
  // 视频播放
  { path: '/competitionVideoPlay', name: 'competitionVideoPlay', component: CompetitionVideoPlay },

  { path: '/zizhaoyuanxiao', name: 'zizhaoyuanxiao', component: Zizhaoyuanxiao },
  { path: '/zizhaoyuanxiaoxiangqing', name: 'zizhaoyuanxiaoxiangqing', component: Zizhaoyuanxiaoxiangqing },
  // 升学规划/自主招生(高中竞赛库，竞赛详情)
  { path: '/highSchoolCompetition', name: 'highSchoolCompetition', component: Gaozhongjingsaiku },
  { path: '/competition', name: 'competition', component: Competition },
  { path: '/competitionVideoList', name: 'competitionVideoList', component: CompetitionVideoList },
  // 升学规划/自主招生(自招录取库，录取详情)
  { path: '/zizhaoluquku', name: 'zizhaoluquku', component: Zizhaoluquku },
  { path: '/zizhaoluquxiangqing', name: 'zizhaoluquxiangqing', component: Zizhaoluquxiangqing },
  // 升学规划/自主招生(自招综评复试原（在线课堂页面）)
  { path: '/zizhaozongpingfushi', component: Zizhaozongpingfushi, name: 'zizhaozongpingfushi' },
  // 升学规划/综合评价(综评院校库，综评院校库详情)
  { path: '/zongpingyuanxiao', name: 'zongpingyuanxiao', component: Zongpingyuanxiao },
  { path: '/zongpingyuanxiaoxiangqing', name: 'zongpingyuanxiaoxiangqing', component: Zongpingyuanxiaoxiangqing },
  // 升学规划/综合评价(高中竞赛库，竞赛详情)
  { path: '/zphighSchoolCompetition', name: 'zphighSchoolCompetition', component: ZPgaozhongjingsaiku },
  { path: '/zpcompetition', name: 'zpcompetition', component: ZPcompetition },
  { path: '/zpcompetitionVideoList', name: 'zpcompetitionVideoList', component: ZPcompetitionVideoList },
  // 自愿填报
  // { path: '/zhiyuantianbao', component: Zhiyuantianbao, name: '/zhiyuantianbao' },


  //在线课堂
  { path: '/onlineClassroom', component: OnlineClassroom, name: 'onlineClassroom' },
  //在线课堂（自招笔试）
  { path: '/zizhaobishi', component: Zizhaobishi },
  //在线课堂（自招面试）
  { path: '/zizhaomianshi', component: Zizhaomianshi },
  //在线课堂 （视频播放页面）
  { path: '/videoplay', component: Videoplay, name: 'videoplay' },

  //教辅资源
  { path: '/jiaofuziyuan', component: Jiaofuziyuan },
  //,
  { path: '/', component: Home }
]

const mode = 'hash';
const router = new VueRouter({ routes, mode });
router.beforeEach((to, from, next) => {
  const nextRoute = ['/jiaofuziyuan','/xuekezhixuan','/zhongzhuan','/shengxueguihua/zizhuzhaosheng','/zhinengxuanke/xuankeceping', '/mubiaotansuo/yuanxiaoku','/mubiaotansuo/zhuanyeku','/mubiaotansuo/zhiyeku', '/xuankejuece','/shengxueguihua','/zizhaobishi','/zizhaomianshi','/onlineClassroom',
  '/xuekezhixuan/subject','/zizhaoluquku','/highSchoolCompetition','/xuekezhixuan/university','/xuekepinggu/xuekesubject','/xuekepinggu/xuekeuniversity']
  // 检测是否登录的页面
    if(to.path!='/login'){
        sessionStorage.setItem('page',to.path);
    }
    if(nextRoute.indexOf(to.path) >= 0) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面 ,
        var ymtxUserMessage = sessionStorage.getItem('ymtxUserMessage');
        var ymtxUserMessageSuccess = window.sessionStorage.getItem('ymtxUserMessageSuccess', ymtxUserMessageSuccess);
        var isThreeLogin = window.sessionStorage.getItem('isThreeLogin');
        var threeLogin = window.sessionStorage.getItem('threeLogin');
        var threeRegister = window.sessionStorage.getItem('threeRegister');
        console.log(10)
        if(!ymtxUserMessage) {
            if(isThreeLogin&&isThreeLogin==1) {
                window.location.href = threeLogin;
                return;
            }
            next(
                '/login'
            )
            return;
        }else if(ymtxUserMessageSuccess == 2) {
            next(
                '/perfectInformation'
            )
            return;
        }else {
            if(isThreeLogin==1&&to.path=="/login") {
                window.location.href = threeLogin;
                return;
            }
            next()
            return;
        }
        return;
    }
    next();
    return;
})
export default router;



