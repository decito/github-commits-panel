import { createApp } from 'vue'
import { Layout } from 'ant-design-vue'
import router from './router'

import 'ant-design-vue/dist/antd.css'

import App from './App.vue'

const app = createApp(App)

app.use(Layout)
app.use(router)
app.mount('#app')
