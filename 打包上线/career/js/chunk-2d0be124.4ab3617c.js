(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be124"],{"2f60":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},n=[],o={name:"start",created:function(){var e=this,t=window.sessionStorage.getItem("ymtxToken");t?this.$ajax.post(this.G_uri+this.ports.user.getUserInfo,{},{headers:{token:t}}).then(function(t){2e3==t.data.code?1!=t.data.data.is_career_archives?e.$router.push("/login"):e.$router.push("/careerArchives"):(window.localStorage.clear(),e.$router.push("/login"))}):this.$router.push("/login")}},a=o,i=r("2877"),u=Object(i["a"])(a,s,n,!1,null,"3291f904",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0be124.4ab3617c.js.map