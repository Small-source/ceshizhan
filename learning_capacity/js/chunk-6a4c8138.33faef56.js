(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a4c8138"],{3357:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("注意力")]),a("p",{staticClass:"font"},[t._v("Attention")])])])}],e=a("39b3"),c=e["a"],r=a("2877"),l=Object(r["a"])(c,i,n,!1,null,null,null);s["a"]=l.exports},"39b3":function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{}},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))},"6e24":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("Nav"),t._m(0),a("div",{staticClass:"test_detail test_1"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),a("div",{staticClass:"btngroup test_btngroup"},[a("router-link",{staticClass:"btn btn_jx",attrs:{to:"/learningAbility/learningPotential/1?type=test"}},[t._v("练习")]),a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/learningAbility/learningPotential/1"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])],1)])])],1)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_step clearfix"},[a("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part A")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt_desc"},[a("p",[t._v("\n            本测验是要测试你看见“←”或“→”后按键有多快。请你拿起鼠标置于胸前，将你左手拇指放在鼠标按键的左边，你的右手拇指放在鼠标按键的右边。当你看见箭头出现时，请你做出判断：\n          ")]),a("p",[t._v("\n            如果箭头朝左：请用左手拇指按左键。\n          ")]),a("p",[t._v("\n            如果箭头朝右：请用右手拇指按右键。\n          ")])])}],e=a("c6d6"),c=e["a"],r=(a("c64c"),a("2877")),l=Object(r["a"])(c,i,n,!1,null,null,null);s["default"]=l.exports},c64c:function(t,s,a){"use strict";var i=a("f696"),n=a.n(i);n.a},c6d6:function(t,s,a){"use strict";(function(t){var i=a("3357");s["a"]={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(0).addClass("item_2");var s=this;sessionStorage.getItem("infoTest")&&(s.seconds=0),this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{Nav:i["a"]},methods:{go:function(s){if(!sessionStorage.getItem("infoTest"))return this.layerMsg("至少练习一次!"),!1;var a=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},f696:function(t,s,a){}}]);
//# sourceMappingURL=chunk-6a4c8138.33faef56.js.map