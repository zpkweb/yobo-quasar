<template>
  <div class="banner">
    <slot name="bgImg"></slot>
    <div class="banner-content fit column wrap justify-center items-center content-center">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .banner{
    position: relative;
    display: flex;
    width: 100%;
    min-height: 200px;
    background-color: #232323;
    .banner-bg-img {
      width: 100%;
      height: 100%;
    }
    .banner-content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;


    }

  }
</style>
