import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'


Vue.use(VueRouter)

const routes = [
    {
        path: '/editPage',
        name: 'editPage',
        component: () => import('../views/EditPage'),
    },
    {
        path: '/home',
        name: 'home',
        meta: {show: true},
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
        meta: {show: true},
        component: () => import('../views/MyProject')
    },
    {
        path: '/community',
        name: 'community',
        meta: {show: true},
        component: () => import('../views/Community')
    },
    {
        path: '/more',
        name: 'more',
        meta: {show: true},
        component: () => import('../views/More')
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

router.beforeEach((to, from, next) => {
    

    let token = JSON.parse(localStorage.getItem("UserInfo"))
    console.log(token)
    console.log(to.path);
    const nologin = localStorage.getItem('nologin');
    console.log('nologin',nologin);

    if (to.path === '/myproject' || to.path === '/community') {
        console.log("我我哦我");
        if (token==null||nologin!=null) {
            console.log("你你你");
            alert('您没有访问权限，请登录后访问')
            next({
                path: '/login'
            })
        } else {
            return next()
        }
    } else {
        return next()
    }

})


export default router
