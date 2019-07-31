<template>
  <div class="container">
    <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" v-model="phone"></mt-field>
    <mt-button class="btn" type="primary" size="large" @click="register">注册</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  name: "register",
  data() {
    return {
      username: "",
      phone: ""
    };
  },
  components: {},
  created() {},
  methods: {
    register: function() {
      let that = this;
      console.log(this.username);
      console.log(this.phone);
      if (this.username) {
      }
      Indicator.open("注册中...");
      setTimeout(() => {
        Indicator.close();
        Toast({
          message: "注册成功",
          iconClass: "iconfont icon-chenggong",
          duration: 2000
        });
      }, 1000);
      setTimeout(() => {
        that.$router.push("/waiter/recharge");
      }, 3000);
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