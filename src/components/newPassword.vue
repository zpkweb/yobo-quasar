<template>
  <div class="newPasswordPop">
    <!-- <q-card class="card get-password">
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
    </q-card> -->
    <q-card class="card get-password">
      <q-card-section class="row items-center q-pb-none section1">
        <div class="title">忘记密码</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <div class="section2">
        <q-stepper
          class="stepper"
          v-model="step"
          ref="stepper"
          animated
          alternative-labels
          header-class="stepper-header"
          done-color="lime-9"
          active-color="lime-9"
        >
          <q-step
            :name="1"
            title="输入账户名"
            prefix="1"
            :done="step > 1"
            class="stepper-step"
          >
            <q-input :dense="true" square outlined v-model="email" placeholder="请输入邮箱" />
          </q-step>

          <q-step
            :name="2"
            prefix="2"
            title="获取验证码"
            :done="step > 2"
            class="stepper-step"
          >
            <q-input :dense="true" square outlined v-model="code" placeholder="请输入验证码" />
          </q-step>

          <q-step
            :name="3"
            prefix="3"
            title="重新设置新密码"
            :done="step > 3"
            class="stepper-step"
          >
            <q-input :dense="true" square outlined v-model="password" placeholder="请输入新密码" />
          </q-step>

          <q-step
            :name="4"
            prefix="4"
            title="设置成功"
            class="stepper-step"
          >
            成功
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation class="stepBtnContent">
              <q-btn @click="stepperNext" class="stepBtn" :label="step === 4 ? '完成' : '下一步'" />
              <!-- <q-btn v-if="step > 1" flat @click="$refs.stepper.previous()" label="Back" class="q-ml-sm stepBtn" /> -->
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      step: 1,
      email: '',
      code: '',
      password: '',
      userInfo: ''
    }
  },
  methods: {
    stepperNext() {
      // this.$refs.stepper.next()
      console.log(this.step)
      switch(this.step) {
        case 1:
          this.codeSend();
          break;
        case 2:
          this.codeVerify();
          break;
        case 3:
          this.setPassword();
          break;
        case 4:
          this.$emit('hide-new-password');
          break;
      }
    },
    async codeSend() {
      console.log("sendEmail", this.$store.state.user)
      const codeSend = await this.$store.dispatch('user/codeSend', {
        email: this.email
      })
      if(codeSend.success){
        this.userInfo = codeSend.data;
        this.$refs.stepper.next()
      }else{
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: codeSend.message,
          color: "negative",
        })
      }
    },
    async codeVerify() {
      const codeVerify = await this.$store.dispatch('user/codeVerify', {
        userId: this.userInfo.userId,
        code: this.code
      })
      if(codeVerify.success){
        this.$refs.stepper.next()
      }else{
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: codeVerify.message,
          color: "negative",
        })
      }
    },
    async setPassword() {
      //
      const updateUser = await this.$store.dispatch('user/updateUser', {
        userId: this.userInfo.userId,
        password: this.password
      })
      if(updateUser.success){
        this.$refs.stepper.next()
      }else{
        this.$q.notify({
          position: "top",
          timeout: 1500,
          message: updateUser.message,
          color: "negative",
        })
      }
    }
  },

};
</script>
<style lang="scss" scoped>
.newPasswordPop {
  max-width: 800px;
  width: 800px;
}
.get-password {
  max-width: 800px;
  width: 800px;
  padding: 20px 40px;
  .section1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    padding-bottom: 10px;
  }
  .section2 ::v-deep {
    padding: 0 50px;
    .stepper{
      border: 0;
      box-shadow: none;
      .q-stepper__header--border{
        border: 0;
      }
      .stepper-header{
        border: 0;
      }
      .stepper-step{
        width: 400px;
        margin: 0 auto;

      }
      .q-stepper__step-inner{
        padding: 0;
      }
      .stepBtnContent{
        text-align: center;
        margin-top: 40px;
        .stepBtn {
          width: 400px;
          color: #fff;
          background-color: #526463;
        }
      }
    }
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
</style>
