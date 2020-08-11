import Vue from 'vue';
import VueRouter from 'vue-router';
import ceping from './router/shengyaceping'
Vue.use(VueRouter);
const routes = [
    //生涯测评
    ...ceping,
    
    //测评完成
    {
        path:'/cepingwancheng',
        name:'测评完成',
        component:()=>import('./views/ceping/shengyaceping/cepingwancheng.vue'),
    },
    //首页/在此页面登录
    {
        path:'/start',
        name:'首页',
        component:()=>import('./views/start.vue'),
    },
    { 
        path: '/', 
        redirect: '/shengyaceping'
    } 
] 
const mode = 'hash';
// const router = new VueRouter({ base: process.env.BASE_URL,routes, mode });
const router = new VueRouter({ routes, mode });
export default router;
