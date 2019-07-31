<template>
  <div id="app">
    <mt-header style="z-index:999" class="header" fixed :title="title"></mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: ""
    };
  },
  components: {}
};
</script>

<style>
body {
  background-color: #f7f7f7;
  font-family: "mp-quote", -apple-system-font, BlinkMacSystemFont,
    "Helvetica Neue", "PingFang SC", "Hiragino SansGB", "Microsoft YaHei UI",
    "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: #222;
  margin: 0;
}

#app {
  margin-top: 60px;
}
.icon-chenggong:before,
.icon-shibai:before {
  font-size: 40px;
}
</style>