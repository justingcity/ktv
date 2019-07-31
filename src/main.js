import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'mint-ui/lib/style.css';
import './style/iconfont/iconfont.css';
import Config from './config.js';
import axios from 'axios';
import store from './store/index.js';
//mint-ui组件引入
import { Button } from 'mint-ui';
import { Field } from 'mint-ui';
import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Popup } from 'mint-ui';

//mint-ui组件使用
Vue.component(Header.name, Header);
Vue.component(Button.name, Button)
Vue.component(Field.name, Field);
Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);

Vue.config.productionTip = false
Vue.prototype.Config = Config
Vue.prototype.$axios = axios

// let title = ''
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   const type = to.meta.type
//   //判断该路由是否需要登录权限
//   if (type === 'login') {
//     if (window.localStorage.getItem('login')) {
//       next()
//     } else {
//       next('/vip')
//     }
//   } else {
//     next()  // 确保一定要有next()被调用
//   }
// })

new Vue({
  store,
  render: h => h(App),
  router: router

}).$mount('#app')