<template>
  <div class="loginPop">
    <q-card class="card login">
      <q-card-section class="row items-center q-pb-none">
        <div class="title">登录</div>
        <q-space />
        <q-btn icon="close" class="icon-close"  flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div>
          没有账号？可以去<span
            class="to-login btn underline"
            @click="$emit('show-register')"
            >注册</span
          >
        </div>
        <div class="msg" ref="msg2">
          <q-img src="~assets/img/exclamation.png" width="14px"></q-img>
          {{ msg2 }}
        </div>
        <input
          type="text"
          placeholder="请输入用户名/邮箱"
          class="input"
          v-model="name"
          ref="loginName"
        />
        <div class="msg" ref="msg3">
          <q-img src="~assets/img/exclamation.png" width="14px"></q-img>
          {{ msg3 }}
        </div>
        <input
          type="password"
          placeholder="请输入密码"
          class="input"
          v-model="password"
          ref="loginPassword"
          v-touch-repeat.enter="login"
        />
        <div class="overflow-hidden mt10">
          <div class="left">
            <q-checkbox class="no-box-shadow no-border-radius no-border no-outline " style="outline:0 !important;" v-model="checkbox1" label="保持登录" color="default" size="xs"  />
          </div>
          <div class="right btn underline" @click="$emit('show-new-password')">忘记密码</div>
        </div>
        <div
          class="text-white text-center login btn"
          :class="{'bg-active': isButtonDisable}"
          @click="login"
          ref="login"
        >
          登录
        </div>
        <div class="checkbox1">
          登录即代表同意 <span class="xy btn">《永宝协议》</span>及
          <span class="ys btn">《永宝隐私政策》</span>
        </div>
        <!-- <div class="text-center">
            <div class="title2">第三方账号登录</div>
            <div>
              <q-img src="~assets/img/logo-qq.png" width="26px" class="img"></q-img>
              <q-img
                src="~assets/img/logo-wechat.png"
                width="26px"
                class="img"
              ></q-img>
              <q-img src="~assets/img/logo-zfb.png" width="26px" class="img"></q-img>
            </div>
          </div> -->
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      msg: "",
      msg2: "",
      msg3: "",
      checkbox1: true
    };
  },
  computed: {
    isButtonDisable(){
      let disable = false;
      if(this.name || this.password){
        disable = true;
      }
      return disable;
    }
  },
  methods: {
    getPassword() {
      this.icon1 = false;
      this.icon5 = true;
    },
    async login() {
      // if (this.name === "") {
      //   this.msg = "用户名不能为空";
      //   this.$refs.msg.classList.add("block");
      // }

      if (this.name === "") {
        this.msg2 = "用户名/邮箱/手机不能为空";
        this.$refs.msg2.classList.add("opacity");
      } else {
        this.msg2 = "";
        this.$refs.msg2.classList.remove("opacity");
      }
      if (this.password === "") {
        this.msg3 = "密码不能为空";
        this.$refs.msg3.classList.add("opacity");
      } else {
        this.msg3 = "";
        this.$refs.msg3.classList.remove("opacity");
      }
      if ((this.name !== "") && (this.password !== "")) {
        const user = await this.$store.dispatch("user/login", {
          name: this.name,
          password: this.password,
        });

        // console.log("user", user);
        // let res = await ApiUser.login(this.email, this.phone, this.password);
        if (user.success) {
          // utils.setToken(res.data.data.token);
          // utils.setUserId(res.data.data.userId);
          // utils.setGlobalUserInfo(res.data.data);
          // this.userInfo = utils.getGlobalUserInfo();
          const { token, ...userInfo } = user.data;

          // console.log("login token", token)
          // console.log("login userInfo", userInfo)
          if(this.checkbox1){
            this.$q.cookies.set("token", token, {
              expires: 1,
              path: '/'
            });

            this.$q.cookies.set("userInfo", userInfo, {
              expires: 1,
              path: '/'
            })
          }


          await this.$store.commit("user/setUserInfo", user.data);
          if(userInfo && userInfo.seller){
            this.$emit('hide-isApplyArtist')
          }
          this.$emit('hide-login')

        } else {
          // alert("密码不正确，请重新输入密码");
          // this.$q.notify({
          //   position: "top",
          //   timeout: 1500,
          //   message: user.message,
          //   color: "negative",
          // });
          if(user.message == "用户不存在"){
            this.msg2 = user.message;
            this.$refs.msg2.classList.add("opacity");
          }else if(user.message == "用户密码不正确"){
            this.msg3 = user.message;
            this.$refs.msg3.classList.add("opacity");
          }

        }
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
</style>
