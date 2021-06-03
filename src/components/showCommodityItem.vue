<template>
  <div class="show-commodity-item" :class="{'thumbnail': (typeof type) != 'undefined', 'active': active }">
    <template v-if=" (typeof type) != 'undefined'">
      <q-img class="show-commodity-item-img"  v-if="data.videoPhoto" :src="data.videoPhoto" ></q-img>
      <q-img class="show-commodity-item-img"  v-else="data.src" :src="data.src" ></q-img>

    </template>

    <template v-else>
      <iframe v-if="data.ccId" :src="`http://www.yoboart.com/video?isShowConfig=false&ccId=${data.ccId}&siteId=${data.siteId}&img_path=${data.videoPhoto}`" class="show-commodity-item-iframe" scrolling="no" frameBorder="0"></iframe>
      <q-img class="show-commodity-item-img" v-else="data.src" :src="data.src" style="max-width: 768px; height: 400px" contain></q-img>

    </template>




  </div>
</template>
<script>
export default {
  props: ['data', 'type', 'active']
}
</script>
<style scoped lang="scss">
.show-commodity-item{
  width: 100%;
  height: 100%;
  text-align: center;
  .show-commodity-item-iframe{
    width: 100%;
  height: 100%;
  }
  .show-commodity-item-img{

  }
}
.thumbnail {
  .show-commodity-item-img{
    width: 50px;
    height: 50px;
    border: 1px solid transparent;
    vertical-align: middle;
    opacity: 0.7;
    transition: opacity 0.3s;
    cursor: pointer;

  }

}
.show-commodity-item.active{
  .show-commodity-item-img{
    opacity: 1;
  }
}


</style>
