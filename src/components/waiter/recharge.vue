<template>
  <div class="container">
    <mt-field label="卡号" placeholder="请输入卡号" v-model="username"></mt-field>
    <mt-field label="金额" placeholder="请输入金额" v-model="phone"></mt-field>
    <mt-field label="包厢" placeholder="请输入包厢" v-model="room"></mt-field>
    <mt-button class="btn" type="primary" size="large" @click="submit">提交</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  name: "recharge",
  data() {
    return {
      username: "",
      phone: "",
      room: ""
    };
  },
  components: {},
  created() {},
  methods: {
    submit: function() {
      if (
        this.username.length == 0 ||
        this.phone.length == 0 ||
        this.room.length == 0
      ) {
        Toast({
          message: "信息填写不完整",
          iconClass: "iconfont icon-shibai",
          duration: 1000
        });
        return;
      }
      Indicator.open("提交中...");
      {
        //积分充值接口
      }
      setTimeout(() => {
        Indicator.close();
        Toast({
          message: "充值成功",
          iconClass: "iconfont icon-chenggong",
          duration: 1000
        });
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  .btn {
    margin: 30px auto 0 auto;
    width: 84%;
  }
}
</style>