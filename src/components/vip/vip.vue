<template>
  <div class="container">
    <div v-if="error">错误</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      error: false
    };
  },
  components: {},
  created() {
    this.$parent.title = "登录";
    let code = this.$route.query.code ? this.$route.query.code : "";
    if (code) {
      this.$axios({
        url: this.Config.reqUrl + "getOpenid",
        method: "GET",
        params: {
          code: code
        }
      })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.$router.push("/vip/receive"); //跳转到领取会员卡
            //this.$router.push("/vip/info"); //跳转到会员卡信息
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.$router.push("/404");
    }
  }
};
</script>

<style scoped lang="scss">
</style>
