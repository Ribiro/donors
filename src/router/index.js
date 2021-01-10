import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import Register from "@/components/Register";
import Services from "@/components/Services";
import News from "@/components/News";
import Campaigns from "@/components/Campaigns";
import AboutUs from "@/components/AboutUs";
import Contacts from "@/components/Contacts";
import Home from "@/assets/views/Home";

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/campaigns',
        name: 'campaigns',
        component: Campaigns
    },
    {
        path: '/about us',
        name: 'about us',
        component: AboutUs
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresVisitor: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresVisitor: true
        }
    },
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router