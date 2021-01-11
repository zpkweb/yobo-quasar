<template>
  <div>
    <div class="title2 text-right">
      <div class="edit">编辑</div>
      <div><span>删除</span>｜<span>取消</span></div>
    </div>
    <div class="wishlist">
      <div class="row item" v-for="i in 6" :key="'style1-'+i">
        <div class="col-3 image"></div>
        <div class="col-4 desc">
          <div class="title">LOVE IS ON THE RISE</div>
          <div class="name">Katy Tackes</div>
          <div class="size">15x11 in - 2019</div>
        </div>
        <div class="col-3 prise">
          <div>价格</div>
          <div class="num">304，000</div>
        </div>
        <div class="col-2 row items-center">
          <div class="btn buy text-white text-center">购买</div>
        </div>
      </div>
      <div class="row item" v-for="i in 6" :key="'style2-'+i">
        <div class="col-3 image2"></div>
        <div class="col-4 desc">
          <div class="title">LOVE IS ON THE RISE</div>
          <div>Katy Tackes</div>
          <div>15x11 in - 2019</div>
        </div>
        <div class="col-3 prise">
          <div>价格</div>
          <div class="num">304，000</div>
        </div>
        <div class="col-2 row items-center">
          <div class="btn buy text-white text-center">购买</div>
        </div>
      </div>
    </div>
    <div class="history-container">
      <div class="history relative-position">
        <div class="text-center title">您最近浏览的艺术品</div>
        <div class="text-right more absolute">更多</div>
        <div class="row">
          <div class="item text-center col-3" v-for="i in 4" :key="'style3-'+i">
            <div class="image">
              <q-img src="img/mine/history1.png" height="200px" contain></q-img>
            </div>
            <div class="text-left">丙烯酸 • 亚麻</div>
            <div class="text-left">100x100cm</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>


.title2 {
  padding: 20px 0;
  width: 1200px;
  margin: 0 auto;
  div {
    display: inline-block;
  }
  .edit {
    padding: 0 60px;
  }
}
.wishlist {
  width: 1200px;
  margin: 0 auto;
  padding: 0 100px;
  .item {
    border-top: 1px solid rgba(21, 44, 43, 0.1);
    padding: 20px 0;
    .image {
      background: url("/img/mine/artwork.png") center center no-repeat;
      background-size: contain;
    }
    .image2 {
      background: url("/img/mine/artwork2.png") center center no-repeat;
      background-size: contain;
    }
    .buy {
      background-color: #152c2b;
      padding: 5px 0;
      font-size: 18px;
      font-weight: bolder;
      width: 160px;
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
.history-container{
  background-color: #152c2b;
}
.history {
  padding:60px 0;
  width: 1100px;
  margin: 0 auto;
  color: rgb(173, 175, 139);
  .title{
    font-size: 28px;
    margin-bottom: 40px;
  }
  .more{
    left: 1030px;
    top: 70px;
  }
  .image {
    width: 212px;
    padding:6px;
    border: 1.5px solid rgb(173, 175, 139);
    margin-bottom: 10px;
  }
}
</style>


