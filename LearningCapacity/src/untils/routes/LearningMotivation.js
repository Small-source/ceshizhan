//  学习动力
/*
    1.学习态度
*/
const Part2Index = () => import('@/views/LearningAbility/LearningMotivation/index.vue');
const LearningMotivationGuide1 = () => import('@/views/LearningAbility/LearningMotivation/quesGuide1')
const LearningMotivationQues1= () => import('@/views/LearningAbility/LearningMotivation/ques1')
const LearningMotivationSuccess1 = () => import('@/views/LearningAbility/LearningMotivation/quesSuccess1')

export default[
    {
        path: '/learningAbility/LearningMotivation',
        name: '学习动力首页',
        component:Part2Index,
    },
    {
        path: '/learningAbility/LearningMotivation/guide/1',
        name: 'LearningMotivationGuide1',
        component: LearningMotivationGuide1
    },
    {
        path: '/learningAbility/LearningMotivation/1',
        name: 'LearningMotivationQues1',
        component: LearningMotivationQues1
    },
    {
        path: '/learningAbility/LearningMotivation/success/1',
        name: 'LearningMotivationSuccess1',
        component: LearningMotivationSuccess1,
    },
]
