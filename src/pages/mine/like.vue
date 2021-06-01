<template>
  <div class="like">
    <!-- <div class="row item" v-for="i in 3" :key="'like1-' + i">
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
    <div class="row item" v-for="i in 3" :key="'like2-' + i">
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
    <template v-if="myArtists && myArtists.length">
      <div
        class="row item"
        v-for="(item, index) in myArtists"
        :key="'like1-' + index"
      >
        <!-- <div class="col-3 image"></div> -->
        <router-link :to="`/${$i18n.locale}/artist/${item.sellerId}`" class="image-box">
          <!-- <q-img
            v-if="item.seller && item.seller.user && item.seller.user.avatar"
            :src="item.seller.user.avatar"
            class="image"
            width="160px"
            height="160px"
            contain
          /> -->
          <Avatar
            type="photo"
            :src="item.seller && item.seller.user && item.seller.user.avatar"
            width="160px"
            height="160px"

          />
        </router-link>

        <div class="col-4 desc">
          <router-link :to="`/${$i18n.locale}/artist/${item.sellerId}`" class="title">{{item.seller.firstname}} {{item.seller.lastname}}</router-link>
          <div>{{$t('my.like.uploaded')}}{{item.commodityCount}}{{$t('my.like.SecondaryWorks')}}</div>
          <div>{{item.seller.country}}</div>
        </div>

        <div class="col-5 row items-center justify-end">
          <!-- <div class="btn follow follow2 text-white text-center">
            +关注艺术家
          </div> -->
          <div class="btn follow follow2 text-white text-center" @click="myArtist(item)">{{ item.hasMyArtist ? $t('my.like.Followed') : '+'+$t('my.like.FollowArtist')}}</div>
        </div>
      </div>
    </template>


    <noData
      v-else
      text="my.like.NoData"
      :routerLink="`/${$i18n.locale}/artists`"
    />
  </div>
</template>

<script>
import noData from "src/components/noData";
import Avatar from 'src/components/avatar.vue';
export default {
  components: {
    noData,
    Avatar
  },
  data() {
    return {
      myArtists: []
    }
  },
  async mounted() {
    const { locale } = this.$route.params;
    // const { userId } = this.$store.state.user.info;
    const userInfo = this.$q.cookies.get("userInfo");
    if(userInfo){
      const myArtist = await this.$store.dispatch("my/getMyArtist", {
        userId: userInfo.userId,
        locale,
      });
      if (myArtist.success) {
        // this.$store.commit("my/setMyArtist", myArtist.data);
        this.myArtists = myArtist.data.map(item => Object.assign(item,{ hasMyArtist: true }));
      }
    }

  },

  // computed: {
  //   myArtist() {
  //     return this.$store.state.my.myArtist.map((item) => {
  //       return Object.assign(item,{hasMyArtwork:true})
  //     })
  //   },
  // },
  methods: {
    async myArtist(item) {
      if(item.hasMyArtist) {
        const delMyArtist = await this.$store.dispatch("my/delMyArtist", {
          userId: this.$store.state.user.info.userId,
          artistId: item.sellerId
        })
        if(delMyArtist.success) {
          item.hasMyArtist = false;
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: this.$t('my.like.unsubscribe'),
            color: 'negative',
          })
        }else{
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: data.msg,
            color: 'negative',
          })
        }

      }else{
        const addMyArtist = await this.$store.dispatch("my/addMyArtist", {
          userId: this.$store.state.user.info.userId,
          artistId: item.sellerId
        })

        if(addMyArtist.success) {
          item.hasMyArtist = true;
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: this.$t('my.like.FollowedSuccess'),
            color: 'positive',
          })
        }else{
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: data.msg,
            color: 'negative',
          })
        }
      }

    }
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
    .image-box{
      width: 212px;
      margin-right: 15px;
    }
    .image {
      margin-right: 20px;
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
        color: #333;
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
