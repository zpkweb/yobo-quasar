<template>
  <q-page @scroll="Top">
    <div class="carousel1 relative-position">
      <div class="content absolute-full row">
        <div class="col-3">
          <div class="menu text-white text-bold">
            <div class="menu-item">
              <div class="menu-title menu-title1 btn" @click="goArtists()">{{$t('home.artist')}}</div>
              <q-breadcrumbs class="menu-el" separator="|" gutter="md" >
                <template v-slot:separator>
                  <span style="display: inline-block;width: 2px;height: 14px;font-size: 16px;background-color: rgb(255, 255, 255,.4);"></span>
                </template>
                <q-breadcrumbs-el
                  :label="$t('home.painter')"
                  class="text-white btn"
                  @click="goArtists({
                    tag: 0
                  })"
                />
                <q-breadcrumbs-el :label="$t('home.sculptor')" class="text-white btn" @click="goArtists({
                    tag: 1
                  })" />
                <q-breadcrumbs-el :label="$t('home.country')" class="text-white btn" @click="goArtists()" />
                <q-breadcrumbs-el :label="$t('home.surname')" class="text-white btn" @click="goArtists()" />
              </q-breadcrumbs>
            </div>
            <div class="menu-item">
              <div class="menu-title btn" @click="goArtworks()">{{$t('home.artwork')}}</div>
              <q-breadcrumbs class="menu-el" separator="|" gutter="md">
                <template v-slot:separator>
                  <span style="display: inline-block;width: 2px;height: 14px;font-size: 16px;background-color: rgb(255, 255, 255,.4);"></span>
                </template>
                <q-breadcrumbs-el
                  :label="$t('home.painting')"
                  class="text-white btn"
                  @click="goArtworks()"
                />
                <q-breadcrumbs-el :label="$t('home.sculpture')" class="text-white btn" @click="goArtworks()" />
                <q-breadcrumbs-el :label="$t('home.Engraving')" class="text-white btn" @click="goArtworks()" />
                <q-breadcrumbs-el :label="$t('home.traditionalChinesePainting')" class="text-white btn" @click="goArtworks()" />
                <q-breadcrumbs-el :label="$t('home.lacquerware')" class="text-white btn" @click="goArtworks()" />
              </q-breadcrumbs>
            </div>
            <div class="menu-item">
              <div class="menu-title">{{$t('home.other')}}</div>
              <q-breadcrumbs class="menu-el" separator="|" gutter="md">
                <template v-slot:separator>
                  <span style="display: inline-block;width: 2px;height: 14px;font-size: 16px;background-color: rgb(255, 255, 255,.4);"></span>
                </template>
                <q-breadcrumbs-el :label="$t('home.artInformation')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.VRExhibition')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.industryArtExhibition')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.worldMasterpiece')" class="text-white" />
              </q-breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <Carousel v-if="home" :slide="slide" :data="home.banner"></Carousel>
    </div>

    <!-- 我们的优势 -->
    <div class="advantage text-center" v-if="$store.state.isShowPay">
      <div class="title">{{$t('home.OurAdvantage')}}</div>
      <div class="row items-end">
        <div class="col-3">
          <q-img
            src="~assets/images/artist.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">{{$t('home.FeaturedArtist')}}</div>
          <div class="item-desc">{{$t('home.ArtistsWorld')}}</div>
        </div>
        <div class="col-3">
          <q-img
            src="~assets/images/ship.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">{{$t('home.FreeShippingWorldwide')}}</div>
          <div class="item-desc">{{$t('home.ProfessionalWeeks')}}</div>
        </div>
        <div class="col-3">
          <q-img
            src="~assets/images/freereturn.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">{{$t('home.FreeReturn')}}</div>
          <div class="item-desc">{{$t('home.FreeWork')}}</div>
        </div>
        <div class="col-3">
          <q-img
            src="~assets/images/pay.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">{{$t('home.SafePaymentMethod')}}</div>
          <div class="item-desc">{{$t('home.CreditPayment')}}</div>
        </div>
      </div>
    </div>
    <div class="gallary-container" v-if="home && home.gallerySeller && home.gallerySeller.list && home.gallerySeller.list.length">
      <div class="gallary">
        <div class="gallary-title text-center title">{{$t('home.YourOnlineGallery')}}</div>
        <div class="gallary-desc text-center">{{$t('home.SeriesYou')}}</div>
        <div class="row">

           <template >


           <div class="col-3 relative-position text-center"

            v-for="(item, index) in home.gallerySeller.list"
            :key="`gallerySeller-${item.sellerId}`"

           >

           <template v-if="index%2 == 0">
             <template v-if="item.commoditys && item.commoditys.length">
              <div class="line absolute"></div>
              <router-link :to="`/${$i18n.locale}/artwork/${item.commoditys[0].commodityId}`"  >
                  <q-img :src="item.commodityPhotos.length && item.commodityPhotos[0].src ? item.commodityPhotos[0].src : ''" width="230px" height="300px"></q-img>
              </router-link>

                <div class="desc bottom text-right odd">
                  <router-link :to="`/${$i18n.locale}/artist/${item.sellerId}`" class="place">{{item.firstname}} {{item.lastname}}</router-link>
                  <router-link :to="`/${$i18n.locale}/artwork/${item.commoditys[0].commodityId}`" class="name">{{item.commodityName}}</router-link>
                </div>
              </template>
           </template>
           <template v-else>
            <template v-if="item.commoditys && item.commoditys.length">
              <div class="line-bottom absolute"></div>
              <div class="desc top text-right even">
                <router-link :to="`/${$i18n.locale}/artist/${item.sellerId}`" class="place">{{item.firstname}} {{item.lastname}}</router-link>
                <router-link :to="`/${$i18n.locale}/artwork/${item.commoditys[0].commodityId}`" class="name">{{item.commodityName}}</router-link>
              </div>

              <router-link :to="`/${$i18n.locale}/artwork/${item.commoditys[0].commodityId}`">
                <q-img :src="item.commodityPhotos.length && item.commodityPhotos[0].src ? item.commodityPhotos[0].src : ''" width="230px" height="300px"></q-img>
             </router-link>
             </template>
           </template>

          </div>
        </template>
        </div>
      </div>
    </div>
    <div class="new text-center">
      <div class="new-title text-dark title">{{$t('home.LatestOnlineArtworks')}}</div>
      <div class="row new-items">


        <template v-if="home && home.latestCommodity">


        <router-link :to="`/${$i18n.locale}/artwork/${item.commodityId}`" class="col-3 relative-position" v-for="(item,index) in home.latestCommodity.list" :key="`artwork-${item.commodityId}`">
          <div class="bg absolute"></div>
          <div class="new-item relative-position">
            <q-img :src="item.photos.length ? item.photos[0].src : ''" width="255px" height="255px"></q-img>
            <!-- <div class="new-desc text-left bg-white">
              <q-breadcrumbs separator="|" gutter="sm">
                <q-breadcrumbs-el v-if="item.techniques.length && item.themes.length" :label="`${item.categorys[0].name}`" class="text-dark ddd" />
                <q-breadcrumbs-el  :label="`${item.width}cm X ${item.height}cm`" class="text-dark" />
              </q-breadcrumbs>
            </div> -->
            <div class="new-desc text-left bg-white text-dark">

              <span v-if="item.techniques.length && item.themes.length" class="ddd">{{item.categorys[0].name}}</span>
              <span style="padding: 0 10px;">|</span>
              <span class="">{{item.width}}cm X {{item.height}}cm</span>

            </div>
          </div>
          <div class="name absolute text-left" :title="item.name">{{item.name}}</div>
        </router-link>
        </template>
      </div>
    </div>
    <!-- 通过画作看世界 -->
    <div class="sort-container">
      <div class="row sort">
        <div class="col-grow left">
          <div class="title relative-position">
            <div>{{$t('home.SeePaintings')}}</div>
            <div class="num absolute">20万+</div>
          </div>
          <div class="row">

            <router-link
              class="col-4 sort-item relative-position"
              v-if="home && home.lookWorld"
              v-for="item in home.lookWorld"
              :key="`lookWorld-${item.id}`"
              :to="{ path: `${$i18n.locale}/artwork`, query: Object.assign({}, artwork, {
                theme: item.name
              }) }"
            >
              <div class="line1 absolute"></div>
              <div class="line2 absolute"></div>
              <q-img
                :src="item.img"
                width="210px"
                height="185px"
                class="relative-position"
              >
                <div class="tab absolute-bottom text-center">
                  <div>{{item.name}}</div>
                  <q-img src="~assets/images/next.png" width="20px"></q-img>
                </div>
                <div class="absolute-full bg"></div>
              </q-img>
            </router-link>

          </div>
        </div>
          <!-- 按价格浏览 -->
        <div class="col right" v-if="$store.state.isShowPay">
          <div class="title">{{$t('home.BrowsePrice')}}</div>
          <div class="row text-center text-white">
            <div class="col-6">
              <router-link :to="{ path: `${$i18n.locale}/artwork`, query: Object.assign({},artwork, {
                price: 0,
                pricemin: '',
                pricemax: 6000
              }) }" class="prise">{{$t('home.Below')}}¥<span>6,000</span></router-link>
            </div>
            <div class="col-6">
              <router-link :to="{ path: `${$i18n.locale}/artwork`, query: Object.assign({},artwork, {
                price: 1,
                pricemin: 6000,
                pricemax: 20000
              }) }" class="prise">¥ <span>6000-</span>¥<span>20,000</span></router-link>
            </div>
            <div class="col-6">
              <router-link :to="{ path: `${$i18n.locale}/artwork`, query: Object.assign({},artwork, {
                price: 2,
                pricemin: 20000,
                pricemax: 40000
              }) }" class="prise">¥<span>20000-</span>¥<span>40,000</span></router-link>
            </div>
            <div class="col-6">
              <router-link :to="{ path: `${$i18n.locale}/artwork`, query: Object.assign({},artwork, {
                price: 3,
                pricemin: 40000,
                pricemax: ''
              }) }" class="prise">{{$t('home.Higher')}}¥<span>40,000</span></router-link>
            </div>
          </div>


        </div>
      </div>
    </div>
    <!-- 让永宝帮您找到心仪的作品 -->
    <div class="contact-container" v-if="$store.state.isShowPay">
      <div class="row contact text-white">
        <div class="col relative-position">
          <div class="title">{{$t('home.LetFavoriteWork')}}</div>
          <div class="line"></div>
          <div class="text">
            {{$t('home.DoConsultants')}}<br />
            {{$t('home.OrWork')}}<br />
            {{$t('home.OurFree')}}
          </div>
          <div class="mail text-center text-dark btn" @click="openOfferPage">
            <q-img src="~assets/images/mail.png" width="14px"></q-img>
            {{$t('home.contactDirectly')}}
          </div>

          <div class="offer relative-position absolute" ref="offerPage" v-show="sendEmailPop">
            <q-img
              src="~assets/images/close.png"
              width="20px"
              class="offer-close absolute btn icon-close"
              @click="closeOfferPage"
            ></q-img>
            <div class="email-outer bg-white">
              <input
                type="text"
                v-model="email"
                :placeholder="$t('home.EmailAddress')"
                class="email"
              />
            </div>
            <div class="msg-outer bg-white">
              <textarea
                :placeholder="$t('home.sendEmailMsgPlaceholder')"
                class="msg"
                v-model="msg"
              ></textarea>
            </div>
            <q-btn color="black" class="full-width" :label="$t('home.send')" @click="sendEmail" />
          </div>

        </div>
        <div class="col-6" v-if="false">
          <q-carousel
            v-model="slides"
            animated
            navigation
            height="280px"
            class="text-white rounded-borders carousel2"
            :autoplay="autoplay"

          >

            <q-carousel-slide
              v-if="home && home.commentCommodity"
              v-for="(item, index) in home.commentCommodity"
              :key="`carousel-${index}`"
              :name="item.title"
              class="row"
            >
              <div class="col-6 image">
                <q-img :src="item.src" width="210px"></q-img>
              </div>
              <div class="col-6">
                <div class="row star">
                  <div class="col-2" v-for="i of item.star" :key="`star-${i}`">
                    <q-img src="~assets/images/star.png" width="20px"></q-img>
                  </div>
                </div>
                <div class="col-12 buyer">{{item.title}}</div>
                <div class="col-12 content">
                  {{item.desc}}
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>


    <div class="hot-artists text-center relative-position">
      <div class="title">{{$t('home.OurBestSellers')}}</div>
      <div @click="goArtists()" class="more absolute row btn">
        <div class="col-grow text">{{$t('home.More')}}</div>
        <q-img src="~assets/images/more.png" class="col" width="22px"></q-img>
      </div>

      <div class="row hot-artist justify-between">
        <!-- <div class="col-2" v-for="i in [1, 2, 3, 4, 5]" :key="i">
          <div class="image"></div>
          <div class="name">JEFF FERST</div>
          <div class="country">墨西哥-画家</div>
        </div> -->
        <template v-if="home && home.hotSaleSeller">


        <router-link :to="`/${$i18n.locale}/artist/${item.sellerId}`" class="col-2"  v-for="item in home.hotSaleSeller.list" :key="`artist-${item.sellerId}`">
          <img class="image" v-if="item && item.user && item.user.avatar" :src="item.user.avatar" width="180px" />
          <div class="name">{{item.firstname}} {{item.lastname}}</div>
          <div class="country">{{item.country}}-{{item.typeName}}</div>
        </router-link>
        </template>
      </div>
    </div>
    <div class="to-top" ref="top">
      <div class="onlineService">
        <q-img class="cs btn" src="~assets/images/cs.png" width="50px"></q-img>
        <div class="text text-white text-center">{{$t('home.onlineService')}}</div>
      </div>
      <q-img
        class="top btn"
        src="~assets/images/top.png"
        width="50px"
        @click="toTop"
      ></q-img>
    </div>
  </q-page>
