(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a4dd44a"],{"09c9":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Loading"},[a("div",{staticClass:"tanchuang"},[a("div",{staticClass:"tubiao"})])])}],s={props:["data"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},u=s,c=(a("55df"),a("2877")),r=Object(c["a"])(u,n,i,!1,null,"46055762",null);t["a"]=r.exports},"16d3":function(e,t,a){},3567:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"subject"}},[a("div",{staticClass:"subjectTop"},[a("div",{staticClass:"title"},[e._v("\n            科目可报专业查询\n        ")]),a("div",{staticClass:"searchBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectName,expression:"subjectName"}],attrs:{type:"text",placeholder:"搜索你感兴趣的专业"},domProps:{value:e.subjectName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(1)},input:function(t){t.target.composing||(e.subjectName=t.target.value)}}}),a("div",{staticClass:"search",on:{click:function(t){return e.search(1)}}},[e._v("搜索")])]),a("ul",{staticClass:"list"},[a("li",[a("p",[e._v("学科要求")]),a("div",{staticClass:"subjectColor1"},[1==e.typeSubject?a("span",[e._v("首选")]):e._e(),e._v("科目:\n                ")]),2==e.typeSubject?a("ul",{staticClass:"change",attrs:{id:"threeThree"}},[a("li",{staticClass:"changeFirst",staticStyle:{display:"none"}},[a("input",{attrs:{type:"checkbox",value:"无选科要求"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("无选科要求")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"物理"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("物理")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"化学"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("化学")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"生物"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("生物")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"思想政治"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("思想政治")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"历史"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("历史")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"地理"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("地理")])]),"浙江"==e.city?a("li",[a("input",{attrs:{type:"checkbox",value:"技术"},on:{change:function(t){return e.xuekeChange1(t)}}}),a("span",[e._v("技术")])]):e._e()]):e._e(),1==e.typeSubject?a("ul",{staticClass:"change",attrs:{id:"threeOne"}},[a("li",{staticStyle:{display:"none"}},[a("input",{attrs:{type:"checkbox",value:"无选科要求"},on:{change:function(t){return e.xuekeChange2(t)}}}),a("span",[e._v("无选科要求")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"物理"},on:{change:function(t){return e.xuekeChange2(t)}}}),a("span",[e._v("物理")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"历史"},on:{change:function(t){return e.xuekeChange2(t)}}}),a("span",[e._v("历史")])])]):e._e(),a("br"),1==e.typeSubject?a("div",{staticClass:"subjectColor1",staticStyle:{color:"#F8811D"}},[e._v("\n                    再选科目:\n                ")]):e._e(),1==e.typeSubject?a("ul",{staticClass:"change",attrs:{id:"threeTwo"}},[a("li",{staticClass:"changeFirst",staticStyle:{display:"none"}},[a("input",{attrs:{type:"checkbox",value:"无选科要求"},on:{change:function(t){return e.xuekeChange3(t)}}}),a("span",[e._v("无选科要求")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"化学"},on:{change:function(t){return e.xuekeChange3(t)}}}),a("span",[e._v("化学")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"生物"},on:{change:function(t){return e.xuekeChange3(t)}}}),a("span",[e._v("生物")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"思想政治"},on:{change:function(t){return e.xuekeChange3(t)}}}),a("span",[e._v("思想政治")])]),a("li",[a("input",{attrs:{type:"checkbox",value:"地理"},on:{change:function(t){return e.xuekeChange3(t)}}}),a("span",[e._v("地理")])])]):e._e()]),a("div",{staticClass:"line"}),a("li",[a("p",[e._v("院校省份")]),a("ul",{staticClass:"change",attrs:{id:"area"}},e._l(e.Provinces,function(t,n){return a("li",{class:0==n&&"changeFirst"},[a("input",{attrs:{type:"checkbox"},domProps:{value:t.value},on:{change:function(t){return e.diquChange(t)}}}),a("span",[e._v(e._s(t.names))])])}),0)]),a("div",{staticClass:"line"}),a("li",[a("p",[e._v("院校特性")]),a("ul",{staticClass:"change"},[a("li",[a("input",{staticClass:"texing",attrs:{type:"checkbox",value:"一流大学建设高校A类"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("一流大学建设高校A类")]),a("input",{staticClass:"texing",attrs:{type:"checkbox",value:"一流大学建设高校B类"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("一流大学建设高校B类")]),a("input",{staticClass:"texing",attrs:{type:"checkbox",value:"一流学科建设高校"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("一流学科建设高校")]),a("input",{attrs:{type:"checkbox",value:"985"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("985")]),a("input",{attrs:{type:"checkbox",value:"211"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("211")]),a("input",{attrs:{type:"checkbox",value:"xueke"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("国家重点学科")]),a("input",{attrs:{type:"checkbox",value:"zhuanye"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("国家特色专业")]),a("input",{attrs:{type:"checkbox",value:"hejian"},on:{click:e.yuanxiaoChange}}),a("span",[e._v("部省合建")])])])])])]),e.listShow?a("div",{staticClass:"subjectBottom"},[a("div",{staticClass:"top"},[a("span",[e._v("考试省份:"+e._s(e.city))]),a("span",[e._v("\n                可报考"),a("i",[e._v(e._s(e.universityIdCount)+"/"+e._s(e.cdata.universityIdTotal))]),e._v("所大学\n                可报考"),a("i",[e._v(e._s(e.subjectIdCount)+"/"+e._s(e.cdata.subjectIdTotal))]),e._v("个专业（包含专业类、专业、专业方向）\n            ")])]),a("div",{staticClass:"bottom"},[a("table",[a("thead",[a("tr",[a("td",[e._v("学校")]),a("td",[e._v("\n                        专业名称/专业类\n                    ")]),a("td",[e._v("招生层次")]),1==e.typeSubject?a("td",[e._v("首选科目要求")]):e._e(),1==e.typeSubject?a("td",[e._v("再选科目要求")]):e._e(),2==e.typeSubject?a("td",[e._v("科目要求")]):e._e()])]),a("tbody",e._l(e.cdataList,function(t){return a("tr",[a("td",[e._v(e._s(t.universityName))]),a("td",{style:{color:t.descriptionJsonName?"#2c8ffc":""}},[e._v("\n                        "+e._s(t.subjectName)+"\n                        "),t.descriptionJsonName?a("div",{staticClass:"descript"},[e._v("\n                            "+e._s(t.descriptionJsonName.replace(/、/g," |  "))+"\n                        ")]):e._e()]),a("td",[e._v(e._s(t.typeName))]),2==e.typeSubject?a("td",[e._v(e._s(t.chooseCourseRequire))]):e._e(),1==e.typeSubject?a("td",[e._v(e._s(t.firstCourseRequire))]):e._e(),1==e.typeSubject?a("td",[e._v(e._s(t.secondCourseRequire))]):e._e()])}),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchNull,expression:"searchNull"}],staticClass:"searchNull"},[e._v("没有满足条件的结果，换一个试试？")]),a("div",{staticClass:"operation"},[a("div",{staticClass:"more",on:{click:function(t){return e.search(e.pageNumber)}}},[e._v("↓查看更多")]),a("div",{staticClass:"return",on:{click:e.back}},[e._v("↑返回顶部")])])]),e.loading?a("div",{staticClass:"loading"},[a("loading")],1):e._e()]):e._e()])},i=[],s=a("52da"),u=s["a"],c=(a("a708"),a("2877")),r=Object(c["a"])(u,n,i,!1,null,"b5dd37de",null);t["default"]=r.exports},"386d":function(e,t,a){"use strict";var n=a("cb7c"),i=a("83a1"),s=a("5f1b");a("214f")("search",1,function(e,t,a,u){return[function(a){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=u(a,e,this);if(t.done)return t.value;var c=n(e),r=String(this),h=c.lastIndex;i(h,0)||(c.lastIndex=0);var o=s(c,r);return i(c.lastIndex,h)||(c.lastIndex=h),null===o?-1:o.index}]})},"52da":function(e,t,a){"use strict";(function(e){a("386d"),a("7514");var n=a("09c9");t["a"]={name:"subject",components:{Loading:n["a"]},data:function(){return{Provinces:[{names:"全部",value:"全部"},{names:"北京",value:"北京"},{names:"天津",value:"天津"},{names:"上海",value:"上海"},{names:"重庆",value:"重庆"},{names:"河北",value:"河北"},{names:"河南",value:"河南"},{names:"云南",value:"云南"},{names:"辽宁",value:"辽宁"},{names:"黑龙江",value:"黑龙江"},{names:"湖南",value:"湖南"},{names:"安徽",value:"安徽"},{names:"山东",value:"山东"},{names:"新疆",value:"新疆"},{names:"江苏",value:"江苏"},{names:"浙江",value:"浙江"},{names:"江西",value:"江西"},{names:"湖北",value:"湖北"},{names:"广西",value:"广西"},{names:"甘肃",value:"甘肃"},{names:"山西",value:"山西"},{names:"陕西",value:"陕西"},{names:"吉林",value:"吉林"},{names:"福建",value:"福建"},{names:"贵州",value:"贵州"},{names:"内蒙古",value:"内蒙古"},{names:"广东",value:"广东"},{names:"青海",value:"青海"},{names:"西藏",value:"西藏"},{names:"四川",value:"四川"},{names:"宁夏",value:"宁夏"},{names:"海南",value:"海南"}],city:"",listShow:!1,cdataList:[],lastPage:!1,searchNull:!1,universityIdCount:"",cdata:"",subjectIdCount:"",type:1,typeSubject:"",subjectName:"",chooseCourseRequire:[],belongProvince:[],tag985:"",tag211:"",tagZhongdianxueke:"",tagTesezhuanye:"",tagBushenghejian:"",tagShuangyiliu:[],tagBaoyanzige:"",tagZizhuzhaosheng:"",tagZonghepingjia:"",tagZhuanxiangjihua:"",firstCourseRequire:"",secondCourseRequire:[],pageNumber:1,pageSize:10,loading:!1}},created:function(){this.city=this.$store.state.user.province,-1==["北京","海南","山东","上海","天津","浙江"].indexOf(this.city)?this.typeSubject=1:this.typeSubject=2},methods:{xuekeChange1:function(t){var a=this,n=!0;this.pageNumber=1,"无选科要求"==t.target.value?e(t.target).parent().siblings().find("input").prop("checked",!1):e(t.target).parent().parent().find(".changeFirst").find("input").prop("checked",!1),e("#threeThree .changeFirst").siblings().find("input:checked").length>3&&(e(t.target).prop("checked",!1),a.chooseCourseRequire=[],e("#threeThree").find("input:checked").each(function(e,t){a.chooseCourseRequire.push(t.value),n=!1})),n&&(this.chooseCourseRequire=[],e("#threeThree").find("input:checked").each(function(e,t){this.chooseCourseRequire.push(t.value)}.bind(this)),this.search(1))},xuekeChange2:function(t){this.pageNumber=1,t.target.checked?(e(t.target).parent().siblings().find("input").prop("checked",!1),this.firstCourseRequire=t.target.value):this.firstCourseRequire="",this.search(1)},xuekeChange3:function(t){var a=this,n=!0;this.pageNumber=1,"无选科要求"==t.target.value?e(t.target).parent().siblings().find("input").prop("checked",!1):e(t.target).parent().parent().find(".changeFirst").find("input").prop("checked",!1),e("#threeTwo .changeFirst").siblings().find("input:checked").length>2&&(e(t.target).prop("checked",!1),a.secondCourseRequire=[],e("#threeTwo").find("input:checked").each(function(e,t){a.secondCourseRequire.push(t.value)}),n=!1),n&&(this.secondCourseRequire=[],e("#threeTwo").find("input:checked").each(function(e,t){this.secondCourseRequire.push(t.value)}.bind(this)),this.search(1))},diquChange:function(t){this.pageNumber=1,this.belongProvince=[],"全部"==t.target.value&&t.target.checked?e("#area").find("input").prop("checked",!0):"全部"!=t.target.value||t.target.checked?e(t.target).parent().parent().find(".changeFirst").find("input").prop("checked",!1):e("#area").find("input").prop("checked",!1),31==e("#area .changeFirst").siblings().find("input:checked").length?e("#area .changeFirst").find("input").prop("checked",!0):e("#area").find("input:checked").each(function(e,t){this.belongProvince.push(t.value)}.bind(this)),this.search(1)},search:function(t){this.searchNull=!1,1==t&&(this.pageNumber=1,this.lastPage=!1,this.cdataList=[],e(".more").css({background:"",boxShadow:""})),this.lastPage||(this.loading=!0,this.$ajax.post(this.G_uri+"/chooseSubject/getSubjectCanReportProfessionList",{subjectName:this.subjectName,chooseCourseRequire:this.chooseCourseRequire,province:this.belongProvince,type:this.type,tag211:this.tag211?1:"",tag985:this.tag985?1:"",tagTesezhuanye:this.tagTesezhuanye?1:"",tagBushenghejian:this.tagBushenghejian?1:"",tagBaoyanzige:this.tagBaoyanzige?1:"",tagZhongdianxueke:this.tagZhongdianxueke?1:"",tagZizhuzhaosheng:this.tagZizhuzhaosheng?1:"",tagZonghepingjia:this.tagZonghepingjia?1:"",tagZhuanxiangjihua:this.tagZhuanxiangjihua?1:"",tagShuangyiliu:this.tagShuangyiliu,firstCourseRequire:this.firstCourseRequire,secondCourseRequire:this.secondCourseRequire,pageNumber:t,pageSize:this.pageSize},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(a){this.listShow=!0,0==a.data.data.subjectIdCount&&(this.searchNull=!0),this.cdata=a.data.data,this.universityIdCount=a.data.data.universityIdCount,this.subjectIdCount=a.data.data.subjectIdCount,0!==a.data.data.universityIdCount?(a.data.data.data.page.totalPage<=this.pageNumber&&(this.lastPage=!0,e(".more").css({background:"#d9d9d9",boxShadow:"0 2px 1px #8f8d8d"})),1==t?(this.cdataList=a.data.data.data.list,this.pageNumber=2):(this.pageNumber++,e(a.data.data.data.list).each(function(e,t){this.cdataList[this.cdataList.length]=t}.bind(this)))):(this.lastPage=!0,e(".more").css({background:"#d9d9d9",boxShadow:"0 2px 1px #8f8d8d"})),this.loading=!1}.bind(this)))},yuanxiaoChange:function(t){this.tagShuangyiliu=[],this.tag985=!1,this.tag211=!1,this.tagZhongdianxueke=!1,this.tagTesezhuanye=!1,this.tagBushenghejian=!1,e(t.target).parent().find("input:checked").each(function(e,t){"一流大学建设高校A类"==t.value&&this.tagShuangyiliu.push(1),"一流大学建设高校B类"==t.value&&this.tagShuangyiliu.push(2),"一流学科建设高校"==t.value&&this.tagShuangyiliu.push(3),"985"==t.value&&(this.tag985=!0),"211"==t.value&&(this.tag211=!0),"xueke"==t.value&&(this.tagZhongdianxueke=!0),"zhuanye"==t.value&&(this.tagTesezhuanye=!0),"hejian"==t.value&&(this.tagBushenghejian=!0)}.bind(this)),this.search(1)},back:function(){window.scrollTo(0,0)}},mounted:function(){e("#area input").each(function(t,a){a.value==this.city&&(e(a).prop("checked",!0),this.belongProvince=[this.city],this.search(1))}.bind(this))}}}).call(this,a("1157"))},"55df":function(e,t,a){"use strict";var n=a("5c61"),i=a.n(n);i.a},"5c61":function(e,t,a){},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},a708:function(e,t,a){"use strict";var n=a("16d3"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-9a4dd44a.c992e6c0.js.map