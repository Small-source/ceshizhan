import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
// 引入axios,axios不是vue家族的组件所以不能通过use方法安装，可以通过在vue对象上拓展原型方法来全局使用
import axios from 'axios'
Vue.prototype.$ajax= axios;
// Vue.prototype.G_uri= 'http://39.98.37.134:8002';
Vue.prototype.G_uri= 'http://www.xuematech.com/papi';

Vue.use(MetaInfo)
Vue.config.productionTip = false
// router.afterEach((to, from, next) => {
// 	console.log(555555)
//   // console.log(router.options.routes[16].path)
//   window.scrollTo(0, 0)
// })
// Vue.prototype.G_uri= '/api';
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
// metaInfo: {        
//  	title: '我是一个title',        
//  	meta: [            
//  		{	
//  			name: 'keywords',                
//  			content: '关键字1,关键字2,关键字3'            
//  		},            
//  		{               
//  			name: 'description',
//  			content: '这是一段网页的描述'           
//  		}        
//  	]   
// }
// metaInfo: {
//     title: 'My Example App', // set a title
//     meta: [
// 	    {                 // set meta
// 	        name: 'keyWords',
// 	        content: 'My Example App'
// 	    },
// 	    {               
//  			name: 'description',
//  			content: '这是一段网页的描述'           
//  		}  
//     ]
// }
