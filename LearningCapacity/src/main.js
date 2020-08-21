import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import VueResource from 'vue-resource'//$http服务文件
import Util from './untils/js/util'
import htmlToPdf from './untils/js/htmlToPdf.js';


//引入画图组件
import echarts from 'echarts'
// 引入axios,axios不是vue家族的组件所以不能通过use方法安装，可以通过在vue对象上拓展原型方法来全局使用
import axios from 'axios'
Vue.use(VueVideoPlayer)
Vue.use(VueResource)
Vue.use(htmlToPdf)
Vue.use(Util)
//定义公用css
import './style/application.scss'



// 全局拓展axios
Vue.prototype.$ajax= axios;
//引入图标库
Vue.prototype.$echarts = echarts

// 测试域名
// Vue.prototype.G_uri= 'http://39.98.37.134:8002';
// Vue.prototype.G_uris= 'http://39.98.37.134:8003/api';
// // 线上域名
Vue.prototype.G_uri= '/api';
Vue.prototype.G_uris = '';

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
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
