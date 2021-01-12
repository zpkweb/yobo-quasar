<template>
  <div class="like">
    <!-- <div class="row item" v-for="i in 3" :key="'like1-'+i">
        <div class="col-3 image"></div>
        <div class="col-4 desc">
          <div class="title">Katy Tackes</div>
          <div>已上传2000副作品</div>
          <div>法国</div>
        </div>

        <div class="col-5 row items-center justify-end">
          <div class="btn follow follow2 text-white text-center">
            +关注艺术家
          </div>
        </div>
      </div>
      <div class="row item" v-for="i in 3" :key="'like2-'+i">
        <div class="col-3 image2"></div>
        <div class="col-4 desc">
          <div class="title">MYSTIC LIGHT OF THE</div>
          <div>已上传10幅作品</div>
          <div>日本</div>
        </div>

        <div class="col-5 row items-center justify-end">
          <div class="btn follow text-white text-center">已关注</div>
        </div>
      </div> -->
    <template v-if="myLike && myLike.length">
      <div
      class="row item"

      v-for="(item, index) in myLike"
      :key="'like1-' + index"
    >
      <div class="col-3 image"></div>
      <div class="col-4 desc">
        <div class="title">Katy Tackes</div>
        <div>已上传2000副作品</div>
        <div>法国</div>
      </div>

      <div class="col-5 row items-center justify-end">
        <div class="btn follow follow2 text-white text-center">+关注艺术家</div>
      </div>
    </div>
    </template>

    <div v-else>
      暂无数据
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const { lang } = this.$route.params;
    const { userId } = this.$store.state.user.info;
    const myLike = await this.$store.dispatch("user/getMyLike", {
      userId,
      lang,
    });
    if (myLike.success) {
      this.$store.commit("user/setMyLike", myLike.data);
    }
  },

  computed: {
    myLike() {
      return this.$store.state.user.like;
    },
  },
};
</script>

<style lang="scss" scoped>
.like {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 100px;
  .item {
    border-top: 1px solid rgba(21, 44, 43, 0.1);
    padding: 20px 0;
    .image {
      background: url("/img/mine/like1.png") center center no-repeat;
      background-size: contain;
    }
    .image2 {
      background: url("/img/mine/like2.png") center center no-repeat;
      background-size: contain;
    }
    .follow {
      background-color: #152c2b;
      padding: 5px 0;
      font-size: 18px;
      font-weight: bolder;
      width: 160px;
    }
    .follow2 {
      background-color: #adaf8b;
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
</style>
