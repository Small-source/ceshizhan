(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13dc3c28"],{"2a02":function(t,e,s){t.exports=s.p+"img/test_12.e1703751.png"},"56ec":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_menu clearfix"},[s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("01")]),s("h6",{staticClass:"tit"},[t._v("心理健康问卷")]),s("p",{staticClass:"font"},[t._v("Mental health")])])])}],i=s("2877"),c={},l=Object(i["a"])(c,a,n,!1,null,null,null);e["a"]=l.exports},bdea:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pc-page"},[s("div",{staticClass:"test_main test_main_2"},[s("Nav"),s("div",{staticClass:"test_test clearfix"},[s("div",{staticClass:"test_test_l"},[t._m(0),t._m(1),s("div",{staticClass:"btngroup test_btngroup"},[s("router-link",{staticClass:"btn btn_start_4",attrs:{to:"/learningAbility/mentalHealth/guide/1"}},[t._v("开始测评")])],1)]),t._m(2)])],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titbox center"},[s("h4",{staticClass:"cn_tit"},[t._v("心理健康测试")]),s("h6",{staticClass:"en_tit"},[t._v("Mental health test")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"desc"},[s("p",[t._v("心理健康的基本含义是指心理的各个方面及活动过程处于一种良好或正常的状态。既能过平平淡淡的日子，也能经受各种事件的发生。心理健康突出在社交、生产、生活上能与其他人保持较好的沟通或配合。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test_test_r"},[a("img",{staticClass:"img",attrs:{src:s("2a02"),alt:""}})])}],i=s("56ec"),c={data:function(){return{}},components:{Nav:i["a"]},created:function(){this.goCreate()},methods:{goCreate:function(){this.serial_no;this.$ajax.post("/api/test/create",{module:4},{headers:{token:window.sessionStorage.getItem("token")}}).then(function(t){if(0==t.data.code){var e=t.data.result.testId,s=t.data.result.node;if(window.sessionStorage.setItem("testId",e),0==s)return;this.$router.push("/learningAbility/mentalHealth/guide/"+s)}else t.data.code}.bind(this)).catch(function(t){console.log(t)})}}},l=c,r=s("2877"),o=Object(r["a"])(l,a,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-13dc3c28.55170dd3.js.map