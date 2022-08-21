import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CurrencyFilter from './filters/currency'
import PhoneNumberFilter from './filters/phoneNumber.js'

import { BootstrapVue } from 'bootstrap-vue'

import './styles/main.scss'

Vue.use(BootstrapVue)

Vue.filter('currency', CurrencyFilter)
Vue.filter('phoneNumber', PhoneNumberFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
