(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48b62ab0"],{"10f9":function(t,e,s){"use strict";(function(t){s("7f7f");e["a"]={name:"tuance",data:function(){return{ischecked:!0,waring:"",card:"",password:""}},mounted:function(){var e=t(window).width(),s=t(window).height();t("#tuance").css({width:e,height:s}),window.onresize=function(){var e=t(window).width(),s=t(window).height();t("#tuance").css({width:e,height:s})}},methods:{submit:function(){var t=this;if(this.waring="",!this.card)return this.waring="卡号不能为空",!1;if(!this.password)return this.waring="密码不能为空",!1;if(!/^9\d{7}$/.test(this.card))return this.waring="卡号输入格式不正确",!1;this.ischecked||localStorage.removeItem("ymtxUser");var e=this.$OEMdomain,s={Username:this.card,Password:this.password};this.$ajax.post(this.G_uri+"/login/teamReportLogin",{userName:this.card,password:this.password,webSite:e}).then(function(e){if(2e3==e.data.code){var a=e.data.data.isImproveInformation;window.sessionStorage.setItem("ymtxUserMessage",!0),t.ischecked&&window.localStorage.setItem("ymtxUser",JSON.stringify(s)),window.sessionStorage.setItem("ymtxCard",JSON.stringify(s)),window.sessionStorage.setItem("ymtxToken",e.data.data.token),window.sessionStorage.setItem("name",e.data.data.userInfo.name),window.sessionStorage.setItem("tuance",3),"1"==a?t.$router.push("/thome"):"2"==a&&t.$router.push("/perfectInformation")}else t.waring="账号或密码不正确"})},goReaduser:function(){if(localStorage.getItem("ymtxUser")){var t=JSON.parse(localStorage.getItem("ymtxUser"));this.card=t.Username,this.password=t.Password}}},created:function(){this.goReaduser()}}}).call(this,s("1157"))},"3c10":function(t,e,s){"use strict";var a=s("6d5b"),i=s.n(a);i.a},"6d5b":function(t,e,s){},e0d1:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"tuance"}},[s("div",{staticClass:"mainTuance"},[s("div",{staticClass:"tuanTitle"},[t._v("\n            新高考智能选科分析\n            "),s("router-link",{attrs:{to:"/home"}},[t._v("返回首页")])],1),s("div",{staticClass:"tuanBottom"},[s("img",{attrs:{src:"/imgs/logo/bg_zuo.png",alt:""}}),s("div",[s("div",{staticClass:"tit"},[t._v("请使用学校发放的账号进行登录")]),s("div",{staticClass:"input"},[s("img",{attrs:{src:"/imgs/login/icon_user.png",alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.card,expression:"card"}],attrs:{type:"text",placeholder:"请输入卡号"},domProps:{value:t.card},on:{input:function(e){e.target.composing||(t.card=e.target.value)}}})]),s("div",{staticClass:"input"},[s("img",{attrs:{src:"/imgs/login/icon_password.png",alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("div",{staticClass:"waring"},[t._v(t._s(t.waring))])]),s("div",{staticClass:"denglu",on:{click:t.submit}},[t._v("\n                    登录\n                ")]),s("div",{staticClass:"zhuangtai"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ischecked,expression:"ischecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.ischecked)?t._i(t.ischecked,null)>-1:t.ischecked},on:{change:function(e){var s=t.ischecked,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);a.checked?r<0&&(t.ischecked=s.concat([n])):r>-1&&(t.ischecked=s.slice(0,r).concat(s.slice(r+1)))}else t.ischecked=i}}}),s("span",[t._v("记住登录状态")])])])])])])},i=[],n=s("10f9"),r=n["a"],o=(s("3c10"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,"db08bbf4",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-48b62ab0.df5ba44b.js.map