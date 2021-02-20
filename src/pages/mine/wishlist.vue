<template>
  <div>
    <!-- <div class="title2 text-right">
      <div class="content">
        <div class="edit">编辑</div>
      <div><span>删除</span>｜<span>取消</span></div>
      </div>
    </div> -->
    <div class="wishlist">
      <!-- <div class="row item" v-for="i in 6" :key="'style1-'+i">
        <div class="col-3 image"></div>
        <div class="col-4 desc">
          <div class="title">LOVE IS ON THE RISE</div>
          <div class="name">Katy Tackes</div>
          <div class="size">15x11 in - 2019</div>
        </div>
        <div class="col-3 prise">
          <div>价格</div>
          <div class="num">304，000</div>
        </div>
        <div class="col-2 row items-center">
          <div class="btn buy text-white text-center">购买</div>
        </div>
      </div>
      <div class="row item" v-for="i in 6" :key="'style2-'+i">
        <div class="col-3 image2"></div>
        <div class="col-4 desc">
          <div class="title">LOVE IS ON THE RISE</div>
          <div>Katy Tackes</div>
          <div>15x11 in - 2019</div>
        </div>
        <div class="col-3 prise">
          <div>价格</div>
          <div class="num">304，000</div>
        </div>
        <div class="col-2 row items-center">
          <div class="btn buy text-white text-center">购买</div>
        </div>
      </div> -->
      <template v-if="myWishlist && myWishlist.length">
        <div
          class="row item"
          v-for="(item, index) in myWishlist"
          :key="'style1-' + index"
        >
          <!-- <div class="col-3 image"></div> -->
          <q-img
            class="image"
            v-if="item.photos.length"
            :src="item.photos[0].src"
            width="212px"
          ></q-img>
          <div class="col-4 desc">
            <div class="title">{{ item.name }}</div>
            <div class="name">
              {{ item.seller.firstname }} {{ item.seller.lastname }}
            </div>
            <div class="size">
              {{ item.commodity.width }}cmX{{ item.commodity.height }}cm in - 2019
            </div>
          </div>
          <div class="col-3 prise">
            <div>{{$t('my.wishlist.price')}}</div>
            <div class="num">{{ item.price[$i18n.locale] }}</div>
          </div>
          <div class="col-2 row items-center">
            <div class="btn buy text-white text-center">
              <!-- 购买 -->
              <div class="btn heart" :class="item.hasMyArtwork ? 'image1' : 'image2'" @click="myArtwork(item, index)">
                <!-- {{hasMyArtwork ? '已喜欢' : '喜欢'}} -->
              </div>
              </div>
          </div>
        </div>
      </template>
      <div class="noData" v-else>{{$t('my.wishlist.NoData')}}</div>
    </div>

    <div class="history-container">
      <div class="history relative-position">
        <div class="text-center title">{{$t('my.wishlist.YourRecentlyViewedArtworks')}}</div>
        <!-- <div class="text-right more absolute">更多</div> -->
        <div class="row">
          <!-- <div class="item text-center col-3" v-for="i in 4" :key="'style3-'+i">
            <div class="image">
              <q-img src="img/mine/history1.png" height="200px" contain></q-img>
            </div>
            <div class="text-left">丙烯酸 • 亚麻</div>
            <div class="text-left">100x100cm</div>
          </div> -->
          <router-link
            :to="`/${$i18n.locale}/artwork/${item.commodity.commodityId}`"
            v-if="myBrowsingHistory && myBrowsingHistory.length"
            class="item text-center col-3"
            v-for="(item, index) in myBrowsingHistory"
            :key="'style3-' + index"
          >
            <div class="image">
              <q-img
                v-if="item.photos.length"
                :src="item.photos[0].src"
                width="198px"
                height="300px"
              ></q-img>
            </div>
            <!-- <div class="text text-left">丙烯酸 • 亚麻</div> -->
            <div class="text text-left">{{item.categorys ? item.categorys[0].name : ''}}</div>
            <div class="text text-left">
              {{ item.commodity.width }}x{{ item.commodity.height }}cm
            </div>
          </router-link>
          <div class="noData" v-else>{{$t('my.wishlist.NoData')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myWishlist: []
    }
  },
  async mounted() {
    console.log("this.$route", this.$route);
    const { locale } = this.$route.params;
    const { userId } = this.$store.state.user.info;
    const myWishlist = await this.$store.dispatch("my/getMyWishlist", {
      userId,
      locale,
    });
    console.log("myWishlist", myWishlist);
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
        userId,
        locale,
        pageSize: 4,
        currentPage: 1,
      }
    );
    if (myBrowsingHistory.success) {
      this.$store.commit("my/setMyBrowsingHistory", myBrowsingHistory.data);
    }
  },

  computed: {
    // myWishlist() {
    //   return this.$store.state.my.wishlist && this.$store.state.my.wishlist.map((item) => {
    //     item.hasMyArtwork = true;
    //     return item;
    //   });
    // },
    myBrowsingHistory() {
      return this.$store.state.my.browsingHistory.list;
    },

  },
  methods: {
    async myArtwork(item, index) {
      console.log("item", item, index)
      if(!this.$store.state.user.info){
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: this.$t('my.wishlist.NoData'),
          color: 'negative',
        })
        return;
      }
      if(item.hasMyArtwork) {
        const delMyArtwork =await this.$store.dispatch("my/delMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId
        })
        if(delMyArtwork.success){
          this.myWishlist = this.myWishlist.filter(function (element) {
            if(element.commodityId == item.commodityId) {
              element.hasMyArtwork = false;
            }
            return item;
          })
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: this.$t('my.wishlist.Unlike'),
            color: 'negative',
          })

        }else{
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: delMyArtwork.msg,
            color: 'negative',
          })
        }

      }else{

        const addMyArtwork =await this.$store.dispatch("my/addMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId
        })
        if(addMyArtwork.success) {
          this.myWishlist = this.myWishlist.filter(function (element) {
            if(element.commodityId == item.commodityId) {
              element.hasMyArtwork = true;
            }
            return item;
          })
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: this.$t('my.wishlist.LikeSuccess'),
            color: 'positive',
          })
        }else{
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: addMyArtwork.msg,
            color: 'negative',
          })
        }

      }

    }
  }
};
</script>

<style lang="scss" scoped>
.title2 {
  padding: 20px 0;

  margin: 0 auto;
  border-bottom: 1px solid rgba(21, 44, 43, 0.1);
  .content{
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
  .item {
    // border-top: 1px solid rgba(21, 44, 43, 0.1);
    padding: 20px 0;
    .image {
      margin-right: 20px;
    }
    .heart {
      width: 25px;
      height: 25px;
      margin: 0 auto;
    }
    .image1 {
      background: url("/img/favorites-fill.png")  no-repeat;
      background-size: 100%;
      // background-color: red;
    }
    .image2 {
      background: url("/img/favorites.png") no-repeat;
      background-size: 100%;
      // background-color: rgba(255, 255, 255, 0.7);
    }

    .buy {
      background-color: #152c2b;
      padding: 5px 0;
      font-size: 18px;
      font-weight: bolder;
      width: 160px;
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
</style>


