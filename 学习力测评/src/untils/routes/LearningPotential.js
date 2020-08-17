//  学习潜力
/*
    1. 信息加工能力
    2. 工作记忆能力
    3. 空间能力
    4. 表象能力
    5. 思维转换能力
    6. 逻辑推理能力
    7. 语言能力
    8. 数学能力
    9. 注意力
*/
const PartIndex = () => import('@/views/LearningAbility/LearningPotential/index.vue');
//1
const Instru1 = () => import('@/views/LearningAbility/LearningPotential/quesInstru1')
const Guide1 = () => import('@/views/LearningAbility/LearningPotential/quesGuide1')
const Ques1= () => import('@/views/LearningAbility/LearningPotential/ques1')
const Success1 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess1')
//2
const Instru2 = () => import('@/views/LearningAbility/LearningPotential/quesInstru2')
const Guide21 = () => import('@/views/LearningAbility/LearningPotential/quesGuide2_1')
const Ques21 = () => import('@/views/LearningAbility/LearningPotential/ques2_1')
const Success21 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess2_1')
const Guide22 = () => import('@/views/LearningAbility/LearningPotential/quesGuide2_2')
const Ques22= () => import('@/views/LearningAbility/LearningPotential/ques2_2')
const Success22 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess2_2')
//3
const Instru3 = () => import('@/views/LearningAbility/LearningPotential/quesInstru3')
const Guide3 = () => import('@/views/LearningAbility/LearningPotential/quesGuide3')
const Ques3= () => import('@/views/LearningAbility/LearningPotential/ques3')
const Success3 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess3')
//4
const Instru4 = () => import('@/views/LearningAbility/LearningPotential/quesInstru4')
const Guide4 = () => import('@/views/LearningAbility/LearningPotential/quesGuide4')
const Ques4= () => import('@/views/LearningAbility/LearningPotential/ques4')
const Success4 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess4')
//5
const Instru5 = () => import('@/views/LearningAbility/LearningPotential/quesInstru5')
const Guide5 = () => import('@/views/LearningAbility/LearningPotential/quesGuide5')
const Ques5= () => import('@/views/LearningAbility/LearningPotential/ques5')
const Success5 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess5')
//6
const Instru6 = () => import('@/views/LearningAbility/LearningPotential/quesInstru6')
const Guide6 = () => import('@/views/LearningAbility/LearningPotential/quesGuide6')
const Ques6= () => import('@/views/LearningAbility/LearningPotential/ques6')
const Success6 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess6')
//7
const Instru7 = () => import('@/views/LearningAbility/LearningPotential/quesInstru7')
const Guide7 = () => import('@/views/LearningAbility/LearningPotential/quesGuide7')
const Ques7= () => import('@/views/LearningAbility/LearningPotential/ques7')
const Success7 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess7')
//8
const Instru8 = () => import('@/views/LearningAbility/LearningPotential/quesInstru8')
const Guide81 = () => import('@/views/LearningAbility/LearningPotential/quesGuide8_1')
const Ques81= () => import('@/views/LearningAbility/LearningPotential/ques8_1')
const Success81= () => import('@/views/LearningAbility/LearningPotential/quesSuccess8_1')
const Guide82 = () => import('@/views/LearningAbility/LearningPotential/quesGuide8_2')
const Ques82= () => import('@/views/LearningAbility/LearningPotential/ques8_2')
const Success82 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess8_2')
//9
const Instru9 = () => import('@/views/LearningAbility/LearningPotential/quesInstru9')
const Guide91 = () => import('@/views/LearningAbility/LearningPotential/quesGuide9_1')
const Ques91= () => import('@/views/LearningAbility/LearningPotential/ques9_1')
const Success91 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess9_1')
const Guide92 = () => import('@/views/LearningAbility/LearningPotential/quesGuide9_2')
const Ques92= () => import('@/views/LearningAbility/LearningPotential/ques9_2')
const Success92 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess9_2')
const Guide93 = () => import('@/views/LearningAbility/LearningPotential/quesGuide9_3')
const Ques93= () => import('@/views/LearningAbility/LearningPotential/ques9_3')
const Success93 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess9_3')
const Guide94 = () => import('@/views/LearningAbility/LearningPotential/quesGuide9_4')
const Ques94= () => import('@/views/LearningAbility/LearningPotential/ques9_4')
const Success94 = () => import('@/views/LearningAbility/LearningPotential/quesSuccess9_4')
export default [
    {
        path: '/learningAbility/learningPotential',
        name: '学习潜力首页',
        component:PartIndex,
    },
    // 1
    {
        path: '/learningAbility/learningPotential/instru/1',
        name: 'Instru1',
        component: Instru1
    },
    {
        path: '/learningAbility/learningPotential/guide/1',
        name: 'RzqnGuide1',
        component: Guide1
    },
    {
        path: '/learningAbility/learningPotential/1',
        name: 'Ques1',
        component: Ques1
    },
    {
        path: '/learningAbility/learningPotential/success/1',
        name: 'Success1',
        component: Success1,
    },
    // 2
    {
        path: '/learningAbility/learningPotential/instru/2',
        name: 'Instru2',
        component: Instru2
    },
    {
        path: '/learningAbility/learningPotential/guide/21',
        name: 'RzqnGuide21',
        component: Guide21
    },
    {
        path: '/learningAbility/learningPotential/21',
        name: 'Ques21',
        component: Ques21
    },
    {
        path: '/learningAbility/learningPotential/success/21',
        name: 'Success21',
        component: Success21,
    },
    {
        path: '/learningAbility/learningPotential/guide/22',
        name: 'RzqnGuide22',
        component: Guide22
    },
    {
        path: '/learningAbility/learningPotential/22',
        name: 'Ques22',
        component: Ques22
    },
    {
        path: '/learningAbility/learningPotential/success/22',
        name: 'Success22',
        component: Success22,
    },
    //3
    {
        path: '/learningAbility/learningPotential/instru/3',
        name: 'Instru3',
        component: Instru3
    },
    {
        path: '/learningAbility/learningPotential/guide/3',
        name: 'RzqnGuide3',
        component: Guide3
    },
    {
        path: '/learningAbility/learningPotential/3',
        name: 'Ques3',
        component: Ques3
    },
    {
        path: '/learningAbility/learningPotential/success/3',
        name: 'Success3',
        component: Success3,
    },
    // 4
    {
        path: '/learningAbility/learningPotential/instru/4',
        name: 'Instru4',
        component: Instru4
    },
    {
        path: '/learningAbility/learningPotential/guide/4',
        name: 'RzqnGuide4',
        component: Guide4
    },
    {
        path: '/learningAbility/learningPotential/4',
        name: 'Ques4',
        component: Ques4
    },
    {
        path: '/learningAbility/learningPotential/success/4',
        name: 'Success4',
        component: Success4,
    },
    // 5
    {
        path: '/learningAbility/learningPotential/instru/5',
        name: 'Instru5',
        component: Instru5
    },
    {
        path: '/learningAbility/learningPotential/guide/5',
        name: 'RzqnGuide5',
        component: Guide5
    },
    {
        path: '/learningAbility/learningPotential/5',
        name: 'Ques5',
        component: Ques5
    },
    {
        path: '/learningAbility/learningPotential/success/5',
        name: 'Success5',
        component: Success5,
    },
    // 6
    {
        path: '/learningAbility/learningPotential/instru/6',
        name: 'Instru6',
        component: Instru6
    },
    {
        path: '/learningAbility/learningPotential/guide/6',
        name: 'RzqnGuide6',
        component: Guide6
    },
    {
        path: '/learningAbility/learningPotential/6',
        name: 'Ques6',
        component: Ques6
    },
    {
        path: '/learningAbility/learningPotential/success/6',
        name: 'Success6',
        component: Success6,
    },
    // 7
    {
        path: '/learningAbility/learningPotential/instru/7',
        name: 'Instru7',
        component: Instru7
    },
    {
        path: '/learningAbility/learningPotential/guide/7',
        name: 'RzqnGuide7',
        component: Guide7
    },
    {
        path: '/learningAbility/learningPotential/7',
        name: 'Ques7',
        component: Ques7
    },
    {
        path: '/learningAbility/learningPotential/success/7',
        name: 'Success7',
        component: Success7,
    },
    // 8
    {
        path: '/learningAbility/learningPotential/instru/8',
        name: 'Instru8',
        component: Instru8
    },
    {
        path: '/learningAbility/learningPotential/guide/81',
        name: 'RzqnGuide81',
        component: Guide81
    },
    {
        path: '/learningAbility/learningPotential/81',
        name: 'Ques81',
        component: Ques81
    },
    {
        path: '/learningAbility/learningPotential/success/81',
        name: 'Success81',
        component: Success81,
    },
    {
        path: '/learningAbility/learningPotential/guide/82',
        name: 'RzqnGuide82',
        component: Guide82
    },
    {
        path: '/learningAbility/learningPotential/82',
        name: 'Ques82',
        component: Ques82
    },
    {
        path: '/learningAbility/learningPotential/success/82',
        name: 'Success82',
        component: Success82,
    },
    // 9
    {
        path: '/learningAbility/learningPotential/instru/9',
        name: 'Instru9',
        component: Instru9
    },
    {
        path: '/learningAbility/learningPotential/guide/91',
        name: 'RzqnGuide91',
        component: Guide91
    },
    {
        path: '/learningAbility/learningPotential/91',
        name: 'Ques91',
        component: Ques91
    },
    {
        path: '/learningAbility/learningPotential/success/91',
        name: 'Success91',
        component: Success91,
    },
    {
        path: '/learningAbility/learningPotential/guide/92',
        name: 'Guide92',
        component: Guide92
    },
    {
        path: '/learningAbility/learningPotential/92',
        name: 'Ques92',
        component: Ques92
    },
    {
        path: '/learningAbility/learningPotential/success/92',
        name: 'Success92',
        component: Success92,
    },
    {
        path: '/learningAbility/learningPotential/guide/93',
        name: 'Guide93',
        component: Guide93
    },
    {
        path: '/learningAbility/learningPotential/93',
        name: 'Ques93',
        component: Ques93
    },
    {
        path: '/learningAbility/learningPotential/success/93',
        name: 'Success93',
        component: Success93,
    },
    {
        path: '/learningAbility/learningPotential/guide/94',
        name: 'Guide94',
        component: Guide94
    },
    {
        path: '/learningAbility/learningPotential/94',
        name: 'Ques94',
        component: Ques94
    },
    {
        path: '/learningAbility/learningPotential/success/94',
        name: 'Success94',
        component: Success94,
    },
]
