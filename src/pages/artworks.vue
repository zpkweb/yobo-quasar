<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artworks/banner.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">油画</div>
        <div class="number">{{artworkTotal}}件符合您搜索条件的艺术品</div>
      </div>
    </div>
    <div class="container">
      <div class="tags">
        <div class="tag">
          <div class="text-dark">形状</div>
          <!-- <div>不限</div>
          <div>横版</div>
          <div>竖版</div>
          <div>方形</div>
          <div>自定义</div> -->

          <q-tabs class="options-tabs text-teal">
            <q-route-tab
              class="btn"
              v-for="(item, index) in shapes"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { shape: item.value }) }"
              >{{ item.label }}</q-route-tab
            >
          </q-tabs>
        </div>
        <div class="tag">
          <div class="text-dark">价格</div>
          <!-- <div>不限</div>
          <div>低于6000</div>
          <div>6000-20000</div>
          <div>20000-40000</div>
          <div>高于40000</div>
          <div>自定义</div> -->
          <q-tabs class="options-tabs text-teal">
            <q-route-tab
              class="btn"
              v-for="(item, index) in prices"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { price: item.value, pricemin: item.price.min, pricemax: item.price.max }) }"
              >{{ item.label }}</q-route-tab
            >
          </q-tabs>
          <div>
            <input type="text" class="input" v-model="pricemin" />-<input
              type="text"
              class="input"
              v-model="pricemax"
            />
          </div>
          <!-- <div class="text-dark btn" @click="myPrise">确定</div> -->
          <q-tabs>
            <q-route-tab :to="{ query: Object.assign({}, $route.query, { price: '4', pricemin, pricemax}) }">确定</q-route-tab>
          </q-tabs>
        </div>
        <div class="tag">
          <div class="text-dark">颜色</div>
          <!-- <div>
            <div
              class="color"
              :style="{ backgroundColor: color }"
              v-for="color in colors"
              :key="color"
            ></div>
          </div> -->
          <q-tabs class="options-tabs text-teal">
            <q-route-tab
              class="color"
              v-for="(item, index) in colors"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { color: item }) }"
              >
                <span class="color-box" :style="{ backgroundColor: '#'+item }">{{ item ? "" : "不限"}}</span>
              </q-route-tab
            >
          </q-tabs>
        </div>
        <div class="tag">
          <div class="text-dark">主题</div>
          <!-- <div
            v-for="theme in themes"
            :key="theme"
            @click="addTag(theme)"
            class="btn"
          >
            {{ theme }}
          </div> -->
          <q-tabs class="options-tabs text-teal">
            <q-route-tab
              class="btn"
              v-for="(item, index) in themes"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { theme: item.value }) }"
              >{{ item.label }}</q-route-tab
            >
          </q-tabs>
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
      <!-- <div class="artworks">
        <vue-waterfall-easy
          :imgsArr="imgsArr"
          @scrollReachBottom="getData"
          maxCols="4"
        ></vue-waterfall-easy>
      </div> -->
      <div class="q-pa-md">

        <!-- <q-btn class="q-mb-md" color="primary" label="Regenerate layout" @click="generateCells" /> -->

        <div class="column example-container" :style="`height: ${(Math.floor(pageSize/3))*250 }px`">
          <div class="flex-break hidden"></div>
          <div class="flex-break"></div>
          <div class="flex-break"></div>
          <div class="example-cell" v-for="(item, index) in artworkList" :key="index">
            <q-img :src="item.photos.length ? item.photos[0].src : ''" style="min-height: 80px"></q-img>
            <p>{{item.name}}</p>

          </div>

        </div>

      </div>


      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="artworkTotal"
        @current-change="changeCurrentPage"
        style="margin-top: 20px; text-align: center"
      >
      </el-pagination>


    </div>
  </q-layout>
</template>

<script>
// import vueWaterfallEasy from "vue-waterfall-easy";

const generateCells = () => Array(24).fill(null).map((_, cell) => (
  Array(2 + Math.ceil(3 * Math.random())).fill(null).map((_, text) => `Cell ${cell + 1} - ${text + 1}`)
))

