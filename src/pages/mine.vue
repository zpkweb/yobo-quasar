<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/mine/man.png" height="240px"></q-img>
      <div class="absolute-full">
        <div class="container">
          <div class="tags">
            <div class="active btn" @click="goMine">我的账户</div>
            <div class="btn" @click="goWishlist">我的最爱</div>
            <div class="btn" @click="goLike">我最喜爱的艺术家</div>
            <div class="btn" @click="goOrder">购买记录</div>
          </div>
          <div class="line"></div>
          <div class="title">下午好 葫芦娃</div>
          <div class="time">您自2020/8/5起成为了永宝 艺术收藏家</div>
        </div>
      </div>
    </div>
    <div class="container2 row">
      <div class="msgs col-6">
        <div class="title2">您的送货地址在哪里</div>
        <div class="name">
          <input type="text" placeholder="名" class="firstname" />
          <input type="text" placeholder="姓氏" class="lastname" />
        </div>
        <el-cascader
          v-model="value"
          :options="options"
          class="item"
        ></el-cascader>
        <input type="text" placeholder="详细地址" class="item" />
        <el-select
          class="item item1"
          v-model="subscribe"
          placeholder="是否订阅我们的刊物"
        >
          <el-option label="是" value="1"> </el-option>
          <el-option label="否" value="0"> </el-option>
        </el-select>
        <el-select
          class="item"
          v-model="invoice"
          placeholder="发票地址与收货地址是否相同"
        >
          <el-option label="是" value="1"> </el-option>
          <el-option label="否" value="0"> </el-option>
        </el-select>

        <div class="title2">您的联系方式是什么？</div>
        <input
          type="text"
          v-model="mail"
          placeholder="您的邮箱地址"
          class="item"
        />
        <input
          type="text"
          v-model="phone"
          placeholder="联系电话号码"
          class="item"
        />
        <div class="title2">您是否需要开具发票？</div>
        <div class="invoice">
          <el-radio v-model="radio1" label="1" border class="item radio"
            >无需发票</el-radio
          >
          <el-radio v-model="radio1" label="2" border class="item radio"
            >电子普通发票-个人抬头</el-radio
          >
          <el-radio v-model="radio1" label="3" border class="item radio"
            >电子普通发票-其他抬头</el-radio
          >
          <el-radio v-model="radio1" label="4" border class="item radio"
            >电子普通发票-企业抬头</el-radio
          >
          <el-radio v-model="radio1" label="5" border class="item radio"
            >增值税专用发票</el-radio
          >
        </div>
        <div class="new text-white text-center btn">更新</div>
      </div>

      <div class="notices col-6">
        <div class="notice">
          <div class="title">请注意以下几点：</div>
          <div>
            •我们将使用收件人手机号码来发送有关送货状态更新的短信，以及安排送货。
          </div>
          <div>•我们将使用联系人电话号码来沟通有关订单或付款方面的适宜</div>
        </div>
        <div class="notice2">
          <div class="title">请注意以下几点</div>
          <div>• 我们将通过此联系方式向你发送电子收据和订单的最新状态</div>
          <div>• 请核实你输入的电话号码是否正确，下单后将无法修改</div>
        </div>
        <div class="notice3">
          <div class="title">请注意以下几点</div>
          <div>• 选择此选项，发票抬头为“个人”。</div>
          <div>
            你的订单发货后，我们会向你发送电子发票。此外我们还会向您发送电子收据
          </div>
        </div>
      </div>
    </div>
  </q-layout>
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
    };
  },
  methods: {
    goWishlist() {
      this.$router.push("/wishlist");
    },
    goMine() {
      this.$router.push("/mine");
    },
    goLike() {
      this.$router.push("/like");
    },
    goOrder() {
      this.$router.push("/order");
    },
  },
};
</script>


<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
.banner {
  color: #d6d7c5;
  .container {
    width: 1100px;
    margin: 0 auto;
    .tags > div {
      display: inline-block;
      padding: 10px 20px;
    }
    .tags {
      padding-left: 80px;
      .active {
        background-color: #d6d7c5;
        color: #333;
      }
    }
    .line {
      width: 800px;
      height: 1px;
      background-color: rgba(214, 215, 197, 0.1);
      margin-bottom: 50px;
    }
    .title,
    .time {
      padding: 0 95px;
    }
    .title {
      font-size: 32px;
      margin-bottom: 5px;
    }
    .time {
      font-size: 18px;
    }
  }
}
.container2 {
  width: 1100px;
  margin: 0 auto;
  padding: 20px 90px 0 90px;
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
  color: rgb(153, 153, 153);
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

.name {
  width: 420px;
  margin: 20px 0;
  .firstname,
  .lastname {
    height: 36px;
    width: 200px;
    outline: none;
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
  background-color: #152c2b;
  margin: 80px 0 60px 0;
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




