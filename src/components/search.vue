<template>
  <div class="searchPop">
    <q-card class="card card2">
      <q-card-section class="row items-center q-pb-none section1">
        <div class="title relative-position">
          <!-- <div class="image absolute"></div> -->
          <q-select class="search-type-select"  dense borderless v-model="searchType" :options="searchTypeOptions"  />
          <input type="text" :placeholder="`请输入您要搜索${searchType}名称`" class="input2" v-model="search" />
          <div class="btn search2 text-white" @click="searchSubmit">搜索</div>
        </div>
        <q-space />
        <q-btn
          icon="close"
          class="close absolute icon-close"
          flat
          round
          dense
          v-close-popup
        />
      </q-card-section>
      <div v-show="searchResult.length" ref="scrollTargetRef" class="q-pa-md" style="max-height: 250px; overflow: auto;">
      <q-infinite-scroll @load="searchLoad" :offset="250" :scroll-target="$refs.scrollTargetRef">
        <div v-for="(item, index) in searchResult" :key="index" class="caption">
          <router-link class="caption-item" :to="`/${$i18n.locale}/artist/${ item.sellerId }`" v-if="searchType == '艺术家'" >
            <q-img v-if="item && item.user && item.user.avatar" :src="item.user.avatar" width="120px" height="120px" class="caption-img" />
            <div class="caption-content">
              <p class="caption-name">{{item.firstname}} {{item.lastname}}</p>
            </div>
          </router-link>
          <router-link class="caption-item" :to="`/${$i18n.locale}/artwork/${ item.commodityId }`" v-else-if="searchType == '艺术品'" >
            <div style="width:120px;height:80px;float:left;">
              <q-img v-if="item && item.photos && item.photos.length" :src="item.photos[0].src" width="120px" height="80px" class="caption-img" />
            </div>

            <div class="caption-content">
              <p class="caption-name">{{item.name}}</p>
            </div>
          </router-link>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>


      <q-card-section v-show="!searchResult.length">
        <div>
          <div class="tag tag1">热门搜索</div>
          <div class="tag underline btn">精选艺术家</div>
          <div class="tag underline btn">油画</div>
          <div class="tag underline btn">后起之秀</div>
          <div class="tag underline btn">雕刻</div>
          <div class="tag underline btn">摄影师</div>
          <div class="tag underline btn">艺术大家</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchResult: [],
      search: '',
      searchType: '艺术家',
      searchTypeOptions: ['艺术家', '艺术品'],
      pageSize: 2,
      currentPage: 1,
      page: 0,
      total: 0,
    }
  },
  methods: {
    async searchSubmit() {
      console.log("search", this.search, this.searchType)
      this.searchResult = []
      this.currentPage = 1;
      this.page = 0;
      this.total = 0;

      if(this.searchType == '艺术家') {

        const sellerSearchData = await this.sellerSearch();
        if(sellerSearchData.success) {
          this.searchResult.push(...sellerSearchData.data.list);
          this.currentPage += 1;
          this.page = Math.ceil(sellerSearchData.data.total/sellerSearchData.data.pageSize);
          this.total = sellerSearchData.data.total;
        }
      }else if(this.searchType == '艺术品') {
        //   this.$router.push(`/${this.$i18n.locale}/artwork?${this.$qs.stringify(Object.assign({}, {
        //   shape: "",
        //   price: "",
        //   pricemin: "",
        //   pricemax: "",
        //   color: "",
        //   theme: "",
        //   category: "",
        //   technique: "",
        //   name: ""
        // }, {
        //   name: this.search
        // }))}`);

        const artworkSearchData = await this.artworkSearch();
        console.log("artworkSearchData", artworkSearchData)
        if(artworkSearchData.success) {
          this.searchResult.push(...artworkSearchData.data.list);
          this.currentPage += 1;
          this.page = Math.ceil(artworkSearchData.data.total/artworkSearchData.data.pageSize);
          this.total = artworkSearchData.data.total;
        }

      }
    },
    async searchLoad(index, done) {
      if(this.currentPage > this.page) {
        done();
        return;
      }
      let sellerSearchData;
      if(this.searchType == "艺术家") {
        sellerSearchData = await this.sellerSearch();
      }else if(this.searchType == "艺术品"){
        sellerSearchData = await this.artworkSearch();
      }
      if(sellerSearchData.success) {
        this.searchResult.push(...sellerSearchData.data.list);
        this.currentPage += 1;
        done()
      }
    },
    async sellerSearch() {
      const sellerSearchData = await this.$store.dispatch("artist/sellerSearch", {
          name: '',
          tag: "",
          country: "",
          surname: "",
          locale: this.$i18n.locale,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        });
        if(!sellerSearchData.success) {
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: sellerSearchData.msg,
            color: 'negative',
          })

        }
        return sellerSearchData;
    },
    async artworkSearch() {
      const artworkSearchData = await this.$store.dispatch("artwork/getArtworkSearch", {
          name: "",
          shape: "",
          // price: "",
          // pricemin: "",
          // pricemax: "",
          color: "",
          theme: "",
          category: "",
          technique: "",
          locale: this.$i18n.locale,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        });
        if(!artworkSearchData.success) {
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: artworkSearchData.msg,
            color: 'negative',
          })

        }
        return artworkSearchData;
    }

  },
};
</script>
<style lang="scss" scoped>
.searchPop {
  max-width: none;
}
.card {
  border-radius: 0;
  padding: 20px 10px;
  color: rgb(21, 44, 43);
  letter-spacing: 2px;
  font-size: 12px;
  .title {
    font-size: 26px;
  }
  .to-login,
  .to-register,
  .xy,
  .ys {
    color: #adaf8b;
  }
  .input,
  .textarea {
    font-size: 12px;
    display: block;
    padding: 10px;
    width: 340px;
    margin: 0;
    outline: 0;

    border: 1px solid rgb(226, 226, 226);
    &:focus {
      border: 1px solid rgb(21, 44, 43);
    }
  }

  .textarea {
    resize: none;
    height: 120px;
  }
  .login,
  .register {
    background-color: #526463;
    padding: 6px 20px;
    margin: 20px 0;
    font-size: 20px;
    font-weight: bolder;
    font-family: "STFangsong";
  }
  .border-active {
    border: 1px solid rgb(21, 44, 43) !important;
  }
  .bg-active {
    background-color: #152c2b !important;
  }
  .label {
    width: 340px;
    margin: 20px auto;
    font-size: 12px;
  }
  .select {
    display: block;
    margin: 20px auto;
    padding: 10px;
    width: 340px;
    font-size: 12px;
    border: 1px solid rgb(226, 226, 226);
    color: #888;
  }
  .back {
    background-color: #d6d7c5;
  }
  .check {
    vertical-align: middle;
    margin: 0 5px 2px 0;
  }
  .checkbox1,
  .checkbox2 {
    display: inline-block;
  }
  .msg {
    color: rgb(254, 63, 63);
    background-color: #ffd7d7;
    padding: 2px 10px;
    margin: 5px 0;
    // display: none;
    opacity: 0;
  }
  .block {
    display: block;
  }
  .opacity {
    opacity: 1;
  }
  .title2 {
    margin: 20px auto;
    padding: 20px 0 0 0;
    border-top: 1px solid rgba(21, 44, 43, 0.1);
  }
  .img {
    margin: 0 16px;
  }
}

