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
            <q-btn size="xs" rounded flat class="choose-language btn">{{lang}}</q-btn>
          </div>

          <div class="dropdown1">
            <div class="dropdowncontent1 absolute">
              <div class="items">
                <div
                  class="item"
                  v-for="(item, index) in langOptions"
                  :key="index"
                  @click="changeLang(item)"
                >
                  {{ item.label }}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-grow">
          <div class="artist-register btn" @click="icon3 = true" v-if="!isApplyArtist">
            成为艺术家
          </div>
          <q-breadcrumbs separator="|" class="separator" v-if="!userInfo">
            <q-breadcrumbs-el
              label="登录"
              class="login text-black btn"
              @click="icon1 = true"

            />
            <q-breadcrumbs-el
              label="注册"
              class="register btn"
              @click="icon2 = true"
            />
          </q-breadcrumbs>

          <div class="username btn" v-if="userInfo" >
            {{ userInfo.name }}
          </div>
          <div class="dropdown2">
            <div class="dropdowncontent2 absolute">
              <div class="items">
                <div class="item" @click="goMine">
                  个人中心
                </div>
                <div class="item" @click="logout">
                  登出
                </div>
              </div>
            </div>
          </div>

          <div class="search btn text-center" @click="icon4 = true">
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
                  <div class="paybtn text-center text-white btn">结账</div>
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
      <div class="footer text-white" v-if="this.$route.name != 'Artworks'">
        <div class="container row">
          <div class="col-9 row">
            <div class="col-3 item">
              <div class="title">客户服务</div>
              <div>联系我们</div>
              <div>法律声明</div>
              <div>一般条例</div>
              <div>客户评价</div>
              <div>Offer a Gift Card</div>
              <div>获取我的USD$200抵用券</div>
              <div>我的账户</div>
              <div>办公室艺术品</div>
              <div>设计师艺术品</div>
              <div>+44 203 445 6333</div>
            </div>
            <div class="col-3 item">
              <div class="title">关于我们</div>
              <div>关于永宝</div>
              <div>我们的艺术家</div>
              <div>杂志</div>
              <div>团队</div>
              <div>我们的甄选标准</div>
              <div>常见问题</div>
              <div>联系方式</div>
            </div>
            <div class="col-3 item">
              <div class="title">精选艺术家</div>
              <div>Kirstin Mccoy</div>
              <div>Josep Moncada</div>
              <div>Ivan Pili</div>
              <div>Kristin Kossi</div>
              <div>Peter Nottrott</div>
            </div>
            <div class="col-3 item">
              <div class="title">关注永宝</div>
              <div>微信</div>
              <div>微博</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Pinterest</div>
            </div>
          </div>

          <div class="col-3">
            <div class="title book">订阅永宝电子资讯</div>
            <div class="privacy-policy">
              通过订阅，即代表您接受永宝的<span class="btn">隐私政策条款</span>
            </div>
            <div class="row mail">
              <div class="col">电子邮件地址</div>
              <div class="col-grow">
                <q-img
                  src="img/index/nextpage.png"
                  width="5px"
                  class="getmail"
                ></q-img>
              </div>
            </div>

            <div class="title pay">支持的支付方式</div>
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
            <q-img src="img/index/mastercard.png" width="140px" contain></q-img>
          </div>
          <div class="col-12 row bottom">
            <div class="col-4">©2020 永宝（中国）有限公司 保留所有权利</div>
            <div class="col-3">沪ICP备15013228号-17</div>
            <div class="col-3 row">
              <div class="col-grow image">
                <q-img
                  src="img/index/police.png"
                  width="12px"
                  class="img"
                ></q-img>
              </div>
              <div class="col">沪公网安备 31010402004774号</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <q-dialog v-model="icon1" transition-hide="fade" transition-show="fade">
      <q-card class="card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">登录</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            没有账号？可以去<span
              class="to-login btn"
              @click="
                icon2 = true;
                icon1 = false;
              "
              >注册</span
            >
          </div>
          <!-- <div class="msg" ref="msg">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ msg }}
          </div> -->
          <!-- <input
            type="text"
            placeholder="您的全名"
            class="input"
            v-model="name"
            ref="name"
          /> -->
          <div class="msg" ref="msg2">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ msg2 }}
          </div>
          <input
            type="text"
            placeholder="请输入用户名/邮箱/手机"
            class="input"
            v-model="name"
            ref="name"
          />
          <div class="msg" ref="msg3">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ msg3 }}
          </div>
          <input
            type="password"
            placeholder="请输入密码"
            class="input"
            v-model="password"
            ref="password"
            v-touch-repeat.enter="login"
          />
          <div class="row">
            <div class="text-left col-6">
              <input type="checkbox" class="check" />
              <div class="checkbox2">保持登录</div>
            </div>
            <div class="text-right col-6 btn" @click="getPassword">
              忘记密码
            </div>
          </div>
          <div
            class="text-white text-center login btn"
            @click="login"
            ref="login"
          >
            登录
          </div>
          <div class="checkbox1">
            登录即代表同意 <span class="xy btn">《永宝协议》</span>及
            <span class="ys btn">《永宝隐私政策》</span>
          </div>
          <div class="text-center">
            <div class="title2">第三方账号登录</div>
            <div>
              <q-img src="img/index/qq-1.png" width="26px" class="img"></q-img>
              <q-img
                src="img/index/wechat-1.png"
                width="26px"
                class="img"
              ></q-img>
              <q-img src="img/index/zfb-1.png" width="26px" class="img"></q-img>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- 注册 -->
    <q-dialog v-model="icon2" transition-hide="fade" transition-show="fade">
      <q-card class="card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">注册</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            已有账号？可以去<span
              class="to-register btn"
              @click="
                icon1 = true;
                icon2 = false;
              "
              >登录</span
            >
          </div>
          <div class="msg" ref="registerMsg1">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ registerMsg1 }}
          </div>
          <input
            type="text"
            placeholder="您的全名"
            class="input"
            v-model="name"
          />
          <div class="msg" ref="registerMsg2">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ registerMsg2 }}
          </div>
          <input
            type="text"
            placeholder="请输入邮箱"
            class="input"
            v-model="email"
          />
          <div class="msg" ref="registerMsg3">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ registerMsg3 }}
          </div>
          <input
            type="password"
            placeholder="请输入密码"
            class="input"
            v-model="password"
          />
          <input type="checkbox" class="check" />
          <div class="checkbox1">
            我已阅读并同意 <span class="xy btn">《永宝协议》</span>及
            <span class="ys btn">《永宝隐私政策》</span>
          </div>
          <div class="text-white text-center register btn" @click="register">
            注册
          </div>
          <input type="checkbox" class="check" />
          <div class="checkbox2">保持登录</div>
          <div class="text-center">
            <div class="title2">第三方账号注册</div>
            <div>
              <q-img src="img/index/qq-1.png" width="26px" class="img"></q-img>
              <q-img
                src="img/index/wechat-1.png"
                width="26px"
                class="img"
              ></q-img>
              <q-img src="img/index/zfb-1.png" width="26px" class="img"></q-img>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon3" transition-hide="fade" transition-show="fade">
      <q-card class="card" v-show="this.mode === 'page1'">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">成为艺术家</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>已有4555，6783位艺术家入驻</div>
          <input
            type="text"
            placeholder="姓氏"
            class="input"
            v-model="firstname"
          />
          <input
            type="text"
            placeholder="名字"
            class="input"
            v-model="lastname"
          />
          <input type="text" placeholder="邮箱" class="input" v-model="artistEmail" />
          <input type="text" placeholder="电话" class="input" v-model="phone" />
          <select
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
          </select>
          <select
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
          </select>
          <select
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
          </select>
          <div class="text-white text-center register" @click="goPage2">
            下一步
          </div>
        </q-card-section>
      </q-card>

      <q-card class="card" v-show="this.mode === 'page2'">
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
          <select
            class="select"
            id="application_soleIncome"
            name="application[soleIncome]"
            v-model="isFullTime"
          >
            <option value selected>您是一个专业的全职艺术家么？</option>
            <option value="1">是</option>
            <option value="0">否</option>
          </select>
          <select
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
          </select>
          <select
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
          </select>
          <select
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
          </select>
          <input
            type="text"
            class="input"
            placeholder="如有其他画廊已合作，是哪一家（方便我们更全面了解您）"
            v-model="gallery"
          />
          <select
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
          </select>
          <textarea
            placeholder="您是画廊代表人么？请告知您的画廊名称、城市、国家"
            class="textarea"
            v-model="galleryInfo"
          ></textarea>
          <textarea
            placeholder="最值得一看的展览/画廊/机构名称、城市、国家"
            class="textarea"
            v-model="recommend"
          ></textarea>
          <textarea
            type="text"
            placeholder="最引人注目的奖项/奖项名称、获得年份"
            class="textarea"
            v-model="prize"
          ></textarea>
          <input
            type="text"
            placeholder="连接至网站"
            class="input"
            v-model="website"
          />
          <div class="text-white text-center register" @click="sellerRegister">申请</div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="icon4"
      transition-hide="fade"
      transition-show="fade"
      class="dialog2"
    >
      <q-card class="card card2">
        <q-card-section class="row items-center q-pb-none section1">
          <div class="title relative-position">
            <div class="image absolute"></div>
            <input type="text" placeholder="油画" class="input2" />
            <div class="btn search2 text-white">搜索</div>
          </div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            class="close absolute"
          />
        </q-card-section>

        <q-card-section>
          <div>
            <div class="tag tag1">热门搜索</div>
            <div class="tag btn">精选艺术家</div>
            <div class="tag btn">油画</div>
            <div class="tag btn">后起之秀</div>
            <div class="tag btn">雕刻</div>
            <div class="tag btn">摄影师</div>
            <div class="tag btn">艺术大家</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon5" transition-hide="fade" transition-show="fade">
      <q-card class="card get-password">
        <q-card-section class="row items-center q-pb-none section1">
          <div class="title">忘记密码</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div class="setnewpassword">
          <input type="text" v-model="email" placeholder="输入邮箱账号" />
          <div @click="getVerifyCode" class="button">获取验证码</div>
          <input type="text" v-model="verifyCode" placeholder="输入验证码" />
          <div @click="sendVerifyCode" class="button">发送验证码</div>
          <input type="text" v-model="newPassword" placeholder="输入新密码" />
          <div @click="setNewPassword" class="button">确认</div>
        </div>
      </q-card>
    </q-dialog>

    <q-dialog v-model="icon6" transition-hide="fade" transition-show="fade">
      <q-card class="card card1 success">
        <q-card-section class="row items-center q-pb-none">
          <div class="quotation">“</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div class="text-center title">恭喜，注册已确认！</div>
        <div class="text-center content">已给您发送一封确认邮件</div>
        <div class="text-center content">
          您已经可以探索我们艺术家的作品并保存您的所爱。
        </div>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import * as ApiUser from "src/api/user.js";
