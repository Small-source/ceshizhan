import Vue from 'vue';
import VueRouter from 'vue-router';
import ceping from './router/shengyaceping'
import wayToStudy from './router/wayToStudy'
Vue.use(VueRouter);
const routes = [
    //生涯档案
    {
        path:'/',
        name:'生涯档案',
        redirect:'/start',
        component:()=>import('./views/home'),
        children:[
            {
                path:'/careerArchives',
                name:'生涯档案首页',
                component:()=>import('./views/careerArchives/index')
            },
            // 升学途径
            wayToStudy,
            {
                path:'/selfAssessment',
                name:'认识自我',
                redirect:'/selfAssessment/main',
                component:()=>import('./views/selfAssessment/index'),
                children:[
                    {
                        path:'/selfAssessment/main',
                        name:'认识自我主页',
                        component:()=>import('./views/selfAssessment/main'),
                    },
                    {
                        path:'/selfAssessment/adaptability',
                        name:'生涯适应力测评',
                        component:()=>import('./views/selfAssessment/adaptability/test_main.vue')
                    },
                    {
                        path:'/selfAssessment/test',
                        name:'学业水平考试',
                        component:()=>import('./views/selfAssessment/test'),
                    },
                    {
                        path:'/selfAssessment/reward',
                        name:'获奖页面',
                        component:()=>import('./views/selfAssessment/reward'),
                    },
                    {
                        path:'/selfAssessment/seniorOne',
                        name:'高一',
                        component:()=>import('./views/selfAssessment/seniorOne'),
                    },
                    {
                        path:'/selfAssessment/seniorTwo',
                        name:'高二',
                        component:()=>import('./views/selfAssessment/seniorTwo'),
                    },
                    {
                        path:'/selfAssessment/seniorThree',
                        name:'高三',
                        component:()=>import('./views/selfAssessment/seniorThree'),
                    },
                    {
                        path:'/selfAssessment/message',
                        name:'个人信息',
                        component:()=>import('./views/selfAssessment/message'),
                    },
                    {
                        path:'/selfAssessment/diagnosis',
                        name:'诊断主页面',
                        component:()=>import('./views/selfAssessment/diagnosis/diagnosis.vue'),
                    },
                    // {
                    //     path:'/selfAssessment/diagnosis/evaluation_entry',
                    //     name:'诊断测评入口',
                    //     component:()=>import('./views/selfAssessment/diagnosis/evaluation/evaluation_entry.vue'),
                    // },
                    // {
                    //     path:'/selfAssessment/diagnosis/evaluation_question',
                    //     name:'诊断测评测试题',
                    //     component:()=>import('./views/selfAssessment/diagnosis/evaluation/evaluation_main.vue'),
                    // },
                    // {
                    //     path:'/selfAssessment/diagnosis/evaluation_question7',
                    //     name:'诊断测评测试题第7题注意力训练',
                    //     component:()=>import('./views/selfAssessment/diagnosis/evaluation/evaluation_question7.vue'),
                    // },
                ]
            },
            {
                path:'/elective',
                name:'新高考选科',
                redirect:'/elective/main',
                component:()=>import('./views/elective/index'),
                children:[
                    {
                        path:'/elective/main',
                        name:'新高考选科主页',
                        component:()=>import('./views/elective/main'),
                    },
                    {
                        path: '/elective/xuekezhixuan',
                        component: () => import('./views/elective/xuankeyaoqiuchaxun/xuekezhixuan') ,
                        children:[
                            {
                                path: '/elective/xuekezhixuan/university',
                                name:'按大学查询',
                                component:() => import('./views/elective/xuankeyaoqiuchaxun/university'),
                            },
                            {
                                path: '/elective/xuekezhixuan/subject',
                                name:'/按科目查询',
                                component:() => import('./views/elective/xuankeyaoqiuchaxun/subject')
                            }
                        ]
                    },
                    {
                        path: '/elective/majorSelectedSubjects',
                        component: () => import('./views/elective/majorSelectedSubjects/majorSelectedSubjects') ,
                        children:[
                            {
                                path: '/elective/majorSelectedSubjects/mubiaozhuanye',
                                name:'设置目标专业',
                                component:() => import('./views/elective/majorSelectedSubjects/components/mubiaozhuanye'),
                            },
                            {
                                path: '/elective/majorSelectedSubjects/xuekeyaoqiu',
                                name:'目标专业学科要求',
                                component:() => import('./views/elective/majorSelectedSubjects/components/xuekeyaoqiu')
                            },
                            {
                                path: '/elective/majorSelectedSubjects/xuankeyuanxiao',
                                name:'选科院校',
                                component:() => import('./views/elective/majorSelectedSubjects/components/xuankeyuanxiao')
                            },
                            {
                                path: '/elective/majorSelectedSubjects/xuekeyaoqiushezhi',
                                name:'/目标专业学科要求设置',
                                component:() => import('./views/elective/majorSelectedSubjects/components/xuekeyaoqiushezhi')
                            },
                            {
                                path: '/elective/majorSelectedSubjects/pinghengdan1',
                                name:'/填写平衡单1',
                                component:() => import('./views/elective/majorSelectedSubjects/components/pinghengdan1')
                            },
                            {
                                path: '/elective/majorSelectedSubjects/pinghengdan2',
                                name:'/填写平衡单2',
                                component:() => import('./views/elective/majorSelectedSubjects/components/pinghengdan2')
                            },
                            {
                                path: '/elective/majorSelectedSubjects/xuankezhiyuan',
                                name:'/设置选科志愿',
                                component:() => import('./views/elective/majorSelectedSubjects/components/xuankezhiyuan')
                            },
                            {
                                path: '/elective/majorSelectedSubjects/xuankeReport',
                                name:'/选科报告',
                                component:() => import('./views/elective/majorSelectedSubjects/components/xuankeReport')
                            }
                        ]
                    },
                ]
            },
            {
                path:'/explore',
                name:'外部探索',
                redirect:'/explore/main',
                component:()=>import('./views/explore/index'),
                children:[
                    {
                        path:'/explore/main',
                        name:'外部探索主页',
                        component:()=>import('./views/explore/main'),
                    },
                    {
                        path:'/explore/informationDetail',
                        name:'资讯详情页',
                        component:()=>import('./views/explore/informationDetail'),
                    },
                    // 院校库
                    {
                        path: '/explore/yuanxiaoku',
                        name: '院校库列表',
                        component:()=>import('./views/explore/yuanxiaoku/yuanxiaoku.vue'),
                        meta: { keepAlive: true },
                    },
                    // 自招院校库
                    {
                        path: '/explore/zizhaoyuanxiaoku',
                        name: '自招院校库列表',
                        component:()=>import('./views/explore/zizhaoxuexiaoku/zizhaoxuexiaoku.vue'),
                    },
                    {
                        path: '/explore/yuanxiaoxiangqing',
                        name: '院校详情',
                        component:()=>import('./views/explore/yuanxiaoku/yuanxiaoxiangqing.vue'),
                    },
                    {
                        path: '/explore/zhaoshengjianzhang',
                        name: '招生简章',
                        component:()=>import('./views/explore/yuanxiaoku/zhaoshengjianzhang.vue'),
                    },
                    {
                        path: '/explore/yuanxiaoduibi',
                        name: '院校对比',
                        component:()=>import('./views/explore/yuanxiaoku/yuanxiaoduibi.vue'),
                    },
                    // 专业库
                    {
                        path: '/explore/zhuanyeku',
                        name: '专业库列表',
                        component:()=>import('./views/explore/zhuanyeku/zhuanyeku.vue'),
                        meta: { keepAlive: true }
                    },
                    {
                        path: '/explore/zhuanyexiangqing',
                        name: '专业详情',
                        component:()=>import('./views/explore/zhuanyeku/zhuanyexiangqing.vue'),
                        meta: { keepAlive: true }
                    },
                    // 职业库
                    {
                        path: '/explore/zhiyeku',
                        name: '职业库列表',
                        component:()=>import('./views/explore/zhiyeku/zhiyeku.vue'),
                        meta: { keepAlive: true },
                    },
                    {
                        path: '/explore/zhiyexiangqing',
                        name: '职业详情',
                        component:()=>import('./views/explore/zhiyeku/zhiyexiangqing.vue'),
                        meta: { keepAlive: true },
                    },
                    {
                        path: '/explore/myCollection',
                        name: '我的收藏',
                        component:()=>import('./views/explore/myCollection/myCollection.vue')
                    },
                    //学科评估
                    {
                        path: '/explore/xuekepinggu',
                        component:()=>import('./views/explore/xuekepinggu/xuekepinggu.vue') ,
                        children:[
                            {
                                path: '/explore/xuekepinggu/xuekeuniversity',
                                component:()=>import('./views/explore/xuekepinggu/xuekeuniversity.vue'),
                            },
                            {
                                path: '/explore/xuekepinggu/xuekesubject',
                                component:()=>import('./views/explore/xuekepinggu/xuekesubject.vue')
                            }
                        ]
                    },
                    {
                        path: '/explore/gaokaobaike',
                        name: '高考百科',
                        component:()=>import('./views/explore/gaokaobaike/gaokaobaike.vue'),
                        meta: { keepAlive: true },
                    },
                    {
                        path: '/explore/baikexiangqing',
                        name: '百科详情',
                        component:()=>import('./views/explore/gaokaobaike/baikexiangqing.vue')
                    },
                ]
            },
            {
                path:'/videoCourse',
                name:'视频课程',
                redirect:'/videoCourse/main',
                component:()=>import('./views/videoCourse/index'),
                children:[
                    {
                        path:'/videoCourse/main',
                        name:'视频课程主页',
                        component:()=>import('./views/videoCourse/main.vue'),
                    },
                    {
                        path:'/videoCourse/videoList',
                        name:'视频课程列表',
                        component:()=>import('./views/videoCourse/videoList.vue'),
                    }
                ]
            },
            // {
            //     path:'/careerManagement',
            //     name:'生涯管理2',
            //     component:()=>import('./views/careerManagement/index'),
            //     children:[
            //         {
            //             path:'/careerManagement/careerPlanning',
            //             name:'生涯规划',
            //             component:()=>import('./views/careerManagement/careerPlanning/careerPlanning.vue'),
            //         },
            //         {
            //             path:'/careerManagement/planning',
            //             name:'规划',
            //             component:()=>import('./views/careerManagement/planning.vue'),
            //         },
            //         {
            //             path:'/careerManagement/counseling',
            //             name:'辅导',
            //             component:()=>import('./views/careerManagement/counseling/counseling.vue'),
            //         },
            //         {
            //             path:'/careerManagement/sweet',
            //             name:'舒尔特方格2',
            //             component:()=>import('./views/careerManagement/counseling/sweet.vue'),
            //         },
            //         {
            //             path:'/careerManagement/sweetDetail',
            //             name:'舒尔特方格测试内容2',
            //             component:()=>import('./views/careerManagement/counseling/sweetDetail.vue'),
            //         },
            //         {
            //             path:'/careerManagement/growthArchiveEntry',
            //             name:'成长档案列表',
            //             component:()=>import('./views/careerManagement/growthArchive/growthArchiveEntry.vue'),
            //         },
            //     ]
            // },
            {
                path:'/plan',
                name:'行动计划',
                redirect:'/plan/main',
                component:()=>import('./views/plan/index'),
                children:[
                    {
                        path:'/plan/main',
                        name:'行动计划主页',
                        component:()=>import('./views/plan/main'),
                    },
                    {
                        path:'/plan/month',
                        name:'月计划',
                        component:()=>import('./views/plan/month'),
                    },
                    {
                        path:'/plan/week',
                        name:'周计划',
                        component:()=>import('./views/plan/week'),
                    },
                    {
                        path:'/plan/date',
                        name:'日计划',
                        component:()=>import('./views/plan/date'),
                    },
                    {
                        path:'/plan/replay',
                        name:'学生复盘',
                        component:()=>import('./views/plan/replay'),
                    },
                    {
                        path:'/plan/pdf',
                        name:'计划表',
                        component:()=>import('./views/plan/pdf'),
                    },
                    {
                        path:'/plan/planHistoryRecord',
                        name:'行动计划历史记录',
                        component:()=>import('./views/plan/planHistoryRecord'),
                    }
                ]
            },
            {
                path:'/consultation',
                name:'状态咨询',
                redirect:'/consultation/main',
                component:()=>import('./views/consultation/index'),
                children:[
                    {
                        path:'/consultation/main',
                        name:'状态咨询主页',
                        component:()=>import('./views/consultation/main'),
                    },
                    {
                        path:'/consultation/recordDetail',
                        name:'状态咨询咨询记录',
                        component:()=>import('./views/consultation/consultationRecord/recordDetail.vue'),
                    },
                    {
                        path:'/consultation/diagnosis/evaluation_entry',
                        name:'诊断测评入口',
                        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_entry.vue'),
                    },
                    {
                        path:'/consultation/diagnosis/evaluation_question',
                        name:'诊断测评测试题',
                        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_main.vue'),
                    },
                    {
                        path:'/consultation/diagnosis/evaluation_question7',
                        name:'诊断测评测试题第7题注意力训练',
                        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_question7.vue'),
                    },
                    {
                        path:'/consultation/sweet',
                        name:'舒尔特方格',
                        component:()=>import('./views/consultation/themeTraining/sweet.vue'),
                    },
                    {
                        path:'/consultation/sweetDetail',
                        name:'舒尔特方格测试内容',
                        component:()=>import('./views/consultation/themeTraining/sweetDetail.vue'),
                    }
                ]
            },
            {
                path:'/policyDecision',
                name:'选科决策',
                redirect:'/policyDecision/main',
                component:()=>import('./views/policyDecision/index'),
                children:[
                    {
                        path:'/policyDecision/main',
                        name:'选科决策主页',
                        component:()=>import('./views/policyDecision/main.vue'),
                    },
                    {
                        path:'/policyDecision/universityExploration',
                        name:'大学探索表',
                        component:()=>import('./views/policyDecision/universityExploration.vue'),
                    },
                    {
                        path:'/policyDecision/professionalExploration',
                        name:'专业探索表',
                        component:()=>import('./views/policyDecision/professionalExploration.vue'),
                    },
                    {
                        path:'/policyDecision/university',
                        name:'大学定位工具',
                        component:()=>import('./views/policyDecision/university.vue'),
                    },
                    {
                        path:'/policyDecision/major',
                        name:'专业定位工具',
                        component:()=>import('./views/policyDecision/major.vue'),
                    },
                    {
                        path:'/policyDecision/careerAnchor',
                        name:'职业定位工具',
                        component:()=>import('./views/policyDecision/careerAnchor.vue'),
                    },
                    {
                        path:'/policyDecision/matchingSchools',
                        name:'成绩匹配院校',
                        component:()=>import('./views/policyDecision/matchingSchools.vue'),
                    },
                    {
                        path:'/policyDecision/universityTable',
                        name:'目标大学梯度表',
                        component:()=>import('./views/policyDecision/universityTable.vue'),
                    },
                    {
                        path:'/policyDecision/goals',
                        name:'我的目标主页',
                        component:()=>import('./views/policyDecision/goals.vue'),
                    },
                    {
                        path:'/policyDecision/goal',
                        name:'我的目标',
                        component:()=>import('./views/policyDecision/goal.vue'),
                    },
                    {
                        path:'/policyDecision/zhiyuan',
                        name:'志愿填报',
                        component:()=>import('./views/policyDecision/zhiyuan.vue'),
                    }
                ]
            },
            {
                path:'/growthFile',
                name:'成长档案列表',
                redirect:'/growthFile/main',
                component:()=>import('./views/growthFile/index'),
                children:[
                    {
                        path:'/growthFile/main',
                        name:'成长档案列表',
                        component:()=>import('./views/growthFile/main.vue'),
                    }
                ]
            },
        ]
    },
    {
        path:'/user',
        name:'用户页',
        component:()=>import('./views/user/index'),
        children:[
            {
                path:'/login',
                name:'登录',
                meta:{requireAuth:true},
                component:()=>import('./views/user/login'),
            },
            {
                path:'/register',
                name:'个人注册',
                meta:{requireAuth:true},
                component:()=>import('./views/user/register'),
            },
            {
                path:'/forgetPassword',
                name:'忘记密码',
                meta:{requireAuth:true},
                component:()=>import('./views/user/forgetPassword'),
            },
            {
                path:'/campusCard',
                name:'绑定校园卡',
                meta:{requireAuth:true},
                component:()=>import('./views/user/campusCard'),
            },
            {
                path:'/bindPhone',
                name:'绑定手机号',
                meta:{requireAuth:true},
                component:()=>import('./views/user/bindPhone'),
            },
            {
                path:'/perfectInformation',
                name:'完善个人信息',
                meta:{requireAuth:true},
                component:()=>import('./views/user/PerfectInformation')
            },
        ]
    },
    {
        path:'/wayToStudy/testreport',
        name:'升学途径分析报告',
        component:()=>import('./views/wayToStudy/analysis_test/test_report.vue'),
    },
    {
        path:'/wayToStudy/studyAdviceReport',
        name:'升学建议方案',
        component:()=>import('./views/wayToStudy/study_advice_report/study_advice_report.vue'),
    },
    // 自我评估生涯适应力测评报告
    {
        path:'/selfAssessment/adaptability/testreport',
        name:'生涯适应力测评报告',
        component:()=>import('./views/selfAssessment/adaptability/test_report.vue'),
    },
    // 生涯管理系统-生涯管理-学业规划-诊断-获取报告
    {
        path:'/consultation/diagnosis/evaluationReport1',
        name:'成就目标定向测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report1.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport2',
        name:'时间管理测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report2.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport3',
        name:'学习动机测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report3.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport4',
        name:'学习习惯测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report4.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport5',
        name:'情绪管理测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report5.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport6',
        name:'人际关系综合诊断测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report6.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport7',
        name:'注意力测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report7.vue'),
    },
    {
        path:'/consultation/diagnosis/evaluationReport8',
        name:'学业归因测评报告',
        component:()=>import('./views/consultation/diagnosis/evaluation/evaluation_report8.vue'),
    },
    {
        path:'/growthFile/growthFileReport',
        name:'成长档案',
        component:()=>import('./views/growthFile/growthFileReport.vue'),
    },
    {
        path:'/videoCourse/videoplay',
        name:'视频播放',
        component:()=>import('./views/videoCourse/videoplay.vue'),
    },
    {
        path:'/careerManagement/academicPlanningReportDetail',
        name:'学业规划报告详情',
        component:()=>import('./views/careerManagement/academicPlanningReportDetail')
    },
    //生涯测评
    ...ceping,
    //测评完成
    {
        path:'/cepingwancheng',
        name:'测评完成',
        component:()=>import('./views/ceping/shengyaceping/cepingwancheng'),
    },
    //空白页
    {
        path:'/refresh',
        name:'空白页',
        component:()=>import('./views/user/refresh.vue'),
    },
    //启动页
    {
        path:'/start',
        name:'启动页',
        component:()=>import('./views/user/start.vue'),
    }
]
const mode = 'hash';
const router = new VueRouter({ base: process.env.BASE_URL,routes, mode });
// const router = new VueRouter({ routes, mode });
export default router;
