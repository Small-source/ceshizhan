import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ports from './api/index'
Vue.use(Vuex);
let uri='/papi';
let uris='/api'
export default new Vuex.Store({
    state:{
        user:{},
        notice:{
            unreadNum:0
        },
        citys:[]
    },
    mutations:{
        //获取个人信息
        getUserInfo(state,data){
            state.user=data
        },
        ///查看未读服务通知数量
        getUnreadNum(state,res){
            state.notice.unreadNum=res.data.data.num
        },
        //获取省市区
        getCitys(state,res){
            state.citys=res.data
        }
    },
    actions:{
        ///获取个人信息
        getUserInfo(context,item){
            axios.post(uri+ports.user.getUserInfo,{},{
                headers:{
                    token: item.token
                }
            }).then((res)=>{
              if(res.data.code==2000){
                    sessionStorage.setItem('username',res.data.data.username)
                    context.commit('getUserInfo',res.data.data)
              }else{
                  window.localStorage.clear();
                  item.vue.$router.push('/login')
              }
            })
        },
        //查看未读服务通知数量
        getUnreadNum(context,token){
            let _this=this;
            axios.post(uri+ports.notice.getUnreadNum,{},{
                headers:{
                    token: token
                }
            }).then((res)=>{
                context.commit('getUnreadNum',res)
            })
        },
        //获取省市区
        getCitys(context) {
            let _this = this;
            axios.get('/data/map.json', {}, {
            }).then((res) => {
                context.commit('getCitys', res)
            })
        }
    }
})
