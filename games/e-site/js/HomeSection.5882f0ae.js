(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HomeSection"],{"0926":function(t,s,o){"use strict";var e=o("ee7a"),r=o.n(e);r.a},"1f46":function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("b-container",{attrs:{fluid:""}},[o("b-carousel",{staticClass:"mb-4 mt-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(s,e){return o("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:s.image.link}})]},proxy:!0}],null,!0)})})),1),o("div",{staticClass:"mx-auto text-center"},[o("h1",[t._v("Best Seller")])]),o("div",{staticStyle:{padding:"0 5% 0 5%"}},[o("product-sorter",{attrs:{products:t.products}}),o("b-row",t._l(t.products,(function(t,s){return o("b-col",{key:s,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[o("product-box",{attrs:{product:t}})],1)})),1),o("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[o("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():o("b-button",{staticStyle:{"background-color":"#007bff"},attrs:{disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1),o("hr")],1)},r=[],i=(o("99af"),o("9c03")),n=o("3f5c"),a=o("7252"),c={name:"MostSold",title:"Best Sellers",data:function(){return{products:[],productLoadingDone:!0,busy:!1,sliding:!1,images:[]}},mixins:[i["a"]],components:{ProductBox:n["a"],ProductSorter:a["a"]},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadBanner:function(){var t=this;this.loader("/banner/all",{type:"bestSeller"},"banners for best-seller").then((function(s){t.images=s.data}))},loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var s=this.products.length,o="6";this.loader("products/most-sold",{offset:s,limit:o},"most-sold").then((function(s){t.busy=!1,t.products=t.products.concat(s.data.products),t.productLoadingDone=s.data.products.length<o}))}},created:function(){this.loadMore()}},d=c,l=o("2877"),u=Object(l["a"])(d,e,r,!1,null,"7598c38c",null);s["default"]=u.exports},"21fb":function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("b-container",{attrs:{fluid:""}},[o("b-carousel",{staticClass:"mb-4 mt-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(s,e){return o("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:s.image.link}})]},proxy:!0}],null,!0)})})),1),o("div",{staticClass:"mx-auto text-center"},[o("h1",[t._v("Top Rated")])]),o("div",{staticStyle:{padding:"0 5% 0 5%"}},[o("product-sorter",{attrs:{products:t.products}}),o("b-row",t._l(t.products,(function(t,s){return o("b-col",{key:s,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[o("product-box",{attrs:{product:t}})],1)})),1),o("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[o("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():o("b-button",{staticStyle:{"background-color":"#007bff"},attrs:{disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1),o("hr")],1)},r=[],i=(o("99af"),o("9c03")),n=o("3f5c"),a=o("7252"),c={name:"TopRated",title:"Top Rated Products",data:function(){return{products:[],productLoadingDone:!0,busy:!1,images:[],sliding:!1}},mixins:[i["a"]],components:{ProductBox:n["a"],ProductSorter:a["a"]},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var s=this.products.length,o="6";this.loader("products/top-rated",{offset:s,limit:o},"top-rated").then((function(s){t.products=t.products.concat(s.data.products),t.busy=!1,t.productLoadingDone=s.data.products.length<o}))},loadBanner:function(){var t=this;this.loader("/banner/all",{type:"topRated"},"banners for top-rated").then((function(s){t.images=s.data}))}},created:function(){this.loadMore()}},d=c,l=o("2877"),u=Object(l["a"])(d,e,r,!1,null,"b346b4be",null);s["default"]=u.exports},3644:function(t,s,o){},"3f5c":function(t,s,o){"use strict";var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(s){t.shadow=!0},mouseleave:function(s){t.shadow=!1}}},[o("router-link",{attrs:{to:{name:"CertainProduct",params:{id:this.product.id}}}},[o("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[o("b-card",[o("b-card-img",{ref:"img",staticStyle:{"border-radius":"0"},attrs:{src:t.imgSrc,alt:t.product.name,height:"180px",top:""}}),o("b-card-text",{},[o("div",{staticClass:"mx-auto text-center text-truncate"},[t._v(" "+t._s(t.product.name)+" ")]),o("b-form-rating",{staticClass:"mx-auto text-center mt-n5",staticStyle:{transform:"scale(0.8, 0.8)",color:"#0f76e4"},attrs:{inline:"","no-border":"",readonly:"",size:"sm",precision:"1","icon-empty":t.product.rating?"star":"dash"},model:{value:t.product.rating,callback:function(s){t.$set(t.product,"rating",s)},expression:"product.rating"}}),o("div",{staticClass:"mx-auto text-center mt-n1"},[t.product.discount>0?o("span",[o("span",{staticClass:"strike",attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),o("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")])]):t._e(),o("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)],1)],1),o("b-button",{staticClass:"mx-auto my-auto text-center",style:{opacity:1*t.shadow,border:0},attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.product.id,"aria-expanded":t.show},on:{click:function(s){return t.initialHandler(!0)}}},[t._v(" Add to Bag ")]),o("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.product.id,"aria-label":"Sidebar with custom footer",shadow:"",backdrop:"",lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[o("span",{},[t._v("There are some options."),o("br"),t._v("Choose yours:")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"mx-auto text-center sticky-bottom"},[o("b-button",{staticClass:"col-6",staticStyle:{"background-color":"#007bff"},attrs:{squared:""},on:{click:t.doReset}},[t._v("Reset")]),o("b-button",{staticClass:"col-6",staticStyle:{"background-color":"#00376F"},attrs:{squared:"",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Bag":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[o("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[o("div",{staticClass:"text-center"},[o("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),o("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?o("div",{staticClass:"mx-auto d-flex flex-column text-center"},[o("b-list-group",[t._l(t.selector,(function(s,e,r){return o("span",{key:r},[o("b-list-group-item",[o("b-form-group",{attrs:{label:e}},[o("b-form-select",{staticStyle:{width:"80%"},attrs:{options:t.productFull.extra[e],"value-field":e},scopedSlots:t._u([{key:"first",fn:function(){return[o("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[e],callback:function(s){t.$set(t.selector,e,s)},expression:"selector[key]"}})],1)],1)],1)})),o("b-list-group-item",[o("label",{attrs:{for:"sb-inline"+t.product.id}},[t._v("Quantity")]),o("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.product.id,inline:""},model:{value:t.quantity,callback:function(s){t.quantity=s},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},r=[],i=(o("b0c0"),o("9911"),o("5530")),n=o("2f62"),a=o("9c03"),c={props:{product:{}},data:function(){return{busy:!1,shadow:!1,productFull:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1,imgWidth:0}},computed:Object(i["a"])(Object(i["a"])({},Object(n["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&null===this.selector[t])return!1;return!0},imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}}),mixins:[a["a"]],methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var s=this.product.id;this.loader("/product",{productID:s},"specs of product-".concat(s)).then((function(s){t.productFull=s.data,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){this.selector={};var t=this.productFull.extra;for(var s in t)t.hasOwnProperty(s)&&Array.isArray(t[s])&&t[s].length>1&&this.$set(this.selector,s,null)},makeOrder:function(){var t=this.productFull.price.sellingPrice;return{products:[{id:this.productFull.productID,name:this.productFull.name,specifications:this.selector,quantity:this.quantity,image:this.productFull.images[0],curPrice:t,discount:this.productFull.price.discount,vat:this.productFull.price.vat}],subTotal:t*(1+this.productFull.price.vat/100)*this.quantity}},initialHandler:function(t){this.authToken||t?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart([{productID:this.productFull.productID,specifications:this.selector,quantity:this.quantity,curPrice:this.product.curPrice,discount:this.product.discount,image:this.product.image,name:this.product.name,vat:this.productFull.price.vat}]).then().catch((function(){})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.quantity=1,this.selector)this.selector.hasOwnProperty(t)&&this.$set(this.selector,t,null)},onHidden:function(){this.$refs.button.focus()}}),mounted:function(){this.imgWidth=this.$refs.img.clientWidth}},d=c,l=(o("af05"),o("2877")),u=Object(l["a"])(d,e,r,!1,null,"4a802845",null);s["a"]=u.exports},"4aac":function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("b-container",{attrs:{fluid:""}},[o("b-carousel",{staticClass:"mb-4 mt-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(s,e){return o("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:s.image.link}})]},proxy:!0}],null,!0)})})),1),o("div",{staticClass:"mx-auto text-center"},[o("h1",[t._v("Azraar Shop")])]),o("div",{staticStyle:{padding:"0 5% 0 5%"}},[o("product-sorter",{attrs:{products:t.products}}),o("b-row",t._l(t.products,(function(t,s){return o("b-col",{key:s,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[o("product-box",{attrs:{product:t}})],1)})),1),o("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[o("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():o("b-button",{staticStyle:{"background-color":"#007bff"},attrs:{disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1),o("hr")],1)},r=[],i=(o("99af"),o("9c03")),n=o("3f5c"),a=o("7252"),c={name:"OurShop",title:"Products from Azraar",data:function(){return{products:[],productLoadingDone:!0,busy:!1,sliding:!1,images:[]}},mixins:[i["a"]],components:{ProductBox:n["a"],ProductSorter:a["a"]},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadBanner:function(){var t=this;this.loader("/banner/all",{type:"ourShop"},"banners for our-shop").then((function(s){t.images=s.data}))},loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var s=this.products.length,o="6";this.loader("products/our-shop",{offset:s,limit:o},"our-shop").then((function(s){t.busy=!1,t.products=t.products.concat(s.data.products),t.productLoadingDone=s.data.products.length<o}))}},created:function(){this.loadMore()}},d=c,l=o("2877"),u=Object(l["a"])(d,e,r,!1,null,"79eb6b2a",null);s["default"]=u.exports},7252:function(t,s,o){"use strict";var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"shadow-sm mb-2 text-center"},[o("span",{staticClass:"mx-2"},[t._v("Sort by:")]),o("b-dropdown",{staticClass:"col-2 px-0",attrs:{variant:"Light",text:t.sortOptions[t.sortId].text}},t._l(t.sortOptions,(function(s,e){return o("b-dropdown-item-button",{key:e,on:{click:function(s){return t.setSort(e)}}},[t._v(" "+t._s(s.text)+" ")])})),1)],1)},r=[],i=o("c391"),n={name:"ProductSorter",props:["products"],data:function(){return{sortId:0,sortOptions:[{text:"No Order",sort:null,order:null},{text:"A to Z",sort:"name",order:"asc"},{text:"Z to A",sort:"name",order:"desc"},{text:"Price (Low to High)",sort:"curPrice",order:"asc"},{text:"Price (High to Low)",sort:"curPrice",order:"desc"},{text:"Rating (High to Low)",sort:"rating",order:"desc"},{text:"Rating (Low to High)",sort:"rating",order:"asc"},{text:"Discount (More to Less)",sort:"discount",order:"desc"},{text:"Discount (Less to More)",sort:"discount",order:"asc"}]}},mixins:[i["a"]],methods:{setSort:function(t){if(this.sortId=t,0!==t){var s=this.sortOptions[this.sortId].sort,o=this.sortOptions[this.sortId].order;this.sortArray(this.products,s,o)}}}},a=n,c=o("2877"),d=Object(c["a"])(a,e,r,!1,null,"0afe98ea",null);s["a"]=d.exports},"857a":function(t,s,o){var e=o("1d80"),r=/"/g;t.exports=function(t,s,o,i){var n=String(e(t)),a="<"+s;return""!==o&&(a+=" "+o+'="'+String(i).replace(r,"&quot;")+'"'),a+">"+n+"</"+s+">"}},9911:function(t,s,o){"use strict";var e=o("23e7"),r=o("857a"),i=o("af03");e({target:"String",proto:!0,forced:i("link")},{link:function(t){return r(this,"a","href",t)}})},"9c03":function(t,s,o){"use strict";o("d3b7");var e=o("be3b"),r={methods:{loader:function(t,s,o){return new Promise((function(o,r){e["a"].get(t,{params:s}).then((function(t){o(t)})).catch((function(){}))}))}}};s["a"]=r},a3e0:function(t,s,o){"use strict";var e=o("3644"),r=o.n(e);r.a},a5ae:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("b-container",{attrs:{fluid:""}},[o("b-carousel",{staticClass:"mb-4 mt-4",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(s,e){return o("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:s.image.link}})]},proxy:!0}],null,!0)})})),1),o("div",{staticClass:"mx-auto text-center my-3"},[o("h1",[t._v("New Arrivals")])]),o("div",{staticStyle:{padding:"0 5% 0 5%"}},[o("product-sorter",{attrs:{products:t.products}}),o("b-row",t._l(t.products,(function(t,s){return o("b-col",{key:s,staticClass:"my-2",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[o("product-box",{attrs:{product:t}})],1)})),1),o("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[o("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():o("b-button",{staticStyle:{"background-color":"#007bff"},attrs:{disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1),o("hr")],1)},r=[],i=(o("99af"),o("c391")),n=o("9c03"),a=o("3f5c"),c=o("7252"),d={name:"NewArrivals",title:"New Arrivals",data:function(){return{products:[],productLoadingDone:!0,busy:!1,images:[],sliding:!1}},mixins:[n["a"],i["a"]],components:{ProductBox:a["a"],ProductSorter:c["a"]},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1},loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var s=this.products.length,o="6";this.loader("/products/new-arrivals",{offset:s,limit:o},"new-arrivals").then((function(s){t.busy=!1,t.products=t.products.concat(s.data.products),t.productLoadingDone=s.data.products.length<o}))},clearProducts:function(){this.products=[]},loadBanners:function(){var t=this;this.loader("/banner/all",{type:"newArrivals"},"banners for new-arrivals").then((function(s){t.images=s.data}))}},watch:{$route:function(t,s){this.clearProducts(),this.loadMore(),this.loadBanners()}},created:function(){this.loadMore(),this.loadBanners()}},l=d,u=o("2877"),h=Object(u["a"])(l,e,r,!1,null,"44864753",null);s["default"]=h.exports},af03:function(t,s,o){var e=o("d039");t.exports=function(t){return e((function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}))}},af05:function(t,s,o){"use strict";var e=o("dade"),r=o.n(e);r.a},dade:function(t,s,o){},ee7a:function(t,s,o){},fe8b:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("b-container",{attrs:{fluid:""}},[o("b-carousel",{staticClass:"mb-1 mt-4 mx-auto text-center ",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"","img-width":"200","img-height":"200",background:"gray"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd}},t._l(t.images,(function(s,e){return o("b-carousel-slide",{key:e,scopedSlots:t._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block w-100",attrs:{width:"200",height:"300","background-color":"red",src:s.image.link}})]},proxy:!0}],null,!0)})})),1),o("marquee",{staticStyle:{"background-color":"lightblue",color:"black"}},[o("h1",[t._v(t._s(t.text))])]),o("div",{staticClass:"mx-auto text-center"},[o("h1",[t._v("Deals of the day")])]),o("count-down-timer"),o("div",{staticStyle:{padding:"0 5% 0 5%"}},[o("product-sorter",{attrs:{products:t.products}}),o("b-row",t._l(t.products,(function(t,s){return o("b-col",{key:s,staticClass:"my-2 p-1",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[o("product-box",{attrs:{product:t}})],1)})),1),o("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[o("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.productLoadingDone?t._e():o("b-button",{staticStyle:{"background-color":"#007bff"},attrs:{disabled:t.busy},on:{click:t.loadMore}},[t._v(" Load More ")])],1)],1)],1),o("hr")],1)},r=[],i=(o("99af"),o("9c03")),n=o("3f5c"),a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("div",{staticClass:"d-flex d-inline d-block mt-1",staticStyle:{float:"center"}},[o("b-row",{staticClass:"mx-auto text-center"},[o("span",{staticClass:"border border-warning",staticStyle:{height:"70px",width:"70px"}},[o("p",{staticClass:"text-center",attrs:{id:"show-time"}},[t._v(" "+t._s(t.hours))])]),o("span",[o("p",{staticClass:"text-center mx-1",attrs:{id:"show-colon"}},[t._v(":")])]),o("span",{staticClass:"border border-warning",staticStyle:{height:"70px",width:"70px"}},[t.minutes<10?o("p",{staticClass:"text-center",attrs:{id:"show-time"}},[t._v("0"+t._s(t.minutes))]):o("p",{staticClass:"text-center",attrs:{id:"show-time"}},[t._v(t._s(t.minutes))])]),o("span",[o("p",{staticClass:"text-center mx-1",attrs:{id:"show-colon"}},[t._v(":")])]),o("span",{staticClass:"border border-warning",staticStyle:{height:"70px",width:"70px"}},[t.seconds<10?o("p",{staticClass:"text-center",attrs:{id:"show-time"}},[t._v("0"+t._s(t.seconds))]):o("p",{staticClass:"text-center",attrs:{id:"show-time"}},[t._v(t._s(t.seconds))])])])],1),o("p",{staticClass:"mx-auto text-center"},[t._v("time remaining--")])])},c=[],d={name:"CountDownTimer",data:function(){return{hours:0,minutes:1,seconds:5}},methods:{countDown:function(){this.seconds--,this.seconds<0&&(this.seconds=59,this.minutes--,this.minutes<0&&(this.minutes=59,this.hours--,this.hours<0&&(this.hours=23)))},initialize:function(){var t=new Date,s=(new Date).setHours(23,59,59,999),o=Math.floor((s-t)/1e3);this.hours=Math.floor(o/3600),o-=3600*this.hours,this.minutes=Math.floor(o/60),this.seconds=o-60*this.minutes}},created:function(){this.initialize(),setInterval(this.countDown,1e3)}},l=d,u=(o("a3e0"),o("2877")),h=Object(u["a"])(l,a,c,!1,null,"104a4c54",null),p=h.exports,f=o("7252"),m={name:"FlashSale",title:"Deals of the Day",data:function(){return{products:[],productLoadingDone:!0,busy:!1,images:[],sliding:!1,text:null}},components:{ProductBox:n["a"],CountDownTimer:p,ProductSorter:f["a"]},mixins:[i["a"]],methods:{onSlideStart:function(t){this.sliding=!0,this.text=this.images[t].text},onSlideEnd:function(t){this.sliding=!1},startTime:function(){var t=new Date,s=t.getHours(),o=t.getMinutes(),e=t.getSeconds();o=this.checkTime(o),e=this.checkTime(e),document.getElementById("txt").innerHTML=s+":"+o+":"+e;setTimeout(this.startTime,500)},checkTime:function(t){return t<10&&(t="0"+t),t},loadMore:function(){var t=this;this.productLoadingDone||(this.busy=!0);var s=this.products.length,o="6";this.loader("products/flash-sale",{offset:s,limit:o},"flash-sale").then((function(s){t.products=t.products.concat(s.data.products),t.busy=!1,t.productLoadingDone=s.data.products.length<o}))},loadBanner:function(){var t=this;this.loader("/banner/all",{type:"flashSale"},"banners for flash-sale").then((function(s){t.images=s.data,t.text=t.images[0].text}))},startCallBack:function(t){alert(t)},endCallBack:function(t){alert(t)}},created:function(){this.loadMore(),this.loadBanner()}},b=m,g=(o("0926"),Object(u["a"])(b,e,r,!1,null,"4f45d615",null));s["default"]=g.exports}}]);
//# sourceMappingURL=HomeSection.5882f0ae.js.map