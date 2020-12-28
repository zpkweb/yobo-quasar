<template>
  <q-layout class="relative-position">
    <div class="banner relative-position">
      <q-img src="img/mine/mine.png" height="240px"></q-img>
      <div class="absolute-full">
        <div class="container">
          <div class="tags">
            <div class="btn" @click="goMine">我的账户</div>
            <div class="btn" @click="goWishlist">我的最爱</div>
            <div class="btn" @click="goLike">我最喜爱的艺术家</div>
            <div class="active btn" @click="goOrder">购买记录</div>
          </div>
          <div class="line"></div>
          <div class="title">下午好 葫芦娃</div>
          <div class="time">您自2020/8/5起成为了永宝 艺术收藏家</div>
        </div>
      </div>
    </div>
    <div class="line absolute"></div>
    <div class="container2">
      <q-tabs
        v-model="tab"
        dense
        active-color="gray"
        align="justify-left"
        narrow-indicator
      >
        <q-tab name="1" label="待付款" />
        <q-tab name="2" label="待收货" />
        <q-tab name="3" label="待评价" />
        <q-tab name="4" label="全部订单" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="1">
          <div class="order">
            <div class="item row">
              <div class="col-3">
                <div class="image"></div>
              </div>
              <div class="col-7">
                <div class="painter">Greeey Sarahgt</div>
                <div class="desc">1920x1200cm -1988年</div>
              </div>
              <div class="col-2 text-center">
                <div class="time">
                  <span class="text">剩余</span>
                  <span class="text">14:29:44</span>
                </div>
                <div class="pay btn text-white">去付款</div>
              </div>
            </div>
            <div class="item row">
              <div class="col-3">
                <div class="image image2"></div>
              </div>
              <div class="col-7">
                <div class="painter">Greeey Sarahgt</div>
                <div class="desc">1920x1200cm -1988年</div>
              </div>
              <div class="col-2 text-center">
                <div class="time">
                  <span class="text">剩余</span>
                  <span class="text">14:29:44</span>
                </div>
                <div class="pay btn text-white">去付款</div>
              </div>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="2">
          <div class="text-h6">待收货</div>
        </q-tab-panel>

        <q-tab-panel name="3">
          <div class="text-h6">待评价</div>
        </q-tab-panel>
        <q-tab-panel name="4">
          <div class="text-h6">全部订单</div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-layout>
</template>


<script>
export default {
  data() {
    return {
      tab: "1",
    };
  },
  methods: {
    goWishlist() {
      this.$router.push("/wishlist");
    },
    goMine() {
      this.$router.push("/mine");
    },
    goLike() {
      this.$router.push("/like");
    },
    goOrder() {
      this.$router.push("/order");
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  color: rgb(217, 218, 202);
  font-size: 16px;
  font-weight: bolder;
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
      font-size: 36px;
      margin-bottom: 10px;
    }
    .time {
      font-size: 18px;
      font-family: "Heiti SC";
    }
  }
}
.btn {
  cursor: pointer;
}
.container2 {
  width: 1100px;
  margin: 0 auto;
}
.container2::v-deep {
  .q-tab__label {
    color: rgb(153, 153, 153);
    padding: 20px 30px;
    font-size: 14px;
    line-height: 14px;
  }
  .q-tab__indicator {
    background: none;
  }
}
.line {
  height: 1px;
  width: 100%;
  background-color: rgba(21, 44, 43, 0.1);
  top: 301px;
}
.order {
  width: 1000px;
  margin: 0 auto;
  .item {
    border-bottom: 1px solid rgba(21, 44, 43, 0.1);
    .image {
      background: url("/img/mine/order1.png") center center no-repeat;
      width: 200px;
      height: 200px;
    }
    .image2 {
      background: url("/img/mine/order2.png") center center no-repeat;
    }
    .painter.desc {
      font-size: 14px;
    }
    .painter {
      margin-top: 80px;
    }
    .time {
      margin-top: 80px;
      font-size: 14px;
      color: rgb(239, 0, 88);
      margin-bottom: 5px;
      width: 150px;
      .text {
        padding: 0 5px;
      }
    }
    .pay {
      width: 150px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      background-color: rgb(21, 44, 43);
      font-weight: 600;
    }
  }
}
</style>




