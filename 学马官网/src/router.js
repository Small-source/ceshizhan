import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
// 引入关于我们
import Aboutus from './views/Aboutus.vue';
import Jianjie from "./views/aboutus/Jianjie.vue";
import Callus from "./views/aboutus/Callus.vue";

// 学马新闻
import XuemaNews from "./views/xuemaNews/xuemaNews.vue";
// 新闻详情
import NewsDetail from "./views/xuemaNews/newsDetail.vue";



// 招商合作
import AttractInvestment from "./views/attractInvestment/attractInvestment.vue";
// 研学营
import ResearchCamp from "./views/researchCamp/ResearchCamp.vue";
// vip护航计划
import VipEscort from "./views/vipEscort/VipEscort.vue";
// import Zixun from "./aboutus/Zixun.vue";
// import Aboutus from './views/Aboutus.vue';

// 02校园解决方案（新高考）
import Xingaokao from './views/Xingaokao.vue';
// 03生涯发展管理云平台
import Pingtaixitong from './views/Pingtaixitong.vue';
// 04生涯测评系统
import Shengyaceping from './views/Shengyaceping.vue';
// 05选科决策
import Xuankejuece from './views/Xuankejuece.vue';
// 06走班排课系统（智能排课）
import Zhinengpaike from './views/Zhinengpaike.vue';
// 07教辅资源
import Jiaofuziyuan from './views/Jiaofuziyuan.vue';
// 08综合素质评价系统
import Zonghesuzhi from './views/Zonghesuzhi.vue';
// 09自主招生页面（删除）
// import Zizhuzhaosheng from './views/Zizhuzhaosheng.vue';

// 10高考志愿填报系统
import Gaokaozhiyuan from './views/Gaokaozhiyuan.vue';
// 11走班校园管理系统（原走班排课）
import Zoubanxiaoyuan from './views/Zoubanxiaoyuan.vue';
// 12走班考试分析系统
import Zoubankaoshixitong from './views/Zoubankaoshixitong.vue';
// 13教师培养（生涯指导教师）
import Shengyazhidao from './views/Shengyazhidao.vue';
// 14生涯课程
import Shengyakecheng from './views/Shengyakecheng.vue';
// 15升学规划服务体系
import Shengxueguihua from './views/Shengxueguihua.vue';
// 16志愿填报指导
import Zhiyuantianbaozhidao from './views/Zhiyuantianbaozhidao.vue';
// 17自招综评
import Zizhaozongping from './views/Zizhaozongping.vue';
// 18背景提升
import Beijingtisheng from './views/Beijingtisheng.vue';
// 19西班牙留学
import SpainStudy from './views/SpainStudy.vue';
// 20加盟合作（商务合作）
import Shangwuhezuo from './views/Shangwuhezuo.vue';



// 轮播图
import swiper from './views/swiper.vue';
import Yagaiswiper from './views/Yagaiswiper.vue';


Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    // base: '/',
    routes: [
    
        {  
            path: '/xuemaNews',
            component: XuemaNews,
            meta: {
                keepAlive: true, // 需要登录
            }

        },    
        { path: '/newsDetail', component: NewsDetail },

        { path: '/home', component: Home },
        // { path: '/search', component: Search },
        // 招商合作
        {path:'/attractInvestment',name:'attractInvestment',component:AttractInvestment},
        // 研学营
        {path:'/researchCamp',name:'researchCamp',component:ResearchCamp},
        // vip护航计划
        {path:'/vipEscort',name:'vipEscort',component:VipEscort},
        // 关于我们
        { path: '/aboutus/jianjie', component: Aboutus,
          children: [
            { path: '/aboutus/jianjie',
              name: 'jianjie',
              component: Jianjie 
            },
            // 绝对路径
            { path: '/aboutus/callus', 
              name: 'callus',
              component: Callus 
            }
          ]
        },
        // 02校园解决方案（新高考）
        { path: '/xingaokao', component: Xingaokao },
        // 03生涯发展管理云平台
        { path: '/pingtaixitong', component: Pingtaixitong },
         // 04生涯测评系统
        { path: '/shengyaceping', component: Shengyaceping }, 
        // 05选科决策
        { path: '/xuankejuece', component: Xuankejuece },
        // 06走班排课系统（智能排课）
        { path: '/zhinengpaike', component: Zhinengpaike }, 
         // 07教辅资源
        { path: '/jiaofuziyuan', component: Jiaofuziyuan },
         // 08综合素质评价系统 
        { path: '/zonghesuzhi', component: Zonghesuzhi },  
        // 09自主招生智能推荐系统（自主招生）
        // { path: '/zizhuzhaosheng', component: Zizhuzhaosheng },
        // 10高考志愿填报系统
        { path: '/gaokaozhiyuan', component: Gaokaozhiyuan },


        // 11走班校园管理系统（原走班排课）    
        { path: '/zoubanxiaoyuan', component: Zoubanxiaoyuan },   
        // 12走班考试分析系统
        { path: '/zoubankaoshixitong', component: Zoubankaoshixitong },
        // 13教师培养（生涯指导教师）
        { path: '/shengyazhidao', component: Shengyazhidao },
        // 14生涯课程
        { path: '/shengyakecheng', component: Shengyakecheng },
         // 15升学规划服务体系
        { path: '/shengxueguihua', component: Shengxueguihua },
        // 16志愿填报指导
        { path: '/zhiyuantianbaozhidao', component: Zhiyuantianbaozhidao },
        // 17自招综评(自主招生方案)
        { path: '/zizhaozongping', component: Zizhaozongping },
        // 18背景提升
        { path: '/beijingtisheng', component: Beijingtisheng },
        // 19西班牙留学
        { path: '/spainstudy', component: SpainStudy },
        // 20加盟合作（商务合作）
        { path: '/shangwuhezuo', component: Shangwuhezuo },
        { path: '/', component: Home } 
    ]
});
