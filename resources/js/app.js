require('./bootstrap');

window.Vue = require('vue');

// import dependecies tambahan
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueRouter,VueAxios,Axios);

// import file yang dibuat tadi
import App from './components/App.vue';
import HomePage from './components/Home/HomePage.vue';
import AboutPage from './components/Home/AboutPage.vue';
import ContactPage from './components/Home/ContactPage.vue';

// membuat router
const routes = [
    {
        name: 'home-page',
        path: '/',
        component: HomePage
    },
    {
        name: 'about-page',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'contact-page',
        path: '/contact',
        component: ContactPage
    },
]

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");
