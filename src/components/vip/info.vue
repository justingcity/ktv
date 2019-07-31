<template>
  <div class="container">
    <div class="card">
      <img src="../../assets/vip.jpg" />
      <div class="cardNum">No：{{ cardNum }}</div>
    </div>
    <div class="title">您的会员卡积分</div>
    <div class="point">1235</div>
    <div class="list">
      <div @click="openUserInfo">
        <mt-cell title="个人资料" is-link></mt-cell>
      </div>
      <div @click="openPointsDetail">
        <mt-cell title="积分明细" is-link></mt-cell>
      </div>
    </div>
    <mt-popup class="userinfo" v-model="userInfoPopup" position="bottom">
      <div class="avatar"></div>
      <div class="nickname">用户名</div>
    </mt-popup>
    <mt-popup class="points" v-model="pointsDetailPopup" position="left">
      <div class="scroll">1231232</div>
    </mt-popup>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "info",
  data() {
    return {
      pointsDetailPopup: false,
      userInfoPopup: false,
      cardNum: "00000002"
    };
  },
  components: {},
  methods: {
    openUserInfo: function() {
      console.log(123);
      this.userInfoPopup = true;
    },
    openPointsDetail: function() {
      console.log(345);
      this.pointsDetailPopup = true;
    }
  },
  created() {
    this.$parent.title = "我的会员卡";
    // {
    //   //获取会员卡信息接口
    // }
  },
  watch: {
    "$router.path": function(oldVal, newVal) {
      console.log("oldVal:" + oldVal);
      console.log("newVal:" + newVal);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  .card {
    text-align: center;
    position: relative;
    img {
      width: 90%;
      box-shadow: 1px 1px 5px 0 #999;
      border-radius: 10px;
    }
    .cardNum {
      color: #fff;
      position: absolute;
      z-index: 1;
      bottom: 20px;
      right: 30px;
      font-size: 19px;
    }
  }
  .title {
    text-align: center;
    margin-top: 30px;
    color: #353535;
  }
  .point {
    text-align: center;
    font-size: 30px;
    color: #cd853f;
    font-weight: 700;
  }
  .list {
    margin-top: 30px;
    .mint-cell-title {
      text-align: left;
    }
  }
  .userinfo {
    width: 100%;
    height: 250px;
    text-align: center;
    .avatar {
      background-color: #f5f5f5;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      margin: 20px auto 20px auto;
    }
  }
  .points {
    width: 70%;
    height: 100%;
    .scroll {
      height: 1000px;
      overflow-y: scroll;
    }
  }
}
</style>