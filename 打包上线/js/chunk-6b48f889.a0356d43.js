(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b48f889"],{"09c9":function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},i=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Loading"},[t("div",{staticClass:"tanchuang"},[t("div",{staticClass:"tubiao"})])])}],s={props:["data"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},u=s,c=(t("55df"),t("2877")),h=Object(c["a"])(u,n,i,!1,null,"46055762",null);h.options.__file="Loading2.vue";e["a"]=h.exports},"17a2":function(a,e,t){"use strict";(function(a){t("7f7f"),t("386d"),t("7514"),t("cadf"),t("551c"),t("097d");var n=t("09c9");e["a"]={name:"university",components:{Loading:n["a"]},data:function(){return{Provinces:[{names:"全部",value:"全部"},{names:"北京",value:"北京"},{names:"天津",value:"天津"},{names:"上海",value:"上海"},{names:"重庆",value:"重庆"},{names:"河北",value:"河北"},{names:"河南",value:"河南"},{names:"云南",value:"云南"},{names:"辽宁",value:"辽宁"},{names:"黑龙江",value:"黑龙江"},{names:"湖南",value:"湖南"},{names:"安徽",value:"安徽"},{names:"山东",value:"山东"},{names:"新疆",value:"新疆"},{names:"江苏",value:"江苏"},{names:"浙江",value:"浙江"},{names:"江西",value:"江西"},{names:"湖北",value:"湖北"},{names:"广西",value:"广西"},{names:"甘肃",value:"甘肃"},{names:"山西",value:"山西"},{names:"陕西",value:"陕西"},{names:"吉林",value:"吉林"},{names:"福建",value:"福建"},{names:"贵州",value:"贵州"},{names:"内蒙古",value:"内蒙古"},{names:"广东",value:"广东"},{names:"青海",value:"青海"},{names:"西藏",value:"西藏"},{names:"四川",value:"四川"},{names:"宁夏",value:"宁夏"},{names:"海南",value:"海南"}],daxueleibie:[{names:"全部",value:"全部"},{names:"综合类",value:"综合类"},{names:"理工类",value:"理工类"},{names:"师范类",value:"师范类"},{names:"农林类",value:"农林类"},{names:"政法类",value:"政法类"},{names:"医药类",value:"医药类"},{names:"财经类",value:"财经类"},{names:"民族类",value:"民族类"},{names:"语言类",value:"语言类"},{names:"艺术类",value:"艺术类"},{names:"体育类",value:"体育类"},{names:"军事类",value:"军事类"}],city:"",lastPage:!1,listShow:!1,searchNull:!1,cdataList:[],type:[],name:"",belongProvince:[],tag985:"",tag211:"",tagZhongdianxueke:"",tagTesezhuanye:"",tagBushenghejian:"",tagShuangyiliu:[],tagBaoyanzige:"",tagZizhuzhaosheng:"",tagZonghepingjia:"",tagZhuanxiangjihua:"",pageNumber:1,pageSize:"",loading:!1,number:0}},created:function(){this.city=window.localStorage.cityNow,-1==["北京","海南","山东","上海","天津","浙江"].indexOf(this.city)?this.typeSubject=1:this.typeSubject=2},methods:{typeChange:function(e,t){this.pageNumber=1,this.type=[],"全部"==e.target.value&&e.target.checked?a("#typeYuanxiao").find("input").prop("checked",!0):"全部"!=e.target.value||e.target.checked?a(e.target).parent().parent().find(".changeFirst").find("input").prop("checked",!1):a("#typeYuanxiao").find("input").prop("checked",!1),12==a("#typeYuanxiao .changeFirst").siblings().find("input:checked").length?a("#typeYuanxiao .changeFirst").find("input").prop("checked",!0):a("#typeYuanxiao").find("input:checked").each(function(a,e){this.type.push(e.value)}.bind(this)),this.search(1)},diquChange:function(e){this.pageNumber=1,this.belongProvince=[],"全部"==e.target.value&&e.target.checked?a("#area").find("input").prop("checked",!0):"全部"!=e.target.value||e.target.checked?a(e.target).parent().parent().find(".changeFirst").find("input").prop("checked",!1):a("#area").find("input").prop("checked",!1),31==a("#area .changeFirst").siblings().find("input:checked").length?a("#area .changeFirst").find("input").prop("checked",!0):a("#area").find("input:checked").each(function(a,e){this.belongProvince.push(e.value)}.bind(this)),this.search(1)},search:function(e){this.searchNull=!1,1==e&&(this.pageNumber=1,this.lastPage=!1,this.cdataList=[],a(".more").css({background:"",boxShadow:""})),this.lastPage||(this.loading=!0,this.$ajax.post(this.G_uri+"/chooseSubject/getInstitutionSubjectRequireList",{name:this.name,province:this.belongProvince,type:this.type,tag211:this.tag211?1:"",tag985:this.tag985?1:"",tagTesezhuanye:this.tagTesezhuanye?1:"",tagBushenghejian:this.tagBushenghejian?1:"",tagBaoyanzige:this.tagBaoyanzige?1:"",tagZhongdianxueke:this.tagZhongdianxueke?1:"",tagZizhuzhaosheng:this.tagZizhuzhaosheng?1:"",tagZonghepingjia:this.tagZonghepingjia?1:"",tagZhuanxiangjihua:this.tagZhuanxiangjihua?1:"",tagShuangyiliu:this.tagShuangyiliu,pageNumber:e,pageSize:10},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){this.listShow=!0,0==t.data.data.page.totalPage&&(this.searchNull=!0),t.data.data.page.totalPage<=this.pageNumber&&(this.lastPage=!0,a(".more").css({background:"#d9d9d9",boxShadow:"0 2px 1px #8f8d8d"})),a(t.data.data.list).each(function(a,e){this.cdataList[this.cdataList.length]=e}.bind(this)),1==e?(this.pageNumber=2,this.$nextTick(function(){a(".tables").eq(0).show()}),setTimeout(function(){a(".tables").eq(0).show()},0)):this.pageNumber++,this.loading=!1}.bind(this)))},yuanxiaoChange:function(e){this.tagShuangyiliu=[],this.tag985=!1,this.tag211=!1,this.tagZhongdianxueke=!1,this.tagTesezhuanye=!1,this.tagBushenghejian=!1,a(e.target).parent().find("input:checked").each(function(a,e){"一流大学建设高校A类"==e.value&&this.tagShuangyiliu.push(1),"一流大学建设高校B类"==e.value&&this.tagShuangyiliu.push(2),"一流学科建设高校"==e.value&&this.tagShuangyiliu.push(3),"985"==e.value&&(this.tag985=!0),"211"==e.value&&(this.tag211=!0),"xueke"==e.value&&(this.tagZhongdianxueke=!0),"zhuanye"==e.value&&(this.tagTesezhuanye=!0),"hejian"==e.value&&(this.tagBushenghejian=!0)}.bind(this)),this.search(1)},back:function(){window.scrollTo(0,0)},showMore:function(e){"block"==a(".tables").eq(e)[0].style.display?a(".tables").eq(e).hide():(a(".tables").hide(),a(".tables").eq(e).show())}},mounted:function(){a("#area input").each(function(e,t){t.value==this.city&&(a(t).prop("checked",!0),this.belongProvince=[this.city],this.search(1))}.bind(this))}}}).call(this,t("1157"))},4654:function(a,e,t){},"55df":function(a,e,t){"use strict";var n=t("4654"),i=t.n(n);i.a},8534:function(a,e,t){"use strict";var n=t("f52e"),i=t.n(n);i.a},ce75:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"university"}},[t("div",{staticClass:"universityTop"},[t("div",{staticClass:"searchBox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],attrs:{type:"text",placeholder:"搜索院校名称"},domProps:{value:a.name},on:{keyup:function(e){if(!("button"in e)&&a._k(e.keyCode,"enter",13,e.key,"Enter"))return null;a.search(1)},input:function(e){e.target.composing||(a.name=e.target.value)}}}),t("div",{staticClass:"search",on:{click:function(e){a.search(1)}}})]),t("ul",{staticClass:"list"},[t("li",[t("span",[a._v("大学类别 >")]),t("ul",{staticClass:"change",attrs:{id:"typeYuanxiao"}},a._l(a.daxueleibie,function(e,n){return t("li",{class:0==n&&"changeFirst"},[t("input",{attrs:{type:"checkbox"},domProps:{value:e.value},on:{change:function(e){a.typeChange(e)}}}),t("span",[a._v(a._s(e.names))])])}),0)]),t("div",{staticClass:"line"}),t("li",[t("span",[a._v("学校地区 >")]),t("ul",{staticClass:"change",attrs:{id:"area"}},a._l(a.Provinces,function(e,n){return t("li",{class:0==n&&"changeFirst"},[t("input",{attrs:{type:"checkbox"},domProps:{value:e.value},on:{change:function(e){a.diquChange(e)}}}),t("span",[a._v(a._s(e.names))])])}),0)]),t("div",{staticClass:"line"}),t("li",[t("span",[a._v("特色标签 >")]),t("ul",{staticClass:"change"},[t("li",[t("input",{staticClass:"texing",attrs:{type:"checkbox",value:"一流大学建设高校A类"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("一流大学建设高校A类")]),t("input",{staticClass:"texing",attrs:{type:"checkbox",value:"一流大学建设高校B类"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("一流大学建设高校B类")]),t("input",{staticClass:"texing",attrs:{type:"checkbox",value:"一流学科建设高校"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("一流学科建设高校")]),t("input",{attrs:{type:"checkbox",value:"985"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("985")]),t("input",{attrs:{type:"checkbox",value:"211"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("211")]),t("input",{attrs:{type:"checkbox",value:"xueke"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("国家重点学科")]),t("input",{attrs:{type:"checkbox",value:"zhuanye"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("国家特色专业")]),t("input",{attrs:{type:"checkbox",value:"hejian"},on:{click:a.yuanxiaoChange}}),t("span",[a._v("部省合建")])])])]),t("div",{staticClass:"line"})])]),a.listShow?t("ul",{staticClass:"universityBottom"},a._l(a.cdataList,function(e,n){return t("li",[t("div",{staticClass:"listTop"},[t("div",{staticClass:"logo",style:{backgroundImage:"url("+e.logo+")"}}),t("div",{staticClass:"content"},[t("p",[a._v(a._s(e.name)+"\n                        "),t("img",{attrs:{src:"/imgs/xingaokao/mubiaotansuo/yuanxiaoku/area.png",alt:""}}),t("span",[a._v(a._s(e.province))])]),t("p",{staticClass:"tag"},[1==e.tag211?t("span",[a._v(a._s(e.tag211Name))]):a._e(),1==e.tag985?t("span",[a._v(a._s(e.tag985Name))]):a._e(),1==e.tagBaoyanzige?t("span",[a._v(a._s(e.tagBaoyanzigeName))]):a._e(),1==e.tagBushenghejian?t("span",[a._v(a._s(e.tagBushenghejianName))]):a._e(),0!=e.tagShuangyiliu?t("span",[a._v(a._s(e.tagShuangyiliuName))]):a._e(),1==e.tagTesezhuanye?t("span",[a._v(a._s(e.tagTesezhuanyeName))]):a._e(),1==e.tagZhongdianxueke?t("span",[a._v(a._s(e.tagZhongdianxuekeName))]):a._e(),1==e.tagZhuanxiangjihua?t("span",[a._v(a._s(e.tagZhuanxiangjihuaName))]):a._e(),e.tagZizhuzhaosheng?t("span",[a._v(a._s(e.tagZizhuzhaoshengName))]):a._e(),1==e.tagZonghepingjia?t("span",[a._v(a._s(e.tagZonghepingjiaName))]):a._e()])]),t("div",{staticClass:"showMore",on:{click:function(e){a.showMore(n)}}},[a._v("\n                    查看学科数据\n                ")])]),t("div",{staticClass:"tables"},[t("table",[t("thead",[t("tr",[t("td",[a._v("专业名称/专业类")]),t("td",[a._v("招生层次")]),1==a.typeSubject?t("td",[a._v("首选科目要求")]):a._e(),1==a.typeSubject?t("td",[a._v("再选科目要求")]):a._e(),2==a.typeSubject?t("td",[a._v("科目要求")]):a._e()])]),t("tbody",a._l(e.chooseSubject,function(e){return t("tr",[t("td",{style:{color:e.descriptionJsonName?"#2c8ffc":""}},[a._v("\n                            "+a._s(e.subjectName)+"\n                            "),e.descriptionJsonName?t("div",{staticClass:"descript"},[a._v("\n                                "+a._s(e.descriptionJsonName.replace(/、/g," |  "))+"\n                            ")]):a._e()]),t("td",[a._v(a._s(e.typeName))]),2==a.typeSubject?t("td",[a._v(a._s(e.chooseCourseRequire))]):a._e(),1==a.typeSubject?t("td",[a._v(a._s(e.firstCourseRequire))]):a._e(),1==a.typeSubject?t("td",[a._v(a._s(e.secondCourseRequire))]):a._e()])}),0)])])])}),0):a._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:a.searchNull,expression:"searchNull"}],staticClass:"searchNull"},[a._v("没有满足条件的结果，换一个试试？")]),t("div",{staticClass:"operation"},[t("div",{staticClass:"more",on:{click:function(e){a.search(a.pageNumber)}}},[a._v("↓查看更多")]),t("div",{staticClass:"return",on:{click:a.back}},[a._v("↑返回顶部")])]),a.loading?t("div",{staticClass:"loading"},[t("loading")],1):a._e()])},i=[],s=t("17a2"),u=s["a"],c=(t("8534"),t("2877")),h=Object(c["a"])(u,n,i,!1,null,"2d7895a4",null);h.options.__file="university.vue";e["default"]=h.exports},f52e:function(a,e,t){}}]);
//# sourceMappingURL=chunk-6b48f889.a0356d43.js.map