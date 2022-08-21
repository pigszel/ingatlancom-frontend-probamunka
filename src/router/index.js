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
    path: '/kedvencek',
    name: 'favourites',
    component: () =>
      import(
        /* webpackChunkName: "favourites" */ '../views/FavouritesView.vue'
      ),
  },
  {
    path: '/hirdetes/:adId',
    name: 'adDetails',
    component: () =>
      import(/* webpackChunkName: "adDetails" */ '../views/AdDetailsView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
})

export default router
