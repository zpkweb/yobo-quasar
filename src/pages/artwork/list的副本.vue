<template>
  <q-page>
    <div class="banner relative-position">
      <q-img src="~assets/images/banner-artist.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">{{$t('artwork.list.artwork')}}</div>
        <div class="number">{{ artworkTotal }} {{$t('artwork.list.searchCriteria')}}</div>
      </div>
    </div>
    <div class="container">
      <div class="tags">
        <!-- 按形状浏览 -->
        <div class="tag">
          <div class="text-dark">{{$t('artwork.list.shape')}}</div>
          {{ $route.query.shapes }}
          <q-tabs class="options-tabs text-grey-8" indicator-color="transparent">
            <router-link
              class="options-link"
              :to="{ query: Object.assign({}, $route.query, { shapes: '' }) }"
              replace
              >{{ $t('artwork.list.Unlimited') }}</router-link
            >
            <template v-for="(item, index) in shapes">
            <span v-if="item.checked">{{$t(item.label)}}</span>
            <router-link
              class="options-link"
              v-else
              :key="index"
              :to="{
                query: Object.assign({}, $route.query, { shapes: $route.query.shapes ? [...$route.query.shapes, item.value] : [ item.value ] }),
              }"
              replace
              >{{ $t(item.label) }}</router-link
            >
            </template>
          </q-tabs>
        </div>

        <!-- 按价格浏览 -->
        <div class="tag" v-if="$store.state.isShowPay">
          <div class="text-dark">{{$t('artwork.list.price')}}</div>
          <q-tabs class="options-tabs text-grey-8" indicator-color="transparent">
            <router-link
              class="options-link"
              v-for="(item, index) in prices"
              :key="index"
              :to="{
                query: Object.assign({}, $route.query, {
                  price: item.value,
                  pricemin: item.price.min,
                  pricemax: item.price.max,
                }),
              }"
              >{{ $t(item.label) }}</router-link>
          </q-tabs>
          <div class="price-custom inline-block">
            <input type="text" class="input" v-model="pricemin" />-<input
              type="text"
              class="input"
              v-model="pricemax"
            />
          </div>
          <q-tabs class="inline-block">
            <span @click="customPrice" class="customPrice">{{$t('artwork.list.determine')}}</span>
          </q-tabs>
        </div>

        <!-- 按颜色浏览 -->
        <div class="tag">
          <div class="text-dark">{{$t('artwork.list.colour')}}</div>
          <q-tabs dense inline-label class="options-tabs text-grey-8" indicator-color="transparent">
            <router-link
              class="options-link color"
              v-for="(item, index) in colors"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { colors: item }) }"
            >
              <span
                class="color-box"
                :style="{ backgroundColor: '#' + item }"
                >{{ item ? "" : $t('artwork.list.Unlimited') }}</span
              >
            </router-link>
          </q-tabs>
        </div>

        <!-- 按类别浏览 -->
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.category')}}</div>
            <q-tabs class="options-tabs text-grey-8 wrap" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in categorys"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    categorys: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>

          <!-- 按类别浏览 -->
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.place')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in places"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    places: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
        <template v-if="expandOptions">
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.material')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in materials"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    materials: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.model')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in models"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    models: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.ruiwu')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in ruiwus"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    ruiwus: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.specification')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in specifications"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    specifications: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.style')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in styles"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    styles: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.technique')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in techniques"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    techniques: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.theme')}}</div>
            <q-tabs class="options-tabs text-grey-8 wrap" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in themes"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    themes: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.type')}}</div>
            <q-tabs class="options-tabs text-grey-8" content-class="options-tab" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in types"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, {
                    types: item.value,
                  }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>
          <div class="tag">
            <div class="text-dark">{{$t('artwork.list.use')}}</div>
            <q-tabs class="options-tabs text-grey-8" indicator-color="transparent">
              <router-link
                class="options-link"
                v-for="(item, index) in uses"
                :key="index"
                :to="{
                  query: Object.assign({}, $route.query, { uses: item.value }),
                }"
                >{{ $t(item.label) }}</router-link
              >
            </q-tabs>
          </div>


        </template>
      </div>
      <q-expansion-item
        dense
        :label="`${expandOptions ? $t('artwork.list.CollapseOptions') : $t('artwork.list.ExpandOptions')}`"
        class="text-center title2 relative-position "
        @show="optionsShow"
        @hide="optionsHide"
      >
        <div class="text-left selected relative-position selected-item-content">
          <div>{{$t('artwork.list.YouHaveSelected')}}：</div>
          <div
            class="tag"
            v-for="(item, index) in search"
            :key="`search-${index}`"
            v-if="item.value"
            @click="deleteTag(item)"
          >
            <span>{{ item.value }}</span>
            <span  class="btn">×</span>
          </div>
          <div class="clear absolute-right btn" @click="deleteAllTags">
            {{$t('artwork.list.EmptyAll')}}
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
          >{{$t('artwork.list.DefaultSort')}}</router-link
        >
        <router-link
          :to="{
            query: Object.assign({}, $route.query, {
              news: false,
              hots: hots ? false : true,
            }),
          }"
          class="tabs"
          :class="{ active: hots }"
          >{{$t('artwork.list.Hottest')}}</router-link
        >
        <router-link
          :to="{
            query: Object.assign({}, $route.query, {
              news: news ? false : true,
              hots: false,
            }),
          }"
          class="tabs"
          :class="{ active: news }"
          >{{$t('artwork.list.NewestUpload')}}</router-link
        >
      </div>

      <!-- <div class="artworks">
        <vue-waterfall-easy
          :imgsArr="imgsArr"
          @scrollReachBottom="getData"
          maxCols="4"
        ></vue-waterfall-easy>
      </div> -->
      <div class="q-pa-md" v-if="artworkList && artworkList.length">
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
            :to="`/${$i18n.locale}/artwork/${item.commodityId}`"
            class="example-cell"
            v-for="(item, index) in artworkList"
            :key="index"
          >
            <q-img
              :src="item.photos.length ? item.photos[0].src : ''"
            >
              <p class="name">{{ item.name }}</p>
            </q-img>
          </router-link>
        </div>
      </div>


      <noData
        v-else
        text="artwork.NoData"
      />


      <div class="q-pa-lg flex flex-center" v-if="pageTotal">
        <q-pagination
          v-model="currentPage"
          color="teal-10"
          :max="pageTotal"
          :max-pages="4"
          :boundary-numbers="true"
        >
        </q-pagination>
        <div class="next btn" @click="nextPage">{{$t('pagination.NextPage')}}</div>
        <div class="all">{{$t('pagination.Total')}}{{ pageTotal }}{{$t('pagination.page')}}</div>
        <div>
          {{$t('pagination.To')}}
          <input type="text" class="input" v-model="newPage" />
          {{$t('pagination.page')}}
        </div>
        <div class="btn button" @click="toNewPage">{{$t('pagination.determine')}}</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import noData from "src/components/noData";
