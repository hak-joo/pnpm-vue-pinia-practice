import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Main/index.vue')
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import ('@/views/Menu/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;