import * as utils from "src/api/utils.js";
import * as loclist from "../assets/loclist.json";
export default {
  components: {},

  data() {
    return {
      lang: this.$store.state.lang,
      langOptions: [
        { value: "zh-cn", label: "中文" },
        { value: "en-us", label: "English" },
        {
        value: 'ja-jp',
        label: 'にほんご',
      },
      {
        value: 'fr-fr',
        label: 'Français',
      }
      ],
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
      firstname: "",
      lastname: "",
      // artistEmail: this.$store.state.user.info ? this.$store.state.user.info.email : "",
      country: "",
      language: "",
      findUs: "",
      isFullTime: "",
      onlineSell: "",
      sold: "",
      channel: "",
      gallery: "",
      medium: "",
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
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.$router.push({
        params: {
          lang: lang
        }
      })
    },
  },

  preFetch({ store, currentRoute, redirect }) {
    store.commit("setLang", currentRoute.params.lang)

    console.log("store.state.user.info", store.state.user.info)
    // if (!store.state.user.info) {
    //   redirect({ path: '/' })
    // }
  },
  computed: {
    userInfo () {
      // let userInfo = this.$q.cookies.get('user.info')
      // if(!userInfo) {
      //   userInfo = this.$store.state.user.info;
      // }
      return this.$store.state.user.info
    },
    artistEmail() {
      return this.$store.state.user.info ? this.$store.state.user.info.email : ""
    },
    isApplyArtist() {
      return this.$store.state.user.info ? this.$store.state.user.info.isApplyArtist : false
    }
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
    const userInfo = this.$q.cookies.get('user.info');
    console.log("userInfo",userInfo)
    if(userInfo) {
      this.$store.commit('user/setUserInfo', userInfo);
    }else{
      this.$router.push('/')
    }
  },
  methods: {
    changeLang(locale) {
      this.lang = locale.value;
    },

    goIndex() {
      this.$router.push(`/${this.$i18n.locale}`);
    },
    goPage2() {
      this.mode = "page2";
    },
    goPage1() {
      this.mode = "page1";
    },
    getPassword() {
      this.icon1 = false;
      this.icon5 = true;
    },
    goMine() {
      this.$router.push(`/${this.$i18n.locale}/mine`);
    },
    async register() {

      if (this.name === "") {
        this.registerMsg1 = "用户名不能为空";
        this.$refs.registerMsg1.classList.add("block");
      }
      if (this.email === "") {
        this.registerMsg2 = "邮箱不能为空";
        this.$refs.registerMsg2.classList.add("block");
      }
      if (this.password === "") {
        this.registerMsg3 = "密码不能为空";
        this.$refs.registerMsg3.classList.add("block");
      }

      if (this.name !== "" && this.email !== "" && this.password !== "") {
        // let res = await ApiUser.register(
        //   this.name,
        //   this.email,
        //   this.phone,
        //   this.password
        // );
        // console.log(res);
        // if (res.data.code === 10201) {
        //   alert("用户已存在,请直接登录");
        // } else {
        //   this.icon2 = false;
        //   this.icon6 = true;
        // }

        const register = await this.$store.dispatch('user/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        console.log(register);

        if (register.success) {
          // alert("用户已存在,请直接登录");
          this.icon2 = false;
          this.icon6 = true;
          this.$q.cookies.set('user.info', register.data)
          await this.$store.commit('user/setUserInfo', register.data);
        } else {
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: register.message,
            color: 'negative',
          })
        }
      }
    },
    async login() {
      console.log("this.$refs", this.$refs);

      // if (this.name === "") {
      //   this.msg = "用户名不能为空";
      //   this.$refs.msg.classList.add("block");
      // }
      if (this.name === "") {
        this.msg2 = "用户名/邮箱/手机不能为空";
        this.$refs.msg2.classList.add("block");
      }else{
        this.msg2 = "";
        this.$refs.msg2.classList.remove("block");
      }
      if (this.password === "") {
        this.msg3 = "密码不能为空";
        this.$refs.msg3.classList.add("block");
      }else{
        this.msg3 = "";
        this.$refs.msg3.classList.remove("block");
      }
      if (this.name && this.password !== "") {
        const user = await this.$store.dispatch('user/login', {
          name: this.name,
          password: this.password
        })
        console.log(user);


        // let res = await ApiUser.login(this.email, this.phone, this.password);
        if (user.success) {
          // utils.setToken(res.data.data.token);
          // utils.setUserId(res.data.data.userId);
          // utils.setGlobalUserInfo(res.data.data);
          // this.userInfo = utils.getGlobalUserInfo();
          this.icon1 = false;
          this.$q.cookies.set('user.info', user.data)
          await this.$store.commit('user/setUserInfo', user.data);

        }else{
          // alert("密码不正确，请重新输入密码");
          this.$q.notify({
            position: 'top',
            timeout: 1500,
            message: user.message,
            color: 'negative',
          })
        }

      }
    },
    logout() {
      this.$store.commit('user/setUserInfo', null);
      this.$q.cookies.remove('user.info');
      this.$q.cookies.remove('cookie_name')
      this.$router.push('/')
    },
    async setNewPassword() {
      let res = await ApiUser.setNewPassword(
        this.userId,
        this.email,
        this.phone,
        this.password
      );
      console.log(res);
    },

    async getVerifyCode() {
      let res = await ApiUser.getVerifyCode(this.email);
      console.log(res);
    },
    async sendVerifyCode() {
      // let res;
    },
    async setNewPassword() {},
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
      // console.log(res);
      const applyArtist = await this.$store.dispatch('user/applyArtist', {
        userId: this.$store.state.user.info ? this.$store.state.user.info.userId : '',
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
        profile: this.profile
      })
      console.log("applyArtist", applyArtist);
      if (applyArtist.success) {
        this.icon3 = false;
        // await this.$store.commit('user/setUserInfo', applyArtist.data);
        // this.$q.cookies.set('user.info', applyArtist.data)
        this.$store.commit('user/changeUserInfo', {
          isApplyArtist: true
        })
        let storageUserInfo = this.$q.cookies.get('user.info');
        if(storageUserInfo){
          storageUserInfo.isApplyArtist = true;
        }
        this.$q.cookies.set('user.info', storageUserInfo)
      }else{
        // alert("密码不正确，请重新输入密码");
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: applyArtist.message,
          color: 'negative',
        })
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
.app {
  min-width: 1200px;
  font-family: "STFangsong";
}
.btn {
  cursor: pointer;
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
    margin: 20px auto;
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
    margin: 5px 0 -10px 0;
    padding: 5px;
    display: none;
  }
  .block {
    display: block;
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
.choose-language-container {
  display: inline-block;
}
.choose-language-container:hover + .dropdown1 {
  display: block;
}
.dropdown1 {
  display: inline-block;
  background-color: #fff;
  display: none;
  &:hover {
    display: block;
  }
  .dropdowncontent1 {
    background: transparent;
    left: 93px;
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




.dropdown2 {
  display: none;
  &:hover {
    display: inline-block;
  }
  .dropdowncontent2 {

    background: transparent;
    right: 93px;
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
.get-password {
  max-width: 800px;
  width: 800px;
  .section1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin: 20px 40px;
    padding-bottom: 10px;
  }
  .continue {
    width: 200px;
    background-color: #152c2b;
  }
}
.setnewpassword {
  padding: 60px;
  .button {
    margin: 20px 0;
    width: 160px;
    height: 40px;
    background-color: #152c2b;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
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








