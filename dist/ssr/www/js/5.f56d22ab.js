(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"11f0":function(e,t,s){},5603:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container2 row"},[s("div",{staticClass:"msgs col-6"},[s("div",{staticClass:"title2"},[e._v(e._s(e.$t("my.info.contactMethod")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"item",attrs:{type:"text",placeholder:e.$t("my.info.emailAddress")},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"item",attrs:{type:"text",placeholder:e.$t("my.info.contactPhoneNumber")},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}}),s("div",{staticClass:"new text-white text-center btn",on:{click:e.update}},[e._v(e._s(e.$t("my.info.Update")))])]),s("div",{staticClass:"notices col-6"})])},a=[],o=(s("b0c0"),s("ded3")),r=s.n(o),i=(s("96cf"),s("c973")),u=s.n(i),l={data:function(){return{subscribe:"",invoice:"",radio1:"",mail:"",phone:"",value:[],options:[{value:"beijing",label:"北京",children:[{value:"dongcheng",label:"东城区"},{value:"xicheng",label:"西城区"},{value:"haidian",label:"海淀区"},{value:"fengtai",label:"龙华区"}]},{value:"shenzhen",label:"深圳",children:[{value:"futian",label:"福田区"},{value:"nanshan",label:"南山区"},{value:"longgang",label:"龙岗区"},{value:"longhua",label:"龙华区"}]}],user:{email:"",phone:""},address:{name:"",phone:"",country:"",city:"",detail:""}}},created:function(){console.log("mine info created")},mounted:function(){var e=this;console.log("mine info mounted"),setTimeout((function(){e.$store.state.seller?e.address.name=e.$store.state.user.info.firstname+" "+e.$store.state.user.info.lastname:e.address.name=e.$store.state.user.info.name,e.user.email=e.$store.state.user.info.email,e.user.phone=e.$store.state.user.info.phone,e.address.name=e.$store.state.user.info.address[0].name,e.address.phone=e.$store.state.user.info.address[0].phone,e.address.country=e.$store.state.user.info.address[0].country,e.address.city=e.$store.state.user.info.address[0].city,e.address.detail=e.$store.state.user.info.address[0].address}),300)},computed:{userInfo:function(){return this.$store.state.user.info}},methods:{update:function(){var e=this;return u()(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/updateUserAddress",r()(r()({},e.address),{},{userId:e.$store.state.user.info.userId}));case 2:return s=t.sent,console.log("updateUserAddress",s),s.success||e.$q.notify({position:"top",timeout:1500,message:e.$t("my.info.UpdateFailed"),color:"negative"}),t.next=7,e.$store.dispatch("user/updateUser",r()(r()({},e.user),{},{userId:e.$store.state.user.info.userId}));case 7:n=t.sent,n.success||e.$q.notify({position:"top",timeout:1500,message:e.$t("my.info.UpdateFailed"),color:"negative"}),e.$store.commit("user/setUserInfoItem",{email:e.user.email,phone:e.user.phone}),e.$q.notify({position:"top",timeout:1500,message:e.$t("my.info.updateCompleted"),color:"positive"});case 11:case"end":return t.stop()}}),t)})))()}}},d=l,c=(s("7d0a"),s("fe6a"),s("2877")),m=s("27f9"),p=s("eebe"),f=s.n(p),v=Object(c["a"])(d,n,a,!1,null,"46c148e8",null);t["default"]=v.exports;f()(v,"components",{QInput:m["a"]})},"7d0a":function(e,t,s){"use strict";s("11f0")},"8dec":function(e,t,s){},fe6a:function(e,t,s){"use strict";s("8dec")}}]);