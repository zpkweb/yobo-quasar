<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/mine/mine.png" height="240px"></q-img>
      <div class="absolute-full">
        <div class="container">
          <div class="tags">
            <div class="btn" @click="goMine">我的账户</div>
            <div class="btn" @click="goWishlist">我的最爱</div>
            <div class="active btn" @click="goLike">我最喜爱的艺术家</div>
            <div class="btn" @click="goOrder">购买记录</div>
          </div>
          <div class="line"></div>
          <div class="title">下午好 葫芦娃</div>
          <div class="time">您自2020/8/5起成为了永宝 艺术收藏家</div>
        </div>
      </div>
    </div>

    <div class="like">
      <div class="row item" v-for="i in 3" :key="i">
        <div class="col-3 image"></div>
        <div class="col-4 desc">
          <div class="title">Katy Tackes</div>
          <div>已上传2000副作品</div>
          <div>法国</div>
        </div>

        <div class="col-5 row items-center justify-end">
          <div class="btn follow follow2 text-white text-center">
            +关注艺术家
          </div>
        </div>
      </div>
      <div class="row item" v-for="i in 3" :key="i">
        <div class="col-3 image2"></div>
        <div class="col-4 desc">
          <div class="title">MYSTIC LIGHT OF THE</div>
          <div>已上传10幅作品</div>
          <div>日本</div>
        </div>

        <div class="col-5 row items-center justify-end">
          <div class="btn follow text-white text-center">已关注</div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
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
};
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
.btn {
  cursor: pointer;
}
.like {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 100px;
  .item {
    border-top: 1px solid rgba(21, 44, 43, 0.1);
    padding: 20px 0;
    .image {
      background: url("/img/mine/like1.png") center center no-repeat;
      background-size: contain;
    }
    .image2 {
      background: url("/img/mine/like2.png") center center no-repeat;
      background-size: contain;
    }
    .follow {
      background-color: #152c2b;
      padding: 5px 0;
      font-size: 18px;
      font-weight: bolder;
      width: 160px;
    }
    .follow2 {
      background-color: #adaf8b;
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
  }
}
</style>
