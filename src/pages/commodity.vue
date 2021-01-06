<template>
  <q-layout>
    <div class="row container">
      <div class="col-8">
        <div class="carousel relative-position">
          <div class="button absolute">
            <div class="share">
              <div class="image"></div>
            </div>
            <div class="heart">
              <div class="image image2"></div>
            </div>
          </div>
          <div class="q-pa-md carousel1">
            <q-carousel
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
              arrows
              control-type="unelevated"
            >
              <q-carousel-slide
                :name="1"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-carousel-slide
                :name="2"
                img-src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="3"
                img-src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <q-carousel-slide
                :name="4"
                img-src="https://cdn.quasar.dev/img/quasar.jpg"
              />
              <q-carousel-slide
                :name="5"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-carousel-slide
                :name="6"
                img-src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="7"
                img-src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <q-carousel-slide
                :name="8"
                img-src="https://cdn.quasar.dev/img/quasar.jpg"
              />
              <q-carousel-slide
                :name="9"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              />
            </q-carousel>
          </div>
        </div>
        <div class="top"></div>
        <div class="container2">
          <div class="title">作品简介</div>
          <div class="row">
            <div class="col-6">
              <q-img src="img/image1.png" width="350px"></q-img>
            </div>
            <div class="col-6 left2">
              <div class="name">Aqua small resin gloss edition</div>
              <div class="year">2019</div>
              <div class="painter">Karin Vermeer 荷兰</div>
              <div class="row">
                <div class="col-6 item">
                  <div class="title2">手法</div>
                  <div class="content">
                    丙烯酸, 拼贴, 树脂 油墨, 颜料 • 帆布
                  </div>
                </div>
                <div class="col-6 item">
                  <div class="title2">其他细节</div>
                  <div class="contant">可直接挂上墙 可加费添加外框</div>
                </div>
                <div class="col-6 item">
                  <div class="title2">尺寸</div>
                  <div class="contant">40cmX40cm</div>
                </div>
                <div class="col-6 item">
                  <div class="title2">邮费</div>
                  <div class="contant">免费专业物流三到四周左右到</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container2">
          <div class="title">作者简介</div>
          <div class="row">
            <div class="col-4">
              <q-img src="img/painter.png" width="210px"></q-img>
            </div>
            <div class="col-8">
              <div class="row painter">
                <div class="col">浅绿色树脂光泽板</div>
                <div class="col-grow">进入Karin Vermeer的主页</div>
              </div>
              <div class="content2">
                我的工作是将不同的图片和颜料混合在一起，在计算机和画布上创建一个新的图像。
              </div>
              <div class="content2">
                我最喜欢的主题是女性脸,我用人和旧墙的照片，垃圾海报和其他各种有趣的主题来重新创造一个新的形象。当数码部分准备好后，我打印图像并开始在上面画画。我创造了厚厚的结构和许多层的油漆和凝胶
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 left">
        <div class="title-left">
          <div>浅绿色树脂光泽版130cmx180cm</div>
          <div>油画帆布</div>
        </div>
        <div class="prise"><span class="symbol">¥</span>7，000</div>
        <q-select
          borderless
          v-model="currency"
          :options="options"
          class="currency"
        />
        <div class="title2">相框选择材质</div>
        <div class="row text-center frames">
          <div class="col-4" v-for="i in 7" :key="i">
            <div class="frame"></div>
            <div class="color">浅木色 ¥800</div>
          </div>
          <div class="col-4">
            <div class="frame custom"></div>
            <div class="color">定制</div>
          </div>
        </div>
        <div class="title2">相框选择大小</div>
        <div class="row">
          <div class="size col-4">大</div>
          <div class="size col-4">中</div>
          <div class="size col-4">小</div>
        </div>
        <div class="row text-center items-end advantages">
          <div class="col-4">
            <q-img src="img/send.png" width="35px" class="image"></q-img>
            <div>全球免费送货</div>
          </div>
          <div class="col-4">
            <q-img src="img/change.png" width="35px" class="image"></q-img>
            <div>免费换货</div>
          </div>
          <div class="col-4">
            <q-img src="img/pay.png" width="35px" class="image"></q-img>
            <div>安全支付</div>
          </div>
        </div>
        <div>
          <div>¥7，000</div>
          <div>点击购买</div>
          <div>出价</div>
          <div>对于购买此画有任何疑问？</div>
        </div>
      </div>
    </div>
    <div class="paints">
      <div class="container text-center">
        <div class="others">Karin Vermeer的其他作品</div>
        <div class="row">
          <div class="col-3" v-for="i in 4" :key="i">
            <div class="paint">
              <div class="image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="similar-paints paints">
      <div class="container text-center">
        <div class="title">类似艺术作品</div>
        <div class="row">
          <div class="col-3" v-for="i in 4" :key="i">
            <div class="paint">
              <div class="image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="paints history">
      <div class="container text-center">
        <div class="title">您最近浏览的作品</div>
        <div class="row">
          <div class="col-3" v-for="i in 4" :key="i">
            <div class="paint">
              <div class="image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      options: ["CNY", "USD", "JPY", "EUR"],
      currency: "CNY",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  color: rgb(21, 44, 43);

  .button {
    z-index: 1000;
    left: 604px;
    top: 42px;
    .heart,
    .share {
      display: inline-block;
    }
    .image {
      width: 65px;
      height: 27px;
      background: url("/img/share.png") center center no-repeat;
      background-color: rgba(255, 255, 255, 0.7);
      margin-left: 10px;
    }
    .image2 {
      background: url("/img/heart.png") center center no-repeat;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  .carousel1 ::v-deep {
    .q-panel {
      margin: 0 auto;
    }
    .q-panel-parent {
      overflow: unset;
    }
    .q-carousel__navigation--top,
    .q-carousel__navigation--bottom {
      top: 440px;
      overflow-x: auto;
      overflow-y: unset;
      height: 50px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .q-btn-item {
      border-radius: 0%;
      background-color: rgba(0, 0, 0, 0.6) !important;
      height: 48px;
      top: 265px;
    }
    .q-carousel__thumbnail {
      border-radius: 0%;
    }
    .q-carousel__prev-arrow--horizontal {
      left: 0;
    }
    .q-carousel__next-arrow--horizontal {
      right: 0;
    }
    .q-carousel__navigation--bottom {
      left: 0;
      right: 0;
    }
  }
  .top {
    margin-top: 150px;
    height: 1px;
  }
  .container2 {
    padding: 60px 40px;
    border-top: 1px solid rgba(21, 44, 43, 0.1);
    .left2 {
      padding: 0 20px;
    }
  }
  .title {
    margin: 0 0 40px 0;
    font-size: 24px;
    font-weight: 600;
  }
  .name {
    font-size: 24px;
    margin-top: 10px;
  }
  .year,
  .painter,
  .content {
    font-size: 14px;
  }
  .painter {
    margin-bottom: 20px;
  }
  .title2 {
    font-size: 16px;
  }
  .content {
    margin-bottom: 30px;
  }
  .item {
    padding: 0 30px 0 0;
  }
  .painter {
    font-size: 18px;
  }
  .content2 {
    font-size: 14px;
    font-family: "Heiti SC";
    font-weight: 600;
  }
  .left {
    padding-left: 25px;
    .title-left {
      font-size: 24px;
      margin: 10px 0;
    }
    .currency {
      display: inline-block;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .prise {
      display: inline-block;
      margin-right: 20px;
      font-size: 38px;
      .symbol {
        font-size: 12px;
      }
    }
    .title2 {
      font-size: 20px;
    }
    .frames {
      margin-bottom: 20px;
      .frame {
        width: 100px;
        height: 36px;
        margin: 10px 0 0 0;
        background-image: url("/img/frame.png");
        background-size: cover;
        &:hover {
          outline: 2px solid rgb(173, 175, 139);
        }
      }
      .custom {
        background-image: url("/img/custom.png");
      }
      .color {
        width: 100px;
        font-size: 12px;
        font-family: "Heiti SC";
        margin-bottom: 5px;
      }
    }

    .size {
      width: 100px;
      height: 35px;
      margin: 5px;
      border: 1px solid rgba(21, 44, 43, 0.1);
      line-height: 35px;
      text-align: center;
      margin-bottom: 40px;
      &:hover {
        border: 1px solid rgba(21, 44, 43, 0.6);
      }
    }
    .advantages {
      font-size: 12px;
    }
    .image {
      margin-bottom: 10px;
    }
  }
}
.paints {
  background-color: #232323;
  padding: 60px 0;
  .others {
    font-size: 34px;
    color: rgb(173, 175, 139);
    font-weight: normal;
  }
}
.similar-paints {
  background-color: #ffffff;
  .title {
    font-size: 34px;
    font-weight: normal;
  }
}
.paint {
  box-sizing: content-box;
  width: 208px;
  height: 208px;
  background-color: #152c2b;
  padding: 6px;
  border: 2px solid #adaf8b;
  margin: 0 auto;
  .image {
    width: 208px;
    height: 208px;
    background: url("/img/paint1.png") center center no-repeat;
  }
}
.history{
  background-color: #152c2b;
  .title{
     font-size: 34px;
    color: rgb(173, 175, 139);
    font-weight: normal;
  }
}
</style>




.Karin_Vermeer的其他作品 {
  font-size: 34px;
  font-family: "STFangsong";
  color: rgb(173, 175, 139);
  line-height: 1.2;
  text-align: center;
  -moz-transform: matrix( 1,0,0,1.00090695374523,0,0);
  -webkit-transform: matrix( 1,0,0,1.00090695374523,0,0);
  -ms-transform: matrix( 1,0,0,1.00090695374523,0,0);
  position: absolute;
  left: 765.285px;
  top: 1879.587px;
  z-index: 81;
}
