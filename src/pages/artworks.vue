<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artworks/banner.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">油画</div>
        <div class="number">7,442件符合您搜索条件的艺术品</div>
      </div>
    </div>
    <div class="container">
      <div class="tags">
        <div class="tag">
          <div class="text-dark">形状</div>
          <div>不限</div>
          <div>横版</div>
          <div>竖版</div>
          <div>方形</div>
          <div>自定义</div>
        </div>
        <div class="tag">
          <div class="text-dark">价格</div>
          <div>不限</div>
          <div>低于6000</div>
          <div>6000-20000</div>
          <div>20000-40000</div>
          <div>高于40000</div>
          <div>自定义</div>
          <div>
            <input type="text" class="input" v-model="lowPrise" />-<input
              type="text"
              class="input"
              v-model="highPrise"
            />
          </div>
          <div class="text-dark btn" @click="myPrise">确定</div>
        </div>
        <div class="tag">
          <div class="text-dark">颜色</div>
          <div>
            <div
              class="color"
              :style="{ backgroundColor: color }"
              v-for="color in colors"
              :key="color"
            ></div>
          </div>
        </div>
        <div class="tag">
          <div class="text-dark">主题</div>
          <div
            v-for="theme in themes"
            :key="theme"
            @click="addTag(theme)"
            class="btn"
          >
            {{ theme }}
          </div>
        </div>
      </div>
      <q-expansion-item
        dense
        :label="text"
        class="text-center title2 relative-position"
        @show="show"
        @hide="hide"
      >
        <div class="text-left selected relative-position">
          <div>您已选择：</div>
          <div class="tag" v-for="tag in tags" :key="tag">
            <span>{{ tag }}</span>
            <span @click="deleteTag(tag)" class="btn">×</span>
          </div>
          <div class="clear absolute-right btn" @click="deleteAllTags">
            清空所有
          </div>
        </div>
      </q-expansion-item>
      <div class="sort-by text-right">
        <div class="btn">价格</div>
        <div class="btn">最热</div>
        <div class="btn">最新上传</div>
      </div>
      <!-- <div class="text-center none">
        <q-img
          src="img/artists/exclamatory.png"
          width="60px"
          class="img"
        ></q-img>
        <div>暂无数据，请您重新搜索，我们会尽快完善！</div>
      </div> -->
      <div class="artworks">
        <vue-waterfall-easy
          :imgsArr="imgsArr"
          @scrollReachBottom="getData"
          maxCols="4"
        ></vue-waterfall-easy>
      </div>
    </div>
  </q-layout>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "app",
  data() {
    return {
      imgsArr: [
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/3.png", href: "#" },
        { src: "/img/artworks/5.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/2.png", href: "#" },
        { src: "/img/artworks/4.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/3.png", href: "#" },
        { src: "/img/artworks/5.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/2.png", href: "#" },
        { src: "/img/artworks/4.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/3.png", href: "#" },
        { src: "/img/artworks/5.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/2.png", href: "#" },
        { src: "/img/artworks/4.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/3.png", href: "#" },
        { src: "/img/artworks/5.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/2.png", href: "#" },
        { src: "/img/artworks/4.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/3.png", href: "#" },
        { src: "/img/artworks/5.png", href: "#" },
        { src: "/img/artworks/1.png", href: "#" },
        { src: "/img/artworks/2.png", href: "#" },
        { src: "/img/artworks/4.png", href: "#" },
      ],

      tags: ["新闻摄影", "概念艺术"],
      colors: [
        "pink",
        "yellow",
        "green",
        "orange",
        "blue",
        "purple",
        "#abcffc",
        "red",
        "gray",
      ],
      themes: [
        "不限",
        "风景画",
        "动物",
        "城市",
        "抽象",
        "新闻摄影",
        "旅游",
        "概念艺术",
      ],
      current: 1,
      text: "展开选项",
      maxPage: 10,
      newPage: "",
      lowPrise: "",
      highPrise: "",
    };
  },
  components: {
    vueWaterfallEasy,
  },
  methods: {
    addTag(theme) {
      if (this.tags.find((e) => e === theme) === undefined) {
        this.tags.push(theme);
      }
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    deleteAllTags() {
      this.tags = [];
    },
    show() {
      this.text = "收起选项";
    },
    hide() {
      this.text = "展开选项";
    },
    nextPage() {
      this.current < this.maxPage ? (this.current += 1) : this.current;
    },
    toNewPage() {
      parseInt(this.newPage) > 0 && parseInt(this.newPage) <= this.maxPage
        ? (this.current = parseInt(this.newPage))
        : this.current;
    },
    myPrise() {
      console.log(typeof this.lowPrise);
      if (this.lowPrise <= this.highPrise) {
        this.tags.push(`${this.lowPrise}-${this.highPrise}`);
      }
    },
    getData() {
      this.imgsArr.push([
        { src: "./m/1.png", href: "#" },
        { src: "./m/1.png", href: "#" },
        { src: "./m/1.png", href: "#" },
        { src: "./m/1.png", href: "#" },
        { src: "./m/1.png", href: "#" },
        { src: "./m/2.png", href: "#" },
      ]);
      this.group++;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
.banner {
  width: 100%;
  color: #d6d7c5;
  .text {
    padding-top: 80px;
    .title {
      font-size: 38px;
      letter-spacing: 8px;
      padding-bottom: 10px;
    }
    .number {
      font-size: 18px;
      letter-spacing: 5px;
    }
  }
}
.container {
  width: 1000px;
  margin: 0 auto;
  .tags {
    font-size: 16px;
    color: #a1a190;
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 60px 0 60px 0;
    border-bottom: 1px solid rgba(#a1a190, 0.2);
    .tag {
      div {
        display: inline-block;
        margin: 5px 15px;
        &:hover {
          color: #152c2b;
        }
      }
    }
    .input {
      width: 80px;
      outline: 0;
      border: 1px solid #a1a190;
    }
    .tag .color {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      vertical-align: middle;
      margin-left: 0;
      &:hover {
        border: 3px solid #152c2b;
      }
    }
  }
  .sort-by {
    padding: 10px 10px 20px 0;
    border-bottom: 1px solid rgba(#a1a190, 0.2);
    div {
      display: inline-block;
      padding-left: 20px;
    }
  }
  .none {
    padding: 80px 0;
    font-size: 18px;
    .img {
      margin-bottom: 30px;
    }
  }
  .wrap {
    margin: 0 auto;
    width: 1000px;
    column-count: 4;
    column-gap: 10px;
    padding: 60px 0;
  }
  .item {
    margin-bottom: 10px;
    break-inside: avoid;
    padding: 4px;
    background-color: #152c2b;
    &:hover .content {
      opacity: 1;
    }
    &:hover .artist {
      opacity: 1;
    }
    &:hover .like {
      opacity: 1;
    }
    .content {
      opacity: 0;
      z-index: 1000;
      height: 60px;
      width: 100%;
      transition: all 0.5s;
      background-color: rgba(0, 0, 0, 0.6);
      line-height: 60px;
    }
    .artist,
    .like {
      opacity: 0;
      height: 0;
      transition: all 0.5s;
      padding: 0 10px 0px 10px;
    }
    .artist:hover + .artist2 {
      display: block;
    }
    .q-rating {
      color: #adaf8b;
    }
    .header {
      width: 40px;
      height: 60px;
      border-radius: 50%;
      background: url("/img/artworks/i.png") center center no-repeat;
      display: inline-block;
      vertical-align: middle;
    }
    .name {
      display: inline-block;
    }
    .artist2 {
      left: -40px;
      top: -170px;
      z-index: 100;
      padding: 15px;
      width: 340px;
      box-shadow: 2px -2px 2px rgba(21, 44, 43, 0.1);
      display: none;
      .artworks {
        padding: 10px;
      }
      .artwork {
        background: url("/img/artworks/4.png") center center no-repeat;
        background-size: contain;
        height: 80px;
      }
      .header2 {
        width: 40px;
        height: 40px;
        background: url("/img/artworks/i.png") center center no-repeat;
        background-size: contain;
      }
      .desc {
        line-height: 20px;
        padding-left: 10px;
      }
      .follow {
        font-size: 18px;
        background-color: #152c2b;
        line-height: 40px;
      }
      .after {
        cursor: pointer;
        position: absolute;
        display: inline-block;
        top: 159px;
        left: 60px;
        width: 0;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 10px;
        border-color: #fff #fff transparent transparent;
        transform: rotate(135deg);
        box-shadow: 2px -2px 2px rgba(21, 44, 43, 0.1);
      }
    }
  }
  .title2::v-deep {
    .q-focus-helper {
      width: 0;
    }
    .q-expansion-item__toggle-icon {
      position: absolute;
      right: 440px;
    }
  }

  .selected > div {
    display: inline-block;
    margin-left: 10px;
    padding: 3px 5px;
    letter-spacing: 3px;
    border-radius: 2px;
  }
  .selected {
    .tag {
      background-color: #d6d7c5;
    }
    .clear {
      text-decoration: underline;
    }
  }

  .next {
    border: 1px solid #333;
    padding: 4px 20px;
    margin: 0 6px;
  }
  .input {
    width: 80px;
    outline: 0;
    padding: 3px 0;
    margin: 0 8px;
  }
  .button {
    background-color: #e0e0e0;
    padding: 5px 25px;
    margin: 10px;
  }
  .all {
    margin: 0 10px;
  }
}
.artworks {
}
</style>



<style>
.vue-waterfall-easy-container .vue-waterfall-easy-scroll {
  overflow-x: unset !important;
  overflow-y: unset !important;
}
.vue-waterfall-easy-container .vue-waterfall-easy a.img-wraper > img {
  border: 2px solid #efefe8 !important;
  padding: 6px;
  background-color: #152c2b;
}
.img-wraper {
  width: 260px !important;
}
.vue-waterfall-easy-container
  .vue-waterfall-easy
  a.img-inner-box[data-v-ded6b974] {
  box-shadow: none !important;
}
</style>
