(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0e7bfe"],{"3f88":function(t,s,a){"use strict";(function(t){var e=a("a84c");s["a"]={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(7).addClass("item_2");var s=this;this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{rzqnNav:e["a"]},methods:{go:function(s){var a=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},"65ab":function(t,s,a){},a84c:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t.tuance?a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("13")]),a("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),a("p",{staticClass:"font"},[t._v("Hidden Graphics")])]):t._e()])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("动手操作能力")]),a("p",{staticClass:"font"},[t._v("Operation")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("10")]),a("h6",{staticClass:"tit"},[t._v("组织管理能力")]),a("p",{staticClass:"font"},[t._v("Organizational\n      Management")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("11")]),a("h6",{staticClass:"tit"},[t._v("人际交往能力")]),a("p",{staticClass:"font"},[t._v("Interpersonal Interaction")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("12")]),a("h6",{staticClass:"tit"},[t._v("美术能力")]),a("p",{staticClass:"font"},[t._v("Arts Capacity")])])}],n=a("dca1"),c=n["a"],r=a("2877"),l=Object(r["a"])(c,e,i,!1,null,null,null);s["a"]=l.exports},ccf9:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("rzqnNav"),t._m(0),a("div",{staticClass:"test_detail test_1"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),a("div",{staticClass:"btngroup test_btngroup"},[a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/shengyaceping/rzqn/8"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])])])])],1)])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_step clearfix"},[a("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part A")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt_desc"},[a("p",[t._v("\n            指导语：本测验任务是观察题目，选择A B C D中你认为正确的选项。每次显示一道题目，只有一个正确选项。作答时间没有限制，请认真作答。\n          ")]),a("p",[t._v("要求：在保证正确率的情况下快速答题。")])])}],n=a("3f88"),c=n["a"],r=(a("ec39"),a("2877")),l=Object(r["a"])(c,e,i,!1,null,null,null);s["default"]=l.exports},dca1:function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{tuance:!0}},updated:function(){},methods:{},created:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))},ec39:function(t,s,a){"use strict";var e=a("65ab"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-6e0e7bfe.0c8b1f31.js.map