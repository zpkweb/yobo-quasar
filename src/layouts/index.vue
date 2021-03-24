<template>
  <q-layout class="app">
    <q-header>
    <div class="bg-white nav relative-position">
      <div class="header row text-black relative-position">
        <div class="col">
          <q-img
            src="~assets/images/logo.png"
            class="logo btn"
            width="170px"
            @click="goIndex"
          ></q-img>
          <div class="choose-language-container">
            <q-btn
              size="xs"
              rounded
              flat
              class="choose-language btn"
              v-if="lang"
              >{{ lang.value }}</q-btn
            >
          </div>

          <div class="dropdown1">
            <div class="dropdowncontent1 absolute">
              <div class="items">
                <div
                  class="item"
                  v-for="(item, index) in $store.state.langOptions"
                  :key="`dropdown1-${index}`"
                  @click="changeLang(item)"
                >
                  {{ item.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-grow">
          <div
            class="artist-register btn"
            @click="isApplyArtistPop = true"
            v-if="!isApplyArtist"
          >
            {{ $t("layout.header.BecomeAnArtist") }}
          </div>
          <q-breadcrumbs separator="|" class="separator" v-if="!userInfo">
            <q-breadcrumbs-el
              :label="$t('layout.header.login')"
              class="login text-black btn"
              @click="isLoginPop = true"
            />
            <q-breadcrumbs-el
              :label="$t('layout.header.registered')"
              class="register btn"
              @click="isRegisterPop = true"
            />
          </q-breadcrumbs>

          <div class="username btn" v-if="userInfo">
            {{ userInfo.name || (isApplyArtist ? "艺术家" : "收藏家") }}
          </div>
          <div class="dropdown2">
            <div class="dropdowncontent2 absolute">
              <div class="items">
                <div class="item" @click="goMine">
                  {{ $t("layout.header.PersonalCenter") }}
                </div>
                <div class="item" @click="logout">
                  {{ $t("layout.header.Signout") }}
                </div>
              </div>
            </div>
          </div>

          <div class="search btn text-center" @click="isSearch = true">
            <q-img
              src="~assets/images/search.png"
              class="image"
              width="21px"
            ></q-img>
          </div>

          <!-- <div class="cart btn text-center">
            <q-img src="~assets/images/cart.png" class="image" width="17px"></q-img>
            <div class="num absolute btn text-white text-center">2</div>
          </div> -->

          <div class="dropdown3">
            <div class="dropdowncontent3 absolute">
              <div class="items">
                <div class="after"></div>
                <div class="item row btn">
                  <div class="image col-grow"></div>
                  <div class="col desc">Unelashed Flame</div>
                </div>
                <div class="item row btn">
                  <div class="image image2 col-grow"></div>
                  <div class="col desc">Arbeiten in Lack</div>
                </div>
                <div class="pay">
                  <div class="paybtn text-center text-white btn">
                    {{ $t("layout.header.BillPlease") }}
                  </div>
                </div>
                <!-- <div class="text-center null">您的购物车是空的</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </q-header>
    <q-page-container class=".rv">
      <router-view></router-view>
    </q-page-container>

    <q-footer >
      <div class="footer text-white" v-if="$route.name != 'Artworks'">
        <div class="container row">
          <div class="col-9 row">
            <div class="col-3 item">
              <div class="title">{{ $t("layout.footer.customerService") }}</div>
              <div>{{ $t("layout.footer.contactUs") }}</div>
              <div>{{ $t("layout.footer.LegalNotices") }}</div>
              <div>{{ $t("layout.footer.GeneralRegulations") }}</div>
              <div v-if="$store.state.isShowPay">
                {{ $t("layout.footer.CustomerReviews") }}
              </div>
              <div v-if="$store.state.isShowPay">Offer a Gift Card</div>
              <div v-if="$store.state.isShowPay">
                {{ $t("layout.footer.GetMyVoucher") }}
              </div>
              <div>{{ $t("layout.footer.myAccount") }}</div>
              <div>{{ $t("layout.footer.OfficeArtwork") }}</div>
              <div>{{ $t("layout.footer.DesignerArtwork") }}</div>
              <div v-if="$store.state.isShowPay">+44 203 445 6333</div>
            </div>
            <div class="col-3 item">
              <div class="title">{{ $t("layout.footer.aboutAs") }}</div>
              <router-link class="footer-link-color" :to="`/${$i18n.locale}/about`">{{ $t("layout.footer.AboutYongbao") }}</router-link>
              <div>{{ $t("layout.footer.OurArtist") }}</div>
              <div>{{ $t("layout.footer.magazine") }}</div>
              <div>{{ $t("layout.footer.team") }}</div>
              <router-link class="footer-link-color" :to="`/${$i18n.locale}/criteria`">{{ $t("layout.footer.OurSelectionCriteria") }}</router-link>
              <div class="cursor-pointer" @click="showHelp = true">{{ $t("layout.footer.commonProblem") }}</div>
              <div>{{ $t("layout.footer.ContactInformation") }}</div>
            </div>
            <div class="col-3 item">
              <div class="title">{{ $t("layout.footer.FeaturedArtist") }}</div>
              <div>Kirstin Mccoy</div>
              <div>Josep Moncada</div>
              <div>Ivan Pili</div>
              <div>Kristin Kossi</div>
              <div>Peter Nottrott</div>
            </div>
            <div class="col-3 item">
              <div class="title">{{ $t("layout.footer.FollowYongbao") }}</div>
              <div>{{ $t("layout.footer.WeChat") }}</div>
              <div>{{ $t("layout.footer.Weibo") }}</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Pinterest</div>
            </div>
          </div>

          <div class="col-3">
            <div class="title book">
              {{ $t("layout.footer.SubscribetoYongbaoElectronicNews") }}
            </div>
            <div class="privacy-policy">
              <!-- 通过订阅，即代表您接受永宝的<span class="btn">隐私政策条款</span> -->
              {{ $t("layout.footer.BySubscribing") }}
            </div>
            <div class="row mail">
              <div class="col">
                <input class="footer-email" v-model="footerEmail" :placeholder="$t('layout.footer.emailAddress')" />
              </div>
              <div class="col-grow row " @click="footerEmailSubmit">
                <q-img
                  src="~assets/images/arrow-right.png"
                  width="21px"
                  class="getmail cursor-pointer"

                ></q-img>
              </div>
            </div>

            <div class="title pay">
              {{ $t("layout.footer.SupportedPaymentMethods") }}
            </div>
            <div class="row pay1">
              <div class="col-3">
                <q-img src="~assets/images/zfb.png" width="60px"></q-img>
              </div>

              <div class="col-3" v-if="$store.state.isShowPay">
                <q-img src="~assets/images/visa.png" width="60px"></q-img>
              </div>
              <div class="col-3" v-if="$store.state.isShowPay">
                <q-img src="~assets/images/paypal.png" width="60px"></q-img>
              </div>
            </div>
            <q-img
              v-if="$store.state.isShowPay"
              src="~assets/images/mastercard.png"
              width="140px"
              contain
            ></q-img>
          </div>
          <div class="col-12 row bottom">
            <div class="col-3 footer-link-color-grey" v-if="$store.state.isShowPay">
              {{ $t("layout.footer.AllRightsReserved") }}
            </div>
            <div class="col-2">
              <a
                target="_blank"
                href="https://beian.miit.gov.cn/"
                class="footer-link-color-grey"
                >{{ $t("layout.footer.ICPNo") }}</a
              >
            </div>
            <div class="col-3">
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202009337"
                class="footer-link-color-grey"
                ><q-img
                  src="~assets/images/police.png"
                  width="12px"
                  class="img"
                  style="margin-right: 5px;vertical-align: -2px;"
                ></q-img
                >{{ $t("layout.footer.PublicNetworkSecurityNo") }}</a
              >
            </div>

          </div>
        </div>
      </div>
      <template v-if="$route.name == 'criteria'">
      <div class="footer-criteria" v-if="!showFooterCriteria && !isApplyArtist">
        <Banner class="criteria-module-footer">
          <template v-slot:bgImg>
            <q-img class="banner-bg-img" src="~assets/images/criteria-footer-ar-bg.png" />
          </template>
          <q-btn icon="close" class="banner-close icon-close" flat round dense v-close-popup @click="showFooterCriteria = true" />
          <h3 class="banner-title title text-bold">您是艺术家么？</h3>
          <p class="banner-desc q-mt-md">如果对我们感兴趣，跟我们做个自我介绍 吧！我们会<br/>仔细审核您的履历，并在2周内给您答复</p>
          <div class="banner-btn q-mt-lg" @click="isApplyArtistPop = true">申请</div>
        </Banner>
      </div>
      </template>
    </q-footer>
    <!-- 登录 -->
    <q-dialog
      v-model="isLoginPop"
      transition-hide="fade"
      transition-show="fade"
    >
      <Login
        v-on:show-register="showRegister"
        v-on:hide-login="hideLogin"
        v-on:show-new-password="showNewPassword"
        v-on:hide-isApplyArtist="hideIsApplyArtist"
      />
    </q-dialog>
    <!-- 注册 -->
    <q-dialog
      v-model="isRegisterPop"
      transition-hide="fade"
      transition-show="fade"
    >
      <Register v-on:show-login="showLogin" />
    </q-dialog>
    <!-- 成为艺术家 -->
    <q-dialog
      v-model="isApplyArtistPop"
      transition-hide="fade"
      transition-show="fade"
    >
      <ApplyArtist v-on:hide-applyArtist="hideApplyArtist" v-on:hide-isApplyArtist="hideIsApplyArtist" />
    </q-dialog>
    <!-- 搜索 -->
    <q-dialog v-model="isSearch" transition-hide="fade" transition-show="fade">
      <Search />
    </q-dialog>
    <!-- 忘记密码 -->
    <q-dialog
      v-model="isNewPasswordPop"
      transition-hide="fade"
      transition-show="fade"
    >
      <NewPassword
        v-on:hide-login="hideLogin"
        v-on:hide-new-password="hideNewPassword"
      />
    </q-dialog>
    <!-- 帮助 -->
    <q-dialog class="" maximized v-model="showHelp" full-height position="right" transition-hide="fade" transition-show="fade">
      <Help />
    </q-dialog>
  </q-layout>
</template>

<script>
import * as ApiUser from "src/api/user.js";
import * as utils from "src/api/utils.js";
import * as loclist from "../assets/loclist.json";
import Login from "src/components/login";
import Register from "src/components/register";
import ApplyArtist from "src/components/applyArtist";
import Search from "src/components/search";
import NewPassword from "src/components/newPassword";
import Banner from "src/components/banner";
import Help from "src/components/help";

export default {
  components: {
    Login,
    Register,
    ApplyArtist,
    Search,
    NewPassword,
    Banner,
    Help
  },
  data() {
    return {
      lang: this.$store.state.lang,
      // userInfo: utils.getGlobalUserInfo(),

      step: 1,
      right: false,
      icon1: false,
      icon2: false,
      icon3: false,
      icon4: false,
      icon5: false,
      icon6: false,
      msg: "",
      msg2: "",
      msg3: "",
      mode: "page1",
      name: "",
      email: "",
      phone: "",
      password: "",

      newPassword: "",
      countries: "",
      loclist: "",
      registerMsg1: "",
      registerMsg2: "",
      registerMsg3: "",
      isLoginPop: false,
      isRegisterPop: false,
      isApplyArtistPop: false,
      isApplyArtist: false,
      isSearch: false,
      isNewPasswordPop: false,
      showFooterCriteria: false,
      showHelp: false,
      footerEmail: ""
    };
  },
  watch: {
    lang(lang) {
      console.log("watch lang", lang);
      this.$i18n.locale = lang.locale;
      this.$router.push({
        params: {
          locale: lang.locale,
        },
        query: this.$route.query,
      });
    },
  },

  preFetch({ store, currentRoute, redirect }) {
    console.log("layout preFetch", currentRoute.params);

    store.commit("setLang", currentRoute.params.locale);
    // if (!store.state.user.info) {
    //   redirect({ path: '/' })
    // }
  },

  computed: {
    userInfo() {
      return this.$store.state.user.info;
    },
    // isApplyArtist() {
    //   let isApplyArtist = false;
    //   const userInfo = this.$q.cookies.get("userInfo");
    //   if (userInfo) {
    //     console.log("userInfo", userInfo)
    //     isApplyArtist = userInfo.isApplyArtist;
    //   }else{
    //     if(this.$store.state.user.info){
    //       isApplyArtist = this.$store.state.user.info.isApplyArtist
    //     }
    //   }

    //   return isApplyArtist;
    // },
  },

  async beforeCreate() {
    console.log("layout created", this.$i18n.locale, this.$store.state.lang);

    this.$i18n.locale = this.$store.state.lang
      ? this.$store.state.lang.locale
      : "zh-cn";
    const userInfo = this.$q.cookies.get("userInfo");
    if (userInfo) {
      if (userInfo.userId) {
        const getUserInfo = await this.$store.dispatch("user/getUserInfo", {
          userId: userInfo.userId,
        });
        console.log("getUserInfo", getUserInfo);
        // this.$store.commit('user/setUserInfo', getUserInfo.data);
      }
    } else {
      // this.$router.push('/')
    }
  },
  mounted() {
    console.log("layout mounted", this.$i18n.locale, this.$store.state.lang);
    this.$q.cookies.set(
      "test",
      { test: 111 },
      {
        expires: 1,
        path: "/",
      }
    );
    let isApplyArtist = false;
      const userInfo = this.$q.cookies.get("userInfo");
      if (userInfo && userInfo.seller) {
        isApplyArtist = true
      }
    this.isApplyArtist = isApplyArtist;
  },
  methods: {
    changeLang(item) {
      console.log("changelang", item);
      this.lang = item;
    },

    goIndex() {
      this.$router.push(`/${this.$i18n.locale}`);
    },
    showLogin() {
      this.isRegisterPop = false;
      this.isLoginPop = true;
    },
    hideLogin() {
      this.isLoginPop = false;
    },
    showRegister() {
      this.isLoginPop = false;
      this.isRegisterPop = true;
    },
    hideRegister() {
      this.isRegisterPop = false;
    },
    showApplyArtist() {},
    hideApplyArtist() {
      this.isApplyArtistPop = false;
    },
    hideIsApplyArtist() {
      this.isApplyArtist = true;
    },
    showNewPassword() {
      this.isLoginPop = false;
      this.isNewPasswordPop = true;
    },
    hideNewPassword() {
      this.isNewPasswordPop = false;
      this.isLoginPop = true;
    },

    getPassword() {
      this.icon1 = false;
      this.icon5 = true;
    },
    goMine() {
      this.$router.push(`/${this.$i18n.locale}/mine/`);
    },

    logout() {
      this.isApplyArtist = false;

      this.$store.commit("user/setUserInfo", null);
      this.$q.cookies.remove("token", {
        path: "/",
      });
      this.$q.cookies.remove("userInfo", {
        path: "/",
      });
      this.$router.push("/");

    },
    async setNewPassword() {
      let res = await ApiUser.setNewPassword(
        this.userId,
        this.email,
        this.phone,
        this.password
      );
    },

    async getVerifyCode() {
      let res = await ApiUser.getVerifyCode(this.email);
    },
    async sendVerifyCode() {
      // let res;
    },
    async setNewPassword() {},
    async footerEmailSubmit() {

      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!verify.test(this.footerEmail)) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "请输入正确的邮箱！",
          color: "negative",
        });
      }else{
        if(!this.$store.state.user.info) {
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "请登录！",
            color: "negative",
          });
        }
        // 订阅
        const subscriber = await this.$store.dispatch("home/subscriber", {
          email: this.footerEmail,
          userId: this.$store.state.user.info.userId
        })
        if(subscriber.success) {
          this.footerEmail = "";
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: "订阅成功",
            color: "positive",
          });
        }else{
          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: subscriber.message,
            color: "negative",
          });
        }

      }
    }
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
body {
  font-family: "Heiti SC";
}
.content-width{
  width: 1220px;
}
.title {
  font-family: "STFangsong";
}
.app {
  min-width: 1200px;
  /* font-family: "STFangsong"; */
}