.card2 {
  padding: 40px 80px 40px 120px;
  max-width: none;
  width: 800px;
  font-family: "STFangsong";
  .title {
    position: relative;
    font-size: 18px;
    width: 100%;
    padding: 0 124px 0 82px;
    border-bottom: 1px solid rgba(21, 44, 43, 0.2);
  }
  .search-type-select{
    position: absolute;
    top: -12px;
    left: 0;
  }
  .image {
    background: url("~assets/images/search.png") no-repeat;
    width: 21px;
    height: 21px;
    vertical-align: middle;
    bottom: 5px;
  }
  .input2 {
    width: 100%;
    border: none;
    outline: none;
    display: inline-block;

  }
  .search2 {
    position: absolute;
    top: -3px;
    right: 0;
    display: inline-block;
    background-color: #152c2b;
    padding: 2px 42px;
    font-weight: bolder;
  }
  .close {
    left: 630px;
    top: -16px;
  }
  .section1 {
    margin-bottom: 40px;
  }
  .tag {
    font-size: 16px;
    color: rgb(21, 44, 43);
    margin: 16px 0;
  }
  .tag1 {
    font-weight: bolder;
  }
}
.caption {
  .caption-item {
    display: block;
    width: 100%;
    margin: 10px 0;
    overflow: hidden;
    .caption-img {
      float: left;
    }
    .caption-content {
      float: left;
      margin-left: 10px;
      .caption-name {
        color: #333;
      }
    }
  }
}
</style>
