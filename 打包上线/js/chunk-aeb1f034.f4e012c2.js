(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeb1f034"],{"032e":function(t,e,s){"use strict";(function(t){var i=s("a84c");s("fda2"),s("451f"),e["a"]={data:function(){return{seconds:10,modal:0,playerOptions:{muted:!0,language:"zh-CN",sources:[{type:"video/mp4",src:"/ceping/video1.mp4"}]}}},mounted:function(){t(".test_menu .item").eq(2).addClass("item_2")},updated:function(){},components:{rzqnNav:i["a"]},methods:{closeModal:function(){this.modal=0},onPlayerEnded:function(t){sessionStorage.kongPlayTest=!0},openModal:function(){this.modal=1},go:function(e){if(console.log(sessionStorage.getItem("kongTest")),!sessionStorage.getItem("kongTest")||sessionStorage.getItem("kongTest")<2)return this.layerMsg("至少练习2次!"),!1;var s=t(e.target).closest("a").attr("url");0==this.seconds?this.$router.push(s):this.layerMsg("请仔细阅读指导语！")}}}}).call(this,s("1157"))},1194:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pc-page"},[i("div",{staticClass:"test_main test_main_2"},[i("rzqnNav"),i("div",{staticClass:"test_detail test_1"},[i("div",{staticClass:"radio_box"},[i("div",{staticClass:"modal modal-reg modal-ce modal-play"},[i("div",{staticClass:"modal-title"},[t._m(0),i("router-link",{attrs:{to:"/shengyaceping/rzqn/guide/3"}},[i("img",{staticClass:"close",attrs:{src:s("17cc")}})])],1),i("div",{staticClass:"modal-body"},[i("div",{attrs:{id:"video"}},[i("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0},on:{ended:function(e){return t.onPlayerEnded(e)}}})],1)])])])])],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",[i("img",{attrs:{src:s("cf05"),alt:""}}),t._v(" - 空间能力演示\n            ")])}],a=s("032e"),o=a["a"],c=(s("9e01"),s("2877")),l=Object(c["a"])(o,i,n,!1,null,null,null);e["default"]=l.exports},"17cc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUQxODFDNkVBMTQxMUU3OTlEN0U0RDlGN0M0NzQxQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUQxODFDN0VBMTQxMUU3OTlEN0U0RDlGN0M0NzQxQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkZGNTlERUExNDExRTc5OUQ3RTREOUY3QzQ3NDFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxQkZGNTlFRUExNDExRTc5OUQ3RTREOUY3QzQ3NDFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qPZCIQAAAXZJREFUeNq01z1LxDAcBvD0r+DueIJu0rXubgdSl/o9HM5RF8XF2xQ/h1MnXwaFqyDOLvZLKIIHcg71iUSIIUnz1sBD3sr9yF2aXrOu61hd18eMsQ/kkkWUqqqMczBWMf/G24TOCepT5AKZsAEKjE1UL6iPeH8ZGYu5TMAsdsUa8AEZIWfofxMaJfKowJMBQF7myDPhe/4cAjaAJbyGxAZICtvA340k7bwksADvTeA/VJQoWALXTKAOjYGdQBMaAjuDNlSGmx7YC+xD/+BdC+wNuqA2eBoCuqIm+DAE9EFl+EkZ/1J++6QoEzf8ujK2gmz5fIgPqm4aFnpyUSA4120unEgHqVDtbYFca+BzF5gCwcayq3thigBZKEyRYBBMCUBvmBKB8h+BXpj6HsA+J40rTClBV3ipKIpkYJ7ncnvRtu0VmtvIhoB3MPbOV3pjOWmiimbF/OHwytF9ZCGBs5SvFBJ8i+yhf5eJF6hSoLNIwOm6HwEGADqk61k0QJYpAAAAAElFTkSuQmCC"},"9e01":function(t,e,s){"use strict";var i=s("cc0f"),n=s.n(i);n.a},cc0f:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.a3dbb627.png"}}]);
//# sourceMappingURL=chunk-aeb1f034.f4e012c2.js.map