(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Brand"],{1187:function(t,r,n){"use strict";var i=n("3e92"),a=n.n(i);a.a},"3e92":function(t,r,n){},"3f5c":function(t,r,n){"use strict";var i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[n("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[n("div",{on:{click:t.clicking}},[n("b-card",{staticStyle:{"border-radius":"0"}},[n("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:t.isArrival?"100px":"200px",top:""}}),n("b-card-text",{staticStyle:{padding:"0 5%"}},[n("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),t.isArrival?t._e():n("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}}),t.isArrival?t._e():n("div",[t.product.discount>0?n("span",[n("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),n("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),n("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1)]),t.isArrival?t._e():n("b-button",{staticClass:"mx-auto my-auto text-center",style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show,squared:""},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")])],1),n("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{},[t._v("There are some options."),n("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"mx-auto text-center"},[n("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),n("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[n("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center"},[n("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),n("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?n("div",{staticClass:"mx-auto d-flex flex-column text-center"},[n("b-list-group",[t._l(t.productFull.specifications,(function(r,i,a){return n("span",{key:a},[Array.isArray(r)?n("b-list-group-item",[n("b-form-group",{attrs:{label:i}},[n("b-form-select",{staticStyle:{width:"80%"},attrs:{options:r,"value-field":i},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[i],callback:function(r){t.$set(t.selector,i,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),n("b-list-group-item",[n("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),n("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},a=[],e=(n("b0c0"),n("9911"),n("5530")),o=n("2f62"),s=n("9c03"),c={props:{product:{},isArrival:{default:!1}},data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(e["a"])(Object(e["a"])({},Object(o["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[s["a"]],methods:Object(e["a"])(Object(e["a"])({},Object(o["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},d=c,u=(n("1187"),n("2877")),l=Object(u["a"])(d,i,a,!1,null,"2b7c977a",null);r["a"]=l.exports},4858:function(t,r,n){"use strict";var i=n("d47b"),a=n.n(i);a.a},"6b74":function(t,r,n){},"793e":function(t,r,n){"use strict";var i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[n("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{click:t.clicking,mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[n("b-card",{attrs:{"img-src":t.brand.image.link,"img-width":"250px","img-height":"200px","img-alt":t.brand.name,"img-top":""}},[n("b-card-text",{staticClass:"text-center",staticStyle:{padding:"0 5%"}},[n("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.brand.name)+" ")]),n("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)])},a=[],e=(n("b0c0"),{name:"BrandBox",data:function(){return{busy:!1,shadow:!1}},props:["brand"],methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainBrand",query:{name:this.brand.name}})}}}),o=e,s=(n("4858"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,"76dd0660",null);r["a"]=c.exports},"7a81":function(t,r,n){"use strict";n.r(r);var i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{attrs:{fluid:!0}},[n("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[n("b-carousel",{staticClass:"mb-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.brand.images,(function(r,i){return n("b-carousel-slide",{key:i,scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:r.link}})]},proxy:!0}],null,!0)})})),1),n("b-row",t._l(t.products,(function(t){return n("b-col",{key:t.id,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[n("product-box",{attrs:{product:t}})],1)})),1),n("hr"),t.productLoaded?n("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():n("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:function(r){return t.loadProducts(t.brand.name)}}},[t._v(" Load More Products ")])],1)],1):t._e()],1)],1)},a=[],e=(n("99af"),n("b0c0"),n("3f5c")),o=n("9c03"),s={name:"CertainBrand",data:function(){return{brand:{},products:[],productLoadingDone:!0,sliding:null,busy:!1,productLoaded:!1}},components:{ProductBox:e["a"]},mixins:[o["a"]],methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadBrand:function(t){var r=this;this.loader("/brand",{name:t},"brand ".concat(t)).then((function(t){r.brand=t.data,console.log("done"+t.data)}))},loadProducts:function(t){var r=this;this.productLoadingDone||(this.busy=!0);var n=this.products.length,i="5";this.loader("/products/brand",{name:t,offset:n,limit:i},"products of ".concat(t)).then((function(t){r.busy=!1,r.productLoaded=!0,r.products=r.products.concat(t.data.products),t.data.products.length<i?r.productLoadingDone=!0:r.productLoadingDone=!1}))},clearProducts:function(){this.products=[],this.productLoadingDone=!1},loadAll:function(t){this.loadBrand(t),this.clearProducts(),this.loadProducts(t)}},watch:{$route:function(t,r){this.loadAll(t.query.name)}},created:function(){this.loadAll(this.$route.query.name)}},c=s,d=(n("f9ad"),n("2877")),u=Object(d["a"])(c,i,a,!1,null,"bea971f6",null);r["default"]=u.exports},"857a":function(t,r,n){var i=n("1d80"),a=/"/g;t.exports=function(t,r,n,e){var o=String(i(t)),s="<"+r;return""!==n&&(s+=" "+n+'="'+String(e).replace(a,"&quot;")+'"'),s+">"+o+"</"+r+">"}},9911:function(t,r,n){"use strict";var i=n("23e7"),a=n("857a"),e=n("af03");i({target:"String",proto:!0,forced:e("link")},{link:function(t){return a(this,"a","href",t)}})},"9c03":function(t,r,n){"use strict";n("d3b7");var i=n("be3b"),a={methods:{loader:function(t,r,n){return new Promise((function(a,e){i["a"].get(t,{params:r}).then((function(t){console.log("".concat(n," loaded")),console.log(t),a(t)})).catch((function(t){console.log("".concat(n," loading failed")),console.log(t.response)}))}))}}};r["a"]=a},"9c5c":function(t,r,n){},abec:function(t,r,n){"use strict";var i=n("6b74"),a=n.n(i);a.a},af03:function(t,r,n){var i=n("d039");t.exports=function(t){return i((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},b20a:function(t,r,n){"use strict";n.r(r);var i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{staticClass:"main",attrs:{fluid:!0}},[n("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[n("b-row",t._l(t.brands,(function(t){return n("b-col",{key:t.name,staticClass:"mt-3 mb-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[n("brand-box",{attrs:{brand:t}})],1)})),1),n("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.brandLoadingDone?t._e():n("b-button",{staticClass:"my-3",attrs:{variant:"success",disabled:t.busy},on:{click:t.loadBrands}},[t._v(" Load More ")])],1)],1)],1)],1)},a=[],e=(n("99af"),n("793e")),o=n("9c03"),s={name:"AllBrands",data:function(){return{brands:[],brandLoadingDone:!0,busy:!1,productLoaded:!1}},components:{BrandBox:e["a"]},mixins:[o["a"]],methods:{loadBrands:function(){var t=this;this.brandLoadingDone||(this.busy=!0);var r=this.brands.length,n="5";this.loader("/brands/all",{offset:r,limit:n},"brands").then((function(r){t.productLoaded=!0,t.busy=!1,t.brands=t.brands.concat(r.data.brands),r.data.brands.length<n?t.brandLoadingDone=!0:t.brandLoadingDone=!1}))}},created:function(){this.loadBrands()}},c=s,d=(n("abec"),n("2877")),u=Object(d["a"])(c,i,a,!1,null,"615c2c55",null);r["default"]=u.exports},d47b:function(t,r,n){},f9ad:function(t,r,n){"use strict";var i=n("9c5c"),a=n.n(i);a.a}}]);
//# sourceMappingURL=Brand.087cd968.js.map