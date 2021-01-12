<template>
  <q-layout>
    <div class="row container">
      <div class="col-8">
        <div class="carousel relative-position">
          <div class="button absolute">
            <div class="share">
              <div class="image"></div>
            </div>
            <div class="heart">
              <div class="image image2"></div>
            </div>
          </div>
          <div class="q-pa-md carousel1">
            <q-carousel
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
              arrows
              control-type="unelevated"
            >
              <!-- <q-carousel-slide
                :name="1"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-carousel-slide
                :name="2"
                img-src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="3"
                img-src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <q-carousel-slide
                :name="4"
                img-src="https://cdn.quasar.dev/img/quasar.jpg"
              />
              <q-carousel-slide
                :name="5"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-carousel-slide
                :name="6"
                img-src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="7"
                img-src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <q-carousel-slide
                :name="8"
                img-src="https://cdn.quasar.dev/img/quasar.jpg"
              />
              <q-carousel-slide
                :name="9"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              /> -->
              <q-carousel-slide
                v-for="(item, index) in artwork.commodity.photos"
                :key="index"
                :name="index"
                :img-src="item.src"
              />
            </q-carousel>
          </div>
        </div>
        <div class="top"></div>
        <div class="container2">
          <div class="title">作品简介</div>
          <div class="row">
            <div class="col-6">
              <!-- <q-img src="img/image1.png" width="350px"></q-img> -->
              <q-img :src="artwork.commodity.photos ? artwork.commodity.photos[0].src : ''" width="350px"></q-img>
            </div>
            <div class="col-6 left2">
              <!-- <div class="name">Aqua small resin gloss edition</div> -->
              <div class="name">{{ artwork.commodity.name }}</div>
              <!-- <div class="year">2019</div> -->
              <div class="year">{{ artwork.commodity.createdDate }}</div>
              <!-- <div class="painter">Karin Vermeer 荷兰</div> -->
              <div class="painter">{{ artwork.commodity.seller.firstname }}{{ artwork.commodity.seller.lastname }} {{ artwork.commodity.country}}</div>
              <div class="row">
                <div class="col-6 item">
                  <div class="title2">手法</div>
                  <div class="content">
                    丙烯酸, 拼贴, 树脂 油墨, 颜料 • 帆布
                  </div>
                </div>
                <div class="col-6 item">
                  <div class="title2">其他细节</div>
                  <div class="contant">可直接挂上墙 可加费添加外框</div>
                </div>
                <div class="col-6 item">
                  <div class="title2">尺寸</div>
                  <!-- <div class="contant">40cmX40cm</div> -->
                  <div class="contant">{{ artwork.commodity.width }}cmX{{ artwork.commodity.height }}cm</div>
                </div>
                <div class="col-6 item">
                  <div class="title2">邮费</div>
                  <div class="contant">免费专业物流三到四周左右到</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container2">
          <div class="title">作者简介</div>
          <div class="row">
            <div class="col-4">
              <!-- <q-img src="img/painter.png" width="210px"></q-img> -->
              <q-img :src="artwork.seller.user.avatar" width="210px"></q-img>
            </div>
            <div class="col-8">
              <div class="row painter">
                <div class="col">浅绿色树脂光泽板</div>
                <router-link :to="`/${$i18n.locale}/artist/${ artwork.seller.sellerId }`" class="col-grow">进入{{ artwork.seller.firstname }} {{ artwork.seller.lastname }}的主页</router-link>
              </div>
              <!-- <div class="content2">
                我的工作是将不同的图片和颜料混合在一起，在计算机和画布上创建一个新的图像。
              </div> -->

              <!-- <div class="content2">
                我最喜欢的主题是女性脸,我用人和旧墙的照片，垃圾海报和其他各种有趣的主题来重新创造一个新的形象。当数码部分准备好后，我打印图像并开始在上面画画。我创造了厚厚的结构和许多层的油漆和凝胶
              </div> -->
              <div class="content2">
                {{ artwork.seller.metadata.profile }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 left">
        <div class="title-left">
          <div>浅绿色树脂光泽版130cmx180cm</div>
          <div>油画帆布</div>
        </div>
        <div class="soldout">已售</div>
        <div class="off">已下架</div>
        <!-- <div class="prise"><span class="symbol">¥</span>7，000</div> -->
        <div class="prise">{{ price }}</div>
        <q-select
          borderless
          v-model="currency"
          :options="priceOptions"
          emit-value
          class="currency"
        />
        <div class="title2">相框选择材质</div>
        <div class="row text-center frames">
          <div class="btn col-4" v-for="i in 7" :key="i">
            <div class="frame"></div>
            <div class="color">浅木色 ¥800</div>
          </div>
          <div class="col-4">
            <div class="frame custom"></div>
            <div class="color">定制</div>
          </div>
        </div>
        <div class="title2">相框选择大小</div>
        <div class="row">
          <div class="size btn col-4">小</div>
          <div class="size btn col-4">中</div>
          <div class="size btn col-4">大</div>
        </div>
        <div class="row text-center items-end advantages">
          <div class="col-4 item2">
            <q-img src="img/send.png" width="30px" class="image"></q-img>
            <div>全球免费送货</div>
          </div>
          <div class="col-4 item2">
            <q-img src="img/change.png" width="35px" class="image"></q-img>
            <div>免费换货</div>
          </div>
          <div class="col-4 item2">
            <q-img src="img/pay.png" width="30px" class="image"></q-img>
            <div>安全支付</div>
          </div>
        </div>
        <!-- <div class="buy text-center relative-position">
          <div class="prise prise2"><span class="symbol">¥</span> 7，000</div>
          <div class="buynow text-white btn">点击购买</div>
          <div class="makeoffer text-white btn" @click="openOfferPage">
            出价
          </div>
          <div class="row contactus">
            <div class="contact col-grow btn">
              <q-img src="img/contact.png" width="20px"></q-img>
            </div>
            <div class="askquestion col text-left btn">
              <div>对于购买此画有任何疑问？</div>
              <div>与永宝专业客服在线交流</div>
            </div>
          </div>
          <div class="offer relative-position absolute closepage" ref="offerPage">
            <q-img
              src="img/close.png"
              width="20px"
              class="offer-close absolute btn"
              @click="closeOfferPage"
            ></q-img>
            <div class="offer-title text-left">就此作品向艺术家出价</div>
            <div class="newprise bg-white text-left">
              <span class="symbol2">¥</span><span class="sub btn">－</span
              ><span class="num btn">{{ prise }}</span
              ><span class="add btn">＋</span>
            </div>
            <div class="email-outer bg-white">
              <input
                type="text"
                v-model="email"
                placeholder="您的电子邮件地址"
                class="email"
              />
            </div>
            <div class="msg-outer bg-white">
              <textarea
                placeholder="您的出价是多少呢？您也可以写下您的其他问题，留下微信或电话号码。我们的工作人员会很快联系您的"
                class="msg"
                v-model="msg"
              ></textarea>
            </div>
          </div>
        </div> -->
        <div class="sold relative-position">
          <div class="sold-title">您心仪的作品已被售出？</div>
          <div>
            好消息！这位艺术家接受艺术品订制！您可以提供给我们之前的作品细节并选择尺寸，我们会和该艺术家协商订制作品价格！
          </div>
          <div class="btn sold-btn text-white text-center" @click="openOfferPage">
            同这位艺术家定制作品
          </div>
          <div class="row contactus">
            <div class="contact col-grow btn">
              <q-img src="img/contact.png" width="20px"></q-img>
            </div>
            <div class="askquestion col text-left btn">
              <div>对于购买此画有任何疑问？</div>
              <div>与永宝专业客服在线交流</div>
            </div>
          </div>
          <div class="offer relative-position absolute closepage" ref="offerPage">
            <q-img
              src="img/close.png"
              width="20px"
              class="offer-close absolute btn"
              @click="closeOfferPage"
            ></q-img>
            <div class="offer-title text-left">就此作品向艺术家出价</div>
            <div class="newprise bg-white text-left">
              <span class="symbol2">¥</span><span class="sub btn">－</span
              ><span class="num btn">{{ price }}</span
              ><span class="add btn">＋</span>
            </div>
            <div class="email-outer bg-white">
              <input
                type="text"
                v-model="email"
                placeholder="您的电子邮件地址"
                class="email"
              />
            </div>
            <div class="msg-outer bg-white">
              <textarea
                placeholder="您的出价是多少呢？您也可以写下您的其他问题，留下微信或电话号码。我们的工作人员会很快联系您的"
                class="msg"
                v-model="msg"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="follow relative-position" ref="follow">
          <q-img
            src="img/close.png"
            width="20px"
            class="close absolute btn"
            @click="close"
          ></q-img>
          <div class="row">
            <div class="erweima">
              <q-img src="img/erweima.png" width="55px"></q-img>
            </div>
            <div class="follow-us col-grow">
              <div>扫码下载永宝APP</div>
              <div>即时接受艺术品及订阅信息</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paints">
      <div class="container text-center">
        <div class="relative-position">
          <div class="title">{{ artwork.seller.firstname }} {{ artwork.seller.lastname }}的其他作品</div>
          <div class="more absolute btn">更多</div>
        </div>
        <div class="row">
          <!-- <div class="col-3" v-for="i in 4" :key="i">
            <div class="paint">
              <div class="image"></div>
            </div>
            <div class="text text-left">
              <div>丙烯酸 • 亚麻</div>
              <div>100x100cm</div>
            </div>
          </div> -->
          <div class="col-3" v-if="artwork.seller.commoditys.length" v-for="(item, index) in artwork.seller.commoditys" :key="'sellerCommodity'+index">
            <div class="paint">
              <!-- <div class="image"></div> -->
              <q-img :src="item.photos && item.photos.length ? item.photos[0].src : ''" width="208px" height="208px" />
            </div>
            <div class="text text-left">
              <div>丙烯酸 • 亚麻</div>
              <div>{{item.width}}x{{item.height}}cm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="similar-paints paints">
      <div class="container text-center">
        <div class="relative-position">
          <div class="title">类似艺术作品</div>
          <div class="more absolute">更多</div>
        </div>
        <div class="row">
          <!-- <div class="col-3" v-for="i in 4" :key="i">
            <div class="paint">
              <div class="image"></div>
            </div>
            <div class="text text-left">
              <div>丙烯酸 • 亚麻</div>
              <div>100x100cm</div>
            </div>
          </div> -->
          <div class="col-3" v-if="artwork.commoditySimilar.length" v-for="(item, index) in artwork.commoditySimilar" :key="'commoditySimilar'+index">
            <div class="paint">
              <!-- <div class="image"></div> -->
              <q-img :src="item.photos && item.photos.length ? item.photos[0].src : ''" width="208px" height="208px" />
            </div>
            <div class="text text-left">
              <div>丙烯酸 • 亚麻</div>
              <div>{{item.width}}x{{item.height}}cm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paints history">
      <div class="container text-center">
        <div class="relative-position">
          <div class="title">您最近浏览的作品</div>
          <div class="more absolute btn">更多</div>
        </div>

        <div class="row">
          <!-- <div class="col-3" v-for="i in 4" :key="i">
            <div class="paint">
              <div class="image"></div>
            </div>
            <div class="text text-left">
              <div>丙烯酸 • 亚麻</div>
              <div>100x100cm</div>
            </div>
          </div> -->
          <div v-if="artwork.browsingHistory.length" class="col-3" v-for="(item, index) in artwork.browsingHistory" :key="'browsingHistory'+index">
            <div class="paint">
              <div class="image"></div>
            </div>
            <div class="text text-left">
              <div>丙烯酸 • 亚麻</div>
              <div>{{item.width}}x{{item.height}}cm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      defaultPriceOptions: [{
        label: "CNY",
        value: "CNY",
        locale: "zh-cn",
        price: ""
      }, {
        label: "USD",
        value: "USD",
        locale: "en-us",
        price: ""
      }, {
        label: "JPY",
        value: "JPY",
        locale: "ja-jp",
        price: ""
      }, {
        label: "EUR",
        value: "EUR",
        locale: "fr-fr",
        price: ""
      }],
      options: ["CNY", "USD", "JPY", "EUR"],
      currency: "CNY",
      prise: "7000",
      email: "",
      msg: "",
    };
  },
  async preFetch({ store, currentRoute }) {
    // getArtwork
    console.log("commodity", currentRoute)
    const { locale, artworkId } = currentRoute.params;
    return await store.dispatch('artwork/getArtwork', {
      locale,
      artworkId
    })
  },
  computed: {
    artwork() {
      return this.$store.state.artwork.data;
    },
    priceOptions() {
      return this.defaultPriceOptions.map((item) => {
        return Object.assign(item, {
          price: this.$store.state.artwork.data.commodity.price[item.locale]
        });
      })
    },
    price() {
      for(let item in this.priceOptions) {
        if(this.priceOptions[item].label == this.currency) {
          return this.priceOptions[item].price;
        }
      }
    }
  },
  methods: {
    close() {
      this.$refs.follow.classList.add("closepage");
    },
    closeOfferPage() {
      this.$refs.offerPage.classList.add("closepage");
      this.$refs.offerPage.classList.remove("openpage");
    },
    openOfferPage() {
      this.$refs.offerPage.classList.remove("closepage");
      this.$refs.offerPage.classList.add("openpage");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  color: rgb(21, 44, 43);
  .btn {
    cursor: pointer;
  }
  .button {
    z-index: 1000;
    left: 604px;
    top: 42px;
    .heart,
    .share {
      display: inline-block;
    }
    .image {
      width: 65px;
      height: 27px;
      background: url("/img/share.png") center center no-repeat;
      background-color: rgba(255, 255, 255, 0.7);
      margin-left: 10px;
    }
    .image2 {
      background: url("/img/heart.png") center center no-repeat;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  .carousel1 ::v-deep {
    .q-panel {
      margin: 0 auto;
    }
    .q-panel-parent {
      overflow: unset;
    }
    .q-carousel__navigation--top,
    .q-carousel__navigation--bottom {
      top: 440px;
      overflow-x: auto;
      overflow-y: unset;
      height: 50px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .q-btn-item {
      border-radius: 0%;
      background-color: rgba(0, 0, 0, 0.6) !important;
      height: 48px;
      top: 265px;
    }
    .q-carousel__thumbnail {
      border-radius: 0%;
    }
    .q-carousel__prev-arrow--horizontal {
      left: 0;
    }
    .q-carousel__next-arrow--horizontal {
      right: 0;
    }
    .q-carousel__navigation--bottom {
      left: 0;
      right: 0;
    }
  }
  .top {
    margin-top: 150px;
    height: 1px;
  }
  .container2 {
    padding: 60px 40px;
    border-top: 1px solid rgba(21, 44, 43, 0.1);
    .left2 {
      padding: 0 20px;
    }
  }
  .title {
    margin: 0 0 40px 0;
    font-size: 24px;
    font-weight: 600;
  }
  .name {
    font-size: 24px;
  }
  .year,
  .painter,
  .content {
    font-size: 14px;
  }
  .painter {
    margin-bottom: 20px;
  }
  .title2 {
    font-size: 16px;
  }
  .content {
    margin-bottom: 30px;
  }
  .item {
    padding: 0 30px 0 0;
  }
  .painter {
    font-size: 18px;
  }
  .content2 {
    font-size: 14px;
    font-family: "Heiti SC";
    font-weight: 600;
  }
  .left {
    padding-left: 25px;
    .title-left {
      font-size: 24px;
      margin: 10px 0;
    }
    .soldout,
    .off {
      color: rgb(173, 175, 139);
      font-size: 44px;
      font-weight: 600;
    }
    .currency {
      display: inline-block;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .prise {
      display: inline-block;
      margin-right: 20px;
      font-size: 42px;
      .symbol {
        font-size: 14px;
      }
    }
    .title2 {
      font-size: 20px;
    }
    .frames {
      margin-bottom: 20px;
      .frame {
        width: 100px;
        height: 36px;
        margin: 10px 0 0 0;
        background-image: url("/img/frame.png");
        background-size: cover;
        &:hover {
          outline: 2px solid rgb(173, 175, 139);
        }
      }
      .custom {
        background-image: url("/img/custom.png");
      }
      .color {
        width: 100px;
        font-size: 12px;
        font-family: "Heiti SC";
        margin-bottom: 5px;
      }
    }

    .size {
      width: 100px;
      height: 35px;
      margin: 10px 8px 5px 0;
      border: 1px solid rgba(21, 44, 43, 0.1);
      line-height: 35px;
      text-align: center;
      margin-bottom: 40px;
      &:hover {
        border: 1px solid rgba(21, 44, 43, 0.6);
      }
    }
    .advantages {
      font-size: 12px;
      margin-bottom: 45px;
      letter-spacing: 2px;
      .item2 {
        padding-right: 30px;
      }
    }
    .image {
      margin-bottom: 10px;
    }
    .buy {
      border: 1px solid rgba(21, 44, 43, 0.1);
      padding: 25px 0;
      width: 340px;
      margin-bottom: 25px;
      .prise2 {
        margin-bottom: 20px;
      }
      .buynow,
      .makeoffer {
        background-color: #152c2b;
        font-size: 18px;
        font-weight: bolder;
        width: 284px;
        height: 38px;
        line-height: 38px;
        margin: 0 auto 20px;
      }
      .contactus {
        width: 180px;
        margin: 0 auto;
        .contact {
          margin-top: 6px;
        }
        .askquestion {
          font-size: 12px;
          font-family: "Heiti SC";
          font-weight: 600;
          padding-left: 10px;
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
    .sold {
      border: 1px solid rgba(21, 44, 43, 0.1);
      padding: 35px;
      width: 340px;
      margin-bottom: 20px;
      font-size: 16px;
      .sold-title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .contactus {
        width: 180px;
        margin: 0 auto;
        .contact {
          margin-top: 6px;
        }
        .askquestion {
          font-size: 12px;
          font-family: "Heiti SC";
          font-weight: 600;
          padding-left: 10px;
        }
      }
      .sold-btn {
        width: 285px;
        height: 40px;
        line-height: 40px;
        background-color: #152c2b;
        font-size: 18px;
        font-weight: bolder;
        margin: 20px auto;
      }
    }
    .closepage {
      display: none;
    }
    .openpage {
      display: block;
    }

    .follow {
      border: 1px solid rgba(21, 44, 43, 0.1);
      width: 340px;
      padding: 20px 35px;
      .close {
        top: 20px;
        left: 300px;
      }
      .follow-us {
        padding: 2px 0 0 14px;
        font-size: 16px;
      }
    }
  }
}
.paints {
  background-color: #232323;
  padding: 60px 0;
  .title {
    font-size: 34px;
    font-weight: normal;
    color: rgb(173, 175, 139);
  }
  .more {
    color: rgb(173, 175, 139);
    left: 1156px;
    top: 15px;
    font-size: 14px;
    font-family: "Heiti SC";
    font-weight: 600;
  }
  .text {
    color: rgb(173, 175, 139);
    width: 216px;
    margin: 10px auto 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }
}
.similar-paints {
  background-color: #ffffff;
  .title,
  .text,
  .more {
    color: rgb(21, 44, 43);
  }
}
.history {
  background-color: #152c2b;
}
.paint {
  box-sizing: content-box;
  width: 208px;
  height: 208px;
  background-color: #152c2b;
  padding: 6px;
  border: 2px solid #adaf8b;
  margin: 0 auto;
  .image {
    width: 208px;
    height: 208px;
    background: url("/img/paint1.png") center center no-repeat;
  }
}
</style>





.已下架 {
  font-size: 44px;
  font-family: "STFangsong";
  color: rgb(173, 175, 139);
  line-height: 1.2;
  position: absolute;
  left: 1165.328px;
  top: 221.635px;
  z-index: 45;
}
