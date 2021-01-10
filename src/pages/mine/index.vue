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
            class="tags text-white "
            align="left"
          >
            <q-route-tab v-for="item in tags" :key="item.value" :to="item.value" exact replace :label="item.label" />
          </q-tabs>

          <div class="line"></div>
          <div class="title">下午好 葫芦娃</div>
          <div class="time">您自2020/8/5起成为了永宝 艺术收藏家</div>
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
        label: "我的账户",
        value: "info"
      }, {
        label: "我的最爱",
        value: "wishlist"
      }, {
        label: "我最喜爱的艺术家",
        value: "like"
      }, {
        label: "购买记录",
        value: "order"
      }]
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
    width: 1100px;
    margin: 0 auto;
    .tags > div {
      display: inline-block;
      padding: 10px 20px;
    }
    .tags {
      padding-left: 80px;
      .active {
        background-color: #d6d7c5;
        color: #333;
      }
    }
    .line {
      width: 800px;
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
</style>
