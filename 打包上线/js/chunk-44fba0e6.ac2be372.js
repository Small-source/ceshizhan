(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44fba0e6"],{"6a92":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"xuankeReport"},[e("div",{staticClass:"inner"},[!t.isTuance&&t.data.headLogo?e("div",{staticClass:"report_page"},[e("div",{staticClass:"page_title"},[t._v("\n                EVALUATION REPORT OF HIGH SCHOOL STUDENTS` SUBJECT SELEVTION\n            ")]),e("div",{staticClass:"page_img_title"},[e("img",{attrs:{src:t.data.headLogo.evaluation_logo}})]),e("div",{staticClass:"page_img_logo"},[e("img",{attrs:{src:t.data.headLogo.home_logo}})]),e("div",{staticClass:"page_detail"},[e("ul",[e("li",[e("p",[t._v("姓       名：")]),e("p",[t._v(t._s(t.data.studentData.name))])]),e("li",[e("p",[t._v("年       级：")]),e("p",[t._v(t._s(t.data.studentData.baccll_year))])]),e("li",[e("p",[t._v("日       期：")]),e("p",[t._v(t._s(t.data.studentData.serial_choose_report_create_at))])])])]),e("div",{staticClass:"page_bottom"},[e("img",{attrs:{src:"/imgs/xingaokao/xuankejuece/common/page-one-line.png",alt:""}}),e("p",[t._v(t._s(t.data.oem.name)+"旗下品牌")]),e("p",[t._v("测评网址"+t._s(t.data.oem.oem))]),t.data.headLogo.address?e("p",[t._v("地址"+t._s(t.data.headLogo.address))]):t._e(),e("p",[t._v("系统开发技术、测评方法及报告设计已申请知识产权保护")]),e("p",[t._v("本报告仅供相关个人阅读参考，未经许可不得传阅 严禁用做他途")])])]):t._e(),t.isTuance?e("div",{staticClass:"header_tuance"},[e("p",{staticClass:"title"},[t._v("中学生选科测评报告")])]):t._e(),!t.isTuance&&t.data.headLogo?e("div",{staticClass:"header"},[e("img",{attrs:{src:t.data.headLogo.header_logo,alt:""}}),e("p",{staticClass:"page_seq"}),e("p",{staticClass:"header_title"},[t._v("中学生选科测评报告")])]):t._e(),e("div",{staticClass:"content"},[t.data.target&&t.data.target[1]?e("div",{staticClass:"content_main"},[t._m(0),e("ul",{staticClass:"mubiao_box"},t._l(t.data.target[1],function(a,s){return e("li",[t._v(t._s(a.subject_name))])}),0)]):t._e(),t.data.target&&t.data.target[2]?e("div",{staticClass:"content_main"},[t._m(1),e("ul",{staticClass:"mubiao_box"},t._l(t.data.target[2],function(a,s){return e("li",[t._v(t._s(a.subject_name))])}),0)]):t._e(),e("div",{staticClass:"my_xuanke"},[t._m(2),e("div",{staticClass:"xuanke_box"},[e("p",[t._v("选科组合")]),e("p",[t._v(t._s(t.data.studentSubjectData))])])]),e("div",{staticClass:"yuanxiao"},[t._m(3),t._l(t.data.subjectUniversity,function(a,s){return e("div",{key:s,staticClass:"yuanxiao_box"},[e("div",{staticClass:"yuanxiao_box_title"},[e("span",[t._v(t._s(a.name))]),e("span",[t._v("(共"+t._s(a.total)+"所)")])]),e("ul",t._l(a.arr,function(s,i){return a.total>0?e("li",{key:i,staticStyle:{"line-height":"36px"}},[s.first_course_require?e("div",[e("span",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[t._v("首选:"+t._s(s.first_course_require)),e("br"),t._v("再选:"+t._s(s.second_course_require))]),e("span",{staticClass:"num"},[t._v(t._s("("+s.num+")"))])]):e("div",[e("span",[t._v(t._s(s.choose_course_require))]),e("span",{staticClass:"num"},[t._v(t._s("("+s.num+")"))])])]):e("li",[t._v("无")])}),0)])})],2),e("div",{staticClass:"suggest"},[t._m(4),e("div",{staticClass:"suggest_main"},[e("table",{attrs:{width:"100%",cellspacing:"0",border:"1"}},[t._m(5),t._l(t.data.report,function(a,s){return e("tr",{attrs:{bgcolor:"white",height:"58",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v(t._s(a.subject_name))]),e("td",[t._v(t._s(a.weight))]),e("td",[t._v(t._s(a.subject_coverage)+"%")]),e("td",[t._v(t._s(a.university_coverage)+"%")]),e("td",[t._v(t._s(a.targetSubject_coverage))]),e("td",[e("i",{directives:[{name:"show",rawName:"v-show",value:1==a.isGoal,expression:"item.isGoal==1"}],staticClass:"icon iconfont",staticStyle:{"font-size":"18px",color:"#0aa70a"}},[t._v("✔")])])])})],2)])]),e("div",{staticClass:"kebaozhuanye"},[t._m(6),e("div",{staticClass:"myEcharts"},[e("div",{ref:"myEchart",class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})])]),t._l(t.data.subjectCategoryData,function(a,s){return e("div",{key:s,staticClass:"subject_message"},[t._m(7,!0),e("div",{staticClass:"content_main subject"},[e("table",{attrs:{width:"100%",cellspacing:"0",cellpadding:"0",border:"1"}},[e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{width:"120",bgcolor:"#89b1d8"}},[t._v("专业名称")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(a.name))])]),e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("学科门类")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(a.first_name))])]),e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("专业类")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(a.second_name))])]),e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("专业代码")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(a.code))])]),e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("授予学位")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(a.academic_degree))])]),e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("学制")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},[t._v(t._s(a.learn_year))])]),e("tr",{attrs:{bgcolor:"white",align:"center"}},[e("td",{attrs:{bgcolor:"#89b1d8"}},[t._v("培养目标")]),e("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(a.target)}})]),e("tr",{attrs:{bgcolor:"white"}},[e("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("主要课程")]),e("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(a.course)}})]),e("tr",{attrs:{bgcolor:"white",align:"left"}},[e("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("毕业生能力")]),e("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(a.ability)}})]),e("tr",{attrs:{bgcolor:"white"}},[e("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("就业前景与方向")]),e("td",{staticClass:"subject_info",attrs:{align:"left"},domProps:{innerHTML:t._s(a.prospect_direction)}})]),e("tr",{attrs:{bgcolor:"white"}},[e("td",{attrs:{bgcolor:"#89b1d8",align:"center"}},[t._v("相近专业")]),e("td",{staticClass:"subject_info",attrs:{align:"left"}},t._l(a.similar_name,function(s,i){return e("span",[t._v(t._s(s.name)),e("span",{directives:[{name:"show",rawName:"v-show",value:i<a.similar_name.length-1,expression:"index < item.similar_name.length-1"}]},[t._v("、")])])}),0)])])])])})],2),e("div",{staticClass:"footer"},[t.data.length&&t.data.oem.oem?e("p",{staticClass:"footer_left"},[t._v("测评网址："+t._s(t.data.oem.oem))]):t._e(),e("p",{staticClass:"footer_right"},[t._v("测评方法、工具及报告设计已申请产权保护")])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("目标专业(推荐专业)")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("目标专业(自选专业)")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("我的选科")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("选科要求及可报院校")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("选科建议")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticStyle:{color:"#fff","font-size":"24px"},attrs:{bgcolor:"#3b7dbe",height:"90th",align:"center"}},[e("th",{attrs:{width:"190"}},[t._v("学科")]),e("th",{attrs:{width:"152"}},[t._v("加权结果")]),e("th",{attrs:{width:"220"}},[e("p",[t._v("可报考专业")]),e("p",[t._v("覆盖率")])]),e("th",{attrs:{width:"190"}},[e("p",[t._v("可报考院校")]),e("p",[t._v("覆盖率")])]),e("th",{attrs:{width:"190"}},[t._v("目标专业覆盖率")]),e("th",{attrs:{width:"190"}},[t._v("设为目标学科")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("科目可报专业数据")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main_title"},[e("span",[t._v("目标专业信息")])])}],n=e("313e"),r=e.n(n),l={props:{className:{type:String,default:"yourClassName"},id:{type:String,default:"yourID"},width:{default:"800px"},height:{default:"800px"}},data:function(){return{isTuance:!1,data:[],state:1,page:"",phdData:[],zyList:{1:[],2:[]},xkjyList:[],UserProvince:"",TargetDiscipline:[],isShowTips:!1,tishi:"",htmlTitle:"xuankezhiyuan.pdf",echartsData:[],echartsSubjectCount:"--",echartsData1:[{value:0,name:"哲学"},{value:0,name:"经济学"},{value:0,name:"法学"},{value:0,name:"教育学"},{value:0,name:"文学"},{value:0,name:"历史学"},{value:0,name:"理学"},{value:0,name:"工学"},{value:0,name:"农学"},{value:0,name:"医学"},{value:0,name:"管理学"},{value:0,name:"艺术学"},{value:0,name:"军事学"}],disciplineBZdata:["哲学","经济学","法学","教育学","文学","历史学","理学","工学","农学","医学","管理学","艺术学","军事学"]}},watch:{echartsData:function(){var t=this.echartsData;this.echartsData1=[],this.echartsData1=[{value:t.zhexue,name:"哲学"},{value:t.jingji,name:"经济学"},{value:t.faxue,name:"法学"},{value:t.jiaoyuxue,name:"教育学"},{value:t.wenxue,name:"文学"},{value:t.lishi,name:"历史学"},{value:t.lixue,name:"理学"},{value:t.gongxue,name:"工学"},{value:t.nongxue,name:"农学"},{value:t.yixue,name:"医学"},{value:t.guanliXue,name:"管理学"},{value:t.yishuxue,name:"艺术学"},{value:t.junshixue,name:"军事学"}],this.initChart()}},methods:{getUserChartBySubject:function(){var t=this,a=window.sessionStorage.getItem("ymtxToken");this.$ajax.post(this.G_uri+"/chooseSubject/getChooseSubjectReportDetail",{source:3,batch:this.$route.query.batch},{headers:{token:a}}).then(function(a){console.log(a),2e3==a.data.code&&(t.data=a.data.data,t.echartsData=a.data.data.char,t.echartsSubjectCount=a.data.data.char.subjectCount)}).catch(function(t){console.log(t)})},initChart:function(){this.chart=r.a.init(this.$refs.myEchart),this.chart.setOption({title:{text:"可选专业:"+this.echartsSubjectCount,top:"center",left:"center",textStyle:{color:"#2c8ffc"}},toolbox:{show:!1,feature:{saveAsImage:{}},right:50},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:this.disciplineBZdata},series:[{name:"学科门类",type:"pie",radius:["40%","55%"],silent:!1,label:{normal:{formatter:"  {b|{b}：}{c}  {per|{d}%}  ",textStyle:{fontSize:"16",fontWeight:"bold"},rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#2c8ffc",padding:[2,4],borderRadius:2}}}},data:this.echartsData1}]})}},created:function(){this.getUserChartBySubject(),window.scrollTo(0,0)},mounted:function(){this.getUserChartBySubject(),this.initChart(),"3"==window.sessionStorage.tuance&&(this.isTuance=!0)}},c=l,o=(e("8a13"),e("2877")),_=Object(o["a"])(c,s,i,!1,null,"55712272",null);a["default"]=_.exports},"8a13":function(t,a,e){"use strict";var s=e("ab8c"),i=e.n(s);i.a},ab8c:function(t,a,e){}}]);
//# sourceMappingURL=chunk-44fba0e6.ac2be372.js.map