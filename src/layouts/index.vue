<template>
  <q-layout class="app">
    <div class="bg-white nav relative-position">
      <div class="header row text-black relative-position">
        <div class="col">
          <q-img
            src="img/index/logo.png"
            class="logo btn"
            width="170px"
            @click="goIndex"
          ></q-img>
          <div class="choose-language-container">
            <q-btn size="xs" rounded flat class="choose-language btn" v-if="lang">{{lang.value}}</q-btn>
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
          <div class="artist-register btn" @click="isApplyArtistPop = true" v-if="!isApplyArtist">
            {{$t('layout.header.BecomeAnArtist')}}
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

          <div class="username btn" v-if="userInfo" >
            {{ userInfo.name }}
          </div>
          <div class="dropdown2">
            <div class="dropdowncontent2 absolute">
              <div class="items">
                <div class="item" @click="goMine">
                  {{$t('layout.header.PersonalCenter')}}
                </div>
                <div class="item" @click="logout">
                  {{$t('layout.header.Signout')}}
                </div>
              </div>
            </div>
          </div>

          <div class="search btn text-center" @click="isSearch = true">
            <q-img
              src="img/index/search.png"
              class="image"
              width="21px"
            ></q-img>
          </div>

          <!-- <div class="cart btn text-center">
            <q-img src="img/index/cart.png" class="image" width="17px"></q-img>
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
                  <div class="paybtn text-center text-white btn">{{$t('layout.header.BillPlease')}}</div>
                </div>
                <!-- <div class="text-center null">您的购物车是空的</div> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="rv">
      <router-view></router-view>
      <div class="footer text-white" v-if="$route.name != 'Artworks'">
        <div class="container row">
          <div class="col-9 row">
            <div class="col-3 item">
              <div class="title">{{$t('layout.footer.customerService')}}</div>
              <div>{{$t('layout.footer.contactUs')}}</div>
              <div>{{$t('layout.footer.LegalNotices')}}</div>
              <div>{{$t('layout.footer.GeneralRegulations')}}</div>
              <!-- <div>{{$t('layout.footer.CustomerReviews')}}</div> -->
              <!-- <div>Offer a Gift Card</div>
              <div>{{$t('layout.footer.GetMyVoucher')}}</div>
              <div>{{$t('layout.footer.myAccount')}}</div> -->
              <div>{{$t('layout.footer.OfficeArtwork')}}</div>
              <div>{{$t('layout.footer.DesignerArtwork')}}</div>
              <!-- <div>+44 203 445 6333</div> -->
            </div>
            <div class="col-3 item">
              <div class="title">{{$t('layout.footer.aboutAs')}}</div>
              <div>{{$t('layout.footer.AboutYongbao')}}</div>
              <div>{{$t('layout.footer.OurArtist')}}</div>
              <div>{{$t('layout.footer.magazine')}}</div>
              <div>{{$t('layout.footer.team')}}</div>
              <div>{{$t('layout.footer.OurSelectionCriteria')}}</div>
              <div>{{$t('layout.footer.commonProblem')}}</div>
              <div>{{$t('layout.footer.ContactInformation')}}</div>
            </div>
            <div class="col-3 item">
              <div class="title">{{$t('layout.footer.FeaturedArtist')}}</div>
              <!-- <div>Kirstin Mccoy</div> -->
              <div>Josep Moncada</div>
              <div>Ivan Pili</div>
              <div>Kristin Kossi</div>
              <div>Peter Nottrott</div>
            </div>
            <div class="col-3 item">
              <div class="title">{{$t('layout.footer.FollowYongbao')}}</div>
              <div>{{$t('layout.footer.WeChat')}}</div>
              <div>{{$t('layout.footer.Weibo')}}</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Pinterest</div>
            </div>
          </div>

          <div class="col-3">
            <div class="title book">{{$t('layout.footer.SubscribetoYongbaoElectronicNews')}}</div>
            <div class="privacy-policy">
              <!-- 通过订阅，即代表您接受永宝的<span class="btn">隐私政策条款</span> -->
              {{$t('layout.footer.BySubscribing')}}
            </div>
            <div class="row mail">
              <div class="col">{{$t('layout.footer.emailAddress')}}</div>
              <div class="col-grow">
                <q-img
                  src="img/index/nextpage.png"
                  width="5px"
                  class="getmail"
                ></q-img>
              </div>
            </div>

            <!-- <div class="title pay">{{$t('layout.footer.SupportedPaymentMethods')}}</div>
            <div class="row pay1">
              <div class="col-3">
                <q-img src="img/index/zfb.png" width="60px"></q-img>
              </div>
              <div class="col-3">
                <q-img src="img/index/visa.png" width="60px"></q-img>
              </div>
              <div class="col-3">
                <q-img src="img/index/paypal.png" width="60px"></q-img>
              </div>
            </div>
            <q-img src="img/index/mastercard.png" width="140px" contain></q-img> -->
          </div>
          <!-- <div class="col-12 row bottom">
            <div class="col-4">{{$t('layout.footer.AllRightsReserved')}}</div>
            <div class="col-3">{{$t('layout.footer.ICPNo')}}</div>
            <div class="col-3 row">
              <div class="col-grow image">
                <q-img
                  src="img/index/police.png"
                  width="12px"
                  class="img"
                ></q-img>
              </div>
              <div class="col">{{$t('layout.footer.PublicNetworkSecurityNo')}}</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <q-dialog v-model="isLoginPop" transition-hide="fade" transition-show="fade">
      <Login v-on:show-register="showRegister" v-on:hide-login="hideLogin" v-on:show-new-password="showNewPassword" />
    </q-dialog>
    <!-- 注册 -->
    <q-dialog v-model="isRegisterPop" transition-hide="fade" transition-show="fade">
      <Register v-on:show-login="showLogin" />
    </q-dialog>
    <!-- 成为艺术家 -->
    <q-dialog v-model="isApplyArtistPop" transition-hide="fade" transition-show="fade">
      <ApplyArtist  v-on:hide-applyArtist="hideApplyArtist" />
    </q-dialog>
    <!-- 搜索 -->
    <q-dialog
      v-model="isSearch"
      transition-hide="fade"
      transition-show="fade"
    >
      <Search />
    </q-dialog>
    <!-- 忘记密码 -->
    <q-dialog v-model="isNewPasswordPop" transition-hide="fade" transition-show="fade">
      <NewPassword v-on:hide-login="hideLogin" v-on:hide-new-password="hideNewPassword" />
    </q-dialog>

  </q-layout>
