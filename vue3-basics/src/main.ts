import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// 10 - life - cycle - hooks
// setTimeout(() => app.unmount(), 5000)
