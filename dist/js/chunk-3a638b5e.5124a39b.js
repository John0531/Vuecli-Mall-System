(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a638b5e"],{"01a7":function(a,t,e){a.exports=e.p+"img/logo-已修復.a541aba0.gif"},"0b42":function(a,t,e){var c=e("861d"),r=e("e8b5"),i=e("b622"),n=i("species");a.exports=function(a){var t;return r(a)&&(t=a.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)?c(t)&&(t=t[n],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"1dde":function(a,t,e){var c=e("d039"),r=e("b622"),i=e("2d00"),n=r("species");a.exports=function(a){return i>=51||!c((function(){var t=[],e=t.constructor={};return e[n]=function(){return{foo:1}},1!==t[a](Boolean).foo}))}},2700:function(a,t,e){"use strict";e.r(t);var c=e("7a23");Object(c["z"])("data-v-7d4be116");var r={class:"banner"},i={class:"wrap"};function n(a,t,e,n,o,s){var l=Object(c["F"])("Navbar"),b=Object(c["F"])("router-view"),d=Object(c["F"])("Footer");return Object(c["w"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",r,[Object(c["k"])(l)]),Object(c["h"])("div",i,[Object(c["k"])(b)]),Object(c["k"])(d)],64)}Object(c["x"])();var o=e("01a7"),s=e.n(o);Object(c["z"])("data-v-280bcc88");var l={class:"navbar navbar-expand-lg navbar-light",style:{"background-color":"#f2e2ce"}},b={class:"container-fluid px-5"},d=Object(c["h"])("a",{class:"navbar-brand",href:"#"},[Object(c["h"])("img",{src:s.a,alt:"",class:"logo"})],-1),f=Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav mb-2 mb-lg-0"},h=Object(c["h"])("li",{class:"nav-item"},[Object(c["h"])("a",{class:"link active","aria-current":"page",href:"./index.html"},"首頁")],-1),p=Object(c["h"])("li",{class:"nav-item dropdown"},[Object(c["h"])("a",{class:"link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown"},"飲食方法"),Object(c["h"])("ul",{class:"diet-menu dropdown-menu"},[Object(c["h"])("li",null,[Object(c["h"])("a",{href:"./間歇性斷食.html"},"間歇性斷食")]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"./低醣飲食.html"},"低醣飲食")]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"./生酮飲食.html"},"生酮飲食")]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"./碳循環飲食.html"},"碳循環飲食")])])],-1),j=Object(c["h"])("li",{class:"nav-item"},[Object(c["h"])("a",{class:"link",href:"./營養素.html"},"營養素")],-1),O=Object(c["h"])("li",{class:"nav-item"},[Object(c["h"])("a",{class:"link",href:"./食譜.html"},"食譜")],-1),g={class:"nav-item"},m=Object(c["h"])("form",{class:"d-flex"},[Object(c["h"])("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(c["h"])("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1),y={class:"cart-img bg-secondary text-primary"},x=Object(c["h"])("i",{class:"bi bi-cart3"},null,-1),w={class:"num bg-danger"},k={class:"text-light"};function C(a,t,e,r,i,n){return Object(c["w"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("nav",l,[Object(c["h"])("div",b,[d,f,Object(c["h"])("div",v,[Object(c["h"])("ul",u,[h,p,j,O,Object(c["h"])("li",g,[Object(c["h"])("a",{class:"link",href:"https://john0531.github.io/vuecli-backstage-practice/dist/#/login",onClick:t[0]||(t[0]=Object(c["S"])((function(){return n.ToProduct&&n.ToProduct.apply(n,arguments)}),["prevent"]))},"商店菜單")])]),m])])]),Object(c["h"])("a",{href:"",class:"cart",onClick:t[1]||(t[1]=Object(c["S"])((function(){return n.ToCart&&n.ToCart.apply(n,arguments)}),["prevent"]))},[Object(c["h"])("div",y,[x,Object(c["h"])("div",w,[Object(c["h"])("p",k,Object(c["I"])(i.cartNum),1)])])])],64)}Object(c["x"])();e("99af");var T={data:function(){return{cartNum:0,cartInfo:{}}},methods:{ToCart:function(){this.$router.push("/mall/cart")},ToProduct:function(){this.$router.push("/mall/product")},getCart:function(){var a=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/cart");this.axios.get(t).then((function(t){console.log(t.data.data),a.cartInfo=t.data.data,a.cartNum=a.cartInfo.carts.length,console.log("Num",a.cartNum)}))},updateCart:function(a){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/cart/").concat(a.id),c={product_id:a.product_id,qty:a.qty};this.axios.put(e,{data:c}).then((function(a){console.log(a),t.getCart()}))}},created:function(){this.getCart()}};e("eb17");T.render=C,T.__scopeId="data-v-280bcc88";var I=T;Object(c["z"])("data-v-56f7a931");var S={class:"main-footer"},N=Object(c["i"])('<div class="container" data-v-56f7a931><div class="footer-item" data-v-56f7a931><h4 data-v-56f7a931>關於減脂</h4><nav data-v-56f7a931><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 食譜分享</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 減脂運動</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 減脂飲食</a></nav></div><div class="footer-item" data-v-56f7a931><h4 data-v-56f7a931>飲食文章列表</h4><nav data-v-56f7a931><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 低醣飲食</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 生酮飲食</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 碳循環飲食</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 間歇性斷食</a></nav></div><div class="footer-item" data-v-56f7a931><h4 data-v-56f7a931>服務項目</h4><nav data-v-56f7a931><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 飲食諮詢</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 常見問題</a><a href="#" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 聯絡我們</a><a href="https://john0531.github.io/Vuecli-Mall-System/dist/#/login" class="text-success" data-v-56f7a931><i class="bi bi-bicycle" data-v-56f7a931></i> 賣家商品後台</a></nav></div><div class="footer-item footer-subs" data-v-56f7a931><h4 data-v-56f7a931>訂閱電子報</h4><form action="" data-v-56f7a931><input type="text" data-v-56f7a931><input type="submit" value="訂閱" data-v-56f7a931></form></div></div><div class="copyright" data-v-56f7a931> COPYRIGHT © 2021 FAT-REDUCING DIET GUIDE </div>',2),_=[N];function A(a,t,e,r,i,n){return Object(c["w"])(),Object(c["g"])("div",S,_)}Object(c["x"])();var F={};e("9353");F.render=A,F.__scopeId="data-v-56f7a931";var E=F,P={components:{Navbar:I,Footer:E}};e("a882");P.render=n,P.__scopeId="data-v-7d4be116";t["default"]=P},2985:function(a,t,e){},"65f0":function(a,t,e){var c=e("0b42");a.exports=function(a,t){return new(c(a))(0===t?0:t)}},8418:function(a,t,e){"use strict";var c=e("a04b"),r=e("9bf2"),i=e("5c6c");a.exports=function(a,t,e){var n=c(t);n in a?r.f(a,n,i(0,e)):a[n]=e}},9353:function(a,t,e){"use strict";e("2985")},"99af":function(a,t,e){"use strict";var c=e("23e7"),r=e("d039"),i=e("e8b5"),n=e("861d"),o=e("7b0b"),s=e("50c4"),l=e("8418"),b=e("65f0"),d=e("1dde"),f=e("b622"),v=e("2d00"),u=f("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",j=v>=51||!r((function(){var a=[];return a[u]=!1,a.concat()[0]!==a})),O=d("concat"),g=function(a){if(!n(a))return!1;var t=a[u];return void 0!==t?!!t:i(a)},m=!j||!O;c({target:"Array",proto:!0,forced:m},{concat:function(a){var t,e,c,r,i,n=o(this),d=b(n,0),f=0;for(t=-1,c=arguments.length;t<c;t++)if(i=-1===t?n:arguments[t],g(i)){if(r=s(i.length),f+r>h)throw TypeError(p);for(e=0;e<r;e++,f++)e in i&&l(d,f,i[e])}else{if(f>=h)throw TypeError(p);l(d,f++,i)}return d.length=f,d}})},"9d89":function(a,t,e){},a882:function(a,t,e){"use strict";e("9d89")},e8b5:function(a,t,e){var c=e("c6b6");a.exports=Array.isArray||function(a){return"Array"==c(a)}},eb17:function(a,t,e){"use strict";e("fe32")},fe32:function(a,t,e){}}]);
//# sourceMappingURL=chunk-3a638b5e.5124a39b.js.map