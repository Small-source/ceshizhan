import LearningPotential from  './routes/LearningPotential' //学习潜力
import LearningMotivation from  './routes/LearningMotivation' //学习动力
import LearningEffectiveness from  './routes/LearningEffectiveness' //学习效力
import mentalHealth from  './routes/mentalHealth' //心里健康
// 导航页
const Navgation1 = () => import('@/views/LearningAbility/Navigations/part1.vue');
export default  {
    learningAbility:[
        {
            path: '/',
            name: '学习潜力导航',
            component: Navgation1
        },
        ...LearningPotential,
        ...LearningMotivation,
        ...LearningEffectiveness,
        ...mentalHealth
    ]
}
