(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f3e12de"],{"32ee":function(t,e,s){"use strict";var i=s("34b1"),a=s.n(i);a.a},"34b1":function(t,e,s){},3984:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"downloadProgressMark"},[s("div",{staticClass:"progressBar"},[s("div",{staticClass:"box1"},[s("div",{staticClass:"jincheng",style:{right:100-parseInt(t.currentPage/t.totalPages*1e4)/100+"%"}})]),s("div",{staticClass:"box2"},[t._v(t._s(parseInt(t.currentPage/t.totalPages*100))+"%")])])])},a=[],n={props:["currentPage","totalPages"],data:function(){return{}},methods:{},watch:{},mounted:function(){},created:function(){}},c=n,r=(s("32ee"),s("2877")),o=Object(r["a"])(c,i,a,!1,null,"0877dfc6",null);e["a"]=o.exports},"7f7f":function(t,e,s){var i=s("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,c="name";c in a||s("9e1e")&&i(a,c,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"991c":function(t,e,s){(function(t){!function(t){"use strict";t.fn.circleChart=function(e){var s=this,i={color:"#3459eb",backgroundColor:"#e6e6e6",background:!0,speed:2e3,widthRatio:.2,value:66,unit:"percent",counterclockwise:!1,size:110,startAngle:0,animate:!0,backgroundFix:!0,lineCap:"round",animation:"easeInOutCubic",text:!1,redraw:!1,cAngle:0,textCenter:!0,textSize:!1,textWeight:"normal",textFamily:"sans-serif",relativeTextSize:1/7,autoCss:!0,onDraw:!1};Math.linearTween=function(t,e,s,i){return s*t/i+e},Math.easeInQuad=function(t,e,s,i){return t/=i,s*t*t+e},Math.easeOutQuad=function(t,e,s,i){return t/=i,-s*t*(t-2)+e},Math.easeInOutQuad=function(t,e,s,i){return t/=i/2,t<1?s/2*t*t+e:(t--,-s/2*(t*(t-2)-1)+e)},Math.easeInCubic=function(t,e,s,i){return t/=i,s*t*t*t+e},Math.easeOutCubic=function(t,e,s,i){return t/=i,t--,s*(t*t*t+1)+e},Math.easeInOutCubic=function(t,e,s,i){return t/=i/2,t<1?s/2*t*t*t+e:(t-=2,s/2*(t*t*t+2)+e)},Math.easeInQuart=function(t,e,s,i){return t/=i,s*t*t*t*t+e},Math.easeOutQuart=function(t,e,s,i){return t/=i,t--,-s*(t*t*t*t-1)+e},Math.easeInOutQuart=function(t,e,s,i){return t/=i/2,t<1?s/2*t*t*t*t+e:(t-=2,-s/2*(t*t*t*t-2)+e)},Math.easeInQuint=function(t,e,s,i){return t/=i,s*t*t*t*t*t+e},Math.easeOutQuint=function(t,e,s,i){return t/=i,t--,s*(t*t*t*t*t+1)+e},Math.easeInOutQuint=function(t,e,s,i){return t/=i/2,t<1?s/2*t*t*t*t*t+e:(t-=2,s/2*(t*t*t*t*t+2)+e)},Math.easeInSine=function(t,e,s,i){return-s*Math.cos(t/i*(Math.PI/2))+s+e},Math.easeOutSine=function(t,e,s,i){return s*Math.sin(t/i*(Math.PI/2))+e},Math.easeInOutSine=function(t,e,s,i){return-s/2*(Math.cos(Math.PI*t/i)-1)+e},Math.easeInExpo=function(t,e,s,i){return s*Math.pow(2,10*(t/i-1))+e},Math.easeOutExpo=function(t,e,s,i){return s*(1-Math.pow(2,-10*t/i))+e},Math.easeInOutExpo=function(t,e,s,i){return t/=i/2,t<1?s/2*Math.pow(2,10*(t-1))+e:(t--,s/2*(2-Math.pow(2,-10*t))+e)},Math.easeInCirc=function(t,e,s,i){return t/=i,-s*(Math.sqrt(1-t*t)-1)+e},Math.easeOutCubic=function(t,e,s,i){return t/=i,t--,s*(t*t*t+1)+e},Math.easeInOutCubic=function(t,e,s,i){return t/=i/2,t<1?s/2*t*t*t+e:(t-=2,s/2*(t*t*t+2)+e)},Math.easeOutCirc=function(t,e,s,i){return t/=i,t--,s*Math.sqrt(1-t*t)+e},Math.easeInOutCirc=function(t,e,s,i){return t/=i/2,t<1?-s/2*(Math.sqrt(1-t*t)-1)+e:(t-=2,s/2*(Math.sqrt(1-t*t)+1)+e)};var a=function t(e,s,i,a,n,c,r,o){var l=Object.create(t.prototype);return l.pos=e,l.bAngle=s,l.eAngle=i,l.cAngle=a,l.radius=n,l.lineWidth=c,l.sAngle=r,l.settings=o,l};a.prototype={onDraw:function(t){if(!1!==this.settings.onDraw){var e=Object.assign({},this),s={percent:l,rad:function(t){return t},default:c};e.value=(s[this.settings.unit]||s.default)(e.cAngle),e.text=function(e){return n(t,e)},e.settings.onDraw(t,e)}},drawBackground:function(t){t.beginPath(),t.arc(this.pos,this.pos,this.settings.backgroundFix?.9999*this.radius:this.radius,0,2*Math.PI),t.lineWidth=this.settings.backgroundFix?.95*this.lineWidth:this.lineWidth,t.strokeStyle=this.settings.backgroundColor,t.stroke()},draw:function(t){if(t.beginPath(),this.settings.counterclockwise){var e=2*Math.PI;t.arc(this.pos,this.pos,this.radius,e-this.bAngle,e-(this.bAngle+this.cAngle),this.settings.counterclockwise)}else t.arc(this.pos,this.pos,this.radius,this.bAngle,this.bAngle+this.cAngle,this.settings.counterclockwise);t.lineWidth=this.lineWidth,t.lineCap=this.settings.lineCap,t.strokeStyle=this.settings.color,t.stroke()},animate:function(t,e,s,i,a){var n=this,c=(new Date).getTime()-s;c<1&&(c=1),s-i<1.05*this.settings.speed&&(!a&&1e3*this.cAngle<=Math.floor(1e3*this.eAngle)||a&&1e3*this.cAngle>=Math.floor(1e3*this.eAngle))?(this.cAngle=Math[this.settings.animation]((s-i)/c,this.sAngle,this.eAngle-this.sAngle,this.settings.speed/c),e.clearRect(0,0,this.settings.size,this.settings.size),this.settings.background&&this.drawBackground(e),this.draw(e),this.onDraw(t),s=(new Date).getTime(),u(function(){return n.animate(t,e,s,i,a)})):(this.cAngle=this.eAngle,e.clearRect(0,0,this.settings.size,this.settings.size),this.settings.background&&this.drawBackground(e),this.draw(e),this.setCurrentAnglesData(t))},setCurrentAnglesData:function(t){var e={percent:l,rad:function(t){return t},default:c},s=e[this.settings.unit]||e.default;t.data("current-c-angle",s(this.cAngle)),t.data("current-start-angle",s(this.bAngle))}};var n=function(e,s){e.data("text",s),t(".circleChart_text",e).html(s)},c=function(t){return t/Math.PI*180},r=function(t){return t/180*Math.PI},o=function(t){return r(t/100*360)},l=function(t){return c(t)/360*100},u=function(t){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(t,1e3/60)}}();return this.each(function(n,c){var l=t(c),d={},_=l.data();for(var v in _)_.hasOwnProperty(v)&&0===v.indexOf("_cache_")&&i.hasOwnProperty(v.substring(7))&&(d[v.substring(7)]=_[v]);var m=Object.assign({},i,d,_,e);for(var g in m)0!==g.indexOf("_cache_")&&l.data("_cache_"+g,m[g]);t("canvas.circleChart_canvas",l).length||l.append(function(){return t("<canvas/>",{class:"circleChart_canvas"}).prop({width:m.size,height:m.size}).css(m.autoCss?{"margin-left":"auto","margin-right":"auto",display:"block"}:{})}),t("p.circleChart_text",l).length||!1!==m.text&&(l.append("<p class='circleChart_text'>"+m.text+"</p>"),m.autoCss&&(m.textCenter?t("p.circleChart_text",l).css({position:"absolute","line-height":m.size+"px",top:0,width:"100%",margin:0,padding:0,"text-align":"center","font-size":!1!==m.textSize?m.textSize:m.size*m.relativeTextSize,"font-weight":m.textWeight,"font-family":m.textFamily}):t("p.circleChart_text",l).css({"padding-top":"5px","text-align":"center","font-weight":m.textWeight,"font-family":m.textFamily,"font-size":!1!==m.textSize?m.textSize:m.size*m.relativeTextSize}))),m.autoCss&&l.css("position","relative"),m.redraw||(m.cAngle=m.currentCAngle?m.currentCAngle:m.cAngle,m.startAngle=m.currentStartAngle?m.currentStartAngle:m.startAngle);var p=t("canvas",l).get(0),h=p.getContext("2d"),f={percent:o,rad:function(t){return t},default:r},C=f[m.unit]||f.default,b=C(m.startAngle),w=C(m.value),k=C(m.cAngle),x=m.size/2,N=x*(1-m.widthRatio/2),M=N*m.widthRatio,A=a(x,b,w,k,N,M,k,m);l.data("size",m.size),m.animate?0!==m.value?A.animate(l,h,(new Date).getTime(),(new Date).getTime(),k>w):u(function(){h.clearRect(0,0,s.settings.size,s.settings.size),A.settings.background&&A.drawBackground(h)}):(A.cAngle=A.eAngle,u(function(){m.background&&A.drawBackground(h),0!==m.value?(A.draw(h),A.onDraw(l),A.setCurrentAnglesData(l)):(h.clearRect(0,0,s.settings.size,s.settings.size),A.settings.background&&A.drawBackground(h))}))})}}(t)}).call(this,s("1157"))},"9bcd":function(t,e,s){"use strict";var i=s("d652"),a=s.n(i);a.a},a53c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_report"},[t.isDownloading?s("DownloadProgress",{attrs:{totalPages:t.totalPages,currentPage:t.currentPage}}):t._e(),t.reportData?s("div",{staticClass:"pdf",staticStyle:{"background-color":"#E8E8E8"},attrs:{id:"pdfDom"}},[s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page_cover pdf-page"},[t._m(0),s("div",{staticClass:"main"},[s("p",[t._v("姓       名："+t._s(t.user.name))]),s("p",[t._v("报告编号："+t._s(t.user.report))]),s("p",[t._v("报告时间："+t._s(t.user.date))])]),t._m(1)])]),s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page pdf-page"},[t._m(2),s("div",{staticClass:"content",attrs:{id:"catalog_1"}},[s("div",{staticClass:"big_title_box",on:{click:function(e){return t.scrollToView("page1")}}},[t._m(3),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("1")])]),s("div",{staticClass:"big_title_box",on:{click:function(e){return t.scrollToView("page2")}}},[t._m(4),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("2")])]),s("div",{staticClass:"big_title_box",on:{click:function(e){return t.scrollToView("page3")}}},[t._m(5),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("3")])]),t._l(t.reportData.recommend,function(e,i){return i<18?s("div",{key:e.id,staticClass:"small_title_box",on:{click:function(e){t.scrollToView("page"+(3+i))}}},[s("div",{staticClass:"small_title"},[t._v("3."+t._s(i+1)+t._s(e.title))]),s("div",{staticClass:"page_number"})]):t._e()}),t.recommendNum<18?s("div",{staticClass:"big_title_box",on:{click:function(e){return t.scrollToView("page3"+t.recommendNum)}}},[t._m(6),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("4")])]):t._e(),t._l(t.reportData.unRecommend,function(e,i){return t.recommendNum<18&&t.recommendNum+i<18?s("div",{key:e.id,staticClass:"small_title_box",on:{click:function(e){t.scrollToView("page"+(3+i+t.recommendNum))}}},[s("div",{staticClass:"small_title"},[t._v("4."+t._s(i+1)+t._s(e.title))]),s("div",{staticClass:"page_number"})]):t._e()}),t.recommendNum+t.unRecommendNum<18?s("div",{staticClass:"big_title_box",on:{click:function(e){return t.scrollToView("page3"+t.conformNum)}}},[t._m(7),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("5")])]):t._e(),t._l(t.reportData.incompatible,function(e,i){return t.recommendNum+t.unRecommendNum<18&&t.recommendNum+t.unRecommendNum+i<18?s("div",{key:e.id,staticClass:"small_title_box",on:{click:function(e){t.scrollToView("page"+(3+i+t.conformNum))}}},[s("div",{staticClass:"small_title"},[t._v("5."+t._s(i+1)+t._s(e.title))]),s("div",{staticClass:"page_number"})]):t._e()})],2)])]),s("div",{staticClass:"page_shadow"},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"}),s("div",{staticClass:"content",attrs:{id:"catalog_2"}},[t._l(t.reportData.recommend,function(e,i){return i>=18?s("div",{key:e.id,staticClass:"small_title_box",on:{click:function(e){t.scrollToView("page"+(3+i))}}},[s("div",{staticClass:"small_title"},[t._v("3."+t._s(i+1)+t._s(e.title))]),s("div",{staticClass:"page_number"})]):t._e()}),t.recommendNum>=18?s("div",{staticClass:"big_title_box",on:{click:function(e){return t.scrollToView("page3"+t.recommendNum)}}},[t._m(8),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("4")])]):t._e(),t._l(t.reportData.unRecommend,function(e,i){return t.recommendNum+i>=18?s("div",{key:e.id,staticClass:"small_title_box",on:{click:function(e){t.scrollToView("page"+(3+i+t.recommendNum))}}},[s("div",{staticClass:"small_title"},[t._v("4."+t._s(i+1)+t._s(e.title))]),s("div",{staticClass:"page_number"})]):t._e()}),t.recommendNum+t.unRecommendNum>=18?s("div",{staticClass:"big_title_box",on:{click:function(e){t.scrollToView("page"+(3+t.conformNum))}}},[t._m(9),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("5")])]):t._e(),t._l(t.reportData.incompatible,function(e,i){return t.recommendNum+t.unRecommendNum+i>=18?s("div",{key:e.id,staticClass:"small_title_box",on:{click:function(e){t.scrollToView("page"+(3+i+t.conformNum))}}},[s("div",{staticClass:"small_title"},[t._v("5."+t._s(i)+t._s(e.title))]),s("div",{staticClass:"page_number"})]):t._e()}),s("div",{staticClass:"big_title_box",on:{click:function(e){t.scrollToView("page"+(3+t.totalNum))}}},[t._m(10),s("div",{staticClass:"line"}),s("div",{staticClass:"page_number"},[t._v("5")])])],2)])]),t._m(11),s("div",{staticClass:"page_shadow",attrs:{id:"page2"}},[s("div",{staticClass:"page pdf-page"},[t._m(12),s("p",{staticClass:"header_detail"},[t._v("通过对您的基本信息、个人条件、个人能力以及个人意愿的综合分析，您当前的升学途径分布结果如下所示：")]),s("div",{staticClass:"content"},[s("div",{staticClass:"echats_box"},[s("div",{staticClass:"circle1",attrs:{id:"circle1"}},[s("div",{staticClass:"box"},[s("p",{staticClass:"box_title"},[t._v("符合的升学途径")]),s("p",{staticClass:"num"},[s("span",[t._v(t._s(t.conformNum))]),t._v("/"),s("span",[t._v(t._s(t.totalNum))])])])]),s("div",{staticClass:"circle2",attrs:{id:"circle2"}},[s("div",{staticClass:"box"},[s("p",{staticClass:"box_title"},[t._v("推荐的升学途径")]),s("p",{staticClass:"num"},[s("span",[t._v(t._s(t.recommendNum))]),t._v("/"),s("span",[t._v(t._s(t.conformNum))])])])])]),s("p",{staticClass:"page2_detail"},[t._v("在 24 种升学途径中，您当前已符合 "+t._s(t.conformNum)+" 种升学途径的报考条件，其中 "+t._s(t.recommendNum)+" 种为推荐的升学途径。")]),s("table",{staticClass:"table_gaisu",attrs:{border:"",align:"center"}},[t._m(13),t._m(14),s("tr",[s("td",[t._v("数量")]),s("td",[t._v(t._s(t.recommendNum))]),s("td",[t._v(t._s(t.unRecommendNum))]),s("td",[t._v(t._s(t.totalNum-t.conformNum))])]),s("tr",[s("td",[t._v("占比")]),s("td",[t._v(t._s((t.recommendNum/t.totalNum*100).toFixed(2)+"%"))]),s("td",[t._v(t._s((t.unRecommendNum/t.totalNum*100).toFixed(2)+"%"))]),s("td",[t._v(t._s(((t.totalNum-t.conformNum)/24*100).toFixed(2)+"%"))])])]),t._m(15)]),s("div",{staticClass:"big_page_number"},[t._v("2")])])]),t._l(t.reportData.recommend,function(e,i){return s("div",{key:e.id,staticClass:"page_shadow",attrs:{id:"page"+(i+3)}},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t3推荐的升学途径\n\t\t\t\t\t")]),s("div",{staticClass:"content"},[s("div",{staticClass:"title_box"},[s("h6",[s("span",[t._v("3."+t._s(i+1)+t._s(e.title))]),s("span",{directives:[{name:"show",rawName:"v-show",value:0!=i,expression:"index != 0"}],staticClass:"go_detail",on:{click:function(s){return t.goDetail(e.link)}}},[t._v("查看详情")])]),s("p",[t._v(t._s(e.introduction))])]),s("div",{staticClass:"condition"},[s("div",{staticClass:"title"},[t._v("报考条件")]),t._l(e.condition,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})],2),s("div",{staticClass:"condition"},[s("div",{staticClass:"title"},[t._v("推荐原因")]),s("p",[t._v(t._s(e.recommendReason)),t._l(e.conditionOption,function(e,i){return s("span",{key:i},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"must_know"},[s("div",{staticClass:"title"},[t._v("备考须知")]),t._l(e.notice,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"big_page_number"},[t._v(t._s(i+3))])])])}),t._l(t.reportData.unRecommend,function(e,i){return s("div",{key:e.id,staticClass:"page_shadow",attrs:{id:"page"+(i+3+t.reportData.recommend.length)}},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t4不推荐的升学途径\n\t\t\t\t\t")]),s("div",{staticClass:"content"},[s("div",{staticClass:"title_box"},[s("h6",[s("span",[t._v("4."+t._s(i+1)+t._s(e.title))]),s("span",{staticClass:"go_detail",on:{click:function(s){return t.goDetail(e.link)}}},[t._v("查看详情")])]),s("p",[t._v(t._s(e.introduction))])]),s("div",{staticClass:"condition"},[s("div",{staticClass:"title"},[t._v("报考条件")]),t._l(e.condition,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})],2),s("div",{staticClass:"condition"},[s("div",{staticClass:"title"},[t._v("不推荐原因")]),s("p",[t._v(t._s(e.noRecommendReason)),t._l(e.conditionOption,function(e,i){return s("span",{key:i},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"must_know"},[s("div",{staticClass:"title"},[t._v("备考须知")]),t._l(e.notice,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"big_page_number"},[t._v(t._s(i+3+t.recommendNum))])])])}),t._l(t.reportData.incompatible,function(e,i){return s("div",{key:e.id,staticClass:"page_shadow",attrs:{id:"page"+(i+3+t.conformNum)}},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t5不符合的升学途径\n\t\t\t\t\t")]),s("div",{staticClass:"content"},[s("div",{staticClass:"title_box"},[s("h6",[s("span",[t._v("5."+t._s(i+1)+t._s(e.title))]),s("span",{staticClass:"go_detail",on:{click:function(s){return t.goDetail(e.link)}}},[t._v("查看详情")])]),s("p",[t._v(t._s(e.introduction))])]),s("div",{staticClass:"condition"},[s("div",{staticClass:"title"},[t._v("报考条件")]),t._l(e.condition,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})],2),s("div",{staticClass:"condition"},[s("div",{staticClass:"title"},[t._v("不符合原因")]),s("p",[t._v(t._s(e.incompatibleReason)),t._l(e.conditionOption,function(e,i){return s("span",{key:i},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"must_know"},[s("div",{staticClass:"title"},[t._v("备考须知")]),t._l(e.notice,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})],2)]),s("div",{staticClass:"big_page_number"},[t._v(t._s(i+3+t.conformNum))])])])}),s("div",{staticClass:"page_shadow",attrs:{id:"page"+(3+t.totalNum)}},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t6温馨提示\n\t\t\t\t\t")]),t._m(16),s("div",{staticClass:"big_page_number"},[t._v(t._s(3+t.totalNum))])])])],2):t._e(),s("div",{staticClass:"get_pdf"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"btn_pdf",on:{click:function(e){t.getPdf(t.htmlTitle),t.isDownloading=!0}}},[t._v("下载报告")])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("h3",[t._v("升学途径分析报告")]),s("p",{staticClass:"detail"},[t._v("[ 个人报告 ]")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom"},[s("p",[t._v("系统开发技术、测评方法及报告设计已申请知识产权保护")]),s("p",[t._v("本报告仅供相关个人阅读参考，未经许可不得传阅，严禁用作他途")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("h5",{staticClass:"page_header"},[t._v("\n\t\t\t\t\t\t\t目录\n\t\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"big_title"},[s("span",[t._v("1")]),t._v("前言")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("2")]),t._v("升学途径分析结果概述")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("3")]),t._v("推荐的升学途径")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("4")]),t._v("不推荐的升学途径")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("5")]),t._v("不符合的升学途径")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("4")]),t._v("不推荐的升学途径")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("5")]),t._v("不符合的升学途径")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"big_title"},[s("span",[t._v("6")]),t._v("温馨提示")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page_shadow",attrs:{id:"page1"}},[s("div",{staticClass:"page pdf-page"},[s("h5",{staticClass:"header"},[t._v("\n\t\t\t\t\t\t1前言\t\n\t\t\t\t\t")]),s("div",{staticClass:"content"},[s("div",{staticClass:"main"},[s("p",[t._v("近年来,随着高考升学机会的不断扩大,高校专业的不断增加，能否考上大学已经不是家长和考生唯一需要关注的问题，很多家长和学生也逐渐认识到升学并不局限于裸分统招一种方式，他们更加关注的是进入理想大学的多种升学途径。")]),s("p",[t._v("大学本身是培养多元化人才的地方，尽快确定适合学生的升学途径，不但可以让学生依照其自身的特质发挥特长，同时可以避免社会总体人力资源的浪费。")]),s("p",[t._v("升学途径分析是一套旨在帮助学生从20余种升学途径中进行适合度分析的工具。它是根据学生性别、生源所在地、年龄、家庭情况、身体条件等实际情况，并参考学生兴趣、能力等维度得出的测评结果，为学生选择适合的升学途径提供专业的参考。同时我们也充分考虑学生的报考动机、专业意向等主观因素，帮助学生综合评估多项升学途径并在最短时间内了解适合自己当前条件的相关升学途径，生成个性化评估报告。")])]),s("div",{staticClass:"must_know"},[s("div",{staticClass:"title"},[t._v("注意事项")]),s("p",[t._v("本报告目的是给帮助广大考生和家长提供了一种科学的方法，一份可靠的依据，从而让考生能更深入地了解自己的具体情况，而并非限制考生的选择。报告结果没有“好”与“坏”之分。 希望本测评能够让每个高中学子明确自己未来的发展方向，在报告的帮助下为自己制定全面的升学规划。做一个有准备的人，赢在起跑线！")])])]),s("div",{staticClass:"big_page_number"},[t._v("1")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"header"},[s("p",[t._v("2升学途径分析结果概述")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{attrs:{rowspan:"2"}},[t._v("分类")]),s("td",{attrs:{colspan:"2"}},[t._v("符合的升学途径")]),s("td",{attrs:{rowspan:"2"}},[t._v("不符合的升学途径")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("推荐的升学途径")]),s("td",[t._v("不推荐的升学途径")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"explain"},[s("div",{staticClass:"title"},[t._v("解释说明")]),s("p",[t._v("推荐的升学途径，即当前已满足所有硬性条件的升学途径。")]),s("p",[t._v("不推荐的升学途径，即当前已满足所有硬性条件但部分软性条件未满足的升学途径。")]),s("p",[t._v("不符合的升学途径，即不具备部分或全部硬性条件的升学途径。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"reminder"},[s("p",[t._v("一方面由于每年各种升学途径的报考条件会有一定调整，另一方面，你本身的条件也可能会发生变化（身体条件、个人能力、个人意愿等）。为了保证给您提供最符合您当下状况的升学途径分析建议，您可以在适当的时候选择重新进行测试。")]),s("p",[t._v("同时，您还可以咨询本系统的升学途径分析师，根据您的升学途径分析报告以及实际条件，为您个性化的指导升学途径选择策略。")]),s("p",[t._v("希望本系统的升学途径分析报告能为您的选择提供有价值的参考。")])])])}],n=s("d270"),c=n["a"],r=(s("9bcd"),s("2877")),o=Object(r["a"])(c,i,a,!1,null,"0def3bd5",null);e["default"]=o.exports},d270:function(t,e,s){"use strict";(function(t){s("7f7f");var i=s("3984");s("991c");e["a"]={components:{DownloadProgress:i["a"]},props:[],data:function(){return{isDownloading:!1,totalPages:1,currentPage:0,htmlTitle:"",currentTime:"",reportData:null,user:null,totalNum:0,recommendNum:0,unRecommendNum:0,conformNum:0}},methods:{getReport:function(){var t=window.sessionStorage.getItem("ymtxToken"),e=this;this.$ajax.post(this.G_uri+"/furtherWay/getReport",{},{headers:{token:t}}).then(function(t){var s=t.data.data;e.reportData=s,e.user=s.user,e.totalNum=s.totalNum,e.recommendNum=s.recommendNum,e.unRecommendNum=s.unRecommendNum,e.conformNum=s.conformNum,e.htmlTitle=s.user.name+"的升学途径分析报告",e.$nextTick(function(){e.setCircle()})}).catch(function(t){console.log(t)})},setCircle:function(){var e=this.totalNum,s=this.conformNum,i=this.recommendNum;t("#circle1").circleChart({size:240,value:s/e*100,counterclockwise:!0,startAngle:-75,color:"#9fd3f9",backgroundColor:"#006ec6",text:!1,onDraw:function(t,e){e.text(Math.round(e.value)+"%")}}),t("#circle2").circleChart({size:240,value:i/s*100,counterclockwise:!0,startAngle:-75,color:"#fcc395",backgroundColor:"#e4802c",text:!1,onDraw:function(t,e){e.text(Math.round(e.value/100*24)+"/24")}})},goDetail:function(t){var e=this.$router.resolve({path:t}),s=e.href;window.open(s,"_blank")},scrollToView:function(t){document.getElementById(t).scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}},watch:{},created:function(){this.getReport()},mounted:function(){}}}).call(this,s("1157"))},d652:function(t,e,s){}}]);
//# sourceMappingURL=chunk-9f3e12de.1bf97b84.js.map