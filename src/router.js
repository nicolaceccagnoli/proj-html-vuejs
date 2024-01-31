// Qui dentro ci scriviamo la configurazione di vue router
// che servirà per far sì che l'utente possa 'navigare' tra le nostre pagine

import { createRouter, createWebHistory } from "vue-router"; 

import HomePage from './pages/HomePage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import ShopPage from './pages/ShopPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesPage
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopPage
        }
    ]
});

export { router };