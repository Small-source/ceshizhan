(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d04a39f0"],{"5db3":function(t,s,a){"use strict";var e=a("bd27"),i=a.n(e);i.a},a84c:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t.tuance?a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("13")]),a("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),a("p",{staticClass:"font"},[t._v("Hidden Graphics")])]):t._e()])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("动手操作能力")]),a("p",{staticClass:"font"},[t._v("Operation")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("10")]),a("h6",{staticClass:"tit"},[t._v("组织管理能力")]),a("p",{staticClass:"font"},[t._v("Organizational\n      Management")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("11")]),a("h6",{staticClass:"tit"},[t._v("人际交往能力")]),a("p",{staticClass:"font"},[t._v("Interpersonal Interaction")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("12")]),a("h6",{staticClass:"tit"},[t._v("美术能力")]),a("p",{staticClass:"font"},[t._v("Arts Capacity")])])}],n=a("dca1"),c=n["a"],r=a("2877"),l=Object(r["a"])(c,e,i,!1,null,null,null);s["a"]=l.exports},bd27:function(t,s,a){},dca1:function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{tuance:!0}},updated:function(){},methods:{},created:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))},ea88:function(t,s,a){"use strict";(function(t){var e=a("a84c");s["a"]={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(4).addClass("item_2");var s=this;sessionStorage.getItem("siTest")&&(s.seconds=0),this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{rzqnNav:e["a"]},methods:{go:function(s){if(!sessionStorage.getItem("siTest"))return this.layerMsg("至少练习一次!"),!1;var a=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},ffc1:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("rzqnNav"),t._m(0),a("div",{staticClass:"test_detail test_1"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),a("div",{staticClass:"btngroup test_btngroup"},[a("router-link",{staticClass:"btn btn_jx",attrs:{to:"/shengyaceping/rzqn/5?&type=test"}},[t._v("练习")]),a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/shengyaceping/rzqn/5"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])],1)])])],1)])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_step clearfix"},[a("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part A")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt_desc"},[a("p",[t._v("\n            本测验要求你对数字进行奇偶分类或者大小分类。每次数字出现之前，先出现一个提示信息，“奇偶”代表接下来要对数字进行奇偶分类，“大小”代表接下来要判断该数字是大于5还是小于5。提示信息呈现1秒，之后呈现数字，按键后数字消失。之后黑屏1秒，呈现下一提示信息。共进行60次判断。\n          ")]),a("p",[t._v("奇偶判断，奇数按鼠标左键，偶数按鼠标右键。")]),a("p",[t._v("大小判断，大于5按鼠标左键，小于5按鼠标右键。")]),a("p",[t._v("要求：快速且准确。 ")]),a("p",[t._v("在正式做之前，先进行练习，然后点击开始，进行正式测试。 ")])])}],n=a("ea88"),c=n["a"],r=(a("5db3"),a("2877")),l=Object(r["a"])(c,e,i,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-d04a39f0.94a66e08.js.map