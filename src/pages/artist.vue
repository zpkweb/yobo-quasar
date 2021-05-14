<template>
  <q-page>
    <div class="banner relative-position">

      <q-img v-if="portrait.banner" :src="portrait.banner" height="360px"></q-img>
      <q-img v-else src="~assets/images/banner-artist.png" height="360px"></q-img>

      <div class="absolute-full text-center text">
        <template v-if="portrait">
          <div class="text-bold">{{portrait.typeName}}｜{{portrait.country}}</div>
        <div class="title">{{portrait.firstname}} {{portrait.lastname}}</div>
        <div class="number">
          <span v-for="item in portrait.tags">{{$t(item)}}</span>
        </div>
        </template>
      </div>
    </div>
    <div class="title2-container">
      <div class="title2">
        <!-- <q-tabs no-caps indicator-color="transparent" active-color="white" align="left" class="text-teal"> -->
          <router-link class="tabs" :class="{ active: (hash && hash == '#'+item.value) || (!hash && index === 0) }"  v-for="(item, index) in navs" :key="item.value" :to="{ hash: `#${item.value}` }" >{{ $t(item.label) }}</router-link>
        <!-- </q-tabs> -->
      </div>
    </div>
    <div id="info" class="desc row">
      <div class="col-4" v-if="portrait">
        <q-img v-if="portrait && portrait.user && portrait.user.avatar" :src="portrait.user.avatar"></q-img>
      </div>
      <div class="col-7 offset-1 text-right resume">
        <!-- <div class="resume1">ARTIST</div>
        <div class="resume2">
          我结合了数字和有形，所以我将两个世界结合在一起.
        </div>
        <div class="resume3">
          Karin Vermeer是一位独立艺术家，自2002年以来一直在鹿特丹生活和工作<br />
          她的作品是通过将照片和绘画进行数字组合和编辑为新的原创艺术作品而创作的<br />威猛(Vermeer)擅长于通过覆盖和融合四到五个不同种族和血统的不同面孔来创建新的不存在的人物而创建的肖像<br />打印数字图像并添加涂料以获得最终的结果，尝试使数字图像再次变得有形
        </div> -->
        <p  v-if="portrait && portrait.metadata" class="text-left fontSize-16">{{ portrait.metadata.profile }}</p>
        <div class="resume4">
          <div class="btn text-white" @click="myArtist(hasMyArtist)">{{ hasMyArtist ? $t('artist.Followed') : $t('artist.FollowArtist')}}</div>
        </div>
      </div>
    </div>
    <div id="artworks" class="artworks-container">
      <div class="artworks">
        <div class="artwork row">
          <div class="col-3" v-for="(item, index) of portrait.commoditys">
            <div class="image" :class="{active : item.hasMyArtwork } ">
              <q-img
                  v-if="item.hasMyArtwork"
                  class="artwork-item-like"
                  src="~assets/images/liked.png"
                  width="16px"
                  height="14px"
                  @click="myArtwork(item)"
                />
                <q-img
                  v-else
                  class="artwork-item-like"
                  src="~assets/images/like.png"
                  width="16px"
                  height="14px"
                  @click="myArtwork(item)"
                />
              <router-link :to="`/${$i18n.locale}/artwork/${item.commodityId}`" class="artwork-item text-center"  :key="`artwork-${index}`">

                <q-img class="artwork-item-img" :src="item.photos[0]" ></q-img>
              </router-link>
              <p class="artwork-item-name">{{item.name}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 最新出售的艺术品 -->
    <!-- <div id="sold" class="sold">
      <div class="title text-center">{{$t('artist.LatestArtSold')}}</div>
      <div class="row">
        <div class="col-3 text-center" v-for="i of 4" :key="`sold-${i}`">
          <div class="bg">
            <q-img :src="item.photos[0]" width="180px" class="image"></q-img>
          </div>
        </div>
      </div>
    </div> -->
    <div id="studio" class="video hide"></div>
    <div id="resume" class="credentials ">
      <div class="title text-center ">{{$t('artist.MyResume')}}</div>
      <div class="title2 text-right">
        <div>{{$t('artist.Awards')}}</div>
        <div>{{$t('artist.SoloExhibition')}}</div>
        <div>{{$t('artist.GroupExhibition')}}</div>
        <div>{{$t('artist.Publish')}}</div>
      </div>
      <div class="content row hide">
        <div class="col-6 item">
          <div v-for="i of 8" :key="`resume-${i}`">
            <div class="year">2019</div>
            <div class="name">
              Prix de photographie (Salon d’Automne)- {{$t('artist.winner')}}- 法国
            </div>
          </div>
        </div>
        <div class="col-6 item">
          <div v-for="i of 8" :key="`resume2-${i}`">
            <div class="year">2019</div>
            <div class="name">
              Prix de photographie (Salon d’Automne)- {{$t('artist.winner')}}- 法国
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      navs: [{
        label: 'artist.PersonalInformation',
        value: "info",
      }, {
        label: 'artist.AllWorks',
        value: "artworks",
      }, {
        label: 'artist.LatestSold',
        value: "sold",
      }, {
        label: 'artist.studio',
        value: "studio",
      }, {
        label: 'artist.Resume',
        value: "resume",
      }],
      tags: ['artist.magazineCover', 'artist.PortraitStructure', 'artist.PortraitOfPopart'],
      hasMyArtist: false,
      myArtworks: [],
      portrait: {}
    };
  },
  // async preFetch({ store, currentRoute }) {
  //   const { locale, artistId } = currentRoute.params;
  //   await store.dispatch("artist/artist", {
  //     sellerId: artistId
  //   });

  // },
  computed: {
    hash() {
      return this.$route.hash;
    },
    // portrait() {
    //   return this.$store.state.artist.portrait;
    // }
  },
  async created() {
    const { query, params } = this.$route;
    const { locale, artistId } = params;

    const userInfo = this.$q.cookies.get("userInfo");
    if(userInfo) {
      const { userId } = userInfo;
      const hasMyArtistData = await this.$store.dispatch("my/hasMyArtist", {
        userId,
        artistId: artistId
      });
      this.hasMyArtist = hasMyArtistData.success;

      const myArtworks = await this.$store.dispatch("my/getMyWishlist", {
        userId,
        locale,
      });
      if (myArtworks.success) {
        this.myArtworks = myArtworks.data;
      }

    }

    const artist = await this.$store.dispatch("artist/artist", {
      sellerId: artistId
    });
    if(artist.success) {
      if(artist.data.commoditys && artist.data.commoditys.length){
        artist.data.commoditys = artist.data.commoditys.map((item) => {
          item.hasMyArtwork = false;
          if (this.myArtworks && this.myArtworks.length) {
            for (let commodity of this.myArtworks) {
              if (item.commodityId == commodity.commodityId) {
                item.hasMyArtwork = true;
              }
            }
          }
          return item;
        });
      }


      this.portrait = artist.data;
      // this.$store.commit('setPortrait', response.data.data)
    }


    // if(this.$store.state.user.info && this.$store.state.user.info.userId) {
    //   const hasMyArtistData = await this.$store.dispatch("my/hasMyArtist", {
    //   userId: this.$store.state.user.info.userId,
    //   artistId: this.$route.params.artistId
    // });
    // this.hasMyArtist = hasMyArtistData.success;
    // }




  },
  methods: {
    async myArtist(has) {
      if(!this.$store.state.user.info){
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: this.$t('layout.pleaseLoginFirst'),
          color: 'negative',
        })
        return;
      }
      if(has) {
        const delMyArtist = await this.$store.dispatch("my/delMyArtist", {
          userId: this.$store.state.user.info.userId,
          artistId: this.$route.params.artistId
        })
        if(delMyArtist.success) {
          this.hasMyArtist = false;
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: this.$t('artist.unsubscribe'),
            color: 'negative',
          })
        }else{
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: data.msg,
            color: 'negative',
          })
        }

      }else{
        const addMyArtist = await this.$store.dispatch("my/addMyArtist", {
          userId: this.$store.state.user.info.userId,
          artistId: this.$route.params.artistId
        })

        if(addMyArtist.success) {
          this.hasMyArtist = true;
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: this.$t('artist.FollowedSuccess'),
            color: 'positive',
          })
        }else{
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: data.msg,
            color: 'negative',
          })
        }
      }

    },
    async myArtwork(item) {
      if (!this.$store.state.user.info) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: this.$t("layout.pleaseLoginFirst"),
          color: "negative",
        });
        return;
      }
      if (item.hasMyArtwork) {
        const delMyArtwork = await this.$store.dispatch("my/delMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId,
        });
        if (delMyArtwork.success) {
          item.hasMyArtwork = false;
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("artwork.commodity.Unlike"),
            color: "negative",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: delMyArtwork.msg,
            color: "negative",
          });
        }
      } else {
        const addMyArtwork = await this.$store.dispatch("my/addMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId,
        });
        if (addMyArtwork.success) {
          item.hasMyArtwork = true;
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("artwork.commodity.LikeSuccess"),
            color: "positive",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: addMyArtwork.msg,
            color: "negative",
          });
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  color: #d6d7c5;
  .text {
    padding-top: 80px;
    .title {
      font-size: 38px;
      padding-bottom: 10px;
    }
    .number {
      font-size: 18px;
      span {
        padding: 15px;
      }
    }
  }
}
.title2-container {
  border-bottom: 1px solid rgba(21, 44, 43, 0.2);
  .title2 {
    width: 1100px;
    margin: 0 auto;
    padding: 0 40px;

    .tabs {
      display: inline-block;
      padding: 10px 24px;
      color: rgb(173, 175, 139);
      letter-spacing: 1px;
      line-height: 40px;
    }
    .active {
      background-color: #d6d7c5;
      color: #333;
    }
  }
}
.desc {
  padding: 60px 40px;
  width: 1100px;
  margin: 0 auto;
  .resume {
    color: #333;
    .resume1 {
      letter-spacing: 18px;
      margin-bottom: 10px;
    }
    .resume2 {
      font-size: 20px;
      letter-spacing: 3px;
      margin-bottom: 50px;
    }
    .resume3 {
      line-height: 30px;
      margin-bottom: 30px;
      font-size: 12px;
    }
    .resume4 {
      .image {
        margin: 0 6px;
      }
      .btn {
        display: inline-block;
        background-color: #152c2b;
        padding: 8px 20px;
        letter-spacing: 2px;
        margin-left: 10px;
      }
    }
  }
}
.artworks-container {
  background-color: #232323;
  color: rgb(173, 175, 139);
  font-size: 24px;
  padding: 60px 0;
  .artworks {
    width: 1100px;
    margin: 0 auto;

    .title {
      padding: 30px 40px;
      .tag {
        display: inline-block;
      }
      .more {
        font-size: 16px;
        display: inline-block;
        margin-top: 10px;
      }
    }
    .image {
      float: left;
      position: relative;
      width: 194px;
      background-color: #152c2b;
      padding: 3px;
      border: 1px solid #3f3f38;
      margin-top: 10px;
      .artwork-item{
        overflow: hidden;
        position: relative;

      }
      .artwork-item-like{
        display: none;
        position: absolute;
        top: -5px;
        right: -5px;
        z-index: 9;
        cursor: pointer;
      }
      .artwork-item-img{
        float: left;
      }
      .artwork-item-name{
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 9;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 0;
        color: #fff;
        font-size: 12px;
        background-color: rgba(0, 0, 0, .5);
      }
    }
    .image:hover {
      .artwork-item-like{
        display: block;
      }
      .artwork-item-name{
        display: inline-block;
      }
    }
    .active {
      .artwork-item-like{
        display: block;
      }
    }
  }
}

.sold {
  padding: 60px 0 80px 0;
  width: 1100px;
  margin: 0 auto;
  .title {
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
  .image {
    margin-top: 9px;
  }
}
.video {
  background-color: #d6d7c5;
  height: 400px;
}
.credentials {
  width: 1100px;
  margin: 0 auto;
  padding: 40px 0 60px 0;
  .title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .title2 {
    padding: 0 0 10px 0;
    div {
      display: inline-block;
      color: rgb(173, 175, 139);
      padding: 0 8px;
    }
  }
  .content {
    background-color: #d6d7c5;
    padding: 50px 0;
    .item {
      padding: 0 80px;
    }
    .item > div {
      margin: 10px 0;
    }
  }
}
</style>







