<template>
  <!-- 关于我们 -->
  <q-page>
    <Banner class="about-module1">
      <template v-slot:bgImg>
        <q-img class="banner-bg-img" src="~assets/images/banner-about.png" />
      </template>
      <h3 class="banner-title title text-bold">艺术的归宿是欣赏与分享</h3>
      <p class="banner-desc q-mt-md">关于我们</p>
     </Banner>

     <Banner class="about-module2">
        <h3 class="banner-title title text-bold">关于我们</h3>
        <div class="banner-desc text-center q-mt-lg">
          <p class="text-center no-margin">在永宝，我们确信数字化是为艺术市场带来透明和公平的不二法宝。</p>
          <p class="text-center no-margin">我们为艺术家们提供让他们自主售卖作品的平台。我们的团队每天都在竭诚工作，致力于将永宝的艺术家们推广到世界的每个角落。</p>
          <p class="text-center no-margin">在展示来自世界各地的艺术家的同时，我们也希望能够提供给艺术爱好者和收藏家们一个探索新的艺术境界，拥抱新文化，并感受艺术带来的感动的空间。</p>
        </div>

     </Banner>

     <Banner class="about-module3">
        <h3 class="banner-title title text-bold">我们的核心价值</h3>
        <div class="banner-desc content-width text-center q-mt-xl row">
          <div class="col-4">
            <q-img src="~assets/images/guojihua.png" width="50px" />
            <p class="q-mt-lg">国际化</p>
          </div>
          <div class="col-4">
            <q-img src="~assets/images/gaopinzhi.png" width="50px" />
            <p class="q-mt-lg">高品质</p>
          </div>
          <div class="col-4">
            <q-img src="~assets/images/duoyangxing.png" width="50px" />
            <p class="q-mt-lg">多样性</p>
          </div>
        </div>

     </Banner>

     <Banner class="about-module4">
        <h3 class="banner-title title text-bold">我们的团队</h3>
        <div class="banner-desc content-width text-center q-mt-lg row">
          <div class="col-3 offset-1">
            <q-img src="~assets/images/about-team-1.png" width="200px" />
            <p class="q-mt-md">
              Vera Kempf
              <br/>
              联合创始人
            </p>
            <p class="q-mt-lg">
              "Robert Capa的一张摄影完全改变了我的人生。那是我从未体验过的精神力量。我希望把这种感动带给其他人，也希望他们能由心爱的艺术品陪伴着度过每一天。"
            </p>
          </div>
          <div class="col-3 offset-1">
            <q-img src="~assets/images/about-team-2.png" width="200px" />
            <p class="q-mt-md">
              Brice Lecompte
              <br/>
              联合创始人
            </p>
            <p class="q-mt-lg">
              "数字科技是推进机遇平等的好帮手。将我的IT技能运用于推广艺术家们到全世界去，我觉得意义非凡。”
            </p>
          </div>
          <div class="col-3 offset-1">
            <q-img src="~assets/images/about-team-3.png" width="200px" />
            <p class="q-mt-md">
              Denis Fayolle
              <br/>
              联合创始人
            </p>
            <p class="q-mt-lg">
              "疾驰, 变化, 碰壁, 缓冲, 继续尝试，周而复始。艺术家如此，企业家亦如此。"
            </p>
          </div>
        </div>

     </Banner>


    <Banner class="about-module5">
        <h3 class="banner-title title text-bold">媒体报告</h3>
        <q-img class="banner-desc q-mt-lg content-width" src="~assets/images/about-ad.png" />
     </Banner>

     <Banner class="about-module6">
      <template v-slot:bgImg>
        <q-img class="banner-bg-img" src="~assets/images/banner-about-footer.png" />
      </template>
        <div class="banner-desc content-width row">
          <div class="col-2 offset-2">
            <div class="banner-title">
              免费订阅永宝周刊
            </div>
          </div>
          <div class="col-4 offset-1">
            <div class="about-email">
              <input v-model="aboutEmail" class="about-input" type="text" placeholder="邮箱地址" />
            </div>
          </div>
          <div class="col-2">
            <div class="about-submit text-center cursor-pointer" @click="aboutSubmit">
              确认
            </div>
          </div>
        </div>
     </Banner>

  </q-page>
</template>
<script>
import Banner from "src/components/banner";

export default {
  components: {
    Banner
  },
  data() {
    return {
      aboutEmail: ""
    }
  },
  methods: {
    aboutSubmit() {
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!verify.test(this.aboutEmail)) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "请输入正确的邮箱！",
          color: "negative",
        });
      }else{
        this.aboutEmail = "";
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "订阅成功",
          color: "positive",
        });
      }


    }
  },
}
</script>
<style scoped lang="scss">
.about-module1{
  .banner-title{
    font-size: 36px;
    color: #d6d7c5;
  }
  .banner-desc{
    font-size: 16px;
    color: #d6d7c5;
  }
}
.about-module2{
  height: 300px;
  background-color: #f9f9f9;
  .banner-title{
    font-size: 24px;
    color: #000;
  }
  .banner-desc{
    font-size: 14px;
    color: #000;
  }
}
.about-module3{
  height: 350px;
  background-color: #232323;
  .banner-title{
    font-size: 24px;
    color: #d6d7c5;
  }
  .banner-desc{
    font-size: 16px;
    color: #d6d7c5;
  }
}

.about-module4{
  height: 450px;
  background-color: #f9f9f9;
  .banner-title{
    font-size: 24px;
    color: #000;
  }
  .banner-desc{
    font-size: 14px;
    color: #000;
  }
}

.about-module5 {
  height: 600px;
  background-color: #f9f9f9;
  .banner-title{
    font-size: 24px;
    color: #000;
  }
  .banner-desc{
    margin-bottom: 150px;
  }
}

.about-module6 {
  height: 250px;

  .banner-title{
    font-size: 24px;
    color: #d6d7c5;
    line-height: 47px;
  }
  .banner-desc{

  }
  .about-email{
    padding: 10px 20px;
    background-color: #fff;
    .about-input{
      width: 100%;
      outline: none;
      border: 0;
      font-size: 18px;
    }
  }

  .about-submit{
    width: 160px;
    font-size: 24px;
    height: 47px;
    line-height: 47px;
    color: #152c2b;
    background-color: #d6d7c5;

  }
}

</style>
