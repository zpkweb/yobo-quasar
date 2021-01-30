<template>
  <div class="applyArtistPop">
    <q-card class="card apply" v-show="mode === 'page1'">
      <q-card-section class="row items-center q-pb-none">
        <div class="title">成为艺术家</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div>已有4555，6783位艺术家入驻</div>
        <!-- <input
          type="text"
          placeholder="姓氏"
          class="input"
          v-model="firstname"
        /> -->
        <div class="label">
          <q-input square outlined :dense="dense" v-model="firstname" placeholder="姓氏" />
        </div>
        <!-- <input
          type="text"
          placeholder="名字"
          class="input"
          v-model="lastname"
        /> -->
        <div class="label">
          <q-input square outlined :dense="dense" v-model="lastname" placeholder="名字" />
        </div>
        <!-- <input
          type="text"
          placeholder="邮箱"
          class="input"
          v-model="artistEmail"
          />
          -->
        <div class="label">
          <q-input square outlined :dense="dense" v-model="artistEmail" placeholder="邮箱" />
        </div>
        <!-- <input type="text" placeholder="电话" class="input" v-model="phone" /> -->
        <div class="label">
          <q-input square outlined :dense="dense" v-model="phone" placeholder="电话" />
        </div>

        <!-- <select
          class="select"
          id="application_country"
          name="application[country]"
          v-model="country"
        >
          <option
            :value="country.value"
            v-for="(country, index) in countries"
            :key="index"
          ></option>
          <option value selected>国家</option>
          <option value="American">美国</option>
          <option value="England">英国</option>
          <option value="France">法国</option>
          <option value="Japan">日本</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="country"
            :options="countryOptions"
          />
        </div>
        <!-- <select
          class="select"
          id="application_language"
          name="application[language]"
          v-model="language"
        >
          <option value selected>语言</option>
          <option value="ch">中文</option>
          <option value="ja">日语</option>
          <option value="es">西班牙语</option>
          <option value="fr">法语</option>
          <option value="en">英语</option>
        </select> -->

        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="language"
            :options="languageOptions"
          />
        </div>
        <!-- <select
          class="select"
          id="application_foundOn"
          name="application[foundOn]"
          v-model="findUs"
        >
          <option value selected>您是如何发现我们的</option>
          <option value="facebook">脸书</option>
          <option value="google">谷歌</option>
          <option value="friends">朋友</option>
          <option value="other">其他</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="findUs"
            :options="findUsOptions"
          />
        </div>

        <div class="text-white text-center register" @click="goPage2">
          下一步
        </div>
      </q-card-section>
    </q-card>

    <q-card class="card apply" v-show="mode === 'page2'">
      <q-card-section class="row items-center q-pb-none">
        <div class="title">成为艺术家</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col">已有4555，6783位艺术家入驻</div>
          <div class="col-grow back" @click="goPage1">
            <q-img src="img/index/back.png" width="14px"></q-img>
            上一步
          </div>
        </div>
        <!-- <select
          class="select"
          id="application_soleIncome"
          name="application[soleIncome]"
          v-model="isFullTime"
        >
          <option value selected>您是一个专业的全职艺术家么？</option>
          <option value="1">是</option>
          <option value="0">否</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="isFullTime"
            :options="isFullTimeOptions"
          />
        </div>
        <!-- <select
          class="select"
          id="application_soldOnline"
          name="application[soldOnline]"
          v-model="onlineSell"
        >
          <option value selected>售出的作品中，网上售出的比例占多少？</option>
          <option value="none">还未售出，所以我才愿意参加永宝</option>
          <option value="<10%">小于10%</option>
          <option value="10%-50%">大于10%小于50%</option>
          <option value=">50%">大于50%</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="onlineSell"
            :options="onlineSellOptions"
          />
        </div>
        <!-- <select
          class="select"
          id="application_soldArtworks"
          name="application[soldArtworks]"
          v-model="sold"
        >
          <option value selected>您在过去一年里售出多少件自己的作品？</option>
          <option value="<10">少于十件</option>
          <option value="10-30">10-30件</option>
          <option value="30-50">30-50件</option>
          <option value="50-100">50-100件</option>
          <option value=">100">多于100件</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="sold"
            :options="soldOptions"
          />
        </div>
        <!-- <select
          class="select"
          id="application_soldVia"
          name="application[soldVia]"
          v-model="channel"
        >
          <option value selected>
            如果您在网上售出过作品，是通过什么渠道呢？
          </option>
          <option value="Personal Website">个人网站</option>
          <option value="Online Gallery">其他线上画廊</option>
          <option value="Social Media">个人网站</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="channel"
            :options="channelOptions"
          />
        </div>
        <!-- <input
          type="text"
          class="input"
          placeholder="如有其他画廊已合作，是哪一家（方便我们更全面了解您）"
          v-model="gallery"
        /> -->
        <div class="label">
          <q-input
            type="textarea"
            square
            outlined
            :dense="dense"
            v-model="gallery"
            placeholder="如有其他画廊已合作，是哪一家（方便我们更全面了解您）"
          />
        </div>
        <!-- <select
          class="select"
          id="application_primaryMedium"
          name="application[primaryMedium]"
          v-model="medium"
        >
          <option value selected>主要媒介</option>
          <option value="painting">油画</option>
          <option value="photography">摄影作品</option>
          <option value="drawing">绘画</option>
          <option value="mixed_media">多种媒体</option>
          <option value="textile">织品</option>
          <option value="sculpture">雕刻</option>
          <option value="installation">安置</option>
          <option value="video">视频</option>
          <option value="other">其他</option>
        </select> -->
        <div class="label">
          <q-select
            square
            outlined
            :dense="dense"
            style="font-size: 12px"
            v-model="medium"
            :options="mediumOptions"
          />
        </div>
        <!-- <textarea
          placeholder="您是画廊代表人么？请告知您的画廊名称、城市、国家"
          class="textarea"
          v-model="galleryInfo"
        ></textarea> -->
        <div class="label">
          <q-input
          type="textarea"
            square
            outlined
            :dense="dense"
            v-model="galleryInfo"
            placeholder="您是画廊代表人么？请告知您的画廊名称、城市、国家"
          />
        </div>
        <!-- <textarea
          placeholder="最值得一看的展览/画廊/机构名称、城市、国家"
          class="textarea"
          v-model="recommend"
        ></textarea> -->
        <div class="label">
          <q-input
          type="textarea"
            square
            outlined
            :dense="dense"
            v-model="recommend"
            placeholder="最值得一看的展览/画廊/机构名称、城市、国家"
          />
        </div>
        <!-- <textarea
          type="text"
          placeholder="最引人注目的奖项/奖项名称、获得年份"
          class="textarea"
          v-model="prize"
        ></textarea> -->
        <div class="label">
          <q-input
          type="textarea"
            square
            outlined
            :dense="dense"
            v-model="prize"
            placeholder="最引人注目的奖项/奖项名称、获得年份"
          />
        </div>
        <!-- <input
          type="text"
          placeholder="连接至网站"
          class="input"
          v-model="website"
        /> -->
        <div class="label">
          <q-input
            square
            outlined
            :dense="dense"
            v-model="website"
            placeholder="连接至网站"
          />
        </div>
        <div class="text-white text-center register" @click="sellerRegister">
          申请
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'page1',
      dense: true,
      phone: "",
      firstname: "",
      lastname: "",
      // artistEmail: this.$store.state.user.info ? this.$store.state.user.info.email : "",
      country: "国家",
      countryOptions: ["美国", "英国", "法国", "日本"],
      language: "语言",
      languageOptions: ["中文", "日语", "西班牙语", "法语", "英语"],
      findUs: "您是如何发现我们的",
      findUsOptions: ["脸书", "谷歌", "朋友", "其他"],
      isFullTime: "您是一个专业的全职艺术家么？",
      isFullTimeOptions: ["您是一个专业的全职艺术家么？", "是", "否"],
      onlineSell: "售出的作品中，网上售出的比例占多少？",
      onlineSellOptions: [
        "售出的作品中，网上售出的比例占多少？",
        "还未售出，所以我才愿意参加永宝",
        "小于10%",
        "大于10%小于50%",
        "大于50%",
      ],
      sold: "您在过去一年里售出多少件自己的作品？",
      soldOptions: [
        "您在过去一年里售出多少件自己的作品？",
        "少于十件",
        "10-30件",
        "30-50件",
        "50-100件",
        "多于100件",
      ],
      channel: "如果您在网上售出过作品，是通过什么渠道呢？",
      channelOptions: [
        "如果您在网上售出过作品，是通过什么渠道呢？",
        "个人网站",
        "其他线上画廊",
        "个人网站",
      ],
      gallery: "",
      medium: "主要媒介",
      mediumOptions: [
        "主要媒介",
        "油画",
        "摄影作品",
        "绘画",
        "多种媒体",
        "织品",
        "雕刻",
        "安置",
        "视频",
        "其他",
      ],

      galleryInfo: "",
      recommend: "",
      prize: "",
      website: "",
      profile: "",
      verifyCode: "",
      newPassword: "",
      countries: "",
      loclist: "",
      registerMsg1: "",
      registerMsg2: "",
      registerMsg3: "",
    };
  },
  computed: {
    artistEmail() {
      return this.$store.state.user.info
        ? this.$store.state.user.info.email
        : "";
    },
  },
  methods: {
    goPage2() {
      this.mode = "page2";
    },
    goPage1() {
      this.mode = "page1";
    },
    async sellerRegister() {
      // let res = await ApiUser.sellerRegister(
      //   this.firstname,
      //   this.lastname,
      //   this.email,
      //   this.phone,
      //   this.country,
      //   this.language,
      //   this.findUs,
      //   this.isFullTime,
      //   this.onlineSell,
      //   this.sold,
      //   this.channel,
      //   this.gallery,
      //   this.medium,
      //   this.galleryInfo,
      //   this.recommend,
      //   this.prize,
      //   this.website,
      //   this.profile
      // );
      const applyArtist = await this.$store.dispatch("user/applyArtist", {
        userId: this.$store.state.user.info
          ? this.$store.state.user.info.userId
          : "",
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.artistEmail,
        phone: this.phone,
        country: this.country,
        language: this.language,
        findUs: this.findUs,
        isFullTime: this.isFullTime,
        onlineSell: this.onlineSell,
        sold: this.sold,
        channel: this.channel,
        gallery: this.gallery,
        medium: this.medium,
        galleryInfo: this.galleryInfo,
        recommend: this.recommend,
        prize: this.prize,
        website: this.website,
        profile: this.profile,
      });
      console.log("applyArtist", applyArtist);
      if (applyArtist.success) {
        // this.icon3 = false;
        this.$emit('hide-applyArtist')
        // await this.$store.commit('user/setUserInfo', applyArtist.data);
        // this.$q.cookies.set('user.info', applyArtist.data)

        let storageUserInfo = this.$q.cookies.get("userInfo");
        if (storageUserInfo) {
          storageUserInfo.isApplyArtist = true;
        }
        this.$q.cookies.set("userInfo", storageUserInfo, {
          expires: 1,
          path: "/",
        });
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "申请成功",
          color: "positive",
        });
      } else {
        // alert("密码不正确，请重新输入密码");
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: applyArtist.message,
          color: "negative",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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
.apply {
  .input,
  .textarea {
    margin: 20px auto;
  }
}
</style>
