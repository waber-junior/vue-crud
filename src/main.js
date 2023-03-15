import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ENDPOINTS_GROUP } from "./constants/endpoints.js"

const app = createApp(App)

app.use(router, app)
app.mixin(ENDPOINTS_GROUP)
app.mount('#app')