.btn {
  cursor: pointer;
}
.mt10 {
  margin-top: 10px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.overflow {
  overflow: hidden;
}
.hide {
  display: none;
}
.border-active {
  border: 1px solid rgb(21, 44, 43) !important;
}

.icon-close {
  transition: transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  -webkit-transition: -webkit-transform 0.5s;
  -o-transition: -o-transform 0.5s;
}
.icon-close:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}

/* quasar layout css */
.bg-active {
  background-color: #152c2b !important;
}
.text-brand {
  color: #1b2d2b;
}
.bg-brand {
  background: #d6d7c5;
}


.text-d6d7c5 {
  color: #d6d7c5;
}
.bg-default {
  background: #d6d7c5;
}

.text-default {
  color: #152c2b;
}
.bg-default {
  background: #152c2b;
}

.q-field--outlined .q-field__control:after {
  border-width: 1px !important;
}

.footer-link-color {
  color: #fff;
}
.footer-link-color-grey{
  color: #999999;
}

.q-tabs--not-scrollable .q-tabs__content {
  flex-wrap: wrap;
  justify-content: left;
}
</style>
<style lang="scss">
.footer-criteria{
  height: 292px;
  background-color: #232323;
}
.app .criteria-module-footer{
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  .banner-close{
    position: absolute;
    top: 42px;
    left: 50%;
    color: #252221;
    margin-left: 470px;
  }
  .banner-title{
    font-size: 24px;
    color: #000;
  }
  .banner-desc{
    font-size: 16px;
    color: #000;
  }
  .banner-btn{
    width: 213px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 24px;
    color: #d6d7c5;
    background-color: #152c2b;
    cursor: pointer;
  }
}
</style>
<style lang="sass">

