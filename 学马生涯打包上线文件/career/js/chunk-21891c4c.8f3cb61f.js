(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21891c4c"],{"454f":function(t,e,s){s("46a7");var n=s("584a").Object;t.exports=function(t,e,s){return n.defineProperty(t,e,s)}},"46a7":function(t,e,s){var n=s("63b6");n(n.S+n.F*!s("8e60"),"Object",{defineProperty:s("d9f6").f})},"85f2":function(t,e,s){t.exports=s("454f")},"8afc":function(t,e,s){"use strict";(function(t){var n,a=s("bd86"),c=s("e39b");e["a"]=(n={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(0).addClass("item_3");var e=this;this.t=setInterval(function(){e.seconds>0?e.seconds--:clearInterval(e.t)},1e3)},updated:function(){}},Object(a["a"])(n,"updated",function(){}),Object(a["a"])(n,"components",{xqqxNav:c["a"]}),Object(a["a"])(n,"methods",{go:function(e){var s=t(e.target).closest("a").attr("url");0==this.seconds?this.$router.push(s):this.layerMsg("请仔细阅读指导语！")}}),n)}).call(this,s("1157"))},bd86:function(t,e,s){"use strict";s.d(e,"a",function(){return c});var n=s("85f2"),a=s.n(n);function c(t,e,s){return e in t?a()(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},d91c:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pc-page"},[s("div",{staticClass:"test_main test_main_3"},[s("xqqxNav"),s("div",{staticClass:"test_detail test_3"},[s("div",{staticClass:"radio_box"},[s("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(0),s("div",{staticClass:"btngroup test_btngroup"},[s("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/shengyaceping/xqqx/1"},on:{click:function(e){return t.go(e)}}},[t._v("开始"),t.seconds?s("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])])])])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"txt_desc"},[s("p",[t._v("\n            1、答案没有正误之分，请根据你是怎样做的或最倾向于如何决定进行选择。 ")]),s("p",[t._v("\n            2、测试的目的是反映最真实的自己。请最大程度放松下来，选择更接近你平时的感受或行为的选项。\n          ")])])}],c=s("8afc"),i=c["a"],r=s("2877"),u=Object(r["a"])(i,n,a,!1,null,null,null);e["default"]=u.exports},e39b:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_menu clearfix"},[t._m(0),t.tuance?s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("02")]),s("h6",{staticClass:"tit"},[t._v("学习态度问卷")]),s("p",{staticClass:"font"},[t._v("learning attitude")])]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("01")]),s("h6",{staticClass:"tit"},[t._v("兴趣倾向问卷")]),s("p",{staticClass:"font"},[t._v("Interest tendency")])])}],c={data:function(){return{testType:"",tuance:!0}},created:function(){this.testType=sessionStorage.getItem("testType")},mounted:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)}},i=c,r=s("2877"),u=Object(r["a"])(i,n,a,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-21891c4c.8f3cb61f.js.map