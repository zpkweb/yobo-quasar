(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"36e8":function(t,e,n){t.exports=n.p+"img/banner-man.466352da.png"},"4fda":function(t,e,n){"use strict";n("53cb")},"53cb":function(t,e,n){},5719:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"banner relative-position"},[s("q-img",{attrs:{src:n("36e8"),height:"240px"}}),s("div",{staticClass:"absolute-full"},[s("div",{staticClass:"container"},[s("q-tabs",{staticClass:"tags",attrs:{"no-caps":"",align:"left","indicator-color":"transparent","active-color":"brand","active-bg-color":"brand","content-class":"tabs"}},t._l(t.tags,(function(e){return s("q-route-tab",{key:e.value,attrs:{"content-class":"text-bold",to:e.value,exact:"",replace:""}},[t._v("\n            "+t._s(t.$t(e.label))+"\n          ")])})),1),s("div",{staticClass:"line"}),s("div",{staticClass:"title"},[t._v(t._s(t.$t("my.index.goodAfternoon"))+" "+t._s(t.userInfo?t.userInfo.name:""))]),s("div",{staticClass:"time"},[t._v(t._s(t.$t("my.index.YouSelf"))+t._s(t.userInfo?t.userInfo.createdDate.substr(0,10):"")+t._s(t.$t("my.index.BecameYongbao"))+" "+t._s(t.userInfo?t.userInfo.seller?t.$t("my.index.artist"):t.$t("my.index.ArtCollector"):""))])],1)])],1),s("router-view")],1)},a=[],i=(n("96cf"),n("c973")),o=n.n(i),r={data:function(){return{tags:[{label:"my.index.myAccount",value:"info"},{label:"my.index.myFavourite",value:"wishlist"},{label:"my.index.MyFavoriteArtist",value:"like"}]}},preFetch:function(t){return o()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store,t.currentRoute;case 1:case"end":return e.stop()}}),e)})))()},computed:{userInfo:function(){return this.$store.state.user.info}},methods:{goWishlist:function(){this.$router.push("/".concat(this.$i18n.locale,"/wishlist"))},goMine:function(){this.$router.push("/".concat(this.$i18n.locale,"/mine"))},goLike:function(){this.$router.push("/".concat(this.$i18n.locale,"/like"))},goOrder:function(){this.$router.push("/".concat(this.$i18n.locale,"/order"))}}},c=r,u=(n("4fda"),n("2877")),l=n("9989"),f=n("068f"),d=n("429b"),b=n("7867"),m=n("eebe"),p=n.n(m),h=Object(u["a"])(c,s,a,!1,null,"1fdf0d89",null);e["default"]=h.exports;p()(h,"components",{QPage:l["a"],QImg:f["a"],QTabs:d["a"],QRouteTab:b["a"]})}}]);