.flex-break
  flex: 1 0 100% !important
.row
  .flex-break
    height: 0 !important
.column
  .flex-break
    width: 0 !important

.q-placeholder
  &::-webkit-input-placeholder
    color: #a2a2a2

  &::-moz-placeholder
    color: #a2a2a2

  &:-ms-input-placeholder
    color: #a2a2a2 !important
  &::-ms-input-placeholder
    color: #a2a2a2

  &::placeholder
    color: #a2a2a2

body.desktop
  .q-checkbox:not(.disabled)
    .q-checkbox__inner:before
      content: ''
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      border-radius: 50%
      background: currentColor
      // opacity: .12
      opacity: 0
      transform: scale3d(0, 0, 1)
      transition: transform $option-focus-transition
    &:focus,
    &:hover
      .q-checkbox__inner:before
        transform: scale3d(1, 1, 1)
  .q-checkbox--dense:not(.disabled)
    &:focus,
    &:hover
      .q-checkbox__inner:before
        transform: scale3d(1.4, 1.4, 1)
body.desktop
  .q-focus-helper
    position: absolute
    top: 0
    left: 0 #{"/* rtl:ignore */"}
    width: 100%
    height: 100%
    pointer-events: none
    border-radius: inherit
    opacity: 0
    transition: background-color .3s cubic-bezier(.25,.8,.5,1), opacity .4s cubic-bezier(.25,.8,.5,1)

    &:before, &:after
      content: ''
      position: absolute
      top: 0
      left: 0 #{"/* rtl:ignore */"}
      width: 100%
      height: 100%
      opacity: 0
      border-radius: inherit
      transition: background-color .3s cubic-bezier(.25,.8,.5,1), opacity .6s cubic-bezier(.25,.8,.5,1)
    &:before
      background: #000
    &:after
      background: #fff
    &--rounded
      border-radius: $generic-border-radius
    &--round
      border-radius: 50%
  .q-focusable, .q-manual-focusable, .q-hoverable
    outline: 0
  .q-focusable:focus, .q-manual-focusable--focused, .q-hoverable:hover
    > .q-focus-helper
      background: currentColor
      // opacity: .15
      opacity: 0

      &:before
        // opacity: .1
        opacity: 0
      &:after
        // opacity: .4
        opacity: 0
  .q-focusable:focus, .q-manual-focusable--focused
    > .q-focus-helper
      // opacity: .22
      opacity: 0

