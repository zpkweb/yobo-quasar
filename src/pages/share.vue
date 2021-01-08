<template>
  <q-layout>
    <div class="container text-center">
      <div class="title">
        <div>将永宝分享给您的朋友，一起买画获得</div>
        <div>优惠大奖！</div>
      </div>
      <div class="content">
        好友将通过您分享的链接注册，将获得最高¥100的抵用券
      </div>
      <div class="select">
        <div>
          <div class="num text-white">1</div>
          <div class="text-left title">我希望获得的奖品</div>
        </div>
        <div class="row">
          <div class="col-4">九折折扣券</div>
          <div class="col-4">CNY ¥100抵用券</div>
        </div>
      </div>
    </div>
  </q-layout>
</template>



<style lang="scss" scoped>
.container {
  background: url("/img/bg.png") top center no-repeat;
  background-size: auto 375px;
  color: #d6d7c5;
  font-weight: bolder;
  padding: 80px 0 0 0;
  background-color: pink;
  height: 800px;
  .title {
    font-size: 36px;
    line-height: 46px;
    margin-bottom: 15px;
  }
  .content {
    font-size: 16px;
    margin-bottom: 70px;
  }
  .select {
    color: rgb(21, 44, 43);
    width: 1140px;
    margin: 0 auto;
    background-color: #ffffff;
    z-index: 100;
    height: 300px;
    padding: 30px;
    font-weight: normal;
    .num {
      width: 20px;
      height: 20px;
      transform-origin: center;
      rotate: 20deg;
      background-color: #152c2b;
    }
    .title {
      font-size: 18px;
      color: rgb(0, 0, 0);
    }
  }
}
</style>

.我希望获得的奖品： {
  font-size: 18px;
  font-family: "STFangsong";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: center;
  position: absolute;
  left: 484.141px;
  top: 431.751px;
  z-index: 25;
}
