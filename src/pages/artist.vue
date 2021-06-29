<template>
  <q-page>
    <!-- 顶部 -->
    <div class="banner relative-position">

      <q-img v-if="portrait.seller && portrait.seller.banner" :src="portrait.seller.banner" height="360px"></q-img>
      <q-img v-else src="~assets/img/banner-artist.png" height="360px"></q-img>
      <div class="shadow"></div>
      <div class="absolute-full text-center text">
        <template v-if="portrait.seller">
          <div class="text-bold">{{ $store.state.sellerTypes[portrait.seller.type]}}｜{{portrait.seller.country}}</div>
        <div class="title">{{portrait.seller.firstname}} {{portrait.seller.lastname}}</div>
        <div class="number">
          <span v-for="item in portrait.seller.tags">{{$t(item)}}</span>
        </div>
        </template>
      </div>
    </div>


    <div class="title2-container">
      <div class="title2">
          <!-- <router-link class="tabs" :class="{ active: (hash && hash == '#'+item.value) || (!hash && index === 0) }"  v-for="(item, index) in navs" :key="item.value" :to="{ hash: `#${item.value}` }" >{{ $t(item.label) }}</router-link> -->

          <router-link
            class="tabs"
            :class="{ active: (hash && hash == '#seller') || (!hash) }"
            v-if="portrait.seller"
           :to="{ hash: '#seller' }"
           >{{ $t('artist.PersonalInformation') }}</router-link>

           <router-link
            class="tabs"
            :class="{ active: (hash && hash == '#commoditys') }"
            v-if="portrait.commoditys"
           :to="{ hash: '#commoditys' }"
           >{{ $t('artist.AllWorks') }}</router-link>

           <router-link
            class="tabs"
            :class="{ active: (hash && hash == '#sold') }"
            v-if="portrait.sold"
           :to="{ hash: '#sold' }"
           >{{ $t('artist.LatestSold') }}</router-link>

           <router-link
            class="tabs"
            :class="{ active: (hash && hash == '#studio') }"
            v-if="portrait.studio"
           :to="{ hash: '#studio' }"
           >{{ $t('artist.studio') }}</router-link>

           <router-link
            class="tabs"
            :class="{ active: (hash && hash == '#resume') }"
            v-if="portrait.resume"
           :to="{ hash: '#resume' }"
           >{{ $t('artist.Resume') }}</router-link>


      </div>
    </div>
    <div id="seller" class="desc row">
      <div class="col-4" v-if="portrait">

        <!-- <div class="avatar-content">
          <q-img v-if="portrait && portrait.user && portrait.user.avatar" :src="portrait.user.avatar"></q-img>
          <q-img class="avatar" v-else src="~assets/img/default/avatar.png" />
        </div> -->
        <Avatar
          :src="portrait && portrait.user && portrait.user.avatar"
          type="photo"
        />
      </div>
      <div class="col-7 offset-1 text-right resume">
        <div  v-if="profile" class="text-left fontSize-16" v-html="profile"></div>
        <div class="resume4">
          <div class="btn text-white" @click="myArtist(hasMyArtist)">{{ hasMyArtist ? $t('artist.Followed') : $t('artist.FollowArtist')}}</div>
        </div>
      </div>
    </div>


    <div id="commoditys" class="artworks-container" v-if="portrait.commoditys">
      <div class="artworks">
        <div class="artwork row">
          <div class="col-3" v-for="(item, index) of portrait.commoditys">
            <div class="image" :class="{active : item.hasMyArtwork } ">
              <q-img
                  v-if="item.hasMyArtwork"
                  class="artwork-item-like"
                  src="~assets/img/liked.png"
                  width="16px"
                  height="14px"
                  @click="myArtwork(item)"
                />
                <q-img
                  v-else
                  class="artwork-item-like"
                  src="~assets/img/like.png"
                  width="16px"
                  height="14px"
                  @click="myArtwork(item)"
                />
              <router-link :to="`/${$i18n.locale}/artwork/${item.commodityId}`" class="artwork-item text-center"  :key="`artwork-${index}`">

                <!-- <q-img class="artwork-item-img" :src="item.photos[0]" ></q-img> -->
                <Avatar
                  class="artwork-item-img"
                  :src="item.photos[0]"
                  type="photo"
                  width="186px"
                  scale
                />
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


    <div id="studio" class="studio" v-if="portrait.studio">
      <q-img class="studio-banner" v-if="portrait.studio.banner" :src="portrait.studio.banner" height="400px"></q-img>
      <div class="shadow" v-if="portrait.studio.banner"></div>
      <div class="studio-content">
        <h3 class="studio-content-title">{{portrait.studio.name}}</h3>
        <iframe v-if="portrait.studio.ccId" :src="`http://www.yoboart.com/video?isShowConfig=false&ccId=${portrait.studio.ccId}&siteId=${portrait.studio.siteId}&img_path=${portrait.studio.videoPhoto}`" class="studio-content-iframe" scrolling="no" frameBorder="0"></iframe>

        <video class="studio-content-video" v-else-if="portrait.studio.video" controls=""  name="media"><source :src="portrait.studio.video" type="video/mp4"></video>



        <q-img class="studio-content-img" v-else-if="portrait.studio.photo" :src="portrait.studio.photo" ></q-img>
        <p class="studio-content-p" v-else>
          {{portrait.studio.introduce}}
        </p>
      </div>
    </div>


    <div id="resume" class="credentials " v-if="hasResume">
      <div class="title text-center ">{{$t('artist.MyResume')}}</div>
      <div class="title2 text-right">

        <div style="cursor: pointer;" v-for="item in Object.keys(portrait.resume)" v-if="portrait.resume[item].length" @click="resumeTypeActive = item">{{$t(resumeTypes[item])}}</div>

      </div>
      <div class="content row">
        <div class="col-6 item" v-for="item in portrait.resume[resumeTypeActive]">
            <div class="year">
              {{ resumeLocale(item, 'year') }}
            </div>
            <div class="name">
              {{ resumeLocale(item, 'resume')}}
            </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import noData from "src/components/noData";
