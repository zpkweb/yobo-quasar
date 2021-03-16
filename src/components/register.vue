<template>
  <div class="registerPop">
    <q-card v-if="showRegister" class="card register">
      <q-card-section class="row items-center q-pb-none">
        <div class="title">注册</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div>
          已有账号？去<span
            class="to-register btn"
            @click="$emit('show-login')"
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
        <q-checkbox v-model="checkbox1" label="我已阅读并同意" color="black" size="xs" />
        <!-- <input type="checkbox" class="check mt10" /> -->
        <div class="checkbox1 mt10">
          <span class="xy btn">《永宝协议》</span>及
          <span class="ys btn">《永宝隐私政策》</span>
        </div>
        <div class="text-white text-center register btn bg-active" @click="register">
          注册
        </div>
        <q-checkbox v-model="checkbox2" label="保持登录" color="black" size="xs" />
        <!-- <input type="checkbox" class="check" />
        <div class="checkbox2">保持登录</div> -->
        <!-- <div class="text-center">
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
          </div> -->
      </q-card-section>
    </q-card>
    <q-card v-else class="card card1 success">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      showRegister: true,
      name: "",
      email: "",
      password: "",
      registerMsg1: "",
      registerMsg2: "",
      registerMsg3: "",
    };
  },
  methods: {
    async register() {
      if (this.name === "") {
        this.registerMsg1 = "用户名不能为空";
        this.$refs.registerMsg1.classList.add("opacity");
      }
      if (this.email === "") {
        this.registerMsg2 = "邮箱不能为空";
        this.$refs.registerMsg2.classList.add("opacity");
      }
      if (this.password === "") {
        this.registerMsg3 = "密码不能为空";
        this.$refs.registerMsg3.classList.add("opacity");
      }

      if (this.name !== "" && this.email !== "" && this.password !== "") {
        // let res = await ApiUser.register(
        //   this.name,
        //   this.email,
        //   this.phone,
        //   this.password
        // );
        // if (res.data.code === 10201) {
        //   alert("用户已存在,请直接登录");
        // } else {
        //   this.icon2 = false;
        //   this.icon6 = true;
        // }

        const register = await this.$store.dispatch("user/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log("register", register);
        if (register.success) {
          // alert("用户已存在,请直接登录");
          this.icon2 = false;
          this.icon6 = true;
          this.showRegister = false;
          this.$q.cookies.set("userInfo", register.data, {
            expires: 1,
            path: "/",
          });
          await this.$store.commit("user/setUserInfo", register.data);
        } else {

          this.$q.notify({
            position: "top",
            timeout: 1500,
            message: register.message,
            color: "negative",
          });
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
