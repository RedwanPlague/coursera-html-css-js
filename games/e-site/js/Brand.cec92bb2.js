(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Brand"],{"07f9":function(t,n,r){},"342f8":function(t,n,r){},"37c1":function(t,n,r){},"3f5c":function(t,n,r){"use strict";var o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{class:{shadow:t.shadow,popup:!0},attrs:{id:"holder"},on:{mouseenter:function(n){t.shadow=!0},mouseleave:function(n){t.shadow=!1}}},[r("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[r("span",{on:{click:t.clicking}},[r("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"250px","img-alt":t.product.name,"img-top":""}},[r("b-card-title",{staticStyle:{"font-size":"110%"}},[t._v(" "+t._s(t.product.name)+" ")]),r("b-card-text",[r("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),r("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")]),r("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)]),r("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(n){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),r("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.id,"aria-expanded":""},on:{click:function(n){return t.initialHandler(!1)}}},[t._v(" Buy Now ")])],1),r("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",lazy:"",width:"70%"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("div",{staticClass:"mx-auto text-center"},[r("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),r("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[r("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticClass:"text-center"},[r("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),r("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?r("div",{staticClass:"mx-auto d-flex flex-column"},[r("b-list-group",[t._l(t.productFull.specifications,(function(n,o,i){return r("span",{key:i},[Array.isArray(n)?r("b-list-group-item",[r("b-form-group",{attrs:{label:o}},[r("b-form-select",{staticStyle:{width:"70%"},attrs:{options:n,"value-field":o},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[o],callback:function(n){t.$set(t.selector,o,n)},expression:"selector[key]"}})],1)],1):t._e()],1)})),r("b-list-group-item",[r("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),r("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(n){t.quantity=n},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},i=[],a=(r("b0c0"),r("9911"),r("5530")),e=r("2f62"),s=r("9c03"),c={props:["product"],data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(a["a"])(Object(a["a"])({},Object(e["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[s["a"]],methods:Object(a["a"])(Object(a["a"])({},Object(e["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var n=this.product.id;this.loader("/product",{productID:n},"specs of product-".concat(n)).then((function(n){t.productFull=n.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&(this.selector[t]=null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}})},d=c,u=(r("4d02"),r("2877")),l=Object(u["a"])(d,o,i,!1,null,"556ef6f6",null);n["a"]=l.exports},"4d02":function(t,n,r){"use strict";var o=r("342f8"),i=r.n(o);i.a},5214:function(t,n,r){"use strict";var o=r("07f9"),i=r.n(o);i.a},"7a81":function(t,n,r){"use strict";r.r(n);var o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-container",{staticClass:"main",attrs:{fluid:!0}},[r("b-carousel",{staticClass:"mb-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},[r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:t.imgSrc}})]},proxy:!0}])})],1),r("b-row",t._l(t.products,(function(t){return r("b-col",{key:t.id,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():r("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:function(n){return t.loadProducts(t.brand.name)}}},[t._v(" Load More Products ")])],1)],1)],1)},i=[],a=(r("99af"),r("b0c0"),r("9911"),r("3f5c")),e=r("9c03"),s={name:"CertainBrand",data:function(){return{brand:{},products:[],productLoadingDone:!0,sliding:null,busy:!1}},computed:{imgSrc:function(){return this.brand.image?this.brand.image.link:""}},components:{ProductBox:a["a"]},mixins:[e["a"]],methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadBrand:function(t){var n=this;this.loader("/brand",{name:t},"brand ".concat(t)).then((function(t){n.brand=t.data,console.log("done"+t.data)}))},loadProducts:function(t){var n=this;this.productLoadingDone||(this.busy=!0);var r=this.products.length,o="2";this.loader("/products/brand",{name:t,offset:r,limit:o},"products of ".concat(t)).then((function(t){n.busy=!1,n.products=n.products.concat(t.data.products),t.data.products.length<o?n.productLoadingDone=!0:n.productLoadingDone=!1}))},clearProducts:function(){this.products=[],this.productLoadingDone=!0},loadAll:function(t){this.loadBrand(t),this.clearProducts(),this.loadProducts(t)}},watch:{$route:function(t,n){this.loadAll(t.query.name)}},created:function(){this.loadAll(this.$route.query.name)}},c=s,d=(r("d225"),r("2877")),u=Object(d["a"])(c,o,i,!1,null,"051dc104",null);n["default"]=u.exports},"857a":function(t,n,r){var o=r("1d80"),i=/"/g;t.exports=function(t,n,r,a){var e=String(o(t)),s="<"+n;return""!==r&&(s+=" "+r+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+e+"</"+n+">"}},9911:function(t,n,r){"use strict";var o=r("23e7"),i=r("857a"),a=r("af03");o({target:"String",proto:!0,forced:a("link")},{link:function(t){return i(this,"a","href",t)}})},"99af":function(t,n,r){"use strict";var o=r("23e7"),i=r("d039"),a=r("e8b5"),e=r("861d"),s=r("7b0b"),c=r("50c4"),d=r("8418"),u=r("65f0"),l=r("1dde"),p=r("b622"),f=r("2d00"),h=p("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=l("concat"),y=function(t){if(!e(t))return!1;var n=t[h];return void 0!==n?!!n:a(t)},w=!g||!v;o({target:"Array",proto:!0,forced:w},{concat:function(t){var n,r,o,i,a,e=s(this),l=u(e,0),p=0;for(n=-1,o=arguments.length;n<o;n++)if(a=-1===n?e:arguments[n],y(a)){if(i=c(a.length),p+i>b)throw TypeError(m);for(r=0;r<i;r++,p++)r in a&&d(l,p,a[r])}else{if(p>=b)throw TypeError(m);d(l,p++,a)}return l.length=p,l}})},"9c03":function(t,n,r){"use strict";r("d3b7");var o=r("be3b"),i={methods:{loader:function(t,n,r){return new Promise((function(i,a){o["a"].get(t,{params:n}).then((function(t){console.log("".concat(r," loaded")),console.log(t),i(t)})).catch((function(t){console.log("".concat(r," loading failed")),console.log(t.response)}))}))}}};n["a"]=i},af03:function(t,n,r){var o=r("d039");t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},b20a:function(t,n,r){"use strict";r.r(n);var o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-container",{staticClass:"main",attrs:{fluid:!0}},[r("b-row",t._l(t.brands,(function(t){return r("b-col",{key:t.name,attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[r("brand-box",{attrs:{brand:t}})],1)})),1),t.brandLoadingDone?t._e():r("b-button",{on:{click:t.loadBrands}},[t._v(" Load More ")])],1)},i=[],a=(r("99af"),function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[r("router-link",{attrs:{id:"holder",tag:"div",to:{name:"CertainBrand",query:{name:t.brand.name}}},on:{click:function(n){t.show=!0}}},[r("b-card",{attrs:{title:t.brand.name,"img-src":t.imgSrc,"img-alt":t.brand.name,"img-top":""}},[r("b-card-text",[r("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)],1)}),e=[],s=(r("9911"),{name:"BrandBox",data:function(){return{busy:!1}},props:["brand"],computed:{imgSrc:function(){return this.brand.image?this.brand.image.link:""}},methods:{onHidden:function(){this.$refs.button.focus()}}}),c=s,d=(r("f5df9"),r("2877")),u=Object(d["a"])(c,a,e,!1,null,"3b798cd8",null),l=u.exports,p=r("9c03"),f={name:"AllBrands",data:function(){return{brands:[],brandLoadingDone:!1}},components:{BrandBox:l},mixins:[p["a"]],methods:{loadBrands:function(){var t=this,n=this.brands.length,r="2";this.loader("/brands/all",{offset:n,limit:r},"brands").then((function(n){t.brands=t.brands.concat(n.data.brands),n.data.brands.length<r&&(t.brandLoadingDone=!0)}))}},created:function(){this.loadBrands()}},h=f,b=(r("5214"),Object(d["a"])(h,o,i,!1,null,"201cf722",null));n["default"]=b.exports},d225:function(t,n,r){"use strict";var o=r("db28"),i=r.n(o);i.a},db28:function(t,n,r){},f5df9:function(t,n,r){"use strict";var o=r("37c1"),i=r.n(o);i.a}}]);
//# sourceMappingURL=Brand.cec92bb2.js.map