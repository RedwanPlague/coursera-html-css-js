(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{5082:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"q-pa-md"},[s("q-card",{staticClass:"bg-grey-2",attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[s("p",[s("strong",[e._v("Advisees")])])])]),s("q-separator"),s("q-card-section",[s("div",{staticClass:"q-gutter-sm"},e._l(e.getAdvisees,(function(t){return s("q-btn",e._b({key:t.id,staticClass:"bg-primary text-white",attrs:{flat:""},nativeOn:{click:function(s){e.selectedAdvisee=t,e.onAdviseeClick()}}},"q-btn",t,!1),[e._v("\n            "+e._s(t.id)+"\n          ")])})),1)])],1),s("q-dialog",{attrs:{"full-width":""},model:{value:e.adviseeInfoDialogBox,callback:function(t){e.adviseeInfoDialogBox=t},expression:"adviseeInfoDialogBox"}},[s("q-card",{staticClass:"q-pa-md"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[s("p",[s("strong",[e._v("Student ID:")]),e._v(" "+e._s(e.getAdvisee.id)+"\n            ")]),s("p",[s("strong",[e._v("Name:")]),e._v(" "+e._s(e.getAdvisee.name)+"\n            ")]),s("p",[s("strong",[e._v("Level/Term:")]),e._v(" "+e._s(e.getAdvisee.level)+"/"+e._s(e.getAdvisee.term)+"\n            ")]),s("p",[s("strong",[e._v("Department:")]),e._v(" "+e._s(e.getAdvisee.department)+"\n            ")]),s("p",[s("strong",[e._v("Contact Number:")]),e._v(" "+e._s(e.getAdvisee.contactNumber)+"\n            ")]),s("p",[s("strong",[e._v("Email Address:")]),e._v(" "+e._s(e.getAdvisee.email)+"\n            ")])])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{staticClass:"bg-secondary text-white",attrs:{flat:"",label:"View Grades"},on:{click:e.visitSemesterSelectionPage}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"bg-primary text-white",attrs:{flat:"",label:"Back"}})],1)],1)],1)],1)])},i=[],n=s("ded3"),d=s.n(n),c=s("2f62"),o={name:"AdviseeInformationPage",data(){return{selectedAdvisee:{},adviseeInfoDialogBox:!1}},methods:d()(d()({},Object(c["b"])(["fetchAdvisees","fetchAdvisee"])),{},{async onAdviseeClick(){try{await this.fetchAdvisee(this.selectedAdvisee.id)}catch(e){console.log(e)}this.adviseeInfoDialogBox=!0},visitSemesterSelectionPage(){this.$router.push({name:"adviseeSemesterSelection",params:{studentID:this.getAdvisee.id},query:{}})}}),computed:Object(c["c"])(["getAdvisees","getAdvisee"]),async created(){try{await this.fetchAdvisees()}catch(e){console.log(e)}}},r=o,l=s("2877"),v=s("9989"),g=s("f09f"),p=s("a370"),m=s("eb85"),u=s("9c40"),f=s("24e8"),_=s("4b7e"),b=s("7f67"),A=s("eebe"),h=s.n(A),q=Object(l["a"])(r,a,i,!1,null,"267e62f7",null);t["default"]=q.exports;h()(q,"components",{QPage:v["a"],QCard:g["a"],QCardSection:p["a"],QSeparator:m["a"],QBtn:u["a"],QDialog:f["a"],QCardActions:_["a"]}),h()(q,"directives",{ClosePopup:b["a"]})}}]);