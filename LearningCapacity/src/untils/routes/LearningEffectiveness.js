//  学习效力
/*
    1.学习策略
    2.人格特性
    3.隐秘图形测试
*/
const Part3Index = () => import('@/views/LearningAbility/LearningEffectiveness/index.vue');

//1
const LearningEffectivenessGuide1 = () => import('@/views/LearningAbility/LearningEffectiveness/quesGuide1.vue')
const LearningEffectivenessQues1 = () => import('@/views/LearningAbility/LearningEffectiveness/ques1.vue')
const LearningEffectivenessSuccess1 = () => import('@/views/LearningAbility/LearningEffectiveness/quesSuccess1.vue')

//2
const LearningEffectivenessGuide2 = () => import('@/views/LearningAbility/LearningEffectiveness/quesGuide2.vue')
const LearningEffectivenessQues2 = () => import('@/views/LearningAbility/LearningEffectiveness/ques2.vue')
const LearningEffectivenessSuccess2 = () => import('@/views/LearningAbility/LearningEffectiveness/quesSuccess2.vue')

//3
const LearningEffectivenessGuide3 = () => import('@/views/LearningAbility/LearningEffectiveness/quesGuide3.vue')
const LearningEffectivenessQues3 = () => import('@/views/LearningAbility/LearningEffectiveness/ques3.vue')
const LearningEffectivenessSuccess3 = () => import('@/views/LearningAbility/LearningEffectiveness/quesSuccess3.vue')
export default[
    {
        path: '/learningAbility/LearningEffectiveness',
        name: '学习效力首页',
        component:Part3Index,
    },
    //1
    {
        path: '/learningAbility/LearningEffectiveness/guide/1',
        name: 'LearningEffectivenessGuide1',
        component: LearningEffectivenessGuide1
    },
    {
        path: '/learningAbility/LearningEffectiveness/1',
        name: 'LearningEffectivenessQues1',
        component: LearningEffectivenessQues1
    },
    {
        path: '/learningAbility/LearningEffectiveness/success/1',
        name: 'LearningEffectivenessSuccess1 ',
        component: LearningEffectivenessSuccess1,
    },
    //2
    {
        path: '/learningAbility/LearningEffectiveness/guide/2',
        name: 'LearningEffectivenessGuide2',
        component: LearningEffectivenessGuide2
    },
    {
        path: '/learningAbility/LearningEffectiveness/2',
        name: 'LearningEffectivenessQues2',
        component: LearningEffectivenessQues2
    },
    {
        path: '/learningAbility/LearningEffectiveness/success/2',
        name: 'LearningEffectivenessSuccess2 ',
        component: LearningEffectivenessSuccess2 ,
    },
    //3
    {
        path: '/learningAbility/LearningEffectiveness/guide/3',
        name: 'LearningEffectivenessGuide3',
        component: LearningEffectivenessGuide3
    },
    {
        path: '/learningAbility/LearningEffectiveness/3',
        name: 'LearningEffectivenessQues3',
        component: LearningEffectivenessQues3
    },
    {
        path: '/learningAbility/LearningEffectiveness/success/3',
        name: 'LearningEffectivenessSuccess3',
        component: LearningEffectivenessSuccess3,
    }
]
