(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{5214:function(t,s,e){"use strict";e("6b21")},"6a2b":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"noData"},[e("q-img",{staticClass:"noData-img",attrs:{src:"img/artists/exclamatory.png",width:"60px"}}),e("div",{staticClass:"noData-text"},[t._v(t._s(t.$t(t.text)||"暂无数据"))]),t.routerLink?e("router-link",{staticClass:"noData-routerLink",attrs:{to:t.routerLink||"/"}},[t._v(t._s(t.$t(t.routerText)||"去看看"))]):t._e()],1)},r=[],o={props:["text","routerLink","routerText"]},n=o,a=(e("5214"),e("2877")),c=e("068f"),m=e("eebe"),l=e.n(m),u=Object(a["a"])(n,i,r,!1,null,"2a5bc3ed",null);s["a"]=u.exports;l()(u,"components",{QImg:c["a"]})},"6b21":function(t,s,e){},acd6:function(t,s,e){},d358:function(t,s,e){"use strict";e("acd6")},ddfe:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"wishlist"},[t.myWishlist&&t.myWishlist.length?t._l(t.myWishlist,(function(s,i){return e("div",{key:"style1-"+i,staticClass:"row item"},[s.photos.length?e("q-img",{staticClass:"image",attrs:{src:s.photos[0].src,width:"212px"}}):t._e(),e("div",{staticClass:"col-4 desc"},[e("div",{staticClass:"title"},[t._v(t._s(s.name))]),e("div",{staticClass:"name"},[t._v("\n            "+t._s(s.seller.firstname)+" "+t._s(s.seller.lastname)+"\n          ")]),e("div",{staticClass:"size"},[t._v("\n            "+t._s(s.commodity.width)+"cmX"+t._s(s.commodity.height)+"cm in -\n            2019\n          ")])]),e("div",{staticClass:"col-3 prise"},[e("div",[t._v(t._s(t.$t("my.wishlist.price")))]),e("div",{staticClass:"num"},[t._v(t._s(s.price[t.$i18n.locale]))])]),e("div",{staticClass:"col-2 row items-center"},[e("div",{staticClass:"btn buy text-white text-center"},[e("div",{staticClass:"btn heart",class:s.hasMyArtwork?"image1":"image2",on:{click:function(e){return t.myArtwork(s,i)}}})])])],1)})):e("noData",{attrs:{text:"my.wishlist.NoData",routerLink:"/"+t.$i18n.locale+"/artwork"}})],2),t.myBrowsingHistory&&t.myBrowsingHistory.length?e("div",{staticClass:"history-container"},[e("div",{staticClass:"history relative-position"},[e("div",{staticClass:"text-center title"},[t._v("\n        "+t._s(t.$t("my.wishlist.YourRecentlyViewedArtworks"))+"\n      ")]),e("div",{staticClass:"row"},t._l(t.myBrowsingHistory,(function(s,i){return s.commodity&&s.commodity.commodityId?e("router-link",{key:"style3-"+i,staticClass:"item text-center col-3",attrs:{to:"/"+t.$i18n.locale+"/artwork/"+s.commodity.commodityId}},[e("div",{staticClass:"image"},[s.photos.length?e("q-img",{attrs:{src:s.photos[0].src,width:"198px",height:"300px"}}):t._e()],1),e("div",{staticClass:"text text-left"},[t._v("\n            "+t._s(s.categorys?s.categorys[0].name:"")+"\n          ")]),e("div",{staticClass:"text text-left"},[t._v("\n            "+t._s(s.commodity.width)+"x"+t._s(s.commodity.height)+"cm\n          ")])]):t._e()})),1)])]):t._e()])},r=[],o=(e("4de4"),e("d81d"),e("96cf"),e("c973")),n=e.n(o),a=e("6a2b"),c={components:{noData:a["a"]},data:function(){return{myWishlist:[]}},mounted:function(){var t=this;return n()(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:setTimeout(n()(regeneratorRuntime.mark((function s(){var e,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e=t.$route.params.locale,s.next=3,t.$store.dispatch("my/getMyWishlist",{userId:t.$store.state.user.info.userId,locale:e});case 3:return i=s.sent,console.log("myWishlist",i),i.success&&(t.$store.commit("my/setMyWishlist",i.data),t.myWishlist=i.data.map((function(t){return t.hasMyArtwork=!0,t}))),s.next=8,t.$store.dispatch("my/getMyBrowsingHistory",{userId:t.$store.state.user.info.userId,locale:e,pageSize:4,currentPage:1});case 8:r=s.sent,r.success&&t.$store.commit("my/setMyBrowsingHistory",r.data);case 10:case"end":return s.stop()}}),s)}))),500);case 1:case"end":return s.stop()}}),s)})))()},computed:{myBrowsingHistory:function(){return this.$store.state.my.browsingHistory.list}},methods:{myArtwork:function(t,s){var e=this;return n()(regeneratorRuntime.mark((function i(){var r,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(console.log("item",t,s),e.$store.state.user.info){i.next=4;break}return e.$q.notify({position:"top",timeout:1500,message:e.$t("my.wishlist.NoData"),color:"negative"}),i.abrupt("return");case 4:if(!t.hasMyArtwork){i.next=11;break}return i.next=7,e.$store.dispatch("my/delMyArtwork",{userId:e.$store.state.user.info.userId,artworkId:t.commodityId});case 7:r=i.sent,r.success?(e.myWishlist=e.myWishlist.filter((function(s){return s.commodityId==t.commodityId&&(s.hasMyArtwork=!1),t})),e.$q.notify({position:"top",timeout:1500,message:e.$t("my.wishlist.Unlike"),color:"negative"})):e.$q.notify({position:"top",timeout:1500,message:r.msg,color:"negative"}),i.next=15;break;case 11:return i.next=13,e.$store.dispatch("my/addMyArtwork",{userId:e.$store.state.user.info.userId,artworkId:t.commodityId});case 13:o=i.sent,o.success?(e.myWishlist=e.myWishlist.filter((function(s){return s.commodityId==t.commodityId&&(s.hasMyArtwork=!0),t})),e.$q.notify({position:"top",timeout:1500,message:e.$t("my.wishlist.LikeSuccess"),color:"positive"})):e.$q.notify({position:"top",timeout:1500,message:o.msg,color:"negative"});case 15:case"end":return i.stop()}}),i)})))()}}},m=c,l=(e("d358"),e("2877")),u=e("068f"),d=e("eebe"),y=e.n(d),h=Object(l["a"])(m,i,r,!1,null,"0be07306",null);s["default"]=h.exports;y()(h,"components",{QImg:u["a"]})}}]);