(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-691046ec"],{"128f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pc-page"},[e("div",{staticClass:"test_main test_main_3"},[t._m(0),e("div",{staticClass:"test_detail test_3"},[e("div",{staticClass:"radio_box"},[e("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),e("div",{staticClass:"btngroup test_btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/shengyaceping/xqqx/4"},on:{click:function(s){t.go(s)}}},[t._v("开始"),t.seconds?e("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])])])])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test_menu clearfix"},[e("a",{staticClass:"item item_3",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("01")]),e("h6",{staticClass:"tit"},[t._v("学科成绩分析")]),e("p",{staticClass:"font"},[t._v("ACADEMIC RESULTS")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"txt_desc"},[e("p",[t._v("\n            请对自己的各科成绩进行对比评估，如实填写成绩等级。\n          ")])])}],i=e("40e5"),c=i["a"],r=e("2877"),l=Object(r["a"])(c,a,n,!1,null,null,null);l.options.__file="quesGuide4.vue";s["default"]=l.exports},"40e5":function(t,s,e){"use strict";(function(t){var a=e("e39b");s["a"]={data:function(){return{seconds:10}},mounted:function(){var t=this;this.t=setInterval(function(){t.seconds>0?t.seconds--:clearInterval(t.t)},1e3)},updated:function(){},components:{xqqxNav:a["a"]},methods:{go:function(s){var e=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(e):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,e("1157"))},e39b:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test_menu clearfix"},[t._m(0),t.tuance?e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("02")]),e("h6",{staticClass:"tit"},[t._v("学习态度问卷")]),e("p",{staticClass:"font"},[t._v("learning attitude")])]):t._e()])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("01")]),e("h6",{staticClass:"tit"},[t._v("兴趣倾向问卷")]),e("p",{staticClass:"font"},[t._v("Interest tendency")])])}],i={data:function(){return{testType:"",tuance:!0}},created:function(){this.testType=sessionStorage.getItem("testType")},mounted:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)}},c=i,r=e("2877"),l=Object(r["a"])(c,a,n,!1,null,null,null);l.options.__file="xqqx.vue";s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-691046ec.f4423f2c.js.map