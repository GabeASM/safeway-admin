import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UsuariosView from "@/views/UsuariosView.vue";
import EventosView from "@/views/EventosView.vue";



export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/usuarios',
            component: UsuariosView,
        },
        {
            path: '/eventos',
            component: EventosView,
        },
        
    ],
})
