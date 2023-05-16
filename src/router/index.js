import Vue from 'vue'
import VueRouter from 'vue-router'
import useAutoRouter from './auto-router'

Vue.use(VueRouter)

// 默认indexTop = /数量 + 1
const routes = [
    {
        path: '/',
        redirect: '/main/home'
    }
]

const router = new VueRouter({
    routes
})

useAutoRouter(router)

export default router
