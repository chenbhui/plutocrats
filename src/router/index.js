import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/editPage',
    name: 'editPage',
    component: () => import('../views/EditPage')
  },
  {
    path: '/home',
    name: 'home',
    meta: { show: true },
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register')
  },
  {
    path: '/myproject',
    name: 'myproject',
    meta: { show: true },
    component: () => import('../views/MyProject')
  },
  {
    path: '/community',
    name: 'community',
    meta: { show: true },
    component: () => import('../views/Community')
  },
  {
    path: '*',
    redirect: '/home',
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
