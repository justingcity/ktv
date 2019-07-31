<template>
  <div class="container">
    <i class="iconfont icon-404"></i>
    <h3>页面走丢了~~~</h3>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "error",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$parent.title = "404";
  }
};
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  color: #999;
}
</style>