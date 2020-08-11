export default {
    //获取个人信息
    user:{
        login:'/login/loginCareerArchives',//登录
        register:'/register/register',//个人注册
        getPhoneNumberByCode:'/register/getPhoneNumberByCode',//个人注册 获取短信验证码
        forgetPasswordPhone:'/login/forgetPasswordByPhone',//忘记密码 获取短信验证码
        forgotPassword:'/login/forgotPassword',//重置密码
        bindCampusCard:'/login/bindCampusCard', //绑定校园卡
        bindPhone:'/login/bindPhoneByCampusCard',//绑定手机号
        setImproveInfo:'/register/improveInfo',//完善个人信息
        getUserInfo:'/login/getUserInfo',//返回个人信息
        sendPhoneCode:'/login/getCodeByPhone',//获取手机验证码
        modifyUserInfo:'/login/modifyUserInfo'//个人中心修改
    },
   //通知
    notice:{
        getNoticeList:'/notice/getNoticeList', //服务通知列表
        getNoticeDetail:'/notice/getNoticeDetail',//查看服务通知
        getUnreadNum:'/notice/getUnreadNum',//查看未读服务通知数量
    },
    //获奖信息
    award:{
        list:'/award/getAwardList',//获奖信息列表
        add:'/award/storeAward',//添加
        show:'/award/detailAward',//查看
        delete:'/award/delAward' ,//删除
        modify:'/award/storeAward',//修改
    },
    //学业信息
    schoolWorkMessage:{
        add:'/academicInfo/store',//添加
        list:'/academicInfo/getList',//列表
        show:'/academicInfo/detail',//详情
        getTotalChart:'/academicInfo/getTotalScoreChart',//获取总成绩图表、总名次
        getPartChart:'/academicInfo/getSubjectScoreChart',//获取各科成绩图表，各科名次,
        getXueyeList:'/actionPlan/studentPlanningStatistic',//获取学业规划列表
    },
    //学业水平考试
    academicLevelTeam:{
        list:'/academicLevelTeam/getList',//学业水平考试成绩列表
        add:'/academicLevelTeam/store',//添加
        delete:'/academicLevelTeam/del',//删除
        modify:'/academicLevelTeam/store',//修改
    },
    //资讯
    information:{
        list:'/article/getArticleList', //根据分类ID获取资讯列表
        clickNum:'/article/storeClickNum',//资讯点击数
        detail:'/article/getArticleDetail',//资讯详情
    },
    //生涯五问及生涯测评报告
    fiveQuestion:{
        add:'/assessment/storeCareerFiveQuestion',
        edit:'/assessment/editCareerFiveQuestion',
        show:'/assessment/detailCareerFiveQuestion',
        list:'/assessment/getCareerFiveQuestionList',
        del:'/assessment/delCareerFiveQuestion',
        careerReport:'/assessment/viewReport'//生涯测评报告
    },
    //生涯管理
    careerManagement:{
        getRecommendedProfessionAndMajor:'/targetSetting/getRecommendedProfessionAndMajor',//推荐职业和专业
        getCardDetail:'/targetSetting/getBusinessCardDetail',//获取未来名片详情
        saveCard:'/targetSetting/storeBusinessCard',//添加未来名片,
        zhiyepinghengdan:{ //职业平衡单
            save:'/targetSetting/storeProfessionTargetBalance',//添加
            get:'/targetSetting/detailProfessionTargetBalance',//获取
            purpose:'/targetSetting/professionTargetBalanceRank',//意向
            tongjitu:'/targetSetting/professionTargetBalanceWeightedResult',//统计图
            five:'/targetSetting/getProfessionFiveList'//获取职业5个
        },
        yuanxiaopinghengdan:{//院校平衡单
            save:'/targetSetting/storeUniversityTargetBalance',//添加
            get:'/targetSetting/detailUniversityTargetBalance',//获取
            purpose:'/targetSetting/universityTargetBalanceRank',//意向
            tongjitu:'/targetSetting/universityTargetBalanceWeightedResult',//统计图
            five:'/targetSetting/getUniversityFiveList'
        },
        zhuanyepinghengdan:{//专业平衡单
            save:'/targetSetting/storeSubjectTargetBalance',//添加
            get:'/targetSetting/detailSubjectTargetBalance',//获取
            purpose:'/targetSetting/subjectTargetBalanceRank',//意向
            tongjitu:'/targetSetting/subjectTargetBalanceWeightedResult',//统计图
            five:'/targetSetting/getSubjectFiveList'
        },
        swotZhiye:{ //职业SWOT
            add:'/targetSetting/storeProfessionSwot',//添加
            list:'/targetSetting/getProfessionSwotList',//列表
            duibi:'/targetSetting/comparedProfessionSwotList',//对比
            show:'/targetSetting/detailProfessionSwot',//详情
            del:'/targetSetting/delProfessionSwotList',//删除
            edit:'/targetSetting/editProfessionSwot'//编辑
        },
        swotYuanxiao:{ //院校SWOT
            add:'/targetSetting/storeUniversitySwot',//添加
            list:'/targetSetting/getUniversitySwotList',//列表
            duibi:'/targetSetting/comparedUniversitySwotList',//对比
            show:'/targetSetting/detailProfessionSwot',//详情
            del:'/targetSetting/delUniversitySwotList',//删除
            edit:'/targetSetting/editUniversitySwot'//编辑
        },
        swotZhuanye:{ //院校SWOT
            add:'/targetSetting/storeSubjectSwot',//添加
            list:'/targetSetting/getSubjectSwotList',//列表
            duibi:'/targetSetting/comparedSubjectSwotList',//对比
            show:'/targetSetting/detailSubjectSwot',//详情
            del:'/targetSetting/delSubjectSwotList',//删除
            edit:'/targetSetting/editProfessionSwot'//编辑
        },
        mubiaoDingweiZhiye:{//职业目标定位
            add:'/targetSetting/storeProfessionPosition',//添加
            del:'/targetSetting/delProfessionPosition',//删除
            list:'/targetSetting/getProfessionPositionList',//列表
        },
        mubiaoDingweiYuanxiao:{//院校目标定位
            add:'/targetSetting/storeUniversityPosition',//添加
            del:'/targetSetting/delUniversityPosition',//删除
            list:'/targetSetting/getUniversityPositionList',//列表
        },
        mubiaoDingweiZhuanye:{//专业目标定位
            add:'/targetSetting/storeSubjectPosition',//添加
            del:'/targetSetting/delSubjectPosition',//删除
            list:'/targetSetting/getSubjectPositionList',//列表
        },
        shoucang:{//收藏
            yuanxiao:'/collect/getCollectUniversityList',//院校
            yuanxiaoStar:'/collect/storeStartUniversity',//点亮院校星星
            zhuanye:'/collect/getCollectSubjectWithStartList',//专业
            zhuanyeStar:'/collect/storeStartSubject',
        },
        myGoal:{ //我的目标
            add:'/targetSetting/storeMineTarget',//添加
            list:'/targetSetting/getMineTargetList',//列表
            del:'/targetSetting/delMineTarget', //删除
            edit:'/targetSetting/editMineTarget',//编辑
            show:'/targetSetting/detailMineTarget' //查看
        },
        gaoGoal:{//高考目标
            add:'/targetDecompose/storeCollegeEntranceExamination' ,//添加
            show:'/targetDecompose/detailCollegeEntranceExamination',//详情
            edit:'/targetDecompose/editCollegeEntranceExamination',//编辑
            list:'/targetDecompose/getCollegeEntranceExaminationList',//列表
        },
        xueQiGoal:{//学期目标
            list:'/targetDecompose/getSemesterGoalList',//列表
            addEidt:'/targetDecompose/storeSemesterGoal',//添加编辑
            show:'/targetDecompose/detailSemesterGoal'
        },
        xueKaoGoal:{//学考目标
            addEidt:'/targetDecompose/storeAcademicGoal',//添加编辑
            show:'/targetDecompose/detailAcademicGoal',//详情
            list:'/targetDecompose/getAcademicGoalList',//列表
        },
        nearGoal:{//近期目标
            add:'/targetDecompose/storeRecentTarget',//添加
            show:'/targetDecompose/detailRecentTarget',//详情
            del:'/targetDecompose/delRecentTarget',//删除
            list:'/targetDecompose/getRecentTargetList',//列表
            complete:'/targetDecompose/recentTargetDone',//点击完成
            edit:'/targetDecompose/editRecentTarget'//修改
        },
        mounthplan:{//月计划 //周计划 //日计划
            nowlist:'/actionPlan/getCurrentMonthlyPlan',//当月计划列表
            nowAdd:'/actionPlan/storeMonthlyPlan',//添加当月计划
            nowEdit:'/actionPlan/editMonthlyPlan',//编辑当月计划
            oncelist:'/actionPlan/getOnceMonthlyPlanList',//获取曾经月计划列表
            onceshow:'/actionPlan/getOnceMonthlyPlanDetail',//月计划详情
            oncedel:'/actionPlan/delOnceMonthlyPlan',//月计划删除
            getweek:'/actionPlan/getCurrentMonthlyWeeklyPlan',//获取当月周计划
            setweek:'/actionPlan/storeCurrentMonthlyWeeklyPlan',//添加、编辑当月周计划
            setDays:'/actionPlan/storeCurrentMonthlyWeeklyDayPlan',//添加、编辑当月日计划
            getDays:'/actionPlan/getCurrentMonthlyWeeklyDayPlan',//获取当月日计划
            finish:'/actionPlan/isOverDayPlan' //点击完成
        },
        matchingScholls:{//成绩匹配院校
            list:'/targetSetting/getScoreMatchUniversityList',//列表
            addCollect:'/collect/storeUniversity',//添加取消收藏
            collectList:'/collect/getCollectUniversityId',//获取已收餐大学id
            add:'/targetSetting/gradeMatchUniversity',//添加/取消匹配
            matchingList:'/targetSetting/getGradeMatchUniversityId'//获取已匹配数组
        },
        guihuabaogao:{//学业规划报告
            isNo:'/careerPlanReport/getLastReport',//是否生成过报告
            storeReport:'/careerPlanReport/storeReport',//生成报告
            history:'/careerPlanReport/getReportList',//历史记录
            show:'/careerPlanReport/viewReport' //查看学业规划报告
        }
    },
    //大学、专业探索表
    expore:{
        // 大学
        universityFive:'/chooseDecision/getUniversityNameList',//获取5条大学数据
        universityAddEidt:'/chooseDecision/questUniversityStore',//大学新增、编辑
        universityList:'/chooseDecision/getQuestUniversityList',//大学列表
        universityDetail:'/chooseDecision/questUniversityDetail',//大学详情
        universityDel:'/chooseDecision/questUniversityDel',//大学删除
        // 专业
        majorFive:'/chooseDecision/getSubjectNameList',//获取5条专业数据
        majorAddEidt:'/chooseDecision/questSubjectStore',//专业新增、编辑
        majorList:'/chooseDecision/getQuestSubjectList ',//专业列表
        majorDetial:'/chooseDecision/questSubjectDetail',//专业详情
        majorDel:'/chooseDecision/questSubjectDel'//专业删除
    },
    //目标大学剃度表
    target:{
        del:'/chooseDecision/targetUniversityShavingStoreDel',//删除
        list:'/chooseDecision/getTargetUniversityShavingList',//列表
        add:'/chooseDecision/targetUniversityShavingStore',//添加
        getUniversity:'/chooseDecision/getDataByUniversitySearch'// 根据大学名称获取大学及三年分数线信息
    },
    //我的目标
    goal:{
        shengcheng:'/chooseDecision/producedTarget',//生成目标
        list:'/chooseDecision/getTargetList',//生成列表
        set:'/chooseDecision/setTargetOrScore'
    },
    //学业规划、行动计划
    plans:{
        xueAdd:'/academicPlanCategory/storeAcademicPlan',//学业规划添加
        xueList:'/academicPlanCategory/getAcademicPlanList',//学业规划列表
        yueAdd:'/actionPlan/storeMonthlyPlan',//添加月计划
        yueEdit:'/actionPlan/editMonthlyPlan',//编辑当前月计划
        yueList:'/actionPlan/getOnceMonthlyPlanList',//获取曾经月计划列表
        yueDetail:'/actionPlan/getOnceMonthlyPlanDetail',//曾经月计划详情
        yueDetal:'/actionPlan/delOnceMonthlyPlan',//删除曾经月计划
        zhouList:'/actionPlan/getCurrentMonthlyWeeklyPlan',//周计划李彪
        zhouAdd:'/actionPlan/storeCurrentMonthlyWeeklyPlan ',//添加周计划
        zhouEdit:'/actionPlan/editCurrentMonthlyWeeklyPlan',//编辑周计划
        zhouDetail:'/actionPlan/getCurrentMonthlyWeeklyDetail',//获取周计划详情
        riList:'/actionPlan/getCurrentMonthlyWeeklyDayPlan',//日计划列表
        riAdd:'/actionPlan/storeCurrentMonthlyWeeklyDayPlan',//添加日计划
        riDetail:'/actionPlan/getCurrentMonthlyWeeklyDayDetail',//日计划详情
        fupanAdd:'/actionPlan/studentReviewResultStore',//复盘添加、编辑
        fupanList:'/actionPlan/studentReviewResultList',//复盘列表
        fupanDetail:'/actionPlan/studentReviewResultDetail'//复盘详情
    }
}
