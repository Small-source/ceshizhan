(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0368f30"],{"0cc5":function(t,e,a){},"381f":function(t,e,a){"use strict";var i=a("65bf"),s=a.n(i);s.a},"3b23":function(t,e,a){"use strict";var i=a("8105"),s=a.n(i);s.a},"3bbf":function(t,e,a){"use strict";(function(t){a("7f7f");var i=a("78872");e["a"]={name:"reward",data:function(){return{type:"1",date:"",name:"",activity:"",degree:"",desc:"",id:"",waring:"",addtanchuang:!1,showtanchuang:!1,modifytanchuang:!1,rewardList:[],rewardDetail:{},options:["全国青少年科技创新大赛","中国青少年机器人竞赛","全国青少年创意编程与智能设计大赛","“童创未来”全国青少年人工智能创新挑战赛","全国青少年电子信息智能创新大赛","全国中小学信息技术创新与实践大赛","全国中小学生创·造大赛","青少年科学调查体验竞赛","“明天小小科学家”竞赛","全国青年科普创新实验暨作品大赛","全国中学生天文知识竞赛","全国防震减灾知识大赛","全国中学生数学奥林匹克竞赛","全国中学生物理奥林匹克竞赛","全国中学生化学奥林匹克竞赛","全国中学生生物学奥林匹克竞赛","全国中学生信息学奥林匹克竞赛","世界华人学生作文大赛","全国中学生科普科幻作文大赛","叶圣陶杯全国中学生新作文大赛","高中生创新能力大赛","“外研社杯”全国中学生外语素养大赛","中国日报社“21世纪杯”全国英语演讲比赛","“希望杯”全国数学邀请赛","“地球小博士”和“环保之星”全国地理科普知识大赛","全国中小学生绘画书法作品比赛","中日青少年书画友好交流大赛","全国青少年科学影像大赛","丝路国家青少年国际摄影竞赛"]}},components:{masks:i["a"]},methods:{list:function(){var t=this;this.$ajax.post(this.G_uri+this.ports.award.list,{},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(e){2e3==e.data.code&&(t.rewardList=e.data.data.list)})},add:function(){this.waring="";var e=new FormData,a=t("input[type='file']").val();if(a){var i=a.substring(a.lastIndexOf(".")+1).toLowerCase();if("png"!=i&&"jpg"!=i)return this.waring="请选择jpg或png文件!",!1;e.append("url",t("input[type='file']")[0].files[0])}if(this.name)if(this.name.length>=50)this.waring="不能超过50个字符";else if(this.date){e.append("type",this.type),e.append("name",this.name),e.append("date",this.date),e.append("activity",this.activity),e.append("degree",this.degree),e.append("desc",this.desc);var s=this;this.$ajax.post(this.G_uri+this.ports.award.add,e,{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){(t.data.data=2e3)&&(s.list(),s.addtanchuang=!1,s.clear())})}else this.waring="请选择日期";else this.waring="请输入具体奖项或名称"},show:function(t,e){var a=this,i=this;e||(i.showtanchuang=!0),this.$ajax.post(this.G_uri+this.ports.award.show,{id:t},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){2e3==t.data.code&&(i.rewardDetail=t.data.data,e&&(a.date=t.data.data.date,a.name=t.data.data.name,a.activity=t.data.data.activity,a.degree=t.data.data.degree,a.desc=t.data.data.desc,a.id=t.data.data.id,a.type=t.data.data.type+""))})},del:function(t,e){this.$ajax.post(this.G_uri+this.ports.award.delete,{ids:t},{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){e.target.parentNode.parentNode.remove()})},modify:function(){this.waring="";var e=new FormData,a=t("input[type='file']").val();if(a){var i=a.substring(a.lastIndexOf(".")+1).toLowerCase();if("png"!=i&&"jpg"!=i)return this.waring="请选择jpg或png文件!",!1;e.append("url",t("input[type='file']")[0].files[0])}if(this.name)if(this.name.length>=50)this.waring="不能超过50个字符";else if(this.date){e.append("id",this.id),e.append("type",this.type),e.append("name",this.name),e.append("date",this.date),e.append("activity",this.activity),e.append("degree",this.degree),e.append("desc",this.desc);var s=this;this.$ajax.post(this.G_uri+this.ports.award.modify,e,{headers:{token:window.sessionStorage.getItem("ymtxToken")}}).then(function(t){s.modifytanchuang=!1,s.clear(),s.list()})}else this.waring="请选择日期";else this.waring="请输入具体奖项或名称"},modifyBox:function(t){this.modifytanchuang=!0,this.show(t,!0)},clear:function(){this.date="",this.name="",this.activity="",this.degree="",this.desc="",this.waring="",this.id="",this.type="1",t('input[type="file"]').val("")},delConfirm:function(t,e){var a=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.del(t,e),a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},quietConfirm:function(){var t=this;this.$confirm("退出后不会保存编辑内容，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.clear(),t.addtanchuang=!1,t.modifytanchuang=!1}).catch(function(){})}},mounted:function(){this.list()}}}).call(this,a("1157"))},"48b7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reward"},[a("div",{staticClass:"rewardBox"},[t._m(0),a("div",{staticClass:"add"},[a("span",{on:{click:function(e){t.addtanchuang=!0}}},[t._v("新增")])]),a("div",{staticClass:"myRewards"},[a("table",[t._m(1),a("tbody",t._l(t.rewardList,function(e){return a("tr",[a("td",[t._v(t._s(e.name||"--"))]),a("td",[t._v(t._s(e.activity||"--"))]),a("td",[t._v(t._s(e.degree||"--"))]),a("td",[t._v(t._s(e.date||"--"))]),a("td",{staticClass:"show",on:{click:function(a){return t.show(e.id)}}},[t._v("查看")]),a("td",{staticClass:"icon"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.delConfirm(e.id,a)}}}),a("span",{on:{click:function(a){return t.modifyBox(e.id)}}})],1)])}),0)])])]),a("masks",{directives:[{name:"show",rawName:"v-show",value:t.addtanchuang||t.showtanchuang||t.modifytanchuang||!1,expression:"addtanchuang||showtanchuang||modifytanchuang||false"}]}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.addtanchuang,expression:"addtanchuang"}],staticClass:"addRewards"},[a("div",{staticClass:"addTitle"},[t._v("获奖信息/社会实践/研究性学习")]),a("div",{staticClass:"addContent"},[a("div",{staticStyle:{"padding-left":"58px","margin-top":"20px"}},[a("el-radio",{staticStyle:{"font-size":"16px"},attrs:{label:"1"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("大赛获奖")]),a("el-radio",{attrs:{label:"2"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("校园获奖")]),a("el-radio",{attrs:{label:"3"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("社会实践")]),a("el-radio",{attrs:{label:"4"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("研究性学习")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.type,expression:"type==1"}],staticClass:"inputs"},[a("span",[t._v("大赛:")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.activity,callback:function(e){t.activity=e},expression:"activity"}},t._l(t.options,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),a("div",{staticClass:"inputs"},[a("span",[t._v(t._s(1==t.type||2==t.type?"具体奖项:":"名称:"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"inputs"},[a("span",[t._v(t._s((1==t.type?"奖项等级:":2==t.type&&"获奖类型:")||"等级:"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.degree,expression:"degree"}],attrs:{type:"text"},domProps:{value:t.degree},on:{input:function(e){e.target.composing||(t.degree=e.target.value)}}})]),a("div",{staticClass:"inputs inputs2"},[a("span",[t._v("参加时间:")]),a("div",{staticClass:"dateList",staticStyle:{display:"inline-block",width:"344px"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),t._m(2),a("div",{staticClass:"inputs"},[a("span",[t._v("描述:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticStyle:{width:"808px",float:"right","border-color":"#DEDEDE"},attrs:{name:""},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})]),a("ul",{staticClass:"operation"},[a("li",{on:{click:function(e){return t.quietConfirm()}}},[t._v("取消")]),a("li",{on:{click:t.add}},[t._v("保存")])]),a("div",{staticClass:"close"})]),a("div",{staticClass:"waring"},[t._v(t._s(t.waring))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showtanchuang,expression:"showtanchuang"}],staticClass:"addRewards showRewards",staticStyle:{position:"fixed"}},[t._m(3),a("ul",{staticClass:"showContent"},[a("li",[t._v(t._s(t.rewardDetail.name))]),a("li",[t._v(t._s(t.rewardDetail.activity||"--"))]),a("li",[t._v(t._s(t.rewardDetail.degree||"--"))]),a("li",[t._v(t._s(t.rewardDetail.date))])]),a("div",{staticClass:"head"},[t._v("\n            描述\n        ")]),a("p",[t._v("\n            "+t._s(t.rewardDetail.desc||"--")+"\n        ")]),a("div",{staticClass:"close",on:{click:function(e){t.showtanchuang=!1}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.modifytanchuang,expression:"modifytanchuang"}],staticClass:"addRewards"},[a("div",{staticClass:"addTitle"},[t._v("获奖信息/社会时间/研究性学习")]),a("div",{staticClass:"addContent"},[a("div",{staticStyle:{"padding-left":"58px","margin-top":"20px"}},[a("el-radio",{staticStyle:{"font-size":"16px"},attrs:{label:"1"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("大赛获奖")]),a("el-radio",{attrs:{label:"2"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("校园获奖")]),a("el-radio",{attrs:{label:"3"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("社会实践")]),a("el-radio",{attrs:{label:"4"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("研究性学习")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.type,expression:"type==1"}],staticClass:"inputs"},[a("span",[t._v("大赛:")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.activity,callback:function(e){t.activity=e},expression:"activity"}},t._l(t.options,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),a("div",{staticClass:"inputs"},[a("span",[t._v(t._s(1==t.type||2==t.type?"具体奖项:":"名称:"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"inputs"},[a("span",[t._v(t._s((1==t.type?"奖项等级:":2==t.type&&"获奖类型:")||"等级:"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.degree,expression:"degree"}],attrs:{type:"text"},domProps:{value:t.degree},on:{input:function(e){e.target.composing||(t.degree=e.target.value)}}})]),a("div",{staticClass:"inputs inputs2"},[a("span",[t._v("参加时间:")]),a("div",{staticClass:"dateList",staticStyle:{display:"inline-block",width:"344px"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),t._m(4),a("div",{staticClass:"inputs"},[a("span",[t._v("描述:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticStyle:{width:"808px",float:"right","border-color":"#DEDEDE"},attrs:{name:""},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})]),a("ul",{staticClass:"operation"},[a("li",{on:{click:function(e){return t.quietConfirm()}}},[t._v("取消")]),a("li",{on:{click:t.modify}},[t._v("保存")])]),a("div",{staticClass:"close"})]),a("div",{staticClass:"waring"},[t._v(t._s(t.waring))])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("img",{attrs:{src:"imgs/careerArchives/icon_biaoti.png",alt:""}}),t._v("\n            获奖信息\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("名称")]),a("td",[t._v("活动")]),a("td",[t._v("等级")]),a("td",[t._v("时间")]),a("td",[t._v("查看详情")]),a("td",{staticStyle:{width:"110px"}},[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inputs"},[a("span",[t._v("证明材料:")]),a("div",{staticClass:"dateList",staticStyle:{display:"inline-block",width:"344px",border:"1px solid #DEDEDE","line-height":"38px","text-indent":"10px",height:"38px"}},[a("input",{attrs:{type:"file"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"title"},[a("li",[t._v("名称")]),a("li",[t._v("活动")]),a("li",[t._v("等级")]),a("li",[t._v("时间")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inputs"},[a("span",[t._v("证明材料:")]),a("div",{staticClass:"dateList",staticStyle:{display:"inline-block",width:"344px",border:"1px solid #DEDEDE","line-height":"38px","text-indent":"10px",height:"38px"}},[a("input",{attrs:{type:"file"}})])])}],n=a("3bbf"),d=n["a"],o=(a("381f"),a("7b56"),a("2877")),r=Object(o["a"])(d,i,s,!1,null,"33b8418a",null);e["default"]=r.exports},"65bf":function(t,e,a){},78872:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"masks"})},s=[],n=a("a5c6"),d=n["a"],o=(a("3b23"),a("2877")),r=Object(o["a"])(d,i,s,!1,null,"4051b602",null);e["a"]=r.exports},"7b56":function(t,e,a){"use strict";var i=a("0cc5"),s=a.n(i);s.a},"7f7f":function(t,e,a){var i=a("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/,d="name";d in s||a("9e1e")&&i(s,d,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},8105:function(t,e,a){},a5c6:function(t,e,a){"use strict";(function(t){e["a"]={name:"masks",mounted:function(){var e=t(window).width(),a=t(window).height();t(".masks").css({width:e,height:a})}}}).call(this,a("1157"))}}]);
//# sourceMappingURL=chunk-b0368f30.ff1a9f66.js.map