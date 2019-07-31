import VueRouter from 'vue-router';
import error from '../components/404/404.vue';
import Vue from 'vue';
import Vip from '../components/vip/vip.vue'
import Waiter from '../components/waiter/waiter.vue'
import VipReceive from '../components/vip/receive.vue'
import VipInfo from '../components/vip/info.vue'
import WaiterRegister from '../components/waiter/register.vue'
import WaiterRecharge from '../components/waiter/recharge.vue'

Vue.use(VueRouter)
const routes = [

  {
    path: '/vip',
    component: Vip,
    meta: {
      title: '登录',
      type: ''
    }
  }, {
    path: '/waiter',
    component: Waiter,
    meta: {
      title: '登录',
      type: ''
    }
  }, {
    path: '/vip/receive',
    component: VipReceive,
    meta: {
      title: '领取会员卡',
      type: 'login'
    }
  }, {
    path: '/vip/info',
    component: VipInfo,
    meta: {
      title: '会员卡信息',
      type: 'login'
    }
  }, {
    path: '/waiter/register',
    component: WaiterRegister,
    meta: {
      title: '员工注册',
      type: 'login'
    }
  }, {
    path: '/waiter/recharge',
    component: WaiterRecharge,
    meta: {
      title: '积分充值',
      type: 'login'
    }
  }, {
    path: '*',
    component: error,
    meta: {
      title: '页面走丢了',
      type: ''
    }
  }]
const router = new VueRouter({
  mode: 'history',
  routes
})



export default router