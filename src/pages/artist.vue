<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artworks/banner.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="text-bold">画家｜荷兰</div>
        <div class="title">Karin Vermeer</div>
        <div class="number">
          <span>知名艺术家</span>
          <span>国际风险敞口</span>
          <span>艺博会参与者</span>
        </div>
      </div>
    </div>
    <div class="title2-container">
      <div class="title2">
        <div class="active">个人信息</div>
        <div>所有作品</div>
        <div>最新售出艺术品</div>
        <div>工作室</div>
        <div>履历表</div>
      </div>
    </div>
    <div class="desc row">
      <div class="col-4">
        <q-img src="img/artist/zp.png" width="340px"></q-img>
      </div>
      <div class="col-8 text-right resume">
        <div class="resume1">ARTIST</div>
        <div class="resume2">
          我结合了数字和有形，所以我将两个世界结合在一起.
        </div>
        <div class="resume3">
          Karin Vermeer是一位独立艺术家，自2002年以来一直在鹿特丹生活和工作<br />
          她的作品是通过将照片和绘画进行数字组合和编辑为新的原创艺术作品而创作的<br />威猛(Vermeer)擅长于通过覆盖和融合四到五个不同种族和血统的不同面孔来创建新的不存在的人物而创建的肖像<br />打印数字图像并添加涂料以获得最终的结果，尝试使数字图像再次变得有形
        </div>
        <div class="resume4">
          <q-img src="img/artist/weibo.png" width="32px" class="image"></q-img>
          <q-img src="img/artist/wechat.png" width="32px" class="image"></q-img>
          <q-img src="img/artist/qq.png" width="32px" class="image"></q-img>
          <q-img src="img/artist/txwb.png" width="32px" class="image"></q-img>
          <q-img src="img/artist/mail.png" width="32px" class="image"></q-img>
          <div class="btn text-white">+关注艺术家</div>
        </div>
      </div>
    </div>
    <div class="artworks-container">
      <div class="artworks">
        <div v-for="tag in tags" :key="tag">
          <div class="row title">
            <div class="tag col-6">{{ tag }}</div>
            <div class="more col-6 text-right">更多</div>
          </div>
          <div class="artwork row">
            <div class="col-3 text-center" v-for="i of 4" :key="i">
              <!-- <div class="image"></div> -->
              <div class="image">
                <q-img src="img/artist/artwork.png" width="180px"></q-img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sold">
      <div class="title text-center">最新出售的艺术品</div>
      <div class="row">
        <div class="col-3 text-center" v-for="i of 4" :key="i">
          <div class="bg">
            <q-img src="img/artist/new.png" width="180px" class="image"></q-img>
          </div>
        </div>
      </div>
    </div>
    <div class="video"></div>
    <div class="credentials">
      <div class="title text-center">我的履历</div>
      <div class="title2 text-right">
        <div>奖项</div>
        <div>个展</div>
        <div>组展</div>
        <div>发表</div>
      </div>
      <div class="content row">
        <div class="col-6 item">
          <div v-for="i of 8" :key="i">
            <div class="year">2019</div>
            <div class="name">
              Prix de photographie (Salon d’Automne)- 获奖者- 法国
            </div>
          </div>
        </div>
        <div class="col-6 item">
          <div v-for="i of 8" :key="i">
            <div class="year">2019</div>
            <div class="name">
              Prix de photographie (Salon d’Automne)- 获奖者- 法国
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
      tags: ["杂志封面", "原始结构的波帕特肖像画", "波帕特肖像画"],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  color: #d6d7c5;
  .text {
    padding-top: 80px;
    .title {
      font-size: 38px;
      padding-bottom: 10px;
    }
    .number {
      font-size: 18px;
      span {
        padding: 15px;
      }
    }
  }
}
.title2-container {
  border-bottom: 1px solid rgba(21, 44, 43, 0.2);
  .title2 {
    width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
    div {
      display: inline-block;
      padding: 10px 24px;
      color: rgb(173, 175, 139);
      letter-spacing: 1px;
    }
    .active {
      background-color: #d6d7c5;
      color: #333;
    }
  }
}
.desc {
  padding: 60px 40px;
  width: 1100px;
  margin: 0 auto;
  .resume {
    color: #333;
    .resume1 {
      letter-spacing: 18px;
      margin-bottom: 10px;
    }
    .resume2 {
      font-size: 20px;
      letter-spacing: 3px;
      margin-bottom: 50px;
    }
    .resume3 {
      line-height: 30px;
      margin-bottom: 30px;
      font-size: 12px;
    }
    .resume4 {
      .image {
        margin: 0 6px;
      }
      .btn {
        display: inline-block;
        background-color: #152c2b;
        padding: 8px 20px;
        letter-spacing: 2px;
        margin-left: 10px;
      }
    }
  }
}
.artworks-container {
  background-color: #232323;
  color: rgb(173, 175, 139);
  font-size: 24px;
  padding: 0 0 60px 0;
  .artworks {
    width: 1100px;
    margin: 0 auto;
    .title {
      padding: 30px 40px;
      .tag {
        display: inline-block;
      }
      .more {
        font-size: 16px;
        display: inline-block;
        margin-top: 10px;
      }
    }
    .image {
      width: 194px;
      background-color: #152c2b;
      padding: 6px;
      border: 1px solid #3f3f38;
    }
  }
}
.sold {
  padding: 60px 0 80px 0;
  width: 1100px;
  margin: 0 auto;
  .title {
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
  .image {
    margin-top: 9px;
  }
}
.video {
  background-color: #d6d7c5;
  height: 400px;
}
.credentials {
  width: 1100px;
  margin: 0 auto;
  padding: 40px 0 60px 0;
  .title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .title2 {
    padding: 0 0 10px 0;
    div {
      display: inline-block;
      color: rgb(173, 175, 139);
      padding: 0 8px;
    }
  }
  .content {
    background-color: #d6d7c5;
    padding: 50px 0;
    .item {
      padding: 0 80px;
    }
    .item > div {
      margin: 10px 0;
    }
  }
}
</style>







