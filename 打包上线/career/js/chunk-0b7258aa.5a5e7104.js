(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b7258aa"],{"03ea":function(t,e,s){},"151e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 1==t.tip?s("div",{staticClass:"box",on:{click:t.tipHide}},[s("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btngroup"},[s("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],r={data:function(){return{tip:1}},mounted:function(){},methods:{tipHide:function(){this.tip=0}}},n=r,c=s("2877"),o=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=o.exports},"2f21":function(t,e,s){"use strict";var i=s("79e5");t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,s){"use strict";var i=s("5ca1"),a=s("d8e8"),r=s("4bf8"),n=s("79e5"),c=[].sort,o=[1,2,3];i(i.P+i.F*(n(function(){o.sort(void 0)})||!n(function(){o.sort(null)})||!s("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(r(this)):c.call(r(this),a(t))}})},"75cd":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pc-page",on:{mousedown:function(e){return t.answerClick(e)},dblclick:t.answerDblClick}},[i("div",{staticClass:"test_main test_main_2"},[i("rzqnNav"),i("div",{staticClass:"ques-wrapper test_detail test_detail_ing"},[i("div",{staticClass:"ques-container box d-relative"},[1==t.errorClick?i("div",{staticClass:"errorTip"},[t._v(t._s(t.errorTip))]):t._e(),i("div",{staticClass:"ques-answer ques-info-answer"},t._l(t.questions,function(e,a){return 0==t.errorClick?i("div",{staticClass:"info-arrow",class:{current:e.show}},["left"==e.direction?i("img",{attrs:{src:s("8d53"),alt:""}}):t._e(),"right"==e.direction?i("img",{attrs:{src:s("e0eb"),alt:""}}):t._e()]):t._e()}),0),1==t.tip?i("div",{staticClass:"box",on:{click:t.clickStart}},[i("em",{staticClass:"icon part_start"}),t._m(0)]):t._e()]),i("div",{staticClass:"page"},[i("em",{staticClass:"col_2"},[t._v(t._s(t.quesEq+1)+" ")]),t._v("/"+t._s(t.arrLength)+"\n      ")])])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btngroup"},[s("a",{staticClass:"btn btn_start",attrs:{href:"javascript:;"}},[t._v("点击鼠标开始测试")])])}],r=s("9a4c"),n=r["a"],c=(s("9dc8"),s("e8e8"),s("2877")),o=Object(c["a"])(n,i,a,!1,null,null,null);e["default"]=o.exports},"865d":function(t,e,s){},"8d53":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAqCAMAAAA+hAOCAAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMAZh35DgPgwKd3PzIUr+rn5Nq5tIiCfXFsRjgYSsBFAwAAAJpJREFUSMed1kcOhEAMBVHANAxpcqbuf04kVr0Bifr7J+hku9hMelaFStXi5O+MkukFSs4tTvYXlEzvQMnxDkr2V5zsAiXHB3m6ci85/DccSAY/gZL1BEoODU5+AyXrEyg53HCyDEzWP3VyQsZ/06/T760/T3+H/L31b8W/T18TfB3ytc/XW1/jfV/xvcz3T9+z/ZzgZxM/D/kstvl6Pn+rAgEAAAAASUVORK5CYII="},"9a4c":function(t,e,s){"use strict";(function(t){s("c5f6"),s("55dd");var i=s("a84c"),a=s("151e");e["a"]={data:function(){return{tip:1,questions:[{show:!1,direction:"left"},{show:!1,direction:"left"},{show:!1,direction:"left"},{show:!1,direction:"right"},{show:!1,direction:"right"},{show:!1,direction:"right"}],tempTimeStart:"",tempTime:"",quesArr:[],quesEq:0,efficiency:"",time:"",startTime:"",endTime:"",answer:0,bar:0,answers:[],info_time:"",info_correct_rate:"",info_efficiency:"",type:this.$route.query.type,errorTip:"",errorClick:0,timeFn:"",rightTime1:"",rightTime2:"",arrLength:30}},mounted:function(){this.startTime=(new Date).getTime(),this.quesShow(),t(".test_menu .item").eq(0).addClass("item_2"),"test"==this.type&&(this.arrLength=5)},updated:function(){},components:{rzqnNav:i["a"],tip:a["a"]},methods:{clickStart:function(){var e=this;0==this.errorClick&&(t(".info-arrow").hide(),setTimeout(function(){e.tempTimeStart=(new Date).getTime(),t(".info-arrow").show(),e.tip=0},500))},quesShow:function(){for(var e=this,s=0;s<5;s++){var i=[0,1,2,3,4,5];i.sort(this.randomSort),t(i).each(function(t,s){e.quesArr.push(s)})}this.questions[this.quesArr[this.quesEq]].show=!0,console.log(this.questions)},randomSort:function(t,e){return Math.random()>.5?-1:1},answerClick:function(e){document.oncontextmenu=function(){return!1};var s=this,i={};clearTimeout(this.timeFn),0==s.tip&&(this.timeFn=setTimeout(function(){if(0==s.errorClick&&0==s.tip){t(".info-arrow").show();var a=t(".info-arrow.current").css("z-index");if(0==s.tip&&a<0)return s.errorClick=1,s.errorTip="抢时，双击鼠标左键继续",t(".info-arrow").hide(),!1;if(Number((new Date).getTime())-Number(s.tempTimeStart)>1e3?s.tempTime=Number((new Date).getTime())-Number(s.tempTimeStart)-1e3:s.tempTime=Number((new Date).getTime())-Number(s.tempTimeStart),i.time=s.tempTime,console.log("反应时："+s.tempTime),s.quesEq<s.arrLength){s.bar=Number(s.quesEq+1)/s.arrLength*100;var r=e.button;0==r?(i.answer=0,"left"==s.questions[s.quesArr[s.quesEq]].direction?(s.answer++,i.right_answer=1):(i.right_answer=4,s.errorClick=1,s.errorTip="回答错误，双击鼠标左键继续",t(".info-arrow").hide())):2==r&&(i.answer=1,"right"==s.questions[s.quesArr[s.quesEq]].direction?(s.answer++,i.right_answer=4):(i.right_answer=1,s.errorClick=1,s.errorTip="回答错误，双击鼠标左键继续",t(".info-arrow").hide())),s.answers.push(i),s.quesEq==s.arrLength-1&&(s.endTime=(new Date).getTime(),s.time=Number(s.endTime)-Number(s.startTime),s.info_time=Number(s.endTime)-Number(s.startTime),s.info_correct_rate=s.answer/s.arrLength,s.info_efficiency=s.info_time/s.info_correct_rate,"test"==s.type?s.$router.push("/shengyaceping/rzqn/success/1?type=test"):s.submit()),s.quesEq<s.arrLength-1&&(s.tempTimeStart=(new Date).getTime(),s.quesEq++),t(s.questions).each(function(t,e){e.show=!1}),s.questions[s.quesArr[s.quesEq]].show=!0}else"test"==s.type?s.$router.push("/shengyaceping/rzqn/success/1?type=test"):s.submit()}},250))},answerDblClick:function(e){var s=this;clearTimeout(this.timeFn);t(".info-arrow.current").css("z-index");if(0==s.errorClick)return s.errorClick=1,s.errorTip="抢时，双击鼠标左键继续",t(".info-arrow").hide(),!1;this.errorClick=0,s.tempTimeStart=(new Date).getTime(),t(".info-arrow").show()},submit:function(){var t=this;this.$ajax.post("/api/result/cognition/info/add",{time:this.time,answers:JSON.stringify(this.answers)},{timeout:3e3,headers:{token:sessionStorage.getItem("token")}},{emulateJSON:!0}).then(function(e){var s=e.data;0==s.code?(t.saveNode(2,21),t.$router.push("/shengyaceping/rzqn/success/1")):t.layerMsg(s.msg)},function(e){t.layerMsg("网络错误,请重新提交")})}}}}).call(this,s("1157"))},"9dc8":function(t,e,s){"use strict";var i=s("03ea"),a=s.n(i);a.a},a84c:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_menu clearfix"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t.bool?s("div",[t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t.tuance?s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("13")]),s("h6",{staticClass:"tit"},[t._v("隐藏图形测试")]),s("p",{staticClass:"font"},[t._v("Hidden Graphics")])]):t._e()]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("01")]),s("h6",{staticClass:"tit"},[t._v("信息加工能力")]),s("p",{staticClass:"font"},[t._v("Information Processing")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("02")]),s("h6",{staticClass:"tit"},[t._v("工作记忆能力")]),s("p",{staticClass:"font"},[t._v("Working Memory")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("03")]),s("h6",{staticClass:"tit"},[t._v("空间能力")]),s("p",{staticClass:"font"},[t._v("Spatial")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("04")]),s("h6",{staticClass:"tit"},[t._v("表象能力")]),s("p",{staticClass:"font"},[t._v("Presentational")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("05")]),s("h6",{staticClass:"tit"},[t._v("思维转换能力")]),s("p",{staticClass:"font"},[t._v("Thinking Translating")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("06")]),s("h6",{staticClass:"tit"},[t._v("逻辑推理能力")]),s("p",{staticClass:"font"},[t._v("Logical Reasoning")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("07")]),s("h6",{staticClass:"tit"},[t._v("动手操作能力")]),s("p",{staticClass:"font"},[t._v("Operation")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("08")]),s("h6",{staticClass:"tit"},[t._v("语言能力")]),s("p",{staticClass:"font"},[t._v("Linguisitic")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("09")]),s("h6",{staticClass:"tit"},[t._v("数学能力")]),s("p",{staticClass:"font"},[t._v("Mathematics")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("10")]),s("h6",{staticClass:"tit"},[t._v("组织管理能力")]),s("p",{staticClass:"font"},[t._v("Organizational\n        Management")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("11")]),s("h6",{staticClass:"tit"},[t._v("人际交往能力")]),s("p",{staticClass:"font"},[t._v("Interpersonal Interaction")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"item",attrs:{href:"javascript:;"}},[s("em",{staticClass:"num"},[t._v("12")]),s("h6",{staticClass:"tit"},[t._v("美术能力")]),s("p",{staticClass:"font"},[t._v("Arts Capacity")])])}],r=s("dca1"),n=r["a"],c=s("2877"),o=Object(c["a"])(n,i,a,!1,null,null,null);e["a"]=o.exports},dca1:function(t,e,s){"use strict";(function(t){e["a"]={data:function(){return{bool:!0}},updated:function(){},methods:{},created:function(){"false"==window.sessionStorage.cardsBoolean&&(this.bool=!1)},mounted:function(){this.tuance||t(".test_menu .item").css({width:"8.3%"})}}}).call(this,s("1157"))},e0eb:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAqCAYAAAAJWvOwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QUQzMUJERkNCNDkxMUU3ODIyQ0E1RUIxMzM5MTVCNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QUQzMUJFMENCNDkxMUU3ODIyQ0E1RUIxMzM5MTVCNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlBRDMxQkREQ0I0OTExRTc4MjJDQTVFQjEzMzkxNUI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlBRDMxQkRFQ0I0OTExRTc4MjJDQTVFQjEzMzkxNUI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PIwx8gAAAWhJREFUeNrsmr1KA0EURifmDQRBkPg2Fr6AkiCIICJY2Ag2aqFFwCpFKnsrGxsRImhhY2FhbyEKghAEsVL8Gc+VWQipzGbXmdyZA6cMux/3Zmf3zlSstcYDNVzDLfws+2IVTyGn8R4vsY6PmkMKXVzATlkXGzP+mcBT3MWq1kr2coENfNIc0riADRdYTbv2M4lnuF3U/YVYyV467qHU1RzSuOWl7pYbNe3azxSe46YUJW8lVzzc+Dg2c/zuBBfxedCQ1owWDziPV5pDCh+ufVtotYbMOMYlfNEcUrjDObzWHFJ4xw1saw6ZcYTL+Ko5pHDr2vdGc0jhDdfxQHPIjENc1R7yd5lJlUz/yfR0TetkeuNJ766RfYWo/57MNRmIYsbjoxqDjCQF2d6Tbb79v7TnKIYceu4axQQ91OHyF+7g7LABQ61k4btaUexPhtKu37iHM0UHDKWSpZ8ZSKc/SiSKczz/yo8AAwAReuHZKcPTxQAAAABJRU5ErkJggg=="},e8e8:function(t,e,s){"use strict";var i=s("865d"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-0b7258aa.5a5e7104.js.map