</template>

<script>
import Carousel from 'src/components/carousel.vue';
export default {
  components:{
    Carousel
  },
  data() {
    return {
      slide: '1',
      autoplay: true,
      slides: "a",
      ratingModel: 3,
      hotartist: "a",
      artwork: {
        shape: "",
        // price: "",
        // pricemin: "",
        // pricemax: "",
        color: "",
        theme: "",
        category: "",
        technique: ""
      },
      sendEmailPop: false,
      email: "",
      msg: ""
    };
  },
  async preFetch({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    // return store.dispatch('home/setHome', {
    //   locale: 'zh-cn'
    // })
    // return store.dispatch('fetchItem', currentRoute.params.id)
    const { locale } = currentRoute.params;
    return await store.dispatch('home/setHome', {
      locale
    })
  },
  computed: {
    home() {
      return this.$store.state.home ? this.$store.state.home : '';
    }
  },
  methods: {
    Top() {
      document.documentElement.scrollTop >= 600
        ? this.$refs.top.classList.remove("none")
        : this.$refs.top.classList.add("none");
    },
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    goArtists(data) {
      this.$router.push(`/${this.$i18n.locale}/artists?${this.$qs.stringify(Object.assign({},{
        type: "",
        country: "",
        surname: "",
        other: ""
      }, data))}`);
    },
    goArtworks(data) {
      this.$router.push(`/${this.$i18n.locale}/artwork?${this.$qs.stringify(Object.assign({}, this.artwork, data))}`);
    },
    closeOfferPage() {
      this.sendEmailPop = false;
    },
    openOfferPage() {
      this.sendEmailPop = true;
    },
    async sendEmail() {
      const sendEmail = await this.$store.dispatch('home/sendEmail', {
        email: this.email,
        msg: this.msg,
      })
      console.log("sendEmail", sendEmail)

      if(sendEmail.success) {
        this.sendEmailPop = false;
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: this.$t('home.sendSuccessfully'),
          color: 'positive',
        })

      }else{
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: this.$t('home.sendFailed'),
          color: 'negative',
        })
      }
    }
  },
};
</script>


