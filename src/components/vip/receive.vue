<template>
  <div class="container">
    <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field> -->

    <img src="../../assets/vip.jpg" />

    <mt-button class="btn" size="large" type="primary" @click="receiveVipCard">领取</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  name: "receive",
  data() {
    return {};
  },
  components: {},
  methods: {
    receiveVipCard: function() {
      let that = this;
      Indicator.open("领取中...");
      {
        //领取会员卡接口
      }
      setTimeout(() => {
        Indicator.close();
        Toast({
          message: "领取成功",
          iconClass: "iconfont icon-chenggong",
          duration: 2000
        });
      }, 1000);
      setTimeout(() => {
        that.$router.push("/vip/info");
      }, 3000);
    }
  },
  created() {
    this.$parent.title = "领取会员卡";
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 90%;
    box-shadow: 1px 1px 5px 0 #999;
    border-radius: 10px;
  }
  .btn {
    margin-top: 50px;
    width: 84%;
  }
}
</style>