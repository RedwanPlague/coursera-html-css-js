(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"0f83":function(t,o,s){},"126c":function(t,o,s){"use strict";var r=s("468b"),a=s.n(r);a.a},"3f5c":function(t,o,s){"use strict";var r=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(o){t.shadow=!0},mouseleave:function(o){t.shadow=!1}}},[s("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[s("div",{on:{click:t.clicking}},[s("b-card",{staticStyle:{"border-radius":"0"}},[s("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:t.isArrival?"100px":"200px",top:""}}),s("b-card-text",{staticStyle:{padding:"0 5%"}},[s("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),t.isArrival?t._e():s("b-form-rating",{staticStyle:{transform:"scale(0.8, 0.8)"},attrs:{inline:"","no-border":"",variant:"warning",readonly:"",size:"sm",precision:"1"},model:{value:t.product.rating,callback:function(o){t.$set(t.product,"rating",o)},expression:"product.rating"}}),t.isArrival?t._e():s("div",[t.product.discount>0?s("span",[s("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),s("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),s("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1)]),t.isArrival?t._e():s("b-button",{staticClass:"mx-auto my-auto text-center",style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show,squared:""},on:{click:function(o){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")])],1),s("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[s("span",{},[t._v("There are some options."),s("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"mx-auto text-center"},[s("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),s("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[s("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[s("div",{staticClass:"text-center"},[s("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),s("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?s("div",{staticClass:"mx-auto d-flex flex-column text-center"},[s("b-list-group",[t._l(t.productFull.specifications,(function(o,r,a){return s("span",{key:a},[Array.isArray(o)&&o.length>1?s("b-list-group-item",[s("b-form-group",{attrs:{label:r}},[s("b-form-select",{staticStyle:{width:"80%"},attrs:{options:o,"value-field":r},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[r],callback:function(o){t.$set(t.selector,r,o)},expression:"selector[key]"}})],1)],1):t._e()],1)})),s("b-list-group-item",[s("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),s("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(o){t.quantity=o},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},a=[],i=(s("b0c0"),s("9911"),s("5530")),e=s("2f62"),c=s("9c03"),n={props:{product:{},isArrival:{default:!1}},data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(i["a"])(Object(i["a"])({},Object(e["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.productFull.specifications[t].length>1&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[c["a"]],methods:Object(i["a"])(Object(i["a"])({},Object(e["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var o=this.product.id;this.loader("/product",{productID:o},"specs of product-".concat(o)).then((function(o){t.productFull=o.data,t.productFull.specifications=t.productFull.extra,delete t.productFull.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.productFull.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.productFull.specifications[t].length>1&&this.$set(this.selector,t,null);console.log("done")},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.productFull.specifications[t])&&this.productFull.specifications[t].length>1&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},l=n,d=(s("ec86"),s("2877")),u=Object(d["a"])(l,r,a,!1,null,"6a89fca8",null);o["a"]=u.exports},"468b":function(t,o,s){},4858:function(t,o,s){"use strict";var r=s("d47b"),a=s.n(r);a.a},"5b9f":function(t,o,s){"use strict";var r=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("b-container",{attrs:{fluid:!0}},[s("b-row",{staticClass:"d-flex flex-nowrap",attrs:{id:"top","cols-lg":"5"}},t._l(t.products,(function(t,o){return s("b-col",{key:o,staticClass:"productClass col-md-3 col-sm-4 col-xs-7",attrs:{cols:"7"}},[s("product-box",{attrs:{product:t}})],1)})),1)],1)},a=[],i=s("3f5c"),e={name:"ProductScrollSection",props:["products"],components:{ProductBox:i["a"]}},c=e,n=(s("126c"),s("2877")),l=Object(n["a"])(c,r,a,!1,null,"60260121",null);o["a"]=l.exports},"690b":function(t,o,s){"use strict";var r=s("0f83"),a=s.n(r);a.a},"793e":function(t,o,s){"use strict";var r=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[s("div",{class:{shadow:t.shadow,popup:!1},attrs:{id:"holder"},on:{click:t.clicking,mouseenter:function(o){t.shadow=!0},mouseleave:function(o){t.shadow=!1}}},[s("b-card",{attrs:{"img-src":t.brand.image.link,"img-width":"250px","img-height":"200px","img-alt":t.brand.name,"img-top":""}},[s("b-card-text",{staticClass:"text-center",staticStyle:{padding:"0 5%"}},[s("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.brand.name)+" ")]),s("div",{attrs:{id:"discount"}},[t._v(t._s(t.brand.discount)+"%")])])],1)],1)])},a=[],i=(s("b0c0"),{name:"BrandBox",data:function(){return{busy:!1,shadow:!1}},props:["brand"],methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainBrand",query:{name:this.brand.name}})}}}),e=i,c=(s("4858"),s("2877")),n=Object(c["a"])(e,r,a,!1,null,"76dd0660",null);o["a"]=n.exports},"857a":function(t,o,s){var r=s("1d80"),a=/"/g;t.exports=function(t,o,s,i){var e=String(r(t)),c="<"+o;return""!==s&&(c+=" "+s+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+e+"</"+o+">"}},9911:function(t,o,s){"use strict";var r=s("23e7"),a=s("857a"),i=s("af03");r({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},"9c03":function(t,o,s){"use strict";s("d3b7");var r=s("be3b"),a={methods:{loader:function(t,o,s){return new Promise((function(a,i){r["a"].get(t,{params:o}).then((function(t){console.log("".concat(s," loaded")),console.log(t),a(t)})).catch((function(t){console.log("".concat(s," loading failed")),console.log(t.response)}))}))}}};o["a"]=a},"9d38":function(t,o,s){},af03:function(t,o,s){var r=s("d039");t.exports=function(t){return r((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},bb51:function(t,o,s){"use strict";s.r(o);var r=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{},[s("b-carousel",{staticClass:"mb-4 mt-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(o,r){return s("b-carousel-slide",{key:r,scopedSlots:t._u([{key:"img",fn:function(){return[s("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:o.image.link}})]},proxy:!0}],null,!0)})})),1),s("b-container",{staticClass:"main1"},[s("div",{staticClass:"border-top shadow-sm mb-2 d-flex flex-row loose-top"},[s("h2",{staticClass:"text-dark"},[t._v("Deals of the Day")]),s("b-button",{staticClass:"ml-auto shadow popup",staticStyle:{"background-color":"#5FACBE"},attrs:{pill:"",to:"/flash-sale"}},[t._v("Show more")])],1),s("div",{staticStyle:{border:"0px solid black","background-color":"white"}},[s("product-scroll-section",{attrs:{products:t.flashSaleProducts}})],1),s("br"),s("b-row",[s("b-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"mb-2",staticStyle:{border:"0px solid black","background-color":"white"}},[s("div",{staticClass:"mx-2"},[s("b-row",[s("b-col",[s("h2",{staticClass:"text-dark"},[t._v("Categories")])])],1),s("b-row",{staticClass:"no-gutters",attrs:{cols:"2"}},t._l(t.categories,(function(o,r){return s("b-col",{key:r},[s("div",{class:{border:!0,"border-white":!0,shadow:o.shadow},staticStyle:{"background-color":"#f0f0f0"},on:{mouseenter:function(t){o.shadow=!0},mouseleave:function(t){o.shadow=!1},click:function(s){return t.$router.push({name:"CertainCategory",query:{"cat-name":o.name}})}}},[s("b-img",{attrs:{src:o.image.link,center:"",height:"100%",width:"100%"}}),s("div",{staticClass:"mx-auto text-center text-truncate",staticStyle:{"background-color":"#f0f0f0"}},[t._v(" "+t._s(o.name)+" ")])],1)])})),1),s("b-row",[s("b-button",{staticClass:"ml-auto mt-2 shadow mr-3 popup",staticStyle:{"background-color":"#5FACBE"},attrs:{pill:"",variant:"",to:"/categories/all"}},[t._v("Show more")])],1)],1)])]),s("b-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"mb-2",staticStyle:{border:"0px solid black","background-color":"white"}},[s("div",{staticClass:"mx-2"},[s("b-row",[s("b-col",[s("h2",{staticClass:"text-dark"},[t._v("New Arrivals")])])],1),s("b-row",{staticClass:"no-gutters"},t._l(t.newArrivalsProducts,(function(t,o){return s("b-col",{key:o,attrs:{cols:"6"}},[s("product-box",{attrs:{product:t,isArrival:!0}})],1)})),1),s("b-row",[s("b-button",{staticClass:"ml-auto shadow mr-3 mt-2 popup",staticStyle:{"background-color":"#5FACBE",border:"0"},attrs:{pill:"",variant:"",to:"/new-arrivals"}},[t._v("Show more")])],1)],1)])])],1),s("br"),s("br"),s("br"),s("div",{staticClass:"border-top shadow-sm mb-2 d-flex flex-row loose-top"},[s("h2",{staticClass:"text-dark"},[t._v("Best Seller")]),s("b-button",{staticClass:"ml-auto shadow popup",staticStyle:{"background-color":"#5FACBE",border:"0"},attrs:{pill:"",variant:"",to:"/most-sold"}},[t._v("Show more")])],1),s("div",{staticStyle:{border:"0px solid black","background-color":"white"}},[s("product-scroll-section",{attrs:{products:t.mostSoldProducts}})],1),s("br"),s("div",{staticClass:"border-top shadow-sm mb-2 d-flex flex-row loose-top"},[s("h2",{staticClass:"text-dark"},[t._v("Popular Brands")]),s("b-button",{staticClass:"ml-auto shadow popup",staticStyle:{"background-color":"#5FACBE",border:"0"},attrs:{pill:"",variant:"",to:"/top-brands"}},[t._v("Show more")])],1),s("div",{staticStyle:{border:"0px solid black","background-color":"white"}},[s("b-row",{staticClass:"my-4",attrs:{"cols-lg":"5"}},t._l(t.topBrands,(function(t,o){return s("b-col",{key:o,staticClass:"p-3 mx-3",attrs:{cols:"7"}},[s("brand-box",{attrs:{brand:t}})],1)})),1)],1),s("br"),s("div",{staticClass:"border-top shadow-sm mb-2 d-flex flex-row loose-top"},[s("h2",{staticClass:"text-dark"},[t._v("Top Rated")]),s("b-button",{staticClass:"ml-auto shadow popup",staticStyle:{"background-color":"#5FACBE"},attrs:{pill:"",to:"/top-rated"}},[t._v("Show more")])],1),s("div",{staticStyle:{border:"0px solid black","background-color":"white"}},[s("product-scroll-section",{attrs:{cass:"mt-3",products:t.topRatedProducts}})],1),s("br"),s("div",{staticClass:"border-top shadow-sm mb-2 d-flex flex-row loose-top"},[s("h2",{staticClass:"text-dark"},[t._v("Our Shop")]),s("b-button",{staticClass:"ml-auto shadow popup",staticStyle:{"background-color":"#5FACBE"},attrs:{pill:"",to:"/our-shop"}},[t._v("Show more")])],1),s("div",{staticStyle:{border:"0px solid black","background-color":"white"}},[s("product-scroll-section",{attrs:{products:t.ourShopProducts}})],1)],1)],1)},a=[],i=(s("d81d"),s("5b9f")),e=s("9c03"),c=s("3f5c"),n=s("793e"),l={data:function(){return{flashSaleProducts:null,topRatedProducts:null,mostSoldProducts:null,newArrivalsProducts:null,ourShopProducts:null,topBrands:null,sliding:!1,images:[],categories:[]}},components:{ProductScrollSection:i["a"],ProductBox:c["a"],BrandBox:n["a"]},mixins:[e["a"]],methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadFlashSale:function(){var t=this,o=0,s=5;this.loader("/products/flash-sale",{offset:o,limit:s},"flash-sale-home").then((function(o){t.flashSaleProducts=o.data.products}))},loadTopRated:function(){var t=this,o=0,s=5;this.loader("/products/top-rated",{offset:o,limit:s},"top-rated-home").then((function(o){t.topRatedProducts=o.data.products}))},loadMostSold:function(){var t=this,o=0,s=5;this.loader("/products/most-sold",{offset:o,limit:s},"most-sold-home").then((function(o){t.mostSoldProducts=o.data.products}))},loadTopBrands:function(){var t=this,o=0,s=5;this.loader("/top-brands",{offset:o,limit:s},"top-brands-home").then((function(o){t.topBrands=o.data.brands}))},loadNewArrivals:function(){var t=this,o=0,s=4;this.loader("/products/new-arrivals",{offset:o,limit:s},"new-arrivals-home").then((function(o){t.newArrivalsProducts=o.data.products}))},loadOurShop:function(){var t=this,o=0,s=5;this.loader("/products/our-shop",{offset:o,limit:s},"our-shop-home").then((function(o){t.ourShopProducts=o.data.products}))},loadSlideImages:function(){var t=this;this.loader("/banner/all",{type:"homePage"},"banner-home").then((function(o){t.images=o.data}))},loadCategories:function(){var t=this,o=0,s=4;this.loader("/categories/all",{offset:o,limit:s},"categories-home").then((function(o){t.categories=o.data.categories.map((function(t){return t.shadow=!1,t}))}))},loadAll:function(){this.loadFlashSale(),this.loadTopRated(),this.loadNewArrivals(),this.loadMostSold(),this.loadTopBrands(),this.loadOurShop(),this.loadCategories(),this.loadSlideImages()}},watch:{$route:function(t,o){this.loadAll()}},created:function(){this.loadAll()}},d=l,u=(s("690b"),s("2877")),p=Object(u["a"])(d,r,a,!1,null,"000573b0",null);o["default"]=p.exports},d47b:function(t,o,s){},ec86:function(t,o,s){"use strict";var r=s("9d38"),a=s.n(r);a.a}}]);
//# sourceMappingURL=Home.507b3879.js.map