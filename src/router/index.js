import VueRouter from 'vue-router'
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    // 欢迎
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../components/Welcome'),
        meta: {
            noNav: false,
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router