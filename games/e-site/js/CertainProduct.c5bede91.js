(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CertainProduct"],{1187:function(t,r,e){"use strict";var s=e("3e92"),i=e.n(s);i.a},"126c":function(t,r,e){"use strict";var s=e("468b"),i=e.n(s);i.a},"3e92":function(t,r,e){},"3f5c":function(t,r,e){"use strict";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[e("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[e("div",{on:{click:t.clicking}},[e("b-card",{staticStyle:{"border-radius":"0"}},[e("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:t.isArrival?"100px":"200px",top:""}}),e("b-card-text",{staticStyle:{padding:"0 5%"}},[e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),t.isArrival?t._e():e("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}}),t.isArrival?t._e():e("div",[t.product.discount>0?e("span",[e("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),e("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),e("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1)]),t.isArrival?t._e():e("b-button",{staticClass:"mx-auto my-auto text-center",style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show,squared:""},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")])],1),e("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{},[t._v("There are some options."),e("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"mx-auto text-center"},[e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[e("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?e("div",{staticClass:"mx-auto d-flex flex-column text-center"},[e("b-list-group",[t._l(t.productFull.specifications,(function(r,s,i){return e("span",{key:i},[Array.isArray(r)?e("b-list-group-item",[e("b-form-group",{attrs:{label:s}},[e("b-form-select",{staticStyle:{width:"80%"},attrs:{options:r,"value-field":s},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[s],callback:function(r){t.$set(t.selector,s,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),e("b-list-group-item",[e("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),e("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},i=[],a=(e("b0c0"),e("9911"),e("5530")),o=e("2f62"),n=e("9c03"),c={props:{product:{},isArrival:{default:!1}},data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[n["a"]],methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},l=c,d=(e("1187"),e("2877")),u=Object(d["a"])(l,s,i,!1,null,"2b7c977a",null);r["a"]=u.exports},"468b":function(t,r,e){},4858:function(t,r,e){"use strict";var s=e("d47b"),i=e.n(s);i.a},"5b9f":function(t,r,e){"use strict";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:!0}},[e("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top","cols-lg":"5"}},t._l(t.products,(function(t,r){return e("b-col",{key:r,staticClass:"productClass col-md-3 col-sm-4 col-xs-7",attrs:{cols:"7"}},[e("product-box",{attrs:{product:t}})],1)})),1)],1)},i=[],a=e("3f5c"),o={name:"ProductScrollSection",props:["products"],components:{ProductBox:a["a"]}},n=o,c=(e("126c"),e("2877")),l=Object(c["a"])(n,s,i,!1,null,"60260121",null);r["a"]=l.exports},"74b5":function(t,r,e){"use strict";var s=e("eac8"),i=e.n(s);i.a},"793e":function(t,r,e){"use strict";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[e("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{click:t.clicking,mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[e("b-card",{attrs:{"img-src":t.brand.image.link,"img-width":"250px","img-height":"200px","img-alt":t.brand.name,"img-top":""}},[e("b-card-text",{staticClass:"text-center",staticStyle:{padding:"0 5%"}},[e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.brand.name)+" ")]),e("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)])},i=[],a=(e("b0c0"),{name:"BrandBox",data:function(){return{busy:!1,shadow:!1}},props:["brand"],methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainBrand",query:{name:this.brand.name}})}}}),o=a,n=(e("4858"),e("2877")),c=Object(n["a"])(o,s,i,!1,null,"76dd0660",null);r["a"]=c.exports},"857a":function(t,r,e){var s=e("1d80"),i=/"/g;t.exports=function(t,r,e,a){var o=String(s(t)),n="<"+r;return""!==e&&(n+=" "+e+'="'+String(a).replace(i,"&quot;")+'"'),n+">"+o+"</"+r+">"}},9911:function(t,r,e){"use strict";var s=e("23e7"),i=e("857a"),a=e("af03");s({target:"String",proto:!0,forced:a("link")},{link:function(t){return i(this,"a","href",t)}})},"9c03":function(t,r,e){"use strict";e("d3b7");var s=e("be3b"),i={methods:{loader:function(t,r,e){return new Promise((function(i,a){s["a"].get(t,{params:r}).then((function(t){console.log("".concat(e," loaded")),console.log(t),i(t)})).catch((function(t){console.log("".concat(e," loading failed")),console.log(t.response)}))}))}}};r["a"]=i},af03:function(t,r,e){var s=e("d039");t.exports=function(t){return s((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},aff4:function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{staticStyle:{"background-color":"white"},attrs:{fluid:""}},[e("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[t.productLoaded?e("b-container",{staticClass:"mx-auto text-center",staticStyle:{},attrs:{fluid:""}},[e("h1",[e("p",{staticClass:"mt-2 mb-n1"},[t._v(t._s(t.product.name))])]),e("b-form-rating",{attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"lg",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1):t._e(),e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"my-auto",attrs:{cols:"12",md:"4"}},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333","vertical-align":"center"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.product.images,(function(r,s){return e("b-carousel-slide",{key:s,scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300",src:r.link,alt:"Product Images"}})]},proxy:!0}],null,!0)})})),1)],1),t.productLoaded?e("b-col",{staticClass:"d-flex flex-column mx-auto mt-2 mt-md-0",attrs:{cols:"12",md:"8"}},[e("b-table-simple",{attrs:{bordered:"",striped:""}},[e("b-thead",[e("b-tr")],1),e("b-tbody",[e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Specifications")]),e("b-td",t._l(Object.entries(t.product.specifications),(function(r,s){var i=r[0],a=r[1];return e("ul",{key:s},[t._v(t._s(i)+" "),Array.isArray(a)?t._l(a,(function(r,s){return e("b-list-group",{key:s,staticClass:"ml-5"},[e("li",[t._v(t._s(r))])])})):[e("li",{staticClass:"ml-5",staticStyle:{"list-style-type":"circle"}},[t._v(t._s(a))])]],2)})),0)],1),e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Price")]),e("b-td",{staticClass:"ml-5"},[e("span",{staticClass:"ml-5",attrs:{id:"prev-price"}},[e("span",{staticClass:"strike"},[t._v("৳"+t._s(Math.round(t.product.price.sellingPrice/(1-t.product.price.discount/100))))]),e("strong",{attrs:{id:"discount"}},[t._v(" -"+t._s(t.product.price.discount)+"%")])]),e("br"),e("span",{staticClass:"ml-5",attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.price.sellingPrice))])])],1),e("b-tr",[e("b-th",{staticClass:"mx-auto my-auto text-center"},[t._v("Warrenty")]),e("b-td",[e("ul",{staticClass:"ml-3",staticStyle:{"list-style-type":"square"}},[null!=t.product.price.warranty?e("li",[t._v(t._s(t.product.price.warranty)+" days return")]):t._e(),t.product.price.refundable?e("li",[t._v("100% refund")]):t._e()])])],1)],1)],1)],1):t._e()],1),t.productLoaded?e("div",{staticClass:"mx-auto text-center col-md-4"},[e("div",[e("b-button",{staticStyle:{border:"0"},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.productID,"aria-expanded":t.show,squared:""},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")]),e("b-button",{staticStyle:{border:"0"},attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.productID,"aria-expanded":"",squared:""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")]),e("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.productID,"aria-label":"Sidebar with custom footer",shadow:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{},[t._v("There are some options."),e("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"mx-auto text-center"},[e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),e("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}],null,!1,3668326243),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[e("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),e("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}],null,!1,1416755868)},[t.productLoaded?e("div",{staticClass:"mx-auto d-flex flex-column"},[e("b-list-group",[t._l(t.product.specifications,(function(r,s,i){return e("span",{key:i},[Array.isArray(r)?e("b-list-group-item",[e("b-form-group",{attrs:{label:s}},[e("b-form-select",{staticStyle:{width:"80%"},attrs:{options:r,"value-field":s},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[s],callback:function(r){t.$set(t.selector,s,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),e("b-list-group-item",[e("label",{attrs:{for:"sb-inline"+t.product.productID}},[t._v("Quantity")]),e("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.productID,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)]):t._e(),e("hr"),t.productLoaded?e("div",[e("h4",[t._v("Ratings and Reviews")]),e("b-row",[e("b-col",{staticClass:"my-auto",attrs:{cols:"12",md:"4"}},[e("b-container",{staticClass:"mx-auto text-center",attrs:{fluid:""}},[e("h1",{staticClass:"mx-auto mb-n1 text-center"},[t._v(t._s(t.product.rating)),e("small",{staticStyle:{"font-size":"15px"}},[t._v("/5")])]),e("b-form-rating",{staticClass:"mx-auto text-center",attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"lg",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1)],1),e("b-col",t._l(5,(function(r){return e("div",{key:r,staticClass:"d-flex d-inline"},[e("b-form-rating",{staticClass:"my-auto",attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",value:6-r,precision:"1"}}),e("b-progress",{staticClass:"w-25 my-auto",attrs:{max:t.reviews.length,value:t.stat[6-r-1],height:"",variant:"warning"}}),e("small",{staticClass:"ml-1 my-auto"},[t._v(t._s(t.stat[6-r-1]))])],1)})),0)],1),e("hr",{staticClass:"d-lg-none"}),t._l(t.reviews,(function(r,s){return e("b-container",{key:s,staticClass:"mb-2 shadow-sm",attrs:{fluid:""}},[e("b-row",{staticClass:"mr-auto"},[e("b-form-rating",{attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",value:r.rating,precision:"1"}})],1),e("b-row",{staticClass:"mr-auto ml-1"},[e("small",[t._v("by "+t._s(r.name))])]),e("b-row",{staticClass:"mr-auto ml-1"},[e("small",{staticClass:"text-italic"},[t._v(t._s(t.convertToDate(r.date._seconds)))])]),e("b-row",{staticClass:"mt-2 mr-auto ml-1"},[e("p",[t._v(t._s(r.review))])])],1)}))],2):t._e(),t.productLoaded?e("div",{staticClass:"mx-auto bd-highlights text-center"},[e("h3",[t._v("Related Products")])]):t._e()],1)],1),e("ProductScrollSection",{attrs:{products:t.relatedProducts}}),t.productLoaded?e("div",{staticClass:"mx-auto bd-highlights text-center"},[e("h3",[t._v("Related Brands")]),e("b-row",{staticClass:"my-4",attrs:{"cols-lg":"5"}},t._l(t.relatedBrands,(function(t,r){return e("b-col",{key:r,staticClass:"p-3 mx-3"},[e("brand-box",{attrs:{brand:t}})],1)})),1)],1):t._e()],1)},i=[],a=(e("99af"),e("b0c0"),e("5530")),o=e("5b9f"),n=e("793e"),c=e("2f62"),l=e("be3b"),d=e("9c03"),u={name:"CertainProduct",data:function(){return{sliding:null,product:{},productLoaded:!1,relatedProducts:[],selector:{},show:!1,cartButtonPressed:null,quantity:1,relatedBrands:[],reviews:[],stat:[0,0,0,0,0]}},computed:Object(a["a"])(Object(a["a"])({},Object(c["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&null===this.selector[t])return!1;return!0}}),components:{ProductScrollSection:o["a"],BrandBox:n["a"]},mixins:[d["a"]],methods:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["addToCart"])),{},{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},showPrev:function(){0===this.i&&(this.i=this.totalimage),this.i=(this.i-1)%this.totalimage},showNext:function(){this.i=(this.i+1)%this.totalimage},loadProduct:function(t){var r=this;this.loader("/product",{productID:t},"product-".concat(t)).then((function(t){r.product=t.data,r.product.specifications=r.product.extra,delete r.product.extra,r.productLoaded=!0,r.loadReviews(),r.loadRelatedProducts(),r.loadRelatedBrands(),r.loadSelector()}))},loadReviews:function(){var t=this,r=this.product.productID;this.loader("/product/reviews",{productID:r},"reviews of product-".concat(r)).then((function(r){t.reviews=r.data,t.calculateStats()}))},convertToDate:function(t){var r=t,e=1e3*r,s=new Date(e),i=s.toLocaleString();return i},calculateStats:function(){for(var t=0;t<this.reviews.length;t++)this.stat[this.reviews[t].rating-1]++},loadRelatedProducts:function(){var t=this;l["a"].post("/search",{productIds:this.product.relatedProductIDs}).then((function(r){console.log("products related to ".concat(t.product.productID," loaded")),console.log(r),t.relatedProducts=r.data.products})).catch((function(r){console.log("products related to ".concat(t.product.productID," failed loading")),console.log(r.response)}))},loadRelatedBrands:function(){var t=this,r=this.product.category,e=this.relatedBrands.length,s=5;this.loader("/category/brands",{"cat-name":r,offset:e,limit:s},"brands of ".concat(r," for product-").concat(this.product.productID)).then((function(r){t.relatedBrands=r.data}))},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.product.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.product.price.sellingPrice;return{products:[{id:this.product.productID,name:this.product.name,specifications:this.selector,quantity:this.quantity,image:this.product.images[0],curPrice:t,discount:this.product.price.discount,vat:this.product.price.vat}],subTotal:t*(1+this.product.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.product.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.price.sellingPrice,discount:this.product.price.discount,image:this.product.images[0],name:this.product.name,vat:this.product.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null)}}),watch:{$route:function(t,r){this.loadProduct(t.params.id)}},created:function(){this.loadProduct(this.$route.params.id)}},p=u,h=(e("74b5"),e("2877")),f=Object(h["a"])(p,s,i,!1,null,null,null);r["default"]=f.exports},d47b:function(t,r,e){},eac8:function(t,r,e){}}]);
//# sourceMappingURL=CertainProduct.c5bede91.js.map