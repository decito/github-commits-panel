import { createApp } from 'vue'
import { Layout } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

import App from './App.vue'

const app = createApp(App)

app.use(Layout)
app.mount('#app')
