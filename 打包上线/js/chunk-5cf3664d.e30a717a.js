(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf3664d"],{"163e":function(s,e,t){},"1a03":function(s,e,t){},"1a34":function(s,e,t){},"3f9f":function(s,e,t){},5115:function(s,e,t){"use strict";var n=t("e411"),a=t.n(n);a.a},"69dd":function(s,e,t){"use strict";var n=t("bb50"),a=t.n(n);a.a},7653:function(s,e,t){"use strict";var n=t("1a34"),a=t.n(n);a.a},7886:function(s,e,t){"use strict";var n=t("163e"),a=t.n(n);a.a},aced:function(s,e,t){"use strict";var n=t("d993"),a=t.n(n);a.a},aff3:function(s,e,t){},b6c4:function(s,e,t){"use strict";var n=t("f395"),a=t.n(n);a.a},bb50:function(s,e,t){},d993:function(s,e,t){},e411:function(s,e,t){},eb8a:function(s,e,t){"use strict";var n=t("aff3"),a=t.n(n);a.a},ede4:function(s,e,t){"use strict";t.r(e);var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"Login"},[t("div",{staticClass:"inner"},["tanchuang"==s.RegisterSuccess?t("div",{staticClass:"tanchuang"},[s._m(0),t("div",{staticClass:"tanchuang_right"},[t("div",{staticClass:"tanchuang_box"},[t("ul",{staticClass:"lis"},[t("li",{class:"Denglu"==s.isgoLogin?"active":"",on:{click:function(e){s.go("Denglu")}}},[t("p",{staticClass:"text_box"},[s._v("用户登陆")]),t("p",{staticClass:"underline"})]),t("li",{class:"Register"==s.isgoLogin?"active":"",on:{click:function(e){s.go("Register")}}},[t("p",{staticClass:"text_box"},[s._v("立即注册")]),t("p",{staticClass:"underline"})])]),t("div",{staticClass:"content"},[t(s.isgoLogin,{tag:"compoemts",on:{"go-login":function(e){s.isReset=!0},Chenggongtanchuang:function(e){s.RegisterSuccess="Chenggongtanchuang"},showxieyi:function(e){s.RegisterSuccess="Fuwuxieyi"},"go-phone":function(e){s.RegisterSuccess="BangdingPhone"}}})],1)]),t("Reset",{attrs:{data:s.isReset},on:{"go-backdenglu":function(e){s.isReset=!1},godenglu:function(e){s.isReset=!1},Chenggongtanchuang:function(e){s.RegisterSuccess="Chongzhimimachenggong"}}})],1)]):s._e(),"Chenggongtanchuang"==s.RegisterSuccess?t("div",{staticClass:"Chenggongtanchuang"},[t("Chenggongtanchuang",{on:{Chenggongtanchuang:function(e){s.RegisterSuccess="PerfectInformation"}}})],1):s._e(),"PerfectInformation"==s.RegisterSuccess?t("div",{staticClass:"PerfectInformation"},[t("PerfectInformation")],1):s._e(),"Chongzhimimachenggong"==s.RegisterSuccess?t("div",{staticClass:"Chongzhimimachenggong"},[t("Chongzhimimachenggong",{on:{Chenggongtanchuang:function(e){s.RegisterSuccess="tanchuang"}}})],1):s._e(),"Fuwuxieyi"==s.RegisterSuccess?t("div",{staticClass:"Fuwuxieyi"},[t("Fuwuxieyi",{on:{fanhuizuce:function(e){s.RegisterSuccess="tanchuang"}}})],1):s._e(),"BangdingPhone"==s.RegisterSuccess?t("div",{staticClass:"BangdingPhone"},[t("BangdingPhone",{on:{Chenggongtanchuang:function(e){s.RegisterSuccess="Chenggongtanchuang"}}})],1):s._e(),"Bangdingchenggong"==s.RegisterSuccess?t("div",{staticClass:"Bangdingchenggong"},[t("Bangdingchenggong",{on:{Chenggongtanchuang:function(e){s.RegisterSuccess="PerfectInformation"}}})],1):s._e()])])},a=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"tanchuang_left"},[t("img",{attrs:{src:"/imgs/login/icon_.left.png",alt:""}})])}],i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"denglu"},[t("div",{staticClass:"inputs"},[t("div",{staticClass:"neirong1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Username,expression:"Username"}],staticClass:"Username",attrs:{type:"text",placeholder:"请输入手机号码或8位卡号",autocomplete:"on"},domProps:{value:s.Username},on:{input:function(e){e.target.composing||(s.Username=e.target.value)}}})])]),t("div",{staticClass:"inputs"},[t("div",{staticClass:"neirong2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password,expression:"Password"}],staticClass:"Password1",attrs:{type:"password",placeholder:"请输入登录密码"},domProps:{value:s.Password},on:{input:function(e){e.target.composing||(s.Password=e.target.value)}}}),t("div",{staticClass:"icon"})]),t("p",{staticClass:"warning2"},[s._v(s._s(s.warning2))])]),t("div",{staticClass:"button",on:{click:s.goLogin}},[s._v("\n        登录\n    ")]),t("p",{staticClass:"jizhuzhuangtai"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ischecked,expression:"ischecked"}],staticClass:"remember",attrs:{type:"checkbox",id:"remember"},domProps:{checked:Array.isArray(s.ischecked)?s._i(s.ischecked,null)>-1:s.ischecked},on:{change:function(e){var t=s.ischecked,n=e.target,a=!!n.checked;if(Array.isArray(t)){var i=null,o=s._i(t,i);n.checked?o<0&&(s.ischecked=t.concat([i])):o>-1&&(s.ischecked=t.slice(0,o).concat(t.slice(o+1)))}else s.ischecked=a}}}),t("label",{attrs:{for:"remember"}},[s._v("记住登录状态")]),t("span",{staticClass:"reset",on:{click:function(e){s.$emit("go-login")}}},[s._v("忘记密码?")])])])},o=[],r=(t("7f7f"),t("cadf"),t("551c"),t("097d"),{data:function(){return{Username:"",Password:"",warning1:"",warning2:"",isclicked:!1,ischecked:!0}},watch:{Username:function(){this.warning1="",this.isclick()},Password:function(){this.warning2="",this.isclick()}},methods:{goLogin:function(){var s=this.$OEMdomain,e=this.Username,t=this.Password,n=/[a-zA-z0-9!@#$%^&*.?]{6,20}/,a=this,i=/(^1[123456789]\d{9}$)|(^\d{8}$)/,o={Username:e,Password:t};this.Username?(this.warning2="",this.Password?(this.warning2="",i.test(e)?(this.warning2="",n.test(t)?(this.ischecked||localStorage.removeItem("ymtxUser"),this.$ajax.post(this.G_uri+"/login/login",{userName:e,password:t,webSite:s}).then(function(s){var e=a.Username.length,t=s.data.data.is_band_phone;if(2e3==s.data.code&&11==e){var n=s.data.data.isImproveInformation;window.localStorage.setItem("ymtxUser",JSON.stringify(o)),window.sessionStorage.setItem("ymtxUserMessage",!0),window.sessionStorage.setItem("ymtxUserMessageSuccess",n),window.sessionStorage.setItem("ymtxToken",s.data.data.token),window.sessionStorage.setItem("name",s.data.data.userInfo.name);var i=sessionStorage.page;i?a.$router.push(i):a.$router.push("/home")}else 2e3==s.data.code&&8==e?(window.sessionStorage.setItem("ymtxUserMessage",!0),window.sessionStorage.setItem("ymtxCard",JSON.stringify(o)),1==t?a.$emit("go-phone"):2==t&&a.$router.push("/perfectInformation")):a.warning2=s.data.msg}).catch(function(s){console.log(s)})):this.warning2="密码不能少于6位字符，不能超过20位字符"):this.warning2="请输入正确的手机号或8位会员卡号"):this.warning2="密码不能为空"):this.warning2="账号不能为空"},isclick:function(){var s=this.Username,e=this.Password;this.isclicked=!(!s||!e)},goReaduser:function(){if(localStorage.getItem("ymtxUser")){var s=JSON.parse(localStorage.getItem("ymtxUser"));this.Username=s.Username,this.Password=s.Password}}},created:function(){this.goReaduser()}}),c=r,d=(t("7653"),t("2877")),u=Object(d["a"])(c,i,o,!1,null,"660772e4",null);u.options.__file="Denglu.vue";var g=u.exports,l=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"mark"},[t("div",{staticClass:"BangdingPhone"},[t("div",{staticClass:"top-title"},[s._v("绑定手机号")]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Username,expression:"Username"}],staticClass:"Username",attrs:{type:"text",placeholder:"请输入手机号码",autocomplete:"on"},domProps:{value:s.Username},on:{input:function(e){e.target.composing||(s.Username=e.target.value)}}})]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.KeyCode,expression:"KeyCode"}],staticClass:"KeyCode",attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:s.KeyCode},on:{input:function(e){e.target.composing||(s.KeyCode=e.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:s.isShowKeyCode,expression:"isShowKeyCode"}],staticClass:"getKeyCode",on:{click:s.getKeyCode}},[s._v("发送验证码")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!s.isShowKeyCode,expression:"!isShowKeyCode"}],staticClass:"time"},[s._v(s._s(s.time)+" s")])]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password,expression:"Password"}],ref:"Password0",staticClass:"Password",attrs:{type:"password",placeholder:"请设置6至20位登录密码"},domProps:{value:s.Password},on:{input:function(e){e.target.composing||(s.Password=e.target.value)}}})]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password1,expression:"Password1"}],staticClass:"Password1",attrs:{type:"password",value:"",placeholder:"请再次输入登录密码"},domProps:{value:s.Password1},on:{input:function(e){e.target.composing||(s.Password1=e.target.value)}}})]),t("p",{staticClass:"warning4"},[s._v(s._s(s.warning4))])]),t("div",{class:s.isclick?"button":"unclick",on:{click:s.Submission}},[s._v("点击绑定")])])])},h=[],m={data:function(){return{Username:"",KeyCode:"",Password:"",Password1:"",card:"",Password0:"",warning4:"",isclick:!1,isshowxieyi:!1,isChecked:!0,time:60,isShowKeyCode:!0}},watch:{Username:function(){this.panduan()},KeyCode:function(){this.panduan()},Password:function(){this.panduan()},Password1:function(){this.panduan()},isChecked:function(){this.panduan()}},methods:{Submission:function(){var s=this.$OEMdomain,e=this.Username,t=this.KeyCode,n=this.Password,a=this.card,i=this.Password0,o=this,r=this.Username,c=/^1[123456789]\d{9}$/,d=this.KeyCode,u=/[a-zA-z0-9!@#$%^&*.?]{6,20}/,g=this.Password,l=this.Password1,h=this.isChecked;r?c.test(r)?d?g?u.test(g)?g==l?h?this.$ajax.post(this.G_uri+"/login/bindPhone",{phone:e,loginPassword:n,code:t,card:a,password:i,webSite:s}).then(function(s){2e3==s.data.code?(window.sessionStorage.setItem("ymtxUserMessage",!0),window.sessionStorage.setItem("ymtxToken",s.data.data.token),o.$emit("Chenggongtanchuang")):o.warning4=s.data.msg}).catch(function(s){console.log(s)}):this.warning4="请勾选用户服务协议":this.warning4="两次输入的密码不一致":this.warning4="密码不能少于6位字符，不能超过20位字符":this.warning4="密码不能为空":this.warning4="验证码不能为空":this.warning4="账号或密码不正确":this.warning4="手机号码不能为空"},isshowpassword:function(){"password"===this.$refs.Password0.type?this.$refs.Password0.type="text":this.$refs.Password0.type="password"},panduan:function(){var s=this.Username,e=this.KeyCode,t=this.Password,n=this.Password1,a=this.isChecked;this.isclick=!!(s&&e&&t&&n&&a)},gobackCheckd:function(){this.isshowxieyi=!1,this.isChecked=!0},timers:function(){var s=this,e=setInterval(function(){s.time--,0==s.time&&(clearInterval(e),s.isShowKeyCode=!0,s.time=60)},1e3)},getKeyCode:function(){var s=this.Username,e=/(^1[123456789]\d{9}$)|(^\d{8}$)/,t=this,n=this.$OEMdomain;e.test(s)?(this.warning4="",this.$ajax.post(this.G_uri+"/register/getPhoneNumberByCode",{phone:s,webSite:n}).then(function(s){2e3==s.data.code?(t.isShowKeyCode=!1,t.timers()):t.warning4=s.data.msg}).catch(function(s){console.log(s)})):this.warning4="请输入正确的手机号"},goReaduser:function(){if(window.sessionStorage.getItem("ymtxCard")){var s=JSON.parse(sessionStorage.getItem("ymtxCard"));this.card=s.Username,this.Password0=s.Password}}},created:function(){this.goReaduser()}},w=m,p=(t("fbae"),Object(d["a"])(w,l,h,!1,null,"11e98200",null));p.options.__file="BangdingPhone.vue";var v=p.exports,f=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"register"},[t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Username,expression:"Username"}],staticClass:"Username",attrs:{type:"text",placeholder:"请输入手机号码",autocomplete:"on"},domProps:{value:s.Username},on:{input:function(e){e.target.composing||(s.Username=e.target.value)}}})]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.KeyCode,expression:"KeyCode"}],staticClass:"KeyCode",attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:s.KeyCode},on:{input:function(e){e.target.composing||(s.KeyCode=e.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:s.isShowKeyCode,expression:"isShowKeyCode"}],staticClass:"getKeyCode",on:{click:s.getKeyCode}},[s._v("发送验证码")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!s.isShowKeyCode,expression:"!isShowKeyCode"}],staticClass:"time"},[s._v(s._s(s.time)+" s")])]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password,expression:"Password"}],ref:"Password0",staticClass:"Password",attrs:{type:"password",placeholder:"请设置6至20位登录密码"},domProps:{value:s.Password},on:{input:function(e){e.target.composing||(s.Password=e.target.value)}}})]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password1,expression:"Password1"}],staticClass:"Password1",attrs:{type:"password",value:"",placeholder:"请再次输入登录密码"},domProps:{value:s.Password1},on:{input:function(e){e.target.composing||(s.Password1=e.target.value)}}})]),t("p",{staticClass:"warning4"},[s._v(s._s(s.warning4))])]),t("div",{class:s.isclick?"button":"unclick",on:{click:s.Submission}},[s._v("点击注册")])])},C=[],y={data:function(){return{Username:"",KeyCode:"",Password:"",Password1:"",warning4:"",isclick:!1,isshowxieyi:!1,isChecked:!0,time:60,isShowKeyCode:!0}},watch:{Username:function(){this.panduan()},KeyCode:function(){this.panduan()},Password:function(){this.panduan()},Password1:function(){this.panduan()},isChecked:function(){this.panduan()}},methods:{Submission:function(){var s=this.$OEMdomain,e=this.Username,t=this.KeyCode,n=this.Password,a=this,i=this.Username,o=/^1[123456789]\d{9}$/,r=this.KeyCode,c=/[a-zA-z0-9!@#$%^&*.?]{6,20}/,d=this.Password,u=this.Password1,g=this.isChecked;i?o.test(i)?r?d?c.test(d)?d==u?g?this.$ajax.post(this.G_uri+"/register/register",{phone:e,passwordOne:n,code:t,webSite:s}).then(function(s){console.log(s),2e3==s.data.code?(window.sessionStorage.setItem("ymtxUserMessage",!0),window.sessionStorage.setItem("ymtxToken",s.data.data.token),a.$emit("Chenggongtanchuang")):a.warning4=s.data.msg}).catch(function(s){console.log(s)}):this.warning4="请勾选用户服务协议":this.warning4="两次输入的密码不一致":this.warning4="密码不能少于6位字符，不能超过20位字符":this.warning4="密码不能为空":this.warning4="验证码不能为空":this.warning4="账号或密码不正确":this.warning4="手机号码不能为空"},isshowpassword:function(){"password"===this.$refs.Password0.type?this.$refs.Password0.type="text":this.$refs.Password0.type="password"},panduan:function(){var s=this.Username,e=this.KeyCode,t=this.Password,n=this.Password1,a=this.isChecked;this.isclick=!!(s&&e&&t&&n&&a)},gobackCheckd:function(){this.isshowxieyi=!1,this.isChecked=!0},timers:function(){var s=this,e=setInterval(function(){s.time--,0==s.time&&(clearInterval(e),s.isShowKeyCode=!0,s.time=60)},1e3)},getKeyCode:function(){var s=this.Username,e=/(^1[123456789]\d{9}$)|(^\d{8}$)/,t=this,n=this.$OEMdomain;e.test(s)?(this.warning4="",this.$ajax.post(this.G_uri+"/register/getPhoneNumberByCode",{phone:s,webSite:n}).then(function(s){2e3==s.data.code?(t.isShowKeyCode=!1,t.timers()):t.warning4=s.data.msg}).catch(function(s){console.log(s)})):this.warning4="请输入正确的手机号"}},created:function(){}},P=y,_=(t("fc74"),Object(d["a"])(P,f,C,!1,null,"3d36f3ac",null));_.options.__file="Register.vue";var k=_.exports,x=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:s.data,expression:"data"}],staticClass:"reset"},[s._m(0),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Username,expression:"Username"}],staticClass:"Username",attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:s.Username},on:{input:function(e){e.target.composing||(s.Username=e.target.value)}}})]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.KeyCode,expression:"KeyCode"}],staticClass:"KeyCode",attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:s.KeyCode},on:{input:function(e){e.target.composing||(s.KeyCode=e.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:s.isShowKeyCode,expression:"isShowKeyCode"}],staticClass:"getKeyCode",on:{click:s.getKeyCode}},[s._v("发送验证码")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!s.isShowKeyCode,expression:"!isShowKeyCode"}],staticClass:"time"},[s._v(s._s(s.time)+" s")])]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password,expression:"Password"}],ref:"Password0",staticClass:"Password",attrs:{type:"password",placeholder:"请设置6至20位登录密码"},domProps:{value:s.Password},on:{input:function(e){e.target.composing||(s.Password=e.target.value)}}})]),t("p",{staticClass:"warning"})]),t("div",{staticClass:"inputs"},[t("p",{staticClass:"neirong"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.Password1,expression:"Password1"}],staticClass:"Password1",attrs:{type:"password",value:"",placeholder:"请再次输入登录密码"},domProps:{value:s.Password1},on:{input:function(e){e.target.composing||(s.Password1=e.target.value)}}})]),t("p",{staticClass:"warning4"},[s._v(s._s(s.warning4))])]),t("div",{class:s.isclick?"button":"unclick",on:{click:s.Submission}},[s._v("确定")]),t("div",{staticClass:"gobackdenglu",on:{click:function(e){s.$emit("go-backdenglu")}}},[s._v("返回用户登录")])])},S=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"title"},[t("p",[s._v("重置登录密码")]),t("p",{staticClass:"underline"})])}],b={props:["data"],data:function(){return{Username:"",KeyCode:"",Password:"",Password1:"",warning4:"",isclick:!1,time:60,isShowKeyCode:!0}},watch:{Username:function(){this.panduan()},KeyCode:function(){this.panduan()},Password:function(){this.panduan()},Password1:function(){this.panduan()},isChecked:function(){this.panduan()}},methods:{Submission:function(){var s=this.$OEMdomain,e=this.Username,t=this.KeyCode,n=this.Password,a=this.Password1,i=this,o=this.Username,r=/^1[123456789]\d{9}$/,c=this.KeyCode,d=/[a-zA-z0-9!@#$%^&*.?]{6,20}/,u=this.Password,g=this.Password1;o?r.test(o)?c?u?d.test(u)?u==g?this.isclick&&this.$ajax.post(this.G_uri+"/login/forgotPassword",{phone:e,code:t,passwordOne:n,passwordTwo:a,webSite:s}).then(function(s){2e3==s.data.code?(window.sessionStorage.setItem("ymtxUserMessage",!0),window.sessionStorage.setItem("ymtxToken",s.data.data.token),i.$emit("Chenggongtanchuang"),i.$emit("godenglu")):i.warning4=s.data.msg}).catch(function(s){console.log(s)}):this.warning4="两次输入的密码不一致":this.warning4="密码不能少于6位字符，不能超过20位字符":this.warning4="密码不能为空":this.warning4="验证码不能为空":this.warning4="账号或密码不正确":this.warning4="手机号码不能为空"},isshowpassword:function(){"password"===this.$refs.Password0.type?this.$refs.Password0.type="text":this.$refs.Password0.type="password"},panduan:function(){var s=this.Username,e=this.KeyCode,t=this.Password,n=this.Password1;this.isclick=!!(s&&e&&t&&n)},timers:function(){var s=this,e=setInterval(function(){s.time--,0==s.time&&(clearInterval(e),s.isShowKeyCode=!0,s.time=60)},1e3)},getKeyCode:function(){var s=this.$OEMdomain,e=this.Username,t=/(^1[123456789]\d{9}$)|(^\d{8}$)/,n=this;t.test(e)?(this.warning4="",this.isShowKeyCode=!1,this.timers(),this.$ajax.post(this.G_uri+"/login/forgetPasswordByPhone",{phone:e,webSite:s}).then(function(s){2e3==s.data.code||(n.warning4=s.data.msg)}).catch(function(s){console.log(s)})):this.warning4="请输入正确的手机号"}},created:function(){}},K=b,U=(t("7886"),Object(d["a"])(K,x,S,!1,null,"6b811ad9",null));U.options.__file="Reset.vue";var I=U.exports,R=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chongzhimimachenggong"},[s._m(0),t("h5",{staticClass:"success"},[s._v("密码重置成功")]),t("p",{staticClass:"baoguan"},[s._v("请妥善保管您的账户信息")]),t("button",{on:{click:function(e){s.$emit("Chenggongtanchuang")}}},[s._v("立即登陆")])])},N=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"tubiao"},[t("img",{attrs:{src:"/imgs/tongyongtanchuang/chenggong.png",alt:""}})])}],E={data:function(){return{}},methods:{},created:function(){}},O=E,z=(t("b6c4"),Object(d["a"])(O,R,N,!1,null,"6a73307c",null));z.options.__file="Chongzhimimachenggong.vue";var B=z.exports,j=t("2876"),$=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"mark"},[t("div",{staticClass:"Chenggongtanchuang"},[s._m(0),t("div",{staticClass:"success"},[s._v("恭喜您注册成功")]),t("p",{staticClass:"baoguan"},[s._v("请妥善保管您的账户信息")]),t("button",{on:{click:function(e){s.$emit("Chenggongtanchuang")}}},[s._v("下一步")])])])},L=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"tubiao"},[t("img",{attrs:{src:"/imgs/tongyongtanchuang/chenggong.png",alt:""}})])}],A={data:function(){return{}},methods:{},created:function(){}},M=A,D=(t("5115"),Object(d["a"])(M,$,L,!1,null,"1022f28c",null));D.options.__file="Chenggongtanchuang.vue";var G=D.exports,F=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"Chenggongtanchuang"},[s._m(0),t("div",{staticClass:"success"},[s._v("恭喜您绑定成功")]),t("p",{staticClass:"baoguan"},[s._v("请妥善保管您的账户信息")]),t("button",{on:{click:function(e){s.$emit("Chenggongtanchuang")}}},[s._v("下一步")])])},J=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"tubiao"},[t("img",{attrs:{src:"/imgs/tongyongtanchuang/chenggong.png",alt:""}})])}],T={data:function(){return{}},methods:{},created:function(){}},q=T,X=(t("69dd"),Object(d["a"])(q,F,J,!1,null,"5af86165",null));X.options.__file="Bangdingchenggong.vue";var H=X.exports,Q=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"ServicesAgreement"},[t("div",{staticClass:"neirongBox"},[t("p",{staticClass:"biaoti"},[s._v("服务协议")]),t("p",{staticClass:"title"},[s._v("总则")]),t("p",{staticClass:"xiangqing"}),t("p",[s._v("此处显示内容")]),t("div",{staticClass:"closes",on:{click:function(e){s.$emit("fanhuizuce")}}},[s._v("X")]),t("div",{staticClass:"gobackCheckd",on:{click:function(e){s.$emit("fanhuizuce")}}},[s._v("我以阅读并同意用户服务协议内容")])])])},V=[],W={data:function(){return{}},methods:{},created:function(){}},Y=W,Z=(t("aced"),Object(d["a"])(Y,Q,V,!1,null,"f5097ca4",null));Z.options.__file="Fuwuxieyi.vue";var ss=Z.exports,es={components:{Denglu:g,Register:k,Reset:I,PerfectInformation:j["default"],Chenggongtanchuang:G,Chongzhimimachenggong:B,Fuwuxieyi:ss,BangdingPhone:v,Bangdingchenggong:H},props:["data"],data:function(){return{isgoLogin:"Denglu",isReset:!1,RegisterSuccess:"tanchuang"}},methods:{go:function(s){this.isgoLogin=s},stop:function(){var s=function(s){s.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",s,!1)},move:function(){var s=function(s){s.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",s,!1)}},watch:{data:function(){var s=this.data;this.isgoLogin=s,this.data?this.stop():this.move()}},created:function(){}},ts=es,ns=(t("eb8a"),Object(d["a"])(ts,n,a,!1,null,"45e7888c",null));ns.options.__file="Login.vue";e["default"]=ns.exports},f395:function(s,e,t){},fbae:function(s,e,t){"use strict";var n=t("3f9f"),a=t.n(n);a.a},fc74:function(s,e,t){"use strict";var n=t("1a03"),a=t.n(n);a.a}}]);
//# sourceMappingURL=chunk-5cf3664d.e30a717a.js.map