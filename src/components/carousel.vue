<template>
  <div>
    <q-carousel
      height="510px"
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="index + 1"
        v-for="(item, index) in data"
        :key="index"
        :img-src="item.src"
        class="row"
      >
        <div class="title text-bold text-white text-center offset-3 col-9">
          <div>{{item.title}}</div>
          <div>{{item.subTitle}}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="text-white slide">
      <span class="number">{{ slide }}</span>
      <span class="line">/</span
      ><span class="all" v-if="data">{{ data.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      slide: 1,
      autoplay: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 48px;
  font-family: "Adobe Heiti Std";
  text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.8);
  margin-top: 120px;
  letter-spacing: 5px;
  padding-right: 160px;
}
.menu {
  background-color: rgba(21, 44, 43, 0.502);
  height: 510px;
  padding: 36px 20px;
  width: 273px;
  .menu-title {
    font-size: 24px;
    padding: 14px 0;
    font-weight: bolder;
  }
  .menu-title1 {
    padding-top: 0;
  }
  .menu-el {
    line-height: 13px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
    font-weight: bolder !important;
  }
}
.slide {
  position: absolute;
  right: 100px;
  bottom: 10px;
  user-select: none;
  font-size: 20.576px;
  font-family: "STFangsong";
  line-height: 1.75;
  letter-spacing: 8px;
  padding: 100px 0 0 580px;
  font-size: 60px;
  .number{
    text-shadow: 0 0 10px #000;
  }
  .line {
    display: inline-block;
    font-size: 80px;
    transform: rotate(20deg);
    font-weight: lighter;
  }
  .all {
    font-size: 30px;
    text-shadow: 0 0 10px #000;
  }
}

</style>
