// 生涯档案(升学途径主页面)
const wayToStudy = () => import('../views/wayToStudy/main.vue');

// 升学途径--升学途径分析（入口）
const TestEntry = () => import('../views/wayToStudy/analysis_test/test_entry.vue');
// 升学途径分析（测试题）
const TestMain= () => import('../views/wayToStudy/analysis_test/test_main.vue');
// 升学途径分析（测试题报告）
// const TestReport= () => import('../views/wayToStudy/analysis_test/test_report.vue');






// 升学途径--常见升学途径（自主招生、艺术类招生、体育类专业、综合评价录取）
const AutonomousEnrollment = () => import('../views/wayToStudy/common_school_path/AutonomousEnrollment.vue');
const ArtEnrollment = () => import('../views/wayToStudy/common_school_path/ArtEnrollment.vue');
const SportsMajor = () => import('../views/wayToStudy/common_school_path/SportsMajor.vue');
const ComprehensiveEvaluation = () => import('../views/wayToStudy/common_school_path/ComprehensiveEvaluation.vue');
// 升学途径其他主流途径（三大专项计划、公费师范生、免费医学生、保送生、高水平艺术团、高水平运动队、体育单招、高职单招）
// 三大专项计划
const ThreeSpecialPlan = () => import('../views/wayToStudy/other_main_path/ThreeSpecialPlan.vue');
// 公费师范生
const PublicExpense = () => import('../views/wayToStudy/other_main_path/PublicExpense.vue');
// 免费医学生
const FreeMedicalStudents = () => import('../views/wayToStudy/other_main_path/FreeMedicalStudents.vue');
// 保送生
const RecommendedStudent = () => import('../views/wayToStudy/other_main_path/RecommendedStudent.vue');
// 高水平艺术团
const ArtEnsemble = () => import('../views/wayToStudy/other_main_path/ArtEnsemble.vue');
// 高水平运动队
const SportsTeam = () => import('../views/wayToStudy/other_main_path/SportsTeam.vue');
// 体育单招
const Tiyudanzhao = () => import('../views/wayToStudy/other_main_path/Tiyudanzhao.vue');
// 高职单招
const Gaozhidanzhao = () => import('../views/wayToStudy/other_main_path/Gaozhidanzhao.vue');

// 军事/公安类升学(民航招飞，海军招飞，空军招飞，军校招生，公安院校，航海类院校)
const CivilAviation = () => import('../views/wayToStudy/military_scholl/CivilAviation.vue');
const SeaForce = () => import('../views/wayToStudy/military_scholl/SeaForce.vue');
const AirForce = () => import('../views/wayToStudy/military_scholl/AirForce.vue');
const MilitarySchool = () => import('../views/wayToStudy/military_scholl/MilitarySchool.vue');
const PoliceSchool = () => import('../views/wayToStudy/military_scholl/PoliceSchool.vue');
const NauticalCategorySchool = () => import('../views/wayToStudy/military_scholl/NauticalCategorySchool.vue');

// 其他升学途径(民族预科班、港澳招生、中外合作、海外留学)
const NationPrepClass = () => import('../views/wayToStudy/other_goschool_path/NationPrepClass.vue');
const GangaoRecruitstudents = () => import('../views/wayToStudy/other_goschool_path/GangaoRecruitstudents.vue');
const SinoForeignCooperation = () => import('../views/wayToStudy/other_goschool_path/SinoForeignCooperation.vue');
const StudyingAbroad = () => import('../views/wayToStudy/other_goschool_path/StudyingAbroad.vue');
export default
    {
        path:'/wayToStudy',
        name:'升学途径',
        redirect:'/wayToStudy/main',
        component:()=>import('../views/wayToStudy/index'),
        children:[
            // 升学途径主页面
            // 生涯档案(升学途径)
            {
                path: '/wayToStudy/main',
                component:wayToStudy 
            },
            // 升学途径分析（入口-开始测试）
            {
                path: '/wayToStudy/testentry',
                component:TestEntry 
            },
            // 升学途径分析（测试）
            {
                path: '/wayToStudy/testmain',
                component:TestMain
            },

            // 升学途径分析（测试结果报告）
            // {
            //     path: '/wayToStudy/testreport',
            //     component:TestReport
            // },




            // 升学途径--常见升学途径（自主招生、艺术类招生、体育类专业、综合评价录取）
            // 自主招生
            {
                path: '/wayToStudy/autonomousenrollment',
                component:AutonomousEnrollment 
            },
            // 艺术类招生
            {
                path: '/wayToStudy/artenrollment',
                component:ArtEnrollment 
            },
            // 体育类专业
            {
                path: '/wayToStudy/sportsmajor',
                component:SportsMajor 
            },
            // 综合评价录取
            {
                path: '/wayToStudy/comprehensiveevaluation',
                component:ComprehensiveEvaluation 
            },
            // 升学途径其他主流途径（三大专项计划、公费师范生、免费医学生、保送生、高水平艺术团、高水平运动队、体育单招、高职单招）
            // 三大专项计划
            {
                path: '/wayToStudy/threespecialplan',
                component:ThreeSpecialPlan 
            },
            // 公费师范生
            {
                path: '/wayToStudy/publicexpense',
                component:PublicExpense 
            },
            // 免费医学生
            {
                path: '/wayToStudy/freemedicalstudents',
                component:FreeMedicalStudents 
            },
            // 保送生
            {
                path: '/wayToStudy/recommendedstudent',
                component:RecommendedStudent 
            },
            // 高水平艺术团
            {
                path: '/wayToStudy/artensemble',
                component:ArtEnsemble 
            },
            // 高水平运动队
            {
                path: '/wayToStudy/sportsteam',
                component:SportsTeam 
            },
            // 体育单招
            {
                path: '/wayToStudy/tiyudanzhao',
                component:Tiyudanzhao 
            },
            // 高职单招
            {
                path: '/wayToStudy/gaozhidanzhao',
                component:Gaozhidanzhao 
            },
            // 军事/公安类升学(民航招飞，海军招飞，空军招飞，军校招生，公安院校，航海类院校)
            // 民航招飞
            {
                path: '/wayToStudy/civilaviation',
                component:CivilAviation 
            },
            // 海军招飞
            {
                path: '/wayToStudy/seaforce',
                component:SeaForce 
            },
            // 空军招飞
            {
                path: '/wayToStudy/airforce',
                component:AirForce 
            },
            // 军校招生
            {
                path: '/wayToStudy/militaryschool',
                component:MilitarySchool 
            },
            // 公安院校
            {
                path: '/wayToStudy/policeschool',
                component:PoliceSchool 
            },
            // 航海类院校
            {
                path: '/wayToStudy/nauticalcategoryschool',
                component:NauticalCategorySchool 
            },
            // 其他升学途径(民族预科班、港澳招生、中外合作、海外留学)
            // 民族预科班
            {
                path: '/wayToStudy/nationprepclass',
                component:NationPrepClass 
              },
            // 港澳招生
            {
                path: '/wayToStudy/gangaorecruitstudents',
                component:GangaoRecruitstudents 
            },
            // 中外合作
            {
                path: '/wayToStudy/sinoforeigncooperation',
                component:SinoForeignCooperation 
            },
            // 海外留学
            {
                path: '/wayToStudy/studyingabroad',
                component:StudyingAbroad 
            }
        ]
    }
