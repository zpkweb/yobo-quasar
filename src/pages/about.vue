<template>
  <!-- 关于我们 -->
  <q-page>
    <Banner class="about-module1">
      <template v-slot:bgImg>
        <q-img class="banner-bg-img" src="~assets/images/banner-about.png" />
      </template>
      <h3 class="banner-title title text-bold">从心出发 奔赴热爱</h3>
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
          <div class="col-4">
            <q-img src="~assets/images/about-team-11.png" width="132px" />
            <p class="q-mt-md">
              Oscar-Claude Monet
              <br/>
              联合创始人
            </p>
            <p class="q-mt-lg q-pl-xl q-pr-xl">
              "要忘掉你眼前是哪一种物体，想到的只是一小方蓝色、一小块长方形的粉红色、一丝黄色。不是集中于要表现的景物上，而是放到了景物周围的空间环境、光线、气流所产生的效果上，或只是局限于表达在一定条件下，景物着光给画家留下的瞬间印象上。"
            </p>
          </div>
          <div class="col-4">
            <q-img src="~assets/images/about-team-22.png" width="132px" />
            <p class="q-mt-md">
              Frida Kahlo
              <br/>
              联合创始人
            </p>
            <p class="q-mt-lg q-pl-xl q-pr-xl">
              "弥漫在作品全篇中的死亡意象根源上来源于墨西哥人从古代印第安人哲学中继承的对死亡独特的价值观念。墨西哥人对死亡是嬉笑相对的，他们认为死亡是生命的回照，更是生命的补充。”
            </p>
          </div>
          <div class="col-4">
            <q-img src="~assets/images/about-team-33.png" width="132px" />
            <p class="q-mt-md">
              Vincent Willem van Gogh
              <br/>
              联合创始人
            </p>
            <p class="q-mt-lg q-pl-xl q-pr-xl">
              "梵高的作品中充满天然的悲悯情怀和苦难意识。例如在梵高艺术生涯的初期，绘画最多的题材是矿区阴惨的场景和劳作的矿工。在埃顿时期，落日的翻滚、日里的农夫和农妇更多出现在他作品中。"
            </p>
          </div>
        </div>

     </Banner>


    <!-- <Banner class="about-module5">
        <h3 class="banner-title title text-bold">媒体报告</h3>
        <q-img class="banner-desc q-mt-lg content-width" src="~assets/images/about-ad.png" />
     </Banner> -->

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
    async aboutSubmit() {
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!verify.test(this.aboutEmail)) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "请输入正确的邮箱！",
          color: "negative",
        });
      }else{
        if(!this.$store.state.user.info) {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "请登录！",
            color: "negative",
          });
        }
        // 订阅
        const subscriber = await this.$store.dispatch("home/subscriber", {
          email: this.aboutEmail,
          userId: this.$store.state.user.info.userId
        })
        if(subscriber.success) {
          this.aboutEmail = "";
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "订阅成功",
            color: "positive",
          });
        }else{
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: subscriber.message,
            color: "negative",
          });
        }


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
