(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HomeSection"],{"1f46":function(t,o,r){"use strict";r.r(o);var s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.products,(function(t,o){return r("b-col",{key:o,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():r("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1)},e=[],a=(r("99af"),r("9c03")),n=r("3f5c"),i={name:"MostSold",data:function(){return{products:[],productLoadingDone:!0,busy:!1}},mixins:[a["a"]],components:{ProductBox:n["a"]},methods:{loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var o=this.products.length,r="5";this.loader("products/most-sold",{offset:o,limit:r},"most-sold").then((function(o){t.busy=!1,t.products=t.products.concat(o.data.products),o.data.products.length<r?t.productLoadingDone=!0:t.productLoadingDone=!1}))}},created:function(){this.loadMore()}},c=i,u=r("2877"),d=Object(u["a"])(c,s,e,!1,null,"6058c9b0",null);o["default"]=d.exports},"21fb":function(t,o,r){"use strict";r.r(o);var s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.products,(function(t,o){return r("b-col",{key:o,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():r("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1)},e=[],a=(r("99af"),r("9c03")),n=r("3f5c"),i={name:"TopRated",data:function(){return{products:[],productLoadingDone:!0,busy:!1}},mixins:[a["a"]],components:{ProductBox:n["a"]},methods:{loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var o=this.products.length,r="5";this.loader("products/top-rated",{offset:o,limit:r},"top-rated").then((function(o){t.products=t.products.concat(o.data.products),t.busy=!1,o.data.products.length<r?t.productLoadingDone=!0:t.productLoadingDone=!1}))}},created:function(){this.loadMore()}},c=i,u=r("2877"),d=Object(u["a"])(c,s,e,!1,null,"61dee3b6",null);o["default"]=d.exports},"28d1":function(t,o,r){},"3f5c":function(t,o,r){"use strict";var s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{mouseenter:function(o){t.shadow=!0},mouseleave:function(o){t.shadow=!1}}},[r("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[r("span",{on:{click:t.clicking}},[r("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"200px","img-alt":t.product.name,"img-top":""}},[r("b-card-text",{staticStyle:{padding:"0 5%"}},[r("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),r("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)",padding:"0",margin:"0"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(o){t.$set(t.product,"rating",o)},expression:"product.rating"}}),r("div",[t.product.discount>0?r("span",[r("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),r("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),r("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1)]),r("b-button",{style:{opacity:1*t.shadow},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(o){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),r("b-button",{style:{opacity:1*t.shadow},attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.id,"aria-expanded":""},on:{click:function(o){return t.initialHandler(!1)}}},[t._v(" Buy Now ")])],1),r("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",lazy:""},scopedSlots:t._u([{key:"footer",fn:function(){return[r("div",{staticClass:"mx-auto text-center"},[r("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),r("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[r("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticClass:"text-center"},[r("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),r("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?r("div",{staticClass:"mx-auto d-flex flex-column"},[r("b-list-group",[t._l(t.productFull.specifications,(function(o,s,e){return r("span",{key:e},[Array.isArray(o)?r("b-list-group-item",[r("b-form-group",{attrs:{label:s}},[r("b-form-select",{staticStyle:{width:"70%"},attrs:{options:o,"value-field":s},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[s],callback:function(o){t.$set(t.selector,s,o)},expression:"selector[key]"}})],1)],1):t._e()],1)})),r("b-list-group-item",[r("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),r("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(o){t.quantity=o},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},e=[],a=(r("b0c0"),r("9911"),r("5530")),n=r("2f62"),i=r("9c03"),c={props:["product"],data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(a["a"])(Object(a["a"])({},Object(n["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[i["a"]],methods:Object(a["a"])(Object(a["a"])({},Object(n["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var o=this.product.id;this.loader("/product",{productID:o},"specs of product-".concat(o)).then((function(o){t.productFull=o.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}})},u=c,d=(r("e92c"),r("2877")),l=Object(d["a"])(u,s,e,!1,null,"561ff584",null);o["a"]=l.exports},"4aac":function(t,o,r){"use strict";r.r(o);var s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.products,(function(t,o){return r("b-col",{key:o,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():r("b-button",{attrs:{variant:"success",disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1)},e=[],a=(r("99af"),r("9c03")),n=r("3f5c"),i={name:"OurShop",data:function(){return{products:[],productLoadingDone:!0,busy:!1}},mixins:[a["a"]],components:{ProductBox:n["a"]},methods:{loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var o=this.products.length,r="5";this.loader("products/our-shop",{offset:o,limit:r},"our-shop").then((function(o){t.busy=!1,t.products=t.products.concat(o.data.products),o.data.products.length<r?t.productLoadingDone=!0:t.productLoadingDone=!1}))}},created:function(){this.loadMore()}},c=i,u=r("2877"),d=Object(u["a"])(c,s,e,!1,null,"48a5cb90",null);o["default"]=d.exports},"857a":function(t,o,r){var s=r("1d80"),e=/"/g;t.exports=function(t,o,r,a){var n=String(s(t)),i="<"+o;return""!==r&&(i+=" "+r+'="'+String(a).replace(e,"&quot;")+'"'),i+">"+n+"</"+o+">"}},9911:function(t,o,r){"use strict";var s=r("23e7"),e=r("857a"),a=r("af03");s({target:"String",proto:!0,forced:a("link")},{link:function(t){return e(this,"a","href",t)}})},"9c03":function(t,o,r){"use strict";r("d3b7");var s=r("be3b"),e={methods:{loader:function(t,o,r){return new Promise((function(e,a){s["a"].get(t,{params:o}).then((function(t){console.log("".concat(r," loaded")),console.log(t),e(t)})).catch((function(t){console.log("".concat(r," loading failed")),console.log(t.response)}))}))}}};o["a"]=e},a5ae:function(t,o,r){"use strict";r.r(o);var s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.products,(function(t,o){return r("b-col",{key:o,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():r("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1)},e=[],a=(r("99af"),r("9c03")),n=r("3f5c"),i={name:"NewArrivals",data:function(){return{products:[],productLoadingDone:!0,busy:!1}},mixins:[a["a"]],components:{ProductBox:n["a"]},methods:{loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var o=this.products.length,r="5";this.loader("products/new-arrivals",{offset:o,limit:r},"new-arrivals").then((function(o){t.busy=!1,t.products=t.products.concat(o.data.products),o.data.products.length<r?t.productLoadingDone=!0:t.productLoadingDone=!1}))}},created:function(){this.loadMore()}},c=i,u=r("2877"),d=Object(u["a"])(c,s,e,!1,null,"983db12c",null);o["default"]=d.exports},af03:function(t,o,r){var s=r("d039");t.exports=function(t){return s((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},e92c:function(t,o,r){"use strict";var s=r("28d1"),e=r.n(s);e.a},fe8b:function(t,o,r){"use strict";r.r(o);var s=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.products,(function(t,o){return r("b-col",{key:o,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():r("b-button",{attrs:{variant:"success",disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1)},e=[],a=(r("99af"),r("9c03")),n=r("3f5c"),i={name:"FlashSale",data:function(){return{products:[],productLoadingDone:!0,busy:!1}},components:{ProductBox:n["a"]},mixins:[a["a"]],methods:{loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var o=this.products.length,r="5";this.loader("products/flash-sale",{offset:o,limit:r},"flash-sale").then((function(o){t.products=t.products.concat(o.data.products),t.busy=!1,o.data.products.length<r?t.productLoadingDone=!0:t.productLoadingDone=!1}))}},created:function(){this.loadMore()}},c=i,u=r("2877"),d=Object(u["a"])(c,s,e,!1,null,"cda57e6c",null);o["default"]=d.exports}}]);
//# sourceMappingURL=HomeSection.0221a415.js.map