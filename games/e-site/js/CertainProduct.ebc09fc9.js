(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CertainProduct"],{"1c3d":function(t,r,o){"use strict";var e=o("8c79"),i=o.n(e);i.a},"342f8":function(t,r,o){},"3f5c":function(t,r,o){"use strict";var e=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("div",{class:{shadow:t.shadow,popup:!0},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[o("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[o("span",{on:{click:t.clicking}},[o("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"250px","img-alt":t.product.name,"img-top":""}},[o("b-card-title",{staticStyle:{"font-size":"110%"}},[t._v(" "+t._s(t.product.name)+" ")]),o("b-card-text",[o("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),o("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")]),o("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)]),o("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),o("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.id,"aria-expanded":""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")])],1),o("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",lazy:"",width:"70%"},scopedSlots:t._u([{key:"footer",fn:function(){return[o("div",{staticClass:"mx-auto text-center"},[o("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),o("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[o("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[o("div",{staticClass:"text-center"},[o("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),o("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?o("div",{staticClass:"mx-auto d-flex flex-column"},[o("b-list-group",[t._l(t.productFull.specifications,(function(r,e,i){return o("span",{key:i},[Array.isArray(r)?o("b-list-group-item",[o("b-form-group",{attrs:{label:e}},[o("b-form-select",{staticStyle:{width:"70%"},attrs:{options:r,"value-field":e},scopedSlots:t._u([{key:"first",fn:function(){return[o("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[e],callback:function(r){t.$set(t.selector,e,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),o("b-list-group-item",[o("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),o("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},i=[],s=(o("b0c0"),o("9911"),o("5530")),a=o("2f62"),c=o("9c03"),n={props:["product"],data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(s["a"])(Object(s["a"])({},Object(a["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[c["a"]],methods:Object(s["a"])(Object(s["a"])({},Object(a["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&(this.selector[t]=null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}})},l=n,u=(o("4d02"),o("2877")),d=Object(u["a"])(l,e,i,!1,null,"556ef6f6",null);r["a"]=d.exports},"4d02":function(t,r,o){"use strict";var e=o("342f8"),i=o.n(e);i.a},"5b9f":function(t,r,o){"use strict";var e=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("b-container",{attrs:{fluid:!0}},[o("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top"}},t._l(t.products,(function(t,r){return o("b-col",{key:r,staticClass:"productClass col-md-3 col-lg-2 col-sm-4 col-xs-7",attrs:{cols:"7"}},[o("product-box",{attrs:{product:t}})],1)})),1)],1)},i=[],s=o("3f5c"),a={name:"ProductScrollSection",props:["products"],components:{ProductBox:s["a"]}},c=a,n=(o("1c3d"),o("2877")),l=Object(n["a"])(c,e,i,!1,null,"144477c5",null);r["a"]=l.exports},"74b5":function(t,r,o){"use strict";var e=o("eac8"),i=o.n(e);i.a},"857a":function(t,r,o){var e=o("1d80"),i=/"/g;t.exports=function(t,r,o,s){var a=String(e(t)),c="<"+r;return""!==o&&(c+=" "+o+'="'+String(s).replace(i,"&quot;")+'"'),c+">"+a+"</"+r+">"}},"8c79":function(t,r,o){},9911:function(t,r,o){"use strict";var e=o("23e7"),i=o("857a"),s=o("af03");e({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},"9c03":function(t,r,o){"use strict";o("d3b7");var e=o("be3b"),i={methods:{loader:function(t,r,o){return new Promise((function(i,s){e["a"].get(t,{params:r}).then((function(t){console.log("".concat(o," loaded")),console.log(t),i(t)})).catch((function(t){console.log("".concat(o," loading failed")),console.log(t.response)}))}))}}};r["a"]=i},af03:function(t,r,o){var e=o("d039");t.exports=function(t){return e((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},aff4:function(t,r,o){"use strict";o.r(r);var e=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("b-container",{attrs:{fluid:""}},[t.productLoaded?o("b-container",{staticClass:"mx-auto text-center",attrs:{fluid:""}},[o("p",{staticClass:"ml-4 mt-2 mb-n1"},[t._v(t._s(t.product.name))]),o("b-form-rating",{attrs:{inline:"","no-border":"",variant:"warning",readonly:"",precision:"2"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1):t._e(),o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{cols:"12",md:"6"}},[o("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.product.images,(function(r,e){return o("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300",src:r.link,alt:"Product Images"}})]},proxy:!0}],null,!0)})})),1)],1),t.productLoaded?o("b-col",{staticClass:"d-flex flex-column mx-auto mt-2 mt-md-0",attrs:{cols:"12",md:"6"}},[o("b-table-simple",{attrs:{bordered:"",striped:""}},[o("b-thead",[o("b-tr")],1),o("b-tbody",[o("b-tr",[o("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Specifications")]),o("b-td",t._l(Object.entries(t.product.specifications),(function(r,e){var i=r[0],s=r[1];return o("ul",{key:e},[t._v(t._s(i)+" "),Array.isArray(s)?t._l(s,(function(r,e){return o("b-list-group",{key:e,staticClass:"ml-5"},[o("li",[t._v(t._s(r))])])})):[o("li",{staticClass:"ml-5"},[t._v(t._s(s))])]],2)})),0)],1),o("b-tr",[o("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Price")]),o("b-td",{staticClass:"ml-5"},[o("span",{staticClass:"ml-5",attrs:{id:"prev-price"}},[o("span",{staticClass:"strike"},[t._v("৳"+t._s(Math.round(t.product.price.sellingPrice/(1-t.product.price.discount/100))))]),o("strong",{attrs:{id:"discount"}},[t._v(" -"+t._s(t.product.price.discount)+"%")])]),o("br"),o("span",{staticClass:"ml-5",attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.price.sellingPrice))])])],1),o("b-tr",[o("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Warrenty")]),o("b-td",[o("ul",{staticClass:"ml-3",staticStyle:{"list-style-type":"square"}},[null!=t.product.price.warranty?o("li",[t._v(t._s(t.product.price.warranty)+" days return")]):t._e(),t.product.price.refundable?o("li",[t._v("100% refund")]):t._e()])])],1)],1)],1)],1):t._e()],1),t.productLoaded?o("div",{staticClass:"mx-auto text-center col-md-4"},[o("div",[o("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.productID,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),o("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.productID,"aria-expanded":""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")]),o("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.productID,"aria-label":"Sidebar with custom footer",shadow:"",lazy:"",width:"70%"},scopedSlots:t._u([{key:"footer",fn:function(){return[o("div",{staticClass:"mx-auto text-center"},[o("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),o("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}],null,!1,2888979860),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[o("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[o("div",{staticClass:"text-center"},[o("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),o("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}],null,!1,1416755868)},[t.productLoaded?o("div",{staticClass:"mx-auto d-flex flex-column"},[o("b-list-group",[t._l(t.product.specifications,(function(r,e,i){return o("span",{key:i},[Array.isArray(r)?o("b-list-group-item",[o("b-form-group",{attrs:{label:e}},[o("b-form-select",{staticStyle:{width:"70%"},attrs:{options:r,"value-field":e},scopedSlots:t._u([{key:"first",fn:function(){return[o("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[e],callback:function(r){t.$set(t.selector,e,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),o("b-list-group-item",[o("label",{attrs:{for:"sb-inline"+t.product.productID}},[t._v("Quantity")]),o("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.productID,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)]):t._e(),o("hr"),t.productLoaded?o("div",{staticClass:"mx-auto bd-highlights text-center"},[o("h3",[t._v("Related Product")])]):t._e()],1),o("ProductScrollSection",{attrs:{products:t.relatedProducts}})],1)},i=[],s=(o("b0c0"),o("5530")),a=o("5b9f"),c=o("2f62"),n=o("be3b"),l=o("9c03"),u={name:"CertainProduct",data:function(){return{sliding:null,product:{},productLoaded:!1,relatedProducts:[],selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&null===this.selector[t])return!1;return!0}}),components:{ProductScrollSection:a["a"]},mixins:[l["a"]],methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["addToCart"])),{},{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},showPrev:function(){0===this.i&&(this.i=this.totalimage),this.i=(this.i-1)%this.totalimage},showNext:function(){this.i=(this.i+1)%this.totalimage},loadProduct:function(t){var r=this;this.loader("/product",{productID:t},"product-".concat(t)).then((function(t){r.product=t.data,r.product.specifications=r.product.extra,delete r.product.extra,r.productLoaded=!0,r.loadRelatedProducts(),r.loadSelector()}))},loadRelatedProducts:function(){var t=this;n["a"].post("/search",{productIds:this.product.relatedProductIDs}).then((function(r){console.log("products related to ".concat(t.product.productID," loaded")),console.log(r),t.relatedProducts=r.data.products})).catch((function(r){console.log("products related to ".concat(t.product.productID," failed loading")),console.log(r.response)}))},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.product.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.product.price.sellingPrice;return{products:[{id:this.product.productID,name:this.product.name,specifications:this.selector,quantity:this.quantity,image:this.product.images[0],curPrice:t,discount:this.product.price.discount,vat:this.product.price.vat}],subTotal:t*(1+this.product.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.product.productID,specifications:this.selector,quantity:this.quantity}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null)}}),watch:{$route:function(t,r){this.loadProduct(t.params.id)}},created:function(){this.loadProduct(this.$route.params.id)}},d=u,p=(o("74b5"),o("2877")),h=Object(p["a"])(d,e,i,!1,null,null,null);r["default"]=h.exports},eac8:function(t,r,o){}}]);
//# sourceMappingURL=CertainProduct.ebc09fc9.js.map