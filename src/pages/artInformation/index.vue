<template>
  <q-page>
    <div class="art-information">
      <!-- 视频 -->
      <div class="art-information-header">
        <div class="art-information-video content-width">
          <div class="art-information-video-content">
            <div class="art-information-video-iframe">
              <iframe :src="`http://www.yoboart.com/video?isShowConfig=false&ccId=61AA76B5334118229C33DC5901307461&siteId=E5DD260925A6084B&img_path=`" width="100%" height="100%" scrolling="no" frameBorder="0"></iframe>
            </div>
            <div class="art-information-video-total">
              最近在看 25 人 累计观看 2999 人
            </div>
          </div>
          <div class="art-information-video-list">
            <h3 class="art-information-video-list-title">播放列表</h3>
            <ul class="art-information-video-list-ul">
              <li class="art-information-video-list-li" v-for="item in 6" :key="item">
                <Avatar
                  :src="''"
                  width="210px"
                  height="105px"
                  type="photo"
                />
                <p class="art-information-video-list-p">
                  {{item}} BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》
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
            <a href="javascript:;" class="art-information-main-nav-a" :class="{active: mainNavActive == 1}" @click="mainNavActive = 1">评论（234）</a>
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
                <span class="art-information-login" >登录</span>后可以交流发言，写出观后感。
                <q-editor v-model="editor" min-height="5rem" placeholder="请输入回复内容。" :toolbar="[]" />
                <q-btn color="white q-mt-sm" text-color="black" label="回复" />
              </div>


            </div>

            <div class="art-information-comment">
              <h3 class="comment-title">全部影评</h3>
              <div class="comment-list">
                <ul class="comment-list-ul">
                  <li class="comment-list-li ">
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
                      名称 2020/03/22 17:33:00
                      </div>
                      <div class="comment-item-main">
                        内容
                      </div>
                      <div class="comment-item-footer">
                        <div class="comment-item-footer-btn" >
                          <q-img src="~assets/img/fabulous.png" width="14px" /> 赞 1
                        </div>
                        <div class="comment-item-footer-btn" @click="showEditor = !showEditor">
                          <q-img class="q-ml-md" src="~assets/img/comment.png" width="14px" /> 回复 1
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="comment-list-li ">
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
                      名称 2020/03/22 17:33:00
                      </div>
                      <div class="comment-item-main">
                        内容
                      </div>
                      <div class="comment-item-footer">
                        <div class="comment-item-footer-btn" >
                          <q-img src="~assets/img/fabulous.png" width="14px" /> 赞 1
                        </div>
                        <div class="comment-item-footer-btn" @click="showEditor = !showEditor">
                          <q-img class="q-ml-md" src="~assets/img/comment.png" width="14px" /> 回复 1
                        </div>
                      </div>
                      <div class="comment-item-reply" v-if="showEditor">
                        <q-editor v-model="editor" min-height="5rem" placeholder="请输入回复内容。" :toolbar="[]" />
                        <q-btn-group push>
                          <q-btn color="white q-mt-sm" text-color="black" label="取消" />
                          <q-btn color="white q-mt-sm" text-color="black" label="回复" />
                        </q-btn-group>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="comment-more">
                <a href="javascript:;" class="comment-more-a">更多评论 || 没有更多评论了</a>
              </div>

            </div>

          </div>
          <div class="art-information-main-content art-information-main-content-detail" v-else>
              BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》
              BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》
              BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》
              BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》
              BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》BBC 记录片《是淋淋是放假放假就放假》
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>
<script>
import Avatar from '../../components/avatar.vue';
import Login from '../../components/login.vue'
export default {
  components: {
    Avatar,
    Login
  },
  data() {
    return {
      mainNavActive: 0,
      editor: '',
      showEditor: false
    }
  },
  methods: {

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
