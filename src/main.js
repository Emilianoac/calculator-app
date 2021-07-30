import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/scss/main.scss'
import store from './store'

createApp(App).use(store).mount('#app')
