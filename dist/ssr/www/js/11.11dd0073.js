(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"150b":function(t,e,n){"use strict";n("858b")},"6ba8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB/0lEQVR4Xu2bsU4CQRCG5yiORk18Ad/BxEYqbGxtfQYSk6WhBVoK+IkJz2DtC2glFhbGV7CyM2p1zZqLYO6OBRbCmnX3344w3M3/3ezs7M6RSOQjiVy/EMC6CGi1Wntpmp6ss/Px+yzLniaTydcq35ZGQLvdvhSRK611w0dxtj4lSfIgItej0ejG9BsjAKVUT0S6tjf5J3Y9AP2qrwsAlFKnIpJTC3E0AEyLwkwAcvE5hBDHFEBpSpcAdDqd/SzLPkJUPteUpunBYDD4nH8uAVBKNUXkLmQAInIG4J4AZgQYAcVw5xRgDmAS5CrAZZB1AAshVoIshcMmwL2Aq83QwmnLLJBMJ0uubG1i100EADAdriw7Wis5kXu9Yh/SB5BfpzSUUtpGrcGGAJxMAUYAp0DkOUBEfs/ZKokn32FWhytbm7zoJgna3NkTGwJwsgp48nRt3GAEMALYGGFniK0x9gbZG/whwOYom6MFAuwOx9EdPgbwHOsq8A7gsDjtY0uCtwAuogVQq9WOhsPha4wA3rTW5+Px+KW6Xw59Cky11o/1er1bfDdwVxFgbFjYnEj4ZLNtBAQhfttSOBjx2wAISvymAIITvwmAIMXbAghWvA2AoMWvAxC8+FUAohC/DEDT9EqKT9XbLn1ZqASLbaNd3sjXa/Gvs74+mb/yK/oI+AbY9H9QUldH2QAAAABJRU5ErkJggg=="},"73c6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"art-information"},[a("div",{staticClass:"art-information-header"},[a("div",{staticClass:"art-information-video content-width"},[a("div",{staticClass:"art-information-video-content"},[a("div",{staticClass:"art-information-video-iframe"},[a("iframe",{attrs:{src:"http://www.yoboart.com/video?isShowConfig=false&ccId="+t.videoListActive.ccId+"&siteId="+t.videoListActive.siteId+"&img_path="+t.videoListActive.videoPhoto,width:"100%",height:"100%",scrolling:"no",frameBorder:"0"}})]),a("div",{staticClass:"art-information-video-total"},[t._v("\n             累计观看 "+t._s(t.videoListActive.watchs)+" 人\n          ")])]),a("div",{staticClass:"art-information-video-list"},[a("h3",{staticClass:"art-information-video-list-title"},[t._v("播放列表")]),t.information.videos&&t.information.videos.length?a("ul",{staticClass:"art-information-video-list-ul"},t._l(t.information.videos,(function(e,n){return a("li",{key:e.videoId,staticClass:"art-information-video-list-li",on:{click:function(n){return t.changeVideo(e)}}},[a("Avatar",{attrs:{src:e.videoPhoto,width:"210px",height:"105px",type:"photo"}}),a("p",{staticClass:"art-information-video-list-p"},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)})),0):t._e()])])]),a("div",{staticClass:"art-information-main"},[a("div",{staticClass:"art-information-main-box content-width"},[a("div",{staticClass:"art-information-main-nav"},[a("a",{staticClass:"art-information-main-nav-a ",class:{active:0==t.mainNavActive},attrs:{href:"javascript:;"},on:{click:function(e){t.mainNavActive=0}}},[t._v("详情")]),a("a",{staticClass:"art-information-main-nav-a",class:{active:1==t.mainNavActive},attrs:{href:"javascript:;"},on:{click:function(e){t.mainNavActive=1}}},[t._v("\n            评论 "+t._s(t.pagination.total?"("+t.pagination.total+")":"")+"\n          ")])]),t.mainNavActive?a("div",{staticClass:"art-information-main-content art-information-main-content-comment"},[a("div",{staticClass:"art-information-reply"},[a("div",{staticClass:"art-information-reply-avatar"},[a("Avatar",{attrs:{src:"",width:"55px",height:"55px",radius:""}})],1),a("div",{staticClass:"art-information-reply-content art-information-reply-disabled"},[t.userInfo?[a("q-editor",{attrs:{"min-height":"5rem",placeholder:"请输入回复内容。",toolbar:[]},model:{value:t.commentContent,callback:function(e){t.commentContent=e},expression:"commentContent"}}),a("q-btn",{attrs:{color:"white q-mt-sm","text-color":"black",label:"回复"},on:{click:t.submitVideoComment}})]:[a("span",{staticClass:"art-information-login"},[t._v("登录")]),t._v("后可以交流发言，写出观后感。\n              ")]],2)]),a("div",{staticClass:"art-information-comment"},[a("h3",{staticClass:"comment-title"},[t._v("全部影评")]),a("div",{staticClass:"comment-list"},[a("ul",{staticClass:"comment-list-ul"},t._l(t.comment,(function(e,i){return a("li",{staticClass:"comment-list-li "},[a("div",{staticClass:"comment-list-avatar"},[a("Avatar",{attrs:{src:"",width:"55px",height:"55px",radius:""}})],1),a("div",{staticClass:"comment-item"},[a("div",{staticClass:"comment-item-header"},[t._v("\n                    "+t._s(e.userName)+" "+t._s(e.createdDate)+"\n                    ")]),a("div",{staticClass:"comment-item-main",domProps:{innerHTML:t._s(e.content)}}),a("div",{staticClass:"comment-item-footer"},[a("div",{staticClass:"comment-item-footer-btn",on:{click:function(n){return t.likes("comment",e.commentId,e)}}},[a("q-img",{attrs:{src:n("9291"),width:"14px"}}),t._v(" 赞 "+t._s(e.likes)+"\n                      ")],1),a("div",{staticClass:"comment-item-footer-btn",on:{click:function(t){e.edit=!e.edit}}},[a("q-img",{staticClass:"q-ml-md",attrs:{src:n("6ba8"),width:"14px"}}),t._v(" 回复 "+t._s(e.reply&&e.reply.length?e.reply.length:0)+"\n                      ")],1)]),e.edit?a("div",{staticClass:"comment-item-reply"},[a("q-editor",{attrs:{"min-height":"5rem",placeholder:"请输入回复内容。",toolbar:[]},model:{value:e.replyContent,callback:function(n){t.$set(e,"replyContent",n)},expression:"commentItem.replyContent"}}),a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"white q-mt-sm","text-color":"black",label:"取消"},on:{click:function(t){e.edit=!1}}}),a("q-btn",{attrs:{color:"white q-mt-sm","text-color":"black",label:"回复"},on:{click:function(n){return t.submitCommentReply(e,i)}}})],1)],1):t._e(),e.reply&&e.reply.length?a("ul",{staticClass:"comment-list-ul"},t._l(e.reply,(function(e,n){return a("li",{staticClass:"comment-list-li "},[a("div",{staticClass:"comment-list-avatar"},[a("Avatar",{attrs:{src:"",width:"55px",height:"55px",radius:""}})],1),a("div",{staticClass:"comment-item"},[a("div",{staticClass:"comment-item-header"},[t._v("\n                          "+t._s(e.userName)+" 回复 "+t._s(e.replyUserName)+" "+t._s(e.createdDate)+"\n                          ")]),a("div",{staticClass:"comment-item-main",domProps:{innerHTML:t._s(e.content)}}),a("div",{staticClass:"comment-item-footer"},[a("div",{staticClass:"comment-item-footer-btn",on:{click:function(n){return t.likes("reply",e.replyId,e)}}},[a("q-img",{attrs:{src:"/src/assets/img/fabulous.png",width:"14px"}}),t._v(" 赞 "+t._s(e.likes)+"\n                            ")],1),a("div",{staticClass:"comment-item-footer-btn",on:{click:function(t){e.edit=!e.edit}}},[a("q-img",{staticClass:"q-ml-md",attrs:{src:"/src/assets/img/comment.png",width:"14px"}}),t._v(" 回复 "+t._s(e.replyNums)+"\n                            ")],1)]),e.edit?a("div",{staticClass:"comment-item-reply"},[a("q-editor",{attrs:{"min-height":"5rem",placeholder:"请输入回复内容。",toolbar:[]},model:{value:e.replyContent,callback:function(n){t.$set(e,"replyContent",n)},expression:"replyItem.replyContent"}}),a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"white q-mt-sm","text-color":"black",label:"取消"},on:{click:function(t){e.edit=!1}}}),a("q-btn",{attrs:{color:"white q-mt-sm","text-color":"black",label:"回复"},on:{click:function(n){return t.submitReplyReply(e,i)}}})],1)],1):t._e()])])})),0):t._e()])])})),0)]),a("div",{staticClass:"comment-more"},[a("a",{staticClass:"comment-more-a",attrs:{href:"javascript:;"},on:{click:t.addComment}},[t._v(" "+t._s(t.isNextPage?"更多评论":"没有更多评论了")+" ")])])])]):a("div",{staticClass:"art-information-main-content art-information-main-content-detail",domProps:{innerHTML:t._s(t.videoListActive.detail||"暂无内容")}})])])])])},i=[],r=(n("99af"),n("d81d"),n("b0c0"),n("448a")),o=n.n(r),s=(n("96cf"),n("c973")),c=n.n(s),m=n("7150"),d=n("1954"),u=n("a748"),l=n("bd4c"),p={components:{Avatar:m["a"],Login:d["a"]},data:function(){return{information:{videos:[{videoId:"",ccId:"",siteId:"",videoPhoto:""}]},videoListActive:{ccId:"",detail:"",siteId:"",title:"",videoId:"",videoPhoto:"",videoSrc:"",watchs:0},mainNavActive:0,commentContent:"",comment:[],pagination:{currentPage:1,pageSize:10,total:0}}},created:function(){var t=this;return c()(regeneratorRuntime.mark((function e(){var n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params,n.locale,a=n.informationId,e.next=3,u["a"].get("/api/BFF/informationDetail",{params:{informationId:a}}).then((function(t){return t.data}));case 3:if(i=e.sent,!i.success){e.next=12;break}if(t.information=i.data.information,!i.data.information.videos||!i.data.information.videos.length){e.next=12;break}return t.videoListActive=i.data.information.videos[0],e.next=10,t.getVideoComment({videoId:i.data.information.videos[0].videoId,currentPage:t.pagination.currentPage,pageSize:t.pagination.pageSize});case 10:r=e.sent,t.comment=r.list;case 12:case"end":return e.stop()}}),e)})))()},computed:{userInfo:function(){return this.$store.state.user.info?this.$store.state.user.info:""},isNextPage:function(){return this.pagination.total>this.pagination.currentPage*this.pagination.pageSize}},methods:{getVideoComment:function(t){var e=this;return c()(regeneratorRuntime.mark((function n(){var a,i,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.videoId,i=t.currentPage,r=t.pageSize,u["a"].post("/api/information/video/watchs",{videoId:a}),n.next=4,u["a"].get("/api/information/video/comment",{params:{videoId:a,currentPage:i,pageSize:r}}).then((function(t){return t.data}));case 4:if(o=n.sent,!o.success){n.next=11;break}return e.pagination={currentPage:o.data.currentPage,pageSize:o.data.pageSize,total:o.data.total},o.data.list.map((function(t){return t.edit=!1,t.replyContent="",t.createdDate=l["b"].formatDate(t.createdDate,"YYYY-MM-DD HH:mm:ss"),t.reply&&t.reply.length&&t.reply.map((function(t){return t.edit=!1,t.replyContent="",t.createdDate=l["b"].formatDate(t.createdDate,"YYYY-MM-DD HH:mm:ss"),t})),t})),n.abrupt("return",o.data);case 11:return e.$q.notify({position:"top",timeout:1500,message:o.message,color:"negative"}),n.abrupt("return");case 13:case"end":return n.stop()}}),n)})))()},addComment:function(){var t=this;return c()(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isNextPage){e.next=2;break}return e.abrupt("return");case 2:return n=t.pagination.currentPage+1,e.next=5,t.getVideoComment({videoId:t.videoListActive.videoId,currentPage:n,pageSize:t.pagination.pageSize});case 5:a=e.sent,t.comment=[].concat(o()(t.comment),o()(a.list));case 7:case"end":return e.stop()}}),e)})))()},changeVideo:function(t){var e=this;return c()(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.videoListActive=t,n.next=3,e.getVideoComment({videoId:t.videoId,currentPage:1,pageSize:e.pagination.pageSize});case 3:a=n.sent,e.comment=a.list;case 5:case"end":return n.stop()}}),n)})))()},submitVideoComment:function(){var t=this;return c()(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.userInfo){e.next=3;break}return t.$q.notify({position:"top",timeout:1500,message:"请登录！",color:"negative"}),e.abrupt("return");case 3:return e.next=5,u["a"].post("/api/information/video/comment",{userId:t.userInfo.userId,userName:t.userInfo.name,videoId:t.videoListActive.videoId,content:t.commentContent}).then((function(t){return t.data}));case 5:n=e.sent,n.success&&(t.commentContent="",n.data.edit=!1,n.data.reply=[],n.data.replyContent="",n.data.createdDate=l["b"].formatDate(n.data.createdDate,"YYYY-MM-DD HH:mm:ss"),t.comment.push(n.data));case 7:case"end":return e.stop()}}),e)})))()},submitCommentReply:function(t,e){var n=this;return c()(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.userInfo){a.next=3;break}return n.$q.notify({position:"top",timeout:1500,message:"请登录！",color:"negative"}),a.abrupt("return");case 3:return a.next=5,u["a"].post("/api/information/video/comment/reply",{userId:n.userInfo.userId,userName:n.userInfo.name,replyUserId:t.userId,replyUserName:t.userName,commentId:t.commentId,content:t.replyContent}).then((function(t){return t.data}));case 5:i=a.sent,i.success&&(t.replyContent="",t.edit=!1,i.data.edit=!1,i.data.reply=[],i.data.replyContent="",i.data.createdDate=l["b"].formatDate(i.data.createdDate,"YYYY-MM-DD HH:mm:ss"),n.comment[e].reply.push(i.data));case 7:case"end":return a.stop()}}),a)})))()},submitReplyReply:function(t,e){var n=this;return c()(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.userInfo){a.next=3;break}return n.$q.notify({position:"top",timeout:1500,message:"请登录！",color:"negative"}),a.abrupt("return");case 3:return a.next=5,u["a"].post("/api/information/video/comment/reply/reply",{userId:n.userInfo.userId,userName:n.userInfo.name,replyUserId:t.userId,replyUserName:t.userName,commentId:t.commentId,content:t.replyContent,replyId:t.replyId}).then((function(t){return t.data}));case 5:i=a.sent,i.success&&(t.replyNums+=1,t.replyContent="",t.edit=!1,i.data.edit=!1,i.data.reply=[],i.data.replyContent="",i.data.createdDate=l["b"].formatDate(i.data.createdDate,"YYYY-MM-DD HH:mm:ss"),n.comment[e].reply.push(i.data));case 7:case"end":return a.stop()}}),a)})))()},likes:function(t,e,n){var a=this;return c()(regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:i.t0=t,i.next="comment"===i.t0?3:(i.t0,7);break;case 3:return i.next=5,a.likesFetch({userId:a.userInfo.userId,userName:a.userInfo.name,typeId:e,type:t});case 5:return r=i.sent,i.abrupt("break",11);case 7:return i.next=9,a.likesFetch({userId:a.userInfo.userId,userName:a.userInfo.name,typeId:e,type:t});case 9:return r=i.sent,i.abrupt("break",11);case 11:if(!r.success){i.next=15;break}n.likes+=1,i.next=17;break;case 15:return a.$q.notify({position:"top",timeout:1500,message:r.message,color:"negative"}),i.abrupt("return");case 17:case"end":return i.stop()}}),i)})))()},likesFetch:function(t){return c()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].post("/api/information/video/comment/likes",t).then((function(t){return t.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}},v=p,f=(n("150b"),n("2877")),A=n("9989"),g=n("d66b"),h=n("9c40"),b=n("068f"),C=n("e7a9"),w=n("eebe"),y=n.n(w),I=Object(f["a"])(v,a,i,!1,null,"6506ef5e",null);e["default"]=I.exports;y()(I,"components",{QPage:A["a"],QEditor:g["a"],QBtn:h["a"],QImg:b["a"],QBtnGroup:C["a"]})},"858b":function(t,e,n){},9291:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEeElEQVR4XuWbTWhcVRTH/+dNRBcKLnRbLCpV60IpCrYurFQXFSsWWkpW1nalkHtfpqSUClpQqW3m3XMTUAimdlOKih9YdeEHBqFRaLWipDXSQqFEN4IiUWjwzZE7JCGZJvXdvI9keh8Msznnf875cd/MfefcR1iGq6enZx0RbXIfAJtE5EwURd+7byL62hjzU1VpUVWBZuJorQ8D2HOVuJeIaLcx5rMqcqsUgFLqOBHtyFDYnwA2MvMPGWxzmVQKQGv9B4CbM2b8ITM/ndF2yWaVAdBa3wfgjE+mtVptbaPROOvj42tbJYBHAHzlkyAR7TPGHPTx8bVd6QBGjTEbfIvysV/RAFwhzWZzw8DAwKhPUT62Kx6AiBy01u7zKcrHdsUDADDGzPf6FOVj2wkAICKPW2s/9yksq21HACCiXmOMyVqUj11HAABwlJl3+hSW1bZKAC8BeDFrYm1255j5niX6XtWtMgBKqfeJaKlb23+Z+bqOBaC1fhTAlzkK+J2Zb83hv6hrJStAKfUJEW3OUcB5Zr4zh//yAVBK7SKiN3Mmf5qZH8ipsaB7qStAa+0efd029u48yYvIp9baJ/JoLOZbNoCXAezPmzgRHTbG9OXVWci/NAC9vb33p2k6SkQ3FJD4TmY+WoDOFRKlAVBKHSOi7iKSFpEHrbWnitBq1ygFgNZ6K4D3ikq4q6vrxv7+/r+L0purUwqAOI5Pisj6ghK+yMyrC9Iq/xaI4/iIiBS5bx8BcKAAAOPM/Fupt4DWugGgt4Bky5KYAHCqVqvtn2m2FnYLaK1d1+bVsjIvWPfy9CP267MA6vX6LWmargHgPqvm/VAQ/UxE45OTk+NDQ0P/tCejtX4GwFsFJ1m23GUAq1sAlFLbiOidDBHHarXa9vZevdba9ftd37+jLiJ6njyKnyluHoTp7a6b+HTiNUJa62EAz3pmv4uZjzgfrbX3wMMzVpnmLQCnAazziUJEDWNMa8J7LQAQn+KnbUeYeeM1AOCYWwEhA9gcMoBvmHl9sABEZLu19t1gATBzaw8ULIAoitYkSfJLsAAAdDPz8WABiMgea20jZACtiXOwAKIoWpUkyaVQAcxOm0MEcHH6EKb7DvJv8AAzu1F96wpuBYjIsLV2d7AA2g9dBbcCAEwx8/Uhr4B5g5bgVoCIfGutfSjkFbCXmQ+FCuAkMz88twUY1C0gIk9Zaz8KFgCAx5j5i2ABiMgOa+3bwQIA8BwzvxEygBeY+ZVgARDRVmPMB8ECSNP0jsHBwQvtAM4DuN1nPEZEw8aY1hNVvV6/K03Tcz7+y2R7gpm3tMd24/GlnOKuM3PixPr6+m6ampr6a5mKyhw2iqInkyT5+AoAWuvXXB2ZlVwTgWiLMebEjI9SKiGi2EejYtuYmXmhmK3piNbanQ7ZljGpeR2VGR9PjYyhcpt9B6Dh+v+LKc2eEYrj+FCz2VxLRO7NjNvaHMYAuFdYz85tJ7WLxnHcLSIOpDs0kfUd4dxVTgu4E2ATRDQhIr8C+JGZh/5P/D9WPEs/fyYWVgAAAABJRU5ErkJggg=="}}]);