<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/mine/man.png" height="240px"></q-img>
      <div class="absolute-full">
        <div class="container">
          <!-- <div class="tags">
            <div class="btn" : @click="goMine">我的账户</div>
            <div class="btn" @click="goWishlist">我的最爱</div>
            <div class="btn" @click="goLike">我最喜爱的艺术家</div>
            <div class="btn" @click="goOrder">购买记录</div>
          </div> -->
          <q-tabs
            no-caps
            class="tags"
            align="left"
            indicator-color="transparent"
            active-color="brand"
            active-bg-color="brand"
            content-class="tabs"
          >
            <q-route-tab content-class="text-bold" v-for="item in tags" :key="item.value" :to="item.value" exact replace >
              {{$t(item.label)}}
            </q-route-tab>
          </q-tabs>

          <div class="line"></div>
          <div class="title">{{$t('my.index.goodAfternoon')}} {{ userInfo ? userInfo.name : '' }}</div>
          <div class="time">{{$t('my.index.YouSelf')}}{{ userInfo ? userInfo.createdDate.substr(0,10) : '' }}{{$t('my.index.BecameYongbao')}} {{ userInfo ? userInfo.seller ? $t('my.index.artist') : $t('my.index.ArtCollector') : ''}}</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      tags: [{
        label: "my.index.myAccount",
        value: "info"
      }, {
        label: "my.index.myFavourite",
        value: "wishlist"
      }, {
        label: "my.index.MyFavoriteArtist",
        value: "like"
      },
      // {
      //   label: "my.index.myAccount",
      //   value: "order"
      // }
      ]
    }
  },
  async preFetch({ store, currentRoute }) {
    // return await store.dispatch("artist/sellerSearch", {
    //   type: tag || "",
    //   country: country || "",
    //   firstname: surname || "",
    //   locale: lang,
    //   currentPage: currentPage || store.state.artist.pagination.currentPage,
    //   pageSize: pageSize || store.state.artist.pagination.pageSize,
    // });
  },
  computed: {
    userInfo() {
      return this.$store.state.user.info;
    }
  },
  methods: {
    goWishlist() {
      this.$router.push(`/${this.$i18n.locale}/wishlist`);
    },
    goMine() {
      this.$router.push(`/${this.$i18n.locale}/mine`);
    },
    goLike() {
      this.$router.push(`/${this.$i18n.locale}/like`);
    },
    goOrder() {
      this.$router.push(`/${this.$i18n.locale}/order`);
    },
  },
}
</script>
<style lang="scss" scoped>
.banner {
  color: #d6d7c5;
  .container {
    width: 1220px;
    margin: 0 auto;
    .tags > div {
      display: inline-block;
      padding: 10px 20px;
    }
    .tags {
      font-weight: bold;
      padding-left: 80px;
      color: #d1d2c0;
      // background-color: #1b2b2a;
    }
    .line {
      width: 900px;
      height: 1px;
      background-color: rgba(214, 215, 197, 0.1);
      margin-bottom: 50px;
    }
    .title,
    .time {
      padding: 0 95px;
    }
    .title {
      font-size: 32px;
      margin-bottom: 5px;
    }
    .time {
      font-size: 18px;
    }
  }
}

.text-brand {
  color: #1b2d2b;
}
.bg-brand {
  background: #d6d7c5;
}
.tabs{
  color: #fff;
}
.tab{
  color: #f00;
  font-weight: bold;
}
</style>
