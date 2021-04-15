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
      <div class="options">

        <div class="option" v-for="(option, optionIndex) in Object.keys(options)" :key="optionIndex" v-show="expandOptions ? optionIndex <= expandOptions : true">
          <h3 class="option-title title">{{ $t(`artwork.list.${option}`) }}</h3>
          <div class="option-item" @click="searchOption({option, checked: true})">{{ $t(`artwork.list.Unlimited`) }}</div>
          <div
            class="option-item"
            :class="{active: item.checked}"
            v-for="(item, itemIndex) in options[option]"
            :key="itemIndex"

            @click="searchOption({option, index:itemIndex, checked: item.checked})"
          >
          <span
            class="color-box"
            :style="{ backgroundColor: '#' + item.value }"
            v-if="option == 'color'"
            >{{ item.value ? "" : $t('artwork.list.Unlimited') }}</span
          >

            <span v-else>{{ $t(item.label) }}</span>
          </div>
        </div>
      </div>
      <q-expansion-item
        dense
        :label="`${expandOptions ? $t('artwork.list.ExpandOptions') : $t('artwork.list.CollapseOptions')}`"
        class="text-center title2 relative-position "
        @show="optionsShow"
        @hide="optionsHide"
      >
        <div class="text-left selected relative-position selected-item-content">
          <div class="selected-title">{{$t('artwork.list.YouHaveSelected')}}：</div>
          <div class="selected-tags">
            <template v-for="(option, optionIndex) in $store.state.artwork.options">
              <template v-for="(item, itemIndex) in option">
                <div
              class="tag"
              :key="`option-active-${optionIndex}-${itemIndex}`"
              v-if="item.checked"
              @click="searchOption({option: item.type, index: itemIndex, checked: true })"
            >
              <span>{{ item.name }}</span>
              <span  class="btn">×</span>
            </div>
              </template>
            </template>
          </div>


          <div class="selected-clear btn" @click="deleteAllTags">
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



        <div class="column example-container">
        <div class="flex-break hidden"></div>
        <div class="flex-break"></div>
        <div class="flex-break"></div>
        <div class="flex-break"></div>

        <div v-for="(item, i) in artworkList" :key="i" class="artwork-list" tabindex="0">
          <router-link
            :to="`/${$i18n.locale}/artwork/${item.commodityId}`"
            class="artwork-list-item"
          >
            <q-img
              class="artwork-list-img"
              :src="item.photos.length ? item.photos[0].src : ''"
            >
              <p class="artwork-list-name">{{ item.name }}</p>
            </q-img>

          </router-link>
            <!-- <div v-for="(text, j) in cell" :key="j">
              {{ text }}
            </div> -->
        </div>
      </div>


        <!-- <div
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
        </div> -->




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

      expandOptions: 3,
      newPage: "",
      pageSize: parseInt(this.$route.query.pageSize) || 10,
      currentPage: parseInt(this.$route.query.currentPage) || 1,
      total: 0,
    };
  },
  // async preFetch({ store, currentRoute, Vue }) {
  //   console.log("currentRoute", currentRoute.query)
  //   const { query, params } = currentRoute;
  //   const { locale } = params;

  // },
  async created() {
    console.log("created");
    console.log("router query", this.$qs.parse(this.$route.query))
    const { query, params } = this.$route;
    const { locale } = params;

    // 获取艺术品选项
    const getArtworkOptions = await this.$store.dispatch("artwork/getArtworkOptions", {
      locale
    });

    if(getArtworkOptions.success){

      this.$store.commit("artwork/setOptins", getArtworkOptions.data)
    }


    this.changeQueryData();


  },
  mounted() {
    console.log("mounted");

  },
  computed: {

    search() {
      return this.$qs.parse(this.$route.query)
    },
    options() {
      const searchs = this.$qs.parse(this.$route.query);
      const options = this.$store.state.artwork.options;
      for(let option in options){
        options[option].map((item) => {
          item.type = option;
          item.value = item.name;
          item.label = item.name;

          let checked = false;
          Object.keys(searchs).map((search) => {
            if(option == search){
              for(let i of searchs[search]){
                if(item.id == i){
                  checked = true;
                }
              }
            }
          })
          item.checked = checked;
          return item;
        });
      }
      console.log("options", options)
      return options;

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
    unlimited(option) {
      console.log(Object.assign({}, this.$route.query, { [option]: [] }))
    },
    generateCells() {
      this.cells = generateCells();
    },
    addTag(theme) {
      if (this.tags.find((e) => e === theme) === undefined) {
        this.tags.push(theme);
      }
    },

    deleteAllTags() {
      const { pageSize, currentPage, ...searchData} = this.$qs.parse(this.$route.query);
      for(let item in searchData) {
        searchData[item] = '';
      }
      this.$router.push({
        query: searchData
      });
    },
    optionsShow() {
      this.expandOptions = 0;
    },
    optionsHide() {
      this.expandOptions = 3;
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
    async changeQueryData() {
      // const query = this.$qs.parse(this.$route.query);
      // for (let item in query) {
      //   console.log("item", item, this.search[item], query[item])
      //   if (this.search[item]) {
      //     this.search[item].value = this.$t(query[item]);
      //   }
      // }
      console.log("this.$qs.parse(this.$route.query)", this.$qs.parse(this.$route.query))
      const artworkSearch = await this.$store.dispatch("artwork/getArtworkSearch", this.$qs.parse(this.$route.query))
    if(artworkSearch.success){
      const { total, currentPage, pageSize, list } = artworkSearch.data;
      this.$store.commit('artwork/setSearchData', list)
      this.$store.commit('artwork/setPagination', { total, currentPage, pageSize })
    }
    },

    async searchOption({option, index, checked}) {

      // item.checked = !item.checked;
      // this.options[option][index].checked = !checked
      await this.$store.commit("artwork/setOptinsItem", {option, index, checked})
      console.log("this.options", this.options)
      const searchData={};
      for(let option in this.options){
        searchData[option]=[];
        for(let item of this.options[option]){
          if(item.checked){
            searchData[option].push(item.id);
          }
        }
      }
      console.log("searchData", searchData)
      const artworkSearch = Object.assign({}, this.$store.state.artwork.search, searchData);
      console.log("artworkSearch", artworkSearch)
      this.$store.commit("artwork/setSearch", artworkSearch);
      this.$router.push(`/${this.$i18n.locale}/artwork?${this.$qs.stringify(artworkSearch)}`);
    }
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
      display: inline-block;
      padding: 5px 8px;
      border-radius: 2px;
      background-color: #d6d7c5;
      cursor: pointer;
      margin-bottom: 10px;
      margin-left: 10px;
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
  display: flex;
  margin-top: 40px;
  // padding: 0 84px 0 100px;

}
.selected-title {
  width: 110px;
}
.selected-tags {
  flex: 1;
}
.selected-clear {
  width: 84px;
}




.options{
  .option{
    overflow: hidden;
    .option-title{
      float: left;
      font-size: 16px;
      margin-right: 20px;
      color: rgb(21, 44, 43);
    }
    .option-item{
      float: left;
      font-size: 16px;
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
      cursor: pointer;
      color: rgb(97, 97, 97);
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
    .option-item.active{
      // color: #f00;
    }
  }
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
// $x: 4
// .flex-break
//   flex: 1 0 100% !important
//   width: 0 !important


// @for $i from 1 through ($x - 1)
//   .example-container > div:nth-child(#{$x}n + #{$i})
//     order: #{$i}

// .example-container > div:nth-child(#{$x}n)
//   order: #{$x}

// .example-container

//   .example-cell
//     position: relative
//     width: 25%
//     padding: 1px

//     > div
//       padding: 4px 8px
//       box-shadow: inset 0 0 0 2px $grey-6
//     .name
//       display: none
//       position: absolute
//       left: 0
//       bottom: 0
//       width: 100%
//       height: 40px
//       margin: 0
//       line-height: 40px
//       text-align: center
//       color: #fff
//       background-color: rgba(0, 0, 0, .5)
//   .example-cell:hover
//     .name
//       display: block
// .my-custom-image
//   filter: blur(1px) sepia()
</style>


<style lang="sass" scoped>
.flex-break
  flex: 1 0 100% !important
  width: 0 !important

$x: 4

@for $i from 1 through ($x - 1)
  .example-container > div:nth-child(#{$x}n + #{$i})
    order: #{$i}

.example-container > div:nth-child(#{$x}n)
  order: #{$x}

.example-container
  height: 1000px

  .artwork-list
    position: relative
    width: 25%
    padding: 10px

    .artwork-list-item
      display: inline-block
      width: 100%
      // padding: 4px 8px
      // box-shadow: inset 0 0 0 2px $grey-6
      border: 6px solid #152c2b
    .artwork-list-name
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
  .artwork-list:hover
    .artwork-list-name
      display: block
.my-custom-image
  filter: blur(1px) sepia()
</style>
