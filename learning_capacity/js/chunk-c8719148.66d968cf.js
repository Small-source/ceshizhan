(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8719148"],{"1fd3":function(t,s,a){},3357:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("注意力")]),a("p",{staticClass:"font"},[t._v("Attention")])])])}],e=a("39b3"),c=e["a"],r=a("2877"),l=Object(r["a"])(c,i,n,!1,null,null,null);s["a"]=l.exports},"39b3":function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{}},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))},"4c36":function(t,s,a){"use strict";(function(t){var i=a("3357");s["a"]={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(8).addClass("item_2");var s=this;s=this;sessionStorage.getItem("zhuyi3")&&(s.seconds=0),this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{Nav:i["a"]},methods:{go:function(s){var a=t(s.target).closest("a").attr("url");if(!sessionStorage.getItem("zhuyi3"))return this.layerMsg("至少练习一次!"),!1;0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},"6d31":function(t,s,a){"use strict";var i=a("1fd3"),n=a.n(i);n.a},cf36:function(t,s,a){t.exports=a.p+"img/zhuyili3.477f2b14.png"},d2c9:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("Nav"),t._m(0),a("div",{staticClass:"test_detail test_1"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),a("div",{staticClass:"btngroup test_btngroup"},[a("router-link",{staticClass:"btn btn_jx",attrs:{to:"/learningAbility/learningPotential/93?type=test"}},[t._v("练习")]),a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/learningAbility/learningPotential/93"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])],1)])])],1)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_step clearfix"},[a("a",{staticClass:"button no",attrs:{href:"javascript:;"}},[t._v("Part A")]),a("a",{staticClass:"button no",attrs:{href:"javascript:;"}},[t._v("Part B")]),a("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part C")]),a("a",{staticClass:"button no",attrs:{href:"javascript:;"}},[t._v("Part D")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"txt_desc"},[i("p",[t._v("\n              注意稳定性——视觉追踪测评\n              本测评是一个视力追踪测评。要求您用眼睛从左侧开始追踪一条曲线，并将该线起始时的序号，标记在右侧曲线结束的方格内。如下图: "),i("br"),i("img",{staticClass:"imgs",staticStyle:{display:"block",margin:"0 auto"},attrs:{src:a("cf36"),alt:""}})]),i("p",[t._v("\n              请注意：\n              1、必须用眼睛追踪，不用手指或笔尖辅助追踪，否则会影响测评结果；\n              2、图中的曲线一般都比较圆滑；\n              3、每条曲线可能有上有下，但无中途停断的现象，都是起于左侧而结束于右侧；\n              4、请先找到A图各线，然后再找B图各线。\n          ")]),i("p",[t._v("\n              在正式做之前，先进行练习，然后点击开始，进行正式测评。\n          ")])])}],e=a("4c36"),c=e["a"],r=(a("6d31"),a("2877")),l=Object(r["a"])(c,i,n,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-c8719148.66d968cf.js.map