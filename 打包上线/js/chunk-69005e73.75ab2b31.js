(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69005e73"],{"16f4":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"competitionVideoList"},[e("div",{staticClass:"inner"},[e("ul",{staticClass:"lis"},t._l(t.videoList,function(i,s){return e("li",{key:s,on:{click:function(e){t.goPlay(i)}}},[e("div",{staticClass:"free"},[e("div",{staticClass:"imgBox"},[e("img",{attrs:{src:i.pic,alt:""}})]),e("p",{staticClass:"title"},[t._v(t._s(i.title))])])])}),0)])])},o=[],a=(e("cadf"),e("551c"),e("097d"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"jihuoka"},[e("div",{staticClass:"mark"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isJihuo,expression:"!isJihuo"}],staticClass:"tanchuang1"},[e("p",{staticClass:"title"},[t._v("激活竞赛指导卡")]),e("p",{staticClass:"neirong"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.KaNumber,expression:"KaNumber"}],staticClass:"Username",attrs:{type:"text",placeholder:"请输入竞赛指导卡账号",onfocus:"this.placeholder=''",onblur:"this.placeholder='请输入竞赛指导卡账号'"},domProps:{value:t.KaNumber},on:{input:function(i){i.target.composing||(t.KaNumber=i.target.value)}}})]),e("p",{staticClass:"neirong2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Kapassword,expression:"Kapassword"}],staticClass:"Password1",attrs:{type:"password",placeholder:"请输入竞赛指导卡密码",onfocus:"this.placeholder=''",onblur:"this.placeholder='请输入竞赛指导卡密码'"},domProps:{value:t.Kapassword},on:{input:function(i){i.target.composing||(t.Kapassword=i.target.value)}}})]),e("p",{staticClass:"warning"},[t._v(t._s(t.warning4))]),e("div",{staticClass:"button",on:{click:t.goJihuo}},[t._v("确定")]),e("div",{staticClass:"close",on:{click:function(i){t.$router.go(-1)}}},[t._v("×")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isJihuo,expression:"isJihuo"}],staticClass:"tanchuang2"},[t._m(0),e("div",{staticClass:"title"},[t._v("竞赛指导卡激活成功")]),e("p",{staticClass:"tishiyu"},[t._v("可观看竞赛视频")]),e("div",{staticClass:"goback",on:{click:function(i){t.$emit("go-close")}}},[t._v("返回")])])])])}),n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tubiao"},[e("img",{attrs:{src:"/imgs/tongyongtanchuang/chenggong.png",alt:""}})])}],c={props:["message"],data:function(){return{KaNumber:"",Kapassword:"",warning4:"",isJihuo:!1}},methods:{goJihuo:function(){var t=window.sessionStorage.getItem("ymtxToken"),i=this.KaNumber,e=this.Kapassword,s=this;i||e?this.$ajax.post(this.G_uri+"/competitionVideo/bindViewCard",{card:i,password:e},{headers:{token:t}}).then(function(t){2e3==t.data.code?s.isJihuo=!0:1016==t.data.code?s.$router.push("/login"):2026==t.data.code?s.$router.push("/perfectInformation"):s.warning4=t.data.msg}).catch(function(t){console.log(t)}):this.warning4="卡号或密码不能为空"}},mounted:function(){},created:function(){}},r=c,u=(e("45ec"),e("2877")),l=Object(u["a"])(r,a,n,!1,null,"fbc6bb30",null);l.options.__file="jihuoka.vue";var d=l.exports,p={components:{Jihuoka:d},props:["isFrom"],data:function(){return{isShowjihuoka:!1,videoList:[]}},methods:{getVideoList:function(){var t=this.$route.query.categoryName,i=this,e=window.sessionStorage.getItem("ymtxToken");this.$ajax.post(this.G_uri+"/competitionVideo/getVideoListByCategory",{categoryName:t},{headers:{token:e}}).then(function(t){2e3==t.data.code?i.videoList=t.data.data:1016==t.data.code&&i.$router.push("/login")}).catch(function(t){console.log(t)})},goPlay:function(t){var i=this.isFrom;this.$router.push({path:"/competitionVideoPlay",query:{id:t.id,title:t.title,introduction:t.introduction,ppt:t.ppt,isFrom:i,categoryName:this.$route.query.categoryName}})}},created:function(){this.getVideoList()}},h=p,m=(e("7010"),Object(u["a"])(h,s,o,!1,null,"09b8bece",null));m.options.__file="competitionVideoList.vue";i["a"]=m.exports},"1f6b":function(t,i,e){},2187:function(t,i,e){},"2c04":function(t,i,e){},"45ec":function(t,i,e){"use strict";var s=e("1f6b"),o=e.n(s);o.a},"4b28":function(t,i,e){"use strict";var s=e("2187"),o=e.n(s);o.a},"4f2a":function(t,i,e){},7010:function(t,i,e){"use strict";var s=e("4f2a"),o=e.n(s);o.a},"9d00":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div")},o=[],a={props:["url1"],data:function(){return{}},methods:{},created:function(){}},n=a,c=(e("b99b"),e("2877")),r=Object(c["a"])(n,s,o,!1,null,"3b02d95a",null);r.options.__file="mianbaoxie.vue";i["a"]=r.exports},aa8c:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"competitionVideoList"},[e("CompetitionVideoList")],1)},o=[],a=(e("cadf"),e("551c"),e("097d"),e("9d00")),n=e("16f4"),c={components:{Mianbaoxie:a["a"],CompetitionVideoList:n["a"]},props:[],data:function(){return{}},methods:{},created:function(){}},r=c,u=(e("4b28"),e("2877")),l=Object(u["a"])(r,s,o,!1,null,"00b09814",null);l.options.__file="competitionVideoList.vue";i["default"]=l.exports},b99b:function(t,i,e){"use strict";var s=e("2c04"),o=e.n(s);o.a}}]);
//# sourceMappingURL=chunk-69005e73.75ab2b31.js.map