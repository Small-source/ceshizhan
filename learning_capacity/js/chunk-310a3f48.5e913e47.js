(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-310a3f48"],{"24f6":function(t,s,a){"use strict";(function(t){var i=a("3357");a("fda2"),a("451f"),s["a"]={data:function(){return{seconds:10,modal:0,playerOptions:{muted:!0,language:"zh-CN",sources:[{type:"video/mp4",src:"/static/video1.mp4"}]}}},mounted:function(){t(".test_menu .item").eq(2).addClass("item_2"),(sessionStorage.kongPlayTest||sessionStorage.getItem("kongTest")>1)&&(this.seconds=0);var s=this;this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{Nav:i["a"]},methods:{closeModal:function(){this.modal=0},openModal:function(){this.modal=1},go:function(s){if(console.log(sessionStorage.getItem("kongTest")),!sessionStorage.getItem("kongTest")||sessionStorage.getItem("kongTest")<2)return this.layerMsg("至少练习1次!"),!1;var a=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(a):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,a("1157"))},3357:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])]),a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("注意力")]),a("p",{staticClass:"font"},[t._v("Attention")])])])}],n=a("39b3"),c=n["a"],l=a("2877"),r=Object(l["a"])(c,i,e,!1,null,null,null);s["a"]=r.exports},"39b3":function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{}},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))},4310:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("Nav"),t._m(0),a("div",{staticClass:"test_detail test_1"},[a("div",{staticClass:"radio_box"},[a("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),a("div",{staticClass:"btngroup test_btngroup"},[a("router-link",{staticClass:"btn btn_jx",attrs:{to:"/learningAbility/learningPotential/play/3"}},[t._v("演示")]),a("router-link",{staticClass:"btn btn_jx",attrs:{to:"/learningAbility/learningPotential/3?&type=test"}},[t._v("练习")]),a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/learningAbility/learningPotential/3?seq=1"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?a("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])],1)])])],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_step clearfix"},[a("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part A")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt_desc"},[a("p",[t._v("\n            本测验中将会出现两个运动点和一个目标点，通过鼠标点击上方的方向键分别控制两个运动点。每点击一次，运动点就依据当前运动方向偏10度，再继续运动。你需要在20s内使两个运动点离目标点更近、更准。\n          ")]),a("p",[t._v("注意：每个试验持续时间为20s，即在20s后运动方点将停止运动保持终点状态。")]),a("p",[t._v("在正式测试之前，需认真观看演示视频，然后练习测试不少于1次，练习结束后开始正式测试，正式测试共进行6次。")])])}],n=a("24f6"),c=n["a"],l=(a("bbe6"),a("2877")),r=Object(l["a"])(c,i,e,!1,null,null,null);s["default"]=r.exports},"451f":function(t,s,a){},bbe6:function(t,s,a){"use strict";var i=a("f7ac"),e=a.n(i);e.a},f7ac:function(t,s,a){},fda2:function(t,s,a){}}]);
//# sourceMappingURL=chunk-310a3f48.5e913e47.js.map