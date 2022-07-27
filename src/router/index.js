import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Editor')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/myproject',
    name: 'myproject',
    component: () => import('../views/MyProject')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community')
  },
  {
    path:'*',
    redirect:'/home',
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
