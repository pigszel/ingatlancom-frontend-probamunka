import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListView,
  },
  {
    path: '/hirdetes/:adId',
    name: 'adDetails',
    component: () =>
      import(/* webpackChunkName: "ad" */ '../views/AdDetailsView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
})

export default router
