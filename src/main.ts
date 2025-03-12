import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import EN from '@/locale/en.json'
import ID from '@/locale/id.json'

const pinia = createPinia();

const i18n = createI18n({
    locale: localStorage.getItem("language") || "en",
    messages: {
        'en': EN,
        'id': ID
    }
})

const app = createApp(App);
app
    .use(i18n)
    .use(pinia)
    .use(router)
    .mount('#app')
