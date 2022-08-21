import Vue from 'vue'
import Vuex from 'vuex'

import favourites from './modules/favourites'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    favourites,
  },
})
