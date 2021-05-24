<template>
  <q-page>
    <div class="banner relative-position">
      <q-img src="~assets/img/banner-artist.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">{{ $t("artwork.list.artwork") }}</div>
        <div class="number">
          {{ searchResult.total }} {{ $t("artwork.list.searchCriteria") }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="options">
        <div
          class="option"
          v-for="(option, optionIndex) in Object.keys(options)"
          :key="optionIndex"
          v-show="expandOptions ? optionIndex <= expandOptions : true"
        >
          <h3 class="option-title title">{{ $t(`artwork.list.${option}`) }}</h3>
          <div
            class="option-item"
            @click="searchOption({ option, checked: true })"
          >
            {{ $t(`artwork.list.Unlimited`) }}
          </div>
          <div
            class="option-item"
            :class="{ active: item.checked }"
            v-for="(item, itemIndex) in options[option]"
            :key="itemIndex"
            @click="
              searchOption({ option, index: itemIndex, checked: item.checked })
            "
          >
            <span
              class="color-box"
              :style="{ backgroundColor: '#' + item.value }"
              v-if="option == 'color'"
              >{{ item.value ? "" : $t("artwork.list.Unlimited") }}</span
            >

            <span v-else>{{ $t(item.label) }}</span>
          </div>
        </div>
      </div>
      <q-expansion-item
        dense
        :label="`${
          expandOptions
            ? $t('artwork.list.ExpandOptions')
            : $t('artwork.list.CollapseOptions')
        }`"
        class="text-center title2 relative-position"
        @show="optionsShow"
        @hide="optionsHide"
      >
        <div class="text-left selected relative-position selected-item-content">
          <div class="selected-title">
            {{ $t("artwork.list.YouHaveSelected") }}：
          </div>
          <div class="selected-tags">
            <template
              v-for="(option, optionIndex) in $store.state.artwork.options"
            >
              <template v-for="(item, itemIndex) in option">
                <div
                  class="tag"
                  :key="`option-active-${optionIndex}-${itemIndex}`"
                  v-if="item.checked"
                  @click="
                    searchOption({
                      option: item.type,
                      index: itemIndex,
                      checked: true,
                    })
                  "
                >
                  <span>{{ item.name }}</span>
                  <span class="btn">×</span>
                </div>
              </template>
            </template>
          </div>

          <div class="selected-clear btn" @click="deleteAllTags">
            {{ $t("artwork.list.EmptyAll") }}
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
          >{{ $t("artwork.list.DefaultSort") }}</router-link
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
          >{{ $t("artwork.list.Hottest") }}</router-link
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
          >{{ $t("artwork.list.NewestUpload") }}</router-link
        >
      </div>

      <!-- <div class="artworks">
        <vue-waterfall-easy
          :imgsArr="imgsArr"
          @scrollReachBottom="getData"
          maxCols="4"
        ></vue-waterfall-easy>
      </div> -->
      <div class="q-pa-md" v-if="searchResult.list && searchResult.list.length">
        <!-- <q-btn class="q-mb-md" color="primary" label="Regenerate layout" @click="generateCells" /> -->

        <div class="column example-container">
          <div class="flex-break hidden"></div>
          <div class="flex-break"></div>
          <div class="flex-break"></div>
          <div class="flex-break"></div>

          <div
            v-for="(item, i) in searchResult.list"
            :key="i"
            class="artwork-list"
            tabindex="0"
          >
            <router-link
              :to="`/${$i18n.locale}/artwork/${item.commodityId}`"
              class="artwork-list-item"
            >
              <q-img
                class="artwork-list-img"
                v-if="item.photos && item.photos.length"
                :src="item.photos.length ? item.photos[0] : ''"
              ></q-img>
            </router-link>
            <!-- <div v-for="(text, j) in cell" :key="j">
              {{ text }}
            </div> -->

            <div class="artwork-list-user">
              <div class="artwork-list-seller" v-if="item.seller">
                <div class="artwork-list-avatar-content">
                  <q-img
                    class="artwork-list-seller-img"
                    v-if="item.seller.user.avatar"
                    :src="item.seller.user.avatar"
                  ></q-img>
                  <span class="artwork-list-seller-surname"
                    >{{ item.seller.firstname }}{{ item.seller.lastname }}</span
                  >

                  <div class="artwork-list-seller-pop">
                    <div class="artwork-list-seller-pop-header">
                      <q-img
                        class="artwork-list-seller-pop-img"
                        v-if="item.seller.user.avatar"
                        :src="item.seller.user.avatar"
                        width="30px"
                        height="30px"
                      ></q-img>
                      <div class="artwork-list-seller-pop-text">
                        <span class="artwork-list-seller-pop-surname"
                          >{{ item.seller.firstname
                          }}{{ item.seller.lastname }}</span
                        >
                        <span class="artwork-list-seller-pop-sellerFollowTotal"
                          >{{ item.sellerFollowTotal }}位关注者</span
                        >
                      </div>

                      <a
                        href="javascript:;"
                        class="artwork-list-seller-like"
                        @click="myArtist(item)"
                        >{{
                          item.hasMyArtist
                            ? $t("my.like.Followed")
                            : "+" + $t("my.like.Follow")
                        }}</a
                      >
                    </div>

                    <div class="artwork-list-seller-pop-content">
                      <ul v-if="item.photos">
                        <li
                          class="artwork-list-seller-pop-commodity"
                          v-for="(item, index) in item.photos"
                          :key="index"
                          v-if="index < 3"
                        >
                          <q-img
                            class="artwork-list-seller-pop-img"
                            :src="item || ''"
                            width="80px"
                            height="80px"
                          ></q-img>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="artwork-list-like">
                <q-img
                  v-if="item.hasMyArtwork"
                  src="~assets/img/liked.png"
                  width="16px"
                  height="14px"
                  @click="myArtwork(item)"
                />
                <q-img
                  v-else
                  src="~assets/img/like.png"
                  width="16px"
                  height="14px"
                  @click="myArtwork(item)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <noData v-else text="artwork.NoData" />

      <div class="q-pa-lg flex flex-center" v-if="pageTotal">
        <q-pagination
          v-model="currentPage"
          color="teal-10"
          :max="pageTotal"
          :max-pages="4"
          :boundary-numbers="true"
        >
        </q-pagination>
        <div class="next btn" @click="nextPage">
          {{ $t("pagination.NextPage") }}
        </div>
        <div class="all">
          {{ $t("pagination.Total") }}{{ pageTotal }}{{ $t("pagination.page") }}
        </div>
        <div>
          {{ $t("pagination.To") }}
          <input type="text" class="input" v-model="newPage" />
          {{ $t("pagination.page") }}
        </div>
        <div class="btn button" @click="toNewPage">
          {{ $t("pagination.determine") }}
        </div>
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
    currentPage: function () {
      this.changeCurrentPage(this.currentPage);
    },
  },
  data() {
    return {
      tags: ["artwork.list.newsPhotography", "artwork.list.ConceptArt"],

      expandOptions: 3,
      newPage: "",
      pageSize: parseInt(this.$route.query.pageSize) || 10,
      currentPage: parseInt(this.$route.query.currentPage) || 1,
      total: 0,
      searchResult: {
        list: [],
        total: 0,
        currentPage: 1,
        pageSize: 10,
      },
      myArtists: [],
      myArtworks: [],
      myWishlist: [],
      options: {}
    };
  },
  // async preFetch({ store, currentRoute, Vue }) {
  //   console.log("currentRoute", currentRoute.query)
  //   const { query, params } = currentRoute;
  //   const { locale } = params;

  // },
  async created() {
    // console.log("created");
    // console.log("router query", this.$qs.parse(this.$route.query));

    const { query, params } = this.$route;
    const { locale } = params;

    // console.log("this.$store.state.user", this.$store.state.user.info)
    // const userInfo = this.$store.state.user.info;
    const userInfo = this.$q.cookies.get("userInfo");
    // console.log("userInfo", userInfo);

    if (userInfo) {
      const { userId } = userInfo;
      const myArtist = await this.$store.dispatch("my/getMyArtist", {
        userId,
        locale,
      });
      // console.log("myArtist", myArtist);

      if (myArtist.success) {
        // const myArtists = myArtist.data.map(item => Object.assign(item,{ hasMyArtist: true }));
        this.myArtists = myArtist.data;
        // this.$store.commit("my/setMyArtist", myArtists);
      }

      const myWishlist = await this.$store.dispatch("my/getMyWishlist", {
        userId,
        locale,
      });
      if (myWishlist.success) {
        // this.$store.commit("my/setMyWishlist", myWishlist.data);
        this.myWishlist = myWishlist.data;
      }
    }

    // 获取艺术品选项
    const getArtworkOptions = await this.$store.dispatch(
      "artwork/getArtworkOptions",
      {
        locale,
      }
    );

    if (getArtworkOptions.success) {
      this.$store.commit("artwork/setOptins", getArtworkOptions.data);
      const searchs = this.$qs.parse(this.$route.query);
      const options = this.$store.state.artwork.options;
      for (let option in options) {
        options[option].map((item) => {
          item.type = option;
          item.value = item.name;
          item.label = item.name;

          let checked = false;
          Object.keys(searchs).map((search) => {
            if (option == search) {
              for (let i of searchs[search]) {
                if (item.id == i) {
                  checked = true;
                }
              }
            }
          });
          item.checked = checked;
          return item;
        });
      }
      // console.log("options", options);
      this.options = options;
    }

    this.changeQueryData();
  },
  mounted() {
    // console.log("mounted");
  },
  computed: {
    search() {
      return this.$qs.parse(this.$route.query);
    },
    // options() {
    //   const searchs = this.$qs.parse(this.$route.query);
    //   const options = this.$store.state.artwork.options;
    //   for (let option in options) {
    //     options[option].map((item) => {
    //       item.type = option;
    //       item.value = item.name;
    //       item.label = item.name;

    //       let checked = false;
    //       Object.keys(searchs).map((search) => {
    //         if (option == search) {
    //           for (let i of searchs[search]) {
    //             if (item.id == i) {
    //               checked = true;
    //             }
    //           }
    //         }
    //       });
    //       item.checked = checked;
    //       return item;
    //     });
    //   }
    //   console.log("options", options);
    //   return options;
    // },

    artworkList() {
      return this.$store.state.artwork.searchData;
    },
    artworkTotal() {
      return this.searchResult.total;
      // return this.$store.state.artwork.pagination.total;
    },
    pageTotal() {
      return Math.ceil(this.searchResult.total/this.searchResult.pageSize)
      // return Math.ceil(
      //   this.$store.state.artwork.pagination.total /
      //     this.$store.state.artwork.pagination.pageSize
      // );
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
      // console.log(Object.assign({}, this.$route.query, { [option]: [] }));
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
      const { pageSize, currentPage, ...searchData } = this.$qs.parse(
        this.$route.query
      );
      for (let item in searchData) {
        searchData[item] = "";
      }
      this.$router.push({
        query: searchData,
      });
    },
    optionsShow() {
      this.expandOptions = 0;
    },
    optionsHide() {
      this.expandOptions = 3;
    },
    nextPage() {
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
      if (this.pricemin || this.pricemax) {
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
      const artworkSearch = await this.$store.dispatch(
        "artwork/getArtworkSearch",
        this.$qs.parse({
          ...this.$route.query,
          pageSize: this.pageSize,
        })
      );
      if (artworkSearch.success) {
        let { total, currentPage, pageSize, list } = artworkSearch.data;

        // this.$store.commit('artwork/setSearchData', list)
        // this.$store.commit('artwork/setPagination', { total, currentPage, pageSize })
        // console.log("changeQueryData this.myArtists", this.myArtists);
        list = list.map((item) => {
          item.hasMyArtist = false;

          if (item.seller) {
            if (
              item.seller.commoditysPhotos &&
              item.seller.commoditysPhotos.length >= 3
            ) {
              item.seller.commoditysPhotos = item.seller.commoditysPhotos.splice(
                0,
                3
              );
            }
            if (this.myArtists && this.myArtists.length) {
              for (let artist of this.myArtists) {
                if (item.seller.sellerId == artist.sellerId) {
                  item.hasMyArtist = true;
                }
              }
            }
          }

          item.hasMyArtwork = false;
          if (this.myWishlist && this.myWishlist.length) {
            for (let commodity of this.myWishlist) {
              if (item.commodityId == commodity.commodityId) {
                item.hasMyArtwork = true;
              }
            }
          }

          return item;
        });
        this.searchResult = { total, currentPage, pageSize, list };
      }
    },

    async searchOption({ option, index, checked }) {
      // item.checked = !item.checked;
      // this.options[option][index].checked = !checked
      await this.$store.commit("artwork/setOptinsItem", {
        option,
        index,
        checked,
      });
      const searchData = {};
      for (let option in this.options) {
        searchData[option] = [];
        for (let item of this.options[option]) {
          if (item.checked) {

            searchData[option].push(option == 'color' ? item.name : item.id);
          }
        }
      }
      const artworkSearch = Object.assign(
        {},
        this.$store.state.artwork.search,
        searchData
      );
      // console.log("artworkSearch", artworkSearch)
      this.$store.commit("artwork/setSearch", artworkSearch);
      this.$router.push(
        `/${this.$i18n.locale}/artwork?${this.$qs.stringify(artworkSearch)}`
      );
    },
    async myArtwork(item) {
      if (!this.$store.state.user.info) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: this.$t("layout.pleaseLoginFirst"),
          color: "negative",
        });
        return;
      }
      if (item.hasMyArtwork) {
        const delMyArtwork = await this.$store.dispatch("my/delMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId,
        });
        if (delMyArtwork.success) {
          item.hasMyArtwork = false;
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("artwork.commodity.Unlike"),
            color: "negative",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: delMyArtwork.msg,
            color: "negative",
          });
        }
      } else {
        const addMyArtwork = await this.$store.dispatch("my/addMyArtwork", {
          userId: this.$store.state.user.info.userId,
          artworkId: item.commodityId,
        });
        if (addMyArtwork.success) {
          item.hasMyArtwork = true;
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("artwork.commodity.LikeSuccess"),
            color: "positive",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: addMyArtwork.msg,
            color: "negative",
          });
        }
      }
    },

    async myArtist(item) {
      // console.log("myArtist", item);
      if (!this.$store.state.user.info) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: this.$t("layout.pleaseLoginFirst"),
          color: "negative",
        });
        return;
      }

      if (item.hasMyArtist) {
        const delMyArtist = await this.$store.dispatch("my/delMyArtist", {
          userId: this.$store.state.user.info.userId,
          artistId: item.seller.sellerId,
        });
        if (delMyArtist.success) {
          // item.hasMyArtist = false;

          let newMyArtists = [];
          for (let artists of this.myArtists) {
            // console.log(artists.sellerId, item.seller.sellerId);
            if (artists.sellerId !== item.seller.sellerId) {
              newMyArtists.push(item);
            }
          }
          this.myArtists = newMyArtists;
          // console.log(this.myArtists);
          this.changeHasMyArtist(item.seller.sellerId, false);

          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("my.like.unsubscribe"),
            color: "negative",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: data.msg,
            color: "negative",
          });
        }
      } else {
        const addMyArtist = await this.$store.dispatch("my/addMyArtist", {
          userId: this.$store.state.user.info.userId,
          artistId: item.seller.sellerId,
        });

        if (addMyArtist.success) {
          // item.hasMyArtist = true;
          this.myArtists = addMyArtist.data;
          this.changeHasMyArtist(item.seller.sellerId, true);
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: this.$t("my.like.FollowedSuccess"),
            color: "positive",
          });
        } else {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: data.msg,
            color: "negative",
          });
        }
      }
    },
    changeHasMyArtist(sellerId, bool) {
      // console.log("changeHasMyArtist", sellerId, bool, this.myArtists);

      const list = this.searchResult.list.map((item) => {
        if (item.seller) {
          // item.hasMyArtist = false;
          // if(this.myArtists && this.myArtists.length){
          //   for(let artist of this.myArtists) {
          //     console.log(item.seller.sellerId, sellerId, bool)

          //   }
          // }
          if (item.seller.sellerId == sellerId) {
            item.hasMyArtist = bool;
            if (bool) {
              item.sellerFollowTotal
                ? item.sellerFollowTotal++
                : (item.sellerFollowTotal = 1);
            } else {
              item.sellerFollowTotal--;
            }
          }
        }
        return item;
      });
      this.searchResult = { ...this.searchResult, list };
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
      .price-custom {
        margin-top: 10px;
      }
      .text-dark {
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
        .options-tab {
          flex-wrap: wrap;
        }
        .options-link {
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
      .btn {
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

.customPrice {
  display: inline-block;
  cursor: pointer;
  color: #152c2b;
}

.selected-item-content {
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

.options {
  .option {
    overflow: hidden;
    .option-title {
      float: left;
      font-size: 16px;
      margin-right: 20px;
      color: rgb(21, 44, 43);
    }
    .option-item {
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
    .option-item.active {
      // color: #f00;
    }
  }
}

.artwork-list-user {
  .artwork-list-seller {
    float: left;
    .artwork-list-seller-img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      cursor: pointer;
    }
    .artwork-list-seller-surname {
      display: inline-block;
      margin-left: 10px;
    }
  }
  .artwork-list-like {
    float: right;
    cursor: pointer;
  }
}

.artwork-list-avatar-content {
  float: left;
  position: relative;

  .artwork-list-seller-pop {
    display: none;
    position: absolute;
    // right: -20px;
    left: -260px;
    bottom: 60px;
    width: 300px;
    padding: 10px 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #000;
    &::before {
      content: "";
      position: absolute;
      right: 20px;
      bottom: -20px;
      width: 0;
      height: 0;
      border: 10px solid;
      border-color: #fff transparent transparent transparent;
    }
    .artwork-list-seller-pop-header {
      overflow: hidden;
      .artwork-list-seller-pop-img {
        float: left;
        border-radius: 50%;
      }
      .artwork-list-seller-pop-text {
        float: left;
        overflow: hidden;
        margin-left: 10px;
        .artwork-list-seller-pop-surname,
        .artwork-list-seller-pop-sellerFollowTotal {
          display: block;
          line-height: 1.5em;
          color: #333;
          text-align: left;
          font-size: 12px;
        }
      }

      .artwork-list-seller-like {
        float: right;
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #ccc;
        background-color: #252c2b;
      }
      .artwork-list-seller-like:hover {
        color: #fff;
        background-color: #252c2b;
      }
    }
    .artwork-list-seller-pop-content {
      display: flex;
      margin: 10px -10px 5px 0;
      .artwork-list-seller-pop-commodity {
        float: left;
        width: 80px;
        height: 80px;
        overflow: hidden;
        margin-right: 10px;
        .artwork-list-seller-pop-img {
          transition: all 0.4s;
        }

        .artwork-list-seller-pop-img:hover{
          transform: scale(1.4);
        }
      }
    }
    .artwork-list-seller-pop-img {
      flex: 1;
      width: 33.33%;
      // margin: 0 10px 0 0;
    }

  }
  &:hover .artwork-list-seller-pop {
    display: block;
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
  height: 660px

  .artwork-list
    position: relative
    width: 25%
    margin: 10px

    box-sizing: border-box

    .artwork-list-item
      position: relative
      display: inline-block
      width: 100%
      min-height: 50px
      max-height: 180px
      // padding: 4px 8px
      // box-shadow: inset 0 0 0 2px $grey-6
      border: 6px solid #152c2b
      overflow: hidden
    .artwork-list-user
      display: none
      position: absolute
      left: 0
      bottom: 6px
      z-index: 9
      width: 100%
      height: 50px
      margin: 0
      padding: 0 16px
      line-height: 50px
      text-align: center
      color: #fff
      background-color: rgba(0, 0, 0, .5)
  .artwork-list:hover
    .artwork-list-user
      display: block
.my-custom-image
  filter: blur(1px) sepia()
</style>
