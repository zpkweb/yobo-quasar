<template>
  <div>
    <div class="wishlist" v-if="!loading">
      <template v-if="myWishlist && myWishlist.length">
        <div
          class="row item"
          v-for="(item, index) in myWishlist"
          :key="'style1-' + index"
        >
          <div class="wishlist-image">
            <q-img
            class="col-3 image"
            v-if="item.photos && item.photos.length"
            :src="item.photos[0]"
            width="212px"
            height="110px"
            style="max-width: 212px; "
            contain
          ></q-img>
          </div>

          <div class="col-7 desc">
            <div class="title">{{ item.name }}</div>
            <div class="name" v-if="item.seller">
              {{ item.seller.firstname }} {{ item.seller.lastname }}
            </div>
            <div class="size">
              {{ item.width }}cmX{{ item.height }}cm in - 2019
            </div>
          </div>
          <div class="col-3 prise" v-if="$store.state.isShowPay">
            <div>{{ $t("my.wishlist.price") }}</div>
            <div class="num">{{ item.price[$i18n.locale] }}</div>
          </div>
          <div class="col-2 row items-center">
            <div class="btn wishlist-like buy text-white text-center" :class="{'wishlist-like-active': item.hasMyArtwork}" @click="myArtwork(item, index)">
              <!-- <div
                class="btn heart"
                :class="item.hasMyArtwork ? 'image1' : 'image2'"

              >
              </div> -->
              {{ item.hasMyArtwork ? "喜欢" : "不喜欢"}}
            </div>
          </div>
        </div>
      </template>
      <noData
        v-else
        text="my.wishlist.NoData"
        :routerLink="`/${$i18n.locale}/artwork`"
      />
    </div>
    <div class="row justify-center items-center" style="height: 300px" v-else>
      <q-spinner
        color="d6d7c5"
        size="3em"
      />
    </div>
    <div
      class="history-container"
      v-if="myBrowsingHistory && myBrowsingHistory.length"
    >
      <div class="history relative-position">
        <div class="text-center title">
          {{ $t("my.wishlist.YourRecentlyViewedArtworks") }}
        </div>
        <div class="row">
          <router-link
            :to="`/${$i18n.locale}/artwork/${item.commodity.commodityId}`"
            v-if="item.commodity && item.commodity.commodityId"
            class="item text-center col-3"
            v-for="(item, index) in myBrowsingHistory"
            :key="'style3-' + index"
          >
            <div class="image">
              <!-- <q-img
                v-if="item.photos && item.photos.length"
                :src="item.photos[0]"
                width="198px"
                height="300px"
              ></q-img> -->
              <Avatar
                :src="item.commodity && item.commodity.images ? item.commodity.images : ''"
                width="198px"
                type="photo"
              />
            </div>
            <div class="text text-left">
              {{ item.categorys ? item.categorys[0].name : "" }}
            </div>
            <div class="text text-left">
              {{ item.commodity.width }}x{{ item.commodity.height }}cm
            </div>
          </router-link>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import noData from "src/components/noData";
import Avatar from "src/components/avatar"
export default {
  components: {
    noData,
    Avatar
  },
  data() {
    return {
      myWishlist: [],
      myBrowsingHistory: [],
      loading: true
    };
  },
  async mounted() {
      const { locale } = this.$route.params;
      const userInfo = this.$q.cookies.get("userInfo");
      // console.log("userInfo", userInfo)

      if(userInfo){
        const myWishlist = await this.$store.dispatch("my/getMyWishlist", {
          userId: userInfo.userId,
          locale,
        });
        // console.log("myWishlist", myWishlist)

        if (myWishlist.success) {
          this.$store.commit("my/setMyWishlist", myWishlist.data);

          this.myWishlist = myWishlist.data.map((item) => {
            item.hasMyArtwork = true;
            return item;
          });
        }

        const myBrowsingHistory = await this.$store.dispatch(
          "my/getMyBrowsingHistory",
          {
            userId: userInfo.userId,
            locale,
            pageSize: 4,
            currentPage: 1,
          }
        );
        console.log("myBrowsingHistory", myBrowsingHistory)
        if (myBrowsingHistory.success) {
          // this.$store.commit("my/setMyBrowsingHistory", myBrowsingHistory.data);
          this.myBrowsingHistory = myBrowsingHistory.data.list;
        }
      }


      this.loading = false;
  },

  computed: {
    // myBrowsingHistory() {
    //   return this.$store.state.my.browsingHistory.list;
    // },
  },
  methods: {
    async myArtwork(item, index) {
      // console.log("item", item, index);
      if (!this.$store.state.user.info) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: this.$t("my.wishlist.NoData"),
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
          this.myWishlist = this.myWishlist.filter(function (element) {
            if (element.commodityId == item.commodityId) {
              element.hasMyArtwork = false;
            }
            return item;
          });
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("my.wishlist.Unlike"),
            color: "negative",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: delMyArtwork.message,
            color: "negative",
          });
        }
      } else {
        const addMyArtwork = await this.$store.dispatch("my/addMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId,
        });
        if (addMyArtwork.success) {
          this.myWishlist = this.myWishlist.filter(function (element) {
            if (element.commodityId == item.commodityId) {
              element.hasMyArtwork = true;
            }
            return item;
          });
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("my.wishlist.LikeSuccess"),
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
  },
};
</script>

<style lang="scss" scoped>
.title2 {
  padding: 20px 0;

  margin: 0 auto;
  border-bottom: 1px solid rgba(21, 44, 43, 0.1);
  .content {
    width: 1200px;
    div {
      display: inline-block;
    }
    .edit {
      padding: 0 60px;
    }
  }
}
.wishlist {
  width: 1200px;
  margin: 0 auto;
  padding: 0 100px;
  .wishlist-image{
    width: 212px;
    height: 110px;
    margin-right: 20px;
  }
  .item {
    padding: 20px 0;
    // .image {
    //   margin-right: 20px;
    // }
    .heart {
      width: 16px;
      height: 16px;
      margin: 7px auto 0 auto;
    }
    .image1 {
      background: url("~assets/img/liked.png") no-repeat;
      background-size: 100%;
    }
    .image2 {
      background: url("~assets/img/like.png") no-repeat;
      background-size: 100%;
    }


    .desc,
    .prise {
      padding: 30px 0;
    }
    .desc {
      .title {
        font-size: 18px;
      }
    }
    .prise {
      .num {
        font-size: 24px;
      }
    }
    .text {
      color: #333;
    }
  }
}
.history-container {
  background-color: #152c2b;
}
.history {
  padding: 60px 0;
  width: 1100px;
  margin: 0 auto;
  color: rgb(173, 175, 139);
  .title {
    font-size: 28px;
    margin-bottom: 40px;
  }
  .more {
    left: 1030px;
    top: 70px;
  }
  .image {
    width: 212px;
    padding: 6px;
    border: 1.5px solid rgb(173, 175, 139);
    margin-bottom: 10px;
  }
  .text {
    color: #adaf8b;
  }
}
.wishlist-like{
  width: 160px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: bolder;
  // background-color: #adaf8b;
  background-color: #152c2b;
}
.wishlist-like-active{
  background-color: #152c2b;
}
</style>


