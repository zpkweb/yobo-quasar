(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"00de":function(e,t,s){},"2f32":function(e,t,s){},"32f3":function(e,t,s){},"38c1":function(e,t,s){},"3ab0":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{staticClass:"app"},[s("div",{staticClass:"bg-white nav relative-position"},[s("div",{staticClass:"header row text-black relative-position"},[s("div",{staticClass:"col"},[s("q-img",{staticClass:"logo btn",attrs:{src:"img/index/logo.png",width:"170px"},on:{click:e.goIndex}}),s("div",{staticClass:"choose-language-container"},[e.lang?s("q-btn",{staticClass:"choose-language btn",attrs:{size:"xs",rounded:"",flat:""}},[e._v(e._s(e.lang.value))]):e._e()],1),s("div",{staticClass:"dropdown1"},[s("div",{staticClass:"dropdowncontent1 absolute"},[s("div",{staticClass:"items"},e._l(e.$store.state.langOptions,(function(t,a){return s("div",{key:"dropdown1-"+a,staticClass:"item",on:{click:function(s){return e.changeLang(t)}}},[e._v("\n                "+e._s(t.label)+"\n              ")])})),0)])])],1),s("div",{staticClass:"col-grow"},[e.isApplyArtist?e._e():s("div",{staticClass:"artist-register btn",on:{click:function(t){e.isApplyArtistPop=!0}}},[e._v("\n          "+e._s(e.$t("layout.header.BecomeAnArtist"))+"\n        ")]),e.userInfo?e._e():s("q-breadcrumbs",{staticClass:"separator",attrs:{separator:"|"}},[s("q-breadcrumbs-el",{staticClass:"login text-black btn",attrs:{label:e.$t("layout.header.login")},on:{click:function(t){e.isLoginPop=!0}}}),s("q-breadcrumbs-el",{staticClass:"register btn",attrs:{label:e.$t("layout.header.registered")},on:{click:function(t){e.isRegisterPop=!0}}})],1),e.userInfo?s("div",{staticClass:"username btn"},[e._v("\n          "+e._s(e.userInfo.name)+"\n        ")]):e._e(),s("div",{staticClass:"dropdown2"},[s("div",{staticClass:"dropdowncontent2 absolute"},[s("div",{staticClass:"items"},[s("div",{staticClass:"item",on:{click:e.goMine}},[e._v("\n                "+e._s(e.$t("layout.header.PersonalCenter"))+"\n              ")]),s("div",{staticClass:"item",on:{click:e.logout}},[e._v("\n                "+e._s(e.$t("layout.header.Signout"))+"\n              ")])])])]),s("div",{staticClass:"search btn text-center",on:{click:function(t){e.isSearch=!0}}},[s("q-img",{staticClass:"image",attrs:{src:"img/index/search.png",width:"21px"}})],1),s("div",{staticClass:"dropdown3"},[s("div",{staticClass:"dropdowncontent3 absolute"},[s("div",{staticClass:"items"},[s("div",{staticClass:"after"}),s("div",{staticClass:"item row btn"},[s("div",{staticClass:"image col-grow"}),s("div",{staticClass:"col desc"},[e._v("Unelashed Flame")])]),s("div",{staticClass:"item row btn"},[s("div",{staticClass:"image image2 col-grow"}),s("div",{staticClass:"col desc"},[e._v("Arbeiten in Lack")])]),s("div",{staticClass:"pay"},[s("div",{staticClass:"paybtn text-center text-white btn"},[e._v(e._s(e.$t("layout.header.BillPlease")))])])])])])],1)])]),s("div",{staticClass:"rv"},[s("router-view"),"Artworks"!=e.$route.name?s("div",{staticClass:"footer text-white"},[s("div",{staticClass:"container row"},[s("div",{staticClass:"col-9 row"},[s("div",{staticClass:"col-3 item"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("layout.footer.customerService")))]),s("div",[e._v(e._s(e.$t("layout.footer.contactUs")))]),s("div",[e._v(e._s(e.$t("layout.footer.LegalNotices")))]),s("div",[e._v(e._s(e.$t("layout.footer.GeneralRegulations")))]),s("div",[e._v(e._s(e.$t("layout.footer.OfficeArtwork")))]),s("div",[e._v(e._s(e.$t("layout.footer.DesignerArtwork")))])]),s("div",{staticClass:"col-3 item"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("layout.footer.aboutAs")))]),s("div",[e._v(e._s(e.$t("layout.footer.AboutYongbao")))]),s("div",[e._v(e._s(e.$t("layout.footer.OurArtist")))]),s("div",[e._v(e._s(e.$t("layout.footer.magazine")))]),s("div",[e._v(e._s(e.$t("layout.footer.team")))]),s("div",[e._v(e._s(e.$t("layout.footer.OurSelectionCriteria")))]),s("div",[e._v(e._s(e.$t("layout.footer.commonProblem")))]),s("div",[e._v(e._s(e.$t("layout.footer.ContactInformation")))])]),s("div",{staticClass:"col-3 item"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("layout.footer.FeaturedArtist")))]),s("div",[e._v("Josep Moncada")]),s("div",[e._v("Ivan Pili")]),s("div",[e._v("Kristin Kossi")]),s("div",[e._v("Peter Nottrott")])]),s("div",{staticClass:"col-3 item"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("layout.footer.FollowYongbao")))]),s("div",[e._v(e._s(e.$t("layout.footer.WeChat")))]),s("div",[e._v(e._s(e.$t("layout.footer.Weibo")))]),s("div",[e._v("Facebook")]),s("div",[e._v("Instagram")]),s("div",[e._v("Pinterest")])])]),s("div",{staticClass:"col-3"},[s("div",{staticClass:"title book"},[e._v(e._s(e.$t("layout.footer.SubscribetoYongbaoElectronicNews")))]),s("div",{staticClass:"privacy-policy"},[e._v("\n            "+e._s(e.$t("layout.footer.BySubscribing"))+"\n          ")]),s("div",{staticClass:"row mail"},[s("div",{staticClass:"col"},[e._v(e._s(e.$t("layout.footer.emailAddress")))]),s("div",{staticClass:"col-grow"},[s("q-img",{staticClass:"getmail",attrs:{src:"img/index/nextpage.png",width:"5px"}})],1)])])])]):e._e()],1),s("q-dialog",{attrs:{"transition-hide":"fade","transition-show":"fade"},model:{value:e.isLoginPop,callback:function(t){e.isLoginPop=t},expression:"isLoginPop"}},[s("Login",{on:{"show-register":e.showRegister,"hide-login":e.hideLogin,"show-new-password":e.showNewPassword}})],1),s("q-dialog",{attrs:{"transition-hide":"fade","transition-show":"fade"},model:{value:e.isRegisterPop,callback:function(t){e.isRegisterPop=t},expression:"isRegisterPop"}},[s("Register",{on:{"show-login":e.showLogin}})],1),s("q-dialog",{attrs:{"transition-hide":"fade","transition-show":"fade"},model:{value:e.isApplyArtistPop,callback:function(t){e.isApplyArtistPop=t},expression:"isApplyArtistPop"}},[s("ApplyArtist",{on:{"hide-applyArtist":e.hideApplyArtist}})],1),s("q-dialog",{attrs:{"transition-hide":"fade","transition-show":"fade"},model:{value:e.isSearch,callback:function(t){e.isSearch=t},expression:"isSearch"}},[s("Search")],1),s("q-dialog",{attrs:{"transition-hide":"fade","transition-show":"fade"},model:{value:e.isNewPasswordPop,callback:function(t){e.isNewPasswordPop=t},expression:"isNewPasswordPop"}},[s("NewPassword",{on:{"hide-login":e.hideLogin,"hide-new-password":e.hideNewPassword}})],1)],1)},i=[],n=s("9523"),r=s.n(n),o=(s("96cf"),s("c973")),c=s.n(o),l=s("bc3a"),d=s.n(l);function u(e,t){return d.a.post("/api/user/password/retrieve/code/send",{email:t})}function p(e,t,s,a){return d.a.post("/api/user/change/password",{userId:e,email:t,phone:s,password:a})}s("a8ce");var m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loginPop"},[s("q-card",{staticClass:"card login"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"title"},[e._v("登录")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",[s("div",[e._v("\n        没有账号？可以去"),s("span",{staticClass:"to-login btn",on:{click:function(t){return e.$emit("show-register")}}},[e._v("注册")])]),s("div",{ref:"msg2",staticClass:"msg"},[s("q-img",{attrs:{src:"img/index/exclamation.png",width:"14px"}}),e._v("\n        "+e._s(e.msg2)+"\n      ")],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],ref:"loginName",staticClass:"input",attrs:{type:"text",placeholder:"请输入用户名/邮箱"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("div",{ref:"msg3",staticClass:"msg"},[s("q-img",{attrs:{src:"img/index/exclamation.png",width:"14px"}}),e._v("\n        "+e._s(e.msg3)+"\n      ")],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"touch-repeat",rawName:"v-touch-repeat.enter",value:e.login,expression:"login",modifiers:{enter:!0}}],ref:"loginPassword",staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("div",{staticClass:"overflow-hidden mt10"},[s("div",{staticClass:"left"},[s("input",{staticClass:"check",attrs:{type:"checkbox"}}),s("div",{staticClass:"checkbox2"},[e._v("保持登录")])]),s("div",{staticClass:"right btn",on:{click:function(t){return e.$emit("show-new-password")}}},[e._v("忘记密码")])]),s("div",{ref:"login",staticClass:"text-white text-center login btn",on:{click:e.login}},[e._v("\n        登录\n      ")]),s("div",{staticClass:"checkbox1"},[e._v("\n        登录即代表同意 "),s("span",{staticClass:"xy btn"},[e._v("《永宝协议》")]),e._v("及\n        "),s("span",{staticClass:"ys btn"},[e._v("《永宝隐私政策》")])])])],1)],1)},g=[],v=(s("b0c0"),s("4082")),f=s.n(v),h={data:function(){return{name:"",password:"",msg:"",msg2:"",msg3:""}},methods:{getPassword:function(){this.icon1=!1,this.icon5=!0},login:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.name?(e.msg2="用户名/邮箱/手机不能为空",e.$refs.msg2.classList.add("opacity")):(e.msg2="",e.$refs.msg2.classList.remove("opacity")),""===e.password?(e.msg3="密码不能为空",e.$refs.msg3.classList.add("opacity")):(e.msg3="",e.$refs.msg3.classList.remove("opacity")),!e.name||""===e.password){t.next=17;break}return t.next=5,e.$store.dispatch("user/login",{name:e.name,password:e.password});case 5:if(s=t.sent,console.log("user",s),!s.success){t.next=16;break}return a=s.data,i=a.token,n=f()(a,["token"]),e.$q.cookies.set("token",i,{expires:1,path:"/"}),e.$q.cookies.set("userInfo",n,{expires:1,path:"/"}),t.next=13,e.$store.commit("user/setUserInfo",s.data);case 13:e.$emit("hide-login"),t.next=17;break;case 16:e.$q.notify({position:"top",timeout:1500,message:s.message,color:"negative"});case 17:case"end":return t.stop()}}),t)})))()}}},w=h,C=(s("c9bd"),s("2877")),x=s("f09f"),b=s("a370"),y=s("2c91"),_=s("9c40"),q=s("068f"),k=s("7f67"),$=s("35e7"),P=s("eebe"),S=s.n(P),R=Object(C["a"])(w,m,g,!1,null,"20d6f9e8",null),I=R.exports;S()(R,"components",{QCard:x["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:_["a"],QImg:q["a"]}),S()(R,"directives",{ClosePopup:k["a"],TouchRepeat:$["a"]});var A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"registerPop"},[e.showRegister?s("q-card",{staticClass:"card register"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"title"},[e._v("注册")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",[s("div",[e._v("\n        已有账号？去"),s("span",{staticClass:"to-register btn",on:{click:function(t){return e.$emit("show-login")}}},[e._v("登录")])]),s("div",{ref:"registerMsg1",staticClass:"msg"},[s("q-img",{attrs:{src:"img/index/exclamation.png",width:"14px"}}),e._v("\n        "+e._s(e.registerMsg1)+"\n      ")],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"您的全名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("div",{ref:"registerMsg2",staticClass:"msg"},[s("q-img",{attrs:{src:"img/index/exclamation.png",width:"14px"}}),e._v("\n        "+e._s(e.registerMsg2)+"\n      ")],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("div",{ref:"registerMsg3",staticClass:"msg"},[s("q-img",{attrs:{src:"img/index/exclamation.png",width:"14px"}}),e._v("\n        "+e._s(e.registerMsg3)+"\n      ")],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("input",{staticClass:"check mt10",attrs:{type:"checkbox"}}),s("div",{staticClass:"checkbox1 mt10"},[e._v("\n        我已阅读并同意 "),s("span",{staticClass:"xy btn"},[e._v("《永宝协议》")]),e._v("及\n        "),s("span",{staticClass:"ys btn"},[e._v("《永宝隐私政策》")])]),s("div",{staticClass:"text-white text-center register btn",on:{click:e.register}},[e._v("\n        注册\n      ")]),s("input",{staticClass:"check",attrs:{type:"checkbox"}}),s("div",{staticClass:"checkbox2"},[e._v("保持登录")])])],1):s("q-card",{staticClass:"card card1 success"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"quotation"},[e._v("“")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("div",{staticClass:"text-center title"},[e._v("恭喜，注册已确认！")]),s("div",{staticClass:"text-center content"},[e._v("已给您发送一封确认邮件")]),s("div",{staticClass:"text-center content"},[e._v("\n      您已经可以探索我们艺术家的作品并保存您的所爱。\n    ")])],1)],1)},N=[],Q={data:function(){return{showRegister:!0,name:"",email:"",password:"",registerMsg1:"",registerMsg2:"",registerMsg3:""}},methods:{register:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.name&&(e.registerMsg1="用户名不能为空",e.$refs.registerMsg1.classList.add("opacity")),""===e.email&&(e.registerMsg2="邮箱不能为空",e.$refs.registerMsg2.classList.add("opacity")),""===e.password&&(e.registerMsg3="密码不能为空",e.$refs.registerMsg3.classList.add("opacity")),""===e.name||""===e.email||""===e.password){t.next=18;break}return t.next=6,e.$store.dispatch("user/register",{name:e.name,email:e.email,password:e.password});case 6:if(s=t.sent,console.log("register",s),!s.success){t.next=17;break}return e.icon2=!1,e.icon6=!0,e.showRegister=!1,e.$q.cookies.set("userInfo",s.data,{expires:1,path:"/"}),t.next=15,e.$store.commit("user/setUserInfo",s.data);case 15:t.next=18;break;case 17:e.$q.notify({position:"top",timeout:1500,message:s.message,color:"negative"});case 18:case"end":return t.stop()}}),t)})))()}}},L=Q,O=(s("bdf5"),Object(C["a"])(L,A,N,!1,null,"1137e633",null)),M=O.exports;S()(O,"components",{QCard:x["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:_["a"],QImg:q["a"]}),S()(O,"directives",{ClosePopup:k["a"]});var z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"applyArtistPop"},[s("q-card",{directives:[{name:"show",rawName:"v-show",value:"page1"===e.mode,expression:"mode === 'page1'"}],staticClass:"card apply"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"title"},[e._v("成为艺术家")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",[s("div",[e._v("已有4555，6783位艺术家入驻")]),s("div",{staticClass:"label"},[s("q-input",{attrs:{square:"",outlined:"",dense:e.dense,placeholder:"姓氏"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{square:"",outlined:"",dense:e.dense,placeholder:"名字"},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{square:"",outlined:"",dense:e.dense,placeholder:"邮箱"},model:{value:e.artistEmail,callback:function(t){e.artistEmail=t},expression:"artistEmail"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{square:"",outlined:"",dense:e.dense,placeholder:"电话"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.countryOptions},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.languageOptions},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.findUsOptions},model:{value:e.findUs,callback:function(t){e.findUs=t},expression:"findUs"}})],1),s("div",{staticClass:"text-white text-center register",on:{click:e.goPage2}},[e._v("\n        下一步\n      ")])])],1),s("q-card",{directives:[{name:"show",rawName:"v-show",value:"page2"===e.mode,expression:"mode === 'page2'"}],staticClass:"card apply"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"title"},[e._v("成为艺术家")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[e._v("已有4555，6783位艺术家入驻")]),s("div",{staticClass:"col-grow back",on:{click:e.goPage1}},[s("q-img",{attrs:{src:"img/index/back.png",width:"14px"}}),e._v("\n          上一步\n        ")],1)]),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.isFullTimeOptions},model:{value:e.isFullTime,callback:function(t){e.isFullTime=t},expression:"isFullTime"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.onlineSellOptions},model:{value:e.onlineSell,callback:function(t){e.onlineSell=t},expression:"onlineSell"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.soldOptions},model:{value:e.sold,callback:function(t){e.sold=t},expression:"sold"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.channelOptions},model:{value:e.channel,callback:function(t){e.channel=t},expression:"channel"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{type:"textarea",square:"",outlined:"",dense:e.dense,placeholder:"如有其他画廊已合作，是哪一家（方便我们更全面了解您）"},model:{value:e.gallery,callback:function(t){e.gallery=t},expression:"gallery"}})],1),s("div",{staticClass:"label"},[s("q-select",{staticStyle:{"font-size":"12px"},attrs:{square:"",outlined:"",dense:e.dense,options:e.mediumOptions},model:{value:e.medium,callback:function(t){e.medium=t},expression:"medium"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{type:"textarea",square:"",outlined:"",dense:e.dense,placeholder:"您是画廊代表人么？请告知您的画廊名称、城市、国家"},model:{value:e.galleryInfo,callback:function(t){e.galleryInfo=t},expression:"galleryInfo"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{type:"textarea",square:"",outlined:"",dense:e.dense,placeholder:"最值得一看的展览/画廊/机构名称、城市、国家"},model:{value:e.recommend,callback:function(t){e.recommend=t},expression:"recommend"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{type:"textarea",square:"",outlined:"",dense:e.dense,placeholder:"最引人注目的奖项/奖项名称、获得年份"},model:{value:e.prize,callback:function(t){e.prize=t},expression:"prize"}})],1),s("div",{staticClass:"label"},[s("q-input",{attrs:{square:"",outlined:"",dense:e.dense,placeholder:"连接至网站"},model:{value:e.website,callback:function(t){e.website=t},expression:"website"}})],1),s("div",{staticClass:"text-white text-center register",on:{click:e.sellerRegister}},[e._v("\n        申请\n      ")])])],1)],1)},T=[],U={data:function(){return{mode:"page1",dense:!0,phone:"",firstname:"",lastname:"",country:"国家",countryOptions:["美国","英国","法国","日本"],language:"语言",languageOptions:["中文","日语","西班牙语","法语","英语"],findUs:"您是如何发现我们的",findUsOptions:["脸书","谷歌","朋友","其他"],isFullTime:"您是一个专业的全职艺术家么？",isFullTimeOptions:["您是一个专业的全职艺术家么？","是","否"],onlineSell:"售出的作品中，网上售出的比例占多少？",onlineSellOptions:["售出的作品中，网上售出的比例占多少？","还未售出，所以我才愿意参加永宝","小于10%","大于10%小于50%","大于50%"],sold:"您在过去一年里售出多少件自己的作品？",soldOptions:["您在过去一年里售出多少件自己的作品？","少于十件","10-30件","30-50件","50-100件","多于100件"],channel:"如果您在网上售出过作品，是通过什么渠道呢？",channelOptions:["如果您在网上售出过作品，是通过什么渠道呢？","个人网站","其他线上画廊","个人网站"],gallery:"",medium:"主要媒介",mediumOptions:["主要媒介","油画","摄影作品","绘画","多种媒体","织品","雕刻","安置","视频","其他"],galleryInfo:"",recommend:"",prize:"",website:"",profile:"",verifyCode:"",newPassword:"",countries:"",loclist:"",registerMsg1:"",registerMsg2:"",registerMsg3:""}},computed:{artistEmail:function(){return this.$store.state.user.info?this.$store.state.user.info.email:""}},methods:{goPage2:function(){this.mode="page2"},goPage1:function(){this.mode="page1"},sellerRegister:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/applyArtist",{userId:e.$store.state.user.info?e.$store.state.user.info.userId:"",firstname:e.firstname,lastname:e.lastname,email:e.artistEmail,phone:e.phone,country:e.country,language:e.language,findUs:e.findUs,isFullTime:e.isFullTime,onlineSell:e.onlineSell,sold:e.sold,channel:e.channel,gallery:e.gallery,medium:e.medium,galleryInfo:e.galleryInfo,recommend:e.recommend,prize:e.prize,website:e.website,profile:e.profile});case 2:s=t.sent,console.log("applyArtist",s),s.success?(e.$emit("hide-applyArtist"),a=e.$q.cookies.get("userInfo"),a&&(a.isApplyArtist=!0),e.$q.cookies.set("userInfo",a,{expires:1,path:"/"}),e.$q.notify({position:"top",timeout:1500,message:"申请成功",color:"positive"})):e.$q.notify({position:"top",timeout:1500,message:s.message,color:"negative"});case 5:case"end":return t.stop()}}),t)})))()}}},E=U,F=(s("8685"),s("27f9")),B=s("ddd8"),j=Object(C["a"])(E,z,T,!1,null,"f4483728",null),V=j.exports;S()(j,"components",{QCard:x["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:_["a"],QInput:F["a"],QSelect:B["a"],QImg:q["a"]}),S()(j,"directives",{ClosePopup:k["a"]});var D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchPop"},[s("q-card",{staticClass:"card card2"},[s("q-card-section",{staticClass:"row items-center q-pb-none section1"},[s("div",{staticClass:"title relative-position"},[s("q-select",{staticClass:"search-type-select",attrs:{dense:"",borderless:"",options:e.searchTypeOptions},model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"input2",attrs:{type:"text",placeholder:"请输入您要搜索"+e.searchType+"名称"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),s("div",{staticClass:"btn search2 text-white",on:{click:e.searchSubmit}},[e._v("搜索")])],1),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"close absolute",attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searchResult.length,expression:"searchResult.length"}],ref:"scrollTargetRef",staticClass:"q-pa-md",staticStyle:{"max-height":"250px",overflow:"auto"}},[s("q-infinite-scroll",{attrs:{offset:250,"scroll-target":e.$refs.scrollTargetRef},on:{load:e.searchLoad},scopedSlots:e._u([{key:"loading",fn:function(){return[s("div",{staticClass:"row justify-center q-my-md"},[s("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}])},e._l(e.searchResult,(function(t,a){return s("div",{key:a,staticClass:"caption"},["艺术家"==e.searchType?s("router-link",{staticClass:"caption-item",attrs:{to:"/"+e.$i18n.locale+"/artist/"+t.sellerId}},[t&&t.user&&t.user.avatar?s("q-img",{staticClass:"caption-img",attrs:{src:t.user.avatar,width:"120px",height:"120px"}}):e._e(),s("div",{staticClass:"caption-content"},[s("p",{staticClass:"caption-name"},[e._v(e._s(t.firstname)+" "+e._s(t.lastname))])])],1):"艺术品"==e.searchType?s("router-link",{staticClass:"caption-item",attrs:{to:"/"+e.$i18n.locale+"/artwork/"+t.commodityId}},[s("q-img",{staticClass:"caption-img",attrs:{src:t.photos[0].src,width:"120px",height:"120px"}}),s("div",{staticClass:"caption-content"},[s("p",{staticClass:"caption-name"},[e._v(e._s(t.name))])])],1):e._e()],1)})),0)],1),s("q-card-section",{directives:[{name:"show",rawName:"v-show",value:!e.searchResult.length,expression:"!searchResult.length"}]},[s("div",[s("div",{staticClass:"tag tag1"},[e._v("热门搜索")]),s("div",{staticClass:"tag btn"},[e._v("精选艺术家")]),s("div",{staticClass:"tag btn"},[e._v("油画")]),s("div",{staticClass:"tag btn"},[e._v("后起之秀")]),s("div",{staticClass:"tag btn"},[e._v("雕刻")]),s("div",{staticClass:"tag btn"},[e._v("摄影师")]),s("div",{staticClass:"tag btn"},[e._v("艺术大家")])])])],1)],1)},J=[],Y=(s("ac1f"),s("841c"),s("448a")),K=s.n(Y),W={data:function(){return{searchResult:[],search:"",searchType:"艺术家",searchTypeOptions:["艺术家","艺术品"],pageSize:2,currentPage:1,page:0,total:0}},methods:{searchSubmit:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("search",e.search,e.searchType),e.searchResult=[],e.currentPage=1,e.page=0,e.total=0,"艺术家"!=e.searchType){t.next=12;break}return t.next=8,e.sellerSearch();case 8:s=t.sent,s.success&&((a=e.searchResult).push.apply(a,K()(s.data.list)),e.currentPage+=1,e.page=Math.ceil(s.data.total/s.data.pageSize),e.total=s.data.total),t.next=18;break;case 12:if("艺术品"!=e.searchType){t.next=18;break}return t.next=15,e.artworkSearch();case 15:i=t.sent,console.log("artworkSearchData",i),i.success&&((n=e.searchResult).push.apply(n,K()(i.data.list)),e.currentPage+=1,e.page=Math.ceil(i.data.total/i.data.pageSize),e.total=i.data.total);case 18:case"end":return t.stop()}}),t)})))()},searchLoad:function(e,t){var s=this;return c()(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(s.currentPage>s.page)){e.next=3;break}return t(),e.abrupt("return");case 3:if("艺术家"!=s.searchType){e.next=9;break}return e.next=6,s.sellerSearch();case 6:a=e.sent,e.next=13;break;case 9:if("艺术品"!=s.searchType){e.next=13;break}return e.next=12,s.artworkSearch();case 12:a=e.sent;case 13:a.success&&((i=s.searchResult).push.apply(i,K()(a.data.list)),s.currentPage+=1,t());case 14:case"end":return e.stop()}}),e)})))()},sellerSearch:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("artist/sellerSearch",{name:"",tag:"",country:"",surname:"",locale:e.$i18n.locale,currentPage:e.currentPage,pageSize:e.pageSize});case 2:return s=t.sent,s.success||e.$q.notify({position:"top",timeout:1500,message:s.msg,color:"negative"}),t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))()},artworkSearch:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("artwork/getArtworkSearch",{name:"",shape:"",price:"",pricemin:"",pricemax:"",color:"",theme:"",category:"",technique:"",locale:e.$i18n.locale,currentPage:e.currentPage,pageSize:e.pageSize});case 2:return s=t.sent,s.success||e.$q.notify({position:"top",timeout:1500,message:s.msg,color:"negative"}),t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))()}}},G=W,H=(s("9251"),s("ef35")),X=s("8380"),Z=Object(C["a"])(G,D,J,!1,null,"d93c91e8",null),ee=Z.exports;S()(Z,"components",{QCard:x["a"],QCardSection:b["a"],QSelect:B["a"],QSpace:y["a"],QBtn:_["a"],QInfiniteScroll:H["a"],QImg:q["a"],QSpinnerDots:X["a"]}),S()(Z,"directives",{ClosePopup:k["a"]});var te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"newPasswordPop"},[s("q-card",{staticClass:"card get-password"},[s("q-card-section",{staticClass:"row items-center q-pb-none section1"},[s("div",{staticClass:"title"},[e._v("忘记密码")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("div",{staticClass:"section2"},[s("q-stepper",{ref:"stepper",staticClass:"stepper",attrs:{animated:"","alternative-labels":"","header-class":"stepper-header","done-color":"lime-9","active-color":"lime-9"},scopedSlots:e._u([{key:"navigation",fn:function(){return[s("q-stepper-navigation",{staticClass:"stepBtnContent"},[s("q-btn",{staticClass:"stepBtn",attrs:{label:4===e.step?"完成":"下一步"},on:{click:e.stepperNext}})],1)]},proxy:!0}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("q-step",{staticClass:"stepper-step",attrs:{name:1,title:"输入账户名",prefix:"1",done:e.step>1}},[s("q-input",{attrs:{dense:!0,square:"",outlined:"",placeholder:"请输入邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("q-step",{staticClass:"stepper-step",attrs:{name:2,prefix:"2",title:"获取验证码",done:e.step>2}},[s("q-input",{attrs:{dense:!0,square:"",outlined:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),s("q-step",{staticClass:"stepper-step",attrs:{name:3,prefix:"3",title:"重新设置新密码",done:e.step>3}},[s("q-input",{attrs:{dense:!0,square:"",outlined:"",placeholder:"请输入新密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("q-step",{staticClass:"stepper-step",attrs:{name:4,prefix:"4",title:"设置成功"}},[e._v("\n          成功\n        ")])],1)],1)],1)],1)},se=[],ae={data:function(){return{step:1,email:"",code:"",password:"",userInfo:""}},methods:{stepperNext:function(){switch(console.log(this.step),this.step){case 1:this.codeSend();break;case 2:this.codeVerify();break;case 3:this.setPassword();break;case 4:this.$emit("hide-new-password");break}},codeSend:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("sendEmail",e.$store.state.user),t.next=3,e.$store.dispatch("user/codeSend",{email:e.email});case 3:s=t.sent,s.success?(e.userInfo=s.data,e.$refs.stepper.next()):e.$q.notify({position:"top",timeout:1500,message:s.message,color:"negative"});case 5:case"end":return t.stop()}}),t)})))()},codeVerify:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/codeVerify",{userId:e.userInfo.userId,code:e.code});case 2:s=t.sent,s.success?e.$refs.stepper.next():e.$q.notify({position:"top",timeout:1500,message:s.message,color:"negative"});case 4:case"end":return t.stop()}}),t)})))()},setPassword:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/updateUser",{userId:e.userInfo.userId,password:e.password});case 2:s=t.sent,s.success?e.$refs.stepper.next():e.$q.notify({position:"top",timeout:1500,message:s.message,color:"negative"});case 4:case"end":return t.stop()}}),t)})))()}}},ie=ae,ne=(s("4c72"),s("f531")),re=s("87fe"),oe=s("b19c"),ce=Object(C["a"])(ie,te,se,!1,null,"f38599f6",null),le=ce.exports;S()(ce,"components",{QCard:x["a"],QCardSection:b["a"],QSpace:y["a"],QBtn:_["a"],QStepper:ne["a"],QStep:re["a"],QInput:F["a"],QStepperNavigation:oe["a"]}),S()(ce,"directives",{ClosePopup:k["a"]});var de={components:{Login:I,Register:M,ApplyArtist:V,Search:ee,NewPassword:le},data:function(){return{lang:this.$store.state.lang,step:1,right:!1,icon1:!1,icon2:!1,icon3:!1,icon4:!1,icon5:!1,icon6:!1,msg:"",msg2:"",msg3:"",mode:"page1",name:"",email:"",phone:"",password:"",newPassword:"",countries:"",loclist:"",registerMsg1:"",registerMsg2:"",registerMsg3:"",isLoginPop:!1,isRegisterPop:!1,isApplyArtistPop:!1,isSearch:!1,isNewPasswordPop:!1}},watch:{lang:function(e){console.log("watch lang",e),this.$i18n.locale=e.locale,this.$router.push({params:{locale:e.locale},query:this.$route.query})}},preFetch:function(e){var t=e.store,s=e.currentRoute;e.redirect;console.log("layout preFetch",s.params),t.commit("setLang",s.params.locale)},computed:{userInfo:function(){return this.$store.state.user.info},isApplyArtist:function(){return!!this.$store.state.user.info&&this.$store.state.user.info.seller}},created:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("layout created",e.$i18n.locale,e.$store.state.lang),e.$i18n.locale=e.$store.state.lang?e.$store.state.lang.locale:"zh-cn",s=e.$q.cookies.get("userInfo"),!s){t.next=11;break}if(!s.userId){t.next=9;break}return t.next=7,e.$store.dispatch("user/getUserInfo",{userId:s.userId});case 7:a=t.sent,console.log("getUserInfo",a);case 9:t.next=11;break;case 11:case"end":return t.stop()}}),t)})))()},mounted:function(){console.log("layout mounted",this.$i18n.locale,this.$store.state.lang)},methods:r()({changeLang:function(e){console.log("changelang",e),this.lang=e},goIndex:function(){this.$router.push("/".concat(this.$i18n.locale))},showLogin:function(){this.isRegisterPop=!1,this.isLoginPop=!0},hideLogin:function(){this.isLoginPop=!1},showRegister:function(){this.isLoginPop=!1,this.isRegisterPop=!0},hideRegister:function(){this.isRegisterPop=!1},showApplyArtist:function(){},hideApplyArtist:function(){this.isApplyArtistPop=!1},showNewPassword:function(){this.isLoginPop=!1,this.isNewPasswordPop=!0},hideNewPassword:function(){this.isNewPasswordPop=!1,this.isLoginPop=!0},getPassword:function(){this.icon1=!1,this.icon5=!0},goMine:function(){this.$router.push("/".concat(this.$i18n.locale,"/mine/"))},logout:function(){this.$store.commit("user/setUserInfo",null),this.$q.cookies.remove("token",{path:"/"}),this.$q.cookies.remove("userInfo",{path:"/"}),this.$router.push("/")},setNewPassword:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p(e.userId,e.email,e.phone,e.password);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},getVerifyCode:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u(e.email);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},sendVerifyCode:function(){return c()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},"setNewPassword",(function(){return c()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}))},ue=de,pe=(s("bf89"),s("42dd"),s("4d5a")),me=s("ead5"),ge=s("079e"),ve=s("24e8"),fe=Object(C["a"])(ue,a,i,!1,null,"46123336",null);t["default"]=fe.exports;S()(fe,"components",{QLayout:pe["a"],QImg:q["a"],QBtn:_["a"],QBreadcrumbs:me["a"],QBreadcrumbsEl:ge["a"],QDialog:ve["a"]})},"42dd":function(e,t,s){"use strict";s("e324")},"4c72":function(e,t,s){"use strict";s("00de")},8685:function(e,t,s){"use strict";s("32f3")},9251:function(e,t,s){"use strict";s("a778")},a344:function(e,t,s){},a778:function(e,t,s){},a8ce:function(e){e.exports=JSON.parse("{}")},bdf5:function(e,t,s){"use strict";s("a344")},bf89:function(e,t,s){"use strict";s("2f32")},c9bd:function(e,t,s){"use strict";s("38c1")},e324:function(e,t,s){}}]);