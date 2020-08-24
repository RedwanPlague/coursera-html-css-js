(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Account"],{1631:function(t,s,e){"use strict";var a=e("203c"),o=e.n(a);o.a},"203c":function(t,s,e){},6136:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"my-3"},[e("b-card",[e("b-card-title",[e("b-icon",{staticClass:"rounded mr-1",attrs:{icon:"person-circle",variant:"dark"}}),t._v(" User "),e("router-link",{attrs:{tag:"span",id:"edit-link",to:{name:"UserProfileEdit"}}},[t._v(" Edit "),e("b-icon",{attrs:{icon:"pencil-square"}})],1)],1),e("b-list-group",[e("b-list-group-item",[e("span",{staticClass:"info-label"},[e("b-icon",{staticClass:"rounded mr-1 my-1",attrs:{icon:"person","font-scale":"1.4",variant:"dark"}})],1),e("span",{staticClass:"info-label-more"},[t._v("Name:")]),e("span",{staticClass:"info-value"},[t._v(t._s(t.user.name||"-"))])]),e("b-list-group-item",[e("span",{staticClass:"info-label"},[e("b-icon",{staticClass:"rounded mr-1 my-1",attrs:{icon:"telephone","font-scale":"1.4",variant:"dark"}})],1),e("span",{staticClass:"info-label-more"},[t._v("Phone:")]),e("span",{staticClass:"info-value"},[t._v(t._s(t.user.phoneNo||"-"))])]),e("b-list-group-item",[e("span",{staticClass:"info-label"},[e("b-icon",{staticClass:"rounded mr-1 my-1",attrs:{icon:"envelope","font-scale":"1.4",variant:"dark"}})],1),e("span",{staticClass:"info-label-more"},[t._v("Email:")]),e("span",{staticClass:"info-value"},[t._v(t._s(t.user.email||"-"))])]),e("b-list-group-item",[e("span",{staticClass:"info-label"},[e("b-icon",{staticClass:"rounded mr-1 my-1",attrs:{icon:"geo","font-scale":"1.4",variant:"dark"}})],1),e("span",{staticClass:"info-label-more"},[t._v("District:")]),e("span",{staticClass:"info-value"},[t._v(t._s(t.user.district||"-"))])]),e("b-list-group-item",[e("span",{staticClass:"info-label"},[e("b-icon",{staticClass:"rounded mr-1 my-1",attrs:{icon:"geo","font-scale":"1.4",variant:"dark"}})],1),e("span",{staticClass:"info-label-more"},[t._v("Postal Code:")]),e("span",{staticClass:"info-value"},[t._v(t._s(t.user.postalCode||"-"))])]),e("b-list-group-item",[e("span",{staticClass:"info-label"},[e("b-icon",{staticClass:"rounded mr-1 my-1",attrs:{icon:"geo-alt","font-scale":"1.4",variant:"dark"}})],1),e("span",{staticClass:"info-label-more"},[t._v("Address:")]),e("span",{staticClass:"info-value"},[t._v(t._s(t.user.address||"-"))])])],1),e("b-dropdown-divider"),e("router-link",{attrs:{to:{name:"OrderShower"}}},[e("span",{staticStyle:{"font-size":"1.5em"}},[t._v("My Orders")]),e("b-icon",{staticClass:"mx-2",attrs:{icon:"arrow-up-right-square","font-scale":"1.3"}})],1)],1)],1)},o=[],r=e("5530"),n=e("2f62"),i={name:"UserProfile",computed:Object(r["a"])({},Object(n["c"])(["user"]))},l=i,c=(e("1631"),e("2877")),u=Object(c["a"])(l,a,o,!1,null,"4c3312d7",null);s["default"]=u.exports},cd7a:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",[e("b-card",{staticClass:"my-2"},[e("b-form",{on:{submit:t.submitInfo}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"envelope-fill"}})],1),e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email"},model:{value:t.localUser.email,callback:function(s){t.$set(t.localUser,"email",s)},expression:"localUser.email"}})],1)],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"person-fill"}})],1),e("b-form-input",{attrs:{id:"input-2",placeholder:"Enter name"},model:{value:t.localUser.name,callback:function(s){t.$set(t.localUser,"name",s)},expression:"localUser.name"}})],1)],1),e("b-form-group",{attrs:{id:"input-group-3",label:"District:","label-for":"input-3"}},[e("b-form-select",{attrs:{id:"input-3",options:t.districts,required:""},model:{value:t.localUser.district,callback:function(s){t.$set(t.localUser,"district",s)},expression:"localUser.district"}})],1),e("b-form-group",{attrs:{id:"input-group-4",label:"Postal Code:","label-for":"input-4"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"geo-alt"}})],1),e("b-form-input",{attrs:{id:"input-4",placeholder:"Enter Postal Code"},model:{value:t.localUser.postalCode,callback:function(s){t.$set(t.localUser,"postalCode",s)},expression:"localUser.postalCode"}})],1)],1),e("b-form-group",{attrs:{id:"input-group-5",label:"Your Default Address:","label-for":"input-5"}},[e("b-input-group",[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"geo-alt"}})],1),e("b-form-input",{attrs:{id:"input-5",placeholder:"Enter Default Address"},model:{value:t.localUser.address,callback:function(s){t.$set(t.localUser,"address",s)},expression:"localUser.address"}})],1)],1),e("b-overlay",{staticClass:"d-inline block mx-3",attrs:{show:t.updateBusy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[e("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.updateBusy}},[t._v("Update")])],1),e("b-button",{attrs:{variant:"danger"},on:{click:t.resetInfo}},[t._v("Reset")])],1)],1),e("b-card",{staticClass:"my-2"},[e("b-card-title",[e("b-button",{attrs:{variant:"warning"},on:{click:function(s){t.showPasswordForm=!t.showPasswordForm}}},[t._v("Change Password")])],1),t.showPasswordForm?e("b-form",{on:{submit:t.submitPassword}},[e("b-form-group",{attrs:{id:"input-group-6",label:"Old Password","label-for":"input-6"}},[e("b-input-group",[e("b-form-input",{attrs:{id:"input-6",type:t.selectIcon?"password":"text",placeholder:"Enter Old Password",required:""},model:{value:t.oldPassword,callback:function(s){t.oldPassword=s},expression:"oldPassword"}}),e("b-input-group-append",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:t.selectIcon?"eye-slash-fill":"eye-fill"},on:{click:function(s){t.selectIcon=!t.selectIcon}}})],1)],1)],1),e("b-form-group",{attrs:{id:"input-group-7",label:"New Password","label-for":"input-7"}},[e("b-input-group",[e("b-form-input",{attrs:{id:"input-7",type:t.selectIcon1?"password":"text",placeholder:"Enter New Password",required:""},model:{value:t.newPassword,callback:function(s){t.newPassword=s},expression:"newPassword"}}),e("b-input-group-append",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:t.selectIcon1?"eye-slash-fill":"eye-fill"},on:{click:function(s){t.selectIcon1=!t.selectIcon1}}})],1)],1)],1),e("b-overlay",{staticClass:"d-inline block mx-3",attrs:{show:t.changeBusy,opacity:"0.4","spinner-small":"","spinner-variant":"primary"}},[e("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.changeBusy}},[t._v("Change")])],1),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)],1)},o=[],r=e("5530"),n=e("2f62"),i={name:"UserProfileEdit",data:function(){return{selectIcon:!0,selectIcon1:!0,localUser:null,oldPassword:null,newPassword:null,showPasswordForm:!1,updateBusy:!1,changeBusy:!1}},computed:Object(r["a"])({},Object(n["c"])(["user","districts"])),methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["changeInfo","changePassword"])),{},{submitInfo:function(t){var s=this;t.preventDefault(),this.updateBusy=!0,this.changeInfo(this.localUser).then((function(t){s.updateBusy=!1,console.log(t)})).catch((function(t){s.updateBusy=!1,console.log(t.response)}))},resetInfo:function(){this.localUser=JSON.parse(JSON.stringify(this.user))},submitPassword:function(t){var s=this;t.preventDefault(),this.changeBusy=!0,this.changePassword({phoneNo:this.user.phoneNo,oldPassword:this.oldPassword,newPassword:this.newPassword}).then((function(t){console.log(t),s.showPasswordForm=!1,s.changeBusy=!1})).catch((function(t){s.changeBusy=!1,console.log(t.response)}))}}),created:function(){this.resetInfo()}},l=i,c=e("2877"),u=Object(c["a"])(l,a,o,!1,null,"df5264e2",null);s["default"]=u.exports}}]);
//# sourceMappingURL=Account.107c02a6.js.map