import { createApp } from 'vue'
import App from './App.vue'
import './assets/src/style.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueCookies from 'vue-cookies'


export const eventBus = createApp(App);

const app = createApp(App).use(router).use(AOS).use(VueCookies);

app.mount('#app');
