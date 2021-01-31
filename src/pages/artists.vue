<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artist.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">{{$t('artists.painter')}}</div>
        <div class="number">{{artistTotal}}{{$t('artists.PaintersCriteria')}}</div>
      </div>
    </div>
    <div class="container">
      <div class="options">
        <div class="option">
          <div class="title">{{$t('artists.label')}}</div>
          <q-tabs class="options-tabs text-grey-8">
            <q-route-tab
              class="btn"
              v-for="(item, index) in tags"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { tag: item.value }) }"
              >{{ $t(item.label) }}</q-route-tab
            >
          </q-tabs>
        </div>
        <div class="option">
          <div class="title text-dark">{{$t('artists.Country')}}</div>
          <q-tabs class="options-tabs text-grey-8">
            <q-route-tab
              class="btn"
              v-for="(item, index) in countrys"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { country: item.value }) }"
              >{{ $t(item.label) }}</q-route-tab
            >
          </q-tabs>
        </div>
        <div class="option">
          <div class="title title-surname text-dark">{{$t('artists.LastName')}}</div>
          <q-tabs class="options-tabs options-tabs-surname text-grey-8" dense inline-label>
            <q-route-tab
              class="tab-surname"
              v-for="(item, index) in surnames"
              :key="index"
              :to="{ query: Object.assign({}, $route.query, { surname: item }) }"
              >{{ item || $t('artists.Unlimited') }}</q-route-tab
            >
          </q-tabs>
        </div>
      </div>
      <!-- <q-expansion-item
        dense
        :label="text"
        class="text-center title2 relative-position hide"
        @show="show"
        @hide="hide"
      >
        <div class="text-left selected relative-position">
          <div>您已选择：</div>
          <div class="option">摄影家<span class="btn">×</span></div>
          <div class="option">新闻摄影 <span class="btn">×</span></div>
          <div class="clear absolute-right btn">清空所有</div>
        </div>
      </q-expansion-item> -->
      <div class="sort-by text-right">
        <router-link :to="{ query: Object.assign({}, $route.query, { hots: false, news: false }) }" class="tabs">{{$t('artists.DefaultSort')}}</router-link>
        <router-link :to="{ query: Object.assign({}, $route.query, { hots: hots ? false : true }) }" class="tabs" :class="{ active: hots }">{{$t('artists.Hottest')}}</router-link>
        <router-link :to="{ query: Object.assign({}, $route.query, { news: news ? false : true }) }" class="tabs" :class="{ active: news }">{{$t('artists.NewestUpload')}}</router-link>
      </div>
      <div class="artists " v-if="artistList">
        <q-item
          class="artist col-3"
          v-for="(item, index) of artistList"
          :key="index"
          :to="`artist/${item.sellerId}`"
        >
          <div class="image">
            <!-- <q-img src="img/artists/artist.png" width="194px"></q-img> -->
            <q-img
              :src="item.user ? item.user.avatar : ''"
              width="231px"
              height="231px"
            ></q-img>

          </div>
          <div class=" text-left">{{ item.firstname }} {{ item.lastname }}</div>
          <div class="text-left">{{ item.country }} {{ item.typeName }}</div>
        </q-item>
      </div>
      <div class="text-center none" v-else>
        <q-img
          src="img/artists/exclamatory.png"
          width="60px"
          class="img"
        ></q-img>
        <div>{{$t('artists.NoData')}}</div>
      </div>
      <!-- <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="teal-10"
          :max="maxPage"
          :max-pages="4"
          :boundary-numbers="true"
        >
        </q-pagination>
        <div class="next btn" @click="nextPage">下一页</div>
        <div class="all">共{{ maxPage }}页</div>
        <div>
          到
          <input type="text" class="input" v-model="newPage" />
          页
        </div>
        <div class="btn button" @click="toNewPage">确定</div>
      </div> -->
      <div class="q-pa-lg flex flex-center">
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
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      // current: 2,
      surname: this.$route.query.surname,
      surnames: [
        "",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      tag: this.$route.query.tag,
      tags: [
        {
          label: 'artists.Unlimited',
          value: "",
        },
        {
          label: 'artists.painter',
          value: "0",
        },
        {
          label: 'artists.sculptor',
          value: "1",
        },
        {
          label: 'artists.photographer',
          value: "2",
        },
      ],
      country: this.$route.query.country,
      countrys: [
        {
          label: 'artists.Unlimited',
          value: "",
        },
        {
          label: 'artists.China',
          value: "zh",
        },
        {
          label: 'artists.Japan',
          value: "ja",
        },
        {
          label: 'artists.Spain',
          value: "es",
        },
        {
          label: 'artists.UnitedStates',
          value: "us",
        },
      ],
      // text: "展开选项",
      // current: 1,
      // hots: false,
      // news: false,
      newPage: "",
      pageSize: parseInt(this.$route.query.pageSize) || 10,
      currentPage: parseInt(this.$route.query.currentPage) || 1,
      total: 0
    };
  },
  async preFetch({
    store,
    currentRoute,
  }) {
    const { locale } = currentRoute.params;
    const {  currentPage, pageSize, ...serach } = currentRoute.query;
    store.commit("artist/setSearch", serach);
    const sellerSearch = await store.dispatch("artist/sellerSearch", {
      ...serach,
      locale,
      currentPage: parseInt(currentPage) || 1,
      pageSize: parseInt(pageSize) || 10,
    });
    if(sellerSearch.success){
      const { total, currentPage, pageSize, list } = sellerSearch.data;
      store.commit('artist/setSearchData', list)
      store.commit('artist/setPagination', { total, currentPage, pageSize })
    }
  },
  watch: {
    currentPage: function() {
      this.changeCurrentPage(this.currentPage)
    }
  },
  computed: {
    artistList() {
      return this.$store.state.artist.searchData;
    },
    artistTotal() {
      return this.$store.state.artist.pagination.total;
    },
    pageTotal() {
      return Math.ceil(this.$store.state.artist.pagination.total/this.$store.state.artist.pagination.pageSize);
    },
    hots() {
      return (this.$route.query.hots && this.$route.query.hots !== 'false')
    },
    news() {
      return (this.$route.query.news && this.$route.query.news !== 'false')
    }
  },

  methods: {
    // show() {
    //   this.text = "收起选项";
    // },
    // hide() {
    //   this.text = "展开选项";
    // },
    nextPage() {
      if(this.currentPage < this.pageTotal){
        this.currentPage = this.currentPage+1
      }
    },
    toNewPage() {
      if(parseInt(this.newPage) > 0 && parseInt(this.newPage) <= this.pageTotal) {
        this.currentPage = parseInt(this.newPage)
      }
    },
    changeCurrentPage(val) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { currentPage: val })
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
.btn.active {
  color: #f00;
}
.banner {
  width: 100%;
  color: #d6d7c5;
  .text {
    padding-top: 80px;
    .title {
      font-size: 46px;
      letter-spacing: 8px;
      padding-bottom: 10px;
      font-weight: bolder;
    }
    .number {
      font-size: 16px;
      letter-spacing: 5px;
      font-weight: bolder;
    }
  }
}
.container {
  width: 1100px;
  margin: 0 auto;
  .options {
    font-size: 16px;
    color: #a1a190;
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 60px 0 0 0;
    // border-bottom: 1px solid rgba(#a1a190, 0.2);
    .option {
      div {
        display: inline-block;
        margin: 15px;
        &:hover {
          color: rgb(21, 44, 43);
        }
      }
      .title {

        color: rgb(21, 44, 43);
      }

      .options-tabs{

      }
      .options-tabs-surname{
        flex: 1;
      }
      .tab-surname{
        width: 38px;
        padding: 0 10px;
      }
    }
  }
  .sort-by {
    padding: 10px 30px 8px 0;
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
  .artists {

    font-size: 16px;
    color: rgb(21, 44, 43);
    line-height: 1.2;
    font-weight: bolder;
    letter-spacing: 2px;
    overflow: hidden;
    .artist {
      display: block;
      width: 25%;
      float: left;
      margin: 20px 0;
    }
    .image {
      position: relative;
      margin: 10px 0 10px 0;
      width: 100%;
      padding: 6px;
      background-color: #152c2b;

    }

  }
  .none {
    display: none;
    padding: 80px 0;
    font-size: 18px;
    .img {
      margin-bottom: 30px;
    }
  }
  .title2::v-deep {
    .q-focus-helper {
      width: 0;
    }
    .q-expansion-item__toggle-icon {
      position: absolute;
      right: 488px;
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
    .option {
      background-color: #d6d7c5;
    }
    .clear {
      text-decoration: underline;
      padding-right: 20px;
    }
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
  .next {
    border: 1px solid #333;
    padding: 4px 20px;
    margin: 0 6px;
    font-size: 14px;
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
    color: rgb(21, 44, 43);
    font-size: 14px;
    font-weight: bolder;
  }
  .all {
    margin: 0 10px;
  }
}
</style>
