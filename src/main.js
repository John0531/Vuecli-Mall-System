import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'
import { currency } from './methods/filters.js'

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency
}// ?自訂全域屬性
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)// ?使用全域註冊Loading元件
app.mount('#app')
