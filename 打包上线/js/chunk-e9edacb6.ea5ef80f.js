(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9edacb6"],{"0350":function(e,t,s){},3891:function(e,t,s){},"3a5e":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Loading"},[s("div",{staticClass:"tanchuang"},[s("div",{staticClass:"tubiao"})])])}],n={props:["data"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},o=n,c=(s("4ff2"),s("2877")),r=Object(c["a"])(o,i,a,!1,null,"16438a3c",null);r.options.__file="Loading.vue";t["a"]=r.exports},4189:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step_bar"},[s("div",{staticClass:"content"},[s("ul",{staticClass:"title_box"},e._l(e.step_bar,function(t,i){return s("li",{key:i},[s("p",{class:i<e.step?"title":""},[e._v("\n\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t")])])}),0),s("ul",{staticClass:"number_box"},e._l(e.step_bar,function(t,i){return s("li",{key:i},[s("div",{staticClass:"imgBox"},[s("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/"+(i<e.step?t.overImgUrl:t.imgUrl),alt:""}}),s("div",{directives:[{name:"show",rawName:"v-show",value:i<4,expression:"index < 4"}],class:i<e.step-1?"green_line":"white_line"})])])}),0)])])},a=[],n=(s("cadf"),s("551c"),s("097d"),{props:["step"],data:function(){return{step_bar:[{title:"设置目标专业",imgUrl:"icon_white1.png",overImgUrl:"icon_green1.png"},{title:"查看目标专业科目要求",imgUrl:"icon_white2.png",overImgUrl:"icon_green2.png"},{title:"填写决策平衡单",imgUrl:"icon_white3.png",overImgUrl:"icon_green3.png"},{title:"确定选考科目组合",imgUrl:"icon_white4.png",overImgUrl:"icon_green4.png"},{title:"生成报告",imgUrl:"icon_white5.png",overImgUrl:"icon_green5.png"}]}},methods:{},watch:{},created:function(){},mounted:function(){}}),o=n,c=(s("73fe"),s("2877")),r=Object(c["a"])(o,i,a,!1,null,"34acfd8f",null);r.options.__file="stepBar.vue";t["a"]=r.exports},"4ff2":function(e,t,s){"use strict";var i=s("3891"),a=s.n(i);a.a},"5ab3":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"xuekeyaoqiu"},[s("StepBar",{attrs:{step:"2"}}),s("div",{staticClass:"inner"},[s("div",{staticClass:"content"},[e._m(0),e.cdata?s("div",{staticClass:"content_box"},e._l(e.cdata.data,function(t,i){return s("div",{key:i,staticClass:"neirongBox"},[s("p",{staticClass:"professionTitle"},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),s("p",{staticClass:"detail_num"},[e._v("科目要求及可报考院校数"),s("span",{staticClass:"num",on:{click:function(s){e.goUniversity(t.id,"","",t.name)}}},[e._v(e._s("(共"+t.total+"所)"))])]),s("div",{staticClass:"xiangqing"},[t.total>0?s("ul",{staticClass:"lis"},e._l(t.arr,function(i,a){return s("li",{key:a,staticClass:"lis_box"},[i.firstCourseRequire?s("div",{staticClass:"no2"},[s("p",{staticClass:"names_first"},[s("span",{staticClass:"first_check"},[e._v("首选:")]),e._v(e._s(i.firstCourseRequire))]),s("p",{staticClass:"names_second"},[s("span",{staticClass:"second_check"},[e._v("再选:")]),e._v(e._s(i.secondCourseRequire))]),s("p",{staticClass:"num",on:{click:function(s){e.goUniversity(t.id,i.firstCourseRequire,i.secondCourseRequire,t.name)}}},[s("span",[e._v("(")]),s("span",{staticClass:"num_border"},[e._v(e._s(i.num))]),s("span",[e._v(")")])])]):s("div",{staticClass:"no0"},[s("p",{staticClass:"names"},[e._v(e._s(i.chooseCourseRequire))]),s("p",{staticClass:"num0",on:{click:function(s){e.goUniversity(t.id,i.chooseCourseRequire,"",t.name)}}},[s("span",[e._v("(")]),s("span",{staticClass:"num_border"},[e._v(e._s(i.num))]),s("span",[e._v(")")])])])])}),0):e._e(),0==t.total?s("ul",{staticClass:"lis"},[e._m(1,!0)]):e._e()])])}),0):e._e(),e.cdata?s("div",{staticClass:"tongji"},[s("p",{staticClass:"tongji_title"},[e._v("目标专业选考科目要求统计")]),s("ul",[e._m(2),e._l(e.cdata.chooseNum.data,function(t,i){return s("li",{key:i},[s("div",{staticClass:"main"},[s("p",[t.chooseCourseRequire?s("span",[e._v(e._s(t.chooseCourseRequire))]):e._e(),t.firstCourseRequire?s("span",[e._v("首选："+e._s(t.firstCourseRequire))]):e._e(),t.secondCourseRequire?s("span",[e._v("再选："+e._s(t.secondCourseRequire))]):e._e()]),s("p",{staticClass:"main_num",on:{click:function(t){e.goShowDetail(i)}}},[s("span",[e._v(e._s(t.num))]),s("span",{class:e.detailArr.some(function(e){return e==i})?"num_active":"num_unactive"})]),s("p",[e._v(e._s((t.num/e.cdata.chooseNum.total*100).toFixed(2))+"%")])]),s("div",{staticClass:"detail",class:e.detailArr.some(function(e){return e==i})?"detail_active":"detail_unactive"},e._l(t.subject,function(t,i){return s("div",{key:i,staticClass:"box"},[s("p",[e._v(e._s(t.subject))]),s("p",[e._v(e._s("("+t.num+")"))])])}),0)])})],2)]):e._e(),e.cdata?s("div",{staticClass:"readProtocol"},[s("div",{staticClass:"ProtocolTitle"},[e._v("\n                    请仔细阅读以下协议\n                ")]),s("div",{staticClass:"neirongBox1"},[e._m(3),s("div",{staticClass:"isAgree"},[s("div",{class:e.isShowjumpOver?"jumpOver":"unjumpOver",on:{click:e.jumpOver}},[s("span",{staticClass:"box"}),s("span",{staticClass:"names"},[e._v("跳过")])]),s("div",{class:e.isShowAgree?"agree":"unAgree",on:{click:e.agree}},[s("span",{staticClass:"box"}),s("span",{staticClass:"names"},[e._v("确认")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowAgree,expression:"isShowAgree"}],staticClass:"showAgreeBoxs"},["1"==e.provinceCode?s("div",{staticClass:"checkBoxs"},[s("el-checkbox-group",{attrs:{max:2},model:{value:e.subjectSetting,callback:function(t){e.subjectSetting=t},expression:"subjectSetting"}},e._l(e.subjects1,function(e,t){return s("el-checkbox",{key:t,attrs:{label:e.name}})}),1)],1):e._e(),"2"==e.provinceCode?s("div",{staticClass:"checkBoxs"},[s("el-checkbox-group",{attrs:{max:2},model:{value:e.subjectSetting,callback:function(t){e.subjectSetting=t},expression:"subjectSetting"}},e._l(e.subjects2,function(e,t){return s("el-checkbox",{key:t,attrs:{label:e.name}})}),1)],1):e._e(),"3"==e.provinceCode?s("div",{staticClass:"father"},[s("div",{staticClass:"checkBoxs"},[e._m(4),s("div",{staticClass:"group_box"},[s("el-checkbox-group",{attrs:{max:e.firstChoiceMax},model:{value:e.subjectSetting1,callback:function(t){e.subjectSetting1=t},expression:"subjectSetting1"}},e._l(e.subjects3a,function(e,t){return s("el-checkbox",{key:t,attrs:{label:e.name}})}),1)],1)]),s("div",{staticClass:"checkBoxs"},[s("p",[e._v("再选科目"),s("span",{staticClass:"tishi"},[e.subjectSetting1.length?[e._v("（可选0-1科）")]:[e._v("（可选0-2科）")]],2)]),s("div",{staticClass:"group_box"},[s("el-checkbox-group",{attrs:{max:e.secondChoiceMax},model:{value:e.subjectSetting,callback:function(t){e.subjectSetting=t},expression:"subjectSetting"}},e._l(e.subjects3b,function(e,t){return s("el-checkbox",{key:t,attrs:{label:e.name}})}),1)],1)])]):e._e()])])]):e._e(),e.cdata?s("div",{staticClass:"ft_btns"},[s("div",{staticClass:"ft_btn go_pre",on:{click:function(t){e.$router.push("/majorSelectedSubjects/mubiaozhuanye")}}},[e._v("上一步")]),s("div",{class:e.isShowTurning?"go_next":"unNext",on:{click:e.goNext}},[e._v("\n                    下一步\n                ")])]):e._e()])]),e.isShowTixing?s("div",{staticClass:"tixing"},[s("div",{staticClass:"tanchuang"},[s("p",{staticClass:"title"},[e._v("\n                是否确定目标学科组合？\n            ")]),s("p",{staticClass:"jieshi"},[e._v("\n                一经确认，将跳过决策平衡单设置，保存学科组合\n            ")]),s("div",{staticClass:"button"},[s("div",{staticClass:"determine",on:{click:function(t){e.goDetermine()}}}),s("div",{staticClass:"cancel",on:{click:function(t){e.isShowTixing=!1}}}),s("div",{staticClass:"close",on:{click:function(t){e.isShowTixing=!1}}})])])]):e._e(),e.isShowTixing2?s("div",{staticClass:"errors"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"tanchuang"},[e._m(5),s("div",{staticClass:"close",on:{click:function(t){e.isShowError=!1}}}),s("div",{staticClass:"queding",on:{click:function(t){e.isShowError=!1}}})])])]):e._e(),e.isShowTixing3?s("div",{staticClass:"errors"},[s("div",{staticClass:"tanchuang"},[s("div",{staticClass:"title"},[e._v("\n                "+e._s(e.tixing3)+"\n            ")]),s("div",{staticClass:"jieshi"},[e._v("\n                不可重复设置\n            ")])])]):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShowLoading,expression:"!isShowLoading"}],staticClass:"loading"},[s("Loading")],1)],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step"},[s("p",{staticClass:"step_detail"},[s("span",{staticClass:"tishiyu"},[e._v("提示：")]),e._v("“+”表示需要同时满足，“/”表示满足其中一科。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",[e._v("无")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"lis_title"},[s("p",[e._v("科目组合")]),s("p",[e._v("可报院校数量")]),s("p",[e._v("可报院校占比")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"details"},[s("p",{staticClass:"detail_top"},[e._v("你的选考科目必须满足目标专业的科目要求才能进行报考，请你认真分析以上目标专业的选考科目要求。")]),s("p",[e._v("若能够确定"),s("span",[e._v("1～2")]),e._v("门科目，则勾选"),s("span",[e._v("“确认”")]),e._v("，选定该科目；若未能确定任何1科，则勾选"),s("span",[e._v("“跳过”")]),e._v("，进入下一步。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("首选科目"),s("span",{staticClass:"tishi"},[e._v("（首选1科或不选）")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("p",[e._v("请选择至少一门学科后")]),s("p",[e._v("再次点击下一步")])])}],n=s("a63a"),o=n["a"],c=(s("9857"),s("e6b2"),s("2877")),r=Object(c["a"])(o,i,a,!1,null,"0a545f86",null);r.options.__file="xuekeyaoqiu.vue";t["default"]=r.exports},"64d2":function(e,t,s){},"727d":function(e,t,s){},"73fe":function(e,t,s){"use strict";var i=s("64d2"),a=s.n(i);a.a},9857:function(e,t,s){"use strict";var i=s("0350"),a=s.n(i);a.a},a63a:function(e,t,s){"use strict";(function(e){s("cadf"),s("551c"),s("097d");var i=s("3a5e"),a=s("4189");t["a"]={props:["step"],components:{Loading:i["a"],StepBar:a["a"]},data:function(){return{firstChoiceMax:1,secondChoiceMax:2,isShowLoading:!1,isClick:!0,Gmubiaozhuanye_1:JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye_1")),Gmubiaozhuanye_2:JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye_2")),target_major:JSON.parse(window.sessionStorage.getItem("target_major")),cdata:null,provinceCode:"",isShowTixing:!1,isShowTixing2:!1,isShowTixing3:!1,tixing3:"",isShowAgree:!1,isShowjumpOver:!1,isShowTurning:!1,subject:[],subjectSetting1:[],subjectSetting:[],subjects1:[{name:"物理",idx:"0"},{name:"化学",idx:"1"},{name:"生物",idx:"2"},{name:"历史",idx:"3"},{name:"思想政治",idx:"4"},{name:"地理",idx:"5"},{name:"技术",idx:"6"}],subjects2:[{name:"物理",idx:"0"},{name:"化学",idx:"1"},{name:"生物",idx:"2"},{name:"历史",idx:"3"},{name:"思想政治",idx:"4"},{name:"地理",idx:"5"}],subjects3a:[{name:"物理",idx:"0"},{name:"历史",idx:"1"}],subjects3b:[{name:"化学",idx:"0"},{name:"生物",idx:"1"},{name:"思想政治",idx:"2"},{name:"地理",idx:"3"}],detailArr:[]}},methods:{getTargetProfession:function(){var e=window.sessionStorage.getItem("ymtxToken"),t=[],s=this;this.$route.params.mubiaozhuanye?(t=this.$route.params.mubiaozhuanye,window.sessionStorage.setItem("Gmubiaozhuanye",JSON.stringify(t))):t=JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye")),this.$ajax.post(this.G_uri+"/chooseSubject/getTargetProfessionSubjectRequire",{source:1,subject:t},{headers:{token:e}}).then(function(e){if(2e3==e.data.code){var t=e.data.data;s.cdata=e.data.data,s.isShowLoading=!0,window.sessionStorage.setItem("SubjectRequire",JSON.stringify(t))}}).catch(function(e){console.log(e)})},goUniversity:function(e,t,s,i){if(0!=e.length){var a=this.$router.resolve({path:"/majorSelectedSubjects/xuankeyuanxiao",name:"xuankeyuanxiao",query:{subjectId:e,chooseSubjectRequire:t,firstCourseRequire:t,secondCourseRequire:s,subjectName:i}}),n=a.href;window.open(n,"_blank")}},goOverUniversity:function(){var e=window.sessionStorage.getItem("ymtxToken"),t=this;this.$ajax.post(this.G_uri+"/chooseSubject/getTargetSubjectUniversityList",{},{headers:{token:e}}).then(function(e){2e3==e.data.code&&(t.cdata=e.data.data)}).catch(function(e){console.log(e)})},getProvince:function(){var e=window.sessionStorage.getItem("ymtxToken"),t=this;this.$ajax.post(this.G_uri+"/login/getUserInfo",{},{headers:{token:e}}).then(function(e){if(2e3==e.data.code){var s=e.data.data.province;switch(s){case"浙江":t.provinceCode="1";break;case"北京":case"海南":case"山东":case"上海":case"天津":t.provinceCode="2";break;case"重庆":case"广东":case"福建":case"江苏":case"河北":case"湖南":case"湖北":case"辽宁":case"山西":case"内蒙古":case"吉林":case"黑龙江":case"安徽":case"江西":case"河南":case"广西":case"四川":case"贵州":case"云南":case"西藏":case"陕西":case"甘肃":case"青海":case"宁夏":case"新疆":case"台湾":case"香港":case"澳门":t.provinceCode="3";break;default:}}else 2e3!=e.data.code&&console.log(e.msg)}).catch(function(e){console.log(e)})},goDetermine:function(){if(this.isClick){var e=window.sessionStorage.getItem("ymtxToken"),t=[],s=JSON.parse(window.sessionStorage.getItem("Gmubiaozhuanye")),i=JSON.parse(window.sessionStorage.getItem("subjectSets2")),a=this;this.$ajax.post(this.G_uri+"/chooseSubject/storeSelectionDecision",{source:3,balance:t,target:s,subjectName:i},{headers:{token:e}}).then(function(e){2e3==e.data.code?(a.$router.push("/majorSelectedSubjects/threeResult"),window.location.reload()):1016==e.data.code?a.$router.push("/login"):(a.isShowTixing3=!0,a.isShowTixing=!1,a.tixing3=e.data.msg,setTimeout(function(){a.isShowTixing3=!1},1500)),a.isClick=!0}).catch(function(e){console.log(e)})}},jumpOver:function(){this.isShowAgree=!1,this.isShowjumpOver=!0,this.isShowTurning=!0},agree:function(){this.isShowjumpOver=!1,this.isShowAgree=!0,this.isShowTurning=!0},goNext:function(){var e=this.subjectSetting1,t=this.subjectSetting,s=[],i=this;s=e.concat(t),window.sessionStorage.setItem("subjectSets2",JSON.stringify(s)),this.isShowAgree&&(s.length<3&&s.length>0?this.$router.push("/majorSelectedSubjects/pinghengdan1"):0==s.length?(this.isShowTixing2=!0,setTimeout(function(){i.isShowTixing2=!1},1500)):3==s.length&&(this.isShowTixing=!0)),this.isShowjumpOver&&(s=[],window.sessionStorage.setItem("subjectSets2",JSON.stringify(s)),this.$router.push("/majorSelectedSubjects/pinghengdan1"))},goShowDetail:function(e){var t=this.detailArr,s=t.some(function(t,s){return t==e});if(s){var i=t.filter(function(t,s){return t!=e});this.detailArr=i}else t.push(e),this.detailArr=t}},created:function(){this.getTargetProfession(),this.getProvince()},watch:{subjectSetting1:function(){this.subjectSetting1.length?this.secondChoiceMax=1:this.secondChoiceMax=2},subjectSetting:function(){this.subjectSetting.length<2?this.firstChoiceMax=1:this.firstChoiceMax=0}},mounted:function(){"3"==window.sessionStorage.tuance?e(".set_target_major").css({top:"80px"}):e(".set_target_major").css({top:""})}}}).call(this,s("1157"))},e6b2:function(e,t,s){"use strict";var i=s("727d"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-e9edacb6.ea5ef80f.js.map