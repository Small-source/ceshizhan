(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b1a926e"],{"0b39":function(t,s,i){"use strict";(function(t){i("c5f6"),i("7514");var e=i("e39b"),a=i("151e");s["a"]={data:function(){return{total:"",curIndex:"1",questions:"",score:"1",answers:[],bar:"",time:"",startTime:"",endTime:""}},components:{xqqxNav:e["a"],tip:a["a"]},mounted:function(){this.quesList(),t(".test_menu .item").eq(1).addClass("item_3")},updated:function(){},methods:{quesList:function(){this.$http.post("/api/test/hobby/attitude/list",{emulateJSON:!0}).then(function(t){console.log(t.body);var s=t.body;0==s.code?(this.total=s.result.length,this.questions=s.result):this.layerMsg(s.msg)},function(t){console.log("接口响应失败，请联系网站管理人员")})},answerClick:function(s){var i=this;t(s.target).closest(".ques-item").find(".layui-unselect").removeClass("layui-form-radioed"),t(s.target).closest(".ques-item").find(".layui-icon").removeClass("layui-anim-scaleSpring"),t(s.target).closest(".ques-item").find(".layui-icon").text(""),t(s.target).closest(".layui-unselect").addClass("layui-form-radioed"),t(s.target).closest(".layui-unselect").find(".layui-icon").addClass("layui-anim-scaleSpring"),t(s.target).closest(".layui-unselect").find(".layui-icon").text("");var e=t(s.target).closest(".answer-item").attr("score"),a=t(s.target).closest(".ques-item").attr("paper"),n=t(s.target).closest(".ques-item").attr("cid");if(this.answers.length>0&&n==this.answers[this.answers.length-1].question_id)return console.log("重复点击了"),!1;this.answers.push({question_id:n,paper:a,answer:e}),1==this.curIndex&&(this.startTime=(new Date).getTime()),this.curIndex<this.total?(console.log("测试进行中"),this.bar=Number(this.curIndex-1)/Number(this.total)*100,setTimeout(function(){i.curIndex++},300)):(console.log("结束测试"),this.bar=100,this.endTime=(new Date).getTime(),this.time=Number(this.endTime)-Number(this.startTime),this.submit())},submit:function(){this.$http.post("/api/result/hobby/attitude/compute",{time:this.time,answers:JSON.stringify(this.answers)},{headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){console.log(t.body);var s=t.body;0==s.code?(this.saveNode(4,1),this.$router.push("/shengyaceping/xqqx/success/2")):this.layerMsg(s.msg)},function(t){console.log("接口响应失败，请联系网站管理人员")})}}}}).call(this,i("1157"))},"151e":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return 1==t.tip?i("div",{staticClass:"box",on:{click:t.tipHide}},[i("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"btngroup"},[i("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},c=n,l=i("2877"),r=Object(l["a"])(c,e,a,!1,null,null,null);s["a"]=r.exports},bda1:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pc-page"},[i("div",{staticClass:"test_main test_main_3"},[i("xqqxNav"),i("div",{staticClass:"d-relative test_detail test_3"},[t._l(t.questions,function(s,e){return e+1==t.curIndex?i("div",{staticClass:"radio_box ques-item",attrs:{paper:s.paper,cid:s.id}},[i("h4",{staticClass:"title"},[t._v(t._s(s.detail))]),i("div",{staticClass:"formbox clearfix"},[i("div",{staticClass:"q-answer-ani2"},[i("div",{staticClass:"answer-item",attrs:{score:"1"}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                完全不符合\n              ")])]),i("div",{staticClass:"answer-item",attrs:{score:"2"}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                不太符合\n              ")])]),i("div",{staticClass:"answer-item",attrs:{score:"3"}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                一般\n              ")])]),i("div",{staticClass:"answer-item",attrs:{score:"4"}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                比较符合\n              ")])]),i("div",{staticClass:"answer-item",attrs:{score:"5"}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                完全符合\n              ")])])]),i("div",{staticClass:"page"},[i("em",{staticClass:"col_3"},[t._v(t._s(t.curIndex)+" ")]),t._v("/"+t._s(t.total)+"\n          ")])])]):t._e()}),i("tip")],2)],1)])},a=[],n=i("0b39"),c=n["a"],l=i("2877"),r=Object(l["a"])(c,e,a,!1,null,null,null);s["default"]=r.exports},e39b:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"test_menu clearfix"},[t._m(0),t.tuance?i("a",{staticClass:"item",attrs:{href:"javascript:;"}},[i("em",{staticClass:"num"},[t._v("02")]),i("h6",{staticClass:"tit"},[t._v("学习态度问卷")]),i("p",{staticClass:"font"},[t._v("learning attitude")])]):t._e()])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("a",{staticClass:"item",attrs:{href:"javascript:;"}},[i("em",{staticClass:"num"},[t._v("01")]),i("h6",{staticClass:"tit"},[t._v("兴趣倾向问卷")]),i("p",{staticClass:"font"},[t._v("Interest tendency")])])}],n={data:function(){return{testType:"",tuance:!0}},created:function(){this.testType=sessionStorage.getItem("testType")},mounted:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)}},c=n,l=i("2877"),r=Object(l["a"])(c,e,a,!1,null,null,null);s["a"]=r.exports}}]);
//# sourceMappingURL=chunk-6b1a926e.ea94b5f2.js.map