(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14c763ea"],{"0b42":function(t,e,o){var n=o("861d"),r=o("e8b5"),c=o("b622"),a=c("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?n(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"1dde":function(t,e,o){var n=o("d039"),r=o("b622"),c=o("2d00"),a=r("species");t.exports=function(t){return c>=51||!n((function(){var e=[],o=e.constructor={};return o[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4f30":function(t,e,o){"use strict";o("a8ef")},"65f0":function(t,e,o){var n=o("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},8418:function(t,e,o){"use strict";var n=o("a04b"),r=o("9bf2"),c=o("5c6c");t.exports=function(t,e,o){var a=n(e);a in t?r.f(t,a,c(0,o)):t[a]=o}},"99af":function(t,e,o){"use strict";var n=o("23e7"),r=o("d039"),c=o("e8b5"),a=o("861d"),l=o("7b0b"),s=o("50c4"),i=o("8418"),u=o("65f0"),b=o("1dde"),d=o("b622"),f=o("2d00"),h=d("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",j=f>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=b("concat"),v=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:c(t)},x=!j||!O;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,o,n,r,c,a=l(this),b=u(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?a:arguments[e],v(c)){if(r=s(c.length),d+r>p)throw TypeError(m);for(o=0;o<r;o++,d++)o in c&&i(b,d,c[o])}else{if(d>=p)throw TypeError(m);i(b,d++,c)}return b.length=d,b}})},a8ef:function(t,e,o){},b0c0:function(t,e,o){var n=o("83ab"),r=o("9bf2").f,c=Function.prototype,a=c.toString,l=/^\s*function ([^ (]*)/,s="name";n&&!(s in c)&&r(c,s,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(t){return""}}})},cf2a:function(t,e,o){"use strict";o.r(e);o("b0c0");var n=o("7a23");Object(n["z"])("data-v-94cd1bac");var r={class:"container pt-5"},c={class:"row"},a={class:"col-7"},l={class:"form p-3"},s=Object(n["h"])("h2",null,"訂單資料",-1),i=Object(n["h"])("hr",null,null,-1),u={class:"mb-3"},b=Object(n["h"])("label",{for:"exampleFormControlInput1",class:"form-label"},"Email",-1),d={class:"mb-3"},f=Object(n["h"])("label",{for:"exampleFormControlInput2",class:"form-label"},"姓名",-1),h={class:"mb-3"},p=Object(n["h"])("label",{for:"exampleFormControlInput3",class:"form-label"},"電話",-1),m={class:"mb-3"},j=Object(n["h"])("label",{for:"exampleFormControlInput4",class:"form-label"},"地址",-1),O=Object(n["h"])("label",{class:"form-label"},"付款方式",-1),v={class:"mb-3"},x=Object(n["h"])("option",{selected:"",disabled:""},"請選擇付款方式",-1),g=Object(n["h"])("option",null,"貨到付款",-1),y=Object(n["h"])("option",null,"信用卡",-1),I=Object(n["h"])("option",null,"Line Pay",-1),C=Object(n["h"])("option",null,"Apple Pay",-1),w=Object(n["h"])("option",null,"ATM",-1),F=[x,g,y,I,C,w],k={class:"mb-3"},L=Object(n["h"])("label",{for:"exampleFormControlTextarea1",class:"form-label"},"留言",-1),A={class:"col-5"},M={class:"order p-3"},T=Object(n["h"])("h2",null,"訂單明細",-1),U=Object(n["h"])("hr",null,null,-1),_=["src"],Q={class:"ps-3"},V=Object(n["h"])("br",null,null,-1),E=Object(n["h"])("span",{class:"empty"},null,-1),S=Object(n["h"])("hr",null,null,-1),$={class:"total"},D=Object(n["h"])("span",null,[Object(n["h"])("h4",null,"總計")],-1);function J(t,e,o,x,g,y){var I=Object(n["F"])("Loading");return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(I,{active:g.isLoading},null,8,["active"]),Object(n["h"])("div",r,[Object(n["h"])("div",c,[Object(n["h"])("div",a,[Object(n["h"])("div",l,[s,i,Object(n["h"])("div",u,[b,Object(n["Q"])(Object(n["h"])("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",placeholder:"請輸入Email","onUpdate:modelValue":e[0]||(e[0]=function(t){return g.form.user.email=t})},null,512),[[n["M"],g.form.user.email]])]),Object(n["h"])("div",d,[f,Object(n["Q"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"exampleFormControlInput2",placeholder:"請輸入姓名","onUpdate:modelValue":e[1]||(e[1]=function(t){return g.form.user.name=t})},null,512),[[n["M"],g.form.user.name]])]),Object(n["h"])("div",h,[p,Object(n["Q"])(Object(n["h"])("input",{type:"tel",class:"form-control",id:"exampleFormControlInput3",placeholder:"請輸入電話","onUpdate:modelValue":e[2]||(e[2]=function(t){return g.form.user.tel=t})},null,512),[[n["M"],g.form.user.tel]])]),Object(n["h"])("div",m,[j,Object(n["Q"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"exampleFormControlInput4",placeholder:"請輸入地址","onUpdate:modelValue":e[3]||(e[3]=function(t){return g.form.user.address=t})},null,512),[[n["M"],g.form.user.address]])]),O,Object(n["h"])("div",v,[Object(n["Q"])(Object(n["h"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[4]||(e[4]=function(t){return g.form.payment_method=t})},F,512),[[n["L"],g.form.payment_method]])]),Object(n["h"])("div",k,[L,Object(n["Q"])(Object(n["h"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":e[5]||(e[5]=function(t){return g.form.message=t})},null,512),[[n["M"],g.form.message]])])])]),Object(n["h"])("div",A,[Object(n["h"])("div",M,[T,U,(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(g.cartInfo.carts,(function(t,e){return Object(n["w"])(),Object(n["g"])("div",{class:"d-flex mb-3 order-item",key:e},[Object(n["h"])("img",{src:t.product.imageUrl,alt:""},null,8,_),Object(n["h"])("span",Q,[Object(n["h"])("p",null,[Object(n["j"])(Object(n["I"])(t.product.title),1),V,Object(n["j"])("$NT "+Object(n["I"])(t.final_total)+" 元",1)])]),E,Object(n["h"])("span",null,[Object(n["h"])("h4",null,Object(n["I"])(t.qty)+" 份",1)])])})),128)),S,Object(n["h"])("div",$,[D,Object(n["h"])("span",null,[Object(n["h"])("h4",null,"$NT "+Object(n["I"])(g.cartInfo.final_total)+" 元",1)])])])])]),Object(n["h"])("button",{type:"button",class:"btn btn-secondary text-primary btn-lg",onClick:e[6]||(e[6]=Object(n["S"])((function(){return y.createOrder&&y.createOrder.apply(y,arguments)}),["prevent"]))},"送出訂單")])],64)}Object(n["x"])();o("99af");var N={data:function(){return{isLoading:!1,cartInfo:{},form:{user:{name:"",email:"",tel:"",address:""},message:"",payment_method:""},orderId:""}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/cart");this.axios.get(e).then((function(e){console.log(e.data.data),t.cartInfo=e.data.data,t.isLoading=!1}))},toCheckout:function(){this.$router.push("/mall/checkout/".concat(this.orderId))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("john0531-api","/order"),o=this.form;this.axios.post(e,{data:o}).then((function(e){console.log(e),t.orderId=e.data.orderId,t.isLoading=!1,t.toCheckout()}))}},created:function(){this.getCart()}};o("4f30");N.render=J,N.__scopeId="data-v-94cd1bac";e["default"]=N},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-14c763ea.ab84eb5f.js.map