.q-ripple
  position: absolute
  top: 0
  left: 0 #{"/* rtl:ignore */"}
  // width: 100%
  width: 0
  // height: 100%
  height: 0
  color: inherit
  border-radius: inherit
  z-index: 0
  pointer-events: none
  overflow: hidden
  contain: strict
  &__inner
    position: absolute
    top: 0
    left: 0 #{"/* rtl:ignore */"}
    opacity: 0
    color: inherit
    border-radius: 50%
    background: currentColor
    pointer-events: none
    will-change: transform, opacity
    &--enter
      transition: transform .225s cubic-bezier(.4, 0, .2, 1), opacity .1s cubic-bezier(.4, 0, .2, 1)
    &--leave
      transition: opacity .25s cubic-bezier(.4, 0, .2, 1)
</style>
<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.rv {
  flex-grow: 1;
  overflow: auto;
  min-width: 1220px;
}
.btn {
  cursor: pointer;
}
.nav {
  flex-grow: 0;
  position: relative;
  line-height: 70px;
  background-color: rgb(68, 68, 173);
  box-shadow: 0 0 15px #c5cbcb;
}
.header {
  line-height: 70px;
  height: 70px;
  margin: 0 auto;
  width: 1220px;
  padding: 0 20px;
  color: #152c2b;
  .username {
    display: inline-block;
    font-size: 18px;
    margin: 0 12px 0 15px;
    min-width: 50px;
    text-align: center;
  }

  .username:hover + .dropdown2 {
    display: inline-block;
  }

  .logo {
    margin-right: 30px;
  }
  .choose-language {
    background-color: #d6d7c5;
    padding: 0;
  }
  .choose-language::v-deep {
    .q-btn__wrapper {
      width: 52px;
    }
    .q-btn__content {
      font-size: 16px;
      padding: 2px 0;
    }
  }
  .login,
  .register,
  .separator,
  .artist-register {
    font-size: 18px;
  }
  .separator,
  .artist-register {
    display: inline-block;
    margin-left: 14px;
  }
  .separator {
    padding-right: 10px;
  }
  .search,
  .cart {
    display: inline-block;
    width: 38px;
    height: 70px;
    .image {
      margin-bottom: 4px;
    }
  }
}
.footer {
  font-family: "STFangsong";
  background-color: #232323;
  padding: 60px 0;
  font-size: 14px;
  .container {
    width: 1220px;
    margin: 0 auto;
    .title {
      font-size: 18px;
      color: #817f7f;
      letter-spacing: 1px;
    }
    .item div {
      padding: 3px 0;
    }
    .book {
      letter-spacing: 5px;
      padding-bottom: 5px;
    }
    .privacy-policy {
      padding-bottom: 16px;
      span {
        text-decoration: underline #6c6c6c;
      }
    }
    .mail {
      padding: 10px;
      background-color: #000;
      margin-bottom: 16px;
      .getmail {
        vertical-align: baseline;
      }
    }
    .pay {
      padding-bottom: 10px;
    }
    .pay1 {
      margin-bottom: 5px;
    }
    .bottom {
      padding: 40px 0 30px 0;
      border-bottom: 1px solid rgba(#817f7f, 0.2);
      .image {
        padding-right: 3px;
      }
      .img {
        vertical-align: baseline;
      }
    }
  }
}

.choose-language-container {
  display: inline-block;
}
.choose-language-container:hover + .dropdown1 {
  display: inline-block;
}
.dropdown1 {
  position: relative;
  top: -5px;
  left: -5px;
  background-color: #fff;
  display: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -36px;
    z-index: 9999;
    width: 0;
    height: 0;
    border: solid 15px;
  }
  &::before {
    border-color: transparent transparent #ddd transparent;
  }
  &::after {
    top: 1px;
    border-color: transparent transparent #fff transparent;
  }

  &:hover {
    display: inline-block;
  }
  .dropdowncontent1 {
    background: #fff;
    left: -146px;
    top: 29px;
    z-index: 1000;
    padding-top: 2px;
    .items {
      box-shadow: 0px 3px 7px 0px rgba(21, 44, 43, 0.4);
      .after {
        cursor: pointer;
        position: absolute;
        display: inline-block;
        top: -10px;
        left: 142px;
        width: 0;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 10px;
        border-color: #fff #fff transparent transparent;
        transform: rotate(-45deg);
        box-shadow: 2px -2px 2px rgba(21, 44, 43, 0.1);
      }
    }
    .item {
      padding: 0 20px;
      width: 190px;
      text-align: left;
      white-space: nowrap;
      line-height: 48px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #d6d7c5;
      }
    }
  }
}

