(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CertainProduct"],{"03fd":function(t,r,s){},"0a83":function(t,r,s){"use strict";var e=s("9940"),i=s.n(e);i.a},"3f5c":function(t,r,s){"use strict";var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[s("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[s("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[s("b-card",{on:{click:t.clicking}},[s("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:t.isArrival?"90px":"180px",top:""}}),s("b-card-text",{},[s("div",{staticClass:"mx-auto text-center text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),t.isArrival?t._e():s("b-form-rating",{staticClass:"mx-auto text-center mt-n5",staticStyle:{transform:"scale(0.8, 0.8)"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}}),t.isArrival?t._e():s("div",{staticClass:"mx-auto text-center mt-n1"},[t.product.discount>0?s("span",[s("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),s("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),s("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1),t.isArrival?t._e():s("b-button",{staticClass:"mx-auto my-auto text-center",style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")])],1),s("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[s("span",{},[t._v("There are some options."),s("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"mx-auto text-center"},[s("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),s("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[s("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[s("div",{staticClass:"text-center"},[s("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),s("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?s("div",{staticClass:"mx-auto d-flex flex-column text-center"},[s("b-list-group",[t._l(t.productFull.specifications,(function(r,e,i){return s("span",{key:i},[Array.isArray(r)&&r.length>1?s("b-list-group-item",[s("b-form-group",{attrs:{label:e}},[s("b-form-select",{staticStyle:{width:"80%"},attrs:{options:r,"value-field":e},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[e],callback:function(r){t.$set(t.selector,e,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),s("b-list-group-item",[s("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),s("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},i=[],o=(s("b0c0"),s("9911"),s("5530")),a=s("2f62"),c=s("9c03"),n={props:{product:{},isArrival:{default:!1}},data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(o["a"])(Object(o["a"])({},Object(a["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.productFull.specifications[t].length>1&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[c["a"]],methods:Object(o["a"])(Object(o["a"])({},Object(a["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var r=this.product.id;this.loader("/product",{productID:r},"specs of product-".concat(r)).then((function(r){t.productFull=r.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.productFull.specifications[t].length>1&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.productFull.specifications[t].length>1&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},l=n,d=(s("0a83"),s("2877")),u=Object(d["a"])(l,e,i,!1,null,"092d199a",null);r["a"]=u.exports},4858:function(t,r,s){"use strict";var e=s("d47b"),i=s.n(e);i.a},"5b9f":function(t,r,s){"use strict";var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-container",{attrs:{fluid:!0}},[s("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top","cols-lg":"5"}},t._l(t.products,(function(t,r){return s("b-col",{key:r,staticClass:"productClass col-md-3 col-sm-4 col-6"},[s("product-box",{attrs:{product:t}})],1)})),1)],1)},i=[],o=s("3f5c"),a={name:"ProductScrollSection",props:["products"],components:{ProductBox:o["a"]}},c=a,n=(s("b0ff"),s("2877")),l=Object(n["a"])(c,e,i,!1,null,"260924da",null);r["a"]=l.exports},"74b5":function(t,r,s){"use strict";var e=s("eac8"),i=s.n(e);i.a},"793e":function(t,r,s){"use strict";var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[s("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{click:t.clicking,mouseenter:function(r){t.shadow=!0},mouseleave:function(r){t.shadow=!1}}},[s("b-card",{attrs:{"img-src":t.brand.image.link,"img-width":"250px","img-height":"200px","img-alt":t.brand.name,"img-top":""}},[s("b-card-text",{staticClass:"text-center",staticStyle:{padding:"0 5%"}},[s("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.brand.name)+" ")]),s("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)])},i=[],o=(s("b0c0"),{name:"BrandBox",data:function(){return{busy:!1,shadow:!1}},props:["brand"],methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainBrand",query:{name:this.brand.name}})}}}),a=o,c=(s("4858"),s("2877")),n=Object(c["a"])(a,e,i,!1,null,"76dd0660",null);r["a"]=n.exports},"857a":function(t,r,s){var e=s("1d80"),i=/"/g;t.exports=function(t,r,s,o){var a=String(e(t)),c="<"+r;return""!==s&&(c+=" "+s+'="'+String(o).replace(i,"&quot;")+'"'),c+">"+a+"</"+r+">"}},9911:function(t,r,s){"use strict";var e=s("23e7"),i=s("857a"),o=s("af03");e({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},9940:function(t,r,s){},"9c03":function(t,r,s){"use strict";s("d3b7");var e=s("be3b"),i={methods:{loader:function(t,r,s){return new Promise((function(i,o){e["a"].get(t,{params:r}).then((function(t){console.log("".concat(s," loaded")),console.log(t),i(t)})).catch((function(t){console.log("".concat(s," loading failed")),console.log(t.response)}))}))}}};r["a"]=i},af03:function(t,r,s){var e=s("d039");t.exports=function(t){return e((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},aff4:function(t,r,s){"use strict";s.r(r);var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-container",{staticStyle:{"background-color":"white"},attrs:{fluid:""}},[s("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.productLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[s("b-container",[s("b-row",[s("b-col",{staticClass:"my-auto",attrs:{cols:"12",md:"4"}},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333","vertical-align":"center"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.product.images,(function(r,e){return s("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[s("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300",src:r.link,alt:"Product Images"}})]},proxy:!0}],null,!0)})})),1)],1),t.productLoaded?s("b-col",{staticClass:"d-flex flex-column mt-2 mt-md-0",attrs:{cols:"12",md:"5"}},[s("b-container",{staticStyle:{},attrs:{fluid:""}},[s("h3",[s("p",{staticClass:"mt-2 mb-n1"},[t._v(t._s(t.product.name))])]),s("b-form-rating",{staticClass:"mr-auto",staticStyle:{transform:"scale(0.8,0.8)"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",precision:"2"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}}),s("hr"),s("div",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.price.sellingPrice))]),s("div",{attrs:{id:"prev-price"}},[s("span",{staticClass:"strike"},[t._v("৳"+t._s(Math.round(t.product.price.sellingPrice/(1-t.product.price.discount/100))))]),s("strong",{attrs:{id:"discount"}},[t._v(" -"+t._s(t.product.price.discount)+"%")])]),s("hr"),t._l(Object.entries(t.product.specifications),(function(r,e){var i=r[0],o=r[1];return s("b-row",{key:e},[Array.isArray(o)&&o.length>1?[s("b-col",{staticClass:"mb-5",attrs:{cols:"3"}},[t._v(t._s(i))]),s("b-col",t._l(o,(function(r,e){return s("b-button",{key:e,staticClass:"mr-2",attrs:{disabled:"",variant:"outline-secondary"}},[t._v(t._s(r))])})),1)]:t._e()],2)})),s("b-row",[s("b-col",{staticClass:"mb-5",attrs:{cols:"3"}},[t._v("Color")]),s("b-col",t._l(t.colors,(function(r,e){return s("b-button",{key:e,staticClass:"mr-2",attrs:{disabled:"",variant:"outline-secondary"}},[t._v(" "+t._s(r)+" ")])})),1)],1)],2)],1):t._e(),t.productLoaded?s("b-col",[s("b-row",{staticClass:"text-secondary"},[s("div",{staticStyle:{"font-size":"20px"}},[t._v("Delivery Options")])]),s("b-row",[s("b-col",{attrs:{cols:"1"}},[s("b-icon",{attrs:{icon:"geo-alt"}})],1),s("b-col",{staticClass:"my-auto"},[s("div",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.address))])])],1),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"1"}},[s("b-icon",{attrs:{icon:"house-door"}})],1),s("b-col",{staticClass:"my-auto",attrs:{cols:"8"}},[s("div",{staticStyle:{"font-size":"15px"}},[t._v("Home Delivery")])]),s("b-col",{staticClass:"my-auto"},[t._v(" ৳"+t._s(t.deliveryFee))])],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{cols:"1"}},[s("b-icon",{attrs:{icon:"cash",variant:"success"}})],1),s("b-col",{staticClass:"my-auto"},[s("div",{staticStyle:{"font-size":"15px"}},[t._v("Cash On Delivery Available")])])],1),s("hr"),s("b-row",{staticClass:"text-secondary"},[s("div",{staticStyle:{"font-size":"20px"}},[t._v("Return and warranty")])]),s("b-row",[s("b-col",{attrs:{cols:"1"}},[s("b-icon",{attrs:{icon:"geo-alt"}})],1),s("b-col",{staticClass:"my-auto"},[s("div",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.product.price.warranty)+" days return")])])],1),s("b-row",[s("b-col",{attrs:{cols:"1"}},[t.product.price.refundable?s("b-iconstack",[s("b-icon",{attrs:{icon:"shield",variant:"success"}}),s("b-icon",{attrs:{icon:"check",variant:"success"}})],1):s("b-icon",{attrs:{icon:"shield-slash",variant:"danger"}})],1),s("b-col",[t.product.price.refundable?s("div",{staticStyle:{"font-size":"15px","padding-top":"4px"}},[t._v("100% refund")]):s("div",{staticStyle:{"font-size":"15px"}},[t._v("Warranty not available")])])],1),s("hr")],1):t._e()],1),t.productLoaded?s("div",{staticClass:"mx-auto text-center col-md-4"},[s("div",[s("b-button",{staticStyle:{border:"0"},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.productID,"aria-expanded":t.show,squared:""},on:{click:function(r){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")]),s("b-button",{staticStyle:{border:"0"},attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.product.productID,"aria-expanded":"",squared:""},on:{click:function(r){return t.initialHandler(!1)}}},[t._v(" Buy Now ")]),s("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.productID,"aria-label":"Sidebar with custom footer",shadow:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[s("span",{},[t._v("There are some options."),s("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"mx-auto text-center"},[s("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),s("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}],null,!1,3668326243),model:{value:t.show,callback:function(r){t.show=r},expression:"show"}},[s("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[s("div",{staticClass:"text-center"},[s("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),s("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}],null,!1,1416755868)},[t.productLoaded?s("div",{staticClass:"mx-auto d-flex flex-column"},[s("b-list-group",[t._l(t.product.specifications,(function(r,e,i){return s("span",{key:i},[Array.isArray(r)&&r.length>1?s("b-list-group-item",[s("b-form-group",{attrs:{label:e}},[s("b-form-select",{staticStyle:{width:"80%"},attrs:{options:r,"value-field":e},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[e],callback:function(r){t.$set(t.selector,e,r)},expression:"selector[key]"}})],1)],1):t._e()],1)})),s("b-list-group-item",[s("label",{attrs:{for:"sb-inline"+t.product.productID}},[t._v("Quantity")]),s("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.productID,inline:""},model:{value:t.quantity,callback:function(r){t.quantity=r},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)]):t._e(),s("hr"),t.productLoaded?s("div",[s("h4",[t._v("Specifications")]),s("ul",[t._l(Object.entries(t.product.specifications),(function(r,e){var i=r[0],o=r[1];return s("span",{key:e},[Array.isArray(o)&&o.length>1||"Description"===i?t._e():[s("li",[t._v(t._s(i)+":"+t._s(Array.isArray(o)?o[0]:o))])]],2)})),s("li",[t._v("BrandName: "+t._s(t.product.brandName))])],2),s("hr"),s("div",[s("h4",[t._v("Overview")]),t._v(" "+t._s(t.product.specifications.Description)+" ")])]):t._e(),s("hr"),t.productLoaded&&t.product.rating?s("div",[s("h4",[t._v("Ratings and Reviews")]),s("b-row",[s("b-col",{staticClass:"my-auto",attrs:{cols:"12",md:"4"}},[s("b-container",{staticClass:"mx-auto text-center",attrs:{fluid:""}},[s("h1",{staticClass:"mx-auto mb-n1 text-center"},[t._v(t._s(t.product.rating.toFixed(2))),s("small",{staticStyle:{"font-size":"15px"}},[t._v("/5")])]),s("b-form-rating",{staticClass:"mx-auto text-center",attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"lg",precision:"2"},model:{value:t.product.rating,callback:function(r){t.$set(t.product,"rating",r)},expression:"product.rating"}})],1)],1),s("b-col",t._l(5,(function(r){return s("div",{key:r,staticClass:"d-flex d-inline"},[s("b-form-rating",{staticClass:"my-auto",attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",value:6-r,precision:"1"}}),s("b-progress",{staticClass:"w-25 my-auto",attrs:{max:t.reviews.length,value:t.stat[6-r-1],height:"",variant:"warning"}}),s("small",{staticClass:"ml-1 my-auto"},[t._v(t._s(t.stat[6-r-1]))])],1)})),0)],1),s("hr",{staticClass:"d-lg-none"}),t._l(t.reviews,(function(r,e){return s("b-container",{key:e,staticClass:"mb-2 shadow-sm",attrs:{fluid:""}},[s("b-row",{staticClass:"mr-auto"},[s("b-form-rating",{attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",value:r.rating,precision:"1"}})],1),s("b-row",{staticClass:"mr-auto ml-1"},[s("small",[t._v("by "+t._s(r.name))])]),s("b-row",{staticClass:"mr-auto ml-1"},[s("small",{staticClass:"text-italic"},[t._v(t._s(t.convertToDate(r.date._seconds)))])]),s("b-row",{staticClass:"mt-2 mr-auto ml-1"},[s("p",[t._v(t._s(r.review))])])],1)}))],2):t._e(),t.productLoaded&&t.relatedProducts.length?s("div",{staticClass:"mx-auto bd-highlights text-center"},[s("h3",[t._v("Related Products")])]):t._e()],1)],1),s("b-container",[s("ProductScrollSection",{attrs:{products:t.relatedProducts}})],1),t.productLoaded&&t.relatedBrands.length?s("b-container",{staticClass:"mx-auto bd-highlights text-center"},[s("h3",[t._v("Related Brands")]),s("b-row",{staticClass:"my-4",attrs:{"cols-lg":"5"}},t._l(t.relatedBrands,(function(t,r){return s("b-col",{key:r,staticClass:"mb-3",attrs:{cols:"6",sm:"4",md:"3"}},[s("brand-box",{attrs:{brand:t}})],1)})),1)],1):t._e()],1)},i=[],o=(s("99af"),s("b0c0"),s("5530")),a=s("5b9f"),c=s("793e"),n=s("2f62"),l=s("be3b"),d=s("9c03"),u={name:"CertainProduct",title:function(){return this.productLoaded?this.product.name:"Product-"+this.$route.params.id},data:function(){return{sliding:null,product:{},productLoaded:!1,relatedProducts:[],selector:{},show:!1,cartButtonPressed:null,quantity:1,relatedBrands:[],reviews:[],stat:[],colors:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])(["authToken","user"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&this.product.specifications[t].length>1&&null===this.selector[t])return!1;return!0},deliveryFee:function(){return this.user.district?"Bogura"===this.user.district?0:60:0},address:function(){return this.user.address?this.user.address+" , "+this.user.district:"Bogura"}}),components:{ProductScrollSection:a["a"],BrandBox:c["a"]},mixins:[d["a"]],methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["addToCart"])),{},{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},showPrev:function(){0===this.i&&(this.i=this.totalimage),this.i=(this.i-1)%this.totalimage},showNext:function(){this.i=(this.i+1)%this.totalimage},loadProduct:function(t){var r=this;this.loader("/product",{productID:t},"product-".concat(t)).then((function(t){r.product=t.data,r.product.specifications=r.product.extra,delete r.product.extra,r.productLoaded=!0,r.colors=r.product.colors,r.loadReviews(),r.loadRelatedProducts(),r.loadRelatedBrands(),r.loadSelector(),r.setTitle()}))},loadReviews:function(){var t=this,r=this.product.productID;this.loader("/product/reviews",{productID:r},"reviews of product-".concat(r)).then((function(r){t.reviews=r.data,t.calculateStats()}))},convertToDate:function(t){var r=t,s=1e3*r,e=new Date(s),i=e.toLocaleString();return i},calculateStats:function(){this.stat=this.product.ratingDetails},loadRelatedProducts:function(){var t=this;l["a"].post("/search",{productIds:this.product.relatedProductIDs}).then((function(r){console.log("products related to ".concat(t.product.productID," loaded")),console.log(r),t.relatedProducts=r.data.products})).catch((function(r){console.log("products related to ".concat(t.product.productID," failed loading")),console.log(r.response)}))},loadRelatedBrands:function(){var t=this,r=this.product.category,s=this.relatedBrands.length,e=5;this.loader("/category/brands",{"cat-name":r,offset:s,limit:e},"brands of ".concat(r," for product-").concat(this.product.productID)).then((function(r){t.relatedBrands=r.data}))},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.product.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&this.product.specifications[t].length>1&&(this.selector[t]=null)},makeOrder:function(){var t=this.product.price.sellingPrice;return{products:[{id:this.product.productID,name:this.product.name,specifications:this.selector,quantity:this.quantity,image:this.product.images[0],curPrice:t,discount:this.product.price.discount,vat:this.product.price.vat}],subTotal:t*(1+this.product.price.vat/100)*this.quantity}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.product.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.price.sellingPrice,discount:this.product.price.discount,image:this.product.images[0],name:this.product.name,vat:this.product.price.vat}]).then().catch((function(){})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&this.product.specifications[t].length>1&&(this.selector[t]=null)}}),watch:{$route:function(t,r){this.loadProduct(t.params.id)}},created:function(){this.loadProduct(this.$route.params.id)}},p=u,h=(s("74b5"),s("2877")),f=Object(h["a"])(p,e,i,!1,null,null,null);r["default"]=f.exports},b0ff:function(t,r,s){"use strict";var e=s("03fd"),i=s.n(e);i.a},d47b:function(t,r,s){},eac8:function(t,r,s){}}]);
//# sourceMappingURL=CertainProduct.77227cd2.js.map