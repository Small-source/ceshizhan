(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-185f2961"],{"14ca":function(u,d,f){"use strict";f.r(d);var w=function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("div",{staticClass:"mark"},[f("div",{staticClass:"perfectInformation"},[f("div",{staticClass:"top_title"},[u._v("为了更好的为您服务，请完善以下信息！")]),f("div",{staticClass:"content"},[f("div",{staticClass:"left_banner"}),f("div",{staticClass:"right_content",style:{paddingTop:u.tuance&&"30px"}},[0==u.openProvinceData.length?f("div",{staticClass:"linkage"},[u.tuance?f("div",{staticClass:"zheceng"}):u._e(),u._m(0),f("div",{staticClass:"el"},[f("el-select",{staticClass:"suozaidi1",attrs:{placeholder:"省级地区"},model:{value:u.province,callback:function(d){u.province=d},expression:"province"}},u._l(u.mapData,function(u,d){return f("el-option",{key:d,attrs:{label:u.name,value:u.name}})}),1)],1),f("p",{staticClass:"no2"},[u._v("省/市")]),f("div",{staticClass:"el"},[f("el-select",{staticClass:"suozaidi2",attrs:{placeholder:"市级地区"},model:{value:u.city,callback:function(d){u.city=d},expression:"city"}},u._l(u.cityData,function(u,d){return f("el-option",{key:d,attrs:{label:u.name,value:u.name}})}),1)],1),f("p",{staticClass:"no2"},[u._v("城市")]),f("div",{staticClass:"el"},[f("el-select",{staticClass:"suozaidi3",attrs:{placeholder:"区级地区"},model:{value:u.area,callback:function(d){u.area=d},expression:"area"}},u._l(u.areaData,function(u,d){return f("el-option",{key:d,attrs:{label:u,value:u}})}),1)],1),f("p",{staticClass:"no2"},[u._v("区/县/市")])]):u._e(),u.openProvinceData.length>0?f("div",{staticClass:"linkage"},[u.tuance?f("div",{staticClass:"zheceng"}):u._e(),u._m(1),f("div",{staticClass:"el"},[f("el-select",{staticClass:"suozaidi1",attrs:{placeholder:"省级地区"},model:{value:u.province,callback:function(d){u.province=d},expression:"province"}},u._l(u.openProvinceData,function(u,d){return f("el-option",{key:d,attrs:{label:u.name,value:u.name}})}),1)],1),f("p",{staticClass:"no2"},[u._v("省/市")]),f("div",{staticClass:"el"},[f("el-select",{staticClass:"suozaidi2",attrs:{placeholder:"市级地区"},model:{value:u.city,callback:function(d){u.city=d},expression:"city"}},u._l(u.openCityData,function(u,d){return f("el-option",{key:d,attrs:{label:u.name,value:u.name}})}),1)],1),f("p",{staticClass:"no2"},[u._v("城市")]),f("div",{staticClass:"el"},[f("el-select",{staticClass:"suozaidi3",attrs:{placeholder:"区级地区"},model:{value:u.area,callback:function(d){u.area=d},expression:"area"}},u._l(u.areaData,function(u,d){return f("el-option",{key:d,attrs:{label:u,value:u}})}),1)],1),f("p",{staticClass:"no2"},[u._v("区/县/市")])]):u._e(),f("div",{staticClass:"xuexiao",style:{marginBottom:u.tuance&&"25px"}},[u.tuance?f("div",{staticClass:"zheceng"}):u._e(),u._m(2),f("input",{directives:[{name:"model",rawName:"v-model",value:u.school,expression:"school"}],attrs:{type:"text",placeholder:"请输入学校的名称",onfocus:"placeholder=''",onblur:"placeholder='请输入学校的名称'"},domProps:{value:u.school},on:{input:function(d){d.target.composing||(u.school=d.target.value)}}})]),f("div",{staticClass:"year",style:{marginBottom:u.tuance&&"25px"}},[u.tuance?f("div",{staticClass:"zheceng"}):u._e(),f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("高考年份：")]),f("el-select",{staticClass:"year1",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:u.year,callback:function(d){u.year=d},expression:"year"}},[u._l(6,function(d){return f("el-option",{attrs:{label:u.years+d-1,value:u.years+d-1}})}),f("el-option",{attrs:{label:"成年人",value:"成年人"}})],2),u._v("\n                     "),f("span",[u._v(u._s(u.nianji[u.year-u.years]))])],1),u.tuance?f("div",{staticClass:"ownname",style:{marginBottom:u.tuance&&"25px"}},[u._m(3),f("el-select",{staticClass:"classNumber",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:u.classNumber,callback:function(d){u.classNumber=d},expression:"classNumber"}},u._l(u.end-u.start+1,function(d){return f("el-option",{attrs:{label:u.start+d-1,value:u.start+d-1}})}),1)],1):u._e(),f("div",{staticClass:"ownname",style:{marginBottom:u.tuance&&"25px"}},[u._m(4),f("input",{directives:[{name:"model",rawName:"v-model",value:u.ownname,expression:"ownname"}],attrs:{type:"text",placeholder:"请输入你的姓名",onfocus:"placeholder=''",onblur:"placeholder='请输入你的姓名'"},domProps:{value:u.ownname},on:{input:function(d){d.target.composing||(u.ownname=d.target.value)}}})]),u.tuance?f("div",{staticClass:"ownname",style:{marginBottom:u.tuance&&"25px"}},[u._m(5),f("input",{directives:[{name:"model",rawName:"v-model",value:u.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入你的手机号",onfocus:"placeholder=''",onblur:"placeholder='请输入你的手机号'"},domProps:{value:u.phone},on:{input:function(d){d.target.composing||(u.phone=d.target.value)}}})]):u._e(),f("div",{staticClass:"sex"},[u._m(6),f("div",{staticClass:"el"},[f("el-radio-group",{model:{value:u.sex,callback:function(d){u.sex=d},expression:"sex"}},[f("el-radio",{attrs:{label:1}},[u._v("男")]),f("el-radio",{staticClass:"women",attrs:{label:2}},[u._v("女")])],1)],1)]),f("p",{staticClass:"warning"},[u._v(u._s(u.warning))]),f("div",{staticClass:"goHome",on:{click:u.goHome}},[u._v("确定")]),f("p",{staticClass:"bottom"},[u._v("注以上信息一旦提交不能修改")])])])])])},D=[function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("地"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("区：")])},function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("地"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("区：")])},function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("学"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("校：")])},function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("班"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("级：")])},function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("姓"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("名：")])},function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("手"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("机：")])},function(){var u=this,d=u.$createElement,f=u._self._c||d;return f("p",{staticClass:"no1",staticStyle:{width:"80px"}},[u._v("性"),f("span",{staticStyle:{opacity:"0"}},[u._v("空空")]),u._v("别：")])}],S=f("53ca"),$=(f("7f7f"),f("ac6a"),f("cadf"),f("551c"),f("097d"),{data:function(){return{mapData:[],cityData:[],areaData:[],province:"",city:"",area:"",school:"",year:"",ownname:"",sex:"",warning:"",classNumber:"",phone:"",agentId:-1,province0:"",city0:"",area0:"",school0:"",year0:"",openProvinceData:[],openCityData:[],isShowScoll:!1,tuance:!1,start:"",end:"",years:"",nianji:["高三","高二","高一","初三","初二","初一"]}},watch:{province:function(){var u=this.province,d=this;this.warning="",this.province0?this.province=this.province0:this.city="",0==this.openProvinceData.length?this.mapData.forEach(function(f,w){f.name==u&&(d.cityData=f.cityList)}):this.openProvinceData.forEach(function(f,w){f.name==u&&(d.openCityData=f.child)})},city:function(){var u=this.province,d=this.city,f=this,w=[];this.warning="",this.city0?this.city=this.city0:this.area="",0==this.openProvinceData.length?this.cityData.forEach(function(u,w){u.name!=d||(f.areaData=u.areaList)}):(this.mapData.forEach(function(d,f){d.name!=u||(w=d.cityList)}),w.forEach(function(u,w){u.name!=d||(f.areaData=u.areaList)}))},area:function(){this.warning="",this.area0&&(this.area=this.area0)},school:function(){this.warning="",this.school0&&(this.school=this.school0)},year:function(){this.year0&&(this.year=this.year0)},ownname:function(){this.warning=""}},methods:{getCityData:function(){var u=this;this.$ajax.get("/data/map.json").then(function(d){200==d.status&&(u.mapData=d.data)}).then(function(d){u.getUserInfo()}).catch(function(u){console.log(Object(S["a"])(+u))})},goHome:function(){if(this.warning="",this.province)if(this.city)if(this.area)if(this.school)if(!this.tuance||this.classNumber)if(this.ownname){if(this.tuance){if(!this.phone)return void(this.warning="请填写手机号");var u=/(^1[123456789]\d{9}$)|(^\d{8}$)/;if(!u.test(this.phone))return void(this.warning="请输入正确的手机号")}if(this.sex){var d=this.province,f=this.city,w=this.area,D=this.school,S=this.year,$=this.ownname,P=this.sex,E=window.sessionStorage.getItem("ymtxToken"),I=this,z=this.classNumber,j=this.phone;this.$ajax.post(this.G_uri+"/register/improveInfo",{province:d,city:f,area:w,schoolName:D,baccllYear:S,name:$,sex:P,token:E,schoolClass:z,phone:j},{headers:{token:E}}).then(function(u){2e3==u.data.code&&(window.sessionStorage.setItem("ymtxUserMessageSuccess",1),window.sessionStorage.setItem("ymtxUserMessage",!0),window.sessionStorage.setItem("name",$),I.tuance?I.$router.push("/thome"):window.location.href="/")}).catch(function(u){console.log(u)})}else this.warning="请选择性别"}else this.warning="请填写姓名";else this.warning="请填写班级";else this.warning="请填写学校名称";else this.warning="请选择区/县/市";else this.warning="请选择城市";else this.warning="请选择省份"},getProvance:function(){var u=this,d=this.$OEMdomain;this.$ajax.post(this.G_uri+"/agent/detail",{webSite:d}).then(function(d){2e3==d.data.code?(u.agentId=d.data.data.agentId,u.openProvinceData=d.data.data.openProvince):1016==d.data.code&&u.$router.push("/login")}).catch(function(u){console.log(u)})},getUserInfo:function(){var u=this,d=window.sessionStorage.getItem("ymtxToken");this.$ajax.post(this.G_uri+"/login/getUserInfo",{},{headers:{token:d}}).then(function(d){2e3==d.data.code&&(d.data.data.province&&(u.province=d.data.data.province,u.province0=d.data.data.province,d.data.data.city&&(u.city=d.data.data.city,u.city0=d.data.data.city,d.data.data.area&&(u.area=d.data.data.area,u.area0=d.data.data.area))),d.data.data.baccll_year&&(u.year=d.data.data.baccll_year,u.year0=d.data.data.baccll_year),d.data.data.school_name&&(u.school0=d.data.data.school_name,u.school=d.data.data.school_name),u.start=d.data.data.school_class_start,u.end=d.data.data.school_class_end)}).catch(function(u){console.log(u)})},getYear:function(){var u=new Date,d=u.getFullYear(),f=u.getMonth()+1;u.getDate();f>=9&&(d+=1),this.years=d,this.year=d}},mounted:function(){"3"==window.sessionStorage.tuance&&(this.tuance=!0)},created:function(){this.getYear(),this.getCityData(),this.getProvance()}}),P=$,E=(f("2316"),f("f272"),f("65ca"),f("2877")),I=Object(E["a"])(P,w,D,!1,null,"5627a534",null);I.options.__file="PerfectInformation.vue";d["default"]=I.exports},2316:function(u,d,f){"use strict";var w=f("7fdf"),D=f.n(w);D.a},"65ca":function(u,d,f){"use strict";var w=f("9ee7"),D=f.n(w);D.a},"7fdf":function(u,d,f){},"9ee7":function(u,d,f){},f272:function(u,d,f){"use strict";var w=f("fc41"),D=f.n(w);D.a},fc41:function(u,d,f){}}]);
//# sourceMappingURL=chunk-185f2961.63175f09.js.map