(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1de8":function(t,e,s){},"5ec5":function(t,e,s){t.exports=s.p+"img/banner-artists.98752f33.png"},b8f3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"banner relative-position"},[a("q-img",{attrs:{src:s("5ec5"),height:"360px"}}),a("div",{staticClass:"absolute-full text-center text"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("artists.painter")))]),a("div",{staticClass:"number"},[t._v(t._s(t.artistTotal)+t._s(t.$t("artists.PaintersCriteria")))])])],1),a("div",{staticClass:"container"},[a("div",{staticClass:"options"},[a("div",{staticClass:"option"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("artists.label")))]),a("q-tabs",{staticClass:"options-tabs text-grey-8",attrs:{"indicator-color":"transparent",align:"justify"}},[a("router-link",{staticClass:"options-link",attrs:{to:{query:Object.assign({},t.$route.query,{type:""})}}},[t._v(t._s(t.$t("artists.Unlimited")))]),t._l(t.types,(function(e,s){return a("router-link",{key:s,staticClass:"options-link",attrs:{to:{query:Object.assign({},t.$route.query,{type:t.$route.query.type.concat([e.value])})}}},[t._v(t._s(t.$t(e.label)))])}))],2)],1),a("div",{staticClass:"option"},[a("div",{staticClass:"title text-dark"},[t._v(t._s(t.$t("artists.Country")))]),a("q-tabs",{staticClass:"options-tabs text-grey-8",attrs:{"indicator-color":"transparent",align:"justify"}},[a("router-link",{staticClass:"options-link",attrs:{to:{query:Object.assign({},t.$route.query,{country:""})}}},[t._v(t._s(t.$t("artists.Unlimited")))]),t._l(t.countrys,(function(e,s){return a("router-link",{key:s,staticClass:"options-link",attrs:{to:{query:Object.assign({},t.$route.query,{country:e.value})}}},[t._v(t._s(t.$t(e.label)))])}))],2)],1),a("div",{staticClass:"option"},[a("div",{staticClass:"title title-surname text-dark"},[t._v(t._s(t.$t("artists.LastName")))]),a("q-tabs",{staticClass:"options-tabs options-tabs-surname text-grey-8",attrs:{dense:"","inline-label":"","indicator-color":"transparent",align:"justify"}},[a("router-link",{staticClass:"options-link tab",attrs:{to:{query:Object.assign({},t.$route.query,{surname:""})}}},[t._v(t._s(t.$t("artists.Unlimited")))]),t._l(t.surnames,(function(e,s){return a("router-link",{key:s,staticClass:"options-link tab-surname",attrs:{to:{query:Object.assign({},t.$route.query,{surname:e})}}},[t._v(t._s(e))])}))],2)],1),a("div",{staticClass:"option"},[a("div",{staticClass:"title text-dark"},[t._v(t._s(t.$t("artists.Other")))]),a("q-tabs",{staticClass:"options-tabs text-grey-8",attrs:{"indicator-color":"transparent",align:"justify"}},[a("router-link",{staticClass:"options-link tab",attrs:{to:{query:Object.assign({},t.$route.query,{other:""})}}},[t._v(t._s(t.$t("artists.Unlimited")))]),t._l(t.others,(function(e,s){return a("router-link",{key:s,staticClass:"options-link",attrs:{to:{query:Object.assign({},t.$route.query,{other:e.value})}}},[t._v(t._s(t.$t(e.label)))])}))],2)],1)]),a("div",{staticClass:"sort-by text-right"},[a("router-link",{staticClass:"tabs",attrs:{to:{query:Object.assign({},t.$route.query,{hots:!1,news:!1})}}},[t._v(t._s(t.$t("artists.DefaultSort")))]),a("router-link",{staticClass:"tabs",class:{active:t.hots},attrs:{to:{query:Object.assign({},t.$route.query,{news:!1,hots:!t.hots})}}},[t._v(t._s(t.$t("artists.Hottest")))]),a("router-link",{staticClass:"tabs",class:{active:t.news},attrs:{to:{query:Object.assign({},t.$route.query,{news:!t.news,hots:!1})}}},[t._v(t._s(t.$t("artists.NewestUpload")))])],1),t.artistList&&t.artistList.length?a("div",{staticClass:"artists "},[a("q-list",t._l(t.artistList,(function(e,s){return a("q-item",{key:s,staticClass:"artist col-3"},[a("router-link",{staticClass:"artist-router-link",attrs:{to:"artist/"+e.sellerId}},[a("Avatar",{attrs:{src:e&&e.user&&e.user.avatar,width:"231px",height:"231px",type:"photo"}}),a("div",{staticClass:" text-left"},[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),a("div",{staticClass:"text-left"},[t._v(t._s(e.country)+" "+t._s(e.country&&t.$store.state.sellerTypes[e.type]?"-":"")+" "+t._s(t.$store.state.sellerTypes[e.type]))])],1)],1)})),1)],1):a("noData",{attrs:{text:"artists.NoData"}}),t.pageTotal?a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{attrs:{color:"teal-10",max:t.pageTotal,"max-pages":4,"boundary-numbers":!0},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("div",{staticClass:"next btn",on:{click:t.nextPage}},[t._v(t._s(t.$t("pagination.NextPage")))]),a("div",{staticClass:"all"},[t._v(t._s(t.$t("pagination.Total"))+t._s(t.pageTotal)+t._s(t.$t("pagination.page")))]),a("div",[t._v("\n        "+t._s(t.$t("pagination.To"))+"\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPage,expression:"newPage"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newPage},on:{input:function(e){e.target.composing||(t.newPage=e.target.value)}}}),t._v("\n        "+t._s(t.$t("pagination.page"))+"\n      ")]),a("div",{staticClass:"btn button",on:{click:t.toNewPage}},[t._v(t._s(t.$t("pagination.determine")))])],1):t._e()],1)])},r=[],i=(s("cca6"),s("ded3")),n=s.n(i),o=s("4082"),l=s.n(o),u=(s("96cf"),s("c973")),c=s.n(u),p=s("6a2b"),g=s("7150"),v={components:{noData:p["a"],Avatar:g["a"]},data:function(){return{surname:this.$route.query.surname,surnames:["A","B","C","D","E","F","G","H","I","J","K","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],type:this.$route.query.type,types:[{label:"artists.sculptor",value:"1"},{label:"artists.photographer",value:"2"}],country:this.$route.query.country,countrys:[{label:"artists.China",value:"中国"},{label:"artists.Japan",value:"日本"},{label:"artists.Spain",value:"西班牙"},{label:"artists.UnitedStates",value:"美国"}],other:this.$route.query.Other,others:[{label:"artists.Male",value:"男"},{label:"artists.Female",value:"女"},{label:"artists.Studio",value:"工作室"}],newPage:"",pageSize:parseInt(this.$route.query.pageSize)||12,currentPage:parseInt(this.$route.query.currentPage)||1,total:0}},preFetch:function(t){return c()(regeneratorRuntime.mark((function e(){var s,a,r,i,o,u,c,p,g,v,y,h,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.store,a=t.currentRoute,r=a.params.locale,i=a.query,o=i.currentPage,u=i.pageSize,c=l()(i,["currentPage","pageSize"]),s.commit("artist/setSearch",c),e.next=6,s.dispatch("artist/sellerSearch",n()(n()({},c),{},{locale:r,currentPage:parseInt(o)||1,pageSize:parseInt(u)||12}));case 6:p=e.sent,p.success&&(g=p.data,v=g.total,y=g.currentPage,h=g.pageSize,b=g.list,s.commit("artist/setSearchData",b),s.commit("artist/setPagination",{total:v,currentPage:y,pageSize:h}));case 8:case"end":return e.stop()}}),e)})))()},watch:{currentPage:function(){this.changeCurrentPage(this.currentPage)}},computed:{artistList:function(){return this.$store.state.artist.searchData},artistTotal:function(){return this.$store.state.artist.pagination.total},pageTotal:function(){return Math.ceil(this.$store.state.artist.pagination.total/this.$store.state.artist.pagination.pageSize)},hots:function(){return this.$route.query.hots&&"false"!==this.$route.query.hots},news:function(){return this.$route.query.news&&"false"!==this.$route.query.news}},methods:{nextPage:function(){this.currentPage<this.pageTotal&&(this.currentPage=this.currentPage+1)},toNewPage:function(){parseInt(this.newPage)>0&&parseInt(this.newPage)<=this.pageTotal&&(this.currentPage=parseInt(this.newPage))},changeCurrentPage:function(t){this.$router.push({query:Object.assign({},this.$route.query,{currentPage:t})})}}},y=v,h=(s("e4d0"),s("2877")),b=s("9989"),d=s("068f"),_=s("429b"),$=s("1c1c"),m=s("66e5"),q=s("3b16"),C=s("3b73"),f=s("9c40"),P=s("eebe"),k=s.n(P),x=Object(h["a"])(y,a,r,!1,null,"48e32978",null);e["default"]=x.exports;k()(x,"components",{QPage:b["a"],QImg:d["a"],QTabs:_["a"],QList:$["a"],QItem:m["a"],QPagination:q["a"],QExpansionItem:C["a"],QBtn:f["a"]})},e4d0:function(t,e,s){"use strict";s("1de8")}}]);