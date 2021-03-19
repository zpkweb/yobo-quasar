<template>
  <div>
    <div class="line absolute"></div>
    <div class="container2">
      <q-tabs
        v-model="tab"
        dense
        active-color="gray"
        align="left"
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      tab: "1",
    };
  },

};
</script>

<style lang="scss" scoped>

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
      background: url("~assets/images/commodity.png") center center no-repeat;
      width: 200px;
      height: 200px;
    }
    .image2 {
      background: url("~assets/images/commodity.png") center center no-repeat;
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




