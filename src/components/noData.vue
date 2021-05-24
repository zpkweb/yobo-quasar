<template>
  <div class="noData">
      <q-img
        src="~assets/img/exclamatory.png"
        width="52px"
        class="noData-img"
      ></q-img>
      <div class="noData-text">{{$t(text) || "暂无数据"}}</div>
      <router-link v-if="routerLink" :to="routerLink || '/'" class="noData-routerLink">{{ $t(routerText) || "去看看" }}</router-link>
    </div>
</template>
<script>
export default {
  props: ["text", "routerLink", "routerText"]
}
</script>
<style scoped lang="scss">
  .noData {
    overflow: hidden;
    text-align: center;
    padding: 100px 0;
    font-size: 14px;
    font-weight: bold;
    .noData-img{

    }
    .noData-text{
      margin-top: 30px;
    }
    .noData-routerLink{
      display: inline-block;
      width: 200px;
      height: 30px;
      line-height: 30px;

      color: #fff;
      background-color: #152c2b;
      margin-top: 30px;
    }

  }
</style>
