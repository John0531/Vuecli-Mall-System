(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1707863a"],{"04d1":function(t,e,r){var n=r("342f"),c=n.match(/firefox\/(\d+)/i);t.exports=!!c&&+c[1]},"0b42":function(t,e,r){var n=r("861d"),c=r("e8b5"),i=r("b622"),o=i("species");t.exports=function(t){var e;return c(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!c(e.prototype)?n(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"1dde":function(t,e,r){var n=r("d039"),c=r("b622"),i=r("2d00"),o=c("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").filter,i=r("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,r){"use strict";var n=r("23e7"),c=r("1c0b"),i=r("7b0b"),o=r("50c4"),a=r("577e"),u=r("d039"),s=r("addb"),l=r("a640"),f=r("04d1"),d=r("d998"),h=r("2d00"),b=r("512c"),p=[],v=p.sort,j=u((function(){p.sort(void 0)})),y=u((function(){p.sort(null)})),O=l("sort"),g=!u((function(){if(h)return h<70;if(!(f&&f>3)){if(d)return!0;if(b)return b<603;var t,e,r,n,c="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)p.push({k:e+n,v:r})}for(p.sort((function(t,e){return e.v-t.v})),n=0;n<p.length;n++)e=p[n].k.charAt(0),c.charAt(c.length-1)!==e&&(c+=e);return"DGBEFHACIJK"!==c}})),x=j||!y||!O||!g,m=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:a(e)>a(r)?1:-1}};n({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&c(t);var e=i(this);if(g)return void 0===t?v.call(e):v.call(e,t);var r,n,a=[],u=o(e.length);for(n=0;n<u;n++)n in e&&a.push(e[n]);a=s(a,m(t)),r=a.length,n=0;while(n<r)e[n]=a[n++];while(n<u)delete e[n++];return e}})},"512c":function(t,e,r){var n=r("342f"),c=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!c&&+c[1]},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},8418:function(t,e,r){"use strict";var n=r("a04b"),c=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?c.f(t,o,i(0,r)):t[o]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("d039"),i=r("e8b5"),o=r("861d"),a=r("7b0b"),u=r("50c4"),s=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),h=r("2d00"),b=d("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",j=h>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=f("concat"),O=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)},g=!j||!y;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,r,n,c,i,o=a(this),f=l(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],O(i)){if(c=u(i.length),d+c>p)throw TypeError(v);for(r=0;r<c;r++,d++)r in i&&s(f,d,i[r])}else{if(d>=p)throw TypeError(v);s(f,d++,i)}return f.length=d,f}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},add1:function(t,e,r){"use strict";r("e392")},addb:function(t,e){var r=Math.floor,n=function(t,e){var o=t.length,a=r(o/2);return o<8?c(t,e):i(n(t.slice(0,a),e),n(t.slice(a),e),e)},c=function(t,e){var r,n,c=t.length,i=1;while(i<c){n=i,r=t[i];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},i=function(t,e,r){var n=t.length,c=e.length,i=0,o=0,a=[];while(i<n||o<c)i<n&&o<c?a.push(r(t[i],e[o])<=0?t[i++]:e[o++]):a.push(i<n?t[i++]:e[o++]);return a};t.exports=n},b727:function(t,e,r){var n=r("0366"),c=r("44ad"),i=r("7b0b"),o=r("50c4"),a=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,l=4==t,f=6==t,d=7==t,h=5==t||f;return function(b,p,v,j){for(var y,O,g=i(b),x=c(g),m=n(p,v,3),w=o(x.length),M=0,k=j||a,F=e?k(b,w):r||d?k(b,0):void 0;w>M;M++)if((h||M in x)&&(y=x[M],O=m(y,M,g),t))if(e)F[M]=O;else if(O)switch(t){case 3:return!0;case 5:return y;case 6:return M;case 2:u.call(F,y)}else switch(t){case 4:return!1;case 7:u.call(F,y)}return f?-1:s||l?l:F}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},d2f1:function(t,e,r){"use strict";r.r(e);var n=r("7a23");Object(n["z"])("data-v-9328fc40");var c={class:"container"},i={class:"group pt-5"},o={class:"search pt-4"},a={class:"row inputs"},u={class:"input-group"},s=Object(n["h"])("i",{class:"bi bi-search text-primary"},null,-1),l=[s],f=Object(n["h"])("option",{selected:""},"選擇價位高低",-1),d=Object(n["h"])("option",null,"由高到低",-1),h=Object(n["h"])("option",null,"由低到高",-1),b=[f,d,h],p={class:"row pt-3 content gy-4"},v=["onClick"],j={class:"item"},y=["src"],O=Object(n["h"])("div",{class:"img-txt"},[Object(n["h"])("h2",null,"查看更多")],-1),g={class:"card-body row cart-text"},x={class:"col-11 pe-0"},m={class:"card-title"},w={class:"text-muted"},M={class:"text-success"},k=Object(n["j"])(" 特惠價 :"),F=Object(n["h"])("br",null,null,-1),A=Object(n["h"])("div",{class:"col-1 p-0"},[Object(n["h"])("a",{href:"#",class:"btn btn-primary add-cart"},[Object(n["h"])("i",{class:"bi bi-cart-plus-fill"})])],-1);function C(t,e,r,s,f,d){return Object(n["w"])(),Object(n["g"])("div",c,[Object(n["h"])("div",i,[Object(n["h"])("button",{type:"button",class:Object(n["q"])(["btn btn-outline-secondary",{active:"全部"===f.type}]),onClick:e[0]||(e[0]=function(){return d.allFilter&&d.allFilter.apply(d,arguments)})}," 全部 ",2),Object(n["h"])("button",{type:"button",class:Object(n["q"])(["btn btn-outline-secondary",{active:"蛋白質"===f.type}]),onClick:e[1]||(e[1]=function(){return d.meatFilter&&d.meatFilter.apply(d,arguments)})}," 豐富蛋白質菜單 ",2),Object(n["h"])("button",{type:"button",class:Object(n["q"])(["btn btn-outline-secondary",{active:"低醣"===f.type}]),onClick:e[2]||(e[2]=function(){return d.sugarFilter&&d.sugarFilter.apply(d,arguments)})}," 健康低醣菜單 ",2),Object(n["h"])("button",{type:"button",class:Object(n["q"])(["btn btn-outline-secondary",{active:"沙拉"===f.type}]),onClick:e[3]||(e[3]=function(){return d.saladFilter&&d.saladFilter.apply(d,arguments)})}," 零負擔沙拉菜單 ",2)]),Object(n["h"])("div",o,[Object(n["h"])("div",a,[Object(n["h"])("div",u,[Object(n["h"])("button",{class:"btn btn-secondary",type:"button",id:"button-addon2",onClick:e[4]||(e[4]=function(){return d.searchText&&d.searchText.apply(d,arguments)})},l),Object(n["Q"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入關鍵字","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[5]||(e[5]=function(t){return f.text=t}),onKeyup:e[6]||(e[6]=Object(n["R"])((function(){return d.searchText&&d.searchText.apply(d,arguments)}),["enter"]))},null,544),[[n["M"],f.text]])]),Object(n["Q"])(Object(n["h"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[7]||(e[7]=function(t){return f.judgePrice=t})},b,512),[[n["L"],f.judgePrice]])])]),Object(n["h"])("div",p,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(f.filterMenu,(function(t,e){return Object(n["w"])(),Object(n["g"])("div",{class:"card px-0",key:e},[Object(n["h"])("a",{href:"#",onClick:Object(n["S"])((function(e){return d.seeMore(t.id)}),["prevent"])},[Object(n["h"])("div",j,[Object(n["h"])("img",{src:t.imageUrl,class:"card-img-top",alt:""},null,8,y),O])],8,v),Object(n["h"])("div",g,[Object(n["h"])("div",x,[Object(n["h"])("h4",m,Object(n["I"])(t.title),1),Object(n["h"])("del",w,"原價 : $NT "+Object(n["I"])(t.origin_price)+" 元",1),Object(n["h"])("h4",M,[k,F,Object(n["j"])(" $NT "+Object(n["I"])(t.price)+" 元 ",1)])]),A])])})),128))])])}Object(n["x"])();r("4de4"),r("ac1f"),r("466d"),r("4e82"),r("99af");var T={data:function(){return{menu:[],filterMenu:[],type:"全部",judgePrice:"選擇價位高低",text:""}},methods:{allFilter:function(){this.type="全部",this.filterMenu=this.menu,this.judgePrice="選擇價位高低"},meatFilter:function(){var t=this;this.judgePrice="選擇價位高低",this.type="蛋白質";var e=this.menu.filter((function(e){return e.category===t.type}));this.filterMenu=e},sugarFilter:function(){var t=this;this.judgePrice="選擇價位高低",this.type="低醣";var e=this.menu.filter((function(e){return e.category===t.type}));this.filterMenu=e},saladFilter:function(){var t=this;this.judgePrice="選擇價位高低",this.type="沙拉";var e=this.menu.filter((function(e){return e.category===t.type}));this.filterMenu=e},searchText:function(){var t=this;""===this.text&&this.allFilter(),this.filterMenu=this.filterMenu.filter((function(e){return e.title.match(t.text)}))},seeMore:function(t){this.$router.push("/mall/item/".concat(t))}},watch:{judgePrice:function(t){"由高到低"===t?this.filterMenu=this.filterMenu.sort((function(t,e){return e.price-t.price})):"由低到高"===t&&(this.filterMenu=this.filterMenu.sort((function(t,e){return t.price-e.price})))}},created:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/products/all");this.axios.get(e).then((function(e){console.log(e),t.menu=e.data.products,console.log(t.menu),t.allFilter()}))}};r("add1");T.render=C,T.__scopeId="data-v-9328fc40";e["default"]=T},d998:function(t,e,r){var n=r("342f");t.exports=/MSIE|Trident/.test(n)},e392:function(t,e,r){},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-1707863a.30986ca2.js.map