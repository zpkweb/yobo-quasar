<template>
  <div class="container2 row">
    <div class="msgs col-6">
      <div class="title2">{{$t('my.info.shippingAddress')}}</div>
      <!-- <input class="item" :dense="true" square outlined v-model="address.name" :placeholder="$t('my.info.name')" /> -->
      <div class="name">
        <input class="firstname" type="input" v-model="address.firstname" :placeholder="$t('my.info.LastName')" />
        <input class="lastname" type="input" v-model="address.lastname" :placeholder="$t('my.info.name')" />
      </div>
      <input class="item" :dense="true" square outlined standout v-model="address.phone" :placeholder="$t('my.info.phone')" />
      <input class="item" :dense="true" square outlined v-model="address.country" :placeholder="$t('my.info.country')" />
      <input class="item" :dense="true" square outlined v-model="address.city" :placeholder="$t('my.info.province')" />
      <input class="item" :dense="true" square outlined v-model="address.detail" :placeholder="$t('my.info.detailedAddress')" />

        <!-- <select
          class="item item-select"
          v-model="subscribe"
          placeholder="是否订阅我们的刊物"
        >

          <option label="是" value="1"> </option>
          <option label="否" value="0"> </option>
        </select> -->

        <!-- <select
          class="item item-select"
          v-model="invoice"
          placeholder="发票地址与收货地址是否相同"
        >
          <option label="是" value="1"> </option>
          <option label="否" value="0"> </option>
        </select> -->

        <div class="title2">{{$t('my.info.contactMethod')}}</div>
        <input
          type="text"
          v-model="user.email"
          :placeholder="$t('my.info.emailAddress')"
          class="item"
        />
        <input
          type="text"
          v-model="user.phone"
          :placeholder="$t('my.info.contactPhoneNumber')"
          class="item"
        />
        <!-- <div class="title2">您是否需要开具发票？</div>
        <div class="invoice">
          <radio v-model="radio1" label="1" border class="item radio"
            >无需发票</radio
          >
          <radio v-model="radio1" label="2" border class="item radio"
            >电子普通发票-个人抬头</radio
          >
          <radio v-model="radio1" label="3" border class="item radio"
            >电子普通发票-其他抬头</radio
          >
          <radio v-model="radio1" label="4" border class="item radio"
            >电子普通发票-企业抬头</radio
          >
          <radio v-model="radio1" label="5" border class="item radio"
            >增值税专用发票</radio
          >
        </div> -->
        <div class="new text-white text-center btn" :class="{'bg-active': isButtonDisable}" @click="update">{{$t('my.info.Update')}}</div>
      </div>

      <div class="notices col-6" v-if="$store.state.isShowPay">
        <div class="notice">
          <div class="title">{{$t('my.info.PleaseFollowing')}}：</div>
          <div>
            • {{$t('my.info.FollowingOne')}}
          </div>
          <div>• {{$t('my.info.FollowingTwo')}}</div>
        </div>
        <div class="notice2">
          <div class="title">{{$t('my.info.PleaseFollowing')}}</div>
          <div>• {{$t('my.info.FollowingThree')}}</div>
          <div>• {{$t('my.info.FollowingFore')}}</div>
        </div>

        <!-- <div class="notice3">
          <div class="title">请注意以下几点</div>
          <div>• 选择此选项，发票抬头为“个人”。</div>
          <div>
            你的订单发货后，我们会向你发送电子发票。此外我们还会向您发送电子收据
          </div>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      subscribe: "",
      invoice: "",
      radio1: "",
      mail: "",
      phone: "",
      value: [],
      options: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "dongcheng",
              label: "东城区",
            },
            {
              value: "xicheng",
              label: "西城区",
            },
            {
              value: "haidian",
              label: "海淀区",
            },
            {
              value: "fengtai",
              label: "龙华区",
            },
          ],
        },
        {
          value: "shenzhen",
          label: "深圳",
          children: [
            {
              value: "futian",
              label: "福田区",
            },
            {
              value: "nanshan",
              label: "南山区",
            },
            {
              value: "longgang",
              label: "龙岗区",
            },
            {
              value: "longhua",
              label: "龙华区",
            },
          ],
        },
      ],

      user: {
        email: '',
        phone: ''
      },
      address: {
        name: '',
        firstname: '',
        lastname: '',
        phone: '',
        country: '',
        city: '',
        detail: ''
      },
      userDefault: {
        email: '',
        phone: ''
      },
      addressDefault: {
        name: '',
        firstname: '',
        lastname: '',
        phone: '',
        country: '',
        city: '',
        detail: ''
      }
    };
  },
  created() {
    // console.log("mine info created")
  },
  mounted() {
    // console.log("mine info mounted")
    setTimeout(() => {

      if(this.$store.state.seller){
        this.address.name = this.$store.state.user.info.firstname + ' ' + this.$store.state.user.info.lastname;
        this.addressDefault.name = this.$store.state.user.info.firstname + ' ' + this.$store.state.user.info.lastname
      }else{
        this.address.name = this.$store.state.user.info.name;
        this.addressDefault.name = this.$store.state.user.info.name
      }
      this.user.email = this.$store.state.user.info.email;
      this.user.phone = this.$store.state.user.info.phone;

      this.userDefault.email = this.$store.state.user.info.email;
      this.userDefault.phone = this.$store.state.user.info.phone;

      if(this.$store.state.user.info.address && this.$store.state.user.info.address.length){
        this.address.name = this.$store.state.user.info.address[0].name;
        this.address.phone = this.$store.state.user.info.address[0].phone;
        this.address.country = this.$store.state.user.info.address[0].country;
        this.address.city = this.$store.state.user.info.address[0].city;
        this.address.detail = this.$store.state.user.info.address[0].address;

        this.addressDefault.name = this.$store.state.user.info.address[0].name;
        this.addressDefault.phone = this.$store.state.user.info.address[0].phone;
        this.addressDefault.country = this.$store.state.user.info.address[0].country;
        this.addressDefault.city = this.$store.state.user.info.address[0].city;
        this.addressDefault.detail = this.$store.state.user.info.address[0].address;
      }


    }, 300)

  },
  computed: {

    userInfo() {
      return this.$store.state.user.info;
    },
    isApplyArtist() {
      return this.$store.state.user.info ? this.$store.state.user.info.seller : false
    },
    isButtonDisable(){
      let disable = false;
      if(
        this.user.email != this.userDefault.email
        || this.user.phone != this.userDefault.phone
        || this.address.name != this.addressDefault.name
        || this.address.firstname != this.addressDefault.firstname
        || this.address.lastname != this.addressDefault.lastname
        || this.address.phone != this.addressDefault.phone
        || this.address.country != this.addressDefault.country
        || this.address.city != this.addressDefault.city
        || this.address.detail != this.addressDefault.detail
      ){
        disable = true;
      }
      return disable;
    }
  },
  methods: {

    async update() {

      const updateUserAddress = await this.$store.dispatch('user/updateUserAddress', {
        ...this.address,
        userId: this.$store.state.user.info.userId,
      })
      // console.log("updateUserAddress", updateUserAddress)
      if(!updateUserAddress.success) {
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: this.$t('my.info.UpdateFailed'),
          color: 'negative',
        })
      }
      const updateUser =await this.$store.dispatch('user/updateUser', {
        ...this.user,
        userId: this.$store.state.user.info.userId,
      })
      if(!updateUser.success) {
        this.$q.notify({
          position: 'top',
          timeout: 1500,
          message: this.$t('my.info.UpdateFailed'),
          color: 'negative',
        })
      }

      // 修改store
      this.$store.commit('user/setUserInfoItem', {
        email: this.user.email,
        phone: this.user.phone
      })

      this.$q.notify({
        position: 'top',
        timeout: 1500,
        message: this.$t('my.info.updateCompleted'),
        color: 'positive',
      })
    }
  },
};
</script>


