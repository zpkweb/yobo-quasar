<template>
  <!-- 我们的甄选标准 -->
  <q-page>
    <Banner class="criteria-module1">
      <template v-slot:bgImg>
        <q-img class="banner-bg-img" src="~assets/images/banner-criteria.png" />
      </template>
      <h3 class="banner-title title text-bold">为什么相信YOBO和它挑选的艺术家？</h3>
      <p class="banner-desc q-mt-md">选品程序</p>
     </Banner>
    <Banner class="criteria-module2">
      <div class="row content-width">
        <div class="col-7">
          <h3 class="banner-title title text-bold">YOBO连接世界各地艺术家和收藏家的桥梁</h3>
          <p class="banner-desc q-mt-md">艺术无国界，但身处中国，想要发现巴西或加拿大的优秀艺术家并不总是那么容易...更别说还有物流，海外支付这些棘手因素了。YOBO的存在便是为了帮您解决这个困扰。<br/>我们向您呈现来自五十多个国家的作品！无论来自知名艺术家抑或新兴艺术家，所有的作品都由我们精心挑选</p>
        </div>
        <div class="col-4 offset-1">
          <q-img src="~assets/images/criteria-module1.png" />
        </div>
      </div>
     </Banner>
    <Banner class="criteria-module3">
      <div class="row content-width">
        <div class="col-4 ">
          <q-img src="~assets/images/criteria-module2.png" />
        </div>
        <div class="col-7 offset-1">
          <h3 class="banner-title  title text-bold">艺术家长期信赖稳定的合作团队</h3>
          <p class="banner-desc q-mt-md">YOBO团队：每位艺术家都有一位负责人。及时回复客户所有专业问题，对于客户有进一步需求的产品，我们均可以随时放大提供，退换无忧<br/>价格最低不是YOBO追求的目标，提供高性价比的产品及满意的服务才是对客户真诚的回报。我们会比同行少赚一点，让客户让满意多一点！帮助客户降低时间成本，提供最大支持！</p>
        </div>
      </div>
     </Banner>
     <Banner class="criteria-module4">
        <h3 class="banner-title title text-bold">我们的优势</h3>
        <div class="banner-desc content-width text-center q-mt-xl row">
          <div class="col-3">
            <q-img src="~assets/images/artist.png" width="50px" />
            <p class="q-mt-lg self-end"><span class="criteria-module4-subTitle">精选艺术家</span><br><span class="criteria-module4-subDesc">来自五湖四海的艺术家</span></p>
          </div>
          <div class="col-3">
            <q-img src="~assets/images/ship.png" width="50px" />
            <p class="q-mt-lg self-end"><span class="criteria-module4-subTitle">全球免费邮送</span><br><span class="criteria-module4-subDesc">专业物流三至四周到货</span></p>
          </div>
          <div class="col-3">
            <q-img src="~assets/images/freereturn.png" width="60px" />
            <p class="q-mt-lg"><span class="criteria-module4-subTitle">免费返品</span><br><span class="criteria-module4-subDesc">收到作品14天内免费返品</span></p>
          </div>
          <div class="col-3">
            <q-img src="~assets/images/pay.png" width="50px" />
            <p class="q-mt-lg self-end"><span class="criteria-module4-subTitle">安全支付方式</span><br><span class="criteria-module4-subDesc">支付宝或微信转账</span></p>
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
}
</script>
<style scoped lang="scss">
.criteria-module1{
  .banner-title{
    font-size: 36px;
    color: #d6d7c5;
  }
  .banner-desc{
    font-size: 16px;
    color: #d6d7c5;
  }
}
.criteria-module2{
  height: 350px;
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
.criteria-module3{
  height: 350px;
  background-color: #232323;
  .banner-title{
    font-size: 24px;
    color: #d6d7c5;
  }
  .banner-desc{
    font-size: 14px;
    color: #d6d7c5;
  }
}
.criteria-module4{
  height: 350px;
  background-color: #f9f9f9;
  .banner-title{
    font-size: 24px;
    color: #333;
  }
  .banner-desc{
    font-size: 16px;
    color: #333;
  }
  .criteria-module4-subTitle{
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
  .criteria-module4-subDesc{
    font-size: 12px;
    color: #333;
  }
}


</style>
