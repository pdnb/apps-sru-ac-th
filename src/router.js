import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/car-available',
      name: 'car-available',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "car-available" */ './views/CarAvailable.vue')
    },
    {
      path: '/room-available',
      name: 'room-available',
      component: () => import(/* webpackChunkName: "room-available" */ './views/RoomAvailable.vue')
    },
    {
      path: '/car-timeline',
      name: 'car-timeline',
      component: () => import(/* webpackChunkName: "car-timeline" */ './views/CarTimeline.vue')
    }
  ]
})