<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
.none {
  display: none;
}
.carousel1 {
  font-family: "Heiti SC";
  .content {
    z-index: 10;
    margin: 0 auto;
    width: 1220px;
    .title {
      font-size: 48px;
      font-family: "Adobe Heiti Std";
      text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.8);
      margin-top: 120px;
      letter-spacing: 5px;
      padding-right: 160px;
    }
    .menu {
      // background-color: rgba(21, 44, 43, 0.502);
      background-color: rgba(0, 0 , 0, 0.5);
      height: 510px;
      padding: 36px 20px;
      width: 273px;
      .menu-title {
        font-size: 24px;
        padding: 14px 0;
        font-weight: bolder;
      }
      .menu-title1 {
        padding-top: 0;
      }
      .menu-el {
        line-height: 13px;
        font-size: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding-bottom: 40px;
        font-weight: bolder !important;
      }
    }
    // .slide {
    //   user-select: none;
    //   font-size: 20.576px;
    //   font-family: "STFangsong";
    //   line-height: 1.75;
    //   letter-spacing: 8px;
    //   padding: 100px 0 0 0;
    //   font-size: 60px;
    //   .line {
    //     display: inline-block;
    //     font-size: 80px;
    //     transform: rotate(20deg);
    //     font-weight: lighter;
    //   }
    //   .all {
    //     font-size: 30px;
    //   }
    // }
  }
}
.advantage {
  padding: 65px 0;
  width: 1220px;
  margin: 0 auto;
  color: rgb(51, 51, 51);
  .title {
    font-size: 24px;
    margin-bottom: 60px;
    letter-spacing: 2px;
  }
  .advantage-img {
    margin-bottom: 30px;
  }
  .item-title {
    font-size: 18px;
    line-height: 17px;
  }
  .item-desc {
    font-size: 14px;
  }
}
.gallary-container {
  color: rgb(51, 51, 51);
  background-color: #ededed;
  .gallary {
    padding: 65px 0;
    width: 1220px;
    margin: 0 auto;
    .gallary-title {
      font-size: 24px;
      letter-spacing: 2px;
      padding-bottom: 5px;
    }
    .gallary-desc {
      font-size: 12px;
      font-family: "Heiti SC";
      padding-bottom: 70px;
    }
    .line,
    .line-bottom {
      width: 100%;
      height: 14px;
      left: -16px;
    }
    .line {
      background-color: #adaf8b;
      top: 126px;
    }
    .line-bottom {
      background-color: #152c2b;
      top: 246px;
    }
    .desc {
      margin: 0 auto;
    }
    .bottom {
      padding: 28px 40px 15px 40px;
      white-space: nowrap;
    }
    .top {
      padding: 0 40px 15px 40px;
      white-space: nowrap;
    }
    .place {
      display: block;
      font-family: "FangSong";
      letter-spacing: 1px;
      color: #000;
      font-size: 14px;
    }
    .name {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      font-family: "FangSong";
      color: #909090;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.new {
  width: 1220px;
  margin: 0 auto;
  color: rgb(51, 51, 51);
}
.new {
  padding: 65px 0;
  .new-title {
    font-size: 24px;
    margin-bottom: 60px;
  }
  .new-items {
    .new-item {
      border: 1px solid #00113d;
      width: 257px;
      margin: 0 auto;
      .new-desc {
        font-size: 12px;
        font-family: "Heiti SC";
        width: 255px;
        padding: 64px 15px 15px 15px;
      }
    }
    .bg {
      width: 255px;
      background-color: #738080;
      height: 356px;
      left: 38px;
      top: 10px;
    }
    .name {
      font-size: 16px;
      background-color: #152c2b;
      // width: 154px;
      width: 66.66%;
      height: 35px;
      top: 270px;
      left: 10px;
      padding-left: 30px;
      line-height: 35px;
      color: #a7acab;
      font-weight: bolder;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.sort-container {
  background-color: #ededed;
  .left {
    width: 707px;
    padding-top: 12px;
  }
  .right {
    padding-left: 10px;
  }
  .sort {
    padding: 60px 0;
    width: 1220px;
    margin: 0 auto;
    .title {
      padding-bottom: 46px;
      font-size: 21px;
      font-weight: bold;
      .num {
        font-size: 48px;
        font-family: "Hiragino Sans GB";
        color: rgba(173, 175, 139, 0.2);
        font-weight: bolder;
        padding: 10px;
        vertical-align: middle;
        left: 141px;
        top: -35px;
      }
    }
    .sort-item {
      padding: 0 28px 28px 0;
      &:hover {
        .bg {
          opacity: 0.6;
        }
        .tab {
          opacity: 1;
          height: 100%;
        }
      }
      .bg {
        background-color: rgb(21, 44, 43);
        opacity: 0;
        z-index: 20;
        transition: all 0.5s;
        z-index: 20;
      }
      .tab {
        background-color: transparent;
        width: 100%;
        height: 0;
        opacity: 0;
        transition: all 0.5s;
        z-index: 60;
        padding-top: 70px;
        font-size: 16px;
      }
      .line2 {
        width: 210px;
        height: 165px;
        // background-color: #caccaa;
        background-color: rgba(202,203,171,.7);
        top: 10px;
        left: 7px;
        // z-index: -1;
      }
      .line1 {
        width: 210px;
        height: 148px;
        top: 19px;
        left: 14px;
        // background-color: #d3d4c6;
        background-color: rgba(212,212,198,.7);
      }
    }
    .prise {
      display: inline-block;
      width: 240px;
      font-weight: 500;
      margin: 0 10px 90px 0;
      padding: 39px 0;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      background-image: linear-gradient(
        180deg,
        rgb(0, 0, 0) 0%,
        rgb(21, 44, 43) 100%
      );
      span {
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
}
.contact-container {
  background-color: #232323;
}
.contact {
  width: 1220px;
  margin: 0 auto;
  padding: 60px 0;
  .mail {
    background-color: #adaf8b;
    padding: 5px 28px;
    width: 140px;
    font-size: 14px;
  }
  .title {
    font-size: 21px;
    letter-spacing: 5px;
    padding-bottom: 14px;
  }
  .line {
    width: 56px;
    height: 1px;
    background-color: #adaf8b;
    margin-bottom: 28px;
    opacity: 0.5;
  }
  .left {
    border-right: 1px solid rgba(173, 175, 139, 0.102);
  }
  .text {
    padding-bottom: 28px;
  }
  .star {
    padding: 10px 100px 0 0;
  }
  .buyer {
    font-size: 20px;
    font-weight: bolder;
    padding: 20px 0;
    letter-spacing: 1px;
  }
  .content {
    font-size: 12px;
    font-family: "Heiti SC";
    font-weight: bolder;
  }
  .image {
    padding-left: 30px;
  }
}
.carousel2 {
  background-color: #232323;
}
.carousel2::v-deep {
  .q-carousel__navigation-inner {
    transform: scale(0.6);
    color: #adaf8b;
  }
}
.hot-artists {
  padding: 60px 0;
  width: 1220px;
  margin: 0 auto;
  .title {
    padding-bottom: 60px;
    font-size: 24px;
  }
  .more {
    top: 68px;
    right: 0;
    .text {
      padding-right: 10px;
    }
  }
  .name {
    font-size: 18px;
    color: #333;
  }
  .country{
    font-size: 12px;
    font-family: "Heiti SC";
    color: #333;
  }
  .image {
    margin-bottom: 30px;
    border-radius: 50%;
    width: 180px;
    height: 180px;
  }
}
.to-top {
  z-index: 1000;
  width: 60px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -30px 0 0 640px;
  .onlineService{

    .cs {
      margin-bottom: 10px;
      vertical-align: top;
    }
    .text {
      display: none;
      position: absolute;
      top: 0;
      right: 10px;
      background-color: #333333;
      width: 50px;
      font-size: 18px;
    }
  }
  .onlineService:hover{
    .text {
      display: inline-block;
    }
  }


}

.offer {
      background-color: #d6d7c5;
      padding: 50px 29px 25px;
      top: 160px;
      z-index: 100;
      left: 0;
      .offer-close {
        left: 290px;
        top: 28px;
      }
      .offer-title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .newprise {
        padding: 5px 10px;
        margin-bottom: 20px;
        .num {
          font-size: 16px;
          padding: 0 10px;
        }
        .symbol2 {
          padding-right: 10px;
        }
        .add,
        .sub {
          border: 1px solid rgba(21, 44, 43, 0.1);
          font-size: 12px;
        }
      }
      .email-outer {
        margin-bottom: 20px;
        .email {
          width: 280px;
          border: none;
          outline: none;
          padding: 5px 10px;
          font-size: 14px;
        }
      }

      .msg-outer {
        margin-bottom: 27px;
        .msg {
          width: 280px;
          height: 165px;
          resize: none;
          padding-left: 10px;
          font-size: 14px;
          border: none;
          outline: none;
          padding-top: 10px;
        }
      }
    }
    .closepage {
      display: none;
    }
    .openpage {
      display: block;
    }

.separator-span{
  display: inline-block;
  width: 5px;
  height: 10px;
  background-color: #f00;
}

</style>
