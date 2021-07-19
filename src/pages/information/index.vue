<template>
  <q-page>
    <div class="art-information">
      <!-- 视频 -->
      <div class="art-information-header">
        <div class="art-information-video content-width">
          <div class="art-information-video-content">
            <div class="art-information-video-iframe" >
              <iframe :src="`http://www.yoboart.com/video?isShowConfig=false&ccId=${videoListActive.ccId}&siteId=${videoListActive.siteId}&img_path=${videoListActive.videoPhoto}`" width="100%" height="100%" scrolling="no" frameBorder="0"></iframe>
            </div>
            <div class="art-information-video-total">
              <!-- 最近在看 25 人 -->
               累计观看 {{videoListActive.watchs}} 人
            </div>
          </div>
          <div class="art-information-video-list">
            <h3 class="art-information-video-list-title">播放列表</h3>
            <ul class="art-information-video-list-ul" v-if="information.videos && information.videos.length">
              <li class="art-information-video-list-li" v-for="(item, index) in information.videos" :key="item.videoId" @click="changeVideo(item)">
                <Avatar
                  :src="item.videoPhoto"
                  width="210px"
                  height="105px"
                  type="photo"
                />
                <p class="art-information-video-list-p">
                  {{item.title}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 详情评论 -->
      <div class="art-information-main">
        <div class="art-information-main-box content-width">
          <div class="art-information-main-nav">
            <a href="javascript:;" class="art-information-main-nav-a " :class="{active: mainNavActive == 0}" @click="mainNavActive = 0">详情</a>
            <a href="javascript:;" class="art-information-main-nav-a" :class="{active: mainNavActive == 1}" @click="mainNavActive = 1">
              评论 {{ pagination.total ? `(${pagination.total})` : '' }}
            </a>
          </div>
          <div class="art-information-main-content art-information-main-content-comment" v-if="mainNavActive">
            <div class="art-information-reply">
              <div class="art-information-reply-avatar">
                <Avatar
                  :src="''"
                  width="55px"
                  height="55px"
                  radius
                />
              </div>

              <div class="art-information-reply-content art-information-reply-disabled">
                <template v-if="!userInfo">
                  <span class="art-information-login" >登录</span>后可以交流发言，写出观后感。
                </template>

                <template v-else>
                  <q-editor v-model="commentContent" min-height="5rem" placeholder="请输入回复内容。" :toolbar="[]" />
                  <q-btn color="white q-mt-sm" text-color="black" label="回复" @click="submitVideoComment" />
                </template>

              </div>


            </div>
            <div class="art-information-comment">
              <h3 class="comment-title">全部影评</h3>
              <div class="comment-list">
                <ul class="comment-list-ul">
                  <li class="comment-list-li " v-for="(commentItem, commentIndex) in comment">
                    <div class="comment-list-avatar">
                      <Avatar
                        :src="''"
                        width="55px"
                        height="55px"
                        radius
                      />
                    </div>
                    <div class="comment-item">
                      <div class="comment-item-header">
                      {{commentItem.userName}} {{ commentItem.createdDate }}
                      </div>
                      <div class="comment-item-main" v-html="commentItem.content">
                      </div>
                      <div class="comment-item-footer">
                        <div class="comment-item-footer-btn" @click="likes('comment', commentItem.commentId, commentItem)">
                          <q-img src="~assets/img/fabulous.png" width="14px" /> 赞 {{commentItem.likes}}
                        </div>
                        <div class="comment-item-footer-btn" @click="commentItem.edit = !commentItem.edit">
                          <q-img class="q-ml-md" src="~assets/img/comment.png" width="14px" /> 回复 {{commentItem.reply && commentItem.reply.length ? commentItem.reply.length : 0}}
                        </div>


                      </div>
                      <div class="comment-item-reply" v-if="commentItem.edit">
                          <q-editor v-model="commentItem.replyContent" min-height="5rem" placeholder="请输入回复内容。" :toolbar="[]" />
                          <q-btn-group push>
                            <q-btn color="white q-mt-sm" text-color="black" label="取消" @click="commentItem.edit = false" />
                            <q-btn color="white q-mt-sm" text-color="black" label="回复" @click="submitCommentReply(commentItem, commentIndex)" />
                          </q-btn-group>
                        </div>


                      <ul class="comment-list-ul" v-if="commentItem.reply && commentItem.reply.length">
                        <li class="comment-list-li " v-for="(replyItem, replyIndex) in commentItem.reply">
                          <div class="comment-list-avatar">
                            <Avatar
                              :src="''"
                              width="55px"
                              height="55px"
                              radius
                            />
                          </div>
                          <div class="comment-item">
                            <div class="comment-item-header">
                            {{replyItem.userName}} 回复 {{ replyItem.replyUserName }} {{ replyItem.createdDate }}
                            </div>
                            <div class="comment-item-main" v-html="replyItem.content">
                            </div>
                            <div class="comment-item-footer">
                              <div class="comment-item-footer-btn" @click="likes('reply', replyItem.replyId, replyItem)">
                                <q-img src="/src/assets/img/fabulous.png" width="14px"  /> 赞 {{replyItem.likes}}
                              </div>
                              <div class="comment-item-footer-btn" @click="replyItem.edit = !replyItem.edit">
                                <q-img class="q-ml-md" src="/src/assets/img/comment.png" width="14px" /> 回复 {{ replyItem.replyNums }}
                              </div>


                            </div>
                            <div class="comment-item-reply" v-if="replyItem.edit">
                                <q-editor v-model="replyItem.replyContent" min-height="5rem" placeholder="请输入回复内容。" :toolbar="[]" />
                                <q-btn-group push>
                                  <q-btn color="white q-mt-sm" text-color="black" label="取消" @click="replyItem.edit = false" />
                                  <q-btn color="white q-mt-sm" text-color="black" label="回复" @click="submitReplyReply(replyItem, commentIndex)" />
                                </q-btn-group>
                              </div>
                          </div>
                        </li>
                      </ul>




                    </div>

                  </li>


                </ul>
              </div>
              <div class="comment-more">
                <a href="javascript:;" class="comment-more-a" @click="addComment"> {{ isNextPage ? "更多评论" : "没有更多评论了" }} </a>
              </div>

            </div>

          </div>
          <!-- 资讯-视频详情  -->
          <div class="art-information-main-content art-information-main-content-detail" v-else v-html="videoListActive.detail || '暂无内容'"></div>
        </div>
      </div>
    </div>

  </q-page>
</template>
<script>
import Avatar from '../../components/avatar.vue';
import Login from '../../components/login.vue'
import { axiosInstance } from 'src/boot/axios'
import { date } from 'quasar'

export default {
  components: {
    Avatar,
    Login
  },
  data() {
    return {
      information: {
        videos: [{
          videoId: '',
          ccId: '',
          siteId: '',
          videoPhoto: ''
        }]
      },
      videoListActive: {
        ccId: "",
        detail: "",
        siteId: "",
        title: "",
        videoId: "",
        videoPhoto: "",
        videoSrc: "",
        watchs: 0
      },
      mainNavActive: 0,
      commentContent: '',
      comment: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
    }
  },

  async created() {
    const { locale, informationId } = this.$route.params;

    const informationDetail = await axiosInstance.get('/api/BFF/informationDetail', {
      params: {
        informationId
      }
    }).then(response => {
      return response.data;
    })
    if(informationDetail.success) {

      this.information = informationDetail.data.information;

      if(informationDetail.data.information.videos && informationDetail.data.information.videos.length) {
        this.videoListActive = informationDetail.data.information.videos[0];
        const commentData = await this.getVideoComment({
          videoId: informationDetail.data.information.videos[0].videoId,
          currentPage: this.pagination.currentPage,
          pageSize: this.pagination.pageSize
        });
        this.comment = commentData.list;
      }

    }


  },

  computed: {
    userInfo() {
      return this.$store.state.user.info ? this.$store.state.user.info : '';
    },
    isNextPage() {
      return this.pagination.total > this.pagination.currentPage * this.pagination.pageSize
    }
  },

  methods: {
    async getVideoComment({videoId, currentPage, pageSize}) {
      // 添加视频观看数
      axiosInstance.post('/api/information/video/watchs', {
        videoId
      })

      const comment = await axiosInstance.get('/api/information/video/comment', {
        params: {
          videoId,
          currentPage,
          pageSize
        }
      }).then(response => {
        return response.data;
      })
      if(comment.success) {
        this.pagination = {
          currentPage: comment.data.currentPage,
          pageSize: comment.data.pageSize,
          total: comment.data.total
        }
        comment.data.list.map((item) => {
          item.edit = false;
          item.replyContent = '';
          item.createdDate = date.formatDate(item.createdDate, 'YYYY-MM-DD HH:mm:ss')
          if(item.reply && item.reply.length) {
            item.reply.map((item) => {
              item.edit = false;
              item.replyContent = '';
              item.createdDate = date.formatDate(item.createdDate, 'YYYY-MM-DD HH:mm:ss')
              return item;
            })
          }
          return item;
        })
        return comment.data;
      }else{
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: comment.message,
          color: "negative",
        });
        return ;
      }
    },
    async addComment() {
      if(!this.isNextPage) {
        return;
      }
      const currentPageNex = this.pagination.currentPage + 1;
      const commentData = await this.getVideoComment({
        videoId: this.videoListActive.videoId,
        currentPage: currentPageNex,
        pageSize: this.pagination.pageSize
      });

      this.comment = [...this.comment, ...commentData.list];
    },
    async changeVideo(item) {
      this.videoListActive = item;

      const commentData = await this.getVideoComment({
        videoId: item.videoId,
        currentPage: 1,
        pageSize: this.pagination.pageSize
      })

      this.comment = commentData.list;
    },
    async submitVideoComment() {
      if(!this.userInfo) {
        this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "请登录！",
            color: "negative",
          });
          return ;
      }

      const comment = await axiosInstance.post('/api/information/video/comment', {
        userId: this.userInfo.userId,
        userName: this.userInfo.name,
        videoId: this.videoListActive.videoId,
        content: this.commentContent,
      }).then(response => {
        return response.data;
      })
      if(comment.success) {
        this.commentContent = '';
        comment.data.edit = false;
        comment.data.reply = [];
        comment.data.replyContent = '';
        comment.data.createdDate = date.formatDate(comment.data.createdDate, 'YYYY-MM-DD HH:mm:ss')
        this.comment.push(comment.data)
      }
    },
    async submitCommentReply(item, index) {
      if(!this.userInfo) {
        this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "请登录！",
            color: "negative",
          });
          return ;
      }

      const comment = await axiosInstance.post('/api/information/video/comment/reply', {
        userId: this.userInfo.userId,
        userName: this.userInfo.name,
        replyUserId: item.userId,
        replyUserName: item.userName,
        commentId: item.commentId,
        content: item.replyContent,

      }).then(response => {
        return response.data;
      })
      if(comment.success) {
        item.replyContent = '';
        item.edit = false;
        comment.data.edit = false;
        comment.data.reply = [];
        comment.data.replyContent = '';
        comment.data.createdDate = date.formatDate(comment.data.createdDate, 'YYYY-MM-DD HH:mm:ss')
        this.comment[index].reply.push(comment.data)
      }
    },
    async submitReplyReply(item, index) {
      if(!this.userInfo) {
        this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "请登录！",
            color: "negative",
          });
          return ;
      }

      const comment = await axiosInstance.post('/api/information/video/comment/reply/reply', {
        userId: this.userInfo.userId,
        userName: this.userInfo.name,
        replyUserId: item.userId,
        replyUserName: item.userName,
        commentId: item.commentId,
        content: item.replyContent,
        replyId: item.replyId
      }).then(response => {
        return response.data;
      })
      if(comment.success) {
        item.replyNums  += 1;
        item.replyContent = '';
        item.edit = false;

        comment.data.edit = false;
        comment.data.reply = [];
        comment.data.replyContent = '';
        comment.data.createdDate = date.formatDate(comment.data.createdDate, 'YYYY-MM-DD HH:mm:ss')


        this.comment[index].reply.push(comment.data)
      }
    },
    async likes(type, typeId, item) {
      let result;
      switch(type) {
        case "comment":
          result = await this.likesFetch({
            userId: this.userInfo.userId,
            userName: this.userInfo.name,
            typeId,
            type
          });
          break;
        case "likes":
        default:
          result = await this.likesFetch({
            userId: this.userInfo.userId,
            userName: this.userInfo.name,
            typeId,
            type
          });
          break;
      }
      if(result.success) {
        item.likes += 1;
      }else{
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: result.message,
          color: "negative",
        });
        return;
      }
    },
    async likesFetch(payload) {
      return await axiosInstance.post('/api/information/video/comment/likes', payload).then(response => {
        return response.data;
      })

    },

  },
}
</script>
<style scoped lang="scss">
.art-information{

}
.art-information-header{
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  .art-information-video{
    display: flex;
    height: 100%;

    .art-information-video-content{
      display: flex;
      flex-flow: column;
      flex: 1;
      height: 100%;
      .art-information-video-iframe{
        flex: 1;
        width: 100%;
        height: 100%;
      }
      .art-information-video-total{
        background-color: #152c2b;
        color: #fff;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
      }
    }
    .art-information-video-list{
      width: 250px;
      height: 100%;
      padding: 0 20px;
      overflow: auto;
      color: #fff;
      background-color: #152c2b;
      .art-information-video-list-title{
        font-size: 18px;
        font-weight: bold;
      }
      .art-information-video-list-ul{
        margin-top: 20px;
        list-style: none;
        .art-information-video-list-li{
          cursor: pointer;
          .art-information-video-list-p{
            margin-top: 10px;
          }
        }

      }
    }
  }
}

