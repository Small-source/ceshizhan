(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23d06a86"],{"151e":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 1==t.tip?e("div",{staticClass:"box",on:{click:t.tipHide}},[e("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},c=n,r=e("2877"),l=Object(r["a"])(c,i,a,!1,null,null,null);s["a"]=l.exports},1645:function(t,s,e){"use strict";(function(t){e("c5f6"),e("7514");var i=e("3357"),a=e("151e");s["a"]={data:function(){return{clearB:!0,total:"",curIndex:0,questions:"",score:"1",answers:[],bar:"",time:"",startTime:"",endTime:"",tip:1,type:this.$route.query.type,leftTime:480,timeTip:"8:00",tempTime:""}},components:{Nav:i["a"],tip:a["a"]},mounted:function(){var s;this.startTime=(new Date).getTime(),layui.use(["form","layedit","laydate"],function(){s=layui.form,s.render(),console.log("是否渲染")}),"test"==this.type?(this.total=1,this.questions=[{created_at:1511479762661,id:"04ad31ba08f54fe681ecd875cc4d2274",img:"./ceping/biao/0.png",name:"表象试题19",question_options:[{id:"12ea52d4b81d4136a0d0b0cd6619e3e0",opt_img:"./ceping/biao/0-A.png",opt_order:1},{id:"12ea52d4b81d4136a0d0b0cd6619e3e0",opt_img:"./ceping/biao/0-B.png",opt_order:1},{id:"12ea52d4b81d4136a0d0b0cd6619e3e0",opt_img:"./ceping/biao/0-C.png",opt_order:1},{id:"12ea52d4b81d4136a0d0b0cd6619e3e0",opt_img:"./ceping/biao/0-D.png",opt_order:1}]}]):this.quesList(),t(".test_menu .item").eq(3).addClass("item_2")},updated:function(){},methods:{checkClick:function(s){var e=t(s.target).closest("li");e.hasClass("active")?(e.removeClass("active"),e.find(".layui-unselect").removeClass("layui-form-checked")):(e.addClass("active"),e.find(".layui-unselect").addClass("layui-form-checked"))},tabSwitch:function(s){this.subject=t(s.target).attr("cid")},clickStart:function(){var t=this;this.tip=0,this.tempTime=(new Date).getTime(),"test"!=t.type&&(setInterval(function(){t.leftTime>0&&(t.leftTime--,t.secondToMin(t.leftTime))},1e3),setTimeout(function(){t.clearB&&t.submit()},48e4))},secondToMin:function(t){var s,e;t>0&&(e=t%60,s=parseInt(t/60),e<10&&(e="0"+e),this.timeTip=s+":"+e)},quesList:function(){this.$ajax.post(this.G_uri+"/test/cognition/present/list",{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.total=s.result.length,this.questions=s.result,console.log(this.questions)):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误")}.bind(this))},answerClick:function(s){var e=t(s.target).closest(".ques-item").find(".answer-item.active").length;if(2!=e)return this.layerMsg("请选择2个答案！"),!1;var i=[],a=t(s.target).closest("ul").find('input[name="biao"]:checked').val(),n=t(s.target).closest(".ques-item").find(".answer-item.active");t(n).each(function(){i.push(t(this).find(".l-answer").text())}),1==a?a="A":2==a?a="B":3==a?a="C":4==a&&(a="D");var c=t(s.target).closest(".ques-item").attr("cid"),r=Number((new Date).getTime())-Number(this.tempTime);this.answers.push({question_id:c,answer:i,time:r}),console.log(this.answers),this.tempTime=(new Date).getTime(),this.curIndex+1<this.total?(console.log("测试进行中"),this.curIndex++,this.bar=Number(this.curIndex)/Number(this.total)*100,setTimeout(function(){t(".answer-item").removeClass("active")},100)):(console.log("结束测试"),this.bar=Number(this.curIndex+1)/Number(this.total)*100,"test"==this.type?(this.clearB=!1,this.$router.push("/learningAbility/learningPotential/success/4?type=test")):this.submit())},submit:function(){console.log(this.answers),this.endTime=(new Date).getTime(),this.time=Number(this.endTime)-Number(this.startTime),this.$ajax.post(this.G_uri+"/result/cognition/present/compute",{time:this.time,answers:JSON.stringify(this.answers),test_id:window.sessionStorage.getItem("testId")},{timeout:3e3,headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.saveNode(1,5),this.clearB=!1,this.$router.push("/learningAbility/learningPotential/success/4")):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误,请重新提交")}.bind(this))}}}}).call(this,e("1157"))},3357:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test_menu clearfix"},[e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("01")]),e("h6",{staticClass:"tit"},[t._v("信息加工能力")]),e("p",{staticClass:"font"},[t._v("Information Processing")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("02")]),e("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),e("p",{staticClass:"font"},[t._v("Working Memory")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("03")]),e("h6",{staticClass:"tit"},[t._v("空间能力")]),e("p",{staticClass:"font"},[t._v("Spatial")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("04")]),e("h6",{staticClass:"tit"},[t._v("表象能力")]),e("p",{staticClass:"font"},[t._v("Presentational")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("05")]),e("h6",{staticClass:"tit"},[t._v("思维转换能力")]),e("p",{staticClass:"font"},[t._v("Thinking Translating")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("06")]),e("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),e("p",{staticClass:"font"},[t._v("Logical Reasoning")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("07")]),e("h6",{staticClass:"tit"},[t._v("语言能力")]),e("p",{staticClass:"font"},[t._v("Linguisitic")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("08")]),e("h6",{staticClass:"tit"},[t._v("数学能力")]),e("p",{staticClass:"font"},[t._v("Mathematics")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("09")]),e("h6",{staticClass:"tit"},[t._v("注意力")]),e("p",{staticClass:"font"},[t._v("Attention")])])])}],n=e("39b3"),c=n["a"],r=e("2877"),l=Object(r["a"])(c,i,a,!1,null,null,null);s["a"]=l.exports},"39b3":function(t,s,e){"use strict";(function(t){s["a"]={data:function(){return{}},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,e("1157"))},"997a":function(t,s,e){},b040:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pc-page"},[e("div",{staticClass:"test_main test_main_2"},[e("Nav"),e("div",{staticClass:"ques-wrapper test_detail test_detail_ing"},["test"!=t.type&&0==t.tip?e("div",{staticClass:"timebox fr"},[t._v("\n        剩余时间：\n        "),e("div",{staticClass:"time"},[t._v("\n          "+t._s(t.timeTip)+"\n        ")])]):t._e(),e("div",{staticClass:"ques-container box d-relative",staticStyle:{overflow:"visible"}},[e("div",{staticClass:"ques-answer ques-biao-answer"},t._l(t.questions,function(s,i){return e("div",{class:i==t.curIndex?"ques-item ques-item-hide active":"ques-item ques-item-hide",attrs:{cid:s.id}},[e("div",{staticClass:"q-title biao-title"}),e("div",{staticClass:"q-title q-biao-title"},[e("img",{attrs:{src:s.img,alt:""}}),e("p",[t._v("（样图）")])]),e("div",{staticClass:"q-answer q-biao-answer"},[e("ul",{staticClass:"d-relative"},t._l(s.question_options,function(s,i){return e("li",{staticClass:"answer-item",attrs:{answer:s.opt_order},on:{click:function(s){return t.checkClick(s)}}},[e("img",{attrs:{src:s.opt_img,alt:""}}),e("p"),t._m(0,!0),0==i?e("label",{staticClass:"l-answer"},[t._v("A")]):t._e(),1==i?e("label",{staticClass:"l-answer"},[t._v("B")]):t._e(),2==i?e("label",{staticClass:"l-answer"},[t._v("C")]):t._e(),3==i?e("label",{staticClass:"l-answer"},[t._v("D")]):t._e(),e("p")])}),0)]),e("div",{staticClass:"bottom next clearfix"},[0==t.tip?e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"},on:{click:function(s){return t.answerClick(s)}}},[t._v("确定")]):t._e()])])}),0),1==t.tip?e("div",{staticClass:"box click-tip",on:{click:t.clickStart}},[e("em",{staticClass:"icon part_start"}),t._m(1)]):t._e()]),0==t.tip?e("div",{staticClass:"page"},[e("em",{staticClass:"col_2"},[t._v(t._s(t.curIndex+1)+" ")]),t._v("/"+t._s(t.total)+"\n      ")]):t._e()])],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"layui-unselect layui-form-checkbox",attrs:{"lay-skin":"primary"}},[e("i",{staticClass:"layui-icon"},[t._v("")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n=e("1645"),c=n["a"],r=(e("e560"),e("2877")),l=Object(r["a"])(c,i,a,!1,null,null,null);s["default"]=l.exports},e560:function(t,s,e){"use strict";var i=e("997a"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-23d06a86.b73a1b56.js.map