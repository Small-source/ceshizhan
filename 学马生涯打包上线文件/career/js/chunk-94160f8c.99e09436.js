(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94160f8c"],{"151e":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return 1==t.tip?a("div",{staticClass:"box",on:{click:t.tipHide}},[a("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"btngroup"},[a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},c=n,r=a("2877"),l=Object(r["a"])(c,i,e,!1,null,null,null);s["a"]=l.exports},"569f":function(t,s,a){"use strict";(function(t){a("c5f6"),a("7514");var i=a("a84c"),e=a("151e");s["a"]={data:function(){return{total:"",curIndex:0,questions:"",score:"1",answers:[],bar:0,time:"",startTime:"",endTime:"",tip:1}},components:{rzqnNav:i["a"],tip:e["a"]},mounted:function(){this.quesList(),t(".test_menu .item").eq(10).addClass("item_2")},updated:function(){},methods:{clickStart:function(){this.tip=0},quesList:function(){this.$ajax.post("/api/test/cognition/interpersonal/list",{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.total=s.result.length,this.questions=s.result):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误，请重新提交")}.bind(this))},answerClick:function(s){var a=this;t(s.target).closest(".ques-item").find(".layui-unselect").removeClass("layui-form-radioed"),t(s.target).closest(".ques-item").find(".layui-icon").removeClass("layui-anim-scaleSpring"),t(s.target).closest(".ques-item").find(".layui-icon").text(""),t(s.target).closest(".layui-unselect").addClass("layui-form-radioed"),t(s.target).closest(".layui-unselect").find(".layui-icon").addClass("layui-anim-scaleSpring"),t(s.target).closest(".layui-unselect").find(".layui-icon").text("");var i=t(s.target).closest(".answer-item").attr("answer"),e=t(s.target).closest(".ques-item").attr("cid");if(this.answers.length>0&&e==this.answers[this.answers.length-1].question_id)return console.log("重复点击了"),!1;this.answers.push({question_id:e,answer:i}),0==this.curIndex&&(this.startTime=(new Date).getTime()),this.curIndex+1<this.total?(console.log("测试进行中"),this.bar=Number(this.curIndex)/Number(this.total)*100,setTimeout(function(){a.curIndex++},300)):(console.log("结束测试"),this.bar=Number(this.curIndex+1)/Number(this.total)*100,this.endTime=(new Date).getTime(),this.time=Number(this.endTime)-Number(this.startTime),this.submit())},submit:function(){this.$ajax.post("/api/result/cognition/interpersonal/compute",{time:this.time,answers:JSON.stringify(this.answers)},{timeout:3e3,headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.saveNode(2,121),this.$router.push("/shengyaceping/rzqn/success/11")):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误，请重新提交")}.bind(this))}}}}).call(this,a("1157"))},"804f":function(t,s,a){"use strict";var i=a("b381"),e=a.n(i);e.a},"8cc4":function(t,s,a){"use strict";var i=a("a4fc"),e=a.n(i);e.a},"9ead":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pc-page"},[a("div",{staticClass:"test_main test_main_2"},[a("rzqnNav"),a("div",{staticClass:"d-relative test_detail test_2"},[t._l(t.questions,function(s,i){return i==t.curIndex?a("div",{staticClass:"radio_box ques-item",staticStyle:{"margin-bottom":"60px"},attrs:{cid:s.id}},[a("h4",{staticClass:"title"},[t._v(t._s(s.detail))]),a("div",{staticClass:"formbox clearfix"},[a("div",{staticClass:"q-answer-ani2"},[a("div",{staticClass:"answer-item",attrs:{answer:"1"}},[a("div",{staticClass:"group"},[a("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[a("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                A 是\n              ")])]),a("div",{staticClass:"answer-item",attrs:{answer:"0"}},[a("div",{staticClass:"group"},[a("div",{staticClass:"layui-unselect layui-form-radio",on:{click:function(s){return t.answerClick(s)}}},[a("i",{staticClass:"layui-anim layui-icon"},[t._v("")])]),t._v("\n                B 否\n              ")])])]),a("div",{staticClass:"page"},[a("em",{staticClass:"col_2"},[t._v(t._s(t.curIndex+1)+" ")]),t._v("/"+t._s(t.total)+"\n          ")])])]):t._e()}),1==t.tip?a("div",{staticClass:"box",on:{click:t.clickStart}},[a("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()],2)],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"btngroup"},[a("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n=a("569f"),c=n["a"],r=(a("8cc4"),a("804f"),a("2877")),l=Object(r["a"])(c,i,e,!1,null,null,null);s["default"]=l.exports},a4fc:function(t,s,a){},a84c:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"test_menu clearfix"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t.tuance?a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("13")]),a("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),a("p",{staticClass:"font"},[t._v("Hidden Graphics")])]):t._e()])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("01")]),a("h6",{staticClass:"tit"},[t._v("信息加工能力")]),a("p",{staticClass:"font"},[t._v("Information Processing")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("02")]),a("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),a("p",{staticClass:"font"},[t._v("Working Memory")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("03")]),a("h6",{staticClass:"tit"},[t._v("空间能力")]),a("p",{staticClass:"font"},[t._v("Spatial")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("04")]),a("h6",{staticClass:"tit"},[t._v("表象能力")]),a("p",{staticClass:"font"},[t._v("Presentational")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("05")]),a("h6",{staticClass:"tit"},[t._v("思维转换能力")]),a("p",{staticClass:"font"},[t._v("Thinking Translating")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("06")]),a("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),a("p",{staticClass:"font"},[t._v("Logical Reasoning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("07")]),a("h6",{staticClass:"tit"},[t._v("动手操作能力")]),a("p",{staticClass:"font"},[t._v("Operation")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("08")]),a("h6",{staticClass:"tit"},[t._v("语言能力")]),a("p",{staticClass:"font"},[t._v("Linguisitic")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("09")]),a("h6",{staticClass:"tit"},[t._v("数学能力")]),a("p",{staticClass:"font"},[t._v("Mathematics")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("10")]),a("h6",{staticClass:"tit"},[t._v("组织管理能力")]),a("p",{staticClass:"font"},[t._v("Organizational\n      Management")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("11")]),a("h6",{staticClass:"tit"},[t._v("人际交往能力")]),a("p",{staticClass:"font"},[t._v("Interpersonal Interaction")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"item",attrs:{href:"javascript:;"}},[a("em",{staticClass:"num"},[t._v("12")]),a("h6",{staticClass:"tit"},[t._v("美术能力")]),a("p",{staticClass:"font"},[t._v("Arts Capacity")])])}],n=a("dca1"),c=n["a"],r=a("2877"),l=Object(r["a"])(c,i,e,!1,null,null,null);s["a"]=l.exports},b381:function(t,s,a){},dca1:function(t,s,a){"use strict";(function(t){s["a"]={data:function(){return{tuance:!0}},updated:function(){},methods:{},created:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,a("1157"))}}]);
//# sourceMappingURL=chunk-94160f8c.99e09436.js.map