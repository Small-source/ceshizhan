(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8b31330"],{"0ce3":function(t,s,e){},"151e":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 1==t.tip?e("div",{staticClass:"box",on:{click:t.tipHide}},[e("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},r=n,c=e("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null);s["a"]=u.exports},"176f":function(t,s,e){"use strict";(function(t){e("c5f6");var a=e("a84c"),i=e("151e");s["a"]={data:function(){return{tip:1,subject:1,questions:"",answers:[],bar:"",time:"",startTime:"",endTime:"",expandNumber:[],tempNumber:[],expandLength:3,memoryNumInit:[],memoryNumInitStr:"",memoryNumAnswer:[],memoryNum:[],curIndex:0,work_bit:"",work_correct:0,work_correct_rate:"",tempLength:"",click:0,isClick:!0,type:this.$route.query.type,answerCount:0,hideTimer:1e3}},components:{rzqnNav:a["a"],tip:i["a"]},mounted:function(){this.startTime=(new Date).getTime(),t(".test_menu .item").eq(1).addClass("item_2")},updated:function(){},methods:{tabSwitch:function(s){this.subject=t(s.target).attr("cid"),this.subject},quesPartA:function(){this.tip=0;var t=this;this.tempNumber=[],this.expandNumber=[],this.isClick=!1,setTimeout(function(){console.log(t.expandLength),t.expandLength>7&&(t.hideTimer=1e3+300*(t.expandLength-7)),console.log(t.hideTimer);for(var s=0;s<t.expandLength;s++){var e=(9*Math.random()).toFixed(0);10!=e&&t.expandNumber.push(e)}t.tempNumber=t.expandNumber,setTimeout(function(){t.expandNumber=[],t.isClick=!0},t.hideTimer)},1e3),this.click=1},enter:function(s){if(!this.isClick)return!1;var e=t(s.target).text();this.expandNumber.length<this.expandLength?this.expandNumber.push(e):this.layerMsg('请点击"确定"或"回退"按钮，确定答题')},keyRollback:function(t){if(!this.isClick)return!1;this.expandNumber.pop()},answerClick:function(t){if(!this.isClick)return!1;if(""==this.expandNumber)return this.layerMsg("请输入答案！"),!1;this.answerCount++,"test"==this.type&&3==this.answerCount&&this.$router.push("/shengyaceping/rzqn/success/21?type=test");var s={};s.right_answer=this.tempNumber.join(""),s.answer=this.expandNumber.join(""),this.answers.push(s),this.expandNumber.join("")==this.tempNumber.join("")?(console.log("答题正确"),this.expandLength<12?(this.expandLength++,this.quesPartA()):12==this.expandLength&&(this.time=Number((new Date).getTime())-Number(this.startTime),"test"==this.type?this.$router.push("/shengyaceping/rzqn/success/21?type=test"):this.submit())):(console.log("答题错误"),this.expandLength>0&&(1==this.expandLength&&(this.time=Number((new Date).getTime())-Number(this.startTime),"test"==this.type?this.$router.push("/shengyaceping/rzqn/success/21?type=test"):this.submit()),this.tempLength!==this.expandLength?(this.tempLength=this.expandLength,this.expandLength--,this.quesPartA()):(this.subject=2,this.work_bit=this.tempLength-1,this.time=Number((new Date).getTime())-Number(this.startTime),"test"==this.type?this.$router.push("/shengyaceping/rzqn/success/21?type=test"):this.submit())))},randomSort:function(t,s){return Math.random()>.5?-1:1},submit:function(){var t=this;this.$ajax.post("/api/result/cognition/worka/add",{time:this.time,answers:JSON.stringify(this.answers)},{timeout:3e3,headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(s){var e=s.data;0==e.code?(t.saveNode(2,22),t.$router.push("/shengyaceping/rzqn/success/21")):t.layerMsg(e.msg)},function(s){t.layerMsg("网路错误，请重新提交")})}}}}).call(this,e("1157"))},"31cc":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pc-page"},[e("div",{staticClass:"test_main test_main_2"},[e("rzqnNav"),e("div",{staticClass:"ques-wrapper test_detail test_detail_ing"},[e("div",{staticClass:"ques-container box d-relative"},[1==t.subject?e("div",{staticClass:"ques-answer ques-work-answer ques-work1-answer"},[e("div",{staticClass:"work-ques"},[e("div",{staticClass:"work-ques-wrapper"},t._l(t.expandNumber,function(s){return e("div",{staticClass:"work-ques-item"},[t._v("\n                "+t._s(s)+"\n              ")])}),0),e("div",{staticClass:"line-wrapper"},t._l(t.tempNumber,function(t,s){return e("div",{staticClass:"line"})}),0)]),e("div",{staticClass:"work-keyword"},[e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("1")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("2")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("3")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("4")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("5")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("6")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("7")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("8")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("9")]),e("span",{staticClass:"k-btn confirm",on:{click:t.answerClick}},[t._v("确定")]),e("span",{on:{click:function(s){return t.enter(s)}}},[t._v("0")]),e("span",{staticClass:"k-btn delete",on:{click:t.keyRollback}},[t._v("回退")])])]):t._e(),2==t.subject?e("div",{staticClass:"d-relative ques-answer ques-work-answer",on:{mousedown:function(s){return t.answerClick2(s)}}},[e("div",{staticClass:"work-ques"},t._l(t.memoryNum,function(s,a){return a==t.curIndex?e("span",{staticClass:"memoryBit"},[t._v(t._s(s))]):t._e()}),0),e("div",{staticClass:"work-m-tip"})]):t._e(),1==t.tip?e("div",{staticClass:"box",on:{click:t.quesPartA}},[e("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()]),e("div",{staticClass:"page"})])],1)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],n=e("176f"),r=n["a"],c=(e("572b"),e("4615"),e("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);s["default"]=u.exports},4615:function(t,s,e){"use strict";var a=e("0ce3"),i=e.n(a);i.a},"4a8a":function(t,s,e){},"572b":function(t,s,e){"use strict";var a=e("4a8a"),i=e.n(a);i.a},a84c:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test_menu clearfix"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t.tuance?e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("13")]),e("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),e("p",{staticClass:"font"},[t._v("Hidden Graphics")])]):t._e()])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("01")]),e("h6",{staticClass:"tit"},[t._v("信息加工能力")]),e("p",{staticClass:"font"},[t._v("Information Processing")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("02")]),e("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),e("p",{staticClass:"font"},[t._v("Working Memory")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("03")]),e("h6",{staticClass:"tit"},[t._v("空间能力")]),e("p",{staticClass:"font"},[t._v("Spatial")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("04")]),e("h6",{staticClass:"tit"},[t._v("表象能力")]),e("p",{staticClass:"font"},[t._v("Presentational")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("05")]),e("h6",{staticClass:"tit"},[t._v("思维转换能力")]),e("p",{staticClass:"font"},[t._v("Thinking Translating")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("06")]),e("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),e("p",{staticClass:"font"},[t._v("Logical Reasoning")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("07")]),e("h6",{staticClass:"tit"},[t._v("动手操作能力")]),e("p",{staticClass:"font"},[t._v("Operation")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("08")]),e("h6",{staticClass:"tit"},[t._v("语言能力")]),e("p",{staticClass:"font"},[t._v("Linguisitic")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("09")]),e("h6",{staticClass:"tit"},[t._v("数学能力")]),e("p",{staticClass:"font"},[t._v("Mathematics")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("10")]),e("h6",{staticClass:"tit"},[t._v("组织管理能力")]),e("p",{staticClass:"font"},[t._v("Organizational\n      Management")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("11")]),e("h6",{staticClass:"tit"},[t._v("人际交往能力")]),e("p",{staticClass:"font"},[t._v("Interpersonal Interaction")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("12")]),e("h6",{staticClass:"tit"},[t._v("美术能力")]),e("p",{staticClass:"font"},[t._v("Arts Capacity")])])}],n=e("dca1"),r=n["a"],c=e("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null);s["a"]=u.exports},dca1:function(t,s,e){"use strict";(function(t){s["a"]={data:function(){return{tuance:!0}},updated:function(){},methods:{},created:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!1)},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,e("1157"))}}]);
//# sourceMappingURL=chunk-f8b31330.b74ecea6.js.map