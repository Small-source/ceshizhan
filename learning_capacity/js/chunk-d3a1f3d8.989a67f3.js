(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3a1f3d8"],{4771:function(t,s,a){"use strict";var n=a("9c6f"),e=a.n(n);e.a},"6d20":function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[a("a",{staticClass:"item",attrs:{href:"#"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("学习策略问卷")]),a("p",{staticClass:"font"},[t._v("learning strategy")])]),a("a",{staticClass:"item",attrs:{href:"#"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("学习风格问卷")]),a("p",{staticClass:"font"},[t._v("learning style")])]),a("a",{staticClass:"item",attrs:{href:"#"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),a("p",{staticClass:"font"},[t._v("hidden graphics")])])])}],i=a("f6cc"),c=i["a"],r=a("2877"),l=Object(r["a"])(c,n,e,!1,null,null,null);s["a"]=l.exports},"9c6f":function(t,s,a){},bbcf:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("Nav"),a("div",{staticClass:"test_detail test_2"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(0),a("div",{staticClass:"btngroup test_btngroup"},[a("a",{staticClass:"btn btn_start",attrs:{url:"/learningAbility/LearningEffectiveness/1"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])])])])],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt_desc"},[a("p",[t._v("\n            1、请根据自己的实际情况，选出适合的答案，注意每个问题只能选一个答案。\n          ")]),a("p",[t._v("\n            2、以下各题答案无好坏对错之分。\n          ")]),a("p",[t._v("\n            3、其中有“非常不符合”、“不符合”、“基本符合”、“符合”、“非常符合”5项可供选择。\n          ")])])}],i=a("ea84"),c=i["a"],r=(a("4771"),a("2877")),l=Object(r["a"])(c,n,e,!1,null,null,null);s["default"]=l.exports},ea84:function(t,s,a){"use strict";(function(t){var n=a("6d20");s["a"]={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(0).addClass("item_2");var s=this;this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{Nav:n["a"]},methods:{go:function(s){var a=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},f6cc:function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{}},updated:function(){},methods:{},created:function(){},mounted:function(){t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))}}]);
//# sourceMappingURL=chunk-d3a1f3d8.989a67f3.js.map