(function(e){function t(t){for(var n,u,c=t[0],l=t[1],i=t[2],s=0,v=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&v.push(r[u][0]),r[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(v.length)v.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,u=1;u<a.length;u++){var l=a[u];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2c515853","chunk-03a2a48c":"0366962f","chunk-450be5b6":"39c78514","chunk-97a8253c":"24317539"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var i=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuecli-backstage-practice/dist/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2470:function(e,t,a){"use strict";a("3be1")},"3be1":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=a("bc3a"),o=a.n(r),u=a("2106"),c=a.n(u),l=a("8a14");a("fe26");function i(e,t){var a=Object(n["E"])("router-view");return Object(n["v"])(),Object(n["e"])(a)}a("2470");const s={};s.render=i;var p=s,v=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),d=a("cf05"),h=a.n(d),b={class:"home"},f=Object(n["h"])("img",{alt:"Vue logo",src:h.a},null,-1),g={type:"button",class:"btn btn-login"},m=Object(n["j"])("登入商品列表");function j(e,t,a,r,o,u){var c=Object(n["E"])("HelloWorld"),l=Object(n["E"])("router-link");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",b,[f,Object(n["k"])(c,{msg:"Welcome to Your Vue.js App"})]),Object(n["h"])("button",g,[Object(n["k"])(l,{to:"/login",class:"login"},{default:Object(n["N"])((function(){return[m]})),_:1})])],64)}Object(n["y"])("data-v-5141a303");var O={class:"hello"},k=Object(n["i"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function y(e,t,a,r,o,u){return Object(n["v"])(),Object(n["g"])("div",O,[Object(n["h"])("h1",null,Object(n["H"])(a.msg),1),k])}Object(n["w"])();var _={name:"HelloWorld",props:{msg:String}};a("65e4");_.render=y,_.__scopeId="data-v-5141a303";var w=_,x={name:"Home",components:{HelloWorld:w},created:function(){console.log("https://vue3-course-api.hexschool.io/","john0531-api")}};a("c023");x.render=j;var P=x,E=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",component:function(){return a.e("chunk-97a8253c").then(a.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return a.e("chunk-450be5b6").then(a.bind(null,"7277"))},children:[{path:"products",component:function(){return a.e("chunk-03a2a48c").then(a.bind(null,"e6dc"))}}]}],C=Object(v["a"])({history:Object(v["b"])(),routes:E}),H=C;a("ac1f"),a("5319"),a("b680");function S(e){var t=parseInt(e,10);return"".concat(t.toFixed(0).replace(/./g,(function(e,t,a){return t&&"."!==e&&(a.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e})))}var L=Object(n["d"])(p);L.config.globalProperties.$filters={currency:S},L.use(c.a,o.a),L.use(H),L.component("Loading",l["a"]),L.mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},6834:function(e,t,a){},c023:function(e,t,a){"use strict";a("6834")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.14a610a4.js.map