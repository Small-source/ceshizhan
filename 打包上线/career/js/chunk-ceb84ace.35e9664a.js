(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ceb84ace"],{"1b09":function(t,e,a){},"1d4a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"elective"},[a("div",{staticClass:"electiveBox"},[a("ul",[a("li",[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"title"},[t._v("\n                       根据专业选科目\n                    ")]),a("p",[t._v("\n                        清华大学与中科院心理所研究成果，结合心理学和人因学，采取物理心理测评技术针对认知潜能、人格特征、兴趣、学习风格、心理健康进行综合测量，精准定位专业范围，帮助考生发现天赋，科学完成自我认知。\n                    ")]),a("div",{staticClass:"button",on:{click:function(e){return t.getSubjectSelectProfessional()}}},[t._v("\n                        开始测评\n                    ")])])]),a("li",[t._m(1),a("div",{staticClass:"right"},[a("div",{staticClass:"title"},[t._v("\n                       选科要求查询\n                    ")]),t._m(2),a("div",{staticClass:"button",on:{click:function(e){return t.jump("/elective/xuekezhixuan/university")}}},[t._v("\n                        查询\n                    ")])])])]),a("p",[a("img",{attrs:{src:"/imgs/elective/tips.png",alt:""}}),t._v("为了更好地进行选科决策，请先完成原有"),a("router-link",{staticClass:"go_shengya",attrs:{to:"/selfAssessment/main",tag:"span"}},[t._v("生涯测评")]),a("span",[t._v("（备注：360°选科=生涯测评+根据专业选科目）")])],1)]),a("div",{staticClass:"myReports"},[t._m(3),a("table",[t._m(4),a("tbody",t._l(t.reportList.list,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.subjectName))]),a("td",[t._v(t._s(e.subjectModelName))]),a("td",[t._v(t._s(e.createdAt))]),a("td",[a("span",{on:{click:function(a){return t.goReport(e.subjectModel,e.batch)}}},[t._v("查看")])])])}),0)]),a("div",{staticClass:"page_box"},[a("span",[t._v("共"+t._s(t.count)+"条")]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.count},on:{"current-change":t.currentChange}})],1)]),a("JihuoMajor",{directives:[{name:"show",rawName:"v-show",value:t.isShowJihuoMajor,expression:"isShowJihuoMajor"}],on:{"go-back":function(e){t.isShowJihuoMajor=!1}}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("img",{attrs:{src:"/imgs/elective/search.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("img",{attrs:{src:"/imgs/elective/xuankemu.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n                        按大学查询：快速查询在本省招生普通高校招生专业选考科目要求"),a("br"),t._v("按学科查询：根据选考科目与目标专业查看院校专业选考要求详情。\n                    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("img",{attrs:{src:"imgs/careerArchives/icon_biaoti.png",alt:""}}),t._v("\n            我的报告\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("目标学科")]),a("td",[t._v("选科项目")]),a("td",[t._v("创建时间")]),a("td",[t._v("操作")])])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jihuomajor"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isJihuo,expression:"!isJihuo"}],staticClass:"tanchuang1"},[a("div",{staticClass:"title"},[t._v("激活生涯卡")]),a("p",{staticClass:"neirong"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.XuankekaNumber,expression:"XuankekaNumber"}],staticClass:"Username",attrs:{type:"text",placeholder:"请输入生涯卡卡号"},domProps:{value:t.XuankekaNumber},on:{input:function(e){e.target.composing||(t.XuankekaNumber=e.target.value)}}})]),a("p",{staticClass:"neirong2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Xuankekapassword,expression:"Xuankekapassword"}],staticClass:"Password1",attrs:{type:"password",placeholder:"请输入生涯卡密码"},domProps:{value:t.Xuankekapassword},on:{input:function(e){e.target.composing||(t.Xuankekapassword=e.target.value)}}})]),a("p",{staticClass:"warning"},[t._v(t._s(t.warning4))]),a("button",{on:{click:t.goJihuo}},[t._v("确定")]),a("div",{staticClass:"close",on:{click:function(e){return t.$emit("go-back")}}},[t._v("\n            X\n        ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isJihuo,expression:"isJihuo"}],staticClass:"tanchuang2"},[t._m(0),a("div",{staticClass:"title"},[t._v("生涯卡激活成功")]),a("p",{staticClass:"tishiyu"},[t._v("可使用选科、生涯测评、升学途径分析、选择决策、视频课程等升学规划功能")]),a("button",{staticClass:"goback",on:{click:function(e){return t.$router.push("/elective/majorSelectedSubjects/mubiaozhuanye")}}},[t._v("确定")])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tubiao"},[a("img",{attrs:{src:"/imgs/selfAssessment/chenggong.png",alt:""}})])}],r={props:["serial_no"],data:function(){return{XuankekaNumber:"",Xuankekapassword:"",isJihuo:!1,warning4:""}},methods:{goJihuo:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=this.XuankekaNumber,a=this.Xuankekapassword,s=this;e||a?this.$ajax.post(this.G_uri+"/chooseSubject/bindBalanceChooseSubjectCard",{card:e,password:a},{headers:{token:t}}).then(function(t){2e3==t.data.code?s.isJihuo=!0:1016==t.data.code?s.$router.push("/login"):s.warning4=t.data.msg}).catch(function(t){console.log(t)}):this.warning4="账号或密码不能为空"}},mounted:function(){},created:function(){}},c=r,u=(a("6cc3"),a("2877")),l=Object(u["a"])(c,i,o,!1,null,"ce2818dc",null),h=l.exports,d={name:"index",components:{JihuoMajor:h},data:function(){return{cdata:[{src:"/imgs/elective/search.png",title:" 根据专业选科目",content:"清华大学与中科院心理所研究成果，结合心理学和人因学，采取物理心理测评技术针对认知潜能、人格特征、兴趣、学习风格、心理健康进行综合测量，精准定位专业范围，帮助考生发现天赋，科学完成自我认知。",button:"开始测评",link:""},{src:"/imgs/elective/xuankemu.png",title:" 选科要求查询",content:"按大学查询：快速查询在本省招生普通高校招生专业选考科目要求<br/>按学科查询：根据选考科目与目标专业查看院校专业选考要求详情。",button:"开始测评",link:"/elective/xuekezhixuan/university"}],reportList:[],count:0,totalPage:"",pageSize:8,currentPage:1,isShowJihuoMajor:!1}},methods:{jump:function(t){this.$router.push(t)},getSubjectSelectProfessional:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=this;this.$ajax.post(this.G_uri+"/chooseSubject/balanceSelectSubject",{testType:2},{headers:{token:t}}).then(function(t){if(2e3==t.data.code){var a=t.data.data.code;1==a?e.isShowJihuoMajor=!0:3==a?e.$router.push("/elective/majorSelectedSubjects/xuankezhiyuan"):e.$router.push("/elective/majorSelectedSubjects/mubiaozhuanye")}else 1016==t.data.code?e.$router.push("/login"):2026==t.data.code&&e.$router.push("/perfectInformation")})},getChooseReportList:function(t){var e=window.sessionStorage.getItem("ymtxToken"),a=this,s=t,n=this.pageSize;this.$ajax.post(this.G_uri+"/chooseSubject/getChooseReportList",{pageNumber:s,pageSize:n},{headers:{token:e}}).then(function(t){var e=t.data.data;2e3==t.data.code?(a.reportList=e,a.totalPage=e.page.totalPage,a.count=e.page.count):console.log(t.msg)}).catch(function(t){console.log(t)})},goReport:function(t,e){1==t?this.$router.push({path:"/zhinengxuanke/xuankeReport",query:{batch:e}}):3==t&&this.$router.push({path:"/elective/majorSelectedSubjects/xuankeReport",query:{batch:e}})},currentChange:function(t){this.currentPage=t,this.getChooseReportList(t)}},created:function(){this.getChooseReportList()}},v=d,p=(a("1fe4"),Object(u["a"])(v,s,n,!1,null,"3ba07092",null));e["default"]=p.exports},"1fe4":function(t,e,a){"use strict";var s=a("8372"),n=a.n(s);n.a},"6cc3":function(t,e,a){"use strict";var s=a("1b09"),n=a.n(s);n.a},8372:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ceb84ace.35e9664a.js.map