(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7809e978"],{"13e7":function(t,e,s){"use strict";var i=s("47b0"),a=s.n(i);a.a},"47b0":function(t,e,s){},"6d20":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_menu clearfix"},[s("a",{staticClass:"item",attrs:{href:"#"}},[s("em",{staticClass:"num"},[t._v("01")]),s("h6",{staticClass:"tit"},[t._v("学习策略问卷")]),s("p",{staticClass:"font"},[t._v("learning strategy")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("em",{staticClass:"num"},[t._v("02")]),s("h6",{staticClass:"tit"},[t._v("学习风格问卷")]),s("p",{staticClass:"font"},[t._v("learning style")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("em",{staticClass:"num"},[t._v("03")]),s("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),s("p",{staticClass:"font"},[t._v("hidden graphics")])])])}],n=s("f6cc"),c=n["a"],r=s("2877"),l=Object(r["a"])(c,i,a,!1,null,null,null);e["a"]=l.exports},"7e40":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pc-page"},[s("div",{staticClass:"test_main test_main_2"},[s("Nav"),s("div",{staticClass:"test_test clearfix"},[s("div",{staticClass:"test_test_l"},[t._m(0),t._m(1),s("div",{staticClass:"btngroup test_btngroup"},[s("router-link",{staticClass:"btn btn_start",attrs:{to:t.url}},[t._v("开始测评")])],1)]),t._m(2)]),t._m(3)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titbox center"},[s("h4",{staticClass:"cn_tit"},[t._v("学习效力")]),s("h6",{staticClass:"en_tit"},[t._v("learning effectiveness")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"desc"},[s("p",[t._v("学习效力指的是如何有效地学习。学习效力主要由方法效力和风格效力组成。其中，方法效力指的是学习策略，风格效力指的是学习风格。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"test_test_r"},[i("img",{staticClass:"img",attrs:{src:s("ab66"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_foot test_copy"},[t._v("\n      Personality is the individual’s unique behavior or inherent behavioral tendencies formed on the basis"),s("br"),t._v("\n      of certain genetic qualities in the process of adapting to the environment.\n    ")])}],n=s("6d20"),c={data:function(){return{url:"/learningAbility/LearningEffectiveness/guide/1"}},components:{Nav:n["a"]},created:function(){this.goCreate()},methods:{goCreate:function(){this.serial_no;this.$ajax.post(this.G_uri+"/api/test/create",{module:3},{headers:{token:window.sessionStorage.getItem("token")}}).then(function(t){if(0==t.data.code){var e=t.data.result.testId,s=t.data.result.node;if(window.sessionStorage.setItem("testId",e),0==s)return;this.$router.push("/learningAbility/LearningEffectiveness/guide/"+s)}else t.data.code}.bind(this)).catch(function(t){console.log(t)})}}},r=c,l=(s("13e7"),s("2877")),o=Object(l["a"])(r,i,a,!1,null,"37b48f12",null);e["default"]=o.exports},ab66:function(t,e,s){t.exports=s.p+"img/icon_xuexixiaoli.d2f22772.png"},f6cc:function(t,e,s){"use strict";(function(t){e["a"]={data:function(){return{}},updated:function(){},methods:{},created:function(){},mounted:function(){t(".test_menu .item").css({width:"8.3%"})}}}).call(this,s("1157"))}}]);
//# sourceMappingURL=chunk-7809e978.3a37d5f9.js.map