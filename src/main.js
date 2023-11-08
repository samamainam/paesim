import './assets/main.css'
import router from '../Router/Router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router) // Add the router to the Vue application
app.mount('#app') // Mount the app to the DOM