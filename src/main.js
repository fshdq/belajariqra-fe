import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
// import DefaultLayout from './layouts/DefaultLayout.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// app.component('default-layout', DefaultLayout)
app.use(router)
app.mount('#app')
