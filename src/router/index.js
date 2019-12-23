import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/bar/1-n',
        name: '1-n',
        component: () => import('../views/bar/1-n.vue')
    },
    {
        path: '/line/linear',
        name: 'line-linear',
        component: () => import('../views/line/linear.vue')
    },
    {
        path: '/bar/bar-line',
        name: 'bar-line',
        component: () => import('../views/bar/bar-line.vue')
    },
    {
        path: '/line/normal',
        name: 'line-normal',
        component: () => import('../views/line/normal.vue')
    },
    {
        path: '/pie/normal',
        name: 'normal',
        component: () => import('../views/pie/normal.vue')
    },
    {
        path: '/bar/normal',
        name: 'normal',
        component: () => import('../views/bar/normal')
    },
    {
        path: '/map/shanghai',
        name: 'map-shanghai',
        component: () => import('../views/map/shanghai')
    },
]

const router = new VueRouter({
    routes
})

export default router
