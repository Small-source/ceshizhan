import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueVideoPlayer from 'vue-video-player'
import VueResource from 'vue-resource'
import Util from './assets/js/util'
//引入api接口
import ports from './api/index'
//引入画图组件
import echarts from 'echarts'
// 引入axios,axios不是vue家族的组件所以不能通过use方法安装，可以通过在vue对象上拓展原型方法来全局使用
import axios from 'axios'
// 引入elementUI并且全局安装
import Element from 'element-ui';
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';

// 引入转pdf文件
import htmlToPdf from './components/utils/htmlToPdf.js';
Vue.use(htmlToPdf)
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
Vue.use(VueVideoPlayer)
Vue.use(VueResource)
Vue.use(Util)
//定义公用css
import './style/application.scss'
// 安装elementUI
Vue.use(Element);
// 全局拓展axios
Vue.prototype.$ajax= axios;
Vue.prototype.ports = ports;
//引入图标库
Vue.prototype.$echarts = echarts
// 测试域名
// Vue.prototype.G_uri= 'http://39.98.37.134:8002';
// Vue.prototype.G_uris= 'http://39.98.37.134:8003/api';
// // 线上域名
Vue.prototype.G_uri= '/papi';
Vue.prototype.G_uris = '/api';

//获取代理商域名
// Vue.prototype.$OEMdomain= 'localhost';
Vue.prototype.$OEMdomain= document.domain;
Vue.config.productionTip = false;
/*定义在全局 */
// 保留两位小数点
Vue.filter('toFixed', function (value, num) {
    value = Number(value);
    return value.toFixed(num);
});

// 向上取整
Vue.filter('ceil', function (value) {
    value = Number(value);
    return Math.ceil(value);
});


// 取绝对值
Vue.filter('abs', function (value) {
    value = Number(value);
    return Math.abs(value);
});
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
router.beforeResolve((to,from,next)=>{ 
    window.scroll(0,0)
    if(!to.meta.requireAuth){
      // console.log(6666);
        if (!window.sessionStorage.getItem("ymtxToken")) { // 判断当前的token是否存在
           return next({path:'/login'});
        }else{
            return  next();
        }
    }else{
        return next();
    }
})
