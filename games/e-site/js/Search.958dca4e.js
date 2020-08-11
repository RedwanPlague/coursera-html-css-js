(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Search"],{"03ff":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{attrs:{id:"add-to-cart","aria-controls":"sidebar-right-footer"+t.productId,"aria-expanded":t.show},on:{click:function(e){return t.initialHandler(!0)}}},[t._v(" Add to Cart ")]),r("b-button",{attrs:{id:"buy-now","aria-controls":"sidebar-right-footer-buy"+t.productId,"aria-expanded":""},on:{click:function(e){return t.initialHandler(!1)}}},[t._v(" Buy Now ")]),r("b-sidebar",{attrs:{id:"sidebar-right-footer"+t.productId,"aria-label":"Sidebar with custom footer",shadow:"",lazy:"",width:"70%"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("div",{staticClass:"mx-auto text-center"},[r("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"warning"},on:{click:t.doReset}},[t._v("Reset")]),r("b-button",{staticClass:"col-6",attrs:{squared:"",variant:"success",disabled:!t.allSelected},on:{click:t.finalHandler}},[t._v(" "+t._s(t.cartButtonPressed?"Add to Cart":"Check Out")+" ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("b-overlay",{staticStyle:{height:"500px"},attrs:{show:!t.productLoaded,opacity:"0.4",rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticClass:"text-center"},[r("b-icon",{attrs:{icon:"stopwatch","font-scale":"3",animation:"cylon"}}),r("p",{attrs:{id:"cancel-label"}},[t._v("Please wait...")])],1)]},proxy:!0}])},[t.productLoaded?r("div",{staticClass:"mx-auto d-flex flex-column"},[r("b-list-group",[t._l(t.product.specifications,(function(e,o,s){return r("span",{key:s},[Array.isArray(e)?r("b-list-group-item",[r("b-form-group",{attrs:{label:o}},[r("b-form-select",{staticStyle:{width:"70%"},attrs:{options:e,"value-field":o},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}],null,!0),model:{value:t.selector[o],callback:function(e){t.$set(t.selector,o,e)},expression:"selector[key]"}})],1)],1):t._e()],1)})),r("b-list-group-item",[r("label",{attrs:{for:"sb-inline"+t.productId}},[t._v("Quantity")]),r("b-form-spinbutton",{staticClass:"ml-2",attrs:{id:"sb-inline"+t.productId,inline:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)],2)],1):t._e()])],1)],1)},s=[],c=(r("b0c0"),r("5530")),i=r("2f62"),a=r("9c03"),n={name:"SpecSelector",props:["productId","productInit"],data:function(){return{product:{},productLoaded:!1,selector:{},show:!1,cartButtonPressed:null,quantity:1}},computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])(["authToken"])),{},{allSelected:function(){if(!this.productLoaded)return!1;for(var t in this.selector)if(this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&null===this.selector[t])return!1;return!0}}),mixins:[a["a"]],methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["addToCart"])),{},{loadProduct:function(){var t=this;if(!this.productLoaded){var e=this.productId;this.loader("/product",{productID:e},"specs of product-".concat(e)).then((function(e){t.product=e.data,t.product.specifications=t.product.extra,delete t.product.extra,t.productLoaded=!0,t.loadSelector()}))}},loadSelector:function(){for(var t in this.selector=JSON.parse(JSON.stringify(this.product.specifications)),this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null);console.log("done")},makeOrder:function(){var t=this.product.price.sellingPrice;return{products:[{id:this.product.productID,name:this.product.name,specifications:this.selector,quantity:this.quantity,image:this.product.images[0],curPrice:t,discount:this.product.price.discount,vat:this.product.price.vat}],subTotal:t*(1+this.product.price.vat/100)*this.quantity,deliveryCharge:60}},initialHandler:function(t){this.authToken?(this.loadProduct(),this.show=!0,this.cartButtonPressed=t):this.$bvModal.show("login-modal")},finalHandler:function(){this.allSelected&&(this.cartButtonPressed?this.addToCart({productID:this.product.productID,specifications:this.selector,quantity:this.quantity}).then().catch((function(t){console.log(t.response)})):this.$router.push({name:"OrderSubmitDetails",query:{order:this.makeOrder()}}),this.show=!1)},doReset:function(){for(var t in this.selector)this.selector.hasOwnProperty(t)&&Array.isArray(this.product.specifications[t])&&(this.selector[t]=null)}}),created:function(){this.productInit&&(this.product=this.productInit,this.productLoaded=!0)}},d=n,u=(r("b4a3"),r("2877")),l=Object(u["a"])(d,o,s,!1,null,"addacbd2",null);e["a"]=l.exports},"312e":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:!0}},[t._v(" "+t._s(t.searchResult)+" "),r("b-row",{staticClass:"d-flex flex-nowrap"},t._l(t.products,(function(t,e){return r("b-col",{key:e,staticClass:"productClass",attrs:{lg:"2",md:"3",sm:"4",xs:"7"}},[r("product-box",{attrs:{product:t}})],1)})),1),r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[t.productLoadingDone?t._e():r("b-button",{attrs:{variant:"success",disabled:t.busy},on:{click:t.loadSearchProducts}},[t._v(" Load More Search Results ")])],1)],1)},s=[],c=(r("99af"),r("d81d"),r("fb6a"),r("ac1f"),r("841c"),r("5530")),i=r("3f5c"),a=r("be3b"),n=r("6062"),d=r("2f62"),u={name:"SearchOnAll",data:function(){return{products:[],productLoadingDone:!1,searchResult:[],searchResultFound:!1,busy:!1}},computed:Object(c["a"])({},Object(d["c"])(["searchProducts","searchProductsLoaded"])),components:{ProductBox:i["a"]},methods:{onHidden:function(){this.$refs.button.focus()},loadSearchResults:function(){if(!this.searchResultFound){var t=new n["a"](this.searchProducts,{keys:["name"]});this.searchResult=t.search(this.$route.query.string).map((function(t){return t.item.id})),this.searchResultFound=!0}},loadSearchProducts:function(){var t=this;this.loadSearchResults();var e=this.products.length,r=e+parseInt("2");r>this.searchResult.length&&(this.productLoadingDone=!0,r=this.searchResult.length);var o=this.searchResult.slice(e,r);a["a"].post("/search",{productIds:o}).then((function(e){console.log("Search products loaded"),console.log(e),t.products=t.products.concat(e.data.products)})).catch((function(t){console.log("Search products loading failed"),console.log(t.response)}))},initialLoader:function(){var t=this;if(this.searchResultFound=!1,this.products=[],this.productLoadingDone=!1,this.searchProductsLoaded)this.loadSearchProducts();else var e=setInterval((function(){t.searchProductsLoaded&&(t.loadSearchProducts(),clearInterval(e))}),"500")}},watch:{$route:function(t,e){this.initialLoader()}},created:function(){this.initialLoader()}},l=u,p=(r("ad0d"),r("2877")),h=Object(p["a"])(l,o,s,!1,null,"bfc0d50c",null);e["default"]=h.exports},"3f5c":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{shadow:t.shadow},attrs:{id:"holder"},on:{mouseenter:function(e){t.shadow=!0},mouseleave:function(e){t.shadow=!1}}},[r("b-overlay",{attrs:{show:t.busy,opacity:"0.7","spinner-large":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[r("span",{on:{click:t.clicking}},[r("b-card",{attrs:{"img-src":t.imgSrc,"img-width":"250px","img-height":"250px","img-alt":"product.name","img-top":""}},[r("b-card-title",{staticStyle:{"font-size":"110%"}},[t._v(" "+t._s(t.product.name)+" ")]),r("b-card-text",[r("span",{attrs:{id:"prev-price"}},[t._v("৳"+t._s(t.prevPrice))]),r("sup",{attrs:{id:"discount"}},[t._v("-"+t._s(t.product.discount)+"%")]),r("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(t.product.curPrice))])])],1)],1)]),r("spec-selector",{attrs:{"product-id":t.product.id}})],1)},s=[],c=(r("9911"),r("03ff")),i={props:["product"],data:function(){return{busy:!1,shadow:!1}},components:{SpecSelector:c["a"]},computed:{imgSrc:function(){return this.product.image?this.product.image.link:""},prevPrice:function(){return Math.round(this.product.curPrice/(1-this.product.discount/100))}},methods:{onHidden:function(){this.$refs.button.focus()},clicking:function(){this.busy=!0,this.$router.push({name:"CertainProduct",params:{id:this.product.id}})}}},a=i,n=(r("bc9e"),r("2877")),d=Object(n["a"])(a,o,s,!1,null,"1cb293c5",null);e["a"]=d.exports},4894:function(t,e,r){},"857a":function(t,e,r){var o=r("1d80"),s=/"/g;t.exports=function(t,e,r,c){var i=String(o(t)),a="<"+e;return""!==r&&(a+=" "+r+'="'+String(c).replace(s,"&quot;")+'"'),a+">"+i+"</"+e+">"}},"85f1":function(t,e,r){},9911:function(t,e,r){"use strict";var o=r("23e7"),s=r("857a"),c=r("af03");o({target:"String",proto:!0,forced:c("link")},{link:function(t){return s(this,"a","href",t)}})},"99af":function(t,e,r){"use strict";var o=r("23e7"),s=r("d039"),c=r("e8b5"),i=r("861d"),a=r("7b0b"),n=r("50c4"),d=r("8418"),u=r("65f0"),l=r("1dde"),p=r("b622"),h=r("2d00"),f=p("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",m=h>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=l("concat"),y=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:c(t)},w=!m||!g;o({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,o,s,c,i=a(this),l=u(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(c=-1===e?i:arguments[e],y(c)){if(s=n(c.length),p+s>b)throw TypeError(v);for(r=0;r<s;r++,p++)r in c&&d(l,p,c[r])}else{if(p>=b)throw TypeError(v);d(l,p++,c)}return l.length=p,l}})},"9c03":function(t,e,r){"use strict";r("d3b7");var o=r("be3b"),s={methods:{loader:function(t,e,r){return new Promise((function(s,c){o["a"].get(t,{params:e}).then((function(t){console.log("".concat(r," loaded")),console.log(t),s(t)})).catch((function(t){console.log("".concat(r," loading failed")),console.log(t.response)}))}))}}};e["a"]=s},ad0d:function(t,e,r){"use strict";var o=r("da08"),s=r.n(o);s.a},af03:function(t,e,r){var o=r("d039");t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b4a3:function(t,e,r){"use strict";var o=r("4894"),s=r.n(o);s.a},bc9e:function(t,e,r){"use strict";var o=r("85f1"),s=r.n(o);s.a},d81d:function(t,e,r){"use strict";var o=r("23e7"),s=r("b727").map,c=r("1dde"),i=r("ae40"),a=c("map"),n=i("map");o({target:"Array",proto:!0,forced:!a||!n},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},da08:function(t,e,r){}}]);
//# sourceMappingURL=Search.958dca4e.js.map