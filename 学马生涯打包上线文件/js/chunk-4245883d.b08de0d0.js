(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4245883d"],{"10c9":function(t,e,a){"use strict";var s=a("4167"),i=a.n(s);i.a},"23e9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xuankeReport"},[a("div",{staticClass:"inner"},[!t.isTuance&&t.data.headLogo?a("div",{staticClass:"report_page"},[a("div",{staticClass:"page_title"},[t._v("\n                EVALUATION REPORT OF HIGH SCHOOL STUDENTS` SUBJECT SELEVTION\n            ")]),a("div",{staticClass:"page_img_title"},[a("img",{attrs:{src:t.data.headLogo.evaluation_logo}})]),a("div",{staticClass:"page_img_logo"},[a("img",{attrs:{src:t.data.headLogo.home_logo}})]),a("div",{staticClass:"page_detail"},[a("ul",[a("li",[a("p",[t._v("姓       名：")]),a("p",[t._v(t._s(t.data.studentData.name))])]),a("li",[a("p",[t._v("年       级：")]),a("p",[t._v(t._s(t.data.studentData.baccll_year))])]),a("li",[a("p",[t._v("日       期：")]),a("p",[t._v(t._s(t.data.studentData.serial_choose_report_create_at))])])])]),a("div",{staticClass:"page_bottom"},[a("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/page-one-line.png",alt:""}}),a("p",[t._v(t._s(t.data.oem.name)+"旗下品牌")]),a("p",[t._v("测评网址"+t._s(t.data.oem.oem))]),t.data.headLogo.address?a("p",[t._v("地址"+t._s(t.data.headLogo.address))]):t._e(),a("p",[t._v("系统开发技术、测评方法及报告设计已申请知识产权保护")]),a("p",[t._v("本报告仅供相关个人阅读参考，未经许可不得传阅 严禁用做他途")])])]):t._e(),t.isTuance?a("div",{staticClass:"header_tuance"},[a("p",{staticClass:"title"},[t._v("中学生选科测评报告")])]):t._e(),!t.isTuance&&t.data.headLogo?a("div",{staticClass:"header"},[a("img",{attrs:{src:t.data.headLogo.header_logo,alt:""}}),a("p",{staticClass:"page_seq"}),a("p",{staticClass:"header_title"},[t._v("中学生选科测评报告")])]):t._e(),a("div",{staticClass:"content"},[t.data.target?a("div",{staticClass:"content_main"},[t._m(0),a("ul",{staticClass:"mubiao_box"},t._l(t.data.target,function(e,s){return a("li",[t._v(t._s(e.subject_name))])}),0)]):t._e(),a("div",{staticClass:"my_xuanke"},[t._m(1),a("div",{staticClass:"xuanke_box"},[a("p",[t._v("选科组合")]),a("p",[t._v(t._s(t.data.studentSubjectData))])])]),t.data.subjectUniversity?a("div",{staticClass:"yuanxiao"},[t._m(2),t._l(t.data.subjectUniversity.data,function(e,s){return a("div",{key:s,staticClass:"yuanxiao_box"},[a("div",{staticClass:"yuanxiao_box_title"},[a("span",[t._v(t._s(e.name))]),a("span",[t._v("(共"+t._s(e.total)+"所)")])]),a("ul",t._l(e.arr,function(s,i){return e.total>0?a("li",{key:i,class:e.arr.length%2==0?"odd_box":"even_box"},[s.first_course_require?a("div",[a("span",{staticClass:"first_checkd"},[t._v("首选:"+t._s(s.first_course_require))]),a("span",[t._v("再选:"+t._s(s.second_course_require))]),a("span",{staticClass:"num"},[t._v(t._s("("+s.num+")"))])]):a("div",[a("span",[t._v(t._s(s.choose_course_require))]),a("span",{staticClass:"num"},[t._v(t._s("("+s.num+")"))])])]):a("li",{staticStyle:{"border-bottom":"none"}},[t._v("无")])}),0)])})],2):t._e(),t.data.subjectUniversity?a("div",{staticClass:"xuankao_tongji"},[t._m(3),a("table",{attrs:{width:"100%",cellspacing:"0",border:"1"}},[a("tr",{staticClass:"lis_title",attrs:{bgcolor:"#3b7dbe",height:"58"}},[t.isShowFirstChecked?a("th",[t._v("首选科目要求")]):t._e(),t.isShowFirstChecked?a("th",[t._v("再选科目要求")]):a("th",[t._v("科目要求组合")]),a("th",[t._v("可报院校数量")]),a("th",[t._v("可报院校占比")])]),t._l(t.data.subjectUniversity.choose_num.data,function(e,s){return a("tr",{key:s},[e.first_course_require?a("td",[t._v(t._s(e.first_course_require))]):t._e(),e.first_course_require?a("td",[t._v(t._s(e.second_course_require))]):a("td",[t._v(t._s(e.choose_course_require))]),a("td",[t._v(t._s(e.num))]),a("td",[t._v(t._s((e.num/t.data.subjectUniversity.choose_num.total*100).toFixed(2))+"%")])])})],2)]):t._e(),t.data.balance?a("div",{staticClass:"blance"},[t._m(4),a("div",{staticClass:"blance_main"},[a("table",{attrs:{width:"100%",cellspacing:"0",border:"1"}},[a("tr",{staticClass:"table_header",attrs:{bgcolor:"#C3DEFF",height:"58",align:"center"}},[a("th",{attrs:{width:"210"}},[t._v("影响因素")]),a("th",[t._v("  (权重)  ")]),"undefined"!==typeof t.data.balance[0].subject_physics?a("th",[t._v("   物理   ")]):t._e(),"undefined"!==typeof t.data.balance[0].subject_chemistry?a("th",[t._v("   化学   ")]):t._e(),"undefined"!==typeof t.data.balance[0].subject_biology?a("th",[t._v("   生物   ")]):t._e(),"undefined"!==typeof t.data.balance[0].subject_ideological_politics?a("th",[t._v("思想政治")]):t._e(),"undefined"!==typeof t.data.balance[0].subject_history?a("th",[t._v("   历史   ")]):t._e(),"undefined"!==typeof t.data.balance[0].subject_geography?a("th",[t._v("   地理   ")]):t._e(),"浙江"==t.province&&"undefined"!==typeof t.data.balance[0].subject_technology?a("th",[t._v("   技术   ")]):t._e()]),t._l(t.data.balance,function(e,s){return a("tr",{staticClass:"table_main",attrs:{bgcolor:"white",height:"58",align:"center"}},[a("td",{staticClass:"table_main_title",attrs:{bgcolor:"#C3DEFF"}},[t._v(t._s(e.influence_factor_name))]),a("td",[t._v(t._s(e.influence_factor_weight))]),"undefined"!==typeof t.data.balance[0].subject_physics?a("td",[t._v(t._s(e.subject_physics))]):t._e(),"undefined"!==typeof t.data.balance[0].subject_chemistry?a("td",[t._v(t._s(e.subject_chemistry))]):t._e(),"undefined"!==typeof t.data.balance[0].subject_biology?a("td",[t._v(t._s(e.subject_biology))]):t._e(),"undefined"!==typeof t.data.balance[0].subject_ideological_politics?a("td",[t._v(t._s(e.subject_ideological_politics))]):t._e(),"undefined"!==typeof t.data.balance[0].subject_history?a("td",[t._v(t._s(e.subject_history))]):t._e(),"undefined"!==typeof t.data.balance[0].subject_geography?a("td",[t._v(t._s(e.subject_geography))]):t._e(),"浙江"==t.province&&"undefined"!==typeof t.data.balance[0].subject_technology?a("td",[t._v(t._s(e.subject_technology))]):t._e()])})],2)])]):t._e(),a("div",{staticClass:"suggest"},[t._m(5),a("div",{staticClass:"suggest_main"},[a("table",{attrs:{width:"100%",cellspacing:"0",border:"1"}},[t._m(6),t._l(t.data.report,function(e,s){return a("tr",{attrs:{bgcolor:"white",height:"58",align:"center"}},[a("td",{staticClass:"suggest_main_title",attrs:{bgcolor:"#89b1d8"}},[t._v(t._s(e.subject_name))]),a("td",[t._v(t._s(e.weight))]),a("td",[t._v(t._s(e.subject_coverage)+"%")]),a("td",[t._v(t._s(e.university_coverage)+"%")]),a("td",[t._v(t._s(e.targetSubject_coverage)+"%")]),a("td",[a("i",{directives:[{name:"show",rawName:"v-show",value:1==e.isGoal,expression:"item.isGoal==1"}],staticClass:"icon iconfont",staticStyle:{"font-size":"18px",color:"#0aa70a"}},[t._v("✔")])])])})],2)])]),a("div",{staticClass:"kebaozhuanye"},[t._m(7),a("div",{staticClass:"myEcharts"},[a("div",{staticClass:"xuankezuhe"},[a("p",[t._v(t._s(t.data.studentSubjectData))])]),a("div",{ref:"myEchart",class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})])]),t._l(t.data.subjectCategoryData,function(e,s){return a("div",{key:s,staticClass:"subject_message"},[t._m(8,!0),a("div",{staticClass:"content_main subject"},[a("table",{attrs:{width:"100%",cellspacing:"0",cellpadding:"0",border:"1"}},[a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{width:"120",bgcolor:"#89b1d8"}},[t._v("专业名称")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(e.name))])]),a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("学科门类")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(e.first_name))])]),a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("专业类")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(e.second_name))])]),a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("专业代码")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(e.code))])]),a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("授予学位")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(e.academic_degree))])]),a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("学制")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(e.learn_year))])]),a("tr",{attrs:{bgcolor:"white",align:"center"}},[a("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("培养目标")]),a("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(e.target)}})]),a("tr",{attrs:{bgcolor:"white"}},[a("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("主要课程")]),a("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(e.course)}})]),a("tr",{attrs:{bgcolor:"white",align:"left"}},[a("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("毕业生能力")]),a("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(e.ability)}})]),a("tr",{attrs:{bgcolor:"white"}},[a("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("就业前景与方向")]),a("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(e.prospect_direction)}})]),a("tr",{attrs:{bgcolor:"white"}},[a("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("相近专业")]),a("td",{staticClass:"subject_info",attrs:{align:"left"}},t._l(e.similar_name,function(s,i){return a("span",[t._v(t._s(s.name)),a("span",{directives:[{name:"show",rawName:"v-show",value:i<e.similar_name.length-1,expression:"index < item.similar_name.length-1"}]},[t._v("、")])])}),0)])])])])})],2),a("div",{staticClass:"footer"},[t.data.length&&t.data.oem.oem?a("p",{staticClass:"footer_left"},[t._v("测评网址："+t._s(t.data.oem.oem))]):t._e(),a("p",{staticClass:"footer_right"},[t._v("测评方法、工具及报告设计已申请产权保护")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("目标专业")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("我的选科")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("选科要求及可报院校")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("专业选考科目要求统计")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("平衡单")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("选科建议")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticStyle:{color:"#fff","font-size":"24px"},attrs:{bgcolor:"#3b7dbe",height:"90th",align:"center"}},[a("th",{attrs:{width:"147"}},[t._v("学科")]),a("th",{attrs:{width:"101"}},[t._v("加权结果")]),a("th",{attrs:{width:"135"}},[a("p",[t._v("可报考专业")]),a("p",[t._v("覆盖率")])]),a("th",{attrs:{width:"136"}},[a("p",[t._v("可报考院校")]),a("p",[t._v("覆盖率")])]),a("th",{attrs:{width:"138"}},[a("p",[t._v("目标专业")]),a("p",[t._v("覆盖率")])]),a("th",{attrs:{width:"125"}},[t._v("设为目标学科")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("科目可报专业数据")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_title"},[a("span",[t._v("目标专业信息")])])}],n=(a("cadf"),a("551c"),a("097d"),a("313e")),r=a.n(n),c={props:{className:{type:String,default:"yourClassName"},id:{type:String,default:"yourID"},width:{default:"800px"},height:{default:"800px"}},data:function(){return{isShowFirstChecked:!0,chooseNumData:[],province:"",isTuance:!1,data:[],state:1,page:"",phdData:[],zyList:{1:[],2:[]},xkjyList:[],UserProvince:"",TargetDiscipline:[],isShowTips:!1,tishi:"",htmlTitle:"xuankezhiyuan.pdf",echartsData:[],echartsSubjectCount:"--",echartsData1:[{value:0,name:"哲学"},{value:0,name:"经济学"},{value:0,name:"法学"},{value:0,name:"教育学"},{value:0,name:"文学"},{value:0,name:"历史学"},{value:0,name:"理学"},{value:0,name:"工学"},{value:0,name:"农学"},{value:0,name:"医学"},{value:0,name:"管理学"},{value:0,name:"艺术学"},{value:0,name:"军事学"}],disciplineBZdata:["哲学","经济学","法学","教育学","文学","历史学","理学","工学","农学","医学","管理学","艺术学","军事学"],text:"360°选科测评报告"}},watch:{echartsData:function(){var t=this.echartsData;this.echartsData1=[],this.echartsData1=[{value:t.zhexue,name:"哲学"},{value:t.jingji,name:"经济学"},{value:t.faxue,name:"法学"},{value:t.jiaoyuxue,name:"教育学"},{value:t.wenxue,name:"文学"},{value:t.lishi,name:"历史学"},{value:t.lixue,name:"理学"},{value:t.gongxue,name:"工学"},{value:t.nongxue,name:"农学"},{value:t.yixue,name:"医学"},{value:t.guanliXue,name:"管理学"},{value:t.yishuxue,name:"艺术学"},{value:t.junshixue,name:"军事学"}],this.initChart()},chooseNumData:function(){var t=this.chooseNumData.data;for(var e in t){t[e].first_course_require?this.isShowFirstChecked=!0:this.isShowFirstChecked=!1;break}}},methods:{getUserChartBySubject:function(){var t=this,e=window.sessionStorage.getItem("ymtxToken");this.$ajax.post(this.G_uri+"/chooseSubject/getChooseSubjectReportDetail",{source:1,batch:this.$route.query.batch},{headers:{token:e}}).then(function(e){if(console.log(e),2e3==e.data.code){var a=e.data.data;t.data=e.data.data,t.echartsData=e.data.data.char,t.echartsSubjectCount=e.data.data.char.subjectCount,t.province=a.studentData.province,t.chooseNumData=a.subjectUniversity.choose_num}}).catch(function(t){console.log(t)})},initChart:function(){this.chart=r.a.init(this.$refs.myEchart),this.chart.setOption({title:{text:"可选专业:"+this.echartsSubjectCount,top:275,left:"50%",textStyle:{color:"#2c8ffc"}},color:["#7eb6ea","#93e982","#93eBe0","#f2505f","#32908f","#e4d25f","#f05eB1","#8188e7","#f6a262","#3276b4","#444348","#eB3d3d","#90abda","#1aae54"],toolbox:{show:!1,feature:{saveAsImage:{}},right:50},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",y:70,itemGap:20,data:this.disciplineBZdata},series:[{name:"学科门类",type:"pie",radius:["20%","35%"],silent:!1,center:[460,290],tooltip:{position:["50%","50%"]},label:{normal:{formatter:"  {b|{b}：}{c}  {per|{d}%}  ",textStyle:{fontSize:"16",fontWeight:"bold"},rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#2c8ffc",padding:[2,4],borderRadius:2}}}},data:this.echartsData1}]})}},created:function(){this.getUserChartBySubject(),window.scrollTo(0,0)},mounted:function(){this.getUserChartBySubject(),this.initChart(),"3"==window.sessionStorage.tuance&&(this.isTuance=!0)},destroyed:function(){window.location.reload()}},o=c,l=(a("10c9"),a("2877")),_=Object(l["a"])(o,s,i,!1,null,"3b8792a4",null);_.options.__file="xuankeReport.vue";e["default"]=_.exports},4167:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4245883d.b08de0d0.js.map