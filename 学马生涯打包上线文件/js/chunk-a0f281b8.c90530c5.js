(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0f281b8"],{"0033":function(t,a,i){},"0fa8":function(t,a,i){"use strict";var s=i("2df8"),e=i.n(s);e.a},"297b":function(t,a,i){},"2df8":function(t,a,i){},"2f9d":function(t,a,i){},3891:function(t,a,i){},"3a5e":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"Loading"},[i("div",{staticClass:"tanchuang"},[i("div",{staticClass:"tubiao"})])])}],n={props:["data"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},o=n,c=(i("4ff2"),i("2877")),r=Object(c["a"])(o,s,e,!1,null,"16438a3c",null);r.options.__file="Loading.vue";a["a"]=r.exports},"3bca":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"zhuanyexiangqing"},[i("div",{staticClass:"header"},[i("div",{staticClass:"inner"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.type,expression:"type == 1"}],staticClass:"top_title"},[i("div",{staticClass:"imgBox"}),i("div",{staticClass:"main"},[i("p",{staticClass:"title"},[t._v(t._s(t.cdata2.name))]),i("p",{staticClass:"detail"},[i("span",[t._v("专业代码： "+t._s(t.cdata2.code))]),i("span",[t._v("授予学位： "+t._s(t.cdata2.academicDegree))]),i("span",[t._v("学制： "+t._s(t.cdata2.learnYear))])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.type,expression:"type == 2"}],staticClass:"top_title"},[i("div",{staticClass:"imgBox"}),i("div",{staticClass:"main"},[i("p",{staticClass:"title"},[t._v(t._s(t.cdata2.name))]),i("p",{staticClass:"detail"},[i("span",[t._v("专业代码： "+t._s(t.cdata2.code))])])])]),i("div",{staticClass:"goBack",on:{click:function(a){t.$emit("go-back")}}})])]),i("div",{staticClass:"inner"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.type,expression:"type == 1"}],staticClass:"benke"},[i("div",{staticClass:"content"},[i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("培养目标")]),i("div",{staticClass:"xiangqing",domProps:{innerHTML:t._s(t.cdata2.target)}})]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("主要课程")]),i("div",{staticClass:"xiangqing",domProps:{innerHTML:t._s(t.cdata2.course)}})]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("毕业生能力")]),i("div",{staticClass:"xiangqing",domProps:{innerHTML:t._s(t.cdata2.ability)}})]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("就业前景与方向")]),i("div",{staticClass:"xiangqing",domProps:{innerHTML:t._s(t.cdata2.prospectDirection)}})]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("相近专业")]),i("p",{staticClass:"xiangqing"},t._l(t.cdata2.similarName,function(a,s){return i("span",[t._v(" "+t._s(a.name)+" ")])}),0)]),i("div",{staticClass:"yuanxiaopaiming"},[i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v(t._s(t.cdata2.name)+"开设院校及热度指数:")])]),i("el-table",{style:{width:"1160px","text-align":"center"},attrs:{data:t.kaisheyaunxiao,height:"400",border:""}},[i("el-table-column",{attrs:{align:"center",prop:"universityName",label:"院校名称",width:"290",height:"50"}}),i("el-table-column",{attrs:{align:"center",prop:"province",label:"院校所在地",width:"290",height:"50"}}),i("el-table-column",{attrs:{align:"center",prop:"rank",label:"热度指数",width:"290",height:"50"}}),i("el-table-column",{attrs:{align:"center",prop:"tagTesezhuanyeName",label:"专业实力",width:"288",height:"50"}})],1)],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.type,expression:"type == 2"}],staticClass:"zhuanke"},[i("div",{staticClass:"content"},[i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("专业方向举例")]),i("div",{staticClass:"xiangqing",domProps:{innerHTML:t._s(t.cdata2.prospectDirection)}})]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("主要对应职业类别")]),i("p",{staticClass:"xiangqing"},[i("span",[t._v(t._s(t.cdata2.target))])])]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("衔接中职专业举例")]),i("div",{staticClass:"xiangqing",domProps:{innerHTML:t._s(t.cdata2.course)}})]),i("div",{staticClass:"neirongBox"},[i("p",{staticClass:"title"},[t._v("衔接中职专业举例")]),i("p",{staticClass:"xiangqing"},t._l(t.cdata2.similarName,function(a,s){return i("span",[t._v(t._s(a.name))])}),0)])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLoading,expression:"isShowLoading"}],staticClass:"loading"},[i("Loading")],1)])},e=[],n=(i("cadf"),i("551c"),i("097d"),i("3a5e")),o={props:["majorId"],components:{Loading:n["a"]},data:function(){return{cdata2:[],type:"",kaisheyaunxiao:[],isShowLoading:!0}},watch:{majorId:function(){this.dataUpdate(),this.dataUpdate2()}},methods:{dataUpdate:function(t){var a=this,i=window.sessionStorage.getItem("ymtxToken");t=this.majorId;this.type=1,this.isShowLoading=!0,this.$ajax.post(this.G_uri+"/target/subjectCategoryDetail",{id:t},{headers:{token:i}}).then(function(t){2e3==t.data.code?(a.cdata2=t.data.data,a.isShowLoading=!1):1016==t.data.code&&a.$router.push("/login")}).catch(function(t){console.log(t)})},dataUpdate2:function(){var t=this,a=window.sessionStorage.getItem("ymtxToken"),i=this.majorId;this.$ajax.post(this.G_uri+"/target/getSubjectUniversityRankList",{id:i},{headers:{token:a}}).then(function(a){2e3==a.data.code?(t.kaisheyaunxiao=a.data.data,t.isShowLoading=!1):1016==a.data.code&&t.$router.push("/login")}).catch(function(t){console.log(t)})}},mounted:function(){window.scrollTo(0,0),console.log(this.majorId)},created:function(){}},c=o,r=(i("ea17"),i("69e1"),i("2877")),l=Object(r["a"])(c,s,e,!1,null,"2e8f39e5",null);l.options.__file="zhuanyexiangqing.vue";a["a"]=l.exports},"4ff2":function(t,a,i){"use strict";var s=i("3891"),e=i.n(s);e.a},"555a":function(t,a,i){"use strict";var s=i("297b"),e=i.n(s);e.a},"69e1":function(t,a,i){"use strict";var s=i("b7f3"),e=i.n(s);e.a},ace3:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"mubiaozhuanye"},[i("StepBar",{attrs:{step:"1"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowMajorDetail,expression:"!isShowMajorDetail"}],staticClass:"inner inner_content"},[i("div",{staticClass:"set_target_major"},[i("div",{staticClass:"inner"},[i("div",{class:["target_major_box",t.isSlide?"slide":"unSlide"]},[i("div",{staticClass:"target_major target_major_top"},[i("p",{staticClass:"title_box"},[i("span",{staticClass:"btn_box",on:{click:function(a){t.isSlide=!t.isSlide}}},[i("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/slide.png",alt:""}}),t.isSlide?[t._v("收起")]:[t._v("弹出")]],2),i("span",{staticClass:"title"},[t._v("添加目标专业")]),i("span",{staticClass:"tuijian"},[t._v("(5~20个)")]),t._v(":\n                        ")]),i("div",{staticClass:"major_box"},t._l(t.mubiaozhuanye_1,function(a,s){return i("p",{key:s,staticClass:"major"},[i("span",{on:{click:function(i){t.goJobBank(a.subjectId)}}},[t._v(t._s(a.subjectName))]),i("span",{staticClass:"btn_remove",on:{click:function(i){t.removeMajor(a.subjectId)}}})])}),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowAddMajorTips,expression:"isShowAddMajorTips"}],staticClass:"add_major_tips"},[i("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/icon_tianjia1.png",alt:""}})]),i("p",{staticClass:"had_addmajor_length"},[t._v("\n                            已选"),i("span",[t._v(t._s(t.mubiaozhuanye_1.length))]),t._v("个\n                        ")])])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"errors"},[i("div",{staticClass:"inner"},[i("div",{staticClass:"tanchuang"},[i("div",{staticClass:"title"},[t._v(t._s(t.waring))]),i("div",{staticClass:"close",on:{click:function(a){t.isShowError=!1}}}),i("div",{staticClass:"queding",on:{click:function(a){t.isShowError=!1}}})])])]),t.isShowTips?i("div",{staticClass:"tipsMark"},[i("p",[t._v("专业对比最多添加4个哦！")]),i("p",[t._v("请删除后继续添加")])]):t._e(),i("div",{staticClass:"step"},[i("p",{staticClass:"step_detail"},[i("span",{staticClass:"tishiyu"},[t._v("提示：")]),t._v("通过生涯测评，系统推荐"),i("span",[t._v(t._s(t.recommendedSpecialty.length))]),t._v("个适合专业，请你在以下推荐专业中添加5-20个专业为目标专业，添加完成后点击“下一步”。")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"recommend_major"},[i("div",{staticClass:"recommend_content"},t._l(t.recommendedSpecialty,function(a,s){return i("div",{key:s,staticClass:"neirongBox"},[t.mubiaozhuanye_1.some(function(t,i,s){return t.subjectId==a.id})?t._e():i("div",{staticClass:"add_major boxs"},[i("div",{staticClass:"checkBox",on:{click:function(i){t.addMajor(a.id,a.name)}}},[i("div",{staticClass:"check"})]),i("div",{staticClass:"name",on:{click:function(i){t.goJobBank(a.id)}}},[t._v(t._s(a.name))]),i("div",{staticClass:"lei"},[i("span",[t._v(t._s(a.firstName))]),t._v("/"),i("span",[t._v(t._s(a.secondName))])])]),t.mubiaozhuanye_1.some(function(t,i,s){return t.subjectId==a.id})?i("div",{staticClass:"remove_major boxs"},[i("div",{staticClass:"name",on:{click:function(i){t.goJobBank(a.id)}}},[t._v(t._s(a.name))]),i("div",{staticClass:"lei"},[i("span",[t._v(t._s(a.firstName))]),t._v("/"),i("span",[t._v(t._s(a.secondName))])])]):t._e()])}),0)])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowMajorDetail,expression:"!isShowMajorDetail"}],staticClass:"ft_btns"},[i("div",{staticClass:"ft_btn go_next",on:{click:t.goNext}},[t._v("\n            下一步\n        ")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMajorDetail,expression:"isShowMajorDetail"}],staticClass:"zhuanye_xiangqing"},[i("zhuanyexiangqing",{ref:"zhuanyexiangqing",attrs:{majorId:t.majorId},on:{"go-back":function(a){t.isShowMajorDetail=!1}}})],1),i("div",{staticClass:"fixed_btn"},[i("div",{staticClass:"inner_btn"},[i("ul",{staticClass:"fixedBox"},[i("li",{directives:[{name:"show",rawName:"v-show",value:!t.isShowMajorDetail,expression:"!isShowMajorDetail"}],staticClass:"ft_btn go_next",on:{click:t.goNext}},[i("p",[t._v("下一步")])]),i("li",{staticClass:"go_top"},[i("div",{staticClass:"top_text",on:{click:t.goTop}},[t._m(0)]),t._m(1)])])])])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",[i("span",[t._v("返回"),i("br"),t._v("顶部")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"img_box"},[i("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/icon_gotop.png",alt:""}})])}],n=i("f5c4"),o=n["a"],c=(i("b338"),i("0fa8"),i("555a"),i("2877")),r=Object(c["a"])(o,s,e,!1,null,"4c281831",null);r.options.__file="mubiaozhuanye.vue";a["default"]=r.exports},b338:function(t,a,i){"use strict";var s=i("2f9d"),e=i.n(s);e.a},b7f3:function(t,a,i){},bd69:function(t,a,i){"use strict";var s=i("c652"),e=i.n(s);e.a},c652:function(t,a,i){},ca1b:function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"step_bar"},[i("div",{staticClass:"content"},[i("ul",{staticClass:"title_box"},t._l(t.step_bar,function(a,s){return i("li",{key:s},[i("p",{class:s<t.step?"title":""},[t._v("\n\t\t\t\t\t"+t._s(a.title)+"\n\t\t\t\t")])])}),0),i("ul",{staticClass:"number_box"},t._l(t.step_bar,function(a,s){return i("li",{key:s},[i("div",{staticClass:"imgBox"},[i("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/"+(s<t.step?a.overImgUrl:a.imgUrl),alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:s<4,expression:"index < 4"}],class:s<t.step-1?"green_line":"white_line"})])])}),0)])])},e=[],n=(i("cadf"),i("551c"),i("097d"),{props:["step"],data:function(){return{step_bar:[{title:"设置目标专业",imgUrl:"icon_white1.png",overImgUrl:"icon_green1.png"},{title:"查看目标专业科目要求",imgUrl:"icon_white2.png",overImgUrl:"icon_green2.png"},{title:"填写决策平衡单",imgUrl:"icon_white3.png",overImgUrl:"icon_green3.png"},{title:"确定选考科目组合",imgUrl:"icon_white4.png",overImgUrl:"icon_green4.png"},{title:"生成报告",imgUrl:"icon_white5.png",overImgUrl:"icon_green5.png"}]}},methods:{},watch:{},created:function(){},mounted:function(){}}),o=n,c=(i("bd69"),i("2877")),r=Object(c["a"])(o,s,e,!1,null,"181cecbb",null);r.options.__file="stepBar.vue";a["a"]=r.exports},ea17:function(t,a,i){"use strict";var s=i("0033"),e=i.n(s);e.a},f5c4:function(t,a,i){"use strict";(function(t){i("ac6a"),i("cadf"),i("551c"),i("097d");var s=i("3bca"),e=i("ca1b");a["a"]={components:{zhuanyexiangqing:s["a"],StepBar:e["a"]},props:["step"],data:function(){return{isSlide:!0,isShowAddMajorTips:!0,from_name:0,isShowMajorDetail:!1,majorId:"",recommendedSpecialty:[],mubiaozhuanye_1:[],mubiaozhuanye_2:[],professionalContrastData:[],isShowzhuanyeduibi:!1,zhuanyeduibiData:[],page:"",leibie:"1",cdata:[],isShowError:!1,waring:"",discipline:[{names:"哲学",value:"1",code:"01"},{names:"经济学",value:"7",code:"02"},{names:"法学",value:"33",code:"03"},{names:"教育学",value:"77",code:"04"},{names:"文学",value:"100",code:"05"},{names:"历史学",value:"206",code:"06"},{names:"理学",value:"215",code:"07"},{names:"工学",value:"267",code:"08"},{names:"农学",value:"495",code:"09"},{names:"医学",value:"531",code:"10"},{names:"管理学",value:"599",code:"12"},{names:"艺术学",value:"662",code:"13"},{names:"军事学",value:"1598",code:"11"}],isShowTips:!1,tuance:!1,number:0,flag:!0}},computed:{major:function(){var t=this,a=this.discipline.filter(function(a){return a.value==t.leibie});return a},subjectNumber:function(){var t=0;return this.cdata.forEach(function(a,i){a.list&&a.list.forEach(function(a,i){t++})}),t}},methods:{removeMajor:function(t){var a=this.mubiaozhuanye_1;this.mubiaozhuanye_1=a.filter(function(a,i,s){return a.subjectId!=t})},addMajor:function(t,a){if(20!=this.mubiaozhuanye_1.length){var i={};i.subjectId=t,i.subjectName=a,i.type=1,this.mubiaozhuanye_1.push(i)}},goNext:function(){if(this.mubiaozhuanye_1.length<5)return this.isShowError=!0,void(this.waring="请添加5~20个目标专业");var t=JSON.stringify(this.mubiaozhuanye_1);window.sessionStorage.setItem("mubiaozhuanye_1",t),window.scrollTo(0,0),this.$router.push({path:"/zhinengxuanke/mubiaozhuanye2",name:"mubiaozhuanye2"})},goMajor:function(){var t=window.sessionStorage.getItem("ymtxToken"),a=(this.professionalContrastData,this);this.$ajax.post(this.G_uri+"/chooseSubject/getRecommendedMajor",{type:1},{headers:{token:t}}).then(function(t){2e3==t.data.code?a.recommendedSpecialty=t.data.data:1016==t.data.code&&a.$router.push("/login")}).catch(function(t){console.log(t)})},goJobBank:function(t){window.scrollTo(0,0);t=t;var a=this.$router.resolve({path:"/zhuanyexiangqing",name:"zhuanyexiangqing",query:{id:t,type:1,from:"zhuanyeku"}}),i=a.href;window.open(i,"_blank")},isActives:function(){this.mubiaozhuanye_1.some(function(t,a,i){return t.subjectId==items.id})},handleScroll:function(){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=t(".set_target_major"),s=t(".set_target_major_fixed");a>275?i.attr("class","set_target_major_fixed"):(console.log(),s.attr("class","set_target_major"))},goTop:function(){window.scroll(0,0)},getWindowWidth:function(){var a=t(window).width();a<=1380?t(".fixedBox").css({position:"fixed",bottom:"25%",right:0}):t(".fixedBox").css({position:"absolute",right:"-90px"})}},watch:{mubiaozhuanye_1:function(){this.mubiaozhuanye_1.length?this.isShowAddMajorTips=!1:this.isShowAddMajorTips=!0}},created:function(){this.goMajor()},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.from_name++,"3"==window.sessionStorage.tuance&&(this.tuance=!0),window.onresize=this.getWindowWidth,this.getWindowWidth()},activated:function(){}}}).call(this,i("1157"))}}]);
//# sourceMappingURL=chunk-a0f281b8.c90530c5.js.map