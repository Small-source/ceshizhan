import routers from  './routes/LearningPotential'
// 导航页
const Navgation1 = () => import('@/views/LearningAbility/Navigations/part1.vue'); //学习潜力
export default  {
    learningAbility:[
        {
            path: '/',
            name: '学习潜力导航',
            component: Navgation1
        },
        ...routers
    ]
}
