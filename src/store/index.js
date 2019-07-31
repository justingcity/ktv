import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    vipLogin: false,
    waiter: false
  },
  mutations: {
    vipLogin() {
      state.vipLogin = true
    }
  }
})

export default store