import Avatar from 'src/components/avatar.vue';
export default {
  components: {
    noData,
    Avatar
  },
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
      portrait: {},
      resumeTypeActive: 'prize',
      resumeTypes: {
        prize: 'artist.Awards',
        individua: 'artist.SoloExhibition',
        organizing: 'artist.GroupExhibition',
        publish: 'artist.Publish'
      }
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
    profile() {
      let profile = '';
      if(this.portrait && this.portrait.metadata){
        switch(this.$route.params.locale) {
          case  'en-us':
            profile = this.portrait.metadata.profileEnus;
            break;
          case 'ja-jp':
            profile = this.portrait.metadata.profileJajp;
            break;
          case 'es-es':
            profile = this.portrait.metadata.profileEses;
            break;
          case 'zh-cn':
          default:
            profile = this.portrait.metadata.profileZhcn;
            break;
        }
      }
      return profile;
    },
    hasResume() {
      let hasResume = false;
      console.log(this.portrait.resume)
      if(this.portrait.resume){
        if(this.portrait.resume.prize.length
      || this.portrait.resume.individua.length
      || this.portrait.resume.organizing.length
      || this.portrait.resume.publish.length
      ){
        hasResume = true;
      }
      }
  console.log(hasResume)
      return hasResume;
    }
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
    resumeLocale(item, type) {
      let resumeType = '';
      switch(this.$route.params.locale) {
        case  'en-us':
          resumeType = item.enus[type];
          break;
        case 'ja-jp':
          resumeType = item.jajp[type];
          break;
        case 'es-es':
          resumeType = item.eses[type];
          break;
        case 'zh-cn':
        default:
          resumeType = item.zhcn[type];
          break;
      }
      return resumeType;
    },
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
.shadow{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    // box-shadow: 0 0 50px #000 inset;
    background-color: rgba(0, 0, 0, .4);
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
        width: 140px;
        text-align: center;
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
        width: 186px;
        height: 248px;
        display: flex;
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
.studio{
  position: relative;
  height: 400px;
  background-color: rgba(0, 0, 0, .5);
  .studio-banner{

  }
  .studio-content{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -300px;
    width: 600px;
    height: 300px;
    text-align: center;
    .studio-content-title{
      color: #fff;
    }
    .studio-content-iframe {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    .studio-content-video{
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    .studio-content-img{
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    .studio-content-p{
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
  }
}
</style>







