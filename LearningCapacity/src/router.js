import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from  './untils/router'
Vue.use(VueRouter);
const routes = [
    // //生涯测评
    // ...ceping,
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name:'首页',
        component:()=>import('@/views/home.vue'),
    },
    {
        path:'/learningAbility',
        component:()=>import('@/views/LearningAbility/index.vue'),
        children: routers.learningAbility
    },
    {
        path:'/learningreport',
        name:'学习力报告',
        component:()=>import('./views/report/learningReport.vue')
    }
]
const mode = 'hash';
// const router = new VueRouter({ base: process.env.BASE_URL,routes, mode });
const router = new VueRouter({ routes, mode });
export default router;
