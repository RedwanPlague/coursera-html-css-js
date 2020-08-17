(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CertainProduct"],{"126c":function(t,r,e){"use strict";var i=e("468b"),s=e.n(i);s.a},"1fd3":function(t,r,e){"use strict";var i=e("6de6"),s=e.n(i);s.a},"3f5c":function(t,r,e){"use strict";var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[e("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[e("div",{on:{click:t.clicking}},[e("b-card",{staticStyle:{"border-radius":"0"}},[e("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:"200px",top:""}}),e("b-card-text",{staticStyle:{padding:"0 5%"}},[e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),e("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)",padding:"0",margin:"0"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}}),e("div",[t.product.discount>0?e("span",[e("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),e("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),e("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1)]),e("b-button",{style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show,squared:""},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")]),e("b-button",{style:{opacity:1*t.shadow,border:0},attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.id,"aria-expanded":"",squared:""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")])],1),e("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{},[t._v("There are some options."),e("br"),t._v(" Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"mx-auto text-center"},[e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[e("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?e("div",{staticClass:"mx-auto d-flex flex-column"},[e("b-list-group",[t._l(t.productFull.specifications,(function(r,i,s){return e("span",{key:s},[Array.isArray(r)?e("b-list-group-item",[e("b-form-group",{attrs:{label:i}},[e("b-form-select",{staticStyle:{width:"80%"},attrs:{options:r,"value-field":i},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[i],callback:function(r){t.$set(t.selector,i,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),e("b-list-group-item",[e("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),e("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},s=[],o=(e("b0c0"),e("9911"),e("5530")),a=e("2f62"),c=e("9c03"),n={props:["product"],data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[c["a"]],methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},d=n,l=(e("1fd3"),e("2877")),u=Object(l["a"])(d,i,s,!1,null,"5d804256",null);r["a"]=u.exports},4557:function(t,r,e){"use strict";var i=e("d224"),s=e.n(i);s.a},"468b":function(t,r,e){},"5b9f":function(t,r,e){"use strict";var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:!0}},[e("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top","cols-lg":"5"}},t._l(t.products,(function(t,r){return e("b-col",{key:r,staticClass:"productClass col-md-3 col-sm-4 col-xs-7",attrs:{cols:"7"}},[e("product-box",{attrs:{product:t}})],1)})),1)],1)},s=[],o=e("3f5c"),a={name:"ProductScrollSection",props:["products"],components:{ProductBox:o["a"]}},c=a,n=(e("126c"),e("2877")),d=Object(n["a"])(c,i,s,!1,null,"60260121",null);r["a"]=d.exports},"6de6":function(t,r,e){},"74b5":function(t,r,e){"use strict";var i=e("eac8"),s=e.n(i);s.a},"793e":function(t,r,e){"use strict";var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[e("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{click:t.clicking,mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[e("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"200px","img-alt":t.brand.name,"img-top":""}},[e("b-card-text",{staticClass:"text-center",staticStyle:{padding:"0 5%"}},[e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.brand.name)+" ")]),e("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)])},s=[],o=(e("b0c0"),e("9911"),{name:"BrandBox",data:function(){return{busy:!1,shadow:!1}},props:["brand"],computed:{imgSrc:function(){return this.brand.images?this.brand.images[0].link:this.brand.image?this.brand.image.link:""}},methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainBrand",query:{name:this.brand.name}})}}}),a=o,c=(e("4557"),e("2877")),n=Object(c["a"])(a,i,s,!1,null,"da3496b6",null);r["a"]=n.exports},"857a":function(t,r,e){var i=e("1d80"),s=/"/g;t.exports=function(t,r,e,o){var a=String(i(t)),c="<"+r;return""!==e&&(c+=" "+e+'="'+String(o).replace(s,"&quot;")+'"'),c+">"+a+"</"+r+">"}},9911:function(t,r,e){"use strict";var i=e("23e7"),s=e("857a"),o=e("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return s(this,"a","href",t)}})},"9c03":function(t,r,e){"use strict";e("d3b7");var i=e("be3b"),s={methods:{loader:function(t,r,e){return new Promise((function(s,o){i["a"].get(t,{params:r}).then((function(t){console.log("".concat(e," loaded")),console.log(t),s(t)})).catch((function(t){console.log("".concat(e," loading failed")),console.log(t.response)}))}))}}};r["a"]=s},af03:function(t,r,e){var i=e("d039");t.exports=function(t){return i((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},aff4:function(t,r,e){"use strict";e.r(r);var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:""}},[e("pre",[t._v(t._s(t.relatedBrands))]),e("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[t.productLoaded?e("b-container",{staticClass:"mx-auto text-center",attrs:{fluid:""}},[e("p",{staticClass:"ml-4 mt-2 mb-n1"},[t._v(t._s(t.product.name))]),e("b-form-rating",{attrs:{inline:"","no-border":"",variant:"warning",readonly:"",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1):t._e(),e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"4"}},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.product.images,(function(r,i){return e("b-carousel-slide",{key:i,scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300",src:r.link,alt:"Product Images"}})]},proxy:!0}],null,!0)})})),1)],1),t.productLoaded?e("b-col",{staticClass:"d-flex flex-column mx-auto mt-2 mt-md-0",attrs:{cols:"12",md:"8"}},[e("b-table-simple",{attrs:{bordered:"",striped:""}},[e("b-thead",[e("b-tr")],1),e("b-tbody",[e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Specifications")]),e("b-td",t._l(Object.entries(t.product.specifications),(function(r,i){var s=r[0],o=r[1];return e("ul",{key:i},[t._v(t._s(s)+" "),Array.isArray(o)?t._l(o,(function(r,i){return e("b-list-group",{key:i,staticClass:"ml-5"},[e("li",[t._v(t._s(r))])])})):[e("li",{staticClass:"ml-5",staticStyle:{"list-style-type":"circle"}},[t._v(t._s(o))])]],2)})),0)],1),e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Price")]),e("b-td",{staticClass:"ml-5"},[e("span",{staticClass:"ml-5",attrs:{id:"prev-price"}},[e("span",{staticClass:"strike"},[t._v("৳"+t._s(Math.round(t.product.price.sellingPrice/(1-t.product.price.discount/100))))]),e("strong",{attrs:{id:"discount"}},[t._v(" -"+t._s(t.product.price.discount)+"%")])]),e("br"),e("span",{staticClass:"ml-5",attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.price.sellingPrice))])])],1),e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Warrenty")]),e("b-td",[e("ul",{staticClass:"ml-3",staticStyle:{"list-style-type":"square"}},[null!=t.product.price.warranty?e("li",[t._v(t._s(t.product.price.warranty)+" days return")]):t._e(),t.product.price.refundable?e("li",[t._v("100% refund")]):t._e()])])],1)],1)],1)],1):t._e()],1),t.productLoaded?e("div",{staticClass:"mx-auto text-center col-md-4"},[e("div",[e("b-button",{staticStyle:{border:"0"},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.productID,"aria-expanded":t.show,squared:""},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")]),e("b-button",{staticStyle:{border:"0"},attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.productID,"aria-expanded":"",squared:""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")]),e("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.productID,"aria-label":"Sidebar with custom footer",shadow:"",lazy:""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"mx-auto text-center"},[e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}],null,!1,4045057300),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[e("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}],null,!1,1416755868)},[t.productLoaded?e("div",{staticClass:"mx-auto d-flex flex-column"},[e("b-list-group",[t._l(t.product.specifications,(function(r,i,s){return e("span",{key:s},[Array.isArray(r)?e("b-list-group-item",[e("b-form-group",{attrs:{label:i}},[e("b-form-select",{staticStyle:{width:"70%"},attrs:{options:r,"value-field":i},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[i],callback:function(r){t.$set(t.selector,i,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),e("b-list-group-item",[e("label",{attrs:{for:"sb-inline"+t.product.productID}},[t._v("Quantity")]),e("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.productID,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)]):t._e(),e("hr"),t.productLoaded&&0!==t.relatedProducts.length?e("div",{staticClass:"mx-auto bd-highlights text-center"},[e("h3",[t._v("Related Products")])]):t._e()],1)],1),e("ProductScrollSection",{attrs:{products:t.relatedProducts}}),t.productLoaded&&0!==t.relatedBrands.length?e("div",{staticClass:"mx-auto bd-highlights text-center"},[e("h3",[t._v("Related Brands")]),e("b-row",{staticClass:"my-4",attrs:{"cols-lg":"5"}},t._l(t.relatedBrands,(function(t,r){return e("b-col",{key:r,staticClass:"p-3 mx-3"},[e("brand-box",{attrs:{brand:t}})],1)})),1)],1):t._e()],1)},s=[],o=(e("b0c0"),e("5530")),a=e("5b9f"),c=e("793e"),n=e("2f62"),d=e("be3b"),l=e("9c03"),u={name:"CertainProduct",data:function(){return{sliding:null,product:{},productLoaded:!1,relatedProducts:[],selector:{},show:!1,cartButtonPressed:null,quantity:1,relatedBrands:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&null===this.selector[t])return!1;return!0}}),components:{ProductScrollSection:a["a"],BrandBox:c["a"]},mixins:[l["a"]],methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["addToCart"])),{},{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},showPrev:function(){0===this.i&&(this.i=this.totalimage),this.i=(this.i-1)%this.totalimage},showNext:function(){this.i=(this.i+1)%this.totalimage},loadProduct:function(t){var r=this;this.loader("/product",{productID:t},"product-".concat(t)).then((function(t){r.product=t.data,r.product.specifications=r.product.extra,delete r.product.extra,r.productLoaded=!0,r.loadRelatedProducts(),r.relatedBrands=t.data.relatedBrands,r.loadSelector()}))},loadRelatedProducts:function(){var t=this;d["a"].post("/search",{productIds:this.product.relatedProductIDs}).then((function(r){console.log("products related to ".concat(t.product.productID," loaded")),console.log(r),t.relatedProducts=r.data.products})).catch((function(r){console.log("products related to ".concat(t.product.productID," failed loading")),console.log(r.response)}))},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.product.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.product.price.sellingPrice;return{products:[{id:this.product.productID,name:this.product.name,specifications:this.selector,quantity:this.quantity,image:this.product.images[0],curPrice:t,discount:this.product.price.discount,vat:this.product.price.vat}],subTotal:t*(1+this.product.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.product.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.price.sellingPrice,discount:this.product.price.discount,image:this.product.images[0],name:this.product.name,vat:this.product.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null)}}),watch:{$route:function(t,r){this.loadProduct(t.params.id)}},created:function(){this.loadProduct(this.$route.params.id)}},p=u,h=(e("74b5"),e("2877")),f=Object(h["a"])(p,i,s,!1,null,null,null);r["default"]=f.exports},d224:function(t,r,e){},eac8:function(t,r,e){}}]);
//# sourceMappingURL=CertainProduct.68b48199.js.map