<style lang="scss" scoped>
.btn {
  cursor: pointer;
}

.container2 {
  width: 1100px;
  margin: 0 auto;
  // padding: 20px 90px 0 90px;
  padding: 20px 90px 0 40px;
  .title2 {
    font-size: 20px;
  }
}
.invoice::v-deep {
  .el-radio__input {
    display: none;
  }
}
input {
  border: 1px solid rgb(153, 153, 153);
  padding-left: 10px;
}
.item {
  display: block;
  width: 420px;
  height: 36px;
  margin: 20px 0 !important;
  border-radius: 0;
  outline: none;
  // color: rgb(153, 153, 153);
  &:focus{
    border: 1px solid #152c2b;
    color: #152c2b;
  }
}
.item::v-deep {
  .el-cascader {
    height: 36px;
    margin: 20px 0;
  }
  .el-input__inner {
    border: none;
    height: 30px;
    padding-left: 8px;
    &:focus {
      border: none;
    }
  }
  .el-input {
    border: 1px solid rgb(153, 153, 153);
    height: 36px;
    line-height: 36px;
  }
  .el-input__icon {
    height: auto;
  }
}
.item-select{
  padding: 0 10px;
}

.name {
  width: 420px;
  margin: 20px 0;
  .firstname,
  .lastname {
    height: 36px;
    width: 200px;
    outline: none;
    box-sizing: border-box;
  }
  .firstname {
    margin-right: 20px;
  }
}
.radio {
  border: 1px solid rgb(153, 153, 153) !important;
  padding-left: 0;
}
.radio::v-deep {
  .el-radio__input.is-checked + .el-radio__label {
    color: rgb(21, 44, 43);
  }
}

.new {
  width: 420px;
  height: 33px;
  line-height: 30px;
  font-weight: bolder;
  background-color: #526463;
  margin: 80px 0 60px 0;
}
.update{
  background-color: #152c2b;
}
.notices {
  padding: 36px 60px;
  line-height: 24px;
  color: rgb(21, 44, 43);
  .title {
    font-size: 16px;
  }
  .notice2 {
    padding-top: 236px;
  }
  .notice3 {
    padding-top: 50px;
  }
}
</style>

<style lang="scss" >
.el-popper{
  margin:0 !important;
}
.el-cascader-node__label,
.el-icon-check,
.el-icon-arrow-right {
  color: rgb(153, 153, 153);
}
.el-popper .popper__arrow, .el-popper .popper__arrow::after{
  display: none;
}
</style>




