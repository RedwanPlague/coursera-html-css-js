(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Order"],{"1ac2":function(t,e,r){"use strict";var s=r("42ec"),a=r.n(s);a.a},"3fb4":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-overlay",{staticStyle:{"min-height":"500px"},attrs:{show:!t.orderLoaded,"spinner-large":"","spinner-variant":"primary","spinner-type":"grow",rounded:"sm"}},[t.orderLoaded?r("div",[r("h1",{staticClass:"my-3"},[t._v("Order ID: "+t._s(t.$route.params.id))]),r("hr"),r("hr"),r("h2",{staticClass:"my-3"},[t._v("Products of this order:")]),t._l(t.order.products,(function(e,s){return r("b-card",{key:s,staticClass:"mb-2 shadow",attrs:{value:s}},[r("b-media",{attrs:{"no-body":""}},[r("router-link",{attrs:{to:{name:"CertainProduct",params:{id:e.id}}}},[r("b-media-aside",{attrs:{"vertical-align":"center"}},[r("b-img",{staticClass:"d-flex img-thumbnill align-self-center",attrs:{width:"150",height:"150",src:e.image.link,alt:e.image.name}})],1)],1),r("b-media-body",{staticClass:"my-auto text-center"},[r("b-row",[r("b-col",{staticClass:"my-auto text-center",attrs:{md:"6","align-self":"center"}},[r("span",{},[r("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"black"},attrs:{to:{name:"CertainProduct",params:{id:e.id}}}},[r("strong",[t._v(t._s(e.name))]),r("br")]),t._l(e.specifications,(function(e,s,a){return r("small",{key:a,staticStyle:{color:"grey"}},[t._v(" "+t._s(s)+": "),r("b",[t._v(t._s(e))]),r("br")])}))],2)]),r("b-col",{staticClass:"my-auto text-center",attrs:{md:"2"}},[r("span",{attrs:{id:"prev-price"}},[r("strike",[t._v("৳"+t._s(t.previousPrice(e.curPrice,e.discount)))]),r("strong",{staticClass:"ml-1 d-block",attrs:{id:"discount"}},[t._v(t._s(-e.discount)+"%")])],1),r("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(e.curPrice))]),r("br")]),r("b-col",{staticClass:"text-center",attrs:{md:"4","align-self":"center"}},[r("p",[t._v(t._s(e.quantity)+"x")]),e.hasOwnProperty("rating")?r("b-form-rating",{attrs:{inline:"","no-border":"",readonly:"",variant:"warning"},model:{value:e.rating,callback:function(r){t.$set(e,"rating",r)},expression:"product.rating"}}):t._e(),e.rating||"ordered"===t.order.currentStatus.name||"confirmed"===t.order.currentStatus.name?t._e():r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"ratingModal"+s+t.order.orderID,expression:"'ratingModal'+index+order.orderID"}],attrs:{variant:"success"}},[t._v("Rate it")]),r("b-modal",{ref:"modal",refInFor:!0,attrs:{id:"ratingModal"+s+t.order.orderID,title:"Submit Your Rating","ok-title":"Submit","ok-disabled":!e.localRating||Boolean(e.localReview)&&e.localReview.length>t.maxReviewLength},on:{ok:function(r){return t.rateProduct(t.order.orderID,s,e)}}},[r("b-form-rating",{attrs:{id:"rate"},model:{value:e.localRating,callback:function(r){t.$set(e,"localRating",r)},expression:"product.localRating"}}),r("br"),r("b-form-textarea",{attrs:{id:"review-area",placeholder:"Write a review...",rows:"3","max-rows":"4","no-resize":"",trim:""},on:{keypress:function(r){return t.clip(r,e.localReview,t.maxReviewLength)}},model:{value:e.localReview,callback:function(r){t.$set(e,"localReview",r)},expression:"product.localReview"}}),e.localReview&&e.localReview.length>=t.maxReviewLength?r("small",{staticClass:"float-right",staticStyle:{color:"red"}},[t._v(" Reached limit of "+t._s(t.maxReviewLength)+" characters ")]):t._e()],1)],1)],1)],1)],1)],1)})),r("hr"),r("h2",[t._v("Event Log:")]),r("b-table",{attrs:{items:t.order.status,fields:t.fields},scopedSlots:t._u([{key:"cell(Event_Name)",fn:function(e){return[t._v(" "+t._s(e.item.name)+" ")]}},{key:"cell(Date)",fn:function(e){return[t._v(" "+t._s(t.convertToDate(e.item.date._seconds))+" ")]}},{key:"cell(Comment)",fn:function(e){return[t._v(" "+t._s(e.item.comment?e.item.comment:"No Comments")+" ")]}}],null,!1,3217780830)}),r("hr"),r("div",{staticClass:"my-3"},["delivered"===t.order.currentStatus.name?r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[r("b-button",{staticClass:"mr-2",attrs:{disabled:t.busy,variant:"warning"},on:{click:function(e){return t.requestRefund(t.order)}}},[t._v(" Request Refund ")])],1):t._e(),"ordered"===t.order.currentStatus.name?r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[r("b-button",{attrs:{disabled:t.busy,variant:"danger"},on:{click:function(e){return t.cancelOrder(t.order.orderID)}}},[t._v(" Cancel Order ")])],1):t._e()],1)],2):t._e()])],1)},a=[],o=(r("99af"),r("a9e3"),r("5530")),n=r("9c03"),i=r("c202"),c=r("be3b"),l=r("2f62"),d={name:"CertainOrder",title:function(){return"Order-"+this.$route.params.id},data:function(){return{fields:["Event_Name","Date","Comment"],orders:["Ordered","234","was ordered"],orderLoaded:!1,order:{},maxReviewLength:500,busy:!1}},computed:Object(o["a"])({},Object(l["c"])(["user","userLoaded","getConfig"])),mixins:[n["a"],i["a"]],methods:{convertToDate:function(t){var e=1e3*t,r=new Date(e);return r.toLocaleString()},loadOrder:function(){var t=this,e=this.$route.params.id;c["a"].post("/order/get",{phoneNo:this.user.phoneNo},this.getConfig({orderID:e})).then((function(e){t.order=e.data,t.orderLoaded=!0})).catch((function(e){t.orderLoaded=!0,t.$notification.warning("Invalid order access"),"Invalid order access"===e.response.data.error&&t.$router.push({name:"OrderShower"})}))},rateProduct:function(t,e,r){var s=this,a=r.localRating,o=r.localReview;c["a"].post("/order/rate",{phoneNo:this.user.phoneNo,orderID:Number(t),orderIndex:Number(e),rating:a,review:o},this.getConfig()).then((function(t){r.rating=a,r.localRating=null,r.localReview=null,s.$notification.success("Product-".concat(r.id," rated ").concat(a,"-stars"))})).catch((function(){s.$notification.error("Rating product-".concat(r.id," failed"))}))},requestRefund:function(t){var e=this;this.busy=!0;var r=t.orderID;c["a"].post("/order/refund",{phoneNo:this.user.phoneNo,orderID:r},this.getConfig()).then((function(s){t.currentStatus=new Date(s.data.currentStatus),e.busy=!1,e.$notification.success("Refund requested for order-".concat(r))})).catch((function(t){e.busy=!1,e.$notification.error(t.response.data.error)}))},cancelOrder:function(t){var e=this;this.busy=!0,c["a"].delete("/order/cancel",this.getConfig(null,{phoneNo:this.user.phoneNo,orderID:t})).then((function(r){e.busy=!1,e.$notification.warning("Canceled order-".concat(t)),e.$router.push({name:"OrderShower"})})).catch((function(){e.busy=!1,e.$notification.error("Failed to cancel order-".concat(t))}))},previousPrice:function(t,e){return Math.round(t/(1-e/100))},initialLoader:function(){var t=this;if(this.userLoaded)this.loadOrder();else var e=setInterval((function(){t.userLoaded&&(t.loadOrder(),clearInterval(e))}),"500")}},watch:{$route:function(t,e){this.initialLoader()}},created:function(){this.initialLoader()}},u=d,b=r("2877"),f=Object(b["a"])(u,s,a,!1,null,"416932f7",null);e["default"]=f.exports},"42ec":function(t,e,r){},7156:function(t,e,r){var s=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var o,n;return a&&"function"==typeof(o=e.constructor)&&o!==r&&s(n=o.prototype)&&n!==r.prototype&&a(t,n),t}},"73c9":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.showOrder?r("div",{staticClass:"mx-auto shadow-lg  text-center col-sm-8"},[r("b-card",{staticClass:"my-5",attrs:{"no-body":"","bg-variant":"primary","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[r("p",{staticClass:"text-center"},[r("b-spinner",{staticClass:"mr-3",attrs:{type:"grow",small:""}}),t._v("Success "),r("b-spinner",{staticClass:"ml-3",attrs:{type:"grow",small:""}})],1)]},proxy:!0}],null,!1,2325753560)},[r("b-card-body",[r("p",{staticClass:"text-center"},[t._v("Order Submitted Successfully!!")]),r("p",{staticClass:"text-center"},[t._v("Order ID no: "+t._s(t.order_id))])])],1)],1):t._e(),r("b-toast",{attrs:{id:"my-toast",variant:t.isPossible?"info":"warning"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[r("div",{staticClass:"ml-auto text-center"},[r("b-img",{attrs:{blank:"","blank-color":t.isPossible?"#008000":"#ff5555",width:"12",height:"12"}}),t.isPossible?r("strong",{staticClass:"ml-1"},[t._v("Success!!")]):r("strong",{staticClass:"ml-1"},[t._v("Error!!")])],1)]},proxy:!0}])},[r("p",{staticClass:"text-center"},[r("b-spinner",{staticClass:"mr-3",attrs:{type:"grow",small:""}}),t._v(t._s(t.errorMessage)+" "),r("b-spinner",{staticClass:"ml-3",attrs:{type:"grow",small:""}})],1)]),t.showOrder?t._e():r("b-container",{staticClass:"bg-white",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{md:"8"}},[r("b-container",{staticClass:"bg-light shadow-sm my-2"},[t.canOrder?t._e():r("b-form",{staticClass:"mt-2"},[r("b-row",{},[r("b-col",[r("b-form-group",{attrs:{id:"input-group-1",label:"Full Name:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter your first and last name here"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Phone Number:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"tel",required:"",placeholder:"Enter your phone number here"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"input-group-3",label:"District:","label-for":"input-3"}},[r("b-form-select",{attrs:{id:"input-3",options:t.districts,required:""},model:{value:t.form.district,callback:function(e){t.$set(t.form,"district",e)},expression:"form.district"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Postal Code:","label-for":"input-4"}},[r("b-form-input",{attrs:{id:"input-4",type:"text",required:"",placeholder:"Enter Postal Code"},model:{value:t.form.postalCode,callback:function(e){t.$set(t.form,"postalCode",e)},expression:"form.postalCode"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Address","label-for":"input-5"}},[r("b-form-input",{attrs:{id:"input-5",type:"text",required:"",placeholder:"For example:House# 12,Street# 13,Road# 14"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),r("div",{staticClass:"d-flex justify-content-end"},[r("b-button",{staticStyle:{width:"80px","background-color":"#007bff"},attrs:{squared:""},on:{click:t.resetOnAction}},[t._v("Reset")]),r("b-button",{staticClass:"ml-2",staticStyle:{width:"80px","background-color":"#ff4747"},attrs:{type:"submit",squared:"",right:""},on:{click:t.submitOnAction}},[t._v("Preview")])],1)],1)],1)],1)],1),t._l(t.order.products,(function(e,s){return r("b-container",{key:s,staticClass:"mb-2",attrs:{value:s}},[r("b-card",{staticClass:"shadow-lg"},[r("b-media",{attrs:{"no-body":""}},[r("router-link",{attrs:{to:{name:"CertainProduct",params:{id:e.id}}}},[r("b-media-aside",{attrs:{"vertical-align":"center"}},[r("b-img",{staticClass:"d-flex img-thumbnill align-self-center",attrs:{width:"150",height:"150",src:e.image.link}})],1)],1),r("b-media-body",[r("b-row",[r("b-col",{staticClass:"text-center",attrs:{md:"6","align-self":"center"}},[r("span",{},[r("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"CertainProduct",params:{id:e.id}}}},[r("strong",[t._v(t._s(e.name))]),r("br")]),t._l(e.specifications,(function(e,s,a){return r("small",{key:a,staticStyle:{color:"grey"}},[t._v(" "+t._s(e)+":"+t._s(s)+", ")])}))],2)]),r("b-col",{staticClass:"text-center",attrs:{md:"2","align-self":"center"}},[r("span",{attrs:{id:"prev-price"}},[r("strike",[t._v("৳"+t._s(t.previousPrice(e.curPrice,e.discount)))]),r("strong",{staticClass:"ml-1 d-block",attrs:{id:"discount"}},[t._v(t._s(-e.discount)+"%")])],1),r("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(e.curPrice))]),r("br")]),r("b-col",{staticClass:"text-center",attrs:{md:"4","align-self":"center"}},[r("p",[t._v(t._s(e.quantity)+"x")])])],1)],1)],1)],1)],1)}))],2),r("b-col",{staticClass:"mt-2"},[r("b-card",{staticClass:"mt-2",attrs:{"no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"mb-0"},[t._v("Order Summary")])]},proxy:!0},{key:"footer",fn:function(){return[r("b-container",{staticClass:"d-flex justify-content-center",attrs:{fluid:""}},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[r("div",{staticClass:"text-center "},[r("b-button",{attrs:{id:"confirmButton",disabled:!t.canOrder,pill:""},on:{click:t.sendOrder}},[t._v(" Confirm Order ")])],1)])],1)]},proxy:!0}],null,!1,1632848094)},[r("b-card-body",[r("dl",{staticClass:"row"},[r("dt",{staticClass:"col-6"},[t._v("Subtotal("+t._s(t.itemCount)+"/"+t._s(t.productCount)+" items)")]),r("dd",{staticClass:"col-6"},[t._v("৳"+t._s(t.order.subTotal))]),r("dt",{staticClass:"col-6"},[t._v("Delivery charge")]),r("dd",{staticClass:"col-6"},[t._v("৳"+t._s(t.deliveryCharge))]),r("dt",{staticClass:"col-6"},[t._v("Total")]),r("dd",{staticClass:"col-6"},[t._v("৳"+t._s(t.deliveryCharge+t.order.subTotal))])])])],1)],1)],1)],1)],1)},a=[],o=(r("13d5"),r("b0c0"),r("5530")),n=r("be3b"),i=r("2f62"),c={name:"OrderSubmitDetails",title:"Order Submission",data:function(){return{isPossible:"",errorMessage:"",busy:!1,order_id:"",showOrder:!1,order:this.$route.query.order,canOrder:!1,form:{name:"",phone:"",email:"",district:"",postalCode:"",address:""}}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["getConfig","user","selectedProducts","districts"])),{},{productCount:function(){return this.order.products?this.order.products.length:""},itemCount:function(){return this.order.products?this.order.products.reduce((function(t,e){return t+e.quantity}),0):""},deliveryCharge:function(){return"Bogura"===this.form.district?0:60}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["cartRemove"])),{},{onHidden:function(){this.$refs.button.focus()},previousPrice:function(t,e){return Math.round(t/(1-e/100))},submitOnAction:function(){this.canOrder=!0},sendOrder:function(){var t=this;this.busy=!0,n["a"].post("/order/add",{products:this.order.products,phoneNo:this.form.phone,email:this.form.email,name:this.form.name,district:this.form.district,postalCode:this.form.postalCode,address:this.form.address,userPhoneNo:this.user.phoneNo},this.getConfig()).then((function(e){t.busy=!1,t.dismissableAlert=!0,t.order_id=e.data.orderID,t.showOrder=!0,t.selectedProducts.length&&t.cartRemove(t.selectedProducts)})).catch((function(){t.busy=!1,t.isPossible=!1,t.errorMessage="order submission failed",t.$bvToast.show("my-toast")}))},resetOnAction:function(){this.form={name:this.user.name,phone:this.user.phoneNo,email:this.user.email,district:this.user.district,postalCode:this.user.postalCode,address:this.user.address}}}),created:function(){this.order&&this.order.products?this.resetOnAction():this.$router.push({name:"Home"})}},l=c,d=(r("74b2"),r("2877")),u=Object(d["a"])(l,s,a,!1,null,"5e0ee5df",null);e["default"]=u.exports},"74b2":function(t,e,r){"use strict";var s=r("7b6e"),a=r.n(s);a.a},"7b6e":function(t,e,r){},"9c03":function(t,e,r){"use strict";r("d3b7");var s=r("be3b"),a={methods:{loader:function(t,e,r){return new Promise((function(r,a){s["a"].get(t,{params:e}).then((function(t){r(t)})).catch((function(){}))}))}}};e["a"]=a},a9e3:function(t,e,r){"use strict";var s=r("83ab"),a=r("da84"),o=r("94ca"),n=r("6eeb"),i=r("5135"),c=r("c6b6"),l=r("7156"),d=r("c04e"),u=r("d039"),b=r("7c73"),f=r("241c").f,m=r("06cf").f,h=r("9bf2").f,p=r("58a8").trim,v="Number",g=a[v],y=g.prototype,_=c(b(y))==v,C=function(t){var e,r,s,a,o,n,i,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(o=l.slice(2),n=o.length,i=0;i<n;i++)if(c=o.charCodeAt(i),c<48||c>a)return NaN;return parseInt(o,s)}return+l};if(o(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(_?u((function(){y.valueOf.call(r)})):c(r)!=v)?l(new g(C(e)),r,k):C(e)},x=s?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;x.length>O;O++)i(g,w=x[O])&&!i(k,w)&&h(k,w,m(g,w));k.prototype=y,y.constructor=k,n(a,v,k)}},f0e2:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bg-light",attrs:{fluid:""}},[t.cartProducts.length?t._e():r("div",{staticClass:"mx-auto shadow-lg  text-center col-sm-8"},[r("b-card",{staticClass:"my-5",attrs:{"no-body":"","bg-variant":"info","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[r("p",{staticClass:"text-center"},[r("b-spinner",{staticClass:"mr-3",attrs:{type:"grow",variant:"warning",small:""}}),t._v("Attention!! "),r("b-spinner",{staticClass:"ml-3",attrs:{type:"grow",variant:"warning",small:""}})],1)]},proxy:!0}],null,!1,522353389)},[r("b-card-body",[r("p",{staticClass:"text-center"},[t._v("There is no product in Bag")]),r("p",{staticClass:"text-center"},[t._v("Enjoy shopping with Azraar")])])],1)],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{md:"8"}},[r("b-container",[t.cartProducts.length?r("b-row",{staticClass:"my-2"},[r("b-col",{staticClass:"align-self-center"},[r("span",{staticStyle:{cursor:"pointer"}},[t.allSelected?r("b-icon",{attrs:{scale:"1.1",icon:"check-square"},on:{click:t.handleAllDeselect}}):r("b-icon",{attrs:{icon:"square"},on:{click:t.handleAllSelect}})],1),t._v(" "+t._s(t.allSelected?"Deselect":"Select")+" All ")]),t.cartProducts.length?r("b-col",{staticStyle:{"text-align":"right"}},[r("b-button",{attrs:{variant:"danger",disabled:0===this.selectedProducts.length||t.busyInDelete},on:{click:t.handleDeleteSelected}},[t._v(" Delete Selected ")])],1):t._e()],1):t._e()],1),r("b-container",{staticClass:"p-0",attrs:{fluid:""}},t._l(t.cartProducts,(function(e,s){return r("b-container",{key:s,staticClass:"mb-2",attrs:{value:s},model:{value:t.selectedProducts,callback:function(e){t.selectedProducts=e},expression:"selectedProducts"}},[r("b-card",{staticClass:"shadow-sm"},[r("b-row",[r("b-col",{staticClass:"align-self-center",attrs:{cols:"1"}},[r("div",{staticStyle:{cursor:"pointer"}},[t.isSelected(s)?r("b-icon",{attrs:{scale:"1.1",icon:"check-square"},on:{click:function(e){return t.handleCartDeselect(s)}}}):r("b-icon",{attrs:{icon:"square"},on:{click:function(e){return t.handleCartSelect(s)}}})],1)]),r("b-col",{attrs:{cols:"11"}},[r("b-media",{attrs:{"no-body":""}},[r("b-media-aside",{attrs:{"vertical-align":"center"}},[r("router-link",{attrs:{to:{name:"CertainProduct",params:{id:e.id}}}},[r("b-img",{staticClass:"d-flex img-thumbnill align-self-center",attrs:{width:"150",height:"150",src:e.image.link}})],1)],1),r("b-media-body",[r("b-row",{staticClass:"ml-1"},[r("b-col",{staticClass:"text-center p-0 align-self-center",attrs:{md:"6"}},[r("span",{},[r("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"black"},attrs:{to:{name:"CertainProduct",params:{id:e.id}}}},[r("strong",[t._v(t._s(e.name))]),r("br")]),t._l(e.specifications,(function(e,s,a){return r("small",{key:a,staticStyle:{color:"grey"}},[t._v(" "+t._s(s)+": "),r("b",[t._v(t._s(e))]),r("br")])}))],2)]),r("b-col",{staticClass:"text-center p-0",attrs:{md:"2"}},[r("span",{attrs:{id:"prev-price"}},[r("strike",[t._v("৳"+t._s(t.previousPrice(e.curPrice,e.discount)))]),r("strong",{staticClass:"ml-1 d-block",attrs:{id:"discount"}},[t._v(t._s(-e.discount)+"%")])],1),r("span",{attrs:{id:"cur-price"}},[t._v(" ৳"+t._s(e.curPrice))]),r("br"),r("b-avatar",{staticClass:"mt-md-4",staticStyle:{transform:"scale(0.85,0.85)"},attrs:{button:"",icon:"trash",variant:"danger",disabled:t.busyInDelete},on:{click:function(e){return t.handleCartRemove(s)}}})],1),r("b-col",{staticClass:"text-center p-0 align-self-center",attrs:{md:"4"}},[r("div",{staticClass:"d-inline"},[r("b-button",{staticClass:"text-center mr-1 px-2",attrs:{variant:"white"},on:{click:function(t){e.quantity++}}},[t._v("+")]),r("span",[t._v(" "+t._s(e.quantity)+" ")]),r("b-button",{staticClass:"text-center ml-1 px-2",attrs:{variant:"white"},on:{click:function(t){e.quantity>1?e.quantity--:e.quantity}}},[t._v("-")])],1)])],1)],1)],1)],1)],1)],1)],1)})),1)],1),t.cartProducts.length?r("b-col",{staticClass:"mt-md-5",attrs:{md:"4"}},[r("b-card",{staticClass:"mt-md-3",attrs:{no:"",body:""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"mb-0"},[t._v("Order Summary")])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"text-center"},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy1,opacity:"0.4","spinner-small":"","spinner-variant":"primary"},on:{hidden:t.onHidden}},[r("b-button",{attrs:{id:"proceedButton",disabled:!t.selectedProducts.length||t.busy1,pill:""},on:{click:t.handleProceeding}},[t._v(" Proceed to Pay ")])],1)],1)]},proxy:!0}],null,!1,1075717364)},[r("b-card-body",[r("dl",{staticClass:"row"},[r("dt",{staticClass:"col-6"},[t._v("Subtotal("+t._s(t.itemCount)+"/"+t._s(t.selectedProducts.length)+" items)")]),r("dd",{staticClass:"col-6"},[t._v("৳"+t._s(t.order.subTotal))]),r("dt",{staticClass:"col-6"},[t._v("Delivery charge")]),r("dd",{staticClass:"col-6"},[t._v("৳"+t._s(t.order.deliveryCharge))]),r("dt",{staticClass:"col-6"},[t._v("Total")]),r("dd",{staticClass:"col-6"},[t._v("৳"+t._s(t.total))])])])],1)],1):t._e()],1)],1)},a=[],o=r("b85c"),n=r("5530"),i=r("2f62"),c={name:"CartDetails",title:"Bag Details",data:function(){return{busy1:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["user","authToken","cartProducts","selectedProducts","allSelected","itemCount","isSelected","busyInDelete"])),{},{order:function(){var t,e={products:[],deliveryCharge:"Bogura"===this.user.district?0:60,subTotal:0},r=Object(o["a"])(this.selectedProducts);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(s<this.cartProducts.length){var a=this.cartProducts[s];e.products.push(a),e.subTotal+=a.curPrice*(1+a.vat/100)*a.quantity}}}catch(n){r.e(n)}finally{r.f()}return e.subTotal=Math.round(e.subTotal),e},total:function(){return this.order.subTotal?this.order.deliveryCharge+this.order.subTotal:0}}),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["cartRemove","loadCart","handleCartSelect","handleCartDeselect","handleAllSelect","handleAllDeselect","handleCartRemove","handleDeleteSelected"])),{},{onHidden:function(){this.$refs.button.focus()},previousPrice:function(t,e){return Math.round(t/(1-e/100))},handleProceeding:function(){this.authToken?(this.busy1=!0,this.$router.push({name:"OrderSubmitDetails",query:{order:this.order,removed:{indices:this.selectedProducts}}})):this.$bvModal.show("login-modal")}}),created:function(){this.loadCart()}},l=c,d=(r("1ac2"),r("2877")),u=Object(d["a"])(l,s,a,!1,null,"324de4b9",null);e["default"]=u.exports},f51c:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.orders.length?r("div",[r("b-container",{attrs:{fluid:""}},[r("b-toast",{attrs:{id:"my-toast",variant:t.isPossible?"info":"warning"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[r("div",{staticClass:"ml-auto text-center"},[r("b-img",{attrs:{blank:"","blank-color":t.isPossible?"#008000":"#ff5555",width:"12",height:"12"}}),t.isPossible?r("strong",{staticClass:"ml-1"},[t._v("Success!!")]):r("strong",{staticClass:"ml-1"},[t._v("Error!!")])],1)]},proxy:!0}],null,!1,4061889654)},[r("p",{staticClass:"text-center"},[r("b-spinner",{staticClass:"mr-3",attrs:{type:"grow",small:""}}),t._v(t._s(t.errorMessage)+" "),r("b-spinner",{staticClass:"ml-3",attrs:{type:"grow",small:""}})],1)]),r("h1",{staticClass:" my-2"},[t._v("Order History")]),r("hr"),r("hr"),r("b-row",[r("b-overlay",{staticClass:"d-inline block mx-3",attrs:{show:t.busyReload,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[r("b-button",{staticStyle:{float:"left"},attrs:{variant:"success"},on:{click:t.reloadAllCurrentOrders}},[t._v("Reload")])],1),r("b-form",{staticClass:"ml-auto mr-3",staticStyle:{float:"right",width:"400px"},on:{submit:function(e){return t.clicking(t.goToOrderID)}}},[r("b-input-group",[r("b-form-input",{attrs:{id:"input-1",type:"number",min:1e4,placeholder:"Go to order"},model:{value:t.goToOrderID,callback:function(e){t.goToOrderID=e},expression:"goToOrderID"}}),r("b-input-group-append",[r("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("Go")])],1)],1)],1)],1),r("hr"),r("b-table",{staticClass:"mx-3",attrs:{items:t.orders,fields:t.fields,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(show_details)",fn:function(e){return[r("router-link",{attrs:{to:{name:"CertainOrder",params:{id:e.item.orderID}}}},[r("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"success"}},[t._v(" Show Details ")])],1)]}},{key:"cell(order_date)",fn:function(e){return[t._v(" "+t._s(t.convertToDate(e.item.ordered._seconds))+" ")]}},{key:"cell(status)",fn:function(e){return[t._v(" "+t._s(e.item.currentStatus.name)),r("br"),t._v(" "+t._s(t.convertToDate(e.item.currentStatus.date._seconds))+" ")]}},{key:"cell(total)",fn:function(e){return[t._v(" ৳"+t._s(e.item.total)+" ")]}},{key:"cell(options)",fn:function(e){return["delivered"===e.item.currentStatus.name?r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[r("b-button",{staticClass:"mr-2",attrs:{size:"sm",disabled:t.busy,variant:"warning"},on:{click:function(r){return t.requestRefund(e.item)}}},[t._v(" Request Refund ")])],1):t._e(),"ordered"===e.item.currentStatus.name?r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[r("b-button",{attrs:{size:"sm",disabled:t.busy,variant:"danger"},on:{click:function(r){return t.cancelOrder(e.item.orderID)}}},[t._v(" Cancel Order ")])],1):t._e()]}}],null,!1,699521764)}),r("b-container",{staticClass:"d-flex justify-content-center"},[r("b-overlay",{staticClass:"d-inline block",attrs:{show:t.busy1,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[t.orderLoadingDone?t._e():r("b-button",{staticStyle:{"background-color":"#007bff"},attrs:{disabled:t.busy1},on:{click:t.loadOrders}},[t._v(" Load More ")])],1)],1),r("hr")],1)],1):t._e(),t.isDone&&!t.orders.length?r("div",{staticClass:"mx-auto shadow-lg bg-info text-center col-sm-8"},[r("b-card",{staticClass:"my-5",attrs:{"no-body":"","bg-variant":"info","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[r("p",{staticClass:"text-center"},[r("b-spinner",{staticClass:"mr-3",attrs:{type:"grow",variant:"warning",small:""}}),t._v("Attention!! "),r("b-spinner",{staticClass:"ml-3",attrs:{type:"grow",variant:"warning",small:""}})],1)]},proxy:!0}],null,!1,522353389)},[r("b-card-body",[r("p",{staticClass:"text-center"},[t._v("There is no order to show")]),r("p",{staticClass:"text-center"},[t._v("Enjoy shopping with Azraar")])])],1)],1):t._e()])},a=[],o=(r("99af"),r("4de4"),r("5530")),n=r("2f62"),i=r("be3b"),c={name:"OrderShower",title:"My Order History",data:function(){return{fields:["orderID","order_date","Total","status","show_details","options"],orders:[],orderLoadingDone:!0,image:{link:"https://static-01.daraz.com.bd/p/7883ac9ce3be09d4e7e9e44f139e8d68.jpg"},errorMessage:"",isPossible:"",busy:!1,busy1:!1,busy2:!1,busyReload:!1,goToOrderID:null,isDone:!1}},computed:Object(o["a"])({},Object(n["c"])(["getConfig","user","userLoaded"])),methods:{loadOrders:function(){var t=this;this.orderLoadingDone||(this.busy1=!0);var e=this.orders.length,r="24";i["a"].post("/orders/all",{phoneNo:this.user.phoneNo},this.getConfig({offset:e,limit:r})).then((function(e){t.orders=t.orders.concat(e.data.orders),t.isDone=!0,t.busy1=!1,t.orderLoadingDone=e.data.orders.length<r})).catch((function(){t.$notification.error("Failed to load orders")}))},reloadAllCurrentOrders:function(){var t=this;this.orderLoadingDone||(this.busyReload=!0);var e=0,r=this.orders.length||"24";i["a"].post("/orders/all",{phoneNo:this.user.phoneNo},this.getConfig({offset:e,limit:r})).then((function(e){t.orders=e.data.orders,t.busyReload=!1,t.orderLoadingDone=e.data.orders.length<r})).catch((function(){t.$notification.error("Failed to reload orders")}))},clicking:function(t){t&&this.$router.push({name:"CertainOrder",params:{id:t}})},requestRefund:function(t){var e=this;this.busy=!0;var r=t.orderID;i["a"].post("/order/refund",{phoneNo:this.user.phoneNo,orderID:r},this.getConfig()).then((function(s){t.currentStatus=new Date(s.data.currentStatus),e.busy=!1,e.isPossible=!0,e.message="refund requested for order "+r,e.$notification.success("Refund requested for order-".concat(r))})).catch((function(t){e.busy=!1,e.isPossible=!1,e.errorMessage=t.response.data.error,e.$bvToast.show("my-toast"),e.$notification.error("Failed to request refund for order-".concat(r))}))},cancelOrder:function(t){var e=this;this.busy=!0,i["a"].delete("/order/cancel",this.getConfig(null,{phoneNo:this.user.phoneNo,orderID:t})).then((function(r){e.busy=!1,e.$notification.success("Canceled order-".concat(t)),e.orders=e.orders.filter((function(e){return e.orderID!==t}))})).catch((function(){e.busy=!1,e.$notification.error("Failed to cancel order-".concat(t))}))},previousPrice:function(t,e){return Math.round(t/(1-e/100))},convertToDate:function(t){var e=t,r=1e3*e,s=new Date(r),a=s.toLocaleString();return a},getDiff:function(t,e){var r=new Date,s=this.convertToDate(t),a=r.getTime()-s;return"delivered"===e&&a<7}},created:function(){var t=this;if(this.userLoaded)this.loadOrders();else var e=setInterval((function(){t.userLoaded&&(t.loadOrders(),clearInterval(e))}),"500")}},l=c,d=r("2877"),u=Object(d["a"])(l,s,a,!1,null,"1e4b78ef",null);e["default"]=u.exports}}]);
//# sourceMappingURL=Order.c99d6cce.js.map