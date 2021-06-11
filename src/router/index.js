import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AccommodationTypes from '../components/AccommodationTypes.vue'
import DrinksList from '../components/DrinksList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Accommodation' },
    children: [
      {
        path: '/accommodation',
        name: 'Accommodation',
        component: AccommodationTypes
      },
      {
        path: '/drinks',
        name: 'Drinks',
        component: DrinksList
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
