(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14243050"],{"54aa":function(t,e,n){},7504:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"elective"},[n("div",{staticClass:"myReports"},[t._m(0),n("ul",{staticClass:"electiveBox"},[n("li",[t._m(1),n("div",{staticClass:"right"},[n("div",{staticClass:"title"},[t._v("\n                        成长档案\n                    ")]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button",style:{margin:t.isReport?"":"40px 20px"},on:{click:t.createReport}},[t._v("\n                            生成\n                        ")]),t.isReport?n("div",{staticClass:"button",on:{click:function(e){return t.goReport(t.reportId)}}},[t._v("\n                            查看\n                        ")]):t._e()])])])]),t._m(2),n("table",[t._m(3),n("tbody",t._l(t.reportList,function(e,a){return n("tr",{key:a},[n("td",[t._v("成长档案")]),n("td",[t._v(t._s(e.createdAt))]),n("td",[n("span",{on:{click:function(n){return t.goReport(e.id)}}},[t._v("查看")])])])}),0)]),0==t.reportList.length?n("div",{staticClass:"noneContent"}):t._e(),n("div",{staticClass:"page_box"},[n("span",[t._v("共"+t._s(t.count)+"条")]),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.count},on:{"current-change":t.currentChange}})],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("img",{attrs:{src:"imgs/careerArchives/icon_biaoti.png",alt:""}}),t._v("\n            成长档案\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("img",{attrs:{src:"/imgs/careerManagement/academicPlanningReport/icon_head.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("img",{attrs:{src:"imgs/careerArchives/icon_biaoti.png",alt:""}}),t._v("\n            历史记录\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("名称")]),n("td",[t._v("日期")]),n("td",[t._v("查看")])])])}],r={name:"index",data:function(){return{reportList:[],count:0,totalPage:"",pageSize:7,currentPage:1,isReport:!1,reportId:0}},methods:{jump:function(t){this.$router.push(t)},goReport:function(t){var e=this.$router.resolve({path:"/careerManagement/growthArchive",name:"成长档案",query:{id:t}}),n=e.href;window.open(n,"_blank")},currentChange:function(t){this.currentPage=t,this.history(t)},isNo:function(){var t=this;this.$ajax.post(this.G_uri+"/careerGrowthReport/getLastReport",{},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(e){if(2e3==e.data.code){var n=e.data.data;0!=n.id&&(t.isReport=!0),t.reportId=n.id}}).catch(function(t){console.log(error)})},createReport:function(){var t=this;this.$ajax.post(this.G_uri+"/careerGrowthReport/storeReport",{},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(e){2e3==e.data.code&&(t.isNo(),t.history())}).catch(function(t){console.log(t)})},history:function(t){var e=this,n=t,a=this.pageSize;this.$ajax.post(this.G_uri+"/careerGrowthReport/getReportList",{pageNumber:n,pageSize:a},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){if(2e3==t.data.code){var n=t.data.data;0!=n.list.length&&(e.reportList=n.list),e.totalPage=n.page.totalPage,e.count=n.page.count}}).catch(function(t){console.log(t)})}},created:function(){this.isNo(),this.history()}},o=r,s=(n("c878"),n("2877")),c=Object(s["a"])(o,a,i,!1,null,"4baf38ac",null);e["default"]=c.exports},c878:function(t,e,n){"use strict";var a=n("54aa"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-14243050.ab3a2dfa.js.map