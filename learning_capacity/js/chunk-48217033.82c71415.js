(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48217033"],{"03ca":function(t,s,a){"use strict";(function(t){var i=a("3357");s["a"]={data:function(){return{seconds:10}},mounted:function(){t(".test_menu .item").eq(8).addClass("item_2");var s=this;sessionStorage.getItem("zhuyi2")&&(s.seconds=0),this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{Nav:i["a"]},methods:{go:function(s){var a=t(s.target).closest("a").attr("url");if(!sessionStorage.getItem("zhuyi1"))return this.layerMsg("至少练习一次!"),!1;0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},"28ea":function(t,s,a){},3357:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("注意力")]),a("p",{staticClass:"font"},[t._v("Attention")])])])}],e=a("39b3"),c=e["a"],r=a("2877"),l=Object(r["a"])(c,i,n,!1,null,null,null);s["a"]=l.exports},"39b3":function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{}},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))},4280:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("Nav"),t._m(0),a("div",{staticClass:"test_detail test_1"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),a("div",{staticClass:"btngroup test_btngroup"},[a("router-link",{staticClass:"btn btn_jx",attrs:{to:"/learningAbility/learningPotential/92?type=test"}},[t._v("练习")]),a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/learningAbility/learningPotential/92"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])],1)])])],1)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_step clearfix"},[a("a",{staticClass:"button no",attrs:{href:"javascript:;"}},[t._v("Part A")]),a("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part B")]),a("a",{staticClass:"button no",attrs:{href:"javascript:;"}},[t._v("Part C")]),a("a",{staticClass:"button no",attrs:{href:"javascript:;"}},[t._v("Part D")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt_desc"},[a("p",[t._v("\n              请仔细阅读指导语\n              注意力广度测评——选4圈测评\n              本测评要求从画有不同树木圆圈的小方格内找出4个圆圈小方格，找到后请在该方格上画“✔”\n          ")]),a("p",[t._v("\n              请注意：\n              1、要小方格内有4个小圆圈。不管圆圈的排列方式如何，都属于要找到的小方格。\n              2、从测评的第一行开始自左至右一次寻找，查完一行再查下一行，直至全部查完。\n              3、如果有点击错误的地方，继续往下找。\n          ")]),a("p",[t._v("\n              在正式做之前，先进行练习，然后点击开始，进行正式测评。\n          ")])])}],e=a("03ca"),c=e["a"],r=(a("a50c"),a("2877")),l=Object(r["a"])(c,i,n,!1,null,null,null);s["default"]=l.exports},a50c:function(t,s,a){"use strict";var i=a("28ea"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-48217033.82c71415.js.map