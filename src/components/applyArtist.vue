<template>
  <div class="applyArtistPop">
    <q-card class="card apply" v-if="mode === 'page1'">
      <q-card-section class="applyArtist-title row items-center q-pb-none">
        <div class="title">成为艺术家</div>
        <q-space />
        <q-btn icon="close" class="icon-close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="applyArtist-content">
        <div>已有4555，6783位艺术家入驻</div>
        <!-- <input
          type="text"
          placeholder="姓氏"
          class="input"
          v-model="firstname"
        /> -->
        <div class="label">
          <q-input color="brand" square outlined :dense="dense" v-model="firstname" placeholder="姓氏" />
        </div>
        <!-- <input
          type="text"
          placeholder="名字"
          class="input"
          v-model="lastname"
        /> -->
        <div class="label">
          <q-input color="brand" square outlined :dense="dense" v-model="lastname" placeholder="名字" />
        </div>
        <!-- <input
          type="text"
          placeholder="邮箱"
          class="input"
          v-model="artistEmail"
          />
          -->
        <div class="label">
          <q-input color="brand" square outlined :dense="dense" v-model="artistEmail" placeholder="邮箱" />
        </div>
        <!-- <input type="text" placeholder="电话" class="input" v-model="phone" /> -->
        <div class="label">
          <q-input color="brand" square outlined :dense="dense" v-model="phone" placeholder="电话" />
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
          />
        </div>

        <div class="text-white text-center register bg-active" @click="goPage2">
          下一步
        </div>
      </q-card-section>
    </q-card>

    <q-card class="card apply" v-else-if="mode === 'page2'">
      <q-card-section class="applyArtist-title row items-center q-pb-none">
        <div class="title">成为艺术家</div>
        <q-space />
        <q-btn icon="close" class="icon-close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="applyArtist-content">
        <div class="row">
          <div class="col">已有4555，6783位艺术家入驻</div>
          <div class="col-grow back" @click="goPage1">
            <q-img src="~assets/images/back.png" width="14px"></q-img>
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"
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
            color="brand"
            dropdown-icon="img:img/arrow-down.png"
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
            color="brand"

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
            color="brand"
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
            color="brand"
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
            color="brand"
          />
        </div>
        <div class="text-white text-center register bg-active" @click="sellerRegister">
          申请
        </div>
      </q-card-section>
    </q-card>

    <q-card v-else class="card card1 success">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" class="icon-close" flat round dense v-close-popup />
      </q-card-section>

      <div class="text-center">
        <q-img src="~assets/images/success-filling.png" width="80px" />
      </div>
      <div class="text-center title">恭喜您！成为永宝第<br/>460，693位艺术家</div>
      <div class="text-center content">
        我们会尽快联系您的
      </div>
      <div @click="goIndex" class="text-white text-center register btn bg-active" style="display:block;margin-top:60px">
        去首页
      </div>
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
      artistEmail: "",
      country: "国家",
      countryOptions: ["国家","阿尔巴尼亚","阿尔及利亚","阿富汗","阿根廷","阿拉伯联合酋长国","阿鲁巴","阿曼","阿塞拜疆","埃及","埃塞俄比亚","爱尔兰","爱沙尼亚","安道尔","安哥拉","安圭拉","安提瓜和巴布达","奥地利","奥兰群岛","澳大利亚","巴巴多斯","巴布亚新几内亚","巴哈马","巴基斯坦","巴拉圭","巴勒斯坦领土","巴林","巴拿马","巴西","白俄罗斯","百慕大","保加利亚","北马里亚纳群岛","北马其顿","贝宁","比利时","冰岛","波多黎各","波兰","波斯尼亚和黑塞哥维那","玻利维亚","伯利兹","博茨瓦纳","不丹","布基纳法索","布隆迪","布韦岛","朝鲜","赤道几内亚","丹麦","德国","东帝汶","多哥","多米尼加共和国","多米尼克","俄罗斯","厄瓜多尔","厄立特里亚","法国","法罗群岛","法属波利尼西亚","法属圭亚那","法属南部领地","法属圣马丁","梵蒂冈","菲律宾","斐济","芬兰","佛得角","福克兰群岛","冈比亚","刚果（布）","刚果（金）","哥伦比亚","哥斯达黎加","格林纳达","格陵兰","格鲁吉亚","根西岛","古巴","瓜德罗普","关岛","圭亚那","哈萨克斯坦","海地","韩国","荷兰","荷属加勒比区","荷属圣马丁","赫德岛和麦克唐纳群岛","黑山","洪都拉斯","基里巴斯","吉布提","吉尔吉斯斯坦","几内亚","几内亚比绍","加拿大","加纳","加蓬","柬埔寨","捷克","津巴布韦","喀麦隆","卡塔尔","开曼群岛","科科斯（基林）群岛","科摩罗","科特迪瓦","科威特","克罗地亚","肯尼亚","库克群岛","库拉索","拉脱维亚","莱索托","老挝","黎巴嫩","立陶宛","利比里亚","利比亚","列支敦士登","留尼汪","卢森堡","卢旺达","罗马尼亚","马达加斯加","马恩岛","马尔代夫","马耳他","马拉维","马来西亚","马里","马绍尔群岛","马提尼克","马约特","毛里求斯","毛里塔尼亚","美国","美国本土外小岛屿","美属萨摩亚","美属维尔京群岛","蒙古","蒙特塞拉特","孟加拉国","秘鲁","密克罗尼西亚","缅甸","摩尔多瓦","摩洛哥","摩纳哥","莫桑比克","墨西哥","纳米比亚","南非","南极洲","南乔治亚和南桑威奇群岛","南苏丹","瑙鲁","尼加拉瓜","尼泊尔","尼日尔","尼日利亚","纽埃","挪威","诺福克岛","帕劳","皮特凯恩群岛","葡萄牙","日本","瑞典","瑞士","萨尔瓦多","萨摩亚","塞尔维亚","塞拉利昂","塞内加尔","塞浦路斯","塞舌尔","沙特阿拉伯","圣巴泰勒米","圣诞岛","圣多美和普林西比","圣赫勒拿","圣基茨和尼维斯","圣卢西亚","圣马力诺","圣皮埃尔和密克隆群岛","圣文森特和格林纳丁斯","斯里兰卡","斯洛伐克","斯洛文尼亚","斯瓦尔巴和扬马延","斯威士兰","苏丹","苏里南","所罗门群岛","索马里","塔吉克斯坦","台湾","泰国","坦桑尼亚","汤加","特克斯和凯科斯群岛","特立尼达和多巴哥","突尼斯","图瓦卢","土耳其","土库曼斯坦","托克劳","瓦利斯和富图纳","瓦努阿图","危地马拉","委内瑞拉","文莱","乌干达","乌克兰","乌拉圭","乌兹别克斯坦","西班牙","西撒哈拉","希腊","新加坡","新喀里多尼亚","新西兰","匈牙利","叙利亚","牙买加","亚美尼亚","也门","伊拉克","伊朗","以色列","意大利","印度","印度尼西亚","英国","英属维尔京群岛","英属印度洋领地","约旦","越南","赞比亚","泽西岛","乍得","直布罗陀","智利","中非共和国","中国","中国澳门特别行政区","中国香港特别行政区"],

      language: "语言",
      languageOptions: ["语言", "中文", "日语", "西班牙语", "法语", "英语"],
      findUs: "您是如何发现我们的",
      findUsOptions: ["您是如何发现我们的","脸书", "谷歌", "朋友", "其他"],
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
    // artistEmail() {
    //   return this.$store.state.user.info
    //     ? this.$store.state.user.info.email
    //     : "";
    // },
  },
  methods: {
    goIndex() {
      this.$emit('hide-applyArtist');
      this.$router.push(`/${this.$i18n.locale}`);
    },
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
        gallery: this.gallery,
        galleryInfo: this.galleryInfo,
        recommend: this.recommend,
        prize: this.prize,
        website: this.website,
        profile: this.profile,
        country: this.country == "国家" ? '' : this.country,
        language: this.language == "语言" ? '' : this.language,
        findUs: this.findUs == "您是如何发现我们的" ? '' : this.findUs,
        isFullTime: this.isFullTime == "您是一个专业的全职艺术家么？" ? '' : this.isFullTime,
        onlineSell: this.onlineSell == "售出的作品中，网上售出的比例占多少？" ? '' : this.onlineSell,
        sold: this.sold == "您在过去一年里售出多少件自己的作品？" ? '' : this.sold,
        channel: this.channel == "如果您在网上售出过作品，是通过什么渠道呢？" ? '' : this.channel,
        medium: this.medium == "主要媒介" ? '' : this.medium,
      });
      console.log("applyArtist", applyArtist);
      if (applyArtist && applyArtist.success) {
        // this.icon3 = false;

        // await this.$store.commit('user/setUserInfo', applyArtist.data);
        // this.$q.cookies.set('user.info', applyArtist.data)

        let storageUserInfo = this.$q.cookies.get("userInfo");

        if(storageUserInfo && storageUserInfo != 'null' && storageUserInfo != 'undefined') {

          storageUserInfo.isApplyArtist = true;
        }else{
          storageUserInfo = Object.assign(applyArtist.data, {
            isApplyArtist: true
          })
        }

        this.$q.cookies.set("userInfo", storageUserInfo, {
            expires: 1,
            path: "/",
          });

          await this.$store.commit("user/setUserInfo", storageUserInfo);
        // this.$q.cookies.set("userInfo", storageUserInfo, {
        //   expires: 1,
        //   path: "/",
        // });
        // this.$emit('hide-applyArtist')

        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "申请成功",
          color: "positive",
        });
        this.mode = 'page3';
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
.applyArtistPop{
  .applyArtist-title{

  }
  .applyArtist-content{
    padding: 10px 20px 0 20px;
  }
}
.card {
  border-radius: 0;
  padding: 20px 50px;
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
.my-special-class{
  width: 100px;
}

.success {
  width: 485px;
  height: 424px;
  .quotation {
    font-size: 88px;
    font-family: "Hei";
    color: rgba(21, 44, 43, 0.102);
    line-height: 1.2;
    text-align: center;
    transform: matrix(5.563888314405, 0, 0, 5.563888314405, 0, 0);
    -moz-transform: matrix(5.563888314405, 0, 0, 5.563888314405, 0, 0);
    -webkit-transform: matrix(5.563888314405, 0, 0, 5.563888314405, 0, 0);
    -ms-transform: matrix(5.563888314405, 0, 0, 5.563888314405, 0, 0);
    position: absolute;
    left: -102px;
    top: 153px;
    z-index: 101;
  }
  .title {
    font-size: 24px;
    font-family: "STFangsong";
    margin: 20px 0 20px 0;
    padding-left: 14px;
    font-weight: bold;
  }
  .content {
    font-size: 16px;
    font-family: "STFangsong";
    letter-spacing: 0.5px;
  }
}
</style>