export default {
  components: {
    noData,
  },
  watch: {
    $route: "changeQueryData",
    currentPage: function() {
      this.changeCurrentPage(this.currentPage)
    }
  },
  data() {
    return {
      tags: ['artwork.list.newsPhotography', 'artwork.list.ConceptArt'],
      search: {
        price: {
          label: "price",
          value: this.$t(this.$route.query.prices) || "",
        },
        colors: {
          label: "color",
          value: this.$route.query.colors || "",
        },
        categorys: {
          label: "category",
          value: this.$route.query.categorys || "",
        },
        classifications: {
          label: "classification",
          value: this.$route.query.classifications || "",
        },
        materials: {
          label: "material",
          value: this.$route.query.materials || "",
        },
        models: {
          label: "model",
          value: this.$route.query.models || "",
        },
        places: {
          label: "place",
          value: this.$route.query.places || "",
        },
        ruiwus: {
          label: "ruiwu",
          value: this.$route.query.ruiwus || "",
        },
        shapes: {
          label: "shape",
          value: this.$route.query.shapes || "",
        },
        specifications: {
          label: "specification",
          value: this.$route.query.specifications || "",
        },
        styles: {
          label: "style",
          value: this.$route.query.styles || "",
        },
        techniques: {
          label: "technique",
          value: this.$route.query.techniques || "",
        },
        themes: {
          label: "theme",
          value: this.$route.query.themes || "",
        },
        types: {
          label: "type",
          value: this.$route.query.types || "",
        },
        usess: {
          label: "use",
          value: this.$route.query.uses || "",
        },
      },
      pricemin:
        this.$route.query.price == "自定义" ? this.$route.query.pricemin : "",
      pricemax:
        this.$route.query.price == "自定义" ? this.$route.query.pricemax : "",

      prices: [
        {
          label: 'artwork.list.Unlimited',
          value: "",
          price: {
            min: "",
            max: "",
          },
        },
        {
          label: 'artwork.list.LessThan',
          value: 'artwork.list.LessThan',
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
          label: 'artwork.list.Above',
          value: 'artwork.list.Above',
          price: {
            min: "40000",
            max: "",
          },
        },
        {
          label: 'artwork.list.customize',
          value: 'artwork.list.customize',
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
      categorys,
      classifications,
      materials,
      models,
      places,
      ruiwus,
      shapes,
      specifications,
      styles,
      techniques,
      themes,
      types,
      uses,

      price,
      pricemin,
      pricemax,
      colors,
      hots,
      news,
      currentPage,
      pageSize,
    } = currentRoute.query;

    // 获取艺术品选项
    await store.dispatch("artwork/getArtworkShape", {
      locale
    });

    // if (shape || pricemin || pricemax || color || theme || hots || news) {
      store.commit("artwork/setSearch", {
        categorys: categorys || "",
        classifications: classifications || "",
        materials: materials || "",
        models: models || "",
        places: places || "",
        ruiwus: ruiwus || "",
        shapes: shapes || "",
        specifications: specifications || "",
        styles: styles || "",
        techniques: techniques || "",
        themes: themes || "",
        types: types || "",
        uses: uses || "",

        pricemin: pricemin || "",
        pricemax: pricemax || "",
        color: colors || "",
        hots: hots || "",
        news: news || "",
      });
    // }
    const artworkSearch = await store.dispatch("artwork/getArtworkSearch", {
      // categorys: categorys || "",
      // classifications: classifications || "",
      // materials: materials || "",
      // models: models || "",
      // places: places || "",
      // ruiwus: ruiwus || "",
      // shapes: shapes || "",
      // specifications: specifications || "",
      // styles: styles || "",
      // techniques: techniques || "",
      // themes: themes || "",
      // types: types || "",
      // uses: uses || "",

      // pricemin: pricemin || "",
      // pricemax: pricemax || "",
      // colors: colors || "",
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
    categorys() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.category.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    classifications() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.classification.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    materials() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.material.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    models() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.model.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    places() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.place.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    ruiwus() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.ruiwu.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    shapes() {
      console.log("this.$route.query.shapes", this.$route.query.shapes)
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.shape.map((item) => {
          item.value = item.name;
          item.label = item.name;
          let checked = false;
          for(let i of this.$route.query.shapes){
            if(item.name == i){
              checked = true;
            }
          }
          item.checked = checked;
          return item;
        }),
      ];
    },
    specifications() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.specification.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    styles() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.style.map((item) => {
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
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.technique.map((item) => {
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
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.theme.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    types() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.type.map((item) => {
          item.value = item.name;
          item.label = item.name;
          return item;
        }),
      ];
    },
    uses() {
      return [
        {
          value: "",
          label: 'artwork.list.Unlimited',
        },
        ...this.$store.state.artwork.options.use.map((item) => {
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
      // this.search[item.label] = "";
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
          this.search[item].value = this.$t(query[item]);
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
  padding-top: 50px;
  .tags {
    font-size: 16px;
    color: #152c2b;
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(#e8e8e8, 0.2);
    padding-bottom: 60px;
    .tag {
      position: relative;
      overflow: hidden;
      // display: flex;
      .price-custom{
        margin-top: 10px;
      }
      .text-dark{
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 48px;
        line-height: 48px;
        font-weight: bold;
        color: #152c2b;
      }
      .options-tabs {
        // flex: 1;
        // margin: 5px 15px;
        float: left;
        margin-left: 42px;
        &:hover {
          color: #152c2b;
        }
        .options-tab{
          flex-wrap: wrap;
        }
        .options-link{
          display: inline-block;
          height: 48px;
          line-height: 48px;
          border-radius: 5px;
          margin-left: 0;
          padding: 0 16px;
          min-height: 48px;
          text-transform: uppercase;
          white-space: nowrap;
          color: inherit;
          text-decoration: none;

          .color-box {
            display: inline-block;
            width: 32px;
            height: 32px;
            line-height: 32px;
            margin-top: 10px;
            // border: 3px solid transparent;
            // &:hover {
            //   border: 3px solid #152c2b;
            // }
          }
        }
      }
    }
    .input {
      width: 80px;
      height: 28px;
      outline: 0;
      padding: 3px 10px;
      border: 1px solid #e8e8e8;
    }

  }
  .sort-by {
    padding: 10px 10px 10px 0;
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
  // .wrap {
  //   margin: 0 auto;
  //   width: 1000px;
  //   column-count: 4;
  //   column-gap: 10px;
  //   padding: 60px 0;
  // }
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
      background-color: #152c2b;
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
        background-color: #152c2b;
        height: 80px;
      }
      .header2 {
        width: 40px;
        height: 40px;
        background-color: #152c2b;
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
    padding: 5px 8px;
    letter-spacing: 3px;
    border-radius: 2px;
  }
  .selected {
    .tag {
      background-color: #d6d7c5;
      cursor: pointer;
      .btn{
        margin-left: 8px;
      }
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
  color: #152c2b;
}
.selected-item-content{
  margin-top: 40px;
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
