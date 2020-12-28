<template>
  <q-layout>
    <div class="title row">
      <div class="col">结账</div>
      <div class="col-grow prise">显示订单摘要：RMB 8,598</div>
    </div>
    <div class="container row">
      <div class="left col-8">
        <div class="title2">您的送货地址在哪里？</div>
        <div class="default-address row">
          <div class="col">
            <div class="name1">葫芦娃</div>
            <div class="address">北京西城区北礼士路甲98号</div>
            <div class="phone">12366669999</div>
          </div>
          <div class="col-grow default">默认地址</div>
        </div>
        <div>修改地址</div>
        <div class="change">使用新地址</div>

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
    </div>

    <div class="col-4">
      <div>请注意以下几点</div>
      <div>请注意以下几点:</div>
      <div>
        • 收货时，请准备好与订单收货人姓名相符的身份证件或发货通知电子邮件
      </div>
      <div>• 送货时间根据送至市中心的距离估算。边远地区可能需要更长时间。</div>
      <div>• 白天送货时段：星期一至星期日，每日09:00 至 18:00</div>
      <div>
        •
        除你本人亲自签收之外，你的同住家属或你指定的第三方签收，或你指示承运人将本产品置于指定地点，亦将视为你本人签收，且产品已完成交付
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
};
</script>

<style lang="scss" scoped>
.title {
  width: 1201px;
  margin: 0 auto;
  padding: 12px 100px;
  border-bottom: 1px solid rgba(21, 44, 43, 0.1);
  font-size: 18px;
  font-family: "STFangsong";
  color: rgb(21, 44, 43);
  font-weight: 600;
  .prise {
    font-size: 16px;
    font-weight: normal;
  }
}
.container {
  color: rgb(21, 44, 43);
  width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
  font-family: "STFangsong";

  .left {
    .change {
      width: 520px;
      height: 43px;
      line-height: 43px;
      border: 1px solid rgb(21, 44, 43);
      padding-left: 20px;
      font-size: 18px;
    }
    .title2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .default-address {
      width: 520px;
      height: 106px;
      border: 1px solid rgb(21, 44, 43);
      padding: 18px;
      .name1 {
        font-size: 20px;
      }
      .address,
      .phone {
        font-size: 16px;
        line-height: 18px;
      }

      .default {
        line-height: 68px;
        font-size: 16px;
        color: rgb(153, 153, 153);
      }
    }
  }
  .right {
    padding-left: 60px;
  }
}
.invoice::v-deep {
  .el-radio__input {
    display: none;
  }
}
input {
  border: 1px solid rgb(153, 153, 153);
  padding-left: 20px;
  font-size: 18px;
}
.item {
  display: block;
  width: 520px;
  height: 43px;
  margin: 20px 0 !important;
  border-radius: 0;
  outline: none;
  color: rgb(153, 153, 153);
}
.item::v-deep {
  .el-cascader {
    height: 43px;
    margin: 20px 0;
  }
  .el-input__inner {
    border: none;
    height: 40px;
    padding-left: 18px;
    font-size: 18px;
    &:focus {
      border: none;
    }
  }
  .el-input {
    border: 1px solid rgb(153, 153, 153);
    height: 43px;
    line-height: 36px;
  }
  .el-input__icon {
    height: auto;
  }
}

.name {
  width: 520px;
  margin: 20px 0;
  font-size: 18px;
  .firstname,
  .lastname {
    height: 43px;
    width: 248px;
    outline: none;
    padding-left: 20px;
  }
}
.radio {
  border: 1px solid rgb(153, 153, 153) !important;
  padding-left: 8px;
}
.radio::v-deep {
  .el-radio__label {
    font-size: 18px;
  }
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
</style>
<style lang="scss" >
// .el-popper {
//   margin: 0 !important;
// }
.el-cascader-node__label,
.el-icon-check,
.el-icon-arrow-right {
  color: rgb(153, 153, 153);
}
// .el-popper .popper__arrow,
// .el-popper .popper__arrow::after {
//   display: none;
// }
</style>




.矩形_25_拷贝_4 {
  border-width: 1px;
  border-color: rgb(21, 44, 43);
  border-style: solid;
  position: absolute;
  left: 464px;
  top: 413px;
  width: 518px;
  height: 41px;
  z-index: 23;
}

