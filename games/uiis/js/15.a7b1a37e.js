(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"90ca":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"text-h5 q-mb-md"},[t._v("\n    Slots\n  ")]),t.dataLoading?t._e():e("q-form",{on:{submit:t.updateSlots,reset:t.resetForm}},[t._l(t.slots,(function(i,a){return e("div",{key:a,staticClass:"row q-col-gutter-md q-mb-sm"},[e("q-input",{staticClass:"col-3",attrs:{label:"Slot No",outlined:"","stack-label":"",readonly:i.old,rules:[function(){return!!i.id||"Please Enter Slot No"}]},model:{value:i.id,callback:function(e){t.$set(i,"id",e)},expression:"slot.id"}}),e("q-input",{staticClass:"col-4",attrs:{label:"Starting Time","stack-label":"",type:"time",rules:[function(){return!!i.startingTime||"Please Enter Starting Time"}],outlined:"",readonly:i.viewing},model:{value:i.startingTime,callback:function(e){t.$set(i,"startingTime",e)},expression:"slot.startingTime"}}),e("q-input",{staticClass:"col-4",attrs:{label:"Duration","stack-label":"",type:"number",min:"0",step:"5",suffix:"minutes",outlined:"",readonly:i.viewing,rules:[function(){return!!i.duration||"Please Enter Duration"}]},model:{value:i.duration,callback:function(e){t.$set(i,"duration",e)},expression:"slot.duration"}}),e("div",{staticClass:"col-1"},[i.old?e("q-btn",{attrs:{icon:i.viewing?"edit":"visibility",color:i.viewing?"primary":"black",flat:"",dense:""},on:{click:function(t){i.viewing=!i.viewing}}}):e("q-btn",{attrs:{icon:"delete",color:"primary",flat:"",dense:""},on:{click:function(i){return t.localRemoveSlot(a)}}})],1)],1)})),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"}),e("q-btn",{staticClass:"col-6",attrs:{color:"primary",outline:"",icon:"add",ripple:!1},on:{click:t.localAddSlot}})],1),e("div",{staticClass:"col-12 q-mt-lg"},[e("q-btn",{attrs:{label:"Update",type:"submit",color:"primary",unelevated:""}}),e("q-btn",{attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],2),e("q-inner-loading",{attrs:{showing:t.dataLoading}})],1)},s=[],l=e("dce8"),n=e("a796"),o=e("7338"),r=e("88f5"),d={name:"SlotManagement",mixins:[o["a"],r["a"]],data(){return{slots:[],slotList:[],dataLoading:!1}},methods:{fetchSlots(){this.dataLoading=!0,Object(l["a"])("/slot/list",null,"Slots").then((t=>{this.dataLoading=!1,this.slotList=t.data,this.resetForm()})).catch((()=>{this.dataLoading=!1}))},localAddSlot(){this.slots.push({id:null,startingTime:null,duration:null,viewing:!1,old:!1})},localRemoveSlot(t){this.slots.splice(t,1)},updateSlots(){this.slots.forEach(((t,i)=>{if(t.old){const e=this.slotList[i];e.startingTime===Object(n["b"])(t.startingTime)&&e.duration===parseInt(t.duration)||this.editSlot(t)}else this.createSlot(t)})),this.fetchSlots()},createSlot(t){this.callCreateApi("/slot/create",{id:t.id,startingTime:Object(n["b"])(t.startingTime),duration:t.duration},`Slot ${t.id}`)},editSlot(t){this.callEditApi("/slot/update/"+t.id,{startingTime:Object(n["b"])(t.startingTime),duration:t.duration},`Slot ${t.id}`)},resetForm(){this.slots=this.slotList.map((t=>({id:t.id,startingTime:Object(n["e"])(t.startingTime),duration:t.duration,viewing:!0,old:!0})))}},created(){this.fetchSlots()}},c=d,u=e("2877"),m=e("9989"),g=e("0378"),p=e("27f9"),b=e("9c40"),h=e("74f7"),f=e("eebe"),v=e.n(f),S=Object(u["a"])(c,a,s,!1,null,null,null);i["default"]=S.exports;v()(S,"components",{QPage:m["a"],QForm:g["a"],QInput:p["a"],QBtn:b["a"],QInnerLoading:h["a"]})}}]);