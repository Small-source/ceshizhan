// 心里健康评估
/*
    1.心里健康问卷
*/
const Part4Index = () => import('@/views/LearningAbility/mentalHealth/index.vue');
//1
const mentalHealthGuide1 = () => import('@/views/LearningAbility/mentalHealth/quesGuide1.vue')
const mentalHealthQues1= () => import('@/views/LearningAbility/mentalHealth/ques1.vue')
const mentalHealthSuccess1 = () => import('@/views/LearningAbility/mentalHealth/quesSuccess1.vue')

export default[
    {
        path: '/learningAbility/mentalHealth',
        name: '心里健康首页',
        component:Part4Index,
    },
    {
        path: '/learningAbility/mentalHealth/guide/1',
        name: 'mentalHealthGuide1',
        component: mentalHealthGuide1
    },
    {
        path: '/learningAbility/mentalHealth/1',
        name: 'mentalHealthQues1',
        component: mentalHealthQues1
    },
    {
        path: '/learningAbility/mentalHealth/success/1',
        name: 'mentalHealthSuccess1',
        component: mentalHealthSuccess1,
    },
]
