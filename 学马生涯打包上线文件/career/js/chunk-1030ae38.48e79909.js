(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1030ae38"],{"0003":function(t,a,s){"use strict";var e=s("8ddc"),i=s.n(e);i.a},"32ee":function(t,a,s){"use strict";var e=s("34b1"),i=s.n(e);i.a},"34b1":function(t,a,s){},3984:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"downloadProgressMark"},[s("div",{staticClass:"progressBar"},[s("div",{staticClass:"box1"},[s("div",{staticClass:"jincheng",style:{right:100-parseInt(t.currentPage/t.totalPages*1e4)/100+"%"}})]),s("div",{staticClass:"box2"},[t._v(t._s(parseInt(t.currentPage/t.totalPages*100))+"%")])])])},i=[],n={props:["currentPage","totalPages"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},r=n,c=(s("32ee"),s("2877")),l=Object(c["a"])(r,e,i,!1,null,"0877dfc6",null);a["a"]=l.exports},"7f7f":function(t,a,s){var e=s("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||s("9e1e")&&e(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"8ddc":function(t,a,s){},e732:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"evaluation_report"},[t.isDownloading?s("DownloadProgress",{attrs:{totalPages:t.totalPages,currentPage:t.currentPage}}):t._e(),s("div",{staticClass:"pdf",staticStyle:{"background-color":"#E8E8E8"},attrs:{id:"pdfDom"}},[s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page_cover pdf-page"},[t._m(0),t.reportData?s("div",{staticClass:"main"},[s("p",[t._v("姓       名："+t._s(t.reportData.name))]),s("p",[t._v("报告编号："+t._s(t.reportData.reportNum))]),s("p",[t._v("报告时间："+t._s(t.reportData.updatedAt))])]):t._e()])]),s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page pdf-page"},[t._m(1),s("div",{staticClass:"content",attrs:{id:"catalog_1"}},[s("div",{staticClass:"big_title_box",on:{click:function(a){return t.scrollToView("page1")}}},[t._m(2),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("1")])]),s("div",{staticClass:"big_title_box",on:{click:function(a){return t.scrollToView("page2")}}},[t._m(3),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("2")])]),s("div",{staticClass:"big_title_box",on:{click:function(a){return t.scrollToView("page3")}}},[t._m(4),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("3")])])])])]),t._m(5),s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t第二部分 测评结果\n\t\t\t\t\t")]),s("div",{staticClass:"content result",attrs:{id:"catalog_3"}},[s("p",{staticClass:"resule_header"},[t._v("人际关系量表各维度解释如下：")]),t._m(6),s("div",{staticClass:"resule_table"},[s("p",{staticClass:"completion"},[t._v("通过对您的作答结果进行分析，您的"),s("span",[t._v("总得分为"+t._s(t.reportData.report.studentData.totalScore)+"分")]),t._v("，这说明："),s("span",[t._v(t._s(t.reportData.report.studentData.content))])]),s("ul",t._l(t.reportData.report.studentData.list,function(a,e,i){return s("li",{key:i},[s("p",{staticClass:"lis_title"},[s("span",{staticClass:"color_box"}),s("span",{staticClass:"weidu"},[t._v("维度："+t._s(a.category))]),s("span",[t._v("得分："),s("span",{staticClass:"defen"},[t._v(t._s(a.score))])])]),s("p",{staticClass:"lis_detail"},[t._v("解释：")]),s("p",{staticClass:"detail"},[t._v(t._s(a.content))])])}),0)])])])]),t._m(7)]),s("div",{staticClass:"get_pdf"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"btn_pdf",on:{click:function(a){t.getPdf(t.htmlTitle),t.isDownloading=!0}}},[t._v("下载报告")])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("h3",[t._v("人际关系测评报告")]),s("p",{staticClass:"detail"},[t._v("[ 个人报告 ]")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",{staticClass:"header"},[s("span",[t._v("目录")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"big_title"},[s("span",[t._v("Part1")]),t._v("前言")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"big_title"},[s("span",[t._v("Part2")]),t._v("测评结果")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"big_title"},[s("span",[t._v("Part3")]),t._v("温馨提示")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t第一部分 前言\n\t\t\t\t\t")]),s("div",{staticClass:"content",attrs:{id:"catalog_2"}},[s("div",{staticClass:"foreword_detail"},[s("p",[t._v("20世纪最伟大的心灵导师和成功学大师戴尔·卡耐基说：在一个人成功的因素中，专业知识只占15%，其余的85%则取决于人际关系。人是一种社会性动物，具有群居的倾向。在我们的学习和生活中，不管我们是否愿意，都在有意无意地和周围人发生关系、进行交往。没有人可以完全独立、不和任何人打交道，只活在自己的世界里的人生显然是不现实的。良好的人际关系是事业发展与人生幸福的基石。")]),s("p",[t._v("人际关系需要属于社交需要，马斯洛需要层次理论认为生理需要、安全需要、社交需要、尊重需要属于缺失性需要，只有在缺失性需要得到基本满足的前提下，个体才会去追求成长性需要，也就是自我实现的需要。学习需要是自我实现的需要，因此只有在人际关系需要得到基本满足的前提下，个体才会去追求学习需要。因此，对于中学生来说，人际关系是非常重要的。中学生人际关系的好坏会影响学习和生活的各个方面，影响中学生对自我的认知，进而影响学习成绩和心理健康。人际关系综合诊断量表包括交谈、交际与交友、待人接物和与异性交往4个维度。通过人际关系综合诊断量表，发现中学生人际关系中存在的具体问题，从而有针对性地解决中学生的人际关系困扰。")])]),s("div",{staticClass:"foreword_footer"},[s("div",{staticClass:"title"},[t._v("阅读须知：")]),s("p",[t._v("①本报告基于您的在线作答结果，通过系统分析您在各个维度的得分水平，有针对性地为您提供建议。")]),s("p",[t._v("②测评结果的准确性和可靠性主要依赖于您是否对自己有明确客观的认识，以及在测评过程中是否认真和坦白等。")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"explanation"},[s("ul",[s("li",[s("p",{staticClass:"title"},[t._v("交谈")]),s("p",{staticClass:"detail"},[t._v("准确表达自己感受和想法以及正确倾听的能力")])]),s("li",[s("p",{staticClass:"title"},[t._v("交际与交友")]),s("p",{staticClass:"detail"},[t._v("在社交场合从容应对以及与陌生人相处的能力")])]),s("li",[s("p",{staticClass:"title"},[t._v("待人接物")]),s("p",{staticClass:"detail"},[t._v("与朋友相处的技巧和机智")])]),s("li",[s("p",{staticClass:"title"},[t._v("与异性交往")]),s("p",{staticClass:"detail"},[t._v("与异性交往的过程中的感受是否愉悦")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t第三部分 温馨提示\n\t\t\t\t\t")]),s("div",{staticClass:"content warmtips",attrs:{id:"catalog_3"}},[s("p",{staticClass:"warmtips_header"},[t._v("\n\t\t\t\t\t\t\t对中学生来说，人际关系质量的好坏会影响学习和生活的各个方面。因此具有良好的人际关系对中学生是非常重要的，以下是建立良好人际关系的一些小技巧：\n\t\t\t\t\t\t")]),s("div",{staticClass:"tips_box"},[s("h6",{staticClass:"tips_title"},[t._v("1.学会觉察自己的情绪")]),s("p",[t._v("《人性的弱点》作者卡耐基曾经说过：“一个人的姓名是他个人最熟悉、最甜美、最妙不可言的声音”。在交际中，得到别人好感最简单的方法就是牢记他人的名字。在一个新的场合快速拉近两个朋友之间距离的最好方法，就是记住新朋友的名字。对于刚开始交往而又不太熟悉的朋友，愉快地叫出他的名字，他会倍感亲切。 能够叫出别人的名字，别人对你的关注度就会越高，相反如果你不能叫出别人的名字或者是叫错了，那么你就有可能失去与对方建立连接的机会。")]),s("p",[t._v("因此在人际交往的过程中，要有意识地记住别人的名字，在和别人打招呼的时候，可以叫一下对方的名字，有助于拉近彼此之间的关系。")])]),s("div",{staticClass:"tips_box"},[s("h6",{staticClass:"tips_title"},[t._v("2.如果对方名字有三个字把姓去掉，直接叫名字。")]),s("p",[t._v("如果一个人的名字是三个字，可以不用叫全名，把姓去掉直接称呼他的名字即可，这样给对方的感觉更加亲切和温暖。比如说“陈小白”，你可以直接叫小白，这样的称呼对方会感觉更加有温度和亲切，像一家人的感觉。当然你在这样叫的同时，一定要注意你的语调和语气，要叫得自然顺畅，大方得体，才不会显得刻意为之和娇柔造作，这样才会更真实，才能得到别人的接受和认可。")])]),s("div",{staticClass:"tips_box"},[s("h6",{staticClass:"tips_title"},[t._v("\n\t\t\t\t\t\t\t\t3.保持积极心态与良好的状态\n\t\t\t\t\t\t\t")]),s("p",[t._v("身体语言和有声语言一样，也有积极肯定与消极否定之分。如果你是积极而且充满自信，人们和你在一起也会感到轻松自信；如果你是消极的，他们也有同样的反应。因此，走路，讲话的方式是很重要的。要有意培养自己良好姿态的意识。当你传达积极的身体信号时，人们就会不由自主地对你做出更好的反应。")])])])])])}],n=(s("7f7f"),s("3984")),r={components:{DownloadProgress:n["a"]},props:[],data:function(){return{isDownloading:!1,totalPages:1,currentPage:0,htmlTitle:"",reportData:null,xAxisData:[],seriesData:[]}},methods:{getReport:function(){var t=window.sessionStorage.getItem("ymtxToken"),a=this,s=this.$route.query.id;this.$ajax.post(this.G_uri+"/assessQuestion/getReport",{id:s,assessType:6},{headers:{token:t}}).then(function(t){a.reportData=t.data.data,a.htmlTitle=t.data.data.name+"的人际关系综合诊断测评报告"}).catch(function(t){console.log(t)})},goDetail:function(t){var a=this.$router.resolve({path:t}),s=a.href;window.open(s,"_blank")},scrollToView:function(t){document.getElementById(t).scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})},createEcharts:function(){var t=this.$echarts.init(document.getElementById("echarts")),a={title:{text:"维度得分"},tooltip:{},legend:{data:[]},xAxis:{type:"category",data:this.xAxisData},yAxis:{max:5,splitNumber:5,Interval:1,type:"value"},series:[{name:"维度分析",type:"bar",data:this.seriesData,label:{show:!0,color:"#fff"}}],barCategoryGap:"40%",color:"#2c8ffc"};t.setOption(a)}},watch:{reportData:function(){var t=this,a=this.reportData.report.reportScoreData,s=[],e=[],i={fontSize:16,color:"#000"};for(var n in a){var r={};r.textStyle=i,r.value=n,s.push(r),e.push(a[n].average)}console.log(s,7777),this.xAxisData=s,this.seriesData=e,this.$nextTick(function(){t.createEcharts()})}},created:function(){this.getReport()},mounted:function(){}},c=r,l=(s("0003"),s("2877")),o=Object(l["a"])(c,e,i,!1,null,"1d8d710d",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-1030ae38.48e79909.js.map