import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import './iconfont/iconfont.css'
import installTcons from './icons/index.js'
const app = createApp(App)
installTcons(app)
app.use(ElementPlus).use(store).use(router).mount('#app')
