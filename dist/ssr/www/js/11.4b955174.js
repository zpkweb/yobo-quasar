(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"6e4e":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAA5UlEQVQokaXTvyvFURjH8Zcbi5T8A4qZwd1uSLGxSfkHjDZZ7He6g81yr51BdoPBr1KK7r9hUQwk0lPny5dz1Zf7rjOc5zmfd2d4noGj45ZEHdto4B3n2MELmljCEG6wi4uIDabwOg58ZwJreMVoqTOOVWxgPwSTPcIFw1nli078pobNrFWdrRAs9iGYC8FIVq7OWAhu+xB0Q9DOytXZC8EJzv4Rjnk4rKXLCp6yJ7/zhuXoFoIIz/5BsID7siDoVpTESF8Wl7IguMIMHnoEnzGP03LxpyC4w3Rapsd0rjFVLNAn+AD13iac/e5DBQAAAABJRU5ErkJggg=="},"9cd7":function(t,s,r){"use strict";r("b63b")},b4ac:function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("div",{staticClass:"banner relative-position"},[t.portrait.seller&&t.portrait.seller.banner?e("q-img",{attrs:{src:t.portrait.seller.banner,height:"360px"}}):e("q-img",{attrs:{src:r("de23"),height:"360px"}}),e("div",{staticClass:"absolute-full text-center text"},[t.portrait.seller?[e("div",{staticClass:"text-bold"},[t._v(t._s(t.$store.state.sellerTypes[t.portrait.seller.type])+"｜"+t._s(t.portrait.seller.country))]),e("div",{staticClass:"title"},[t._v(t._s(t.portrait.seller.firstname)+" "+t._s(t.portrait.seller.lastname))]),e("div",{staticClass:"number"},t._l(t.portrait.seller.tags,(function(s){return e("span",[t._v(t._s(t.$t(s)))])})),0)]:t._e()],2)],1),e("div",{staticClass:"title2-container"},[e("div",{staticClass:"title2"},[t.portrait.seller?e("router-link",{staticClass:"tabs",class:{active:t.hash&&"#seller"==t.hash||!t.hash},attrs:{to:{hash:"#seller"}}},[t._v(t._s(t.$t("artist.PersonalInformation")))]):t._e(),t.portrait.commoditys?e("router-link",{staticClass:"tabs",class:{active:t.hash&&"#commoditys"==t.hash},attrs:{to:{hash:"#commoditys"}}},[t._v(t._s(t.$t("artist.AllWorks")))]):t._e(),t.portrait.sold?e("router-link",{staticClass:"tabs",class:{active:t.hash&&"#sold"==t.hash},attrs:{to:{hash:"#sold"}}},[t._v(t._s(t.$t("artist.LatestSold")))]):t._e(),t.portrait.studio?e("router-link",{staticClass:"tabs",class:{active:t.hash&&"#studio"==t.hash},attrs:{to:{hash:"#studio"}}},[t._v(t._s(t.$t("artist.studio")))]):t._e(),t.portrait.resume?e("router-link",{staticClass:"tabs",class:{active:t.hash&&"#resume"==t.hash},attrs:{to:{hash:"#resume"}}},[t._v(t._s(t.$t("artist.Resume")))]):t._e()],1)]),e("div",{staticClass:"desc row",attrs:{id:"seller"}},[t.portrait?e("div",{staticClass:"col-4"},[t.portrait&&t.portrait.user&&t.portrait.user.avatar?e("q-img",{attrs:{src:t.portrait.user.avatar}}):t._e()],1):t._e(),e("div",{staticClass:"col-7 offset-1 text-right resume"},[t.portrait&&t.portrait.metadata?e("p",{staticClass:"text-left fontSize-16"},[t._v(t._s(t.portrait.metadata.profile))]):t._e(),e("div",{staticClass:"resume4"},[e("div",{staticClass:"btn text-white",on:{click:function(s){return t.myArtist(t.hasMyArtist)}}},[t._v(t._s(t.hasMyArtist?t.$t("artist.Followed"):t.$t("artist.FollowArtist")))])])])]),t.portrait.commoditys?e("div",{staticClass:"artworks-container",attrs:{id:"commoditys"}},[e("div",{staticClass:"artworks"},[e("div",{staticClass:"artwork row"},t._l(t.portrait.commoditys,(function(s,a){return e("div",{staticClass:"col-3"},[e("div",{staticClass:"image",class:{active:s.hasMyArtwork}},[s.hasMyArtwork?e("q-img",{staticClass:"artwork-item-like",attrs:{src:r("6e4e"),width:"16px",height:"14px"},on:{click:function(r){return t.myArtwork(s)}}}):e("q-img",{staticClass:"artwork-item-like",attrs:{src:r("ef74"),width:"16px",height:"14px"},on:{click:function(r){return t.myArtwork(s)}}}),e("router-link",{key:"artwork-"+a,staticClass:"artwork-item text-center",attrs:{to:"/"+t.$i18n.locale+"/artwork/"+s.commodityId}},[e("q-img",{staticClass:"artwork-item-img",attrs:{src:s.photos[0]}})],1),e("p",{staticClass:"artwork-item-name"},[t._v(t._s(s.name))])],1)])})),0)])]):t._e(),t.portrait.studio?e("div",{staticClass:"studio",attrs:{id:"studio"}},[t.portrait.studio.banner?e("q-img",{staticClass:"studio-banner",attrs:{src:t.portrait.studio.banner,height:"400px"}}):t._e(),e("div",{staticClass:"studio-content"},[e("h3",{staticClass:"studio-content-title"},[t._v(t._s(t.portrait.studio.name))]),t.portrait.studio.ccId?e("iframe",{staticClass:"studio-content-iframe",attrs:{src:"http://www.yoboart.com/video?isShowConfig=false&ccId="+t.portrait.studio.ccId+"&siteId="+t.portrait.studio.siteId+"&img_path="+t.portrait.studio.videoPhoto,scrolling:"no",frameBorder:"0"}}):t.portrait.studio.video?e("video",{staticClass:"studio-content-video",attrs:{controls:"",name:"media"}},[e("source",{attrs:{src:t.portrait.studio.video,type:"video/mp4"}})]):t.portrait.studio.photo?e("q-img",{staticClass:"studio-content-img",attrs:{src:t.portrait.studio.photo}}):e("p",{staticClass:"studio-content-p"},[t._v("\n        "+t._s(t.portrait.studio.introduce)+"\n      ")])],1)],1):t._e(),t.portrait.resume?e("div",{staticClass:"credentials ",attrs:{id:"resume"}},[e("div",{staticClass:"title text-center "},[t._v(t._s(t.$t("artist.MyResume")))]),e("div",{staticClass:"title2 text-right"},t._l(Object.keys(t.portrait.resume),(function(s){return e("div",{on:{click:function(r){t.resumeTypeActive=s}}},[t._v(t._s(t.$t(t.resumeTypes[s])))])})),0),e("div",{staticClass:"content row"},t._l(t.portrait.resume[t.resumeTypeActive],(function(s){return e("div",{staticClass:"col-6 item"},[e("div",{staticClass:"year"},[t._v(t._s(s.year))]),e("div",{staticClass:"name"},[t._v("\n            "+t._s(s.resume)+"\n          ")])])})),0)]):t._e()])},a=[],i=(r("d81d"),r("6374")),o=r.n(i),n=(r("96cf"),r("c973")),c=r.n(n),l={data:function(){return{navs:[{label:"artist.PersonalInformation",value:"info"},{label:"artist.AllWorks",value:"artworks"},{label:"artist.LatestSold",value:"sold"},{label:"artist.studio",value:"studio"},{label:"artist.Resume",value:"resume"}],tags:["artist.magazineCover","artist.PortraitStructure","artist.PortraitOfPopart"],hasMyArtist:!1,myArtworks:[],portrait:{},resumeTypeActive:"prize",resumeTypes:{prize:"artist.Awards",individua:"artist.SoloExhibition",organizing:"artist.GroupExhibition",publish:"artist.Publish"}}},computed:{hash:function(){return this.$route.hash}},created:function(){var t=this;return c()(regeneratorRuntime.mark((function s(){var r,e,a,i,n,c,l,u,d;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(r=t.$route,r.query,e=r.params,a=e.locale,i=e.artistId,n=t.$q.cookies.get("userInfo"),!n){s.next=13;break}return c=n.userId,s.next=7,t.$store.dispatch("my/hasMyArtist",{userId:c,artistId:i});case 7:return l=s.sent,t.hasMyArtist=l.success,s.next=11,t.$store.dispatch("my/getMyWishlist",{userId:c,locale:a});case 11:u=s.sent,u.success&&(t.myArtworks=u.data);case 13:return s.next=15,t.$store.dispatch("artist/artist",{sellerId:i});case 15:d=s.sent,d.success&&(d.data.commoditys&&d.data.commoditys.length&&(d.data.commoditys=d.data.commoditys.map((function(s){if(s.hasMyArtwork=!1,t.myArtworks&&t.myArtworks.length){var r,e=o()(t.myArtworks);try{for(e.s();!(r=e.n()).done;){var a=r.value;s.commodityId==a.commodityId&&(s.hasMyArtwork=!0)}}catch(i){e.e(i)}finally{e.f()}}return s}))),t.portrait=d.data);case 17:case"end":return s.stop()}}),s)})))()},methods:{myArtist:function(t){var s=this;return c()(regeneratorRuntime.mark((function r(){var e,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s.$store.state.user.info){r.next=3;break}return s.$q.notify({position:"top",timeout:1500,message:s.$t("layout.pleaseLoginFirst"),color:"negative"}),r.abrupt("return");case 3:if(!t){r.next=10;break}return r.next=6,s.$store.dispatch("my/delMyArtist",{userId:s.$store.state.user.info.userId,artistId:s.$route.params.artistId});case 6:e=r.sent,e.success?(s.hasMyArtist=!1,s.$q.notify({position:"top",timeout:1500,message:s.$t("artist.unsubscribe"),color:"negative"})):s.$q.notify({position:"top",timeout:1500,message:data.msg,color:"negative"}),r.next=14;break;case 10:return r.next=12,s.$store.dispatch("my/addMyArtist",{userId:s.$store.state.user.info.userId,artistId:s.$route.params.artistId});case 12:a=r.sent,a.success?(s.hasMyArtist=!0,s.$q.notify({position:"top",timeout:1500,message:s.$t("artist.FollowedSuccess"),color:"positive"})):s.$q.notify({position:"top",timeout:1500,message:data.msg,color:"negative"});case 14:case"end":return r.stop()}}),r)})))()},myArtwork:function(t){var s=this;return c()(regeneratorRuntime.mark((function r(){var e,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s.$store.state.user.info){r.next=3;break}return s.$q.notify({position:"top",timeout:1500,message:s.$t("layout.pleaseLoginFirst"),color:"negative"}),r.abrupt("return");case 3:if(!t.hasMyArtwork){r.next=10;break}return r.next=6,s.$store.dispatch("my/delMyArtwork",{userId:s.$store.state.user.info.userId,artworkId:t.commodityId});case 6:e=r.sent,e.success?(t.hasMyArtwork=!1,s.$q.notify({position:"top",timeout:1500,message:s.$t("artwork.commodity.Unlike"),color:"negative"})):s.$q.notify({position:"top",timeout:1500,message:e.msg,color:"negative"}),r.next=14;break;case 10:return r.next=12,s.$store.dispatch("my/addMyArtwork",{userId:s.$store.state.user.info.userId,artworkId:t.commodityId});case 12:a=r.sent,a.success?(t.hasMyArtwork=!0,s.$q.notify({position:"top",timeout:1500,message:s.$t("artwork.commodity.LikeSuccess"),color:"positive"})):s.$q.notify({position:"top",timeout:1500,message:a.msg,color:"negative"});case 14:case"end":return r.stop()}}),r)})))()}}},u=l,d=(r("9cd7"),r("2877")),m=r("9989"),p=r("068f"),h=r("eebe"),v=r.n(h),y=Object(d["a"])(u,e,a,!1,null,"78f3d487",null);s["default"]=y.exports;v()(y,"components",{QPage:m["a"],QImg:p["a"]})},b63b:function(t,s,r){},de23:function(t,s,r){t.exports=r.p+"img/banner-artist.dc0468c2.png"},ef74:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABL0lEQVQokZ3TzyvlURjH8Zcb2TFZWMhuFpiajdjITiymKRvFVqaxm5QfiUgWEllYTUmKjZppzIws7FhLERaSSCkbN/+CTp5vXV1y814+53w+53Oe85yyP38XBd2YwUfksY4F5DCJftTiBNPYFouJYSxhCFVoQw0OcBjCdlTGIT9jr3I0YQStuA3DO/zAN1SEIOMfzsJ8PxmMRtRbxawWVZ64xCzG0xW6sFW05W020JEMPuD+HQYPqE4GN/hUtPw2DbjORfyBdxh8x6/UxOXo6lp0thSa0YfPubj/IH6jvgRxfaROCfIpQeI/6tK74gsuXhE3Yhdz2EmFbBITaVimsIevL4h744AxrGTFLEHGJs7jjXswEeM7H13vxGmhoDBBxhFacIXj+AtJlEb9mRgeAZ1QO58pHnG5AAAAAElFTkSuQmCC"}}]);