(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e881b33"],{"04a9":function(t,e,i){},1797:function(t,e,i){"use strict";var s=i("7f18"),n=i.n(s);n.a},"28a5":function(t,e,i){"use strict";var s=i("aae3"),n=i("cb7c"),a=i("ebd6"),o=i("0390"),c=i("9def"),r=i("5f1b"),u=i("520a"),l=i("79e5"),h=Math.min,d=[].push,g="split",p="length",f="lastIndex",v=4294967295,m=!l(function(){RegExp(v,"y")});i("214f")("split",2,function(t,e,i,l){var b;return b="c"=="abbc"[g](/(b)*/)[1]||4!="test"[g](/(?:)/,-1)[p]||2!="ab"[g](/(?:ab)*/)[p]||4!="."[g](/(.?)(.?)/)[p]||"."[g](/()()/)[p]>1||""[g](/.?/)[p]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!s(t))return i.call(n,t,e);var a,o,c,r=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=void 0===e?v:e>>>0,m=new RegExp(t.source,l+"g");while(a=u.call(m,n)){if(o=m[f],o>h&&(r.push(n.slice(h,a.index)),a[p]>1&&a.index<n[p]&&d.apply(r,a.slice(1)),c=a[0][p],h=o,r[p]>=g))break;m[f]===a.index&&m[f]++}return h===n[p]?!c&&m.test("")||r.push(""):r.push(n.slice(h)),r[p]>g?r.slice(0,g):r}:"0"[g](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,s){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n,s):b.call(String(n),i,s)},function(t,e){var s=l(b,t,this,e,b!==i);if(s.done)return s.value;var u=n(t),d=String(this),g=a(u,RegExp),p=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),_=new g(m?u:"^(?:"+u.source+")",f),S=void 0===e?v:e>>>0;if(0===S)return[];if(0===d.length)return null===r(_,d)?[d]:[];var x=0,k=0,C=[];while(k<d.length){_.lastIndex=m?k:0;var T,y=r(_,m?d:d.slice(k));if(null===y||(T=h(c(_.lastIndex+(m?0:k)),d.length))===x)k=o(d,k,p);else{if(C.push(d.slice(x,k)),C.length===S)return C;for(var j=1;j<=y.length-1;j++)if(C.push(y[j]),C.length===S)return C;k=x=T}}return C.push(d.slice(x)),C}]})},"3b2b":function(t,e,i){var s=i("7726"),n=i("5dbc"),a=i("86cc").f,o=i("9093").f,c=i("aae3"),r=i("0bfb"),u=s.RegExp,l=u,h=u.prototype,d=/a/g,g=/a/g,p=new u(d)!==d;if(i("9e1e")&&(!p||i("79e5")(function(){return g[i("2b4c")("match")]=!1,u(d)!=d||u(g)==g||"/a/i"!=u(d,"i")}))){u=function(t,e){var i=this instanceof u,s=c(t),a=void 0===e;return!i&&s&&t.constructor===u&&a?t:n(p?new l(s&&!a?t.source:t,e):l((s=t instanceof u)?t.source:t,s&&a?r.call(t):e),i?this:h,u)};for(var f=function(t){t in u||a(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=o(l),m=0;v.length>m;)f(v[m++]);h.constructor=u,u.prototype=h,i("2aba")(s,"RegExp",u)}i("7a56")("RegExp")},"643a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xuanKeZhiYuan"},[i("StepBar",{attrs:{step:"4"}}),i("div",{staticClass:"inner"},[t._m(0),i("div",{staticClass:"xuankejianyiList",attrs:{id:"xuankejianyiList"}},[i("p",{staticClass:"xuankejianyi_title"},[t._v("选科建议")]),t._m(1),t._l(t.xkjyList,function(e,s){return i("div",{key:s,staticClass:"jianyiBoxs"},[i("div",{staticClass:"no0"},[t.TargetDiscipline.length>=0&&t.TargetDiscipline.length<1&&t.TargetDiscipline.every(function(t){return t!=e.subjectName})?i("span",{staticClass:"checkBox",on:{click:function(i){return t.addTargetDiscipline(e.subjectName,s)}}}):t.TargetDiscipline.some(function(t){return t==e.subjectName})?i("span",{staticClass:"checkeds",on:{click:function(i){return t.removeTargetDiscipline(e.subjectName,s,e.isGoal)}}}):1==t.TargetDiscipline.length?i("span",{staticClass:"uncheckeds"}):t._e()]),i("div",{staticClass:"no1"},[t._v("第"+t._s(s+1)+"名")]),i("div",{staticClass:"no2"},[t._v(t._s(e.subjectName))]),i("div",{staticClass:"no3"},[t._v(t._s(e.weight))]),i("div",{staticClass:"no4"},[t._v(t._s(e.subjectCoverage)+"%")]),i("div",{staticClass:"no5"},[t._v(t._s(e.universityCoverage)+"%")]),i("div",{staticClass:"no6"},[t._v(t._s(e.targetSubjectCoverage)+"%")])])})],2),i("div",{staticClass:"turning"},[i("div",{staticClass:"save",on:{click:t.goTargetDiscipline}},[t._v("生成报告")])])]),t.isShowTips?i("div",{staticClass:"tipsMark"},[i("p",{domProps:{innerHTML:t._s(t.tishi)}}),i("p")]):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step"},[i("p",{staticClass:"step_detail"},[i("span",{staticClass:"tishiyu"},[t._v("提示：")]),t._v("请根据选科建议的分析指标，选定“1”个科目组合，然后点击“生成报告”。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jianyi-title"},[i("div",{staticClass:"no0"},[t._v("设为目标学科")]),i("div",{staticClass:"no1"},[t._v("排名")]),i("div",{staticClass:"no2"},[t._v("学科")]),i("div",{staticClass:"no3"},[t._v("加权结果")]),i("div",{staticClass:"no4"},[t._v("可报考专业覆盖率")]),i("div",{staticClass:"no5"},[t._v("可报考院校覆盖率")]),i("div",{staticClass:"no6"},[t._v("目标专业覆盖率")])])}],a=(i("3b2b"),i("28a5"),i("ac6a"),i("7b32")),o=(i("313e"),{components:{StepBar:a["a"]},props:{step:{type:String,default:"4"},className:{type:String,default:"yourClassName"},id:{type:String,default:"yourID"},width:{default:"1160px"},height:{default:"500px"}},data:function(){return{province:"",subjectName:[],isClick:!0,state:1,page:"",phdData:[],zyList:null,xkjyList:[],TargetDiscipline:[],isShowTips:!1,tishi:"",htmlTitle:"xuankezhiyuan.pdf"}},methods:{pinghengdanData:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=this;this.$ajax.post(this.G_uri+"/chooseSubject/getBalanceSheetList",{token:t,source:3},{headers:{token:t}}).then(function(t){2e3==t.data.code?e.phdData=t.data.data:1016==t.data.code&&e.$router.push("/login")}).catch(function(t){console.log(t)})},zhuaneylistData:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=this;this.$ajax.post(this.G_uri+"/chooseSubject/getTargetSubjectList",{token:t,source:3},{headers:{token:t}}).then(function(t){2e3==t.data.code?e.zyList=t.data.data:1016==t.data.code&&e.$router.push("/login")}).catch(function(t){console.log(t)})},xuankejianyiList:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=JSON.parse(window.sessionStorage.getItem("subjectSets2")),i=this;this.$ajax.post(this.G_uri+"/chooseSubject/getSelectionAdviceList",{source:3,subjectName:e},{headers:{token:t}}).then(function(t){console.log(t),2e3==t.data.code?(i.xkjyList=t.data.data.report,t.data.data.report.forEach(function(t,e){1==t.isGoal&&i.TargetDiscipline.push(t.subjectName)})):1016==t.data.code&&i.$router.push("/login")}).catch(function(t){console.log(t)})},saveGoal:function(t,e,i){var s=t.split("+"),n=window.sessionStorage.getItem("ymtxToken"),a=this;this.$ajax.post(this.G_uri+"/chooseSubject/storeSelectionAdviceList",{token:n,subject:s,goalType:e,batch:1},{headers:{token:n}}).then(function(t){console.log(t),2e3==t.data.code?a.xkjyList[i].isGoal=e:1016==t.data.code&&a.$router.push("/login")}).catch(function(t){console.log(t)})},getData:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=this;this.$ajax.post(this.G_uri+"/login/getUserInfo",{},{headers:{token:t}}).then(function(t){2e3==t.data.code?(e.province=t.data.data.province,e.subjectName=JSON.parse(window.sessionStorage.getItem("subjectSets2")),console.log(e.subjectName)):1016==t.data.code&&e.$router.push("/login")}).catch(function(t){console.log(t)})},addTargetDiscipline:function(t,e){this.TargetDiscipline.push(t)},removeTargetDiscipline:function(t,e,i){1!=i&&(this.TargetDiscipline=this.TargetDiscipline.filter(function(e,i,s){return e!=t}))},goTargetDiscipline:function(){if(this.isClick){this.isClick=!1;var t=this;if(0==this.TargetDiscipline.length)return this.tishi="目标学科必须勾选1个!<br/>请勾选后再次点击",this.isShowTips=!0,this.isClick=!0,void setTimeout(function(){t.isShowTips=!1},2e3);var e=window.sessionStorage.getItem("ymtxToken"),i=this.TargetDiscipline;this.$ajax.post(this.G_uri+"/chooseSubject/storeBalanceSelectionAdviceList",{token:e,subject:i,source:3},{headers:{token:e}}).then(function(e){2e3==e.data.code?(t.$router.push("/elective/majorSelectedSubjects/xuankeReport"),t.xkjyList[indexKey].isGoal=goalType):2520==e.data.code&&(t.tishi=e.data.msg,t.isShowTips=!0,setTimeout(function(){t.isShowTips=!1},2e3)),t.isClick=!0}).catch(function(t){console.log(t)})}},checkProvince:function(t){if("技术"==t)return"浙江"==this.province&&!this.subjectName.some(function(e){return t==e});if("物理"==t){var e=!1,i=new RegExp(this.province);return e=i.test("北京、海南、山东、上海、天津、浙江")?!this.subjectName.some(function(t){return"物理"==t}):!this.subjectName.some(function(t){return"物理"==t||"历史"==t}),e}if("历史"==t){var s=!1,n=new RegExp(this.province);return s=n.test("北京、海南、山东、上海、天津、浙江")?!this.subjectName.some(function(t){return"历史"==t}):!this.subjectName.some(function(t){return"物理"==t||"历史"==t}),s}return!this.subjectName.some(function(e){return t==e})}},created:function(){this.pinghengdanData(),this.zhuaneylistData(),this.xuankejianyiList(),this.getData(),window.scrollTo(0,0)},mounted:function(){}}),c=o,r=(i("1797"),i("2877")),u=Object(r["a"])(c,s,n,!1,null,"62ad8db8",null);e["default"]=u.exports},"7b32":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step_bar"},[i("div",{staticClass:"content"},[i("ul",{staticClass:"title_box"},t._l(t.step_bar,function(e,s){return i("li",{key:s},[i("p",{class:s<t.step?"title":""},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")])])}),0),i("ul",{staticClass:"number_box"},t._l(t.step_bar,function(e,s){return i("li",{key:s},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:"/imgs/elective/common/"+(s<t.step?e.overImgUrl:e.imgUrl),alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:s<4,expression:"index < 4"}],class:s<t.step-1?"green_line":"white_line"})])])}),0)])])},n=[],a={props:["step"],data:function(){return{step_bar:[{title:"设置目标专业",imgUrl:"icon_white1.png",overImgUrl:"icon_green1.png"},{title:"查看目标专业科目要求",imgUrl:"icon_white2.png",overImgUrl:"icon_green2.png"},{title:"填写决策平衡单",imgUrl:"icon_white3.png",overImgUrl:"icon_green3.png"},{title:"确定选考科目组合",imgUrl:"icon_white4.png",overImgUrl:"icon_green4.png"},{title:"生成报告",imgUrl:"icon_white5.png",overImgUrl:"icon_green5.png"}]}},methods:{},watch:{},created:function(){},mounted:function(){}},o=a,c=(i("d58a"),i("2877")),r=Object(c["a"])(o,s,n,!1,null,"78b3a570",null);e["a"]=r.exports},"7f18":function(t,e,i){},aae3:function(t,e,i){var s=i("d3f4"),n=i("2d95"),a=i("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==n(t))}},ac6a:function(t,e,i){for(var s=i("cadf"),n=i("0d58"),a=i("2aba"),o=i("7726"),c=i("32e9"),r=i("84f2"),u=i("2b4c"),l=u("iterator"),h=u("toStringTag"),d=r.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(g),f=0;f<p.length;f++){var v,m=p[f],b=g[m],_=o[m],S=_&&_.prototype;if(S&&(S[l]||c(S,l,d),S[h]||c(S,h,m),r[m]=d,b))for(v in s)S[v]||a(S,v,s[v],!0)}},d58a:function(t,e,i){"use strict";var s=i("04a9"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-7e881b33.a0512655.js.map