(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Brand"],{"01b8":function(t,r,n){},"03fd":function(t,r,n){},"0dd0":function(t,r,n){},"3f5c":function(t,r,n){"use strict";var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[n("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[n("b-card",{on:{click:t.clicking}},[n("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:t.isArrival?"90px":"180px",top:""}}),n("b-card-text",{},[n("div",{staticClass:"mx-auto text-center text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),t.isArrival?t._e():n("b-form-rating",{staticClass:"mx-auto text-center mt-n5",staticStyle:{transform:"scale(0.8, 0.8)"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}}),t.isArrival?t._e():n("div",{staticClass:"mx-auto text-center mt-n1"},[t.product.discount>0?n("span",[n("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),n("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),n("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1),t.isArrival?t._e():n("b-button",{staticClass:"mx-auto my-auto text-center",style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")])],1),n("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{},[t._v("There are some options."),n("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"mx-auto text-center"},[n("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),n("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[n("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center"},[n("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),n("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?n("div",{staticClass:"mx-auto d-flex flex-column text-center"},[n("b-list-group",[t._l(t.selector,(function(r,a,e){return n("span",{key:e},[n("b-list-group-item",[n("b-form-group",{attrs:{label:a}},[n("b-form-select",{staticStyle:{width:"80%"},attrs:{options:t.productFull.extra[a],"value-field":a},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[a],callback:function(r){t.$set(t.selector,a,r)},expression:"selector[key]"}})],1)],1)],1)})),n("b-list-group-item",[n("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),n("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},e=[],s=(n("b0c0"),n("9911"),n("5530")),o=n("2f62"),i=n("9c03"),c={props:{product:{},isArrival:{default:!1}},data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[i["a"]],methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){this.selector={};var t=this.productFull.extra;for(var r in t)t.hasOwnProperty(r)&&Array.isArray(t[r])&&t[r].length>1&&this.$set(this.selector,r,null)},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.quantity=1,this.selector)this.selector.hasOwnProperty(t)&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},d=c,u=(n("ba76"),n("2877")),l=Object(u["a"])(d,a,e,!1,null,"5d4cbc4e",null);r["a"]=l.exports},4858:function(t,r,n){"use strict";var a=n("d47b"),e=n.n(a);e.a},"5b9f":function(t,r,n){"use strict";var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{attrs:{fluid:!0}},[n("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top","cols-lg":"5"}},t._l(t.products,(function(t,r){return n("b-col",{key:r,staticClass:"productClass col-md-3 col-sm-4 col-6"},[n("product-box",{attrs:{product:t}})],1)})),1)],1)},e=[],s=n("3f5c"),o={name:"ProductScrollSection",props:["products"],components:{ProductBox:s["a"]}},i=o,c=(n("b0ff"),n("2877")),d=Object(c["a"])(i,a,e,!1,null,"260924da",null);r["a"]=d.exports},"793e":function(t,r,n){"use strict";var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[n("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{click:t.clicking,mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[n("b-card",{attrs:{"img-src":t.brand.image.link,"img-width":"250px","img-height":"200px","img-alt":t.brand.name,"img-top":""}},[n("b-card-text",{staticClass:"text-center",staticStyle:{padding:"0 5%"}},[n("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.brand.name)+" ")]),n("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)])},e=[],s=(n("b0c0"),{name:"BrandBox",data:function(){return{busy:!1,shadow:!1}},props:["brand"],methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainBrand",query:{name:this.brand.name}})}}}),o=s,i=(n("4858"),n("2877")),c=Object(i["a"])(o,a,e,!1,null,"76dd0660",null);r["a"]=c.exports},"7a81":function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{attrs:{fluid:!0}},[n("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[n("b-carousel",{staticClass:"mb-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.brand.images,(function(r,a){return n("b-carousel-slide",{key:a,scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:r.link}})]},proxy:!0}],null,!0)})})),1),n("b-row",[n("h1",{staticClass:"mx-auto text-center"},[t._v(t._s(this.$route.query.name))])]),n("hr"),n("b-row",t._l(t.products,(function(t){return n("b-col",{key:t.id,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[n("product-box",{attrs:{product:t}})],1)})),1),n("hr"),t.productLoaded?n("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():n("b-button",{attrs:{disabled:t.busy,variant:"success"},on:{click:function(r){return t.loadProducts(t.brand.name)}}},[t._v(" Load More Products ")])],1)],1):t._e()],1)],1)},e=[],s=(n("99af"),n("b0c0"),n("3f5c")),o=n("9c03"),i={name:"CertainBrand",title:function(){return this.$route.query.name},data:function(){return{brand:{},products:[],productLoadingDone:!0,sliding:null,busy:!1,productLoaded:!1}},components:{ProductBox:s["a"]},mixins:[o["a"]],methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadBrand:function(t){var r=this;this.loader("/brand",{name:t},"brand ".concat(t)).then((function(t){r.brand=t.data}))},loadProducts:function(t){var r=this;this.productLoadingDone||(this.busy=!0);var n=this.products.length,a="6";this.loader("/products/brand",{name:t,offset:n,limit:a},"products of ".concat(t)).then((function(t){r.busy=!1,r.productLoaded=!0,r.products=r.products.concat(t.data.products),r.productLoadingDone=t.data.products.length<a}))},clearProducts:function(){this.products=[],this.productLoadingDone=!1},loadAll:function(t){this.loadBrand(t),this.clearProducts(),this.loadProducts(t)}},watch:{$route:function(t,r){this.loadAll(t.query.name)}},created:function(){this.loadAll(this.$route.query.name)}},c=i,d=(n("f62c"),n("2877")),u=Object(d["a"])(c,a,e,!1,null,"221b00ca",null);r["default"]=u.exports},"7cab":function(t,r,n){"use strict";var a=n("0dd0"),e=n.n(a);e.a},"857a":function(t,r,n){var a=n("1d80"),e=/"/g;t.exports=function(t,r,n,s){var o=String(a(t)),i="<"+r;return""!==n&&(i+=" "+n+'="'+String(s).replace(e,"&quot;")+'"'),i+">"+o+"</"+r+">"}},9911:function(t,r,n){"use strict";var a=n("23e7"),e=n("857a"),s=n("af03");a({target:"String",proto:!0,forced:s("link")},{link:function(t){return e(this,"a","href",t)}})},"9c03":function(t,r,n){"use strict";n("d3b7");var a=n("be3b"),e={methods:{loader:function(t,r,n){return new Promise((function(e,s){a["a"].get(t,{params:r}).then((function(t){console.log("".concat(n," loaded")),console.log(t),e(t)})).catch((function(t){console.log("".concat(n," loading failed")),console.log(t.response)}))}))}}};r["a"]=e},af03:function(t,r,n){var a=n("d039");t.exports=function(t){return a((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},b0ff:function(t,r,n){"use strict";var a=n("03fd"),e=n.n(a);e.a},b20a:function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-container",{staticClass:"main",attrs:{fluid:!0}},[n("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[n("b-row",t._l(t.brands,(function(t){return n("b-col",{key:t.name,staticClass:"mt-3 mb-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[n("brand-box",{attrs:{brand:t}})],1)})),1),n("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.brandLoadingDone?t._e():n("b-button",{staticClass:"my-3",attrs:{variant:"success",disabled:t.busy},on:{click:t.loadBrands}},[t._v(" Load More ")])],1)],1)],1),n("hr")],1)},e=[],s=(n("99af"),n("793e")),o=n("9c03"),i={name:"AllBrands",title:"Brands",data:function(){return{brands:[],brandLoadingDone:!0,busy:!1,productLoaded:!1}},components:{BrandBox:s["a"]},mixins:[o["a"]],methods:{loadBrands:function(){var t=this;this.brandLoadingDone||(this.busy=!0);var r=this.brands.length,n="6";this.loader("/brands/all",{offset:r,limit:n},"brands").then((function(r){t.productLoaded=!0,t.busy=!1,t.brands=t.brands.concat(r.data.brands),t.brandLoadingDone=r.data.brands.length<n}))}},created:function(){this.loadBrands()}},c=i,d=(n("7cab"),n("2877")),u=Object(d["a"])(c,a,e,!1,null,"1b9cbc03",null);r["default"]=u.exports},ba76:function(t,r,n){"use strict";var a=n("01b8"),e=n.n(a);e.a},d47b:function(t,r,n){},d84a:function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("b-carousel",{staticClass:"mb-4 mt-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(r,a){return n("b-carousel-slide",{key:a,scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:r.link}})]},proxy:!0}],null,!0)})})),1),n("b-container",[n("div",{staticClass:"mx-auto text-center mt-2"},[n("h1",[t._v("Popular Brands")])]),n("b-row",{attrs:{"cols-lg":"3","cols-md":"2"}},t._l(t.brands,(function(r,a){return n("b-col",{key:a,attrs:{cols:"12",md:"6"}},[n("b-card",{attrs:{"header-tag":"header"},scopedSlots:t._u([{key:"header",fn:function(){return[n("h4",{staticClass:"text-center"},[t._v(t._s(r.name))]),n("div",{staticClass:"mx-auto text-center"},[n("b-form-rating",{staticStyle:{"background-color":"#f0f0f0"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:r.rating,callback:function(n){t.$set(r,"rating",n)},expression:"brand.rating"}})],1)]},proxy:!0}],null,!0)},[n("b-card-text",[n("b-row",{staticClass:"no-gutters",attrs:{cols:"3"}},t._l(r.products,(function(r,a){return n("b-col",{key:a},[n("div",{staticClass:"border border-white",staticStyle:{"background-color":"#f0f0f0"},on:{click:function(n){return t.$router.push({name:"CertainProduct",params:{id:r.id}})}}},[n("b-img",{attrs:{src:r.image.link,center:"",height:"100%",width:"100%"}}),n("div",{staticClass:"mx-auto text-center text-truncate",staticStyle:{"background-color":"#f0f0f0"}},[t._v(" "+t._s(r.name)+" ")])],1)])})),1)],1)],1)],1)})),1),n("hr"),n("div",{staticStyle:{border:"0px solid black","background-color":"white"}},[n("div",{staticClass:"mx-auto text-center"},[n("h1",[t._v("Products")])]),n("product-scroll-section",{attrs:{products:t.relatedProducts}})],1),n("div",{staticClass:"mx-auto text-center"},[n("h1",[t._v("Brands")])]),n("b-row",t._l(t.brands,(function(t,r){return n("b-col",{key:r,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[n("brand-box",{attrs:{brand:t}})],1)})),1),n("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[n("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():n("b-button",{attrs:{variant:"success",disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1),n("hr")],1)],1)},e=[],s=(n("99af"),n("4de4"),n("d81d"),n("fb6a"),n("9c03")),o=n("793e"),i=n("5b9f"),c={name:"PopularBrands",title:"Popular Brands",data:function(){return{brands:[],productLoadingDone:!0,busy:!1}},computed:{relatedProducts:function(){var t=10;return this.brands.filter((function(t){return t.products&&t.products.length})).map((function(t){return t.products[t.products.length-1]})).slice(0,t)},images:function(){var t=6;return this.brands.filter((function(t){return t.images&&t.images.length})).map((function(t){return t.images[0]})).slice(0,t)}},components:{BrandBox:o["a"],ProductScrollSection:i["a"]},mixins:[s["a"]],methods:{loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var r=this.brands.length,n="6";this.loader("/top-brands",{offset:r,limit:n},"top-brands").then((function(r){t.brands=t.brands.concat(r.data.brands),t.busy=!1,t.productLoadingDone=r.data.brands.length<n}))},onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},created:function(){this.loadMore()}},d=c,u=n("2877"),l=Object(u["a"])(d,a,e,!1,null,"02a9c5c0",null);r["default"]=l.exports},eb83:function(t,r,n){},f62c:function(t,r,n){"use strict";var a=n("eb83"),e=n.n(a);e.a}}]);
//# sourceMappingURL=Brand.01bfbff8.js.map