.dropdown2 {
  display: none;
  &:hover {
    display: inline-block;
  }
  .dropdowncontent2 {
    background: transparent;
    right: 63px;
    top: 67px;
    z-index: 1000;

    .items {
      box-shadow: 0px 3px 7px 0px rgba(21, 44, 43, 0.4);
      .after {
        cursor: pointer;
        position: absolute;
        display: inline-block;
        top: -10px;
        left: 142px;
        width: 0;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 10px;
        border-color: #fff #fff transparent transparent;
        transform: rotate(-45deg);
        box-shadow: 2px -2px 2px rgba(21, 44, 43, 0.1);
      }
    }
    .item {
      padding: 0 20px;
      width: 190px;
      text-align: left;
      white-space: nowrap;
      line-height: 48px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #d6d7c5;
      }
    }
  }
}

.cart:hover + .dropdown3 {
  display: block;
}
.num {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #152c2b;
  top: 32px;
  left: 1182px;
  line-height: 17px;
  font-weight: bolder;
  font-size: 12px;
}
.dropdown3 {
  display: none;
  &:hover {
    display: block;
  }
  .dropdowncontent3 {
    z-index: 1000;
    white-space: nowrap;
    width: 280px;
    left: 938px;
    top: 62px;
    background-color: #fff;
    box-shadow: 0px 3px 7px 0px rgba(21, 44, 43, 0.4);
    .items {
      padding-bottom: 10px;
      background-color: white;
      .item {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #fff;
        &:hover {
          background-color: #d6d7c5;
        }
        .image {
          background: url("~assets/images/cart1.png") center center no-repeat;
          background-size: contain;
          width: 40px;
          height: 40px;
          margin: 25px 30px;
        }
        .image2 {
          background-image: url("~assets/images/cart1.png");
        }
      }
      .desc {
        line-height: 80px;
      }
      .after {
        cursor: pointer;
        position: absolute;
        display: inline-block;
        top: -10px;
        left: 232px;
        width: 0;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 10px;
        border-color: #fff #fff transparent transparent;
        transform: rotate(-45deg);
        box-shadow: 2px -2px 2px rgba(21, 44, 43, 0.1);
      }
      .pay {
        line-height: 40px;
        width: 240px;
        margin: 0 auto;
        .paybtn {
          background-color: #152c2b;
          font-weight: bolder;
          font-size: 18px;
          margin: 35px 20px 0 20px;
        }
      }
      .null {
        padding: 30px 0 0 0;
      }
    }
  }
}

.card2 {
  padding: 40px 80px 40px 120px;
  max-width: none;
  width: 800px;
  font-family: "STFangsong";
  .title {
    font-size: 18px;
  }
  .image {
    background: url("~assets/images/search.png") no-repeat;
    width: 21px;
    height: 21px;
    vertical-align: middle;
    bottom: 5px;
  }
  .input2 {
    border: none;
    border-bottom: 1px solid rgba(21, 44, 43, 0.2);
    outline: none;
    display: inline-block;
    padding-left: 25px;
    width: 400px;
  }
  .search2 {
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

.card1 {
  padding: 0;
}
.success {
  width: 485px;
  height: 374px;
  background: url("~assets/images/login-success-bg.png") center center no-repeat;
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
    margin-bottom: 30px;
    margin-top: 26px;
    padding-left: 14px;
  }
  .content {
    font-size: 16px;
    font-family: "STFangsong";
    letter-spacing: 0.5px;
  }
}
.footer-email{
  border: 0;
  outline: none;
  width: 100%;
  color: #fff;
  background-color: transparent;
}
</style>








