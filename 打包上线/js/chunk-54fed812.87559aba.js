(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54fed812"],{"40c0":function(t,s,e){"use strict";(function(t){var n=e("a84c");e("fda2"),e("451f"),s["a"]={data:function(){return{seconds:10,modal:0,playerOptions:{muted:!0,language:"zh-CN",sources:[{type:"video/mp4",src:"/static/video1.mp4"}]}}},mounted:function(){t(".test_menu .item").eq(2).addClass("item_2"),(sessionStorage.kongPlayTest||sessionStorage.getItem("kongTest")>1)&&(this.seconds=0);var s=this;this.t=setInterval(function(){s.seconds>0?s.seconds--:clearInterval(s.t)},1e3)},updated:function(){},components:{rzqnNav:n["a"]},methods:{closeModal:function(){this.modal=0},openModal:function(){this.modal=1},go:function(s){if(console.log(sessionStorage.getItem("kongTest")),!sessionStorage.getItem("kongTest")||sessionStorage.getItem("kongTest")<2)return this.layerMsg("至少练习1次!"),!1;var e=t(s.target).closest("a").attr("url");0==this.seconds?this.$router.push(e):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,e("1157"))},a7e7:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pc-page"},[e("div",{staticClass:"test_main test_main_2"},[e("rzqnNav"),t._m(0),e("div",{staticClass:"test_detail test_1"},[e("div",{staticClass:"radio_box"},[e("h4",{staticClass:"title"},[t._v("请仔细阅读指导语")]),t._m(1),e("div",{staticClass:"btngroup test_btngroup"},[e("router-link",{staticClass:"btn btn_jx",attrs:{to:"/shengyaceping/rzqn/play/3"}},[t._v("演示")]),e("router-link",{staticClass:"btn btn_jx",attrs:{to:"/shengyaceping/rzqn/3?&type=test"}},[t._v("练习")]),e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;",url:"/shengyaceping/rzqn/3?seq=1"},on:{click:function(s){return t.go(s)}}},[t._v("开始"),t.seconds?e("span",[t._v("("+t._s(t.seconds)+"s)")]):t._e()])],1)])])],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test_step clearfix"},[e("a",{staticClass:"button on",attrs:{href:"javascript:;"}},[t._v("Part A")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"txt_desc"},[e("p",[t._v("\n            本测验中将会出现两个运动点和一个目标点，通过鼠标点击上方的方向键分别控制两个运动点。每点击一次，运动点就依据当前运动方向偏10度，再继续运动。你需要在20s内使两个运动点离目标点更近、更准。\n          ")]),e("p",[t._v("注意：每个试验持续时间为20s，即在20s后运动方点将停止运动保持终点状态。")]),e("p",[t._v("在正式测试之前，需认真观看演示视频，然后练习测试不少于1次，练习结束后开始正式测试，正式测试共进行6次。")])])}],i=e("40c0"),o=i["a"],c=(e("ab43"),e("2877")),r=Object(c["a"])(o,n,a,!1,null,null,null);s["default"]=r.exports},ab43:function(t,s,e){"use strict";var n=e("b829"),a=e.n(n);a.a},b829:function(t,s,e){}}]);
//# sourceMappingURL=chunk-54fed812.87559aba.js.map