.art-information-main{
  background-color: #F0F0F0;
  .art-information-main-box{
    margin: 0 auto;
    background-color: #fff;
    .art-information-main-nav{
      font-size: 22px;
      border-bottom: 1px solid #DCD9D9;
      .art-information-main-nav-a {
        display: inline-block;
        padding: 20px;

        color: #999999;
      }
      .art-information-main-nav-a.active {
        color: #152C2B;
      }

    }
    .art-information-main-content{

      .art-information-reply{
        display: flex;
        .art-information-reply-avatar{
          display: flex;
          width: 95px;
          text-align: left;
        }
        .art-information-reply-content{
          flex: 1;
          padding: 20px;
          background-color: #EFEFEF;
        }
        .art-information-reply-disabled{

          color: #999;
          .art-information-login{
            color: #000;
            margin-right: 6px;
          }
        }
      }
      .art-information-comment{
        .comment-title{
          font-size: 18px;
          margin: 20px;
        }
        .comment-list{
          .comment-list-ul{
            list-style: none;
            .comment-list-li{
              display: flex;
              margin-top: 20px;

              .comment-list-avatar{
                width: 85px;
              }

              .comment-item{
                flex: 1;
                .comment-item-header{
                  font-size: 14px;
                  font-weight: bold;
                }
                .comment-item-main{
                  font-size: 16px;
                  margin-top: 10px;
                }
                .comment-item-footer{
                  margin-top: 30px;
                  overflow: hidden;
                  .comment-item-footer-btn{
                    cursor: pointer;
                    float: left;

                  }
                }
                .comment-item-reply{
                  margin-top: 10px;
                  padding: 20px;
                  background-color: #EFEFEF;
                }
              }
            }

          }
        }
        .comment-more{
          padding: 0 55px;
          margin-top: 20px;
          .comment-more-a{
            display: block;
            width: 100%;
            height: 55px;
            line-height: 55px;
            padding: 0 20px;
            color: #666;
            text-align: center;
            background-color: #EFEFEF;
          }
        }

      }
    }
    .art-information-main-content-detail{
      padding: 20px;
    }
    .art-information-main-content-comment{
      padding: 20px 20px 20px 0;
    }
  }

}

</style>
