(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0f3c":function(t,e,s){"use strict";s("4ab2")},"3ad3":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"like"},[t.myArtists&&t.myArtists.length?t._l(t.myArtists,(function(e,r){return s("div",{key:"like1-"+r,staticClass:"row item"},[s("router-link",{staticClass:"image-box",attrs:{to:"/"+t.$i18n.locale+"/artist/"+e.sellerId}},[s("Avatar",{attrs:{type:"photo",src:e.seller&&e.seller.user&&e.seller.user.avatar,width:"160px",height:"160px"}})],1),s("div",{staticClass:"col-4 desc"},[s("router-link",{staticClass:"title",attrs:{to:"/"+t.$i18n.locale+"/artist/"+e.sellerId}},[t._v(t._s(e.seller.firstname)+" "+t._s(e.seller.lastname))]),s("div",[t._v(t._s(t.$t("my.like.uploaded"))+t._s(e.commodityCount)+t._s(t.$t("my.like.SecondaryWorks")))]),s("div",[t._v(t._s(e.seller.country))])],1),s("div",{staticClass:"col-5 row items-center justify-end"},[s("div",{staticClass:"btn follow  text-white text-center",class:{"follow-active":e.hasMyArtist},on:{click:function(s){return t.myArtist(e)}}},[t._v(t._s(e.hasMyArtist?t.$t("artist.Followed"):t.$t("artist.FollowArtist")))])])],1)})):s("noData",{attrs:{text:"my.like.NoData",routerLink:"/"+t.$i18n.locale+"/artists?type=&country=&surname=&other="}})],2)},a=[],i=(s("d81d"),s("cca6"),s("96cf"),s("c973")),n=s.n(i),o=s("6a2b"),c=s("7150"),l={components:{noData:o["a"],Avatar:c["a"]},data:function(){return{myArtists:[]}},mounted:function(){var t=this;return n()(regeneratorRuntime.mark((function e(){var s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=t.$route.params.locale,r=t.$q.cookies.get("userInfo"),!r){e.next=7;break}return e.next=5,t.$store.dispatch("my/getMyArtist",{userId:r.userId,locale:s});case 5:a=e.sent,a.success&&(t.myArtists=a.data.map((function(t){return Object.assign(t,{hasMyArtist:!0})})));case 7:case"end":return e.stop()}}),e)})))()},methods:{myArtist:function(t){var e=this;return n()(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!t.hasMyArtist){s.next=7;break}return s.next=3,e.$store.dispatch("my/delMyArtist",{userId:e.$store.state.user.info.userId,artistId:t.sellerId});case 3:r=s.sent,r.success?(t.hasMyArtist=!1,e.$q.notify({position:"top",timeout:1500,message:e.$t("my.like.unsubscribe"),color:"negative"})):e.$q.notify({position:"top",timeout:1500,message:data.msg,color:"negative"}),s.next=11;break;case 7:return s.next=9,e.$store.dispatch("my/addMyArtist",{userId:e.$store.state.user.info.userId,artistId:t.sellerId});case 9:a=s.sent,a.success?(t.hasMyArtist=!0,e.$q.notify({position:"top",timeout:1500,message:e.$t("my.like.FollowedSuccess"),color:"positive"})):e.$q.notify({position:"top",timeout:1500,message:data.msg,color:"negative"});case 11:case"end":return s.stop()}}),s)})))()}}},u=l,d=(s("0f3c"),s("2877")),m=s("068f"),y=s("eebe"),f=s.n(y),p=Object(d["a"])(u,r,a,!1,null,"f7f2ecc4",null);e["default"]=p.exports;f()(p,"components",{QImg:m["a"]})},"4ab2":function(t,e,s){}}]);