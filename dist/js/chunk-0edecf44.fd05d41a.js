(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0edecf44"],{"04d1":function(t,e,n){var r=n("342f"),c=r.match(/firefox\/(\d+)/i);t.exports=!!c&&+c[1]},"0b42":function(t,e,n){var r=n("861d"),c=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t){var e;return c(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!c(e.prototype)?r(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),i=n("2d00"),a=c("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2f0d":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,i=n("1dde"),a=i("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,n){"use strict";var r=n("23e7"),c=n("1c0b"),i=n("7b0b"),a=n("50c4"),o=n("577e"),s=n("d039"),u=n("addb"),l=n("a640"),d=n("04d1"),f=n("d998"),h=n("2d00"),b=n("512c"),p=[],v=p.sort,j=s((function(){p.sort(void 0)})),g=s((function(){p.sort(null)})),O=l("sort"),y=!s((function(){if(h)return h<70;if(!(d&&d>3)){if(f)return!0;if(b)return b<603;var t,e,n,r,c="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)p.push({k:e+r,v:n})}for(p.sort((function(t,e){return e.v-t.v})),r=0;r<p.length;r++)e=p[r].k.charAt(0),c.charAt(c.length-1)!==e&&(c+=e);return"DGBEFHACIJK"!==c}})),m=j||!g||!O||!y,x=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:o(e)>o(n)?1:-1}};r({target:"Array",proto:!0,forced:m},{sort:function(t){void 0!==t&&c(t);var e=i(this);if(y)return void 0===t?v.call(e):v.call(e,t);var n,r,o=[],s=a(e.length);for(r=0;r<s;r++)r in e&&o.push(e[r]);o=u(o,x(t)),n=o.length,r=0;while(r<n)e[r]=o[r++];while(r<s)delete e[r++];return e}})},"4e8f":function(t,e,n){"use strict";n("2f0d")},"512c":function(t,e,n){var r=n("342f"),c=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!c&&+c[1]},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("a04b"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?c.f(t,a,i(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),i=n("e8b5"),a=n("861d"),o=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",j=h>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=d("concat"),O=function(t){if(!a(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)},y=!j||!g;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,r,c,i,a=o(this),d=l(a,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],O(i)){if(c=s(i.length),f+c>p)throw TypeError(v);for(n=0;n<c;n++,f++)n in i&&u(d,f,i[n])}else{if(f>=p)throw TypeError(v);u(d,f++,i)}return d.length=f,d}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},addb:function(t,e){var n=Math.floor,r=function(t,e){var a=t.length,o=n(a/2);return a<8?c(t,e):i(r(t.slice(0,o),e),r(t.slice(o),e),e)},c=function(t,e){var n,r,c=t.length,i=1;while(i<c){r=i,n=t[i];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==i++&&(t[r]=n)}return t},i=function(t,e,n){var r=t.length,c=e.length,i=0,a=0,o=[];while(i<r||a<c)i<r&&a<c?o.push(n(t[i],e[a])<=0?t[i++]:e[a++]):o.push(i<r?t[i++]:e[a++]);return o};t.exports=r},b727:function(t,e,n){var r=n("0366"),c=n("44ad"),i=n("7b0b"),a=n("50c4"),o=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=7==t,h=5==t||d;return function(b,p,v,j){for(var g,O,y=i(b),m=c(y),x=r(p,v,3),w=a(m.length),k=0,M=j||o,C=e?M(b,w):n||f?M(b,0):void 0;w>k;k++)if((h||k in m)&&(g=m[k],O=x(g,k,y),t))if(e)C[k]=O;else if(O)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:s.call(C,g)}else switch(t){case 4:return!1;case 7:s.call(C,g)}return d?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d2f1:function(t,e,n){"use strict";n.r(e);var r=n("7a23");Object(r["z"])("data-v-c7b79b76");var c={class:"container"},i={class:"group pt-5"},a={class:"search pt-4"},o={class:"row inputs"},s={class:"input-group"},u=Object(r["h"])("i",{class:"bi bi-search text-primary"},null,-1),l=[u],d=Object(r["h"])("option",{selected:""},"選擇價位高低",-1),f=Object(r["h"])("option",null,"由高到低",-1),h=Object(r["h"])("option",null,"由低到高",-1),b=[d,f,h],p={class:"row pt-3 content gy-4"},v=["onClick"],j={class:"item"},g=["src"],O=Object(r["h"])("div",{class:"img-txt"},[Object(r["h"])("h2",null,"查看更多")],-1),y={class:"card-body row cart-text"},m={class:"col-11 pe-0"},x={class:"card-title"},w={class:"text-muted"},k={class:"text-success"},M=Object(r["j"])(" 特惠價 :"),C=Object(r["h"])("br",null,null,-1),F={class:"col-1 p-0"},A=["onClick"],L={key:0,class:"bi bi-cart-plus-fill"},T={key:1,class:"spinner-border",role:"status"},N=Object(r["h"])("span",{class:"visually-hidden"},"Loading...",-1),P=[N];function I(t,e,n,u,d,f){var h=this,N=Object(r["F"])("Loading");return Object(r["w"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(N,{active:t.isLoading},null,8,["active"]),Object(r["h"])("div",c,[Object(r["h"])("div",i,[Object(r["h"])("button",{type:"button",class:Object(r["q"])(["btn btn-outline-secondary",{active:"全部"===d.type}]),onClick:e[0]||(e[0]=function(){return f.allFilter&&f.allFilter.apply(f,arguments)})}," 全部 ",2),Object(r["h"])("button",{type:"button",class:Object(r["q"])(["btn btn-outline-secondary",{active:"蛋白質"===d.type}]),onClick:e[1]||(e[1]=function(){return f.meatFilter&&f.meatFilter.apply(f,arguments)})}," 豐富蛋白質菜單 ",2),Object(r["h"])("button",{type:"button",class:Object(r["q"])(["btn btn-outline-secondary",{active:"低醣"===d.type}]),onClick:e[2]||(e[2]=function(){return f.sugarFilter&&f.sugarFilter.apply(f,arguments)})}," 健康低醣菜單 ",2),Object(r["h"])("button",{type:"button",class:Object(r["q"])(["btn btn-outline-secondary",{active:"沙拉"===d.type}]),onClick:e[3]||(e[3]=function(){return f.saladFilter&&f.saladFilter.apply(f,arguments)})}," 零負擔沙拉菜單 ",2)]),Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("div",s,[Object(r["h"])("button",{class:"btn btn-secondary",type:"button",id:"button-addon2",onClick:e[4]||(e[4]=function(){return f.searchText&&f.searchText.apply(f,arguments)})},l),Object(r["Q"])(Object(r["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入關鍵字","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[5]||(e[5]=function(t){return d.text=t}),onKeyup:e[6]||(e[6]=Object(r["R"])((function(){return f.searchText&&f.searchText.apply(f,arguments)}),["enter"]))},null,544),[[r["M"],d.text]])]),Object(r["Q"])(Object(r["h"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[7]||(e[7]=function(t){return d.judgePrice=t})},b,512),[[r["L"],d.judgePrice]])])]),Object(r["h"])("div",p,[(Object(r["w"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(d.filterMenu,(function(t,e){return Object(r["w"])(),Object(r["g"])("div",{class:"card px-0",key:e},[Object(r["h"])("a",{href:"#",onClick:Object(r["S"])((function(e){return f.seeMore(t.id)}),["prevent"])},[Object(r["h"])("div",j,[Object(r["h"])("img",{src:t.imageUrl,class:"card-img-top",alt:""},null,8,g),O])],8,v),Object(r["h"])("div",y,[Object(r["h"])("div",m,[Object(r["h"])("h4",x,Object(r["I"])(t.title),1),Object(r["h"])("del",w,"原價 : $NT "+Object(r["I"])(t.origin_price)+" 元",1),Object(r["h"])("h4",k,[M,C,Object(r["j"])(" $NT "+Object(r["I"])(t.price)+" 元 ",1)])]),Object(r["h"])("div",F,[Object(r["h"])("a",{href:"#",class:Object(r["q"])(["btn btn-primary add-cart",{disabled:h.cartLoading===t.id}]),onClick:Object(r["S"])((function(e){return f.addCart(t.id)}),["prevent"])},[h.cartLoading!==t.id?(Object(r["w"])(),Object(r["g"])("i",L)):Object(r["f"])("",!0),h.cartLoading===t.id?(Object(r["w"])(),Object(r["g"])("div",T,P)):Object(r["f"])("",!0)],10,A)])])])})),128))])])],64)}Object(r["x"])();n("4de4"),n("ac1f"),n("466d"),n("99af"),n("4e82");var q={data:function(){return{menu:[],filterMenu:[],type:"全部",judgePrice:"選擇價位高低",text:"",cartLoading:"",cartNum:0}},inject:["emitter"],methods:{allFilter:function(){this.type="全部",this.filterMenu=this.menu,this.judgePrice="選擇價位高低"},meatFilter:function(){var t=this;this.judgePrice="選擇價位高低",this.type="蛋白質";var e=this.menu.filter((function(e){return e.category===t.type}));this.filterMenu=e},sugarFilter:function(){var t=this;this.judgePrice="選擇價位高低",this.type="低醣";var e=this.menu.filter((function(e){return e.category===t.type}));this.filterMenu=e},saladFilter:function(){var t=this;this.judgePrice="選擇價位高低",this.type="沙拉";var e=this.menu.filter((function(e){return e.category===t.type}));this.filterMenu=e},searchText:function(){var t=this;""===this.text&&this.allFilter(),this.filterMenu=this.filterMenu.filter((function(e){return e.title.match(t.text)}))},seeMore:function(t){this.$router.push("/mall/item/".concat(t))},sendCartNum:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/cart");this.axios.get(e).then((function(e){console.log("cart",e.data.data.carts.length),t.cartNum=e.data.data.carts.length,t.emitter.emit("sendNavbar",t.cartNum),t.cartLoading=""}))},addCart:function(t){var e=this;this.cartLoading=t;var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/cart"),r={product_id:t,qty:1};this.axios.post(n,{data:r}).then((function(t){console.log(t),e.sendCartNum()}))}},watch:{judgePrice:function(t){"由高到低"===t?this.filterMenu=this.filterMenu.sort((function(t,e){return e.price-t.price})):"由低到高"===t&&(this.filterMenu=this.filterMenu.sort((function(t,e){return t.price-e.price})))}},created:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/products/all");this.axios.get(e).then((function(e){t.isLoading=!1,console.log(e),t.menu=e.data.products,console.log(t.menu),t.allFilter()}))}};n("4e8f");q.render=I,q.__scopeId="data-v-c7b79b76";e["default"]=q},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-0edecf44.fd05d41a.js.map