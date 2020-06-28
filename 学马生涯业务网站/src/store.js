import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  	recruitScrollY:0, 
  },
  getters: { 
 	  recruitScrollY:state => state.recruitScrollY, 
    // islogin:state => state.islogin
  }, 
  mutations: {
    // 如果登录我们将islogin设置为ture，未登录则为false
    changeIslogin(state, islogin) {
      // console.log('你好我已经接受' + islogin)
    },
  	changeRecruitScrollY(state,recruitScrollY) { 
 		  state.recruitScrollY = recruitScrollY 
 	  } 
  },
  actions: {

  }
})