export default {
  // name: "app",


  data() {
    return {
      cells: generateCells(),
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
      shape: this.$route.query.shape,
      shapes: [
        {
          label: "不限",
          value: "",
        },
        {
          label: "横版",
          value: "0",
        },
        {
          label: "竖版",
          value: "1",
        },
        {
          label: "方形",
          value: "2",
        },
      ],
      price: this.$route.query.price,
      pricemin: this.$route.query.price == "4" ? this.$route.query.pricemin : "",
      pricemax: this.$route.query.price == "4" ? this.$route.query.pricemax : "",
      prices: [
        {
          label: "不限",
          value: "",
          price: {
            min: "",
            max: "",
          },
        },
        {
          label: "低于6000",
          value: "0",
          price: {
            min: "",
            max: "6000",
          },
        },
        {
          label: "6000-20000",
          value: "1",
          price: {
            min: "6000",
            max: "20000",
          },
        },
        {
          label: "20000-40000",
          value: "2",
          price: {
            min: "20000",
            max: "40000",
          },
        },
        {
          label: "高于40000",
          value: "3",
          price: {
            min: "40000",
            max: "",
          },
        },
        {
          label: "自定义",
          value: "4",
          price: {
            min: this.$route.query.pricemin,
            max: this.$route.query.pricemax,
          },
        },
      ],
      color: this.$route.query.color,
      colors: [
        "",
        // "pink",
        "ffc0cb",
        // "yellow",
        "feff00",
        // "green",
        "048004",
        // "orange",
        "ffa500",
        // "blue",
        "1601ff",
        // "purple",
        "800180",
        "abcffc",
        // "red",
        "ff0102",
        // "gray",
        "808080",
      ],
      theme: this.$route.query.theme,
      themes: [
        {
          label: "不限",
          value: "",
        },
        {
          label: "风景画",
          value: "风景画",
        },
        {
          label: "动物",
          value: "动物",
        },
        {
          label: "城市",
          value: "城市",
        },
        {
          label: "抽象",
          value: "抽象",
        },

        // "不限",
        // "风景画",
        // "动物",
        // "城市",
        // "抽象",
        // "新闻摄影",
        // "旅游",
        // "概念艺术",
      ],
      // current: 1,
      text: "展开选项",
      maxPage: 10,
      newPage: "",
      lowPrise: "",
      highPrise: "",
      pageSize: Number(this.$route.query.pageSize) || this.$store.state.artwork.pagination.pageSize,
      currentPage: Number(this.$route.query.currentPage)
    };
  },
  async preFetch({
    store,
    currentRoute,
  }) {
    const { locale } = currentRoute.params;
    const { shape, pricemin, pricemax, color, theme, currentPage, pageSize } = currentRoute.query;
    if (shape || pricemin || pricemax || color || theme) {
      store.commit("artwork/setSearch", {
        shape: shape || "",
        pricemin: pricemin || "",
        pricemax: pricemax || "",
        color: color || "",
        theme: theme || ""
      });
    }

    return await store.dispatch("artwork/getArtworkSearch", {
      shape: shape || "",
      pricemin: pricemin || "",
      firstname: pricemax || "",
      color: color || "",
      theme: theme || "",
      locale,
      currentPage: currentPage || store.state.artwork.pagination.currentPage,
      pageSize: pageSize || store.state.artwork.pagination.pageSize,
    });
  },
  computed: {
    artworkList() {
      return this.$store.state.artwork.searchData;
    },
    artworkTotal() {
      return this.$store.state.artwork.pagination.total;
    },
  },
  // components: {
  //   vueWaterfallEasy,
  // },
  methods: {
    generateCells () {
      this.cells = generateCells();
    },
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
    // nextPage() {
    //   this.current < this.maxPage ? (this.current += 1) : this.current;
    // },
    // toNewPage() {
    //   parseInt(this.newPage) > 0 && parseInt(this.newPage) <= this.maxPage
    //     ? (this.current = parseInt(this.newPage))
    //     : this.current;
    // },
    // myPrise() {
    //   if (this.lowPrise <= this.highPrise) {
    //     this.tags.push(`${this.lowPrise}-${this.highPrise}`);
    //   }
    // },
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

    changeCurrentPage(val) {
      // this.currentPage = val;
      // this.search();
      this.$router.push({
        query: Object.assign({}, this.$route.query, { currentPage: val })
      })
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
      // width: 24px;
      // height: 24px;
      border-radius: 5px;
      vertical-align: middle;
      margin-left: 0;


      .color-box{
        display: inline-block;
        width: 100%;
        height: 40px;
        // border: 3px solid transparent;
        // &:hover {
        //   border: 3px solid #152c2b;
        // }
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

<style lang="sass" scoped>
.flex-break
  flex: 1 0 100% !important
  width: 0 !important

$x: 3

@for $i from 1 through ($x - 1)
  .example-container > div:nth-child(#{$x}n + #{$i})
    order: #{$i}

.example-container > div:nth-child(#{$x}n)
  order: #{$x}

.example-container

  .example-cell
    width: 33.33%
    padding: 1px

    > div
      padding: 4px 8px
      box-shadow: inset 0 0 0 2px $grey-6
.my-custom-image
  filter: blur(1px) sepia()
</style>
