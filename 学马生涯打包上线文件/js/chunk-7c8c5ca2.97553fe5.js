(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c8c5ca2"],{3891:function(a,t,e){},"3a5e":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"Loading"},[e("div",{staticClass:"tanchuang"},[e("div",{staticClass:"tubiao"})])])}],n={props:["data"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},o=n,c=(e("4ff2"),e("2877")),r=Object(c["a"])(o,s,i,!1,null,"16438a3c",null);r.options.__file="Loading.vue";t["a"]=r.exports},"4ff2":function(a,t,e){"use strict";var s=e("3891"),i=e.n(s);i.a},b1b3:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"zhiyeku",attrs:{id:"zhiyeku"}},[e("div",{staticClass:"searchBox"},[e("div",{staticClass:"top"},[e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:"搜索你感兴趣的职业"},domProps:{value:a.searchValue},on:{input:function(t){t.target.composing||(a.searchValue=t.target.value)}}}),e("span",{on:{click:a.search}},[e("img",{attrs:{src:"/imgs/zizhuxuanba/zizhaoluquku/search.png",alt:""}})])]),a._m(0)])]),e("div",{staticClass:"inner"},[e("div",{staticClass:"top-navs"},[e("div",{staticClass:"zhiyefenlei"},[e("div",{staticClass:"left"},[a._v("行业类别 ")]),e("div",{staticClass:"right"},a._l(a.zhiyefenlei,function(t,s){return e("span",{class:t.names==a.radio1?"active":"",on:{click:function(e){a.goToMajorScroll(t.names)}}},[a._v(a._s(t.names))])}),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isShowSearchData,expression:"!isShowSearchData"}],staticClass:"inner-content"},[e("div",{staticClass:"jobs"},[e("ul",{staticClass:"joblis"},a._l(a.zhiyeData,function(t,s){return e("li",{key:s,on:{click:function(e){a.go(t.id)}}},[e("div",{staticClass:"title"},[e("span",[a._v(a._s(t.name))])]),e("p",{staticClass:"xiangqing"},[a._v(a._s(t.introduction))])])}),0)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:a.isShowSearchData,expression:"isShowSearchData"}],staticClass:"searchData_box"},a._l(a.searchData,function(t,s,i){return e("div",{staticClass:"inner-content"},[e("div",{staticClass:"jobs"},[e("div",{staticClass:"big_title"},[a._v(a._s(s))]),a._l(t,function(t,s){return e("ul",{staticClass:"joblis"},a._l(a.zhiyeData,function(t,s){return e("li",{key:s,on:{click:function(e){a.go(t.id)}}},[e("div",{staticClass:"title"},[e("span",[a._v(a._s(t.name))])]),e("p",{staticClass:"xiangqing"},[a._v(a._s(t.introduction))])])}),0)})],2)])}),0)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:a.isShowLoading,expression:"isShowLoading"}],staticClass:"loading"},[e("Loading")],1)])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"right_img_box"},[e("img",{attrs:{src:"/imgs/xingaokao/mubiaotansuo/zhiyeku/zhiye_right.png",alt:""}})])}],n=(e("cadf"),e("551c"),e("097d"),e("3a5e")),o={components:{Loading:n["a"]},data:function(){return{isShowLoading:!0,isShowSearchData:!1,radio1:"互联网/IT",cdata:[],zhiyeData:[],cdata2:[],searchValue:"",zhiyefenlei:[{names:"互联网/IT",value:"互联网/IT"},{names:"交通/运输/物流",value:"交通/运输/物流"},{names:"农/林/牧/渔/水利",value:"农/林/牧/渔/水利"},{names:"制造业",value:"制造业"},{names:"咨询/专业服务",value:"咨询/专业服务"},{names:"广告/公关/市场",value:"广告/公关/市场"},{names:"房地产/建筑",value:"房地产/建筑"},{names:"政府/非盈利机构",value:"政府/非盈利机构"},{names:"教育/培训/科研",value:"教育/培训/科研"},{names:"文化/传媒/出版/印刷",value:"文化/传媒/出版/印刷"},{names:"服务/中介/物业",value:"服务/中介/物业"},{names:"消费品",value:"消费品"},{names:"生物/医药/保健",value:"生物/医药/保健"},{names:"电子/微电子",value:"电子/微电子"},{names:"电气/电力",value:"电气/电力"},{names:"石油/化工/能源",value:"石油/化工/能源"},{names:"艺术/休闲/运动",value:"艺术/休闲/运动"},{names:"通用类",value:"通用类"},{names:"通讯",value:"通讯"},{names:"金融/银行",value:"金融/银行"},{names:"其他",value:"其他"}]}},methods:{search:function(){var a=this.searchValue,t=window.sessionStorage.getItem("ymtxToken"),e=this;a&&this.$ajax.post(this.G_uri+"/target/getOccupationList",{name:a},{headers:{token:t}}).then(function(a){2e3==a.data.code?(e.searchData=a.data.data,e.isShowSearchData=!0):1016==a.data.code&&e.$router.push("/login")}).catch(function(a){console.log(a)})},dataUpdate:function(){var a=this,t=window.sessionStorage.getItem("ymtxToken"),e=this.radio1;this.$ajax.post(this.G_uri+"/target/getOccupationCategoryList",{industryCategory:e},{headers:{token:t}}).then(function(t){2e3==t.data.code&&(a.isShowLoading=!1,a.cdata=t.data.data,a.zhiyeData=t.data.data["互联网/IT"])}).catch(function(a){console.log(a)})},go:function(a){var t=this.$router.resolve({path:"/zhiyexiangqing",name:"zhiyexiangqing",query:{id:a}}),e=t.href;window.open(e,"_blank")},goToMajorScroll:function(a){this.radio1=a,this.zhiyeData=this.cdata[a],this.searchValue="",this.isShowSearchData=!1}},watch:{},created:function(){this.dataUpdate()}},c=o,r=(e("c521"),e("2877")),l=Object(r["a"])(c,s,i,!1,null,"460fa349",null);l.options.__file="zhiyeku.vue";t["default"]=l.exports},c521:function(a,t,e){"use strict";var s=e("e7d3"),i=e.n(s);i.a},e7d3:function(a,t,e){}}]);
//# sourceMappingURL=chunk-7c8c5ca2.97553fe5.js.map