(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7979ab70"],{"14eb":function(t,s,e){"use strict";var i=e("1886"),a=e.n(i);a.a},"151e":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 1==t.tip?e("div",{staticClass:"box",on:{click:t.tipHide}},[e("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],r={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},n=r,c=e("2877"),o=Object(c["a"])(n,i,a,!1,null,null,null);s["a"]=o.exports},"16a0":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pc-page",on:{mousedown:function(s){return t.answerClick2(s)},dblclick:t.answerDblClick}},[e("div",{staticClass:"test_main test_main_2"},[e("Nav"),e("div",{staticClass:"ques-wrapper test_detail test_detail_ing"},[e("div",{staticClass:"ques-container box d-relative"},[1==t.errorClick?e("div",{staticClass:"errorTip"},[t._v(t._s(t.errorTip))]):t._e(),2==t.subject?e("div",{staticClass:"d-relative ques-answer ques-work-answer"},[e("div",{staticClass:"work-ques"},t._l(t.memoryNum,function(s,i){return i==t.curIndex?e("span",{staticClass:"memoryBit"},[t._v(t._s(s))]):t._e()}),0),e("div",{staticClass:"work-m-tip"},[t._v("\n            提示：请判断此数字是否与前第三个数字相同。\n          ")])]):t._e(),1==t.tip?e("div",{staticClass:"box",on:{click:t.clickStart}},[e("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()]),e("div",{staticClass:"page"},[e("em",{staticClass:"col_2"},[t._v(t._s(t.curIndex+1)+" ")]),t._v("/"+t._s(t.arrLength)+"\n      ")])])],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btngroup"},[e("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],r=e("5dd4"),n=r["a"],c=(e("14eb"),e("2877")),o=Object(c["a"])(n,i,a,!1,null,"1170ca9a",null);s["default"]=o.exports},1886:function(t,s,e){},3357:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"test_menu clearfix"},[e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("01")]),e("h6",{staticClass:"tit"},[t._v("信息加工能力")]),e("p",{staticClass:"font"},[t._v("Information Processing")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("02")]),e("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),e("p",{staticClass:"font"},[t._v("Working Memory")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("03")]),e("h6",{staticClass:"tit"},[t._v("空间能力")]),e("p",{staticClass:"font"},[t._v("Spatial")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("04")]),e("h6",{staticClass:"tit"},[t._v("表象能力")]),e("p",{staticClass:"font"},[t._v("Presentational")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("05")]),e("h6",{staticClass:"tit"},[t._v("思维转换能力")]),e("p",{staticClass:"font"},[t._v("Thinking Translating")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("06")]),e("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),e("p",{staticClass:"font"},[t._v("Logical Reasoning")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("07")]),e("h6",{staticClass:"tit"},[t._v("语言能力")]),e("p",{staticClass:"font"},[t._v("Linguisitic")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("08")]),e("h6",{staticClass:"tit"},[t._v("数学能力")]),e("p",{staticClass:"font"},[t._v("Mathematics")])]),e("a",{staticClass:"item",attrs:{href:"javascript:;"}},[e("em",{staticClass:"num"},[t._v("09")]),e("h6",{staticClass:"tit"},[t._v("注意力")]),e("p",{staticClass:"font"},[t._v("Attention")])])])}],r=e("39b3"),n=r["a"],c=e("2877"),o=Object(c["a"])(n,i,a,!1,null,null,null);s["a"]=o.exports},"39b3":function(t,s,e){"use strict";(function(t){s["a"]={data:function(){return{}},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,e("1157"))},"5dd4":function(t,s,e){"use strict";(function(t){e("c5f6");var i=e("3357"),a=e("151e");s["a"]={data:function(){return{tip:1,subject:2,questions:"",answers:[],bar:"",time:"",startTime:"",endTime:"",expandNumber:[],tempNumber:[],expandLength:3,memoryNumInit:[],memoryNumInitStr:"",memoryNumAnswer:[],memoryNum:[],curIndex:0,work_bit:"",work_correct:0,work_correct_rate:"",tempLength:"",type:this.$route.query.type,errorTip:"",errorClick:0,timeFn:"",arrLength:28}},components:{Nav:i["a"],tip:a["a"]},mounted:function(){this.startTime=(new Date).getTime();t(".test_menu .item").eq(1).addClass("item_2"),"test"==this.type&&(this.arrLength=9)},updated:function(){},methods:{clickStart:function(){var t=this;this.tip=0,setTimeout(function(){t.quesPartB(),setInterval(function(){if(t.curIndex<3)t.curIndex++;else for(var s=0;s<100;s++)clearInterval(s)},2e3)},500)},quesPartB:function(){this.$ajax.post(this.G_uri+"/test/work/gen_nums",{headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){var s=t.data;0==s.code&&(this.memoryNum=s.result)}.bind(this),function(t){this.layerMsg("网络错误")}.bind(this))},randomSort:function(t,s){return Math.random()>.5?-1:1},answerClick2:function(s){t(".memoryBit").text();var e=this;document.oncontextmenu=function(){return!1};var i=s.button;0==e.tip&&(clearTimeout(e.timeFn),e.timeFn=setTimeout(function(){if(console.log("这是单击事件"),console.log(e.curIndex),0==e.errorClick&&0==e.tip)if(e.curIndex>2){var s=t(".memoryBit").css("z-index");if(0==e.tip&&s<0)return e.errorClick=1,e.errorTip="抢时，双击鼠标左键继续",t(".memoryBit").hide(),!1;0==i?(console.log("您点击了鼠标左键！"),e.answers.push(1),e.memoryNum[e.curIndex]==e.memoryNum[e.curIndex-3]||(e.errorClick=1,e.errorTip="回答错误，双击鼠标左键继续",t(".memoryBit").hide())):2==i&&(console.log("您点击了鼠标右键！"),e.answers.push(0),e.memoryNum[e.curIndex]!=e.memoryNum[e.curIndex-3]||(e.errorClick=1,e.errorTip="回答错误，双击鼠标左键继续",t(".memoryBit").hide())),e.curIndex<e.arrLength&&(e.curIndex++,e.bar=Number(e.curIndex-2)/(e.arrLength-2)*100),console.log(e.answers),e.curIndex==e.arrLength&&(console.log(e.work_correct),e.work_correct_rate=e.work_correct/e.arrLength-2,e.time=Number((new Date).getTime())-Number(e.startTime),"test"==e.type?e.$router.push("/learningAbility/learningPotential/success/22?type=test"):e.submit())}else e.layerMsg("本测试是从第4次开始判断",1e3)},250))},answerDblClick:function(s){var e=this;if(clearTimeout(this.timeFn),console.log("双击事件"),0==e.errorClick){if(e.curIndex>2){t(".memoryBit").css("z-index");return e.errorClick=1,e.errorTip="抢时，双击鼠标左键继续",t(".memoryBit").hide(),!1}e.layerMsg("本测试是从第4次开始判断",1e3)}this.errorClick=0,t(".memoryBit").show()},submit:function(){console.log(this.answers),console.log(this.memoryNum),this.$ajax.post(this.G_uri+"/result/cognition/workb/add",{time:this.time,answers:JSON.stringify(this.answers),nums:JSON.stringify(this.memoryNum),test_id:window.sessionStorage.getItem("testId")},{timeout:3e3,headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(t){console.log(t.data);var s=t.data;0==s.code?(this.saveNode(1,3),this.$router.push("/learningAbility/learningPotential/success/22")):this.layerMsg(s.msg)}.bind(this),function(t){this.layerMsg("网络错误，请重新提交")}.bind(this))}}}}).call(this,e("1157"))}}]);
//# sourceMappingURL=chunk-7979ab70.08ac7750.js.map