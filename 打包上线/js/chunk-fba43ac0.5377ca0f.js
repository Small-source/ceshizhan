(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fba43ac0"],{"036c":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pc-page"},[i("div",{staticClass:"test_main test_main_2"},[i("xgtxNav"),i("div",{staticClass:"d-relative test_detail test_2"},[t._l(t.questions,function(s,e){return e+1==t.curIndex?i("div",{staticClass:"radio_box ques-item",attrs:{paper:s.paper,cid:s.id}},[i("h4",{staticClass:"title"},[t._v(t._s(s.detail))]),i("div",{staticClass:"formbox clearfix"},[s.question_options?i("div",{staticClass:"q-answer-ani2"},t._l(s.question_options,function(s){return i("div",{staticClass:"answer-item",attrs:{order:s.opt_order}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),1==s.opt_order?i("span",[t._v("A ")]):t._e(),2==s.opt_order?i("span",[t._v("B ")]):t._e(),t._v(t._s(s.opt_txt)+"\n              ")])])}),0):t._e(),s.question_options?t._e():i("div",{staticClass:"q-answer-ani2"},[i("div",{staticClass:"answer-item lie-item",attrs:{order:0}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                A 是\n              ")])]),i("div",{staticClass:"answer-item lie-item",attrs:{order:1}},[i("div",{staticClass:"group"},[i("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){t.answerClick(s)}}},[i("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                B 否\n              ")])])])]),i("div",{staticClass:"page"},[i("em",{staticClass:"col_2"},[t._v(t._s(t.curIndex)+" ")]),t._v("/"+t._s(t.total)+"\n        ")])]):t._e()}),i("tip")],2)],1)])},a=[],n=i("1491"),o=n["a"],r=(i("a798"),i("2877")),u=Object(r["a"])(o,e,a,!1,null,null,null);u.options.__file="quesTwo.vue";s["default"]=u.exports},1491:function(t,s,i){"use strict";(function(t){i("7514"),i("c5f6"),i("55dd");var e=i("e20d"),a=i("151e");s["a"]={data:function(){return{total:"",curIndex:"1",questions:[],score:"1",answers:[],bar:"",time:"",startTime:"",endTime:""}},components:{xgtxNav:e["a"],tip:a["a"]},mounted:function(){this.quesList(),"3"==sessionStorage.tuance?t(".test_menu .item").eq(0).addClass("item_2"):t(".test_menu .item").eq(1).addClass("item_2")},updated:function(){},methods:{randomSort:function(t,s){return Math.random()>.5?-1:1},quesList:function(){this.$ajax.post("/api/test/mbti/list_mbti2",{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.total=s.result.length,this.questions=s.result,this.quesLieList()):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误")}.bind(this))},quesLieList:function(){var s=this;this.$ajax.post("/api/test/polygraph/list",{paper:2},{emulateJSON:!0}).then(function(i){console.log(i.data);var e=i.data;0==e.code?(this.total=this.total+e.result.length,t.each(e.result,function(t,i){s.questions.push(i)}),this.questions.sort(this.randomSort),this.bar=Number(this.curIndex-1)/Number(this.total)*100):this.layerMsg(e.msg)}.bind(this),function(t){this.layerMsg("网络错误，请重新提交")}.bind(this))},answerClick:function(s){var i=this;t(s.target).closest(".ques-item").find(".layui-unselect").removeClass("layui-form-radioed"),t(s.target).closest(".ques-item").find(".layui-icon").removeClass("layui-anim-scaleSpring"),t(s.target).closest(".ques-item").find(".layui-icon").text(""),t(s.target).closest(".layui-unselect").addClass("layui-form-radioed"),t(s.target).closest(".layui-unselect").find(".layui-icon").addClass("layui-anim-scaleSpring"),t(s.target).closest(".layui-unselect").find(".layui-icon").text("");var e=t(s.target).closest(".answer-item").attr("order"),a=t(s.target).closest(".ques-item").attr("paper"),n=t(s.target).closest(".ques-item").attr("cid");if(this.answers.length>0&&n==this.answers[this.answers.length-1].question_id)return this.curIndex>=this.total&&(this.endTime=(new Date).getTime(),this.time=Number(this.endTime)-Number(this.startTime),this.submit(),!1);t(s.target).closest(".answer-item").hasClass("lie-item")?this.submitLie(n,e):this.answers.push({question_id:n,paper:a,answer:e}),1==this.curIndex&&(this.startTime=(new Date).getTime()),this.curIndex<this.total?(console.log("测试进行中"),this.bar=Number(this.curIndex-1)/Number(this.total)*100,setTimeout(function(){i.curIndex++},300)):(console.log("结束测试"),this.endTime=(new Date).getTime(),this.time=Number(this.endTime)-Number(this.startTime),this.submit())},submit:function(){this.$ajax.post("/api/result/mbti/mbti2/compute",{time:this.time,answers:JSON.stringify(this.answers)},{timeout:3e3,headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.saveNode(3,1),this.$router.push("/shengyaceping/xgtx/success/2")):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误，请重新提交")}.bind(this))},submitLie:function(t,s){this.$ajax.post("/api/result/polygraph/compute",{question_id:t,answer:s},{headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){var s=t.data;0==s.code||this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误，请重新提交")}.bind(this))}}}}).call(this,i("1157"))},"151e":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return 1==t.tip?i("div",{staticClass:"box",on:{click:t.tipHide}},[i("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"btngroup"},[i("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},o=n,r=i("2877"),u=Object(r["a"])(o,e,a,!1,null,null,null);u.options.__file="tip.vue";s["a"]=u.exports},23401:function(t,s,i){},"2f21":function(t,s,i){"use strict";var e=i("79e5");t.exports=function(t,s){return!!t&&e(function(){s?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,s,i){"use strict";var e=i("5ca1"),a=i("d8e8"),n=i("4bf8"),o=i("79e5"),r=[].sort,u=[1,2,3];e(e.P+e.F*(o(function(){u.sort(void 0)})||!o(function(){u.sort(null)})||!i("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(n(this)):r.call(n(this),a(t))}})},a798:function(t,s,i){"use strict";var e=i("23401"),a=i.n(e);a.a},be24:function(t,s,i){"use strict";(function(t){s["a"]={data:function(){return{tuance:!0,num:"02",tit:"人格特性第二步",ele:"The second step"}},updated:function(){},methods:{},created:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1,this.num="01",this.tit="人格特性",this.ele="First step")},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,i("1157"))},e20d:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"test_menu clearfix"},[t.tuance?i("a",{staticClass:"item",attrs:{href:"#"}},[i("em",{staticClass:"num"},[t._v("01")]),i("h6",{staticClass:"tit"},[t._v("人格特性第一步")]),i("p",{staticClass:"font"},[t._v("First step")])]):t._e(),i("a",{staticClass:"item",attrs:{href:"#"}},[i("em",{staticClass:"num"},[t._v(t._s(t.num))]),i("h6",{staticClass:"tit"},[t._v(t._s(t.tit))]),i("p",{staticClass:"font"},[t._v(t._s(t.ele))])])])},a=[],n=i("be24"),o=n["a"],r=i("2877"),u=Object(r["a"])(o,e,a,!1,null,null,null);u.options.__file="xgtx.vue";s["a"]=u.exports}}]);
//# sourceMappingURL=chunk-fba43ac0.5377ca0f.js.map