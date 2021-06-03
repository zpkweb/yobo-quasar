<template>
  <div class="show-commoditys" v-if="commoditys && commoditys.length">
    <div class="show-commoditys-main">
      <div class="commodity">
        <ShowCommodityItem :data="commoditys[active]"  />
      </div>
    </div>

    <div class="show-commoditys-footer">
      <div class="commodity-slide commodity-slide-left" >
        <a href="javascript:;" class="commodity-slide-btn" @click="commoditySlideLeft"><</a>
      </div>
      <div class="commodity-thumbnail">
        <div class="commodity-thumbnail-box" :style="{width: `${thumbnailBoxWidth}px`, marginLeft: `-${thumbnailMarginLeft}px`}" >
          <div class="commodity-thumbnail-item"  v-for="(item, index) of commoditys" :key="index" @click="active = index">
            <ShowCommodityItem :data="item" type="thumbnail" :active="index == active" />
          </div>
        </div>

      </div>

      <div class="commodity-slide commodity-slide-right">
        <a href="javascript:;" class="commodity-slide-btn" @click="commoditySlideRight">></a>
      </div>
    </div>


  </div>
</template>
<script>
import ShowCommodityItem from "./showCommodityItem";

export default{
  props: ['commoditys'],
  components: {
    ShowCommodityItem
  },
  data() {
    return {
      active: 0,
      thumbnailWidth: 680,
      thumbnailItemWidth: 60,
      thumbnailMarginLeft: 0
    }
  },
  computed: {
    thumbnailBoxWidth() {
      return this.commoditys.length*this.thumbnailItemWidth;
    }
  },
  methods: {
    commoditySlideLeft() {
      if(this.active){
        this.active--;
        // this.thumbnailChange();
      }
    },
    commoditySlideRight() {
      if(this.active < (this.commoditys.length-1)){
        this.active++;
        // this.thumbnailChange();
      }
    },
    thumbnailChange() {
      if(this.thumbnailBoxWidth > this.thumbnailWidth) {
        const itemMarginLeft = this.active*this.thumbnailItemWidth;
        if(itemMarginLeft > (this.thumbnailWidth/2) ){
          this.thumbnailMarginLeft = itemMarginLeft-(this.thumbnailWidth/2);
        }else{
          this.thumbnailMarginLeft = 0;
        }
        if( (itemMarginLeft + (this.thumbnailWidth/2)) > this.thumbnailBoxWidth ){
          this.thumbnailMarginLeft = (this.thumbnailBoxWidth - this.thumbnailWidth);

        }
      }




    }
  },
}
</script>
<style scoped lang="scss">
  .show-commoditys{
    overflow: hidden;
    padding: 20px;
    .show-commoditys-main{
      .commodity{
        width: 768px;
        height: 400px;
        text-align: center;
      }
    }
    .show-commoditys-footer{
      display: flex;
      margin-top: 20px;
      .commodity-slide{
        width: 60px;
        height: 50px;
        opacity: 0;
        transition: opacity 0.3s;
        .commodity-slide-btn{
          display: inline-block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          font-size: 18px;
          background-color: rgba(0, 0, 0, .6);
        }
      }
      .commodity-slide-left{
        float: left;
      }
      .commodity-slide-right{
        float: right;
        text-align: right;
      }
      .commodity-thumbnail{
        flex: 1;
        overflow-y: auto;
        .commodity-thumbnail-box{
          overflow: hidden;
          display: flex;
          .commodity-thumbnail-item{
            flex: 1;
          }

        }

      }


    }

  }
  .show-commoditys:hover{
      .commodity-slide{
        opacity: 1;
      }
    }

</style>
