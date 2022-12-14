import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Main/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;