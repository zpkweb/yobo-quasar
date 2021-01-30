<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artworks/banner.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">油画</div>
        <div class="number">{{ artworkTotal }}件符合您搜索条件的艺术品</div>
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
          <q-tabs class="options-tabs text-grey-8">
            <q-route-tab
              class="btn"
              v-for="(item, index) in shapes"
              :key="index"
              :to="{
                query: Object.assign({}, $route.query, { shape: item.value }),
              }"
              >{{ item.label }}</q-route-tab
            >
          </q-tabs>
        </div>
        <div class="tag">
          <div class="text-dark">价格</div>
          <q-tabs class="options-tabs text-grey-8">
            <q-route-tab
              class="btn"
              v-for="(item, index) in prices"
              :key="index"
              :to="{
                query: Object.assign({}, $route.query, {
                  price: item.value,
                  pricemin: item.price.min,
                  pricemax: item.price.max,
                }),
              }"
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
          <q-tabs>
            <span @click="customPrice" class="customPrice">确定</span>
          </q-tabs>
        </div>
        <div class="tag">
          <div class="text-dark">颜色</div>
          <q-tabs dense inline-label class="options-tabs text-grey-8">
            <q-route-tab
              class="color"
              v-for="(item, index) in colors"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { color: item }) }"
            >
              <span
                class="color-box"
                :style="{ backgroundColor: '#' + item }"
                >{{ item ? "" : "不限" }}</span
              >
            </q-route-tab>
          </q-tabs>
        </div>
        <template v-if="expandOptions">
          <div class="tag">
            <div class="text-dark">主题</div>
            <q-tabs class="options-tabs text-grey-8">
              <q-route-tab
                class="btn"
                v-for="(item, index) in themes"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, { theme: item.value }),
                }"
                >{{ item.label }}</q-route-tab
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">类别</div>
            <q-tabs class="options-tabs text-grey-8">
              <q-route-tab
                class="btn"
                v-for="(item, index) in categorys"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    category: item.value,
                  }),
                }"
                >{{ item.label }}</q-route-tab
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">手法</div>
            <q-tabs class="options-tabs text-grey-8">
              <q-route-tab
                class="btn"
                v-for="(item, index) in techniques"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    technique: item.value,
                  }),
                }"
                >{{ item.label }}</q-route-tab
              >
            </q-tabs>
          </div>
        </template>
      </div>
      <q-expansion-item
        dense
        :label="`${expandOptions ? '收起选项' : '展开选项'}`"
        class="text-center title2 relative-position"
        @show="optionsShow"
        @hide="optionsHide"
      >
        <div class="text-left selected relative-position">
          <div>您已选择：</div>
          <div
            class="tag"
            v-for="(item, index) in search"
            :key="`search-${index}`"
            v-if="item.value"
          >
            <span>{{ item.value }}</span>
            <span @click="deleteTag(item)" class="btn">×</span>
          </div>
          <div class="clear absolute-right btn" @click="deleteAllTags">
            清空所有
          </div>
        </div>
      </q-expansion-item>
      <div class="sort-by text-right">
        <!-- <div class="btn"></div>
        <div class="btn">最热</div>
        <div class="btn">最新上传</div> -->
        <router-link
          :to="{
            query: Object.assign({}, $route.query, {
              hots: false,
              news: false,
            }),
          }"
          class="tabs"
          >默认排序</router-link
        >
        <router-link
          :to="{
            query: Object.assign({}, $route.query, {
              hots: hots ? false : true,
            }),
          }"
          class="tabs"
          :class="{ active: hots }"
          >最热</router-link
        >
        <router-link
          :to="{
            query: Object.assign({}, $route.query, {
              news: news ? false : true,
            }),
          }"
          class="tabs"
          :class="{ active: news }"
          >最新上传</router-link
        >
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

        <div
          class="column example-container"
          :style="`height: ${Math.floor(pageSize / 4) * 300}px`"
        >
          <div class="flex-break hidden"></div>
          <div class="flex-break"></div>
          <div class="flex-break"></div>
          <div class="flex-break"></div>
          <router-link
            :to="`artwork/${item.commodityId}`"
            class="example-cell"
            v-for="(item, index) in artworkList"
            :key="index"
          >
            <q-img
              :src="item.photos.length ? item.photos[0].src : ''"
              style="min-height: 80px; max-height: 300px"
            >
              <p class="name">{{ item.name }}</p>
            </q-img>
          </router-link>
        </div>
      </div>

      <!-- <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="artworkTotal"
        @current-change="changeCurrentPage"
        style="margin: 20px 0; text-align: center"
      >
      </el-pagination> -->
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="currentPage"
          color="teal-10"
          :max="pageTotal"
          :max-pages="4"
          :boundary-numbers="true"
        >
        </q-pagination>
        <div class="next btn" @click="nextPage">下一页</div>
        <div class="all">共{{ pageTotal }}页</div>
        <div>
          到
          <input type="text" class="input" v-model="newPage" />
          页
        </div>
        <div class="btn button" @click="toNewPage">确定</div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  // name: "app",
  watch: {
    $route: "changeQueryData",
    currentPage: function() {
      this.changeCurrentPage(this.currentPage)
    }
  },
  data() {
    return {
      tags: ["新闻摄影", "概念艺术"],
      search: {
        shape: {
          label: "shape",
          value: this.$route.query.shape || "",
        },
        price: {
          label: "price",
          value: this.$route.query.price || "",
        },

        color: {
          label: "color",
          value: this.$route.query.color || "",
        },
        theme: {
          label: "theme",
          value: this.$route.query.theme || "",
        },
        category: {
          label: "category",
          value: this.$route.query.category || "",
        },
        technique: {
          label: "technique",
          value: this.$route.query.technique || "",
        },
      },
      pricemin:
        this.$route.query.price == "自定义" ? this.$route.query.pricemin : "",
      pricemax:
        this.$route.query.price == "自定义" ? this.$route.query.pricemax : "",

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
          value: "低于6000",
          price: {
            min: "",
            max: "6000",
          },
        },
        {
          label: "6000-20000",
          value: "6000-20000",
          price: {
            min: "6000",
            max: "20000",
          },
        },
        {
          label: "20000-40000",
          value: "20000-40000",
          price: {
            min: "20000",
            max: "40000",
          },
        },
        {
          label: "高于40000",
          value: "高于40000",
          price: {
            min: "40000",
            max: "",
          },
        },
        {
          label: "自定义",
          value: "自定义",
          price: {
            min: this.$route.query.pricemin,
            max: this.$route.query.pricemax,
          },
        },
      ],
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
      expandOptions: false,
      newPage: "",
      pageSize: parseInt(this.$route.query.pageSize) || 10,
      currentPage: parseInt(this.$route.query.currentPage) || 1,
      total: 0,
    };
  },
  async preFetch({ store, currentRoute }) {
    const { locale } = currentRoute.params;
    const {
      shape,
      pricemin,
      pricemax,
      color,
      theme,
      hots,
      news,
      currentPage,
      pageSize,
    } = currentRoute.query;
    // 获取艺术品选项
    await store.dispatch("artwork/getArtworkShape");

    if (shape || pricemin || pricemax || color || theme || hots || news) {
      store.commit("artwork/setSearch", {
        shape: shape || "",
        pricemin: pricemin || "",
        pricemax: pricemax || "",
        color: color || "",
        theme: theme || "",
        hots: hots || "",
        news: news || "",
      });
    }
    const artworkSearch = await store.dispatch("artwork/getArtworkSearch", {
      shape: shape || "",
      pricemin: pricemin || "",
      firstname: pricemax || "",
      color: color || "",
      theme: theme || "",
      hots: hots || "",
      news: news || "",
      locale,
      currentPage: currentPage || 1,
      pageSize: pageSize || 10,
    });
    if(artworkSearch.success){
      const { total, currentPage, pageSize, list } = artworkSearch.data;
      store.commit('artwork/setSearchData', list)
      store.commit('artwork/setPagination', { total, currentPage, pageSize })
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  computed: {
    shapes() {
      return [
        {
          value: "",
          label: "不限",
        },
        ...this.$store.state.artwork.options.shape.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    themes() {
      return [
        {
          value: "",
          label: "不限",
        },
        ...this.$store.state.artwork.options.theme.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    categorys() {
      return [
        {
          value: "",
          label: "不限",
        },
        ...this.$store.state.artwork.options.category.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    techniques() {
      return [
        {
          value: "",
          label: "不限",
        },
        ...this.$store.state.artwork.options.technique.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    artworkList() {
      return this.$store.state.artwork.searchData;
    },
    artworkTotal() {
      return this.$store.state.artwork.pagination.total;
    },
    pageTotal() {
      return Math.ceil(
        this.$store.state.artwork.pagination.total /
          this.$store.state.artwork.pagination.pageSize
      );
    },
    hots() {
      return this.$route.query.hots && this.$route.query.hots !== "false";
    },
    news() {
      return this.$route.query.news && this.$route.query.news !== "false";
    },
  },
  methods: {
    generateCells() {
      this.cells = generateCells();
    },
    addTag(theme) {
      if (this.tags.find((e) => e === theme) === undefined) {
        this.tags.push(theme);
      }
    },
    deleteTag(item) {
      let searchData = {};
      this.search[item.label] = "";
      searchData[item.label] = "";
      if (item.label == "price") {
        this.pricemin = "";
        searchData.pricemin = "";
        this.pricemax = "";
        searchData.pricemax = "";
      }
      this.$router.push({
        query: Object.assign({}, this.$route.query, searchData),
      });
      // this.$router.push(`/${this.$i18n.locale}/artwork?${this.$qs.stringify(Object.assign({}, this.artwork, data))}`);
    },
    deleteAllTags() {
      const { pageSize, currentPage, ...searchData} = this.$route.query;
      console.log("searchData", searchData)
      for(let item in searchData) {
        searchData[item] = '';
      }
      this.$router.push({
        query: Object.assign({}, this.$route.query, searchData),
      });
    },
    optionsShow() {
      this.expandOptions = true;
    },
    optionsHide() {
      this.expandOptions = false;
    },
    nextPage() {
      console.log("pageTotal", this.currentPage, this.pageTotal)
      if (this.currentPage < this.pageTotal) {
        this.currentPage = this.currentPage + 1;
      }
    },
    toNewPage() {
      if (
        parseInt(this.newPage) > 0 &&
        parseInt(this.newPage) <= this.pageTotal
      ) {
        this.currentPage = parseInt(this.newPage);
      }
    },

    changeCurrentPage(val) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { currentPage: val }),
      });
    },
    customPrice() {
      if(this.pricemin || this.pricemax) {
        this.prices[this.prices.length - 1].price.min = this.pricemin;
        this.prices[this.prices.length - 1].price.max = this.pricemax;

        this.$router.push({
          query: Object.assign({}, this.$route.query, {
            price: "自定义",
            pricemin: this.pricemin,
            pricemax: this.pricemax,
          }),
        });
      }

    },
    changeQueryData() {
      const query = this.$route.query;
      for (let item in query) {
        if (this.search[item]) {
          this.search[item].value = query[item];
        }
      }
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
    border-bottom: 1px solid rgba(#a1a190, 0.2);
    padding-bottom: 60px;
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
      padding: 3px 10px;
      border: 1px solid #a1a190;
    }
    .tag .color {
      display: inline-block;
      // width: 24px;
      // height: 24px;
      border-radius: 5px;
      vertical-align: middle;
      margin-left: 0;

      .color-box {
        display: inline-block;
        width: 30px;
        height: 30px;
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
    .tabs {
      display: inline-block;
      padding-left: 20px;
      color: #333;
    }
    .active {
      color: #f00;
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
    padding: 3px 10px;
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

.q-pagination::v-deep {
    .q-btn-item {
      margin: 6px;
      border-radius: 0;
      box-shadow: none;
      background-color: #e0e0e0;
      font-size: 14px;
      padding: 0 10px;
      font-weight: bolder;
    }
    .text-teal-10 {
      color: rgb(21, 44, 43) !important;
    }
    .bg-teal-10 {
      background-color: #152c2b !important;
    }
    .q-btn__wrapper:before {
      box-shadow: none;
    }
  }

.customPrice{
  display: inline-block;
  cursor: pointer;
  color: #333;
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
$x: 4
.flex-break
  flex: 1 0 100% !important
  width: 0 !important


@for $i from 1 through ($x - 1)
  .example-container > div:nth-child(#{$x}n + #{$i})
    order: #{$i}

.example-container > div:nth-child(#{$x}n)
  order: #{$x}

.example-container

  .example-cell
    position: relative
    width: 25%
    padding: 10px
    .name
      display: none
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      height: 40px
      margin: 0
      line-height: 40px
      text-align: center
      color: #fff
      background-color: rgba(0, 0, 0, .5)
    > div
      padding: 4px 8px
      box-shadow: inset 0 0 0 2px $grey-6

  .example-cell:hover
    .name
      display: block
.my-custom-image
  filter: blur(1px) sepia()
</style>
