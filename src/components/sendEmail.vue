<template>
  <div class="offer relative-position absolute" ref="offerPage">
    <q-img
      src="~assets/img/close.png"
      width="20px"
      class="offer-close absolute btn icon-close"
      @click="$emit('close-sendEmail')"
    ></q-img>
    <div class="email-outer bg-white">
      <input
        type="text"
        v-model="email"
        :placeholder="$t('home.EmailAddress')"
        class="email"
      />
    </div>
    <div class="msg-outer bg-white">
      <textarea
        :placeholder="$t('home.sendEmailMsgPlaceholder')"
        class="msg"
        v-model="msg"
      ></textarea>
    </div>
    <q-btn

      class="full-width send-btn"
      :disable="sending"
      @click="sendEmail"
      :class="{'bg-active': isSend}"
    >
    {{ sending ? $t('home.sending') : $t('home.send')}}
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: this.$store.state.user.info ? this.$store.state.user.info.email : '',
      msg: "",
      sending: false,
    };
  },
  computed: {
    isSend(){
      let disable = false;
      if(this.email || this.msg){
        disable = true;
      }
      return disable;
    }
  },
  methods: {
    async sendEmail() {
      if(!this.email){
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "请输入邮箱！",
          color: "negative",
        });
        return;
      }
      if(!this.msg) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "请输入内容！",
          color: "negative",
        });
        return;
      }

      // if(!this.$store.state.user.info) {
      //   this.$q.notify({
      //     position: "top",
      //     timeout: 1500,
      //     message: "请登录！",
      //     color: "negative",
      //   });
      //   return;
      // }

      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!verify.test(this.email)) {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: "请输入正确的邮箱！",
          color: "negative",
        });
        return;
      }

      if(this.sending) {
        return;
      }
      this.sending = true;
      const sendEmail = await this.$store.dispatch("home/sendEmail", {
        email: this.email,
        href: window.location.href,
        msg: this.msg,

      })

      this.sending = false;
      if (sendEmail.success) {
        this.email = '';
        this.msg = '';

        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: this.$t("home.sendSuccessfully"),
          color: "positive",
        });
      } else {
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: this.$t("home.sendFailed"),
          color: "negative",
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.offer {
  background-color: #d6d7c5;
  padding: 50px 29px 25px;

  .offer-close {
    left: 290px;
    top: 15px;
  }
  .offer-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .newprise {
    padding: 5px 10px;
    margin-bottom: 20px;
    .num {
      font-size: 16px;
      padding: 0 10px;
    }
    .symbol2 {
      padding-right: 10px;
    }
    .add,
    .sub {
      border: 1px solid rgba(21, 44, 43, 0.1);
      font-size: 12px;
    }
  }
  .email-outer {
    margin-bottom: 20px;
    .email {
      width: 280px;
      border: none;
      outline: none;
      padding: 5px 10px;
      font-size: 14px;
    }
  }

  .msg-outer {
    margin-bottom: 27px;
    .msg {
      width: 280px;
      height: 165px;
      resize: none;
      padding-left: 10px;
      font-size: 14px;
      border: none;
      outline: none;
      padding-top: 10px;
    }
  }
}
.closepage {
  display: none;
}
.openpage {
  display: block;
}

.separator-span {
  display: inline-block;
  width: 5px;
  height: 10px;
  background-color: #f00;
}

.sending{

}
.send-btn{
  color: #fff;
  background-color: #526463;
}
.bg-active {

    background-color: #152c2b !important;
  }
</style>
