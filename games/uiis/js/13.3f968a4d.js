(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"5d43":function(l,a,t){"use strict";t.r(a);var e=function(){var l=this,a=l.$createElement,t=l._self._c||a;return t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"text-h5 q-mb-md"},[l._v("\n    Halls\n  ")]),l.dataLoading?l._e():t("q-form",{on:{submit:l.updateHalls,reset:l.resetForm}},[l._l(l.halls,(function(a,e){return t("div",{key:e,staticClass:"row q-col-gutter-md q-mb-sm"},[t("q-input",{staticClass:"col-2",attrs:{label:"Hall ID",outlined:"",readonly:a.old,rules:[function(){return!!a.id||"Please Enter Hall ID"}]},model:{value:a.id,callback:function(t){l.$set(a,"id",t)},expression:"hall.id"}}),t("q-input",{staticClass:"col-5",attrs:{label:"Name",rules:[function(){return!!a.name||"Please Enter Name"}],outlined:"",readonly:a.viewing},model:{value:a.name,callback:function(t){l.$set(a,"name",t)},expression:"hall.name"}}),t("teacher-picker",{attrs:{classes:"col-4",label:"Provost",readonly:a.viewing,required:a.old},model:{value:a.provost,callback:function(t){l.$set(a,"provost",t)},expression:"hall.provost"}}),t("div",{staticClass:"col-1"},[a.old?t("q-btn",{attrs:{icon:a.viewing?"edit":"visibility",color:a.viewing?"primary":"black",flat:"",dense:""},on:{click:function(l){a.viewing=!a.viewing}}}):t("q-btn",{attrs:{icon:"delete",color:"primary",flat:"",dense:""},on:{click:function(a){return l.localRemoveHall(e)}}})],1)],1)})),t("div",{staticClass:"row"},[t("div",{staticClass:"col-3"}),t("q-btn",{staticClass:"col-6",attrs:{color:"primary",outline:"",icon:"add",ripple:!1},on:{click:l.localAddHall}})],1),t("div",{staticClass:"col-12 q-mt-lg"},[t("q-btn",{attrs:{label:"Update",type:"submit",color:"primary",unelevated:""}}),t("q-btn",{attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],2),t("q-inner-loading",{attrs:{showing:l.dataLoading}})],1)},s=[],i=t("ded3"),n=t.n(i),o=t("dce8"),r=t("e92d"),c=t("7338"),d=t("88f5"),h=t("b2c5"),p={name:"DeptManagement",components:{TeacherPicker:r["a"]},mixins:[c["a"],d["a"]],data(){return{halls:[],hallList:[],dataLoading:!1}},methods:{fetchHalls(){this.dataLoading=!0,Object(o["a"])("/hall/list",null,"Halls").then((l=>{this.dataLoading=!1,this.hallList=l.data,this.resetForm()})).catch((()=>{this.dataLoading=!1}))},localAddHall(){this.halls.push({id:null,name:null,provost:null,viewing:!1,old:!1})},localRemoveHall(l){this.halls.splice(l,1)},updateHalls(){this.halls.forEach(((l,a)=>{if(console.log(l),l.old){const t=this.hallList[a];t.name===l.name&&l.provost&&t.provost===l.provost.value||this.editHall(l)}else this.createHall(l)})),this.fetchHalls()},createHall(l){this.callCreateApi("/hall/create",{id:l.id,name:l.name,provost:Object(h["a"])(l.provost)},`${l.name} hall`)},editHall(l){this.callEditApi("/hall/update/"+l.id,{name:l.name,provost:Object(h["a"])(l.provost)},`${l.name} hall`)},resetForm(){this.halls=this.hallList.map((l=>n()(n()({},l),{},{viewing:!0,old:!0})))}},created(){this.fetchHalls()}},u=p,m=t("2877"),v=t("9989"),b=t("0378"),f=t("27f9"),g=t("9c40"),w=t("74f7"),H=t("eebe"),q=t.n(H),k=Object(m["a"])(u,e,s,!1,null,null,null);a["default"]=k.exports;q()(k,"components",{QPage:v["a"],QForm:b["a"],QInput:f["a"],QBtn:g["a"],QInnerLoading:w["a"]})}}]);