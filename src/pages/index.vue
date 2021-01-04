<template>
  <q-layout @scroll="Top">
    <div class="carousel1 relative-position">
      <div class="content absolute-full row">
        <div class="col-3">
          <div class="menu text-white text-bold">
            <div class="menu-item">
              <div class="menu-title menu-title1">{{$t('home.artist')}}</div>
              <q-breadcrumbs class="menu-el" separator="|" gutter="md">
                <q-breadcrumbs-el
                  :label="$t('home.painter')"
                  class="text-white btn"
                  @click="goArtists"
                />
                <q-breadcrumbs-el :label="$t('home.sculptor')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.country')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.lastName')" class="text-white" />
              </q-breadcrumbs>
            </div>
            <div class="menu-item">
              <div class="menu-title">{{$t('home.artwork')}}</div>
              <q-breadcrumbs class="menu-el" separator="|" gutter="md">
                <q-breadcrumbs-el
                  :label="$t('home.painting')"
                  class="text-white btn"
                  @click="goArtworks"
                />
                <q-breadcrumbs-el :label="$t('home.sculpture')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.Engraving')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.traditionalChinesePainting')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.lacquerware')" class="text-white" />
              </q-breadcrumbs>
            </div>
            <div class="menu-item">
              <div class="menu-title">{{$t('home.other')}}</div>
              <q-breadcrumbs class="menu-el" separator="|" gutter="md">
                <q-breadcrumbs-el :label="$t('home.artInformation')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.VRExhibition')" class="text-white" />
                <q-breadcrumbs-el :label="$t('home.industryArtExhibition')" class="text-white" />
              </q-breadcrumbs>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="title text-bold text-white text-center">
            <div>为您精选</div>
            <div>来自世界各地的优秀艺术家</div>
          </div>
          <div class="text-white slide">
            {{ slide }}<span class="line">/</span><span class="all">5</span>
          </div>
        </div>
      </div>
      <q-carousel
        height="510px"
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        v-if="$store.state.home"
      >
        <!-- <q-carousel-slide :name="1" img-src="http://localhost:7001/images/banner/1.png" />
        <q-carousel-slide
          :name="2"
          img-src="http://localhost:7001/images/banner/2.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="http://localhost:7001/images/banner/3.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="http://localhost:7001/images/banner/4.jpg"
        /> -->
        <q-carousel-slide
          v-for="(item, index) in $store.state.home.banner"
          :name="index+1"
          :img-src="item.src"
        />
      </q-carousel>
    </div>
    <div class="advantage text-center">
      <div class="title">我们的优势</div>
      <div class="row items-end">
        <div class="col-3">
          <q-img
            src="img/index/artist.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">精选艺术家</div>
          <div class="item-desc">来自五湖四海的艺术家</div>
        </div>
        <div class="col-3">
          <q-img
            src="img/index/ship.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">全球免费邮送</div>
          <div class="item-desc">专业物流三至四周到货</div>
        </div>
        <div class="col-3">
          <q-img
            src="img/index/freereturn.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">免费返品</div>
          <div class="item-desc">收到作品14天内免费返品</div>
        </div>
        <div class="col-3">
          <q-img
            src="img/index/pay.png"
            class="advantage-img"
            width="55px"
          ></q-img>
          <div class="item-title">安全支付方式</div>
          <div class="item-desc">信用卡或转账支付</div>
        </div>
      </div>
    </div>
    <div class="gallary-container">
      <div class="gallary">
        <div class="gallary-title text-center">您的线上画廊</div>
        <div class="gallary-desc text-center">为您精选的系列作品</div>
        <div class="row">
          <div class="col-3 relative-position text-center">
            <div class="line absolute"></div>
            <q-img src="img/index/painting1.png" width="230px"></q-img>
            <div class="desc bottom text-right">
              <div class="place">Naku</div>
              <div class="name">Margaret Ashman</div>
            </div>
          </div>
          <div class="col-3 relative-position text-center">
            <div class="line-bottom absolute"></div>
            <div class="desc text-right">
              <div class="place">Dessin Louvre : Les trois grâces</div>
              <div class="name">Harry Boudchicha</div>
            </div>
            <q-img src="img/index/painting2.png" width="230px"></q-img>
          </div>
          <div class="col-3 relative-position text-center">
            <div class="line absolute"></div>
            <q-img src="img/index/painting3.png" width="230px"></q-img>
            <div class="desc bottom text-right">
              <div class="place">Naku</div>
              <div class="name">Margaret Ashman</div>
            </div>
          </div>
          <div class="col-3 relative-position text-center">
            <div class="line-bottom absolute"></div>
            <div class="desc text-right">
              <div class="place">Dessin Louvre : Les trois grâces</div>
              <div class="name">Harry Boudchicha</div>
            </div>
            <q-img src="img/index/painting4.png" width="230px"></q-img>
          </div>
        </div>
      </div>
    </div>
    <div class="new text-center">
      <div class="new-title text-dark">最新上线的艺术作品</div>
      <div class="row new-items">
        <div class="col-3 relative-position">
          <div class="bg absolute"></div>
          <div class="new-item relative-position">
            <q-img src="img/index/new1.png" width="255px"></q-img>
            <div class="new-desc text-left bg-white">
              <q-breadcrumbs separator="|" gutter="sm">
                <q-breadcrumbs-el label="粉彩 • 帆布" class="text-dark" />
                <q-breadcrumbs-el label="80cmx80cm" class="text-dark" />
              </q-breadcrumbs>
            </div>
          </div>
          <div class="name absolute text-left">Lucky me</div>
        </div>
        <div class="col-3 relative-position">
          <div class="bg absolute"></div>
          <div class="new-item relative-position">
            <q-img src="img/index/new2.png" width="255px"></q-img>
            <div class="new-desc text-left bg-white">
              <q-breadcrumbs separator="|" gutter="sm">
                <q-breadcrumbs-el label="丙烯酸 • 帆布" class="text-dark" />
                <q-breadcrumbs-el label="80cmx80cm" class="text-dark" />
              </q-breadcrumbs>
            </div>
          </div>
          <div class="name absolute text-left">Stormy weather</div>
        </div>
        <div class="col-3 relative-position">
          <div class="bg absolute"></div>
          <div class="new-item relative-position">
            <q-img src="img/index/new3.png" width="255px"></q-img>
            <div class="new-desc text-left bg-white">
              <q-breadcrumbs separator="|" gutter="sm">
                <q-breadcrumbs-el label="油画 • 帆布" class="text-dark" />
                <q-breadcrumbs-el label="76.2cmx76.2cm" class="text-dark" />
              </q-breadcrumbs>
            </div>
          </div>
          <div class="name absolute text-left">Lucky me</div>
        </div>
        <div class="col-3 relative-position">
          <div class="bg absolute"></div>
          <div class="new-item relative-position">
            <q-img src="img/index/new4.png" width="255px"></q-img>
            <div class="new-desc text-left bg-white">
              <q-breadcrumbs separator="|" gutter="sm">
                <q-breadcrumbs-el label="丙烯酸 • 帆布" class="text-dark ddd" />
                <q-breadcrumbs-el label="150cmx150cm" class="text-dark" />
              </q-breadcrumbs>
            </div>
          </div>
          <div class="name absolute text-left">Lucky me</div>
        </div>
      </div>
    </div>
    <div class="sort-container">
      <div class="row sort">
        <div class="col-grow left">
          <div class="title relative-position">
            <div>通过画作看世界</div>
            <div class="num absolute">20万+</div>
          </div>
          <div class="row">
            <div
              class="col-4 sort-item relative-position"
              v-for="i in [1, 2, 3, 4, 5, 6]"
              :key="i"
            >
              <div class="line1 absolute"></div>
              <div class="line2 absolute"></div>
              <q-img
                src="img/index/1.png"
                width="210px"
                class="relative-position"
              >
                <div class="tab absolute-bottom text-center">
                  <div>花草自然</div>
                  <q-img src="img/index/next.png" width="20px"></q-img>
                </div>
                <div class="absolute-full bg"></div>
              </q-img>
            </div>
          </div>
        </div>
        <div class="col right">
          <div class="title">按价格浏览</div>
          <div class="row text-center text-white">
            <div class="col-6">
              <div class="prise">低于¥<span>6000</span></div>
            </div>
            <div class="col-6">
              <div class="prise">¥ <span>6000-</span>¥<span>20000</span></div>
            </div>
            <div class="col-6">
              <div class="prise">¥<span>20000-</span>¥<span>40000</span></div>
            </div>
            <div class="col-6">
              <div class="prise">高于¥<span>40000</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-container">
      <div class="row contact text-white">
        <div class="col left">
          <div class="title">让永宝帮您找到心仪的作品</div>
          <div class="line"></div>
          <div class="text">
            您是否寻求专业的顾问？<br />
            或是想要定制作品？<br />
            我们在线的艺术顾问能够免费回答你的所有问题
          </div>
          <div class="mail text-center text-dark">
            <q-img src="img/index/mail.png" width="14px"></q-img>
            直接联系
          </div>
        </div>
        <div class="col-6">
          <q-carousel
            v-model="slides"
            animated
            navigation
            height="280px"
            class="text-white rounded-borders carousel2"
            :autoplay="autoplay"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            infinite
          >
            <q-carousel-slide
              v-for="ite in ['a', 'b', 'c', 'd']"
              :name="ite"
              class="row"
              :key="ite"
            >
              <div class="col-6 image">
                <q-img src="img/index/aaaa.png" width="210px"></q-img>
              </div>
              <div class="col-6">
                <div class="row star">
                  <div class="col-2" v-for="i of 5" :key="i">
                    <q-img src="img/index/star.png" width="20px"></q-img>
                  </div>
                </div>
                <div class="col-12 buyer">The staircase. Vaynor Park</div>
                <div class="col-12 content">
                  今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="hot-artists text-center relative-position">
      <div class="title">我们热卖的艺术家</div>
      <div class="more absolute row">
        <div class="col-grow text">更多</div>
        <q-img src="img/index/more.png" class="col" width="22px"></q-img>
      </div>

      <div class="row hot-artist justify-between">
        <div class="col-2" v-for="i in [1, 2, 3, 4, 5]" :key="i">
          <div class="image"></div>
          <div class="name">JEFF FERST</div>
          <div class="country">墨西哥-画家</div>
        </div>
      </div>
    </div>
    <div class="to-top none" ref="top">
      <q-img class="cs btn" src="img/index/cs.png" width="50px"></q-img>
      <div class="text text-white text-center">在线客服</div>
      <q-img
        class="top btn"
        src="img/index/top.png"
        width="50px"
        @click="toTop"
      ></q-img>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
      slides: "a",
      ratingModel: 3,
      hotartist: "a",
    };
  },
  preFetch({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    console.log("index preFetch", currentRoute.params.lang, previousRoute, urlPath, publicPath)
    // return store.dispatch('home/setHome', {
    //   locale: 'zh-cn'
    // })
    // return store.dispatch('fetchItem', currentRoute.params.id)
  },
  methods: {
    Top() {
      // console.log(document.documentElement.scrollTop);
      document.documentElement.scrollTop >= 600
        ? this.$refs.top.classList.remove("none")
        : this.$refs.top.classList.add("none");
    },
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    goArtists() {
      this.$router.push("/artists");
    },
    goArtworks() {
      this.$router.push("/artworks");
    },
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
      background-color: rgba(21, 44, 43, 0.502);
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
        padding-bottom: 10px;
        font-weight: bolder !important;
      }
    }
    .slide {
      user-select: none;
      font-size: 20.576px;
      font-family: "STFangsong";
      line-height: 1.75;
      letter-spacing: 8px;
      padding: 100px 0 0 580px;
      font-size: 60px;
      .line {
        display: inline-block;
        font-size: 80px;
        transform: rotate(20deg);
        font-weight: lighter;
      }
      .all {
        font-size: 30px;
      }
    }
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
      padding: 0 40px 28px 0;
      white-space: nowrap;
    }

    .bottom {
      padding: 28px 40px 15px 0;
      white-space: nowrap;
    }
    .place {
      font-family: "FangSong";
      letter-spacing: 1px;
      color: #000;
      font-size: 14px;
    }
    .name {
      font-size: 14px;
      font-family: "FangSong";
      color: #909090;
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
        padding: 61px 0 20px 15px;
      }
    }
    .bg {
      width: 255px;
      background-color: #738080;
      height: 362px;
      left: 38px;
      top: 10px;
    }
    .name {
      font-size: 16px;
      background-color: #152c2b;
      width: 154px;
      height: 35px;
      top: 270px;
      left: 10px;
      padding-left: 30px;
      line-height: 35px;
      color: #a7acab;
      font-weight: bolder;
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
        background-color: #caccaa;
        top: 10px;
        left: 7px;
        // z-index: -1;
      }
      .line1 {
        width: 210px;
        height: 148px;
        top: 19px;
        left: 14px;
        background-color: #d3d4c6;
      }
    }
    .prise {
      font-weight: 500;
      margin: 0 10px 80px 0;
      padding: 39px 0;
      font-size: 12px;
      font-weight: bold;
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
  }
  .country{
    font-size: 12px;
    font-family: "Heiti SC";
  }
  .image {
    margin-bottom: 30px;
    background: url("/img/index/hotartist1.png") no-repeat;
    background-size: contain;
    border-radius: 50%;
    width: 180px;
    height: 180px;
  }
}
.to-top {
  z-index: 1000;
  width: 130px;
  position: fixed;
  top: 180px;
  right: 0;
  .text {
    display: inline-block;
    background-color: #333333;
    width: 50px;
    font-size: 18px;
  }
  .cs {
    margin-right: 10px;
    vertical-align: top;
  }
}
</style>

