<template>
  <q-layout>
    <div class="container">
      <div class="title">评价订单</div>
      <div class="row">
        <div class="col-3">
          <q-img width="186px" src="img/pay/pj.png" class="image"></q-img>
          <div class="detail">浅绿色树脂光泽版</div>
          <div class="size">130cmx180cm油画帆布</div>
          <div class="prise">¥7，900</div>
        </div>
        <div class="col-9 right">
          <div class="row">
            <div class="col order-number">订单号：125343409719</div>
            <div class="col-grow">2020-08-06 18:50:37</div>
          </div>
          <div class="row score">
            <div class="col-4">
              <div class="item">作品评分</div>
              <div class="q-gutter-y-md column star">
                <q-rating
                  v-model="star1"
                  size="1.5em"
                  icon="star_border"
                  icon-selected="star"
                />
              </div>
            </div>
            <div class="col-4">
              <div class="item">快递包装</div>
              <div class="q-gutter-y-md column star">
                <q-rating
                  v-model="star2"
                  size="1.5em"
                  icon="star_border"
                  icon-selected="star"
                />
              </div>
            </div>
            <div class="col-4">
              <div class="item">配送员服务</div>
              <div class="q-gutter-y-md column star">
                <q-rating
                  v-model="star3"
                  size="1.5em"
                  icon="star_border"
                  icon-selected="star"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-grow title">评价晒单</div>
            <div class="col relative-position">
              <textarea
                class="text"
                placeholder="分享体验心得，给千万想买的人一个参考"
              ></textarea>
              <div class="num absolute">0/500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="public text-center text-white">去发表</div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      star1: 0,
      star2: 0,
      star3: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1030px;
  margin: 0 auto;
  color: rgb(21, 44, 43);
  .title {
    font-size: 20px;
    font-family: "STFangsong";
    margin-bottom: 65px;
  }
  .image {
    margin-bottom: 25px;
  }
  .detail,
  .size {
    font-size: 18px;
    font-family: "STFangsong";
    line-height: 1.2;
  }
  .size {
    margin-bottom: 10px;
  }
  .prise {
    font-size: 18px;
    font-family: "STFangsong";
  }
  .right {
    padding-left: 60px;
    font-size: 14px;
    font-family: "STFangsong";
    .order-number {
      margin-bottom: 2px;
    }
    .score {
      margin-bottom: 26px;
      .item,
      .star {
        display: inline-block;
      }
      .star {
        vertical-align: top;
      }
      .item {
        padding-top: 1px;
        margin-right: 13px;
      }
      .q-rating {
        color: #adaf8b;
      }
    }
    .title {
      margin: 15px 12px 0 0;
    }
    .text {
      resize: none;
      width: 643px;
      height: 109px;
      border-color: rgb(228, 228, 228);
      padding: 15px 0 0 20px;
      outline: none;
    }
    .num {
      top: 75px;
      left: 585px;
      font-size: 14px;
      color: #888;
    }
  }
}
.public {
  width: 284px;
  height: 38px;
  margin: 0 auto;
  line-height: 38px;
  background-color: #152c2b;
  font-size: 18px;
  font-family: "STFangsong";
  font-weight: 600;
}
</style>




