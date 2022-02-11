import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"
import DetailWork from "@/views/single-work.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/trabajo/:author_id/:id",
        name: "DetailWork",
        component: DetailWork,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router