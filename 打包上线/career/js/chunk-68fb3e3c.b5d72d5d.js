(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fb3e3c"],{"0902":function(t,i,s){"use strict";var e=s("c2ea"),a=s.n(e);a.a},"70b0":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"month"},[s("div",{staticClass:"parts"},[t._m(0),s("div",{staticClass:"tops"},[s("div",{staticClass:"tops1"},[s("img",{attrs:{src:"imgs/careerManagement/plan/icon_xueyeguihua.png",alt:""}}),s("span",{staticClass:"topspan1"},[t._v("\n                    第"),s("a",[t._v(t._s(t.week))]),t._v("周计划"),s("span",[t._v("日计划")])])])]),s("div",{staticClass:"line"}),s("p",[t._v("周计划")]),s("ul",{staticClass:"yuelist"},[t._l(t.weeklist1,function(i,e){return s("li",[s("span",{staticStyle:{color:"#3187E6","font-weight":"bolder"}},[t._v("[ 重要紧急 ]")]),t._v("\n                "+t._s(i.title)+"\n                "),s("div",{staticStyle:{float:"right",width:"200px"}},[t._v("截止时间:"+t._s(i.startDate)+t._s(i.startDate!=i.endDate?"---"+i.endDate:""))])])}),t._l(t.weeklist2,function(i,e){return s("li",[s("span",{staticStyle:{color:"#3187E6","font-weight":"bolder"}},[t._v("[ 重要不紧急 ]")]),t._v("\n                "+t._s(i.title)+"\n                "),s("div",{staticStyle:{float:"right",width:"200px"}},[t._v("截止时间:"+t._s(i.startDate)+t._s(i.startDate!=i.endDate?"---"+i.endDate:""))])])}),t._l(t.weeklist3,function(i,e){return s("li",[s("span",{staticStyle:{color:"#3187E6","font-weight":"bolder"}},[t._v("[ 不重要紧急 ]")]),t._v("\n                "+t._s(i.title)+"\n                "),s("div",{staticStyle:{float:"right",width:"200px"}},[t._v("截止时间:"+t._s(i.startDate)+t._s(i.startDate!=i.endDate?"---"+i.endDate:""))])])}),t._l(t.weeklist4,function(i,e){return s("li",[s("span",{staticStyle:{color:"#3187E6","font-weight":"bolder"}},[t._v("[ 不重要不紧急 ]")]),t._v("\n                "+t._s(i.title)+"\n                "),s("div",{staticStyle:{float:"right",width:"200px"}},[t._v("截止时间:"+t._s(i.startDate)+t._s(i.startDate!=i.endDate?"---"+i.endDate:""))])])})],2),s("ul",{staticClass:"list",staticStyle:{"margin-top":"40px","border-bottom":"none"}},[s("li",[t._v("\n                日计划制定时间:\n                "),s("el-select",{staticStyle:{"margin-left":"0","margin-right":"14px"},attrs:{placeholder:"请选择",disabled:t.showBool},model:{value:t.startDate,callback:function(i){t.startDate=i},expression:"startDate"}},t._l(t.dates,function(i,e){return s("el-option",{key:i.value,attrs:{label:i.value,value:i.value,disabled:t.showBool}})}),1),s("el-select",{staticStyle:{"margin-left":"0","margin-right":"14px"},attrs:{placeholder:"请选择",disabled:t.showBool},model:{value:t.endDate,callback:function(i){t.endDate=i},expression:"endDate"}},t._l(t.datesSX,function(i,e){return s("el-option",{key:i.value,attrs:{label:i.value,value:i.value,disabled:t.showBool}})}),1)],1),s("li",[s("el-input",{attrs:{placeholder:"最长不超过20个字",maxlength:"20",disabled:t.showBool},model:{value:t.zhongyaoduContent,callback:function(i){t.zhongyaoduContent=i},expression:"zhongyaoduContent"}})],1),s("li",{staticClass:"listAdd",on:{click:t.add}},[t._v("\n                新增\n            ")])]),s("div",{staticClass:"monthContent"},[s("p",[t._v("每日计划事项:")]),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期一\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list1,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                         时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list1.splice(e,1)}}})])}),0),0==t.list1.length?s("div",{staticClass:"noneContent"}):t._e(),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期二\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list2,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                        时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list2.splice(e,1)}}})])}),0),0==t.list2.length?s("div",{staticClass:"noneContent"}):t._e(),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期三\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list3,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                       时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list3.splice(e,1)}}})])}),0),0==t.list3.length?s("div",{staticClass:"noneContent"}):t._e(),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期四\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list4,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                        时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list4.splice(e,1)}}})])}),0),0==t.list4.length?s("div",{staticClass:"noneContent"}):t._e(),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期五\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list5,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                        时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list5.splice(e,1)}}})])}),0),0==t.list5.length?s("div",{staticClass:"noneContent"}):t._e(),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期六\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list6,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                        时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list6.splice(e,1)}}})])}),0),0==t.list6.length?s("div",{staticClass:"noneContent"}):t._e(),s("div",{staticClass:"zhongyaoTop"},[t._v("\n                星期日\n            ")]),s("ul",{staticClass:"listMonth"},t._l(t.list7,function(i,e){return s("li",[2==i.isDone?s("div",{staticClass:"img",on:{click:function(t){i.isDone=1}}}):t._e(),1==i.isDone?s("div",{staticClass:"img2",on:{click:function(t){i.isDone=2}}}):t._e(),s("span",{staticStyle:{width:"376px","margin-right":"200px"}},[t._v(t._s(i.title))]),s("span",{staticClass:"date"},[t._v("\n                        时间: "+t._s(i.endDate)+"\n                    ")]),t.showBool?t._e():s("span",{staticClass:"icon icon2",on:{click:function(i){return t.list7.splice(e,1)}}})])}),0),0==t.list7.length?s("div",{staticClass:"noneContent"}):t._e(),t.showBool?t._e():s("div",{staticClass:"save",on:{click:t.addPlane}},[t._v("\n                保存\n            ")]),t._m(1)])])])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"top"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:"imgs/careerArchives/icon_biaoti.png",alt:""}}),t._v("\n                日计划\n            ")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ul",{staticClass:"xuelist"},[s("img",{attrs:{src:"imgs/careerManagement/plan/icon_tishi.png",alt:""}}),s("li",[t._v("1、日计划是针对自己可以利用的时间进行规划。")]),s("li",[t._v("2、日计划的制定是为了帮助我们更好的完成本周的目标，便于对过程的监控和调整。")]),s("li",[t._v("3、完成情况一栏，完成打“√”。")])])}],n=s("75fc"),l=(s("ac6a"),{name:"date",data:function(){return{week:1,weeklist1:[],weeklist2:[],weeklist3:[],weeklist4:[],zhongyaoduContent:"",dates:[{value:"星期一"},{value:"星期二"},{value:"星期三"},{value:"星期四"},{value:"星期五"},{value:"星期六"},{value:"星期日"}],datesSX:[{value:"上午"},{value:"下午"},{value:"晚上"}],list1:[],list2:[],list3:[],list4:[],list5:[],list6:[],list7:[],startDate:"星期一",endDate:"上午",showBool:!1,actionPlanMonthId:0,editId:""}},methods:{showPlaneweek:function(t){var i=this;this.$ajax.post(this.G_uri+this.ports.plans.zhouDetail,{id:t},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){if(2e3==t.data.code){var s=t.data.data;i.week=s.week,i.actionPlanMonthId=s.actionPlanMonthId,i.weeklist1=s.target[1],i.weeklist2=s.target[2],i.weeklist3=s.target[3],i.weeklist4=s.target[4],i.weeklist1.forEach(function(t){t.target=1}),i.weeklist2.forEach(function(t){t.target=2}),i.weeklist3.forEach(function(t){t.target=3}),i.weeklist4.forEach(function(t){t.target=4})}})},add:function(){if(this.zhongyaoduContent){var t={};t.title=this.zhongyaoduContent,t.startDate=this.startDate,t.endDate=this.endDate,t.isDone=2,"星期一"==this.startDate&&(t.target=1,this.$set(this.list1,this.list1.length,t)),"星期二"==this.startDate&&(t.target=2,this.$set(this.list2,this.list2.length,t)),"星期三"==this.startDate&&(t.target=3,this.$set(this.list3,this.list3.length,t)),"星期四"==this.startDate&&(t.target=4,this.$set(this.list4,this.list4.length,t)),"星期五"==this.startDate&&(t.target=5,this.$set(this.list5,this.list5.length,t)),"星期六"==this.startDate&&(t.target=6,this.$set(this.list6,this.list6.length,t)),"星期日"==this.startDate&&(t.target=7,this.$set(this.list7,this.list7.length,t)),this.zhongyaoduContent="",this.startDate="",this.endDate=""}else this.$message.error("请将计划信息填写完整")},addPlane:function(){var t=this,i={1:[],2:[],3:[],4:[],5:[],6:[],7:[]},s=[].concat(Object(n["a"])(this.list1),Object(n["a"])(this.list2),Object(n["a"])(this.list3),Object(n["a"])(this.list4),Object(n["a"])(this.list5),Object(n["a"])(this.list6),Object(n["a"])(this.list7)),e=[].concat(Object(n["a"])(this.list1),Object(n["a"])(this.list2),Object(n["a"])(this.list3),Object(n["a"])(this.list4),Object(n["a"])(this.list5),Object(n["a"])(this.list6),Object(n["a"])(this.list7)).length,a=0,l=0,o={1:0,2:0,3:0,4:0,5:0,6:0,7:0};if(this.list1.length>0){l++;var c=0;this.list1.forEach(function(t){1==t.isDone&&c++}),o[1]=(c/this.list1.length).toFixed(4)}if(this.list2.length>0){l++;var r=0;this.list2.forEach(function(t){1==t.isDone&&r++}),o[2]=(r/this.list2.length).toFixed(4)}if(this.list3.length>0){l++;var h=0;this.list3.forEach(function(t){1==t.isDone&&h++}),o[3]=(h/this.list3.length).toFixed(4)}if(this.list4.length>0){l++;var d=0;this.list4.forEach(function(t){1==t.isDone&&d++}),o[4]=(d/this.list4.length).toFixed(4)}if(this.list5.length>0){l++;var u=0;this.list5.forEach(function(t){1==t.isDone&&u++}),o[5]=(u/this.list5.length).toFixed(4)}if(this.list6.length>0){l++;var g=0;this.list6.forEach(function(t){1==t.isDone&&g++}),o[6]=(g/this.list6.length).toFixed(4)}if(this.list7.length>0){l++;var D=0;this.list7.forEach(function(t){1==t.isDone&&D++}),o[7]=(D/this.list7.length).toFixed(4)}s.forEach(function(t){1==t.target&&i[1].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),2==t.target&&i[2].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),3==t.target&&i[3].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),4==t.target&&i[4].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),5==t.target&&i[5].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),6==t.target&&i[6].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),7==t.target&&i[7].push({title:t.title,startDate:t.startDate,endDate:t.endDate,isDone:t.isDone}),1==t.isDone&&a++}),this.$ajax.post(this.G_uri+this.ports.plans.riAdd,{id:this.editId,actionPlanMonthId:this.actionPlanMonthId,target:i,week:this.week,targetNum:e,targetDoneNum:a,day:l,dayRate:o},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(i){2e3==i.data.code&&t.$router.push("/plan/main")})},showPlaneDate:function(){var t=this;this.$ajax.post(this.G_uri+this.ports.plans.riDetail,{id:this.editId},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(i){if(2e3==i.data.code){var s=i.data.data;t.list1=s.target[1],t.list2=s.target[2],t.list3=s.target[3],t.list4=s.target[4],t.list5=s.target[5],t.list6=s.target[6],t.list7=s.target[7],t.list1.forEach(function(t){t.target=1}),t.list2.forEach(function(t){t.target=2}),t.list3.forEach(function(t){t.target=3}),t.list4.forEach(function(t){t.target=4}),t.list5.forEach(function(t){t.target=5}),t.list6.forEach(function(t){t.target=6}),t.list7.forEach(function(t){t.target=7})}})}},created:function(){this.showPlaneweek(this.$route.query.weekId),this.$route.query.editId&&(this.editId=this.$route.query.editId,this.showPlaneDate()),this.$route.query.showId&&(this.editId=this.$route.query.showId,this.showPlaneDate(),this.showBool=!0)}}),o=l,c=(s("0902"),s("df51"),s("2877")),r=Object(c["a"])(o,e,a,!1,null,"1f0004c0",null);i["default"]=r.exports},"9e70":function(t,i,s){},ac6a:function(t,i,s){for(var e=s("cadf"),a=s("0d58"),n=s("2aba"),l=s("7726"),o=s("32e9"),c=s("84f2"),r=s("2b4c"),h=r("iterator"),d=r("toStringTag"),u=c.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},D=a(g),f=0;f<D.length;f++){var v,_=D[f],p=g[_],C=l[_],w=C&&C.prototype;if(w&&(w[h]||o(w,h,u),w[d]||o(w,d,_),c[_]=u,p))for(v in e)w[v]||n(w,v,e[v],!0)}},c2ea:function(t,i,s){},df51:function(t,i,s){"use strict";var e=s("9e70"),a=s.n(e);a.a}}]);
//# sourceMappingURL=chunk-68fb3e3c.b5d72d5d.js.map