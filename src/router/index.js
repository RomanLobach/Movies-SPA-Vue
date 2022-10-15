import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:movieId',
    name: 'details',
    component: () => import('../views/DetailsView.vue')
  },
  {
    path: '/search/:query',
    name: 'searchResults',
    component: () => import('../views/SearchResultsView.vue')
  },
  {
    path: '/*',
    name: 'error',
    component: () => import('../views/ErrorView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
