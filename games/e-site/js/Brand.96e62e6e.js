(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Brand"],{"07f9":function(t,r,n){},"26dd":function(t,r,n){"use strict";var o=n("67c6"),i=n.n(o);i.a},"37c1":function(t,r,n){},"3f5c":function(t,r,n){"use strict";var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{class:{shadow:t.shadow,popup:!0},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[n("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[n("span",{on:{click:t.clicking}},[n("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"250px","img-alt":t.product.name,"img-top":""}},[n("b-card-text",{staticStyle:{padding:"0"}},[n("div",[t._v(t._s(t.product.name))]),n("span",[n("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),n("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")]),n("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])]),n("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)",padding:"0",margin:"0"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1)],1)],1)]),n("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),n("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.id,"aria-expanded":""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")])],1),n("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",lazy:""},scopedSlots:t._u([{key:"footer",fn:function(){return[n("div",{staticClass:"mx-auto text-center"},[n("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),n("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[n("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center"},[n("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),n("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?n("div",{staticClass:"mx-auto d-flex flex-column"},[n("b-list-group",[t._l(t.productFull.specifications,(function(r,o,i){return n("span",{key:i},[Array.isArray(r)?n("b-list-group-item",[n("b-form-group",{attrs:{label:o}},[n("b-form-select",{staticStyle:{width:"70%"},attrs:{options:r,"value-field":o},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[o],callback:function(r){t.$set(t.selector,o,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),n("b-list-group-item",[n("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),n("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},i=[],a=(n("b0c0"),n("9911"),n("5530")),e=n("2f62"),s=n("9c03"),c={props:["product"],data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(a["a"])(Object(a["a"])({},Object(e["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[s["a"]],methods:Object(a["a"])(Object(a["a"])({},Object(e["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}})},d=c,u=(n("26dd"),n("2877")),l=Object(u["a"])(d,o,i,!1,null,"d84f8d98",null);r["a"]=l.exports},"49cf":function(t,r,n){"use strict";var o=n("adfb"),i=n.n(o);i.a},5214:function(t,r,n){"use strict";var o=n("07f9"),i=n.n(o);i.a},"67c6":function(t,r,n){},"7a81":function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{staticClass:"main",attrs:{fluid:!0}},[n("b-carousel",{staticClass:"mb-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},[n("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:t.imgSrc}})]},proxy:!0}])})],1),n("b-row",t._l(t.products,(function(t){return n("b-col",{key:t.id,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[n("product-box",{attrs:{product:t}})],1)})),1),n("hr"),n("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():n("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:function(r){return t.loadProducts(t.brand.name)}}},[t._v(" Load More Products ")])],1)],1)],1)},i=[],a=(n("99af"),n("b0c0"),n("9911"),n("3f5c")),e=n("9c03"),s={name:"CertainBrand",data:function(){return{brand:{},products:[],productLoadingDone:!1,sliding:null,busy:!1}},computed:{imgSrc:function(){return this.brand.image?this.brand.image.link:""}},components:{ProductBox:a["a"]},mixins:[e["a"]],methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadBrand:function(t){var r=this;this.loader("/brand",{name:t},"brand ".concat(t)).then((function(t){r.brand=t.data,console.log("done"+t.data)}))},loadProducts:function(t){var r=this;this.productLoadingDone||(this.busy=!0);var n=this.products.length,o="5";this.loader("/products/brand",{name:t,offset:n,limit:o},"products of ".concat(t)).then((function(t){r.busy=!1,r.products=r.products.concat(t.data.products),t.data.products.length<o?r.productLoadingDone=!0:r.productLoadingDone=!1}))},clearProducts:function(){this.products=[],this.productLoadingDone=!1},loadAll:function(t){this.loadBrand(t),this.clearProducts(),this.loadProducts(t)}},watch:{$route:function(t,r){this.loadAll(t.query.name)}},created:function(){this.loadAll(this.$route.query.name)}},c=s,d=(n("49cf"),n("2877")),u=Object(d["a"])(c,o,i,!1,null,"96094580",null);r["default"]=u.exports},"857a":function(t,r,n){var o=n("1d80"),i=/"/g;t.exports=function(t,r,n,a){var e=String(o(t)),s="<"+r;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+e+"</"+r+">"}},9911:function(t,r,n){"use strict";var o=n("23e7"),i=n("857a"),a=n("af03");o({target:"String",proto:!0,forced:a("link")},{link:function(t){return i(this,"a","href",t)}})},"99af":function(t,r,n){"use strict";var o=n("23e7"),i=n("d039"),a=n("e8b5"),e=n("861d"),s=n("7b0b"),c=n("50c4"),d=n("8418"),u=n("65f0"),l=n("1dde"),p=n("b622"),f=n("2d00"),h=p("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=l("concat"),y=function(t){if(!e(t))return!1;var r=t[h];return void 0!==r?!!r:a(t)},w=!g||!v;o({target:"Array",proto:!0,forced:w},{concat:function(t){var r,n,o,i,a,e=s(this),l=u(e,0),p=0;for(r=-1,o=arguments.length;r<o;r++)if(a=-1===r?e:arguments[r],y(a)){if(i=c(a.length),p+i>b)throw TypeError(m);for(n=0;n<i;n++,p++)n in a&&d(l,p,a[n])}else{if(p>=b)throw TypeError(m);d(l,p++,a)}return l.length=p,l}})},"9c03":function(t,r,n){"use strict";n("d3b7");var o=n("be3b"),i={methods:{loader:function(t,r,n){return new Promise((function(i,a){o["a"].get(t,{params:r}).then((function(t){console.log("".concat(n," loaded")),console.log(t),i(t)})).catch((function(t){console.log("".concat(n," loading failed")),console.log(t.response)}))}))}}};r["a"]=i},adfb:function(t,r,n){},af03:function(t,r,n){var o=n("d039");t.exports=function(t){return o((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},b20a:function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{staticClass:"main",attrs:{fluid:!0}},[n("b-row",t._l(t.brands,(function(t){return n("b-col",{key:t.name,attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[n("brand-box",{attrs:{brand:t}})],1)})),1),t.brandLoadingDone?t._e():n("b-button",{on:{click:t.loadBrands}},[t._v(" Load More ")])],1)},i=[],a=(n("99af"),function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[n("router-link",{attrs:{id:"holder",tag:"div",to:{name:"CertainBrand",query:{name:t.brand.name}}},on:{click:function(r){t.show=!0}}},[n("b-card",{attrs:{title:t.brand.name,"img-src":t.imgSrc,"img-alt":t.brand.name,"img-top":""}},[n("b-card-text",[n("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)],1)}),e=[],s=(n("9911"),{name:"BrandBox",data:function(){return{busy:!1}},props:["brand"],computed:{imgSrc:function(){return this.brand.image?this.brand.image.link:""}},methods:{onHidden:function(){this.$refs.button.focus()}}}),c=s,d=(n("f5df9"),n("2877")),u=Object(d["a"])(c,a,e,!1,null,"3b798cd8",null),l=u.exports,p=n("9c03"),f={name:"AllBrands",data:function(){return{brands:[],brandLoadingDone:!1}},components:{BrandBox:l},mixins:[p["a"]],methods:{loadBrands:function(){var t=this,r=this.brands.length,n="5";this.loader("/brands/all",{offset:r,limit:n},"brands").then((function(r){t.brands=t.brands.concat(r.data.brands),r.data.brands.length<n&&(t.brandLoadingDone=!0)}))}},created:function(){this.loadBrands()}},h=f,b=(n("5214"),Object(d["a"])(h,o,i,!1,null,"201cf722",null));r["default"]=b.exports},f5df9:function(t,r,n){"use strict";var o=n("37c1"),i=n.n(o);i.a}}]);
//# sourceMappingURL=Brand.96e62e6e.js.map