//  学习动力
/*
    1.学习态度
*/
const Part2Index = () => import('@/views/LearningAbility/LearningMotivation/index.vue');
const Guide1 = () => import('@/views/LearningAbility/LearningMotivation/quesGuide1')
const Ques1= () => import('@/views/LearningAbility/LearningMotivation/ques1')
const Success1 = () => import('@/views/LearningAbility/LearningMotivation/quesSuccess1')

export default[
    {
        path: '/learningAbility/LearningMotivation',
        name: '学习动力首页',
        component:Part2Index,
    },
    {
        path: '/learningAbility/LearningMotivation/guide/1',
        name: 'RzqnGuide1',
        component: Guide1
    },
    {
        path: '/learningAbility/LearningMotivation/1',
        name: 'Ques1',
        component: Ques1
    },
    {
        path: '/learningAbility/LearningMotivation/success/1',
        name: 'Success1',
        component: Success1,
    },
]