</template>

<script>
import * as ApiUser from "src/api/user.js";
import * as utils from "src/api/utils.js";
import * as loclist from "../assets/loclist.json";
import Login from 'src/components/login';
import Register from 'src/components/register';
import ApplyArtist from 'src/components/applyArtist';
import Search from 'src/components/search';
import NewPassword from 'src/components/newPassword';

export default {
  components: {
    Login,
    Register,
    ApplyArtist,
    Search,
    NewPassword
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
      isSearch: false,
      isNewPasswordPop: false
    };
  },
  watch: {
    lang(lang) {
      console.log("watch lang", lang)
      this.$i18n.locale = lang.locale;
      this.$router.push({
        params: {
          locale: lang.locale
        },
        query: this.$route.query
      })
    },
  },

  preFetch({ store, currentRoute, redirect }) {
    console.log("layout preFetch", currentRoute.params)

    store.commit("setLang", currentRoute.params.locale)
    // if (!store.state.user.info) {
    //   redirect({ path: '/' })
    // }

  },
  computed: {
    userInfo () {
      return this.$store.state.user.info
    },
    isApplyArtist() {
      return this.$store.state.user.info ? this.$store.state.user.info.seller : false
    }
  },

  async created() {
    console.log("layout created", this.$i18n.locale, this.$store.state.lang)

    this.$i18n.locale = this.$store.state.lang ? this.$store.state.lang.locale : 'zh-cn';
    const userInfo = this.$q.cookies.get('userInfo');
    if(userInfo) {
      if(userInfo.userId){
        const getUserInfo = await this.$store.dispatch('user/getUserInfo', {
          userId: userInfo.userId
        })
        console.log("getUserInfo", getUserInfo)
        // this.$store.commit('user/setUserInfo', getUserInfo.data);

      }

    }else{
      // this.$router.push('/')
    }
  },
  mounted() {
    console.log("layout mounted", this.$i18n.locale, this.$store.state.lang)

  },
  methods: {
    changeLang(item) {
      console.log("changelang", item)
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
    showApplyArtist() {

    },
    hideApplyArtist() {
      this.isApplyArtistPop = false;
    },
    showNewPassword(){
      this.isLoginPop = false;
      this.isNewPasswordPop = true;
    },
    hideNewPassword(){
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
      this.$store.commit('user/setUserInfo', null);
      this.$q.cookies.remove('token', {
        path: '/'
      });
      this.$q.cookies.remove('userInfo', {
        path: '/'
      });
      this.$router.push('/')
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
.app {
  min-width: 1200px;
  font-family: "STFangsong";
}
.btn {
  cursor: pointer;
}
.mt10 {
  margin-top: 10px;
}
.left{
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
.noData {
  margin: 20px 0;
}
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
  &::before, &::after {
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
    border-color: transparent transparent #ddd  transparent ;
  }
  &::after {
    top: 1px;
    border-color: transparent transparent #fff transparent ;
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
          background: url("/img/index/cart1.png") center center no-repeat;
          background-size: contain;
          width: 40px;
          height: 40px;
          margin: 25px 30px;
        }
        .image2 {
          background-image: url("/img/index/cart2.png");
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
    background: url("/img/index/search.png") no-repeat;
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
  background: url("/img/index/success.png") center center no-repeat;
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
</style>








