(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CertainProduct"],{"1c3d":function(t,r,e){"use strict";var o=e("8c79"),i=e.n(o);i.a},"26dd":function(t,r,e){"use strict";var o=e("67c6"),i=e.n(o);i.a},"3f5c":function(t,r,e){"use strict";var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{class:{shadow:t.shadow,popup:!0},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[e("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[e("span",{on:{click:t.clicking}},[e("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"250px","img-alt":t.product.name,"img-top":""}},[e("b-card-text",{staticStyle:{padding:"0"}},[e("div",[t._v(t._s(t.product.name))]),e("span",[e("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),e("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")]),e("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])]),e("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)",padding:"0",margin:"0"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1)],1)],1)]),e("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),e("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.id,"aria-expanded":""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")])],1),e("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",lazy:""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"mx-auto text-center"},[e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[e("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?e("div",{staticClass:"mx-auto d-flex flex-column"},[e("b-list-group",[t._l(t.productFull.specifications,(function(r,o,i){return e("span",{key:i},[Array.isArray(r)?e("b-list-group-item",[e("b-form-group",{attrs:{label:o}},[e("b-form-select",{staticStyle:{width:"70%"},attrs:{options:r,"value-field":o},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[o],callback:function(r){t.$set(t.selector,o,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),e("b-list-group-item",[e("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),e("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},i=[],s=(e("b0c0"),e("9911"),e("5530")),a=e("2f62"),c=e("9c03"),n={props:["product"],data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(s["a"])(Object(s["a"])({},Object(a["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[c["a"]],methods:Object(s["a"])(Object(s["a"])({},Object(a["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}})},l=n,u=(e("26dd"),e("2877")),d=Object(u["a"])(l,o,i,!1,null,"d84f8d98",null);r["a"]=d.exports},"5b9f":function(t,r,e){"use strict";var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:!0}},[e("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top"}},t._l(t.products,(function(t,r){return e("b-col",{key:r,staticClass:"productClass col-md-3 col-lg-2 col-sm-4 col-xs-7",attrs:{cols:"7"}},[e("product-box",{attrs:{product:t}})],1)})),1)],1)},i=[],s=e("3f5c"),a={name:"ProductScrollSection",props:["products"],components:{ProductBox:s["a"]}},c=a,n=(e("1c3d"),e("2877")),l=Object(n["a"])(c,o,i,!1,null,"144477c5",null);r["a"]=l.exports},"67c6":function(t,r,e){},"74b5":function(t,r,e){"use strict";var o=e("eac8"),i=e.n(o);i.a},"857a":function(t,r,e){var o=e("1d80"),i=/"/g;t.exports=function(t,r,e,s){var a=String(o(t)),c="<"+r;return""!==e&&(c+=" "+e+'="'+String(s).replace(i,"&quot;")+'"'),c+">"+a+"</"+r+">"}},"8c79":function(t,r,e){},9911:function(t,r,e){"use strict";var o=e("23e7"),i=e("857a"),s=e("af03");o({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},"9c03":function(t,r,e){"use strict";e("d3b7");var o=e("be3b"),i={methods:{loader:function(t,r,e){return new Promise((function(i,s){o["a"].get(t,{params:r}).then((function(t){console.log("".concat(e," loaded")),console.log(t),i(t)})).catch((function(t){console.log("".concat(e," loading failed")),console.log(t.response)}))}))}}};r["a"]=i},af03:function(t,r,e){var o=e("d039");t.exports=function(t){return o((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},aff4:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:""}},[e("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[t.productLoaded?e("b-container",{staticClass:"mx-auto text-center",attrs:{fluid:""}},[e("p",{staticClass:"ml-4 mt-2 mb-n1"},[t._v(t._s(t.product.name))]),e("b-form-rating",{attrs:{inline:"","no-border":"",variant:"warning",readonly:"",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1):t._e(),e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.product.images,(function(r,o){return e("b-carousel-slide",{key:o,scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300",src:r.link,alt:"Product Images"}})]},proxy:!0}],null,!0)})})),1)],1),t.productLoaded?e("b-col",{staticClass:"d-flex flex-column mx-auto mt-2 mt-md-0",attrs:{cols:"12",md:"6"}},[e("b-table-simple",{attrs:{bordered:"",striped:""}},[e("b-thead",[e("b-tr")],1),e("b-tbody",[e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Specifications")]),e("b-td",t._l(Object.entries(t.product.specifications),(function(r,o){var i=r[0],s=r[1];return e("ul",{key:o},[t._v(t._s(i)+" "),Array.isArray(s)?t._l(s,(function(r,o){return e("b-list-group",{key:o,staticClass:"ml-5"},[e("li",[t._v(t._s(r))])])})):[e("li",{staticClass:"ml-5",staticStyle:{"list-style-type":"circle"}},[t._v(t._s(s))])]],2)})),0)],1),e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Price")]),e("b-td",{staticClass:"ml-5"},[e("span",{staticClass:"ml-5",attrs:{id:"prev-price"}},[e("span",{staticClass:"strike"},[t._v("৳"+t._s(Math.round(t.product.price.sellingPrice/(1-t.product.price.discount/100))))]),e("strong",{attrs:{id:"discount"}},[t._v(" -"+t._s(t.product.price.discount)+"%")])]),e("br"),e("span",{staticClass:"ml-5",attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.price.sellingPrice))])])],1),e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Warrenty")]),e("b-td",[e("ul",{staticClass:"ml-3",staticStyle:{"list-style-type":"square"}},[null!=t.product.price.warranty?e("li",[t._v(t._s(t.product.price.warranty)+" days return")]):t._e(),t.product.price.refundable?e("li",[t._v("100% refund")]):t._e()])])],1)],1)],1)],1):t._e()],1),t.productLoaded?e("div",{staticClass:"mx-auto text-center col-md-4"},[e("div",[e("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.productID,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),e("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.productID,"aria-expanded":""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")]),e("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.productID,"aria-label":"Sidebar with custom footer",shadow:"",lazy:"",width:"70%"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"mx-auto text-center"},[e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}],null,!1,2888979860),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[e("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}],null,!1,1416755868)},[t.productLoaded?e("div",{staticClass:"mx-auto d-flex flex-column"},[e("b-list-group",[t._l(t.product.specifications,(function(r,o,i){return e("span",{key:i},[Array.isArray(r)?e("b-list-group-item",[e("b-form-group",{attrs:{label:o}},[e("b-form-select",{staticStyle:{width:"70%"},attrs:{options:r,"value-field":o},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[o],callback:function(r){t.$set(t.selector,o,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),e("b-list-group-item",[e("label",{attrs:{for:"sb-inline"+t.product.productID}},[t._v("Quantity")]),e("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.productID,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)]):t._e(),e("hr"),t.productLoaded?e("div",{staticClass:"mx-auto bd-highlights text-center"},[e("h3",[t._v("Related Products")])]):t._e()],1)],1),e("ProductScrollSection",{attrs:{products:t.relatedProducts}})],1)},i=[],s=(e("b0c0"),e("5530")),a=e("5b9f"),c=e("2f62"),n=e("be3b"),l=e("9c03"),u={name:"CertainProduct",data:function(){return{sliding:null,product:{},productLoaded:!1,relatedProducts:[],selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&null===this.selector[t])return!1;return!0}}),components:{ProductScrollSection:a["a"]},mixins:[l["a"]],methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["addToCart"])),{},{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},showPrev:function(){0===this.i&&(this.i=this.totalimage),this.i=(this.i-1)%this.totalimage},showNext:function(){this.i=(this.i+1)%this.totalimage},loadProduct:function(t){var r=this;this.loader("/product",{productID:t},"product-".concat(t)).then((function(t){r.product=t.data,r.product.specifications=r.product.extra,delete r.product.extra,r.productLoaded=!0,r.loadRelatedProducts(),r.loadSelector()}))},loadRelatedProducts:function(){var t=this;n["a"].post("/search",{productIds:this.product.relatedProductIDs}).then((function(r){console.log("products related to ".concat(t.product.productID," loaded")),console.log(r),t.relatedProducts=r.data.products})).catch((function(r){console.log("products related to ".concat(t.product.productID," failed loading")),console.log(r.response)}))},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.product.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.product.price.sellingPrice;return{products:[{id:this.product.productID,name:this.product.name,specifications:this.selector,quantity:this.quantity,image:this.product.images[0],curPrice:t,discount:this.product.price.discount,vat:this.product.price.vat}],subTotal:t*(1+this.product.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.product.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.price.sellingPrice,discount:this.product.price.discount,image:this.product.images[0],name:this.product.name,vat:this.product.price.vat}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null)}}),watch:{$route:function(t,r){this.loadProduct(t.params.id)}},created:function(){this.loadProduct(this.$route.params.id)}},d=u,p=(e("74b5"),e("2877")),h=Object(p["a"])(d,o,i,!1,null,null,null);r["default"]=h.exports},eac8:function(t,r,e){}}]);
//# sourceMappingURL=CertainProduct.13eed41f.js.map