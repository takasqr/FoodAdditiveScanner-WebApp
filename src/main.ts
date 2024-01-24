import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'

import App from './App.vue'
import router from './router'

// firebase
import './firebase.js'
const app = createApp(App)

app.use(createHead())
app.use(createPinia())
app.use(router)

app.mount('#app')
