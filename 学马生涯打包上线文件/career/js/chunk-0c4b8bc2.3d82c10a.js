(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c4b8bc2"],{"182a":function(e,t,i){"use strict";var a=i("f862"),s=i.n(a);s.a},ac6a:function(e,t,i){for(var a=i("cadf"),s=i("0d58"),n=i("2aba"),l=i("7726"),o=i("32e9"),d=i("84f2"),r=i("2b4c"),c=r("iterator"),u=r("toStringTag"),m=d.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=s(p),v=0;v<h.length;v++){var g,f=h[v],E=p[f],b=l[f],C=b&&b.prototype;if(C&&(C[c]||o(C,c,m),C[u]||o(C,u,f),d[f]=m,E))for(g in a)C[g]||n(C,g,a[g],!0)}},b0bf:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recordDetail"},[i("h6",{staticClass:"title"},[e._v("\n            咨询记录\n            "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}],staticClass:"btn_edit",on:{click:function(t){e.isEdit=!0,e.isDateEdit=!1,e.isNumEdit=!1}}},[e._v("编辑")])]),i("div",{staticClass:"xueyeBox"},[i("div",{staticClass:"child"},[e._v("\n                学业规划：第\n                "),i("el-select",{attrs:{placeholder:"",disabled:!e.isEdit||!e.isNumEdit},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}},e._l(e.numList,function(e,t){return i("el-option",{key:t,attrs:{lable:e.value,value:e.value,disabled:!e.isEdit}})}),1),e._v("\n                次\n            ")],1),i("div",{staticClass:"child"},[e._v("\n                日期：\n                "),i("el-date-picker",{attrs:{disabled:!e.isEdit||!e.isDateEdit,type:"date",placeholder:"请选择访谈日期","value-format":"yyyy-MM-dd"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),i("div",{staticClass:"theme"},[e._v("\n\t        \t主题训练：\n\t        \t"),i("el-select",{attrs:{multiple:"",placeholder:"请选择训练主题","multiple-limit":3,disabled:!e.isEdit},model:{value:e.themeTraining,callback:function(t){e.themeTraining=t},expression:"themeTraining"}},e._l(e.themeOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)]),i("div",{staticClass:"contentBox"},[e._m(0),i("div",{staticClass:"detail"},[e.isEdit?i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.perceptionAndExperience,expression:"perceptionAndExperience"}],attrs:{placeholder:"最多输入500个字!",maxlength:"500",onfocus:"this.placeholder=''"},domProps:{value:e.perceptionAndExperience},on:{input:function(t){t.target.composing||(e.perceptionAndExperience=t.target.value)}}}):i("p",{domProps:{innerHTML:e._s(e.perceptionAndExperience&&e.perceptionAndExperience.replace(/\n/g,"</br>"))}})])]),i("div",{staticClass:"contentBox"},[i("p",{staticClass:"title"},[e._v("学生反馈")]),i("div",{staticClass:"detail"},[e.isEdit?i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.studentFeedback,expression:"studentFeedback"}],attrs:{placeholder:"最多输入500个字!",maxlength:"500",onfocus:"this.placeholder=''"},domProps:{value:e.studentFeedback},on:{input:function(t){t.target.composing||(e.studentFeedback=t.target.value)}}}):i("p",{domProps:{innerHTML:e._s(e.studentFeedback&&e.studentFeedback.replace(/\n/g,"</br>"))}})])]),i("div",{staticClass:"contentBox"},[i("p",{staticClass:"title"},[e._v("教师评语")]),i("div",{staticClass:"detail"},[e.isEdit?i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.teacherComments,expression:"teacherComments"}],attrs:{placeholder:"最多输入500个字!",maxlength:"500",onfocus:"this.placeholder=''"},domProps:{value:e.teacherComments},on:{input:function(t){t.target.composing||(e.teacherComments=t.target.value)}}}):i("p",{domProps:{innerHTML:e._s(e.teacherComments&&e.teacherComments.replace(/\n/g,"</br>"))}})])]),i("div",{staticClass:"upload_img_box"},[i("p",[e._v("上传图片最多上传两张")]),i("div",{staticClass:"main_box"},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":e.handleChange,accept:"image/jpeg,image/jpg,image/png",action:e.G_uri+"/plan/storeConsultRecords","file-list":e.fileList,"list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,multiple:!0,limit:2,"auto-upload":!1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件")])],1),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],staticClass:"btn_save",on:{click:function(t){return e.storeConsultRecords()}}},[e._v("保存")])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"bitian"},[i("i",[e._v("*")]),e._v("学习过程中的感悟和体会")])}],n=(i("ac6a"),{name:"recordDetail",data:function(){return{isEdit:!0,isDateEdit:!0,isNumEdit:!0,planList:[],numList:[{value:"1",isEdit:!0},{value:"2",isEdit:!0},{value:"3",isEdit:!0},{value:"4",isEdit:!0},{value:"5",isEdit:!0},{value:"6",isEdit:!0},{value:"7",isEdit:!0},{value:"8",isEdit:!0},{value:"9",isEdit:!0},{value:"10",isEdit:!0},{value:"11",isEdit:!0},{value:"12",isEdit:!0},{value:"13",isEdit:!0},{value:"14",isEdit:!0},{value:"15",isEdit:!0},{value:"16",isEdit:!0},{value:"17",isEdit:!0},{value:"18",isEdit:!0},{value:"19",isEdit:!0},{value:"20",isEdit:!0}],date:"",num:"",themeTraining:[],perceptionAndExperience:"",studentFeedback:"",teacherComments:"",id:"",isSave:!1,themeOptions:[{value:"时间管理",label:"时间管理"},{value:"目标管理",label:"目标管理"},{value:"归因训练",label:"归因训练"},{value:"自信心提升",label:"自信心提升"},{value:"自我激励",label:"自我激励"},{value:"思维导图",label:"思维导图"},{value:"自我提问",label:"自我提问"},{value:"情绪管理",label:"情绪管理"},{value:"人际管理",label:"人际管理"},{value:"注意力训练",label:"注意力训练"}],fileList:[],imgList:[],dialogImageUrl:"",dialogVisible:!1}},methods:{successMessage:function(){this.$message({type:"success",message:"保存成功"})},unSuccess:function(e){this.$message({type:"error",message:e})},getDetailConsultRecords:function(){var e=this,t=this.id;this.$ajax.post(this.G_uri+"/plan/detailConsultRecords",{id:t},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){var i=t.data.data;if(2e3==t.data.code&&i.date){if(e.date=i.date,e.num=i.num,e.themeTraining=i.themeTraining,e.perceptionAndExperience=i.perceptionAndExperience,e.studentFeedback=i.studentFeedback,e.teacherComments=i.teacherComments,i.img1){var a={name:"img1"};a.url=i.img1,a.raw=i.img1,e.fileList.push(a)}if(i.img2){var s={name:"img2"};s.url=i.img2,s.raw=i.img2,e.fileList.push(s)}}})},storeConsultRecords:function(){var e=this,t=this.date,i=this.num,a=this.id,s=this.themeTraining,n=this.perceptionAndExperience,l=this.studentFeedback,o=this.teacherComments,d="",r="";if(1==this.fileList.length?d=this.fileList[0].raw:2==this.fileList.length&&(d=this.fileList[0].raw,r=this.fileList[1].raw),0!=(t&&i&&s.length&&n)){var c=new FormData;c.append("id",a),c.append("date",t),c.append("num",i),c.append("themeTraining",s),c.append("perceptionAndExperience",n),c.append("studentFeedback",l),c.append("teacherComments",o),c.append("img1",d),c.append("img2",r),this.$ajax.post(this.G_uri+"/plan/storeConsultRecords",c,{headers:{"Content-Type":"multipart/form-data",token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){2e3==t.data.code&&(e.isEdit=!1,e.successMessage())})}else this.unSuccess("请完善必填信息：学业规划、日期、主题训练、学习感悟与体会！")},getAcademicPlanList:function(){var e=this;this.$ajax.post(this.G_uri+"/academicPlanCategory/getAcademicPlanList",{},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){var i=t.data.data;2e3==t.data.code&&(e.planList=i)})},getConsultLogList:function(){var e=this;this.$ajax.post(this.G_uri+"/plan/getConsultRecordsList",{pageSize:50,pageNumber:1},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){var i=t.data.data.list,a=e.numList;2e3==t.data.code&&i.length&&i.forEach(function(t){a.forEach(function(i,a){t.num==i&&(e.numList[a].isEdit=!1)})})}).catch(function(e){console.log(e)})},handleChange:function(e,t){console.log(e),console.log(t),this.fileList=t},handleRemove:function(e,t){this.fileList=t,console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},delThinkingAbilityTrainingImg:function(e,t){var i=this;this.$ajax.post(this.G_uri+"/coach/delThinkingAbilityTrainingImg",{pid:e,id:t},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){t.data.data;2e3==t.data.code&&i.getCardDetail(e)}).catch(function(e){console.log(e)})}},created:function(){1==this.$route.query.isEdit?(this.getAcademicPlanList(),this.isEdit=!0,this.isDateEdit=!0,this.isNumEdit=!0):2==this.$route.query.isEdit?(this.id=this.$route.query.id,this.isEdit=!1,this.isDateEdit=!1,this.isNumEdit=!1,this.getDetailConsultRecords()):(this.id=this.$route.query.id,this.isEdit=!0,this.isDateEdit=!1,this.isNumEdit=!1,this.getDetailConsultRecords())},watch:{num:function(){var e=this;if(3!=this.$route.query.isEdit){var t=this.planList,i=this.num;this.isDateEdit=!0,t.length&&t.forEach(function(t){t.num==i&&(e.date=t.date,e.isDateEdit=!1)})}}}}),l=n,o=(i("bee9"),i("182a"),i("2877")),d=Object(o["a"])(l,a,s,!1,null,"fa3905bc",null);t["default"]=d.exports},bee9:function(e,t,i){"use strict";var a=i("f2ad"),s=i.n(a);s.a},f2ad:function(e,t,i){},f862:function(e,t,i){}}]);
//# sourceMappingURL=chunk-0c4b8bc2.3d82c10a.js.map