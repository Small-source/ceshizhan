import LearningPotential from  './routes/LearningPotential' //学习潜力
import LearningMotivation from  './routes/LearningMotivation' //学习动力
// 导航页
const Navgation1 = () => import('@/views/LearningAbility/Navigations/part1.vue');
const Navgation2 = () => import('@/views/LearningAbility/Navigations/part2.vue');
export default  {
    learningAbility:[
        {
            path: '/',
            name: '学习潜力导航',
            component: Navgation1
        },
        ...LearningPotential,
        {
            path: '/learningAbility/Navigation/2',
            name: '学习动力导航',
            component: Navgation2
        },
        ...LearningMotivation
    ]
}
